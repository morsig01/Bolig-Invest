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
        width={500}
        height={500}
        className="rounded-full mx-auto"
      />
    )}
    <div className="text-2xl font-bold mt-4 text-center text-black">{name}</div>
    <div className="text-black text-center text-xl font-semibold">{position}</div>
  </div>
);
