const { memberService } = require("../services");

const getMembers = async (req, res) => {
  try {
    res.status(200).json(await memberService.getMembers());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMember = async (req, res) => {
  try {
    res.status(201).json(await memberService.createMember(req.body));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMemeber = async (req, res) => {
  try {
    const member = await memberService.updateMemeber(req.params.id, req.body);
    if (!member) {
      res.status(404).json({ message: "Member not found." });
    }
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMember = async (req, res) => {
  try {
    const member = await memberService.deleteMember(req.params.id);
    if (!member) {
      res.status(404).json({ message: "Member not found." });
    }
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMembers,
  createMember,
  updateMemeber,
  deleteMember,
};
