import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const MovieDetail = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {/* //tylko gdy movie jest dostępne do zrenderowania zwroc: */}
      {movie && (
        <StyledDetails
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledDescription>{movie.description}</StyledDescription>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-position: cover;
  }
`;
const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: 100% 30%;
  }
`;

const StyledDescription = styled.div`
  padding: 10rem 10rem;
  margin: 0rem 5rem;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.07em;
  display: flex;
  align-items: flex-end;
  width: 50%;
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #c5501a;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding-bottom: 5rem;
  }
`;

//Award Component

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line">
        <p>{description}</p>
      </div>
    </StyledAward>
  );
};
export default MovieDetail;
