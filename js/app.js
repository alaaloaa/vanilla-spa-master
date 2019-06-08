'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('life', 'life.html', true),            
            new Route('study', 'study.html'),
            new Route('work', 'work.html'),
            new Route('why', 'why.html'),
            new Route('steps', 'steps.html'),
            new Route('about', 'about.html')
        ]);
    }
    init();
}());
