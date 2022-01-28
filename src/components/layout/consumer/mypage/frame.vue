<!--마이페이지 메뉴 -->
<template>
  <v-card width="200" tile>
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-list-item v-for="n in navList" :key="n.key" :to="n.to">
          <v-list-item-content>
            <v-list-item-title v-text="n.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    navList: Array,
  },
};
</script>
