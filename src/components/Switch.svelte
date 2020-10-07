<script lang="typescript">
  export let options: { value: string; label: string }[] = [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
    ],
    active: string = options[0].value;
</script>

<style>
  .Switch {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .option {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #888;
    cursor: pointer;
    padding: 8px 0;
    border-bottom: 2px solid transparent;
  }

  .active {
    color: #000;
    border-color: #000;
  }
</style>

<div class="Switch">
  {#each options as option}
    <div
      class="option"
      on:click={() => (active = option.value)}
      class:active={active === option.value}>
      {option.label}
    </div>
  {/each}
</div>
