import React from "react";
import { connect } from "react-redux";
import CommentCard from "./CommentCard";

class ResultList extends React.Component {
    renderList = () => {
        if (this.props.comments.length > 0) {
            var comments = [this.props.issue, ...this.props.comments];
        } else {
            var comments = [this.props.issue];
        }

        return comments.map((comment) => {
            return <CommentCard comment={comment} />;
        });
    };
    render() {
        if (Object.keys(this.props.issue).length === 0) {
            return <div></div>;
        }
        return <div className="ui large comments">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments, issue: state.currIssue };
};

export default connect(mapStateToProps)(ResultList);
