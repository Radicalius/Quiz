var question;
var progress;
var qa;
var qb;
var qc;
var qd;
var qe;
var footer;

var cur_quest = 0;
var num_quest = 0;
var quiz = "quizzes/elements.quiz"
var data = [];

var correct = 0;
var attempted = 0;

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
	footer = document.getElementById("footer");
	var text = httpGet(quiz);
	var qs = text.split("---\n");
	num_quest = qs.length;
	for (i = 0; i < num_quest; i++){
		var ds = qs[i].split("\n");
		ds.push(0);
		data.push(ds);
	}
	update();
}

function update(){
	progress.innerHTML = "Question: " + (cur_quest + 1).toString() + "/" + num_quest.toString() + "; Score: " + correct.toString() + "/" + attempted.toString();
	question.innerHTML = data[cur_quest][0];
	qa.innerHTML = data[cur_quest][1];
	qb.innerHTML = data[cur_quest][2];
	qc.innerHTML = data[cur_quest][3];
	qd.innerHTML = data[cur_quest][4];
	qe.innerHTML = data[cur_quest][5];
	footer.innerHTML = "";
}

function answer(){
	var html;
	var answer = document.querySelector('input[name="answer"]:checked').value;
	if (answer == data[cur_quest][6]){
		html = "<font color=#00FF00> Correct! </font>";
		if (data[cur_quest][7] == 0){
			correct++;
		}
	}else{
		html = "<font color=#FF0000> Incorrect </font>";
	}
	if (data[cur_quest][7] == 0){
		attempted++;
		data[cur_quest][7] = 1;
	}
	update();
	footer.innerHTML = html;
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