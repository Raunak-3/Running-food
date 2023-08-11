// const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://raunak:running123@cluster.rlt9b3z.mongodb.net/Runningfood?retryWrites=true&w=majority';

const mongoDB = async () => {
  await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log("...",err)
        else{
                   console.log("connected");
                   const fetched_data=await mongoose.connection.db.collection("fooditems");
                   fetched_data.find({}).toArray(async function(err,data){
                    const foodCategory=await mongoose.connection.db.collection("food_category");
                   foodCategory.find({}).toArray(function(err,catData){
                        if(err) console.log(err);
                        else{
                          global.fooditems=data;
                          global.food_category=catData;
                        }


                   })
                    // if(err) console.log(err);
                    // else {
                    
                    //     global.food_items=data;
                        
                    // }
                   })
        }
  });
}  

module.exports = mongoDB;

