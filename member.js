function skillsMember() {
    const memberSkills = {};
    
    memberSkills.addSkill = function(skill) {
        if (!this.skills) {
            this.skills = [];
        }
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
        }
    };
    
    memberSkills.displaySkills = function() {
        if (this.skills) {
            console.log("Member Skills:");
            this.skills.forEach(skill => console.log(skill));
        } else {
            console.log("No skills added yet.");
        }
    };
    
    return memberSkills;
}

const member = skillsMember();
member.addSkill("JavaScript");
member.addSkill("HTML");
member.addSkill("CSS");
member.displaySkills(); 