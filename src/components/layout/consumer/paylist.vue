<!-- 주문내역 상품 리스트 템플릿  -->
<template>
  <div>
    <div class="wrap">
      <div class="image">
        <!-- 상품 이미지  -->
        <v-img
          tag="a"
          v-on:click="routing"
          width="50px"
          height="80px"
          :src="item.url1"
        >
        </v-img>
      </div>
      <div class="product" v-on:click="routing">
        <!-- 상품 이름  -->
        <span>{{ item.title }}</span>
      </div>
      <div class="count">
        <!-- 상품 갯수  -->
        <div class="counter">{{ amount }}개</div>
      </div>
      <!-- 상품 가격  -->
      <div class="price">{{ (item.price * amount) | comma }}원</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      amount: this.item.count,
    };
  },
  created() {
    this.$store.dispatch("cart/totalprice", {
      count: this.amount,
      id: this.item.id,
    });
  },
  methods: {
    totalprice(val) {
      this.$store.dispatch("cart/totalprice", { count: val, id: this.item.id });
    },
    routing() {
      this.$router.push({ name: "Detail", query: this.item });
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(219, 218, 218);
}
.select {
  width: 50px;
}
.image {
  width: 80px;
  padding: 4px;
  cursor: pointer;
}
.product {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
}
.count {
  display: flex;
  align-items: center;
  width: 100px;
}

.price {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.delete {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100px;
}
</style>
