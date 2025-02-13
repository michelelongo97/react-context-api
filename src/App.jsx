import { BrowserRouter, Routes, Route } from "react-router-dom";

import Alert from "./components/Alert";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PostsList from "./pages/PostsList";
import Post from "./pages/Post";
import PageNotFound from "./pages/PageNotFound";

import DefaultLayout from "./layouts/defaultLayout";

import { AlertProvider } from "./contexts/AlertContext";

export default function App() {
  return (
    <AlertProvider>
      <Alert message="test" />
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/posts-list" element={<PostsList />} />
            <Route path="/posts-list/:id" element={<Post />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
