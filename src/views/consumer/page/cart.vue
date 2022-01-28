<!-- 장바구니 -->
<template>
  <div class="wrap">
    <div class="title">
      <h1>장바구니</h1>
    </div>
    <div class="contents">
      <div class="product">
        <div>
          전체선택
          <hr />
        </div>
        <div class="list">
          <Productcart
            class="item"
            v-for="item in $store.state.cart.list"
            :key="item.title"
            :item="item"
          />
        </div>
      </div>
      <div class="summary-1">
        <div class="address">
          <span>현재 배송지</span>
          <span v-if="this.$store.state.user.user.address" class="addr">{{
            this.$store.state.user.user.address
          }}</span>
          <span v-else-if="this.$store.state.cart.address" class="addr">
            {{ this.$store.state.cart.address }}
          </span>
          <span v-else class="addr">배송지를 입력해 주세요.</span>
          <v-btn color="secondary" @click="$store.dispatch('cart/getaddress')">
            배송지 검색
          </v-btn>
        </div>
        <div class="summary-2">
          <div>
            <span>상품금액</span>
            <span>{{ $store.state.cart.sum }}원</span>
          </div>
          <div>
            <span>상품할인금액</span>
            <span>원</span>
          </div>
          <div>
            <span>배송비</span>
            <span>원</span>
          </div>
        </div>
        <div class="summary-3">
          <span>결제예정금액</span>{{ $store.state.cart.sum }}
          <span>원</span>
        </div>
        <div class="account">
          <v-btn width="300px" color="primary" to="/payment"> 결제하기 </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Productcart from "@/components/layout/consumer/cartlist.vue";
export default {
  components: {
    Productcart,
  },
  created() {
    console.log(this.$store.state.user.user.address);
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
}
.address {
  display: flex;
  flex-direction: column;
  padding: 15px 30px 15px 30px;
  padding-bottom: 20px;
  border: 1px solid rgb(207, 204, 204);
  height: 170px;
}
.addr {
  font-size: 16px;
  font-weight: 800;
  padding: 5px;
  margin-bottom: 10px;
}
.item {
  margin-top: 20px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 1200px;
}

.contents {
  display: flex;
  flex-wrap: wrap;
}

.product {
  width: 800px;
}

.summary-1 {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 23px 0 0 100px;
  height: 400px;
}
.summary-2 {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(219, 219, 219);
}
.summary-2 div {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px 15px 30px;
}
.summary-3 {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px 15px 30px;
  border: 1px solid rgb(219, 219, 219);
}
.account {
  height: 100px;
  margin-top: 10px;
}
.list {
  margin-bottom: 200px;
  min-height: 300px;
}
</style>
