<template>
  <a :href="href" :class="[firsttype, size]">{{ label }}</a>
</template>
<script>
  export default {
    name: "IButton",
    props: {
      label: String,
      size: String,
      firsttype: String,
      href: String,
    }
  };
</script>