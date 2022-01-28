<template>
  <!-- 패키지 상품 재료 선택 컴포넌트 -->
  <div id="wrap">
    <div class="box">
      <div class="item-list">
        <div class="item" v-for="(n, index) in list" :key="n">
          <v-checkbox
            :label="n"
            color="info"
            :value="n"
            v-model="test[index]"
            @change="test1"
          ></v-checkbox>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
    };
  },
  props: {
    list: Array,
    storepath: String,
  },
  methods: {
    test1() {
      this.$store.dispatch(this.storepath, this.test);
    },
  },
};
</script>

<style scoped>
#wrap {
  display: flex;
  justify-content: center;
  margin: 40px 0 10px 0;
}
.box {
  border: rgb(202, 199, 199) solid 1px;
  box-sizing: border-box;
  height: 100%;
  width: 1200px;
}

.item-list {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
}

.item {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 299px;
}
</style>
