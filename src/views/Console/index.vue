<template>
  <div>
    <!-- <svg-icon icon-class="console" /> -->
    <el-table :data="tableData" style="width: 100%" :cell-style="yellowBg">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="address1" label="地址"></el-table-column>
      <el-table-column prop="address2" label="地址"></el-table-column>
      <el-table-column prop="address3" label="地址"></el-table-column>
      <el-table-column prop="address4" label="地址"></el-table-column>
      <el-table-column prop="address5" label="地址"></el-table-column>
      <el-table-column prop="address6" label="地址"></el-table-column>
      <el-table-column prop="address7" label="地址"></el-table-column>
      <el-table-column prop="address8" label="地址"></el-table-column>
      <el-table-column prop="address9" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄1",
          address1: "上海市普陀区金沙江路 1518 弄2",
          address2: "上海市普陀区金沙江路 1518 弄3",
          address3: "上海市普陀区金沙江路 1518 弄4",
          address4: "上海市普陀区金沙江路 1518 弄5",
          address5: "上海市普陀区金沙江路 1518 弄7",
          address6: "上海市普陀区金沙江路 1518 弄8",
          address7: "上海市普陀区金沙江路 1518 弄9",
          address8: "上海市普陀区金沙江路 1518 弄0",
          address9: "上海市普陀区金沙江路 1518 弄11",
          address0: "上海市普陀区金沙江路 1518 弄12"
        },
        {
          date: "2016-05-04",
          name: "",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  methods:{
      yellowBg ({row, column, rowIndex, columnIndex}) {
      if (row.name === '' && columnIndex === 0) {
        return {
          background: '#eceb3c'
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>
</style>