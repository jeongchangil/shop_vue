<!-- 패키지 -->
<template>
  <div class="wrap">
    <div class="title">
      <h2>패키지</h2>
    </div>
    <div class="cook-category">
      <div
        class="cook-category-1"
        v-for="item in $store.state.recipe.category"
        :key="item.cate1"
        @mouseover="showcategory"
        @mouseleave="hidecategory"
      >
        <div
          @click="
            $store.dispatch('recipe/search', { cate0: item.cate1, cate1: 1 })
          "
        >
          {{ item.cate1 }}
        </div>
        <div
          class="item"
          v-if="iscate"
          @mouseover="showcategory2"
          @mouseleave="hidecategory2"
        >
          <div
            v-for="i in item.cate2"
            :key="i"
            class="cook-category-2"
            @click="
              $store.dispatch('recipe/search', { cate0: item.cate1, cate1: i })
            "
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
    <div class="itemList">
      <div
        v-for="item in $store.state.recipe.showList"
        :key="item.id"
        class="recipe"
        @click="$router.push({ name: 'Packagedetail', query: item })"
      >
        <Recipecard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Recipecard from "@/components/layout/consumer/recipecard.vue";
export default {
  components: {
    Recipecard,
  },
  data() {
    return {
      iscate: false,
      iscate2: false,
    };
  },
  methods: {
    showcategory() {
      this.iscate = true;
    },
    hidecategory() {
      this.iscate = false;
    },
    showcategory2() {
      this.iscate = true;
      this.iscate2 = true;
    },
    hidecategory2() {
      this.iscate = false;
      this.iscate2 = false;
    },
  },
  beforeMount() {
    this.$store.dispatch("recipe/search", null);
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
}
.title {
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0;
  width: 1200px;
}
.cook-category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid rgb(189, 189, 189);
}
.cook-category-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 239px;
  cursor: pointer;
  padding: 10px;
}
.cook-cate2 {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: white;
}
.cook-category-2 {
  padding: 5px;
  margin-top: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemList {
  display: flex;
  flex-wrap: wrap;
}

.recipe {
  margin: 20px 0 20px 0;
}
</style>
