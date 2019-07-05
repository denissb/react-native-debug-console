import DevTool from './components/DevTool/index';
import DevToolModal from './components/DevTool/Modal';
import log from './log';
import network from './network';
import events from './events';

const show = () => events.publish('SHOW_DEVTOOLS');
const hide = () => events.publish('HIDE_DEVTOOLS');

export {
  DevTool,
  DevToolModal,
  log,
  network,
  show,
  hide,
};