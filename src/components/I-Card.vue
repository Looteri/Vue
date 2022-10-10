<template>
  <div class="generally-square">
    <img class="generally-image" 
    :src="`${url}${card.attributes.image.data.attributes.url}`"
    :alt="card.attributes.image.data.attributes.alternativeText"/>
    <h3 class="generally-h3"> 
      {{ card.attributes.title }} 
    </h3>
    <p class="generally-p"> 
      {{ card.attributes.description }} 
    </p>
  </div>
</template>

<script>
  import {url} from "../api/api";
  export default {
    name: "ICard",
    props: {
      card: Object,
    },
    data(){
      return {url};
    }
  };
</script>