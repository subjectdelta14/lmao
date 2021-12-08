<template>
  <div id="app">
    <Header />
   <router-view></router-view>
    <Footer />
     
  </div>
</template>

<script>

import Header from './components/views/HeaderPage.vue'
import Footer from './components/views/FooterPage.vue'
export default {
  name: 'App',
  data() {
    return {
        
    }
  },
  components: {
    Header,
    Footer,
    
    
  }
}
</script>
