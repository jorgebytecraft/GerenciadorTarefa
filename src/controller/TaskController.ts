
import { TaskModel } from "../model/TaskModel";
import { TaskView } from "../view/TaskView";
import type { StatusTarefa } from "../model/TaskModel";

export class TaskController {
    private model: TaskModel;
    private view: TaskView;
    constructor() {
        this.model  = new TaskModel();
        this.view = new TaskView();

        this.init();
    };

   async init(): Promise<void> {
    const tarefasIniciais = await this.model.carregarDaApi();
    this.view.renderizar(tarefasIniciais)

    this.view.adicionarTarefa(async () => {
        const valor = this.view.getValorAdicionarTarefa();
        
        if(!valor) {
            alert("Digite uma tarefa antes de adicionar");
            return;
        };
        
        await this.model.adicionar(valor);
        
        this.view.renderizar(this.model.getTarefa());

        this.view.limparInputs()
    });

    this.view.andamentoTarefa(async () => {
        const valor = this.view.getValorAndamentoTarefa();

        if(!valor){
            return
        }
        
        this.model.mudarStatus(valor, "Em Progresso" as StatusTarefa);

        this.view.renderizar(this.model.getTarefa());

        this.view.limparInputs()
    });

    this.view.finalizarTarefa(async () => {
        const valor = this.view.getValorFinalizarTarefa();

        if(!valor){
            return
        };

        this.model.mudarStatus(valor, "Concluida" as StatusTarefa);

        this.view.renderizar(this.model.getTarefa());

        this.view.limparInputs()
    });
    };
};
