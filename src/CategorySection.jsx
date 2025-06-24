// src/CategorySection.jsx
import { Grid, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WeekendIcon from '@mui/icons-material/Weekend';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import BuildIcon from '@mui/icons-material/Build';



const categories = [
  { label: '家電',keyword: '家電', icon: <LocalLaundryServiceIcon fontSize="large" /> },
  { label: 'ファッション', keyword: 'ファッション',icon: <CheckroomIcon fontSize="large" /> },
  { label: 'インテリア',  keyword: 'インテリア',icon: <WeekendIcon fontSize="large" /> },
  { label: 'スポーツ',keyword: 'スポーツ',  icon: <SportsSoccerIcon fontSize="large" /> },
  { label: '車部品',keyword: '車部品',  icon: <BuildIcon fontSize="large" />  },
];

export default function CategorySection() {
    const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', py: 5, backgroundColor: '#f9fafc',   
    padding: '40px 20px',
    width: '100%',
    maxWidth: '1200px',          
    margin: '0 auto',             
    borderRadius: '12px', }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
        人気のカテゴリー
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((cat, index) => (
          <Grid item key={index}>
            <Paper
              elevation={0}
              onClick={() => navigate(`/category/${cat.keyword}`)} 
              sx={{
                cursor: 'pointer',
                width: 100,
                height: 100,
                borderRadius: 2,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
    
                p: 1,
              }}
            >
              {cat.icon}
              <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                {cat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
