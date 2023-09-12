import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/locales/i18n";
import PrimeVue from "primevue/config";

import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Rating from 'primevue/rating';

import 'primeicons/primeicons.css'
import "primevue/resources/themes/lara-dark-blue/theme.css"
import 'primevue/resources/primevue.min.css' //core css

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue);

app.component('Calendar',Calendar);
app.component('Checkbox',Checkbox);
app.component('Rating',Rating);

app.mount('#app')
