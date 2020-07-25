import Router from 'koa-router'

import tasks from './tasks'

const api = new Router()

api.use('/tasks', tasks.routes())

export default api