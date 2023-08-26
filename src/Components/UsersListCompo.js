import PropTypes from "prop-types";
import { useEffect } from "react";

import User from "./UserCompo";
import config from "../constants";
import styles from "../Css//UsersListCompo.module.css";

function UsersList1(props){
  const {
    users,
    deleteUser,
    editUser,
    saveUser,
    selectAll,
    selectOne,
    selectAllRef,
    setPage,
    page,
  } = props;
  useEffect(() => {
    if (users.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage, users.length]);
  let fillRowsHere = [];
  for (
    let i = users.filter((user) => user.show).length;
    i < config.PSize;
    i++
  ) {
    fillRowsHere.push(<tr key={i}></tr>);
  }

  if (users.length === 0 && page === 1) {
    return <div>SORRY !! NO USER </div>;
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              ref={selectAllRef}
              onChange={(e) => {
                selectAll(e);
              }}
              name="selectAll"
            />
          </th>
          <th>Name 's</th>
          <th>Email 's</th>
          <th>Role 's</th>
          <th>Action 's</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return user.show ? (
            <User
              selectOne={selectOne}
              saveUser={saveUser}
              editUser={editUser}
              deleteUser={deleteUser}
              key={user.id}
              user={user}
            ></User>
          ) : (
            ""
          );
        })}
        {fillRowsHere}
      </tbody>
    </table>
  );
};

export default UsersList1;
