new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Aloooooooo')
        },
        modificarValor(e) {
            this.valor = e.target.value
        }
    }
})