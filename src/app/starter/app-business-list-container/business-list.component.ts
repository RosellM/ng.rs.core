import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business/business.service';
import { BusinessSimpleDTO } from '../../models/business/businessSimpleDTO';
import { BusinessSectionChunk } from '../../models/business/businessSectionChunk';
import { variable, ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  numBusiness:number;
  businessSimpleDtoList : Array<BusinessSimpleDTO>;
  businessSimpleDtoListChunked : Array<BusinessSimpleDTO>;
  businessSectionChunkList : Array<BusinessSectionChunk>;
  businessSectionChunkSimple = BusinessSectionChunk;
  constructor( private businessService : BusinessService)
   {
    this.businessSimpleDtoList = new Array<BusinessSimpleDTO>();
    this.businessSectionChunkList = new Array<BusinessSectionChunk>();  
    this.businessSimpleDtoListChunked = Array<BusinessSimpleDTO>();
   }
    
  ngOnInit() 
  {
    this.loadBusinesList();
    
  }

  private loadBusinesList()
  {
    /**
     * Ya que no seria lo viable modificar un iterador, 
     * se usa esta variable para obtener el iterador y tener mas control del ciclo
     */
      var valueForChunk = 0;
      /**
       * como un arreglo o array inicia en 0 , 
       * cuando el iterador llegue a 2, se hara un corte, y se creara un objeto con estos tres elementos [0,1,2] 
       */
      var valueForNextChunk = 2; 
       this.businessService.list().subscribe(  
        business =>{     
            this.numBusiness = business.data.length;     
            console.log(business.data);
            business.data.forEach((business, iterator)=> {
              {
                this.businessSimpleDtoListChunked.push( new BusinessSimpleDTO(business.name, business.description, business._id));
                valueForChunk = iterator;
                console.log(valueForNextChunk);
                if(valueForNextChunk >= this.numBusiness && valueForChunk == this.numBusiness - 1)
                {
                  let chunkBusiness = new BusinessSectionChunk(this.businessSimpleDtoListChunked, this.businessSimpleDtoListChunked.length)
                  this.businessSectionChunkList.push( chunkBusiness );
                  this.businessSimpleDtoListChunked = Array<BusinessSimpleDTO>();
                }   
                if(valueForChunk == valueForNextChunk)
                {
                  valueForNextChunk = valueForChunk + 3;
                  let chunkBusiness = new BusinessSectionChunk(this.businessSimpleDtoListChunked, this.businessSimpleDtoListChunked.length)
                  this.businessSectionChunkList.push( chunkBusiness );           
                  this.businessSimpleDtoListChunked = Array<BusinessSimpleDTO>();                  
                } 
                                
              }
               
            });
            console.log( this.businessSectionChunkList);  
        },
        error =>{ 
          console.log(error);
        }
    );
    }

}
