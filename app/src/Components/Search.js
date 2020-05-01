import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchWeather';
import Location from './Location';

const SearchBar = (props) => {
    const [query, setQuery] = useState('san');

    const handleChanges = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.fetchWeather(query)
    }
    console.log(props.searchResults)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='search weather' name='query' value={query} onChange={handleChanges} />
                <button type='submit'>Search</button>
            </form>
            {props.error && <p>Error: {props.error}</p>}
            {props.isLoading ? (
                <div>
                    <h1>Loading</h1>
                </div>
            ) : (
                    <Location searchResults={props.searchResults} />
                )}
        </div>

    )
}

function mapStateToProps(state) {
    return {
        searchResults: state.search.searchResults,
        isLoading: state.search.isLoading,
        error: state.search.error
    }
}
const mapDispatchToProps = {
    fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);