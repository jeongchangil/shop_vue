<!-- 개인정보 수정 -->
<template>
  <div class="wrap">
    <div class="orderHeader">
      <div>
        <h2>개인 정보 수정</h2>
        <div class="description">
          <h3>비밀번호 재확인</h3>
          <br />
          회원님의 정보를 안전하게 보호하기 위해 비밀번호를 입력해 주세요.
        </div>
      </div>
    </div>
    <hr />
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 100%;
}
.orderHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.description {
  font-size: small;
  padding: 2px;
  color: rgb(116, 116, 116);
}
h2 {
  margin-bottom: 5px;
}
hr {
  border: 1px solid rgb(0, 0, 0);
}
</style>
