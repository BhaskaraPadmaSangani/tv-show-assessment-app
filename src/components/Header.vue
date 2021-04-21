<template>
    <div>
    <b-navbar toggleable="sm">
      <!--why we are using <router-link to="/"> when we use this only the data is going to
      Search component for further operation if not no why???-->
      <router-link to="/">
     <b-navbar-brand class="navbar ml-1">
          <b-icon icon="camera-reels" class="navbar-icon"></b-icon>
          TvShow Displaying
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
      //how the data is going to sarchquery as we are not assigning the data in form to sarch query 
      //is the data will be directly assigned ?
      this.$router.push({
        name: "Search",
        params: {
          query: this.searchQuery
        }
      });
      //is it again ur making the searchquery empty for taking new data after passing to search component
      this.searchQuery = "";
    }
  }
};
</script>

<style scoped>
</style>