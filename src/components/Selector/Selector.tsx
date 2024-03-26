import './Selector.scss';
import { Button, ButtonGroup } from '@mui/material';

export function Selector() {
  return (
    <div className="selector">
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Prev Card</Button>
        <Button color="error">Repeat</Button>
        <Button color="success">I Know!</Button>
        <Button>Next Card</Button>
      </ButtonGroup>
    </div>
  );
}
