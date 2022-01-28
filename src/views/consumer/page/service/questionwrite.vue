<!-- 고객센터 문의사항 작성하기 -->
<template>
  <div>
    <div class="title">
      <h2>문의사항</h2>
    </div>
    <div class="maintitle">
      <div class="first">제목</div>
      <div>
        <div class="contents">
          <div class="select">
            <select name="category" id="category">
              <option value="교환/환불">교환/환불</option>
              <option value="서비스이용">서비스이용</option>
              <option value="회원">회원</option>
              <option value="배송/포장">배송/포장</option>
            </select>
          </div>
          <div>
            <input
              class="board-title"
              type="text"
              placeholder="제목을 입력해 주세요"
              v-model="title"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="ordernumber">
      <div class="first">작성자</div>
      <div class="contents">
        <input
          type="text"
          value="gssiot@naver.com"
          v-model="writer"
          placeholder="gssiot@naver.com"
          disabled
        />
      </div>
    </div>
    <div class="ordernumber">
      <div class="first">주문번호</div>
      <div class="contents">
        <input
          type="text"
          value="GH8282"
          v-model="ordernumber"
          placeholder="GH8282"
          disabled
        />
      </div>
    </div>
    <div class="article">
      <div class="first">내용</div>
      <div class="contents">
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="내용을 입력해 주세요"
          v-model="article"
        ></textarea>
      </div>
    </div>
    <div class="image">
      <div class="first">이미지</div>
      <div class="contents">
        <input type="file" name="FileName" />
      </div>
    </div>
    <div class="board-btn">
      <v-btn
        color="primary"
        v-on:click="$store.dispatch('question/boardAdd', { total })"
        >등록</v-btn
      >
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      items: ["교환/환불", "서비스 이용", "회원", "배송/포장"],
      title: "",
      ordernumber: "GH8282",
      article: "",
      category: "",
      image: "",
      date: "",
      writer: "gssiot@naver.com",
      total: {},
    };
  },
  updated() {
    this.date =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    this.category = $("#category").val();
    this.total = {
      title: this.title,
      ordernumber: this.ordernumber,
      article: this.article,
      category: this.category,
      image: "",
      date: this.date,
      writer: this.writer,
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.maintitle {
  display: flex;
  border-top: 2px solid #000;
}

.first {
  display: flex;
  background: rgb(173, 238, 173);
  width: 200px;
  align-items: center;
  padding: 0 0 0 20px;
}
.contents {
  padding: 3px;
}
select {
  width: 150px;
  height: 30px;
  padding: 5px;
  border: 1px solid #999;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 0.8em;
  margin-top: 3px;
}

select::-ms-expand {
  display: none;
}
input {
  padding: 2px;
}
input.board-title {
  margin-top: 2px;
  width: 770px;
  border: 1px solid #999;
  font-size: 15px;
}
input:focus {
  outline: none;
}
textarea {
  border: 1px solid #999;
  width: 770px;
  resize: none;
  padding: 5px;
}
textarea:focus {
  outline: none;
}

.ordernumber {
  display: flex;
}
.article {
  display: flex;
}
.image {
  display: flex;
  border-bottom: 1px solid #999;
}

.board-btn {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
</style>
