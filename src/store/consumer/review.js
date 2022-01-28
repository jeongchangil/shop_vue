//리뷰 저장소
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "홍길동",
      },
      {
        id: 2,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "가길동",
      },
      {
        id: 3,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "나길동",
      },
      {
        id: 4,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "다길동",
      },
      {
        id: 5,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "라길동",
      },
      {
        id: 6,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "마길동",
      },
      {
        id: 7,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "바길동",
      },
      {
        id: 8,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "사길동",
      },
      {
        id: 9,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "아길동",
      },
      {
        id: 10,
        protitle: "상품명입니다",
        title: "너무 맛있어요",
        rating: 1,
        date: "2021-01-01",
        person: "자길동",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
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
