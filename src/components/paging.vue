<!--페이지 번호 생성 컴포넌트-->
<template>
  <div class="text-center wrap">
    <v-pagination
      v-model="page"
      :length="Length"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      :total-visible="10"
      v-on:input="$store.dispatch(path.name, page)"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    path: Object,
    Length: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch(this.path.name, this.page);
  },
  updated() {
    scrollTo(0, 0);
  },
};
</script>
<style scoped>
.wrap {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
