export interface IResponsiveSettings {
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  dots?: boolean;
}

export interface IResponsive {
  breakpoint?: number;
  settings?: IResponsiveSettings;
}

export interface ISettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  centerMode?: boolean;
  responsive?: any;
}
