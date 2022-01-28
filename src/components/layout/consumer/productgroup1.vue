<template>
  <v-sheet class="mx-auto" elevation="8" max-width="1200">
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item v-for="n in list" :key="n.title">
        <v-card class="mt-6" height="470" width="278" elevation="0">
          <!--슬라이드 그룹 첫번째 행-->
          <v-row justify="center" align="center" class="ml-1">
            <v-col>
              <ProductItem v-show="n !== null" :item="n" />
            </v-col>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ProductItem from "./productcard.vue";
export default {
  data: () => ({
    model: null,
  }),
  components: {
    ProductItem,
  },
  props: {
    list: Array,
  },
};
</script>
