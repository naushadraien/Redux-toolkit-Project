import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// import { UserRolesType } from '../@types';
import constants from "../constants";
// import { connectSocket } from '../socket';
// import requestAPI from '../utils/requestAPI';

export type AuthType = {
  _id: string;
  //   role?: UserRolesType;
  avatar?: string;
  name: string;
  fullName: string;
  emailAddress: string;
  title?: string;
  mobileNumber?: string;
  isOnboardingCompleted: boolean;
  onboardingStep: number;
  hasEmailVerified?: boolean;
  companyDetails?: {
    companyName?: string;
  };
  contactInfo?: {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  };
  // companyName?: string;
} | null;

export const RootContext = createContext<{
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  clearAuth: () => void;
  setAccessToken: (_t: string) => void;
}>({
  auth: null,
  setAuth: () => {},
  clearAuth: () => {},
  setAccessToken: () => {},
});

type RootProviderProps = {
  children: React.ReactNode;
};
export const RootProvider = ({ children }: RootProviderProps) => {
  const [auth, setAuth] = useState<AuthType>(null);
  const [isReady, setReady] = useState(false);

  const initAuth = async () => {
    const token = localStorage.getItem(constants.LOCAL_STORAGE_KEY.accessKey);
    const userStrings = localStorage.getItem(constants.LOCAL_STORAGE_KEY.user);

    const user = userStrings && JSON.parse(userStrings);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    setAuth(user);
    setReady(true);
  };

  useEffect(() => {
    initAuth();
  }, []);

  const clearAuth = () => setAuth(null);

  const setAccessToken = (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    localStorage.setItem(constants.LOCAL_STORAGE_KEY.accessKey, token);
  };

  return (
    <RootContext.Provider
      value={{
        auth,
        setAuth,
        clearAuth,
        setAccessToken,
      }}
    >
      {isReady ? children : null}
    </RootContext.Provider>
  );
};

export const useRoot = () => useContext(RootContext);

export default RootProvider;
