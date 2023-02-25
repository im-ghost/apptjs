import {
  useState,
  useEffect
} from "react"
import {
  useDispatch,
  useSelector
} from "react-redux"
import {
  useParams
} from "react-router-dom"
import Doctors from "../Components/Doctors"
import { getDoctors } from "../features/users/usersSlice"
const SearchResults = () =>{
  const [results,setResults] = useState(null)
  const [error,setError] = useState(null)
  const { search } = useParams();
  const dispatch = useDispatch();
  const {
    doctors,
    error,
    isSuccessful
  } = useSelector(state=>state.users)
  useEffect(()=>{
    dispatch(getDoctors)
  },[])
  useEffect(()=>{
    if(error){
      setError(error.message)
    }
    if(doctors){
      const allDocs = [...doctors]
    const docs = allDocs.filter(doc=>doc.specialities.contains(search))
      setResults(docs)
    }
  },[dispatch,doctors,error,isSuccessful])
  return(
    <div>
       <Typography variant="h3">Search results for {search}</Typography>
       {
         results?.length > 0 ? <Doctors doctor={results}/> : (<Typography variant="h5">No results found</Typography>)
       }
    </div>
    )
}
export default SearchResults;