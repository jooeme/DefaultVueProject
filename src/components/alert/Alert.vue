<!-- alert.vue -->
<template>
  <div class="alert">
    <div class="alert-main">
      <div class="alert-content" v-for="item in notices" :key="item.name">
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>
<script>
let seed = 0;

function getUuid() {
  return "alert_" + seed++;
}

export default {
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      const name = getUuid();

      let _notice = Object.assign(
        {
          name: name
        },
        notice
      );

      this.notices.push(_notice);

      // 定时移除，单位：秒
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove(name) {
      const notices = this.notices;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.alert
  position fixed
  background transparent
  width 100%
  height 100%
  top 0
  left 0
  right 0
  bottom 0
  pointer-events none
  display flex
  justify-content center
  align-items center
  flex-wrap wrap
  z-index 999
.alert-main
  display flex
  align-items center
  flex-wrap wrap
  z-index 999
.alert-content
  width 100%
  padding 5px 10px
  text-align center
  span
    display inline-block
    padding 10px 20px
    background rgba(0, 0, 0, 0.8)
    border-radius 8px
    /* box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2); */
    margin-bottom 8px
    color white
    font-size 16px
    text-align justify
    text-align-last left
</style>