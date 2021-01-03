<template>
  <div>
    <vxe-table :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column type="radio" width="60"></vxe-table-column>
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
      <vxe-table-column
        field="sex"
        title="Sex"
        :filters="[
          { value: '0', label: '女' },
          { value: '1', label: '男' },
        ]"
      ></vxe-table-column>
      <vxe-table-column
        field="sex2"
        title="Sex2"
        sortable
        :filters="[
          { value: '0', label: '女' },
          { value: '1', label: '男' },
        ]"
        :filter-multiple="false"
      ></vxe-table-column>
      <vxe-table-column
        field="address"
        title="Address"
        show-overflow
      ></vxe-table-column>
    </vxe-table>
      <vxe-pager
            perfect
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="page.totalResult"
            :page-sizes="[10, 20, 100, {label: '大量数据', value: 1000}, {label: '全量数据', value: -1}]"
            :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
            <template v-slot:left>
              <vxe-button size="small">
                <template v-slot>更多操作</template>
                <template v-slot:dropdowns>
                  <vxe-button type="text">批量修改</vxe-button>
                  <vxe-button type="text">批量管理</vxe-button>
                  <vxe-button type="text">批量删除</vxe-button>
                </template>
              </vxe-button>
            </template>
          
          </vxe-pager>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from "vue";
import {tabData} from './tabldata'
export default defineComponent({
  name: "workplace",
  components: {
    // HelloWorld,
  },
  setup() {
    const {data} =tabData()
    return {
      ...data
    }
  },
});
</script>


<style>
</style>