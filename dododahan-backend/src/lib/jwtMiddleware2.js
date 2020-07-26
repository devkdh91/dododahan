import jwt from 'jsonwebtoken'

const jwtMiddleware2 = (ctx, next) => {
  const token = ctx.cookies.get('punch_in_token')
  if (!token) return next() //  토큰이 없음
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    ctx.state.user = {
      userName: decoded.userName,
    }
    // console.log(decoded)
    return next()
  } catch (e) {
    //  토큰 검증 실패
    return next()
  }
}

export default jwtMiddleware2