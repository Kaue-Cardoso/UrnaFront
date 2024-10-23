export class Eleitor {
    id!: number;
    nomeCompleto!: string;
    cpf!: string;
    profissao!: string;
    celular!: string;
    telefoneFixo!: string;
    email!: string;
    status!: string;

    constructor(id: number, nomeCompleto: string, cpf: string, profissao: string,celular: string,telefoneFixo: string, email: string,status: string,){
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.profissao = profissao;
    this.celular = celular;
    this.telefoneFixo = telefoneFixo;
    this.email = email;
    this.status = status;
    }

}