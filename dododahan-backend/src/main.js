require('dotenv').config()
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import jwtMiddleware2 from './lib/jwtMiddleware2'

import api from './api'

//비 구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 생성
const { PORT, MONGO_URI } = process.env

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

const app = new Koa()
const router = new Router()

router.use('/api', api.routes())


// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser())
//  jwtMiddleware(토큰 검증) 적용
app.use(jwtMiddleware2)
// app 인스턴스에 라우터 적용

app.use(router.routes()).use(router.allowedMethods())


const port = PORT || 5000
app.listen(port, () => {
  console.log('Listening to port %d', port)
})