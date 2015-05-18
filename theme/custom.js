// Create events for jQuery show and hide methods

$.each(['show', 'hide'], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
        this.trigger(ev);
        return el.apply(this, arguments);
    };
});

// Render Resource Blocks - see for example http://prologue.datascience.hk

$('.rendered_html').on('show', function() {
    var resource_img = $('[alt="resource"]').map(function(i,e){return $(e).attr('src')})
    var resource_text = $('[alt="resource"]').siblings('a').map(function(i,e){return $(e).text()})
    var resource_links = $('[alt="resource"]').siblings('a').map(function(i,e){return $(e).attr('href')})

    $('[alt="resource"]').each(function(i,e){
        $p = $(e).parent('p');
        $p.empty()
            .addClass('resource-container')
            .append('<a>')
            .find('a')
            .attr('href', resource_links[i])
            .append('<div>')
            .find('div')
            .css('background-image','url(' + resource_img[i]+')')
            .parent()
            .append('<p>')
            .find('p')
            .text(resource_text[i])
    })
})

$('.rendered_html').trigger('show')
