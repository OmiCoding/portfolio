function HbSvg() {
  return (
    <svg
      className="header__nav__hb-svg"
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 25 -15.5"
          />
          <feComposite in="SourceGraphic" in2="gooeyEffect" operator="atop" />
        </filter>
      </defs>
      <g className="hb-group">
        <rect className="hb-bg" x="0" width="60" height="60" rx="10" />
        <rect className="bar-1" x="12" y="12" width="32" height="8" rx="4" />
        <rect className="bar-2" x="12" y="26" width="20" height="8" rx="4" />
        <rect className="bar-3" x="12" y="40" width="32" height="8" rx="4" />
      </g>
    </svg>
  );
}

export default HbSvg;
