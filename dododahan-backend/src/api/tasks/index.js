import Router from 'koa-router'
import * as tasksCtrl from './tasks.ctrl'

const tasks = new Router()

tasks.get('/:userName', tasksCtrl.list)
tasks.post('/', tasksCtrl.write)
tasks.patch('/update/restart', tasksCtrl.STupdate)
tasks.patch('/update/pause', tasksCtrl.PTupdate)
tasks.patch('/update/end', tasksCtrl.ETupdate)

export default tasks