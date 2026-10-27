import type {Tarefa} from '../types/Task'

interface TodoResponse {
    id: number,
    title: string,
    completed: boolean,
}

export class TaskService {
    private readonly apiUrl = "https://jsonplaceholder.typicode.com/todos";

    async buscarTarefas(): Promise<Tarefa[]> {
        const response = await fetch(`${this.apiUrl}?_limit=5`);

        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        };

        const dados: TodoResponse[] = await response.json();

        return dados.map(todo => ({
            id: todo.id,
            nome: todo.title,
            status: todo.completed ? "Concluida" : "Lista de Tarefa"
        }));
    };


    async criarTarefa(nome: string): Promise<Tarefa> {
        const payload = {
            title: nome,
            completed: false,
            userId: 1
        };

        const response = await fetch(this.apiUrl, 
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
        );
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }

       const dados = await response.json();

        return {
            id: dados.id,
            nome,
            status: "Lista de Tarefa"
        }
    }
}