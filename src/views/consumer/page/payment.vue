<!-- 결제 전 주문서 페이지 -->
<template>
  <div>
    <div>
      <div class="top-title">주문서</div>
    </div>
    <div>
      <div class="subheading">
        <span>주문상품</span>
        <v-icon
          v-if="showOrder"
          @click="showOrder = !showOrder"
          class="icon"
          middle
          >mdi-arrow-down</v-icon
        >
        <v-icon v-else class="icon" @click="showOrder = !showOrder" middle
          >mdi-arrow-up</v-icon
        >
      </div>
      <div v-if="!showOrder">
        <Productcart
          class="item"
          v-for="item in $store.state.cart.list"
          :key="item.title"
          :item="item"
        />
      </div>
      <div class="short-order" v-else-if="$store.state.cart.list[0]">
        현재&nbsp; <b>{{ $store.state.cart.list[0].title }}</b
        >&nbsp; 외 <b>{{ $store.state.cart.len - 1 }}</b> 개를 주문합니다.
      </div>
    </div>
    <div>
      <div class="subheading">주문자 정보</div>
      <div class="contents">
        <ul class="info-title">
          <li>보내는분</li>
          <li>핸드폰</li>
          <li>이메일</li>
        </ul>
        <ul class="info-content">
          <li v-if="$store.state.user.user.name">
            <input type="text" disabled :value="$store.state.user.user.name" />
          </li>
          <li v-else>
            <input type="text" placeholder="이름을 입력해 주세요" />
          </li>
          <li v-if="$store.state.user.user.phone">
            <input type="text" disabled :value="$store.state.user.user.phone" />
          </li>
          <li v-else>
            <input type="text" placeholder="번호를 입력해 주세요" />
          </li>
          <li v-if="$store.state.user.user.email">
            <input type="text" disabled :value="$store.state.user.user.email" />
          </li>
          <li v-else>
            <input type="text" placeholder="이메일을 입력해 주세요" />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="subheading">배송 정보</div>
      <div class="contents">
        <ul class="info-title">
          <li>배송지</li>
        </ul>
        <ul class="info-content">
          <li v-if="$store.state.user.user.name">
            <input
              class="adress"
              type="text"
              disabled
              :value="$store.state.user.user.address"
            />
          </li>
          <li v-else>
            <input
              class="adress"
              type="text"
              placeholder="배송지를 선택해 주세요"
              :value="$store.state.cart.address"
            />
            <v-btn
              class="ml-10"
              color="secondary"
              @click="$store.dispatch('cart/getaddress')"
            >
              배송지 검색
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="subheading">쿠폰 / 적립금</div>
    <div>
      <div class="subheading">결제 수단</div>
      <div class="contents">
        <ul class="info-title">
          <li>결제 수단</li>
        </ul>
        <ul class="info-content">
          <li class="kakao">
            <v-img
              src="@/assets/kakaopay.png"
              height="30"
              max-width="100"
            ></v-img>
          </li>
          <li class="account-nav">
            <div>결제수단</div>
            <div>결제수단</div>
            <div>결제수단</div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="subheading">개인정보 수집/제공</div>
    </div>
    <div class="account-btn">
      <v-btn>결제하기</v-btn>
    </div>
  </div>
</template>

<script>
import Productcart from "@/components/layout/consumer/paylist.vue";
export default {
  components: {
    Productcart,
  },
  data() {
    return {
      showOrder: true,
    };
  },
  mounted() {
    if (!this.$store.state.cart.list[0]) {
      alert("구매상품이 없습니다.");
      this.$router.push("/cart");
    }
  },
};
</script>

<style scoped>
.top-title {
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-weight: 700;
  margin-top: 20px;
}
.subheading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
  border-bottom: 1px solid black;
  margin-top: 50px;
}
.icon {
  cursor: pointer;
}
.contents {
  display: flex;
  flex-direction: row;
}
.contents > div:first-child {
  width: 195px;
  padding: 5px;
}
.contents > div:last-child {
}
.short-order {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
}
.info-title {
  width: 200px;
  font-size: 1em;
  font-weight: 700;
  margin-top: 5px;
}
.info-title > li {
  padding: 12px;
}
.info-content {
  margin-top: 5px;
  flex-grow: 8;
}

.info-content > li {
  padding: 7px;
}
.adress {
  font-size: 14px;
  width: 400px;
}
.kakao {
  width: 400px;
  display: flex;
  justify-content: center;
  background: #f7e600;
  cursor: pointer;
  border-radius: 5px;
}
.account-nav {
  width: 400px;
}
.account-nav > div {
  border: 1px solid gray;
  box-sizing: border-box;
  width: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px 10px 25px;
}
.account-btn {
  display: flex;
  justify-content: center;
  margin: 0px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
}
input {
  border: 1px solid rgb(0, 0, 0);
  padding: 5px;
  width: 200px;
  border-radius: 2px;
}
input:focus {
  outline: none;
}
b {
  color: rgb(148, 0, 0);
}
</style>
