<!-- 상품 리스트 템플릿  -->
<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-hover v-slot="{ hover }" open-delay="200">
      <v-card
        @click="cardrouter"
        :elevation="hover ? 16 : 2"
        :loading="loading"
        class="mx-auto"
        width="274"
        height="450"
        :ripple="false"
      >
        <!--상품 사진 -->
        <v-img
          v-if="hover"
          height="250"
          :src="item.url1"
          position="background-position"
        ></v-img>
        <v-img
          v-else
          height="250"
          :src="item.url2"
          position="background-position"
        >
          <!-- 등급사진 -->
          <v-img
            height="50"
            width="50"
            src="https://cdn-icons-png.flaticon.com/128/3163/3163664.png"
          ></v-img>
        </v-img>

        <!-- 장바구니 -->
        <a
          class="cart"
          v-on:mouseover="route = false"
          v-on:mouseleave="route = true"
        >
          <v-row>
            <v-col xl="auto">
              <v-dialog
                transition="dialog-top-transition"
                max-width="600"
                persistent
              >
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    height="30"
                    width="30"
                    src="https://cdn-icons-png.flaticon.com/512/6133/6133048.png"
                    position="background-position"
                  ></v-img>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="primary" dark>장바구니</v-toolbar>
                    <v-card-text>
                      <div class="text-h4 text-center pa-5">
                        장바구니에 담겼습니다.
                      </div>
                      <div class="text-h4 text-center pa-5">
                        (옵션 및 수량 선택)
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        text
                        @click="
                          dialog.value = false;
                          addproduct();
                        "
                        class="primary"
                        >담기</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </a>

        <!-- 상품이름 -->
        <v-card-title class="title text-h6">{{ item.title }}</v-card-title>

        <v-card-text to="/detail">
          <v-row class="mx-0">
            <!-- 별점 달고 싶으면 주석 풀기
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>

        <div class="grey--text ms-4">
          {{rating}} (413)
        </div>
          -->
          </v-row>
          <!-- 가격 -->
          <div class="my-4 text-h6">
            <!--할인-->
            <span class="discount">{{ item.discount }}%</span>
            <!--할인 후 가격-->
            {{ item.price | comma }}원
          </div>

          <div>
            <del class="text-h6">
              <!--할인 전가격 (10/9)는 할인 율(10%) 이고 맨 뒤 /10)*10}}은 -->
              {{
                Math.round(
                  parseInt(item.price * (10 / (100 - item.discount)))
                ) * 10
              }}원
            </del>
          </div>

          <!-- 요약 설명 -->
          <div>{{ item.summary }}</div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-lazy>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    route: true,
  }),

  methods: {
    //상품 상세페이지 이동 및 데이터 넘기기
    cardrouter() {
      this.$router.push({ name: "Detail", query: this.item });
    },
    //장바구니에 담기
    addproduct() {
      this.$store.dispatch("cart/addcart", this.item);
    },
  },
};
</script>

<style scoped>
.cart {
  position: absolute;
  top: 190px;
  left: 210px;
  background: white;
  padding: 10px;
  width: 52px;
  border-radius: 30px;
}

.discount {
  color: red;
  font-weight: 700;
}

.v-card--link:before {
  background: none;
}
</style>
