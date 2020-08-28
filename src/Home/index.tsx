import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(2, 9)};
`;

export const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={false} disableGutters>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box mt={26} mb={1}>
          <Typography color="primary" variant="h1">
            Welcome to test-app
          </Typography>
        </Box>
        <Typography color="primary" variant="subtitle2">
          FRONTEND CHALLENGE
        </Typography>
        <Box mt={20}>
          <StyledButton href="/result" variant="contained" color="primary" theme={theme}>
            <Typography variant="button">
              S t a r t
            </Typography>
          </StyledButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
