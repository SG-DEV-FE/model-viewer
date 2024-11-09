// model-viewer.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'environment-image'?: string;
        exposure?: string;
        'shadow-intensity'?: string;
        slot?: string;
        'data-position'?: string;
        'data-normal'?: string;
      };
    }
  }