//TIPAGEM COMPARTILHADA

export type StatusTarefa = "Lista de Tarefa" | "Em Progresso" | "Concluida";

//CONTRATO
export type Handler = () => void;

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
