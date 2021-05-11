import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import dracula from './themes/converted/dracula.json';

import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';

import 'onigasm/lib/onigasm.wasm';

export const setTheme = (
  monaco: typeof import('/workspace/monaco-editor-utils/node_modules/monaco-editor/esm/vs/editor/editor.api')
) => {
  monaco.editor.defineTheme(
    'vs-code-theme-converted',
    dracula as editor.IStandaloneThemeData
  );
  monaco.editor.setTheme('vs-code-theme-converted');
};

export const textmate = async (
  monaco: typeof import('/workspace/monaco-editor-utils/node_modules/monaco-editor/esm/vs/editor/editor.api'),
  editor: editor.ICodeEditor
) => {
  const grammars = new Map<string, string>().set('typescript', 'source.ts');

  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      if (scopeName === 'source.ts') {
        return {
          format: 'plist',
          content: await // https://github.com/microsoft/TypeScript-TmLanguage/blob/master/TypeScript.tmLanguage
          (
            await fetch('./src/lib/monaco/grammars/TypeScript.tmLanguage.plist')
          ).text(),
        };
      }
    },
  });

  await wireTmGrammars(monaco, registry, grammars, editor);
};
