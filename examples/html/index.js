import loader from '@monaco-editor/loader';
import { setTheme, textmate } from "vscode-theme-monaco"

loader.init().then(monaco => {
  setTheme(monaco)
  const editor = monaco.editor.create(document.getElementById("container"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "typescript",
  });
  textmate(monaco, editor)
});