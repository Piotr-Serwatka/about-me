<template>
  <div>
    <TitleWithButton v-model="visible" title="Checkout the Astronomy Picture of the day!"/>

    <div v-if="visible" class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img class="rounded shadow-lg w-100" :src="hdUrl" alt="astronomy picture of the day">
        </div>

        <div class="col">
          <h4>{{ title }}</h4>
          <p v-if="copyright" class="text-muted">Author: {{ copyright }} </p>
          <p>Explanation: {{ explanation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleWithButton from "./TitleWithButton";

  export default {
    name: 'PictureOfTheDay',
    components: {TitleWithButton},
    data: () => ({
      loaded: false,
      visible: false,
      copyright: null,
      explanation: null,
      hdUrl: null,
      title: null,
    }),
    watch: {
      visible(value) {
        if (!this.loaded) {
          this.loaded = true;

          this.$api.nasa.getPictureOfTheDay()
            .then(({data}) => {
              this.hdUrl = data.hdurl;
              this.copyright = data.copyright;
              this.explanation = data.explanation;
              this.title = data.title;
            })
        }
      }
    },
  }
</script>
