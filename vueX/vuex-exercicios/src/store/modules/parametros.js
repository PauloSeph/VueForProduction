export default {
    state: {
        quantidade: 2,
        preco: 22.22
    },
     mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }

    },
 }