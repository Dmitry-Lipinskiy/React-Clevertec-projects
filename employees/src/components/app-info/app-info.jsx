import './app-info.css';

export const AppInfo = ({ allEmployees, bonus }) => (
  <div className='app-info'>
    <h1>Учет сотрудников в компании</h1>
    <h2>Общее число сотрудников: {allEmployees}</h2>
    <h2>Премию получат: {bonus}</h2>
  </div>
);
