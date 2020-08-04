const Koa = require('koa')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const serve = require("koa-static")
const Router = require('koa-router')
const views = require('koa-views')
const logger = require('koa-logger')
const path = require('path')
const config = require('config')
const cors = require('@koa/cors');
var smtpTransport = require('nodemailer-smtp-transport');

//const cookieParser =require('cookie-parser')
const app = new Koa()
app.use(cors());
app.use(logger())
app.use(bodyParser())
  

const router = new Router()
const database = require('./database')()



const Blog = require('./apis/blog')


router.get('/api/blog/list', Blog.list)


app.use(router.routes())

app.listen(config.server.port, () => {
	console.log("server starting on " + config.server.port)
})