//Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
const app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        currentIndex: 0,
        timer: null
    },
    methods: {
        up(){
            if (this.currentIndex === 4){
                this.currentIndex = 0
            } else {
                this.currentIndex += 1
            }
        },
        down(){
            if (this.currentIndex === 0){
                this.currentIndex = 4
            } else {
                this.currentIndex -= 1
            }
        },
        autoScroll(){
            this.timer = setInterval(()=>{
                this.up();
            },3000) 
        },
        stopAutoScroll(){
            clearInterval(this.timer)
            this.timer = null
        },
        goTo(i){
            if (this.currentIndex != i){
                this.currentIndex = i
            }
        }
    }
})


//BONUS
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce