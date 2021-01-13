import * as React from 'react'
import ripple, { RippleParams } from 'descent-ripple';

const DescentRipple = (props: RippleParams) => {

  const dref = React.useRef<HTMLDivElement>(null);
  const [_ripple, set_ripple] = React.useState(undefined as ReturnType<typeof ripple> | undefined);

  React.useEffect(() => {
    if (dref.current && dref.current.parentNode) {
      const rip = ripple(dref.current.parentNode, {});
      set_ripple(rip);
      return rip.destroy;
    }
    return;
  }, []);

  if (_ripple) {
    _ripple.update(props);
    return null;
  }

  return (
    <div ref={dref} style={{ width: 0, height: 0, margin: 0, padding: 0, border: 0 }}></div>
  )
}

export default DescentRipple;
