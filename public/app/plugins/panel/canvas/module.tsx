import { PanelPlugin } from '@grafana/data';

import { CanvasPanel } from './CanvasPanel';
import { SelectedElementEditor } from './editor/SelectedElementEditor';
import { defaultPanelOptions, PanelOptions } from './models.gen';

export const plugin = new PanelPlugin<PanelOptions>(CanvasPanel)
  .setNoPadding() // extend to panel edges
  .setPanelOptions((builder) => {
    builder.addCustomEditor({
      category: ['Selected Element'],
      id: 'selected',
      path: 'root', // multiple elements may edit root!
      name: 'Selected Element',
      editor: SelectedElementEditor,
      defaultValue: defaultPanelOptions.root,
    });
  });
