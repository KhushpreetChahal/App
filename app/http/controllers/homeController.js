function homeController()
{
    //factory functions - pattern for writing functions
    //it is general object creation
    return {
        //grouping methods
        //index is the key
        index(req,res)
        {
            res.render('home')
        }
    }
}

module.exports = homeController