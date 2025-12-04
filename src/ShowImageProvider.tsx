import { createContext, useState, ReactNode } from "react";

type ShowImageState = {
  isOpen: boolean;
  src: string;
};

export const ShowImageContext = createContext<{
  state: ShowImageState;
  setState: (value: ShowImageState) => void;
}>({
  state: { isOpen: false, src: "" },
  setState: () => {},
});

export const ShowImageProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ShowImageState>({ isOpen: false, src: "" });

  return (
    <ShowImageContext.Provider value={{ state, setState }}>
      {children}
    </ShowImageContext.Provider>
  );
};
