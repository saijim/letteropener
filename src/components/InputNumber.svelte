<script lang="ts">
  export let name: string;
  export let min: number;
  export let max: number;
  export let value: number = 0;
  export let step: number = 1;
</script>

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
