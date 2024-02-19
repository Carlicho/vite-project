
import styled from 'styled-components'
import SideBar from './SideBar';
import Navbar from './Navbar';
import Main from './Main';
import Foot from './Foot';
import { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';




const Spotify = () => {

    const [{ token }, dispatch ] = useStateProvider();

    useEffect(()=>{
    
        const getUserInfo = async () =>{
            const {data} = await axios.get('https://api.spotify.com/v1/me',{
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            const userInfo = {
                userId: data.id,
                userName: data.display_name
            }
            
            dispatch({type:reducerCases.SET_USER, userInfo})
            }

            getUserInfo();
           

    },[dispatch, token])

    const Container = styled.div`
        max-width: 100vw;
        max-height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-rows: 85vh 15vh;
        .spotify__body{
            display: grid;
            grid-template-columns:15vw 85vw;
            height: 100%;
            width: 100%;
            background: linear-gradient(transparent,rgba(0,0,0,1)) ;
            background-color: rgb(32,87,100);
        .body{
            height:100%;
            width: 100%;
            overflow: auto;
    }
        }

    `;

  return (
    <Container>
        <div className="spotify__body">
            <SideBar/>
            <div className="body">
                <Navbar/>
                <div className="body__contents">
                    <Main/>
                </div>
            </div>
        </div>

        <div className="spotify__footer">
            <Foot/>
        </div>
    </Container>
  )
}

export default Spotify
