import mongoose from "mongoose"

const dbConection =async()=>{
    try {

        await mongoose.connect(process.env.MONGODB_ATLAS,{
            // useNewUrlparser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false
        });
        console.log('DB online')
    } catch (error) {

        console.log(error)
        throw new Error('Error al iniciar la base de datos')

    }
}

export default dbConection;


