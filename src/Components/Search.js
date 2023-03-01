import {
  TextField,
  Button,
  Box
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Search = () =>{
  const [search, setSearch] = useState("")
  const navigate = useNavigate;
  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw', border:'none'},
      }}
      className="shdow-2xl"
      noValidate
      autoComplete="on">
      <TextField
    id="search"
    label="Search"
    placeholder="What type of doctor are you looking for?"
    className="bg-blue-100 border-none rounded-2xl" 
     InputProps={{
     value:search,
     onChange:(e)=>{
       setSearch(e.target.value)
     },
     }}
     />
     <Button variant="contained" onClick={()=>{
       navigate(`search/${search}`)
     }}>🔍</Button>
    </Box>
    )
}

export default Search