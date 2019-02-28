/**
 * For augmenting packages lacking typed support (eg no associated @types/<name> package)
 */

declare module "react-scrollable-anchor"
declare module "react-swipeable-views"

declare module "@material-ui/core/Box" {
  export type Breakpoint = {
    xs?: string | number
    sm?: string | number
    md?: string | number
    lg?: string | number
    xl?: string | number
  }
  export type BoxProp = string | number | Breakpoint

  export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    component?: React.ReactType
    clone?: boolean
    border?: BoxProp
    borderBottom?: BoxProp
    borderColor?: BoxProp
    borderLeft?: BoxProp
    borderRadius?: BoxProp
    borderRight?: BoxProp
    borderTop?: BoxProp
    boxShadow?: BoxProp
    displayPrint?: BoxProp
    display?: BoxProp
    alignContent?: BoxProp
    alignItems?: BoxProp
    alignSelf?: BoxProp
    flex?: BoxProp
    flexDirection?: BoxProp
    flexGrow?: BoxProp
    flexShrink?: BoxProp
    flexWrap?: BoxProp
    justifyContent?: BoxProp
    order?: BoxProp
    bgcolor?: BoxProp
    color?: BoxProp
    bottom?: BoxProp
    left?: BoxProp
    position?: BoxProp
    right?: BoxProp
    top?: BoxProp
    zIndex?: BoxProp
    height?: BoxProp
    maxHeight?: BoxProp
    maxWidth?: BoxProp
    minHeight?: BoxProp
    minWidth?: BoxProp
    width?: BoxProp
    m?: BoxProp
    mb?: BoxProp
    ml?: BoxProp
    mr?: BoxProp
    mt?: BoxProp
    mx?: BoxProp
    my?: BoxProp
    p?: BoxProp
    pb?: BoxProp
    pl?: BoxProp
    pr?: BoxProp
    pt?: BoxProp
    px?: BoxProp
    py?: BoxProp
    fontFamily?: BoxProp
    fontSize?: BoxProp
    fontWeight?: BoxProp
    textAlign?: BoxProp
  }

  export const unstable_Box: React.FC<BoxProps>
}
