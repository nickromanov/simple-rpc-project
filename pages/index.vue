<template>
  <div class="srp-Index">
    <div class="srp-Index__header">
        <span class="p-input-icon-left srp-Index__search-wrapper">
      <i class="pi pi-search"/>
      <InputText class="srp-Search" type="text" placeholder="Filter by author..." @input="searchByAuthor" v-model="searchQuery"/>
    </span>
    </div>

    <div class="srp-Index__body">
      <PostsList v-if="!$fetchState.pending" :list="postsList" />
    </div>
  </div>

</template>

<script lang="ts">
  import InputText from 'primevue/inputtext';
  import { Component, Vue } from 'nuxt-property-decorator'
  import { filterByAuthor, getListWithAuthors } from '@/utils/api';
  import { TPostDataWithAuthorList } from '@/types/interfaces';
  import PostsList from '@/components/PostsList.vue';

  @Component({
    components: {
      InputText,
      PostsList
    }
  })
  export default class Index extends Vue {
    private searchQuery: string = '';
    private postsList: TPostDataWithAuthorList = [];
    private nativeList: TPostDataWithAuthorList = [];

    /**
     * Data loading hook
     */
    async fetch(): Promise<void> {
      this.nativeList = await getListWithAuthors(this.$axios);
      this.postsList  = [...this.nativeList];
    }

    /**
     * Input change handler, start searching by author
     * @param value
     */
    searchByAuthor(value: string): void {
      if(value.length === 0) {
        this.postsList  = [...this.nativeList];
      }
      if(value.length >= 3) {
        this.postsList  = filterByAuthor(value, this.nativeList);
      }
    }
  };
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
    min-width: 200px;
  }

  .srp-Index__search-wrapper {
    width: 25%;
  }
  @media (min-width: 1024px)  {
    .srp-Index__body {
      padding: 0 20px 0 32px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px)  {
    .srp-Index__body {
      padding: 0 0 0 12px;
    }
    .srp-Index__search-wrapper {
      width: 35%;
    }
  }

  @media (max-width: 768px)  {
    .srp-Index__body {
      padding: 0;
    }
    .srp-Index__search-wrapper {
      width: 50%;
    }
  }

  .srp-Index__header {
    position: sticky;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: var(--offset-s) 0;
    background: var(--background);
  }

  .srp-Index__body {
    width: 100%;
  }
</style>
