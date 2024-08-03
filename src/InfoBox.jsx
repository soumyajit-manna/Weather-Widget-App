import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let HOT_URL ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL ="https://images.unsplash.com/photo-1672588337559-d2ce3ad82682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fENvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let RAIN_URL ="https://media.istockphoto.com/id/1053791954/photo/open-black-umbrella-in-wet-weather-autumn-rain-deep-sorrow-wet-umbrella-against-backdrop-of.webp?b=1&s=170667a&w=0&k=20&c=MUAgWEoZv83cEpOthggtCeFLXM5owhQC_gHbOKrM9_s=";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia style={{backgroundColor:"#ff8c69"}}
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL 
                            : COLD_URL
                        }
                        
                    />
                   <CardContent style={{padding:"20px"}}>
                        <Typography 
                            style={{fontSize:"24px",fontWeight:"bold"}}
                            gutterBottom variant="h5" 
                            component="div"
                        >
                            {info.city}{""}
                            {info.humidity > 80 ? (
                             <ThunderstormIcon/>
                            ): info.temp >15 ? (
                             <WbSunnyIcon/> 
                            ):(
                            <ThunderstormIcon/>
                        )}
                        </Typography>
                        <Typography 
                            style={{color:"#666", fontSize:"18px"}}
                            variant="body2" 
                            color="text.secondary" 
                            component={"span"}
                        >
                            <p>Temperature = <b>{info.temp}&deg;C</b></p>
                            <p>Humidity = <b>{info.humidity}%</b></p>
                            <p>Min Temperature = <b>{info.tempMin}&deg;C</b></p>
                            <p>Max Temperature = <b>{info.tempMax}&deg;C</b></p>
                            <p>The weather can be described as <b>{info.weather}</b> and feels like = <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}