import './index.css'

const SearchItem = props => {
  const {searchDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="historyItem">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="address-container">
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div className="delete-button-container">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onDeleteTodo}
        >
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
