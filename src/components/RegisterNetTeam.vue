<script  >

export default {
  data(){
    return{
      //Option Api de la pagina de PrimeVue
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      value: null,
      date: null
    }
  },
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
      <label for="name"> {{$t('Name')}}</label>
      <input type="text" id="name">
      <Checkbox v-model="checked1" :binary="true" />
    </div>
    <div class="control">
      <label for="shortname"> {{$t('lastname')}} :</label>
      <input type="text" id="shortname">
      <Checkbox v-model="checked2" :binary="true" />
    </div>
    <div class="control">
      <label for="identity">{{$t('dni')}}</label>
      <input type="number" id="identity">
      <Checkbox v-model="checked3" :binary="true" />
    </div>
    <div class="control">
      <label for="email">{{$t('email')}}</label>
      <input type="email" id="email" placeholder="youremail@gmail.com" required>
      <Checkbox v-model="checked4" :binary="true" />
    </div>
    <div class="control">
      <label for="date">{{$t('date')}}</label>
      <Calendar  v-model="date"  type="date" id="date"/>
      <Checkbox v-model="checked5" :binary="true" />
    </div>
    <Rating v-model="value" />
    <div class="card flex justify-content-center">
    <Button>{{$t('save')}}</Button>
    </div>
  </div>

</template>

<style scoped>
.title{
  font-style: italic;
  color: black;
  margin:15px;
}

.form-container{
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin:10px
}
.control{
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: black;
  margin:2px;
}
.form-container label{
  width: 100px;
}
</style>