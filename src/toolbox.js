export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_bold',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'tada',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
            SPEED:{
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: '1',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'ruby',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
            RUBY:{
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'sep',
    },
  ],
};
