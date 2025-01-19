import express from "express";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * For when using client side routing like react-router and sub folder on server
 * (ex http://www.example.com/path/to/react/app/)
 * @function createReactRouterClientSideRouting
 *
 * @see {@link https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing}
 * @see {@link https://muffinman.io/react-router-subfolder-on-server/}
 */
export default function createReactRouterClientSideRouting() {
  const router = express.Router();

  // Path that contains compiled React app/page
  const filePath = "./react_project/build";

  // static assets
  router.use(express.static(path.join(__dirname, filePath)));

  // For other path...
  router.get("/*", function (req, res) {
    // ...redirect to index.html
    res.sendFile(path.join(__dirname, filePath, "index.html"));
  });

  return router;
}
