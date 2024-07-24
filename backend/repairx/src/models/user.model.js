import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true})

const technicianSchema = new Schema({
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    serviceArea: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    proofOfWork: {
        type: [String],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

userSchema.methods.isPasswordCorrect = function(password){
    return password === this.password
}

userSchema.methods.generateToken = function(){
    return jwt.sign({
        _id: this._id
    }, 
    "secretkosecrethirehnedo"
)
}

export const User =  mongoose.model("User", userSchema)

export const Technician = mongoose.model("Technician", technicianSchema)