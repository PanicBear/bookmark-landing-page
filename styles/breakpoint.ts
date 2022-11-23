import { css, FlattenSimpleInterpolation } from 'styled-components';

type TDevice = 'Mobile' | 'Desktop';

const BreakPoint: Record<TDevice, string> = {
  Mobile: `(max-width: 767px)`,
  Desktop: `(min-width: 768px) and (max-width: 1440px)`,
};

export default BreakPoint;
