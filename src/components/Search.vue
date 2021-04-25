<template>
  <div>
    <b-row class="ml-3">
      <b-button variant="success" class="mt-4 md-4" @click="$router.go(-1)">
        <b-icon icon="arrow-left"></b-icon>
      </b-button>
    </b-row>
    <template v-if="shows.length">
      <div>
        <h2 class="text-secondary">
          <strong
            >Search result of show : {{ this.$route.params.query }}
          </strong>
        </h2>
        <b-row>
          <b-col lg="3" md="4" sm="6" v-for="show in shows" :key="show.id">
            <card :show="show"> </card>
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="success" type="grow"></b-spinner>
      </div>
    </template>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { searchShows } from "../service/tvShow.api.js";
export default {
  name: "Search",
  components: {
    Card,
  },
  data() {
    return {
      shows: [],
    };
  },
  created() {
    this.getSearchedShows();
  },
  methods: {
    async getSearchedShows() {
      //why we are using "map" directly we can store in shows array no,but if we are doing
      // the shows are not getting in output
      //await searchShows(this.$route.params.query).then((res) => {
      //this.shows = res.data
      //});
      await searchShows(this.$route.params.query).then((res) => {
        this.shows = res.data.map((shows) => shows.show);
      });
      if (this.shows.length == 0) {
        this.$router.push({
          name: "page-not-found",
        });
      }
    },
  },
  watch: {
    $route() {
      this.getSearchedShows();
    },
  },
};
</script>