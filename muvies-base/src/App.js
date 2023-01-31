import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes, Navigate, Link} from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import MainPage from "./components/Pages/MainPage/MainPage";
import DetailsPage from "./components/Pages/DetailsPage/DetailsPage";
import WatchlistPage from "./components/Pages/WatchlistPage/WatchlistPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-routes">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route
            path="/something-went-wrong"
            element={<div>404 - Something went wrong</div>}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
