import { Department, DepartmentId } from '@/types';
import productionQuestions from './production';
import warehouseQuestions from './warehouse';
import qcQuestions from './qc';
import financeQuestions from './finance';
import customerCareQuestions from './customerCare';
import procurementQuestions from './procurement';
import preSalesQuestions from './preSales';
import courierQuestions from './courier';
import labServicesQuestions from './labServicesQuestions';

export const DEPARTMENTS: Department[] = [
  { id: 'production',    label: 'Production',     questions: productionQuestions },
  { id: 'warehouse',     label: 'Warehouse',       questions: warehouseQuestions },
  { id: 'qc',            label: 'QC',              questions: qcQuestions },
  { id: 'finance',       label: 'Finance',         questions: financeQuestions },
  { id: 'customer-care', label: 'Customer Care',   questions: customerCareQuestions },
  { id: 'procurement',   label: 'Procurement',     questions: procurementQuestions },
  { id: 'pre-sales',     label: 'Pre-Sales',       questions: preSalesQuestions },
  { id: 'courier',       label: 'Courier',         questions: courierQuestions },
  { id: 'lab-services',  label: 'Lab Services',    questions: labServicesQuestions },
];

export const DEPARTMENT_MAP: Record<DepartmentId, Department> = Object.fromEntries(
  DEPARTMENTS.map((d) => [d.id, d])
) as Record<DepartmentId, Department>;

export function getDepartment(id: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.id === id);
}
