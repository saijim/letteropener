<script lang="ts">
  import english from "./data/english";
  import rouletteWheelSelection from "roulette-wheel-selection";
  import InputNumber from "./components/InputNumber.svelte";

  const MAXCHARS = 10000;

  const getRandomChar = (num: number): string => {
    let result = "";
    for (let i = 0; i < num; i++) {
      if (Math.random() < 0.21) {
        result += " ";
      } else {
        let myChar = rouletteWheelSelection(english, "weight");
        if (Math.random() > 0.03) {
          result += myChar.name.toLowerCase();
        } else {
          result += myChar.name;
        }
      }
    }
    return result;
  };

  let length = 80;
  let fontSize = 16;
  let lineHeight = 20;
  let width = 300;
  let height = 200;
  let padding = 10;

  let chars = getRandomChar(MAXCHARS);
  const generateChars = () => {
    chars = getRandomChar(MAXCHARS);
  };
</script>

<style>
  main {
    text-align: left;
    padding: 40px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
  }

  .config {
    flex: 0 0 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto 60px auto;
    gap: 20px;
  }

  .output {
    display: inline-flex;
    border: 2px solid red;
    overflow: visible;
    margin: 0 auto;
  }
</style>

<main>
  <div class="config">
    <InputNumber
      bind:value={length}
      name="length"
      min={1}
      max={MAXCHARS}
      step={1} />
    <InputNumber bind:value={fontSize} name="fontSize" />
    <InputNumber bind:value={lineHeight} name="lineHeight" />
    <InputNumber bind:value={width} name="width" />
    <InputNumber bind:value={height} name="height" />
    <InputNumber bind:value={padding} name="padding" />

    <div><button on:click={generateChars}>Randomize chars</button></div>
  </div>

  <div
    class="output"
    style="width: {width}px; height: {height}px; font-size: {fontSize}px; line-height: {lineHeight}px; padding: {padding}px">
    {chars.slice(0, Math.min(length, MAXCHARS))}
  </div>
</main>
