const fse = require("fs-extra");
const glob = require("glob");
const path = require("path");

fse.readFile("copy.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const options = JSON.parse(data.toString());
  runCopy(options);
});

function runCopy(options) {
  Object.keys(options).forEach((basePath) => {
    const option = options[basePath];
    if (option.include) {
      option.include.forEach((pattern) => {
        glob(
          pattern,
          {
            cwd: basePath,
            ignore: option.exclude
          },
          (err, files) => {
            if (err) {
              console.error(err);
              return;
            }
            option.targets.map((target) => {
              files.forEach((filePath) => {
                fse.copy(
                  path.join(basePath, filePath),
                  path.join(target, filePath)
                );
              });
            });
          }
        );
      });
    } else {
      glob(
        "**/*",
        {
          cwd: basePath,
          ignore: option.exclude
        },
        (err, files) => {
          if (err) {
            console.error(err);
            return;
          }
          option.targets.map((target) => {
            files.forEach((filePath) => {
              fse.copy(
                path.join(basePath, filePath),
                path.join(target, filePath)
              );
            });
          });
        }
      );
    }
  });
}
