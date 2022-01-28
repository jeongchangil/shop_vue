//마일리지 저장소
export default {
  namespaced: true,
  state: {
    list: [
      { id: 1, date: "2021-01-01", point: 12200, title: "리뷰작성" },
      { id: 2, date: "2021-01-01", point: 4000, title: "이벤트" },
      { id: 3, date: "2021-01-01", point: 3000, title: "서비스" },
      { id: 4, date: "2021-01-01", point: 1500, title: "설문조사" },
      { id: 5, date: "2021-01-01", point: 2000, title: "회원가입" },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
      //마일리지 게시판 페이징처리
      const toss = [...state.list];
      const paging = page - 1;
      state.length = Math.ceil(state.list.length / 4);
      state.showList = toss.splice(paging * 4, 4);
    },
  },
  actions: {
    pagination(context, payload) {
      context.commit("pagination", payload);
    },
  },
};
