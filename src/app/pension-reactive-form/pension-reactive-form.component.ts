import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PensionPlanCalculator } from '../pension-plan-calculator';

@Component({
  selector: 'app-pension-reactive-form',
  templateUrl: './pension-reactive-form.component.html',
  styleUrls: ['./pension-reactive-form.component.scss']
})
export class PensionReactiveFormComponent implements OnInit {
  pensionForm: FormGroup;
  totalDeducted: number = 0;

  constructor(private fb: FormBuilder, private calculator: PensionPlanCalculator) { 
    this.pensionForm = this.fb.group({
      annualIncome: ['', [Validators.required]],
      personalContribution: ['', [Validators.required, Validators.min(0), Validators.max(1500)]],
      companyContribution: ['', [Validators.required, Validators.min(0), Validators.max(8500)]],
      totalDeducted: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = {
      annualIncome: this.pensionForm?.get('annualIncome')?.value,
      personalContribution: this.pensionForm?.get('personalContribution')?.value,
      companyContribution: this.pensionForm?.get('companyContribution')?.value
    };
  
    if (data.annualIncome && data.personalContribution && data.companyContribution) {
      this.totalDeducted = PensionPlanCalculator.refundCalc(data);
      this.pensionForm.get('totalDeducted')?.setValue(this.totalDeducted);
    }
  }
}