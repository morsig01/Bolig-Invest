import Image from 'next/image';
import React from 'react'

type ProjectCardProps = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    team: string;

};

export const ProjectCard = ({ title, description, imageUrl, team }: ProjectCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
        {team && team.length > 0 && (
          <div className="p-4 border-t">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Team:</h4>
            <div className="flex -space-x-2">
              {team.map((member : any, index : any) => (
                <div key={index} className="relative w-10 h-10">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };