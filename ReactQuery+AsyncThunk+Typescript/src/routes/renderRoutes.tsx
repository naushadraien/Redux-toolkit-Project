import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import CheckAuthElement from "../designComponents/CheckAuthElement";
import ErrorBoundary from "../designComponents/ErrorBoundary";
import ProtectedComponent from "../designComponents/ProtectedComponent";
// import envs from '../config/env.config';
// import {
//   CheckAuthElement,
//   ErrorBoundary,
//   ProtectedComponent,
// } from '../designComponents';
import routesObjects from "./routes";

const renderNestedRoutes = (route: any) => {
  if ("children" in route && Array.isArray(route.children)) {
    return route.children.map((child: any) => ({
      path: child.path,
      children: [
        {
          index: true,
          element: <child.component />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "",
          children: renderNestedRoutes(child),
        },
      ],
    }));
  }
  return null;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: routesObjects.map((route) => {
        if (route?.path === "*") {
          return {
            path: route?.path,
            element: <route.component />,
          };
        }
        return {
          path: route?.path,
          errorElement: <ErrorBoundary />,
          element: route.isProtected ? (
            <ProtectedComponent
              allowed={Array.isArray(route?.allowTo) ? route.allowTo : []}
            >
              <route.layout extraInfo={route || null} />
            </ProtectedComponent>
          ) : route.redirectToOnAuth ? (
            <CheckAuthElement redirectTo={route.redirectToOnAuth}>
              <route.layout />
            </CheckAuthElement>
          ) : (
            <>
              <route.layout />
            </>
          ),
          children: [
            {
              index: true,
              element: <route.component />,
              errorElement: <ErrorBoundary />,
            },
            {
              path: "",
              children: renderNestedRoutes(route),
            },
          ],
        };
      }),
    },
  ],
  {
    basename: process.env.REACT_APP_BASENAME,
  }
);

export default router;
