import "./app.postcss";
import { mount } from 'svelte';
import App from "./App.svelte";

// This seems to cause a TS error, but still works ok.
const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
