<template>
   <div class="info-container-item">
      <img 
      :src="`${url}${info.attributes.image.data.attributes.url}`" 
      :alt="info.attributes.image.data.attributes.alternativeText" 
      class="info-container-image">
      <h3 class="info-h3">
        {{ info.attributes.title }}
      </h3>
      <h5 class="info-h5">
        {{ info.attributes.author }}
      </h5>
      <p class="container-p">
        {{ info.attributes.description }}
      </p>
      <h5 class="info-h5-bold">
        {{ label }} <img :src="icon"/>
      </h5>
    </div>
</template>

<script>
import { url } from '../api/api';
  export default {
  name: "IInfo",
  props: {
    info: Object,
    label: {
      String,
      default: "READ MORE ",
    },
    icon: {
      String,
      default: "/icons/icon-like.png",
    }
  },
  data(){
    return { url };
  },
}
</script>