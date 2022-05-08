<template>
  {{ articles }}
</template>

<script lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "app",
  setup(): Record<string, any> {
    const store = useStore();
    const articles = ref([]);
    store.dispatch("jv/get", "articles").then((res) => {
      articles.value = Object.values(res._jv.data);
    });
    return {
      articles,
    };
  },
};
</script>
