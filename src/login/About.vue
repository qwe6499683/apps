
<template>
  <div class="wrapper">
    <input type="text" placeholder="账号" v-model="account">
    <input type="password" placeholder="密码">
    <div @click="login" class="login">
      登录中..........
      我的吗啊 快来救我
      妈妈啊啊啊啊啊啊
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
export default {
  components:{},
  props:{},
  data(){
    return {
      account:'',
      password:'',
    }
  },
  methods:{
    login(){
      if(this.account =='123'){
        this.$Cookies.set('user', this.account, { expires: 7 });
        this.$router.push({
          name:'userdata'
        })
      }
    }
  },
  created(){
    console.log(1)
  },
}
</script>
<style lang="less" scoped>
.wrapper{
  width: 1000px;
  height: 500px;
  border: 1px solid #000;
}
.login{
  width: 100px;
  cursor: pointer;

}
</style>
