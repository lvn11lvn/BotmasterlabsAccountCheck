var contests={csss:".fade-c",hover:false,fadeTo:false,fadingT:null,fadingDelay:100/*..700*/};
var review={csss:".fade-r",hover:false,fadeTo:false,fadingT:null,fadingDelay:50/*..700*/};

$(function() {
	$(".fade").css("opacity", "1");
	$(".fade").hover(function () {
		$(this).stop().fadeTo(300, 0);
	},
	function () {
		$(this).stop().fadeTo(300, 1);
	});
	
	$(contests.csss).css("opacity", "1");
	$(contests.csss).hover(function () {
		contests.hover=true;
		$(this).stop().fadeTo(300, 0);
	},
	function () {
		contests.hover=false;
		$(this).stop().fadeTo(300, 1);
	});

	$(review.csss).css("opacity", "1");
	$(review.csss).hover(function () {
		review.hover=true;
		$(this).stop().fadeTo(75, 1);
	},
	function () {
		review.hover=false;
		$(this).stop().fadeTo(75, 0.5).fadeTo(75, 1).fadeTo(75, 0.5).fadeTo(175, 1);
	});

	$(".contvid b").css("opacity", "0");
	$(".contvid b").hover(function () {
		$(this).stop().fadeTo(300, 1);
	},
	function () {
		$(this).stop().fadeTo(300, 0);
	});
	
	$(".fade1").css("opacity", "1");
	$(".fade1").hover(function () {
		$(this).stop().fadeTo(250, 0.65);
	},
	function () {
		$(this).stop().fadeTo(250, 1);
	});

	if(contestsActive&&(-1===(""+document.location).indexOf('contest')))setTimeout("contestsFading()",1000);
	if($(".fade-r").length){setTimeout("reviewFading()",1000)};
});

function contestsFading(){
var delay=contests.fadingDelay*1.3;
if(!contests.hover)
	{
	//contests.fadingT=setTimeout('if(!contests.hover)$(".fade-c").fadeTo('+contests.fadingDelay+', '+(contests.fadeTo?1:0)+');', delay);
	$(contests.csss).fadeTo(contests.fadingDelay,contests.fadeTo?1:0);
	contests.fadeTo=!contests.fadeTo;
	if(contests.fadingDelay<700)contests.fadingDelay+=30;
	}
else
	{
	//clearTimeout(contests.fadingT);
	//contests.fadingT=null;
	};
setTimeout("contestsFading()",delay);
}


function reviewFading(){
var delay=review.fadingDelay;
if(!review.hover)
	{
	delay=(delay<75)?75:delay;
	$(review.csss).fadeTo(delay,review.fadeTo?1:0.2);
	review.fadeTo=!review.fadeTo;
	if(review.fadingDelay<700)review.fadingDelay*=1.1;
	}
else
	{
	};
setTimeout("reviewFading()",delay*1.3);
}




(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);

// Top Menu Arrow
$(function(){
	$('.hnav li em')
		.css( {backgroundPosition: "50% 34px"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(50% 25px)"}, {duration:180})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(50% 34px)"}, {duration:180})
		})
});

// Tabs
(function($) {
$(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
//		$(this).addClass('current').siblings().removeClass('current')
//			.parents('div.section').find('section.box').hide().eq($(this).index()).fadeIn(300);
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('section.box').hide().removeClass('visible')
				.eq($(this).index()).addClass('visible').fadeIn(300);
	})
})
})(jQuery);


// Наверх страницы
$(document).ready(function(){
		var fas;
		if(fas=document.getElementById('pformautosubmit')){fas.click();};
	    $(function () { 
	        $(window).scroll(function () { 
	            if ($(this).scrollTop() > 100) { 
	                $('#up').fadeIn(); 
	            } 
	        }); 
	        $('#up').click(function () { 
	            $('body,html').animate({ 
	                scrollTop: 0 
	            }, 700); 
	            return false; 
	        }); 
	    }); 
		eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2(d){6(d.3[0]){5 f=d.3[0];f.9=2(){5 e=d.a("c"),b=f.g("[7=h]");e.7="i";e.j="8";e.l=(r n()).o();f.p(e);6(b){b.4=!0;q(2(){b.4=!1},m)}}}})(k)',28,28,'||function|forms|disabled|var|if|type|time|onsubmit|createElement||input||||querySelector|submit|hidden|name|document|value|500|Date|getTime|appendChild|setTimeout|new'.split('|'),0,{}))
});


// Обработка состояния чекбокса
function doCheckbox(elem) {
  // Чекбокс должен быть внутри DIV'а и иметь стиль 'boxCheckbox'
  if (elem.className=='boxCheckbox' && elem.parentNode.tagName.toLowerCase()=='div') {
    elem.parentNode.className='box'+(elem.checked?'Checked':'Unchecked');
  }
}
// Корректировка стилей под разные браузеры
var css=document.styleSheets[0];
try {
  css.addRule('.boxCheckbox', 'filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);');
}
catch(e) {
  css.insertRule('.boxCheckbox { -moz-opacity: 0; -khtml-opacity: 0; }', css.cssRules.length);
}


//Чернобелые картинки
// On window load. This waits until images have loaded which is essential
$(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".item img").fadeIn(300);

        // clone image
        $('.item img').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.item img').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 300);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 300);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
	
var trans={
	ru:{
		l:"Логин",
		p:"Пароль",
		eConnection:"Сервер недоступен",
		eServer:"Ошибка, код ",
		eLPass:"Неверный логин и/или пароль",
		eL:"Пользователь не найден",
		eR:"Пожалуйста, обновите страницу",
		eNo:"Пожалуйста, укажите ",
		eNoName:"Вы не указали своё Имя.",
		eNoEmail:"Не указан E-mail.",
		eNoMessage:"Не заполнено поле для сообщения.",
		eNoChgMessage:"Пожалуйста, укажите желаемый метод оплаты.",
		x:0},
	en:{
		l:"Login",
		p:"Password",
		eConnection:"Server unavailable",
		eServer:"Error, code ",
		eLPass:"Invalid login and / or password",
		eL:"User not found",
		eR:"Please refresh the page",
		eNo:"Please enter your ",
		eNoName:"Please enter your name.",
		eNoEmail:"Please enter your E-mail.",
		eNoMessage:"Please enter the message.",
		eNoChgMessage:"Please select the desired method of payment.",
		x:0},
	cn:{
		l:"用户名",
		p:"密码",
		eConnection:"服务器不可用",
		eServer:"错误，代码",
		eLPass:"用户名和/或密码无效",
		eL:"找不到用户",
		eR:"请刷新页面",
		eNo:"请您输入",
		eNoName:"请您输入用户名。",
		eNoEmail:"请您输入邮箱。",
		eNoMessage:"请您输入留言内容。",
		eNoChgMessage:"请根据具体情况选择最合适的付款方式。",
		x:0},
	x:0};

function checkQForm(name,no,oldmess,ifSuccess)
{
var formErrors=[],i=0,tr=trans[lang];
with(document[name])
	{
	if((username.value.length<2)||(no[0]===username.value))
		{
		formErrors[i++]=tr.eNoName;
		};
	if((contact.value.length<5)||(no[1]===contact.value))
		{
		formErrors[i++]=tr.eNoEmail;
		};
	if(message.value.length<5)
		{
		formErrors[i++]=tr.eNoMessage;
		}
	else
		{
		if((!!oldmess)&&(message.value==oldmess))
			{
			formErrors[i++]=tr.eNoChgMessage;
			};
		};
	};
if(formErrors.length>0)
	{
	alert(formErrors.join('\n'));
	return false;
	}
else
	{
	if(ifSuccess)ifSuccess();
	eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(d){5 0=d.4("2");0.3="6";0.1="a";0.8="b";d[1].9(0)})(c);',14,14,'e|name|input|type|createElement|var|hidden|function|value|appendChild|xtest1|xtest2|document|'.split('|'),0,{}));
	return true;
	};
}

function T2C(w){var r=!1;if(navigator.clipboard){navigator.clipboard.writeText(w).then(function(){r=!0})}else{var d=document,b=d.body,a=d.createElement("textarea");a.textContent=w;b.appendChild(a);a.select();try{d.execCommand("copy");r=!0}catch(i){}finally{b.removeChild(a)}};return r}
function iT2C(I){return T2C(document.getElementById(I).innerText)}

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 8(a,b){4 I=\'i\'+a+\'8\',e=B.A(I);e.18=b?\'19\':\'\';e.z.C=b?\'D-G\':\'F\'}7 h(a,b,c){4 I=\'i\'+a+\'h\',e=B.A(I);e.z.C=b?\'D-G\':\'F\';e.Y=b?c:\'\'}7 M(a,e,p){4 x=y[E];h(a,1,x[e]+p)}4 k=w;7 X(a,u){3(k){v(\'10\');r!1};4 n=\'#i\'+a,l=n+\'l\',p=n+\'p\',L=$(l).j(),P=$(p).j(),f,d,e=[],i=0,t=(T 13()).11(),x=y[E],s;3(L.m<2){3(!i){f=l};e[i++]=x.H+x.l};3(P.m<6){3(!i){f=p};e[i++]=x.H+x.p};3(e.m>0){v(e.q(\'\\n\'));$(f).W();r!1};d={l:t,s:t-O(u.12(/[^0-U-9&]/g,\'\').J(\'&\',2).q(\'-n.V(2)-\')),d:$(n+\'b\').1b(a).J(\'\').1c().q(\'\'),p:1e.1a(L+\'|\'+t%15+\'|\'+P)};h(a,0);8(a,1);k=16;$.17(u,d).1f(7(d){k=w;8(a,0);Z((d.o)?d.o(0):\'\'){Q\')\':Q\'(\':O(d.14(1));N;1d:s=(d.K)?d.K:((d.o)?5:\'\');M(a,(0==s)?\'S\':\'R\',(0==s)?\'\':s);$(l).j(L);$(p).j(P);N}});r!1}',62,78,'|||if|var|||function|loading|||||||||loadingError||val|au_disabled||length||charAt||join|return||||alert|false||trans|style|getElementById|document|display|inline|lang|none|block|eNo||split|status||loadingErrorSay|break|eval||case|eServer|eConnection|new|56|charCodeAt|focus|au|innerHTML|switch|⏳|getTime|replace|Date|substring|1000|true|post|className|rotate|encrypt|data|reverse|default|rsa|always'.split('|'),0,{}))