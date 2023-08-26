import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import PaginationHere from "./Components/PageCompo";
import UsersListHere from "./Components/UsersListCompo";
import config from "./constants";
import { getUsersHere } from "./Components/UserService";
import { getRecordIndexHere } from "./Components/PagingUtility";
import { searchInUsers } from "./Components/SearchUtility";




// Here we start App.js


function App() {



  const [page, setPageHere] = useState(1);
  const [users, setUsersHere] = useState([]);
  
  const selectAllRef = useRef(null);
  const [update, setUpdateHere] = useState(false);


  // here we have to use UseEffect for change everything here by using empty dependency array list


  useEffect(() => {
    getUsersHere(setUsersHere);
  }, []);


  //here we have to search the users by their name, email, roll no
  // by starting page no.1
  const searchUsersHere = (event) => {
    setPageHere(1);
    setUsersHere(searchInUsers(event.target.value, users));
  };


  

// here we have to edit here to change the name, email 


  const editUserHere = (idHere) => {
    let tempUsersHere = users;
    const index = tempUsersHere.findIndex((user) => user.id === idHere);
    tempUsersHere[index].edit = true;
    setUsersHere(tempUsersHere);
    setUpdateHere((prevS) => !prevS);
  };




  // here we have to save the changes for name,roll no which we have to do

  const saveUserHere = (idHere, nameRef, emailRef, roleRef) => {
    let tempUsersHere = users;
    const index = tempUsersHere.findIndex((user) => user.id === idHere);
    tempUsersHere[index].name = nameRef.current.value;
    tempUsersHere[index].email = emailRef.current.value;
    tempUsersHere[index].role = roleRef.current.value;
    tempUsersHere[index].edit = false;
    setUsersHere(tempUsersHere);
    setUpdateHere((prevS) => !prevS);
  };




  // here we have to delete user by clicking atRight delete button

  const deleteUserHere = (idHere) => {
    let tempUsersHere = users.filter((user) => user.id !== idHere);
    setUsersHere(tempUsersHere);
    setUpdateHere((prevS) => !prevS);
  };





// here we have to select one for delete particularly or we have to edit the things


  const selectOneHere = (idHere) => {
    let tempUsersHere = users;
    const index = tempUsersHere.findIndex((user) => user.id === idHere);
    tempUsersHere[index].selected = !tempUsersHere[index].selected;
    setUsersHere(tempUsersHere);
    setUpdateHere((prevS) => !prevS);
  };



// Here we have to select all for delete the all items for a paticular page only (10 items all)


  const selectAllHere = (event) => {

    const listedUserIdsHere = users
    
      .filter((user) => user.show)
      .slice(indexPage, indexPage + config.PAGE_SIZE)

      //here we have to fetch all 10 values from constant.js

      .map((user) => user.id);

    let tempUsersHere = users.map((user) => {
      if (listedUserIdsHere.includes(user.id)) {
        user.selected = event.target.checked;
        return user;
      }
      return user;
    });

    setUsersHere(tempUsersHere);
    setUpdateHere(!update);
  };





  const deleteSelectedHere = () => {
    // popup message for delete any user after it shows for confirmation
    if (window.confirm("Are  you sure !!!")) {
      setUsersHere((prevState) => prevState.filter((user) => !user.selected));

      selectAllRef.current.checked = false;
    }
  };

  const indexPage = getRecordIndexHere(page);
  return (
    <div className="App">
      <input
        className="searchHere"
        type="text"
        placeholder="Search by Name, Email or Role"
        onChange={searchUsersHere}
      ></input>
      
      <UsersListHere
        page={page}
        setPage={setPageHere}
        selectAll={selectAllHere}
        selectAllRef={selectAllRef}
        selectOne={selectOneHere}
        saveUser={saveUserHere}
        editUser={editUserHere}
        deleteUser={deleteUserHere}
        users={users
          .filter((user) => user.show)
          .slice(indexPage, indexPage + config.PSize)}
          
          //here we have to fetch all 10 values from constant.js

      ></UsersListHere>
       


        {/* Here we have to move one page to another page by clicking arrow button in page */}
      <PaginationHere
        usersLengthHere={users.filter((user) => user.show).length}
        pageHere={page}
        setPageHere={setPageHere}
        deleteSelectedHere={deleteSelectedHere}
      ></PaginationHere>
    </div>
  );
}

export default App;
