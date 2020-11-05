
var button = $(".aWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",aWords);
function aWords(){
message.text(`ABOUT YOUR FEELING: Of all the different types of emotions, happiness tends to be the one that people strive for the most. Happiness is often defined as a pleasant emotional state that is characterized by feelings of contentment, joy, gratification, satisfaction, and well-being. `);
messageTwo.text(`COPING MECHANISMS: Keep doing what you are doing that is making you happy!!`);
}


var button = $(".bWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo")
button.on("click",bWords);
function bWords(){
message.text(`ABOUT YOUR FEELING: Of all the different types of emotions, happiness tends to be the one that people strive for the most. Happiness is often defined as a pleasant emotional state that is characterized by feelings of contentment, joy, gratification, satisfaction, and well-being. `);
messageTwo.text(`COPING MECHANISMS: Keep doing what you are doing that is making you happy!!`);
}


var button = $(".cWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo")
button.on("click",cWords);
function cWords(){
message.text(`ABOUT YOUR FEELING: Sometimes it feels like society says you should be always happy, and that showing your sadness is a sign of weakness. This is far from true – if you were to hold in all your sadness or anger you would explode. We all have good and bad days. No one can be perfectly happy all of the time, that is not human.`);
messageTwo.text(`COPING MECHANISMS: Try being social, other activities can include: journaling, coloring, playing a sport, going for a run, doing yoga, taking deep breaths, etc., let yourself feel - you will feel better afterwards.`);
}


var button = $(".dWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",dWords);
function dWords(){
message.text(`ABOUT YOUR FEELING: Fear is a powerful emotion that can also play an important role in survival. When you face some sort of danger and experience fear or stress, you go through what is known as the fight or flight response. There are many factors in our lives that can cause stress. Things like deadlines, financial troubles, congested traffic, and arguments can cause stress. Stress is a natural reaction, as the body tries to deal with any negative pressures placed on it.`);
messageTwo.text(`COPING MECHANISMS:  Exercise, do yoga, go for a walk, write down your thoughts and feelings, take a bath, meditate, ask for support`);
}


var button = $(".eWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",eWords);
function eWords(){
message.text(`ABOUT YOUR FEELING: Sadness is something that all people experience from time to time. Feeling sad can lead to crying, dampened mood, quietness, and withdrawal from others. We all have good and bad days. No one can be perfectly happy all of the time, so don't worry about!`)
messageTwo.text(`
COPING MECHANISMS: Write down your feelings, journal for 20 minutes a day, try laughing and smiling more, cry it out, try to look at the bigger picture, distract your mind by listening to music, exercising, hanging with friends, reading, or watching TV`);
}


var button = $(".fWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",fWords);
function fWords(){
message.text(`ABOUT YOUR FEELING: Anger can be a particularly powerful emotion characterized by feelings of hostility, agitation, frustration, and antagonism towards others. Anger is often displayed through: facial expressions, body language, tone of voice, and aggressive behaviors.`)
messageTwo.text(`
COPING MECHANISMS: Take deep breaths, tell yourself it will be okay, try to visualize a happy place, mindfully move your body, express your anger in a healthy way, recognize triggers and find alternatives, focus on what you appreciate`);
}


var button = $(".gWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",gWords);
function gWords(){
message.text(`ABOUT YOUR FEELING: Sadness is something that all people experience from time to time. Feeling sad can lead to crying, dampened mood, quietness, and withdrawal from others. We all have good and bad days. No one can be perfectly happy all of the time, so don't worry about!`)
messageTwo.text(`
COPING MECHANISMS: CRY IT OUT!!!!, Write down your feelings, journal for 20 minutes a day, try laughing and smiling more, try to look at the bigger picture, distract your mind by listening to music, exercising, hanging with friends, reading, or watching TV
`);
}


var button = $(".hWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",hWords);
function hWords(){
message.text(`ABOUT YOUR FEELING:  Sometimes it feels like society says you should always be happy, and that showing your sadness is a sign of weakness. This is far from true – if you were to hold in all your sadness or anger you would explode. We all have good and bad days. No one can be perfectly happy all of the time, that is not human.`)
messageTwo.text(`
COPING MECHANISMS: Try being social, other activities can include: journaling, coloring, playing a sport, going for a run, doing yoga, taking deep breaths, etc., let yourself feel your emotion - you will feel better afterwards`);
}


var button = $(".iWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",iWords);
function iWords(){
message.text(`ABOUT YOUR FEELING: No matter what we do, life will be challenging at times. It will hand us lemons. And making lemonade might not always be the best choice. Feeling defeated is normal and healthy. We just need to get right back up tomorrow!`)
messageTwo.text(`
COPING MECHANISMS: Get out of the house, move your body, set intentions for each day, practice joy and gratitude, accept responsibility for your feelings, exercise your mind by reading, writing, journaling, set goals for yourself`);
}


var button = $(".jWords");
var message = $(".copingSkills");
var messageTwo = $(".copingSkillsTwo");
button.on("click",jWords);
function jWords(){
message.text(`ABOUT YOUR FEELING:
Anger can be a particularly powerful emotion characterized by feelings of hostility, agitation, frustration, and antagonism towards others. Like fear, anger can play a part in your body's fight or flight response.`)
messageTwo.text(`
COPING MECHANISMS: Take deep breaths, tell yourself it will be okay, try to visualize a happy place, mindfully move your body, express your anger in a healthy way, recognize triggers and find alternatives, focus on what you appreciate`);
}

var button = $(".kWords");
var message = $(".copingSkills");
button.on("click",kWords);
function kWords(){
message.text(`If you need immediate help please call 911, or one of these hotlines: SAMHSA’s National Helpline – 1-800-662-HELP (4357), National Suicide Prevention Lifeline -  1-800-273-TALK (8255)`);
}

var button = $(".kWords");
var message = $(".copingSkills")
button.on("dblclick", noWords)
function noWords(){
message.text(' ')
}

var changeForContrast = $(".accessibility")
var container = $("body");
changeForContrast.on("click", changeBackgroundColor)
function changeBackgroundColor(){
  container.css("backgroundColor", "black")
};

var changeForTextColor = $(".accessibility")
var containerTwo = $("h2");
changeForContrast.on("click", changeTextColor)
function changeTextColor(){
  container.css("color", "white")
};