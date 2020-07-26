import Router from 'koa-router'

import tasks from './tasks'
import timechecks from './timechecks'
import users from './users'

const api = new Router()

api.use('/tasks', tasks.routes())
api.use('/timechecks', timechecks.routes())
api.use('/users', users.routes())

export default api