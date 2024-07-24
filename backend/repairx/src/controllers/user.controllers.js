import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { Technician } from "../models/user.model.js"

const userRegisteration = async(req, res)=>{
    try {

        console.log("********", req.body)
        const {name, email, password} = req.body


        const isExistedUser = await User.findOne({email})

        console.log("**********isE", isExistedUser)

        if(isExistedUser){
            return res.status(401).json({
                message: "user already exist!!"
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })

        console.log("**********", user)

        if(!user){
            return res.status(400).json({
                message: "something issue in creating user"
            })
        }

        return res.status(200).json({
            user
        })

    } catch (error) {

        return res.status(500).json({
            error
        })
    }
}

const userLogin = async(req, res)=>{
    try {

        const {email, password} = req.body

        console.log("************", email, password)

        if(!email && !password){
            return res.status(400).json({
                message: "email and password is required"
            })
        }

        const existingUser = await User.findOne({email: email})
        console.log(existingUser)
        if(!existingUser){
            return res.status(401).json({
                message: "User not existed"
            })
        }

        const isPasswordCorrect = await existingUser.isPasswordCorrect(password)

        if(!isPasswordCorrect){
            return res.status(400).json({
                message: "Password not matched!!"
            })
        }

        const userToken = existingUser.generateToken()

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
        .status(200)
        .cookie("userToken", userToken, options)
        .json({
            existingUser,
            userToken
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error
        })
    }
}

const userLogout = async (req, res)=>{

    try {
        return res.status(200).cookie("userToken",null, {
            expires: new Date(Date.now()), 
            httpOnly: true
        }).json({
            success: true,
            message: "successfully logout"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const technicianDataFeed = async(req, res)=>{
    try {

        const { technician } = req.body
        const technicianData = JSON.parse(technician)
        const avatar = req.files.avatar ? req.files.avatar[0].path : null
        const proofOfWork = req.files.proofOfWork ? req.files.proofOfWork.map(file => file.path) : []

        const avatarUrl = await uploadOnCloudinary(avatar)
        const proofOfWorkUrls = await Promise.all(proofOfWork.map(filePath => uploadOnCloudinary(filePath)))

        const newTechnician = new Technician({
            ...technicianData,
            avatar: avatarUrl,
            proofOfWork: proofOfWorkUrls,
            user: req.user._id
          })

        
          await newTechnician.save()

          res.status(200).json({
            message: 'Technician data received and saved successfully',
            technician: newTechnician,
          })
        
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

const fetchTechnician = async (req, res) => {
    try {
        const { location, category } = req.query

        console.log(location, category)

        const query = {}
        
        if (location) {
            query.serviceArea = new RegExp(location, 'i') 
        }
        
        if (category) {
            query.specialization = new RegExp(category, 'i') 
        }

        const technicians = await Technician.find(query)

        res.status(200).json({
            success: true,
            technicians
        })

    } catch (error) {
        console.error('Error fetching technicians:', error.message)
        res.status(500).json({
            success: false,
            message: 'Server error. Unable to fetch technicians.',
            error: error.message
        })
    }
}

const specificTechnician = async(req, res)=>{
    try {

        const { id } = req.params
        const technician = await Technician.findById(id);

        if (!technician) {
        return res.status(404).json({ error: 'Technician not found' })
        }

        res.json({ technician })
        
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export {
    userRegisteration,
    userLogin,
    userLogout,
    technicianDataFeed,
    fetchTechnician,
    specificTechnician
}
