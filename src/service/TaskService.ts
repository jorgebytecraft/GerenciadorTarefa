import { RespostTarefa, Tarefa } from "../interface/TaskInterface";

export class TaskService {
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/todos";

  //REQUISICAO HTTP
  async buscarTarefas(): Promise<Tarefa[]> {
    const response = await fetch(`${this.apiUrl}?_limit=5`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    //DESSERIALIZAR
    const dados: RespostTarefa[] = await response.json();

    //RESPOSTA HTTP
    return dados.map((tarafa) => ({
      id: tarafa.id,
      nome: tarafa.title,
      status: tarafa.completed ? "Concluida" : "Lista de Tarefa",
    }));
  }

  async criarTarefa(nome: string): Promise<Tarefa> {
    const payload = {
      title: nome,
      completed: false,
      userId: 1,
    };

    //SERIALIZACAO
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const dados = await response.json();

    return {
      id: dados.id,
      nome,
      status: "Lista de Tarefa",
    };
  }
}
