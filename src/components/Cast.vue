<template>
  <div>
<img 
:src="cast.character.image.medium || cast.character.image.original" v-if="cast.character.image" />
<div v-else>
  <h3>Image Not Available</h3>
</div>
  <div class="mt-2">
    <span> {{cast.person.name}} </span>
    <div class="text-info">as</div>
    <span>{{cast.character.name}}</span>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Cast",
    props: ["cast"],
    data(){
      return {};
    },
  };
</script>

<style scoped>

</style>