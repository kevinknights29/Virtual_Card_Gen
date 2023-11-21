export const fieldConfig = {
  'vcard-plus': [
    {
      name: 'address',
      type: 'object',
      fields: {
        type: {
          type: 'text',
          validations: {},
        },
        data: {
          type: 'object',
          fields: {
            streetNumberFirst: {
              type: 'checkbox',
              validations: {},
            },
            street: {
              type: 'text',
              validations: {maxLength: 70},
            },
            number: {
              type: 'number',
              validations: {},
            },
            postalCode: {
              type: 'text',
              validations: {maxLength: 40},
            },
            city: {
              type: 'text',
              validations: {maxLength: 70},
            },
            state: {
              type: 'text',
              validations: {maxLength: 70},
            },
            country: {
              type: 'text',
              validations: {maxLength: 70},
            },
          },
          validations: {},
        },
      },
      validations: {},
    },
    {
      name: 'phone',
      type: 'object',
      fields: {
        type: {
          type: 'text',
          validations: {},
        },
        text: {
          type: 'text',
          validations: {maxLength: 100},
        },
        phone: {
          type: 'tel',
          validations: {maxLength: 40},
        },
      },
      validations: {},
    },
    {
      name: 'email',
      type: 'object',
      fields: {
        text: {
          type: 'text',
          validations: {maxLength: 100},
        },
        email: {
          type: 'email',
          validations: {},
        },
      },
      validations: {},
    },
    {
      name: 'design',
      type: 'object',
      fields: {
        primary: {
          type: 'color',
          validations: {required: 'Primary color is required'},
        },
        secondary: {
          type: 'color',
          validations: {required: 'Secondary color is required'},
        },
      },
    },
    {
      name: 'lastName',
      type: 'text',
      validations: {maxLength: 70},
    },
    {
      name: 'data_name',
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
      type: 'object',
      fields: {
        name: {
          type: 'text',
          validations: {maxLength: 100},
        },
        professions: {
          type: 'object',
          fields: {
            name: {
              type: 'text',
              validations: {maxLength: 100},
            },
          },
          validations: {},
        },
      },
      validations: {},
    },
    {
      name: 'preview',
      type: 'text',
      validations: {},
    }, // Assuming this is a URL
    {name: 'shareButton', type: 'checkbox', validations: {}},
    {name: 'socialsTitle', type: 'text', validations: {maxLength: 50}},
    {
      name: 'socials',
      type: 'object',
      fields: {
        id: {
          type: 'text',
          validations: {},
        },
        value: {
          type: 'text',
          validations: {},
        },
        text: {
          type: 'url',
          validations: {maxLength: 100},
        },
      },
      validations: {},
    },
    {name: 'summary', type: 'textarea', validations: {maxLength: 200}},
    {name: 'title', type: 'text', validations: {maxLength: 50}},
    {
      name: 'url',
      type: 'object',
      fields: {
        text: {
          type: 'text',
          validations: {maxLength: 100},
        },
        url: {
          type: 'url',
          validations: {},
        },
      },
      validations: {},
    }, // Assuming this is a URL
  ],
  // Template for other types
  'other-type': [
    // Define fields for other types here
  ],
  // Add more types as needed
};
