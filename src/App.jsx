import Home from "./pages/Home"
import Features from "./pages/Features"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import NotFound from "./pages/NotFound"
import Services from "./pages/Services"
import ServiceDetails from "./pages/ServiceDetails"
import Industries from "./pages/Industries"
import ResourcesLayout from "./layout/ResourcesLayout"
import ContactUs from "./pages/ContactUs"
import Blogs from "./pages/Blogs"
import Careers from "./pages/Careers"
import AboutUs from "./pages/AboutUs"
import Pricing from "./pages/Pricing"
import ScrollToTop from "./utils/ScrollToTop"
import BlogSinglePage from "./pages/BlogSinglePage"
import ContactGetStarted from "./pages/ContactGetStarted"

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Layout wraps all “regular” pages */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="services" element={<Services />} />
          <Route path="service-details" element={<ServiceDetails />} />
          <Route path="CA-Auditing-Firms" element={<Industries />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resources" element={<ResourcesLayout />}>
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="careers" element={<Careers />} />
          </Route>
          <Route path="blogs/:blogId" element={<BlogSinglePage />} />
          <Route path="reach-us" element={<ContactGetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
