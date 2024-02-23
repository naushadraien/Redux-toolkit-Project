import { PrivateLayout, PublicLayout } from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";
import { DASHBOARD_ROUTE, TEST_ROUTE } from "./routePaths";

const routes: IRoutes[] = [
  {
    id: 1111111,
    path: TEST_ROUTE,
    component: Test,
    layout: PublicLayout,
    // isProtected: false,
  },
  {
    id: 101,
    path: DASHBOARD_ROUTE,
    component: Dashboard,
    layout: PrivateLayout,
    // isProtected: true,
  },
];

export interface IRoutes {
  id: number;
  path: string;
  component: React.FC;
  layout: React.FC<React.PropsWithChildren<{ extraInfo?: any }>>;
  isProtected?: boolean;
  redirectToOnAuth?: string;
  role?: string[];
  restrictTo?: string[];
  allowTo?: string[];
  children?: Array<IChildren>;
}

export interface IChildren {
  id: number;
  path: string;
  component: React.FC;
  children?: Array<IChildren>;
}

export default routes;
