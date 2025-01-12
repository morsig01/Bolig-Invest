import Image from 'next/image';

type EmployeeCardProps = {
  name: string;
  position: string;
  photoUrl: string;
};

export const EmployeeCard = ({ name, position, photoUrl }: EmployeeCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    {photoUrl && (
      <Image
        src={photoUrl}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
    )}
    <h2 className="text-xl font-semibold mt-4 text-center">{name}</h2>
    <p className="text-gray-600 text-center">{position}</p>
  </div>
);
