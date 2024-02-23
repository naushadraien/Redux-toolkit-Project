import breakpoints, { BreakPointType } from './breakPoints';
import colors, { ColorsType } from './colors';
import { devices, deviceType } from './device';
import fontWeights, { FontWeightType } from './fontWeights';
import letterSpacings, { LetterSpacingType } from './letterSpacing';
import lineHeights, { LineHeightsType } from './lineHeights';
import sizes, { SizesType } from './sizes';
import space, { SpacesType } from './spaces';
import zIndices, { ZIndicesType } from './zIndices';

const theme: ThemeType = {
  colors,
  sizes,
  breakpoints,
  space,
  zIndices,
  fontWeights,
  lineHeights,
  letterSpacings,
  devices,
};

export default theme;

export interface ThemeType {
  colors: ColorsType;
  sizes: SizesType;
  breakpoints: BreakPointType;
  space: SpacesType;
  zIndices: ZIndicesType;
  fontWeights: FontWeightType;
  lineHeights: LineHeightsType;
  letterSpacings: LetterSpacingType;
  devices: deviceType;
}
