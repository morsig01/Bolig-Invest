import { EmployeeCard } from '@/components/EmployeeCard';
import { client } from '@/sanity/lib/client';


async function getData() {
  const query = `*[_type == "employee"] {
    _id,
    name,
    position,
    "photo": photo.asset->url
}`

const data = await client.fetch(query);

return data;
  
}

export default async function EmployeesPage() {
  const data = await getData();

  return (
    <div className="container mx-auto p-4 py-24">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((employee: any) => (
          <EmployeeCard
            key={employee._id}
            name={employee.name}
            position={employee.position}
            photoUrl={employee.photo}
          />
        ))}
        
      </div>
    </div>
  );
}
