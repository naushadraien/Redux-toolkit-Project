import { screenSizes } from './screen';
export const devices = {
  mobileXS: ` (min-width: ${screenSizes.xs})`,
  mobileSM: ` (min-width: ${screenSizes.sm})`,
  tablet: ` (min-width: ${screenSizes.md})`,
  laptop: ` (min-width: ${screenSizes.lg})`,
  laptopXL: ` (min-width: ${screenSizes.xl})`,
  Desktop: ` (min-width: ${screenSizes.xxl})`,
};
export type deviceType = typeof devices;
