
const express=require('express')
const req = require('express/lib/request')
const members = require('./members')
const router=express.Router()

router.get('/',function(req,res){
    res.json(members)
})

router.get('/:id',(req , res )=>{
    for (let i = 0 ; i< members.length ; i++){
        if(members[i].id== req.params.id){
            res.json(members[i])
        }
    }
})


router.put('/edit/:id',(req , res )=>{
    for(let i = 0 ; i<members.length ; i++){
        if(members[i].id == req.params.id){
             members[i].name=='hhhh'
             res.send(members[i].name='hakim')
             res.end()
        }
    }

})

module.exports  = router