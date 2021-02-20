<template>
    <div id="main-wrap">
        <router-view/>
    </div>
</template>
<script>
export default {
    name:"Main"
}
</script>
<style lang="scss" scoped>
    #main-wrap{
        position: fixed;
        left: 250px;
        top: 75px;
        right: 0;
        bottom: 0;
        border:30px solid #f7f7f7;
        border-bottom: none;
        -webkit-box-sizing: border;
        transition: 0.5s;
    }
    .open{
    #main-wrapr{
      left: 250px;
    }
  }
  .shrink{
    #main-wrap{
     left: 64px;
    }
  }
</style>