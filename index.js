const express = require("express")
const {Client} = require('pg')

const app = express();

const client = new Client({
  "user":"postgres",
  "password":"200058",
  "host":"localhost",
  "port":5432,
  "database":"bookStore"
})

client.connect()
.then(()=>console.log("connected"))
.then((=>client.query("select* from book")))
.catch(e=>console.log)
.finally(()=>client.end))
