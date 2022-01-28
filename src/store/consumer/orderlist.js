// 주문내역 저장소
export default {
  namespaced: true,
  state: {
    orderlist: [
      {
        title: "나는 사과",
        price: 1000,
        context: "주문 내역입니다.",
        status: "배송중",
      },
      {
        title: "나는 배",
        price: 2000,
        context: "주문 내역입니다.",
        status: "배송확인",
      },
      {
        title: "나는 시금치",
        price: 3000,
        context: "주문 내역입니다.",
        status: "배송중",
      },
      {
        title: "나는 콩",
        price: 4000,
        context: "주문 내역입니다.",
        status: "배송완료",
      },
      {
        title: "나는 강아지",
        price: 5000,
        context: "주문 내역입니다.",
        status: "배송완료",
      },
      {
        title: "나는 돈까스",
        price: 6000,
        context: "주문 내역입니다.",
        status: "배송완료",
      },
    ],
    showOrder: [],
    length: null,
  },
  mutations: {
    orderpage(state, page) {
      //주문내역 게시판 페이징 처리
      const toss = [...state.orderlist];
      const paging = page - 1;
      state.length = Math.ceil(state.orderlist.length / 4);
      state.showOrder = toss.splice(paging * 4, 4);
    },
  },
  actions: {
    orderpage(context, payload) {
      context.commit("orderpage", payload);
    },
  },
};
