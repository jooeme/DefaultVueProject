<template>
  <ul class="pagination" aria-label="Page navigation">
    <li>
      <select v-model.number="quantityPage">
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </li>
    <li>
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage" aria-label="Go to the first page">首页</button>
    </li>
    <li>
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage" aria-label="Previous">上一页</button>
    </li>
    <li v-for="page of pages" :key="page.name">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{active: isPageActive(page.name)}"
        :aria-label="`Go to page number ${page.name}`"
      >{{ page.name }}</button>
    </li>
    <li>
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Next">下一页</button>
    </li>
    <li>
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Go to the last page">末页</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quantityPage: 20 // 默认每页显示数
    };
  },
  watch: {
    quantityPage: function() {
      this.$emit("pagechanged", 1, this.quantityPage);
    },
    total: function() {
      // this.$emit("pagechanged", 1, this.quantityPage);
      if (this.currentPage > this.totalPages) {
        this.$emit("pagechanged", this.totalPages, this.quantityPage);
      }
    }
  },
  computed: {
    totalPages: function() {
      let totalpage = Math.ceil(this.total / this.quantityPage);
      if (!totalpage) {
        totalpage = 1;
      }
      return totalpage;
    },
    isInFirstPage: function() {
      return this.currentPage === 1;
    },
    isInLastPage: function() {
      return this.currentPage === this.totalPages;
    },
    startPage: function() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage: function() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages: function() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        if (i > 0) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
      }
      return range;
    }
  },
  methods: {
    onClickFirstPage: function() {
      this.$emit("pagechanged", 1, this.quantityPage);
    },
    onClickPreviousPage: function() {
      this.$emit("pagechanged", this.currentPage - 1, this.quantityPage);
    },
    onClickPage: function(page) {
      this.$emit("pagechanged", page, this.quantityPage);
    },
    onClickNextPage: function() {
      this.$emit("pagechanged", this.currentPage + 1, this.quantityPage);
    },
    onClickLastPage: function() {
      this.$emit("pagechanged", this.totalPages, this.quantityPage);
    },
    isPageActive: function(page) {
      return this.currentPage === page;
    }
  }
};
</script>
<style lang="stylus" scoped>
.pagination
  margin 0
  padding 0
  list-style none outside none
  display flex
  justify-content center
  align-items center
  li
    margin 0 4px
    padding 0
    list-style none outside none
    line-height 25px
  select
    height 30px
    font-size 14px
    appearance none
    padding 0 16px 0 10px
    background url('../../assets/icon/icon-pull-up-down.png') right 4px center no-repeat #e8e8f2
    background-size 8px
    border 0 none
    border-radius 6px
  button
    cursor pointer
    height 30px
    background #e8e8f2
    padding 0 15px
    border-radius 6px
    font-size 14px
    &:hover, &:active, &:focus, &.active
      text-decoration none
      background #7d00a1
      color #ffffff
    &:disabled
      color #ccc
      &:hover
        color #ccc
        background #e8e8f2
      &.active
        text-decoration none
        background #7d00a1
        color #ffffff
</style>
