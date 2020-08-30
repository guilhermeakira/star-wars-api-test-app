import React from 'react'

export interface MasterContext {
  master: string;
  setCurrentMaster: (currentMaster: string) => void;
};

export const defaultMasterContext = {
  master: '',
  setCurrentMaster: (currentMaster: string) => {}
};

export default React.createContext(defaultMasterContext)
