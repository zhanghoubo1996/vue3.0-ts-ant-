<template>
  <div class="divtop">
      同步
        <a-dropdown>
            <img src="@/assets/timg.jpg" class="topimg" alt=""  @click="e => e.preventDefault()"/>
    <!-- <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Hover me</a> -->
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
         <div class="list">个人信息</div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="1">
         <div class="list listas">
           <span @click="islang('zh')">{{$t("txt_button.zh")}}</span>
           <span @click="islang('en')">{{$t("txt_button.en")}}</span>
          </div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
         <div class="list">{{$t("message.hello")}}</div>  
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref, watch } from 'vue';
import { useI18n} from 'vue-i18n'
export default defineComponent({
  setup(){
     const {locale,t} = useI18n({useScope:"global"});
    const data =reactive({
      data_locale:[
        {
          text:t("txt_button.zh"),
          value:'zh'
        },
        {
          text:t('txt_button.en'),
          value:'en'
        }
      ]
    })
    const islang=(value:string)=>{
       locale.value = value
    };
    return {
      ...data,
      islang,locale}
  }
});
</script>

<style lang="scss" scoped>

.divtop{
    height: 60px;
    background: #ffffff;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.topimg{
    height: 30px;
    width: 30px;
    border-radius:50%;
    cursor: pointer;
}
.list {
    font-size: 14px;
    padding: 0 5px;
    color: #333333;
    width: 80px;
}
.listas{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>