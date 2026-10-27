import {TaskService} from '../service/TaskService';
import { Tarefa, StatusTarefa } from '../types/Task';

export class TaskModel {
    private tarefas: Tarefa[] = [];
    private services = new TaskService();

    async carregarDaApi(): Promise<Tarefa[]> {
        this.tarefas = await this.services.buscarTarefas();
        return this.getTarefa()
    };

    async adicionar(nome: string): Promise<void> {
        const tarefa =  await this.services.criarTarefa(nome);
        this.tarefas.push(tarefa);
    };

    mudarStatus(nome: string , status: StatusTarefa): void{
        const tarefa = this.tarefas.find(t => t.nome.toLowerCase() === nome.toLowerCase());
            if(tarefa){
                tarefa.status = status;
            }
    };

    getTarefa(): Tarefa[] {
        return [...this.tarefas]
    }

};
