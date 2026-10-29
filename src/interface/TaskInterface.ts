import { StatusTarefa } from "../types/Task";

//TIPAGEM COMPARTILHADA
export interface Tarefa {
  id?: number;
  nome: string;
  status: StatusTarefa;
}
// ESTRUTURA DE DADOS
export interface RespostTarefa {
  id: number;
  title: string;
  completed: boolean;
}
