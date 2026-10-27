export type StatusTarefa = 'Lista de Tarefa' | 'Em Progresso' | 'Concluida';

export interface Tarefa  {
    id?: number;
    nome: string;
    status: StatusTarefa;        
};