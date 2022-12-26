import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-index-login',
  templateUrl: './index-login.component.html',
  styleUrls: ['./index-login.component.css']
})
export class IndexLoginComponent {

  data: any = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private crudService: CrudService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }


    
  ngOnInit() {   


  }

  login() { 

    const data = {
      token:this.crudService.getToken(),
      send_inputs: this.loginForm.value
    };    

    this.crudService.post('index.php?mode=login', data).subscribe((data:any) => {

      this.data = data
    
      if(data['code'] == 1)	{
        localStorage.setItem('token', data['token']);       
        this.router.navigate(['/user/home']);         

          this._snackBar.open(data['response'], 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,          
          });


      }else if(data['code'] == 0) {
        this._snackBar.open(data['response'], 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,          
        });
      }

    },
    error => { 

      this._snackBar.open(error, 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,          
      });
    }
    );

  }
 


}
