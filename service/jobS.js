const axios = require("axios");
const redis = require("redis");

const client = redis.createClient({
  url: "redis://localhost:6379",
  socket: {
    connectTimeout: 1000,
  },
});

client.connect().catch((err) => console.log(err));

const getJobs = async (req, res) => {
  const searchTerm = req.query.search;

  try {
    const comments = await client.get(searchTerm);

    if (comments) {
      return res.send(JSON.parse(comments));
    } else {
      console.log("No cache found");
      const jobs = await axios.get(
        // `https://jobs.github.com/positions.json?search=${searchTerm}`
        `https://jsonplaceholder.typicode.com/posts?search=${searchTerm}`
      );
      client.setex(searchTerm, 600, JSON.stringify(jobs.data));
      res.status(200).send(jobs.data);
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = { getJobs };
