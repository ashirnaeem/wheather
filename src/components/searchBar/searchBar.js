import { Select } from "antd";
import "antd/dist/antd.css";
import "./searchBar.css";
// import img from "../../images/download.png";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SearchBar = () => {
  return (
    <div className="searchBar">
      <Select
        className="custom-select"
        defaultValue="Search By"
        style={{
          width: 120,
          border: 2,
        }}
        onChange={handleChange}
      >
        {/* <Option value="jack">Jack</Option> */}
        <Option value="City Name">City Name</Option>
        <Option value="city code">City Code</Option>
        <Option value="city Id">City Id</Option>
      </Select>
    </div>
  );
};

export default SearchBar;
