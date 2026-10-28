import { TaskModel } from "../model/TaskModel";
import { TaskView } from "../view/TaskView";
import { StatusTarefa } from "../types/Task";

export class TaskController {
  private model: TaskModel;
  private view: TaskView;

  //INICIALIZACAO
  constructor() {
    this.model = new TaskModel();
    this.view = new TaskView();
    this.init();
  }

  async init(): Promise<void> {
    const tarefasIniciais = await this.model.carregarDaApi();
    this.view.renderizar(tarefasIniciais);
    this.registrarEventos();
  }

  // GERENCIAMENTO DE EVENTOS
  private registrarEventos(): void {
    this.view.adicionarTarefa(async () => {
      const nome = this.view.getValorAdicionarTarefa();
      if (!nome) {
        return;
      }
      //COMINCACAO MODEL E VIEW
      await this.model.adicionar(nome);
      this.atualizarView();
    });

    this.view.andamentoTarefa(() => {
      const nome = this.view.getValorAndamentoTarefa();
      if (!nome) {
        return;
      }
      this.alterarStatus(nome, "Em Progresso");
    });

    this.view.finalizarTarefa(() => {
      const nome = this.view.getValorFinalizarTarefa();
      if (!nome) {
        return;
      }
      this.alterarStatus(nome, "Concluida");
    });
  }

  private alterarStatus(nome: string, status: StatusTarefa): void {
    this.model.mudarStatus(nome, status);
    this.atualizarView();
  }

  private atualizarView(): void {
    this.view.renderizar(this.model.getTarefa());
    this.view.limparInputs();
  }
}
