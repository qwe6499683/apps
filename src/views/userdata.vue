<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">
        <div class="title">
          <span>仪表盘</span>
        </div>
        <div class="data">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in userdata" :key="index">
              <div class="grid-content bg-purple">
                <div>{{item.amount}}</div>
                <div>{{item.name}}</div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="echarts">
          <div class="title">
            <span>用户趋势</span>
            <el-select v-model="value" @change="changedata">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <echartZJ :msg="echartdata"></echartZJ>
        </div>
        <div>
          <div class="usercomponents"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用户数据" name="second">
        <div style="height:300px;background:#fff">
          <div style="padding:20px 20px">男生比重</div>
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据分析" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import echartZJ from "../views/echartZJ.vue";
export default {
  components: {
    echartZJ
  },
  data() {
    return {
      value5: 3.7,
      echartdata: [],
      options: [
        {
          value: "day",
          label: "最近一天",
          newdata: [10, 25, 30, 40, 50, 60, 70, 75, 80, 80, 90, 100],
          hotdata: [60, 70, 80, 90, 100, 100, 60, 70, 80, 90, 100, 100]
        },
        {
          value: "week",
          label: "最近一周",
          newdata: [100, 200, 300, 400, 90, 100, 50, 75, 80, 80, 90, 200],
          hotdata: [60, 70, 30, 20, 100, 300, 60, 70, 200, 90, 100, 200]
        },
        {
          value: "month",
          label: "最近一月",
          newdata: [1000,1500,80,80,4000,5000,300,10,80,20,3000,300],
          hotdata: [60, 70, 80, 90, 400, 100, 60, 70, 80, 700, 100, 300]
        }
      ],
      value: "最近一天",
      activeName: "first",
      userdata: [
        {
          name: "用户数",
          amount: "123123",
          id: 0
        },
        {
          name: "日增量",
          amount: "123456789",
          id: 1
        },
        {
          name: "周增量",
          amount: "123123",
          id: 2
        },
        {
          name: "月增量",
          amount: "123123",
          id: 3
        }
      ]
    };
  },
  methods: {
    handleClick(tab) {},

    changedata(e) {
      let options = this.options;
      for (let i in options) {
        if (e == options[i].value) {
          Vue.set(this.echartdata, 0, {
            hotdata: options[i].hotdata,
            newdata: options[i].newdata
          });
        }
      }
    }
  },
  created() {
    let _this = this;
    let optionss = this.options;

    Vue.set(this.echartdata, 0, {
      hotdata: optionss[0].hotdata,
      newdata: optionss[0].newdata
    });
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  background: #fff;
  padding: 10px 20px;
  margin-top: 20px;
}
.echarts .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  /deep/ .el-tabs__item {
    font-size: 16px;
  }
  /deep/ .bg-purple[data-v-632a398f] {
    background: #fff;
  }
  /deep/ .grid-content[data-v-632a398f] {
    padding: 10px 10px;
  }

  .title {
    color: #333;
    font-size: 18px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.data {
  margin-top: 20px;
}
</style>