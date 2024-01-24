import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import SearchFilterLayout from "./SearchFilterLayout";

function SearchAndFilter() {
  return (
    <div className="mx-auto container">
      <SearchFilterLayout>
        <SearchBox />
        <FilterBox />
      </SearchFilterLayout>
    </div>
  );
}

export default SearchAndFilter;
