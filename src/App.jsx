import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [employees, setEmployees] = useState(() =>
    JSON.parse(localStorage.getItem('employees') || '[]')
  )
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const addEmployee = (e) => {
    e.preventDefault()

    if (!name.trim() || !salary || salary < 0) return

    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name: name.trim(),
        salary: Number(salary),
        bonus: false,
        promotion: false
      }
    ])

    setName('')
    setSalary('')
  }

  const removeEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  const togglePromotion = (id) => {
    setEmployees(employees.map(emp =>
      emp.id === id
        ? { ...emp, promotion: !emp.promotion }
        : emp
    ))
  }

  const toggleBonus = (id) => {
    setEmployees(employees.map(emp =>
      emp.id === id
        ? { ...emp, bonus: !emp.bonus }
        : emp
    ))
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

      <header>
        <h1>Учет сотрудников компании №</h1>
        <p>Общее число сотрудников: {employees.length}</p>
        <p>Премию получат: {bonusCount}</p>
      </header>

      <section className="controls">
        <input
          placeholder="Найти сотрудника"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="filters">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            Все сотрудники
          </button>

          <button
            className={filter === 'promotion' ? 'active' : ''}
            onClick={() => setFilter('promotion')}
          >
            На повышение
          </button>

          <button
            className={filter === 'salary' ? 'active' : ''}
            onClick={() => setFilter('salary')}
          >
            З/П больше 1000$
          </button>
        </div>
      </section>

      <section className="list">
        {filtered.map(emp => (
          <div className="employee" key={emp.id}>

            <span
              className={emp.promotion ? 'name promotion' : 'name'}
              onClick={() => togglePromotion(emp.id)}
            >
              {emp.name}
            </span>

            <span>{emp.salary}$</span>

            <div className="actions">
              <button
                className={emp.bonus ? 'cookie active' : 'cookie'}
                onClick={() => toggleBonus(emp.id)}
              >
                🍪
              </button>

              <button onClick={() => removeEmployee(emp.id)}>
                🗑️
              </button>
            </div>

          </div>
        ))}

        {!filtered.length && (
          <div className="empty">
            Сотрудники не найдены
          </div>
        )}
      </section>

      <form className="add" onSubmit={addEmployee}>
        <h2>Добавьте нового сотрудника</h2>

        <input
          placeholder="Как его зовут?"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="З/П в $"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />

        <button>Добавить</button>
      </form>

    </div>
  )
}

export default App