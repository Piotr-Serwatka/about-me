<template>
  <div>
    <TitleWithButton v-model="visible" title="Checkout Exoplanets!"/>
    <div v-if="visible" class="d-flex flex-wrap justify-content-center">
      <h2>Exoplanets</h2>
      <div class="search-panel col-12">
        <nav class="d-flex justify-content-center navbar navbar-light bg-light">
          <form class="form-inline">
            <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </nav>
      </div>
      <table class="table">
        <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col"><b>Exo planet name</b></th>
          <th scope="col"><b>Light years from earth</b></th>
          <th scope="col"><b>Planet mass</b></th>
          <th scope="col"><b>Discovery date</b></th>
        </tr>
        </thead>
        <tbody v-for="(planet, index) in filteredExoPlanets" :key="planet.id">
        <tr class="text-center">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ planet.name }}</td>
          <td>{{planet.lightYearsFromEarth}}</td>
          <td>{{planet.planetMass}}</td>
          <td>{{planet.discoveryDate}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import TitleWithButton from "./TitleWithButton"

  export default {
    name: 'Exoplanets',
    components: {TitleWithButton},
    data: () => ({
      visible: false,
      search: '',
      exoPlanetCatalog: {
        0: {
          name: '11 Comae Berenices b',
          lightYearsFromEarth: '304',
          planetMass: '19.4 Jupiters',
          discoveryDate: '2007'
        },
        1: {
          name: '11 Ursae',
          lightYearsFromEarth: '409',
          planetMass: '14.74 Jupiters',
          discoveryDate: '2009'
        },
        2: {
          name: '14 Andromedae',
          lightYearsFromEarth: '246',
          planetMass: '4.8 Jupiters',
          discoveryDate: '2008'
        },
        3: {
          name: '14 Herculis',
          lightYearsFromEarth: '58',
          planetMass: '4.66 Jupiters',
          discoveryDate: '2002'
        },
        4: {
          name: '16 Cygni',
          lightYearsFromEarth: '69',
          planetMass: '1.78 Jupiters',
          discoveryDate: '1996'
        },
        5: {
          name: '18 Delphini',
          lightYearsFromEarth: '249',
          planetMass: '10.3 Jupiters',
          discoveryDate: '2008'
        },
        6: {
          name: '24 Bootis',
          lightYearsFromEarth: '313',
          planetMass: '0.91 Jupiters',
          discoveryDate: '2018'
        },
        7: {
          name: '24 Sextantis b',
          lightYearsFromEarth: '235',
          planetMass: '1.99 Jupiters',
          discoveryDate: '2010'
        },
        8: {
          name: '24 Sextantis c',
          lightYearsFromEarth: '235',
          planetMass: '0.86 Jupiters',
          discoveryDate: '2010'
        },
      },
    }),
    computed: {
      filteredExoPlanets() {
        return Object.values(this.exoPlanetCatalog).filter(exoPlanet => {
          const objects = `${exoPlanet.name} ${exoPlanet.lightYearsFromEarth} ${exoPlanet.planetMass} ${exoPlanet.discoveryDate}`;
          return objects.toLowerCase().includes(this.search.toLowerCase());
        })
      }
    },
  }
</script>
