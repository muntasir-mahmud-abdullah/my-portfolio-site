import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/home-page";
import ArticleDetail from "./pages/article-detail";
import Contact from "./pages/contact";
import PortfolioGallery from "./pages/portfolio-gallery";
import SkillsExpertise from "./pages/skills-expertise";
import AboutMe from "./pages/about-me";
import ProjectDetail from "./pages/project-detail";
import BlogArticles from "./pages/blog-articles";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/home-page", element: <HomePage /> },
    { path: "/article-detail", element: <ArticleDetail /> },
    { path: "/portfolio-gallery", element: <PortfolioGallery /> },
    { path: "/about-me", element: <AboutMe /> },
    { path: "/skills-expertise", element: <SkillsExpertise /> },
    { path: "/blog-articles", element: <BlogArticles /> },
    { path: "/contact", element: <Contact /> },
    { path: "/project-detail", element: <ProjectDetail /> },
    { path: "*", element: <HomePage /> }
  ]);

  return element;
};

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <ProjectRoutes />
    </Router>
  );
};

export default Routes;