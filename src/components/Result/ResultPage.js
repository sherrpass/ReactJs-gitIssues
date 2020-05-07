import React from "react";
import ResultHeader from "./ResultHeader";
import ResultList from "./ResultList";

// const result = {
//     url: "https://api.github.com/repos/sobotka/olive/issues/75",
//     repository_url: "https://api.github.com/repos/sobotka/olive",
//     labels_url:
//         "https://api.github.com/repos/sobotka/olive/issues/75/labels{/name}",
//     comments_url:
//         "https://api.github.com/repos/sobotka/olive/issues/75/comments",
//     events_url: "https://api.github.com/repos/sobotka/olive/issues/75/events",
//     html_url: "https://github.com/sobotka/olive/issues/75",
//     id: 611197803,
//     node_id: "MDU6SXNzdWU2MTExOTc4MDM=",
//     number: 75,
//     title: "[NODES] Replace node with math node",
//     user: {
//         login: "itsmattkc",
//         id: 34096995,
//         node_id: "MDQ6VXNlcjM0MDk2OTk1",
//         avatar_url: "https://avatars1.githubusercontent.com/u/34096995?v=4",
//         gravatar_id: "",
//         url: "https://api.github.com/users/itsmattkc",
//         html_url: "https://github.com/itsmattkc",
//         followers_url: "https://api.github.com/users/itsmattkc/followers",
//         following_url:
//             "https://api.github.com/users/itsmattkc/following{/other_user}",
//         gists_url: "https://api.github.com/users/itsmattkc/gists{/gist_id}",
//         starred_url:
//             "https://api.github.com/users/itsmattkc/starred{/owner}{/repo}",
//         subscriptions_url:
//             "https://api.github.com/users/itsmattkc/subscriptions",
//         organizations_url: "https://api.github.com/users/itsmattkc/orgs",
//         repos_url: "https://api.github.com/users/itsmattkc/repos",
//         events_url: "https://api.github.com/users/itsmattkc/events{/privacy}",
//         received_events_url:
//             "https://api.github.com/users/itsmattkc/received_events",
//         type: "User",
//         site_admin: false,
//     },
//     labels: [
//         {
//             id: 1994025256,
//             node_id: "MDU6TGFiZWwxOTk0MDI1MjU2",
//             url: "https://api.github.com/repos/sobotka/olive/labels/NODES",
//             name: "NODES",
//             color: "61f9ea",
//             default: false,
//             description: "Node / DAG related",
//         },
//     ],
//     state: "open",
//     locked: false,
//     assignee: null,
//     assignees: [],
//     milestone: null,
//     comments: 0,
//     created_at: "2020-05-02T14:05:37Z",
//     updated_at: "2020-05-02T14:05:37Z",
//     closed_at: null,
//     author_association: "COLLABORATOR",
//     body:
//         "**Summary** The old node was pretty much just a multiply and was removed from the node library. The audio node is also pretty much just a multiply and could be folded in in much the same way. **Additional Information / Output** If this is done, consideration should be paid to the UI to ensure the value that the audio is being by is still displayed in decibels (as it is currently).",
//     score: 1,
// };

// const comments = [
//     {
//         url:
//             "https://api.github.com/repos/vuvankhai1982/dienbaohiem/issues/comments/616171539",
//         html_url:
//             "https://github.com/vuvankhai1982/dienbaohiem/issues/8#issuecomment-616171539",
//         issue_url:
//             "https://api.github.com/repos/vuvankhai1982/dienbaohiem/issues/8",
//         id: 616171539,
//         node_id: "MDEyOklzc3VlQ29tbWVudDYxNjE3MTUzOQ==",
//         user: {
//             login: "mbvb1223",
//             id: 11681514,
//             node_id: "MDQ6VXNlcjExNjgxNTE0",
//             avatar_url: "https://avatars0.githubusercontent.com/u/11681514?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/mbvb1223",
//             html_url: "https://github.com/mbvb1223",
//             followers_url: "https://api.github.com/users/mbvb1223/followers",
//             following_url:
//                 "https://api.github.com/users/mbvb1223/following{/other_user}",
//             gists_url: "https://api.github.com/users/mbvb1223/gists{/gist_id}",
//             starred_url:
//                 "https://api.github.com/users/mbvb1223/starred{/owner}{/repo}",
//             subscriptions_url:
//                 "https://api.github.com/users/mbvb1223/subscriptions",
//             organizations_url: "https://api.github.com/users/mbvb1223/orgs",
//             repos_url: "https://api.github.com/users/mbvb1223/repos",
//             events_url:
//                 "https://api.github.com/users/mbvb1223/events{/privacy}",
//             received_events_url:
//                 "https://api.github.com/users/mbvb1223/received_events",
//             type: "User",
//             site_admin: false,
//         },
//         created_at: "2020-04-19T16:07:59Z",
//         updated_at: "2020-04-19T16:07:59Z",
//         author_association: "COLLABORATOR",
//         body: "estimate: ướng tính ",
//     },
//     {
//         url:
//             "https://api.github.com/repos/vuvankhai1982/dienbaohiem/issues/comments/616172065",
//         html_url:
//             "https://github.com/vuvankhai1982/dienbaohiem/issues/8#issuecomment-616172065",
//         issue_url:
//             "https://api.github.com/repos/vuvankhai1982/dienbaohiem/issues/8",
//         id: 616172065,
//         node_id: "MDEyOklzc3VlQ29tbWVudDYxNjE3MjA2NQ==",
//         user: {
//             login: "mbvb1223",
//             id: 11681514,
//             node_id: "MDQ6VXNlcjExNjgxNTE0",
//             avatar_url: "https://avatars0.githubusercontent.com/u/11681514?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/mbvb1223",
//             html_url: "https://github.com/mbvb1223",
//             followers_url: "https://api.github.com/users/mbvb1223/followers",
//             following_url:
//                 "https://api.github.com/users/mbvb1223/following{/other_user}",
//             gists_url: "https://api.github.com/users/mbvb1223/gists{/gist_id}",
//             starred_url:
//                 "https://api.github.com/users/mbvb1223/starred{/owner}{/repo}",
//             subscriptions_url:
//                 "https://api.github.com/users/mbvb1223/subscriptions",
//             organizations_url: "https://api.github.com/users/mbvb1223/orgs",
//             repos_url: "https://api.github.com/users/mbvb1223/repos",
//             events_url:
//                 "https://api.github.com/users/mbvb1223/events{/privacy}",
//             received_events_url:
//                 "https://api.github.com/users/mbvb1223/received_events",
//             type: "User",
//             site_admin: false,
//         },
//         created_at: "2020-04-19T16:10:10Z",
//         updated_at: "2020-04-19T16:10:10Z",
//         author_association: "COLLABORATOR",
//         body: "- Footer cho mầu đỏ -> chuyển mầu nút ",
//     },
// ];

class ResultPage extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ResultHeader />
                <ResultList />
            </div>
        );
    }
}

export default ResultPage;
