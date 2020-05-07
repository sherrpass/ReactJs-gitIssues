import React from "react";
import { connect } from "react-redux";
import { getIssues, clearIssues } from "../../actions";
import { Link } from "react-router-dom";
import { PAGES_TO_LOAD } from "../../config";

class PageArrows extends React.Component {
    onClick = (num) => {
        const { query, page: pageNum } = this.props.params;
        const pageNow = parseInt(pageNum) + parseInt(num);

        if (
            (pageNow % PAGES_TO_LOAD === 1 && pageNum % PAGES_TO_LOAD === 0) ||
            (pageNow % PAGES_TO_LOAD === 0 && pageNum % PAGES_TO_LOAD === 1)
        ) {
            this.props.clearIssues();
            this.props.getIssues(query, pageNow);
        }
    };
    render() {
        const { query, page: pageNum } = this.props.params;
        return (
            <div>
                <Link
                    to={`/search/${query}/${parseInt(pageNum) - 1}`}
                    className="ui icon button"
                    onClick={() => {
                        this.onClick("-1");
                    }}
                >
                    <i className="icon arrow alternate circle left"></i>
                </Link>
                <Link
                    to={`/search/${query}/${parseInt(pageNum) + 1}`}
                    className="ui icon button"
                    onClick={() => {
                        this.onClick("1");
                    }}
                >
                    <i className="icon arrow alternate circle right"></i>
                </Link>
            </div>
        );
    }
}

export default connect(null, { getIssues, clearIssues })(PageArrows);
