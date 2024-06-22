import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api-works',
  standalone: true,
  imports: [],
  templateUrl: './api-works.component.html',
  styleUrl: './api-works.component.css'
})
export class APIWorksComponent implements OnInit{

  public getjsonvalue:any;
  public postjsonvalue:any;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
      this.getapi()
      this.postapi()
  }

  getapi(){
    console.log('logged here');
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) =>{
      console.log(data);
      this.getjsonvalue = data;
    })

  }

  postapi(){
    let body = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit /n suscipit recusandae consequuntur expedita et cum/nreprehenderit molestiae ut ut quas totam/nnostrum rerum est autem sunt rem eveniet architecto"
    };
      console.log(body, 'gonna be posted');
      this.http.post('https://jsonplaceholder.typicode.com/posts', body ).subscribe((data) =>{
      console.log(data);
      this.postjsonvalue = data;
    })
  }

}
