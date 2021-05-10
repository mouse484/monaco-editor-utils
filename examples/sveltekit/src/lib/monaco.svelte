<script lang="ts">
  let container;

  import loader from '@monaco-editor/loader';
  import { onMount } from 'svelte';

  onMount(() => {
    loader.init().then((monaco) => {
      monaco.editor.create(container, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
          '\n'
        ),
        language: 'javascript',
      });
    });
  });
</script>

<div bind:this={container} class="container" />

<style>
  .container {
    width: 800px;
    height: 600px;
  }
</style>
