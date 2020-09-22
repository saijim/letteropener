<script lang="ts">
  import english from "./data/english";
  import rouletteWheelSelection from "roulette-wheel-selection";

  const MAXCHARS = 10000;

  const getRandomChar = (num) => {
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

  const chars = getRandomChar(MAXCHARS);
</script>

<style>
  main {
    text-align: left;
    padding: 40px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  .config {
    flex: 0 0 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .output {
    display: inline-flex;
    border: 2px solid red;
    overflow: auto;
  }
</style>

<main>
  <div class="config">
    <div>
      <label for="length">Length</label>
      <input
        id="length"
        type="number"
        bind:value={length}
        min="1"
        max={MAXCHARS} />
    </div>

    <div>
      <label for="fontSize">fontSize</label>
      <input id="fontSize" type="number" bind:value={fontSize} />
    </div>
    <div>
      <label for="lineHeight">lineHeight</label>
      <input id="lineHeight" type="number" bind:value={lineHeight} />
    </div>
    <div>
      <label for="width">width</label>
      <input id="width" type="number" bind:value={width} />
    </div>

    <div>
      <label for="height">height</label>
      <input id="height" type="number" bind:value={height} />
    </div>
  </div>

  <div
    class="output"
    style="width: {width}px; height: {height}px; font-size: {fontSize}px; line-height: {lineHeight}px">
    {chars.slice(0, Math.min(length, MAXCHARS))}
  </div>
</main>
