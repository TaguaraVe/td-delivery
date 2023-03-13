import { useState, createContext, useContext } from 'react';

const Store = createContext(null);

export const StoreProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('Pizza');
  const [location, setLocation] = useState('Austin,TX');
  const [activeTab, setActiveTab] = useState('Delivery');

  const value = {
    activeCategory,
    setActiveCategory,
    location,
    setLocation,
    activeTab,
    setActiveTab,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStore = () => {
  return useContext(Store);
};
