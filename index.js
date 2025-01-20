const express = require("express");
const app = express();
require("dotenv").config()

const userInfo = {
    "login": "ridhamsavaliya",
    "id": 82446010,
    "node_id": "MDQ6VXNlcjgyNDQ2MDEw",
    "avatar_url": "https://avatars.githubusercontent.com/u/82446010?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ridhamsavaliya",
    "html_url": "https://github.com/ridhamsavaliya",
    "followers_url": "https://api.github.com/users/ridhamsavaliya/followers",
    "following_url": "https://api.github.com/users/ridhamsavaliya/following{/other_user}",
    "gists_url": "https://api.github.com/users/ridhamsavaliya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ridhamsavaliya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ridhamsavaliya/subscriptions",
    "organizations_url": "https://api.github.com/users/ridhamsavaliya/orgs",
    "repos_url": "https://api.github.com/users/ridhamsavaliya/repos",
    "events_url": "https://api.github.com/users/ridhamsavaliya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ridhamsavaliya/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-04-13T10:15:31Z",
    "updated_at": "2021-04-13T10:15:31Z"
    }

app.get("/",((req,res)=>{
    res.send("hello from the express app")
}))

app.get("/login",((req,res)=>{
    res.send("<h1>Please login at the Ridham.com!</h1><p>hello world!!!!!</p>")
}))

app.get("/user",(req,res)=>{
    res.json(userInfo);
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`app is running on the port ${process.env.PORT}`);
})
