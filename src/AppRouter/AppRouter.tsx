import type { FC } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import RegistrPage from "../pages/RegistrPage/RegistrPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/registration/*" element={<RegistrPage />}>
        <Route
          index
          element={
            <Link to="/registration/basic_info">Select Registration Type</Link>
          }
        />
        <Route
          path="basic_info"
          element={<Link to="/registration/details_info">Basic info</Link>}
        />
        <Route
          path="details_info"
          element={<Link to={"/registration"}>details_info</Link>}
        />
        <Route path="*" element={<Navigate to="/registration" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
