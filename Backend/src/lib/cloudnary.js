import {v2 as cloudnary} from "cloudinary"
import { config } from "dotenv"
config()
cloudnary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
});
export default cloudnary;