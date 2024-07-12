'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // This generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),

  // 1
  registerNewAnswer() {
    const num = Number(
      prompt(`
${this.question}\n
${this.options.join('\n')}\n
(Write option number)
    `)
    );

    // short-circuiting
    // typeof num === 'number' && num < this.answers.length && this.answers[num]++;
    // isNaN(num) && alert('Not a number');

    if (typeof num === 'number' && num < this.answers.length) {
      this.answers[num]++;
      // 4
      poll.displayResults('string');
    } else if (isNaN(num)) {
      alert('Not a number');
    } else alert('Invalid number');
  },

  // 3
  displayResults(type = 'array', data = this.answers) {
    if (type === 'array') {
      console.log(data);
    } else if (type === 'string') {
      console.log(`Poll results are: ${data.join(', ').trimEnd()}`);
    }
  },
};

// 2
const answerPollBtn = document.querySelector('.poll');
answerPollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// 5
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];
const displayTestResults = poll.displayResults.bind(this, 'string');
displayTestResults(testData1);
displayTestResults(testData2);
