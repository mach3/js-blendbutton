
/*!
 * BlendButton.js
 * Developed under the MIT license.
 * @version 0.9
 * @author mach3
 */
(function($, undefined){
	$.fn.extend({
		/**
		 * jQuery.fn.blendButton();
		 * @param Object option configuration 
		 * @return itself
		 */
		blendButton : function(option){
			var my = {};
			my.option = $.extend({
				inDuration : 150,
				outDuration : 500,
				fadeTo : 1,
				fadeFrom : 0,
				hoverPostfix : "-hover",
				ignoreClass : "active"
			}, option);
			my.msie = /msie/.test(navigator.userAgent.toLowerCase());
			my.setAlphaImage = function(){
				var url = (function(s){
					var m = s.match(/^url\("?(.+?)"?\)/);
					return m ? m[1] : "";
				})(this.css("background-image"));
				this.css({
					"background-image" : "none",
					"filter" : "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='{{src}}'');"
						.replace("{{src}}", url),
					"opacity" : 0
				});
			};
			my.onMouse = function(e){
				var enter, ele, duration, opacity;
				ele = $(this);
				if(! ele.hasClass(ele.data("ignoreClass"))){
					enter = e.type == "mouseenter";
					duration = (enter) ? ele.data("inDuration") : ele.data("outDuration");
					opacity = (enter) ? ele.data("fadeTo") : ele.data("fadeFrom");
					ele.data("hover").stop().fadeTo(duration, opacity);
				}
			};
			// Initialize
			this.each(function(){
				var ele, span, ext;
				ele = $(this);
				$.each(my.option, function(key, value){
					ele.data(key, value);
				});
				// Get extension
				ext = (function(){
					var m = ele.css("background-image").toLowerCase().match(/\.(png|jpg|gif)["\)]/);
					return m ? m[1] : null;
				}());
				// Element for hover
				span = $("<span>")
					.css({
						"dispaly" : "block",
						"width" : ele.width(),
						"height" : ele.height(),
						"float" : "left",
						"backgroundImage" : ele.css("background-image")
							.replace(/\.(png|jpg|gif)/, my.option.hoverPostfix + ".$1"),
						"opacity" : 0
					});
				// Set alphaImageLoader for IE
				if( my.msie && ext == "png" ){
					my.setAlphaImage.call(span);
				}
				ele.prepend(span)
					.data("hover", span)
					.hover(my.onMouse, my.onMouse);
			});
			return this;
		}
	});
}(jQuery));