import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
import ArrowBack from '@material-ui/icons/ArrowBack';

const StyledAppBar = styled(AppBar)`
  ${shadows}
`;

export const Result = () => {
  return (
    <StyledAppBar elevation={0} color="transparent">
      <Toolbar>
        <IconButton href="/">
          <ArrowBack />
        </IconButton>
        <Typography>
          back
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Result;
