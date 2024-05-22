import React from 'react'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
      <span><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" placeholder='Enter for search...' onChange={(event)=>handleSearchNote(event.target.value) }  className="inputfields"/>
    </div>
  )
}

export default Search
