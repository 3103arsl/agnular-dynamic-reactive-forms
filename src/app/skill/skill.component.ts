import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.skills = localStorage.getItem("skills");
    this.skills = JSON.parse(this.skills)?.addDynamicElement;
    this.skills.map((skill:any) => {
      this.addItems(skill);
    });
  }

  registrationForm = this.fb.group({
    addDynamicElement: this.fb.array([])
  })

  get addDynamicElement() {
    let skills = this.registrationForm.get('addDynamicElement') as FormArray;
    return skills;
  }

  addItems(skill:any = null) {
    this.addDynamicElement.push(this.fb.control(skill));
  }

  removeSkill = (index: number) => {
    this.addDynamicElement.removeAt(index);
  }

  // Submit Registration Form
  onSubmit() {
   // alert(JSON.stringify(this.registrationForm.value));
    localStorage.setItem("skills", JSON.stringify(this.registrationForm.value));
  }

  onEditSkill = (index: number) => {

  }




}
