// This is the controller file for Books
const express = require('express')
const courseRouter = express.Router()
const courseData = require("../models/seed")
const Course = require('../models/course.js')

// I N D U C E S - Index New Delete Update Create Edit Show
// Seed
courseRouter.get("/seed", (req, res) => {
    Course.deleteMany({}, (error, allCourses) => {})
    Course.create(courseData, (error, data) => {
      res.redirect("/courses");
    });
  })
  
  // INDEX
  courseRouter.get("/", (req, res) => {
    Course.find({}, (error, allCourses) => {
      res.render("index.ejs", { courses: allCourses })
    })
  })
  
  // NEW
  courseRouter.get("/new", (req, res) => {
    res.render("new.ejs")
  })
  
  // DELETE
  courseRouter.delete("/:id", (req, res) => {
    Course.findByIdAndRemove(req.params.id, (err, deletedCourse) => {
      res.redirect("/courses")
    })
  })
// UPDATE
courseRouter.put("/:id", (req, res) => {

    Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, course) => {
      // redirect user to showpage
      res.redirect(`/courses/${req.params.id}`);
    })
  })
  
  // CREATE
  courseRouter.post("/", (req, res) => {
    console.log(req.body)
    Course.create(req.body,(error, createdCourse) => {
      res.redirect("/courses")
    })
  })
  
  // EDIT
  courseRouter.get("/:id/edit", (req, res) => {
    Course.findById(req.params.id, (err, foundCourse) => {
      res.render("edit.ejs", { course: foundCourse })
    })
  })
// SHOW
courseRouter.get("/:id", (req, res) => {
    Course.findById(req.params.id, (err, foundCourse) => {
      res.render("show.ejs", { course: foundCourse })
    })
  })
//export course router
  module.exports = courseRouter