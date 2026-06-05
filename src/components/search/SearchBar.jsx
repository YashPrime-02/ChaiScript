export default function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="search-bar">

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />

    </div>
  );
}