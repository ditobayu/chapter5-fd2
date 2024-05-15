import axios from "axios";
import { createClient } from "redis";
import { Request, Response } from "express";

const client = createClient({
  url: "redis://localhost:6379",
  socket: {
    connectTimeout: 1000,
  },
});

client.connect().catch((err) => console.log(err));

interface Job {
  // Define the structure of the job data according to the API response
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getJobs = async (req: Request, res: Response): Promise<void> => {
  const searchTerm: string = req.query.search as string;

  try {
    const comments = await client.get(searchTerm);

    if (comments) {
      res.send(JSON.parse(comments) as Job[]);
    } else {
      console.log("No cache found");
      const response = await axios.get<Job[]>(
        // `https://jobs.github.com/positions.json?search=${searchTerm}`
        `https://jsonplaceholder.typicode.com/posts?search=${searchTerm}`
      );
      await client.setEx(searchTerm, 600, JSON.stringify(response.data));
      res.status(200).send(response.data);
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

export { getJobs };
