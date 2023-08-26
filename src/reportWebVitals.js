function reportWebVitalsHere(onPerfEntry){
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ CLS, FID, FCP, LCP, TTFB }) => {
      CLS(onPerfEntry);
      FID(onPerfEntry);
      FCP(onPerfEntry);
      LCP(onPerfEntry);
      TTFB(onPerfEntry);
    });
  }
};

export default reportWebVitalsHere;
