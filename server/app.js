const express = require('express')
const models = require('./models')
const cors = require('cors')
const db = require('./models')
const app = express() 
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/api/goals', (req, res) => {

    const title = req.body.title
    const tf = req.body.tf 
    const ed = req.body.ed 
    const mgd = req.body.mgd
    const sg1title  = req.body.sg1title
    const sgtf  = req.body.sgtf
    const sged  = req.body.sged
    const sggd  = req.body.sggd
    const sg2title  = req.body.sg2title
    const sg2tf  = req.body.sg2tf
    const sg2ed  = req.body.sg2ed
    const sg2gd  = req.body.sg2gd
    const sg3t  = req.body.sg3t
    const sg3tf  = req.body.sg3tf
    const sg3ed  = req.body.sg3ed
    const sg3gd  = req.body.sg3gd
    const sg4t  = req.body.sg4t
    const sg4tf  = req.body.sg4tf
    const sg4ed  = req.body.sg4ed
    const sg4gd  = req.body.sg4gd


    const goal = models.Goal.build({
        title: title, 
        tf: tf, 
        ed: ed, 
        mgd: mgd,
        sg1title: sg1title,
        sgtf: sgtf,
        sged: sged,
        sggd: sggd,
        sg2title: sg2title,
        sg2tf: sg2tf,
        sg2ed: sg2ed,
        sg2gd:sg2gd,
        sg3t: sg3t,
        sg3tf: sg3tf,
        sg3ed: sg3ed,
        sg3gd: sg3gd,
        sg4t: sg4t,
        sg4tf: sg4tf,
        sg4ed: sg4ed,
        sg4gd: sg4gd
    })

    // save a goal
    goal.save()
    .then(savedGoal => {
        res.json({success: true, goalId: savedGoal.id})
    })

})

app.get('/api/goals', (req, res) => {
    // get all goals
    models.Goal.findAll({})
    .then(goals => {
        res.json(goals)
    })
})

app.delete('/api/goals/:goalId', (req, res) => {

    const goalId = parseInt(req.params.goalId) 

    models.Goal.destroy({
        where: {
            id: goalId
        }
    }).then(_  => {
        res.json({success: true})
    })

})

// db.none('DELETE FROM "Goals" WHERE id = $0',[goalId])


app.listen(PORT, (req, res) => {
    console.log('Server is running...')
})