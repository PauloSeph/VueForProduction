export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'melancia', 'uva']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}