import { CssBaseline, Container, Typography } from "@mui/material";
import TrafficLightComponents from "./TrafficLightsContainer";

const App = () => (
  <>
    <CssBaseline />
    <Container maxWidth="sm">
      <header className="App-header">
        <Typography variant="h4" component="h1" gutterBottom>
          NET Traffic Light System
        </Typography>
        <TrafficLightComponents />
      </header>
    </Container>
  </>
);

export default App;
