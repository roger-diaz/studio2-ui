(function(){tinymce.create("tinymce.plugins.AdvancedHRPlugin",{init:function(d,c){d.addCommand("mceAdvancedHr",function(){d.windowManager.open({file:c+"/rule.htm",width:250+parseInt(d.getLang("advhr.delta_width",0)),height:160+parseInt(d.getLang("advhr.delta_height",0)),inline:1},{plugin_url:c})
});
d.addButton("advhr",{title:"advhr.advhr_desc",cmd:"mceAdvancedHr"});
d.onNodeChange.add(function(b,f,a){f.setActive("advhr",a.nodeName=="HR")
});
d.onClick.add(function(b,a){a=a.target;
if(a.nodeName==="HR"){b.selection.select(a)
}})
},getInfo:function(){return{longname:"Advanced HR",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advhr",version:tinymce.majorVersion+"."+tinymce.minorVersion}
}});
tinymce.PluginManager.add("advhr",tinymce.plugins.AdvancedHRPlugin)
})();