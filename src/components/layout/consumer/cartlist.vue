<!-- 장바구니 리스트 컴포넌트 -->
<template>
  <div>
    <v-card class="wrap">
      <div class="select"></div>
      <!-- 상품 이미지 -->
      <div class="image">
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
        <!-- 상품 제목 -->
        <span>{{ item.title }}</span>
        <span>{{ item.summary }}</span>
      </div>
      <div class="count">
        <div class="counter">
          <!-- 상품 갯수 -->
          <button v-on:click="amount <= 1 ? 0 : totalprice(--amount)">
            <v-icon size="16px" color="black">mdi-minus-thick</v-icon>
          </button>
          {{ amount }}
          <button v-on:click="totalprice(++amount)">
            <v-icon size="16px" color="black">mdi-plus-thick</v-icon>
          </button>
        </div>
      </div>
      <!-- 상품 총 가격 -->
      <div class="price">{{ (item.price * amount) | comma }}원</div>
      <div class="delete">
        <!-- 장바구니 상품 삭제 -->
        <v-icon
          v-on:click="$store.dispatch('cart/delete', item.id)"
          size="23px"
        >
          mdi-close
        </v-icon>
      </div>
    </v-card>
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
  width: 200px;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
}
.count {
  display: flex;
  align-items: center;
  width: 100px;
}

.counter {
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(189, 186, 186);
  border-radius: 5px;
  padding: 3px 12px 3px 12px;
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
