// components/Aluno.js

import Image from 'next/image';

const Aluno = ({ aluno }) => {
  return (
    <div className="aluno">
      <Image
        src={aluno.foto}
        alt={`Foto de ${aluno.nome}`}
        width={50}
        height={50}
        className="foto-aluno"
      />
      <div className="informacoes">
        <h3>{aluno.nome}</h3>
        <p>{aluno.idade} anos - {aluno.turma}</p>
      </div>
    </div>
  );
};

export default Aluno;
