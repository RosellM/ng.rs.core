export class SettingsResponseDTO {
    constructor( 
    public code: string,
    public data: SettingsDTO,
    public description : string,
    public errors : any,
    public extra_info:string,
    public status : boolean
    ){}
  }

export class SettingsDTO {
    constructor( 
    public component: string,
    public active : boolean,
    public _id : string,
    public Urls : UrlDto[],
    public Labels : LabelDto[]   
    ){}
  }

export class UrlDto
{
    constructor(

        public url:string,
        public active : boolean,
        public name : string
    ){}
}


export class LabelDto
{
    constructor(
        public name:string,
        public active:boolean,
        public unit:string,
        public description : string
    ){}
}