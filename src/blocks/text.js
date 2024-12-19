
import * as Blockly from 'blockly/core';

const text_bold = {
  type: 'text_bold',
  message0: '%1を太字にする',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  output: 'String',
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

const tada = {
  type: 'tada',
  message0: '%1を%2の速さでTada',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
    {
      type: 'input_value',
      name: 'SPEED',
      check: 'Number',
    },
  ],
  output: 'String',
  colour: 160,
  tooltip: '',
  helpUrl: '',
}
const ruby = {
  type: 'ruby',
  message0: '%1に%2のルビを振る',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
    {
      type: 'input_value',
      name: 'RUBY',
      check: 'String',
    },
  ],
  output: 'String',
  colour: 160,
  tooltip: '',
  helpUrl: '',
}

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  text_bold,
  tada,
  ruby,
]);
