import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMeContainer } from "./Containers/AboutMeContainer";
import FormContainer from "./Containers/FormContainer";
import Layout from "./Layouts/Layout";
import Cakes from "./Pages/Cakes";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Salty from "./Pages/Salty";
import Sweets from "./Pages/Sweets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/tartas" element={<Layout />}>
          <Route index element={<Cakes />} />
          {/*<Route path="salados" element={<h1>Todos los salados</h1>} />
          <Route path="dulces" element={<h1>Todos los dulces</h1>} />
          <Route
            path="personalizados"
            element={<h1>Todos los personalizados</h1>}
         />*/}
        </Route>

        <Route path="/dulces" element={<Layout />}>
          <Route index element={<Sweets />} />
        </Route>

        <Route path="/salados" element={<Layout />}>
          <Route index element={<Salty />} />
        </Route>
        <Route path="/quiensoy" element={<Layout />}>
          <Route index element={<AboutMeContainer />} />
        </Route>
        <Route path="/encargos" element={<Layout />}>
          <Route index element={<FormContainer />} />
        </Route>

        {/* <Route path="/productos" element={<Products />} />
        <Route path="contacto" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
