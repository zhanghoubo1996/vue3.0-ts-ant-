<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider>
        <si-der/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
          <hea-der/>
      </a-layout-header>
         <a-breadcrumb style="margin: 16px">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item> -->
          <!-- <a-breadcrumb-item>List</a-breadcrumb-item> -->
          <!-- <a-breadcrumb-item>App</a-breadcrumb-item> -->
        </a-breadcrumb>
      <a-layout-content
        :style="{ margin: '0px 16px 24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <cont-ent/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router'
import ContEnt from './view/content.vue'
import HeaDer from './view/header.vue'
import SiDer from './view/sider.vue'
import { asyncRouterMap } from "@/config/config.router";
export default defineComponent({
  name: 'index',
  components: {
      ContEnt,
      SiDer,
      HeaDer
  },
  setup(){
    const routers:RouteRecordRaw [] | undefined= asyncRouterMap[0].children;
    console.log(routers,'ok')
    const select = localStorage.getItem('selectedKeys');
    // console.log(select,'ok')
    const open =localStorage.getItem("openKeys");
    const data= open?open:[];
       

    // console.log(data,'ok')
    if(routers && routers.length>0 && data){
     let str; 
     routers.forEach(item=>{
      if(item.path==data){
        str=item
      }
     });
     console.log(str,'str');
    }
    
  }
});
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>