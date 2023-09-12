<script >

import { ref } from 'vue';

const value = ref(null);
const checked = ref(false);
export default {

  props:{
    title:String
  },
  name: "register"

}
</script>

<template>
  <label class="title">{{$t('register')}} {{$t('title')}}</label>
  <div class="form-container">
    <div class="control">
      <label for="name"> First Name :</label>
      <input type="text" id="name">
      <Checkbox :binary="true" />
    </div>
    <div class="control">
      <label for="shortname"> Last Name :</label>
      <input type="text" id="shortname">
      <Checkbox :binary="true" />
    </div>
    <div class="control">
      <label for="identity">DNI :</label>
      <input type="number" id="identity">
      <Checkbox :binary="true" />
    </div>
    <div class="control">
      <label for="email">Email address:</label>
      <input type="email" id="email" placeholder="youremail@gmail.com" required>
      <Checkbox :binary="true" />
    </div>
    <div class="control">
      <label for="date">Date :</label>
      <Calendar type="date" id="date"/>
      <Checkbox v-model="checked" :binary="true" />
    </div>
    <Rating/>
    <button>Save</button>
  </div>
</template>

<style scoped>
.title{
  font-style: italic;
  color: black;
}

.form-container{
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #181818;
}
.control{
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: black;
}
.form-container label{
  width: 100px;
}
</style>