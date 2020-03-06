import mongoose from 'mongoose';


const Schema = mongoose.Schema;


var roleSchema = Schema({
    _id: {type: Schema.Types.ObjectId}, 
    name: String,
    _user : { type: Schema.Types.ObjectId, ref: 'User' },
  });

  const Role = mongoose.model('Role', userSchema);