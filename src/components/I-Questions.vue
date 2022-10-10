<template>
    <h3 class="container-h3">
      {{ question.title }}
    </h3>
    <p class="container-p">
      {{ question.describtion }}
    </p>
</template>

<script>
  export default {
    name: "Questions",
    props: {
      question: Object,
    }
  }
</script>