<template>
  <div class="srp-Index">
    <div class="srp-Index__header">
        <span class="p-input-icon-left srp-Index__search-wrapper">
      <i class="pi pi-search"/>
      <InputText class="srp-Search" type="text" placeholder="Filter by author..."/>
    </span>
    </div>

    <div class="srp-Index__body">
      <PostsList :list="postsList"/>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import InputText from 'primevue/inputtext';

  import { getListWithAuthors } from '~/loaders/api';
  import PostsList from '~/components/PostsList.vue';

  export default Vue.extend({
    name: 'my-reports',
    data() {
      return {
        postsList: []
      };
    },

    async fetch() {
      let data = await getListWithAuthors(this.$axios);
      this.postsList = data;
    },

    components: {
      PostsList,
      InputText
    }
  });
</script>
<style lang="scss" scoped>

  .srp-Search {
    width: 100%;
  }
  .srp-Index {
    display: flex;
    flex-direction: column;
  }

  .srp-Index__search-wrapper {
    width: 20%;
  }

  @media (min-width: 768px) and (max-width: 1024px)  {
    .srp-Index__search-wrapper {
      width: 30%;
    }
  }

  @media (max-width: 768px)  {
    .srp-Index__search-wrapper {
      width: 50%;
    }
  }

  .srp-Index__header {
    position: sticky;
    top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .srp-Index__body {
    width: 100%;
    margin-top: var(--margin-m);
  }
</style>
