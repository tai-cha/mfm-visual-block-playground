/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Generator } from 'blockly';
import { Order } from 'blockly/dart';

export const mfmGenerator = new Generator('MFM');

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['text'] = function (block) {
  const text = block.getFieldValue('TEXT');
  const code = `${text}`;
  return [code, Order.ATOMIC];
};

forBlock['math_number'] = function (block) {
  const num = block.getFieldValue('NUM');
  const code = `${num}`;
  return [code, Order.ATOMIC];
};

forBlock['text_bold'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "";
  // Generate code for this block.
  const code = `**${text}**`;
  return [code, Order.ATOMIC];
};

forBlock['tada'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "";
  const speed = generator.valueToCode(block, 'SPEED', Order.NONE) || "1";
  
  // Generate code for this block.
  const code = `$[tada.speed=${speed} ${text}]`;
  return [code, Order.ATOMIC];
};

forBlock['ruby'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "";
  const ruby = generator.valueToCode(block, 'RUBY', Order.NONE) || "";
  
  // Generate code for this block.
  const code = `$[ruby ${text} ${ruby}]`;
  return [code, Order.ATOMIC];
}
