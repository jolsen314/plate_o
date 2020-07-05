/** @jsx jsx */

import { withReact } from 'slate-react';
import { jsx } from '../../../../../__test-utils__/jsx';
import { withInlineVoid } from '../../../../../element/index';
import { LINK, withLink } from '../../../../index';

const input = (
  <editor>
    <hp>
      http://google.com
      <cursor />
    </hp>
  </editor>
) as any;

const text = ' ';

const output = (
  <editor>
    <hp>
      <htext />
      <element type="a" url="http://google.com">
        http://google.com
      </element>{' '}
    </hp>
  </editor>
) as any;

describe('when inserting a space after a url text (without link element) placed at the start of a block', () => {
  it('should wrap the url with a link element', () => {
    const editor = withLink()(
      withInlineVoid({ inlineTypes: [LINK] })(withReact(input))
    );

    editor.insertText(text);

    expect(input.children).toEqual(output.children);
  });
});
