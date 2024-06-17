import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UselayoutEffect from "./hook/UselayoutEffect";
import Styled from "./styled-component/Styled";
import UseCallback from "./hook/UseCallback";
import Usetransition from "./hook/Usetransition";
import Employeeform from "./resuableComponent/Employeeform";
import Registration from "./materialui/Registration";
import Materialui from "./materialui/Materialui";
import MyForm from "./react-hook-form/Myform";



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
            <Route path='/callback' element={<UseCallback />}></Route>
            <Route path='/transition' element={<Usetransition />}></Route>
            <Route path='/' element={<Registration />}></Route>
            <Route path='/form' element={<Employeeform />}></Route>
            <Route path='/materialui' element={<Materialui />}></Route>
            <Route path='/reactform' element={<MyForm />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
