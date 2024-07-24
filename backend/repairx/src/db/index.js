import mongoose from "mongoose"

const uri = "mongodb+srv://mdzaki2611:mdzaki2611@cluster1.l1jf4nn.mongodb.net/repairxDB?retryWrites=true&w=majority&appName=Cluster1"



const connectToDatabase = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('Connected to MongoDB')
    } catch (error) {
      console.error('Error connecting to MongoDB', error)
    }
  }


export {
    connectToDatabase
}