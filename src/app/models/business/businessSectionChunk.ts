import { BusinessSimpleDTO } from "./businessSimpleDTO";
 export class BusinessSectionChunk{
   
    constructor(
        public business: Array<BusinessSimpleDTO>,
        public totalBusiness : Number
     )
     {
     }
 }