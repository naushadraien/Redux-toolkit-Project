import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import escConstants from "../../constants";
import { useRoot } from "../../context/RootProvider";
import { DASHBOARD_ROUTE } from "../../routes/routePaths";

export interface ICheckAuthProps {
  children: React.ReactNode;
  redirectTo?: string;
}
const CheckAuthElement = ({
  redirectTo = DASHBOARD_ROUTE,
  children,
}: ICheckAuthProps) => {
  const token = localStorage.getItem(escConstants.LOCAL_STORAGE_KEY.accessKey);

  const { auth: user } = useRoot();
  const userId = user?._id;

  if (!!token && !!userId) {
    return <Navigate to={redirectTo} replace />;
  }
  return (
    <div>
      {children} || <Outlet />
    </div>
  );
};

export default CheckAuthElement;
