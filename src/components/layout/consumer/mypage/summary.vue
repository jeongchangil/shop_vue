<!--마이페이지 요약-->
<template>
  <div class="wrap">
    <div>
      <v-card height="220">
        <v-card-title>
          <div>
            {{ this.$store.state.user.user.name || "로그인을 해주세요" }}<br />
            {{ this.$store.state.user.user.rating }}<br />
            혜택
          </div>
        </v-card-title>
      </v-card>
    </div>
    <div>
      <v-card height="220">
        <v-card-title class="pa-6">
          주문내역<br />
          배송완료<br />
          미완료<br />
        </v-card-title>
      </v-card>
    </div>
    <div>
      <v-card height="220">
        <v-card-title class="pa-6"> </v-card-title>
      </v-card>
    </div>
    <div>
      <v-card height="220">
        <v-card-title class="pa-6">
          월별 구매 건수<br />
          전체 건수
        </v-card-title>
      </v-card>
    </div>
    <div>
      <v-card height="220">
        <v-card-title class="pa-6">
          리뷰 완료 <br />
          미완료 현황
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 10px;
}

.wrap :nth-child(1) {
  width: 280px;
}
.wrap :nth-child(n + 2) {
  width: 230px;
  padding-left: 20px;
}
</style>
