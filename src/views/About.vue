<template>
  <div class="about">
  <About/> 
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
export default {
  name: "about",
  components: {
    About
  }
};
</script>