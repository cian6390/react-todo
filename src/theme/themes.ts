
import { createMuiTheme } from "@material-ui/core/styles";

const light = () => createMuiTheme({
    palette: {
        type: "light",
    },
});

const dark = () => createMuiTheme({
    palette: {
        type: "dark",
    },
});

const themes = { light, dark }

export type ThemeKey = keyof typeof themes;

export function getTheme(mode: ThemeKey) {
    return themes[mode]()
}

export default themes