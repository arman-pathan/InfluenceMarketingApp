const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = require("../models/Category").schema

var AutoIncrement = require('mongoose-sequence')(mongoose);

var TaskSchema = new Schema({
    task_id : { type: Number, unique: true },
    title: String,
    postedBy: String, //Adding only email id as it gives error if interdependent schemas
    postedOn: { type: Date, default: Date.now },
    description: String,
    images: [String],
    status: String,
    salary: Number,
    category: CategorySchema,
    appliedCandidates: [String], //Adding only email id as it gives error if interdependent schemas
    selectedCandidates: [String], //Adding only email id as it gives error if interdependent schemas
    vacancyCount: Number,
    startDate: Date,
    endDate: Date
});

TaskSchema.plugin(AutoIncrement, { id: "task_seq", inc_field: "task_id" });

module.exports = Task = mongoose.model('Task', TaskSchema); 