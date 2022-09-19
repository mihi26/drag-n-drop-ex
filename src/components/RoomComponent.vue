<template>
  <draggable>
    <template>
      <div class="room__wrapper">
        <div class="room__level">{{ room.level }}</div>
        <div class="room__info">
          <div class="room__info__code">{{ room.code }}</div>
          <div class="room__info__name">{{ room.name }}</div>
        </div>
      </div>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "RoomComponent",
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  components: {
    draggable,
  },
};
</script>
<style lang="scss" scoped>
.room {
  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
    background-color: #f0f0f0;
    border-radius: 4px;
    padding: 6px 7px;
    width: 100%;
  }

  &__level {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    background-color: #48647f;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
  }

  &__info {
    display: flex;
    flex: 1;
    align-items: center;
    font-weight: 400;
    color: #666666;
    gap: 5px;
    &__code {
      width: 85px;
      font-size: 12px;
      line-height: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__name {
      font-size: 14px;
      line-height: 20px;
      flex: 2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
