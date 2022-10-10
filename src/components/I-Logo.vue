<template>
  <img :src="src" :alt="alt" :class="class">
</template>

<script>
  export default {
  name: "ILogo",
  props: {
    src: String,
    alt: { type: String, default: "Company Logo"},
    class: { type: String, default: "logo"},
  },
};
</script>