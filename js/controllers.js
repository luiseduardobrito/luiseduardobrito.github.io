var resumeControllers = angular.module("resumeApp.controllers", []);

resumeControllers.controller("HomeCtrl", [

	'$scope', '$firebase', 

	function($scope, $firebase) {

		// Firebase bindings
		var articlesRef = new Firebase("https://luiseduardobrito.firebaseio.com/articles");
		articlesRef

		$scope.articles = $firebase(articlesRef);

		// Tags management

		// TODO: sort tags by post count
		$scope.tags = [];

		$scope.addTag = function(tag) {

			for(var i = 0; i < $scope.tags; i++)
				if($scope.tags[i] == tag)
					return;

			$scope.tags.push(tag);
		}

		// MarkDown Converter
		$scope.mdToHtml = function(text) {
			var converter = new Markdown.Converter();
			return converter.makeHtml(text);
		}

		$scope.fromNow = function(timestamp) {
			return moment(timestamp).fromNow();
		}

		$scope.articles.$on('child_added', function(child) {

			var article = child.snapshot.value;
			var newTags = article.tags;

			for(var i = 0; i < newTags.length; i++)
				$scope.addTag(newTags[i])
		});
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
			$scope.post.time = (new Date());

			// post tags
			$scope.post.tags = $scope.post.tags.split(' ')

			// add post to scope
			$scope.articles.$add($scope.post);
		}
	}
])