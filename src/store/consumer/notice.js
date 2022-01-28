//공지사항 저장소
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "홍길동",
      },
      {
        id: 2,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "가길동",
      },
      {
        id: 3,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "나길동",
      },
      {
        id: 4,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "다길동",
      },
      {
        id: 5,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "라길동",
      },
      {
        id: 6,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "마길동",
      },
      {
        id: 7,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "바길동",
      },
      {
        id: 8,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "사길동",
      },
      {
        id: 9,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "아길동",
      },
      {
        id: 10,
        title: "오늘의 공지사항 입니다",
        visit: 1,
        date: "2021-01-01",
        person: "자길동",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
      //공지사항 게시판 페이징 처리
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
