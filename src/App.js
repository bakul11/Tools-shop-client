import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./Componets/Blogs/Blogs";
import HomePages from "./Componets/HomePages/HomePages";
import LogIn from "./Componets/Login/Login";
import RequireAuth from "./Componets/RequireAuth/RequireAuth";
import NoMatch from "./Componets/NoMatch/NoMatch";
import Navbar from "./Componets/Shared/Navbar/Navbar";
import SignUp from "./Componets/SignUp/SignUp";
import ToolsOrder from "./Componets/ToolsOrder/ToolsOrder";
import MyOrder from "./Componets/MyOrder/MyOrder";
import Payment from "./Componets/Payment/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <HomePages></HomePages> }></Route>
        <Route path="/blogs" element={ <Blogs></Blogs> }></Route>
        <Route path="/signup" element={ <SignUp></SignUp> }></Route>

        <Route path="/orderNow/:id" element={
          <RequireAuth>
            <ToolsOrder></ToolsOrder>
          </RequireAuth>
        }></Route>
        <Route path="/order" element={ <MyOrder></MyOrder> }></Route>

        <Route path="/login" element={ <LogIn></LogIn> }></Route>
        <Route path="/payment/:id" element={ <Payment></Payment> }></Route>
       
        <Route path="*" element={ <NoMatch></NoMatch> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
