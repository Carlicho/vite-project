import React, { useEffect } from 'react'
import styled from 'styled-components'
import {AiFillClockCircle} from 'react-icons/ai'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'

const Main = () => {
  const [{ token, selectedPlaylist , SelectedPlaylistId: SelectedPlaylistId }, dispatch ] = useStateProvider();  
  
  useEffect(()=>{
    const getInicialPlaylist = async () =>{
      
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${SelectedPlaylistId}`,
        {                
          headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
      },
      }
      );
      console.log(response.data)
      }
     
    
    getInicialPlaylist();
  },[token, dispatch, SelectedPlaylistId])

  const Container = styled.div`
    
  `



  return (
    <Container>
      {
        selectedPlaylist && (
          <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylist.image} alt='selectedplaylist'/>
            </div>
            <div className="details">
              <span className='type'>PlayList</span>
              <h1 className='title'>{selectedPlaylist.name}</h1>
              <p className='description'>{selectedPlaylist.description}</p>
            </div>
          </div>
          </>
        )
      }
    </Container>
  )
}

export default Main