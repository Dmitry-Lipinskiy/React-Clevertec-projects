import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ employeesData, onDelete, addItem, name, salary }) => (
  <ul className='app-list list-group'>
    {employeesData.map(({id, ...itemProps}) => (
      <EmployeesListItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)}
        addItem={() => addItem(name, salary)}
      />
    ))}
  </ul>
);
