<template>
  <div id="particulars">
   
      <canvas id="canvas"></canvas>

  </div>
</template>
<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      msg: "hello vue",
      codes: ""
    };
  },



  methods: {
    useqrcode() {
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(
        canvas,
        "https://baidu.com",
        function(error) {
          if (error) console.error(error);
        }
      );
    }
  },

  mounted() {
    this.useqrcode();
  }
};
</script>
<style lang="scss" scoped>
</style>