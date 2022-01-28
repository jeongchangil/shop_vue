//소비자 정보 저장소
import router from "../../router";
export default {
  namespaced: true,
  state: {
    userstore: [
      {
        id: "test",
        password: "test",
        name: "홍길동",
        email: "test@gmail.com",
        phone: "01012345676",
        address: "경기 고양시 덕양구 화정로 27 (화정동, 은빛마을6단지아파트)",
        rating: "새싹(등급)",
      },
    ],
    user: false,
  },
  mutations: {
    userSignUp(state, payload) {
      //사용자 회원가입
      if (payload.password !== payload.passwordCheck) {
        alert("비밀번호를 확인해 주세요");
      } else if (
        !payload.id
          ? false
          : !payload.password
          ? false
          : !payload.name
          ? false
          : !payload.email
          ? false
          : !payload.phone
          ? false
          : !payload.address
          ? false
          : true
      ) {
        const toss = { ...payload, rating: "씨앗(등급)" };
        alert("가입되었습니다.");
        state.userstore.push(toss);
        router.push("/login");
      } else alert("필수사항을 적어주세요");
    },

    loginUser(state, payload) {
      //사용자 로그인
      state.userstore.find((val) => {
        if (val.id == payload.id) {
          if (val.password == payload.password) {
            state.user = val;
            router.push("/");
          } else {
            alert("비밀번호를 확인해 주세요");
          }
        } else {
          alert("아이디를 확인해 주세요");
        }
      });
    },
    logout(state) {
      //사용자 로그아웃
      state.user = false;
      alert("로그아웃 되었습니다.");
      router.push("/");
    },
  },
  actions: {},
};
