import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UselayoutEffect from "./hook/UselayoutEffect";
import Styled from "./styled-component/Styled";



const Register = lazy(() => import("./component/Register"));
const List = lazy(() => import("./component/List"));
const ComponentA = lazy(()=> import("./interceptor/componentA"))
const Usememo = lazy(()=> import("./hook/Usememo"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path='/compA' element={<ComponentA />}></Route>
            <Route path='/memo' element={<Usememo />}></Route>
            <Route path='/uselayout' element={<UselayoutEffect />}></Route>
            <Route path='/styled' element={<Styled />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
