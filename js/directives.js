var resumeDirectives = angular.module("resumeApp.directives", []);

resumeDirectives.directive('markdownEditor', function() {
    return {
        require: 'ngModel',
        replace:true,
        template:'<div class="epic-editor"></div>',
        link: function(scope, element, attrs, ngModel) {
            
            var opts = {
                container: element.get(0), // raw element or ID
                basePath: 'epiceditor', // from js file epiceditor.js

                file:{
                    autoSave:false
                },
                clientSideStorage: false
                /*
                basePath: 'epiceditor',
                localStorageName: 'epiceditor',
                parser: marked,
                file: {
                    name: 'epiceditor',
                    defaultContent: '',
                    autoSave: 100
                },
                theme: {
                    base:'/themes/base/epiceditor.css',
                    preview:'/themes/preview/preview-dark.css',
                    editor:'/themes/editor/epic-dark.css'
                },
                focusOnLoad: false,
                shortcut: {
                    modifier: 18,
                    fullscreen: 70,
                    preview: 80,
                    edit: 79
                }*/
            }
            
            var editor = new EpicEditor(opts);
            
            editor.load(function () {
                // editor loaded
                
                // local -> parent scope change
                
                var iFrameEditor = editor.getElement('editor');
               
                // we get body dom element, because this is contenteditable=true                
                // http://stackoverflow.com/questions/6256342/trigger-an-event-when-contenteditable-is-changed
                var contents = jQuery('body',iFrameEditor).html();
                jQuery('body',iFrameEditor).blur(function() {
                    if (contents!=jQuery(this).html()){
                        // there was a change!
                        console.log('CHAAAANGE!');
                        contents = jQuery(this).html(); // set to new content
                        editor.save(); // important!
                        var rawContent = editor.exportFile();
                        ngModel.$setViewValue(rawContent);
                        scope.$apply();
                    }
                }); // eo blur
            });
            
            var isFirst = true;

            // wait for model change
            scope.$watch(function(){

                return ngModel.$modelValue;

            }, function(modelValue){

                if(modelValue && modelValue.length && isFirst) {
                    
                    isFirst = false;
                    editor.importFile(null, modelValue);
                }
            });
            
            // parent -> local scope change
            // 2DO: WATCH NG MODEL VALUE AND TRIGGER EDITOR -> LOAD FILE
            // HOW TO DO IT ??
        }
    }
});