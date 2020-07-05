/** @jsx jsx */

import { jsx } from '../../../../__test-utils__/jsx';
import { withInlineVoid } from '../../../../element/index';
import { LINK, upsertLinkAtSelection, withLink } from '../../../index';

const urlInput = 'http://input.com';

const input = (
  <editor>
    <hp>
      insert link <anchor />
      <element type={LINK} url={urlInput}>
        here
      </element>
      <focus />.
    </hp>
  </editor>
) as any;

const urlOutput = 'http://output.com';

const output = (
  <editor>
    <hp>
      insert link{' '}
      <element type={LINK} url={urlOutput}>
        here
      </element>
      .
    </hp>
  </editor>
) as any;

it('should run default insertText', () => {
  const editor = withLink()(withInlineVoid({ inlineTypes: [LINK] })(input));
  upsertLinkAtSelection(editor, urlOutput);

  expect(input.children).toEqual(output.children);
});
