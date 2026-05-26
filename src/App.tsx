import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { appRoutes } from "@/routes";
import { AppToaster } from "@/shared/components/feedback/AppToaster";

/**
 * Renders the matched route tree. Must live inside <Router> so that
 * useRoutes() has access to the routing context.
 */
function AppRoutes() {
  return useRoutes(appRoutes);
}

function App() {
  return (
    <Router>
      <AppRoutes />
      <AppToaster />
    </Router>
  );
}

export default App;
