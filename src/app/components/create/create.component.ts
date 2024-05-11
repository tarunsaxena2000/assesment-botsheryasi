import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  postForm: FormGroup;

  constructor(private http : HttpClient){   
   this.postForm = new FormGroup ({
     title: new FormControl(null, Validators.required),
     content: new FormControl(null, Validators.required)
});
  }

   onSubmit() {
      if (this.postForm.valid) {
         
          alert("form submitted sucessfull")
           const postdata =this.postForm.value
         this.http.post('http://localhost:3000/users',postdata).subscribe((res)=>{
                 console.log("response submitted")
          })
          this.postForm.reset();
      }
  }
}
