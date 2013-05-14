if( ! s2w ) var s2w = {};
s2w.toc = function(){
	div = document.getElementById('content');
	ul = document.getElementById('s2w_toc_ul');
	
	if ( !ul ) return;
	
	childEl = div.firstElementChild;
	i =0;
	while ( childEl ){
		if(childEl.nodeName.charAt(0) == "H" && childEl.nodeName != "HEADER"){
			li = document.createElement('li');
			li.className = "s2w_toc_"+childEl.nodeName;
			li.innerHTML = '<a href="#s2w_toc_'+i+'">'+childEl.textContent+'</a>';
			ul.appendChild(li);
			
			childEl.id = 's2w_toc_'+i;
			i++;
		}
		childEl = childEl.nextElementSibling;
	}
	document.getElementById('s2w_toc_fieldset').style.display = 'block';
}
window.addEventListener('load', function(){
	s2w.toc();
});
