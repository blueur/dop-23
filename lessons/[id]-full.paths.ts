import fs from "fs";

export default {
  paths() {
    return fs
      .readdirSync("lessons")
      .filter(
        (filename) =>
          !["[id]", "terraform"].some((prefix) => filename.startsWith(prefix)),
      )
      .map((filename) => filename.split(".md")[0])
      .map((id) => {
        return { params: { id } };
      });
  },
};
