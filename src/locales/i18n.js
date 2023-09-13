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
            title: 'necessary',
            Name:'Name:',
            lastname:'Last name:',
            dni:'DNI:',
            email:'Email address:',
            date:'Date:',
            save:'Save',
            page:'Welcome a my page',
            homepage:'Home',
            registernet: 'Register',
            users: 'Users'
        },
        es:{
            home:'Completar',
            name:'Registrate',
            content:'Agrega tu informacion personal',
            greet:'Hola, {user}',
            register:'Registrarse es',
            title:'necesario',
            Name:'Nombre:',
            lastname:'Apellido:',
            dni:'DNI:',
            email:'Correo:',
            date:'Fecha:',
            save:'Guardar',
            page:'Bienvenido a mi pagina',
            homepage:'Inicio',
            registernet: 'Registro',
            users: 'Usuarios'
        },
        ita:{
            home:'Completare',
            name:'Iscrizione',
            content:'Aggiungi le tue informazioni personali',
            greet:'Ciao, {user}',
            register:'Registrarsi è',
            title:'necessario',
            Name:'Nom:',
            lastname:'Le nom:',
            dni:'IDENTIFIANT:',
            email:'Mail:',
            date:'Date:',
            save:'Sauvegarder:',
            page:'Benvenuto nella mia pagina',
            homepage:'Inizio',
            registernet: 'Documentazione',
            users: 'Utenti'
        }
    }
})

export default i18n;