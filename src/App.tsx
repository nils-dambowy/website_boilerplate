import { MantineProvider } from "@mantine/core";
import AllRoutes from "./routes";

import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider>
      <AllRoutes />
    </MantineProvider>
  )
}

export default App
