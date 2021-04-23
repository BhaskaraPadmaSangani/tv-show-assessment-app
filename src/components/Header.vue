<template>
    <div class="margin">
    <b-navbar>
      <router-link to="/">
     <b-navbar-brand class="navbar ml-1">
          <b-icon icon="camera-reels" class="navbar-icon"></b-icon>
          TvMaze
        </b-navbar-brand>
      </router-link>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-row>
              <b-col>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                  v-model="searchQuery"
                ></b-form-input>
              </b-col>
              <b-button
                size="sm"
                class="bg-dark border-dark  btn-search"
                @click="search()"
                ><b-icon icon="search" class="text-white search-icon"></b-icon
              ></b-button>
            </b-row>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        params: {
          query: this.searchQuery
        }
      });
      this.searchQuery = "";
    }
  }
};
</script>

<style scoped>
.margin{
   margin-top: 5px;
}
</style>