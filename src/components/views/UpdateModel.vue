
<template>
 <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                Update
                </slot>
              </div>

              <div class="modal-body" key="items.id">
                <slot name="body">
                  <label>Name</label>
                 <input v-model="name "  >
                  <label>Type</label>
                 <input v-model="type">
                   <label>Value</label>

                 <input v-model="value">
                   <label>Currency</label>
                 <input v-model="currency">
                 
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  
                  <button class="btn btn-info col-md-4" @click="submitButton()">Submit</button>
                <button class="btn btn-danger col-md-4" @click="$emit('close')" >Cancel</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>
<script>
export default {
  name: "modal",
  props:['items','update'],
  data() {
    return {
        name : this.update.name,
        type : "",
        value :"",
        image:"",
        currency:"",
      
    }
  },
  methods:{
    submitButton(){
      this.items.forEach(e => {
        if(e.id===this.update.id){
          e.name = this.name
          e.type = this.type
          e.value = this.value
          e.currency = this.currency
        }
        this.$emit('close')
      });
   

    },
    
   
  },
 computed:{
  
 }

};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}



.modal-body {
  margin: 20px 0;
}


</style>