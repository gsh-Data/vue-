<template>
  <div id="formComponents">
    <el-table :data="tableData" border>
      <template v-for="(item, index) in headers">
        <el-table-column
          :key="index"
          :prop="item.field"
          :label="item.name"
          :width="item.width"
          :align="item.align"
          v-if="item.isHide"
        >
        </el-table-column>
      </template>
      <template>
        <el-table-column >
          <template >
            <el-button
              type="success"
              v-for="(item, indexs) in butTable"
              :key="indexs"
              @click.native.prevent="item.disabled(tableData[indexs])"
            >
              {{item.name}}
            </el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [
          {
            aParticularYear: String,
            compellation: String,
            age: String,
            site: String,
            sex: String,
          },
        ];
      },
    },
    headers: {
      type: Array,
      default: () => {
        return [
          {
            name: String,
            field: String,
            width: String,
            align: String,
            isHide: false,
          },
        ];
      },
    },
    butTable: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.tableData);
  },
  methods:{
      
  }
};
</script>