<template>
  <div id="login">
    <FormComponents
      :tableData="tableData"
      :headers="headers"
      :butTable="butTable"
    ></FormComponents>
    <delay-button
      :plain="false"
      :size="'medium'"
      type="primary"
      title="加一"
      :buttonOnclick="() => addButtonOnclick()"
    />
    <delay-button
      :plain="false"
      :size="'medium'"
      type="primary"
      title="减一"
      :buttonOnclick="() => reduceButtonOnclick()"
    />
    <delay-button
      :plain="false"
      :size="'medium'"
      type="primary"
      title="延时减一"
      :buttonOnclick="() => ayncButtonOnclick()"
    />
    <el-input placeholder="请输出要更改的数值" v-model="nums"></el-input>
    <p>{{ conmut }}</p>
  </div>
</template>
<script>
import FormComponents from "../../components/formComponents.vue";
import { EvenBus } from "../../utils/event-bus";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    let self = this;
    return {
      tableData: [
        {
          aParticularYear: "2016-05-02",
          compellation: "王小虎",
          age: "18",
          site: "河南",
          sex: "男",
        },
        {
          aParticularYear: "2016-05-02",
          compellation: "王小虎",
          age: "18",
          site: "河南",
          sex: "男",
        },
      ],
      headers: [
        {
          name: "姓名",
          field: "compellation",
          width: "100",
          align: "center",
          isHide: true,
        },
        {
          name: "性别",
          field: "sex",
          width: "50",
          align: "center",
          isHide: false,
        },
        {
          name: "年龄",
          field: "age",
          width: "80",
          align: "center",
          isHide: true,
        },
        {
          name: "年份",
          field: "aParticularYear",
          width: "200",
          align: "center",
          isHide: false,
        },
        {
          name: "地址",
          field: "site",
          width: "300",
          align: "center",
          isHide: false,
        },
      ],
      butTable: [
        {
          name: "编辑",
          disabled: function compile(row) {
            self.compiles(row);
          },
        },
        {
          name: "删除",
          disabled: function del(row) {
            self.dels(row);
          },
        },
      ],
      num: null,
      nums: null,
    };
  },
  components: {
    FormComponents,
    // Header
  },
  computed: {
    ...mapState(["conmut"]),
  },
  methods: {
    ...mapMutations(["Add", "Reduce"]),
    ...mapActions(["ayncBut"]),
    // 修改
    compiles(row) {
      console.log(row);
    },
    // 删除
    dels(row) {
      console.log(row);
    },
    addButtonOnclick(val) {
      EvenBus.$emit("decreased", {
        num: this.num,
        deg: this.deg,
      });
      this.$store.commit("Add", this.nums);
    },
    reduceButtonOnclick() {
      this.Reduce();
    },
    ayncButtonOnclick() {
      this.ayncBut(1);
    },

    // 递归求和
    fun(arr) {
      let len = arr.length;
      if (len == 0) {
        return 0;
      } else if (len.length == 1) {
        return arr[0];
      } else {
        return arr[0] + this.fun(arr.slice(1));
      }
    },
    // 递归排序
    sorts(arr) {
      let cen = Math.floor(arr.length / 2);
      if (arr.length <= 1) return arr;
      let nueValue = arr.splice(cen, 1);
      let left = arr.filter((item) => item < nueValue);
      let right = arr.filter((item) => item > nueValue);
      return [...this.sorts(left), ...nueValue, ...this.sorts(right)];
    },
    // // 随机数
    // random(min, max) {
    //   return Math.floor(Math.random() * (max - min)) + min;
    // },
  },
  mounted() {
    let arr = [];
    let arrs = [];
    for (let i = 1; i < 100; i++) {
      arr.push(i);
      arrs.push(i);
    }
    console.log(this.sorts(arrs));
  },
};
</script>
<style lang="scss" scoped>
#login {
}
</style>