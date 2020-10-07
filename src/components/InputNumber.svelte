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
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #888888;
    white-space: nowrap;
  }

  input {
    width: 100%;
    padding: 8px 0;
    margin: 0;
    border: 0;
    outline: 0;
    border-bottom: 2px solid #000;
    background-color: transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000;
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
