import type { Tarefa } from "../types/Task";


type Handler = () => void;

export class TaskView{
        private botaoAdicionar: HTMLButtonElement;
        private botaoAndamento: HTMLButtonElement;
        private botaoFinalizar: HTMLButtonElement;
        
        private tarefaAdicionar: HTMLInputElement;
        private tarefaAndamento: HTMLInputElement;
        private tarefaFinalizar: HTMLInputElement;        
      
      
        private listaIniciada: HTMLUListElement;
        private listaAndamento: HTMLUListElement
        private listaFinalizada: HTMLUListElement;

        constructor(){
            this.botaoAdicionar = document.querySelector('[data-js="botao-tarefa-iniciada"]') as HTMLButtonElement;
            this.botaoAndamento = document.querySelector('[data-js="botao-tarefa-andamento"]') as HTMLButtonElement;
            this.botaoFinalizar = document.querySelector('[data-js="botao-tarefa-finaliza"]') as HTMLButtonElement;

            this.tarefaAdicionar = document.querySelector('[data-js="adicionar-tarefa"') as HTMLInputElement;
            this.tarefaAndamento = document.querySelector('[data-js="andamento-tarefa"]') as HTMLInputElement;
            this.tarefaFinalizar = document.querySelector('[data-js="finalizar-tarefa"]') as HTMLInputElement;

            this.listaIniciada = document.querySelector('[data-js="lista-tarefas-iniciada"]') as HTMLUListElement;
            this.listaAndamento = document.querySelector('[data-js="lista-tarefas-andamento"]') as HTMLUListElement;
            this.listaFinalizada = document.querySelector('[data-js="lista-tarefas-finaliza"]') as HTMLUListElement;

        }
        private limparListas(): void {
            this.listaIniciada.innerHTML = '';
            this.listaAndamento.innerHTML = '';
            this.listaFinalizada.innerHTML = '';
        }

    renderizar(tarefas: Tarefa[]) : void{
        this.limparListas();
        for(const tarefa of tarefas) {
            const lista = document.createElement("li");
            lista.textContent = tarefa.nome;
            if(tarefa.status === "Lista de Tarefa"){
                this.listaIniciada.append(lista);
            }
            else if(tarefa.status === "Em Progresso"){
                this.listaAndamento.append(lista);
            }
            else{
                this.listaFinalizada.append(lista)
            }
        };

    };

    getValorAdicionarTarefa(): string {
        return this.tarefaAdicionar.value.trim();
    };
    getValorAndamentoTarefa(): string {
        return this.tarefaAndamento.value.trim();
        }
    getValorFinalizarTarefa(): string {
        return this.tarefaFinalizar.value.trim();
    }

    limparInputs(): void{
        this.tarefaAdicionar.value = "";
        this.tarefaAndamento.value = "";
        this.tarefaFinalizar.value = "";                
    };

    adicionarTarefa(handler: Handler): void {
        this.botaoAdicionar.addEventListener('click' , handler)
    };
    andamentoTarefa(handler: Handler): void {
        this.botaoAndamento.addEventListener('click', handler)
    };
    finalizarTarefa(handler: Handler): void {
        this.botaoFinalizar.addEventListener('click', handler)
    }

    mostrarErro(mensagem: string): void {
        alert(mensagem)
    }
    
};
