import React from "react";
import ReactMarkdown from "react-markdown";

class CommentCard extends React.Component {
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
        const { user, created_at, body } = this.props.comment;
        return (
            <div
                className="comment"
                style={{ fontSize: "14px", marginBottom: "25px" }}
            >
                <div className="avatar">
                    <img alt={user.login} src={user.avatar_url} />
                </div>
                <div className="content">
                    <div
                        style={{
                            border: "1px solid #D3D3D3 ",
                            padding: "12px",
                        }}
                    >
                        <span style={{ fontWeight: "bold" }}>{user.login}</span>
                        <span>{` commented on ${this.getDate(
                            created_at
                        )}`}</span>
                    </div>
                    <div
                        style={{
                            border: "1px solid #D3D3D3 ",
                            padding: "12px",
                        }}
                    >
                        <ReactMarkdown source={body}></ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentCard;
