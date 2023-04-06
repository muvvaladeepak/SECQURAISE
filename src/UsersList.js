import { useState, useEffect } from "react";
import { findAll } from "./users";
import UserListItem from "./UserListItem";
import "./App.css";
import Centerphoto from "./Centerphoto";
import Rightside from "./Rightside";

function UsersList() {
  const [users, setusers] = useState([]);

  const fetchData = async () => {
    const res = await findAll();

    setusers([...res]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="topone">
        <h2>Design</h2>
      </div>
      <div className="toptwo"></div>
      <div className="leftone" id="deepak"></div>
      <div className="lefttwo">
        <Rightside users={users} />
      </div>
      <div className="leftthree" id="list_div">
        <Centerphoto users={users} />
      </div>

      <div className="Three">
        <section className="listcontainer">
          <h2>Event</h2>
          <ul>
            {users.map((user) => (
              <UserListItem key={user.id} user={user} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
export default UsersList;
