export interface ISoftware {
    Id: number;
    name: string;
    price: number;
    detail: string;
    requeriments: string[];
  }
  
  export interface IRequirements {
    id: number;
    description: string;
    cost: number;
    efford: number;
    softwareId: number;
  }
  