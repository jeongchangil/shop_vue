<!-- 재고떨이 -->
<template>
  <div class="wrap">
    <div>오프라인 매장에 남은 재고들을 연동 시켜서 팔기</div>
    <div>
      생산자 스스로 할인율을 높여 일정 할인율 이상 재고떨이 상품으로 지정
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  height: 500px;
  flex-wrap: wrap;
  margin: 0 auto;
  font-weight: 700;
}

.wrap div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}
.wrap div:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}
</style>
