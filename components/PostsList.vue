<template>
  <div class="srp-PostList">
    <template v-if="list.length">
      <div class="srp-PostList__postWrapper" v-for="post in list" v-bind:key="post.id">
        <Post :header="post.title" :body="post.body" :footer="post.authorName"/>
      </div>
    </template>
    <template v-else>
      <div class="srp-PostList__empty">No data</div>
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'
  import { TPostDataWithAuthorList } from '@/types/interfaces';
  import Post from './Post.vue';
  @Component({
    components: {
      Post
    }
  })
  export default class PostsList extends Vue {
    @Prop() private list!: TPostDataWithAuthorList;
  }

</script>
<style lang="scss" scoped>

  @mixin tablet {
    margin: var(--offset-xs);
    max-width: calc(50% - (2 * var(--offset-xs)));
  }

  .srp-PostList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: start;
    align-content: start;
  }

  .srp-PostList__postWrapper {
    margin: var(--offset-xs);
    max-width: calc(33.3% - (2 * var(--offset-xs)));
  }

  @media (min-width: 1024px) and (max-width: 1240px) {
    .srp-PostList__postWrapper {
      @include tablet;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .srp-PostList__postWrapper {
      @include tablet;
    }
  }

  @media (max-width: 768px) {
    .srp-PostList__postWrapper {
      margin: var(--offset-s);
      max-width: calc(100% - (2 * var(--offset-xs)));
    }
  }

  .srp-PostList__empty {
    font-size: 8rem;
    margin: auto;
    color: var(--lightblack);
  }
</style>
