<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="p-0 m-0">
            
            <div class="h-100 mx-2">
                <b-img class="icon" :src='require("../assets/yin-yang.png")' fluid></b-img>
            </div>

            <b-navbar-brand href="/">ennn9</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" class="justify-content-end" is-nav>

                <b-navbar-nav class="mx-5" right>

                    <b-nav-item href="/" :active="this.$router.history.current.name=='Home'">{{$t("Home")}}</b-nav-item>
                    <b-nav-item href="#">{{$t("Products")}}</b-nav-item>
                    <b-nav-item href="#">{{$t("News")}}</b-nav-item>
                    <b-nav-item href="/contactus" :active="this.$router.history.current.name=='ContactUs'">{{$t("Contact Us")}}</b-nav-item>

                </b-navbar-nav>

                <b-navbar-nav class="mx-3">


                    <b-nav-item-dropdown :text="$t('Lang')" right>
                        <b-dropdown-item @click="changeLang('en')">EN</b-dropdown-item>
                        <b-dropdown-item @click="changeLang('tr')">TR</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-navbar-nav v-if="!this.$store.state.email" class="ml-auto">
                        <b-nav-item @click="$bvModal.show('modal')">{{$t("Login")}}</b-nav-item>
                    </b-navbar-nav>

                    <b-nav-item-dropdown v-else :text="this.$store.state.name" right>

                        <b-dropdown-item disabled>{{this.$store.state.email}}</b-dropdown-item>
                        <b-dropdown-item @click="userLogOut">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>

            <div>
                <b-modal id="modal" hide-footer>
                    <template #modal-title>
                        {{$t("Login")}}
                    </template>
                    <div class="d-block text-center">

                        <b-form-group
                        id="fieldset-1"
                        :label="$t('Name')"
                        label-for="inputmodal-1"
                        >
                            <b-form-input id="inputmodal-1" v-model="$v.modal.name.$model" type="text" trim required></b-form-input>
                            <p class="err" v-if="!$v.modal.name.required && $v.modal.name.$error">{{$t("Please fill out this field")}}</p>
                        </b-form-group>
                        
                        <b-form-group
                        id="fieldset-2"
                        :label="$t('Email')"
                        label-for="inputmodal-2"
                        >
                            <b-form-input id="inputmodal-2" v-model="$v.modal.email.$model" type="email" trim required></b-form-input>
                            <p class="err" v-if="!$v.modal.email.required && $v.modal.email.$error">{{$t("Please fill out this field")}}</p>
                            <p class="err" v-if="!$v.modal.email.email && $v.modal.email.$error">{{$t("Please enter a valid email address")}}</p>
                        </b-form-group>

                        <b-form-group
                        id="fieldset-3"
                        :label="$t('Password')"
                        label-for="inputmodal-3"
                        >
                            <b-form-input id="inputmodal-3" v-model="$v.modal.password.$model"  type="password" trim required></b-form-input>
                            <p class="err" v-if="!$v.modal.password.required && $v.modal.password.$error">{{$t("Please fill out this field")}}</p>
                        </b-form-group>

                        <b-button type="submit" variant="outline-primary" @click="userSignin">{{$t("Sign In")}}</b-button>             
                    </div>
                </b-modal>
            </div>

        </b-navbar>
    </div>
</template>

<script>
    import i18n from "../i18n"
    import { required, email } from "vuelidate/lib/validators"
    export default {
        data(){
            return{
                modal:{
                    name:null,
                    email:null,
                    password:null,
                }
            }
        },

    validations:{
        modal:{
            name:{
                required,
            },
            email:{
                required,
                email
            },
            password:{
                required
            }
        }
    },

        methods:{

            userSignin(){
                this.$v.$touch()
                if(!this.$v.$invalid){
                    this.$store.commit("setUser",this.modal)
                    this.$bvModal.hide('modal')
                }
            },

            userLogOut(){
                this.$store.commit("logout")
            },

            changeLang(lang){
                i18n.locale=lang
            }
        }
    }
</script>

<style scoped>

    .navbar{
        margin: 0;
        width: 100%;
        height: 50px;
    }

    .icon{
        overflow: hidden;
        height: 100%;
        width: 100%;
        padding: 3px;
    }

    .err{
        font-size: 10px;
        margin-top: 3px;
        padding-left: 13px;
        color:rgb(160, 0, 0);
        text-align: left;
    }

</style>