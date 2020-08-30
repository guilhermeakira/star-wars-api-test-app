import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

import messages from './messages';
import useFetch from '../Hooks/useFetch';
import masterContext from '../State/MasterContext';
import { FETCH_STATUS } from '../constants'

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(2, 7)};
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Home = () => {
  const theme = useTheme();
  const [shouldFetch, setShouldFetch] = useState(false);
  const { setCurrentMaster } = useContext(masterContext);

  const { status, masterName } = useFetch(shouldFetch);
  const history = useHistory();

  useEffect(() => {
    if (masterName) {
      setCurrentMaster(masterName)
      history.push('/result');
    }
  }, [history, masterName, setCurrentMaster]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mt={26} mb={1}>
        <Typography color="textPrimary" variant="h1">
          {messages.welcomeText}
          <b>
            {messages.appName}
          </b>
        </Typography>
      </Box>
      <Typography color="textPrimary" variant="subtitle2">
        {messages.frontendChallenge}
      </Typography>
      <Box mt={20}>
        <StyledButton
          disableElevation
          disabled={status === FETCH_STATUS.FETCHING}
          onClick={() => setShouldFetch(true)}
          variant="contained"
          theme={theme}
        >
          <Typography variant="button">
            {messages.buttonLabel}
          </Typography>
        </StyledButton>
      </Box>
    </Box>
  );
}

export default Home;
