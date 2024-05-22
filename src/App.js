import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


const Register = lazy(() => import("./component/Register"));
const List = lazy(() => import("./component/List"));
const ComponentA = lazy(()=> import("./interceptor/componentA"))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path='/compA' element={<ComponentA />}></Route>
          \
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
