import { news } from "../src/index.js";

//POST
const createPost = async (req, res) => {
  const { title, body, tags } = req.body;
  const d = new Date();
  const date = d.toString();
  const time = d.getTime();
  try {
    await news.load();
    const postHash = await news.put(
      {
        _id: time,
        _date: date,
        _title: title,
        _body: body,
        _tags: tags,
      },
      { pin: true }
    );
    res.status(400).json({ msg: "Post Created", hash: postHash });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL
const getPosts = async (req, res) => {
  try {
    await news.load();
    const posts = await news.get("");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET SINGLE
const getPost = async (req, res) => {
  try {
    await news.load();
    const { id } = req.params; // Valid ID
    const post = await news.get(id);
    if (!post) {
      return res.status(400).json({ error: "No such Post" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Query by Tag
const queryByTags = async (req, res) => {
  try {
    await news.load();
    const { tag } = req.params;
    const all = news.query((post) => {
      post._tags.indexOf(tag) >= 0;
    });
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Query by Time (before or After)
const queryByTime = async (req, res) => {
  try {
    await news.load();
    const { timestamp, bool } = req.body;
    const allPosts = news.query((post) => {
      bool == true ? post._id >= timestamp : post._id <= timestamp;
    });
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createPost, getPosts, getPost, queryByTags, queryByTime };
