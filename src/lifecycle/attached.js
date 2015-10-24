import data from '../util/data';

export default function (opts) {
  return function () {
    let info = data(this, `lifecycle/${opts.name}`);
    if (info.attached) return;
    info.attached = true;
    info.detached = false;
    opts.attached(this);
  };
}
