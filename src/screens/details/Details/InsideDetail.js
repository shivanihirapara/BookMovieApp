import React from 'react';
import { Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const InsideDetail = () => {

  return (
    <div>
    <Typography
      component="button"
      variant="body1"
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '24px',
        marginTop: '8px',
        marginBottom: '0px',
        height: '24px',
        cursor: 'pointer',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <KeyboardBackspaceIcon sx={{ marginRight: '4px' }} />
      {'<'} Back to Home
    </Typography>
    
    <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flex: '1',
      height: '100%',
    }}
  >
    <div style={{ flex: '20%' }}>
      <img src={''} alt="Movie Poster" />
    </div>
    <div style={{ flex: '60%' }}>
      <div style={{ flex: '60%', padding: '0 16px' }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Genres: {genres}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Duration: {duration}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Release Date: {new Date(release_date).toDateString()}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Rating: {critics_rating}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom style={{ marginTop: '16px' }}>
          Plot:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {story_line}{' '}
          <a href={wiki_url} target="_blank" rel="noopener noreferrer">
            (Wikipedia)
          </a>
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom style={{ marginTop: '16px' }}>
          Trailer:
        </Typography>
        <YouTube videoId={trailer_url} opts={opts} />
      </div>
    </div>
    <div style={{ flex: '20%' }}></div>
  </div>

  </div>

  );
};
export default InsideDetail;
