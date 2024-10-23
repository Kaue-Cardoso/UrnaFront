export class Candidato {
  id!: number;
  nomeCompleto!: string;
  cpf!: string;
  numero!: number;
  funcao!: number;
  status!: string;
  votosTotais!: number;

  constructor(
    id: number,
    nomeCompleto: string,
    cpf: string,
    numero: number,
    funcao: number,
    status: string,
    votosTotais: number
  ) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.numero = numero;
    this.funcao = funcao;
    this.status = status;
    this.votosTotais = votosTotais;
  }
}
