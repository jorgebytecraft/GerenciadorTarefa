export type StatusTarefa = 'Lista de Tarefa' | 'Em Progresso' | 'Concluida';

export type Tarefa = {
    id?: number;
    nome: string;
    status: StatusTarefa;        
};

type ApiTarefa = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export class TaskModel {
    private tarefas: Tarefa[] = [];
    private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor() {
  
    };
    async carregarDaApi(): Promise<Tarefa[]> {
        try {
            const resposta = await fetch(`${this.apiUrl}?_limit=5`);
            if(!resposta.ok){
                throw new Error("Erro ao buscar dados API");
            }
            const dados : ApiTarefa[] = await resposta.json();

            this.tarefas = dados.map(todo => ({
                id: todo.id,
                nome: todo.title,
                status: todo.completed ? 'Concluida' : 'Lista de Tarefa'
            }));
            return [...this.tarefas];

        } catch (error) {
            console.error("Erro na API: ", error)
            return []
        }
    };

    async adicionar(nome: string): Promise<void> {
        try {
            const novaApiTodo = {
                title: nome.trim(),
                completed: false,
                userId: 1
            }
            
            const resposta = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify(novaApiTodo)
            });

            if(!resposta.ok) {
                throw new Error('Erro ao criar tarefa na API');
            };

            const tarefaCriada: Tarefa = {
                nome: nome.trim(),
                status: 'Lista de Tarefa'
            };

            this.tarefas.push(tarefaCriada)

        }catch(error){
            console.error("Erro ao adicionar", error)
        }
    };

        mudarStatus(nomeTarefa: string, novoStatus: StatusTarefa): void{
        for (const tarefa of this.tarefas) {
            if(tarefa.nome.toLowerCase() === nomeTarefa.toLowerCase()){
                tarefa.status = novoStatus;
            };
        };
    }; 
    getTarefa(): Tarefa[] {
        return [...this.tarefas]
    }

};
