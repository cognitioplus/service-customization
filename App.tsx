import { Toaster } from "@toaster";
import { Toaster as Sonner } from "@sonner";
import { TooltipProvider } from "@tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/theme-provider";
import Index from "./Index";
import Training from "./Training";
import ProgressPage from "./Progress";
import Community from "./Community";
import About from "./About";
import ServiceBuilder from "./ServiceBuilder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/service-builder" element={<ServiceBuilder />} />
            <Route path="/training" element={<Training />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;