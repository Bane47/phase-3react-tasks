import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "../Theme/Theme";

export default function Navbar() {
  return (
    <ThemeProvider theme={PrimaryMainTheme}>
    <Paper sx={{backgroundColor: 'primary.main', padding: 2,    }}>
      
      <div style={{color:"white"}}>Authentication</div>
    </Paper>
    </ThemeProvider>
  )
}