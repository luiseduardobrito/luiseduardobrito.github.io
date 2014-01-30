var resumeServices = angular.module("resumeApp.services", []);

resumeServices.factory('articles',

	['$firebase',

	function($firebase) {

		var _this = this;
		var _public = {};

		_this.firebaseURL = "https://luiseduardobrito.firebaseio.com/articles";

		_this.ref = null;
		_this.articlesBind = null;
		_this.articlesList = {};

		_this.articles = [];

		_this.init = function(){

			_this.ref = new Firebase(_this.firebaseURL);
			_this.articlesBind = $firebase(_this.ref);

			_this.articlesBind.$on("child_added", function(child) {
				_this.childAddCallback(child.snapshot.value);
			})

			return _public;
		};

		_this.childAddCallback = function(article) {

			_this.articlesList[article.id] = article;

			_this.articles = [];

			for(var k in _this.articlesList)
				_this.articles.push(_this.articlesList[k])
		}

		_public.get = function() {
			return _this.articles;
		}

		_public.getById = function(id) {
			return _this.articlesList[id];
		}

		_public.create = function(post, fn) {

			fn = fn || function(){};

			post.type = post.type || "text";
			post.time = post.time || (new Date());
			post.id = post.id || (new Date(post.time)).getTime()
			post.tags = post.tags.split(' ')

			_this.articlesBind.$add(post);

			fn();
		}

		_public.getTags = function() {
			// TODO
			return [];
		};

		return _this.init();
	}
])