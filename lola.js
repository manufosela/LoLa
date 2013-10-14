/* by @manufosela - lola.js - Loading Layer - 20130702 - v1.0 */
(function(){ _$ = function(a){if(!!~a.indexOf("#")){return document.getElementById(a.substr(1));}else{return document.getElementsByTagName(a)[0];};}
var w=window.innerWidth; var h=window.innerHeight;var wW=w/2-200;var hW=h/2-150, idLa='lolaContainer';
var addMyEvent=function(el,ev,fn){if( el.addEventListener ){el.addEventListener(ev,fn,false);}else if(el.attachEvent){el.attachEvent('on'+ev,fn);}else{el['on'+ev]=fn;}};_$("body").innerHTML='<div id="'+idLa+'"><div id="lola" style="position:fixed;width:340px;height:120px;display:none;z-index:9999;padding:20px;overflow:auto;border-radius:10px;width:540px;height:303px;background:#FFF;"><div style="font-size:18px;position:relative;top:70px;text-align:center;margin:0 auto;"><h3>Cargando...</h3><br /><img alt="espere por favor..." src="data:image/gif;base64,R0lGODlhNAA0AMQAAP9mAf+TS/X19eXl5dra2tXV1f+we/+DMP/o2f///8zMzPf3983Nzf7+/vj4+O/v79DQ0N3d3ebm5v39/dbW1vr6+v/48//Qsf/v5P9xEv+1hP9/Kv/9/P/fyQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEFAAAACwAAAAANAA0AAAF/2AijmRpnmiqruk0UNHCzjRKKDhU1Twt4EBJb+iCyUg/oGJQKsaGp1tuN2oUgIzjSKrQQZFKhZDkIDAKj1Iy+B2tcUxfON62YrUsOy7bHpXPaTx/aH2FhoeICRYGBwEIiSZOeCUBAJYZGJAkXF4mHZagGpoib2Inn6AABqMJpXQkHBupj6N6CnwnCJUHF6wig4G+wsPExcbHX5LHyltAncScVKVjw9Okc8WuIra4w9xawMfhyOTl5ufoPMys6ybRvu8m1qPzatj09yXfrPsn46z/0glM1G5GwS/xaCT8Uo9FQyjaSBSMWOfKnkkL+/UJ2CoMtV9mCFXLZ07jOY4DDQKFAAAh+QQEFAAAACwAAAwACgARAAAFQmAiJtNARcsoEkoLVaPQzlI8t8PYFDOTjg4Co/BQGY/IpHKpshgOAYSKEwBYM5hRx8rViBpbLsAw4mzE0hGieriMQgAh+QQEFAAAACwAABcACgARAAAFQGCSTAMVLWJKKCxUpQIrS7DMDmlTyAyaOgRG4ZEqGo/IpHJptBgOAYQxAKhmMKlOdavJbquGFGfzlaYQ1MMlEQIAIfkEBBQAAAAsAwAiAA8ADgAABUJgMg1UtCRoqhJKC1WqKrS0FKczrQw32hQ0xqmXcBAYhQdxyWwyLYZDAMEMAK4ZDLFz7Wq23auByNmEqUSE9XBJhAAAIfkEBBQAAAAsCwAqABIACQAABUJgMg1UtCRoqqaE4kLVKgtuLckrXSvDahmHACLRKNQYpxQnAGhmMAkHgVF4rDrNrAaXamCzAANXuQEPxygE83BJhAAAIfkEBBQAAAAsFQAqABMACQAABUBgIo7kaBlHgJTsGABwhrVlB9+aOA1UtNQ3mEFEUBghFRJnE1wJjFBJCfE6XERPqGJAIzUKUMavO3IQGIUHWRQCACH5BAQUAAAALCEAIgAPAA4AAAVBYCKOo2UcAUKuSQC8GcaK3Wtrc1LbgJFzG54qh3AdLrmkcjUZUCILJUFBhVRyAqpWgtVSB7lGQcuI5hwERuGRDAEAIfkEBBQAAAAsKQAXAAoAEQAABUJgIiaWcQTImHAB4GbY2Lm0JjYzDRgjt+mpEaJ1uKiOyKRyyRxNBpTI4khQWCGVkcDKlWi51sGoUeAypiMHgVF4qEIAIfkEBBQAAAAsKQAMAAoAEQAABUBgYhlHgCQoGgBshqUdK2uwzBopt9lniqyHS2pILBqPyGRxMqBEFkSCYgqppATTrOSanQ5SjUKWAU05CIzCIxECACH5BAQUAAAALCEABAAPAA4AAAVCYGIZR4AkaKoGQJthqtq1tBanMw0YN8ptulMvgWAdLsOkcqmcDCiRhZKgqEIqQ0F1K8luq4Nho7BlSIcOAqPwSIQAACH5BAQUAAAALBUAAQATAAkAAAVDYJJYxhEgYqqqXAC8GbbOSffeGq029g0Yq8mAElmIOBsfSkVQOCEVEcJ1uKwEzqxEp8JmFQNuqlHIMoxikYPAKDwSIQAh+QQEFAAAACwLAAEAEgAJAAAFQWAijqQ4DVS0lKxIKDBUtaQA31JiGUeAlLabYpAIAI4ZDKlRuDEWnaNUU3IQGIVHIioFGGgjzqb7A4sQxsPFLAoBADs=" /></div></div><div id="lolak" style="position:absolute;top:0;left:0;z-index:9000;background-color:rgba(20,20,20,0.6);display:none;"></div></div>';_$("#lola").style.width = "400px";_$("#lola").style.height = "300px";_$("#lola").style.left = wW+"px";_$("#lola").style.top = hW+"px";_$("#lolak").style.width = w+"px";_$("#lolak").style.height = (h+600)+"px";_$("#lolak").style.display = "block";_$("#lola").style.display = "block";
var ready=function(){function i(){if(r.isReady){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(i,1);return}r.ready()}function s(t){r.bindReady();var n=r.type(t);e.done(t)}var e,t,n={};n["[object Boolean]"]="boolean";n["[object Number]"]="number";n["[object String]"]="string";n["[object Function]"]="function";n["[object Array]"]="array";n["[object Date]"]="date";n["[object RegExp]"]="regexp";n["[object Object]"]="object";var r={isReady:false,readyWait:1,holdReady:function(e){if(e){r.readyWait++}else{r.ready(true)}},ready:function(t){if(t===true&&!--r.readyWait||t!==true&&!r.isReady){if(!document.body){return setTimeout(r.ready,1)}r.isReady=true;if(t!==true&&--r.readyWait>0){return}e.resolveWith(document,[r])}},bindReady:function(){if(e){return}e=r._Deferred();if(document.readyState==="complete"){return setTimeout(r.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false);window.addEventListener("load",r.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",t);window.attachEvent("onload",r.ready);var n=false;try{n=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&n){i()}}},_Deferred:function(){var e=[],t,n,i,s={done:function(){if(!i){var n=arguments,o,u,a,f,l;if(t){l=t;t=0}for(o=0,u=n.length;o<u;o++){a=n[o];f=r.type(a);if(f==="array"){s.done.apply(s,a)}else if(f==="function"){e.push(a)}}if(l){s.resolveWith(l[0],l[1])}}return this},resolveWith:function(r,s){if(!i&&!t&&!n){s=s||[];n=1;try{while(e[0]){e.shift().apply(r,s)}}finally{t=[r,s];n=0}}return this},resolve:function(){s.resolveWith(this,arguments);return this},isResolved:function(){return!!(n||t)},cancel:function(){i=1;e=[];return this}};return s},type:function(e){return e==null?String(e):n[Object.prototype.toString.call(e)]||"object"}};if(document.addEventListener){t=function(){document.removeEventListener("DOMContentLoaded",t,false);r.ready()}}else if(document.attachEvent){t=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",t);r.ready()}}}return s}();ready( function(){ $( "#lola" ).hide(); $( "#lolak" ).hide(); });})();