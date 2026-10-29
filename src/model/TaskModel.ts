import { TaskService } from "../service/TaskService";
import { StatusTarefa } from "../types/Task";
import { Tarefa } from "../interface/TaskInterface";

export class TaskModel {
  //ESTADO
  private tarefas: Tarefa[] = [];

  //INTEGRACAO COM SERVICE
  private services = new TaskService();

  //COMPORTAMENTO
  async carregarDaApi(): Promise<Tarefa[]> {
    this.tarefas = await this.services.buscarTarefas();
    return this.getTarefa();
  }

  async adicionar(nome: string): Promise<void> {
    const tarefa = await this.services.criarTarefa(nome);
    this.tarefas.push(tarefa);
  }

  mudarStatus(nome: string, status: StatusTarefa): void {
    const tarefa = this.tarefas.find(
      (t) => t.nome.toLowerCase() === nome.toLowerCase(),
    );
    if (tarefa) {
      tarefa.status = status;
    }
  }

  getTarefa(): Tarefa[] {
    return [...this.tarefas];
  }
}
