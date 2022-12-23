import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  data: any = [];

  constructor(private crudService: CrudService,    private router: Router) { }

  ngOnInit(): void {

    const data = {
      token:this.crudService.getToken()
    };  

    this.crudService.post('user.php', data).subscribe((data:any) => {
      
      this.data = data

      if(data.allow == 0){
        this.router.navigate(['/index/login']);
      }
    
    },
      
    error => {
      
      if(error.allow == 0){
        this.router.navigate(['/index/login']);
      }
      }
    );

  }
}
