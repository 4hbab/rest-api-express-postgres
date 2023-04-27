const {Router} = require('express');
const router = Router();

const controller = require('../controller/controller');

router.get('/', controller.getBlogs);
router.post('/',controller.addBlog);

router.get('/:id', controller.getBlogById);

router.delete('/:id', controller.deleteBlog);

router.put('/:id', controller.updateBlog);

module.exports = router;