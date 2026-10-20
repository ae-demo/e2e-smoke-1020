import { Routes, Route } from "react-router-dom";
import HealthNote from "./pages/HealthNote";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthNote />} />
    </Routes>
  );
}
