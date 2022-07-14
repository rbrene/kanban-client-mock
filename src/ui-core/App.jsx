import { AppWrapper } from '../styled';
import { Grid, GridItemHeader, GridItemBody } from '../components/Grid';
import Navbar from '../components/nav/Nav';

export default function App() {
  return (
    <AppWrapper>
      <Grid>
        <Navbar/>
        <GridItemHeader></GridItemHeader>
        <GridItemBody></GridItemBody>
      </Grid>
    </AppWrapper>
  );
}

