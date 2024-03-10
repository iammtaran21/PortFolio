import React from 'react';
import { certificate } from '../constants';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'; 
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from "../hoc";

const Certs = () => {
    const CertificationCard = ({ cert, onClick }) => (
      <motion.div variants={fadeIn("right", "spring")}
      
      
    >
        <Tilt className='xs:w-[250px] w-full' 
        options={{ max: 45, scale: 1, speed: 450 }}>
          <div className="certification-card-container p-2" onClick={() => onClick(cert.link)}>
            <Card className="certification-card">
              <CardMedia
                component="img"
                height="10"
                image={cert.previewImage}
                alt={cert.name}
              />
              <CardContent>
                <p className='certs'>{cert.name}</p>
              </CardContent>
            </Card>
          </div>
        </Tilt>
      </motion.div>
    );

  const handleCardClick = (certLink) => {
    // Handle the onClick effect (e.g., open a link)
    window.open(certLink, "_blank");
    // You can navigate or perform other actions based on the clicked certificate
  };

  return (
    <div className="certifications-container">
      <h2 className= "text-white font-bold text-[44px]">Glossary</h2>
      <br></br>
      <br></br>
      <div className="certifications-container flex p-3  space-x-10 space-y-0" style={{ display: 'flex', maxWidth: '100%', overflowX:"scroll" }}>
        {certificate.map((cert, index) => (
          <CertificationCard key={index} cert={cert} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

// export default Certs;
export default sectionWrapper(Certs, "certs");
