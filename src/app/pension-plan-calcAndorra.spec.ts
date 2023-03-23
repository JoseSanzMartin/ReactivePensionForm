import { PensionPlanCalcAndorra } from './pension-plan-calcAndorra';

describe('PensionPlanCalcAndorra', () => {
  let calculator: PensionPlanCalcAndorra;

  beforeEach(() => {
    calculator = PensionPlanCalcAndorra;
  });

  it('should calculate a deduction for given data', () => {
    const data = {
      annualIncome: 30000,
      personalContribution: 1000,
      companyContribution: 8000
    };

    const deduction = PensionPlanCalcAndorra.refundCalcAndorra(data);

    expect(deduction).toBeCloseTo(1000);
  });

  it('should limit personal contribution to 1500', () => {
    const data = {
      annualIncome: 30000,
      personalContribution: 2000,
      companyContribution: 5000
    };

    const deduction = PensionPlanCalcAndorra.refundCalcAndorra(data);

    expect(deduction).toBeCloseTo(750);
  });

  it('should limit company contribution to 8500', () => {
    const data = {
      annualIncome: 100000,
      personalContribution: 1000,
      companyContribution: 9000
    };

    const deduction = PensionPlanCalcAndorra.refundCalcAndorra(data);

    expect(deduction).toBeCloseTo(950);
  });
});