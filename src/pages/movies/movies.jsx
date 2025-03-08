import { useLocalStorageState } from "../../hooks/use-local-storage-state";
import { Table } from "../../components/table/table";
import "./movies.css";

export const Movies = () => {
  const [moviesState] = useLocalStorageState([], "movies");


return (
    
    <div className="container mt-4  my-movies">
       <Table data={moviesState} onRowClick={() => {}} />
      <i className="bi bi-star" style={{fontSize: "1.5rem", color: "red"}}>My Favorite Movies</i> 
     </div>
    
  );
};

