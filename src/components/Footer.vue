<template>
  <div id="footer">
      <p>{{$t('footertext')}}</p>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    #footer{
        box-sizing: border-box;
        margin: 0;
        margin-top: 25px;
        padding: 0;
        height: 160px;
        width: 100%;
        background-color: rgb(182, 182, 182);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        margin-block: auto;
        margin-inline: 30px;
    }

</style>