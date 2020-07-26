import mongoose from 'mongoose'


const { Schema } = mongoose
const TimecheckSchema = new Schema({
  registerDate: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  userName: String,
  comeTime: String,
  byeTime: String,
})

TimecheckSchema.statics.findByUserName = function (registerDate, userName) {
  return this.findOne({ registerDate, userName })
}

const Timecheck = mongoose.model('Timecheck', TimecheckSchema)
export default Timecheck