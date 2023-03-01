import arrow from "../../../assets/images/arrow.png";
import "./pagination.css";

export const Pagination = ({ pagination, slogan, postPerPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(slogan.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <div className="flex pagination">
        <div className=""></div>
        <div className="pagination-btn-container ">
          {pageNumber.map((number, i) => {
            return (
              <button
                key={i}
                className="btn-pagination"
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            );
          })}
        </div>
        <div className="flex">
          <button className="btn-pagination">
            Next <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};
