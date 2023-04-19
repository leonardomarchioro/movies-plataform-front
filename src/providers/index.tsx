import * as React from "react";

import ThemeStyleProvider from "./Theme";
import TMDAProvider from "./Movies";
import UserProvider from "./Users";
import RentProvider from "./Rent";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeStyleProvider>
      <UserProvider>
        <TMDAProvider>
          <RentProvider>{children}</RentProvider>
        </TMDAProvider>
      </UserProvider>
    </ThemeStyleProvider>
  );
};

export default Providers;
