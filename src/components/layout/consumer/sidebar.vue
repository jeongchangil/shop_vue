<!--따라다니는 사이드 바 -->
<template>
  <div>
    <!--따라다니는 사이드 바 구성-->
    <div v-for="nav in navList" :key="nav.id">
      <router-link :to="nav.to">
        <div class="navName">
          {{ nav.name }}
        </div>
      </router-link>
    </div>
    <a @click="scrollToTop"> 맨위로 </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { id: 1, name: "특가상품", to: "/" },
        { id: 2, name: "문의하기", to: "/" },
        { id: 3, name: "커뮤니티", to: "/community" },
        { id: 4, name: "고객센터", to: "/" },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.navName {
  color: black;
  font-size: small;
  padding: 4px;
  border: rgb(148, 139, 139) solid 0.5px;
}
</style>
