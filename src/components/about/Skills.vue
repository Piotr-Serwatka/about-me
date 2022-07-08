<template functional>
  <section id="about" class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6 d-flex justify-content-center flex-column">
        <div class="d-flex justify-content-center align-items-center flex-col flex-md-row flex-wrap">
          <h3 class="attribute-title">My skills</h3>
          <div class="d-flex skill mx-4">
            <img src="../../assets/skills/html5.png" alt="html5" class="img-fluid h-100 w-100">
          </div>
          <div class="skill mx-4">
            <img src="../../assets/skills/css3.png" alt="css3" class="img-fluid h-100 w-100">
          </div>
          <div class="skill mx-4">
            <img src="../../assets/skills/javascript.png" alt="javascript" class="img-fluid h-100 w-100">
          </div>
          <div class="skill mx-4">
            <img src="../../assets/skills/vue.png" alt="vue" class="img-fluid h-100 w-100">
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center flex-col flex-md-row flex-wrap mt-2">
          <h3 class="attribute-title">Tools</h3>
          <div class="d-flex tool mx-4">
            <img src="../../assets/tools/slack.png" alt="slack" class="img-fluid h-100 w-100">
          </div>
          <div class="d-flex tool mx-4">
            <img src="../../assets/tools/npm.png" alt="npm" class="img-fluid h-100 w-100">
          </div>
          <div class="d-flex tool mx-4">
            <img src="../../assets/tools/git.png" alt="git" class="img-fluid h-100 w-100">
          </div>
          <div class="d-flex tool mx-4">
            <img src="../../assets/tools/jira.png" alt="jira" class="img-fluid h-100 w-100">
          </div>
        </div>
      </div>


      <div class="col-12 col-md-6">
        <h2 class="h1">9 months of experience</h2>
        <p>Im working as junior frontend developer for 1,5 year. Mainly im working with creating a new features and
          solving errors in maintenance departament based on Vue.js and JavaScript technology. </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .attribute-title {
    width: 2em;
  }

  .skill, .tool {
    border-radius: 6px;
    height: 80px;
    width: 80px;
    transition: 0.4s;
  }
  .skill:hover, .tool:hover {
    transform: scale(1.3);
  }
</style>
