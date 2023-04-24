let totalExpense = 0;
const inputAmount = document.querySelector('#addExpense');
const inputDesc = document.querySelector('#addDesc');
const textTotal = document.querySelector('#expenseDisplay');
const expenseTable = document.querySelector('#expenseTable');
textTotal.textContent = totalExpense;
const allExpense = [];
function expenseConverter() {
  const tesxtDesc = inputDesc.value;
  const textAmount = inputAmount.value;
  const expense = parseInt(textAmount, 10);

  const oneExpense = {};
  oneExpense.desc = tesxtDesc;
  oneExpense.amount = expense;
  oneExpense.moment = new Date();
  allExpense.push(oneExpense);

  totalExpense = totalExpense + expense;
  textTotal.textContent = totalExpense;

  const someText = `Expense: ${totalExpense}`;
  textTotal.textContent = someText;
  render(allExpense);
}

function deleted(dateValue) {
  const newArray = allExpense.filter(
    (expense) => expense.moment.valueOf() !== dateValue
  );
  render(newArray);
}
function render(array) {
  const allExpenseHTML = array.map((expense) => viewLayer(expense));
  const joinedHTML = allExpenseHTML.join('');
  expenseTable.innerHTML = joinedHTML;
}
function dateDisplay(moment) {
  return moment.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  });
}
function viewLayer({ desc, amount, moment }) {
  return `<li class="list-group-item d-flex justify-content-between">
              <div class="d-flex flex-column">
                  ${desc}
                  <small class="text-muted">${dateDisplay(moment)}</small>
              </div>
              <div>
                  <span class="px-5">
                  ${amount}
                  </span>
                  <button 
                      onclick="deleted(${moment.valueOf()})" 
                      type="button" 
                      class="btn btn-outline-danger btn-sm">
                      <i class="fas fa-trash-alt"></i>
                  </button>
              </div>
          </li>
      `;
}
const element = document.querySelector('#btnCounter');
element.addEventListener('click', expenseConverter, false);
