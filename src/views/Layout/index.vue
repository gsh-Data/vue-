<template>
    <div id="layout" :class="[zoom?'shrink':'open']">
        <LayoutNav/>
        <LayoutMain class="main"/>
        <LayoutHeader/>
    </div>
</template>
<script>
import LayoutNav from './Components/Nav'
import LayoutMain from './Components/Main'
import LayoutHeader from './Components/Header'
export default {
    name:"layout",
    data(){
        return{
          
        }
    },
    components:{
        LayoutNav,
        LayoutMain,
        LayoutHeader
    },
    computed:{
        zoom:function(){
            return this.$store.state.collapse
        }
    }
}
</script>
<style lang="scss">
    // #layout{
    //     overflow: auto;
    // }
    .main{
        padding: 20px;
    }
</style>