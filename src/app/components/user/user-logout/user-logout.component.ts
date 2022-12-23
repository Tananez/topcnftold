import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent {

  constructor(private crudService: CrudService,    private router: Router) { }

  ngOnInit(): void {

    this.crudService.destroyToken()
 
    this.router.navigate(['/index/login']);
    
    
  }
  
}
