<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{$t("hometext")}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted(){
    console.log(this.$router)
  }
}
</script>

<style scoped>
  .home{
    margin: 0;
    padding: 10%;
    height: 100%;
    min-height: 90vh;
  }
</style>
