document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.querySelector("#expense-form");
  const expenseNameInput = document.querySelector("#expense-name");
  const expenseAmountInput = document.querySelector("#expense-amount");
  const expenseList = document.querySelector("#expense-list");
  const totalDiv = document.querySelector("#total");
  const totalAmountDIsplay = document.querySelector("#total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  if (expenses.length > 0) {
    renderExpenses();
  } else {
    totalDiv.classList.add("hidden");
  }

  expenseForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseInt(expenseAmountInput.value);

    if (expenseName != "" && !isNaN(expenseAmount) && expenseAmount > 0) {
      const newExpense = {
        id: Date.now(),
        expenseName,
        expenseAmount,
      };
      addExpense(newExpense);
      saveExpensesToLocal();
      renderExpenses();
    }
    expenseForm.reset();
  });

  function addExpense(newExpense) {
    expenses.push(newExpense);
  }

  function renderExpenses() {
    if (expenses.length < 1) {
      totalDiv.classList.add("hidden");
    }
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
    <span>${expense.expenseName}: </span>
    <span>${expense.expenseAmount}</span>
    <button id="${expense.id}">Delete</button>
    `;
      expenseList.appendChild(li);
      totalDiv.classList.remove("hidden");

      li.addEventListener("click", (evt) => {
        if (evt.target.tagName != "BUTTON") {
          return;
        } else {
          evt.stopPropagation();

          let id = evt.target.id;
          removeExpense(id);
        }
      });
    });

    let totalAmount = calculateTotal();
    totalAmountDIsplay.textContent = totalAmount;
  }

  function calculateTotal() {
    let yahaKaTotal = 0;
    expenses.forEach((expense) => {
      yahaKaTotal += expense.expenseAmount;
    });
    return yahaKaTotal;
  }

  function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id != id);
    renderExpenses();
    saveExpensesToLocal();
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
