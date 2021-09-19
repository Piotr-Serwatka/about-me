<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: { Nav, Footer }
}
</script>


