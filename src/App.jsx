import { Routes, Route } from "react-router-dom";

import { Anime, Favorites, Home, NotFound } from "./pages";
import MainLayout from "./layouts/main-layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
