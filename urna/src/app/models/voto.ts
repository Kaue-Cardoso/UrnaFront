import { Candidato } from './candidato';

export class Voto {
  id?: number;
  dataHora?: string;
  candidatoPrefeito: Candidato; // Presumindo que o modelo Candidato já existe no front
  candidatoVereador: Candidato; // Presumindo que o modelo Candidato já existe no front
  hashComprovante?: string;
  eleitorId: number;

  constructor(
    candidatoPrefeito: Candidato,
    candidatoVereador: Candidato,
    eleitorId: number,
    dataHora?: string,
    hashComprovante?: string,
    id?: number
  ) {
    this.id = id;
    this.dataHora = dataHora || new Date().toISOString();
    this.candidatoPrefeito = candidatoPrefeito;
    this.candidatoVereador = candidatoVereador;
    this.hashComprovante = hashComprovante;
    this.eleitorId = eleitorId;
  }
}
