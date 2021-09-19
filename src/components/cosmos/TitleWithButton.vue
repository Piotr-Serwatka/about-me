<template>
  <div class="container my-3">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="h1">
        {{ title }}
      </h2>

      <button class="btn btn-lg btn-dark" @click="$emit('input', !value)">
        {{ value ? 'Hide' : 'Show'}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TitleWithButton',
    props: {
      title: {type: String, required: true},
      value: {type: Boolean, required: true}
    }
  }
</script>
