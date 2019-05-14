<template>
  <div class="chart">
    <div ref="mychart"></div>
  </div>
</template>
<script>
// echarts相关
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");

export default {
  name: "ShopTypeChart3",
  props: ["color", "data"],
  data() {
    return {};
  },
  mounted() {
    this.chart();
  },
  watch: {
    data: function() {
      this.chart();
    }
  },
  methods: {
    chart() {
      // 基于准备好的dom，初始化echarts实例
      let dom = this.$refs.mychart;
      let myChart = echarts.init(dom);
      // 绘制图表
      let option = {
        // title: {
        //   text: "新店/老店开户情况",
        //   left: "50%",
        //   textAlign: "center",
        //   bottom: "0",
        //   textStyle: {
        //     color: "#38333a",
        //     fontWeight: "400",
        //     fontSize: "16"
        //   }
        // },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br /> {c} "
        },
        color: this.color,
        series: [
          {
            name: "开店类型分析",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.data
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
  position: relative;
  div {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
