import Router from 'koa-router'
import * as timechecksCtrl from './timechecks.ctrl'

const timechecks = new Router()

timechecks.get('/:userName', timechecksCtrl.list)
timechecks.post('/:userName', timechecksCtrl.welcome)
timechecks.patch('/goodbye', timechecksCtrl.goodbye)

export default timechecks