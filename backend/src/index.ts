import app from "./root/app";
import {PORT} from "./config/config";

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Port`);
});
