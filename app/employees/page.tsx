// app/employees/page.tsx
import { EmployeeCard } from '@/components/EmployeeCard';

export default async function EmployeesPage() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee: any) => (
          <EmployeeCard
            key={employee._id}
            name={employee.name}
            position={employee.position}
            photoUrl={employee.photo?.asset?.url || ''}
          />
        ))}
      </div>
    </div>
  );
}
