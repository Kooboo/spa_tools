#!/usr/bin/env node

const { Command } = require("commander");
const zipFolder = require("zip-a-folder");
const fs = require("fs");
const FormData = require("form-data");

const zipName = "__temp.zip";
const program = new Command();
program.version("1.0.0");

program.on("--help", () => {
  console.log("");
  console.log("Example call:");
  console.log(
    "  $ kooboo-spa -h www.kooboo.cn -s guid -u admin -p 123 -d ./dist"
  );
});

program
  .requiredOption("-h, --host <host>")
  .requiredOption("-s, --site <site>")
  .requiredOption("-u, --user <user>")
  .requiredOption("-p, --password <password>")
  .requiredOption("-d, --dir [dir]", "build output dir", "./dist")
  .action(function (options) {
    console.log("compressing...");
    zip(options.dir, () => {
      console.log("compressed");
      console.log("publishing...");

      publish(options, () => {
        fs.unlinkSync(zipName);
        console.log("clean temp file ...");
        console.log("success!");
      });
    });
  });

program.parse(process.argv);

function zip(dir, callback) {
  zipFolder.zipFolder(dir, zipName, (err) => {
    if (err) {
      fs.unlinkSync(zipName);
      console.log(err);
    } else {
      callback();
    }
  });
}

function publish(options, callback) {
  let form = new FormData();
  form.append("zipfile", fs.createReadStream(zipName));
  const auth = options.user + ":" + options.password;

  form.submit(
    {
      host: options.host,
      path: `/_api/receiver/zip?SiteId=${options.site}`,
      auth: options.user + ":" + options.password,
    },
    (err) => {
      if (err) {
        fs.unlinkSync(zipName);
        console.log(err);
      } else callback();
    }
  );
}
