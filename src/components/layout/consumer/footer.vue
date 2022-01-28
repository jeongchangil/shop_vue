<!-- 푸터 -->
<template>
  <v-container class="wrap">
    <v-row justify="center">
      <v-col class="text-left" xl="4">
        <v-row class="text-h5 font-weight-black"> 고객센터 </v-row>
        <v-row align="center" class="mt-8">
          <v-col xl="5" class="text-h4 font-weight-bold text-center">
            0000-0000
          </v-col>
          <v-col xl="7" class="font-weight-medium">
            <v-row> 고객센터 </v-row>
            <v-row class="text--secondary"> 오전 7시 - 오후 7시 </v-row>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-8">
          <v-col xl="5" class="text-body-2 font-weight-bold text-center">
            <div class="question">카카오톡 문의</div>
          </v-col>
          <v-col xl="7" class="font-weight-medium">
            <v-row> 고객센터 </v-row>
            <v-row class="text--secondary"> 오전 7시 - 오후 7시 </v-row>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-8">
          <v-col xl="5" class="text-body-2 font-weight-bold text-center">
            <div class="question">1:1 문의</div>
          </v-col>
          <v-col xl="7" class="font-weight-medium">
            <v-row> 24시간 접수 가능 </v-row>
            <v-row class="text--secondary">
              고객센터 운영시간에 순차적으로 답변
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-8">
          <v-col xl="5" class="text-body-2 font-weight-bold text-center">
            <div class="question">대량주문 문의</div>
          </v-col>
          <v-col xl="7" class="font-weight-medium">
            <v-row class="text--secondary"> 메일 문의 바랍니다. </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col xl="4">
        <v-row class="text-h6 font-weight-black mb-5"> 개인정보처리방침 </v-row>
        <div class="cominfo">
          <v-row> 법인명 (상호): | 사업자등록번호 : 사업자정보확인 </v-row>
          <v-row>
            통신 판매업 : 제 ~~~~-~~~~~-~~~~~호 | 개인정보보호책임자 :
          </v-row>
          <v-row>
            주소 : 경기도 고양시 덕양구 신원로 1길 38 (신원동) 센트럴 하우스 1층
          </v-row>
          <v-row> 입점문의 ~~~~ </v-row>
          <v-row> 팩스: | 이메일: </v-row>
          <v-row> 대량주문 문의 : </v-row>
          <v-row> 입점문의 : </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.wrap {
  min-width: 1200px;
}
.question {
  padding: 10px;
  border: rgb(212, 200, 200) solid 1px;
  border-radius: 3px;
}

.cominfo {
  font-size: small;
  color: rgb(116, 107, 107);
  margin: 30px 0 0 0;
}

.cominfo div :nth-child(n) {
  color: green;
}
</style>
