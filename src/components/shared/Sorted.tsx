import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import { enumKeys } from '../../utils/helpers';
import { SortInput } from '../../interfaces/types';


export default function Sorted(props:any) {
  const [sort, setSort] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };
  console.log(sort)

  return (
    <Grid item xs={2} md={2}>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort By
        </InputLabel>
        <NativeSelect
            onChange={handleChange}
            >
            {     
                enumKeys(SortInput).map((input: any) => (
                  <option value={input}>{input}</option>
                ))
            } 

        </NativeSelect>

      </FormControl>
    </Grid>
  );
}

