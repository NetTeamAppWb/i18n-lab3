<script>
import Register from "@/components/RegisterNetTeam.vue";
export default {
  components:{Register},
  props:{
    name: String,
    content: String,
    register: Array
  },
  name: "home"
}
</script>

<template>
  <div class="container">
    <label class="name"> {{$t('home')}} {{$t('name')}}</label>
    <label class="content">{{$t('content')}}</label>
    <ul>
      <li v-for="register in register">
        <register :title="register.title" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  border: #222222;
  background-color: orangered;
  margin: 8px;
  padding: 8px;
}
.name {
  font-weight: bold;
  font-size: large;
  color: black;
}
.content{
  color: black;
}
</style>