<template>
  <div>
    <div class="title">
      <span class="subtitle">FAQ</span>
      <span class="caption">자주하는 질문을 모두 모았습니다.</span>
    </div>
    <div>
      <FAQ :list="faqlist" />
    </div>
  </div>
</template>

<script>
import FAQ from "@/components/expansionfaq.vue";
export default {
  components: {
    FAQ,
  },
  data() {
    return {
      faqlist: this.$store.state.faq.list,
    };
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 6px;
}
.subtitle {
  font-size: 1.5em;
  font-weight: 700;
}
.caption {
  font-size: 1em;
  color: rgb(112, 110, 110);
  margin-left: 8px;
  font-weight: 700;
}
</style>
