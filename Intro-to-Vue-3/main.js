const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ]
        }
    }
})
