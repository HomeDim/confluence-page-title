$(document).on(
    "mouseenter",
    ".plugin_pagetree_children_span",
    function() {
        var linkText = $(this).find("a").text();
        $(this).attr('title', linkText);
    }
);