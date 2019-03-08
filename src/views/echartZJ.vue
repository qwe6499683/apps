<template>
  <div class="wrapper">
    <div id="bar" :style="{height:'600px',width:'100%'}" ref="echarts"></div>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
export default {
  components: {},
  props: ['msg'],
  data() {
    return {
      datasx: [
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "18:00",
        "19:00",
        "18:00",
        "19:00",
        "18:00",
        "19:00"
      ]
    };
  },

  methods: {
    selfAdaption() {
      const self = this;
      setTimeout(() => {
        window.addEventListener("resize", function() {
          self.chart = self.$echarts.init(self.$refs.echarts);
          self.chart.resize();
        });
      }, 10);
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var that = this;
      let myChart = this.$echarts.init(document.getElementById("bar"));
      // 绘制图表
      myChart.setOption({
          color: ["#ffcc84", "#1fa7dc"],
          xAxis: {
            type: "category",
            boundaryGap: true,
            data: that.datasx
          },
          grid: {
            top: "40px",
            left: "50px",
            right: "20px",
            bottom: "50px"
          },
          legend: {
            data: ["新增用户量", "活跃用户量"],
            x: "center",
            y: "bottom"
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "新增用户量",
              type: "line",
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "#ffcc84"
                  }
                }
              },
              data: that.msg[0].newdata
            },
            {
              name: "活跃用户量",
              type: "line",
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "#1fa7dc"
                  }
                }
              },
              data:  that.msg[0].hotdata
            }
          ]
        
      }
      
      
      );
    }
  },
  mounted() {
    this.drawLine();
    this.selfAdaption();
  },
  created() {
    console.log(this.msg);
  },
  watch: {
      msg(nowvalue,oldvalue){
          this.drawLine();
      }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>