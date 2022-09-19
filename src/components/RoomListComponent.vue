<template>
  <div class="room-container">
    <RoomComponent v-for="room in roomList" :room="room" :key="room.id" />
  </div>
</template>
<script>
import RoomComponent from "./RoomComponent.vue";
export default {
  name: "RoomListCompany",
  components: { RoomComponent },
  data() {
    return {};
  },
  props: {
    roomList: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.room-container {
  display: flex;
  flex-direction: column;
  gap: 13px;
  height: 302px;
  overflow: auto;
  padding-right: 9px;
}
</style>
