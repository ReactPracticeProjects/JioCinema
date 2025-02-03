import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>

            {" "}
            {/* UserLayout */}{" "}
          </Route>

          <Route path="/subscription/plans" element={<Plans/>}></Route>
          {/* <Route path='/admin' element={<Admin/>}</Route>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
