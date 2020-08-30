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

const StyledAvatar = styled(Avatar)`
  height: 380px;
  width: 380px;
`;

export const Result = () => {
  const theme = useTheme();
  const [shouldFetch, setShouldFetch] = useState(false);
  const { master } = useContext(masterContext);
  const { status, masterName } = useFetch(shouldFetch, master);
  const palette = mapMasterToPalette[masterName];

  useEffect(() => {
    if (status === FETCH_STATUS.FETCHED) {
      setShouldFetch(false)
    }
  }, [status])

  return (
    <Box height="100vh" bgcolor={`${palette}.contrastText`}>
      <StyledAppBar elevation={0} color="transparent">
        <Toolbar>
          <IconButton color={palette} href="/">
            <ArrowBack />
          </IconButton>
          <Typography color={palette}>
            {messages.back}
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box pt={22}>
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
        </Box>
        <Box pt={9}>
          <StyledAvatar alt={masterName} src={mapMasterToIcon[masterName]} />
        </Box>
        <Box pt={5}>
          <Typography color={palette} variant="subtitle1">
            {messages.yourMaster}<b>{masterName}</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Result;
