import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getPostById(req, res) {
        try {
            const post = await PostService.getPostById(req.params.id)
             return  res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updatePost(req, res) {
        try {
            const updatedPost = await PostService.updatePost(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deletePost(req, res) {
        try {
            const post = await PostService.deletePost(req.params.id)
            return res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();