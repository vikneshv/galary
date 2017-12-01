import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'ng-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title:string='';
  constructor(private http: Http) { }
  onNamekeyup(event:any){
   this.title = event.target.value;
  }

  myfunction() {
    
    var title = $('#title').val();
    var msg = $('#content').val();

    console.log("POST");
    let url = `https://jsonprovider.herokuapp.com/posts`;
    this.http.post(url, {title:"title",body:" msg"}).subscribe(res => console.log(res.json()));
  }

  ngOnInit() {
  }

}



