import { Button } from "a-ui";
import CircularProgress from "../lib/CircularProgress/CircularProgress";

function App() {
    return (
        <>
            <Button size="small" loading={true}>
                Test
            </Button>
            <CircularProgress progress={10} size="medium" />
        </>
    );
}

export default App;
