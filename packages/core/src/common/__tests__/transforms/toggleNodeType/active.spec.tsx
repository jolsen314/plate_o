/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { ELEMENT_BLOCKQUOTE } from '../../../../../../nodes/block-quote/src/createBlockquotePlugin';
import { PlateEditor } from '../../../../types/PlateEditor';
import { toggleNodeType } from '../../../transforms/toggleNodeType';

jsx;

const input = ((
  <editor>
    <hblockquote>
      test
      <cursor />
    </hblockquote>
  </editor>
) as any) as PlateEditor;

const output = (
  <editor>
    <hdefault>
      test
      <cursor />
    </hdefault>
  </editor>
) as any;

it('should be', () => {
  toggleNodeType(input, { activeType: ELEMENT_BLOCKQUOTE });

  expect(input.children).toEqual(output.children);
});
