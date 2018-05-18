var Vlab = {

    div : null,

    setVariant : function(str){},
    setPreviosSolution: function(str){},
    setMode: function(str){},

    //Инициализация ВЛ
    init : function(){
        this.div = document.getElementById("jsLab");
        this.div.outerHTML = '<div class="container">'+
            '      <div class="row header">'+
            '        <div class="col col-8">'+
            '          <button class="btn btn-primary btn-xs" type="button">?????</button>'+
            '          <button class="btn btn-primary btn-xs" type="button">?????????</button>'+
            '          <button class="btn btn-primary btn-xs" type="button">?????????</button>'+
            '        </div>'+
            '        <div class="col col-3">'+
            '          <button class="btn btn-dark btn-block" type="button">??????</button>'+
            '        </div>'+
            '        <div class="col col-1 d-flex align-items-center justify-content-center">'+
            '          <div>'+
            '            <span class="oi oi-question-mark"></span>'+
            '          </div>'+
            '        </div>'+
            '      </div>'+
            '      <div class="row main-part">'+
            '        <div class="col col-9">'+
            '          <pre id="editor">function foo(items) {'+
            '    var i;'+
            '    for (i = 0; i < items.length; i++) {'+
            '        alert("Ace Rocks " + items[i]);'+
            '    }'+
            '}</pre>'+
            '        </div>'+
            '        <div class="col col-3">'+
            '          ???????'+
            '        </div>'+
            '      </div>'+
            '      <div class="row console">'+
            '        <div class="col col-10">'+
            '          <div class="row">'+
            '            <div class="col col-9">1</div>'+
            '            <div class="col col-3">2</div>'+
            '          </div>'+
            '        </div>'+
            '        <div class="col col-2">3</div>'+
            '      </div>'+
            '    </div>'+
            '    <script>'+
            '      var editor = ace.edit("editor");'+
            '      editor.setTheme("ace/theme/twilight");'+
            '      editor.session.setMode("ace/mode/javascript");'+
            '    </script>';
        document.getElementById("tool").innerHTML = this.tool;

        //получение варианта задания
        var ins = document.getElementById("preGeneratedCode").value;
    },

    getCondition: function(){},
    getResults: function(){},
    calculateHandler: function(text, code){},
}

window.onload = function() {
    Vlab.init();
};
