@builtin "whitespace.ne"
@preprocessor typescript

main -> "/remind" _ someone_channel _ what _ when {% d => {
  return {
     someoneChannel: d[2],
     what: d[4],
     when: d[6]
   }
}
%}
someone_channel -> someone:? channel:? {% d => d[0] || d[1] %}
someone -> "@" [a-zA-Z]:+ {% d => ({ type: 'someone', value: d[1].join('') }) %}
channel -> "#" [a-zA-Z]:+ {% d => ({ type: 'channel', value: d[1].join('') }) %}
what -> [a-zA-Z]:+ {% d => d[0].join('') %}
when -> ("today" | "tomorrow" | "next week") {% d => d[0].join('') %}
