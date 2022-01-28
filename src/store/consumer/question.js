//문의 저장소
import router from "../../router";
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        title: "문의 제목 입니다.",
        ordernumber: "RES4863",
        article: "문의 내용 입니다.",
        category: "교환/환불",
        image: "",
        date: "2022-2-2",
        writer: "임시",
      },
      {
        id: 2,
        title: "문의 제목 입니다.",
        ordernumber: "SAD5548",
        article: "문의 내용 입니다.",
        category: "배송/포장",
        image: "",
        date: "2022-2-3",
        writer: "임시",
      },
      {
        id: 3,
        title: "문의 제목 입니다.",
        ordernumber: "REG4862",
        article: "문의 내용 입니다.",
        category: "배송/포장",
        image: "",
        date: "2022-2-1",
        writer: "임시",
      },
      {
        id: 4,
        title: "문의 제목 입니다.",
        ordernumber: "BTG1954",
        article: "문의 내용 입니다.",
        category: "배송/포장",
        image: "",
        date: "2022-2-2",
        writer: "임시",
      },
      {
        id: 5,
        title: "문의 제목 입니다.",
        ordernumber: "UTY9856",
        article: "문의 내용 입니다.",
        category: "교환/환불",
        image: "",
        date: "2022-2-1",
        writer: "임시",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    pagination(state, page) {
      //문의 게시판 페이징처리
      const toss = [...state.list];
      const paging = page - 1;
      state.length = Math.ceil(state.list.length / 4);
      state.showList = toss.splice(paging * 4, 4);
    },
    boardAdd(state, obj) {
      //문의 내용 저장
      state.list.push(obj);
    },
  },
  actions: {
    pagination(context, payload) {
      context.commit("pagination", payload);
    },
    boardAdd(context, payload) {
      //문의 내용 저장 후 문의 게시판으로 이동
      const toss = { ...payload.total, id: context.state.list.length + 1 };
      context.commit("boardAdd", toss);
      router.push("/service/question");
    },
  },
};
