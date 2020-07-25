import mongoose from 'mongoose'

mongoose.set('useCreateIndex', true)
import autoIncrement from 'mongoose-auto-increment'
const connection = mongoose.createConnection('mongodb://localhost/worktime', {
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
  period: Number,
})

TaskSchema.plugin(autoIncrement.plugin, {
    model: 'Task',
    field: 'taskNo',
    startAt: 0,
    increment: 1,
  })

const tasks = connection.model('Task', TaskSchema)
const Task = mongoose.model('Task', TaskSchema)
export default Task