import loader from '@monaco-editor/loader';

loader.init().then(monaco => {
  monaco.editor.create(document.getElementById("container"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
  });
});