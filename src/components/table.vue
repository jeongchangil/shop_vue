<template>
  <table class="styled-table">
    <colgroup>
      <col style="width: 5%" />
      <col style="width: 45%" />
      <col style="width: 20%" />
      <col style="width: 20%" />
      <col style="width: 10%" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(col, index) in column" :key="index">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itemList" :key="item.title">
        <td>{{ item.no }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.person }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.visit }}</td>
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
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #1c0098;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

/* .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
} */

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #210098;
}

/* .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
} */
</style>
