import { Box, Card, CardContent, Typography } from '@mui/material';
import { useNotificationsQuery } from 'api/notifications/notifications';
import logo from 'assets/images/cybellum-logo-vertical-black.svg';
import Styled from './intro.styled';

export default function Intro() {
  const { data } = useNotificationsQuery();

  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardContent>
          <Styled.CardMedia component="img" alt="Cybellum-intro" image={logo} />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            First message:
          </Typography>
            <Box textAlign='start'>
              <Typography variant="body2" color="text.secondary">
                {`title: ${data?.[0].title}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`description: ${data?.[0].description}`}
              </Typography>
            </Box>
        </CardContent>
      </Card>
    </Styled.Box>
  );
}
