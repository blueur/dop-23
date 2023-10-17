import fs from "fs";

export default {
  paths() {
    return fs
      .readdirSync("lessons")
      .filter((filename) => !filename.startsWith("[id]"))
      .map((filename) => filename.split(".md")[0])
      .map((id) => {
        return { params: { id } };
      });
  },
};
