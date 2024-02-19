import { useEffect, useState } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components';




const Playlist = () => {

    const Container = styled.div`
    height: 100%;
    overflow: hidden;
            ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            height: 52vh;
            max-height: 100%;
            overflow: auto;
            &::-webkit-scrollbar{
                width: 0.7rem;
                &-thumb{
                    background-color: #255;
                }

            }
            li{
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: white;
                }
            }}`

    const [{ token }, dispatch] = useStateProvider();
    const [playlistData, setPlaylistData] = useState([]);

    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/playlists",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        }
                    }
                );

                const { items } = response.data;
                
                const playlists = items.map(({ name, id }) => {
                    return { name, id };
                });

                setPlaylistData(playlists);
            } catch (error) {
                console.error("Error fetching playlists:", error);
            }
        };

        if (token) {
            getPlaylistData();
        }
    }, [token]);

    return (
        <Container>
            <ul>
                {playlistData.map(({ name, id }) => {
                    return (
                        <li key={id}>{name}</li>
                    );
                })}
            </ul>
        </Container>
    );
};

export default Playlist;