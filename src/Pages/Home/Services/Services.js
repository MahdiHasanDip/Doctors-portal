import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"
import { Container } from '@mui/material';
import { Box } from '@mui/system';


  const services = [
    {
      name: "Fluoride Treatment",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam pariatur, mollitia exercitationem ex saepe sequi obcaecati cupiditate sunt veritatis error molestiae unde in laborum at ratione similique vitae? Temporibus?",
      img: fluoride
    },
    {
      name: "Cavity Filling",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam pariatur, mollitia exercitationem ex saepe sequi obcaecati cupiditate sunt veritatis error molestiae unde in laborum at ratione similique vitae? Temporibus?",
      img: cavity
    },
    {
      name: "whitening",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam pariatur, mollitia exercitationem ex saepe sequi obcaecati cupiditate sunt veritatis error molestiae unde in laborum at ratione similique vitae? Temporibus?",
      img: whitening
    }

  ] 

const Services = () => {
  console.log(services);
    return (
      <Box sx={{ flexGrow: 1}}>
          <Container>
             <Typography sx={{ fontWeight: 500, m: 5, color: 'success.main' }} variant="h6" component="div">
                  Our Services
             </Typography>
             <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                  Services We Provide
             </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      {
                        services.map(service => <Service
                          key= {service.name}
                          service={service}
                          ></Service> )
                      }
                    </Grid>
          </Container>
        </Box>
    );
};

export default Services;