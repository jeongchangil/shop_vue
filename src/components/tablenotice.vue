<!-- 공지사항 게시판 템플릿 -->
<template>
  <table class="styled-table">
    <colgroup>
      <col style="width: 10%" />
      <col style="width: 45%" />
      <col style="width: 20%" />
      <col style="width: 15%" />
      <col style="width: 10%" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(col, index) in column" :key="index">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itemList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.person }}</td>
        <td>{{ item.date }}</td>
        <td>&nbsp;{{ item.visit }}</td>
      </tr>
      <!--
            <tr class="active-row">
                <td>Melissa</td>
                <td>5150</td>
                <td>추가</td>
            </tr>
            -->
      <!-- and so on... -->
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    itemList: Array,
    column: Array,
  },
};
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.7em;
  font-family: sans-serif;
  width: 100%;
  font-weight: 700;
  border-top: 1px solid gray;
  border-bottom: 2px solid gray;
}

.styled-table thead tr {
  background-color: #ffffff;
  color: #0e0d0d;
  text-align: left;
  padding: 10px 0 10px 0;
}
.styled-table th {
  border-top: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid rgb(0, 0, 0);
}
</style>
