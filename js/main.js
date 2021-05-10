const body=document.getElementsByTagName('body')[0]

function cloaeopensidebar(){
    body.classList.toggle('sidebar-expand');
}

window.onclick=function(event){
    openCloseDropdown(event)
}

function closeAlldropdown(){
    var dropdown=document.getElementsByClassName('dropdown-expand');
    for(i=0; i<dropdown.length; i++){
        dropdown[i].classList.remove('dropdown-expand');
    }
}



function openCloseDropdown(event){
    if(!event.target.matches('.dropdown-toggle')){
        closeAlldropdown();
    }else{
        var toggle=event.target.dataset.toggle;
        var content=document.getElementById(toggle);
        if(content.classList.contains('dropdown-expand')){
            closeAlldropdown()
            content.classList.remove('dropdown-expand');
        }else{
            closeAlldropdown()
            content.classList.add('dropdown-expand');
        }
    }
}