/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Route architecture should support a clean public-facing industrial publication, not an app-like dashboard.
- Keep navigation predictable with strong escape routes between category, application, and quote paths.
- The top-level app should remain visually restrained so page compositions carry the brand voice.
*/
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  AboutPage,
  AerospacePage,
  AluminumEndMillsPage,
  ApplicationsPage,
  BallNoseEndMillsPage,
  CarbideRodsPage,
  CornerRadiusEndMillsPage,
  ElectronicsPage,
  FlatEndMillsPage,
  HomePage,
  MedicalPage,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
  QuoteRequestPage,
  TechnologyPage,
} from "./pages/SitePages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/flat-end-mills" component={FlatEndMillsPage} />
      <Route path="/ball-nose-end-mills" component={BallNoseEndMillsPage} />
      <Route path="/corner-radius-end-mills" component={CornerRadiusEndMillsPage} />
      <Route path="/aluminum-end-mills" component={AluminumEndMillsPage} />
      <Route path="/carbide-rods" component={CarbideRodsPage} />
      <Route path="/applications" component={ApplicationsPage} />
      <Route path="/applications/medical" component={MedicalPage} />
      <Route path="/applications/aerospace" component={AerospacePage} />
      <Route path="/applications/electronics" component={ElectronicsPage} />
      <Route path="/technology" component={TechnologyPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/quote-request" component={QuoteRequestPage} />
      <Route path="/404" component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
