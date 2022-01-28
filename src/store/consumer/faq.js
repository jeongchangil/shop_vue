//자주 하는 질문
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        category: "교환/환불",
        question: "자주하는 질문은1",
        answer: "자주하는 질문1 대답",
      },
      {
        id: 2,
        category: "배송/포장",
        question: "자주하는 질문2",
        answer: "자주하는 질문2 대답",
      },
      {
        id: 3,
        category: "예약구매",
        question: "자주하는 질문3",
        answer: "자주하는 질문3 대답",
      },
      {
        id: 4,
        category: "서비스 이용",
        question: "자주하는 질문4",
        answer: "자주하는 질문4 대답",
      },
      {
        id: 5,
        category: "회원",
        question: "자주하는 질문5",
        answer: "자주하는 질문5 대답",
      },
      {
        id: 6,
        category: "교환/환불",
        question: "자주하는 질문6",
        answer: "자주하는 질문6 대답",
      },
      {
        id: 7,
        category: "서비스 이용",
        question: "자주하는 질문7",
        answer: "자주하는 질문7 대답",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
      //게시판 페이징 처리
      const toss = [...state.list];
      const paging = page - 1;
      state.length = Math.ceil(state.list.length / 5);
      state.showList = toss.splice(paging * 5, 5);
    },
  },
  actions: {
    pagination(context, payload) {
      context.commit("pagination", payload);
    },
  },
};
