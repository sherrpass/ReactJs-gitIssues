import React from "react";
import SearchBar from "./SearchBar";
import PageArrows from "./PageArrows";
import SearchList from "./SearchList";

class SearchPage extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <SearchBar />
                <SearchList params={this.props.match.params} />
                <PageArrows params={this.props.match.params} />
            </div>
        );
    }
}

export default SearchPage;
