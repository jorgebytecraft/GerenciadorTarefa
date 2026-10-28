//TIPAGEM COMPARTILHADA

export type StatusTarefa = "Lista de Tarefa" | "Em Progresso" | "Concluida";

export type Tarefa = {
  id?: number;
  nome: string;
  status: StatusTarefa;
};

// ESTRUTURA DE DADOS
export type RespostTarefa = {
  id: number;
  title: string;
  completed: boolean;
};

//CONTRATO
export type Handler = () => void;
