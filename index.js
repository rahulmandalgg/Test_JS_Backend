require('dotenv').config()
const express = require('express')
const app = express()


const githubData = {
    "login": "rahulmandalgg",
  "id": 85156165,
  "node_id": "MDQ6VXNlcjg1MTU2MTY1",
  "avatar_url": "https://avatars.githubusercontent.com/u/85156165?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rahulmandalgg",
  "html_url": "https://github.com/rahulmandalgg",
  "followers_url": "https://api.github.com/users/rahulmandalgg/followers",
  "following_url": "https://api.github.com/users/rahulmandalgg/following{/other_user}",
  "gists_url": "https://api.github.com/users/rahulmandalgg/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rahulmandalgg/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rahulmandalgg/subscriptions",
  "organizations_url": "https://api.github.com/users/rahulmandalgg/orgs",
  "repos_url": "https://api.github.com/users/rahulmandalgg/repos",
  "events_url": "https://api.github.com/users/rahulmandalgg/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rahulmandalgg/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rahul Mandal",
  "company": null,
  "blog": "",
  "location": "INDIA",
  "email": null,
  "hireable": null,
  "bio": "IIT Kharagpur '25 CSE",
  "twitter_username": null,
  "public_repos": 29,
  "public_gists": 0,
  "followers": 4,
  "following": 5,
  "created_at": "2021-06-01T07:21:03Z",
  "updated_at": "2025-05-26T10:51:25Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('Hello Twitter!')

})

app.get('/login',(req,res) => {
    res.send('<h1> Please Login Here </h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2> MERA H2 </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
