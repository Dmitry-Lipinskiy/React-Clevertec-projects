import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ employeesData, onDelete, addItem }) => (
  <ul className='app-list list-group'>
    {employeesData.map(({id, ...itemProps}) => (
      <EmployeesListItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)}
        addItem={() => addItem(this.name, this.salary)}
      />
    ))}
  </ul>
);
