var resumeControllers = angular.module("resumeApp.controllers", []);

resumeControllers.controller("HomeCtrl", [

	'$scope', '$firebase', 

	function($scope, $firebase) {

		// Firebase bindings
		var articlesRef = new Firebase("https://luiseduardobrito.firebaseio.com/articles");
		$scope.articles = $firebase(articlesRef);

		// MarkDown Converter
		$scope.mdToHtml = function(text) {
			var converter = new Markdown.Converter();
			return converter.makeHtml(text);
		}
	}
])

resumeControllers.controller("ContactCtrl", [

	'$scope', '$firebase', 

	function($scope, $firebase) {
		return null;
	}
])

resumeControllers.controller("CreatePostCtrl", [

	'$scope', '$firebase', 

	function($scope, $firebase) {

		// Firebase bindings
		var articlesRef = new Firebase("https://luiseduardobrito.firebaseio.com/articles");
		$scope.articles = $firebase(articlesRef);

		$scope.post = {
			type: "text"
		};

		// create a post
		$scope.create = function(){

			// current date
			$scope.post.date = (new Date()).toLocaleString();

			// add post to scope
			$scope.articles.$add($scope.post);
		}
	}
])