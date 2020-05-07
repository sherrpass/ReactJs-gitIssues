import React from "react";
import history from "../../history";

class SearchBar extends React.Component {
    state = { query: "" };
    onSubmit = () => {
        history.push(`/search/${this.state.query}/1`);
    };
    render() {
        return (
            <div style={{ marginTop: "20px" }} className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <label>Search</label>
                    <input
                        value={this.state.query}
                        onChange={(e) => {
                            this.setState({ query: e.target.value });
                        }}
                    ></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;
