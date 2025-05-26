import { Button } from "a-ui";
import { useState } from "react";
import CircularProgress from "../lib/CircularProgress/CircularProgress";
import Switch from "../lib/Switch/Switch";

function App() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <>
            <Button size="small" loading={true}>
                Test
            </Button>
            <CircularProgress progress={10} size="medium" />
            <Switch
                size="medium"
                checked={checked}
                onChange={() => {
                    setChecked((prev) => !prev);
                }}
            />
        </>
    );
}

export default App;
