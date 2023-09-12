import {createI18n} from "vue-i18n"

const i18n= createI18n({
    locale:'es',
    messages:{
        en:{
            home:'Complet',
            name:'Register',
            content:'Add your personal information',
            greet:'Hello, {user}',
            register:'Register is',
            title: 'necessary'
        },
        es:{
            home:'Completar',
            name:'Registrate',
            content:'Agrega tu informacion personal',
            greet:'Hola, {user}',
            register:'Registrarse es',
            title:'necesario'
        },
        ita:{
            home:'Completare',
            name:'Iscrizione',
            content:'Aggiungi le tue informazioni personali',
            greet:'Ciao, {user}',
            register:'Registrarsi è',
            title:'necessario'
        }
    }
})

export default i18n;