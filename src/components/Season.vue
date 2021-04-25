<template>
  <div class="mb-3 mt-4">
    <img
      class="card-border"
      :src="season.image.medium || season.image.original"
      v-if="season.image"
    />
    <div v-else class="card">
      <h3>Image Not Available</h3>
    </div>
    <div class="season-number" v-if="season.number">
      Season {{ season.number }}
    </div>
    <div class="mt-1" v-else>NA</div>
  </div>
</template>

<script>
export default {
  name: "Season",
  props: ["season"],
};
</script>
