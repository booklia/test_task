import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{children: ReactElement}> {
    state = {hasError: false}
    static getDerivedStateFromError() {
        return {hasError: true}
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
          return (
            <div>
              <h2>
                There was an error with this operation.
                <Link to="/">Click here to go back to the home page</Link>
              </h2>
          </div>
            
          );
        }
        return this.props.children
    }
}

export default ErrorBoundary