const SearchItem = props => {
  const {searchDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="historyItem">
      <h1 className="time">{timeAccessed}</h1>
      <p className="logoUrl">{logoUrl}</p>
      <p className="title">{title}</p>
      <p className="domainUrl">{domainUrl}</p>
      <div className="delete-button-container">
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
