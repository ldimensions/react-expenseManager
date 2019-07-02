import Dashboard from './containers/Dashboard/Dashboard';
import Expense from './containers/Expense/Expense';
import AddExpense from './containers/Expense/AddExpense/AddExpense';
import Category from './containers/Category/Category';
import AddCategory from './containers/Category/AddCategory/AddCategory';


const routes = [
    { path: '/', key: 'dashboard', exact: true, component: Dashboard },
    { path: '/expense', key: 'expense', exact: true, component: Expense },
    { path: '/addExpense', key: 'addExpense', exact: true, component: AddExpense},
    { path: '/category', key: 'category', exact: true, component: Category },
    { path: '/addCategory', key: 'addCategory', exact: true, component: AddCategory}
    
]

export default routes;