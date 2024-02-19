import styled from 'styled-components'

const handleClick = () =>{
    const clientId = "324883bfa5cc4345b4616712c71ba926";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
     "user-read-email",
     "user-read-private",
     "user-read-playback-state",
     "user-modify-playback-state",
     "user-read-currently-playing",
     "user-read-playback-position",
     "user-top-read",
     "user-read-recently-played",
    ];
     window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" "
     )}&response_type=token&show_dialon=true`;
}

const Login = () => {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    `

  return (
    <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify img'/>
        <button onClick={handleClick}>Connect Spotify</button>

    </Container>
  )
}

export default Login