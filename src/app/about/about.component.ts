import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ng-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
readonly ROOT_URL="https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc"
  constructor(private http:HttpClient) { }
post:any;
getPost(){
  this.post = this.http.get(this.ROOT_URL + '/post')
}


}
