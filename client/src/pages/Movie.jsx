import React from 'react'
import { Plyr } from 'plyr-react';
import 'plyr-react/plyr.css';
import { useParams } from 'react-router';
import { styled, Box, Card, CardMedia, Typography, Divider } from '@mui/material';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfo } from '../store/APIReducer';
import { useEffect } from 'react';


export default function Movie() {
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieInfo(id))
    }, [id])

    let movie = useSelector(state => state.api.movie)

    return (

        <Wrapper>

            <InfoBar>
                <CardMedia image="http://localhost:3000/poster.png" sx={{ aspectRatio: '16/9' }} />
                <Typography variant="body1" >Release data: {new Date(movie.release_data).toLocaleDateString()}</Typography>
                <Typography variant="body2" >IMDB: {movie.rating}</Typography>
                <Typography variant="body2" >Duration: {movie.duration}</Typography>
            </InfoBar>
            <PlayerWrapper>
                <Typography variant="h5" >{movie.title}</Typography>
                <Typography variant="h7" >{movie.year}</Typography>
                <Plyr source={{
                    type: 'video',
                    sources: [
                        {
                            src: `http://localhost:3000/movies/${id}`
                        }
                    ],
                    poster: `http://localhost:3000/posters/poster.jpg`
                }}
                    options={{
                        controls: [
                            'play',
                            'progress',
                            'current-time',
                            'mute',
                            'volume',
                            'fullscreen',
                            'settings',

                        ]
                    }} />
            </PlayerWrapper>
            <OtherInfo>
                <Typography variant="h4" >{movie.title}</Typography>
                <Divider />
                <Typography variant="h6" > {movie.description}</Typography>
            </OtherInfo>
        </Wrapper>
    );
}

let Wrapper = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
    gap: 1rem;
`

let InfoBar = styled(Card)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

let PlayerWrapper = styled(Box)`
    grid-column: span 2;
`

let OtherInfo = styled(Paper)`
    padding: 1rem;
    grid-column: 1/-1;
`