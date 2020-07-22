import '@babel/polyfill';
import yargs from 'yargs';
import nearley from 'nearley';
import grammar from './Grammar';
import { debugConsole } from './debugConsole';

export type Path = string;
export type Argv = {
  arg1: string,
};

const usage = 'Usage: $0 input <arg1>';
const docs = 'Documentation: https://github.com/sibelius/slack-reminder-grammar';

export const run = async (argv?: Argv) => {
  argv = yargs(argv || process.argv.slice(2))
    .usage(usage)
    .epilogue(docs)
    .help()
    .argv;

  const input = argv._.join(' ');

  // eslint-disable-next-line
  console.log('input: ', input);
  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse something!
  parser.feed(input);

  // parser.results is an array of possible parsings.
  debugConsole(parser.results);
}
