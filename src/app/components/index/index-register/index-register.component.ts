import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-register',
  templateUrl: './index-register.component.html',
  styleUrls: ['./index-register.component.css']
})
export class IndexRegisterComponent {

  data: any = [];

  constructor(
    private crudService: CrudService,
    private router: Router
    ) { }

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit() {

  }

  register() {  
    
    const data = {
      token:this.crudService.getToken(),
      send_inputs: this.registerForm.value
    };  
  

    this.crudService.post('index.php?mode=register', data).subscribe((data:any) => {
      
      this.data = data
    
      if(data['code'] == 1)	{ 
        this.router.navigate(['/index/login']);
        console.log(data['response']);
      }else if(data['code'] == 0) {
        console.log(data['response']);
      }

    },
    error => {console.log(error.error);}
    );

  }



}
