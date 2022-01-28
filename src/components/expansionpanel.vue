<!-- 마이페이지 주문내역 리스트 템플릿 -->
<template>
  <v-expansion-panels class="expanels">
    <v-expansion-panel v-for="item in itemList" :key="item.title">
      <v-expansion-panel-header>
        <div class="panel">
          <div class="product">
            <div>
              {{ item.title }}
            </div>
            <div>{{ item.price }}원</div>
          </div>
          <div class="result">
            {{ item.status }}
          </div>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content> 주문 상세 내용 </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    itemList: Array,
  },
};
</script>

<style scoped>
.expanel {
  position: relative;
  z-index: 20;
}

.panel {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.product {
  display: flex;
  flex-direction: column;
  width: 500px;
}
.product div {
  padding: 8px;
}

.result {
  display: flex;
  align-items: center;
  width: 100px;
}
</style>
