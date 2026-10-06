import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "@/pages/landing";
import { Profile } from "@/pages/profile";
import { Projects } from "@/pages/projects";
import { Skills } from "@/pages/skills";
import { ActivityPage } from "@/pages/activity";
import { Contact } from "@/pages/contact";
import { trackVisit } from "@/lib/visits";

/** Start every page at the top when the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function App() {
  // Count this visit for the activity heatmap once per load, whichever page
  // the visitor lands on (deduped server-side, so reloads never inflate it).
  useEffect(() => {
    trackVisit();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
