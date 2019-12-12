<template>
  <div class="dialog-wrap" v-if="visible">
    <div class="dialog">
      <button class="btn-close" @click="dialogAction('close')"></button>
      <header class="header">{{title}}</header>
      <main class="content">{{content}}</main>
      <footer class="footer">
        <button class="btn btn-cancel" @click="dialogAction('cancel')">{{cancel}}</button>
        <button
          class="btn"
          :class="{ 'btn-confirm' :type == 'confirm','btn-delete' :type == 'del' }"
          @click="dialogAction(type)"
        >{{type == 'confirm' ? confirm : del }}</button>
      </footer>
    </div>
    <div class="backdrop" @click="dialogAction('close')"></div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      visible: false,
      title: "提示",
      content: "您确定要当前这个操作吗？",
      confirm: "确定",
      del: "删除",
      cancel: "取消",
      promiseStatus: null,
      type: "confirm"
    };
  },
  methods: {
    dialog() {
      let _this = this;
      this.visible = true;
      return new Promise(function(resolve, reject) {
        _this.promiseStatus = { resolve, reject };
      });
    },
    dialogAction(action) {
      this.visible = false;
      if (action == "confirm" || action == "del") {
        this.promiseStatus && this.promiseStatus.resolve();
      } else {
        this.promiseStatus && this.promiseStatus.reject();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
  }
  .dialog {
    position: absolute;
    width: 500px;
    background: #fff;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    overflow: hidden;
    .btn-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #f12304;
      display: inline-block;
      font-size: 0;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      &::before,
      &::after {
        content: "";
        width: 12px;
        height: 2px;
        overflow: hidden;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      .header,
      .content {
        text-align: center;
      }
      .header {
        font-size: 18px;
        padding: 20px;
      }
      .content {
        padding: 30px 0 50px;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        height: 58px;
        background: #fbfbfd;
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn {
        padding: 0 30px;
        height: 38px;
        border-radius: 6px;
      }
      & + .btn {
        margin-left: 10px;
      }
      &.btn-confirm {
        background: #6bc000;
        color: #fff;
      }
      &.btn-cancel {
        background: #ccc;
        color: #fff;
      }
      &.btn-delete {
        background: #ff6309;
        color: #fff;
      }
    }
  }
}
</style>
