'use strict';

//~ BANKIST APP

//_ Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//_ Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//_ App

//_ Display movements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date"></div>
  <div class="movements__value">${mov}€</div>
</div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//_ Display balance
const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//_ Display summary
const calcDisplaySummary = acc => {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov, i, arr) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

//_ Create usernames
const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
createUsernames(accounts);

//_ Event handlers

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const visibleUI = (state = false) => {
  const appContainer = containerApp.style;
  if (state) {
    appContainer.opacity = 100;
    appContainer.visibility = 'visible';
    appContainer.pointerEvents = 'all';
    return;
  }
  appContainer.opacity = 0;
  appContainer.visibility = 'hidden';
  appContainer.pointerEvents = 'none';
};

//_ Login
let currentAccount;
btnLogin.addEventListener('click', e => {
  // Prevent form from submitting and reloading page
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount === undefined) {
    inputLoginUsername.value = inputLoginPin.value = '';
    return;
  }

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;

    visibleUI(true);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // remove focus from input
  }

  updateUI(currentAccount);
});

//_ Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    amount > 0 &&
    currentAccount.balance > amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
  }
});

//_ Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  //_ some method
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input field
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    //_ findIndex method
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Clear inputs
    inputClosePin.value = inputCloseUsername.value = '';

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    visibleUI();
  }
});

//_ Sort
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
