<template>
<div>
  <Hero @read-more="scrollTo" />
  <Skills />
  <Hobby />
</div>
</template>
<script>
import Hero from '../components/about/Hero';
import Skills from '../components/about/Skills';
import Hobby from '../components/about/Hobby'
  export default {
    name: 'About',
    components: { Hero, Skills, Hobby },
    methods: {
      scrollTo() {
        const section = document.querySelector('#about');
        section.scrollIntoView({behavior: 'smooth'});
      }
    },
  }
</script>

<style>
  h1 {
    color: black;
  }
  p {
    font-size: 28px;
    color: black;
  }
</style>
