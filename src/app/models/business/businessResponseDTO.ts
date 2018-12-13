import { BusinessSimpleDTO } from "./businessSimpleDTO";

export class BusinessResponseDTO {
    constructor( 
    public code: string,
    public data: any,
    public description : string,
    public errors : any,
    public extra_info:string,
    public status : boolean
    ){}
  }