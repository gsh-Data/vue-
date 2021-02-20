<template>
  <div id="nav">
    <el-menu
      default-active="/consoleIndex"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      :collapse="$store.state.collapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fddd"
      :router="true"
    >
      <template v-for="(item,index) in routerData">
        <el-submenu :index="index+''" :key="index" v-if="!item.hidden">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <el-menu-item
            v-for="(sonItem,sonIndex) in item.children"
            :key="sonIndex"
            :index="sonItem.path"
          >{{sonItem.meta.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      isCollapse: false,
      routerData: [],
      openeds: ["2"]
    };
  },
  mounted() {
    this.routerData = this.$router.options.routes;
    // this.isCollapse = console.log(this.isCollapse);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#nav {
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  background: #344a5f;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
  .open {
    #nav {
      width: 250px;
    }
  }
  .shrink {
    #nav {
      width: 64px;
    }
  }
}
</style>