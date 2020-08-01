import Timecheck from '../../models/wt_timecheck'

import Slack from 'slack-node'
const slack = new Slack()
slack.setWebhook("https://hooks.slack.com/services/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")

const slackBotSend = async (message) => {
  slack.webhook({
    text: message
  }, function(err, response){
    // console.log(response)
  })
}

const getStringTime = () => {
  const date = new Date()
  const st = String(date.getHours()) < 10
    ? 0 + String(date.getHours()) + ":" + String(date.getMinutes())
    : String(date.getHours()) + ":" +String(date.getMinutes())

  return st
}

export const list = async (ctx) => {
  const { userName } = ctx.params
  const registerDate = new Date().toLocaleDateString()
    try {
      const timecheck = await Timecheck.findByUserName(registerDate, userName)
      ctx.body = timecheck
    } catch (e) {
      ctx.throw(500, e)
    }
}


export const welcome = async (userName) => {
    
  
    const timecheck = new Timecheck({
      userName,
      comeTime: getStringTime(),
    })

    
      await timecheck.save()
      slackBotSend(userName+'님이 출근하셨습니다')
    
    console.log('ok')
  }
export const goodbye = async ctx => {
    const  userName  = ctx.state.user && ctx.state.user.userName
    const registerDate = new Date().toLocaleDateString()
    try {
      const timecheck = await Timecheck.findOneAndUpdate(
        { registerDate, userName },
        { byeTime : getStringTime() }
      )
      slackBotSend(userName+'님이 퇴근하셨습니다')
      ctx.body=timecheck
      console.log('goodbye~')
      ctx.cookies.set('punch_in_token')
    } catch (e) {
      ctx.throw(500, e)
    }
}

