import { PublicationVue } from "./database/publication";

import "./database/publication/dec2022";
import "./database/publication/feb2023";

import { createApp } from "vue";

import "./style.css";

createApp(PublicationVue).mount("#app");