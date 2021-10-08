const SearchBar = ({searchBar,searchChange}) => {
    return (
        <div>
            <input className="pa2 b--purple bg-lightest-blue" 
            type="search" 
            placeholder="Search Friends"
            onChange={searchChange}/>

        </div>
    )
}
export default SearchBar;