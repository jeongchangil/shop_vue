<!-- 자주하는 질문 게시판 템플릿  -->
<template>
  <div class="wrap">
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in list" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <div class="item-list">
            <div>{{ item.id }}</div>
            <div>{{ item.category }}</div>
            <div>{{ item.question }}</div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.answer }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.wrap {
  padding: 10px 0 5px 0;
}
.item-list {
  display: flex;
}
.item-list :nth-child(1) {
  width: 10%;
}
.item-list :nth-child(2) {
  width: 20%;
}
.item-list :nth-child(3) {
  width: 60%;
}
</style>
