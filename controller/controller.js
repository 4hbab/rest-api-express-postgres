const db = require('../config/db.config');
const queries = require('../queries/queries');

const getBlogs = (req,res) => {
    db.query(queries.getAllBlogs, (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows);
    })
}

const getBlogById = (req,res) => {
    const id = parseInt(req.params.id);
    db.query(queries.getBlogById, [id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows);
    })
}

const addBlog = (req,res) => {
    const {title, content} = req.body;
    // add blog to existing list
    db.query(queries.addBlog, [title, content], (err, result) => {
        if(err) throw err;
        res.status(201).json('Blog added successfully!');
    })
}

const deleteBlog = (req,res) => {
    const id = parseInt(req.params.id);
    db.query(queries.getBlogById, [id], (err, result) => {
        const noBlogFound = !result.rows.length; // Confirming if the given ID is valid
        if(noBlogFound){
            res.send("Blog doesn't exist");
        }else{
            db.query(queries.deleteBlog, [id], (err, result) => {
                if(err) throw err;
                res.status(200).json('Blog deleted successfully.');
            })
        }     
    })
}

const updateBlog = (req,res) => {
    const id = parseInt(req.params.id);
    const {title, content} = req.body;
    db.query(queries.getBlogById, [id], (err, result) => {
        const noBlogFound = !result.rows.length;
        if(noBlogFound){
            res.send("Blog doesn't exist");
        } else{
            db.query(queries.updateBlog, [title, content, id], (err, result) => {
                if(err) throw err;
                res.status(200).json('Blog updated successfully.');
            })
        }
    })
}

module.exports = {
    getBlogs,
    getBlogById,
    addBlog,
    deleteBlog,
    updateBlog,
};