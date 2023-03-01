import { 
  useRouteError,
  useNavigate
 } from "react-router-dom";
import { Paper, Typography} from "@mui/material"
export default function ErrorPage() {
  alert("error")
  const error = useRouteError();
  const navigate = useNavigate()
  console.error(error);
alert(error)
  return (
    <div id="error-page" className="h-screen w-screen flex justify-center align-center text-center">
    <Paper className="h-1/2 w-4/5 rounded-xl shadow-3xl">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h6">Sorry, an unexpected error has occurred.</Typography>
         <div onClick={()=>{ navigate("/signin")}}>
         <Typography variant="h6">Sign In</Typography>
      </div>
      </Paper>
    </div>
  );
}