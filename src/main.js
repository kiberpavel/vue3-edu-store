import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./components/ProductList";
import CartButton from "./components/CartButton";
import CartModal from "./components/cart/CartModal";
const app = createApp({
    data:()=> ({
        cartProducts:[],
    }),
    computed:{
        totalAmount(){
            return this.cartProducts.reduce((total,{amount})=>total + amount, 0 );
        },
        totalPrice(){
            return this.cartProducts.reduce((total,{price,amount})=>total + (amount * price), 0 );
        },

    },
    methods: {
        addToCart(product){
            this.cartProducts.push({...product,amount: 1});
            console.log(this.cartProducts);
        },
        isInCart(id){
           return !!this.cartProducts.find((item)=> item.id ===id);
        },
        removeProduct(index){
            this.cartProducts.splice(index,1);
        },
        addMore(index){
            const product = this.cartProducts[index];
            this.cartProducts.splice(index,1 ,{...product,amount:product.amount+1})
        },
        removeOne(index){
            const product = this.cartProducts[index];
            this.cartProducts.splice(index,1 ,{...product,amount:product.amount-1})
        },
        returnItems(){
            for (let product of this.cartProducts) {
                console.log(product);
            }
        },
        deleteFromBasket(){
            delete this.cartProducts;
        },
        removeAll(){
            this.cartProducts=[];
        }
    },
});

app. component("product-list",ProductList);
app. component("cart-button",CartButton);
app. component("cart-modal",CartModal);
app.mount("#app");
