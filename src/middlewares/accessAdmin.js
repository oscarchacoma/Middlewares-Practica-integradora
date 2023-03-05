const admins = ['Greta','Ada','Tim','Vim']

module.exports=(req,res,next)=>{
    if(admins.includes(req.query.admin)) {//query es un objeto con el que accedemos al admin 
        next()
    }else {
    return res.redirect('/error')}
}