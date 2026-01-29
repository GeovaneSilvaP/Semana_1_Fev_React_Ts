//🟡 Exercício 2 — Props opcionais

type UserCard = {
    name:string
    age?: number
}

const UnionTypeEx2 = ({name, age}:UserCard) => {
  return (
    <div>
        <h2>🟡 Exercício 2 — Props opcionais</h2>
        <p>Nome: {name}</p>
        {age !== undefined && <p>Idade: {age}</p>}
    </div>
  )
}

export default UnionTypeEx2