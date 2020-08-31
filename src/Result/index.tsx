import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';
import ArrowBack from '@material-ui/icons/ArrowBack';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useFetch from '../Hooks/useFetch';
import { mapMasterToPalette, mapMasterToIcon, FETCH_STATUS } from '../constants';
import messages from './messages';
import masterContext from '../State/MasterContext';

const StyledAppBar = styled(AppBar)`
  ${shadows}
`;

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(2, 4)};
  text-transform: none;
`;

const StyledAvatar = styled(({ isMobile, ...props }) => (
  <Avatar {...props} />
))`
  height: ${({ isMobile }) => isMobile? '302px' : '380px'};
  width: ${({ isMobile }) => isMobile? '302px' : '380px'};
`;

export const Result = () => {
  const theme = useTheme();
  const [shouldFetch, setShouldFetch] = useState(false);
  const { master } = useContext(masterContext);
  const { status, masterName } = useFetch(shouldFetch, master);
  const palette = mapMasterToPalette[masterName];
  const isMobile = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    if (status === FETCH_STATUS.FETCHED) {
      setShouldFetch(false)
    }
  }, [status])

  const pathButton = (
    <StyledButton
      onClick={() => setShouldFetch(true)}
      disabled={status === FETCH_STATUS.FETCHING}
      variant="contained"
      color={palette}
      theme={theme}
      disableElevation
    >
      <Typography>
        <b>
          {messages.buttonLabel}
        </b>
      </Typography>
    </StyledButton>
  );

  return (
    <Box height="100%" minHeight="100vh" bgcolor={`${palette}.contrastText`}>
      <StyledAppBar elevation={0} color="transparent">
        <Toolbar>
          <IconButton color={palette} href="/star-wars-api-test-app">
            <ArrowBack />
          </IconButton>
          <Typography color={palette}>
            {messages.back}
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Box display="flex" flexDirection="column" alignItems="center">
        {!isMobile ? (
          <Box pt={22}>
            {pathButton}
          </Box>
        ) : null}
        <Box pt={isMobile ? 26 : 9}>
          <StyledAvatar isMobile={isMobile} alt={masterName} src={mapMasterToIcon[masterName]} />
        </Box>
        <Box p={isMobile ? 4 : 5}>
          <Typography color={palette} variant="subtitle1">
            {messages.yourMaster}<b>{masterName}</b>
          </Typography>
        </Box>
        {isMobile ? (
          <Box py={4}>
            {pathButton}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default Result;
