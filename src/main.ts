import "./app.postcss";
import { mount } from "svelte";
import App from "./App.svelte";

const root = document.getElementById("app");
if (root) {
  mount(App, {
    target: root,
  });
}
