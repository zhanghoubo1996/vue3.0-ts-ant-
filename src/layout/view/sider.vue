<template>
  <div>
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="data.selectedKeyas"
      v-model:openKeys="data.openKeys"
      @select="onselect"
      @openChange="onchange"
      @click="onclick"
        >
      <template v-for="item in routers">
        <template v-if="!item.meta.hidden">
          <a-menu-item
            :key="item.path"
            v-if="!item.children"
            :title="item.meta && item.meta.title"
          >
            <router-link :to="{ path: item.path }">{{
              item.meta && item.meta.title
            }}</router-link>
          </a-menu-item>
          <template v-else>
            <Menu :nums="item" :key="item.path" />
          </template>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import Menu from "./component/menu.vue";
import { defineComponent, Events, reactive, ref } from "vue";
import { asyncRouterMap } from "@/config/config.router";
interface UserProps {
  domEvent?: MouseEvent;
  item?: object;
  key?: string;
  keyPath?: string[];
  selectedKeys?: string[];
}
export default defineComponent({
  name: "sider",
  components: {
    Menu,
  },
  setup() {
    const routers = asyncRouterMap[0].children;
    const select = localStorage.getItem("selectedKeys");
    const open = localStorage.getItem("openKeys");
    const data = reactive({
      selectedKeyas: select ? [select] : ["/"],
      openKeys: open ? open.split(",") : [],
    });
    const onselect = (e: object) => {
      let dt: UserProps = e;
      if (dt && dt.selectedKeys && dt.selectedKeys.length > 0) {
        data.selectedKeyas = dt.selectedKeys;
        localStorage.setItem("selectedKeys", data.selectedKeyas.toString());
      }
      if (dt && dt.item) {
        // console.log(data.openKeys)
        // console.log(dt.item,'ok')
      }
    };
    const onchange = (e: Event) => {
      console.log(e,'oka')
      localStorage.setItem("openKeys", e.toString());
    };
    const onclick = (e: Event) => {
      console.log(e);
    };

    return {
      data,
      onchange,
      routers,
      onselect,
      onclick,
    };
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>