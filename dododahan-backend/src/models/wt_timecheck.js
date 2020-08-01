import mongoose from 'mongoose'

const connection = mongoose.createConnection('mongodb://localhost/tengle-worktime', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

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

const Timecheck = connection.model('WT_Timecheck', TimecheckSchema)
// const Timecheck = mongoose.model('WT_Timecheck', TimecheckSchema)
export default Timecheck