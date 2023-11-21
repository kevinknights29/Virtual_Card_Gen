export const fieldConfig = {
  'vcard-plus': [
    {
      name: 'address',
      type: 'text',
      validations: {required: 'Address is required'},
    },
    {
      name: 'phone',
      type: 'tel',
      validations: {required: 'Phone number is required'},
    },
    {
      name: 'email',
      type: 'email',
      validations: {required: 'Email is required'},
    },
    {
      name: 'design',
      type: 'text',
      validations: {required: 'Design is required'},
    },
    {
      name: 'lastName',
      type: 'text',
      validations: {required: 'Last name is required', maxLength: 70},
    },
    {
      name: 'name',
      type: 'text',
      validations: {required: 'Name is required', maxLength: 70},
    },
    {
      name: 'photo',
      type: 'text',
      validations: {},
    }, // Assuming this is a URL
    {
      name: 'companies',
      type: 'text',
      validations: {},
    }, // Specify type if different
    {
      name: 'preview',
      type: 'text',
      validations: {},
    }, // Assuming this is a URL
    {name: 'shareButton', type: 'checkbox', validations: {}},
    {name: 'socialsTitle', type: 'text', validations: {maxLength: 50}},
    {
      name: 'socials',
      type: 'text',
      validations: {},
    }, // Specify type if different
    {name: 'summary', type: 'textarea', validations: {maxLength: 200}},
    {name: 'title', type: 'text', validations: {maxLength: 50}},
    {
      name: 'url',
      type: 'url',
      validations: {},
    }, // Assuming this is a URL
  ],
  // Template for other types
  'other-type': [
    // Define fields for other types here
  ],
  // Add more types as needed
};
