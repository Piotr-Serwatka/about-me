<template>
  <div>
    <Header />
    <PictureOfTheDay />
    <Exoplanets />
    <MarsRoverPhotos />
  </div>
</template>

<script>
import PictureOfTheDay from "../components/cosmos/PictureOfTheDay";
import Exoplanets from "../components/cosmos/Exoplanets";
import MarsRoverPhotos from "../components/cosmos/MarsRoverPhotos";
import Header from "../components/cosmos/Header"
  export default {
    components: {PictureOfTheDay, Header, Exoplanets, MarsRoverPhotos},
    name: 'Nasa',
    data() {
      return {}
    },
  }
</script>

<style>
  h1 {
    color: black;
  }
  p {
    font-size: 26px;
    color: black;
  }
</style>
