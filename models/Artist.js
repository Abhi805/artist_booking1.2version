// const mongoose = require("mongoose");

// const artistSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     emailAddress: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true
//     },
//     mobileNumber: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     performanceDuration: {
//         type: String,
//         required: true // Example: "45-60 mins"
//     },
//     openToTravel: {
//         type: Boolean,
//         default: false
//     },
//     category: {
//         type: String,
//         required: true // e.g. Singer, DJ, Band, etc.
//     },
//     musicGenres: {
//         type: [String],
//         required: true // e.g. ["Bollywood", "Punjabi"]
//     },
//     teamMembers: {
//         type: Number,
//         required: true
//     },
//     locationDescription: {
//         type: String,
//         required: true,
//         minlength: [300, "Location description must be at least 300 characters"]
//     },
//     mediaUploads: {
//         type: [String], // URLs or file paths
//         validate: {
//             validator: function (val) {
//                 return val.length >= 5;
//             },
//             message: "At least 5 media images are required"
//         }
//     },
//     artistVideos: {
//         type: [String],
//         validate: {
//             validator: function (val) {
//                 return val.length <= 3;
//             },
//             message: "Maximum 3 artist videos allowed"
//         }
//     },
//     profilePageTitle: {
//         type: String,
//         required: true
//     },
//     pageKeywords: {
//         type: String,
//         maxlength: [160, "Page keywords must be under 160 characters"]
//     },
//     profilePageDescribe: {
//         type: String,
//         maxlength: [166, "Profile description must be under 166 characters"]
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model("Artist", artistSchema);





import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
    category: { type: String, required: true },
    location: { type: String },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Artist', artistSchema);
