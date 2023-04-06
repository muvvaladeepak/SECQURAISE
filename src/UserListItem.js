import { useNavigate } from "react-router-dom";
    import "./index.css";
function UserListItem(propws) {
  const { user } = propws;
  const navigate = useNavigate();


  const onHandleId = (id) => {
    navigate({
        pathname: '/',
        search: `?id=${id}`,
      })
  };

  return (
    <div onClick={() => onHandleId(user.Id)}>
      <div className="list-items">
        <div className="">
          {user.Id}:{user.Location}
          <div className="">
            {user.Date}
            {user.Time}
          </div>
        </div>
        <div className="listthree">PersonDeteceted </div>
      </div>
      <div>
        <script></script>
      </div>
    </div>
  );
}

export default UserListItem;
