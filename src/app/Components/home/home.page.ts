import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  errorTF=false
  constructor(private authService: AuthenticationService,private router:Router,private toastController:ToastController) {

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
        this.errorTF=true
        this.presentToastWithOptions()
       }
      
        
    });
    
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Fallo en la autentificacion',
      message: 'Compruebe que su usuario sea administrador y este activo',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Entendido',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() { }
}
