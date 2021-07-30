import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import HelloWorld from "./components/HelloWorld";

const app = createApp({});

app.component("hello-world", HelloWorld);

app.mount("#app");
