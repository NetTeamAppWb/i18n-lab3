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
  <div class="table-container">
    <table class="custom-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Company</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.address.city }}</td>
        <td>{{ user.company.name }}</td>
      </tr>
      </tbody>
    </table>
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