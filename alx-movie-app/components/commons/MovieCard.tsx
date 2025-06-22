import React from 'react';

const MovieCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Movie Title</div>
      </div>
    </div>
  );
};

export default MovieCard;