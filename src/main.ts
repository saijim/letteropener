import App from "./App.svelte";
import "typeface-open-sans";
import "typeface-lato";
import "typeface-raleway";
import "typeface-noto-sans";
import "typeface-montserrat";
import "typeface-roboto-condensed";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
