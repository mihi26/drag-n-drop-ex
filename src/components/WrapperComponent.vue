<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WrapperComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      wrapperStyle: {
        width: this.width,
        height: this.height,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  line-height: 14px;
}
.wrapper {
  margin-top: 11px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 23px 14px 11px 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
}
</style>
