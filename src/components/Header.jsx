function Header({ employeeCount, bonusCount }) {
  return (
    <header>
      <h1>Учет сотрудников компании №</h1>
      <p>Общее число сотрудников: {employeeCount}</p>
      <p>Премию получат: {bonusCount}</p>
    </header>
  )
}

export default Header
