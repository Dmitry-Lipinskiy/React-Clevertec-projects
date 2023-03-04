import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ employeesData, onDelete }) => (
  <ul className='app-list list-group'>
    {employeesData.map(({id, ...itemProps}) => (
      <EmployeesListItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);
