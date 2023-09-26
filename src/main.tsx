/* @refresh reload */
import { Router } from "@solidjs/router"
import { render } from "solid-js/web"

import { Index } from "./app"
import "solid-devtools"

// import {a} from "mypackage"
// a()

// import {c} from "mypackage/sub"
// c()

// import eruda from "eruda"
// let el = document.createElement('div');
// document.body.appendChild(el);
// eruda.init({
//     container: el,
// });
// import mdebug from 'mdebug';
// mdebug.init();

declare global {
  interface Window {
    [key: string]: any
  }
}
render(
  () => (
    <Router>
      <Index />
    </Router>
  ),
  document.getElementById("root") as HTMLElement,
)
