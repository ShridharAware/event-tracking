const { memberController } = require("../controllers");

const express = require("express");

const router = express.Router();

router.get("/", memberController.getMembers);
router.post("/", memberController.createMember);
router.put("/:id", memberController.updateMemeber);
router.delete("/:id", memberController.deleteMember);

module.exports = router;
