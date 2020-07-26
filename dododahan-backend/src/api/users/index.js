import Router from 'koa-router'
import * as usersCtrl from './users.ctrl'

const users = new Router()

users.post('/', usersCtrl.register)
users.post('/login', usersCtrl.login)
users.get('/check', usersCtrl.checkLogin)

export default users