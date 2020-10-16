<script lang="ts">
  export let absolute: boolean = false;
  export let hinted: boolean = false;
  export let styles: string = "";
</script>

<style>
  .output {
    display: inline-flex;
    border: 2px solid #000;
    outline: 2px solid #10d4ff;
    overflow: visible;
    margin: 0 auto;
    background-color: #fff;
  }

  .hinted {
    opacity: 0.1;
  }

  .absolute {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

<div class="output" class:hinted class:absolute style={styles}>
  <slot />
</div>
