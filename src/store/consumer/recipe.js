//소비자 상품 저장소
export default {
  namespaced: true,
  state: {
    category: [
      {
        cate1: "전체",
        cate2: [
          "김치찌개",
          "불고기",
          "비빔밥",
          "초밥",
          "라멘",
          "돈가스",
          "햄버거",
          "파스타",
          "탕수육",
          "양장피",
          "유산슬",
          "팔보채",
        ],
      },
      { cate1: "한식", cate2: ["김치찌개", "불고기", "비빔밥"] },
      { cate1: "일식", cate2: ["초밥", "라멘"] },
      { cate1: "양식", cate2: ["돈가스", "햄버거", "파스타"] },
      { cate1: "중식", cate2: ["탕수육", "양장피", "팔보채"] },
    ],
    list: [
      {
        id: 1,
        title: "김치찌개",
        category0: "한식",
        category: "김치찌개",
        ingredients: ["채소", "고기"],
        url: "https://t1.daumcdn.net/cfile/tistory/1965A0494EB222B534",
      },
      {
        id: 2,
        title: "불고기",
        category0: "한식",
        category: "불고기",
        ingredients: ["고기", "과일"],
        url: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTRfMzYg/MDAxNDkyMTczNTgwMTgz.TajSUSssRXF6s9B8uGU0MzDBiC9VDW-Eb8_Xo1M2tckg.GKbRonIOLc6aRC4XVoOa3rmWUviAufKDnAcARIu4ZFAg.JPEG.tangkwon/001.jpg?type=w800",
      },
      {
        id: 3,
        title: "비빔밥",
        category0: "한식",
        category: "비빔밥",
        ingredients: ["음식"],
        url: "https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg",
      },
      {
        id: 4,
        title: "초밥",
        category0: "일식",
        category: "초밥",
        ingredients: ["고기"],
        url: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/04/a0004345/img/basic/a0004345_main.jpg?20210129190217&q=80&rw=750&rh=536",
      },
      {
        id: 5,
        title: "라멘",
        category0: "일식",
        category: "라멘",
        ingredients: ["고기"],
        url: "https://post-phinf.pstatic.net/MjAxODA0MTdfMjAx/MDAxNTIzOTQ0MTA1MTU2.I62RlGSw9bycOw5G5-wqW57w9Iq0gdpgkJaKszNBFxYg.C4qQPCCJBbxaXRBmy9aNsFq9l0glcLZ23Di0-F15hvkg.JPEG/shutterstock_723122572.jpg?type=w1200",
      },
      {
        id: 6,
        title: "돈가스",
        category0: "일식",
        category: "돈가스",
        ingredients: ["고기", "채소", "음식"],
        url: "http://cdn.itdaily.kr/news/photo/201511/71803_77757_490.jpg",
      },
      {
        id: 7,
        title: "햄버거",
        category0: "양식",
        category: "햄버거",
        ingredients: ["고기", "채소"],
        url: "https://biz.chosun.com/resizer/e_hRq82103yFIU6IWerqAJme8To=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/PDA6T744P5BLTDWSLFXHTGMVSM.png",
      },
      {
        id: 8,
        title: "파스타",
        category0: "양식",
        category: "파스타",
        ingredients: ["과일"],
        url: "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/01/f8b3042c80a214dd7cc60fa2027cdc9d1.jpg",
      },
      {
        id: 9,
        title: "탕수육",
        category0: "중식",
        category: "탕수육",
        ingredients: ["채소", "과일", "고기"],
        url: "https://w.namu.la/s/1bfbdabde6f79ac2f05843636edaa87a8e03419bf86205eabe0e33e76c16b1a02be6d9458d5fe7ab418ce21dc1eb3a831f20c8ba793514b71773858a625cdb63f8a2e67d5afe0de42f187499c7058d48a8414df8a68a31ab9d4bf7c70448e028",
      },
      {
        id: 10,
        title: "양장피",
        category0: "중식",
        category: "양장피",
        ingredients: ["고기"],
        url: "https://w.namu.la/s/174749bde041fac9c56355ac6209314289684d3f99dd6badabd0ad0bbf8c2e98138b454f9eb38cc15c126ed89f5dba00efaf4f2e70ea1ea05e93af47385a26906d5fbfa840b90aedda984f0e97dc6f3620a464a0f59ea6281fb6dc51983ce438",
      },
      {
        id: 11,
        title: "팔보채",
        category0: "중식",
        category: "팔보채",
        ingredients: ["채소"],
        url: "http://www.homecuisine.co.kr/files/attach/images/142/468/024/97dcdb5b773670c3fe2b696e05373d66.JPG",
      },
    ],
    showList: [],
    length: null,
  },
  mutations: {
    search(state, findItem) {
      if (findItem === null) {
        state.showList = state.list;
      } else if (findItem.cate1 === 1) {
        if (findItem.cate0 === "전체") {
          state.showList = state.list;
        } else
          state.showList = state.list.filter(
            (item) => item.category0 === findItem.cate0
          );
      } else {
        state.showList = state.list.filter(
          (item) => item.category === findItem.cate1
        );
      }
    },
  },
  actions: {
    search(context, payload) {
      context.commit("search", payload);
    },
  },
};
