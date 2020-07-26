import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const { Schema } = mongoose
const UserSchema = new Schema({
    userName: String,
    password: String
})

UserSchema.statics.Login = function (userName) {
    return this.findOne({ userName })
  }

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    //   첫 번째 파라미터 = 토큰 안에 집어넣고 싶은 데이터
    {
      userName: this.userName,
    },
    process.env.JWT_SECRET, //   두 번째 파라미터에 = JWT 암호
    {
      expiresIn: '1d', //   세 번째 파라미터 = 유효기간( ex. 7d == 7일 동안 유효함.)
    },
  )
  return token
}
const User = mongoose.model('User', UserSchema)
export default User