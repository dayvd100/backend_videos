import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory.js";

const dataBase = new DataBaseMemory();

const server = fastify();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  console.log(request.body);

  dataBase.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  const videos = dataBase.list();
  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const { title, description, duration } = request.body;
  const videoId = request.params.id;
  dataBase.update(videoId, { title, description, duration });
  return reply.status(204).send();
});

server.delete("/videos/:id", (request) => {
  dataBase.delete(request.params.id);
});

server.listen({ port: 3333 });
