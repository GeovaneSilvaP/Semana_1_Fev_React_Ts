type Users = {
    id: number
    name: string
    isStudante: boolean
}

const PropsEx = ({id, name, isStudante}:Users) => {
  return (
    <div>
        <section>
          <h2>Exercício 1 — Componente</h2>
            <p>Seu Id:{id}, Olá {name}. Você é um estudante: {isStudante}</p>
        </section>
    </div>
  )
}

export default PropsEx