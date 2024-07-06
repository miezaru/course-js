{
  document.body.append(document.createElement('textarea'));
  document.body.append(document.createElement('button'));
  document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;

    if (text && !(text.trim().length === 0)) {
      const output = text
        .toLowerCase()
        .split('\n')
        .map((line, index) => {
          return (
            line
              .trim()
              .split('_')
              .map((word, i) => {
                if (word.length === 0) return;
                if (i === 0) return word;
                return (word = word[0].toUpperCase() + word.slice(1));
              })
              .join('')
              .padEnd(20, ' ') + '✅'.repeat(index + 1)
          );
        })
        .join('\n');

      console.log(output);
    }
  });
}
