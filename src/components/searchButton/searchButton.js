import "./searchButton.css";
import img from "../../images/searchicon.png";
const SearchButton = (props) => {
  const { search } = props;

  return (
    <button className="searchButton" onClick={search}>
      <img src={img} alt="" onClick={search} />
    </button>
  );
};
export default SearchButton;
