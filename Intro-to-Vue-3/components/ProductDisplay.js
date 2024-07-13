app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
        ` <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- ":" is a shorthand syntax of "v-bind" -->
            <a :href="url" target="_blank">
              <img v-bind:src="image" />
            </a>
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>

            <p>Shipping {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }"
            ></div>
            <!-- "@" is a shorthand syntax of "v-on:" -->
            <button
              class="button"
              :class="{ disabledButton: !inventory }"
              @click="addToCart"
              :disabled="!inventory"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis.',
            selectedVariant: 0,
            url: 'https://www.vuemastery.com/',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity;
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            };
            return 2.99;
        }
    }
})