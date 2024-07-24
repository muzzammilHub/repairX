import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: "drzlmxtjt", 
  api_key: "612427688588914", 
  api_secret: "F5kAlrUoBon3jJbMGtKfnYa6DJI" 
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        console.log("File uploaded successfully: ", response.url)
        fs.unlinkSync(localFilePath)
        return response.url
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove the file from system as due to some issue that file is unable to upload on cloudinary

        return null
    }
}

export {uploadOnCloudinary}