import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Rightside(pwqe) {
  const [specificPers, setSpecificPers] = useState({
    Date: "",
    Gender: "",
    Id: "",
    Location: "",
    Name: "",
    Photo: "",
    Time: "",
    id: "",
  });
  const{users} = pwqe
  let [searchParams] = useSearchParams();
  const getId = searchParams.get("id");
  const specificPersonAr = users.filter((user) => user.Id === getId);

  const specificPerson = specificPersonAr[0];
  useEffect(() => {
    setSpecificPers(() => ({ ...specificPerson }));
  }, [specificPers,specificPerson]);


  return (
    <div>
      <div>
        <p>{specificPers.Id}</p>
        <ul>
          <li>Name:{specificPers.Name}</li>
          <li>Location:{specificPers.Location}</li>
          <li>Date:{specificPers.Date}</li>
          <li>Time;{specificPers.Time}</li>
        </ul>
        <p>
          Discription:{specificPers.Name}detected at{specificPers.Location}on
          {specificPers.Date}
        </p>
      </div>
      <div>{specificPers.gender}</div>
    </div>
  );
}
export default Rightside;
