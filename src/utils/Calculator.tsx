export function calculateBMI(weight: number, height: number): number {
  if (height <= 0) return 0;
  const bmi = weight / (height * height);
  return parseFloat(bmi.toFixed(2));
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Bajo peso";
  if (bmi < 24.9) return "Peso normal";
  if (bmi < 29.9) return "Sobrepeso";
  return "Obesidad";
}