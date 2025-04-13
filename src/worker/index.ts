import { Hono } from "hono";
// import { serveStatic } from "hono/serve-static";

type Env = {
  Bindings: Record<string, unknown>;
};

const app = new Hono<{ Bindings: Env }>();

// app.get("/", serveStatic({ root: "./", index: "index.html" }));

app.get("/api/", (c: any) => c.json({ name: "cv.omaromar.net" }));

export default app;
