const side_bar_content = document.querySelector('.acs-side-bar-content')

side_bar_content.addEventListener(
    'mouseover',
    function(event){
        if (event.target.closest('.plugin_pagetree_children_span')){
            var linkText = event.target.innerText;
            event.target.title = linkText;
        }
    }
);
