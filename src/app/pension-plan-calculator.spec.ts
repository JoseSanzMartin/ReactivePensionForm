import { PensionPlanCalculator } from './pension-plan-calculator';

describe('PensionPlanCalculator', () => {
  let calculator: PensionPlanCalculator;

  beforeEach(() => {
    calculator = PensionPlanCalculator;
  });

  it('should calculate a deduction for given data', () => {
    const data = {
      annualIncome: 50000,
      personalContribution: 1000,
      companyContribution: 8000
    };

    const deduction = PensionPlanCalculator.refundCalc(data);

    expect(deduction).toBeCloseTo(3330);
  });

  it('should limit personal contribution to 1500', () => {
    const data = {
      annualIncome: 30000,
      personalContribution: 2000,
      companyContribution: 5000
    };

    const deduction = PensionPlanCalculator.refundCalc(data);

    expect(deduction).toBeCloseTo(1116.00, 2);
  });

  it('should limit company contribution to 8500', () => {
    const data = {
      annualIncome: 100000,
      personalContribution: 1000,
      companyContribution: 9000
    };

    const deduction = PensionPlanCalculator.refundCalc(data);

    expect(deduction).toBeCloseTo(42570.00, 2);
  });
});