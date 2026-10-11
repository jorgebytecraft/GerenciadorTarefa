import type { Tarefa } from "../model/TaskModel";

type Handler = () => void; 

export class TaskView{
        //Referencia no DOM
        
        //Botao
        private botaoAdicionar: HTMLButtonElement;
        private botaoAndamento: HTMLButtonElement;
        private botaoFinalizar: HTMLButtonElement;

        //Input
        private tarefaAdicionar: HTMLInputElement;
        private tarefaAndamento: HTMLInputElement;
        private tarefaFinalizada: HTMLInputElement;

        //Lista
        private listaIniciada: HTMLUListElement;
        private listaAndamento: HTMLUListElement
        private listaFinalizada: HTMLUListElement;

    constructor(){
        this.botaoAdicionar = document.querySelector('[data-js="botao-tarefa-iniciada"]') as HTMLButtonElement;
        this.botaoAndamento = document.querySelector('[data-js="botao-tarefa-andamento"]') as HTMLButtonElement;
        this.botaoFinalizar = document.querySelector('[data-js="botao-tarefa-finaliza"]') as HTMLButtonElement;

        this.tarefaAdicionar = document.querySelector('[data-js="adicionar-tarefa"]') as HTMLInputElement;
        this.tarefaAndamento = document.querySelector('[data-js="andamento-tarefa"]') as HTMLInputElement;
        this.tarefaFinalizada = document.querySelector('[data-js="finalizar-tarefa"]') as HTMLInputElement;

        this.listaIniciada = document.querySelector('[data-js="lista-tarefas-iniciada"]') as HTMLUListElement;
        this.listaAndamento = document.querySelector('[data-js="lista-tarefas-andamento"]') as HTMLUListElement;
        this.listaFinalizada = document.querySelector('[data-js="lista-tarefas-finaliza"]') as HTMLUListElement;

        if(!this.botaoAdicionar || ! this.listaIniciada){
            throw new Error ('Elemento data-js não encontrado no HTML. ')
        }
    }

    renderizar(tarefas: Tarefa[]) : void{
        this.listaIniciada.innerHTML = "";
        this.listaAndamento.innerHTML = "";
        this.listaFinalizada.innerHTML = "";

        //Renderizar
        for(const tarafa of tarefas){
            const linhaNova = document.createElement("li");
            linhaNova.classList.add("list-group-item");
            linhaNova.textContent = tarafa.nome;
            if(tarafa.status === "Lista de Tarefa"){
                this.listaIniciada.appendChild(linhaNova);
            }else if(tarafa.status === "Em Progresso"){
                this.listaAndamento.appendChild(linhaNova)
            }else if(tarafa.status === "Concluida"){
                this.listaFinalizada.appendChild(linhaNova)
            };
        };
    };

    getValorAdicionarTarefa(): string {
        return this.tarefaAdicionar.value.trim()
    }
    getValorAndamentoTarefa(): string {
        return this.tarefaAndamento.value.trim()
    }
    getValorFinalizarTarefa(): string {
        return this.tarefaFinalizada.value.trim()
    }

    limparInputs(): void {
        this.tarefaAdicionar.value = "";
        this.tarefaAndamento.value = "";
        this.tarefaFinalizada.value = "";
    }

    //Eventos
    adicionarTarefa(handler: Handler): void{
        this.botaoAdicionar.addEventListener("click" , handler)
        this.tarefaAdicionar.addEventListener("keypress",(e: KeyboardEvent) => {
            if(e.key === "Enter"){
                handler()
            };
        });
    };

    andamentoTarefa(handler: Handler): void{
        this.botaoAndamento.addEventListener("click", handler)
        this.tarefaAndamento.addEventListener("keypress", (e: KeyboardEvent) => {
            if(e.key === "Enter"){
                handler()
            };
        });
    }

    finalizarTarefa(handler: Handler): void{
        this.botaoFinalizar.addEventListener("click", handler)
        this.tarefaFinalizada.addEventListener("keypress", (e: KeyboardEvent) => {
            if(e.key === "Enter"){
                handler()
            }
        })
    }



};
