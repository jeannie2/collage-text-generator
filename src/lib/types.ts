export interface PageData {
  title?: string;
  description?: string;
}

export interface Styles {
  outerWrapperStyles: {
    filter: string;
    transform: string;
    transformOrigin: string;
  };
  wrapperStyles: {
    position: string;
    display: string;
    margin: string;
    // clipPath: string;
    backgroundColor: string;
    width: string;
    height: string;
    borderRadius: string;
    filter: string;
    zIndex: number;
  };
  textStyles: {
    position: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string | number;
    color: string;
    transform: string;
    textAlign: string;
    zIndex: number;
  };
}

export interface CollageItem {
  id: string;
  char: string;
  styles: Styles;
  scale: number;
}