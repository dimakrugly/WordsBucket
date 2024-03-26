import Sheet from '@mui/material/Paper';
import './Paper.scss';

export const Paper = () => (
  <Sheet
    elevation={3}
    sx={{
      width: '200px',
      height: '200px',
      zIndex: -2,
    }}
  >
    <div className="paper__image" />
  </Sheet>
);
