<template functional>
  <header class="about-me bg-light py-5 border-bottom">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h1 class="mb-4 display-4">Hi im Piotr Serwatka</h1>
          <h2 class="mb-4 display-6">Junior Frontend Developer</h2>
          <button @click="listeners['read-more']()">Read more</button>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center">
            <img src="../../assets/me.jpg" class="img-fluid about-me-photo shadow-lg rounded" alt="Piotr Serwatka">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .about-me-photo {
    max-height: 80vh;
  }
  .about-me div h1 {
    font-size: 46px;
  }
  .about-me button {
    border-radius: 6px;
    border: solid 0.5px black;
    color: black;
    background-color: transparent;
    font-size: 40px;
    font-weight: 300;
    height: 2em;
    width: 7em;
    transition: all 0.5s;
  }
  .about-me button:hover {
    color: #da6d2e;
  }
</style>
