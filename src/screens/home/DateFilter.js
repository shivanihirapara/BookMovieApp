import { FormControl, TextField } from '@material-ui/core';

const styles = {
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
};

// Inside the render method
<FormControl style={styles.formControl}>
  <TextField
    label="Release Date Start"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    <TextField
    label="Release Date End"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    
  />
  
</FormControl>

