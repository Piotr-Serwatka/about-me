<template>
  <div>
    <TitleWithButton v-model="visible" title="Checkout Mars Rover Photos"/>

    <div v-for="photo in roverPhotos.filter((val, index) => index < 9)" class="col-4 d-inline-flex justify-content-center align-items-center">
      <div v-if="visible" class="d-flex justify-content-center align-items-center col-12">
        <div class="card mb-4 col-10">
          <div class="row g-0">
            <div class="rover col-md-4">
              <img :src="photo.img_src" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="d-flex row justify-content-center card-body">
                <h5 class="card-title mb-1"><span v-if="photo.rover.name">Rover name: {{ photo.rover.name }}</span></h5>
                <p v-if="photo.rover.status">Rover status: <span class="text-success">{{ photo.rover.status }}</span></p>
                <p v-if="photo.camera.full_name" class="card-text"><b>Camera:</b> {{photo.camera.full_name }} ({{photo.camera.name}})</p>
                <p v-if="photo.rover.landing_date"class="card-text"><small class="text-muted"></small><b>Landing date:</b> {{photo.rover.landing_date}}</p>
                <p v-if="photo.rover.launch_date"class="card-text"><small class="text-muted"></small><b>Launch date:</b> {{photo.rover.launch_date}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleWithButton from "./TitleWithButton";
  export default {
    name: 'MarsRoverPhotos',
    components: { TitleWithButton },
    data: () => ({
      visible: false,
      loaded: false,
      roverPhotos: []
    }),
    watch: {
      visible(value) {
        if(!this.loaded) {
          this.loaded = true;

          this.$api.nasa.getMarsPhotosData()
            .then((response) => {
              const data = response.data;
              this.roverPhotos = data.photos;
            })
        }
      }
    }
  }
</script>

<style scoped>
  .rover img {
    height: 100%;
    width: 100%;
  }
  .card-text {
    font-size: 14px;
  }
</style>
