const SearchBox = ({searchChange}) => {
 return(
  <div>
   <input
   className="tc pa3 ba b--purple bg-lightest-blue"
   type="seatch" 
   onChange={searchChange}
   placeholder="Search robots" />
  </div>
 )
}

export default SearchBox