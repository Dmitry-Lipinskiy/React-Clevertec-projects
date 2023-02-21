import { employeesData } from '../../data/employees-data';

import { AppFilter } from '../app-filter';
import { AppInfo } from '../app-info';
import { EmployeesAddForm } from '../employees-add-form';
import { EmployeesList } from '../employees-list';
import { SearchPanel } from '../search-panel';

import './app.css';

export const App = () => (
  <div className='app'>
    <AppInfo />

    <div className='search-panel'>
      <SearchPanel />
      <AppFilter />
    </div>

    <EmployeesList employeesData={employeesData} />
    <EmployeesAddForm />
  </div>
);
