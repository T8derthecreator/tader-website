import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-bg">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            {/* Deliberate design-system exception: @theme is intentionally
                neutral (grey + blue/cyan) and carries no alert colour. A
                crashed app needs an instantly recognisable error state, so
                this uses Tailwind's built-in red rather than adding a red to
                the brand palette — it stays out of @theme and therefore
                cannot leak into normal pages. */}
            <AlertTriangle
              size={48}
              className="text-red-600 mb-6 flex-shrink-0"
            />

            <h2 className="text-xl mb-4 text-graphite">An unexpected error occurred.</h2>

            <div className="p-4 w-full border border-line bg-panel overflow-auto mb-6">
              <pre className="text-sm text-steel whitespace-break-spaces">
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              <RotateCcw size={16} />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
