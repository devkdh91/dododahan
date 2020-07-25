import Task from '../../models/task'
import Slack from 'slack-node'
const slack = new Slack()
slack.setWebhook("https://hooks.slack.com/services/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")

const slackBotSend = async (message) => {
  slack.webhook({
    text: message
  }, function(err, response){
    console.log(response)
  })
}

export const list = async (ctx) => {
  const userName = ctx.params
    try {
      const tasks = await Task.find().exec()
      ctx.body = tasks
    } catch (e) {
      ctx.throw(500, e)
    }
}


export const write = async (ctx) => {
    const { userName, taskName, startTime } = ctx.request.body
  
    const task = new Task({
      userName,
      taskName,
      startTime,
    })

    try {
      await task.save()
      slackBotSend(userName+'님이 '+'"' + taskName + '" 업무를 시작합니다')
      ctx.body = task
    } catch (e) {
      ctx.throw(500, e)
    }
    console.log('ok')
  }
export const STupdate = async ctx => {
    const { taskNo, startTime } = ctx.request.body
    try {
      const tasks = await Task.findOneAndUpdate(
        { taskNo : taskNo },
        { startTime: startTime }
      )
      ctx.body=tasks
      console.log('startTime Updated')
    } catch (e) {
      ctx.throw(500, e)
    }
}

export const PTupdate = async ctx => {
    const { taskNo, pauseTime, period } = ctx.request.body
    try {
      const tasks = await Task.findOneAndUpdate(
        { taskNo : taskNo },
        { pauseTime: pauseTime, period: period }
      )
      ctx.body = tasks
      console.log('pauseTime Updated')
    } catch (e) {
      ctx.throw(500, e)
    }
}
export const ETupdate = async ctx => {
    const { taskNo, endTime, period } = ctx.request.body
    try {
      const tasks = await Task.findOneAndUpdate(
        { taskNo : taskNo },
        { endTime: endTime, period: period }
      )

      slackBotSend(tasks.userName + '님이' + '"' + tasks.taskName +'" 업무를 종료하였습니다(' + period +'분 진행)')
      ctx.body=tasks
      console.log('endTime Updated')
    } catch (e) {
      ctx.throw(500, e)
    }
}