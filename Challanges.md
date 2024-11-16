## Challanges Faced During the Completion of the Given assignment
- Issues like CORS(Cross Origin Resource Policy) occured during making calls for api from backend to frontend
- TO RESOLVE : to handle this issue i I used the cors middleware in the backend to enable cross-origin requests from the frontend
``` bash
import cors from 'cors';
app.use(cors());
```
- issues like refreshing the page again after adding a new contact was also there .
