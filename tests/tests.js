if (typeof require!= "undefined") {
    
    require.config({
        paths: {
            "jquery": '../bower_components/jquery/dist/jquery',
            "jsyg": '../bower_components/jsyg/JSYG',
            "jsyg-point" : '../bower_components/jsyg-point/JSYG.Point',
            "jsyg-vect" : '../bower_components/jsyg-vect/JSYG.Vect',
            "jsyg-matrix" : '../bower_components/jsyg-matrix/JSYG.Matrix',
            "jsyg-utils" : '../JSYG-utils'
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["jsyg-utils"],factory);
    else factory(JSYG);
    
}(function($) {

    module("utils");
    
    var container = $("#qunit-fixture");

    test("Dimensions d'un élement", function() {
        
        var svg = $('<svg width="500" height="400">').appendTo(container);
        var rect = $('<rect>').attr({width:200,height:200,x:50,y:50}).appendTo(svg);
                
        var dimRect = rect.getDim();

        expect(9);
        
        equal(svg.attr("width"),"500","largeur");
        equal(svg.attr("height"),"400","hauteur");
        
        equal(svg.parent()[0],container[0],"hierarchie DOM");
        
        ok(svg.isSVG(),"reconnaissance d'un élément SVG");
        ok(rect.isSVG(),"reconnaissance d'un élément SVG");
                
        equal(dimRect.x,50,"abcisse");
        equal(dimRect.y,50,"ordonnée");
        
        rect.setDim({
            width:20,
            height:30,
            x:0,
            y:0
        });
        
        dimRect = rect.getDim();
        
        equal(dimRect.x,0,"abcisse");
        equal(dimRect.width,20,"ordonnée");
    });
    
}));
