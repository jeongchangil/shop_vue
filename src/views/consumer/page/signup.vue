<!-- 회원가입 -->
<template>
  <div class="wrap">
    <div class="title1">회원가입</div>
    <div class="contents">
      <div class="subtitle"><span>*</span>필수입력사항</div>
      <div>
        <ul>
          <li>
            <div>아이디<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="text" v-model="id" />
            </div>
            <div>
              <v-btn color="secondary">중복확인</v-btn>
            </div>
          </li>
          <li>
            <div>비밀번호<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="password" v-model="password" />
            </div>
            <div></div>
          </li>
          <li>
            <div>비밀번호 확인<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="password" v-model="passwordCheck" />
            </div>
            <div></div>
          </li>
          <li>
            <div>이름<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="text" v-model="name" />
            </div>
            <div></div>
          </li>
          <li>
            <div>이메일<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="text" v-model="email" />
            </div>
            <div></div>
          </li>
          <li>
            <div>핸드폰<span>&nbsp;*</span></div>
            <div>
              <input class="inputtag" type="number" v-model="phone" />
            </div>
            <div>
              <v-btn color="secondary">인증하기</v-btn>
            </div>
          </li>
          <li>
            <div>주소<span>&nbsp;*</span></div>
            <div>
              <input
                class="inputtag"
                type="text"
                :value="this.$store.state.cart.address"
                disabled
              />
            </div>
            <div>
              <v-btn
                color="secondary"
                @click="$store.dispatch('cart/getaddress')"
                >주소검색</v-btn
              >
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>이용약관동의<span>&nbsp;*</span></div>
            <div>
              <v-checkbox
                class="ma-0 pa-0"
                label="이용약관 동의 (필수)"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
            </div>
            <div></div>
          </li>
          <li>
            <div></div>
            <div>
              <v-checkbox
                class="ma-0 pa-0"
                label="개인정보 수집/이용 동의 (필수)"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
            </div>
            <div></div>
          </li>
          <li>
            <div></div>
            <div>
              <v-checkbox
                class="ma-0 pa-0"
                label="개인정보 수집/이용 동의 (선택)"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
            </div>
            <div></div>
          </li>
          <li>
            <div></div>
            <div>
              <v-checkbox
                class="ma-0 pa-0"
                label="만 14세 이상입니다. (필수)"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
            </div>
            <div></div>
          </li>
        </ul>
        <div class="signup-btn">
          <v-btn
            color="secondary"
            width="200"
            height="50"
            @click="$store.commit('user/userSignUp', totalList)"
            >가입하기
          </v-btn>
        </div>
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
      passwordCheck: "",
      name: "",
      email: "",
      phone: "",
      adress: "",
      totalList: {},
    };
  },
  updated() {
    this.totalList = {
      id: this.id,
      password: this.password,
      passwordCheck: this.passwordCheck,
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.$store.state.cart.address,
    };
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  width: 800px;
  margin: 0 auto;
  flex-flow: wrap;
}
.title1 {
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 800;
  font-size: 25px;
  padding: 20px;
}
.contents {
  width: 800px;
}
span {
  color: red;
}
.subtitle {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 13px;
  color: rgb(131, 131, 131);
  padding: 3px;
  border-bottom: 2px solid black;
}
ul {
  list-style: none;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(233, 233, 233);
}
li {
  display: flex;
  padding: 15px;
}
li > input {
  border: 1px solid rgb(202, 202, 202);
}
li > :first-child {
  display: flex;
  align-items: center;
  width: 150px;
  text-align: left;
  font-weight: 600;
}

li > :nth-child(2) {
  width: 400px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(94, 94, 94);
}

li > :nth-child(3) {
  display: flex;
  justify-content: center;
  width: 200px;
}
.inputtag {
  width: 400px;
  height: 40px;
  border: 1px solid rgb(136, 136, 136);
  border-radius: 3px;
  padding-left: 10px;
}
input:focus {
  outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.signup-btn {
  display: flex;
  width: 800px;
  justify-content: center;
  margin-top: 20px;
}
.signup-btn > :first-child {
  font-size: 18px;
  font-weight: 800;
}
</style>
