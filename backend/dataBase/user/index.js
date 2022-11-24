import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

var UserSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required: true,},
        email: { type: String, required: true ,lowecase:true,unique:true, },
        password: { type: String,required: true, },
        phone: { type: Number, required:true,},
        resetLink:{data: String, default:'',},

    },
    {
        timestamps: true,
    },
)

// Attachments
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "WISDOM");
};

//helper function
UserSchema.statics.findByEmailAndPhone = async ({ email, phone }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phone });
    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User Already Exists......!");
    }
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error("User Does Not Exist !!!")
    }
    ///Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) {
        throw new Error("Incorrect Credentials ")
    }
    return user;
};

UserSchema.pre('save', function (next) {
    const user = this;

    //pasword is modified 
    if (!user.isDirectModified('password')) return next();

    // generate bycryt salting
    bcrypt.genSalt(8, (error, salt) => {
        // hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error)

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

// export const UserModel = mongoose.model("users", UserSchema);