import mongoose from 'mongoose';
const Shema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Shema({
    // _id: {type: String, required: true},
    // seq: { type: Number, default: 0 },    
    firstName: {
        type: String, 
        required: [true, 'El nombre es necesario']
    },
    lastName: {
        type: String,
        required: [true, 'Los Apellidos son necesarios']
    },
    // _roleId: {
    //     type: ObjectId, ref: 'Role'
    // },
    creationDate: {type: Date, default: Date.now},
    active: {type: Boolean, default: true}
});

// Convertir a modelo
const User = mongoose.model('User', userSchema);

export default User;