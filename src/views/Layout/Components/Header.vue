<template>
  <div id="header">
    <div class="header_Icon">
      <div class="Icon_left">
        <i class="el-icon-s-fold" @click="flexible"></i>
      </div>
      <div class="userinfo">
        <img src="../../../assets/img/touxiang.jpg" alt="" />
        <span>{{ userinfo }}</span>
        <i class="el-icon-switch-button"></i>
        <span>{{num}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { EvenBus } from "../../../utils/event-bus";
export default {
  name: "Header",
  data() {
    return {
      userinfo: "xxx",
      num: null,
    };
  },
  methods: {
    flexible() {
      this.$store.commit("collapseValue");
    },
  },
  
  mounted() {
    let selt=this
    EvenBus.$on("decreased", function (val) {
      selt.num+=val.num
    });
  },
};
</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  right: 0;
  left: 250px;
  height: 75px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  .header_Icon {
    font-size: 23px;
    display: flex;
    height: 100%;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-between;
    align-items: center;
    .Icon_left {
      float: left;
    }
    .userinfo {
      img {
        width: 30px;
        border-radius: 50%;
      }
      span {
        margin-right: 20px;
      }
    }
  }
}
.open {
  #header {
    left: 250px;
  }
}
.shrink {
  #header {
    left: 64px;
  }
}
</style>