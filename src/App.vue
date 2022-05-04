<template>
  <div id="restaurant-forum">
    <NavbarHome />
    <main role="main" class="mt-5 bg-white">
   <router-view />
    </main>
  </div>
</template>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarHome from './components/NavbarHome.vue'
export default {
  components: {
    NavbarHome
  }
}
</script>
