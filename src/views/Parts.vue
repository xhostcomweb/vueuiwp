<template>
  <div class="parts">
  <Parts/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Parts from "@/components/Parts.vue";
export default {
  name: "parts",
  components: {
    Parts
  }
};
</script>