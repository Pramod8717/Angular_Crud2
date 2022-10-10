import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  // public signupForm !: FormGroup;
  constructor(private formbuilder : FormBuilder, 
    private http : HttpClient,
    private router: Router) { 

      this.signupForm=new FormGroup({
        fullname:new FormControl("" ,Validators.required),
        mobile:new FormControl("" ,[Validators.required,Validators.maxLength(10)]),
        email:new FormControl("" ,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
        password:new FormControl("" ,[Validators.required,Validators.maxLength(3)])
      })
    }

  ngOnInit(): void {
  //   this.signupForm = this.formbuilder.group({
  //  fullname:["" ,Validators.required],
  //  mobile:["" ,Validators.required,Validators.maxLength(10)],
  //  email:["" ,Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)],
  //  password:["" ,Validators.required,Validators.maxLength(3)]
  //   })
  }
  signUp(){
    // debugger;
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    console.log(res);
    alert("SignUp successfully");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    console.log(err);
    alert("Something went wrong")
  })
  }

get fullname(){
  return this.signupForm.get('fullname');
}
get mobile(){
  return this.signupForm.get('mobile');
}
get email(){
  return this.signupForm.get('email');
}
get password(){
  return this.signupForm.get('password');
}

}
