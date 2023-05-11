import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const crtFile = path.resolve(__dirname, "cert.pem");
const keyFile = path.resolve(__dirname, "key.decrypted.pem");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(crtFile),
    },
    host: "localhost",
    port: 3000,
  },
});
