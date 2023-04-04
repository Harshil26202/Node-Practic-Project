require('../src/db/mongoose')

const Task = require('../src/models/task')
const { findByIdAndRemove } = require('../src/models/user')


Task.findByIdAndRemove('63edd1fa6cdcb6e3452c9fe7').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: true})
}).then((task) => {
    console.log(task)
}).catch((e) => {
    console.log(e)
})


const deleteTaskAndCount = async (id) => {
    const task = await findByIdAndRemove(id)
    const count = await Task.countDocuments({completed: true})
    return count
}

deleteTaskAndCount('63edfec6ba7a74226a456bff').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})