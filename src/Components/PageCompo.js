import { getTotalPagesHere } from "./PagingUtility"
import PropTypes from "prop-types";


import styles from "../Css/PageCompo.module.css";

function PaginationCompoHere(props){
  const { usersLengthHere, setPageHere, pageHere, deleteSelectedHere } = props;



  const navigatePageHere1 = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPagesHere1) {
      index = totalPagesHere1;
    }
    setPageHere(index);
  };


  const totalPagesHere1 = getTotalPagesHere(usersLengthHere);
  const changePageHere = (index) => {
    setPageHere(index);
  };


  let pagesHere1 = [];

  pagesHere1.push(
    <div
      key={-3}
      className={`${styles.page} ${pageHere === 1 ? styles.disabled : ""}`}
      onClick={() => changePageHere(1)}
    >
      <i className="fas fa-angle-double-left"></i>
    </div>
  );
  pagesHere1.push(

    <div
      key={-2}
      className={`${styles.page} ${pageHere === 1 ? styles.disabled : ""}`}
      onClick={() => navigatePageHere1(pageHere - 1)}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );

  for (let i = 1; i <= totalPagesHere1; i++) {
    pagesHere1.push(
      <div
        key={i}
        onClick={() => changePageHere(i)}
        className={`${styles.page} ${pageHere === i ? styles.selected : ""}`}
      >
        {i}
      </div>
    );
  }
  pagesHere1.push(

    <div
      key={-1}
      className={`${styles.page} ${pageHere === totalPagesHere1 ? styles.disabled : ""}`}
      onClick={() => navigatePageHere1(pageHere + 1)}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
  pagesHere1.push(
 
    <div
      key={0}
      className={`${styles.page} ${pageHere === totalPagesHere1 ? styles.disabled : ""}`}
      onClick={() => changePageHere(totalPagesHere1)}
    >
      <i className="fas fa-angle-double-right"></i>
    </div>
  );

  return (
    <div className={styles.paginationContainer}>
      <button className={styles.delete} onClick={() => deleteSelectedHere()}>
        DELETED 
      </button>
      <div className={styles.pagination}>{pagesHere1}</div>
    </div>
  );
};

export default PaginationCompoHere;




