import React from 'react';
import { MasterContext } from '../State/MasterContext';

export const useMaster = (): MasterContext => {
  const [master, setMaster] = React.useState('');

  const setCurrentMaster = React.useCallback((currentMaster: string): void => {
    setMaster(currentMaster);
  }, []);

  return {
    master,
    setCurrentMaster,
  };
};

export default useMaster;
