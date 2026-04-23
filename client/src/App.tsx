/*
Design Philosophy Reminder (Swiss Industrial Editorial):
- Route architecture should support a clean public-facing industrial publication, not an app-like dashboard.
- Keep navigation predictable with strong escape routes between category, application, and quote paths.
- The top-level app should remain visually restrained so page compositions carry the brand voice.
*/
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  AboutPage,
  AluminumEndMillsPage,
  ApplicationsPage,
  BallNoseEndMillsPage,
  CarbideRodsPage,
  CornerRadiusEndMillsPage,
  FlatEndMillsPage,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
  QuoteRequestPage,
  TechnologyPage,
} from "./pages/SitePages";
import HomePage from "./pages/HomePage";
import WhyZenokPage from "./pages/WhyZenokPage";

function LegacyApplicationsRedirect() {
  useEffect(() => {
    window.location.replace("/applications");
  }, []);

  return null;
}

function LegacyCategoryRedirect({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return null;
}

function LegacyFlatEndMillsRedirect() {
  return <LegacyCategoryRedirect target="/products/flat-end-mills" />;
}

function LegacyBallNoseEndMillsRedirect() {
  return <LegacyCategoryRedirect target="/products/ball-nose-end-mills" />;
}

function LegacyCornerRadiusEndMillsRedirect() {
  return <LegacyCategoryRedirect target="/products/corner-radius-end-mills" />;
}

function LegacyAluminumEndMillsRedirect() {
  return <LegacyCategoryRedirect target="/products/aluminum-end-mills" />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/flat-end-mills" component={FlatEndMillsPage} />
      <Route path="/products/ball-nose-end-mills" component={BallNoseEndMillsPage} />
      <Route path="/products/corner-radius-end-mills" component={CornerRadiusEndMillsPage} />
      <Route path="/products/aluminum-end-mills" component={AluminumEndMillsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/flat-end-mills" component={LegacyFlatEndMillsRedirect} />
      <Route path="/ball-nose-end-mills" component={LegacyBallNoseEndMillsRedirect} />
      <Route path="/corner-radius-end-mills" component={LegacyCornerRadiusEndMillsRedirect} />
      <Route path="/aluminum-end-mills" component={LegacyAluminumEndMillsRedirect} />
      <Route path="/carbide-rods" component={CarbideRodsPage} />
      <Route path="/applications" component={ApplicationsPage} />
      <Route path="/applications/:legacySlug" component={LegacyApplicationsRedirect} />
      <Route path="/technology" component={TechnologyPage} />
      <Route path="/why-zenok" component={WhyZenokPage} />
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
