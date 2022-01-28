<!-- 헤더 -->
<template>
  <div class="wrap">
    <div>
      <div class="topheader">
        <div>
          <router-link
            v-if="!$store.state.user.user"
            class="route-text"
            to="/login"
            >로그인&nbsp; |&nbsp;</router-link
          >
          <router-link
            class="route-text"
            to="/signup"
            v-if="!$store.state.user.user"
            >회원가입&nbsp; |&nbsp;</router-link
          >
          <router-link
            class="route-text"
            to="/mypage/order"
            v-if="$store.state.user.user"
          >
            마이페이지 &nbsp; |&nbsp;
          </router-link>
          <a
            class="route-text"
            @click="$store.commit('user/logout')"
            v-if="$store.state.user.user"
          >
            로그아웃 &nbsp; |&nbsp;
          </a>
          <router-link class="route-text" to="/service/notice"
            >고객센터</router-link
          >
        </div>
      </div>
    </div>
    <div class="fixedtest">
      <div class="frame navi1">
        <div class="logo">
          <router-link to="/">
            <v-img :src="logosrc" max-height="100px" max-width="100px" />
          </router-link>
        </div>

        <!-- 검색창 -->
        <div class="header-search">
          <v-text-field
            label="검색어를 입력해주세요"
            outlined
            rounded
            color="primary"
          >
            <v-icon tag="a" slot="append" color="primary"> fa-search </v-icon>
          </v-text-field>
        </div>

        <!--장바구니 아이콘 있는 공간 -->
        <div class="route-mypage"></div>
        <div class="route-cart">
          <v-badge
            bordered
            :value="$store.state.cart.len != 0"
            color="deep-purple accent-4"
            :content="$store.state.cart.len"
            offset-y="15"
            offset-x="7"
          >
            <v-icon v-on:click="$router.push('/cart')" color="black" large>
              fa-shopping-cart
            </v-icon>
          </v-badge>
        </div>
      </div>
      <!--헤더 네비게이션-->
      <div class="frame navi1">
        <div @mouseover="mouseover" @mouseleave="mouseleave">
          <v-icon large color="black"> mdi-menu </v-icon>
          전체 카테고리
          <!--카테고리 -->
          <div v-if="this.ishover" class="category">
            <div @mouseover="showCategory" @mouseleave="hideCategory">
              <div v-if="this.iscategory" class="category2">
                <!--2차 카테고리-->
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
                2차카테고리<br />
              </div>
              <!--1차 카테고리-->
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
              1차카테고리<br />
            </div>
          </div>
        </div>
        <div v-for="nav in naviList" :key="nav.id" class="navigation">
          <router-link tag="div" :to="nav.to">{{ nav.name }}</router-link>
        </div>
      </div>
    </div>
    <!-- 라우팅 페이지-->
    <div class="frame">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logosrc: require("@/assets/mainlogo.jpg"),
      naviList: [
        { id: "2", name: "상품리스트", to: "/list" },
        { id: "3", name: "예약구매", to: "/reservation" },
        { id: "4", name: "재고떨이", to: "/discount" },
        { id: "5", name: "패키지", to: "/package" },
      ],
      ishover: false, //1차 카테고리 유무
      iscategory: false, //2차 카테고리 유무
      isLogin: false,
    };
  },
  methods: {
    mouseover() {
      this.ishover = true;
    },
    mouseleave() {
      this.ishover = false;
    },
    showCategory() {
      this.iscategory = true;
    },
    hideCategory() {
      this.iscategory = false;
      this.ishover = false;
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
}
.route-text {
  color: black;
}
.topheader {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.frame {
  width: 1200px;
  margin: 0 auto;
  padding: 3px;
}
.navi1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: black;
}
.header-search {
  display: flex;
  align-items: center;
  width: 60%;
}
.header-search > :nth-child(1) {
  height: 40px;
}
.route-mypage {
  display: flex;
  align-items: center;
}
.route-cart {
  display: flex;
  align-items: center;
}
.navigation {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.test {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
.fixedtest {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: white;
  box-shadow: 0 2px 2px rgb(238, 235, 235);
}

.category {
  position: absolute;
  background: rgb(138, 137, 137);
  width: 150px;
  height: 500px;
  z-index: 200;
  cursor: pointer;
}
.category2 {
  position: absolute;
  background: rgb(138, 137, 137);
  z-index: 200;
  left: 150px;
  width: 150px;
  height: 500px;
  cursor: pointer;
}
</style>
