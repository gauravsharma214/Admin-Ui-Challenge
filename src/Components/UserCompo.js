import { useRef } from "react";


import styles from "../Css/UserCompo.module.css"


function UserHere1(props){
  
  
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  const nameRefHere1 = useRef(null);
  const emailRefHere1 = useRef(null);
  const roleRefHere1 = useRef(null);



  return (





    <tr key={user.id} className={user.selected ? styles.selected : ""}>

      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            placeholder=""
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>


      <td>
   
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          placeholder=""
          ref={nameRefHere1}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>


  



      <td>

        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="email"
          placeholder=""
          ref={emailRefHere1}
          name="email"
          defaultValue={user.email}
        />
      </td>







      <td>
         
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          placeholder=""
          ref={roleRefHere1}
          name="role"
          defaultValue={user.role}
        />
      </td>



     


      <td className={styles.icons}>
      
        {user.edit ? (
          <i
            onClick={() => saveUser(user.id, nameRefHere1, emailRefHere1, roleRefHere1)}
            className="fas fa-save"
          ></i>
          
        ) : (
          
          <i onClick={() => editUser(user.id)} className="fas fa-edit"></i>
        )}
            
        <i onClick={() => deleteUser(user.id)} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  );
};



export default UserHere1;
