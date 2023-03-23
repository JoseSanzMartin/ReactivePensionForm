interface Irpf {
  min: number;
  max: number;
  type: string;
  rate: number;
}

export class PensionPlanCalculator {

  private static maxPersonalContribution = 1500;
  private static maxCompanyContribution = 8500;

  static refundCalc(data: any): number {
    const annualIncome = data.annualIncome;

    
    let rate = 0;
    if (annualIncome <= 12450) {
      rate = 0.19;
    } else if (annualIncome <= 20200) {
      rate = 0.24;
    } else if (annualIncome <= 35200) {
      rate = 0.3;
    } else if (annualIncome <= 60000) {
      rate = 0.37;
    } else if (annualIncome <= 300000) {
      rate = 0.45;
    } else {
      rate = 0.47;
    }

    const personalContribution = Math.min(data.personalContribution, PensionPlanCalculator.maxPersonalContribution);
    const companyContribution = Math.min(data.companyContribution, PensionPlanCalculator.maxCompanyContribution);
    const totalContribution = personalContribution + companyContribution;
    const deducted = totalContribution * rate;

    return deducted;
  }
}