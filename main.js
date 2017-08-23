var question;
var progress;

var cur_quest = 0;
var num_quest = 5;

window.onload = function(){
	question = document.getElementById("question");
	progress = document.getElementById("progress");
	update();
}

function update(){
	progress.innerHTML = "Question " + (cur_quest + 1).toString() + "/" + num_quest.toString();
}

function next(){
	cur_quest++;
	if (cur_quest >= num_quest){
		cur_quest = 0;
	}
	update();
}

function prev(){
	cur_quest--;
	if (cur_quest < 0){
		cur_quest = num_quest-1;
	}
	update();
}