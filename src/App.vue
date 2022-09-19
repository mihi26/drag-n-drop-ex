<template>
  <div class="app">
    <div class="wrapper">
      <WrapperComponent
        title="Danh sách phòng ban khả dụng"
        width="390px"
        height="394px"
      >
        <InputComponent
          placeholder="Tìm kiếm phòng ban"
          @filterRoom="filterRoom"
        />
        <RoomListComponent :roomList="filteredRoom" />
      </WrapperComponent>
      <WrapperComponent
        title="Cấu trúc phòng ban công ty"
        width="499px"
        height="394px"
      >
        <RecursiveComponent
          v-for="room in roomTree"
          :key="room.id"
          :room="room"
          @handleDeleteItem="handleDeleteItem"
        />
      </WrapperComponent>
    </div>
  </div>
</template>

<script>
import WrapperComponent from "./components/WrapperComponent.vue";
import InputComponent from "./components/InputComponent.vue";
import RoomListComponent from "./components/RoomListComponent.vue";
import RecursiveComponent from "./components/RecursiveComponent.vue";

export default {
  components: {
    WrapperComponent,
    InputComponent,
    RoomListComponent,
    RecursiveComponent,
  },
  data() {
    return {
      filteredRoom: this.$store.state.roomList,
    };
  },
  computed: {
    roomList() {
      return this.$store.state.roomList;
    },
    roomTree() {
      return this.$store.state.roomTree;
    },
  },
  methods: {
    filterRoom(keyword) {
      this.filteredRoom = this.roomList.filter((room) => {
        const concatString = room.code.concat(room.name);
        return concatString.toLowerCase().includes(keyword.toLowerCase());
      });
    },
    handleDeleteItem(id) {
      this.roomTree.splice(
        this.roomTree.findIndex((room) => room.id === id),
        1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  margin: 95px 0px;
}
.wrapper {
  display: flex;
  gap: 31px;
}
.tree-wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: auto;
}
</style>
