const mongoose = require('mongoose');
const Review = require('./review')
const { cloudinary } = require('../cloudinary')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String,
})

ImageSchema.virtual('cardImage').get(function () {
    return this.url.replace('/upload', '/upload/ar_4:3,c_crop')
})

const opts = {
    toJSON: { virtuals: true }
}

const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId || String,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);

CampgroundSchema.virtual('properties').get(function () {
    return {
        id: this._id,
        title: this.title,
    }
});

CampgroundSchema.post('findOneAndDelete', async function (campground) {
    if (campground.reviews) {
        await Review.deleteMany({
            _id: { $in: campground.reviews }
        })
    }
    if (campground.images) {
        for (const img of campground.images) {
            await cloudinary.uploader.destroy(img.filename);
        }
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema)