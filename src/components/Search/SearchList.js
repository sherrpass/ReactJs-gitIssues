import React from "react";
import SearchCard from "./SearchCard";
import { connect } from "react-redux";
import { getIssues } from "../../actions";

const PAGES_TO_LOAD = 10;
const ISSUES_PER_PAGE = 10;

class SearchList extends React.Component {
    componentDidMount() {
        const { query, page: pageNum } = this.props.params;
        if (!query || !pageNum) {
            return;
        }
        this.props.getIssues(query, parseInt(pageNum));
    }
    renderList = () => {
        const { page: pageNum } = this.props.params;
        if (pageNum % PAGES_TO_LOAD === 0) {
            var index = 90;
        } else {
            // eslint-disable-next-line
            var index = ISSUES_PER_PAGE * ((pageNum % PAGES_TO_LOAD) - 1);
        }
        return this.props.issues
            .slice(index, ISSUES_PER_PAGE + index)
            .map((issue) => {
                return <SearchCard issue={issue} key={issue.id} />;
            });
    };
    render() {
        if (this.props.issues.length === 0) {
            return (
                <div class="ui segment">
                    <div class="ui active transition visible inverted dimmer">
                        <div class="content">
                            <div class="ui inverted text loader">Loading</div>
                        </div>
                    </div>
                    <img
                        alt="loader"
                        src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                        class="ui image"
                    />
                </div>
            );
        }
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { issues: state.issues };
};

export default connect(mapStateToProps, { getIssues })(SearchList);
