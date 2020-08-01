import mongoose from 'mongoose'

mongoose.set('useCreateIndex', true)
import autoIncrement from 'mongoose-auto-increment'
const connection = mongoose.createConnection('mongodb://localhost/tengle-worktime', {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
autoIncrement.initialize(connection)

const { Schema } = mongoose
const TaskSchema = new Schema({
  registerDate: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  taskNo: {
      type: Number,
      unique: true,
  },
  userName: String,
  taskName: String,
  startTime: Array,
  pauseTime: Array,
  endTime: String,
  period: {
    type: Number,
    default: 0
  },
})

TaskSchema.plugin(autoIncrement.plugin, {
    model: 'Task',
    field: 'taskNo',
    startAt: 0,
    increment: 1,
  })
TaskSchema.statics.findByUserName = function (registerDate, userName) {
  return this.find({ registerDate, userName })
}

const Task = connection.model('WT_Task', TaskSchema)
// const Task = mongoose.model('WT_Task', TaskSchema)
export default Task