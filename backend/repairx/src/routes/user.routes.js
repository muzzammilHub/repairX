import express from "express"
import { fetchTechnician, specificTechnician, technicianDataFeed, userLogin, userLogout, userRegisteration } from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/multer.middleware.js"
const router = express.Router()

router.route("/login").post(userLogin)
router.route('/signup').post(userRegisteration)
router.route('/logout').get( isAuthenticated ,userLogout)
router.route("/technician").post(isAuthenticated, 
    upload.fields([{ name: 'avatar', maxCount: 1 },
     { name: 'proofOfWork', maxCount: 10 }]) ,technicianDataFeed)
router.route("/technicians").get(fetchTechnician)
router.route("/technician/:id").get(specificTechnician)



export default router