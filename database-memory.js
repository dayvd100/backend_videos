import { randomUUID } from "crypto";

export class DataBaseMemory {
  #videos = new Map();

  list = () => {
    return Array.from(this.#videos.entries()).map((values) => {
      const id = values[0];
      const data = values[1];

      return {
        id,
        ...data,
      };
    });
  };

  create = (video) => {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  };

  update = (id, video) => {
    this.#videos.set(id, video);
  };

  delete = (id) => {
    this.#videos.delete(id);
  };
}
