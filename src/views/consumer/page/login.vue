<!-- 로그인 -->
<template>
  <div class="wrap">
    <div class="login-form">
      <div class="login-contents">
        <div class="title1">로그인</div>
        <router-link class="admin" tag="div" to="/admin/login"
          >관리자 로그인 ></router-link
        >
        <input
          class="inputtag"
          type="text"
          v-model="id"
          placeholder="아이디를 입력해 주세요"
        />
        <input
          class="inputtag"
          type="password"
          v-model="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        <div class="find">
          <router-link to="" tag="span">아이디 찾기</router-link
          >&nbsp;&nbsp;|&nbsp;&nbsp;
          <router-link to="" tag="span">비밀번호 찾기</router-link>
        </div>
        <v-btn
          class="mb-4"
          color="secondary"
          width="100%"
          height="40px"
          @click="$store.commit('user/loginUser', payload)"
          >로그인</v-btn
        >
        <v-btn color="blue-grey lighten-4" width="100%" height="40px"
          >회원가입</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
      payload: {},
    };
  },
  updated() {
    this.payload = {
      id: this.id,
      password: this.password,
    };
    console.log(this.payload);
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-flow: wrap;
}
.title1 {
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 800;
  font-size: 25px;
  padding: 10px;
}

.admin {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 13px;
  padding: 5px;
  color: rgb(109, 109, 109);
}
.login-form {
  width: 1200px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-contents {
  width: 340px;
  height: 300px;
}
.inputtag {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  margin-bottom: 12px;
}
input:focus {
  outline: none;
}

.find {
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 600;
}
</style>
