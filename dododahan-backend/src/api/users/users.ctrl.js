import User from '../../models/wt_user'
import Timecheck from '../../models/wt_timecheck'
import { welcome } from '../timechecks/timechecks.ctrl'
import axios from 'axios'

export const register = async (ctx) => {
    const { userName, password } = ctx.request.body

    const users = new User({
        userName,
        password
    })

    try{
        await users.save()
        ctx.body=users
    }catch (e) {
        ctx.throw(500, e)
    }
}

export const login = async (ctx) => {
    const { userName, password } = ctx.request.body
    const registerDate = new Date().toLocaleDateString()
    try{
        const users = await User.Login(userName)
        const timechecks = await Timecheck.findByUserName(registerDate, userName)
        if(users){
            ctx.body= users
            console.log(ctx.body.userName + '님 출근')
            const token = users.generateToken()
                ctx.cookies.set('punch_in_token', token, {
                maxAge: 1000 * 60 * 60 * 24, //  1일
                httpOnly: true,
            })
            if(!timechecks){
                welcome(userName)
            }
            return
        }else {
            ctx.body=''
            console.log('로그인 실패')
        }
        
    } catch (e) {
        ctx.throw(500, e)
    }
    
}

export const checkLogin = async ctx => {
    if(ctx.state.user){
        ctx.body=ctx.state.user.userName
    } else {
        ctx.body="no logined"
    }
}