import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component <any, any> {

    constructor(props: any) {
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            term: ''
        }
    }

    handleTermChange(e: { target: { value: any; }; }) {
        this.setState({ term: e.target.value });
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;