import member from "./member";

interface project {
    _id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    image: string;
    team: member[];
}

export default project;