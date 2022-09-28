import "./inputField.css";

const InputField = (props) => {
  const { query, setQuery, search } = props;
  return (
    <input
      type="text"
      placeholder="search term"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
    />
  );
};
export default InputField;
