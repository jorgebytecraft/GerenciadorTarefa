export type StatusTarefa = 'Lista de Tarefa' | 'Em Progresso' | 'Concluida';

export type Tarefa = {
    nome: string;
    status: StatusTarefa;        
};

export class TaskModel {

    private tarefas: Tarefa[];

    constructor() {
        this.tarefas = this.carregarTarefa();
    };
    adicionar(nome: string): void {
        const novaTarefa: Tarefa = { 
            nome: nome.trim(),
            status: 'Lista de Tarefa'
        }
        this.tarefas.push(novaTarefa);
        this.salvarTarefa()
    };
    mudarStatus(nomeTarefa: string, novoStatus: StatusTarefa): void{
        for (const tarefa of this.tarefas) {
            if(tarefa.nome.toLowerCase() === nomeTarefa.toLowerCase()){
                tarefa.status = novoStatus;
            };
        };
        this.salvarTarefa()
    }
    getTarefa(): Tarefa[] {
        return [...this.tarefas];
    }

    private salvarTarefa() {
        try {
            localStorage.setItem("tarefas ", JSON.stringify(this.tarefas));
        }catch(error){
            console.error("Erro ao Carregar");
        } 
    };

    private carregarTarefa(): Tarefa[]{
        try {
            const dados = localStorage.getItem("tarefas");
            if(!dados) return [];
            const parsed = JSON.parse(dados) as Tarefa[];
            return Array.isArray(parsed) ? parsed : [];
        } catch(error) {
            console.error(`Erro ao Carregar:  ${error}`);
            return [];
        }
    };

}
