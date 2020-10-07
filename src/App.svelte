<script lang="ts">
  import InputNumber from "./components/InputNumber.svelte";
  import getRandomChar from "./util/getRandomChar";

  const MAXCHARS = 10000;
  const fonts = [
    "Open Sans",
    "Lato",
    "Raleway",
    "Noto Sans",
    "Montserrat",
    "Roboto Condensed",
  ];

  let chars = getRandomChar(MAXCHARS);
  const generateChars = () => {
    chars = getRandomChar(MAXCHARS);
  };

  /* App State */
  let fontFamily = fonts[0],
    fontStyle = "regular",
    length = 80,
    fontSize = 16,
    fontWeight = 400,
    lineHeight = 20,
    width = 300,
    height = 200,
    padding = 10;
</script>

<style>
  main {
    text-align: left;
    padding: 25px;
    margin: 0 auto;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-auto-rows: min-content;
    align-items: center;
    gap: 50px;
    min-height: 100vh;
  }

  header {
    grid-column: 1 / 3;
  }

  .config {
    display: grid;
    grid-template-columns: 70px 70px;
    margin: 0 0 0 25px;
    gap: 40px 20px;
    background: rgba(16, 212, 255, 0.11);
    padding: 10px 35px;
  }

  .output {
    display: inline-flex;
    border: 2px solid #000;
    outline: 2px solid #10d4ff;
    overflow: visible;
    margin: 0 auto;
    background-color: #fff;
  }

  select {
    grid-column: span 2;
  }

  h1 {
    grid-column: span 2;
    font-size: 52px;
    font-weight: 700;
    margin: 0;
  }
</style>

<main>
  <header><img src="logo.svg" alt="" /></header>

  <div class="config">
    <h1>Fancy&nbsp;Character Count&nbsp;Tool&nbsp;-&nbsp;FCCT</h1>

    <select name="fontFamily" id="fontFamily" bind:value={fontFamily}>
      {#each fonts as font}
        <option value={font}>{font}</option>
      {/each}
    </select>

    <select name="fontType" id="fontType" bind:value={fontStyle}>
      <option value="normal">Normal</option>
      <option value="italic">Italic</option>
    </select>

    <InputNumber
      bind:value={length}
      name="length"
      min={1}
      max={MAXCHARS}
      step={1} />

    <InputNumber bind:value={height} name="height" max={999} />

    <InputNumber bind:value={fontSize} name="fontSize" max={999} />

    <InputNumber
      bind:value={fontWeight}
      min={100}
      max={900}
      step={100}
      name="fontWeight" />

    <InputNumber bind:value={lineHeight} name="lineHeight" max={999} />

    <InputNumber bind:value={width} name="width" max={999} />

    <InputNumber bind:value={padding} name="padding" max={999} />

    <div><button on:click={generateChars}>Randomize chars</button></div>
  </div>

  <div
    class="output"
    style="width: {width}px;
      height: {height}px;
      font-size: {fontSize}px; 
      line-height: {lineHeight}px;
      padding: {padding}px;
      font-weight: {fontWeight};
      font-family: '{fontFamily}', sans-serif;
      font-style: {fontStyle};
    ">
    {chars.slice(0, Math.min(length, MAXCHARS))}
  </div>
</main>
