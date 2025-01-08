import { BrowserRouter, Routes, Route } from "react-router";
import Website from "../pages/Website";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
      </Routes>
    </BrowserRouter>
  );
}
