<template>
  <input
    :placeholder="placeholder"
    class="input-component"
    v-model="searchedKeyword"
    @input="filterRoom"
  />
</template>
<script>
export default {
  name: "InputComponent",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchedKeyword: "",
    };
  },
  methods: {
    filterRoom() {
      this.$emit("filterRoom", this.searchedKeyword);
    },
  },
};
</script>
<style lang="scss" scoped>
.input-component {
  outline: none;
  padding: 10px 0px 10px 23px;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #48647f;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #48647f;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #48647f;
}
</style>
