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
      data: employeesData,
      allEmployees: employeesData.length,
      bonus: employeesData.filter((item) => item.increase === true).length
    };
    this.maxId = employeesData.length + 1;
  }

  employees = () => {
    this.setState((state) => ({
      allEmployees: state.data.length,
      bonus: state.data.filter((item) => item.increase === true).length
    }));
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter((item) => item.id !== id)
    }));
    this.employees();
  }

  // // еще один метод
  // deleteItem = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex((el) => el.id === id);
  //     console.log(index);
  //     const before = data.slice(0, index);
  //     const after = data.slice(index + 1);
  //     const newArray = [...before, ...after];
  //     return {
  //       data: newArray
  //     };
  //   });
  //   this.employees();
  // }

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
    this.employees();
  }

  // // 1-й способ ( onToggleIncrease, onToggleRise )
  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex((el) => el.id === id);
  //     // получаем старый объект
  //     const old = data[index];
  //     // создаем новый объект
  //     const newItem = {...old, increase: !old.increase};
  //     const newArr = [
  //       ...data.slice(0, index),
  //       newItem,
  //       ...data.slice(index + 1)
  //     ];
  //     return {
  //       data: newArr
  //     }
  //   })
  // }

  // // 2-й способ ( onToggleIncrease, onToggleRise )
  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return {...item, rise: !item.rise};
  //       }
  //       return item;
  //     })
  //   }));
  // }

  // общий способ ( onToggleIncrease, onToggleRise )
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
        return item;
      })
    }));
    this.employees();
  }

  render = () => (
    <div className='app'>
      <AppInfo
        allEmployees={this.state.allEmployees}
        bonus={this.state.bonus}
      />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList 
        employeesData={this.state.data} 
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        // onToggleIncrease={this.onToggleIncrease}
        // onToggleRise={this.onToggleRise}
      />
      <EmployeesAddForm
        addItem={this.addItem}
      />
    </div>
  );
};
