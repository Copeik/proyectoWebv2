import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private authService: AuthenticationService,private router:Router) {

  }
  user = 'victor';
  password = '12345';
  msgs=[];
  Login() {
    //logueamos
    this.authService.login(this.user, this.password).subscribe(res => {
      console.log(res);
    },error => {
      if (error.status==200) {
        console.log(error);
        let jwt = error.error.text;
      console.log(jwt);
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)


        console.log('jwtData: ' + jwtData)
        console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
        console.log('decodedJwtData: ' + decodedJwtData.sub)
        //aqui le mandamos el token y el usuario para que lo guarde
        this.authService.saveuser(decodedJwtData.sub);
        this.router.navigate(['inicio']);
        setTimeout(() => {
          location.reload();
        }, 0);
        

        
      }
      else{console.log(error);
        this.msgs.push({severity:'error', summary:'Error', detail:'Error en la autentificacion'});
       }
      
        
    });
    
  }

  ngOnInit() { }
}
