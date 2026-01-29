//🟡 Exercício 3 — Children tipado
import  React  from "react";

type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}:LayoutProps) {
    return <main>{children}</main>
}

const UnionTypeEx3 = () => {
  return (
    <div>
        <Layout>
        <h2>🟡 Exercício 3 — Children tipado</h2>
        <p>Este conteúdo está dentro do Layout</p>
        </Layout>
    </div>
  )
}

export default UnionTypeEx3