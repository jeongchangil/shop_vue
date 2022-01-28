<!--메인페이지 상품 리스트-->
<template>
  <v-sheet class="mx-auto mt-5" elevation="1" max-width="1200">
    <!--슬라이드 그룹-->
    <v-slide-group v-model="model" active-class="success" show-arrows>
      <!--슬라이드 그룹 안 컨텐츠-->
      <v-slide-item v-for="i in $store.state.consumer.list" :key="i.id">
        <v-card class="mt-6" height="946" width="279" elevation="0">
          <!--슬라이드 그룹 첫번째 행-->
          <v-row justify="center" align="center" class="ml-1">
            <v-col>
              <Product :item="i" />
            </v-col>
          </v-row>
          <!--슬라이드 그룹 두번째 행-->
          <v-row class="ml-1">
            <v-col>
              <Product :item="i" />
            </v-col>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import Product from "@/components/layout/consumer/productcard.vue";
export default {
  components: {
    Product,
  },
  data: () => ({
    model: null,
  }),
};
</script>

<style scoped>
.grouplist {
  box-sizing: border-box;
  margin-left: 9px;
}
</style>
