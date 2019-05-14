ShopTypeChart1<template>
  <div class="chart">
    <div ref="mychart"></div>
  </div>
</template>
<script>
// echarts相关
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/component/title");

export default {
  name: "ShopCountChart",
  props: ["yAxisName", "data"],
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
        xAxis: {
          name: "日期",
          type: "category",
          boundaryGap: false,
          data: this.data.keys
        },
        yAxis: {
          name: this.yAxisName,
          type: "value"
        },
        tooltip: {
          trigger: "item",
          formatter: `{b} <br/> ${this.yAxisName}:{c}`
        },
        series: [
          {
            data: this.data.values,
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              color: "#73166D"
            },
            areaStyle: {
              color: "rgba(213,168,255,0.08)"
            }
          }
        ],
        color: ["#73166D"]
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
