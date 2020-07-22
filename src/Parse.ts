import nearley from 'nearley';
import grammar from './Grammar';
import { debugConsole } from './debugConsole';

(async () => {
  try {
    const chunk = process.argv[2];

    if (!chunk) {
      console.log('Usage: yarn w ./scr/Parse "user is sad"');
      return;
    }

    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    // Parse something!
    parser.feed(chunk);

    // parser.results is an array of possible parsings.
    debugConsole(parser.results);
  } catch (err) {
    // eslint-disable-next-line
    console.log('err: ', err);
  }

  process.exit();
})();
