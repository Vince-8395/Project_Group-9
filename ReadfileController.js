const mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Lesson Plan

const lessonSchema = require ("../Models/LessonPlan.json");

// read lesson plan

router.get ("/", (req, res) => {
  lessonSchema.find((error, data) => {
    if (error) {
      return next(error);  
    } else {
        res.json(data);
    }
    });
});


module.exports = router;

GetHeader()
{
    var html = System.IO.File.ReadAllText();

    return Json(new { html = html }, JsonRequestBehavior.AllowGet);
}