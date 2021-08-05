app.component('footer-banco', {
    props:['valor', 'fecha'],
    template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white text-center">
            <h3>{{texto}}--{{valor}}</h3>
            <p>{{fecha}} </p>
        </div>
    `,
    data() {
        return {
           texto:'Footer de mi pagina web dentro de data'
           
        }
    },
})