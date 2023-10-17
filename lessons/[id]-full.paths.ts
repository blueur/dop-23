import fs from "fs";

export default {
  paths() {
    return fs
      .readdirSync("lessons")
      .filter((filename) => !filename.includes("[id]"))
      .map((filename) => filename.split(".md")[0])
      .map((id) => ({ params: { id } }));
  },
};
