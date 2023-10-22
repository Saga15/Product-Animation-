import "./App.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";

import React, { Suspense, lazy } from "react";
const Myheader = lazy(() => import("./components/Header"));
const Myhome = lazy(() => import("./pages/Home"));
const Myfooter = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>images Loadding......</h2>}>
        <Myheader />
        <Myhome />
        <Myfooter />
      </Suspense>
    </>
  );
}

export default App;
