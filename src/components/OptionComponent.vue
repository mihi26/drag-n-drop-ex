<template>
  <div class="option" v-if="toggle">
    <div class="option__item" @click="deleteRoom">Xóa phòng ban</div>
    <div class="option__item" @click="addLevel">Nâng level</div>
    <div class="option__item" @click="minusLevel">Giảm level</div>
  </div>
</template>
<script>
export default {
  name: "OptionComponent",
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleOption() {
      this.$emit("toggleOption");
    },
    toggleModal() {
      this.toggleOption();
      this.$emit("toggleModal");
    },
    deleteRoom() {
      this.toggleOption();
      this.$emit("onDeleteItem");
    },
    addLevel() {
      this.toggleOption();
      this.$emit("onAddLevel");
    },
    minusLevel() {
      this.toggleOption();
      this.$emit("onMinusLevel");
    },
  },
};
</script>
<style lang="scss" scoped>
.option {
  z-index: 222;
  position: absolute;
  width: 150px;
  height: auto;
  color: #000000;
  border-radius: 4px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  top: 17px;
  right: -5px;
  &__item {
    font-size: 12px;
    line-height: 14px;
    width: 150px;
    height: 41.29px;
    display: flex;
    align-items: center;
    padding: 5px;
    &:first-child {
      border-radius: 4px 4px 0px 0px;
    }
    &:last-child {
      border-radius: 0px 0px 4px 4px;
    }
    &:hover {
      color: #ffffff;
      background-color: #48647f;
      cursor: pointer;
    }
  }
}
</style>
