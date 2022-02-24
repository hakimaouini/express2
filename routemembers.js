
const express=require('express')
const req = require('express/lib/request')
const members = require('./members')
const router=express.Router()
//gets all membres
router.get('/',function(req,res){
    res.json(members)
})
//get single membres

router.get('/:id',(req , res )=>{
    for (let i = 0 ; i< members.length ; i++){
        if(members[i].id== req.params.id){
            res.json(members[i])
        }
    }
})
//delete membres
router.delete('/delete/:id',(req , res )=>{
    for (let i = 0 ; i< members.length ; i++){
        if(members[i].id== req.params.id){
            members.splice(i,1)
            res.send(members)
            res.end()
        }
    }
})
//create membre
router.post('/membres',(req,res)=>{
    const member = [
        {
            id: 10,
            name: "hakim",
            email: "hakim@gmail.com",
            status: "active",
        }
    ];
    members.push(member)
    res.status(201).json(member)
    res.end()
})
//update membres
router.put('members/:id',(req , res )=>{
    for(let i = 0 ; i<members.length ; i++){
        if(members[i].id == req.params.id){
             members[i].name.splice('ll')
             members[i].email=='hakim@email'
             res.send(members[i].name='hakim')
             res.end()
        }
    }

})

module.exports  = router