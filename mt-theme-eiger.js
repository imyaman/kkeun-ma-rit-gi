$(function() {
    $('<select />').appendTo('header > [role="navigation"]');

    $('<option />', {
        'value': '',
        'text': 'Menu',
        'selected': 'selected'
    }).appendTo('header > [role="navigation"] > select');

    $('header > [role="navigation"] a').each(function() {
        var el = $(this);
        $('<option />', {
            'value': el.attr('href'),
            'text': el.text()
        }).appendTo('header > [role="navigation"] > select');
    });

    $('header > [role="navigation"] > select, .widget-archive-dropdown > select').change(function() {
        window.location = $(this).find('option:selected').val();
    });
});
