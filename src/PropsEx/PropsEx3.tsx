type Card ={
    title:string,
    description: string
}

const PropsEx3 = ({title, description}:Card) => {
  return (
    <div>
        <h2>Exercício 3 — Desestruturação de props</h2>
        <p>{title} {description}</p>
    </div>
  )
}

export default PropsEx3