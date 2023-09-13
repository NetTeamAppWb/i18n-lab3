<script>

import {UserApiService} from "@/services/User-api-service";

export default {
  name:"userlist",

  data(){
    return{
      users:[],
      userService: new UserApiService(),
    };
  },
  mounted() {
    this.userService.getAll().then((response) => {
      this.users = response.data;
    });
  },
};

</script>

<template>
  <div class="card">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="id" header="Id"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="address.city" header="City"></Column>
      <Column field="company.name" header="company"></Column>
    </DataTable>
  </div>
</template>


<style scoped>
.table-container {
  text-align: center;
  margin-top: 50px;
}

.custom-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: white;
  font-size: 16px;
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #333;
  color: red;
}
</style>