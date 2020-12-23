<template>
  <a-sub-menu 
   :key="nums.path"
   :title="nums.meta && nums.meta.title"
   >
    <template v-if="nums.children.length > 0">
      <template v-for="items in nums.children">
        <template v-if="!items.meta.hidden">
          <a-menu-item
            v-if="!items.children"
            :key="items.path"
            :title="items.meta && items.meta.title"
          >
            <router-link :to="{ path: items.path }">
              {{ items.meta && items.meta.title }}</router-link
            >
          </a-menu-item>
          <menu-list v-else :nums="items" :key="items.path"></menu-list>
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>

<script  lang="ts">
// import menuidex from "./index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuList",
  props: {
    nums: {
      types: Object,
      default: () => {},
    },
  },
  setup(props: Object) {
    // console.log(props, "ok");
  },
});
</script>

<style>
</style>