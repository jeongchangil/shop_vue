<!--상품 상세 페이지-->
<template>
  <div class="wrap">
    <div class="product">
      <!--여기부터 상품 정보-->
      <div class="content">
        <!--상품 이미지-->
        <div>
          <v-img :src="$route.query.url1" width="450" height="500"></v-img>
        </div>
        <!--상품 이미지 옆 정보들-->
        <div class="test">
          <div class="title">
            <h2>{{ $route.query.title }}</h2>
          </div>
          <div class="summary">
            <h4>{{ $route.query.summary }}</h4>
          </div>
          <div class="price">
            {{ $route.query.price }}원
            <span class="discount">{{ $route.query.discount }}%</span>
          </div>
          <div class="beforeprice">
            <del>
              {{
                Math.round(
                  parseInt(
                    $route.query.price * (10 / (100 - $route.query.discount))
                  )
                ) * 10
              }}원
            </del>
          </div>
          <div class="firstetc">
            <div class="list">
              <span class="item">판매단위</span>{{ $route.query.unit }}
            </div>
            <div class="list">
              <span class="item">중량/용량</span>{{ $route.query.amount }}
            </div>
          </div>

          <div class="etc">
            <div class="list">
              <span class="item">배송구분</span>{{ $route.query.trans }}
            </div>
            <div class="list">
              <span class="item">포장타입</span>{{ $route.query.type }}
            </div>
          </div>

          <div class="etc">
            <div class="list">
              <span class="item">안내사항</span>{{ $route.query.info }}
            </div>
            <div class="list">
              <div class="item">구매수량</div>
              <div class="counter">
                <button v-on:click="amount < 2 ? 0 : --amount">
                  <v-icon size="16px" color="black">mdi-minus-thick</v-icon>
                </button>
                {{ amount }}
                <button v-on:click="++amount">
                  <v-icon size="16px" color="black">mdi-plus-thick</v-icon>
                </button>
              </div>
            </div>
          </div>
          <div class="totalPrice">
            <span>총 상품금액 :</span>
            {{ totalprice | comma }}
            <span>원</span>
          </div>
          <div class="cart">
            <v-btn
              depressed
              color="primary"
              width="380px"
              height="50px"
              v-on:click="$store.dispatch('cart/addcart', $route.query)"
            >
              <h4>장바구니 담기</h4>
            </v-btn>
          </div>
        </div>
      </div>
      <!--여기부터 상품 상세정보-->
      <div id="product-contents">
        <div class="product-contents-nav">
          <div
            v-for="item in navList"
            :key="item.name"
            @click="contentScroll(item.param)"
          >
            <div>
              {{ item.name }}
            </div>
          </div>
        </div>
        <div id="first-content">
          <v-img
            src="https://iws.danawa.com/prod_img/500000/544/131/desc/prod_5131544/add_2/20201230142328894_9FKUUT4Z.jpg"
          ></v-img>
        </div>
        <div id="second-content">
          <v-img
            src="https://img-cf.kurly.com/shop/data/goodsview/20210617/gv20000194020_1.jpg"
          ></v-img>
        </div>
        <div id="third-content">
          <span>Review</span>
          <Review :column="review" :itemList="itemList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Review from "@/components/table.vue";
export default {
  components: {
    Review,
  },
  data: () => ({
    amount: 1,
    navList: [
      { name: "상품설명", param: "#first-content" },
      { name: "상세정보", param: "#second-content" },
      { name: "후기", param: "#third-content" },
    ],
    review: ["번호", "제목", "작성자", "작성일", "조회"],
    itemList: [
      {
        no: 1,
        title: "이것은 리뷰 제목입니다.1",
        person: "홍길동",
        date: "2021-03-03",
        visit: 11,
      },
      {
        no: 2,
        title: "이것은 리뷰 제목입니다.2",
        person: "홍길동",
        date: "2021-03-03",
        visit: 22,
      },
      {
        no: 3,
        title: "이것은 리뷰 제목입니다.3",
        person: "홍길동",
        date: "2021-03-03",
        visit: 33,
      },
      {
        no: 4,
        title: "이것은 리뷰 제목입니다.4",
        person: "홍길동",
        date: "2021-03-03",
        visit: 44,
      },
    ],
  }),
  props: {},
  methods: {
    contentScroll(loc) {
      console.log(loc);
      const height =
        document.querySelector(loc).offsetTop -
        document.querySelector(".product-contents-nav").offsetHeight -
        123;
      window.scrollTo({ top: height, behavior: "smooth" });
    },
  },
  created() {
    this.totalprice = this.amount * this.$route.query.price;
  },
  beforeUpdate() {
    this.totalprice = this.amount * this.$route.query.price;
  },

  updated() {
    this.$route.query.count = this.amount;
  },
};
</script>

<style scoped>
* {
  outline: none;
}
.wrap {
  position: static;
  z-index: 1;
  width: 1200px;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.test {
  width: 700px;
}

.summary {
  color: rgb(110, 110, 110);
  margin-left: 1px;
  padding: 5px;
}

.price {
  font-size: 1.8em;
  padding: 1em 0 0 0.2em;
  font-weight: 600;
}
.discount {
  color: rgb(231, 57, 57);
}

.beforeprice {
  color: rgb(116, 113, 113);
  font-weight: 500;
  padding: 0.4em 0 0 0.5em;
}
.firstetc {
  padding: 0.4em 0 0 0.5em;
  border-top: 1px solid rgb(228, 225, 225);
  border-bottom: 1px solid rgb(228, 225, 225);
  margin-top: 20px;
}
.etc {
  padding: 0.4em 0 0 0.5em;
  border-bottom: 1px solid rgb(228, 225, 225);
}

.list {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
}

.item {
  display: inline-block;
  width: 200px;
}
.counter {
  display: flex;
  width: 100px;
  justify-content: space-between;
  border: 1px solid rgb(189, 186, 186);
  border-radius: 5px;
  padding: 3px 12px 3px 12px;
}
.totalPrice {
  display: flex;
  justify-content: flex-end;
  font-size: 33px;
  font-weight: 700;
  margin-top: 20px;
}

.totalPrice :first-child {
  display: flex;
  font-size: 13px;
  align-items: center;
  padding: 10px;
  margin-top: 7px;
}

.totalPrice :last-child {
  display: flex;
  font-size: 20px;
  align-items: center;
  padding: 2px;
  margin-top: 6px;
}
.cart {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.product-contents {
  display: flex;
  justify-content: center;
  background: chocolate;
}
.product-contents-nav {
  display: flex;
  position: sticky;
  z-index: 1;
  top: 122px;
  justify-content: space-around;
  background: white;
  font-size: 20px;
  font-weight: 900;
  background: rgb(238, 238, 238);
}
.product-contents-nav div {
  cursor: pointer;
  padding: 8px;
  color: black;
}

#first-content {
  display: flex;
  justify-content: flex-end;
}

#second-content {
}

#third-content span {
  font-size: 30px;
  font-weight: 900;
  padding: 20px;
}
</style>
