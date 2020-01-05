
new Vue ({
    el: "#desafio",
    data: {
        nome: "Joaquin",
        idade: 22,
        linkgoogle: "https://i2.wp.com/www.nerdsite.com.br/wp-content/uploads/2019/11/1_00001.jpg?resize=600%2C400&ssl=1",
        nome2: "Joaqui alfred"


    },
    methods: {
        calculando() {
           return Math.random(0, 1).toFixed(2)
        },
        idadeVezes3() {
            return this.idade * 3
        }
    },

})