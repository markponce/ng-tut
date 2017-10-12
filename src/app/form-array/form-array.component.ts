import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  
  form = new FormGroup({
    topics: new FormArray([])
  });
  // form builder
  form2 = new FormGroup({
    name : new FormControl(),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    topics : new FormArray([])
  })

  constructor(formBuilder: FormBuilder) { 
    this.form2 = formBuilder.group({
      name : ['', Validators.required],
      contact : formBuilder.group({
        email: [],
        phone : []
      }),
      topics : formBuilder.array([])
    })
  }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";

  }

  get topics()
  {
    return (this.form.get('topics') as FormArray); 
  }

  removeTopic(topic: FormControl)
  {
    // console.log(topic);
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
    // (this.topics as Array).indexOf




  }

}
