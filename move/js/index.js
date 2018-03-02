$(document).ready(function(){
   
   
   
   
   
});



$(window).load(function() {
    
    // 各要素を変数に指定します
    var $item01 = $('#item01'),
        $item02 = $('#item02'),
        $item03 = $('#item03'),
        $item04 = $('#item04'),
        $item05 = $('#item05'),
        $item06 = $('#item06'),
        $item07 = $('#item07'),
        $item08 = $('#item08'),
        $item09 = $('#item09'),
        $item10 = $('#item10'),
        $logo = $('#logo'),
        $last = $('#last'),
        $skip = $('#skipBtn');
        $replay = $('#replayBtn');
        showitem = {opacity:1,top:"-=5%"}; // 上に5%移動しながら表示
        hideitem = {opacity:0,top:"-=10%"}; // 上に10%移動しながら非表示

    // アニメーションの順番を設定
    function playAnimation(){
        animation01()
            .then(animation02)
            .then(animation03)
            .then(animation04)
            .then(animation05)
            .then(animation06)
            .then(animation07)
            .then(animation08)
            .then(animation09)
            .then(animation10)
            .then(logo)
            .then(last);
    }
    
    // リプレイボタンを設定
    $replay.on('click', function(){
        onReplay();
    });
    
    // リプレイ処理
    function onReplay(){
        $item01.stop(true, true).show().css({'top': 35 + "%"});
        $item02.stop(true, true).show().css({'top': 50 + "%"});
        $item03.stop(true, true).show().css({'top': 45 + "%"});
        $item04.stop(true, true).show().css({'top': 50 + "%"});
        $item05.stop(true, true).show().css({'top': 45 + "%"});
        $item06.stop(true, true).show().css({'top': 40 + "%"});
        $item07.stop(true, true).show().css({'top': 50 + "%"});
        $item08.stop(true, true).show().css({'top': 25 + "%"});
        $item09.stop(true, true).show().css({'top': 50 + "%"});
        $item10.stop(true, true).show().css({'top': 25 + "%"});
        $logo.stop(true, true).show().css({'left': -300 + "%",'opacity': 0});
        $last.stop(true, true).show().css({'opacity': 0,'top' :45 + "%"});
        $skip.stop(true, true).show();
        $replay.stop(true, true).hide();
        playAnimation();
    }
    
    // スキップボタンを設定
    $skip.on('click', function(){
        onSkip();
        return false;
    });

    // スキップ処理
    function onSkip(){ 
        $item01.stop(true, true).hide();
        $item02.stop(true, true).hide();
        $item03.stop(true, true).hide();
        $item04.stop(true, true).hide();
        $item05.stop(true, true).hide();
        $item06.stop(true, true).hide();
        $item07.stop(true, true).hide();
        $item08.stop(true, true).hide();
        $item09.stop(true, true).hide();
        $item10.stop(true, true).hide();
        $logo.stop(true, true).css({'left': 0 + "%",'opacity': 1});
        $last.stop(true, true).css({'opacity': 1,'top' :40 + "%"});
        $skip.stop(true, true).hide();
        $replay.stop(true, true).show();
    }        

    // 各アニメーションを順番に記述します
    function animation01() {
        var d = new $.Deferred;
        $item01.animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation02(){
        var d = new $.Deferred;
        $item01.animate(hideitem,1000),
        $item02.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation03(){
        var d = new $.Deferred;
        $item02.delay(500).animate(hideitem,1000),
        $item03.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation04(){
        var d = new $.Deferred;
        $item03.delay(500).animate(hideitem,1000),
        $item04.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation05(){
        var d = new $.Deferred;
        $item04.delay(500).animate(hideitem,1000),
        $item05.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation06(){
        var d = new $.Deferred;
        $item05.delay(500).animate(hideitem,1000),
        $item06.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }    
    function animation07(){
        var d = new $.Deferred;
        $item06.delay(500).animate(hideitem,1000),
        $item07.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation08(){
        var d = new $.Deferred;
        $item07.delay(500).animate(hideitem,1000),
        $item08.delay(1000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation09(){
        var d = new $.Deferred;
        $item08.delay(4000).animate(hideitem,1000),
        $item09.delay(4500).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }
    function animation10(){
        var d = new $.Deferred;
        $item09.delay(1500).animate(hideitem,1000),
        $item10.delay(2000).animate(showitem,2000, function(){d.resolve();});
        return d.promise();
    }    
    function logo(){
        var d = new $.Deferred;
        $item10.delay(4000).animate(hideitem,1000),
        $logo.delay(5500).animate({opacity:1,left:0 + "%"},2000, 'easeOutBack', function(){d.resolve();});
        return d.promise();
    }
    function last(){
        var d = new $.Deferred;
        $last.delay(500).animate(showitem,2000),
        $skip.hide(),
        $replay.show(function(){d.resolve();});
        return d.promise();
    }    

    // 実行
    playAnimation();

}());