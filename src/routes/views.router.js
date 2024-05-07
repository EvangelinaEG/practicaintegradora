import { Router } from 'express';
//import { uploader } from '../utils/multer';

const viewsrouter = Router()

viewsrouter.get('/', (req, res)=>{
    res.render('index')
})
viewsrouter.get('/login', (req, res)=>{
    res.render('index')
})
viewsrouter.get('/register', (req, res)=>{
    res.render('index')
})
viewsrouter.get('/products', (req, res)=>{
    res.render('index')
})
viewsrouter.get('/prfile', (req, res)=>{
    res.render('index')
})
viewsrouter.get('/prfile', (req, res)=>{
    res.render('index')
})

/* viewsrouter.post('/upload-file', uploader.single('myfile'),(req, res)=>{
    res.render('succesFile', {
        
    })
}) */

export default viewsrouter
