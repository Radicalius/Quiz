var question;
var progress;
var qa;
var qb;
var qc;
var qd;
var qe;

var cur_quest = 0;
var num_quest = 0;
var quiz = "quizzes/elements.quiz"
var data = [];

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

window.onload = function(){
	question = document.getElementById("question");
	progress = document.getElementById("progress");
	qa = document.getElementById("QA");
	qb = document.getElementById("QB");
	qc = document.getElementById("QC");
	qd = document.getElementById("QD");
	qe = document.getElementById("QE");
	var text = httpGet(quiz);
	var qs = text.split("---\n");
	num_quest = qs.length;
	for (i = 0; i < num_quest; i++){
		var ds = qs[i].split("\n");
		data.push(ds);
	}
	update();
}

function update(){
	progress.innerHTML = "Question " + (cur_quest + 1).toString() + "/" + num_quest.toString();
	question.innerHTML = data[cur_quest][0];
	qa.innerHTML = data[cur_quest][1];
	qb.innerHTML = data[cur_quest][2];
	qc.innerHTML = data[cur_quest][3];
	qd.innerHTML = data[cur_quest][4];
	qe.innerHTML = data[cur_quest][5];
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