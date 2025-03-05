// pages/index.js

import Aluno from '../components/Aluno';
import alunos from '../data/dataAlunos';

export default function Home() {
  return (
    <div className="container">
      <h1>Gestão Escolar</h1>
      <div className="lista-alunos">
        {alunos.map((aluno) => (
          <Aluno key={aluno.id} aluno={aluno} />
        ))}
      </div>
    </div>
  );
}
