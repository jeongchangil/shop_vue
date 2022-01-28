//소비자 주소 저장소
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        title: "우리집",
        address: "경기도 고양시 덕양구 화정로 11 길동아파트 11호",
      },
      {
        id: 2,
        title: "회사",
        address: "경기도 고양시 덕양구 신원로 11 길동아파트 11호",
      },
      {
        id: 3,
        title: "놀이터",
        address: "경기도 고양시 덕양구 백양로 11 길동아파트 11호",
      },
      {
        id: 4,
        title: "학교",
        address: "경기도 고양시 덕양구 신원로 11 길동아파트 11호",
      },
      {
        id: 5,
        title: "식당",
        address: "경기도 고양시 덕양구 동산로 11 길동아파트 11호",
      },
      {
        id: 6,
        title: "우리집",
        address: "경기도 고양시 덕양구 화정로 11 길동아파트 11호",
      },
      {
        id: 7,
        title: "회사",
        address: "경기도 고양시 덕양구 신원로 11 길동아파트 11호",
      },
      {
        id: 8,
        title: "놀이터",
        address: "경기도 고양시 덕양구 백양로 11 길동아파트 11호",
      },
      {
        id: 9,
        title: "학교",
        address: "경기도 고양시 덕양구 신원로 11 길동아파트 11호",
      },
      {
        id: 10,
        title: "식당",
        address: "경기도 고양시 덕양구 동산로 11 길동아파트 11호",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
      //주소 페이징 처리
      const toss = [...state.list]; //주소 리스트 복사
      const paging = page - 1;
      state.length = Math.ceil(state.list.length / 5); //전체 길이
      state.showList = toss.splice(paging * 5, 5); //하나의 화면에 5개 리스트
    },
  },
  actions: {
    pagination(context, payload) {
      context.commit("pagination", payload);
    },
  },
};
