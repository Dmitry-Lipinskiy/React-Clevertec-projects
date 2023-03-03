import { Component } from 'react';

import { AppFilter } from '../app-filter';
import { AppInfo } from '../app-info';
import { EmployeesAddForm } from '../employees-add-form';
import { EmployeesList } from '../employees-list';
import { SearchPanel } from '../search-panel';

import { employeesData } from '../../data/employees-data';

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeesData
    };
    this.maxId = 6;
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter((item) => item.id !== id)
      // // еще один метод
      // const index = data.findIndex((el) => el.id === id);
      // console.log(index);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArray = [...before, ...after];
      // return {
      //   data: newArray
      // };
    }));
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    };
    this.setState(({data}) => ({
      data: [...data, newItem]
    }));
  }

  render = () => (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList 
        employeesData={this.state.data} 
        onDelete={this.deleteItem}
      />
      <EmployeesAddForm
        addItem={this.addItem}
      />
    </div>
  );
};
