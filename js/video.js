var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play");
	document.getElementById("volume").innerHTML=video.volume *100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
  	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.1;
  	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let vid = document.getElementById("myVideo");
	if (vid.currentTime <= vid.duration-5){
		vid.currentTime = vid.currentTime + 5;
	}else{
	 	vid.currentTime = 0;
	}
  	console.log("Current location: " + vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted){
    	video.muted = 0;
    	document.getElementById('mute').innerHTML="Mute";
    	console.log("Unmuted");
    }else{
    	video.muted = 1;
    	document.getElementById('mute').innerHTML="Unmute";
    	console.log("Muted");
    }
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	document.getElementById("volume").innerHTML = volume*100 + "%";
	console.log("Volume: " + volume);
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").classList.add('oldTime')
	console.log("Old");
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").classList.remove('oldTime')
	console.log("original");
});