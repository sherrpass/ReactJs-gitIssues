import React from "react";
import { connect } from "react-redux";
import { setIssue } from "../../actions";
import ReactMarkdown from "react-markdown";

class SearchCard extends React.Component {
    onClickEvent = () => {
        console.log("clicked");

        this.props.setIssue(this.props.issue);
    };
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
        const { title, created_at, user } = this.props.issue;
        return (
            <div className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <div onClick={this.onClickEvent} className="header">
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

export default connect(null, { setIssue })(SearchCard);
