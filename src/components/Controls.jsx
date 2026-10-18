function Controls({ search, setSearch, filter, setFilter }) {
  return (
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
  )
}

export default Controls