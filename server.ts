import { Server, Model } from "miragejs";
import articles from "./src/mocks/articles"
export function makeServer ({ environment = "development" } = {}) {
  const server = new Server({
    environment,
    models: {
      articles: Model
    },
    /* seeds (server: any) {
      server.create("todo", { content: "Learn Mirage JS" });
      server.create("todo", { content: "Integrate With Vue.js" });
    }, */
    routes () {
      this.get("/articles", () => {
        return articles;
      });
    }
  });

  return server;
};
