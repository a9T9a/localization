<template>
    <div>
        <br>
        <h2 class="w-50 mx-5">{{$t("Contact Us")}}</h2>
        <br>
        <b-form @submit="onSubmit" v-if="show" class="w-50 mx-5">
            <b-form-group id="input-group-1" :label="$t('Name')" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="$v.form.name.$model"
                :placeholder="$t('Enter name')"
                :state="$v.form.name.$error ? false : null"
                ></b-form-input>
                <p class="err" v-if="!$v.form.name.required && $v.form.name.$error">{{$t("Please fill out this field")}}</p>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                :label="$t('Email')"
                label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="$v.form.email.$model"
                :placeholder="$t('Enter email')"
                :state="$v.form.email.$error ? false : null"
                ></b-form-input>
                <p class="err" v-if="!$v.form.email.required && $v.form.email.$error">{{$t("Please fill out this field")}}</p>
                <p class="err" v-if="!$v.form.email.email && $v.form.email.$error">{{$t("Please enter a valid email address")}}</p>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                :label="$t('Phone')"
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="$v.form.phone.$model"
                :placeholder="$t('Enter phone number')"
                :state="$v.form.phone.$error ? false : null"
                ></b-form-input>
                <p class="err" v-if="!$v.form.phone.required && $v.form.phone.$error">{{$t("Please fill out this field")}}</p>
                <p class="err" v-if="!$v.form.phone.minLength && $v.form.phone.$error">{{$t("Please enter 10 number")}}</p>
                <p class="err" v-if="!$v.form.phone.maxLength && $v.form.phone.$error">{{$t("Please enter 10 number")}}</p>
            </b-form-group>

            <b-form-group id="input-group-4" :label="$t('Country')" label-for="input-4">
                <b-form-select
                id="input-4"
                v-model="$v.form.country.$model"
                :options="countrySelect"
                value-field="id"
                text-field="name"
                :state="$v.form.country.$error ? false : null"
                >
                    <template>
                        <b-form-select-option :value="null" disabled>{{$t("Select a country")}}</b-form-select-option>
                    </template>
                </b-form-select>
                <p class="err" v-if="!$v.form.country.required && $v.form.country.$error">{{$t("Please fill out this field")}}</p>
            </b-form-group>

            <b-form-group 
             id="input-group-5" 
             label-for="input-5"
             :label="$t('Message')"
            >
                <b-textarea 
                 id="input-5"
                 v-model="$v.form.message.$model"
                 rows="5"
                 max-rows="10"
                 :state="$v.form.message.$error ? false : null"
                >
                </b-textarea>
                <p class="err" v-if="!$v.form.message.required && $v.form.message.$error">{{$t("Please fill out this field")}}</p>
            </b-form-group>

        <b-button type="submit" variant="primary" class="mx-3">{{$t("Submit")}}</b-button>
        </b-form>
    </div>
</template>

<script>
  import i18n from "../i18n"
  import { required, minLength, maxLength, email, numeric } from "vuelidate/lib/validators"
  export default {
    data() {
      return {
        form: {
          email: null,
          name: null,
          phone: null,
          country: null,
          message: null
        },
        countryListEn: [
                { id:"TR", name:"Turkey" },
                { id:"US", name:"United States of America" },
                { id:"GB", name:"United Kingdom" },
                { id:"DE", name:"Germany" },
                { id:"SE", name:"Sweden" },
                { id:"KE", name:"Kenya" },
                { id:"BR", name:"Brazil" },
                { id:"ZW", name:"Zimbabwe" },
            ],
        countryListTr: [
                { id:"TR", name:"Türkiye" },
                { id:"US", name:"Amerika Birleşik Devletleri" },
                { id:"GB", name:"Birleşik Krallık" },
                { id:"DE", name:"Almanya" },
                { id:"SE", name:"İsveç" },
                { id:"KE", name:"Kenya" },
                { id:"BR", name:"Brezilya" },
                { id:"ZW", name:"Zimbabve" },
            ],
        show: true
      }
    },
    mounted(){
    console.log(this.$router)
  },

    validations:{
      form:{
        name:{
          required,
        },
        email:{
          required,
          email
        },
        phone:{
          required,
          maxLength: maxLength(10),
          minLength: minLength(10),
          numeric
        },
        country:{
          required
        },
        message:{
          required,
        }
      }
    },

    computed:{
      countrySelect(){
        if(i18n.locale=="en"){
          return this.countryListEn
        }else if(i18n.locale=="tr"){
          return this.countryListTr
        }else{
          return this.countryListEn
        }
      }
    },

    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$v.$touch()
        if(!this.$v.$invalid){
          console.log("form",JSON.stringify(this.form))
        }
      },
    }
  }
</script>

<style scoped>
  .err{
    font-size: 10px;
    margin-top: 3px;
    padding-left: 13px;
    color:rgb(160, 0, 0);
    text-align: left;
  }
</style>