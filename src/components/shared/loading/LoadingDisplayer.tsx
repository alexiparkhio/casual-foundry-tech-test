import React from "react";
import "./LoadingDisplayer.scss";

/**
 * LoadingDisplayer is the general component used when an async is being processed.
 * @returns {React.FC} LoadingDisplayer
 */
export const LoadingDisplayer: React.FC = () => {
  return (
    <div className="LoadingDisplayer__ball-container">
      <div className="LoadingDisplayer__ball--static" />
      <div className="LoadingDisplayer__ball" />
    </div>
  );
};
