import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "headphones",
      amount: 2000,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e2",
      title: "TV",
      amount: 30000,
      date: new Date(2023, 3, 2),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 60000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 10000,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}


export default App;
