<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">
        <b-navbar-brand class="navbar ml-1"> TvMaze </b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon
            v-if="expanded"
            icon="chevron-bar-up"
            class="text-white"
          ></b-icon>
          <b-icon v-else class="text-white" icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-row>
              <b-form-input
                class="mr-1"
                placeholder="Search"
                v-model="searchQuery"
              ></b-form-input>
              <b-button
                size="sm"
                class="bg-dark border-dark btn-search"
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
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        params: {
          query: this.searchQuery,
        },
      });
      this.searchQuery = "";
    },
  },
};
</script>