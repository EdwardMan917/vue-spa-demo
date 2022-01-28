import { Button, Icon, Popover, Popup } from "vant";
import "vant/lib/button/style";
import "vant/lib/icon/style";
import "vant/lib/popover/style";
import "vant/lib/popup/style";

class VantUI {
  // eslint-disable-next-line
  constructor(app: any) {
    app.use(Button);
    app.use(Icon);
    app.use(Popover);
    app.use(Popup);
  }
}

export default VantUI;
