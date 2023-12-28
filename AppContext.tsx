import { ReactComponentElement, createContext, useContext, useEffect, useState } from "react";

export interface IStackedView<T = unknown> {
  id: number;
  title: String,
  action?: ReactComponentElement<any, any>;
  content: ReactComponentElement<any, any>;
  props: T;
  // Add any other properties your stacked views may have
}

export type PopupAction = {
  type: "close" | "submit";
  payload?: any;
}

export type AppContextType<T = unknown> = {
  currentPopup: IStackedView<T> | null;
  stackedViews: IStackedView<T>[];
  addStackedView: (view: IStackedView<T>) => void;
  removeStackedView: (id: number) => void;
  dispatchPopupAction: (action: PopupAction) => void;
  lastPopupAction: PopupAction | null;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }) {
  const [stackedViews, setStackedViews] = useState<IStackedView[]>([]);
  const [currentPopup, setCurrentPopup] = useState<IStackedView | null>(null);
  const [lastPopupAction, setLastPopupAction] = useState<PopupAction | null>(null);

  useEffect(() => {
    if (stackedViews.length > 0) {
      setCurrentPopup(stackedViews[stackedViews.length - 1]);
    } else {
      setCurrentPopup(null);
    }
  }, [stackedViews])

  const addStackedView = (view: IStackedView) => {
    setStackedViews((prevViews) => [...prevViews, view]);
  };

  const removeStackedView = (id: number) => {
    setStackedViews((prevViews) => prevViews.filter((view) => view.id !== id));
  };

  const dispatchPopupAction = (action: PopupAction) => {
    setLastPopupAction(action);
  }

  const value: AppContextType = {
    currentPopup,
    stackedViews,
    addStackedView,
    removeStackedView,
    dispatchPopupAction,
    lastPopupAction,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
 
  if (!context) {
   throw new Error('useAppContext must be used within a AppContextProvider');
  }
 
  return context;
 };