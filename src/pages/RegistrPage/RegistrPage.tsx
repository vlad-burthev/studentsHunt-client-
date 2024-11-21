import type { FC } from "react";
import { Outlet } from "react-router-dom";

interface RegistrPageProps {}

const RegistrPage: FC<RegistrPageProps> = () => {
  return (
    <div>
      <div>
        <h1>Registration</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default RegistrPage;
