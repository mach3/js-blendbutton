BlendButton.js
==============

jQuery plugin to add blend effect for buttons.

## Features

- Add blend effect on mouseover, mouseout events of buttons
- For buttons by block elements with text indented
- Use AlphaImageLoader as fallback for opacity on IE

## Requires

- jQuery 1.7+

## Usage

### HTML

	<a href="#" class="my-button">My Button</a>

### CSS

	.my-button {
		display:block;
		width:64px;
		height:64px;
		background:url(myimage.png) 0 0 no-repeat transparent;
		text-indent:100%;
		overflow:hidden;
	}

### JavaScript

	var myOption = {
		inDuration : 100,
		outDuration : 500
	};
	$(".my-button").fadeButton(myOption);


## Options

### (number) inDuration

Duration for animation on mouseenter.  
Default : 150

### (number) outDuration

Duration for animation on mouseout.  
Default : 500

### (number) fadeTo

Opacity ( 0 to 1 ) on hover.  
Default : 1 

### (number) fadeFrom

Opacity ( 0 to 1 ) on default.  
Default : 0

### (string) hoverPostfix

Postfix for image file name on hover.  
If the default image name is "foo.png", and hoverPostfix is "-hover",  
this tries to load "foo-hover.png".  
Default : "-hover"

### (string) ignoreClass

Class name to ignore effect.  
Default : "active"
