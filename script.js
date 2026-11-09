const videoFiles={
  ai:["275e6d534c24a25c4e37e241ff482fcb.mp4","2e9778032fbb83c030104c01ed5165df.mp4","5082b2843ad1c0f4741a800ccc055b2c.mp4","86e3227985eafe00902091cac49fe096.mp4","8917c6b6bdf0bed3ec0bf15e8b24e011.mp4","9364696868188340a0d22f834f084c05.mp4","a52f371b7c20b0708ad22f3aa49e0806.mp4","a9b02420c89a46821cc4a7fe4f102e07.mp4","d729e7f6d87b0d99db074d097630bb89.mp4","ed569efd5d765ae4bbb14cc742046f96.mp4","f52bad6e4241b2686094ce3a6ef814e1.mp4"],
  localization:["1bb6e7433b75a150905d31d45ef32c52.mp4","2f16f3e859ac0cf90cf0409bdc1def8f.mp4","65ec80b9512b1b9c69d5086612c55e6a.mp4","7bebbdaf081f1b352f53a0e88f4e919b.mp4","be4a09d7bddcb49aced28a3ac4d2bdc3.mp4"]
};
const labels={ai:"AI VIDEO",localization:"LOCALIZED EDIT"};
const localizationLanguages=["UK English","Danish","Swedish","German","Dutch"];

function renderVideos(category,grid){
  videoFiles[category].forEach((file,index)=>{
    const figure=document.createElement("figure");figure.className="video-card";
    const frame=document.createElement("div");frame.className="video-frame";
    const label=document.createElement("span");label.className="video-overline";label.textContent=labels[category];
    const video=document.createElement("video");video.src=`/${category==="ai"?"ai":"localization"}/${file}`;video.controls=true;video.preload="metadata";video.playsInline=true;video.setAttribute("aria-label",`${labels[category]} portfolio sample ${index+1}`);
    frame.append(label,video);
    const caption=document.createElement("figcaption");caption.className="video-caption";
    const title=document.createElement("span");title.textContent=category==="localization"?localizationLanguages[index]:`AI UGC — ${String(index+1).padStart(2,"0")}`;
    const count=document.createElement("span");count.textContent=`${String(index+1).padStart(2,"0")} / ${String(videoFiles[category].length).padStart(2,"0")}`;
    caption.append(title,count);figure.append(frame,caption);grid.append(figure);
  });
}

renderVideos("ai",document.querySelector("#ai-video-grid"));
renderVideos("localization",document.querySelector("#localization-video-grid"));
