import classNames from 'classnames';

import './employees-list-item.css';

export const EmployeesListItem = (props) => {
  
  const {
    name, 
    salary,
    increase, 
    rise, 
    onDelete,
    onToggleProp, 
    // onToggleRise, 
    // onToggleIncrease
  } = props;

  return (
    <li className={classNames('list-group-item d-flex justify-content-between', {increase,  'like': rise})}>
      <span 
        className='list-group-item-label'
        onClick={onToggleProp}
        data-toggle='rise'
        // onClick={onToggleRise}
      >
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={salary + '$'}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button 
          type='button' 
          className='btn-cookie btn-sm '
          onClick={onToggleProp}
          data-toggle='increase'
          // onClick={onToggleIncrease}
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button 
          type='button' 
          className='btn-trash btn-sm '
          onClick={onDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
};
