<!-- 홈 -->
<template>
  <v-container class="app">
    <v-row justify="center">
      <v-col xl="12" class="pa-0">
        <Advertise />
      </v-col>
    </v-row>
    <v-row justify="center">
      <div>
        <Prolist />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Advertise from "@/components/layout/consumer/ad.vue";
import Prolist from "@/components/layout/consumer/productgroup.vue";
export default {
  components: {
    Advertise,
    Prolist,
  },
};
</script>

<style scoped>
.app {
  min-width: 1200px;
}
</style>
