import React, { useContext, createContext, useState } from "react";

type IUser = {
  id: number;
  name: string;
};

type IData = {
  user?: IUser;
  signedLoading?: boolean;
};

type IUSerContext = {
  data: IData;
  signed: Boolean;
  signing(): Promise<void>;
  signingOut(): Promise<void>;
};
const UserContext = createContext<Partial<IUSerContext>>({});

export const UserProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IData>({
    signedLoading: false,
    user: null
  });

  const signing = async () => {
    setData({ signedLoading: true });

    await new Promise(resolve => setTimeout(resolve, 5000));

    setData({
      signedLoading: false,
      user: { id: Number(Math.random()), name: `${Math.random()}` }
    });
  };

  const signingOut = async () => {
    setData({ user: null });
  };

  return (
    <UserContext.Provider
      value={{
        data,
        signing,
        signed: !!data.user,
        signingOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
