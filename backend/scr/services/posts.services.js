const { postModel } = require('../models');


const getAllPosts = async () => {
    const post = await postModel.getAllPosts();

    return post;
};

const getPostById = async (id) => {
    const post = await postModel.getPostById(id);
    return post;
};

const insertPost = async (owner, title, body) => {
    const insertId = await postModel.insertPost(owner, title, body);

    if (!insertId) return {type:404, message: "Post não inserido"};

    const post = await postModel.getPostById(insertId);

    return post; 
};

module.exports = {
    getAllPosts,
    insertPost,
    insertPost,
    deletePost,
};