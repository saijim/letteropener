<script lang="ts">
  export let name: string;
  export let min: number;
  export let max: number;
  export let value: number = 0;
  export let step: number = 1;
</script>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    border-bottom: 2px solid #000;
    background-color: transparent;
  }
</style>

<label for={name}>
  {name}

  <input
    id={name}
    class="inputNumber"
    type="number"
    {min}
    {max}
    {step}
    bind:value />
</label>
