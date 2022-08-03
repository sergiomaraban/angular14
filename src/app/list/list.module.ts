import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ListComponent } from "./list/list.component";




@NgModule({
    declarations:[
        ListComponent
    ],
    imports:[
        BrowserModule,
        CommonModule
    ],
    exports:[
       ListComponent 
    ]    
})
export class ListModule{
}