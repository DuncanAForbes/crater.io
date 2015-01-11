AccountsTemplates.configure({
  texts: {
    socialIcons: {
      facebook: "icon ion-social-facebook",
      twitter: "icon ion-social-twitter"
    }
  }
});

themeSettings.useDropdowns = false;

primaryNav = ['viewsMenu'];
secondaryNav = ['notificationsMenu', 'userMenu'];

viewNav = [
  {
    route: 'posts_top',
    label: 'Trending'
  },
  {
    route: 'posts_new',
    label: 'Recent'
  }
];

postModules = [
  {
    template: 'postUpvote',
    order: 1
  },
  {
    template: 'postContent',
    order: 5
  },
  {
    template: 'postDiscuss',
    order: 30
  },
  {
    template: 'postAvatars',
    order: 40
  }
];

postThumbnail = [];

postHeading = [
  {
    template: 'postTitle',
    order: 10
  }
];

postMeta = [
  {
    template: 'postDomain',
    order: 10
  },
  {
    template: 'postInfo',
    order: 20
  },
  {
    template: 'postAdmin',
    order: 30
  }
];

userProfileDisplay = [
  {
    template: 'craterUserInfo',
    order: 1
  },
  {
    template: 'craterUserPosts',
    order: 2
  },
  {
    template: 'craterUserUpvotedPosts',
    order: 3
  },
  {
    template: 'craterUserDownvotedPosts',
    order: 4
  },
  {
    template: 'craterUserComments',
    order: 5
  }
];

templates['layout']               = 'craterLayout';
templates['footer']               = 'craterFooter';
templates['nav']                  = 'craterNav';
templates['search']               = 'craterSearch';
templates['notificationsMenu']    = 'craterNotificationsMenu';
templates['comment_item']         = 'craterCommentItem';
templates['postAdmin']            = 'craterPostAdmin';
templates['postAvatars']          = 'craterPostAvatars';
templates['postCategories']       = 'craterPostCategories';
templates['postDiscuss']          = 'craterPostDiscuss';
templates['postDomain']           = 'craterPostDomain';
templates['postInfo']             = 'craterPostInfo';
templates['postUpvote']           = 'craterPostUpvote';
templates['post_body']            = 'craterPostBody';
templates['post_edit']            = 'craterPostEdit';
templates['post_item']            = 'craterPostItem';
templates['postsLoadMore']        = 'craterPostsLoadMore';
templates['user_profile']         = 'craterUserProfile';
templates['userComments']         = 'craterUserComments';
templates['userDownvotedPosts']   = 'craterUserDownvotedPosts';
templates['userInfo']             = 'craterUserInfo';
templates['userPosts']            = 'craterUserPosts';
templates['userUpPosts']          = 'craterUserUpPosts';
