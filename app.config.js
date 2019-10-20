let app = angular.module('app', ['ui.router', 'ngMaterial']); //richiamo del module principale e delle dipendenze del modulo

angular.module('app').config(function($stateProvider, $urlServiceProvider) { //sintassi per il router
    $urlServiceProvider.rules.otherwise({ state: 'home' });
    
    $stateProvider.state('home', {  //root principale
      url: '/home',      
      template:'stato A <a ui-sref="users.list"> vai a b</a>'  //nel template c'è un href per vedere la lista
  
    });
    $stateProvider.state('users', { //root padre(poichè è abstract non è raggiungibile) che avrà root figli 
        url: '/users',
        template: '<div> <ui-view></ui-view> </div>',  // CR: con ui-view metto a disposizione la vista dei root figli
        abstract:true
      });

      $stateProvider.state('users.list', {  // root figlio che mi farà comparire una lista
        url: '/users.list',  
        template: '<div> sono dentro il div di users.list </div>'

      });
});