import React from "react";
import DotLoader from "react-spinners/DotLoader";
import LoadingOverlay from "react-loading-overlay";
import "./Loader.css";
import styled from "styled-components";

const DarkBackground = styled.div`
  display: block; 
  position: fixed; 
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4);
`;

function Loader() {
   
  return (
    <div className="">
      <DarkBackground>
        <LoadingOverlay
          active={true}
          spinner={<DotLoader
                    color="#0070C1"
                    cssOverride={{}}
                    loading={true}
                    size={130}
                    speedMultiplier={1.5}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    />}>
        </LoadingOverlay>
      </DarkBackground>
    </div>
  );
}

export default Loader;