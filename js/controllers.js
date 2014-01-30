var resumeControllers = angular.module("resumeApp.controllers", []);

resumeControllers.controller("HomeCtrl", [

	'$scope', 'articles',

	function($scope, $articles) {

		$scope.getArticles = function(){
			return $articles.get();
		}

		$scope.$watch('getArticles()', function(list) {
			$scope.articles = list;
		})

		// MarkDown Converter
		$scope.mdToHtml = function(text) {

			// find linebreak
			text = text.split('{{ln_break}}');
			text = text.length ? text[0] : text;

			var converter = new Markdown.Converter();
			Markdown.Extra.init(converter, {highlighter: "prettify"});

			window.prettyPrint();
			return converter.makeHtml(text);
		}

		$scope.fromNow = function(timestamp) {
			return moment(timestamp).fromNow();
		}

		$scope.share = function(article) {

			var text = article.content;

			text = text.split('{{ln_break}}');
			text = text.length ? text[0] : text;

			FB.ui({
				method: 'feed',
				name: article.title + ' - Luís Eduardo Brito',
				link: 'http://luiseduardobrito.github.io/#!/post/' + article.id,
				picture: 'http://luiseduardobrito.github.io/images/icon.jpg',
				caption: 'Blog de TI, Web e Desenvolvimento',
				description: text,
				message: ''
			});
  		}
	}
])

resumeControllers.controller("ContactCtrl", [

	'$scope', '$firebase', 

	function($scope, $firebase) {
		return null;
	}
])

resumeControllers.controller("SinglePostCtrl", [

	'$scope', '$routeParams', 'articles',

	function($scope, $routeParams, $articles) {

		$scope.getSingleArticle = function(){
			return $articles.getById($routeParams.id);
		}

		$scope.$watch('getSingleArticle()', function(item) {
			$scope.article = item;
		});

		// MarkDown Converter
		$scope.mdToHtml = function(text) {

			if(!text || !text.length)
				return '';

			// find linebreak
			text = text.split('{{ln_break}}').join('\n\n');

			var converter = new Markdown.Converter();
			Markdown.Extra.init(converter, {highlighter: "prettify"});

			window.prettyPrint();
			return converter.makeHtml(text);
		}

		$scope.fromNow = function(timestamp) {
			return moment(timestamp).fromNow();
		}

		$scope.share = function() {

			var text = $scope.article.content;

			text = text.split('{{ln_break}}');
			text = text.length ? text[0] : text;

			FB.ui({
				method: 'feed',
				name: $scope.article.title + ' - Luís Eduardo Brito',
				link: 'http://luiseduardobrito.github.io/#!/post/' + $scope.article.id,
				picture: 'http://luiseduardobrito.github.io/images/icon.jpg',
				caption: 'Blog de TI, Web e Desenvolvimento',
				description: text,
				message: ''
			});
  		}
	}
])

resumeControllers.controller("CreatePostCtrl", [

	'$scope', 'articles', '$location',

	function($scope, $articles, $location) {

		$scope.post = {
			type: "text"
		}

		$scope.create = function(){
			$articles.create($scope.post, function(){
				$location.path('');
			})
		}
	}
])

resumeControllers.controller("EditPostCtrl", [

	'$scope', '$routeParams', 'articles', '$location',

	function($scope, $routeParams, $articles, $location) {

		$scope.update = true;

		$scope.getSingleArticle = function(){
			return $articles.getById($routeParams.id);
		}

		$scope.$watch('getSingleArticle()', function(item) {

			if(item) {
				$scope.post = item;
				$scope.post.tags = $scope.post.tags.join(' ')
			}
		});

		$scope.save = function(){
			$articles.update($routeParams.id, $scope.post, function(){
				$location.path('');
			})
		}
	}
])