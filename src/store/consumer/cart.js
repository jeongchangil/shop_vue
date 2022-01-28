//소비자 장바구니 저장소
export default {
  namespaced: true,
  state: {
    list: [], //장바구니 상품 저장  변수
    presum: 0, //장바구니 상품 가격 합치는데 도와주는 변수
    sum: 0, //상품 가격 합
    len: 0, //장바구니 상품 갯수
    address: "", //주소
  },
  mutations: {
    //상품 장바구니에 저장
    addcart(state, product) {
      state.list.splice(0, 0, product);
      state.len = state.list.length;
    },
    //장바구니 상품 가격 합
    totalprice(state, obj) {
      const index = state.list.findIndex((val) => val.id == obj.id);
      state.list[index].count = obj.count;
      state.list.map((val) => (state.presum += val.price * val.count));
      state.sum = state.presum;
      state.presum = 0;
    },
    //장바구니 상품 삭제
    delete(state, product) {
      const index = state.list.findIndex((val) => val.id == product);
      state.list.splice(index, 1);
      state.list.map((val) => (state.presum += val.price * val.count));
      state.sum = state.presum;
      state.presum = 0;
      state.len = state.list.length;
    },
    //장바구니 주소 검색
    getaddress(state, addr) {
      state.address = addr;
    },
  },
  actions: {
    addcart(context, payload) {
      context.commit("addcart", payload);
    },
    totalprice(context, obj) {
      context.commit("totalprice", obj);
    },
    delete(context, product) {
      context.commit("delete", product);
    },
    //주소 검색 api
    getaddress(context) {
      new window.daum.Postcode({
        oncomplete: (data) => {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = data.roadAddress; //도로명 주소 변수
          let extraRoadAddr = ""; //도로명 조합형 주소 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? ", " + data.buildingName
                : data.buildingName;
          }
          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }
          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          this.zip = data.zonecode; //5자리 새우편번호 사용
          this.addr1 = fullRoadAddr;
          context.commit("getaddress", this.addr1);
        },
      }).open();
    },
  },
};
