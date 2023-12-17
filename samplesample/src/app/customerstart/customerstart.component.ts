import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customerstart',
  standalone: true,
  imports: [CommonModule,RouterModule, NavbarComponent],
  templateUrl: './customerstart.component.html',
  styleUrl: './customerstart.component.css',
  providers:[AuthService]
})
export class CustomerstartComponent {

constructor(private service:AuthService)
{
  console.log(this.service.getVariable())
}
  click()
  {
    console.log('This is inside click',this.service.getVariable())

  }
}
