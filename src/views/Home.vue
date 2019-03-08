<template>
  <div class="home">
    <el-container>
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <div class="headerpic">
            <img src="@/img/recordHeader.png" alt>
          </div>
          <ul>
             <li v-for="(item,index) in route" :class="active==index?'active':'' " @click="userdata(index)" :key=index>
                <router-link :to="'/home/'+item.link+''"  >   
                <span>{{item.routeName}}</span>
              </router-link>
            </li>
          </ul>
        </el-aside>
        <el-main>
          
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  created() {
    this.$Cookies.set("name", "value", { expires: 7 });
    //   this.$axios.get("/api/educate/question/test").then(res => {
    //   this.aaaa = res.data.data.id;
    // });
  },
  data() {
    return {
      route:[
        {
          routeName:'仪表盘',
          link:'userdata',
          id:0
        },
        {
          routeName:'用户管理',
          link:'userinfo',
          id:1
        },
        {
          routeName:'内容管理',
          link:'usercontent',
          id:2
        }
      ],
      active: 0,
      currentView: "userdata"
    };
  },
  methods: {
    userdata(index) {
      this.active = index;
    },

  },
  mounted() {}
};
</script>
 <style lang="scss" scoped>

 a{
   text-decoration: none;
   width: 100%;
   height: 100%;
   display: block;
   color:#fff;
 }
.active {
  background-color: #333;
}
.tac {
  height: 100%;
}

.home {
  height: 100%;
}
.headerpic {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside li {
  line-height: 50px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
// .el-aside li:hover{

//   background-color: #333;

// }

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
}
.el-col-12 {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-container.is-vertical {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

