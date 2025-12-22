import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Bio from "./pages/Bio";
import GyroSnakeEditor from "./pages/GyroSnakeEditor";
import Cv from "./pages/Cv";
import ThreeDPrints from "./pages/3DPrints";
import ThreeDModels from "./pages/3DModels";
import Art from "./pages/Art";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="projects" element={<Projects />}>
            <Route path=":projectId" element={<Projects />} />
          </Route>
          <Route path="bio" element={<Bio />} />
          <Route path="cv" element={<Cv />} />
          <Route path="gyroSnakeEditor" element={<GyroSnakeEditor />} />
          <Route path="3dprints" element={<ThreeDPrints />}>
            <Route path=":printId" element={<ThreeDPrints />} />
          </Route>
          <Route path="3dmodels" element={<ThreeDModels />}>
            <Route path=":modelId" element={<ThreeDModels />}>
              <Route path=":tabId" element={<ThreeDModels />} />
            </Route>
          </Route>
          <Route path="art" element={<Art />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
