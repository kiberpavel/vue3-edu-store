<template>
  <h5>
    Billing details
  </h5>
  <form @submit.prevent="placeOrder" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="{ 'form-control': true, 'is-invalid': !isFirstNameValid}"  id="firstName" placeholder="First Name">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" :class="{ 'form-control': true, 'is-invalid': !isSecondNameValid}" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" :class="{ 'form-control': true, 'is-invalid': !isCityValid}" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" :class="{ 'form-control': true, 'is-invalid': !isAddressValid}" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': !isEmailValid}" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" :class="{ 'form-control': true, 'is-invalid': !isPhoneValid}" id="phone" placeholder="+38(099) 999-99-99">
    </div>
    <div class="col-md-12 d-flex justify-content-end">
      <div class="modal-footer">
        <button @click="buyItem" type="submit" class="btn btn-success">
          Place Order
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBuildingForm",
  data:() =>({
    firstName:"",
    lastName:"",
    city:"",
    address:"",
    email:"",
    phone:"",
    isFirstNameValid: true,
    isSecondNameValid: true,
    isCityValid: true,
    isAddressValid:true,
    isEmailValid:true,
    isPhoneValid:true,
  }),
  watch:{
    firstName(newValue){
      this.isFirstNameValid= true;
      if(newValue.length > 10){
          this.isFirstNameValid= false;
      }
    },
    lastName(newValue){
      this.isSecondNameValid = true;
      if(newValue.length >10){
        this.isSecondNameValid = false;
      }
    },
    address(newValue){
      this.isAddressValid= true;
      if (newValue.length<5 || newValue.length>30) {
        this.isAddressValid = false;
      }
    },
    city(newValue){
      this.isCityValid= true;
      if (newValue.length<2 || newValue.length>15) {
        this.isCityValid = false;
      }
    },
    email(newValue){
      this.isEmailValid= true;
      if (newValue.length<9 || newValue.length>30) {
        this.isEmailValid = false;
      }
    },
    phone(newValue){
      this.isPhoneValid= true;
      if (newValue.length !== 10) {
        this.isPhoneValid = false;
      }
    }
  },

  methods:{
    placeOrder(){
    },
    buyItem(){
      console.log("имя:"+ this.firstName);
      console.log("фамилия:"+ this.lastName);
      console.log("город:"+ this.city);
      console.log("адресс:"+ this.address);
      console.log("email:"+ this.email);
      console.log("телефон:"+ this.phone);
      console.log("Общее количество:"+ this.$root.totalAmount);
      console.log("Общая цена:"+ this.$root.totalPrice);
      this.$root.returnItems();
      this.$root.deleteFromBasket();
      this.firstName="";
      this.lastName="";
      this.city="";
      this.address="";
      this.email="";
      this.phone="";
      this.$root.removeAll();

    }
  }
}
</script>

