<template>
  <h2 class="container-h2">
    {{ text.title }} <span class="span-marker"> {{ text.span }}</span> {{ text.title_rest }}
  </h2>
  <p class="container-p start-container-p">
    {{ text.describtion }}
  </p>
</template>

<script>
    export default {
    name: "TwoTypes",
    props: {
      text: Object,
    }
  }
</script>