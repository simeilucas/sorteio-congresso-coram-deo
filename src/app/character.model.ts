export const characterAttributesMapping = {
    id: 'ID',
    name: 'Digite seu nome completo:',
    email: 'Qual seu e-mail?',
    igreja: 'Qual Igreja você pertence?'
  };
  
  export interface Character {
    id: string;
    name: string;
    email: string;
    igreja: string;
  }
  