var themeBaseURL=tinyMCEPopup.editor.baseURI.toAbsolute("themes/"+tinyMCEPopup.getParam("theme"));
function getColorPickerHTML(e,c){var a="",d=tinyMCEPopup.dom;
if(label=d.select("label[for="+c+"]")[0]){label.id=label.id||d.uniqueId()
}a+='<a role="button" aria-labelledby="'+e+'_label" id="'+e+'_link" href="javascript:;" onclick="tinyMCEPopup.pickColor(event,\''+c+'\');" onmousedown="return false;" class="pickcolor">';
a+='<span id="'+e+'" title="'+tinyMCEPopup.getLang("browse")+'">&nbsp;<span id="'+e+'_label" class="mceVoiceLabel mceIconOnly" style="display:none;">'+tinyMCEPopup.getLang("browse")+"</span></span></a>";
return a
}function updateColor(c,a){document.getElementById(c).style.backgroundColor=document.forms[0].elements[a].value
}function setBrowserDisabled(e,c){var a=document.getElementById(e);
var d=document.getElementById(e+"_link");
if(d){if(c){d.setAttribute("realhref",d.getAttribute("href"));
d.removeAttribute("href");
tinyMCEPopup.dom.addClass(a,"disabled")
}else{if(d.getAttribute("realhref")){d.setAttribute("href",d.getAttribute("realhref"))
}tinyMCEPopup.dom.removeClass(a,"disabled")
}}}function getBrowserHTML(i,f,e,h){var d=h+"_"+e+"_browser_callback",a,c;
a=tinyMCEPopup.getParam(d,tinyMCEPopup.getParam("file_browser_callback"));
if(!a){return""
}c="";
c+='<a id="'+i+'_link" href="javascript:openBrowser(\''+i+"','"+f+"', '"+e+"','"+d+'\');" onmousedown="return false;" class="browse">';
c+='<span id="'+i+'" title="'+tinyMCEPopup.getLang("browse")+'">&nbsp;</span></a>';
return c
}function openBrowser(c,f,e,d){var a=document.getElementById(c);
if(a.className!="mceButtonDisabled"){tinyMCEPopup.openBrowser(f,e,d)
}}function selectByValue(a,d,j,h,k){if(!a||!a.elements[d]){return
}if(!j){j=""
}var c=a.elements[d];
var l=false;
for(var e=0;
e<c.options.length;
e++){var f=c.options[e];
if(f.value==j||(k&&f.value.toLowerCase()==j.toLowerCase())){f.selected=true;
l=true
}else{f.selected=false
}}if(!l&&h&&j!=""){var f=new Option(j,j);
f.selected=true;
c.options[c.options.length]=f;
c.selectedIndex=c.options.length-1
}return l
}function getSelectValue(a,c){var d=a.elements[c];
if(d==null||d.options==null||d.selectedIndex===-1){return""
}return d.options[d.selectedIndex].value
}function addSelectValue(a,e,c,f){var d=a.elements[e];
var h=new Option(c,f);
d.options[d.options.length]=h
}function addClassesToList(k,h){var d=document.getElementById(k);
var e=tinyMCEPopup.getParam("theme_advanced_styles",false);
e=tinyMCEPopup.getParam(h,e);
if(e){var j=e.split(";");
for(var c=0;
c<j.length;
c++){if(j!=""){var a,f;
a=j[c].split("=")[0];
f=j[c].split("=")[1];
d.options[d.length]=new Option(a,f)
}}}else{tinymce.each(tinyMCEPopup.editor.dom.getClasses(),function(i){d.options[d.length]=new Option(i.title||i["class"],i["class"])
})
}}function isVisible(a){var c=document.getElementById(a);
return c&&c.style.display!="none"
}function convertRGBToHex(c){var d=new RegExp("rgb\\s*\\(\\s*([0-9]+).*,\\s*([0-9]+).*,\\s*([0-9]+).*\\)","gi");
var a=c.replace(d,"$1,$2,$3").split(",");
if(a.length==3){r=parseInt(a[0]).toString(16);
g=parseInt(a[1]).toString(16);
b=parseInt(a[2]).toString(16);
r=r.length==1?"0"+r:r;
g=g.length==1?"0"+g:g;
b=b.length==1?"0"+b:b;
return"#"+r+g+b
}return c
}function convertHexToRGB(a){if(a.indexOf("#")!=-1){a=a.replace(new RegExp("[^0-9A-F]","gi"),"");
r=parseInt(a.substring(0,2),16);
g=parseInt(a.substring(2,4),16);
b=parseInt(a.substring(4,6),16);
return"rgb("+r+","+g+","+b+")"
}return a
}function trimSize(a){return a.replace(/([0-9\.]+)(px|%|in|cm|mm|em|ex|pt|pc)/i,"$1$2")
}function getCSSSize(a){a=trimSize(a);
if(a==""){return""
}if(/^[0-9]+$/.test(a)){a+="px"
}else{if(!(/^[0-9\.]+(px|%|in|cm|mm|em|ex|pt|pc)$/i.test(a))){return""
}}return a
}function getStyle(e,c,a){var d=tinyMCEPopup.dom.getAttrib(e,c);
if(d!=""){return""+d
}if(typeof(a)=="undefined"){a=c
}return tinyMCEPopup.dom.getStyle(e,a)
};