export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required().max(100),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required().max(500),
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'team',
        title: 'Team',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'employee' }] }],
        description: 'Assign employees to this project',
      },
    ],
  };
  