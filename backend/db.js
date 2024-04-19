const mongoose=require("mongoose");
const Db_url = process.env.Db_url;
mongoose.connect(Db_url)

const Todoschema=mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const todo=mongoose.model('todos',Todoschema);

module.exports={todo}