interface Irpf {
  min: number;
  max: number;
  type: string;
  rate: number;
}

export class PensionPlanCalcAndorra {

  private static maxPersonalContribution = 1500;
  private static maxCompanyContribution = 8500;

  static refundCalcAndorra(data: any): number {
    const annualIncome = data.annualIncome;

    
    let rate = 0;
    if (annualIncome <= 24000) {
      rate = 0.05;
    } else {
      rate = 0.10;
    }

    const personalContribution = Math.min(data.personalContribution, PensionPlanCalcAndorra.maxPersonalContribution);
    const companyContribution = Math.min(data.companyContribution, PensionPlanCalcAndorra.maxCompanyContribution);
    const totalContribution = personalContribution + companyContribution;
    const deducted = totalContribution * rate;

    return deducted;
  }
}