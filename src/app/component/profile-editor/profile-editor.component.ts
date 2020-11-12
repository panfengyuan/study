import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })
  
  profileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases:this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName:'yfp',
      address:{
        city:'guangzhou'
      }
    })
  }
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
