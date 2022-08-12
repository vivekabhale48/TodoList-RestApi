var lists = require('../model/user.model');
let lastTaskId = 5;
const userValidation = require('../validation/userValidation');

module.exports = {
    
    allTasks : (req,res)=>{
        console.log('found');
        res.json({lists : lists});
    },

    singleTask : (req,res)=>{
        const taskId = parseInt(req.params.taskId);
        console.log(taskId);
        console.log(typeof taskId);
        const list = lists.find((list)=> list.id === taskId);
        // console.log(typeof list);
        // console.log(list);
        if(list){
            res.json({list : list});
        }
        else{
            res.status(404).json({error: true, message:'User not found'});
        }
    },

    addTask : (req,res)=>{

        const error = userValidation.validate(req.body);
        // console.log(error);
        if(error.error){
              return res.json({error: true, message:'Invalid',errors : error.error});
        }
        const task = req.body;
        // console.log(task);
        task.id = lastTaskId;
        lastTaskId++;
        lists.push(task);
        res.json({success:true, message:'User added successfully'});
    
    },

    updateTask : (req,res)=>{
        const listId = req.body.listId;
        const updatedTask = req.body.updatedTask;
        const updateDuedate = req.body.updateDuedate;
        const updateStatus = req.body.updateStatus;
        const list = lists.find(list => list.id === listId);
        if(list){
            list.task = updatedTask;
            list.due = updateDuedate;
            list.status = updateStatus;
            res.json({success: true, message: `The task is updated to ${updatedTask}`});
            if(list.due){
            res.json({success: true, message: `The task is updated to ${updateDuedate}`});
        }
        }
        else{
            res.join({error: true, message:'User not found'});
        }
    },

    deleteTask : (req,res)=>{
        const taskId = parseInt(req.params.taskId);
        const newUsers = lists.filter(list => list.id != taskId);
        lists = newUsers;
        res.json({success: 1, message: 'user deleted'});
    }

}