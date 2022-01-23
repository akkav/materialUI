import React,{useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';

function Bottombar () {
    const [value, setValue] = useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
      <BottomNavigationAction label="Load Balancer" icon={<BarChartIcon />} />
      <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
    </BottomNavigation>
    </Paper>
  );
};

export default Bottombar;
