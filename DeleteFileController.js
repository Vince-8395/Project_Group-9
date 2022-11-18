
const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Lesson Plan

const lessonSchema = require ("../Models/LessonPlan.json");

// Delete file

router.delete("/delete-file/:id",
(req, res, next) => {
  lessonSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
     return next(error);
    } else {
      res.status(200).json({
        msg: data,
      }); 
    }
  });
});

module.exports = router;

[HttpPost]
{

    ViewBag.deleteSuccess = "false";
    
    var fullPath = Server.MapPath();

        if (File.Exists(fullPath))
        {
            File.Delete(fullPath);
            ViewBag.deleteSuccess = "true";
        }
}

