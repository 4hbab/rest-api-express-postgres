const getAllBlogs = 'SELECT * FROM blog';
const getBlogById = 'SELECT * FROM blog WHERE id = $1';
const addBlog = 'INSERT INTO blog (title, content) VALUES ($1, $2)';
const deleteBlog = 'DELETE FROM blog WHERE id = $1';
const updateBlog = 'UPDATE blog SET title = $1, content = $2 WHERE id = $3';

module.exports = {
    getAllBlogs,
    getBlogById,
    addBlog,
    deleteBlog,
    updateBlog,
}