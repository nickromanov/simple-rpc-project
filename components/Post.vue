<template>
  <div class="srp-Post">
    <div class="srp-Post__header">{{header}}</div>
    <div class="srp-Post__body">{{body}}</div>
    <div class="srp-Post__footer">{{footer}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component export default class Post extends Vue {
  @Prop() header!: string;
  @Prop() body!: string;
  @Prop() footer!: string;

}
</script>
<style lang="scss" scoped>
  .srp-Post {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid var(--lightgray);
    border-radius: 2px;
    padding: var(--offset-xs);

    &__header {
      color: var(--text-accented);
      font-size: var(--font-size-xl);
      margin-top: var(offset-s);
    }

    &__body {
      font-size: var(--font-size-l);
      margin-top: var(--offset-s);
    }

    &__footer {
      font-size: var(--font-size-m);
      margin-top: var(--offset-m);
      margin-bottom: var(--offset-s);
      color: var(--darkgray);
    }

  }
</style>
