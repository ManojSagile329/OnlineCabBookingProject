import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-warncustlogin',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './warncustlogin.component.html',
  styleUrl: './warncustlogin.component.css'
})
export class WarncustloginComponent  {
//   arr:any
//   httpClient = inject(HttpClient);
//   username:any
//   gender:any
//   password:any
//   userName:any
//  mouseoverLogin:boolean=true;
//   constructor(private router:Router)
//   {
//   }
//   ngOnInit(): void {
//     this.fetchData();
//   }
//   fetchData()
//   {
//     this.httpClient.get('http://localhost:5046/api/Usertables').subscribe(data => {console.log(data);this.arr=data})
//   }
//   login(formvalues:any)
//   {
//     for (let i = 0; i < this.arr.length; i++) 
//     {
//       // console.log(formvalues.username)
//       var usernames = this.arr[i].username
//       var pa = this.arr[i].password
//       // console.log(formvalues.userName)
//       // console.log(formvalues.gender)
//       // console.log(formvalues.password)
//       console.log('-------------------------------------')
//       console.log(this.arr[i].username)
//       console.log(this.arr[i].password)

//       if(this.arr[i].username == formvalues.userName && this.arr[i].password == formvalues.password)
//       {
//         console.log("Existed customer")
//         console.log("Login Success")
//         console.log("####################################################")
//         // this.router.navigate(['start']);
//         break
//       }
//       else
//       {
//         console.log("Your account is not found")
//         console.log("Login Failed")
//         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
//         // this.router.navigate(['warn']);

//       }
//     }
//   }
}
