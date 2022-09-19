<template>
  <div class="room__container">
    <RoomComponent :room="room" @contextmenu.prevent="toggleOption" />
    <div
      v-if="hasChildren"
      class="room__children__container"
      :style="childMargin"
    >
      <RecursiveComponent
        v-for="child in room.children"
        :key="child.id"
        :room="child"
        :margin="margin"
        @handleDeleteItem="handleDeleteItem"
      />
    </div>
    <OptionComponent :toggle="toggle" @onDeleteItem="onDeleteItem" />
  </div>
</template>

<script>
import OptionComponent from "./OptionComponent.vue";
import RoomComponent from "./RoomComponent.vue";
export default {
  name: "RecursiveComponent",
  props: {
    room: {
      type: Object,
      required: true,
    },
    margin: {
      type: Number,
      default: 25,
    },
  },
  components: {
    OptionComponent,
    RoomComponent,
  },
  data() {
    return {
      toggle: false,
    };
  },
  emits: ["handleDeleteItem", "onRemoveFromParent"],
  methods: {
    toggleOption() {
      this.toggle = !this.toggle;
    },
    onDeleteItem() {
      this.$store.dispatch("addRoomToList", this.room);
      this.$emit("handleDeleteItem", this.room.id);
    },
    onMinusLevel() {
      if (this.room.level > 1) {
        this.room.level--;
        if (this.room.children) {
          this.onMinusLevelChildren(this.room.children);
        }
        this.$emit("handleDeleteItem", this.room.id);
      }
    },
    onMinusLevelChildren(childrenArray) {
      childrenArray.forEach((item) => {
        if (item.level > 1) item.level--;
        if (item.children) this.onMinusLevelChildren(item.children);
      });
    },
    handleDeleteItem(id) {
      this.room.children.splice(
        this.room.children.findIndex((item) => item.id === id),
        1
      );
    },
  },
  computed: {
    hasChildren() {
      return this.room.children && this.room.children.length > 0;
    },
    childMargin() {
      return `margin-left: ${this.margin}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.room {
  &__children__container {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 14px;
    gap: 14px;
  }
  &__container {
    position: relative;
    &::before {
      content: "";
      height: calc(100% + 15px);
      border: 1px solid #dcdcdc;
      left: -10px;
      position: absolute;
      top: -15px;
    }
    &:last-child::before {
      content: "";
      height: 34px;
      border: 1px solid #dcdcdc;
      left: -10px;
      position: absolute;
      top: -15px;
    }
  }
  &__wrapper {
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      border: 1px solid #dcdcdc;
      left: -10px;
      top: 17px;
    }
  }
}
</style>
