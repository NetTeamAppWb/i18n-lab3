//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/locales/i18n";
import PrimeVue from "primevue/config";

import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Rating from 'primevue/rating';
import Button from 'primevue/button';

import 'primeicons/primeicons.css'
import "primevue/resources/themes/mdc-light-indigo/theme.css"
import 'primevue/resources/primevue.min.css' //core css

import router from "@/router";

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component('Calendar',Calendar);
app.component('Checkbox',Checkbox);
app.component('Rating',Rating);
app.component('Button',Button);

app.mount('#app')
