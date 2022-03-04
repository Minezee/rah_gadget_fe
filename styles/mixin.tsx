// Base style guide
const guide = {
  size: {
    xs: 360,
    sm: 500,
    md: 768,
    lg: 1024,
    xl: 1240,
  },
};

// extends base style
const device = {
  mobile_sm: `(max-width: ${guide.size.xs}px)`,
  mobile_md: `(max-width: ${guide.size.sm}px)`,
  tablet_md: `(max-width: ${guide.size.md}px)`,
  tablet_lg: `(max-width: ${guide.size.lg}px)`,
  laptop_md: `(max-width: ${guide.size.xl}px)`,
  starter_kit: `1440px`,
  // starter_kit: `1080px`,
};

export type labelColorTypes = "bisnis" | "gaming" | "editing" | "kuliah"

type labelColorMap = {[labelColorType in labelColorTypes] : string}

const labelColor: labelColorMap = {
  gaming: "#CF5417",
  editing: "#4C9900",
  bisnis: "#007299",
  kuliah: "#EBC247",
};

const mainColor = {
  primary: "#434343",
  secondary: "#D31E1C",
  rating_active: "#F2994A",
  rating_unactive: "#F2994A"
}

const backgroundColor = {
  white: "#F4F4F4",
  whiteCard: "#FFFFFF"
}

const textColor = {
  black: "#222222",
  white: "#FFFFFF",
  text_unable: "#BCBCBC",
}
export { guide, device, labelColor, mainColor, backgroundColor, textColor };
