import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';
import './App.css';
import './Animations.css';
import styles from './MuiStyles';

// Tipo de archivo multimedia
type MediaFile = {
  path: string;
  type: 'image' | 'video';
};

function App() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  useEffect(() => {
    const media = import.meta.glob<{ default: string }>('/src/fotos/*.{png,jpg,jpeg,svg,webp,mp4,mov,avi,mkv}', { eager: true });
    const filePaths: MediaFile[] = Object.entries(media).map(([file, module]) => ({
      path: module.default,
      type: /\.(mp4|mov|avi|mkv)$/i.test(file) ? 'video' : 'image',
    }));
    setMediaFiles(filePaths);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    appendDots: (dots: any) => (
      <div style={{ position: 'relative', bottom: '-30px' }}>
        <ul style={{ margin: '0', padding: '0' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Container maxWidth="lg" className="animated-background" sx={{ ...styles.container, minHeight: { xs: '80vh', md: '100vh' } }}>
      <Typography variant="h4" sx={styles.title}>Nuestro Álbum de Recuerdos 💖</Typography>
      
      {/* Mensaje especial */}
      <Typography variant="h5" sx={styles.message}>
        Te amo Mi Linda Hermosa, preciosa, te amo bb como no tienes idea 💜💖💕💞
      </Typography>
      
      {/* Carrusel de imágenes */}
      <Box sx={{ ...styles.carouselBox, marginTop: { xs: 5, md: 8 }, paddingBottom: '40px' }} className="fade-in">
        <Slider {...sliderSettings}>
          {mediaFiles.filter(file => file.type === 'image').map((file, index) => (
            <Box key={index} sx={styles.imageBox}>
              <img src={file.path} alt={`Imagen ${index + 1}`} className="carousel-image" style={{ ...styles.image, objectFit: 'cover' as const }} />
            </Box>
          ))}
        </Slider>
      </Box>
      
      {/* Carrusel de videos */}
      <Box sx={{ ...styles.carouselBox, marginTop: { xs: 5, md: 8 }, paddingBottom: '40px' }} className="fade-in">
        <Slider {...sliderSettings}>
          {mediaFiles.filter(file => file.type === 'video').map((file, index) => (
            <Box key={index} sx={styles.videoBox}>
              <video autoPlay loop muted playsInline className="video-player" style={{ ...styles.video, objectFit: 'cover' as const }}>
                <source src={file.path} type="video/mp4" />
              </video>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default App;
