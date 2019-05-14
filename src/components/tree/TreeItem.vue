
<template>
  <li>
    <div class="title" :class="{active: isOpen}" @click="toggle">
      <div>
        <span v-if="isFolder">
          <i :class="item.class"></i>
          {{ item.name }}
        </span>
        <router-link v-else :to="item.link" exact-active-class="active">
          <i :class="item.class"></i>
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item class="item" v-for="(child, index) in item.children" :key="index" :item="child"></tree-item>
    </ul>
  </li>
</template>
<script>
import TreeItem from "../tree/TreeItem";
export default {
  name: "TreeItem",
  components: { TreeItem },
  props: {
    item: Object
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  border-top: 0 none;
  user-select: none;
  & + .item {
    border-top: 1px solid #f3f3ff;
  }

  & > ul .item {
    .title {
      &::after {
        border: 0 none;
      }
      &::before {
        border: 0 none;
      }
      & > div {
        font-weight: 400;
      }
    }
  }

  .title {
    width: 100%;
    height: 68px;
    line-height: 68px;
    position: relative;
    cursor: pointer;
    font-size: inherit;
    & > div {
      width: 100%;
      height: 100%;
      font-weight: 700;
      display: flex;
      align-items: center;
      color: inherit;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: inherit;
        padding: 10px;
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: inherit;
        padding: 10px;
        box-sizing: border-box;
        &.active,
        &:hover {
          background: #7d00a1;
          color: white;
        }
      }
    }
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      display: inline-block;
      font-size: 0;
      border-top: 1px solid #c3c3d4;
      border-right: 1px solid #c3c3d4;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translate(0, -50%) rotate(45deg);
    }
    i {
      font-size: 0;
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 10px;
      &.icon-menu-1 {
        background: url(../../assets/icon/icon-franchisee-management.png) center center no-repeat transparent;
        background-size: 100%;
      }
      &.icon-menu-2 {
        background: url(../../assets/icon/icon-group-card.png) center center no-repeat transparent;
        background-size: 100%;
      }
      &.icon-menu-3 {
        background: url(../../assets/icon/icon-statistical-analysis.png) center center no-repeat transparent;
        background-size: 100%;
      }
      &.icon-menu-4 {
        background: url(../../assets/icon/icon-account-management.png) center center no-repeat transparent;
        background-size: 100%;
      }
      &.icon-menu-5 {
        background: url(../../assets/icon/icon-mall.png) center center no-repeat transparent;
        background-size: 100%;
      }
    }
    &:hover,
    &.active {
      color: #7d00a1;
      i {
        &.icon-menu-1 {
          background: url(../../assets/icon/icon-franchisee-management-opt.png) center center no-repeat transparent;
          background-size: 100%;
        }
        &.icon-menu-2 {
          background: url(../../assets/icon/icon-group-card-opt.png) center center no-repeat transparent;
          background-size: 100%;
        }
        &.icon-menu-3 {
          background: url(../../assets/icon/icon-statistical-analysis-opt.png) center center no-repeat transparent;
          background-size: 100%;
        }
        &.icon-menu-4 {
          background: url(../../assets/icon/icon-account-management-opt.png) center center no-repeat transparent;
          background-size: 100%;
        }
        &.icon-menu-5 {
          background: url(../../assets/icon/icon-mall-opt.png) center center no-repeat transparent;
          background-size: 100%;
        }
      }
    }
    &.active {
      &::after {
        border-top: 1px solid #7d00a1;
        border-right: 1px solid #7d00a1;
        transform: translate(0, -50%) rotate(135deg);
      }
    }
  }
}
</style>
