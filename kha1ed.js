
var message=""; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false") 
// --> 
</script> 
<script language="JavaScript1.2"> 
function disabletextselect(i){ 
return false 
} 
function renabletextselect(){ 
return true 
} 
//if IE4+ 
document.onselectstart=new Function ("return false") 
//if NS6+ 
if (window.sidebar){ 
document.onmousedown=disabletextselect 
document.onclick=renabletextselect 
} 
shortcut={all_shortcuts:{},add:function(e,t,n){var r={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(n)for(var i in r)"undefined"==typeof n[i]&&(n[i]=r[i]);else n=r;r=n.target,"string"==typeof n.target&&(r=document.getElementById(n.target)),e=e.toLowerCase(),i=function(r){r=r||window.event;if(n.disable_in_input){var i;r.target?i=r.target:r.srcElement&&(i=r.srcElement),3==i.nodeType&&(i=i.parentNode);if("INPUT"==i.tagName||"TEXTAREA"==i.tagName)return}r.keyCode?code=r.keyCode:r.which&&(code=r.which),i=String.fromCharCode(code).toLowerCase(),188==code&&(i=","),190==code&&(i=".");var s=e.split("+"),o=0,u={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},f={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},l=!1,c=!1,h=!1,p=!1,d=!1,v=!1,m=!1,y=!1;r.ctrlKey&&(p=!0),r.shiftKey&&(c=!0),r.altKey&&(v=!0),r.metaKey&&(y=!0);for(var b=0;k=s[b],b<s.length;b++)"ctrl"==k||"control"==k?(o++,h=!0):"shift"==k?(o++,l=!0):"alt"==k?(o++,d=!0):"meta"==k?(o++,m=!0):1<k.length?f[k]==code&&o++:n.keycode?n.keycode==code&&o++:i==k?o++:u[i]&&r.shiftKey&&(i=u[i],i==k&&o++);if(o==s.length&&p==h&&c==l&&v==d&&y==m&&(t(r),!n.propagate))return r.cancelBubble=!0,r.returnValue=!1,r.stopPropagation&&(r.stopPropagation(),r.preventDefault()),!1},this.all_shortcuts[e]={callback:i,target:r,event:n.type},r.addEventListener?r.addEventListener(n.type,i,!1):r.attachEvent?r.attachEvent("on"+n.type,i):r["on"+n.type]=i},remove:function(e){var e=e.toLowerCase(),t=this.all_shortcuts[e];delete this.all_shortcuts[e];if(t){var e=t.event,n=t.target,t=t.callback;n.detachEvent?n.detachEvent("on"+e,t):n.removeEventListener?n.removeEventListener(e,t,!1):n["on"+e]=!1}}},shortcut.add("F11",function(){top.location.href="view-source:localhost"})
if(VentungAeM=='BLOCK'){var VentungAeMx='rgba(69, 107, 142, 0.8)'}else{{var VentungAeMx='rgba(69, 107, 142, 0.8)'}}function VentungAeMfunction(){var VentungAeMv2=document.getElementById('VentungAeMxdiv');if(VentungAeMv2.style.display=="block"){VentungAeMv2.style.display="none"}else{VentungAeMv2.style.display="block"}}function VentungAeMva(){VentungAeMfunction();return false}document.oncontextmenu=VentungAeMva;var VentungAeMdiv=document.write('<style type="text/css">#VentungAeMxdiv{background:'+VentungAeMx+';text-align:center;width:100%;height:100%;position:fixed;top:0px;left:0px;bottom:0px;right:0px;border:0px;z-index:1000000;display:none;padding:auto;}#VentungAeMxdiv span{position:fixed;bottom:0px;left:10%;right:10%;cursor:pointer;font-size:20px;}</style><div id="VentungAeMxdiv" class="serverpusatpointer" onclick="VentungAeMfunction();" title="ممنوع نسخ المواضيع  :) ، اضغط لأظهار الصفحة"><center><span><a href="" target="_blank"></a></span></center></div>');document.getElementsByTagName('body')[0].appendChild(VentungAeMdiv);
