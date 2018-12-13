export class Config
{
public base_url : string;
public token : string;
public getList : string;
public sitemap : Array<any>;
constructor()
{
    this.sitemap = new Array<any>();
    this.base_url = "http://localhost:8888/api";
    this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YzAzN2VjZGRiZDY2ZjEwMWNhMGVjNTciLCJuYW1lIjoicm9zZWwiLCJlbWFpbCI6InJvc2VsLm16OTRAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTQzNzMzNDM1fQ.x4Mqss2s3zPcDcP54fuoFHP2btFPE1KyZlB_JRPSs1Y";
    this.sitemap.push(

        {title : "Dashboard"},
        {title : "Información"}

    );
}

}
