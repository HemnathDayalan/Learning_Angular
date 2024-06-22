import { Component } from '@angular/core';
import { Login } from './login';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ana',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authen-n-author.component.html',
  styleUrl: './authen-n-author.component.css'
})
export class AuthenNAuthorComponent {

  loginobj:  Login;
  constructor(private http: HttpClient){
    this.loginobj = new Login();
  }

  onlogin(){

    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginobj).subscribe(
      (data:any) => {
        if(data.result)
          {
            alert('Login Successfull');
          }
          else{
            alert(data.message)
          }
        console.log('peeping the data', data);
        debugger;
      }
    )
  }

}
