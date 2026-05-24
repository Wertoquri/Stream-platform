import React, { use } from 'react'
import { Plyr } from 'plyr-react';
import 'plyr-react/plyr.css';
import { useParams } from 'react-router';
import { styled, Box, Card, CardMedia, Typography, Divider } from '@mui/material';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfo } from '../store/APIReducer';
import { useEffect } from 'react';
import { useTranslation, Trans } from "react-i18next";


export default function Movie() {
    let { id } = useParams();
    let { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieInfo(id))
    }, [dispatch, id])

    let movie = useSelector(state => state.api.movie)

    const baseURL = import.meta.env.DEV ? "http://localhost:3000" : ""
    const buildUrl = path => `${baseURL}${path.startsWith('/') ? path : `/${path}`}`
    const posterUrl = movie?.poster_url ? buildUrl(movie.poster_url) : buildUrl('poster.png')

    return (

        <Wrapper>

            <InfoBar>
                <CardMedia image={posterUrl} sx={{ aspectRatio: '16/9' }} />
                <Typography variant="body1" >{t("Release data")}: {movie?.release_data ? new Date(movie.release_data).toLocaleDateString() : ''}</Typography>
                <Typography variant="body2" >IMDB: {movie.rating}</Typography>
                <Typography variant="body2" ><Trans>Duration</Trans>: {movie.duration} <Trans>minutes</Trans></Typography>
            </InfoBar>
            <PlayerWrapper>
                <Typography variant="h5" >{movie.title}</Typography>
                <Typography variant="h7" >{movie.year}</Typography>
                <Plyr source={{
                    type: 'video',
                    sources: [
                        {
                            src: buildUrl(`movies/${id}`)
                        }
                    ],
                    poster: buildUrl('posters/poster.jpg')
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
                <Typography variant="h6" ><Trans>Description</Trans> {movie.description}</Typography>
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