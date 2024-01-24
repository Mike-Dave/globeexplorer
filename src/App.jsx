import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import { CountryProvider } from "./contexts/CountryContext";
import CountryRegion from "./pages/CountryRegion/CountryRegion";
import CountryAll from "./pages/CountryAll/CountryAll";
import CountryName from "./pages/CountryName/CountryName";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import CountryBorder from "./pages/CountryBorder/CountryBorder";
import Error from "./pages/ErrorPage/Error";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="countryall" />} />
            <Route path="countryall" element={<CountryAll />}></Route>
            <Route path="countryregion" element={<CountryRegion />}></Route>
            <Route path="countryname" element={<CountryName />}></Route>
            <Route
              path="countrydetail/:id"
              element={<CountryDetails />}
            ></Route>
            <Route path="countryborder/:id" element={<CountryBorder />}></Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
