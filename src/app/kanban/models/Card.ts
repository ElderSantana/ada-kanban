export interface Card {
    id: string
    titulo : string,
    conteudo: string,
    lista: Lista
}

export enum Lista {
  'Todo' = 'ToDo',
  'Doing' = 'Doing',
  'Done' = 'Done',
  'None' = 'None'
}
