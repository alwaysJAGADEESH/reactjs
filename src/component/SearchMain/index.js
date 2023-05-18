import {Component} from 'react'
import SearchItem from '../SearchItem'

class SearchMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      DeleteTodo: props.initialHistoryList,
    }
  }

  deleteTodo = id => {
    const {DeleteTodo} = this.state
    const updatedDeleteList = DeleteTodo.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      DeleteTodo: updatedDeleteList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, DeleteTodo} = this.state
    const searchResults = DeleteTodo.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="search-container">
          <div className="heading-container">
            <h1 className="heading">History</h1>
          </div>
          <div className="searchbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="initialHistory-list">
          {searchResults.map(eachHistory => (
            <SearchItem
              key={eachHistory.id}
              searchDetails={eachHistory}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchMain
