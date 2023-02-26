import { 
  useRouteError,
  Link
 } from "react-router-dom";
import { Paper, Typography} from "@mui/material"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen w-screen flex justify-center align-center text-center">
    <Paper className="h-1/2 w-4/5 rounded-xl shadow-3xl">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h6">Sorry, an unexpected error has occurred.</Typography>
      <Typography variant="h6">
        <Link to="/">Go back home</Link>
      </Typography>
      </Paper>
    </div>
  );
}