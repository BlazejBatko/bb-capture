import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 885 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_116_71)">
        <motion.path
          className="line"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
          d="M885 27.4774C797.73 19.8184 567.41 49.0556 344.331 227.276C65.48 450.052 -200.718 355.647 -384.672 185.318C-531.835 49.0556 -559.217 8.32998 -554.513 5"
          stroke="#C5501A"
          strokeOpacity="0.5"
          strokeWidth="6"
        />
      </g>
      <defs>
        <clipPath id="clip0_116_71">
          <rect
            width="1440"
            height="363"
            fill="white"
            transform="translate(-555)"
          />
        </clipPath>
      </defs>
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;

  z-index: -1;
  @media (max-width: 1300px) {
    top: 50%;

    .line {
      stroke-width: 1rem;
    }
  }
`;

export default Wave;
