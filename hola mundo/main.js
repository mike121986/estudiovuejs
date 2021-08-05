const app = Vue.createApp({
    data(){
        return {
            titulo: 'Mi banco con Vuejs',
            cantidad: 1000,
            enlace: 'http://ticdwem.com',
            estado: false,
            servicios:['transferencias','pagos','servicios','cheques'],
            desactivar: false
        }
    },
    // para trabajar con los eventos como el click es necesario trabajar con metodos
    // este es un objeto con diferente funcion
    methods: {
        agregarSaldo(){
            this.desactivar = false;
            this.cantidad = this.cantidad +100;
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0 ){
                this.desactivar = true
                alert('Saldo en cero')
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },

    computed:{
        colorCantidad(){
            return this.cantidad>500?' text-success':' text-danger'
        },
        mayusculasTExto(){
            return this.titulo.toUpperCase()
        }
    }
})