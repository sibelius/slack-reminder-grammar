# Slack Reminder Grammar

Simplified Slack Reminder Grammer to parse /remind commands like

## Examples

```jsx
npx slack-reminder-grammar "/remind @sibelius work tomorrow"

[
  {
    someoneChannel: { type: 'someone', value: 'sibelius' },
    what: 'work',
    when: 'tomorrow',
  }
]
```

```jsx
npx slack-reminder-grammar "/remind #general party next week"

[
  {
    someoneChannel: { type: 'channel', value: 'general' },
    what: 'party',
    when: 'next week',
  }
]
```

## How it works?
We use [Nearley](https://github.com/kach/nearley) to compile our grammar written in Nearley syntax (close to EBNF)

The grammar is described at [GrammarReminderSlack](./src/GrammarReminderSlack.ne)

We compile the grammar using `nearleyc`

## Other resources to learn about parsers and Nearley

[Parsing Absolutely Anything in Javascript using Earley Algorithm](https://medium.com/@gajus/parsing-absolutely-anything-in-javascript-using-earley-algorithm-886edcc31e5e) by @gajus is a great start

## Is this Turing complete?
No, and Turing completeness are not useful in all domain languages.
