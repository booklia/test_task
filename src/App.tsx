import { createRoot } from "react-dom/client";
import BookResults from "./components/BookResults";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <main>
            <SearchBar />
            <Routes>
              <Route path="/details/:id" element={<BookDetails />} />
              <Route path="/" element={<BookResults />} />
            </Routes>
          </main>
      </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error('no container :(')
}

const root = createRoot(container);
root.render(<App />);
("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDbwSF44KRKDGaK9qDfJat8i2ajqny8FAs");
