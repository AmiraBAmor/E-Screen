import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(protected movieService: MovieService , private router: Router) {}
 username =''
 password = ''
 login() {
  if (this.username && this.password ) {
    // Step 1: Get a request token
    this.movieService.getRequestToken().subscribe((requestTokenData) => {
      const requestToken = requestTokenData.request_token;

      // Step 2: Login with shared credentials using the request token
      this.movieService.loginSharedCredentials(requestToken, this.username, this.password).subscribe(
        (loginData) => {
          console.log(loginData);
          sessionStorage.setItem('loginData', JSON.stringify(loginData))
          this.movieService.createSession(requestToken).subscribe(
            (sessionData) => {
              // Session created, you can now store the session ID or perform further actions
              sessionStorage.setItem('sessionData',JSON.stringify(sessionData) )

              console.log('Session created:', sessionData);
              this.movieService.getAccountDetails(sessionData.session_id).subscribe(
                (res)=>{
                  console.log(res);
                  sessionStorage.setItem('account',JSON.stringify(res))
                  this.router.navigate(['home'])
                },
                (err)=>{
                  console.log(err);
                 
                }
              )
    
            },
            (sessionError) => {
              console.error('Session creation error:', sessionError);
            }
          );
        },
        (loginError) => {
          // Handle login error
          console.error('Login error:', loginError);
        }
      );
    });
  }
}
}
