import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MultipleTag() {
    return (
            <Autocomplete
                multiple
                id="tags-outlined"
                options={topTag}
                getOptionLabel={(option) => option.title}
                defaultValue={[topTag[4]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                    {...params}
                    placeholder="Add more tag..."
                    />
                )}
            />
    );
}

const topTag = [
    { title: 'Pasar Saham', year: 1994 },
    { title: 'Perekonomian', year: 1972 },
    { title: 'Saham', year: 1974 },
    { title: 'Artikel', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Berita", year: 1993 },
    { title: 'Senin Pagi', year: 1994 },
];
