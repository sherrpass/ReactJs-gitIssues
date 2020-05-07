import React from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

class ResultHeader extends React.Component {
    getDate(createdAt) {
        const dateObj = new Date(Date.parse(createdAt));
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        return `${
            months[dateObj.getMonth()]
        } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    }
    render() {
        if (!this.props.issue) {
            return <div></div>;
        }
        const { title, created_at, user } = this.props.issue;
        return (
            <div style={{ marginTop: "30px" }} className="item">
                <div className="content">
                    <div style={{ fontSize: "25px" }} className="header">
                        <ReactMarkdown source={title} />
                    </div>
                    <div
                        style={{ fontSize: "12px", color: "grey" }}
                        className="description"
                    >
                        {`Opened on ${this.getDate(created_at)} by ${
                            user.login
                        }`}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { issue: state.currIssue };
};

export default connect(mapStateToProps)(ResultHeader);
