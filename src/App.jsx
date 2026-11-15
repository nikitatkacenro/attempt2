import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Controls from './components/Controls'
import EmployeeList from './components/EmployeeList'
import AddEmployee from './components/AddEmployee'

function App() {
  const [employees, setEmployees] = useState(() =>
    JSON.parse(localStorage.getItem('employees') || '[]')
  )

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const addEmployee = (employee) => {
    setEmployees(prevEmployees => [
      ...prevEmployees,
      {
        id: Date.now(),
        name: employee.name,
        salary: employee.salary,
        bonus: false,
        promotion: false
      }
    ])
  }

  const removeEmployee = (id) => {
    setEmployees(prevEmployees =>
      prevEmployees.filter(emp => emp.id !== id)
    )
  }

  const togglePromotion = (id) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === id
          ? { ...emp, promotion: !emp.promotion }
          : emp
      )
    )
  }

  // Переключение премии
  const toggleBonus = (id) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === id
          ? { ...emp, bonus: !emp.bonus }
          : emp
      )
    )
  }

  const filtered = employees.filter(emp => {
    const matchesSearch = emp.name
      .toLowerCase()
      .includes(search.toLowerCase())

    if (filter === 'promotion') {
      return matchesSearch && emp.promotion
    }

    if (filter === 'salary') {
      return matchesSearch && emp.salary > 1000
    }

    return matchesSearch
  })

  const bonusCount = employees.filter(emp => emp.bonus).length

  return (
    <div className="app">
      <Header
        employeeCount={employees.length}
        bonusCount={bonusCount}
      />

      <Controls
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <EmployeeList
        employees={filtered}
        onRemove={removeEmployee}
        onTogglePromotion={togglePromotion}
        onToggleBonus={toggleBonus}
      />

      <AddEmployee onAdd={addEmployee} />
    </div>
  )
}

export default App
