/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/admin-lte/dist/js/adminlte.js":
/*!****************************************************!*\
  !*** ./node_modules/admin-lte/dist/js/adminlte.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
 * AdminLTE v3.1.0 (https://adminlte.io)
 * Copyright 2014-2021 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
    true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :
   0;
 }(this, (function (exports, $) { 'use strict';

   function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

   var $__default = /*#__PURE__*/_interopDefaultLegacy($);

   /**
    * --------------------------------------------
    * AdminLTE CardRefresh.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$e = 'CardRefresh';
   var DATA_KEY$e = 'lte.cardrefresh';
   var EVENT_KEY$7 = "." + DATA_KEY$e;
   var JQUERY_NO_CONFLICT$e = $__default['default'].fn[NAME$e];
   var EVENT_LOADED = "loaded" + EVENT_KEY$7;
   var EVENT_OVERLAY_ADDED = "overlay.added" + EVENT_KEY$7;
   var EVENT_OVERLAY_REMOVED = "overlay.removed" + EVENT_KEY$7;
   var CLASS_NAME_CARD$1 = 'card';
   var SELECTOR_CARD$1 = "." + CLASS_NAME_CARD$1;
   var SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]';
   var Default$c = {
     source: '',
     sourceSelector: '',
     params: {},
     trigger: SELECTOR_DATA_REFRESH,
     content: '.card-body',
     loadInContent: true,
     loadOnInit: true,
     responseType: '',
     overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
     onLoadStart: function onLoadStart() {},
     onLoadDone: function onLoadDone(response) {
       return response;
     }
   };

   var CardRefresh = /*#__PURE__*/function () {
     function CardRefresh(element, settings) {
       this._element = element;
       this._parent = element.parents(SELECTOR_CARD$1).first();
       this._settings = $__default['default'].extend({}, Default$c, settings);
       this._overlay = $__default['default'](this._settings.overlayTemplate);

       if (element.hasClass(CLASS_NAME_CARD$1)) {
         this._parent = element;
       }

       if (this._settings.source === '') {
         throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
       }
     }

     var _proto = CardRefresh.prototype;

     _proto.load = function load() {
       var _this = this;

       this._addOverlay();

       this._settings.onLoadStart.call($__default['default'](this));

       $__default['default'].get(this._settings.source, this._settings.params, function (response) {
         if (_this._settings.loadInContent) {
           if (_this._settings.sourceSelector !== '') {
             response = $__default['default'](response).find(_this._settings.sourceSelector).html();
           }

           _this._parent.find(_this._settings.content).html(response);
         }

         _this._settings.onLoadDone.call($__default['default'](_this), response);

         _this._removeOverlay();
       }, this._settings.responseType !== '' && this._settings.responseType);
       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_LOADED));
     };

     _proto._addOverlay = function _addOverlay() {
       this._parent.append(this._overlay);

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_ADDED));
     };

     _proto._removeOverlay = function _removeOverlay() {
       this._parent.find(this._overlay).remove();

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_REMOVED));
     } // Private
     ;

     _proto._init = function _init() {
       var _this2 = this;

       $__default['default'](this).find(this._settings.trigger).on('click', function () {
         _this2.load();
       });

       if (this._settings.loadOnInit) {
         this.load();
       }
     } // Static
     ;

     CardRefresh._jQueryInterface = function _jQueryInterface(config) {
       var data = $__default['default'](this).data(DATA_KEY$e);

       var _options = $__default['default'].extend({}, Default$c, $__default['default'](this).data());

       if (!data) {
         data = new CardRefresh($__default['default'](this), _options);
         $__default['default'](this).data(DATA_KEY$e, typeof config === 'string' ? data : config);
       }

       if (typeof config === 'string' && /load/.test(config)) {
         data[config]();
       } else {
         data._init($__default['default'](this));
       }
     };

     return CardRefresh;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_DATA_REFRESH, function (event) {
     if (event) {
       event.preventDefault();
     }

     CardRefresh._jQueryInterface.call($__default['default'](this), 'load');
   });
   $__default['default'](function () {
     $__default['default'](SELECTOR_DATA_REFRESH).each(function () {
       CardRefresh._jQueryInterface.call($__default['default'](this));
     });
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$e] = CardRefresh._jQueryInterface;
   $__default['default'].fn[NAME$e].Constructor = CardRefresh;

   $__default['default'].fn[NAME$e].noConflict = function () {
     $__default['default'].fn[NAME$e] = JQUERY_NO_CONFLICT$e;
     return CardRefresh._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE CardWidget.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$d = 'CardWidget';
   var DATA_KEY$d = 'lte.cardwidget';
   var EVENT_KEY$6 = "." + DATA_KEY$d;
   var JQUERY_NO_CONFLICT$d = $__default['default'].fn[NAME$d];
   var EVENT_EXPANDED$3 = "expanded" + EVENT_KEY$6;
   var EVENT_COLLAPSED$4 = "collapsed" + EVENT_KEY$6;
   var EVENT_MAXIMIZED = "maximized" + EVENT_KEY$6;
   var EVENT_MINIMIZED = "minimized" + EVENT_KEY$6;
   var EVENT_REMOVED$1 = "removed" + EVENT_KEY$6;
   var CLASS_NAME_CARD = 'card';
   var CLASS_NAME_COLLAPSED$1 = 'collapsed-card';
   var CLASS_NAME_COLLAPSING = 'collapsing-card';
   var CLASS_NAME_EXPANDING = 'expanding-card';
   var CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
   var CLASS_NAME_MAXIMIZED = 'maximized-card';
   var SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]';
   var SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]';
   var SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]';
   var SELECTOR_CARD = "." + CLASS_NAME_CARD;
   var SELECTOR_CARD_HEADER = '.card-header';
   var SELECTOR_CARD_BODY = '.card-body';
   var SELECTOR_CARD_FOOTER = '.card-footer';
   var Default$b = {
     animationSpeed: 'normal',
     collapseTrigger: SELECTOR_DATA_COLLAPSE,
     removeTrigger: SELECTOR_DATA_REMOVE,
     maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
     collapseIcon: 'fa-minus',
     expandIcon: 'fa-plus',
     maximizeIcon: 'fa-expand',
     minimizeIcon: 'fa-compress'
   };

   var CardWidget = /*#__PURE__*/function () {
     function CardWidget(element, settings) {
       this._element = element;
       this._parent = element.parents(SELECTOR_CARD).first();

       if (element.hasClass(CLASS_NAME_CARD)) {
         this._parent = element;
       }

       this._settings = $__default['default'].extend({}, Default$b, settings);
     }

     var _proto = CardWidget.prototype;

     _proto.collapse = function collapse() {
       var _this = this;

       this._parent.addClass(CLASS_NAME_COLLAPSING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
         _this._parent.addClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_COLLAPSING);
       });

       this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

       this._element.trigger($__default['default'].Event(EVENT_COLLAPSED$4), this._parent);
     };

     _proto.expand = function expand() {
       var _this2 = this;

       this._parent.addClass(CLASS_NAME_EXPANDING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
         _this2._parent.removeClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_EXPANDING);
       });

       this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

       this._element.trigger($__default['default'].Event(EVENT_EXPANDED$3), this._parent);
     };

     _proto.remove = function remove() {
       this._parent.slideUp();

       this._element.trigger($__default['default'].Event(EVENT_REMOVED$1), this._parent);
     };

     _proto.toggle = function toggle() {
       if (this._parent.hasClass(CLASS_NAME_COLLAPSED$1)) {
         this.expand();
         return;
       }

       this.collapse();
     };

     _proto.maximize = function maximize() {
       this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

       this._parent.css({
         height: this._parent.height(),
         width: this._parent.width(),
         transition: 'all .15s'
       }).delay(150).queue(function () {
         var $element = $__default['default'](this);
         $element.addClass(CLASS_NAME_MAXIMIZED);
         $__default['default']('html').addClass(CLASS_NAME_MAXIMIZED);

         if ($element.hasClass(CLASS_NAME_COLLAPSED$1)) {
           $element.addClass(CLASS_NAME_WAS_COLLAPSED);
         }

         $element.dequeue();
       });

       this._element.trigger($__default['default'].Event(EVENT_MAXIMIZED), this._parent);
     };

     _proto.minimize = function minimize() {
       this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

       this._parent.css('cssText', "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
         var $element = $__default['default'](this);
         $element.removeClass(CLASS_NAME_MAXIMIZED);
         $__default['default']('html').removeClass(CLASS_NAME_MAXIMIZED);
         $element.css({
           height: 'inherit',
           width: 'inherit'
         });

         if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
           $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
         }

         $element.dequeue();
       });

       this._element.trigger($__default['default'].Event(EVENT_MINIMIZED), this._parent);
     };

     _proto.toggleMaximize = function toggleMaximize() {
       if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
         this.minimize();
         return;
       }

       this.maximize();
     } // Private
     ;

     _proto._init = function _init(card) {
       var _this3 = this;

       this._parent = card;
       $__default['default'](this).find(this._settings.collapseTrigger).click(function () {
         _this3.toggle();
       });
       $__default['default'](this).find(this._settings.maximizeTrigger).click(function () {
         _this3.toggleMaximize();
       });
       $__default['default'](this).find(this._settings.removeTrigger).click(function () {
         _this3.remove();
       });
     } // Static
     ;

     CardWidget._jQueryInterface = function _jQueryInterface(config) {
       var data = $__default['default'](this).data(DATA_KEY$d);

       var _options = $__default['default'].extend({}, Default$b, $__default['default'](this).data());

       if (!data) {
         data = new CardWidget($__default['default'](this), _options);
         $__default['default'](this).data(DATA_KEY$d, typeof config === 'string' ? data : config);
       }

       if (typeof config === 'string' && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(config)) {
         data[config]();
       } else if (typeof config === 'object') {
         data._init($__default['default'](this));
       }
     };

     return CardWidget;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_DATA_COLLAPSE, function (event) {
     if (event) {
       event.preventDefault();
     }

     CardWidget._jQueryInterface.call($__default['default'](this), 'toggle');
   });
   $__default['default'](document).on('click', SELECTOR_DATA_REMOVE, function (event) {
     if (event) {
       event.preventDefault();
     }

     CardWidget._jQueryInterface.call($__default['default'](this), 'remove');
   });
   $__default['default'](document).on('click', SELECTOR_DATA_MAXIMIZE, function (event) {
     if (event) {
       event.preventDefault();
     }

     CardWidget._jQueryInterface.call($__default['default'](this), 'toggleMaximize');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$d] = CardWidget._jQueryInterface;
   $__default['default'].fn[NAME$d].Constructor = CardWidget;

   $__default['default'].fn[NAME$d].noConflict = function () {
     $__default['default'].fn[NAME$d] = JQUERY_NO_CONFLICT$d;
     return CardWidget._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE ControlSidebar.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$c = 'ControlSidebar';
   var DATA_KEY$c = 'lte.controlsidebar';
   var EVENT_KEY$5 = "." + DATA_KEY$c;
   var JQUERY_NO_CONFLICT$c = $__default['default'].fn[NAME$c];
   var EVENT_COLLAPSED$3 = "collapsed" + EVENT_KEY$5;
   var EVENT_EXPANDED$2 = "expanded" + EVENT_KEY$5;
   var SELECTOR_CONTROL_SIDEBAR = '.control-sidebar';
   var SELECTOR_CONTROL_SIDEBAR_CONTENT$1 = '.control-sidebar-content';
   var SELECTOR_DATA_TOGGLE$4 = '[data-widget="control-sidebar"]';
   var SELECTOR_HEADER$1 = '.main-header';
   var SELECTOR_FOOTER$1 = '.main-footer';
   var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-sidebar-animate';
   var CLASS_NAME_CONTROL_SIDEBAR_OPEN$1 = 'control-sidebar-open';
   var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open';
   var CLASS_NAME_LAYOUT_FIXED$1 = 'layout-fixed';
   var CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed';
   var CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed';
   var CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed';
   var CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed';
   var CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed';
   var CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed';
   var CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed';
   var CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed';
   var CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed';
   var CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed';
   var Default$a = {
     controlsidebarSlide: true,
     scrollbarTheme: 'os-theme-light',
     scrollbarAutoHide: 'l',
     target: SELECTOR_CONTROL_SIDEBAR
   };
   /**
    * Class Definition
    * ====================================================
    */

   var ControlSidebar = /*#__PURE__*/function () {
     function ControlSidebar(element, config) {
       this._element = element;
       this._config = config;
     } // Public


     var _proto = ControlSidebar.prototype;

     _proto.collapse = function collapse() {
       var $body = $__default['default']('body');
       var $html = $__default['default']('html');
       var target = this._config.target; // Show the control sidebar

       if (this._config.controlsidebarSlide) {
         $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
         $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
           $__default['default'](target).hide();
           $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
           $__default['default'](this).dequeue();
         });
       } else {
         $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
       }

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$3));
     };

     _proto.show = function show() {
       var $body = $__default['default']('body');
       var $html = $__default['default']('html'); // Collapse the control sidebar

       if (this._config.controlsidebarSlide) {
         $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
         $__default['default'](this._config.target).show().delay(10).queue(function () {
           $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
             $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
             $__default['default'](this).dequeue();
           });
           $__default['default'](this).dequeue();
         });
       } else {
         $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
       }

       this._fixHeight();

       this._fixScrollHeight();

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_EXPANDED$2));
     };

     _proto.toggle = function toggle() {
       var $body = $__default['default']('body');
       var shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

       if (shouldClose) {
         // Close the control sidebar
         this.collapse();
       } else {
         // Open the control sidebar
         this.show();
       }
     } // Private
     ;

     _proto._init = function _init() {
       var _this = this;

       var $body = $__default['default']('body');
       var shouldNotHideAll = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

       if (shouldNotHideAll) {
         $__default['default'](SELECTOR_CONTROL_SIDEBAR).not(this._config.target).hide();
         $__default['default'](this._config.target).css('display', 'block');
       } else {
         $__default['default'](SELECTOR_CONTROL_SIDEBAR).hide();
       }

       this._fixHeight();

       this._fixScrollHeight();

       $__default['default'](window).resize(function () {
         _this._fixHeight();

         _this._fixScrollHeight();
       });
       $__default['default'](window).scroll(function () {
         var $body = $__default['default']('body');
         var shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

         if (shouldFixHeight) {
           _this._fixScrollHeight();
         }
       });
     };

     _proto._isNavbarFixed = function _isNavbarFixed() {
       var $body = $__default['default']('body');
       return $body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED);
     };

     _proto._isFooterFixed = function _isFooterFixed() {
       var $body = $__default['default']('body');
       return $body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED);
     };

     _proto._fixScrollHeight = function _fixScrollHeight() {
       var $body = $__default['default']('body');
       var $controlSidebar = $__default['default'](this._config.target);

       if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
         return;
       }

       var heights = {
         scroll: $__default['default'](document).height(),
         window: $__default['default'](window).height(),
         header: $__default['default'](SELECTOR_HEADER$1).outerHeight(),
         footer: $__default['default'](SELECTOR_FOOTER$1).outerHeight()
       };
       var positions = {
         bottom: Math.abs(heights.window + $__default['default'](window).scrollTop() - heights.scroll),
         top: $__default['default'](window).scrollTop()
       };
       var navbarFixed = this._isNavbarFixed() && $__default['default'](SELECTOR_HEADER$1).css('position') === 'fixed';
       var footerFixed = this._isFooterFixed() && $__default['default'](SELECTOR_FOOTER$1).css('position') === 'fixed';
       var $controlsidebarContent = $__default['default'](this._config.target + ", " + this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);

       if (positions.top === 0 && positions.bottom === 0) {
         $controlSidebar.css({
           bottom: heights.footer,
           top: heights.header
         });
         $controlsidebarContent.css('height', heights.window - (heights.header + heights.footer));
       } else if (positions.bottom <= heights.footer) {
         if (footerFixed === false) {
           var top = heights.header - positions.top;
           $controlSidebar.css('bottom', heights.footer - positions.bottom).css('top', top >= 0 ? top : 0);
           $controlsidebarContent.css('height', heights.window - (heights.footer - positions.bottom));
         } else {
           $controlSidebar.css('bottom', heights.footer);
         }
       } else if (positions.top <= heights.header) {
         if (navbarFixed === false) {
           $controlSidebar.css('top', heights.header - positions.top);
           $controlsidebarContent.css('height', heights.window - (heights.header - positions.top));
         } else {
           $controlSidebar.css('top', heights.header);
         }
       } else if (navbarFixed === false) {
         $controlSidebar.css('top', 0);
         $controlsidebarContent.css('height', heights.window);
       } else {
         $controlSidebar.css('top', heights.header);
       }

       if (footerFixed && navbarFixed) {
         $controlsidebarContent.css('height', '100%');
         $controlSidebar.css('height', '');
       } else if (footerFixed || navbarFixed) {
         $controlsidebarContent.css('height', '100%');
         $controlsidebarContent.css('height', '');
       }
     };

     _proto._fixHeight = function _fixHeight() {
       var $body = $__default['default']('body');
       var $controlSidebar = $__default['default'](this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);

       if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
         $controlSidebar.attr('style', '');
         return;
       }

       var heights = {
         window: $__default['default'](window).height(),
         header: $__default['default'](SELECTOR_HEADER$1).outerHeight(),
         footer: $__default['default'](SELECTOR_FOOTER$1).outerHeight()
       };
       var sidebarHeight = heights.window - heights.header;

       if (this._isFooterFixed() && $__default['default'](SELECTOR_FOOTER$1).css('position') === 'fixed') {
         sidebarHeight = heights.window - heights.header - heights.footer;
       }

       $controlSidebar.css('height', sidebarHeight);

       if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
         $controlSidebar.overlayScrollbars({
           className: this._config.scrollbarTheme,
           sizeAutoCapable: true,
           scrollbars: {
             autoHide: this._config.scrollbarAutoHide,
             clickScrolling: true
           }
         });
       }
     } // Static
     ;

     ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$c);

         var _options = $__default['default'].extend({}, Default$a, $__default['default'](this).data());

         if (!data) {
           data = new ControlSidebar(this, _options);
           $__default['default'](this).data(DATA_KEY$c, data);
         }

         if (data[operation] === 'undefined') {
           throw new Error(operation + " is not a function");
         }

         data[operation]();
       });
     };

     return ControlSidebar;
   }();
   /**
    *
    * Data Api implementation
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$4, function (event) {
     event.preventDefault();

     ControlSidebar._jQueryInterface.call($__default['default'](this), 'toggle');
   });
   $__default['default'](document).ready(function () {
     ControlSidebar._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$4), '_init');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$c] = ControlSidebar._jQueryInterface;
   $__default['default'].fn[NAME$c].Constructor = ControlSidebar;

   $__default['default'].fn[NAME$c].noConflict = function () {
     $__default['default'].fn[NAME$c] = JQUERY_NO_CONFLICT$c;
     return ControlSidebar._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE DirectChat.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$b = 'DirectChat';
   var DATA_KEY$b = 'lte.directchat';
   var EVENT_KEY$4 = "." + DATA_KEY$b;
   var JQUERY_NO_CONFLICT$b = $__default['default'].fn[NAME$b];
   var EVENT_TOGGLED = "toggled" + EVENT_KEY$4;
   var SELECTOR_DATA_TOGGLE$3 = '[data-widget="chat-pane-toggle"]';
   var SELECTOR_DIRECT_CHAT = '.direct-chat';
   var CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
   /**
    * Class Definition
    * ====================================================
    */

   var DirectChat = /*#__PURE__*/function () {
     function DirectChat(element) {
       this._element = element;
     }

     var _proto = DirectChat.prototype;

     _proto.toggle = function toggle() {
       $__default['default'](this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_TOGGLED));
     } // Static
     ;

     DirectChat._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$b);

         if (!data) {
           data = new DirectChat($__default['default'](this));
           $__default['default'](this).data(DATA_KEY$b, data);
         }

         data[config]();
       });
     };

     return DirectChat;
   }();
   /**
    *
    * Data Api implementation
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$3, function (event) {
     if (event) {
       event.preventDefault();
     }

     DirectChat._jQueryInterface.call($__default['default'](this), 'toggle');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$b] = DirectChat._jQueryInterface;
   $__default['default'].fn[NAME$b].Constructor = DirectChat;

   $__default['default'].fn[NAME$b].noConflict = function () {
     $__default['default'].fn[NAME$b] = JQUERY_NO_CONFLICT$b;
     return DirectChat._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE Dropdown.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$a = 'Dropdown';
   var DATA_KEY$a = 'lte.dropdown';
   var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
   var SELECTOR_NAVBAR = '.navbar';
   var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
   var SELECTOR_DROPDOWN_MENU_ACTIVE = '.dropdown-menu.show';
   var SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]';
   var CLASS_NAME_DROPDOWN_RIGHT = 'dropdown-menu-right';
   var CLASS_NAME_DROPDOWN_SUBMENU = 'dropdown-submenu'; // TODO: this is unused; should be removed along with the extend?

   var Default$9 = {};
   /**
    * Class Definition
    * ====================================================
    */

   var Dropdown = /*#__PURE__*/function () {
     function Dropdown(element, config) {
       this._config = config;
       this._element = element;
     } // Public


     var _proto = Dropdown.prototype;

     _proto.toggleSubmenu = function toggleSubmenu() {
       this._element.siblings().show().toggleClass('show');

       if (!this._element.next().hasClass('show')) {
         this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide();
       }

       this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
         $__default['default']('.dropdown-submenu .show').removeClass('show').hide();
       });
     };

     _proto.fixPosition = function fixPosition() {
       var $element = $__default['default'](SELECTOR_DROPDOWN_MENU_ACTIVE);

       if ($element.length === 0) {
         return;
       }

       if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
         $element.css({
           left: 'inherit',
           right: 0
         });
       } else {
         $element.css({
           left: 0,
           right: 'inherit'
         });
       }

       var offset = $element.offset();
       var width = $element.width();
       var visiblePart = $__default['default'](window).width() - offset.left;

       if (offset.left < 0) {
         $element.css({
           left: 'inherit',
           right: offset.left - 5
         });
       } else if (visiblePart < width) {
         $element.css({
           left: 'inherit',
           right: 0
         });
       }
     } // Static
     ;

     Dropdown._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$a);

         var _config = $__default['default'].extend({}, Default$9, $__default['default'](this).data());

         if (!data) {
           data = new Dropdown($__default['default'](this), _config);
           $__default['default'](this).data(DATA_KEY$a, data);
         }

         if (config === 'toggleSubmenu' || config === 'fixPosition') {
           data[config]();
         }
       });
     };

     return Dropdown;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](SELECTOR_DROPDOWN_MENU + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
     event.preventDefault();
     event.stopPropagation();

     Dropdown._jQueryInterface.call($__default['default'](this), 'toggleSubmenu');
   });
   $__default['default'](SELECTOR_NAVBAR + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
     event.preventDefault();

     if ($__default['default'](event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
       return;
     }

     setTimeout(function () {
       Dropdown._jQueryInterface.call($__default['default'](this), 'fixPosition');
     }, 1);
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$a] = Dropdown._jQueryInterface;
   $__default['default'].fn[NAME$a].Constructor = Dropdown;

   $__default['default'].fn[NAME$a].noConflict = function () {
     $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
     return Dropdown._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE ExpandableTable.js
    * License MIT
    * --------------------------------------------
    */
   /**
     * Constants
     * ====================================================
     */

   var NAME$9 = 'ExpandableTable';
   var DATA_KEY$9 = 'lte.expandableTable';
   var EVENT_KEY$3 = "." + DATA_KEY$9;
   var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
   var EVENT_EXPANDED$1 = "expanded" + EVENT_KEY$3;
   var EVENT_COLLAPSED$2 = "collapsed" + EVENT_KEY$3;
   var SELECTOR_TABLE = '.expandable-table';
   var SELECTOR_EXPANDABLE_BODY = '.expandable-body';
   var SELECTOR_DATA_TOGGLE$2 = '[data-widget="expandable-table"]';
   var SELECTOR_ARIA_ATTR = 'aria-expanded';
   /**
     * Class Definition
     * ====================================================
     */

   var ExpandableTable = /*#__PURE__*/function () {
     function ExpandableTable(element, options) {
       this._options = options;
       this._element = element;
     } // Public


     var _proto = ExpandableTable.prototype;

     _proto.init = function init() {
       $__default['default'](SELECTOR_DATA_TOGGLE$2).each(function (_, $header) {
         var $type = $__default['default']($header).attr(SELECTOR_ARIA_ATTR);
         var $body = $__default['default']($header).next(SELECTOR_EXPANDABLE_BODY).children().first().children();

         if ($type === 'true') {
           $body.show();
         } else if ($type === 'false') {
           $body.hide();
           $body.parent().parent().addClass('d-none');
         }
       });
     };

     _proto.toggleRow = function toggleRow() {
       var $element = this._element;
       var time = 500;
       var $type = $element.attr(SELECTOR_ARIA_ATTR);
       var $body = $element.next(SELECTOR_EXPANDABLE_BODY).children().first().children();
       $body.stop();

       if ($type === 'true') {
         $body.slideUp(time, function () {
           $element.next(SELECTOR_EXPANDABLE_BODY).addClass('d-none');
         });
         $element.attr(SELECTOR_ARIA_ATTR, 'false');
         $element.trigger($__default['default'].Event(EVENT_COLLAPSED$2));
       } else if ($type === 'false') {
         $element.next(SELECTOR_EXPANDABLE_BODY).removeClass('d-none');
         $body.slideDown(time);
         $element.attr(SELECTOR_ARIA_ATTR, 'true');
         $element.trigger($__default['default'].Event(EVENT_EXPANDED$1));
       }
     } // Static
     ;

     ExpandableTable._jQueryInterface = function _jQueryInterface(operation) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$9);

         if (!data) {
           data = new ExpandableTable($__default['default'](this));
           $__default['default'](this).data(DATA_KEY$9, data);
         }

         if (typeof operation === 'string' && /init|toggleRow/.test(operation)) {
           data[operation]();
         }
       });
     };

     return ExpandableTable;
   }();
   /**
     * Data API
     * ====================================================
     */


   $__default['default'](SELECTOR_TABLE).ready(function () {
     ExpandableTable._jQueryInterface.call($__default['default'](this), 'init');
   });
   $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$2, function () {
     ExpandableTable._jQueryInterface.call($__default['default'](this), 'toggleRow');
   });
   /**
     * jQuery API
     * ====================================================
     */

   $__default['default'].fn[NAME$9] = ExpandableTable._jQueryInterface;
   $__default['default'].fn[NAME$9].Constructor = ExpandableTable;

   $__default['default'].fn[NAME$9].noConflict = function () {
     $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
     return ExpandableTable._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE Fullscreen.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$8 = 'Fullscreen';
   var DATA_KEY$8 = 'lte.fullscreen';
   var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
   var SELECTOR_DATA_WIDGET$2 = '[data-widget="fullscreen"]';
   var SELECTOR_ICON = SELECTOR_DATA_WIDGET$2 + " i";
   var Default$8 = {
     minimizeIcon: 'fa-compress-arrows-alt',
     maximizeIcon: 'fa-expand-arrows-alt'
   };
   /**
    * Class Definition
    * ====================================================
    */

   var Fullscreen = /*#__PURE__*/function () {
     function Fullscreen(_element, _options) {
       this.element = _element;
       this.options = $__default['default'].extend({}, Default$8, _options);
     } // Public


     var _proto = Fullscreen.prototype;

     _proto.toggle = function toggle() {
       if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
         this.windowed();
       } else {
         this.fullscreen();
       }
     };

     _proto.fullscreen = function fullscreen() {
       if (document.documentElement.requestFullscreen) {
         document.documentElement.requestFullscreen();
       } else if (document.documentElement.webkitRequestFullscreen) {
         document.documentElement.webkitRequestFullscreen();
       } else if (document.documentElement.msRequestFullscreen) {
         document.documentElement.msRequestFullscreen();
       }

       $__default['default'](SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
     };

     _proto.windowed = function windowed() {
       if (document.exitFullscreen) {
         document.exitFullscreen();
       } else if (document.webkitExitFullscreen) {
         document.webkitExitFullscreen();
       } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
       }

       $__default['default'](SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
     } // Static
     ;

     Fullscreen._jQueryInterface = function _jQueryInterface(config) {
       var data = $__default['default'](this).data(DATA_KEY$8);

       if (!data) {
         data = $__default['default'](this).data();
       }

       var _options = $__default['default'].extend({}, Default$8, typeof config === 'object' ? config : data);

       var plugin = new Fullscreen($__default['default'](this), _options);
       $__default['default'](this).data(DATA_KEY$8, typeof config === 'object' ? config : data);

       if (typeof config === 'string' && /toggle|fullscreen|windowed/.test(config)) {
         plugin[config]();
       } else {
         plugin.init();
       }
     };

     return Fullscreen;
   }();
   /**
     * Data API
     * ====================================================
     */


   $__default['default'](document).on('click', SELECTOR_DATA_WIDGET$2, function () {
     Fullscreen._jQueryInterface.call($__default['default'](this), 'toggle');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$8] = Fullscreen._jQueryInterface;
   $__default['default'].fn[NAME$8].Constructor = Fullscreen;

   $__default['default'].fn[NAME$8].noConflict = function () {
     $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
     return Fullscreen._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE IFrame.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$7 = 'IFrame';
   var DATA_KEY$7 = 'lte.iframe';
   var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
   var SELECTOR_DATA_TOGGLE$1 = '[data-widget="iframe"]';
   var SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]';
   var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]';
   var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]';
   var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]';
   var SELECTOR_CONTENT_WRAPPER = '.content-wrapper';
   var SELECTOR_CONTENT_IFRAME = SELECTOR_CONTENT_WRAPPER + " iframe";
   var SELECTOR_TAB_NAV = SELECTOR_DATA_TOGGLE$1 + ".iframe-mode .nav";
   var SELECTOR_TAB_NAVBAR_NAV = SELECTOR_DATA_TOGGLE$1 + ".iframe-mode .navbar-nav";
   var SELECTOR_TAB_NAVBAR_NAV_ITEM = SELECTOR_TAB_NAVBAR_NAV + " .nav-item";
   var SELECTOR_TAB_NAVBAR_NAV_LINK = SELECTOR_TAB_NAVBAR_NAV + " .nav-link";
   var SELECTOR_TAB_CONTENT = SELECTOR_DATA_TOGGLE$1 + ".iframe-mode .tab-content";
   var SELECTOR_TAB_EMPTY = SELECTOR_TAB_CONTENT + " .tab-empty";
   var SELECTOR_TAB_LOADING = SELECTOR_TAB_CONTENT + " .tab-loading";
   var SELECTOR_TAB_PANE = SELECTOR_TAB_CONTENT + " .tab-pane";
   var SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link';
   var SELECTOR_SIDEBAR_SEARCH_ITEM = '.sidebar-search-results .list-group-item';
   var SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link';
   var SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item';
   var CLASS_NAME_IFRAME_MODE = 'iframe-mode';
   var CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen';
   var Default$7 = {
     onTabClick: function onTabClick(item) {
       return item;
     },
     onTabChanged: function onTabChanged(item) {
       return item;
     },
     onTabCreated: function onTabCreated(item) {
       return item;
     },
     autoIframeMode: true,
     autoItemActive: true,
     autoShowNewTab: true,
     allowDuplicates: false,
     loadingScreen: true,
     useNavbarItems: true,
     scrollOffset: 40,
     scrollBehaviorSwap: false,
     iconMaximize: 'fa-expand',
     iconMinimize: 'fa-compress'
   };
   /**
    * Class Definition
    * ====================================================
    */

   var IFrame = /*#__PURE__*/function () {
     function IFrame(element, config) {
       this._config = config;
       this._element = element;

       this._init();
     } // Public


     var _proto = IFrame.prototype;

     _proto.onTabClick = function onTabClick(item) {
       this._config.onTabClick(item);
     };

     _proto.onTabChanged = function onTabChanged(item) {
       this._config.onTabChanged(item);
     };

     _proto.onTabCreated = function onTabCreated(item) {
       this._config.onTabCreated(item);
     };

     _proto.createTab = function createTab(title, link, uniqueName, autoOpen) {
       var _this = this;

       var tabId = "panel-" + uniqueName;
       var navId = "tab-" + uniqueName;

       if (this._config.allowDuplicates) {
         tabId += "-" + Math.floor(Math.random() * 1000);
         navId += "-" + Math.floor(Math.random() * 1000);
       }

       var newNavItem = "<li class=\"nav-item\" role=\"presentation\"><a href=\"#\" class=\"btn-iframe-close\" data-widget=\"iframe-close\" data-type=\"only-this\"><i class=\"fas fa-times\"></i></a><a class=\"nav-link\" data-toggle=\"row\" id=\"" + navId + "\" href=\"#" + tabId + "\" role=\"tab\" aria-controls=\"" + tabId + "\" aria-selected=\"false\">" + title + "</a></li>";
       $__default['default'](SELECTOR_TAB_NAVBAR_NAV).append(unescape(escape(newNavItem)));
       var newTabItem = "<div class=\"tab-pane fade\" id=\"" + tabId + "\" role=\"tabpanel\" aria-labelledby=\"" + navId + "\"><iframe src=\"" + link + "\"></iframe></div>";
       $__default['default'](SELECTOR_TAB_CONTENT).append(unescape(escape(newTabItem)));

       if (autoOpen) {
         if (this._config.loadingScreen) {
           var $loadingScreen = $__default['default'](SELECTOR_TAB_LOADING);
           $loadingScreen.fadeIn();
           $__default['default'](tabId + " iframe").ready(function () {
             if (typeof _this._config.loadingScreen === 'number') {
               _this.switchTab("#" + navId);

               setTimeout(function () {
                 $loadingScreen.fadeOut();
               }, _this._config.loadingScreen);
             } else {
               _this.switchTab("#" + navId);

               $loadingScreen.fadeOut();
             }
           });
         } else {
           this.switchTab("#" + navId);
         }
       }

       this.onTabCreated($__default['default']("#" + navId));
     };

     _proto.openTabSidebar = function openTabSidebar(item, autoOpen) {
       if (autoOpen === void 0) {
         autoOpen = this._config.autoShowNewTab;
       }

       var $item = $__default['default'](item).clone();

       if ($item.attr('href') === undefined) {
         $item = $__default['default'](item).parent('a').clone();
       }

       $item.find('.right, .search-path').remove();
       var title = $item.find('p').text();

       if (title === '') {
         title = $item.text();
       }

       var link = $item.attr('href');

       if (link === '#' || link === '' || link === undefined) {
         return;
       }

       var uniqueName = link.replace('./', '').replace(/["&'./:=?[\]]/gi, '-').replace(/(--)/gi, '');
       var navId = "tab-" + uniqueName;

       if (!this._config.allowDuplicates && $__default['default']("#" + navId).length > 0) {
         return this.switchTab("#" + navId);
       }

       if (!this._config.allowDuplicates && $__default['default']("#" + navId).length === 0 || this._config.allowDuplicates) {
         this.createTab(title, link, uniqueName, autoOpen);
       }
     };

     _proto.switchTab = function switchTab(item) {
       var $item = $__default['default'](item);
       var tabId = $item.attr('href');
       $__default['default'](SELECTOR_TAB_EMPTY).hide();
       $__default['default'](SELECTOR_TAB_NAVBAR_NAV + " .active").tab('dispose').removeClass('active');

       this._fixHeight();

       $item.tab('show');
       $item.parents('li').addClass('active');
       this.onTabChanged($item);

       if (this._config.autoItemActive) {
         this._setItemActive($__default['default'](tabId + " iframe").attr('src'));
       }
     };

     _proto.removeActiveTab = function removeActiveTab(type, element) {
       if (type == 'all') {
         $__default['default'](SELECTOR_TAB_NAVBAR_NAV_ITEM).remove();
         $__default['default'](SELECTOR_TAB_PANE).remove();
         $__default['default'](SELECTOR_TAB_EMPTY).show();
       } else if (type == 'all-other') {
         $__default['default'](SELECTOR_TAB_NAVBAR_NAV_ITEM + ":not(.active)").remove();
         $__default['default'](SELECTOR_TAB_PANE + ":not(.active)").remove();
       } else if (type == 'only-this') {
         var $navClose = $__default['default'](element);
         var $navItem = $navClose.parent('.nav-item');
         var $navItemParent = $navItem.parent();
         var navItemIndex = $navItem.index();
         var tabId = $navClose.siblings('.nav-link').attr('aria-controls');
         $navItem.remove();
         $__default['default']("#" + tabId).remove();

         if ($__default['default'](SELECTOR_TAB_CONTENT).children().length == $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
           $__default['default'](SELECTOR_TAB_EMPTY).show();
         } else {
           var prevNavItemIndex = navItemIndex - 1;
           this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a.nav-link'));
         }
       } else {
         var _$navItem = $__default['default'](SELECTOR_TAB_NAVBAR_NAV_ITEM + ".active");

         var _$navItemParent = _$navItem.parent();

         var _navItemIndex = _$navItem.index();

         _$navItem.remove();

         $__default['default'](SELECTOR_TAB_PANE + ".active").remove();

         if ($__default['default'](SELECTOR_TAB_CONTENT).children().length == $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
           $__default['default'](SELECTOR_TAB_EMPTY).show();
         } else {
           var _prevNavItemIndex = _navItemIndex - 1;

           this.switchTab(_$navItemParent.children().eq(_prevNavItemIndex).find('a.nav-link'));
         }
       }
     };

     _proto.toggleFullscreen = function toggleFullscreen() {
       if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
         $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
         $__default['default']('body').removeClass(CLASS_NAME_FULLSCREEN_MODE);
         $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height('auto');
         $__default['default'](SELECTOR_CONTENT_WRAPPER).height('auto');
         $__default['default'](SELECTOR_CONTENT_IFRAME).height('auto');
       } else {
         $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
         $__default['default']('body').addClass(CLASS_NAME_FULLSCREEN_MODE);
       }

       $__default['default'](window).trigger('resize');

       this._fixHeight(true);
     } // Private
     ;

     _proto._init = function _init() {
       if (window.frameElement && this._config.autoIframeMode) {
         $__default['default']('body').addClass(CLASS_NAME_IFRAME_MODE);
       } else if ($__default['default'](SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE)) {
         if ($__default['default'](SELECTOR_TAB_CONTENT).children().length > 2) {
           var $el = $__default['default'](SELECTOR_TAB_PANE + ":first-child");
           $el.show();

           this._setItemActive($el.find('iframe').attr('src'));
         }

         this._setupListeners();

         this._fixHeight(true);
       }
     };

     _proto._navScroll = function _navScroll(offset) {
       var leftPos = $__default['default'](SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
       $__default['default'](SELECTOR_TAB_NAVBAR_NAV).animate({
         scrollLeft: leftPos + offset
       }, 250, 'linear');
     };

     _proto._setupListeners = function _setupListeners() {
       var _this2 = this;

       $__default['default'](window).on('resize', function () {
         setTimeout(function () {
           _this2._fixHeight();
         }, 1);
       });
       $__default['default'](document).on('click', SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_SIDEBAR_SEARCH_ITEM, function (e) {
         e.preventDefault();

         _this2.openTabSidebar(e.target);
       });

       if (this._config.useNavbarItems) {
         $__default['default'](document).on('click', SELECTOR_HEADER_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM, function (e) {
           e.preventDefault();

           _this2.openTabSidebar(e.target);
         });
       }

       $__default['default'](document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, function (e) {
         e.preventDefault();

         _this2.onTabClick(e.target);

         _this2.switchTab(e.target);
       });
       $__default['default'](document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, function (e) {
         e.preventDefault();

         _this2.onTabClick(e.target);

         _this2.switchTab(e.target);
       });
       $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_CLOSE, function (e) {
         e.preventDefault();
         var target = e.target;

         if (target.nodeName == 'I') {
           target = e.target.offsetParent;
         }

         _this2.removeActiveTab(target.attributes['data-type'] ? target.attributes['data-type'].nodeValue : null, target);
       });
       $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_FULLSCREEN, function (e) {
         e.preventDefault();

         _this2.toggleFullscreen();
       });
       var mousedown = false;
       var mousedownInterval = null;
       $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, function (e) {
         e.preventDefault();
         clearInterval(mousedownInterval);
         var scrollOffset = _this2._config.scrollOffset;

         if (!_this2._config.scrollBehaviorSwap) {
           scrollOffset = -scrollOffset;
         }

         mousedown = true;

         _this2._navScroll(scrollOffset);

         mousedownInterval = setInterval(function () {
           _this2._navScroll(scrollOffset);
         }, 250);
       });
       $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, function (e) {
         e.preventDefault();
         clearInterval(mousedownInterval);
         var scrollOffset = _this2._config.scrollOffset;

         if (_this2._config.scrollBehaviorSwap) {
           scrollOffset = -scrollOffset;
         }

         mousedown = true;

         _this2._navScroll(scrollOffset);

         mousedownInterval = setInterval(function () {
           _this2._navScroll(scrollOffset);
         }, 250);
       });
       $__default['default'](document).on('mouseup', function () {
         if (mousedown) {
           mousedown = false;
           clearInterval(mousedownInterval);
           mousedownInterval = null;
         }
       });
     };

     _proto._setItemActive = function _setItemActive(href) {
       $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM).removeClass('active');
       $__default['default'](SELECTOR_HEADER_MENU_ITEM).parent().removeClass('active');
       var $headerMenuItem = $__default['default'](SELECTOR_HEADER_MENU_ITEM + "[href$=\"" + href + "\"]");
       var $headerDropdownItem = $__default['default'](SELECTOR_HEADER_DROPDOWN_ITEM + "[href$=\"" + href + "\"]");
       var $sidebarMenuItem = $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + "[href$=\"" + href + "\"]");
       $headerMenuItem.each(function (i, e) {
         $__default['default'](e).parent().addClass('active');
       });
       $headerDropdownItem.each(function (i, e) {
         $__default['default'](e).addClass('active');
       });
       $sidebarMenuItem.each(function (i, e) {
         $__default['default'](e).addClass('active');
         $__default['default'](e).parents('.nav-treeview').prevAll('.nav-link').addClass('active');
       });
     };

     _proto._fixHeight = function _fixHeight(tabEmpty) {
       if (tabEmpty === void 0) {
         tabEmpty = false;
       }

       if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
         var windowHeight = $__default['default'](window).height();
         var navbarHeight = $__default['default'](SELECTOR_TAB_NAV).outerHeight();
         $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING + ", " + SELECTOR_CONTENT_IFRAME).height(windowHeight - navbarHeight);
         $__default['default'](SELECTOR_CONTENT_WRAPPER).height(windowHeight);
       } else {
         var contentWrapperHeight = parseFloat($__default['default'](SELECTOR_CONTENT_WRAPPER).css('height'));

         var _navbarHeight = $__default['default'](SELECTOR_TAB_NAV).outerHeight();

         if (tabEmpty == true) {
           setTimeout(function () {
             $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(contentWrapperHeight - _navbarHeight);
           }, 50);
         } else {
           $__default['default'](SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - _navbarHeight);
         }
       }
     } // Static
     ;

     IFrame._jQueryInterface = function _jQueryInterface(operation) {
       var data = $__default['default'](this).data(DATA_KEY$7);

       var _options = $__default['default'].extend({}, Default$7, $__default['default'](this).data());

       if (!data) {
         data = new IFrame(this, _options);
         $__default['default'](this).data(DATA_KEY$7, data);
       }

       if (typeof operation === 'string' && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(operation)) {
         var _data;

         for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
           args[_key - 1] = arguments[_key];
         }

         (_data = data)[operation].apply(_data, args);
       }
     };

     return IFrame;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](window).on('load', function () {
     IFrame._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$1));
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$7] = IFrame._jQueryInterface;
   $__default['default'].fn[NAME$7].Constructor = IFrame;

   $__default['default'].fn[NAME$7].noConflict = function () {
     $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
     return IFrame._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE Layout.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$6 = 'Layout';
   var DATA_KEY$6 = 'lte.layout';
   var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
   var SELECTOR_HEADER = '.main-header';
   var SELECTOR_MAIN_SIDEBAR = '.main-sidebar';
   var SELECTOR_SIDEBAR$1 = '.main-sidebar .sidebar';
   var SELECTOR_CONTENT = '.content-wrapper';
   var SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content';
   var SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]';
   var SELECTOR_FOOTER = '.main-footer';
   var SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]';
   var SELECTOR_LOGIN_BOX = '.login-box';
   var SELECTOR_REGISTER_BOX = '.register-box';
   var SELECTOR_PRELOADER = '.preloader';
   var CLASS_NAME_SIDEBAR_COLLAPSED$1 = 'sidebar-collapse';
   var CLASS_NAME_SIDEBAR_FOCUSED = 'sidebar-focused';
   var CLASS_NAME_LAYOUT_FIXED = 'layout-fixed';
   var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open';
   var CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open';
   var Default$6 = {
     scrollbarTheme: 'os-theme-light',
     scrollbarAutoHide: 'l',
     panelAutoHeight: true,
     panelAutoHeightMode: 'min-height',
     preloadDuration: 200,
     loginRegisterAutoHeight: true
   };
   /**
    * Class Definition
    * ====================================================
    */

   var Layout = /*#__PURE__*/function () {
     function Layout(element, config) {
       this._config = config;
       this._element = element;
     } // Public


     var _proto = Layout.prototype;

     _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
       if (extra === void 0) {
         extra = null;
       }

       var $body = $__default['default']('body');
       var controlSidebar = 0;

       if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || extra === 'control_sidebar') {
         controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR_CONTENT).outerHeight();
       }

       var heights = {
         window: $__default['default'](window).height(),
         header: $__default['default'](SELECTOR_HEADER).length > 0 ? $__default['default'](SELECTOR_HEADER).outerHeight() : 0,
         footer: $__default['default'](SELECTOR_FOOTER).length > 0 ? $__default['default'](SELECTOR_FOOTER).outerHeight() : 0,
         sidebar: $__default['default'](SELECTOR_SIDEBAR$1).length > 0 ? $__default['default'](SELECTOR_SIDEBAR$1).height() : 0,
         controlSidebar: controlSidebar
       };

       var max = this._max(heights);

       var offset = this._config.panelAutoHeight;

       if (offset === true) {
         offset = 0;
       }

       var $contentSelector = $__default['default'](SELECTOR_CONTENT);

       if (offset !== false) {
         if (max === heights.controlSidebar) {
           $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
         } else if (max === heights.window) {
           $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
         } else {
           $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
         }

         if (this._isFooterFixed()) {
           $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
         }
       }

       if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
         return;
       }

       if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
         $__default['default'](SELECTOR_SIDEBAR$1).overlayScrollbars({
           className: this._config.scrollbarTheme,
           sizeAutoCapable: true,
           scrollbars: {
             autoHide: this._config.scrollbarAutoHide,
             clickScrolling: true
           }
         });
       } else {
         $__default['default'](SELECTOR_SIDEBAR$1).css('overflow-y', 'auto');
       }
     };

     _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
       var $body = $__default['default']('body');
       var $selector = $__default['default'](SELECTOR_LOGIN_BOX + ", " + SELECTOR_REGISTER_BOX);

       if ($selector.length === 0) {
         $body.css('height', 'auto');
         $__default['default']('html').css('height', 'auto');
       } else {
         var boxHeight = $selector.height();

         if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
           $body.css(this._config.panelAutoHeightMode, boxHeight);
         }
       }
     } // Private
     ;

     _proto._init = function _init() {
       var _this = this;

       // Activate layout height watcher
       this.fixLayoutHeight();

       if (this._config.loginRegisterAutoHeight === true) {
         this.fixLoginRegisterHeight();
       } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
         setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
       }

       $__default['default'](SELECTOR_SIDEBAR$1).on('collapsed.lte.treeview expanded.lte.treeview', function () {
         _this.fixLayoutHeight();
       });
       $__default['default'](SELECTOR_MAIN_SIDEBAR).on('mouseenter mouseleave', function () {
         if ($__default['default']('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED$1)) {
           _this.fixLayoutHeight();
         }
       });
       $__default['default'](SELECTOR_PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
         setTimeout(function () {
           _this.fixLayoutHeight();
         }, 300);
       });
       $__default['default'](SELECTOR_CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
         _this.fixLayoutHeight();
       }).on('expanded.lte.controlsidebar', function () {
         _this.fixLayoutHeight('control_sidebar');
       });
       $__default['default'](window).resize(function () {
         _this.fixLayoutHeight();
       });
       setTimeout(function () {
         $__default['default']('body.hold-transition').removeClass('hold-transition');
       }, 50);
       setTimeout(function () {
         var $preloader = $__default['default'](SELECTOR_PRELOADER);

         if ($preloader) {
           $preloader.css('height', 0);
           setTimeout(function () {
             $preloader.children().hide();
           }, 200);
         }
       }, this._config.preloadDuration);
     };

     _proto._max = function _max(numbers) {
       // Calculate the maximum number in a list
       var max = 0;
       Object.keys(numbers).forEach(function (key) {
         if (numbers[key] > max) {
           max = numbers[key];
         }
       });
       return max;
     };

     _proto._isFooterFixed = function _isFooterFixed() {
       return $__default['default'](SELECTOR_FOOTER).css('position') === 'fixed';
     } // Static
     ;

     Layout._jQueryInterface = function _jQueryInterface(config) {
       if (config === void 0) {
         config = '';
       }

       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$6);

         var _options = $__default['default'].extend({}, Default$6, $__default['default'](this).data());

         if (!data) {
           data = new Layout($__default['default'](this), _options);
           $__default['default'](this).data(DATA_KEY$6, data);
         }

         if (config === 'init' || config === '') {
           data._init();
         } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
           data[config]();
         }
       });
     };

     return Layout;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](window).on('load', function () {
     Layout._jQueryInterface.call($__default['default']('body'));
   });
   $__default['default'](SELECTOR_SIDEBAR$1 + " a").on('focusin', function () {
     $__default['default'](SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
   }).on('focusout', function () {
     $__default['default'](SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$6] = Layout._jQueryInterface;
   $__default['default'].fn[NAME$6].Constructor = Layout;

   $__default['default'].fn[NAME$6].noConflict = function () {
     $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
     return Layout._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE PushMenu.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$5 = 'PushMenu';
   var DATA_KEY$5 = 'lte.pushmenu';
   var EVENT_KEY$2 = "." + DATA_KEY$5;
   var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
   var EVENT_COLLAPSED$1 = "collapsed" + EVENT_KEY$2;
   var EVENT_SHOWN = "shown" + EVENT_KEY$2;
   var SELECTOR_TOGGLE_BUTTON$1 = '[data-widget="pushmenu"]';
   var SELECTOR_BODY = 'body';
   var SELECTOR_OVERLAY = '#sidebar-overlay';
   var SELECTOR_WRAPPER = '.wrapper';
   var CLASS_NAME_COLLAPSED = 'sidebar-collapse';
   var CLASS_NAME_OPEN$3 = 'sidebar-open';
   var CLASS_NAME_IS_OPENING$1 = 'sidebar-is-opening';
   var CLASS_NAME_CLOSED = 'sidebar-closed';
   var Default$5 = {
     autoCollapseSize: 992,
     enableRemember: false,
     noTransitionAfterReload: true
   };
   /**
    * Class Definition
    * ====================================================
    */

   var PushMenu = /*#__PURE__*/function () {
     function PushMenu(element, options) {
       this._element = element;
       this._options = $__default['default'].extend({}, Default$5, options);

       if ($__default['default'](SELECTOR_OVERLAY).length === 0) {
         this._addOverlay();
       }

       this._init();
     } // Public


     var _proto = PushMenu.prototype;

     _proto.expand = function expand() {
       var $bodySelector = $__default['default'](SELECTOR_BODY);

       if (this._options.autoCollapseSize && $__default['default'](window).width() <= this._options.autoCollapseSize) {
         $bodySelector.addClass(CLASS_NAME_OPEN$3);
       }

       $bodySelector.addClass(CLASS_NAME_IS_OPENING$1).removeClass(CLASS_NAME_COLLAPSED + " " + CLASS_NAME_CLOSED).delay(50).queue(function () {
         $bodySelector.removeClass(CLASS_NAME_IS_OPENING$1);
         $__default['default'](this).dequeue();
       });

       if (this._options.enableRemember) {
         localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_OPEN$3);
       }

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_SHOWN));
     };

     _proto.collapse = function collapse() {
       var $bodySelector = $__default['default'](SELECTOR_BODY);

       if (this._options.autoCollapseSize && $__default['default'](window).width() <= this._options.autoCollapseSize) {
         $bodySelector.removeClass(CLASS_NAME_OPEN$3).addClass(CLASS_NAME_CLOSED);
       }

       $bodySelector.addClass(CLASS_NAME_COLLAPSED);

       if (this._options.enableRemember) {
         localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_COLLAPSED);
       }

       $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$1));
     };

     _proto.toggle = function toggle() {
       if ($__default['default'](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED)) {
         this.expand();
       } else {
         this.collapse();
       }
     };

     _proto.autoCollapse = function autoCollapse(resize) {
       if (resize === void 0) {
         resize = false;
       }

       if (!this._options.autoCollapseSize) {
         return;
       }

       var $bodySelector = $__default['default'](SELECTOR_BODY);

       if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
         if (!$bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
           this.collapse();
         }
       } else if (resize === true) {
         if ($bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
           $bodySelector.removeClass(CLASS_NAME_OPEN$3);
         } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
           this.expand();
         }
       }
     };

     _proto.remember = function remember() {
       if (!this._options.enableRemember) {
         return;
       }

       var $body = $__default['default']('body');
       var toggleState = localStorage.getItem("remember" + EVENT_KEY$2);

       if (toggleState === CLASS_NAME_COLLAPSED) {
         if (this._options.noTransitionAfterReload) {
           $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
             $__default['default'](this).removeClass('hold-transition');
             $__default['default'](this).dequeue();
           });
         } else {
           $body.addClass(CLASS_NAME_COLLAPSED);
         }
       } else if (this._options.noTransitionAfterReload) {
         $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
           $__default['default'](this).removeClass('hold-transition');
           $__default['default'](this).dequeue();
         });
       } else {
         $body.removeClass(CLASS_NAME_COLLAPSED);
       }
     } // Private
     ;

     _proto._init = function _init() {
       var _this = this;

       this.remember();
       this.autoCollapse();
       $__default['default'](window).resize(function () {
         _this.autoCollapse(true);
       });
     };

     _proto._addOverlay = function _addOverlay() {
       var _this2 = this;

       var overlay = $__default['default']('<div />', {
         id: 'sidebar-overlay'
       });
       overlay.on('click', function () {
         _this2.collapse();
       });
       $__default['default'](SELECTOR_WRAPPER).append(overlay);
     } // Static
     ;

     PushMenu._jQueryInterface = function _jQueryInterface(operation) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$5);

         var _options = $__default['default'].extend({}, Default$5, $__default['default'](this).data());

         if (!data) {
           data = new PushMenu(this, _options);
           $__default['default'](this).data(DATA_KEY$5, data);
         }

         if (typeof operation === 'string' && /collapse|expand|toggle/.test(operation)) {
           data[operation]();
         }
       });
     };

     return PushMenu;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_TOGGLE_BUTTON$1, function (event) {
     event.preventDefault();
     var button = event.currentTarget;

     if ($__default['default'](button).data('widget') !== 'pushmenu') {
       button = $__default['default'](button).closest(SELECTOR_TOGGLE_BUTTON$1);
     }

     PushMenu._jQueryInterface.call($__default['default'](button), 'toggle');
   });
   $__default['default'](window).on('load', function () {
     PushMenu._jQueryInterface.call($__default['default'](SELECTOR_TOGGLE_BUTTON$1));
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$5] = PushMenu._jQueryInterface;
   $__default['default'].fn[NAME$5].Constructor = PushMenu;

   $__default['default'].fn[NAME$5].noConflict = function () {
     $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
     return PushMenu._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE SidebarSearch.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$4 = 'SidebarSearch';
   var DATA_KEY$4 = 'lte.sidebar-search';
   var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
   var CLASS_NAME_OPEN$2 = 'sidebar-search-open';
   var CLASS_NAME_ICON_SEARCH = 'fa-search';
   var CLASS_NAME_ICON_CLOSE = 'fa-times';
   var CLASS_NAME_HEADER = 'nav-header';
   var CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results';
   var CLASS_NAME_LIST_GROUP = 'list-group';
   var SELECTOR_DATA_WIDGET$1 = '[data-widget="sidebar-search"]';
   var SELECTOR_SIDEBAR = '.main-sidebar .nav-sidebar';
   var SELECTOR_NAV_LINK = '.nav-link';
   var SELECTOR_NAV_TREEVIEW = '.nav-treeview';
   var SELECTOR_SEARCH_INPUT$1 = SELECTOR_DATA_WIDGET$1 + " .form-control";
   var SELECTOR_SEARCH_BUTTON = SELECTOR_DATA_WIDGET$1 + " .btn";
   var SELECTOR_SEARCH_ICON = SELECTOR_SEARCH_BUTTON + " i";
   var SELECTOR_SEARCH_LIST_GROUP = "." + CLASS_NAME_LIST_GROUP;
   var SELECTOR_SEARCH_RESULTS = "." + CLASS_NAME_SEARCH_RESULTS;
   var SELECTOR_SEARCH_RESULTS_GROUP = SELECTOR_SEARCH_RESULTS + " ." + CLASS_NAME_LIST_GROUP;
   var Default$4 = {
     arrowSign: '->',
     minLength: 3,
     maxResults: 7,
     highlightName: true,
     highlightPath: false,
     highlightClass: 'text-light',
     notFoundText: 'No element found!'
   };
   var SearchItems = [];
   /**
    * Class Definition
    * ====================================================
    */

   var SidebarSearch = /*#__PURE__*/function () {
     function SidebarSearch(_element, _options) {
       this.element = _element;
       this.options = $__default['default'].extend({}, Default$4, _options);
       this.items = [];
     } // Public


     var _proto = SidebarSearch.prototype;

     _proto.init = function init() {
       var _this = this;

       if ($__default['default'](SELECTOR_DATA_WIDGET$1).length === 0) {
         return;
       }

       if ($__default['default'](SELECTOR_DATA_WIDGET$1).next(SELECTOR_SEARCH_RESULTS).length === 0) {
         $__default['default'](SELECTOR_DATA_WIDGET$1).after($__default['default']('<div />', {
           class: CLASS_NAME_SEARCH_RESULTS
         }));
       }

       if ($__default['default'](SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length === 0) {
         $__default['default'](SELECTOR_SEARCH_RESULTS).append($__default['default']('<div />', {
           class: CLASS_NAME_LIST_GROUP
         }));
       }

       this._addNotFound();

       $__default['default'](SELECTOR_SIDEBAR).children().each(function (i, child) {
         _this._parseItem(child);
       });
     };

     _proto.search = function search() {
       var _this2 = this;

       var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();

       if (searchValue.length < this.options.minLength) {
         $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

         this._addNotFound();

         this.close();
         return;
       }

       var searchResults = SearchItems.filter(function (item) {
         return item.name.toLowerCase().includes(searchValue);
       });
       var endResults = $__default['default'](searchResults.slice(0, this.options.maxResults));
       $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

       if (endResults.length === 0) {
         this._addNotFound();
       } else {
         endResults.each(function (i, result) {
           $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(_this2._renderItem(escape(result.name), escape(result.link), result.path));
         });
       }

       this.open();
     };

     _proto.open = function open() {
       $__default['default'](SELECTOR_DATA_WIDGET$1).parent().addClass(CLASS_NAME_OPEN$2);
       $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
     };

     _proto.close = function close() {
       $__default['default'](SELECTOR_DATA_WIDGET$1).parent().removeClass(CLASS_NAME_OPEN$2);
       $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
     };

     _proto.toggle = function toggle() {
       if ($__default['default'](SELECTOR_DATA_WIDGET$1).parent().hasClass(CLASS_NAME_OPEN$2)) {
         this.close();
       } else {
         this.open();
       }
     } // Private
     ;

     _proto._parseItem = function _parseItem(item, path) {
       var _this3 = this;

       if (path === void 0) {
         path = [];
       }

       if ($__default['default'](item).hasClass(CLASS_NAME_HEADER)) {
         return;
       }

       var itemObject = {};
       var navLink = $__default['default'](item).clone().find("> " + SELECTOR_NAV_LINK);
       var navTreeview = $__default['default'](item).clone().find("> " + SELECTOR_NAV_TREEVIEW);
       var link = navLink.attr('href');
       var name = navLink.find('p').children().remove().end().text();
       itemObject.name = this._trimText(name);
       itemObject.link = link;
       itemObject.path = path;

       if (navTreeview.length === 0) {
         SearchItems.push(itemObject);
       } else {
         var newPath = itemObject.path.concat([itemObject.name]);
         navTreeview.children().each(function (i, child) {
           _this3._parseItem(child, newPath);
         });
       }
     };

     _proto._trimText = function _trimText(text) {
       return $.trim(text.replace(/(\r\n|\n|\r)/gm, ' '));
     };

     _proto._renderItem = function _renderItem(name, link, path) {
       var _this4 = this;

       path = path.join(" " + this.options.arrowSign + " ");
       name = unescape(name);

       if (this.options.highlightName || this.options.highlightPath) {
         var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();
         var regExp = new RegExp(searchValue, 'gi');

         if (this.options.highlightName) {
           name = name.replace(regExp, function (str) {
             return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
           });
         }

         if (this.options.highlightPath) {
           path = path.replace(regExp, function (str) {
             return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
           });
         }
       }

       var groupItemElement = $__default['default']('<a/>', {
         href: link,
         class: 'list-group-item'
       });
       var searchTitleElement = $__default['default']('<div/>', {
         class: 'search-title'
       }).html(name);
       var searchPathElement = $__default['default']('<div/>', {
         class: 'search-path'
       }).html(path);
       groupItemElement.append(searchTitleElement).append(searchPathElement);
       return groupItemElement;
     };

     _proto._addNotFound = function _addNotFound() {
       $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []));
     } // Static
     ;

     SidebarSearch._jQueryInterface = function _jQueryInterface(config) {
       var data = $__default['default'](this).data(DATA_KEY$4);

       if (!data) {
         data = $__default['default'](this).data();
       }

       var _options = $__default['default'].extend({}, Default$4, typeof config === 'object' ? config : data);

       var plugin = new SidebarSearch($__default['default'](this), _options);
       $__default['default'](this).data(DATA_KEY$4, typeof config === 'object' ? config : data);

       if (typeof config === 'string' && /init|toggle|close|open|search/.test(config)) {
         plugin[config]();
       } else {
         plugin.init();
       }
     };

     return SidebarSearch;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_SEARCH_BUTTON, function (event) {
     event.preventDefault();

     SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'toggle');
   });
   $__default['default'](document).on('keyup', SELECTOR_SEARCH_INPUT$1, function (event) {
     if (event.keyCode == 38) {
       event.preventDefault();
       $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
       return;
     }

     if (event.keyCode == 40) {
       event.preventDefault();
       $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus();
       return;
     }

     setTimeout(function () {
       SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'search');
     }, 100);
   });
   $__default['default'](document).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, function (event) {
     var $focused = $__default['default'](':focus');

     if (event.keyCode == 38) {
       event.preventDefault();

       if ($focused.is(':first-child')) {
         $focused.siblings().last().focus();
       } else {
         $focused.prev().focus();
       }
     }

     if (event.keyCode == 40) {
       event.preventDefault();

       if ($focused.is(':last-child')) {
         $focused.siblings().first().focus();
       } else {
         $focused.next().focus();
       }
     }
   });
   $__default['default'](window).on('load', function () {
     SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'init');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$4] = SidebarSearch._jQueryInterface;
   $__default['default'].fn[NAME$4].Constructor = SidebarSearch;

   $__default['default'].fn[NAME$4].noConflict = function () {
     $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
     return SidebarSearch._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE NavbarSearch.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$3 = 'NavbarSearch';
   var DATA_KEY$3 = 'lte.navbar-search';
   var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
   var SELECTOR_TOGGLE_BUTTON = '[data-widget="navbar-search"]';
   var SELECTOR_SEARCH_BLOCK = '.navbar-search-block';
   var SELECTOR_SEARCH_INPUT = '.form-control';
   var CLASS_NAME_OPEN$1 = 'navbar-search-open';
   var Default$3 = {
     resetOnClose: true,
     target: SELECTOR_SEARCH_BLOCK
   };
   /**
    * Class Definition
    * ====================================================
    */

   var NavbarSearch = /*#__PURE__*/function () {
     function NavbarSearch(_element, _options) {
       this._element = _element;
       this._config = $__default['default'].extend({}, Default$3, _options);
     } // Public


     var _proto = NavbarSearch.prototype;

     _proto.open = function open() {
       $__default['default'](this._config.target).css('display', 'flex').hide().fadeIn().addClass(CLASS_NAME_OPEN$1);
       $__default['default'](this._config.target + " " + SELECTOR_SEARCH_INPUT).focus();
     };

     _proto.close = function close() {
       $__default['default'](this._config.target).fadeOut().removeClass(CLASS_NAME_OPEN$1);

       if (this._config.resetOnClose) {
         $__default['default'](this._config.target + " " + SELECTOR_SEARCH_INPUT).val('');
       }
     };

     _proto.toggle = function toggle() {
       if ($__default['default'](this._config.target).hasClass(CLASS_NAME_OPEN$1)) {
         this.close();
       } else {
         this.open();
       }
     } // Static
     ;

     NavbarSearch._jQueryInterface = function _jQueryInterface(options) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$3);

         var _options = $__default['default'].extend({}, Default$3, $__default['default'](this).data());

         if (!data) {
           data = new NavbarSearch(this, _options);
           $__default['default'](this).data(DATA_KEY$3, data);
         }

         if (!/toggle|close|open/.test(options)) {
           throw new Error("Undefined method " + options);
         }

         data[options]();
       });
     };

     return NavbarSearch;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](document).on('click', SELECTOR_TOGGLE_BUTTON, function (event) {
     event.preventDefault();
     var button = $__default['default'](event.currentTarget);

     if (button.data('widget') !== 'navbar-search') {
       button = button.closest(SELECTOR_TOGGLE_BUTTON);
     }

     NavbarSearch._jQueryInterface.call(button, 'toggle');
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$3] = NavbarSearch._jQueryInterface;
   $__default['default'].fn[NAME$3].Constructor = NavbarSearch;

   $__default['default'].fn[NAME$3].noConflict = function () {
     $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
     return NavbarSearch._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE Toasts.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$2 = 'Toasts';
   var DATA_KEY$2 = 'lte.toasts';
   var EVENT_KEY$1 = "." + DATA_KEY$2;
   var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
   var EVENT_INIT = "init" + EVENT_KEY$1;
   var EVENT_CREATED = "created" + EVENT_KEY$1;
   var EVENT_REMOVED = "removed" + EVENT_KEY$1;
   var SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight';
   var SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft';
   var SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight';
   var SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft';
   var CLASS_NAME_TOP_RIGHT = 'toasts-top-right';
   var CLASS_NAME_TOP_LEFT = 'toasts-top-left';
   var CLASS_NAME_BOTTOM_RIGHT = 'toasts-bottom-right';
   var CLASS_NAME_BOTTOM_LEFT = 'toasts-bottom-left';
   var POSITION_TOP_RIGHT = 'topRight';
   var POSITION_TOP_LEFT = 'topLeft';
   var POSITION_BOTTOM_RIGHT = 'bottomRight';
   var POSITION_BOTTOM_LEFT = 'bottomLeft';
   var Default$2 = {
     position: POSITION_TOP_RIGHT,
     fixed: true,
     autohide: false,
     autoremove: true,
     delay: 1000,
     fade: true,
     icon: null,
     image: null,
     imageAlt: null,
     imageHeight: '25px',
     title: null,
     subtitle: null,
     close: true,
     body: null,
     class: null
   };
   /**
    * Class Definition
    * ====================================================
    */

   var Toasts = /*#__PURE__*/function () {
     function Toasts(element, config) {
       this._config = config;

       this._prepareContainer();

       $__default['default']('body').trigger($__default['default'].Event(EVENT_INIT));
     } // Public


     var _proto = Toasts.prototype;

     _proto.create = function create() {
       var toast = $__default['default']('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
       toast.data('autohide', this._config.autohide);
       toast.data('animation', this._config.fade);

       if (this._config.class) {
         toast.addClass(this._config.class);
       }

       if (this._config.delay && this._config.delay != 500) {
         toast.data('delay', this._config.delay);
       }

       var toastHeader = $__default['default']('<div class="toast-header">');

       if (this._config.image != null) {
         var toastImage = $__default['default']('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

         if (this._config.imageHeight != null) {
           toastImage.height(this._config.imageHeight).width('auto');
         }

         toastHeader.append(toastImage);
       }

       if (this._config.icon != null) {
         toastHeader.append($__default['default']('<i />').addClass('mr-2').addClass(this._config.icon));
       }

       if (this._config.title != null) {
         toastHeader.append($__default['default']('<strong />').addClass('mr-auto').html(this._config.title));
       }

       if (this._config.subtitle != null) {
         toastHeader.append($__default['default']('<small />').html(this._config.subtitle));
       }

       if (this._config.close == true) {
         var toastClose = $__default['default']('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

         if (this._config.title == null) {
           toastClose.toggleClass('ml-2 ml-auto');
         }

         toastHeader.append(toastClose);
       }

       toast.append(toastHeader);

       if (this._config.body != null) {
         toast.append($__default['default']('<div class="toast-body" />').html(this._config.body));
       }

       $__default['default'](this._getContainerId()).prepend(toast);
       var $body = $__default['default']('body');
       $body.trigger($__default['default'].Event(EVENT_CREATED));
       toast.toast('show');

       if (this._config.autoremove) {
         toast.on('hidden.bs.toast', function () {
           $__default['default'](this).delay(200).remove();
           $body.trigger($__default['default'].Event(EVENT_REMOVED));
         });
       }
     } // Static
     ;

     _proto._getContainerId = function _getContainerId() {
       if (this._config.position == POSITION_TOP_RIGHT) {
         return SELECTOR_CONTAINER_TOP_RIGHT;
       }

       if (this._config.position == POSITION_TOP_LEFT) {
         return SELECTOR_CONTAINER_TOP_LEFT;
       }

       if (this._config.position == POSITION_BOTTOM_RIGHT) {
         return SELECTOR_CONTAINER_BOTTOM_RIGHT;
       }

       if (this._config.position == POSITION_BOTTOM_LEFT) {
         return SELECTOR_CONTAINER_BOTTOM_LEFT;
       }
     };

     _proto._prepareContainer = function _prepareContainer() {
       if ($__default['default'](this._getContainerId()).length === 0) {
         var container = $__default['default']('<div />').attr('id', this._getContainerId().replace('#', ''));

         if (this._config.position == POSITION_TOP_RIGHT) {
           container.addClass(CLASS_NAME_TOP_RIGHT);
         } else if (this._config.position == POSITION_TOP_LEFT) {
           container.addClass(CLASS_NAME_TOP_LEFT);
         } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
           container.addClass(CLASS_NAME_BOTTOM_RIGHT);
         } else if (this._config.position == POSITION_BOTTOM_LEFT) {
           container.addClass(CLASS_NAME_BOTTOM_LEFT);
         }

         $__default['default']('body').append(container);
       }

       if (this._config.fixed) {
         $__default['default'](this._getContainerId()).addClass('fixed');
       } else {
         $__default['default'](this._getContainerId()).removeClass('fixed');
       }
     } // Static
     ;

     Toasts._jQueryInterface = function _jQueryInterface(option, config) {
       return this.each(function () {
         var _options = $__default['default'].extend({}, Default$2, config);

         var toast = new Toasts($__default['default'](this), _options);

         if (option === 'create') {
           toast[option]();
         }
       });
     };

     return Toasts;
   }();
   /**
    * jQuery API
    * ====================================================
    */


   $__default['default'].fn[NAME$2] = Toasts._jQueryInterface;
   $__default['default'].fn[NAME$2].Constructor = Toasts;

   $__default['default'].fn[NAME$2].noConflict = function () {
     $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
     return Toasts._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE TodoList.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME$1 = 'TodoList';
   var DATA_KEY$1 = 'lte.todolist';
   var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
   var SELECTOR_DATA_TOGGLE = '[data-widget="todo-list"]';
   var CLASS_NAME_TODO_LIST_DONE = 'done';
   var Default$1 = {
     onCheck: function onCheck(item) {
       return item;
     },
     onUnCheck: function onUnCheck(item) {
       return item;
     }
   };
   /**
    * Class Definition
    * ====================================================
    */

   var TodoList = /*#__PURE__*/function () {
     function TodoList(element, config) {
       this._config = config;
       this._element = element;

       this._init();
     } // Public


     var _proto = TodoList.prototype;

     _proto.toggle = function toggle(item) {
       item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);

       if (!$__default['default'](item).prop('checked')) {
         this.unCheck($__default['default'](item));
         return;
       }

       this.check(item);
     };

     _proto.check = function check(item) {
       this._config.onCheck.call(item);
     };

     _proto.unCheck = function unCheck(item) {
       this._config.onUnCheck.call(item);
     } // Private
     ;

     _proto._init = function _init() {
       var _this = this;

       var $toggleSelector = this._element;
       $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
       $toggleSelector.on('change', 'input:checkbox', function (event) {
         _this.toggle($__default['default'](event.target));
       });
     } // Static
     ;

     TodoList._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY$1);

         if (!data) {
           data = $__default['default'](this).data();
         }

         var _options = $__default['default'].extend({}, Default$1, typeof config === 'object' ? config : data);

         var plugin = new TodoList($__default['default'](this), _options);
         $__default['default'](this).data(DATA_KEY$1, typeof config === 'object' ? config : data);

         if (config === 'init') {
           plugin[config]();
         }
       });
     };

     return TodoList;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](window).on('load', function () {
     TodoList._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE));
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME$1] = TodoList._jQueryInterface;
   $__default['default'].fn[NAME$1].Constructor = TodoList;

   $__default['default'].fn[NAME$1].noConflict = function () {
     $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
     return TodoList._jQueryInterface;
   };

   /**
    * --------------------------------------------
    * AdminLTE Treeview.js
    * License MIT
    * --------------------------------------------
    */
   /**
    * Constants
    * ====================================================
    */

   var NAME = 'Treeview';
   var DATA_KEY = 'lte.treeview';
   var EVENT_KEY = "." + DATA_KEY;
   var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
   var EVENT_EXPANDED = "expanded" + EVENT_KEY;
   var EVENT_COLLAPSED = "collapsed" + EVENT_KEY;
   var EVENT_LOAD_DATA_API = "load" + EVENT_KEY;
   var SELECTOR_LI = '.nav-item';
   var SELECTOR_LINK = '.nav-link';
   var SELECTOR_TREEVIEW_MENU = '.nav-treeview';
   var SELECTOR_OPEN = '.menu-open';
   var SELECTOR_DATA_WIDGET = '[data-widget="treeview"]';
   var CLASS_NAME_OPEN = 'menu-open';
   var CLASS_NAME_IS_OPENING = 'menu-is-opening';
   var CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse';
   var Default = {
     trigger: SELECTOR_DATA_WIDGET + " " + SELECTOR_LINK,
     animationSpeed: 300,
     accordion: true,
     expandSidebar: false,
     sidebarButtonSelector: '[data-widget="pushmenu"]'
   };
   /**
    * Class Definition
    * ====================================================
    */

   var Treeview = /*#__PURE__*/function () {
     function Treeview(element, config) {
       this._config = config;
       this._element = element;
     } // Public


     var _proto = Treeview.prototype;

     _proto.init = function init() {
       $__default['default']("" + SELECTOR_LI + SELECTOR_OPEN + " " + SELECTOR_TREEVIEW_MENU + SELECTOR_OPEN).css('display', 'block');

       this._setupListeners();
     };

     _proto.expand = function expand(treeviewMenu, parentLi) {
       var _this = this;

       var expandedEvent = $__default['default'].Event(EVENT_EXPANDED);

       if (this._config.accordion) {
         var openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
         var openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first();
         this.collapse(openTreeview, openMenuLi);
       }

       parentLi.addClass(CLASS_NAME_IS_OPENING);
       treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
         parentLi.addClass(CLASS_NAME_OPEN);
         $__default['default'](_this._element).trigger(expandedEvent);
       });

       if (this._config.expandSidebar) {
         this._expandSidebar();
       }
     };

     _proto.collapse = function collapse(treeviewMenu, parentLi) {
       var _this2 = this;

       var collapsedEvent = $__default['default'].Event(EVENT_COLLAPSED);
       parentLi.removeClass(CLASS_NAME_IS_OPENING + " " + CLASS_NAME_OPEN);
       treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
         $__default['default'](_this2._element).trigger(collapsedEvent);
         treeviewMenu.find(SELECTOR_OPEN + " > " + SELECTOR_TREEVIEW_MENU).slideUp();
         treeviewMenu.find(SELECTOR_OPEN).removeClass(CLASS_NAME_OPEN);
       });
     };

     _proto.toggle = function toggle(event) {
       var $relativeTarget = $__default['default'](event.currentTarget);
       var $parent = $relativeTarget.parent();
       var treeviewMenu = $parent.find("> " + SELECTOR_TREEVIEW_MENU);

       if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
         if (!$parent.is(SELECTOR_LI)) {
           treeviewMenu = $parent.parent().find("> " + SELECTOR_TREEVIEW_MENU);
         }

         if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
           return;
         }
       }

       event.preventDefault();
       var parentLi = $relativeTarget.parents(SELECTOR_LI).first();
       var isOpen = parentLi.hasClass(CLASS_NAME_OPEN);

       if (isOpen) {
         this.collapse($__default['default'](treeviewMenu), parentLi);
       } else {
         this.expand($__default['default'](treeviewMenu), parentLi);
       }
     } // Private
     ;

     _proto._setupListeners = function _setupListeners() {
       var _this3 = this;

       var elementId = this._element.attr('id') !== undefined ? "#" + this._element.attr('id') : '';
       $__default['default'](document).on('click', "" + elementId + this._config.trigger, function (event) {
         _this3.toggle(event);
       });
     };

     _proto._expandSidebar = function _expandSidebar() {
       if ($__default['default']('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
         $__default['default'](this._config.sidebarButtonSelector).PushMenu('expand');
       }
     } // Static
     ;

     Treeview._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default['default'](this).data(DATA_KEY);

         var _options = $__default['default'].extend({}, Default, $__default['default'](this).data());

         if (!data) {
           data = new Treeview($__default['default'](this), _options);
           $__default['default'](this).data(DATA_KEY, data);
         }

         if (config === 'init') {
           data[config]();
         }
       });
     };

     return Treeview;
   }();
   /**
    * Data API
    * ====================================================
    */


   $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
     $__default['default'](SELECTOR_DATA_WIDGET).each(function () {
       Treeview._jQueryInterface.call($__default['default'](this), 'init');
     });
   });
   /**
    * jQuery API
    * ====================================================
    */

   $__default['default'].fn[NAME] = Treeview._jQueryInterface;
   $__default['default'].fn[NAME].Constructor = Treeview;

   $__default['default'].fn[NAME].noConflict = function () {
     $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
     return Treeview._jQueryInterface;
   };

   exports.CardRefresh = CardRefresh;
   exports.CardWidget = CardWidget;
   exports.ControlSidebar = ControlSidebar;
   exports.DirectChat = DirectChat;
   exports.Dropdown = Dropdown;
   exports.ExpandableTable = ExpandableTable;
   exports.Fullscreen = Fullscreen;
   exports.IFrame = IFrame;
   exports.Layout = Layout;
   exports.NavbarSearch = NavbarSearch;
   exports.PushMenu = PushMenu;
   exports.SidebarSearch = SidebarSearch;
   exports.Toasts = Toasts;
   exports.TodoList = TodoList;
   exports.Treeview = Treeview;

   Object.defineProperty(exports, '__esModule', { value: true });

 })));
 //# sourceMappingURL=adminlte.js.map


 /***/ }),

 /***/ "./node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.js":
 /*!*************************************************************************!*\
   !*** ./node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.js ***!
   \*************************************************************************/
 /***/ (function(__unused_webpack_module, exports, __webpack_require__) {

 /*!
   * Bootstrap v4.6.1 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
 (function (global, factory) {
    true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :
   0;
 })(this, (function (exports, $) { 'use strict';

   function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

   var $__default = /*#__PURE__*/_interopDefaultLegacy($);

   function _defineProperties(target, props) {
     for (var i = 0; i < props.length; i++) {
       var descriptor = props[i];
       descriptor.enumerable = descriptor.enumerable || false;
       descriptor.configurable = true;
       if ("value" in descriptor) descriptor.writable = true;
       Object.defineProperty(target, descriptor.key, descriptor);
     }
   }

   function _createClass(Constructor, protoProps, staticProps) {
     if (protoProps) _defineProperties(Constructor.prototype, protoProps);
     if (staticProps) _defineProperties(Constructor, staticProps);
     return Constructor;
   }

   function _extends$1() {
     _extends$1 = Object.assign || function (target) {
       for (var i = 1; i < arguments.length; i++) {
         var source = arguments[i];

         for (var key in source) {
           if (Object.prototype.hasOwnProperty.call(source, key)) {
             target[key] = source[key];
           }
         }
       }

       return target;
     };

     return _extends$1.apply(this, arguments);
   }

   function _inheritsLoose(subClass, superClass) {
     subClass.prototype = Object.create(superClass.prototype);
     subClass.prototype.constructor = subClass;

     _setPrototypeOf(subClass, superClass);
   }

   function _setPrototypeOf(o, p) {
     _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
       o.__proto__ = p;
       return o;
     };

     return _setPrototypeOf(o, p);
   }

   /**
    * --------------------------------------------------------------------------
    * Bootstrap (v4.6.1): util.js
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    * --------------------------------------------------------------------------
    */
   /**
    * Private TransitionEnd Helpers
    */

   var TRANSITION_END = 'transitionend';
   var MAX_UID = 1000000;
   var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

   function toType(obj) {
     if (obj === null || typeof obj === 'undefined') {
       return "" + obj;
     }

     return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
   }

   function getSpecialTransitionEndEvent() {
     return {
       bindType: TRANSITION_END,
       delegateType: TRANSITION_END,
       handle: function handle(event) {
         if ($__default["default"](event.target).is(this)) {
           return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
         }

         return undefined;
       }
     };
   }

   function transitionEndEmulator(duration) {
     var _this = this;

     var called = false;
     $__default["default"](this).one(Util.TRANSITION_END, function () {
       called = true;
     });
     setTimeout(function () {
       if (!called) {
         Util.triggerTransitionEnd(_this);
       }
     }, duration);
     return this;
   }

   function setTransitionEndSupport() {
     $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
     $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
   }
   /**
    * Public Util API
    */


   var Util = {
     TRANSITION_END: 'bsTransitionEnd',
     getUID: function getUID(prefix) {
       do {
         // eslint-disable-next-line no-bitwise
         prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
       } while (document.getElementById(prefix));

       return prefix;
     },
     getSelectorFromElement: function getSelectorFromElement(element) {
       var selector = element.getAttribute('data-target');

       if (!selector || selector === '#') {
         var hrefAttr = element.getAttribute('href');
         selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
       }

       try {
         return document.querySelector(selector) ? selector : null;
       } catch (_) {
         return null;
       }
     },
     getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
       if (!element) {
         return 0;
       } // Get transition-duration of the element


       var transitionDuration = $__default["default"](element).css('transition-duration');
       var transitionDelay = $__default["default"](element).css('transition-delay');
       var floatTransitionDuration = parseFloat(transitionDuration);
       var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

       if (!floatTransitionDuration && !floatTransitionDelay) {
         return 0;
       } // If multiple durations are defined, take the first


       transitionDuration = transitionDuration.split(',')[0];
       transitionDelay = transitionDelay.split(',')[0];
       return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
     },
     reflow: function reflow(element) {
       return element.offsetHeight;
     },
     triggerTransitionEnd: function triggerTransitionEnd(element) {
       $__default["default"](element).trigger(TRANSITION_END);
     },
     supportsTransitionEnd: function supportsTransitionEnd() {
       return Boolean(TRANSITION_END);
     },
     isElement: function isElement(obj) {
       return (obj[0] || obj).nodeType;
     },
     typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
       for (var property in configTypes) {
         if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
           var expectedTypes = configTypes[property];
           var value = config[property];
           var valueType = value && Util.isElement(value) ? 'element' : toType(value);

           if (!new RegExp(expectedTypes).test(valueType)) {
             throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
           }
         }
       }
     },
     findShadowRoot: function findShadowRoot(element) {
       if (!document.documentElement.attachShadow) {
         return null;
       } // Can find the shadow root otherwise it'll return the document


       if (typeof element.getRootNode === 'function') {
         var root = element.getRootNode();
         return root instanceof ShadowRoot ? root : null;
       }

       if (element instanceof ShadowRoot) {
         return element;
       } // when we don't find a shadow root


       if (!element.parentNode) {
         return null;
       }

       return Util.findShadowRoot(element.parentNode);
     },
     jQueryDetection: function jQueryDetection() {
       if (typeof $__default["default"] === 'undefined') {
         throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
       }

       var version = $__default["default"].fn.jquery.split(' ')[0].split('.');
       var minMajor = 1;
       var ltMajor = 2;
       var minMinor = 9;
       var minPatch = 1;
       var maxMajor = 4;

       if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
         throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
       }
     }
   };
   Util.jQueryDetection();
   setTransitionEndSupport();

   /**
    * Constants
    */

   var NAME$a = 'alert';
   var VERSION$a = '4.6.1';
   var DATA_KEY$a = 'bs.alert';
   var EVENT_KEY$a = "." + DATA_KEY$a;
   var DATA_API_KEY$7 = '.data-api';
   var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
   var CLASS_NAME_ALERT = 'alert';
   var CLASS_NAME_FADE$5 = 'fade';
   var CLASS_NAME_SHOW$7 = 'show';
   var EVENT_CLOSE = "close" + EVENT_KEY$a;
   var EVENT_CLOSED = "closed" + EVENT_KEY$a;
   var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
   var SELECTOR_DISMISS = '[data-dismiss="alert"]';
   /**
    * Class definition
    */

   var Alert = /*#__PURE__*/function () {
     function Alert(element) {
       this._element = element;
     } // Getters


     var _proto = Alert.prototype;

     // Public
     _proto.close = function close(element) {
       var rootElement = this._element;

       if (element) {
         rootElement = this._getRootElement(element);
       }

       var customEvent = this._triggerCloseEvent(rootElement);

       if (customEvent.isDefaultPrevented()) {
         return;
       }

       this._removeElement(rootElement);
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$a);
       this._element = null;
     } // Private
     ;

     _proto._getRootElement = function _getRootElement(element) {
       var selector = Util.getSelectorFromElement(element);
       var parent = false;

       if (selector) {
         parent = document.querySelector(selector);
       }

       if (!parent) {
         parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
       }

       return parent;
     };

     _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
       var closeEvent = $__default["default"].Event(EVENT_CLOSE);
       $__default["default"](element).trigger(closeEvent);
       return closeEvent;
     };

     _proto._removeElement = function _removeElement(element) {
       var _this = this;

       $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);

       if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
         this._destroyElement(element);

         return;
       }

       var transitionDuration = Util.getTransitionDurationFromElement(element);
       $__default["default"](element).one(Util.TRANSITION_END, function (event) {
         return _this._destroyElement(element, event);
       }).emulateTransitionEnd(transitionDuration);
     };

     _proto._destroyElement = function _destroyElement(element) {
       $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
     } // Static
     ;

     Alert._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var $element = $__default["default"](this);
         var data = $element.data(DATA_KEY$a);

         if (!data) {
           data = new Alert(this);
           $element.data(DATA_KEY$a, data);
         }

         if (config === 'close') {
           data[config](this);
         }
       });
     };

     Alert._handleDismiss = function _handleDismiss(alertInstance) {
       return function (event) {
         if (event) {
           event.preventDefault();
         }

         alertInstance.close(this);
       };
     };

     _createClass(Alert, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$a;
       }
     }]);

     return Alert;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
   $__default["default"].fn[NAME$a].Constructor = Alert;

   $__default["default"].fn[NAME$a].noConflict = function () {
     $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
     return Alert._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$9 = 'button';
   var VERSION$9 = '4.6.1';
   var DATA_KEY$9 = 'bs.button';
   var EVENT_KEY$9 = "." + DATA_KEY$9;
   var DATA_API_KEY$6 = '.data-api';
   var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
   var CLASS_NAME_ACTIVE$3 = 'active';
   var CLASS_NAME_BUTTON = 'btn';
   var CLASS_NAME_FOCUS = 'focus';
   var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
   var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
   var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
   var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
   var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
   var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
   var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
   var SELECTOR_INPUT = 'input:not([type="hidden"])';
   var SELECTOR_ACTIVE$2 = '.active';
   var SELECTOR_BUTTON = '.btn';
   /**
    * Class definition
    */

   var Button = /*#__PURE__*/function () {
     function Button(element) {
       this._element = element;
       this.shouldAvoidTriggerChange = false;
     } // Getters


     var _proto = Button.prototype;

     // Public
     _proto.toggle = function toggle() {
       var triggerChangeEvent = true;
       var addAriaPressed = true;
       var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

       if (rootElement) {
         var input = this._element.querySelector(SELECTOR_INPUT);

         if (input) {
           if (input.type === 'radio') {
             if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
               triggerChangeEvent = false;
             } else {
               var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);

               if (activeElement) {
                 $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
               }
             }
           }

           if (triggerChangeEvent) {
             // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
             if (input.type === 'checkbox' || input.type === 'radio') {
               input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
             }

             if (!this.shouldAvoidTriggerChange) {
               $__default["default"](input).trigger('change');
             }
           }

           input.focus();
           addAriaPressed = false;
         }
       }

       if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
         if (addAriaPressed) {
           this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
         }

         if (triggerChangeEvent) {
           $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
         }
       }
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$9);
       this._element = null;
     } // Static
     ;

     Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
       return this.each(function () {
         var $element = $__default["default"](this);
         var data = $element.data(DATA_KEY$9);

         if (!data) {
           data = new Button(this);
           $element.data(DATA_KEY$9, data);
         }

         data.shouldAvoidTriggerChange = avoidTriggerChange;

         if (config === 'toggle') {
           data[config]();
         }
       });
     };

     _createClass(Button, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$9;
       }
     }]);

     return Button;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
     var button = event.target;
     var initialButton = button;

     if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
       button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
     }

     if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
       event.preventDefault(); // work around Firefox bug #1540995
     } else {
       var inputBtn = button.querySelector(SELECTOR_INPUT);

       if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
         event.preventDefault(); // work around Firefox bug #1540995

         return;
       }

       if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
         Button._jQueryInterface.call($__default["default"](button), 'toggle', initialButton.tagName === 'INPUT');
       }
     }
   }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
     var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
     $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
   });
   $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function () {
     // ensure correct active class is set to match the controls' actual values/states
     // find all checkboxes/readio buttons inside data-toggle groups
     var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

     for (var i = 0, len = buttons.length; i < len; i++) {
       var button = buttons[i];
       var input = button.querySelector(SELECTOR_INPUT);

       if (input.checked || input.hasAttribute('checked')) {
         button.classList.add(CLASS_NAME_ACTIVE$3);
       } else {
         button.classList.remove(CLASS_NAME_ACTIVE$3);
       }
     } // find all button toggles


     buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));

     for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
       var _button = buttons[_i];

       if (_button.getAttribute('aria-pressed') === 'true') {
         _button.classList.add(CLASS_NAME_ACTIVE$3);
       } else {
         _button.classList.remove(CLASS_NAME_ACTIVE$3);
       }
     }
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$9] = Button._jQueryInterface;
   $__default["default"].fn[NAME$9].Constructor = Button;

   $__default["default"].fn[NAME$9].noConflict = function () {
     $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
     return Button._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$8 = 'carousel';
   var VERSION$8 = '4.6.1';
   var DATA_KEY$8 = 'bs.carousel';
   var EVENT_KEY$8 = "." + DATA_KEY$8;
   var DATA_API_KEY$5 = '.data-api';
   var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
   var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

   var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

   var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

   var SWIPE_THRESHOLD = 40;
   var CLASS_NAME_CAROUSEL = 'carousel';
   var CLASS_NAME_ACTIVE$2 = 'active';
   var CLASS_NAME_SLIDE = 'slide';
   var CLASS_NAME_RIGHT = 'carousel-item-right';
   var CLASS_NAME_LEFT = 'carousel-item-left';
   var CLASS_NAME_NEXT = 'carousel-item-next';
   var CLASS_NAME_PREV = 'carousel-item-prev';
   var CLASS_NAME_POINTER_EVENT = 'pointer-event';
   var DIRECTION_NEXT = 'next';
   var DIRECTION_PREV = 'prev';
   var DIRECTION_LEFT = 'left';
   var DIRECTION_RIGHT = 'right';
   var EVENT_SLIDE = "slide" + EVENT_KEY$8;
   var EVENT_SLID = "slid" + EVENT_KEY$8;
   var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
   var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
   var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
   var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
   var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
   var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
   var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
   var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
   var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
   var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
   var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
   var SELECTOR_ACTIVE$1 = '.active';
   var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
   var SELECTOR_ITEM = '.carousel-item';
   var SELECTOR_ITEM_IMG = '.carousel-item img';
   var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
   var SELECTOR_INDICATORS = '.carousel-indicators';
   var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
   var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
   var Default$7 = {
     interval: 5000,
     keyboard: true,
     slide: false,
     pause: 'hover',
     wrap: true,
     touch: true
   };
   var DefaultType$7 = {
     interval: '(number|boolean)',
     keyboard: 'boolean',
     slide: '(boolean|string)',
     pause: '(string|boolean)',
     wrap: 'boolean',
     touch: 'boolean'
   };
   var PointerType = {
     TOUCH: 'touch',
     PEN: 'pen'
   };
   /**
    * Class definition
    */

   var Carousel = /*#__PURE__*/function () {
     function Carousel(element, config) {
       this._items = null;
       this._interval = null;
       this._activeElement = null;
       this._isPaused = false;
       this._isSliding = false;
       this.touchTimeout = null;
       this.touchStartX = 0;
       this.touchDeltaX = 0;
       this._config = this._getConfig(config);
       this._element = element;
       this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
       this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
       this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

       this._addEventListeners();
     } // Getters


     var _proto = Carousel.prototype;

     // Public
     _proto.next = function next() {
       if (!this._isSliding) {
         this._slide(DIRECTION_NEXT);
       }
     };

     _proto.nextWhenVisible = function nextWhenVisible() {
       var $element = $__default["default"](this._element); // Don't call next when the page isn't visible
       // or the carousel or its parent isn't visible

       if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
         this.next();
       }
     };

     _proto.prev = function prev() {
       if (!this._isSliding) {
         this._slide(DIRECTION_PREV);
       }
     };

     _proto.pause = function pause(event) {
       if (!event) {
         this._isPaused = true;
       }

       if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
         Util.triggerTransitionEnd(this._element);
         this.cycle(true);
       }

       clearInterval(this._interval);
       this._interval = null;
     };

     _proto.cycle = function cycle(event) {
       if (!event) {
         this._isPaused = false;
       }

       if (this._interval) {
         clearInterval(this._interval);
         this._interval = null;
       }

       if (this._config.interval && !this._isPaused) {
         this._updateInterval();

         this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
       }
     };

     _proto.to = function to(index) {
       var _this = this;

       this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

       var activeIndex = this._getItemIndex(this._activeElement);

       if (index > this._items.length - 1 || index < 0) {
         return;
       }

       if (this._isSliding) {
         $__default["default"](this._element).one(EVENT_SLID, function () {
           return _this.to(index);
         });
         return;
       }

       if (activeIndex === index) {
         this.pause();
         this.cycle();
         return;
       }

       var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

       this._slide(direction, this._items[index]);
     };

     _proto.dispose = function dispose() {
       $__default["default"](this._element).off(EVENT_KEY$8);
       $__default["default"].removeData(this._element, DATA_KEY$8);
       this._items = null;
       this._config = null;
       this._element = null;
       this._interval = null;
       this._isPaused = null;
       this._isSliding = null;
       this._activeElement = null;
       this._indicatorsElement = null;
     } // Private
     ;

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, Default$7, config);
       Util.typeCheckConfig(NAME$8, config, DefaultType$7);
       return config;
     };

     _proto._handleSwipe = function _handleSwipe() {
       var absDeltax = Math.abs(this.touchDeltaX);

       if (absDeltax <= SWIPE_THRESHOLD) {
         return;
       }

       var direction = absDeltax / this.touchDeltaX;
       this.touchDeltaX = 0; // swipe left

       if (direction > 0) {
         this.prev();
       } // swipe right


       if (direction < 0) {
         this.next();
       }
     };

     _proto._addEventListeners = function _addEventListeners() {
       var _this2 = this;

       if (this._config.keyboard) {
         $__default["default"](this._element).on(EVENT_KEYDOWN, function (event) {
           return _this2._keydown(event);
         });
       }

       if (this._config.pause === 'hover') {
         $__default["default"](this._element).on(EVENT_MOUSEENTER, function (event) {
           return _this2.pause(event);
         }).on(EVENT_MOUSELEAVE, function (event) {
           return _this2.cycle(event);
         });
       }

       if (this._config.touch) {
         this._addTouchEventListeners();
       }
     };

     _proto._addTouchEventListeners = function _addTouchEventListeners() {
       var _this3 = this;

       if (!this._touchSupported) {
         return;
       }

       var start = function start(event) {
         if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
           _this3.touchStartX = event.originalEvent.clientX;
         } else if (!_this3._pointerEvent) {
           _this3.touchStartX = event.originalEvent.touches[0].clientX;
         }
       };

       var move = function move(event) {
         // ensure swiping with one touch and not pinching
         _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
       };

       var end = function end(event) {
         if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
           _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
         }

         _this3._handleSwipe();

         if (_this3._config.pause === 'hover') {
           // If it's a touch-enabled device, mouseenter/leave are fired as
           // part of the mouse compatibility events on first tap - the carousel
           // would stop cycling until user tapped out of it;
           // here, we listen for touchend, explicitly pause the carousel
           // (as if it's the second time we tap on it, mouseenter compat event
           // is NOT fired) and after a timeout (to allow for mouse compatibility
           // events to fire) we explicitly restart cycling
           _this3.pause();

           if (_this3.touchTimeout) {
             clearTimeout(_this3.touchTimeout);
           }

           _this3.touchTimeout = setTimeout(function (event) {
             return _this3.cycle(event);
           }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
         }
       };

       $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
         return e.preventDefault();
       });

       if (this._pointerEvent) {
         $__default["default"](this._element).on(EVENT_POINTERDOWN, function (event) {
           return start(event);
         });
         $__default["default"](this._element).on(EVENT_POINTERUP, function (event) {
           return end(event);
         });

         this._element.classList.add(CLASS_NAME_POINTER_EVENT);
       } else {
         $__default["default"](this._element).on(EVENT_TOUCHSTART, function (event) {
           return start(event);
         });
         $__default["default"](this._element).on(EVENT_TOUCHMOVE, function (event) {
           return move(event);
         });
         $__default["default"](this._element).on(EVENT_TOUCHEND, function (event) {
           return end(event);
         });
       }
     };

     _proto._keydown = function _keydown(event) {
       if (/input|textarea/i.test(event.target.tagName)) {
         return;
       }

       switch (event.which) {
         case ARROW_LEFT_KEYCODE:
           event.preventDefault();
           this.prev();
           break;

         case ARROW_RIGHT_KEYCODE:
           event.preventDefault();
           this.next();
           break;
       }
     };

     _proto._getItemIndex = function _getItemIndex(element) {
       this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
       return this._items.indexOf(element);
     };

     _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
       var isNextDirection = direction === DIRECTION_NEXT;
       var isPrevDirection = direction === DIRECTION_PREV;

       var activeIndex = this._getItemIndex(activeElement);

       var lastItemIndex = this._items.length - 1;
       var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

       if (isGoingToWrap && !this._config.wrap) {
         return activeElement;
       }

       var delta = direction === DIRECTION_PREV ? -1 : 1;
       var itemIndex = (activeIndex + delta) % this._items.length;
       return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
     };

     _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
       var targetIndex = this._getItemIndex(relatedTarget);

       var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

       var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
         relatedTarget: relatedTarget,
         direction: eventDirectionName,
         from: fromIndex,
         to: targetIndex
       });
       $__default["default"](this._element).trigger(slideEvent);
       return slideEvent;
     };

     _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
       if (this._indicatorsElement) {
         var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
         $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);

         var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

         if (nextIndicator) {
           $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
         }
       }
     };

     _proto._updateInterval = function _updateInterval() {
       var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

       if (!element) {
         return;
       }

       var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

       if (elementInterval) {
         this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
         this._config.interval = elementInterval;
       } else {
         this._config.interval = this._config.defaultInterval || this._config.interval;
       }
     };

     _proto._slide = function _slide(direction, element) {
       var _this4 = this;

       var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

       var activeElementIndex = this._getItemIndex(activeElement);

       var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

       var nextElementIndex = this._getItemIndex(nextElement);

       var isCycling = Boolean(this._interval);
       var directionalClassName;
       var orderClassName;
       var eventDirectionName;

       if (direction === DIRECTION_NEXT) {
         directionalClassName = CLASS_NAME_LEFT;
         orderClassName = CLASS_NAME_NEXT;
         eventDirectionName = DIRECTION_LEFT;
       } else {
         directionalClassName = CLASS_NAME_RIGHT;
         orderClassName = CLASS_NAME_PREV;
         eventDirectionName = DIRECTION_RIGHT;
       }

       if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
         this._isSliding = false;
         return;
       }

       var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

       if (slideEvent.isDefaultPrevented()) {
         return;
       }

       if (!activeElement || !nextElement) {
         // Some weirdness is happening, so we bail
         return;
       }

       this._isSliding = true;

       if (isCycling) {
         this.pause();
       }

       this._setActiveIndicatorElement(nextElement);

       this._activeElement = nextElement;
       var slidEvent = $__default["default"].Event(EVENT_SLID, {
         relatedTarget: nextElement,
         direction: eventDirectionName,
         from: activeElementIndex,
         to: nextElementIndex
       });

       if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
         $__default["default"](nextElement).addClass(orderClassName);
         Util.reflow(nextElement);
         $__default["default"](activeElement).addClass(directionalClassName);
         $__default["default"](nextElement).addClass(directionalClassName);
         var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
         $__default["default"](activeElement).one(Util.TRANSITION_END, function () {
           $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
           $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
           _this4._isSliding = false;
           setTimeout(function () {
             return $__default["default"](_this4._element).trigger(slidEvent);
           }, 0);
         }).emulateTransitionEnd(transitionDuration);
       } else {
         $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
         $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
         this._isSliding = false;
         $__default["default"](this._element).trigger(slidEvent);
       }

       if (isCycling) {
         this.cycle();
       }
     } // Static
     ;

     Carousel._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default["default"](this).data(DATA_KEY$8);

         var _config = _extends$1({}, Default$7, $__default["default"](this).data());

         if (typeof config === 'object') {
           _config = _extends$1({}, _config, config);
         }

         var action = typeof config === 'string' ? config : _config.slide;

         if (!data) {
           data = new Carousel(this, _config);
           $__default["default"](this).data(DATA_KEY$8, data);
         }

         if (typeof config === 'number') {
           data.to(config);
         } else if (typeof action === 'string') {
           if (typeof data[action] === 'undefined') {
             throw new TypeError("No method named \"" + action + "\"");
           }

           data[action]();
         } else if (_config.interval && _config.ride) {
           data.pause();
           data.cycle();
         }
       });
     };

     Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
       var selector = Util.getSelectorFromElement(this);

       if (!selector) {
         return;
       }

       var target = $__default["default"](selector)[0];

       if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
         return;
       }

       var config = _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());

       var slideIndex = this.getAttribute('data-slide-to');

       if (slideIndex) {
         config.interval = false;
       }

       Carousel._jQueryInterface.call($__default["default"](target), config);

       if (slideIndex) {
         $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
       }

       event.preventDefault();
     };

     _createClass(Carousel, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$8;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$7;
       }
     }]);

     return Carousel;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
   $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function () {
     var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

     for (var i = 0, len = carousels.length; i < len; i++) {
       var $carousel = $__default["default"](carousels[i]);

       Carousel._jQueryInterface.call($carousel, $carousel.data());
     }
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
   $__default["default"].fn[NAME$8].Constructor = Carousel;

   $__default["default"].fn[NAME$8].noConflict = function () {
     $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
     return Carousel._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$7 = 'collapse';
   var VERSION$7 = '4.6.1';
   var DATA_KEY$7 = 'bs.collapse';
   var EVENT_KEY$7 = "." + DATA_KEY$7;
   var DATA_API_KEY$4 = '.data-api';
   var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
   var CLASS_NAME_SHOW$6 = 'show';
   var CLASS_NAME_COLLAPSE = 'collapse';
   var CLASS_NAME_COLLAPSING = 'collapsing';
   var CLASS_NAME_COLLAPSED = 'collapsed';
   var DIMENSION_WIDTH = 'width';
   var DIMENSION_HEIGHT = 'height';
   var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
   var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
   var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
   var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
   var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
   var SELECTOR_ACTIVES = '.show, .collapsing';
   var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
   var Default$6 = {
     toggle: true,
     parent: ''
   };
   var DefaultType$6 = {
     toggle: 'boolean',
     parent: '(string|element)'
   };
   /**
    * Class definition
    */

   var Collapse = /*#__PURE__*/function () {
     function Collapse(element, config) {
       this._isTransitioning = false;
       this._element = element;
       this._config = this._getConfig(config);
       this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
       var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));

       for (var i = 0, len = toggleList.length; i < len; i++) {
         var elem = toggleList[i];
         var selector = Util.getSelectorFromElement(elem);
         var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
           return foundElem === element;
         });

         if (selector !== null && filterElement.length > 0) {
           this._selector = selector;

           this._triggerArray.push(elem);
         }
       }

       this._parent = this._config.parent ? this._getParent() : null;

       if (!this._config.parent) {
         this._addAriaAndCollapsedClass(this._element, this._triggerArray);
       }

       if (this._config.toggle) {
         this.toggle();
       }
     } // Getters


     var _proto = Collapse.prototype;

     // Public
     _proto.toggle = function toggle() {
       if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
         this.hide();
       } else {
         this.show();
       }
     };

     _proto.show = function show() {
       var _this = this;

       if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
         return;
       }

       var actives;
       var activesData;

       if (this._parent) {
         actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
           if (typeof _this._config.parent === 'string') {
             return elem.getAttribute('data-parent') === _this._config.parent;
           }

           return elem.classList.contains(CLASS_NAME_COLLAPSE);
         });

         if (actives.length === 0) {
           actives = null;
         }
       }

       if (actives) {
         activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);

         if (activesData && activesData._isTransitioning) {
           return;
         }
       }

       var startEvent = $__default["default"].Event(EVENT_SHOW$4);
       $__default["default"](this._element).trigger(startEvent);

       if (startEvent.isDefaultPrevented()) {
         return;
       }

       if (actives) {
         Collapse._jQueryInterface.call($__default["default"](actives).not(this._selector), 'hide');

         if (!activesData) {
           $__default["default"](actives).data(DATA_KEY$7, null);
         }
       }

       var dimension = this._getDimension();

       $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
       this._element.style[dimension] = 0;

       if (this._triggerArray.length) {
         $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
       }

       this.setTransitioning(true);

       var complete = function complete() {
         $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
         _this._element.style[dimension] = '';

         _this.setTransitioning(false);

         $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
       };

       var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
       var scrollSize = "scroll" + capitalizedDimension;
       var transitionDuration = Util.getTransitionDurationFromElement(this._element);
       $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
       this._element.style[dimension] = this._element[scrollSize] + "px";
     };

     _proto.hide = function hide() {
       var _this2 = this;

       if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
         return;
       }

       var startEvent = $__default["default"].Event(EVENT_HIDE$4);
       $__default["default"](this._element).trigger(startEvent);

       if (startEvent.isDefaultPrevented()) {
         return;
       }

       var dimension = this._getDimension();

       this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
       Util.reflow(this._element);
       $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
       var triggerArrayLength = this._triggerArray.length;

       if (triggerArrayLength > 0) {
         for (var i = 0; i < triggerArrayLength; i++) {
           var trigger = this._triggerArray[i];
           var selector = Util.getSelectorFromElement(trigger);

           if (selector !== null) {
             var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));

             if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
               $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
             }
           }
         }
       }

       this.setTransitioning(true);

       var complete = function complete() {
         _this2.setTransitioning(false);

         $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
       };

       this._element.style[dimension] = '';
       var transitionDuration = Util.getTransitionDurationFromElement(this._element);
       $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
     };

     _proto.setTransitioning = function setTransitioning(isTransitioning) {
       this._isTransitioning = isTransitioning;
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$7);
       this._config = null;
       this._parent = null;
       this._element = null;
       this._triggerArray = null;
       this._isTransitioning = null;
     } // Private
     ;

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, Default$6, config);
       config.toggle = Boolean(config.toggle); // Coerce string values

       Util.typeCheckConfig(NAME$7, config, DefaultType$6);
       return config;
     };

     _proto._getDimension = function _getDimension() {
       var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
       return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
     };

     _proto._getParent = function _getParent() {
       var _this3 = this;

       var parent;

       if (Util.isElement(this._config.parent)) {
         parent = this._config.parent; // It's a jQuery object

         if (typeof this._config.parent.jquery !== 'undefined') {
           parent = this._config.parent[0];
         }
       } else {
         parent = document.querySelector(this._config.parent);
       }

       var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
       var children = [].slice.call(parent.querySelectorAll(selector));
       $__default["default"](children).each(function (i, element) {
         _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
       });
       return parent;
     };

     _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
       var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);

       if (triggerArray.length) {
         $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
       }
     } // Static
     ;

     Collapse._getTargetFromElement = function _getTargetFromElement(element) {
       var selector = Util.getSelectorFromElement(element);
       return selector ? document.querySelector(selector) : null;
     };

     Collapse._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var $element = $__default["default"](this);
         var data = $element.data(DATA_KEY$7);

         var _config = _extends$1({}, Default$6, $element.data(), typeof config === 'object' && config ? config : {});

         if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
           _config.toggle = false;
         }

         if (!data) {
           data = new Collapse(this, _config);
           $element.data(DATA_KEY$7, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     _createClass(Collapse, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$7;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$6;
       }
     }]);

     return Collapse;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
     // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
     if (event.currentTarget.tagName === 'A') {
       event.preventDefault();
     }

     var $trigger = $__default["default"](this);
     var selector = Util.getSelectorFromElement(this);
     var selectors = [].slice.call(document.querySelectorAll(selector));
     $__default["default"](selectors).each(function () {
       var $target = $__default["default"](this);
       var data = $target.data(DATA_KEY$7);
       var config = data ? 'toggle' : $trigger.data();

       Collapse._jQueryInterface.call($target, config);
     });
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
   $__default["default"].fn[NAME$7].Constructor = Collapse;

   $__default["default"].fn[NAME$7].noConflict = function () {
     $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
     return Collapse._jQueryInterface;
   };

   /**!
    * @fileOverview Kickass library to create and place poppers near their reference elements.
    * @version 1.16.1
    * @license
    * Copyright (c) 2016 Federico Zivolo and contributors
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    * SOFTWARE.
    */
   var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

   var timeoutDuration = function () {
     var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
     for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
       if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
         return 1;
       }
     }
     return 0;
   }();

   function microtaskDebounce(fn) {
     var called = false;
     return function () {
       if (called) {
         return;
       }
       called = true;
       window.Promise.resolve().then(function () {
         called = false;
         fn();
       });
     };
   }

   function taskDebounce(fn) {
     var scheduled = false;
     return function () {
       if (!scheduled) {
         scheduled = true;
         setTimeout(function () {
           scheduled = false;
           fn();
         }, timeoutDuration);
       }
     };
   }

   var supportsMicroTasks = isBrowser && window.Promise;

   /**
   * Create a debounced version of a method, that's asynchronously deferred
   * but called in the minimum time possible.
   *
   * @method
   * @memberof Popper.Utils
   * @argument {Function} fn
   * @returns {Function}
   */
   var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

   /**
    * Check if the given variable is a function
    * @method
    * @memberof Popper.Utils
    * @argument {Any} functionToCheck - variable to check
    * @returns {Boolean} answer to: is a function?
    */
   function isFunction(functionToCheck) {
     var getType = {};
     return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
   }

   /**
    * Get CSS computed property of the given element
    * @method
    * @memberof Popper.Utils
    * @argument {Eement} element
    * @argument {String} property
    */
   function getStyleComputedProperty(element, property) {
     if (element.nodeType !== 1) {
       return [];
     }
     // NOTE: 1 DOM access here
     var window = element.ownerDocument.defaultView;
     var css = window.getComputedStyle(element, null);
     return property ? css[property] : css;
   }

   /**
    * Returns the parentNode or the host of the element
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @returns {Element} parent
    */
   function getParentNode(element) {
     if (element.nodeName === 'HTML') {
       return element;
     }
     return element.parentNode || element.host;
   }

   /**
    * Returns the scrolling parent of the given element
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @returns {Element} scroll parent
    */
   function getScrollParent(element) {
     // Return body, `getScroll` will take care to get the correct `scrollTop` from it
     if (!element) {
       return document.body;
     }

     switch (element.nodeName) {
       case 'HTML':
       case 'BODY':
         return element.ownerDocument.body;
       case '#document':
         return element.body;
     }

     // Firefox want us to check `-x` and `-y` variations as well

     var _getStyleComputedProp = getStyleComputedProperty(element),
         overflow = _getStyleComputedProp.overflow,
         overflowX = _getStyleComputedProp.overflowX,
         overflowY = _getStyleComputedProp.overflowY;

     if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
       return element;
     }

     return getScrollParent(getParentNode(element));
   }

   /**
    * Returns the reference node of the reference object, or the reference object itself.
    * @method
    * @memberof Popper.Utils
    * @param {Element|Object} reference - the reference element (the popper will be relative to this)
    * @returns {Element} parent
    */
   function getReferenceNode(reference) {
     return reference && reference.referenceNode ? reference.referenceNode : reference;
   }

   var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
   var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

   /**
    * Determines if the browser is Internet Explorer
    * @method
    * @memberof Popper.Utils
    * @param {Number} version to check
    * @returns {Boolean} isIE
    */
   function isIE(version) {
     if (version === 11) {
       return isIE11;
     }
     if (version === 10) {
       return isIE10;
     }
     return isIE11 || isIE10;
   }

   /**
    * Returns the offset parent of the given element
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @returns {Element} offset parent
    */
   function getOffsetParent(element) {
     if (!element) {
       return document.documentElement;
     }

     var noOffsetParent = isIE(10) ? document.body : null;

     // NOTE: 1 DOM access here
     var offsetParent = element.offsetParent || null;
     // Skip hidden elements which don't have an offsetParent
     while (offsetParent === noOffsetParent && element.nextElementSibling) {
       offsetParent = (element = element.nextElementSibling).offsetParent;
     }

     var nodeName = offsetParent && offsetParent.nodeName;

     if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
       return element ? element.ownerDocument.documentElement : document.documentElement;
     }

     // .offsetParent will return the closest TH, TD or TABLE in case
     // no offsetParent is present, I hate this job...
     if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
       return getOffsetParent(offsetParent);
     }

     return offsetParent;
   }

   function isOffsetContainer(element) {
     var nodeName = element.nodeName;

     if (nodeName === 'BODY') {
       return false;
     }
     return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
   }

   /**
    * Finds the root node (document, shadowDOM root) of the given element
    * @method
    * @memberof Popper.Utils
    * @argument {Element} node
    * @returns {Element} root node
    */
   function getRoot(node) {
     if (node.parentNode !== null) {
       return getRoot(node.parentNode);
     }

     return node;
   }

   /**
    * Finds the offset parent common to the two provided nodes
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element1
    * @argument {Element} element2
    * @returns {Element} common offset parent
    */
   function findCommonOffsetParent(element1, element2) {
     // This check is needed to avoid errors in case one of the elements isn't defined for any reason
     if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
       return document.documentElement;
     }

     // Here we make sure to give as "start" the element that comes first in the DOM
     var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
     var start = order ? element1 : element2;
     var end = order ? element2 : element1;

     // Get common ancestor container
     var range = document.createRange();
     range.setStart(start, 0);
     range.setEnd(end, 0);
     var commonAncestorContainer = range.commonAncestorContainer;

     // Both nodes are inside #document

     if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
       if (isOffsetContainer(commonAncestorContainer)) {
         return commonAncestorContainer;
       }

       return getOffsetParent(commonAncestorContainer);
     }

     // one of the nodes is inside shadowDOM, find which one
     var element1root = getRoot(element1);
     if (element1root.host) {
       return findCommonOffsetParent(element1root.host, element2);
     } else {
       return findCommonOffsetParent(element1, getRoot(element2).host);
     }
   }

   /**
    * Gets the scroll value of the given element in the given side (top and left)
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @argument {String} side `top` or `left`
    * @returns {number} amount of scrolled pixels
    */
   function getScroll(element) {
     var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

     var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
     var nodeName = element.nodeName;

     if (nodeName === 'BODY' || nodeName === 'HTML') {
       var html = element.ownerDocument.documentElement;
       var scrollingElement = element.ownerDocument.scrollingElement || html;
       return scrollingElement[upperSide];
     }

     return element[upperSide];
   }

   /*
    * Sum or subtract the element scroll values (left and top) from a given rect object
    * @method
    * @memberof Popper.Utils
    * @param {Object} rect - Rect object you want to change
    * @param {HTMLElement} element - The element from the function reads the scroll values
    * @param {Boolean} subtract - set to true if you want to subtract the scroll values
    * @return {Object} rect - The modifier rect object
    */
   function includeScroll(rect, element) {
     var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

     var scrollTop = getScroll(element, 'top');
     var scrollLeft = getScroll(element, 'left');
     var modifier = subtract ? -1 : 1;
     rect.top += scrollTop * modifier;
     rect.bottom += scrollTop * modifier;
     rect.left += scrollLeft * modifier;
     rect.right += scrollLeft * modifier;
     return rect;
   }

   /*
    * Helper to detect borders of a given element
    * @method
    * @memberof Popper.Utils
    * @param {CSSStyleDeclaration} styles
    * Result of `getStyleComputedProperty` on the given element
    * @param {String} axis - `x` or `y`
    * @return {number} borders - The borders size of the given axis
    */

   function getBordersSize(styles, axis) {
     var sideA = axis === 'x' ? 'Left' : 'Top';
     var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

     return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
   }

   function getSize(axis, body, html, computedStyle) {
     return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
   }

   function getWindowSizes(document) {
     var body = document.body;
     var html = document.documentElement;
     var computedStyle = isIE(10) && getComputedStyle(html);

     return {
       height: getSize('Height', body, html, computedStyle),
       width: getSize('Width', body, html, computedStyle)
     };
   }

   var classCallCheck = function (instance, Constructor) {
     if (!(instance instanceof Constructor)) {
       throw new TypeError("Cannot call a class as a function");
     }
   };

   var createClass = function () {
     function defineProperties(target, props) {
       for (var i = 0; i < props.length; i++) {
         var descriptor = props[i];
         descriptor.enumerable = descriptor.enumerable || false;
         descriptor.configurable = true;
         if ("value" in descriptor) descriptor.writable = true;
         Object.defineProperty(target, descriptor.key, descriptor);
       }
     }

     return function (Constructor, protoProps, staticProps) {
       if (protoProps) defineProperties(Constructor.prototype, protoProps);
       if (staticProps) defineProperties(Constructor, staticProps);
       return Constructor;
     };
   }();





   var defineProperty = function (obj, key, value) {
     if (key in obj) {
       Object.defineProperty(obj, key, {
         value: value,
         enumerable: true,
         configurable: true,
         writable: true
       });
     } else {
       obj[key] = value;
     }

     return obj;
   };

   var _extends = Object.assign || function (target) {
     for (var i = 1; i < arguments.length; i++) {
       var source = arguments[i];

       for (var key in source) {
         if (Object.prototype.hasOwnProperty.call(source, key)) {
           target[key] = source[key];
         }
       }
     }

     return target;
   };

   /**
    * Given element offsets, generate an output similar to getBoundingClientRect
    * @method
    * @memberof Popper.Utils
    * @argument {Object} offsets
    * @returns {Object} ClientRect like output
    */
   function getClientRect(offsets) {
     return _extends({}, offsets, {
       right: offsets.left + offsets.width,
       bottom: offsets.top + offsets.height
     });
   }

   /**
    * Get bounding client rect of given element
    * @method
    * @memberof Popper.Utils
    * @param {HTMLElement} element
    * @return {Object} client rect
    */
   function getBoundingClientRect(element) {
     var rect = {};

     // IE10 10 FIX: Please, don't ask, the element isn't
     // considered in DOM in some circumstances...
     // This isn't reproducible in IE10 compatibility mode of IE11
     try {
       if (isIE(10)) {
         rect = element.getBoundingClientRect();
         var scrollTop = getScroll(element, 'top');
         var scrollLeft = getScroll(element, 'left');
         rect.top += scrollTop;
         rect.left += scrollLeft;
         rect.bottom += scrollTop;
         rect.right += scrollLeft;
       } else {
         rect = element.getBoundingClientRect();
       }
     } catch (e) {}

     var result = {
       left: rect.left,
       top: rect.top,
       width: rect.right - rect.left,
       height: rect.bottom - rect.top
     };

     // subtract scrollbar size from sizes
     var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
     var width = sizes.width || element.clientWidth || result.width;
     var height = sizes.height || element.clientHeight || result.height;

     var horizScrollbar = element.offsetWidth - width;
     var vertScrollbar = element.offsetHeight - height;

     // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
     // we make this check conditional for performance reasons
     if (horizScrollbar || vertScrollbar) {
       var styles = getStyleComputedProperty(element);
       horizScrollbar -= getBordersSize(styles, 'x');
       vertScrollbar -= getBordersSize(styles, 'y');

       result.width -= horizScrollbar;
       result.height -= vertScrollbar;
     }

     return getClientRect(result);
   }

   function getOffsetRectRelativeToArbitraryNode(children, parent) {
     var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

     var isIE10 = isIE(10);
     var isHTML = parent.nodeName === 'HTML';
     var childrenRect = getBoundingClientRect(children);
     var parentRect = getBoundingClientRect(parent);
     var scrollParent = getScrollParent(children);

     var styles = getStyleComputedProperty(parent);
     var borderTopWidth = parseFloat(styles.borderTopWidth);
     var borderLeftWidth = parseFloat(styles.borderLeftWidth);

     // In cases where the parent is fixed, we must ignore negative scroll in offset calc
     if (fixedPosition && isHTML) {
       parentRect.top = Math.max(parentRect.top, 0);
       parentRect.left = Math.max(parentRect.left, 0);
     }
     var offsets = getClientRect({
       top: childrenRect.top - parentRect.top - borderTopWidth,
       left: childrenRect.left - parentRect.left - borderLeftWidth,
       width: childrenRect.width,
       height: childrenRect.height
     });
     offsets.marginTop = 0;
     offsets.marginLeft = 0;

     // Subtract margins of documentElement in case it's being used as parent
     // we do this only on HTML because it's the only element that behaves
     // differently when margins are applied to it. The margins are included in
     // the box of the documentElement, in the other cases not.
     if (!isIE10 && isHTML) {
       var marginTop = parseFloat(styles.marginTop);
       var marginLeft = parseFloat(styles.marginLeft);

       offsets.top -= borderTopWidth - marginTop;
       offsets.bottom -= borderTopWidth - marginTop;
       offsets.left -= borderLeftWidth - marginLeft;
       offsets.right -= borderLeftWidth - marginLeft;

       // Attach marginTop and marginLeft because in some circumstances we may need them
       offsets.marginTop = marginTop;
       offsets.marginLeft = marginLeft;
     }

     if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
       offsets = includeScroll(offsets, parent);
     }

     return offsets;
   }

   function getViewportOffsetRectRelativeToArtbitraryNode(element) {
     var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

     var html = element.ownerDocument.documentElement;
     var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
     var width = Math.max(html.clientWidth, window.innerWidth || 0);
     var height = Math.max(html.clientHeight, window.innerHeight || 0);

     var scrollTop = !excludeScroll ? getScroll(html) : 0;
     var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

     var offset = {
       top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
       left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
       width: width,
       height: height
     };

     return getClientRect(offset);
   }

   /**
    * Check if the given element is fixed or is inside a fixed parent
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @argument {Element} customContainer
    * @returns {Boolean} answer to "isFixed?"
    */
   function isFixed(element) {
     var nodeName = element.nodeName;
     if (nodeName === 'BODY' || nodeName === 'HTML') {
       return false;
     }
     if (getStyleComputedProperty(element, 'position') === 'fixed') {
       return true;
     }
     var parentNode = getParentNode(element);
     if (!parentNode) {
       return false;
     }
     return isFixed(parentNode);
   }

   /**
    * Finds the first parent of an element that has a transformed property defined
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @returns {Element} first transformed parent or documentElement
    */

   function getFixedPositionOffsetParent(element) {
     // This check is needed to avoid errors in case one of the elements isn't defined for any reason
     if (!element || !element.parentElement || isIE()) {
       return document.documentElement;
     }
     var el = element.parentElement;
     while (el && getStyleComputedProperty(el, 'transform') === 'none') {
       el = el.parentElement;
     }
     return el || document.documentElement;
   }

   /**
    * Computed the boundaries limits and return them
    * @method
    * @memberof Popper.Utils
    * @param {HTMLElement} popper
    * @param {HTMLElement} reference
    * @param {number} padding
    * @param {HTMLElement} boundariesElement - Element used to define the boundaries
    * @param {Boolean} fixedPosition - Is in fixed position mode
    * @returns {Object} Coordinates of the boundaries
    */
   function getBoundaries(popper, reference, padding, boundariesElement) {
     var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

     // NOTE: 1 DOM access here

     var boundaries = { top: 0, left: 0 };
     var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

     // Handle viewport case
     if (boundariesElement === 'viewport') {
       boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
     } else {
       // Handle other cases based on DOM element used as boundaries
       var boundariesNode = void 0;
       if (boundariesElement === 'scrollParent') {
         boundariesNode = getScrollParent(getParentNode(reference));
         if (boundariesNode.nodeName === 'BODY') {
           boundariesNode = popper.ownerDocument.documentElement;
         }
       } else if (boundariesElement === 'window') {
         boundariesNode = popper.ownerDocument.documentElement;
       } else {
         boundariesNode = boundariesElement;
       }

       var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

       // In case of HTML, we need a different computation
       if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
         var _getWindowSizes = getWindowSizes(popper.ownerDocument),
             height = _getWindowSizes.height,
             width = _getWindowSizes.width;

         boundaries.top += offsets.top - offsets.marginTop;
         boundaries.bottom = height + offsets.top;
         boundaries.left += offsets.left - offsets.marginLeft;
         boundaries.right = width + offsets.left;
       } else {
         // for all the other DOM elements, this one is good
         boundaries = offsets;
       }
     }

     // Add paddings
     padding = padding || 0;
     var isPaddingNumber = typeof padding === 'number';
     boundaries.left += isPaddingNumber ? padding : padding.left || 0;
     boundaries.top += isPaddingNumber ? padding : padding.top || 0;
     boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
     boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

     return boundaries;
   }

   function getArea(_ref) {
     var width = _ref.width,
         height = _ref.height;

     return width * height;
   }

   /**
    * Utility used to transform the `auto` placement to the placement with more
    * available space.
    * @method
    * @memberof Popper.Utils
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
     var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

     if (placement.indexOf('auto') === -1) {
       return placement;
     }

     var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

     var rects = {
       top: {
         width: boundaries.width,
         height: refRect.top - boundaries.top
       },
       right: {
         width: boundaries.right - refRect.right,
         height: boundaries.height
       },
       bottom: {
         width: boundaries.width,
         height: boundaries.bottom - refRect.bottom
       },
       left: {
         width: refRect.left - boundaries.left,
         height: boundaries.height
       }
     };

     var sortedAreas = Object.keys(rects).map(function (key) {
       return _extends({
         key: key
       }, rects[key], {
         area: getArea(rects[key])
       });
     }).sort(function (a, b) {
       return b.area - a.area;
     });

     var filteredAreas = sortedAreas.filter(function (_ref2) {
       var width = _ref2.width,
           height = _ref2.height;
       return width >= popper.clientWidth && height >= popper.clientHeight;
     });

     var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

     var variation = placement.split('-')[1];

     return computedPlacement + (variation ? '-' + variation : '');
   }

   /**
    * Get offsets to the reference element
    * @method
    * @memberof Popper.Utils
    * @param {Object} state
    * @param {Element} popper - the popper element
    * @param {Element} reference - the reference element (the popper will be relative to this)
    * @param {Element} fixedPosition - is in fixed position mode
    * @returns {Object} An object containing the offsets which will be applied to the popper
    */
   function getReferenceOffsets(state, popper, reference) {
     var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

     var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
     return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
   }

   /**
    * Get the outer sizes of the given element (offset size + margins)
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element
    * @returns {Object} object containing width and height properties
    */
   function getOuterSizes(element) {
     var window = element.ownerDocument.defaultView;
     var styles = window.getComputedStyle(element);
     var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
     var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
     var result = {
       width: element.offsetWidth + y,
       height: element.offsetHeight + x
     };
     return result;
   }

   /**
    * Get the opposite placement of the given one
    * @method
    * @memberof Popper.Utils
    * @argument {String} placement
    * @returns {String} flipped placement
    */
   function getOppositePlacement(placement) {
     var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
     return placement.replace(/left|right|bottom|top/g, function (matched) {
       return hash[matched];
     });
   }

   /**
    * Get offsets to the popper
    * @method
    * @memberof Popper.Utils
    * @param {Object} position - CSS position the Popper will get applied
    * @param {HTMLElement} popper - the popper element
    * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
    * @param {String} placement - one of the valid placement options
    * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
    */
   function getPopperOffsets(popper, referenceOffsets, placement) {
     placement = placement.split('-')[0];

     // Get popper node sizes
     var popperRect = getOuterSizes(popper);

     // Add position, width and height to our offsets object
     var popperOffsets = {
       width: popperRect.width,
       height: popperRect.height
     };

     // depending by the popper placement we have to compute its offsets slightly differently
     var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
     var mainSide = isHoriz ? 'top' : 'left';
     var secondarySide = isHoriz ? 'left' : 'top';
     var measurement = isHoriz ? 'height' : 'width';
     var secondaryMeasurement = !isHoriz ? 'height' : 'width';

     popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
     if (placement === secondarySide) {
       popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
     } else {
       popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
     }

     return popperOffsets;
   }

   /**
    * Mimics the `find` method of Array
    * @method
    * @memberof Popper.Utils
    * @argument {Array} arr
    * @argument prop
    * @argument value
    * @returns index or -1
    */
   function find(arr, check) {
     // use native find if supported
     if (Array.prototype.find) {
       return arr.find(check);
     }

     // use `filter` to obtain the same behavior of `find`
     return arr.filter(check)[0];
   }

   /**
    * Return the index of the matching object
    * @method
    * @memberof Popper.Utils
    * @argument {Array} arr
    * @argument prop
    * @argument value
    * @returns index or -1
    */
   function findIndex(arr, prop, value) {
     // use native findIndex if supported
     if (Array.prototype.findIndex) {
       return arr.findIndex(function (cur) {
         return cur[prop] === value;
       });
     }

     // use `find` + `indexOf` if `findIndex` isn't supported
     var match = find(arr, function (obj) {
       return obj[prop] === value;
     });
     return arr.indexOf(match);
   }

   /**
    * Loop trough the list of modifiers and run them in order,
    * each of them will then edit the data object.
    * @method
    * @memberof Popper.Utils
    * @param {dataObject} data
    * @param {Array} modifiers
    * @param {String} ends - Optional modifier name used as stopper
    * @returns {dataObject}
    */
   function runModifiers(modifiers, data, ends) {
     var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

     modifiersToRun.forEach(function (modifier) {
       if (modifier['function']) {
         // eslint-disable-line dot-notation
         console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
       }
       var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
       if (modifier.enabled && isFunction(fn)) {
         // Add properties to offsets to make them a complete clientRect object
         // we do this before each modifier to make sure the previous one doesn't
         // mess with these values
         data.offsets.popper = getClientRect(data.offsets.popper);
         data.offsets.reference = getClientRect(data.offsets.reference);

         data = fn(data, modifier);
       }
     });

     return data;
   }

   /**
    * Updates the position of the popper, computing the new offsets and applying
    * the new style.<br />
    * Prefer `scheduleUpdate` over `update` because of performance reasons.
    * @method
    * @memberof Popper
    */
   function update() {
     // if popper is destroyed, don't perform any further update
     if (this.state.isDestroyed) {
       return;
     }

     var data = {
       instance: this,
       styles: {},
       arrowStyles: {},
       attributes: {},
       flipped: false,
       offsets: {}
     };

     // compute reference element offsets
     data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

     // compute auto placement, store placement inside the data object,
     // modifiers will be able to edit `placement` if needed
     // and refer to originalPlacement to know the original value
     data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

     // store the computed placement inside `originalPlacement`
     data.originalPlacement = data.placement;

     data.positionFixed = this.options.positionFixed;

     // compute the popper offsets
     data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

     data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

     // run the modifiers
     data = runModifiers(this.modifiers, data);

     // the first `update` will call `onCreate` callback
     // the other ones will call `onUpdate` callback
     if (!this.state.isCreated) {
       this.state.isCreated = true;
       this.options.onCreate(data);
     } else {
       this.options.onUpdate(data);
     }
   }

   /**
    * Helper used to know if the given modifier is enabled.
    * @method
    * @memberof Popper.Utils
    * @returns {Boolean}
    */
   function isModifierEnabled(modifiers, modifierName) {
     return modifiers.some(function (_ref) {
       var name = _ref.name,
           enabled = _ref.enabled;
       return enabled && name === modifierName;
     });
   }

   /**
    * Get the prefixed supported property name
    * @method
    * @memberof Popper.Utils
    * @argument {String} property (camelCase)
    * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
    */
   function getSupportedPropertyName(property) {
     var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
     var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

     for (var i = 0; i < prefixes.length; i++) {
       var prefix = prefixes[i];
       var toCheck = prefix ? '' + prefix + upperProp : property;
       if (typeof document.body.style[toCheck] !== 'undefined') {
         return toCheck;
       }
     }
     return null;
   }

   /**
    * Destroys the popper.
    * @method
    * @memberof Popper
    */
   function destroy() {
     this.state.isDestroyed = true;

     // touch DOM only if `applyStyle` modifier is enabled
     if (isModifierEnabled(this.modifiers, 'applyStyle')) {
       this.popper.removeAttribute('x-placement');
       this.popper.style.position = '';
       this.popper.style.top = '';
       this.popper.style.left = '';
       this.popper.style.right = '';
       this.popper.style.bottom = '';
       this.popper.style.willChange = '';
       this.popper.style[getSupportedPropertyName('transform')] = '';
     }

     this.disableEventListeners();

     // remove the popper if user explicitly asked for the deletion on destroy
     // do not use `remove` because IE11 doesn't support it
     if (this.options.removeOnDestroy) {
       this.popper.parentNode.removeChild(this.popper);
     }
     return this;
   }

   /**
    * Get the window associated with the element
    * @argument {Element} element
    * @returns {Window}
    */
   function getWindow(element) {
     var ownerDocument = element.ownerDocument;
     return ownerDocument ? ownerDocument.defaultView : window;
   }

   function attachToScrollParents(scrollParent, event, callback, scrollParents) {
     var isBody = scrollParent.nodeName === 'BODY';
     var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
     target.addEventListener(event, callback, { passive: true });

     if (!isBody) {
       attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
     }
     scrollParents.push(target);
   }

   /**
    * Setup needed event listeners used to update the popper position
    * @method
    * @memberof Popper.Utils
    * @private
    */
   function setupEventListeners(reference, options, state, updateBound) {
     // Resize event listener on window
     state.updateBound = updateBound;
     getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

     // Scroll event listener on scroll parents
     var scrollElement = getScrollParent(reference);
     attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
     state.scrollElement = scrollElement;
     state.eventsEnabled = true;

     return state;
   }

   /**
    * It will add resize/scroll events and start recalculating
    * position of the popper element when they are triggered.
    * @method
    * @memberof Popper
    */
   function enableEventListeners() {
     if (!this.state.eventsEnabled) {
       this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
     }
   }

   /**
    * Remove event listeners used to update the popper position
    * @method
    * @memberof Popper.Utils
    * @private
    */
   function removeEventListeners(reference, state) {
     // Remove resize event listener on window
     getWindow(reference).removeEventListener('resize', state.updateBound);

     // Remove scroll event listener on scroll parents
     state.scrollParents.forEach(function (target) {
       target.removeEventListener('scroll', state.updateBound);
     });

     // Reset state
     state.updateBound = null;
     state.scrollParents = [];
     state.scrollElement = null;
     state.eventsEnabled = false;
     return state;
   }

   /**
    * It will remove resize/scroll events and won't recalculate popper position
    * when they are triggered. It also won't trigger `onUpdate` callback anymore,
    * unless you call `update` method manually.
    * @method
    * @memberof Popper
    */
   function disableEventListeners() {
     if (this.state.eventsEnabled) {
       cancelAnimationFrame(this.scheduleUpdate);
       this.state = removeEventListeners(this.reference, this.state);
     }
   }

   /**
    * Tells if a given input is a number
    * @method
    * @memberof Popper.Utils
    * @param {*} input to check
    * @return {Boolean}
    */
   function isNumeric(n) {
     return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
   }

   /**
    * Set the style to the given popper
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element - Element to apply the style to
    * @argument {Object} styles
    * Object with a list of properties and values which will be applied to the element
    */
   function setStyles(element, styles) {
     Object.keys(styles).forEach(function (prop) {
       var unit = '';
       // add unit if the value is numeric and is one of the following
       if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
         unit = 'px';
       }
       element.style[prop] = styles[prop] + unit;
     });
   }

   /**
    * Set the attributes to the given popper
    * @method
    * @memberof Popper.Utils
    * @argument {Element} element - Element to apply the attributes to
    * @argument {Object} styles
    * Object with a list of properties and values which will be applied to the element
    */
   function setAttributes(element, attributes) {
     Object.keys(attributes).forEach(function (prop) {
       var value = attributes[prop];
       if (value !== false) {
         element.setAttribute(prop, attributes[prop]);
       } else {
         element.removeAttribute(prop);
       }
     });
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Object} data.styles - List of style properties - values to apply to popper element
    * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The same data object
    */
   function applyStyle(data) {
     // any property present in `data.styles` will be applied to the popper,
     // in this way we can make the 3rd party modifiers add custom styles to it
     // Be aware, modifiers could override the properties defined in the previous
     // lines of this modifier!
     setStyles(data.instance.popper, data.styles);

     // any property present in `data.attributes` will be applied to the popper,
     // they will be set as HTML attributes of the element
     setAttributes(data.instance.popper, data.attributes);

     // if arrowElement is defined and arrowStyles has some properties
     if (data.arrowElement && Object.keys(data.arrowStyles).length) {
       setStyles(data.arrowElement, data.arrowStyles);
     }

     return data;
   }

   /**
    * Set the x-placement attribute before everything else because it could be used
    * to add margins to the popper margins needs to be calculated to get the
    * correct popper offsets.
    * @method
    * @memberof Popper.modifiers
    * @param {HTMLElement} reference - The reference element used to position the popper
    * @param {HTMLElement} popper - The HTML element used as popper
    * @param {Object} options - Popper.js options
    */
   function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
     // compute reference element offsets
     var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

     // compute auto placement, store placement inside the data object,
     // modifiers will be able to edit `placement` if needed
     // and refer to originalPlacement to know the original value
     var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

     popper.setAttribute('x-placement', placement);

     // Apply `position` to popper before anything else because
     // without the position applied we can't guarantee correct computations
     setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

     return options;
   }

   /**
    * @function
    * @memberof Popper.Utils
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Boolean} shouldRound - If the offsets should be rounded at all
    * @returns {Object} The popper's position offsets rounded
    *
    * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
    * good as it can be within reason.
    * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
    *
    * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
    * as well on High DPI screens).
    *
    * Firefox prefers no rounding for positioning and does not have blurriness on
    * high DPI screens.
    *
    * Only horizontal placement and left/right values need to be considered.
    */
   function getRoundedOffsets(data, shouldRound) {
     var _data$offsets = data.offsets,
         popper = _data$offsets.popper,
         reference = _data$offsets.reference;
     var round = Math.round,
         floor = Math.floor;

     var noRound = function noRound(v) {
       return v;
     };

     var referenceWidth = round(reference.width);
     var popperWidth = round(popper.width);

     var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
     var isVariation = data.placement.indexOf('-') !== -1;
     var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
     var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

     var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
     var verticalToInteger = !shouldRound ? noRound : round;

     return {
       left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
       top: verticalToInteger(popper.top),
       bottom: verticalToInteger(popper.bottom),
       right: horizontalToInteger(popper.right)
     };
   }

   var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function computeStyle(data, options) {
     var x = options.x,
         y = options.y;
     var popper = data.offsets.popper;

     // Remove this legacy support in Popper.js v2

     var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
       return modifier.name === 'applyStyle';
     }).gpuAcceleration;
     if (legacyGpuAccelerationOption !== undefined) {
       console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
     }
     var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

     var offsetParent = getOffsetParent(data.instance.popper);
     var offsetParentRect = getBoundingClientRect(offsetParent);

     // Styles
     var styles = {
       position: popper.position
     };

     var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

     var sideA = x === 'bottom' ? 'top' : 'bottom';
     var sideB = y === 'right' ? 'left' : 'right';

     // if gpuAcceleration is set to `true` and transform is supported,
     //  we use `translate3d` to apply the position to the popper we
     // automatically use the supported prefixed version if needed
     var prefixedProperty = getSupportedPropertyName('transform');

     // now, let's make a step back and look at this code closely (wtf?)
     // If the content of the popper grows once it's been positioned, it
     // may happen that the popper gets misplaced because of the new content
     // overflowing its reference element
     // To avoid this problem, we provide two options (x and y), which allow
     // the consumer to define the offset origin.
     // If we position a popper on top of a reference element, we can set
     // `x` to `top` to make the popper grow towards its top instead of
     // its bottom.
     var left = void 0,
         top = void 0;
     if (sideA === 'bottom') {
       // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
       // and not the bottom of the html element
       if (offsetParent.nodeName === 'HTML') {
         top = -offsetParent.clientHeight + offsets.bottom;
       } else {
         top = -offsetParentRect.height + offsets.bottom;
       }
     } else {
       top = offsets.top;
     }
     if (sideB === 'right') {
       if (offsetParent.nodeName === 'HTML') {
         left = -offsetParent.clientWidth + offsets.right;
       } else {
         left = -offsetParentRect.width + offsets.right;
       }
     } else {
       left = offsets.left;
     }
     if (gpuAcceleration && prefixedProperty) {
       styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
       styles[sideA] = 0;
       styles[sideB] = 0;
       styles.willChange = 'transform';
     } else {
       // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
       var invertTop = sideA === 'bottom' ? -1 : 1;
       var invertLeft = sideB === 'right' ? -1 : 1;
       styles[sideA] = top * invertTop;
       styles[sideB] = left * invertLeft;
       styles.willChange = sideA + ', ' + sideB;
     }

     // Attributes
     var attributes = {
       'x-placement': data.placement
     };

     // Update `data` attributes, styles and arrowStyles
     data.attributes = _extends({}, attributes, data.attributes);
     data.styles = _extends({}, styles, data.styles);
     data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

     return data;
   }

   /**
    * Helper used to know if the given modifier depends from another one.<br />
    * It checks if the needed modifier is listed and enabled.
    * @method
    * @memberof Popper.Utils
    * @param {Array} modifiers - list of modifiers
    * @param {String} requestingName - name of requesting modifier
    * @param {String} requestedName - name of requested modifier
    * @returns {Boolean}
    */
   function isModifierRequired(modifiers, requestingName, requestedName) {
     var requesting = find(modifiers, function (_ref) {
       var name = _ref.name;
       return name === requestingName;
     });

     var isRequired = !!requesting && modifiers.some(function (modifier) {
       return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
     });

     if (!isRequired) {
       var _requesting = '`' + requestingName + '`';
       var requested = '`' + requestedName + '`';
       console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
     }
     return isRequired;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function arrow(data, options) {
     var _data$offsets$arrow;

     // arrow depends on keepTogether in order to work
     if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
       return data;
     }

     var arrowElement = options.element;

     // if arrowElement is a string, suppose it's a CSS selector
     if (typeof arrowElement === 'string') {
       arrowElement = data.instance.popper.querySelector(arrowElement);

       // if arrowElement is not found, don't run the modifier
       if (!arrowElement) {
         return data;
       }
     } else {
       // if the arrowElement isn't a query selector we must check that the
       // provided DOM node is child of its popper node
       if (!data.instance.popper.contains(arrowElement)) {
         console.warn('WARNING: `arrow.element` must be child of its popper element!');
         return data;
       }
     }

     var placement = data.placement.split('-')[0];
     var _data$offsets = data.offsets,
         popper = _data$offsets.popper,
         reference = _data$offsets.reference;

     var isVertical = ['left', 'right'].indexOf(placement) !== -1;

     var len = isVertical ? 'height' : 'width';
     var sideCapitalized = isVertical ? 'Top' : 'Left';
     var side = sideCapitalized.toLowerCase();
     var altSide = isVertical ? 'left' : 'top';
     var opSide = isVertical ? 'bottom' : 'right';
     var arrowElementSize = getOuterSizes(arrowElement)[len];

     //
     // extends keepTogether behavior making sure the popper and its
     // reference have enough pixels in conjunction
     //

     // top/left side
     if (reference[opSide] - arrowElementSize < popper[side]) {
       data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
     }
     // bottom/right side
     if (reference[side] + arrowElementSize > popper[opSide]) {
       data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
     }
     data.offsets.popper = getClientRect(data.offsets.popper);

     // compute center of the popper
     var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

     // Compute the sideValue using the updated popper offsets
     // take popper margin in account because we don't have this info available
     var css = getStyleComputedProperty(data.instance.popper);
     var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
     var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
     var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

     // prevent arrowElement from being placed not contiguously to its popper
     sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

     data.arrowElement = arrowElement;
     data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

     return data;
   }

   /**
    * Get the opposite placement variation of the given one
    * @method
    * @memberof Popper.Utils
    * @argument {String} placement variation
    * @returns {String} flipped placement variation
    */
   function getOppositeVariation(variation) {
     if (variation === 'end') {
       return 'start';
     } else if (variation === 'start') {
       return 'end';
     }
     return variation;
   }

   /**
    * List of accepted placements to use as values of the `placement` option.<br />
    * Valid placements are:
    * - `auto`
    * - `top`
    * - `right`
    * - `bottom`
    * - `left`
    *
    * Each placement can have a variation from this list:
    * - `-start`
    * - `-end`
    *
    * Variations are interpreted easily if you think of them as the left to right
    * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
    * is right.<br />
    * Vertically (`left` and `right`), `start` is top and `end` is bottom.
    *
    * Some valid examples are:
    * - `top-end` (on top of reference, right aligned)
    * - `right-start` (on right of reference, top aligned)
    * - `bottom` (on bottom, centered)
    * - `auto-end` (on the side with more space available, alignment depends by placement)
    *
    * @static
    * @type {Array}
    * @enum {String}
    * @readonly
    * @method placements
    * @memberof Popper
    */
   var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

   // Get rid of `auto` `auto-start` and `auto-end`
   var validPlacements = placements.slice(3);

   /**
    * Given an initial placement, returns all the subsequent placements
    * clockwise (or counter-clockwise).
    *
    * @method
    * @memberof Popper.Utils
    * @argument {String} placement - A valid placement (it accepts variations)
    * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
    * @returns {Array} placements including their variations
    */
   function clockwise(placement) {
     var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

     var index = validPlacements.indexOf(placement);
     var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
     return counter ? arr.reverse() : arr;
   }

   var BEHAVIORS = {
     FLIP: 'flip',
     CLOCKWISE: 'clockwise',
     COUNTERCLOCKWISE: 'counterclockwise'
   };

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function flip(data, options) {
     // if `inner` modifier is enabled, we can't use the `flip` modifier
     if (isModifierEnabled(data.instance.modifiers, 'inner')) {
       return data;
     }

     if (data.flipped && data.placement === data.originalPlacement) {
       // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
       return data;
     }

     var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

     var placement = data.placement.split('-')[0];
     var placementOpposite = getOppositePlacement(placement);
     var variation = data.placement.split('-')[1] || '';

     var flipOrder = [];

     switch (options.behavior) {
       case BEHAVIORS.FLIP:
         flipOrder = [placement, placementOpposite];
         break;
       case BEHAVIORS.CLOCKWISE:
         flipOrder = clockwise(placement);
         break;
       case BEHAVIORS.COUNTERCLOCKWISE:
         flipOrder = clockwise(placement, true);
         break;
       default:
         flipOrder = options.behavior;
     }

     flipOrder.forEach(function (step, index) {
       if (placement !== step || flipOrder.length === index + 1) {
         return data;
       }

       placement = data.placement.split('-')[0];
       placementOpposite = getOppositePlacement(placement);

       var popperOffsets = data.offsets.popper;
       var refOffsets = data.offsets.reference;

       // using floor because the reference offsets may contain decimals we are not going to consider here
       var floor = Math.floor;
       var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

       var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
       var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
       var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
       var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

       var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

       // flip the variation if required
       var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

       // flips variation if reference element overflows boundaries
       var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

       // flips variation if popper content overflows boundaries
       var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

       var flippedVariation = flippedVariationByRef || flippedVariationByContent;

       if (overlapsRef || overflowsBoundaries || flippedVariation) {
         // this boolean to detect any flip loop
         data.flipped = true;

         if (overlapsRef || overflowsBoundaries) {
           placement = flipOrder[index + 1];
         }

         if (flippedVariation) {
           variation = getOppositeVariation(variation);
         }

         data.placement = placement + (variation ? '-' + variation : '');

         // this object contains `position`, we want to preserve it along with
         // any additional property we may add in the future
         data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

         data = runModifiers(data.instance.modifiers, data, 'flip');
       }
     });
     return data;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function keepTogether(data) {
     var _data$offsets = data.offsets,
         popper = _data$offsets.popper,
         reference = _data$offsets.reference;

     var placement = data.placement.split('-')[0];
     var floor = Math.floor;
     var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
     var side = isVertical ? 'right' : 'bottom';
     var opSide = isVertical ? 'left' : 'top';
     var measurement = isVertical ? 'width' : 'height';

     if (popper[side] < floor(reference[opSide])) {
       data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
     }
     if (popper[opSide] > floor(reference[side])) {
       data.offsets.popper[opSide] = floor(reference[side]);
     }

     return data;
   }

   /**
    * Converts a string containing value + unit into a px value number
    * @function
    * @memberof {modifiers~offset}
    * @private
    * @argument {String} str - Value + unit string
    * @argument {String} measurement - `height` or `width`
    * @argument {Object} popperOffsets
    * @argument {Object} referenceOffsets
    * @returns {Number|String}
    * Value in pixels, or original string if no values were extracted
    */
   function toValue(str, measurement, popperOffsets, referenceOffsets) {
     // separate value from unit
     var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
     var value = +split[1];
     var unit = split[2];

     // If it's not a number it's an operator, I guess
     if (!value) {
       return str;
     }

     if (unit.indexOf('%') === 0) {
       var element = void 0;
       switch (unit) {
         case '%p':
           element = popperOffsets;
           break;
         case '%':
         case '%r':
         default:
           element = referenceOffsets;
       }

       var rect = getClientRect(element);
       return rect[measurement] / 100 * value;
     } else if (unit === 'vh' || unit === 'vw') {
       // if is a vh or vw, we calculate the size based on the viewport
       var size = void 0;
       if (unit === 'vh') {
         size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
       } else {
         size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
       }
       return size / 100 * value;
     } else {
       // if is an explicit pixel unit, we get rid of the unit and keep the value
       // if is an implicit unit, it's px, and we return just the value
       return value;
     }
   }

   /**
    * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
    * @function
    * @memberof {modifiers~offset}
    * @private
    * @argument {String} offset
    * @argument {Object} popperOffsets
    * @argument {Object} referenceOffsets
    * @argument {String} basePlacement
    * @returns {Array} a two cells array with x and y offsets in numbers
    */
   function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
     var offsets = [0, 0];

     // Use height if placement is left or right and index is 0 otherwise use width
     // in this way the first offset will use an axis and the second one
     // will use the other one
     var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

     // Split the offset string to obtain a list of values and operands
     // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
     var fragments = offset.split(/(\+|\-)/).map(function (frag) {
       return frag.trim();
     });

     // Detect if the offset string contains a pair of values or a single one
     // they could be separated by comma or space
     var divider = fragments.indexOf(find(fragments, function (frag) {
       return frag.search(/,|\s/) !== -1;
     }));

     if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
       console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
     }

     // If divider is found, we divide the list of values and operands to divide
     // them by ofset X and Y.
     var splitRegex = /\s*,\s*|\s+/;
     var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

     // Convert the values with units to absolute pixels to allow our computations
     ops = ops.map(function (op, index) {
       // Most of the units rely on the orientation of the popper
       var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
       var mergeWithPrevious = false;
       return op
       // This aggregates any `+` or `-` sign that aren't considered operators
       // e.g.: 10 + +5 => [10, +, +5]
       .reduce(function (a, b) {
         if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
           a[a.length - 1] = b;
           mergeWithPrevious = true;
           return a;
         } else if (mergeWithPrevious) {
           a[a.length - 1] += b;
           mergeWithPrevious = false;
           return a;
         } else {
           return a.concat(b);
         }
       }, [])
       // Here we convert the string values into number values (in px)
       .map(function (str) {
         return toValue(str, measurement, popperOffsets, referenceOffsets);
       });
     });

     // Loop trough the offsets arrays and execute the operations
     ops.forEach(function (op, index) {
       op.forEach(function (frag, index2) {
         if (isNumeric(frag)) {
           offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
         }
       });
     });
     return offsets;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @argument {Number|String} options.offset=0
    * The offset value as described in the modifier description
    * @returns {Object} The data object, properly modified
    */
   function offset(data, _ref) {
     var offset = _ref.offset;
     var placement = data.placement,
         _data$offsets = data.offsets,
         popper = _data$offsets.popper,
         reference = _data$offsets.reference;

     var basePlacement = placement.split('-')[0];

     var offsets = void 0;
     if (isNumeric(+offset)) {
       offsets = [+offset, 0];
     } else {
       offsets = parseOffset(offset, popper, reference, basePlacement);
     }

     if (basePlacement === 'left') {
       popper.top += offsets[0];
       popper.left -= offsets[1];
     } else if (basePlacement === 'right') {
       popper.top += offsets[0];
       popper.left += offsets[1];
     } else if (basePlacement === 'top') {
       popper.left += offsets[0];
       popper.top -= offsets[1];
     } else if (basePlacement === 'bottom') {
       popper.left += offsets[0];
       popper.top += offsets[1];
     }

     data.popper = popper;
     return data;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function preventOverflow(data, options) {
     var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

     // If offsetParent is the reference element, we really want to
     // go one step up and use the next offsetParent as reference to
     // avoid to make this modifier completely useless and look like broken
     if (data.instance.reference === boundariesElement) {
       boundariesElement = getOffsetParent(boundariesElement);
     }

     // NOTE: DOM access here
     // resets the popper's position so that the document size can be calculated excluding
     // the size of the popper element itself
     var transformProp = getSupportedPropertyName('transform');
     var popperStyles = data.instance.popper.style; // assignment to help minification
     var top = popperStyles.top,
         left = popperStyles.left,
         transform = popperStyles[transformProp];

     popperStyles.top = '';
     popperStyles.left = '';
     popperStyles[transformProp] = '';

     var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

     // NOTE: DOM access here
     // restores the original style properties after the offsets have been computed
     popperStyles.top = top;
     popperStyles.left = left;
     popperStyles[transformProp] = transform;

     options.boundaries = boundaries;

     var order = options.priority;
     var popper = data.offsets.popper;

     var check = {
       primary: function primary(placement) {
         var value = popper[placement];
         if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
           value = Math.max(popper[placement], boundaries[placement]);
         }
         return defineProperty({}, placement, value);
       },
       secondary: function secondary(placement) {
         var mainSide = placement === 'right' ? 'left' : 'top';
         var value = popper[mainSide];
         if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
           value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
         }
         return defineProperty({}, mainSide, value);
       }
     };

     order.forEach(function (placement) {
       var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
       popper = _extends({}, popper, check[side](placement));
     });

     data.offsets.popper = popper;

     return data;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function shift(data) {
     var placement = data.placement;
     var basePlacement = placement.split('-')[0];
     var shiftvariation = placement.split('-')[1];

     // if shift shiftvariation is specified, run the modifier
     if (shiftvariation) {
       var _data$offsets = data.offsets,
           reference = _data$offsets.reference,
           popper = _data$offsets.popper;

       var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
       var side = isVertical ? 'left' : 'top';
       var measurement = isVertical ? 'width' : 'height';

       var shiftOffsets = {
         start: defineProperty({}, side, reference[side]),
         end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
       };

       data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
     }

     return data;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function hide(data) {
     if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
       return data;
     }

     var refRect = data.offsets.reference;
     var bound = find(data.instance.modifiers, function (modifier) {
       return modifier.name === 'preventOverflow';
     }).boundaries;

     if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
       // Avoid unnecessary DOM access if visibility hasn't changed
       if (data.hide === true) {
         return data;
       }

       data.hide = true;
       data.attributes['x-out-of-boundaries'] = '';
     } else {
       // Avoid unnecessary DOM access if visibility hasn't changed
       if (data.hide === false) {
         return data;
       }

       data.hide = false;
       data.attributes['x-out-of-boundaries'] = false;
     }

     return data;
   }

   /**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by `update` method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */
   function inner(data) {
     var placement = data.placement;
     var basePlacement = placement.split('-')[0];
     var _data$offsets = data.offsets,
         popper = _data$offsets.popper,
         reference = _data$offsets.reference;

     var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

     var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

     popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

     data.placement = getOppositePlacement(placement);
     data.offsets.popper = getClientRect(popper);

     return data;
   }

   /**
    * Modifier function, each modifier can have a function of this type assigned
    * to its `fn` property.<br />
    * These functions will be called on each update, this means that you must
    * make sure they are performant enough to avoid performance bottlenecks.
    *
    * @function ModifierFn
    * @argument {dataObject} data - The data object generated by `update` method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {dataObject} The data object, properly modified
    */

   /**
    * Modifiers are plugins used to alter the behavior of your poppers.<br />
    * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
    * needed by the library.
    *
    * Usually you don't want to override the `order`, `fn` and `onLoad` props.
    * All the other properties are configurations that could be tweaked.
    * @namespace modifiers
    */
   var modifiers = {
     /**
      * Modifier used to shift the popper on the start or end of its reference
      * element.<br />
      * It will read the variation of the `placement` property.<br />
      * It can be one either `-end` or `-start`.
      * @memberof modifiers
      * @inner
      */
     shift: {
       /** @prop {number} order=100 - Index used to define the order of execution */
       order: 100,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: shift
     },

     /**
      * The `offset` modifier can shift your popper on both its axis.
      *
      * It accepts the following units:
      * - `px` or unit-less, interpreted as pixels
      * - `%` or `%r`, percentage relative to the length of the reference element
      * - `%p`, percentage relative to the length of the popper element
      * - `vw`, CSS viewport width unit
      * - `vh`, CSS viewport height unit
      *
      * For length is intended the main axis relative to the placement of the popper.<br />
      * This means that if the placement is `top` or `bottom`, the length will be the
      * `width`. In case of `left` or `right`, it will be the `height`.
      *
      * You can provide a single value (as `Number` or `String`), or a pair of values
      * as `String` divided by a comma or one (or more) white spaces.<br />
      * The latter is a deprecated method because it leads to confusion and will be
      * removed in v2.<br />
      * Additionally, it accepts additions and subtractions between different units.
      * Note that multiplications and divisions aren't supported.
      *
      * Valid examples are:
      * ```
      * 10
      * '10%'
      * '10, 10'
      * '10%, 10'
      * '10 + 10%'
      * '10 - 5vh + 3%'
      * '-10px + 5vh, 5px - 6%'
      * ```
      * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
      * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
      * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
      *
      * @memberof modifiers
      * @inner
      */
     offset: {
       /** @prop {number} order=200 - Index used to define the order of execution */
       order: 200,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: offset,
       /** @prop {Number|String} offset=0
        * The offset value as described in the modifier description
        */
       offset: 0
     },

     /**
      * Modifier used to prevent the popper from being positioned outside the boundary.
      *
      * A scenario exists where the reference itself is not within the boundaries.<br />
      * We can say it has "escaped the boundaries" — or just "escaped".<br />
      * In this case we need to decide whether the popper should either:
      *
      * - detach from the reference and remain "trapped" in the boundaries, or
      * - if it should ignore the boundary and "escape with its reference"
      *
      * When `escapeWithReference` is set to`true` and reference is completely
      * outside its boundaries, the popper will overflow (or completely leave)
      * the boundaries in order to remain attached to the edge of the reference.
      *
      * @memberof modifiers
      * @inner
      */
     preventOverflow: {
       /** @prop {number} order=300 - Index used to define the order of execution */
       order: 300,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: preventOverflow,
       /**
        * @prop {Array} [priority=['left','right','top','bottom']]
        * Popper will try to prevent overflow following these priorities by default,
        * then, it could overflow on the left and on top of the `boundariesElement`
        */
       priority: ['left', 'right', 'top', 'bottom'],
       /**
        * @prop {number} padding=5
        * Amount of pixel used to define a minimum distance between the boundaries
        * and the popper. This makes sure the popper always has a little padding
        * between the edges of its container
        */
       padding: 5,
       /**
        * @prop {String|HTMLElement} boundariesElement='scrollParent'
        * Boundaries used by the modifier. Can be `scrollParent`, `window`,
        * `viewport` or any DOM element.
        */
       boundariesElement: 'scrollParent'
     },

     /**
      * Modifier used to make sure the reference and its popper stay near each other
      * without leaving any gap between the two. Especially useful when the arrow is
      * enabled and you want to ensure that it points to its reference element.
      * It cares only about the first axis. You can still have poppers with margin
      * between the popper and its reference element.
      * @memberof modifiers
      * @inner
      */
     keepTogether: {
       /** @prop {number} order=400 - Index used to define the order of execution */
       order: 400,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: keepTogether
     },

     /**
      * This modifier is used to move the `arrowElement` of the popper to make
      * sure it is positioned between the reference element and its popper element.
      * It will read the outer size of the `arrowElement` node to detect how many
      * pixels of conjunction are needed.
      *
      * It has no effect if no `arrowElement` is provided.
      * @memberof modifiers
      * @inner
      */
     arrow: {
       /** @prop {number} order=500 - Index used to define the order of execution */
       order: 500,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: arrow,
       /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
       element: '[x-arrow]'
     },

     /**
      * Modifier used to flip the popper's placement when it starts to overlap its
      * reference element.
      *
      * Requires the `preventOverflow` modifier before it in order to work.
      *
      * **NOTE:** this modifier will interrupt the current update cycle and will
      * restart it if it detects the need to flip the placement.
      * @memberof modifiers
      * @inner
      */
     flip: {
       /** @prop {number} order=600 - Index used to define the order of execution */
       order: 600,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: flip,
       /**
        * @prop {String|Array} behavior='flip'
        * The behavior used to change the popper's placement. It can be one of
        * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
        * placements (with optional variations)
        */
       behavior: 'flip',
       /**
        * @prop {number} padding=5
        * The popper will flip if it hits the edges of the `boundariesElement`
        */
       padding: 5,
       /**
        * @prop {String|HTMLElement} boundariesElement='viewport'
        * The element which will define the boundaries of the popper position.
        * The popper will never be placed outside of the defined boundaries
        * (except if `keepTogether` is enabled)
        */
       boundariesElement: 'viewport',
       /**
        * @prop {Boolean} flipVariations=false
        * The popper will switch placement variation between `-start` and `-end` when
        * the reference element overlaps its boundaries.
        *
        * The original placement should have a set variation.
        */
       flipVariations: false,
       /**
        * @prop {Boolean} flipVariationsByContent=false
        * The popper will switch placement variation between `-start` and `-end` when
        * the popper element overlaps its reference boundaries.
        *
        * The original placement should have a set variation.
        */
       flipVariationsByContent: false
     },

     /**
      * Modifier used to make the popper flow toward the inner of the reference element.
      * By default, when this modifier is disabled, the popper will be placed outside
      * the reference element.
      * @memberof modifiers
      * @inner
      */
     inner: {
       /** @prop {number} order=700 - Index used to define the order of execution */
       order: 700,
       /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
       enabled: false,
       /** @prop {ModifierFn} */
       fn: inner
     },

     /**
      * Modifier used to hide the popper when its reference element is outside of the
      * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
      * be used to hide with a CSS selector the popper when its reference is
      * out of boundaries.
      *
      * Requires the `preventOverflow` modifier before it in order to work.
      * @memberof modifiers
      * @inner
      */
     hide: {
       /** @prop {number} order=800 - Index used to define the order of execution */
       order: 800,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: hide
     },

     /**
      * Computes the style that will be applied to the popper element to gets
      * properly positioned.
      *
      * Note that this modifier will not touch the DOM, it just prepares the styles
      * so that `applyStyle` modifier can apply it. This separation is useful
      * in case you need to replace `applyStyle` with a custom implementation.
      *
      * This modifier has `850` as `order` value to maintain backward compatibility
      * with previous versions of Popper.js. Expect the modifiers ordering method
      * to change in future major versions of the library.
      *
      * @memberof modifiers
      * @inner
      */
     computeStyle: {
       /** @prop {number} order=850 - Index used to define the order of execution */
       order: 850,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: computeStyle,
       /**
        * @prop {Boolean} gpuAcceleration=true
        * If true, it uses the CSS 3D transformation to position the popper.
        * Otherwise, it will use the `top` and `left` properties
        */
       gpuAcceleration: true,
       /**
        * @prop {string} [x='bottom']
        * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
        * Change this if your popper should grow in a direction different from `bottom`
        */
       x: 'bottom',
       /**
        * @prop {string} [x='left']
        * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
        * Change this if your popper should grow in a direction different from `right`
        */
       y: 'right'
     },

     /**
      * Applies the computed styles to the popper element.
      *
      * All the DOM manipulations are limited to this modifier. This is useful in case
      * you want to integrate Popper.js inside a framework or view library and you
      * want to delegate all the DOM manipulations to it.
      *
      * Note that if you disable this modifier, you must make sure the popper element
      * has its position set to `absolute` before Popper.js can do its work!
      *
      * Just disable this modifier and define your own to achieve the desired effect.
      *
      * @memberof modifiers
      * @inner
      */
     applyStyle: {
       /** @prop {number} order=900 - Index used to define the order of execution */
       order: 900,
       /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
       enabled: true,
       /** @prop {ModifierFn} */
       fn: applyStyle,
       /** @prop {Function} */
       onLoad: applyStyleOnLoad,
       /**
        * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
        * @prop {Boolean} gpuAcceleration=true
        * If true, it uses the CSS 3D transformation to position the popper.
        * Otherwise, it will use the `top` and `left` properties
        */
       gpuAcceleration: undefined
     }
   };

   /**
    * The `dataObject` is an object containing all the information used by Popper.js.
    * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
    * @name dataObject
    * @property {Object} data.instance The Popper.js instance
    * @property {String} data.placement Placement applied to popper
    * @property {String} data.originalPlacement Placement originally defined on init
    * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
    * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
    * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
    * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
    * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
    * @property {Object} data.boundaries Offsets of the popper boundaries
    * @property {Object} data.offsets The measurements of popper, reference and arrow elements
    * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
    * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
    * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
    */

   /**
    * Default options provided to Popper.js constructor.<br />
    * These can be overridden using the `options` argument of Popper.js.<br />
    * To override an option, simply pass an object with the same
    * structure of the `options` object, as the 3rd argument. For example:
    * ```
    * new Popper(ref, pop, {
    *   modifiers: {
    *     preventOverflow: { enabled: false }
    *   }
    * })
    * ```
    * @type {Object}
    * @static
    * @memberof Popper
    */
   var Defaults = {
     /**
      * Popper's placement.
      * @prop {Popper.placements} placement='bottom'
      */
     placement: 'bottom',

     /**
      * Set this to true if you want popper to position it self in 'fixed' mode
      * @prop {Boolean} positionFixed=false
      */
     positionFixed: false,

     /**
      * Whether events (resize, scroll) are initially enabled.
      * @prop {Boolean} eventsEnabled=true
      */
     eventsEnabled: true,

     /**
      * Set to true if you want to automatically remove the popper when
      * you call the `destroy` method.
      * @prop {Boolean} removeOnDestroy=false
      */
     removeOnDestroy: false,

     /**
      * Callback called when the popper is created.<br />
      * By default, it is set to no-op.<br />
      * Access Popper.js instance with `data.instance`.
      * @prop {onCreate}
      */
     onCreate: function onCreate() {},

     /**
      * Callback called when the popper is updated. This callback is not called
      * on the initialization/creation of the popper, but only on subsequent
      * updates.<br />
      * By default, it is set to no-op.<br />
      * Access Popper.js instance with `data.instance`.
      * @prop {onUpdate}
      */
     onUpdate: function onUpdate() {},

     /**
      * List of modifiers used to modify the offsets before they are applied to the popper.
      * They provide most of the functionalities of Popper.js.
      * @prop {modifiers}
      */
     modifiers: modifiers
   };

   /**
    * @callback onCreate
    * @param {dataObject} data
    */

   /**
    * @callback onUpdate
    * @param {dataObject} data
    */

   // Utils
   // Methods
   var Popper = function () {
     /**
      * Creates a new Popper.js instance.
      * @class Popper
      * @param {Element|referenceObject} reference - The reference element used to position the popper
      * @param {Element} popper - The HTML / XML element used as the popper
      * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
      * @return {Object} instance - The generated Popper.js instance
      */
     function Popper(reference, popper) {
       var _this = this;

       var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
       classCallCheck(this, Popper);

       this.scheduleUpdate = function () {
         return requestAnimationFrame(_this.update);
       };

       // make update() debounced, so that it only runs at most once-per-tick
       this.update = debounce(this.update.bind(this));

       // with {} we create a new object with the options inside it
       this.options = _extends({}, Popper.Defaults, options);

       // init state
       this.state = {
         isDestroyed: false,
         isCreated: false,
         scrollParents: []
       };

       // get reference and popper elements (allow jQuery wrappers)
       this.reference = reference && reference.jquery ? reference[0] : reference;
       this.popper = popper && popper.jquery ? popper[0] : popper;

       // Deep merge modifiers options
       this.options.modifiers = {};
       Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
         _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
       });

       // Refactoring modifiers' list (Object => Array)
       this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
         return _extends({
           name: name
         }, _this.options.modifiers[name]);
       })
       // sort the modifiers by order
       .sort(function (a, b) {
         return a.order - b.order;
       });

       // modifiers have the ability to execute arbitrary code when Popper.js get inited
       // such code is executed in the same order of its modifier
       // they could add new properties to their options configuration
       // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
       this.modifiers.forEach(function (modifierOptions) {
         if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
           modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
         }
       });

       // fire the first update to position the popper in the right place
       this.update();

       var eventsEnabled = this.options.eventsEnabled;
       if (eventsEnabled) {
         // setup event listeners, they will take care of update the position in specific situations
         this.enableEventListeners();
       }

       this.state.eventsEnabled = eventsEnabled;
     }

     // We can't use class properties because they don't get listed in the
     // class prototype and break stuff like Sinon stubs


     createClass(Popper, [{
       key: 'update',
       value: function update$$1() {
         return update.call(this);
       }
     }, {
       key: 'destroy',
       value: function destroy$$1() {
         return destroy.call(this);
       }
     }, {
       key: 'enableEventListeners',
       value: function enableEventListeners$$1() {
         return enableEventListeners.call(this);
       }
     }, {
       key: 'disableEventListeners',
       value: function disableEventListeners$$1() {
         return disableEventListeners.call(this);
       }

       /**
        * Schedules an update. It will run on the next UI update available.
        * @method scheduleUpdate
        * @memberof Popper
        */


       /**
        * Collection of utilities useful when writing custom modifiers.
        * Starting from version 1.7, this method is available only if you
        * include `popper-utils.js` before `popper.js`.
        *
        * **DEPRECATION**: This way to access PopperUtils is deprecated
        * and will be removed in v2! Use the PopperUtils module directly instead.
        * Due to the high instability of the methods contained in Utils, we can't
        * guarantee them to follow semver. Use them at your own risk!
        * @static
        * @private
        * @type {Object}
        * @deprecated since version 1.8
        * @member Utils
        * @memberof Popper
        */

     }]);
     return Popper;
   }();

   /**
    * The `referenceObject` is an object that provides an interface compatible with Popper.js
    * and lets you use it as replacement of a real DOM node.<br />
    * You can use this method to position a popper relatively to a set of coordinates
    * in case you don't have a DOM node to use as reference.
    *
    * ```
    * new Popper(referenceObject, popperNode);
    * ```
    *
    * NB: This feature isn't supported in Internet Explorer 10.
    * @name referenceObject
    * @property {Function} data.getBoundingClientRect
    * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
    * @property {number} data.clientWidth
    * An ES6 getter that will return the width of the virtual reference element.
    * @property {number} data.clientHeight
    * An ES6 getter that will return the height of the virtual reference element.
    */


   Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
   Popper.placements = placements;
   Popper.Defaults = Defaults;

   var Popper$1 = Popper;

   /**
    * Constants
    */

   var NAME$6 = 'dropdown';
   var VERSION$6 = '4.6.1';
   var DATA_KEY$6 = 'bs.dropdown';
   var EVENT_KEY$6 = "." + DATA_KEY$6;
   var DATA_API_KEY$3 = '.data-api';
   var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
   var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

   var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

   var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

   var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

   var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

   var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

   var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
   var CLASS_NAME_DISABLED$1 = 'disabled';
   var CLASS_NAME_SHOW$5 = 'show';
   var CLASS_NAME_DROPUP = 'dropup';
   var CLASS_NAME_DROPRIGHT = 'dropright';
   var CLASS_NAME_DROPLEFT = 'dropleft';
   var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
   var CLASS_NAME_POSITION_STATIC = 'position-static';
   var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
   var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
   var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
   var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
   var EVENT_CLICK = "click" + EVENT_KEY$6;
   var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
   var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
   var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
   var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
   var SELECTOR_FORM_CHILD = '.dropdown form';
   var SELECTOR_MENU = '.dropdown-menu';
   var SELECTOR_NAVBAR_NAV = '.navbar-nav';
   var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
   var PLACEMENT_TOP = 'top-start';
   var PLACEMENT_TOPEND = 'top-end';
   var PLACEMENT_BOTTOM = 'bottom-start';
   var PLACEMENT_BOTTOMEND = 'bottom-end';
   var PLACEMENT_RIGHT = 'right-start';
   var PLACEMENT_LEFT = 'left-start';
   var Default$5 = {
     offset: 0,
     flip: true,
     boundary: 'scrollParent',
     reference: 'toggle',
     display: 'dynamic',
     popperConfig: null
   };
   var DefaultType$5 = {
     offset: '(number|string|function)',
     flip: 'boolean',
     boundary: '(string|element)',
     reference: '(string|element)',
     display: 'string',
     popperConfig: '(null|object)'
   };
   /**
    * Class definition
    */

   var Dropdown = /*#__PURE__*/function () {
     function Dropdown(element, config) {
       this._element = element;
       this._popper = null;
       this._config = this._getConfig(config);
       this._menu = this._getMenuElement();
       this._inNavbar = this._detectNavbar();

       this._addEventListeners();
     } // Getters


     var _proto = Dropdown.prototype;

     // Public
     _proto.toggle = function toggle() {
       if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
         return;
       }

       var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);

       Dropdown._clearMenus();

       if (isActive) {
         return;
       }

       this.show(true);
     };

     _proto.show = function show(usePopper) {
       if (usePopper === void 0) {
         usePopper = false;
       }

       if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
         return;
       }

       var relatedTarget = {
         relatedTarget: this._element
       };
       var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);

       var parent = Dropdown._getParentFromElement(this._element);

       $__default["default"](parent).trigger(showEvent);

       if (showEvent.isDefaultPrevented()) {
         return;
       } // Totally disable Popper for Dropdowns in Navbar


       if (!this._inNavbar && usePopper) {
         // Check for Popper dependency
         if (typeof Popper$1 === 'undefined') {
           throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
         }

         var referenceElement = this._element;

         if (this._config.reference === 'parent') {
           referenceElement = parent;
         } else if (Util.isElement(this._config.reference)) {
           referenceElement = this._config.reference; // Check if it's jQuery element

           if (typeof this._config.reference.jquery !== 'undefined') {
             referenceElement = this._config.reference[0];
           }
         } // If boundary is not `scrollParent`, then set position to `static`
         // to allow the menu to "escape" the scroll parent's boundaries
         // https://github.com/twbs/bootstrap/issues/24251


         if (this._config.boundary !== 'scrollParent') {
           $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
         }

         this._popper = new Popper$1(referenceElement, this._menu, this._getPopperConfig());
       } // If this is a touch-enabled device we add extra
       // empty mouseover listeners to the body's immediate children;
       // only needed because of broken event delegation on iOS
       // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


       if ('ontouchstart' in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
         $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
       }

       this._element.focus();

       this._element.setAttribute('aria-expanded', true);

       $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
       $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
     };

     _proto.hide = function hide() {
       if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
         return;
       }

       var relatedTarget = {
         relatedTarget: this._element
       };
       var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);

       var parent = Dropdown._getParentFromElement(this._element);

       $__default["default"](parent).trigger(hideEvent);

       if (hideEvent.isDefaultPrevented()) {
         return;
       }

       if (this._popper) {
         this._popper.destroy();
       }

       $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
       $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$6);
       $__default["default"](this._element).off(EVENT_KEY$6);
       this._element = null;
       this._menu = null;

       if (this._popper !== null) {
         this._popper.destroy();

         this._popper = null;
       }
     };

     _proto.update = function update() {
       this._inNavbar = this._detectNavbar();

       if (this._popper !== null) {
         this._popper.scheduleUpdate();
       }
     } // Private
     ;

     _proto._addEventListeners = function _addEventListeners() {
       var _this = this;

       $__default["default"](this._element).on(EVENT_CLICK, function (event) {
         event.preventDefault();
         event.stopPropagation();

         _this.toggle();
       });
     };

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, this.constructor.Default, $__default["default"](this._element).data(), config);
       Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
       return config;
     };

     _proto._getMenuElement = function _getMenuElement() {
       if (!this._menu) {
         var parent = Dropdown._getParentFromElement(this._element);

         if (parent) {
           this._menu = parent.querySelector(SELECTOR_MENU);
         }
       }

       return this._menu;
     };

     _proto._getPlacement = function _getPlacement() {
       var $parentDropdown = $__default["default"](this._element.parentNode);
       var placement = PLACEMENT_BOTTOM; // Handle dropup

       if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
         placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
       } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
         placement = PLACEMENT_RIGHT;
       } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
         placement = PLACEMENT_LEFT;
       } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
         placement = PLACEMENT_BOTTOMEND;
       }

       return placement;
     };

     _proto._detectNavbar = function _detectNavbar() {
       return $__default["default"](this._element).closest('.navbar').length > 0;
     };

     _proto._getOffset = function _getOffset() {
       var _this2 = this;

       var offset = {};

       if (typeof this._config.offset === 'function') {
         offset.fn = function (data) {
           data.offsets = _extends$1({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
           return data;
         };
       } else {
         offset.offset = this._config.offset;
       }

       return offset;
     };

     _proto._getPopperConfig = function _getPopperConfig() {
       var popperConfig = {
         placement: this._getPlacement(),
         modifiers: {
           offset: this._getOffset(),
           flip: {
             enabled: this._config.flip
           },
           preventOverflow: {
             boundariesElement: this._config.boundary
           }
         }
       }; // Disable Popper if we have a static display

       if (this._config.display === 'static') {
         popperConfig.modifiers.applyStyle = {
           enabled: false
         };
       }

       return _extends$1({}, popperConfig, this._config.popperConfig);
     } // Static
     ;

     Dropdown._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default["default"](this).data(DATA_KEY$6);

         var _config = typeof config === 'object' ? config : null;

         if (!data) {
           data = new Dropdown(this, _config);
           $__default["default"](this).data(DATA_KEY$6, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     Dropdown._clearMenus = function _clearMenus(event) {
       if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
         return;
       }

       var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

       for (var i = 0, len = toggles.length; i < len; i++) {
         var parent = Dropdown._getParentFromElement(toggles[i]);

         var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
         var relatedTarget = {
           relatedTarget: toggles[i]
         };

         if (event && event.type === 'click') {
           relatedTarget.clickEvent = event;
         }

         if (!context) {
           continue;
         }

         var dropdownMenu = context._menu;

         if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
           continue;
         }

         if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
           continue;
         }

         var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
         $__default["default"](parent).trigger(hideEvent);

         if (hideEvent.isDefaultPrevented()) {
           continue;
         } // If this is a touch-enabled device we remove the extra
         // empty mouseover listeners we added for iOS support


         if ('ontouchstart' in document.documentElement) {
           $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
         }

         toggles[i].setAttribute('aria-expanded', 'false');

         if (context._popper) {
           context._popper.destroy();
         }

         $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
         $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
       }
     };

     Dropdown._getParentFromElement = function _getParentFromElement(element) {
       var parent;
       var selector = Util.getSelectorFromElement(element);

       if (selector) {
         parent = document.querySelector(selector);
       }

       return parent || element.parentNode;
     } // eslint-disable-next-line complexity
     ;

     Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
       // If not input/textarea:
       //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
       // If input/textarea:
       //  - If space key => not a dropdown command
       //  - If key is other than escape
       //    - If key is not up or down => not a dropdown command
       //    - If trigger inside the menu => not a dropdown command
       if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
         return;
       }

       if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
         return;
       }

       var parent = Dropdown._getParentFromElement(this);

       var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);

       if (!isActive && event.which === ESCAPE_KEYCODE$1) {
         return;
       }

       event.preventDefault();
       event.stopPropagation();

       if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
         if (event.which === ESCAPE_KEYCODE$1) {
           $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
         }

         $__default["default"](this).trigger('click');
         return;
       }

       var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
         return $__default["default"](item).is(':visible');
       });

       if (items.length === 0) {
         return;
       }

       var index = items.indexOf(event.target);

       if (event.which === ARROW_UP_KEYCODE && index > 0) {
         // Up
         index--;
       }

       if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
         // Down
         index++;
       }

       if (index < 0) {
         index = 0;
       }

       items[index].focus();
     };

     _createClass(Dropdown, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$6;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$5;
       }
     }, {
       key: "DefaultType",
       get: function get() {
         return DefaultType$5;
       }
     }]);

     return Dropdown;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
     event.preventDefault();
     event.stopPropagation();

     Dropdown._jQueryInterface.call($__default["default"](this), 'toggle');
   }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function (e) {
     e.stopPropagation();
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
   $__default["default"].fn[NAME$6].Constructor = Dropdown;

   $__default["default"].fn[NAME$6].noConflict = function () {
     $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
     return Dropdown._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$5 = 'modal';
   var VERSION$5 = '4.6.1';
   var DATA_KEY$5 = 'bs.modal';
   var EVENT_KEY$5 = "." + DATA_KEY$5;
   var DATA_API_KEY$2 = '.data-api';
   var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
   var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

   var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
   var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
   var CLASS_NAME_BACKDROP = 'modal-backdrop';
   var CLASS_NAME_OPEN = 'modal-open';
   var CLASS_NAME_FADE$4 = 'fade';
   var CLASS_NAME_SHOW$4 = 'show';
   var CLASS_NAME_STATIC = 'modal-static';
   var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
   var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
   var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
   var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
   var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
   var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
   var EVENT_RESIZE = "resize" + EVENT_KEY$5;
   var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
   var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
   var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
   var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
   var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
   var SELECTOR_DIALOG = '.modal-dialog';
   var SELECTOR_MODAL_BODY = '.modal-body';
   var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
   var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
   var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
   var SELECTOR_STICKY_CONTENT = '.sticky-top';
   var Default$4 = {
     backdrop: true,
     keyboard: true,
     focus: true,
     show: true
   };
   var DefaultType$4 = {
     backdrop: '(boolean|string)',
     keyboard: 'boolean',
     focus: 'boolean',
     show: 'boolean'
   };
   /**
    * Class definition
    */

   var Modal = /*#__PURE__*/function () {
     function Modal(element, config) {
       this._config = this._getConfig(config);
       this._element = element;
       this._dialog = element.querySelector(SELECTOR_DIALOG);
       this._backdrop = null;
       this._isShown = false;
       this._isBodyOverflowing = false;
       this._ignoreBackdropClick = false;
       this._isTransitioning = false;
       this._scrollbarWidth = 0;
     } // Getters


     var _proto = Modal.prototype;

     // Public
     _proto.toggle = function toggle(relatedTarget) {
       return this._isShown ? this.hide() : this.show(relatedTarget);
     };

     _proto.show = function show(relatedTarget) {
       var _this = this;

       if (this._isShown || this._isTransitioning) {
         return;
       }

       var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
         relatedTarget: relatedTarget
       });
       $__default["default"](this._element).trigger(showEvent);

       if (showEvent.isDefaultPrevented()) {
         return;
       }

       this._isShown = true;

       if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
         this._isTransitioning = true;
       }

       this._checkScrollbar();

       this._setScrollbar();

       this._adjustDialog();

       this._setEscapeEvent();

       this._setResizeEvent();

       $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function (event) {
         return _this.hide(event);
       });
       $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
         $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
           if ($__default["default"](event.target).is(_this._element)) {
             _this._ignoreBackdropClick = true;
           }
         });
       });

       this._showBackdrop(function () {
         return _this._showElement(relatedTarget);
       });
     };

     _proto.hide = function hide(event) {
       var _this2 = this;

       if (event) {
         event.preventDefault();
       }

       if (!this._isShown || this._isTransitioning) {
         return;
       }

       var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
       $__default["default"](this._element).trigger(hideEvent);

       if (!this._isShown || hideEvent.isDefaultPrevented()) {
         return;
       }

       this._isShown = false;
       var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);

       if (transition) {
         this._isTransitioning = true;
       }

       this._setEscapeEvent();

       this._setResizeEvent();

       $__default["default"](document).off(EVENT_FOCUSIN);
       $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
       $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
       $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

       if (transition) {
         var transitionDuration = Util.getTransitionDurationFromElement(this._element);
         $__default["default"](this._element).one(Util.TRANSITION_END, function (event) {
           return _this2._hideModal(event);
         }).emulateTransitionEnd(transitionDuration);
       } else {
         this._hideModal();
       }
     };

     _proto.dispose = function dispose() {
       [window, this._element, this._dialog].forEach(function (htmlElement) {
         return $__default["default"](htmlElement).off(EVENT_KEY$5);
       });
       /**
        * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
        * Do not move `document` in `htmlElements` array
        * It will remove `EVENT_CLICK_DATA_API` event that should remain
        */

       $__default["default"](document).off(EVENT_FOCUSIN);
       $__default["default"].removeData(this._element, DATA_KEY$5);
       this._config = null;
       this._element = null;
       this._dialog = null;
       this._backdrop = null;
       this._isShown = null;
       this._isBodyOverflowing = null;
       this._ignoreBackdropClick = null;
       this._isTransitioning = null;
       this._scrollbarWidth = null;
     };

     _proto.handleUpdate = function handleUpdate() {
       this._adjustDialog();
     } // Private
     ;

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, Default$4, config);
       Util.typeCheckConfig(NAME$5, config, DefaultType$4);
       return config;
     };

     _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
       var _this3 = this;

       var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
       $__default["default"](this._element).trigger(hideEventPrevented);

       if (hideEventPrevented.isDefaultPrevented()) {
         return;
       }

       var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

       if (!isModalOverflowing) {
         this._element.style.overflowY = 'hidden';
       }

       this._element.classList.add(CLASS_NAME_STATIC);

       var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
       $__default["default"](this._element).off(Util.TRANSITION_END);
       $__default["default"](this._element).one(Util.TRANSITION_END, function () {
         _this3._element.classList.remove(CLASS_NAME_STATIC);

         if (!isModalOverflowing) {
           $__default["default"](_this3._element).one(Util.TRANSITION_END, function () {
             _this3._element.style.overflowY = '';
           }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
         }
       }).emulateTransitionEnd(modalTransitionDuration);

       this._element.focus();
     };

     _proto._showElement = function _showElement(relatedTarget) {
       var _this4 = this;

       var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
       var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

       if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
         // Don't move modal's DOM position
         document.body.appendChild(this._element);
       }

       this._element.style.display = 'block';

       this._element.removeAttribute('aria-hidden');

       this._element.setAttribute('aria-modal', true);

       this._element.setAttribute('role', 'dialog');

       if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
         modalBody.scrollTop = 0;
       } else {
         this._element.scrollTop = 0;
       }

       if (transition) {
         Util.reflow(this._element);
       }

       $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);

       if (this._config.focus) {
         this._enforceFocus();
       }

       var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
         relatedTarget: relatedTarget
       });

       var transitionComplete = function transitionComplete() {
         if (_this4._config.focus) {
           _this4._element.focus();
         }

         _this4._isTransitioning = false;
         $__default["default"](_this4._element).trigger(shownEvent);
       };

       if (transition) {
         var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
         $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
       } else {
         transitionComplete();
       }
     };

     _proto._enforceFocus = function _enforceFocus() {
       var _this5 = this;

       $__default["default"](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
       .on(EVENT_FOCUSIN, function (event) {
         if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
           _this5._element.focus();
         }
       });
     };

     _proto._setEscapeEvent = function _setEscapeEvent() {
       var _this6 = this;

       if (this._isShown) {
         $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
           if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
             event.preventDefault();

             _this6.hide();
           } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
             _this6._triggerBackdropTransition();
           }
         });
       } else if (!this._isShown) {
         $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
       }
     };

     _proto._setResizeEvent = function _setResizeEvent() {
       var _this7 = this;

       if (this._isShown) {
         $__default["default"](window).on(EVENT_RESIZE, function (event) {
           return _this7.handleUpdate(event);
         });
       } else {
         $__default["default"](window).off(EVENT_RESIZE);
       }
     };

     _proto._hideModal = function _hideModal() {
       var _this8 = this;

       this._element.style.display = 'none';

       this._element.setAttribute('aria-hidden', true);

       this._element.removeAttribute('aria-modal');

       this._element.removeAttribute('role');

       this._isTransitioning = false;

       this._showBackdrop(function () {
         $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);

         _this8._resetAdjustments();

         _this8._resetScrollbar();

         $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
       });
     };

     _proto._removeBackdrop = function _removeBackdrop() {
       if (this._backdrop) {
         $__default["default"](this._backdrop).remove();
         this._backdrop = null;
       }
     };

     _proto._showBackdrop = function _showBackdrop(callback) {
       var _this9 = this;

       var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : '';

       if (this._isShown && this._config.backdrop) {
         this._backdrop = document.createElement('div');
         this._backdrop.className = CLASS_NAME_BACKDROP;

         if (animate) {
           this._backdrop.classList.add(animate);
         }

         $__default["default"](this._backdrop).appendTo(document.body);
         $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function (event) {
           if (_this9._ignoreBackdropClick) {
             _this9._ignoreBackdropClick = false;
             return;
           }

           if (event.target !== event.currentTarget) {
             return;
           }

           if (_this9._config.backdrop === 'static') {
             _this9._triggerBackdropTransition();
           } else {
             _this9.hide();
           }
         });

         if (animate) {
           Util.reflow(this._backdrop);
         }

         $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);

         if (!callback) {
           return;
         }

         if (!animate) {
           callback();
           return;
         }

         var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
         $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
       } else if (!this._isShown && this._backdrop) {
         $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);

         var callbackRemove = function callbackRemove() {
           _this9._removeBackdrop();

           if (callback) {
             callback();
           }
         };

         if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
           var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

           $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
         } else {
           callbackRemove();
         }
       } else if (callback) {
         callback();
       }
     } // ----------------------------------------------------------------------
     // the following methods are used to handle overflowing modals
     // todo (fat): these should probably be refactored out of modal.js
     // ----------------------------------------------------------------------
     ;

     _proto._adjustDialog = function _adjustDialog() {
       var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

       if (!this._isBodyOverflowing && isModalOverflowing) {
         this._element.style.paddingLeft = this._scrollbarWidth + "px";
       }

       if (this._isBodyOverflowing && !isModalOverflowing) {
         this._element.style.paddingRight = this._scrollbarWidth + "px";
       }
     };

     _proto._resetAdjustments = function _resetAdjustments() {
       this._element.style.paddingLeft = '';
       this._element.style.paddingRight = '';
     };

     _proto._checkScrollbar = function _checkScrollbar() {
       var rect = document.body.getBoundingClientRect();
       this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
       this._scrollbarWidth = this._getScrollbarWidth();
     };

     _proto._setScrollbar = function _setScrollbar() {
       var _this10 = this;

       if (this._isBodyOverflowing) {
         // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
         //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
         var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
         var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

         $__default["default"](fixedContent).each(function (index, element) {
           var actualPadding = element.style.paddingRight;
           var calculatedPadding = $__default["default"](element).css('padding-right');
           $__default["default"](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
         }); // Adjust sticky content margin

         $__default["default"](stickyContent).each(function (index, element) {
           var actualMargin = element.style.marginRight;
           var calculatedMargin = $__default["default"](element).css('margin-right');
           $__default["default"](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
         }); // Adjust body padding

         var actualPadding = document.body.style.paddingRight;
         var calculatedPadding = $__default["default"](document.body).css('padding-right');
         $__default["default"](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
       }

       $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
     };

     _proto._resetScrollbar = function _resetScrollbar() {
       // Restore fixed content padding
       var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
       $__default["default"](fixedContent).each(function (index, element) {
         var padding = $__default["default"](element).data('padding-right');
         $__default["default"](element).removeData('padding-right');
         element.style.paddingRight = padding ? padding : '';
       }); // Restore sticky content

       var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
       $__default["default"](elements).each(function (index, element) {
         var margin = $__default["default"](element).data('margin-right');

         if (typeof margin !== 'undefined') {
           $__default["default"](element).css('margin-right', margin).removeData('margin-right');
         }
       }); // Restore body padding

       var padding = $__default["default"](document.body).data('padding-right');
       $__default["default"](document.body).removeData('padding-right');
       document.body.style.paddingRight = padding ? padding : '';
     };

     _proto._getScrollbarWidth = function _getScrollbarWidth() {
       // thx d.walsh
       var scrollDiv = document.createElement('div');
       scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
       document.body.appendChild(scrollDiv);
       var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
       document.body.removeChild(scrollDiv);
       return scrollbarWidth;
     } // Static
     ;

     Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
       return this.each(function () {
         var data = $__default["default"](this).data(DATA_KEY$5);

         var _config = _extends$1({}, Default$4, $__default["default"](this).data(), typeof config === 'object' && config ? config : {});

         if (!data) {
           data = new Modal(this, _config);
           $__default["default"](this).data(DATA_KEY$5, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config](relatedTarget);
         } else if (_config.show) {
           data.show(relatedTarget);
         }
       });
     };

     _createClass(Modal, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$5;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$4;
       }
     }]);

     return Modal;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
     var _this11 = this;

     var target;
     var selector = Util.getSelectorFromElement(this);

     if (selector) {
       target = document.querySelector(selector);
     }

     var config = $__default["default"](target).data(DATA_KEY$5) ? 'toggle' : _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());

     if (this.tagName === 'A' || this.tagName === 'AREA') {
       event.preventDefault();
     }

     var $target = $__default["default"](target).one(EVENT_SHOW$2, function (showEvent) {
       if (showEvent.isDefaultPrevented()) {
         // Only register focus restorer if modal will actually get shown
         return;
       }

       $target.one(EVENT_HIDDEN$2, function () {
         if ($__default["default"](_this11).is(':visible')) {
           _this11.focus();
         }
       });
     });

     Modal._jQueryInterface.call($__default["default"](target), config, this);
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
   $__default["default"].fn[NAME$5].Constructor = Modal;

   $__default["default"].fn[NAME$5].noConflict = function () {
     $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
     return Modal._jQueryInterface;
   };

   /**
    * --------------------------------------------------------------------------
    * Bootstrap (v4.6.1): tools/sanitizer.js
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    * --------------------------------------------------------------------------
    */
   var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
   var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
   var DefaultWhitelist = {
     // Global attributes allowed on any supplied element below.
     '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
     a: ['target', 'href', 'title', 'rel'],
     area: [],
     b: [],
     br: [],
     col: [],
     code: [],
     div: [],
     em: [],
     hr: [],
     h1: [],
     h2: [],
     h3: [],
     h4: [],
     h5: [],
     h6: [],
     i: [],
     img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
     li: [],
     ol: [],
     p: [],
     pre: [],
     s: [],
     small: [],
     span: [],
     sub: [],
     sup: [],
     strong: [],
     u: [],
     ul: []
   };
   /**
    * A pattern that recognizes a commonly useful subset of URLs that are safe.
    *
    * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
    */

   var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
   /**
    * A pattern that matches safe data URLs. Only matches image, video and audio types.
    *
    * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
    */

   var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

   function allowedAttribute(attr, allowedAttributeList) {
     var attrName = attr.nodeName.toLowerCase();

     if (allowedAttributeList.indexOf(attrName) !== -1) {
       if (uriAttrs.indexOf(attrName) !== -1) {
         return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
       }

       return true;
     }

     var regExp = allowedAttributeList.filter(function (attrRegex) {
       return attrRegex instanceof RegExp;
     }); // Check if a regular expression validates the attribute.

     for (var i = 0, len = regExp.length; i < len; i++) {
       if (regExp[i].test(attrName)) {
         return true;
       }
     }

     return false;
   }

   function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
     if (unsafeHtml.length === 0) {
       return unsafeHtml;
     }

     if (sanitizeFn && typeof sanitizeFn === 'function') {
       return sanitizeFn(unsafeHtml);
     }

     var domParser = new window.DOMParser();
     var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
     var whitelistKeys = Object.keys(whiteList);
     var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

     var _loop = function _loop(i, len) {
       var el = elements[i];
       var elName = el.nodeName.toLowerCase();

       if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
         el.parentNode.removeChild(el);
         return "continue";
       }

       var attributeList = [].slice.call(el.attributes); // eslint-disable-next-line unicorn/prefer-spread

       var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
       attributeList.forEach(function (attr) {
         if (!allowedAttribute(attr, whitelistedAttributes)) {
           el.removeAttribute(attr.nodeName);
         }
       });
     };

     for (var i = 0, len = elements.length; i < len; i++) {
       var _ret = _loop(i);

       if (_ret === "continue") continue;
     }

     return createdDocument.body.innerHTML;
   }

   /**
    * Constants
    */

   var NAME$4 = 'tooltip';
   var VERSION$4 = '4.6.1';
   var DATA_KEY$4 = 'bs.tooltip';
   var EVENT_KEY$4 = "." + DATA_KEY$4;
   var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
   var CLASS_PREFIX$1 = 'bs-tooltip';
   var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
   var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
   var CLASS_NAME_FADE$3 = 'fade';
   var CLASS_NAME_SHOW$3 = 'show';
   var HOVER_STATE_SHOW = 'show';
   var HOVER_STATE_OUT = 'out';
   var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
   var SELECTOR_ARROW = '.arrow';
   var TRIGGER_HOVER = 'hover';
   var TRIGGER_FOCUS = 'focus';
   var TRIGGER_CLICK = 'click';
   var TRIGGER_MANUAL = 'manual';
   var AttachmentMap = {
     AUTO: 'auto',
     TOP: 'top',
     RIGHT: 'right',
     BOTTOM: 'bottom',
     LEFT: 'left'
   };
   var Default$3 = {
     animation: true,
     template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
     trigger: 'hover focus',
     title: '',
     delay: 0,
     html: false,
     selector: false,
     placement: 'top',
     offset: 0,
     container: false,
     fallbackPlacement: 'flip',
     boundary: 'scrollParent',
     customClass: '',
     sanitize: true,
     sanitizeFn: null,
     whiteList: DefaultWhitelist,
     popperConfig: null
   };
   var DefaultType$3 = {
     animation: 'boolean',
     template: 'string',
     title: '(string|element|function)',
     trigger: 'string',
     delay: '(number|object)',
     html: 'boolean',
     selector: '(string|boolean)',
     placement: '(string|function)',
     offset: '(number|string|function)',
     container: '(string|element|boolean)',
     fallbackPlacement: '(string|array)',
     boundary: '(string|element)',
     customClass: '(string|function)',
     sanitize: 'boolean',
     sanitizeFn: '(null|function)',
     whiteList: 'object',
     popperConfig: '(null|object)'
   };
   var Event$1 = {
     HIDE: "hide" + EVENT_KEY$4,
     HIDDEN: "hidden" + EVENT_KEY$4,
     SHOW: "show" + EVENT_KEY$4,
     SHOWN: "shown" + EVENT_KEY$4,
     INSERTED: "inserted" + EVENT_KEY$4,
     CLICK: "click" + EVENT_KEY$4,
     FOCUSIN: "focusin" + EVENT_KEY$4,
     FOCUSOUT: "focusout" + EVENT_KEY$4,
     MOUSEENTER: "mouseenter" + EVENT_KEY$4,
     MOUSELEAVE: "mouseleave" + EVENT_KEY$4
   };
   /**
    * Class definition
    */

   var Tooltip = /*#__PURE__*/function () {
     function Tooltip(element, config) {
       if (typeof Popper$1 === 'undefined') {
         throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
       } // Private


       this._isEnabled = true;
       this._timeout = 0;
       this._hoverState = '';
       this._activeTrigger = {};
       this._popper = null; // Protected

       this.element = element;
       this.config = this._getConfig(config);
       this.tip = null;

       this._setListeners();
     } // Getters


     var _proto = Tooltip.prototype;

     // Public
     _proto.enable = function enable() {
       this._isEnabled = true;
     };

     _proto.disable = function disable() {
       this._isEnabled = false;
     };

     _proto.toggleEnabled = function toggleEnabled() {
       this._isEnabled = !this._isEnabled;
     };

     _proto.toggle = function toggle(event) {
       if (!this._isEnabled) {
         return;
       }

       if (event) {
         var dataKey = this.constructor.DATA_KEY;
         var context = $__default["default"](event.currentTarget).data(dataKey);

         if (!context) {
           context = new this.constructor(event.currentTarget, this._getDelegateConfig());
           $__default["default"](event.currentTarget).data(dataKey, context);
         }

         context._activeTrigger.click = !context._activeTrigger.click;

         if (context._isWithActiveTrigger()) {
           context._enter(null, context);
         } else {
           context._leave(null, context);
         }
       } else {
         if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
           this._leave(null, this);

           return;
         }

         this._enter(null, this);
       }
     };

     _proto.dispose = function dispose() {
       clearTimeout(this._timeout);
       $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
       $__default["default"](this.element).off(this.constructor.EVENT_KEY);
       $__default["default"](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

       if (this.tip) {
         $__default["default"](this.tip).remove();
       }

       this._isEnabled = null;
       this._timeout = null;
       this._hoverState = null;
       this._activeTrigger = null;

       if (this._popper) {
         this._popper.destroy();
       }

       this._popper = null;
       this.element = null;
       this.config = null;
       this.tip = null;
     };

     _proto.show = function show() {
       var _this = this;

       if ($__default["default"](this.element).css('display') === 'none') {
         throw new Error('Please use show on visible elements');
       }

       var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);

       if (this.isWithContent() && this._isEnabled) {
         $__default["default"](this.element).trigger(showEvent);
         var shadowRoot = Util.findShadowRoot(this.element);
         var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

         if (showEvent.isDefaultPrevented() || !isInTheDom) {
           return;
         }

         var tip = this.getTipElement();
         var tipId = Util.getUID(this.constructor.NAME);
         tip.setAttribute('id', tipId);
         this.element.setAttribute('aria-describedby', tipId);
         this.setContent();

         if (this.config.animation) {
           $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
         }

         var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

         var attachment = this._getAttachment(placement);

         this.addAttachmentClass(attachment);

         var container = this._getContainer();

         $__default["default"](tip).data(this.constructor.DATA_KEY, this);

         if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
           $__default["default"](tip).appendTo(container);
         }

         $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
         this._popper = new Popper$1(this.element, tip, this._getPopperConfig(attachment));
         $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
         $__default["default"](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
         // empty mouseover listeners to the body's immediate children;
         // only needed because of broken event delegation on iOS
         // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

         if ('ontouchstart' in document.documentElement) {
           $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
         }

         var complete = function complete() {
           if (_this.config.animation) {
             _this._fixTransition();
           }

           var prevHoverState = _this._hoverState;
           _this._hoverState = null;
           $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);

           if (prevHoverState === HOVER_STATE_OUT) {
             _this._leave(null, _this);
           }
         };

         if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
           var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
           $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
         } else {
           complete();
         }
       }
     };

     _proto.hide = function hide(callback) {
       var _this2 = this;

       var tip = this.getTipElement();
       var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);

       var complete = function complete() {
         if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
           tip.parentNode.removeChild(tip);
         }

         _this2._cleanTipClass();

         _this2.element.removeAttribute('aria-describedby');

         $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

         if (_this2._popper !== null) {
           _this2._popper.destroy();
         }

         if (callback) {
           callback();
         }
       };

       $__default["default"](this.element).trigger(hideEvent);

       if (hideEvent.isDefaultPrevented()) {
         return;
       }

       $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
       // empty mouseover listeners we added for iOS support

       if ('ontouchstart' in document.documentElement) {
         $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
       }

       this._activeTrigger[TRIGGER_CLICK] = false;
       this._activeTrigger[TRIGGER_FOCUS] = false;
       this._activeTrigger[TRIGGER_HOVER] = false;

       if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
         var transitionDuration = Util.getTransitionDurationFromElement(tip);
         $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
       } else {
         complete();
       }

       this._hoverState = '';
     };

     _proto.update = function update() {
       if (this._popper !== null) {
         this._popper.scheduleUpdate();
       }
     } // Protected
     ;

     _proto.isWithContent = function isWithContent() {
       return Boolean(this.getTitle());
     };

     _proto.addAttachmentClass = function addAttachmentClass(attachment) {
       $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
     };

     _proto.getTipElement = function getTipElement() {
       this.tip = this.tip || $__default["default"](this.config.template)[0];
       return this.tip;
     };

     _proto.setContent = function setContent() {
       var tip = this.getTipElement();
       this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
       $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
     };

     _proto.setElementContent = function setElementContent($element, content) {
       if (typeof content === 'object' && (content.nodeType || content.jquery)) {
         // Content is a DOM node or a jQuery
         if (this.config.html) {
           if (!$__default["default"](content).parent().is($element)) {
             $element.empty().append(content);
           }
         } else {
           $element.text($__default["default"](content).text());
         }

         return;
       }

       if (this.config.html) {
         if (this.config.sanitize) {
           content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
         }

         $element.html(content);
       } else {
         $element.text(content);
       }
     };

     _proto.getTitle = function getTitle() {
       var title = this.element.getAttribute('data-original-title');

       if (!title) {
         title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
       }

       return title;
     } // Private
     ;

     _proto._getPopperConfig = function _getPopperConfig(attachment) {
       var _this3 = this;

       var defaultBsConfig = {
         placement: attachment,
         modifiers: {
           offset: this._getOffset(),
           flip: {
             behavior: this.config.fallbackPlacement
           },
           arrow: {
             element: SELECTOR_ARROW
           },
           preventOverflow: {
             boundariesElement: this.config.boundary
           }
         },
         onCreate: function onCreate(data) {
           if (data.originalPlacement !== data.placement) {
             _this3._handlePopperPlacementChange(data);
           }
         },
         onUpdate: function onUpdate(data) {
           return _this3._handlePopperPlacementChange(data);
         }
       };
       return _extends$1({}, defaultBsConfig, this.config.popperConfig);
     };

     _proto._getOffset = function _getOffset() {
       var _this4 = this;

       var offset = {};

       if (typeof this.config.offset === 'function') {
         offset.fn = function (data) {
           data.offsets = _extends$1({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
           return data;
         };
       } else {
         offset.offset = this.config.offset;
       }

       return offset;
     };

     _proto._getContainer = function _getContainer() {
       if (this.config.container === false) {
         return document.body;
       }

       if (Util.isElement(this.config.container)) {
         return $__default["default"](this.config.container);
       }

       return $__default["default"](document).find(this.config.container);
     };

     _proto._getAttachment = function _getAttachment(placement) {
       return AttachmentMap[placement.toUpperCase()];
     };

     _proto._setListeners = function _setListeners() {
       var _this5 = this;

       var triggers = this.config.trigger.split(' ');
       triggers.forEach(function (trigger) {
         if (trigger === 'click') {
           $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
             return _this5.toggle(event);
           });
         } else if (trigger !== TRIGGER_MANUAL) {
           var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
           var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
           $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function (event) {
             return _this5._enter(event);
           }).on(eventOut, _this5.config.selector, function (event) {
             return _this5._leave(event);
           });
         }
       });

       this._hideModalHandler = function () {
         if (_this5.element) {
           _this5.hide();
         }
       };

       $__default["default"](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

       if (this.config.selector) {
         this.config = _extends$1({}, this.config, {
           trigger: 'manual',
           selector: ''
         });
       } else {
         this._fixTitle();
       }
     };

     _proto._fixTitle = function _fixTitle() {
       var titleType = typeof this.element.getAttribute('data-original-title');

       if (this.element.getAttribute('title') || titleType !== 'string') {
         this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
         this.element.setAttribute('title', '');
       }
     };

     _proto._enter = function _enter(event, context) {
       var dataKey = this.constructor.DATA_KEY;
       context = context || $__default["default"](event.currentTarget).data(dataKey);

       if (!context) {
         context = new this.constructor(event.currentTarget, this._getDelegateConfig());
         $__default["default"](event.currentTarget).data(dataKey, context);
       }

       if (event) {
         context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
       }

       if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
         context._hoverState = HOVER_STATE_SHOW;
         return;
       }

       clearTimeout(context._timeout);
       context._hoverState = HOVER_STATE_SHOW;

       if (!context.config.delay || !context.config.delay.show) {
         context.show();
         return;
       }

       context._timeout = setTimeout(function () {
         if (context._hoverState === HOVER_STATE_SHOW) {
           context.show();
         }
       }, context.config.delay.show);
     };

     _proto._leave = function _leave(event, context) {
       var dataKey = this.constructor.DATA_KEY;
       context = context || $__default["default"](event.currentTarget).data(dataKey);

       if (!context) {
         context = new this.constructor(event.currentTarget, this._getDelegateConfig());
         $__default["default"](event.currentTarget).data(dataKey, context);
       }

       if (event) {
         context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
       }

       if (context._isWithActiveTrigger()) {
         return;
       }

       clearTimeout(context._timeout);
       context._hoverState = HOVER_STATE_OUT;

       if (!context.config.delay || !context.config.delay.hide) {
         context.hide();
         return;
       }

       context._timeout = setTimeout(function () {
         if (context._hoverState === HOVER_STATE_OUT) {
           context.hide();
         }
       }, context.config.delay.hide);
     };

     _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
       for (var trigger in this._activeTrigger) {
         if (this._activeTrigger[trigger]) {
           return true;
         }
       }

       return false;
     };

     _proto._getConfig = function _getConfig(config) {
       var dataAttributes = $__default["default"](this.element).data();
       Object.keys(dataAttributes).forEach(function (dataAttr) {
         if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
           delete dataAttributes[dataAttr];
         }
       });
       config = _extends$1({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

       if (typeof config.delay === 'number') {
         config.delay = {
           show: config.delay,
           hide: config.delay
         };
       }

       if (typeof config.title === 'number') {
         config.title = config.title.toString();
       }

       if (typeof config.content === 'number') {
         config.content = config.content.toString();
       }

       Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

       if (config.sanitize) {
         config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
       }

       return config;
     };

     _proto._getDelegateConfig = function _getDelegateConfig() {
       var config = {};

       if (this.config) {
         for (var key in this.config) {
           if (this.constructor.Default[key] !== this.config[key]) {
             config[key] = this.config[key];
           }
         }
       }

       return config;
     };

     _proto._cleanTipClass = function _cleanTipClass() {
       var $tip = $__default["default"](this.getTipElement());
       var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

       if (tabClass !== null && tabClass.length) {
         $tip.removeClass(tabClass.join(''));
       }
     };

     _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
       this.tip = popperData.instance.popper;

       this._cleanTipClass();

       this.addAttachmentClass(this._getAttachment(popperData.placement));
     };

     _proto._fixTransition = function _fixTransition() {
       var tip = this.getTipElement();
       var initConfigAnimation = this.config.animation;

       if (tip.getAttribute('x-placement') !== null) {
         return;
       }

       $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
       this.config.animation = false;
       this.hide();
       this.show();
       this.config.animation = initConfigAnimation;
     } // Static
     ;

     Tooltip._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var $element = $__default["default"](this);
         var data = $element.data(DATA_KEY$4);

         var _config = typeof config === 'object' && config;

         if (!data && /dispose|hide/.test(config)) {
           return;
         }

         if (!data) {
           data = new Tooltip(this, _config);
           $element.data(DATA_KEY$4, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     _createClass(Tooltip, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$4;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$3;
       }
     }, {
       key: "NAME",
       get: function get() {
         return NAME$4;
       }
     }, {
       key: "DATA_KEY",
       get: function get() {
         return DATA_KEY$4;
       }
     }, {
       key: "Event",
       get: function get() {
         return Event$1;
       }
     }, {
       key: "EVENT_KEY",
       get: function get() {
         return EVENT_KEY$4;
       }
     }, {
       key: "DefaultType",
       get: function get() {
         return DefaultType$3;
       }
     }]);

     return Tooltip;
   }();
   /**
    * jQuery
    */


   $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
   $__default["default"].fn[NAME$4].Constructor = Tooltip;

   $__default["default"].fn[NAME$4].noConflict = function () {
     $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
     return Tooltip._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$3 = 'popover';
   var VERSION$3 = '4.6.1';
   var DATA_KEY$3 = 'bs.popover';
   var EVENT_KEY$3 = "." + DATA_KEY$3;
   var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
   var CLASS_PREFIX = 'bs-popover';
   var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
   var CLASS_NAME_FADE$2 = 'fade';
   var CLASS_NAME_SHOW$2 = 'show';
   var SELECTOR_TITLE = '.popover-header';
   var SELECTOR_CONTENT = '.popover-body';

   var Default$2 = _extends$1({}, Tooltip.Default, {
     placement: 'right',
     trigger: 'click',
     content: '',
     template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
   });

   var DefaultType$2 = _extends$1({}, Tooltip.DefaultType, {
     content: '(string|element|function)'
   });

   var Event = {
     HIDE: "hide" + EVENT_KEY$3,
     HIDDEN: "hidden" + EVENT_KEY$3,
     SHOW: "show" + EVENT_KEY$3,
     SHOWN: "shown" + EVENT_KEY$3,
     INSERTED: "inserted" + EVENT_KEY$3,
     CLICK: "click" + EVENT_KEY$3,
     FOCUSIN: "focusin" + EVENT_KEY$3,
     FOCUSOUT: "focusout" + EVENT_KEY$3,
     MOUSEENTER: "mouseenter" + EVENT_KEY$3,
     MOUSELEAVE: "mouseleave" + EVENT_KEY$3
   };
   /**
    * Class definition
    */

   var Popover = /*#__PURE__*/function (_Tooltip) {
     _inheritsLoose(Popover, _Tooltip);

     function Popover() {
       return _Tooltip.apply(this, arguments) || this;
     }

     var _proto = Popover.prototype;

     // Overrides
     _proto.isWithContent = function isWithContent() {
       return this.getTitle() || this._getContent();
     };

     _proto.addAttachmentClass = function addAttachmentClass(attachment) {
       $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
     };

     _proto.getTipElement = function getTipElement() {
       this.tip = this.tip || $__default["default"](this.config.template)[0];
       return this.tip;
     };

     _proto.setContent = function setContent() {
       var $tip = $__default["default"](this.getTipElement()); // We use append for html objects to maintain js events

       this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

       var content = this._getContent();

       if (typeof content === 'function') {
         content = content.call(this.element);
       }

       this.setElementContent($tip.find(SELECTOR_CONTENT), content);
       $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
     } // Private
     ;

     _proto._getContent = function _getContent() {
       return this.element.getAttribute('data-content') || this.config.content;
     };

     _proto._cleanTipClass = function _cleanTipClass() {
       var $tip = $__default["default"](this.getTipElement());
       var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

       if (tabClass !== null && tabClass.length > 0) {
         $tip.removeClass(tabClass.join(''));
       }
     } // Static
     ;

     Popover._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default["default"](this).data(DATA_KEY$3);

         var _config = typeof config === 'object' ? config : null;

         if (!data && /dispose|hide/.test(config)) {
           return;
         }

         if (!data) {
           data = new Popover(this, _config);
           $__default["default"](this).data(DATA_KEY$3, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     _createClass(Popover, null, [{
       key: "VERSION",
       get: // Getters
       function get() {
         return VERSION$3;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$2;
       }
     }, {
       key: "NAME",
       get: function get() {
         return NAME$3;
       }
     }, {
       key: "DATA_KEY",
       get: function get() {
         return DATA_KEY$3;
       }
     }, {
       key: "Event",
       get: function get() {
         return Event;
       }
     }, {
       key: "EVENT_KEY",
       get: function get() {
         return EVENT_KEY$3;
       }
     }, {
       key: "DefaultType",
       get: function get() {
         return DefaultType$2;
       }
     }]);

     return Popover;
   }(Tooltip);
   /**
    * jQuery
    */


   $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
   $__default["default"].fn[NAME$3].Constructor = Popover;

   $__default["default"].fn[NAME$3].noConflict = function () {
     $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
     return Popover._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$2 = 'scrollspy';
   var VERSION$2 = '4.6.1';
   var DATA_KEY$2 = 'bs.scrollspy';
   var EVENT_KEY$2 = "." + DATA_KEY$2;
   var DATA_API_KEY$1 = '.data-api';
   var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
   var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
   var CLASS_NAME_ACTIVE$1 = 'active';
   var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
   var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
   var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
   var METHOD_OFFSET = 'offset';
   var METHOD_POSITION = 'position';
   var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
   var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
   var SELECTOR_NAV_LINKS = '.nav-link';
   var SELECTOR_NAV_ITEMS = '.nav-item';
   var SELECTOR_LIST_ITEMS = '.list-group-item';
   var SELECTOR_DROPDOWN$1 = '.dropdown';
   var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
   var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
   var Default$1 = {
     offset: 10,
     method: 'auto',
     target: ''
   };
   var DefaultType$1 = {
     offset: 'number',
     method: 'string',
     target: '(string|element)'
   };
   /**
    * Class definition
    */

   var ScrollSpy = /*#__PURE__*/function () {
     function ScrollSpy(element, config) {
       var _this = this;

       this._element = element;
       this._scrollElement = element.tagName === 'BODY' ? window : element;
       this._config = this._getConfig(config);
       this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
       this._offsets = [];
       this._targets = [];
       this._activeTarget = null;
       this._scrollHeight = 0;
       $__default["default"](this._scrollElement).on(EVENT_SCROLL, function (event) {
         return _this._process(event);
       });
       this.refresh();

       this._process();
     } // Getters


     var _proto = ScrollSpy.prototype;

     // Public
     _proto.refresh = function refresh() {
       var _this2 = this;

       var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
       var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
       var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
       this._offsets = [];
       this._targets = [];
       this._scrollHeight = this._getScrollHeight();
       var targets = [].slice.call(document.querySelectorAll(this._selector));
       targets.map(function (element) {
         var target;
         var targetSelector = Util.getSelectorFromElement(element);

         if (targetSelector) {
           target = document.querySelector(targetSelector);
         }

         if (target) {
           var targetBCR = target.getBoundingClientRect();

           if (targetBCR.width || targetBCR.height) {
             // TODO (fat): remove sketch reliance on jQuery position/offset
             return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
           }
         }

         return null;
       }).filter(function (item) {
         return item;
       }).sort(function (a, b) {
         return a[0] - b[0];
       }).forEach(function (item) {
         _this2._offsets.push(item[0]);

         _this2._targets.push(item[1]);
       });
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$2);
       $__default["default"](this._scrollElement).off(EVENT_KEY$2);
       this._element = null;
       this._scrollElement = null;
       this._config = null;
       this._selector = null;
       this._offsets = null;
       this._targets = null;
       this._activeTarget = null;
       this._scrollHeight = null;
     } // Private
     ;

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, Default$1, typeof config === 'object' && config ? config : {});

       if (typeof config.target !== 'string' && Util.isElement(config.target)) {
         var id = $__default["default"](config.target).attr('id');

         if (!id) {
           id = Util.getUID(NAME$2);
           $__default["default"](config.target).attr('id', id);
         }

         config.target = "#" + id;
       }

       Util.typeCheckConfig(NAME$2, config, DefaultType$1);
       return config;
     };

     _proto._getScrollTop = function _getScrollTop() {
       return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
     };

     _proto._getScrollHeight = function _getScrollHeight() {
       return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
     };

     _proto._getOffsetHeight = function _getOffsetHeight() {
       return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
     };

     _proto._process = function _process() {
       var scrollTop = this._getScrollTop() + this._config.offset;

       var scrollHeight = this._getScrollHeight();

       var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

       if (this._scrollHeight !== scrollHeight) {
         this.refresh();
       }

       if (scrollTop >= maxScroll) {
         var target = this._targets[this._targets.length - 1];

         if (this._activeTarget !== target) {
           this._activate(target);
         }

         return;
       }

       if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
         this._activeTarget = null;

         this._clear();

         return;
       }

       for (var i = this._offsets.length; i--;) {
         var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

         if (isActiveTarget) {
           this._activate(this._targets[i]);
         }
       }
     };

     _proto._activate = function _activate(target) {
       this._activeTarget = target;

       this._clear();

       var queries = this._selector.split(',').map(function (selector) {
         return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
       });

       var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(','))));

       if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
         $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
         $link.addClass(CLASS_NAME_ACTIVE$1);
       } else {
         // Set triggered link as active
         $link.addClass(CLASS_NAME_ACTIVE$1); // Set triggered links parents as active
         // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

         $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1); // Handle special case when .nav-link is inside .nav-item

         $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
       }

       $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
         relatedTarget: target
       });
     };

     _proto._clear = function _clear() {
       [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
         return node.classList.contains(CLASS_NAME_ACTIVE$1);
       }).forEach(function (node) {
         return node.classList.remove(CLASS_NAME_ACTIVE$1);
       });
     } // Static
     ;

     ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var data = $__default["default"](this).data(DATA_KEY$2);

         var _config = typeof config === 'object' && config;

         if (!data) {
           data = new ScrollSpy(this, _config);
           $__default["default"](this).data(DATA_KEY$2, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     _createClass(ScrollSpy, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$2;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default$1;
       }
     }]);

     return ScrollSpy;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
     var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
     var scrollSpysLength = scrollSpys.length;

     for (var i = scrollSpysLength; i--;) {
       var $spy = $__default["default"](scrollSpys[i]);

       ScrollSpy._jQueryInterface.call($spy, $spy.data());
     }
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
   $__default["default"].fn[NAME$2].Constructor = ScrollSpy;

   $__default["default"].fn[NAME$2].noConflict = function () {
     $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
     return ScrollSpy._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME$1 = 'tab';
   var VERSION$1 = '4.6.1';
   var DATA_KEY$1 = 'bs.tab';
   var EVENT_KEY$1 = "." + DATA_KEY$1;
   var DATA_API_KEY = '.data-api';
   var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
   var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
   var CLASS_NAME_ACTIVE = 'active';
   var CLASS_NAME_DISABLED = 'disabled';
   var CLASS_NAME_FADE$1 = 'fade';
   var CLASS_NAME_SHOW$1 = 'show';
   var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
   var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
   var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
   var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
   var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
   var SELECTOR_DROPDOWN = '.dropdown';
   var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
   var SELECTOR_ACTIVE = '.active';
   var SELECTOR_ACTIVE_UL = '> li > .active';
   var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
   var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
   var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
   /**
    * Class definition
    */

   var Tab = /*#__PURE__*/function () {
     function Tab(element) {
       this._element = element;
     } // Getters


     var _proto = Tab.prototype;

     // Public
     _proto.show = function show() {
       var _this = this;

       if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED)) {
         return;
       }

       var target;
       var previous;
       var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
       var selector = Util.getSelectorFromElement(this._element);

       if (listElement) {
         var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
         previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
         previous = previous[previous.length - 1];
       }

       var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
         relatedTarget: this._element
       });
       var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
         relatedTarget: previous
       });

       if (previous) {
         $__default["default"](previous).trigger(hideEvent);
       }

       $__default["default"](this._element).trigger(showEvent);

       if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
         return;
       }

       if (selector) {
         target = document.querySelector(selector);
       }

       this._activate(this._element, listElement);

       var complete = function complete() {
         var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
           relatedTarget: _this._element
         });
         var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
           relatedTarget: previous
         });
         $__default["default"](previous).trigger(hiddenEvent);
         $__default["default"](_this._element).trigger(shownEvent);
       };

       if (target) {
         this._activate(target, target.parentNode, complete);
       } else {
         complete();
       }
     };

     _proto.dispose = function dispose() {
       $__default["default"].removeData(this._element, DATA_KEY$1);
       this._element = null;
     } // Private
     ;

     _proto._activate = function _activate(element, container, callback) {
       var _this2 = this;

       var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
       var active = activeElements[0];
       var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);

       var complete = function complete() {
         return _this2._transitionComplete(element, active, callback);
       };

       if (active && isTransitioning) {
         var transitionDuration = Util.getTransitionDurationFromElement(active);
         $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
       } else {
         complete();
       }
     };

     _proto._transitionComplete = function _transitionComplete(element, active, callback) {
       if (active) {
         $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
         var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

         if (dropdownChild) {
           $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
         }

         if (active.getAttribute('role') === 'tab') {
           active.setAttribute('aria-selected', false);
         }
       }

       $__default["default"](element).addClass(CLASS_NAME_ACTIVE);

       if (element.getAttribute('role') === 'tab') {
         element.setAttribute('aria-selected', true);
       }

       Util.reflow(element);

       if (element.classList.contains(CLASS_NAME_FADE$1)) {
         element.classList.add(CLASS_NAME_SHOW$1);
       }

       var parent = element.parentNode;

       if (parent && parent.nodeName === 'LI') {
         parent = parent.parentNode;
       }

       if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
         var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];

         if (dropdownElement) {
           var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
           $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
         }

         element.setAttribute('aria-expanded', true);
       }

       if (callback) {
         callback();
       }
     } // Static
     ;

     Tab._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var $this = $__default["default"](this);
         var data = $this.data(DATA_KEY$1);

         if (!data) {
           data = new Tab(this);
           $this.data(DATA_KEY$1, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config]();
         }
       });
     };

     _createClass(Tab, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION$1;
       }
     }]);

     return Tab;
   }();
   /**
    * Data API implementation
    */


   $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
     event.preventDefault();

     Tab._jQueryInterface.call($__default["default"](this), 'show');
   });
   /**
    * jQuery
    */

   $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
   $__default["default"].fn[NAME$1].Constructor = Tab;

   $__default["default"].fn[NAME$1].noConflict = function () {
     $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
     return Tab._jQueryInterface;
   };

   /**
    * Constants
    */

   var NAME = 'toast';
   var VERSION = '4.6.1';
   var DATA_KEY = 'bs.toast';
   var EVENT_KEY = "." + DATA_KEY;
   var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
   var CLASS_NAME_FADE = 'fade';
   var CLASS_NAME_HIDE = 'hide';
   var CLASS_NAME_SHOW = 'show';
   var CLASS_NAME_SHOWING = 'showing';
   var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
   var EVENT_HIDE = "hide" + EVENT_KEY;
   var EVENT_HIDDEN = "hidden" + EVENT_KEY;
   var EVENT_SHOW = "show" + EVENT_KEY;
   var EVENT_SHOWN = "shown" + EVENT_KEY;
   var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
   var Default = {
     animation: true,
     autohide: true,
     delay: 500
   };
   var DefaultType = {
     animation: 'boolean',
     autohide: 'boolean',
     delay: 'number'
   };
   /**
    * Class definition
    */

   var Toast = /*#__PURE__*/function () {
     function Toast(element, config) {
       this._element = element;
       this._config = this._getConfig(config);
       this._timeout = null;

       this._setListeners();
     } // Getters


     var _proto = Toast.prototype;

     // Public
     _proto.show = function show() {
       var _this = this;

       var showEvent = $__default["default"].Event(EVENT_SHOW);
       $__default["default"](this._element).trigger(showEvent);

       if (showEvent.isDefaultPrevented()) {
         return;
       }

       this._clearTimeout();

       if (this._config.animation) {
         this._element.classList.add(CLASS_NAME_FADE);
       }

       var complete = function complete() {
         _this._element.classList.remove(CLASS_NAME_SHOWING);

         _this._element.classList.add(CLASS_NAME_SHOW);

         $__default["default"](_this._element).trigger(EVENT_SHOWN);

         if (_this._config.autohide) {
           _this._timeout = setTimeout(function () {
             _this.hide();
           }, _this._config.delay);
         }
       };

       this._element.classList.remove(CLASS_NAME_HIDE);

       Util.reflow(this._element);

       this._element.classList.add(CLASS_NAME_SHOWING);

       if (this._config.animation) {
         var transitionDuration = Util.getTransitionDurationFromElement(this._element);
         $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
       } else {
         complete();
       }
     };

     _proto.hide = function hide() {
       if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
         return;
       }

       var hideEvent = $__default["default"].Event(EVENT_HIDE);
       $__default["default"](this._element).trigger(hideEvent);

       if (hideEvent.isDefaultPrevented()) {
         return;
       }

       this._close();
     };

     _proto.dispose = function dispose() {
       this._clearTimeout();

       if (this._element.classList.contains(CLASS_NAME_SHOW)) {
         this._element.classList.remove(CLASS_NAME_SHOW);
       }

       $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
       $__default["default"].removeData(this._element, DATA_KEY);
       this._element = null;
       this._config = null;
     } // Private
     ;

     _proto._getConfig = function _getConfig(config) {
       config = _extends$1({}, Default, $__default["default"](this._element).data(), typeof config === 'object' && config ? config : {});
       Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
       return config;
     };

     _proto._setListeners = function _setListeners() {
       var _this2 = this;

       $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
         return _this2.hide();
       });
     };

     _proto._close = function _close() {
       var _this3 = this;

       var complete = function complete() {
         _this3._element.classList.add(CLASS_NAME_HIDE);

         $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
       };

       this._element.classList.remove(CLASS_NAME_SHOW);

       if (this._config.animation) {
         var transitionDuration = Util.getTransitionDurationFromElement(this._element);
         $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
       } else {
         complete();
       }
     };

     _proto._clearTimeout = function _clearTimeout() {
       clearTimeout(this._timeout);
       this._timeout = null;
     } // Static
     ;

     Toast._jQueryInterface = function _jQueryInterface(config) {
       return this.each(function () {
         var $element = $__default["default"](this);
         var data = $element.data(DATA_KEY);

         var _config = typeof config === 'object' && config;

         if (!data) {
           data = new Toast(this, _config);
           $element.data(DATA_KEY, data);
         }

         if (typeof config === 'string') {
           if (typeof data[config] === 'undefined') {
             throw new TypeError("No method named \"" + config + "\"");
           }

           data[config](this);
         }
       });
     };

     _createClass(Toast, null, [{
       key: "VERSION",
       get: function get() {
         return VERSION;
       }
     }, {
       key: "DefaultType",
       get: function get() {
         return DefaultType;
       }
     }, {
       key: "Default",
       get: function get() {
         return Default;
       }
     }]);

     return Toast;
   }();
   /**
    * jQuery
    */


   $__default["default"].fn[NAME] = Toast._jQueryInterface;
   $__default["default"].fn[NAME].Constructor = Toast;

   $__default["default"].fn[NAME].noConflict = function () {
     $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
     return Toast._jQueryInterface;
   };

   exports.Alert = Alert;
   exports.Button = Button;
   exports.Carousel = Carousel;
   exports.Collapse = Collapse;
   exports.Dropdown = Dropdown;
   exports.Modal = Modal;
   exports.Popover = Popover;
   exports.Scrollspy = ScrollSpy;
   exports.Tab = Tab;
   exports.Toast = Toast;
   exports.Tooltip = Tooltip;
   exports.Util = Util;

   Object.defineProperty(exports, '__esModule', { value: true });

 }));
 //# sourceMappingURL=bootstrap.bundle.js.map


 /***/ }),

 /***/ "./node_modules/admin-lte/plugins/jquery/jquery.js":
 /*!*********************************************************!*\
   !*** ./node_modules/admin-lte/plugins/jquery/jquery.js ***!
   \*********************************************************/
 /***/ (function(module, exports) {

 var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * jQuery JavaScript Library v3.6.0
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright OpenJS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2021-03-02T17:08Z
  */
 ( function( global, factory ) {

     "use strict";

     if (  true && typeof module.exports === "object" ) {

         // For CommonJS and CommonJS-like environments where a proper `window`
         // is present, execute the factory and get jQuery.
         // For environments that do not have a `window` with a `document`
         // (such as Node.js), expose a factory as module.exports.
         // This accentuates the need for the creation of a real `window`.
         // e.g. var jQuery = require("jquery")(window);
         // See ticket #14549 for more info.
         module.exports = global.document ?
             factory( global, true ) :
             function( w ) {
                 if ( !w.document ) {
                     throw new Error( "jQuery requires a window with a document" );
                 }
                 return factory( w );
             };
     } else {
         factory( global );
     }

 // Pass this if window is not defined yet
 } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

 // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
 // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
 // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
 // enough that all such attempts are guarded in a try block.
 "use strict";

 var arr = [];

 var getProto = Object.getPrototypeOf;

 var slice = arr.slice;

 var flat = arr.flat ? function( array ) {
     return arr.flat.call( array );
 } : function( array ) {
     return arr.concat.apply( [], array );
 };


 var push = arr.push;

 var indexOf = arr.indexOf;

 var class2type = {};

 var toString = class2type.toString;

 var hasOwn = class2type.hasOwnProperty;

 var fnToString = hasOwn.toString;

 var ObjectFunctionString = fnToString.call( Object );

 var support = {};

 var isFunction = function isFunction( obj ) {

         // Support: Chrome <=57, Firefox <=52
         // In some browsers, typeof returns "function" for HTML <object> elements
         // (i.e., `typeof document.createElement( "object" ) === "function"`).
         // We don't want to classify *any* DOM node as a function.
         // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
         // Plus for old WebKit, typeof returns "function" for HTML collections
         // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
         return typeof obj === "function" && typeof obj.nodeType !== "number" &&
             typeof obj.item !== "function";
     };


 var isWindow = function isWindow( obj ) {
         return obj != null && obj === obj.window;
     };


 var document = window.document;



     var preservedScriptAttributes = {
         type: true,
         src: true,
         nonce: true,
         noModule: true
     };

     function DOMEval( code, node, doc ) {
         doc = doc || document;

         var i, val,
             script = doc.createElement( "script" );

         script.text = code;
         if ( node ) {
             for ( i in preservedScriptAttributes ) {

                 // Support: Firefox 64+, Edge 18+
                 // Some browsers don't support the "nonce" property on scripts.
                 // On the other hand, just using `getAttribute` is not enough as
                 // the `nonce` attribute is reset to an empty string whenever it
                 // becomes browsing-context connected.
                 // See https://github.com/whatwg/html/issues/2369
                 // See https://html.spec.whatwg.org/#nonce-attributes
                 // The `node.getAttribute` check was added for the sake of
                 // `jQuery.globalEval` so that it can fake a nonce-containing node
                 // via an object.
                 val = node[ i ] || node.getAttribute && node.getAttribute( i );
                 if ( val ) {
                     script.setAttribute( i, val );
                 }
             }
         }
         doc.head.appendChild( script ).parentNode.removeChild( script );
     }


 function toType( obj ) {
     if ( obj == null ) {
         return obj + "";
     }

     // Support: Android <=2.3 only (functionish RegExp)
     return typeof obj === "object" || typeof obj === "function" ?
         class2type[ toString.call( obj ) ] || "object" :
         typeof obj;
 }
 /* global Symbol */
 // Defining this global in .eslintrc.json would create a danger of using the global
 // unguarded in another place, it seems safer to define global only for this module



 var
     version = "3.6.0",

     // Define a local copy of jQuery
     jQuery = function( selector, context ) {

         // The jQuery object is actually just the init constructor 'enhanced'
         // Need init if jQuery is called (just allow error to be thrown if not included)
         return new jQuery.fn.init( selector, context );
     };

 jQuery.fn = jQuery.prototype = {

     // The current version of jQuery being used
     jquery: version,

     constructor: jQuery,

     // The default length of a jQuery object is 0
     length: 0,

     toArray: function() {
         return slice.call( this );
     },

     // Get the Nth element in the matched element set OR
     // Get the whole matched element set as a clean array
     get: function( num ) {

         // Return all the elements in a clean array
         if ( num == null ) {
             return slice.call( this );
         }

         // Return just the one element from the set
         return num < 0 ? this[ num + this.length ] : this[ num ];
     },

     // Take an array of elements and push it onto the stack
     // (returning the new matched element set)
     pushStack: function( elems ) {

         // Build a new jQuery matched element set
         var ret = jQuery.merge( this.constructor(), elems );

         // Add the old object onto the stack (as a reference)
         ret.prevObject = this;

         // Return the newly-formed element set
         return ret;
     },

     // Execute a callback for every element in the matched set.
     each: function( callback ) {
         return jQuery.each( this, callback );
     },

     map: function( callback ) {
         return this.pushStack( jQuery.map( this, function( elem, i ) {
             return callback.call( elem, i, elem );
         } ) );
     },

     slice: function() {
         return this.pushStack( slice.apply( this, arguments ) );
     },

     first: function() {
         return this.eq( 0 );
     },

     last: function() {
         return this.eq( -1 );
     },

     even: function() {
         return this.pushStack( jQuery.grep( this, function( _elem, i ) {
             return ( i + 1 ) % 2;
         } ) );
     },

     odd: function() {
         return this.pushStack( jQuery.grep( this, function( _elem, i ) {
             return i % 2;
         } ) );
     },

     eq: function( i ) {
         var len = this.length,
             j = +i + ( i < 0 ? len : 0 );
         return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
     },

     end: function() {
         return this.prevObject || this.constructor();
     },

     // For internal use only.
     // Behaves like an Array's method, not like a jQuery method.
     push: push,
     sort: arr.sort,
     splice: arr.splice
 };

 jQuery.extend = jQuery.fn.extend = function() {
     var options, name, src, copy, copyIsArray, clone,
         target = arguments[ 0 ] || {},
         i = 1,
         length = arguments.length,
         deep = false;

     // Handle a deep copy situation
     if ( typeof target === "boolean" ) {
         deep = target;

         // Skip the boolean and the target
         target = arguments[ i ] || {};
         i++;
     }

     // Handle case when target is a string or something (possible in deep copy)
     if ( typeof target !== "object" && !isFunction( target ) ) {
         target = {};
     }

     // Extend jQuery itself if only one argument is passed
     if ( i === length ) {
         target = this;
         i--;
     }

     for ( ; i < length; i++ ) {

         // Only deal with non-null/undefined values
         if ( ( options = arguments[ i ] ) != null ) {

             // Extend the base object
             for ( name in options ) {
                 copy = options[ name ];

                 // Prevent Object.prototype pollution
                 // Prevent never-ending loop
                 if ( name === "__proto__" || target === copy ) {
                     continue;
                 }

                 // Recurse if we're merging plain objects or arrays
                 if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                     ( copyIsArray = Array.isArray( copy ) ) ) ) {
                     src = target[ name ];

                     // Ensure proper type for the source value
                     if ( copyIsArray && !Array.isArray( src ) ) {
                         clone = [];
                     } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
                         clone = {};
                     } else {
                         clone = src;
                     }
                     copyIsArray = false;

                     // Never move original objects, clone them
                     target[ name ] = jQuery.extend( deep, clone, copy );

                 // Don't bring in undefined values
                 } else if ( copy !== undefined ) {
                     target[ name ] = copy;
                 }
             }
         }
     }

     // Return the modified object
     return target;
 };

 jQuery.extend( {

     // Unique for each copy of jQuery on the page
     expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

     // Assume jQuery is ready without the ready module
     isReady: true,

     error: function( msg ) {
         throw new Error( msg );
     },

     noop: function() {},

     isPlainObject: function( obj ) {
         var proto, Ctor;

         // Detect obvious negatives
         // Use toString instead of jQuery.type to catch host objects
         if ( !obj || toString.call( obj ) !== "[object Object]" ) {
             return false;
         }

         proto = getProto( obj );

         // Objects with no prototype (e.g., `Object.create( null )`) are plain
         if ( !proto ) {
             return true;
         }

         // Objects with prototype are plain iff they were constructed by a global Object function
         Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
         return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
     },

     isEmptyObject: function( obj ) {
         var name;

         for ( name in obj ) {
             return false;
         }
         return true;
     },

     // Evaluates a script in a provided context; falls back to the global one
     // if not specified.
     globalEval: function( code, options, doc ) {
         DOMEval( code, { nonce: options && options.nonce }, doc );
     },

     each: function( obj, callback ) {
         var length, i = 0;

         if ( isArrayLike( obj ) ) {
             length = obj.length;
             for ( ; i < length; i++ ) {
                 if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                     break;
                 }
             }
         } else {
             for ( i in obj ) {
                 if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                     break;
                 }
             }
         }

         return obj;
     },

     // results is for internal usage only
     makeArray: function( arr, results ) {
         var ret = results || [];

         if ( arr != null ) {
             if ( isArrayLike( Object( arr ) ) ) {
                 jQuery.merge( ret,
                     typeof arr === "string" ?
                         [ arr ] : arr
                 );
             } else {
                 push.call( ret, arr );
             }
         }

         return ret;
     },

     inArray: function( elem, arr, i ) {
         return arr == null ? -1 : indexOf.call( arr, elem, i );
     },

     // Support: Android <=4.0 only, PhantomJS 1 only
     // push.apply(_, arraylike) throws on ancient WebKit
     merge: function( first, second ) {
         var len = +second.length,
             j = 0,
             i = first.length;

         for ( ; j < len; j++ ) {
             first[ i++ ] = second[ j ];
         }

         first.length = i;

         return first;
     },

     grep: function( elems, callback, invert ) {
         var callbackInverse,
             matches = [],
             i = 0,
             length = elems.length,
             callbackExpect = !invert;

         // Go through the array, only saving the items
         // that pass the validator function
         for ( ; i < length; i++ ) {
             callbackInverse = !callback( elems[ i ], i );
             if ( callbackInverse !== callbackExpect ) {
                 matches.push( elems[ i ] );
             }
         }

         return matches;
     },

     // arg is for internal usage only
     map: function( elems, callback, arg ) {
         var length, value,
             i = 0,
             ret = [];

         // Go through the array, translating each of the items to their new values
         if ( isArrayLike( elems ) ) {
             length = elems.length;
             for ( ; i < length; i++ ) {
                 value = callback( elems[ i ], i, arg );

                 if ( value != null ) {
                     ret.push( value );
                 }
             }

         // Go through every key on the object,
         } else {
             for ( i in elems ) {
                 value = callback( elems[ i ], i, arg );

                 if ( value != null ) {
                     ret.push( value );
                 }
             }
         }

         // Flatten any nested arrays
         return flat( ret );
     },

     // A global GUID counter for objects
     guid: 1,

     // jQuery.support is not used in Core but other projects attach their
     // properties to it so it needs to exist.
     support: support
 } );

 if ( typeof Symbol === "function" ) {
     jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
 }

 // Populate the class2type map
 jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
     function( _i, name ) {
         class2type[ "[object " + name + "]" ] = name.toLowerCase();
     } );

 function isArrayLike( obj ) {

     // Support: real iOS 8.2 only (not reproducible in simulator)
     // `in` check used to prevent JIT error (gh-2145)
     // hasOwn isn't used here due to false negatives
     // regarding Nodelist length in IE
     var length = !!obj && "length" in obj && obj.length,
         type = toType( obj );

     if ( isFunction( obj ) || isWindow( obj ) ) {
         return false;
     }

     return type === "array" || length === 0 ||
         typeof length === "number" && length > 0 && ( length - 1 ) in obj;
 }
 var Sizzle =
 /*!
  * Sizzle CSS Selector Engine v2.3.6
  * https://sizzlejs.com/
  *
  * Copyright JS Foundation and other contributors
  * Released under the MIT license
  * https://js.foundation/
  *
  * Date: 2021-02-16
  */
 ( function( window ) {
 var i,
     support,
     Expr,
     getText,
     isXML,
     tokenize,
     compile,
     select,
     outermostContext,
     sortInput,
     hasDuplicate,

     // Local document vars
     setDocument,
     document,
     docElem,
     documentIsHTML,
     rbuggyQSA,
     rbuggyMatches,
     matches,
     contains,

     // Instance-specific data
     expando = "sizzle" + 1 * new Date(),
     preferredDoc = window.document,
     dirruns = 0,
     done = 0,
     classCache = createCache(),
     tokenCache = createCache(),
     compilerCache = createCache(),
     nonnativeSelectorCache = createCache(),
     sortOrder = function( a, b ) {
         if ( a === b ) {
             hasDuplicate = true;
         }
         return 0;
     },

     // Instance methods
     hasOwn = ( {} ).hasOwnProperty,
     arr = [],
     pop = arr.pop,
     pushNative = arr.push,
     push = arr.push,
     slice = arr.slice,

     // Use a stripped-down indexOf as it's faster than native
     // https://jsperf.com/thor-indexof-vs-for/5
     indexOf = function( list, elem ) {
         var i = 0,
             len = list.length;
         for ( ; i < len; i++ ) {
             if ( list[ i ] === elem ) {
                 return i;
             }
         }
         return -1;
     },

     booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
         "ismap|loop|multiple|open|readonly|required|scoped",

     // Regular expressions

     // http://www.w3.org/TR/css3-selectors/#whitespace
     whitespace = "[\\x20\\t\\r\\n\\f]",

     // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
     identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
         "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

     // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
     attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

         // Operator (capture 2)
         "*([*^$|!~]?=)" + whitespace +

         // "Attribute values must be CSS identifiers [capture 5]
         // or strings [capture 3 or capture 4]"
         "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
         whitespace + "*\\]",

     pseudos = ":(" + identifier + ")(?:\\((" +

         // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
         // 1. quoted (capture 3; capture 4 or capture 5)
         "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

         // 2. simple (capture 6)
         "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

         // 3. anything else (capture 2)
         ".*" +
         ")\\)|)",

     // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
     rwhitespace = new RegExp( whitespace + "+", "g" ),
     rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
         whitespace + "+$", "g" ),

     rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
     rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
         "*" ),
     rdescend = new RegExp( whitespace + "|>" ),

     rpseudo = new RegExp( pseudos ),
     ridentifier = new RegExp( "^" + identifier + "$" ),

     matchExpr = {
         "ID": new RegExp( "^#(" + identifier + ")" ),
         "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
         "TAG": new RegExp( "^(" + identifier + "|[*])" ),
         "ATTR": new RegExp( "^" + attributes ),
         "PSEUDO": new RegExp( "^" + pseudos ),
         "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
             whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
             whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
         "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

         // For use in libraries implementing .is()
         // We use this for POS matching in `select`
         "needsContext": new RegExp( "^" + whitespace +
             "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
             "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
     },

     rhtml = /HTML$/i,
     rinputs = /^(?:input|select|textarea|button)$/i,
     rheader = /^h\d$/i,

     rnative = /^[^{]+\{\s*\[native \w/,

     // Easily-parseable/retrievable ID or TAG or CLASS selectors
     rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

     rsibling = /[+~]/,

     // CSS escapes
     // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
     runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
     funescape = function( escape, nonHex ) {
         var high = "0x" + escape.slice( 1 ) - 0x10000;

         return nonHex ?

             // Strip the backslash prefix from a non-hex escape sequence
             nonHex :

             // Replace a hexadecimal escape sequence with the encoded Unicode code point
             // Support: IE <=11+
             // For values outside the Basic Multilingual Plane (BMP), manually construct a
             // surrogate pair
             high < 0 ?
                 String.fromCharCode( high + 0x10000 ) :
                 String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
     },

     // CSS string/identifier serialization
     // https://drafts.csswg.org/cssom/#common-serializing-idioms
     rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
     fcssescape = function( ch, asCodePoint ) {
         if ( asCodePoint ) {

             // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
             if ( ch === "\0" ) {
                 return "\uFFFD";
             }

             // Control characters and (dependent upon position) numbers get escaped as code points
             return ch.slice( 0, -1 ) + "\\" +
                 ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
         }

         // Other potentially-special ASCII characters get backslash-escaped
         return "\\" + ch;
     },

     // Used for iframes
     // See setDocument()
     // Removing the function wrapper causes a "Permission Denied"
     // error in IE
     unloadHandler = function() {
         setDocument();
     },

     inDisabledFieldset = addCombinator(
         function( elem ) {
             return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
         },
         { dir: "parentNode", next: "legend" }
     );

 // Optimize for push.apply( _, NodeList )
 try {
     push.apply(
         ( arr = slice.call( preferredDoc.childNodes ) ),
         preferredDoc.childNodes
     );

     // Support: Android<4.0
     // Detect silently failing push.apply
     // eslint-disable-next-line no-unused-expressions
     arr[ preferredDoc.childNodes.length ].nodeType;
 } catch ( e ) {
     push = { apply: arr.length ?

         // Leverage slice if possible
         function( target, els ) {
             pushNative.apply( target, slice.call( els ) );
         } :

         // Support: IE<9
         // Otherwise append directly
         function( target, els ) {
             var j = target.length,
                 i = 0;

             // Can't trust NodeList.length
             while ( ( target[ j++ ] = els[ i++ ] ) ) {}
             target.length = j - 1;
         }
     };
 }

 function Sizzle( selector, context, results, seed ) {
     var m, i, elem, nid, match, groups, newSelector,
         newContext = context && context.ownerDocument,

         // nodeType defaults to 9, since context defaults to document
         nodeType = context ? context.nodeType : 9;

     results = results || [];

     // Return early from calls with invalid selector or context
     if ( typeof selector !== "string" || !selector ||
         nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

         return results;
     }

     // Try to shortcut find operations (as opposed to filters) in HTML documents
     if ( !seed ) {
         setDocument( context );
         context = context || document;

         if ( documentIsHTML ) {

             // If the selector is sufficiently simple, try using a "get*By*" DOM method
             // (excepting DocumentFragment context, where the methods don't exist)
             if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

                 // ID selector
                 if ( ( m = match[ 1 ] ) ) {

                     // Document context
                     if ( nodeType === 9 ) {
                         if ( ( elem = context.getElementById( m ) ) ) {

                             // Support: IE, Opera, Webkit
                             // TODO: identify versions
                             // getElementById can match elements by name instead of ID
                             if ( elem.id === m ) {
                                 results.push( elem );
                                 return results;
                             }
                         } else {
                             return results;
                         }

                     // Element context
                     } else {

                         // Support: IE, Opera, Webkit
                         // TODO: identify versions
                         // getElementById can match elements by name instead of ID
                         if ( newContext && ( elem = newContext.getElementById( m ) ) &&
                             contains( context, elem ) &&
                             elem.id === m ) {

                             results.push( elem );
                             return results;
                         }
                     }

                 // Type selector
                 } else if ( match[ 2 ] ) {
                     push.apply( results, context.getElementsByTagName( selector ) );
                     return results;

                 // Class selector
                 } else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
                     context.getElementsByClassName ) {

                     push.apply( results, context.getElementsByClassName( m ) );
                     return results;
                 }
             }

             // Take advantage of querySelectorAll
             if ( support.qsa &&
                 !nonnativeSelectorCache[ selector + " " ] &&
                 ( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

                 // Support: IE 8 only
                 // Exclude object elements
                 ( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

                 newSelector = selector;
                 newContext = context;

                 // qSA considers elements outside a scoping root when evaluating child or
                 // descendant combinators, which is not what we want.
                 // In such cases, we work around the behavior by prefixing every selector in the
                 // list with an ID selector referencing the scope context.
                 // The technique has to be used as well when a leading combinator is used
                 // as such selectors are not recognized by querySelectorAll.
                 // Thanks to Andrew Dupont for this technique.
                 if ( nodeType === 1 &&
                     ( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

                     // Expand context for sibling selectors
                     newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                         context;

                     // We can use :scope instead of the ID hack if the browser
                     // supports it & if we're not changing the context.
                     if ( newContext !== context || !support.scope ) {

                         // Capture the context ID, setting it first if necessary
                         if ( ( nid = context.getAttribute( "id" ) ) ) {
                             nid = nid.replace( rcssescape, fcssescape );
                         } else {
                             context.setAttribute( "id", ( nid = expando ) );
                         }
                     }

                     // Prefix every selector in the list
                     groups = tokenize( selector );
                     i = groups.length;
                     while ( i-- ) {
                         groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
                             toSelector( groups[ i ] );
                     }
                     newSelector = groups.join( "," );
                 }

                 try {
                     push.apply( results,
                         newContext.querySelectorAll( newSelector )
                     );
                     return results;
                 } catch ( qsaError ) {
                     nonnativeSelectorCache( selector, true );
                 } finally {
                     if ( nid === expando ) {
                         context.removeAttribute( "id" );
                     }
                 }
             }
         }
     }

     // All others
     return select( selector.replace( rtrim, "$1" ), context, results, seed );
 }

 /**
  * Create key-value caches of limited size
  * @returns {function(string, object)} Returns the Object data after storing it on itself with
  *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
  *	deleting the oldest entry
  */
 function createCache() {
     var keys = [];

     function cache( key, value ) {

         // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
         if ( keys.push( key + " " ) > Expr.cacheLength ) {

             // Only keep the most recent entries
             delete cache[ keys.shift() ];
         }
         return ( cache[ key + " " ] = value );
     }
     return cache;
 }

 /**
  * Mark a function for special use by Sizzle
  * @param {Function} fn The function to mark
  */
 function markFunction( fn ) {
     fn[ expando ] = true;
     return fn;
 }

 /**
  * Support testing using an element
  * @param {Function} fn Passed the created element and returns a boolean result
  */
 function assert( fn ) {
     var el = document.createElement( "fieldset" );

     try {
         return !!fn( el );
     } catch ( e ) {
         return false;
     } finally {

         // Remove from its parent by default
         if ( el.parentNode ) {
             el.parentNode.removeChild( el );
         }

         // release memory in IE
         el = null;
     }
 }

 /**
  * Adds the same handler for all of the specified attrs
  * @param {String} attrs Pipe-separated list of attributes
  * @param {Function} handler The method that will be applied
  */
 function addHandle( attrs, handler ) {
     var arr = attrs.split( "|" ),
         i = arr.length;

     while ( i-- ) {
         Expr.attrHandle[ arr[ i ] ] = handler;
     }
 }

 /**
  * Checks document order of two siblings
  * @param {Element} a
  * @param {Element} b
  * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
  */
 function siblingCheck( a, b ) {
     var cur = b && a,
         diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
             a.sourceIndex - b.sourceIndex;

     // Use IE sourceIndex if available on both nodes
     if ( diff ) {
         return diff;
     }

     // Check if b follows a
     if ( cur ) {
         while ( ( cur = cur.nextSibling ) ) {
             if ( cur === b ) {
                 return -1;
             }
         }
     }

     return a ? 1 : -1;
 }

 /**
  * Returns a function to use in pseudos for input types
  * @param {String} type
  */
 function createInputPseudo( type ) {
     return function( elem ) {
         var name = elem.nodeName.toLowerCase();
         return name === "input" && elem.type === type;
     };
 }

 /**
  * Returns a function to use in pseudos for buttons
  * @param {String} type
  */
 function createButtonPseudo( type ) {
     return function( elem ) {
         var name = elem.nodeName.toLowerCase();
         return ( name === "input" || name === "button" ) && elem.type === type;
     };
 }

 /**
  * Returns a function to use in pseudos for :enabled/:disabled
  * @param {Boolean} disabled true for :disabled; false for :enabled
  */
 function createDisabledPseudo( disabled ) {

     // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
     return function( elem ) {

         // Only certain elements can match :enabled or :disabled
         // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
         // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
         if ( "form" in elem ) {

             // Check for inherited disabledness on relevant non-disabled elements:
             // * listed form-associated elements in a disabled fieldset
             //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
             //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
             // * option elements in a disabled optgroup
             //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
             // All such elements have a "form" property.
             if ( elem.parentNode && elem.disabled === false ) {

                 // Option elements defer to a parent optgroup if present
                 if ( "label" in elem ) {
                     if ( "label" in elem.parentNode ) {
                         return elem.parentNode.disabled === disabled;
                     } else {
                         return elem.disabled === disabled;
                     }
                 }

                 // Support: IE 6 - 11
                 // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                 return elem.isDisabled === disabled ||

                     // Where there is no isDisabled, check manually
                     /* jshint -W018 */
                     elem.isDisabled !== !disabled &&
                     inDisabledFieldset( elem ) === disabled;
             }

             return elem.disabled === disabled;

         // Try to winnow out elements that can't be disabled before trusting the disabled property.
         // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
         // even exist on them, let alone have a boolean value.
         } else if ( "label" in elem ) {
             return elem.disabled === disabled;
         }

         // Remaining elements are neither :enabled nor :disabled
         return false;
     };
 }

 /**
  * Returns a function to use in pseudos for positionals
  * @param {Function} fn
  */
 function createPositionalPseudo( fn ) {
     return markFunction( function( argument ) {
         argument = +argument;
         return markFunction( function( seed, matches ) {
             var j,
                 matchIndexes = fn( [], seed.length, argument ),
                 i = matchIndexes.length;

             // Match elements found at the specified indexes
             while ( i-- ) {
                 if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
                     seed[ j ] = !( matches[ j ] = seed[ j ] );
                 }
             }
         } );
     } );
 }

 /**
  * Checks a node for validity as a Sizzle context
  * @param {Element|Object=} context
  * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
  */
 function testContext( context ) {
     return context && typeof context.getElementsByTagName !== "undefined" && context;
 }

 // Expose support vars for convenience
 support = Sizzle.support = {};

 /**
  * Detects XML nodes
  * @param {Element|Object} elem An element or a document
  * @returns {Boolean} True iff elem is a non-HTML XML node
  */
 isXML = Sizzle.isXML = function( elem ) {
     var namespace = elem && elem.namespaceURI,
         docElem = elem && ( elem.ownerDocument || elem ).documentElement;

     // Support: IE <=8
     // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
     // https://bugs.jquery.com/ticket/4833
     return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
 };

 /**
  * Sets document-related variables once based on the current document
  * @param {Element|Object} [doc] An element or document object to use to set the document
  * @returns {Object} Returns the current document
  */
 setDocument = Sizzle.setDocument = function( node ) {
     var hasCompare, subWindow,
         doc = node ? node.ownerDocument || node : preferredDoc;

     // Return early if doc is invalid or already selected
     // Support: IE 11+, Edge 17 - 18+
     // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
     // two documents; shallow comparisons work.
     // eslint-disable-next-line eqeqeq
     if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
         return document;
     }

     // Update global variables
     document = doc;
     docElem = document.documentElement;
     documentIsHTML = !isXML( document );

     // Support: IE 9 - 11+, Edge 12 - 18+
     // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
     // Support: IE 11+, Edge 17 - 18+
     // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
     // two documents; shallow comparisons work.
     // eslint-disable-next-line eqeqeq
     if ( preferredDoc != document &&
         ( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

         // Support: IE 11, Edge
         if ( subWindow.addEventListener ) {
             subWindow.addEventListener( "unload", unloadHandler, false );

         // Support: IE 9 - 10 only
         } else if ( subWindow.attachEvent ) {
             subWindow.attachEvent( "onunload", unloadHandler );
         }
     }

     // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
     // Safari 4 - 5 only, Opera <=11.6 - 12.x only
     // IE/Edge & older browsers don't support the :scope pseudo-class.
     // Support: Safari 6.0 only
     // Safari 6.0 supports :scope but it's an alias of :root there.
     support.scope = assert( function( el ) {
         docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
         return typeof el.querySelectorAll !== "undefined" &&
             !el.querySelectorAll( ":scope fieldset div" ).length;
     } );

     /* Attributes
     ---------------------------------------------------------------------- */

     // Support: IE<8
     // Verify that getAttribute really returns attributes and not properties
     // (excepting IE8 booleans)
     support.attributes = assert( function( el ) {
         el.className = "i";
         return !el.getAttribute( "className" );
     } );

     /* getElement(s)By*
     ---------------------------------------------------------------------- */

     // Check if getElementsByTagName("*") returns only elements
     support.getElementsByTagName = assert( function( el ) {
         el.appendChild( document.createComment( "" ) );
         return !el.getElementsByTagName( "*" ).length;
     } );

     // Support: IE<9
     support.getElementsByClassName = rnative.test( document.getElementsByClassName );

     // Support: IE<10
     // Check if getElementById returns elements by name
     // The broken getElementById methods don't pick up programmatically-set names,
     // so use a roundabout getElementsByName test
     support.getById = assert( function( el ) {
         docElem.appendChild( el ).id = expando;
         return !document.getElementsByName || !document.getElementsByName( expando ).length;
     } );

     // ID filter and find
     if ( support.getById ) {
         Expr.filter[ "ID" ] = function( id ) {
             var attrId = id.replace( runescape, funescape );
             return function( elem ) {
                 return elem.getAttribute( "id" ) === attrId;
             };
         };
         Expr.find[ "ID" ] = function( id, context ) {
             if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                 var elem = context.getElementById( id );
                 return elem ? [ elem ] : [];
             }
         };
     } else {
         Expr.filter[ "ID" ] =  function( id ) {
             var attrId = id.replace( runescape, funescape );
             return function( elem ) {
                 var node = typeof elem.getAttributeNode !== "undefined" &&
                     elem.getAttributeNode( "id" );
                 return node && node.value === attrId;
             };
         };

         // Support: IE 6 - 7 only
         // getElementById is not reliable as a find shortcut
         Expr.find[ "ID" ] = function( id, context ) {
             if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                 var node, i, elems,
                     elem = context.getElementById( id );

                 if ( elem ) {

                     // Verify the id attribute
                     node = elem.getAttributeNode( "id" );
                     if ( node && node.value === id ) {
                         return [ elem ];
                     }

                     // Fall back on getElementsByName
                     elems = context.getElementsByName( id );
                     i = 0;
                     while ( ( elem = elems[ i++ ] ) ) {
                         node = elem.getAttributeNode( "id" );
                         if ( node && node.value === id ) {
                             return [ elem ];
                         }
                     }
                 }

                 return [];
             }
         };
     }

     // Tag
     Expr.find[ "TAG" ] = support.getElementsByTagName ?
         function( tag, context ) {
             if ( typeof context.getElementsByTagName !== "undefined" ) {
                 return context.getElementsByTagName( tag );

             // DocumentFragment nodes don't have gEBTN
             } else if ( support.qsa ) {
                 return context.querySelectorAll( tag );
             }
         } :

         function( tag, context ) {
             var elem,
                 tmp = [],
                 i = 0,

                 // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                 results = context.getElementsByTagName( tag );

             // Filter out possible comments
             if ( tag === "*" ) {
                 while ( ( elem = results[ i++ ] ) ) {
                     if ( elem.nodeType === 1 ) {
                         tmp.push( elem );
                     }
                 }

                 return tmp;
             }
             return results;
         };

     // Class
     Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
         if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
             return context.getElementsByClassName( className );
         }
     };

     /* QSA/matchesSelector
     ---------------------------------------------------------------------- */

     // QSA and matchesSelector support

     // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
     rbuggyMatches = [];

     // qSa(:focus) reports false when true (Chrome 21)
     // We allow this because of a bug in IE8/9 that throws an error
     // whenever `document.activeElement` is accessed on an iframe
     // So, we allow :focus to pass through QSA all the time to avoid the IE error
     // See https://bugs.jquery.com/ticket/13378
     rbuggyQSA = [];

     if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

         // Build QSA regex
         // Regex strategy adopted from Diego Perini
         assert( function( el ) {

             var input;

             // Select is set to empty string on purpose
             // This is to test IE's treatment of not explicitly
             // setting a boolean content attribute,
             // since its presence should be enough
             // https://bugs.jquery.com/ticket/12359
             docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                 "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                 "<option selected=''></option></select>";

             // Support: IE8, Opera 11-12.16
             // Nothing should be selected when empty strings follow ^= or $= or *=
             // The test attribute must be unknown in Opera but "safe" for WinRT
             // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
             if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
                 rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
             }

             // Support: IE8
             // Boolean attributes and "value" are not treated correctly
             if ( !el.querySelectorAll( "[selected]" ).length ) {
                 rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
             }

             // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
             if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                 rbuggyQSA.push( "~=" );
             }

             // Support: IE 11+, Edge 15 - 18+
             // IE 11/Edge don't find elements on a `[name='']` query in some cases.
             // Adding a temporary attribute to the document before the selection works
             // around the issue.
             // Interestingly, IE 10 & older don't seem to have the issue.
             input = document.createElement( "input" );
             input.setAttribute( "name", "" );
             el.appendChild( input );
             if ( !el.querySelectorAll( "[name='']" ).length ) {
                 rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
                     whitespace + "*(?:''|\"\")" );
             }

             // Webkit/Opera - :checked should return selected option elements
             // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
             // IE8 throws error here and will not see later tests
             if ( !el.querySelectorAll( ":checked" ).length ) {
                 rbuggyQSA.push( ":checked" );
             }

             // Support: Safari 8+, iOS 8+
             // https://bugs.webkit.org/show_bug.cgi?id=136851
             // In-page `selector#id sibling-combinator selector` fails
             if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                 rbuggyQSA.push( ".#.+[+~]" );
             }

             // Support: Firefox <=3.6 - 5 only
             // Old Firefox doesn't throw on a badly-escaped identifier.
             el.querySelectorAll( "\\\f" );
             rbuggyQSA.push( "[\\r\\n\\f]" );
         } );

         assert( function( el ) {
             el.innerHTML = "<a href='' disabled='disabled'></a>" +
                 "<select disabled='disabled'><option/></select>";

             // Support: Windows 8 Native Apps
             // The type and name attributes are restricted during .innerHTML assignment
             var input = document.createElement( "input" );
             input.setAttribute( "type", "hidden" );
             el.appendChild( input ).setAttribute( "name", "D" );

             // Support: IE8
             // Enforce case-sensitivity of name attribute
             if ( el.querySelectorAll( "[name=d]" ).length ) {
                 rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
             }

             // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
             // IE8 throws error here and will not see later tests
             if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
                 rbuggyQSA.push( ":enabled", ":disabled" );
             }

             // Support: IE9-11+
             // IE's :disabled selector does not pick up the children of disabled fieldsets
             docElem.appendChild( el ).disabled = true;
             if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
                 rbuggyQSA.push( ":enabled", ":disabled" );
             }

             // Support: Opera 10 - 11 only
             // Opera 10-11 does not throw on post-comma invalid pseudos
             el.querySelectorAll( "*,:x" );
             rbuggyQSA.push( ",.*:" );
         } );
     }

     if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
         docElem.webkitMatchesSelector ||
         docElem.mozMatchesSelector ||
         docElem.oMatchesSelector ||
         docElem.msMatchesSelector ) ) ) ) {

         assert( function( el ) {

             // Check to see if it's possible to do matchesSelector
             // on a disconnected node (IE 9)
             support.disconnectedMatch = matches.call( el, "*" );

             // This should fail with an exception
             // Gecko does not error, returns false instead
             matches.call( el, "[s!='']:x" );
             rbuggyMatches.push( "!=", pseudos );
         } );
     }

     rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
     rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

     /* Contains
     ---------------------------------------------------------------------- */
     hasCompare = rnative.test( docElem.compareDocumentPosition );

     // Element contains another
     // Purposefully self-exclusive
     // As in, an element does not contain itself
     contains = hasCompare || rnative.test( docElem.contains ) ?
         function( a, b ) {
             var adown = a.nodeType === 9 ? a.documentElement : a,
                 bup = b && b.parentNode;
             return a === bup || !!( bup && bup.nodeType === 1 && (
                 adown.contains ?
                     adown.contains( bup ) :
                     a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
             ) );
         } :
         function( a, b ) {
             if ( b ) {
                 while ( ( b = b.parentNode ) ) {
                     if ( b === a ) {
                         return true;
                     }
                 }
             }
             return false;
         };

     /* Sorting
     ---------------------------------------------------------------------- */

     // Document order sorting
     sortOrder = hasCompare ?
     function( a, b ) {

         // Flag for duplicate removal
         if ( a === b ) {
             hasDuplicate = true;
             return 0;
         }

         // Sort on method existence if only one input has compareDocumentPosition
         var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
         if ( compare ) {
             return compare;
         }

         // Calculate position if both inputs belong to the same document
         // Support: IE 11+, Edge 17 - 18+
         // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
         // two documents; shallow comparisons work.
         // eslint-disable-next-line eqeqeq
         compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
             a.compareDocumentPosition( b ) :

             // Otherwise we know they are disconnected
             1;

         // Disconnected nodes
         if ( compare & 1 ||
             ( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

             // Choose the first element that is related to our preferred document
             // Support: IE 11+, Edge 17 - 18+
             // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
             // two documents; shallow comparisons work.
             // eslint-disable-next-line eqeqeq
             if ( a == document || a.ownerDocument == preferredDoc &&
                 contains( preferredDoc, a ) ) {
                 return -1;
             }

             // Support: IE 11+, Edge 17 - 18+
             // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
             // two documents; shallow comparisons work.
             // eslint-disable-next-line eqeqeq
             if ( b == document || b.ownerDocument == preferredDoc &&
                 contains( preferredDoc, b ) ) {
                 return 1;
             }

             // Maintain original order
             return sortInput ?
                 ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                 0;
         }

         return compare & 4 ? -1 : 1;
     } :
     function( a, b ) {

         // Exit early if the nodes are identical
         if ( a === b ) {
             hasDuplicate = true;
             return 0;
         }

         var cur,
             i = 0,
             aup = a.parentNode,
             bup = b.parentNode,
             ap = [ a ],
             bp = [ b ];

         // Parentless nodes are either documents or disconnected
         if ( !aup || !bup ) {

             // Support: IE 11+, Edge 17 - 18+
             // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
             // two documents; shallow comparisons work.
             /* eslint-disable eqeqeq */
             return a == document ? -1 :
                 b == document ? 1 :
                 /* eslint-enable eqeqeq */
                 aup ? -1 :
                 bup ? 1 :
                 sortInput ?
                 ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                 0;

         // If the nodes are siblings, we can do a quick check
         } else if ( aup === bup ) {
             return siblingCheck( a, b );
         }

         // Otherwise we need full lists of their ancestors for comparison
         cur = a;
         while ( ( cur = cur.parentNode ) ) {
             ap.unshift( cur );
         }
         cur = b;
         while ( ( cur = cur.parentNode ) ) {
             bp.unshift( cur );
         }

         // Walk down the tree looking for a discrepancy
         while ( ap[ i ] === bp[ i ] ) {
             i++;
         }

         return i ?

             // Do a sibling check if the nodes have a common ancestor
             siblingCheck( ap[ i ], bp[ i ] ) :

             // Otherwise nodes in our document sort first
             // Support: IE 11+, Edge 17 - 18+
             // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
             // two documents; shallow comparisons work.
             /* eslint-disable eqeqeq */
             ap[ i ] == preferredDoc ? -1 :
             bp[ i ] == preferredDoc ? 1 :
             /* eslint-enable eqeqeq */
             0;
     };

     return document;
 };

 Sizzle.matches = function( expr, elements ) {
     return Sizzle( expr, null, null, elements );
 };

 Sizzle.matchesSelector = function( elem, expr ) {
     setDocument( elem );

     if ( support.matchesSelector && documentIsHTML &&
         !nonnativeSelectorCache[ expr + " " ] &&
         ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
         ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

         try {
             var ret = matches.call( elem, expr );

             // IE 9's matchesSelector returns false on disconnected nodes
             if ( ret || support.disconnectedMatch ||

                 // As well, disconnected nodes are said to be in a document
                 // fragment in IE 9
                 elem.document && elem.document.nodeType !== 11 ) {
                 return ret;
             }
         } catch ( e ) {
             nonnativeSelectorCache( expr, true );
         }
     }

     return Sizzle( expr, document, null, [ elem ] ).length > 0;
 };

 Sizzle.contains = function( context, elem ) {

     // Set document vars if needed
     // Support: IE 11+, Edge 17 - 18+
     // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
     // two documents; shallow comparisons work.
     // eslint-disable-next-line eqeqeq
     if ( ( context.ownerDocument || context ) != document ) {
         setDocument( context );
     }
     return contains( context, elem );
 };

 Sizzle.attr = function( elem, name ) {

     // Set document vars if needed
     // Support: IE 11+, Edge 17 - 18+
     // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
     // two documents; shallow comparisons work.
     // eslint-disable-next-line eqeqeq
     if ( ( elem.ownerDocument || elem ) != document ) {
         setDocument( elem );
     }

     var fn = Expr.attrHandle[ name.toLowerCase() ],

         // Don't get fooled by Object.prototype properties (jQuery #13807)
         val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
             fn( elem, name, !documentIsHTML ) :
             undefined;

     return val !== undefined ?
         val :
         support.attributes || !documentIsHTML ?
             elem.getAttribute( name ) :
             ( val = elem.getAttributeNode( name ) ) && val.specified ?
                 val.value :
                 null;
 };

 Sizzle.escape = function( sel ) {
     return ( sel + "" ).replace( rcssescape, fcssescape );
 };

 Sizzle.error = function( msg ) {
     throw new Error( "Syntax error, unrecognized expression: " + msg );
 };

 /**
  * Document sorting and removing duplicates
  * @param {ArrayLike} results
  */
 Sizzle.uniqueSort = function( results ) {
     var elem,
         duplicates = [],
         j = 0,
         i = 0;

     // Unless we *know* we can detect duplicates, assume their presence
     hasDuplicate = !support.detectDuplicates;
     sortInput = !support.sortStable && results.slice( 0 );
     results.sort( sortOrder );

     if ( hasDuplicate ) {
         while ( ( elem = results[ i++ ] ) ) {
             if ( elem === results[ i ] ) {
                 j = duplicates.push( i );
             }
         }
         while ( j-- ) {
             results.splice( duplicates[ j ], 1 );
         }
     }

     // Clear input after sorting to release objects
     // See https://github.com/jquery/sizzle/pull/225
     sortInput = null;

     return results;
 };

 /**
  * Utility function for retrieving the text value of an array of DOM nodes
  * @param {Array|Element} elem
  */
 getText = Sizzle.getText = function( elem ) {
     var node,
         ret = "",
         i = 0,
         nodeType = elem.nodeType;

     if ( !nodeType ) {

         // If no nodeType, this is expected to be an array
         while ( ( node = elem[ i++ ] ) ) {

             // Do not traverse comment nodes
             ret += getText( node );
         }
     } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

         // Use textContent for elements
         // innerText usage removed for consistency of new lines (jQuery #11153)
         if ( typeof elem.textContent === "string" ) {
             return elem.textContent;
         } else {

             // Traverse its children
             for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                 ret += getText( elem );
             }
         }
     } else if ( nodeType === 3 || nodeType === 4 ) {
         return elem.nodeValue;
     }

     // Do not include comment or processing instruction nodes

     return ret;
 };

 Expr = Sizzle.selectors = {

     // Can be adjusted by the user
     cacheLength: 50,

     createPseudo: markFunction,

     match: matchExpr,

     attrHandle: {},

     find: {},

     relative: {
         ">": { dir: "parentNode", first: true },
         " ": { dir: "parentNode" },
         "+": { dir: "previousSibling", first: true },
         "~": { dir: "previousSibling" }
     },

     preFilter: {
         "ATTR": function( match ) {
             match[ 1 ] = match[ 1 ].replace( runescape, funescape );

             // Move the given value to match[3] whether quoted or unquoted
             match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
                 match[ 5 ] || "" ).replace( runescape, funescape );

             if ( match[ 2 ] === "~=" ) {
                 match[ 3 ] = " " + match[ 3 ] + " ";
             }

             return match.slice( 0, 4 );
         },

         "CHILD": function( match ) {

             /* matches from matchExpr["CHILD"]
                 1 type (only|nth|...)
                 2 what (child|of-type)
                 3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                 4 xn-component of xn+y argument ([+-]?\d*n|)
                 5 sign of xn-component
                 6 x of xn-component
                 7 sign of y-component
                 8 y of y-component
             */
             match[ 1 ] = match[ 1 ].toLowerCase();

             if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

                 // nth-* requires argument
                 if ( !match[ 3 ] ) {
                     Sizzle.error( match[ 0 ] );
                 }

                 // numeric x and y parameters for Expr.filter.CHILD
                 // remember that false/true cast respectively to 0/1
                 match[ 4 ] = +( match[ 4 ] ?
                     match[ 5 ] + ( match[ 6 ] || 1 ) :
                     2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
                 match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

                 // other types prohibit arguments
             } else if ( match[ 3 ] ) {
                 Sizzle.error( match[ 0 ] );
             }

             return match;
         },

         "PSEUDO": function( match ) {
             var excess,
                 unquoted = !match[ 6 ] && match[ 2 ];

             if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
                 return null;
             }

             // Accept quoted arguments as-is
             if ( match[ 3 ] ) {
                 match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

             // Strip excess characters from unquoted arguments
             } else if ( unquoted && rpseudo.test( unquoted ) &&

                 // Get excess from tokenize (recursively)
                 ( excess = tokenize( unquoted, true ) ) &&

                 // advance to the next closing parenthesis
                 ( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

                 // excess is a negative index
                 match[ 0 ] = match[ 0 ].slice( 0, excess );
                 match[ 2 ] = unquoted.slice( 0, excess );
             }

             // Return only captures needed by the pseudo filter method (type and argument)
             return match.slice( 0, 3 );
         }
     },

     filter: {

         "TAG": function( nodeNameSelector ) {
             var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
             return nodeNameSelector === "*" ?
                 function() {
                     return true;
                 } :
                 function( elem ) {
                     return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                 };
         },

         "CLASS": function( className ) {
             var pattern = classCache[ className + " " ];

             return pattern ||
                 ( pattern = new RegExp( "(^|" + whitespace +
                     ")" + className + "(" + whitespace + "|$)" ) ) && classCache(
                         className, function( elem ) {
                             return pattern.test(
                                 typeof elem.className === "string" && elem.className ||
                                 typeof elem.getAttribute !== "undefined" &&
                                     elem.getAttribute( "class" ) ||
                                 ""
                             );
                 } );
         },

         "ATTR": function( name, operator, check ) {
             return function( elem ) {
                 var result = Sizzle.attr( elem, name );

                 if ( result == null ) {
                     return operator === "!=";
                 }
                 if ( !operator ) {
                     return true;
                 }

                 result += "";

                 /* eslint-disable max-len */

                 return operator === "=" ? result === check :
                     operator === "!=" ? result !== check :
                     operator === "^=" ? check && result.indexOf( check ) === 0 :
                     operator === "*=" ? check && result.indexOf( check ) > -1 :
                     operator === "$=" ? check && result.slice( -check.length ) === check :
                     operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                     operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                     false;
                 /* eslint-enable max-len */

             };
         },

         "CHILD": function( type, what, _argument, first, last ) {
             var simple = type.slice( 0, 3 ) !== "nth",
                 forward = type.slice( -4 ) !== "last",
                 ofType = what === "of-type";

             return first === 1 && last === 0 ?

                 // Shortcut for :nth-*(n)
                 function( elem ) {
                     return !!elem.parentNode;
                 } :

                 function( elem, _context, xml ) {
                     var cache, uniqueCache, outerCache, node, nodeIndex, start,
                         dir = simple !== forward ? "nextSibling" : "previousSibling",
                         parent = elem.parentNode,
                         name = ofType && elem.nodeName.toLowerCase(),
                         useCache = !xml && !ofType,
                         diff = false;

                     if ( parent ) {

                         // :(first|last|only)-(child|of-type)
                         if ( simple ) {
                             while ( dir ) {
                                 node = elem;
                                 while ( ( node = node[ dir ] ) ) {
                                     if ( ofType ?
                                         node.nodeName.toLowerCase() === name :
                                         node.nodeType === 1 ) {

                                         return false;
                                     }
                                 }

                                 // Reverse direction for :only-* (if we haven't yet done so)
                                 start = dir = type === "only" && !start && "nextSibling";
                             }
                             return true;
                         }

                         start = [ forward ? parent.firstChild : parent.lastChild ];

                         // non-xml :nth-child(...) stores cache data on `parent`
                         if ( forward && useCache ) {

                             // Seek `elem` from a previously-cached index

                             // ...in a gzip-friendly way
                             node = parent;
                             outerCache = node[ expando ] || ( node[ expando ] = {} );

                             // Support: IE <9 only
                             // Defend against cloned attroperties (jQuery gh-1709)
                             uniqueCache = outerCache[ node.uniqueID ] ||
                                 ( outerCache[ node.uniqueID ] = {} );

                             cache = uniqueCache[ type ] || [];
                             nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                             diff = nodeIndex && cache[ 2 ];
                             node = nodeIndex && parent.childNodes[ nodeIndex ];

                             while ( ( node = ++nodeIndex && node && node[ dir ] ||

                                 // Fallback to seeking `elem` from the start
                                 ( diff = nodeIndex = 0 ) || start.pop() ) ) {

                                 // When found, cache indexes on `parent` and break
                                 if ( node.nodeType === 1 && ++diff && node === elem ) {
                                     uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                     break;
                                 }
                             }

                         } else {

                             // Use previously-cached element index if available
                             if ( useCache ) {

                                 // ...in a gzip-friendly way
                                 node = elem;
                                 outerCache = node[ expando ] || ( node[ expando ] = {} );

                                 // Support: IE <9 only
                                 // Defend against cloned attroperties (jQuery gh-1709)
                                 uniqueCache = outerCache[ node.uniqueID ] ||
                                     ( outerCache[ node.uniqueID ] = {} );

                                 cache = uniqueCache[ type ] || [];
                                 nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                 diff = nodeIndex;
                             }

                             // xml :nth-child(...)
                             // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                             if ( diff === false ) {

                                 // Use the same loop as above to seek `elem` from the start
                                 while ( ( node = ++nodeIndex && node && node[ dir ] ||
                                     ( diff = nodeIndex = 0 ) || start.pop() ) ) {

                                     if ( ( ofType ?
                                         node.nodeName.toLowerCase() === name :
                                         node.nodeType === 1 ) &&
                                         ++diff ) {

                                         // Cache the index of each encountered element
                                         if ( useCache ) {
                                             outerCache = node[ expando ] ||
                                                 ( node[ expando ] = {} );

                                             // Support: IE <9 only
                                             // Defend against cloned attroperties (jQuery gh-1709)
                                             uniqueCache = outerCache[ node.uniqueID ] ||
                                                 ( outerCache[ node.uniqueID ] = {} );

                                             uniqueCache[ type ] = [ dirruns, diff ];
                                         }

                                         if ( node === elem ) {
                                             break;
                                         }
                                     }
                                 }
                             }
                         }

                         // Incorporate the offset, then check against cycle size
                         diff -= last;
                         return diff === first || ( diff % first === 0 && diff / first >= 0 );
                     }
                 };
         },

         "PSEUDO": function( pseudo, argument ) {

             // pseudo-class names are case-insensitive
             // http://www.w3.org/TR/selectors/#pseudo-classes
             // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
             // Remember that setFilters inherits from pseudos
             var args,
                 fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                     Sizzle.error( "unsupported pseudo: " + pseudo );

             // The user may use createPseudo to indicate that
             // arguments are needed to create the filter function
             // just as Sizzle does
             if ( fn[ expando ] ) {
                 return fn( argument );
             }

             // But maintain support for old signatures
             if ( fn.length > 1 ) {
                 args = [ pseudo, pseudo, "", argument ];
                 return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                     markFunction( function( seed, matches ) {
                         var idx,
                             matched = fn( seed, argument ),
                             i = matched.length;
                         while ( i-- ) {
                             idx = indexOf( seed, matched[ i ] );
                             seed[ idx ] = !( matches[ idx ] = matched[ i ] );
                         }
                     } ) :
                     function( elem ) {
                         return fn( elem, 0, args );
                     };
             }

             return fn;
         }
     },

     pseudos: {

         // Potentially complex pseudos
         "not": markFunction( function( selector ) {

             // Trim the selector passed to compile
             // to avoid treating leading and trailing
             // spaces as combinators
             var input = [],
                 results = [],
                 matcher = compile( selector.replace( rtrim, "$1" ) );

             return matcher[ expando ] ?
                 markFunction( function( seed, matches, _context, xml ) {
                     var elem,
                         unmatched = matcher( seed, null, xml, [] ),
                         i = seed.length;

                     // Match elements unmatched by `matcher`
                     while ( i-- ) {
                         if ( ( elem = unmatched[ i ] ) ) {
                             seed[ i ] = !( matches[ i ] = elem );
                         }
                     }
                 } ) :
                 function( elem, _context, xml ) {
                     input[ 0 ] = elem;
                     matcher( input, null, xml, results );

                     // Don't keep the element (issue #299)
                     input[ 0 ] = null;
                     return !results.pop();
                 };
         } ),

         "has": markFunction( function( selector ) {
             return function( elem ) {
                 return Sizzle( selector, elem ).length > 0;
             };
         } ),

         "contains": markFunction( function( text ) {
             text = text.replace( runescape, funescape );
             return function( elem ) {
                 return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
             };
         } ),

         // "Whether an element is represented by a :lang() selector
         // is based solely on the element's language value
         // being equal to the identifier C,
         // or beginning with the identifier C immediately followed by "-".
         // The matching of C against the element's language value is performed case-insensitively.
         // The identifier C does not have to be a valid language name."
         // http://www.w3.org/TR/selectors/#lang-pseudo
         "lang": markFunction( function( lang ) {

             // lang value must be a valid identifier
             if ( !ridentifier.test( lang || "" ) ) {
                 Sizzle.error( "unsupported lang: " + lang );
             }
             lang = lang.replace( runescape, funescape ).toLowerCase();
             return function( elem ) {
                 var elemLang;
                 do {
                     if ( ( elemLang = documentIsHTML ?
                         elem.lang :
                         elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

                         elemLang = elemLang.toLowerCase();
                         return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                     }
                 } while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
                 return false;
             };
         } ),

         // Miscellaneous
         "target": function( elem ) {
             var hash = window.location && window.location.hash;
             return hash && hash.slice( 1 ) === elem.id;
         },

         "root": function( elem ) {
             return elem === docElem;
         },

         "focus": function( elem ) {
             return elem === document.activeElement &&
                 ( !document.hasFocus || document.hasFocus() ) &&
                 !!( elem.type || elem.href || ~elem.tabIndex );
         },

         // Boolean properties
         "enabled": createDisabledPseudo( false ),
         "disabled": createDisabledPseudo( true ),

         "checked": function( elem ) {

             // In CSS3, :checked should return both checked and selected elements
             // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
             var nodeName = elem.nodeName.toLowerCase();
             return ( nodeName === "input" && !!elem.checked ) ||
                 ( nodeName === "option" && !!elem.selected );
         },

         "selected": function( elem ) {

             // Accessing this property makes selected-by-default
             // options in Safari work properly
             if ( elem.parentNode ) {
                 // eslint-disable-next-line no-unused-expressions
                 elem.parentNode.selectedIndex;
             }

             return elem.selected === true;
         },

         // Contents
         "empty": function( elem ) {

             // http://www.w3.org/TR/selectors/#empty-pseudo
             // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
             //   but not by others (comment: 8; processing instruction: 7; etc.)
             // nodeType < 6 works because attributes (2) do not appear as children
             for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                 if ( elem.nodeType < 6 ) {
                     return false;
                 }
             }
             return true;
         },

         "parent": function( elem ) {
             return !Expr.pseudos[ "empty" ]( elem );
         },

         // Element/input types
         "header": function( elem ) {
             return rheader.test( elem.nodeName );
         },

         "input": function( elem ) {
             return rinputs.test( elem.nodeName );
         },

         "button": function( elem ) {
             var name = elem.nodeName.toLowerCase();
             return name === "input" && elem.type === "button" || name === "button";
         },

         "text": function( elem ) {
             var attr;
             return elem.nodeName.toLowerCase() === "input" &&
                 elem.type === "text" &&

                 // Support: IE<8
                 // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                 ( ( attr = elem.getAttribute( "type" ) ) == null ||
                     attr.toLowerCase() === "text" );
         },

         // Position-in-collection
         "first": createPositionalPseudo( function() {
             return [ 0 ];
         } ),

         "last": createPositionalPseudo( function( _matchIndexes, length ) {
             return [ length - 1 ];
         } ),

         "eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
             return [ argument < 0 ? argument + length : argument ];
         } ),

         "even": createPositionalPseudo( function( matchIndexes, length ) {
             var i = 0;
             for ( ; i < length; i += 2 ) {
                 matchIndexes.push( i );
             }
             return matchIndexes;
         } ),

         "odd": createPositionalPseudo( function( matchIndexes, length ) {
             var i = 1;
             for ( ; i < length; i += 2 ) {
                 matchIndexes.push( i );
             }
             return matchIndexes;
         } ),

         "lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
             var i = argument < 0 ?
                 argument + length :
                 argument > length ?
                     length :
                     argument;
             for ( ; --i >= 0; ) {
                 matchIndexes.push( i );
             }
             return matchIndexes;
         } ),

         "gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
             var i = argument < 0 ? argument + length : argument;
             for ( ; ++i < length; ) {
                 matchIndexes.push( i );
             }
             return matchIndexes;
         } )
     }
 };

 Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

 // Add button/input type pseudos
 for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
     Expr.pseudos[ i ] = createInputPseudo( i );
 }
 for ( i in { submit: true, reset: true } ) {
     Expr.pseudos[ i ] = createButtonPseudo( i );
 }

 // Easy API for creating new setFilters
 function setFilters() {}
 setFilters.prototype = Expr.filters = Expr.pseudos;
 Expr.setFilters = new setFilters();

 tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
     var matched, match, tokens, type,
         soFar, groups, preFilters,
         cached = tokenCache[ selector + " " ];

     if ( cached ) {
         return parseOnly ? 0 : cached.slice( 0 );
     }

     soFar = selector;
     groups = [];
     preFilters = Expr.preFilter;

     while ( soFar ) {

         // Comma and first run
         if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
             if ( match ) {

                 // Don't consume trailing commas as valid
                 soFar = soFar.slice( match[ 0 ].length ) || soFar;
             }
             groups.push( ( tokens = [] ) );
         }

         matched = false;

         // Combinators
         if ( ( match = rcombinators.exec( soFar ) ) ) {
             matched = match.shift();
             tokens.push( {
                 value: matched,

                 // Cast descendant combinators to space
                 type: match[ 0 ].replace( rtrim, " " )
             } );
             soFar = soFar.slice( matched.length );
         }

         // Filters
         for ( type in Expr.filter ) {
             if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
                 ( match = preFilters[ type ]( match ) ) ) ) {
                 matched = match.shift();
                 tokens.push( {
                     value: matched,
                     type: type,
                     matches: match
                 } );
                 soFar = soFar.slice( matched.length );
             }
         }

         if ( !matched ) {
             break;
         }
     }

     // Return the length of the invalid excess
     // if we're just parsing
     // Otherwise, throw an error or return tokens
     return parseOnly ?
         soFar.length :
         soFar ?
             Sizzle.error( selector ) :

             // Cache the tokens
             tokenCache( selector, groups ).slice( 0 );
 };

 function toSelector( tokens ) {
     var i = 0,
         len = tokens.length,
         selector = "";
     for ( ; i < len; i++ ) {
         selector += tokens[ i ].value;
     }
     return selector;
 }

 function addCombinator( matcher, combinator, base ) {
     var dir = combinator.dir,
         skip = combinator.next,
         key = skip || dir,
         checkNonElements = base && key === "parentNode",
         doneName = done++;

     return combinator.first ?

         // Check against closest ancestor/preceding element
         function( elem, context, xml ) {
             while ( ( elem = elem[ dir ] ) ) {
                 if ( elem.nodeType === 1 || checkNonElements ) {
                     return matcher( elem, context, xml );
                 }
             }
             return false;
         } :

         // Check against all ancestor/preceding elements
         function( elem, context, xml ) {
             var oldCache, uniqueCache, outerCache,
                 newCache = [ dirruns, doneName ];

             // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
             if ( xml ) {
                 while ( ( elem = elem[ dir ] ) ) {
                     if ( elem.nodeType === 1 || checkNonElements ) {
                         if ( matcher( elem, context, xml ) ) {
                             return true;
                         }
                     }
                 }
             } else {
                 while ( ( elem = elem[ dir ] ) ) {
                     if ( elem.nodeType === 1 || checkNonElements ) {
                         outerCache = elem[ expando ] || ( elem[ expando ] = {} );

                         // Support: IE <9 only
                         // Defend against cloned attroperties (jQuery gh-1709)
                         uniqueCache = outerCache[ elem.uniqueID ] ||
                             ( outerCache[ elem.uniqueID ] = {} );

                         if ( skip && skip === elem.nodeName.toLowerCase() ) {
                             elem = elem[ dir ] || elem;
                         } else if ( ( oldCache = uniqueCache[ key ] ) &&
                             oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

                             // Assign to newCache so results back-propagate to previous elements
                             return ( newCache[ 2 ] = oldCache[ 2 ] );
                         } else {

                             // Reuse newcache so results back-propagate to previous elements
                             uniqueCache[ key ] = newCache;

                             // A match means we're done; a fail means we have to keep checking
                             if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
                                 return true;
                             }
                         }
                     }
                 }
             }
             return false;
         };
 }

 function elementMatcher( matchers ) {
     return matchers.length > 1 ?
         function( elem, context, xml ) {
             var i = matchers.length;
             while ( i-- ) {
                 if ( !matchers[ i ]( elem, context, xml ) ) {
                     return false;
                 }
             }
             return true;
         } :
         matchers[ 0 ];
 }

 function multipleContexts( selector, contexts, results ) {
     var i = 0,
         len = contexts.length;
     for ( ; i < len; i++ ) {
         Sizzle( selector, contexts[ i ], results );
     }
     return results;
 }

 function condense( unmatched, map, filter, context, xml ) {
     var elem,
         newUnmatched = [],
         i = 0,
         len = unmatched.length,
         mapped = map != null;

     for ( ; i < len; i++ ) {
         if ( ( elem = unmatched[ i ] ) ) {
             if ( !filter || filter( elem, context, xml ) ) {
                 newUnmatched.push( elem );
                 if ( mapped ) {
                     map.push( i );
                 }
             }
         }
     }

     return newUnmatched;
 }

 function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
     if ( postFilter && !postFilter[ expando ] ) {
         postFilter = setMatcher( postFilter );
     }
     if ( postFinder && !postFinder[ expando ] ) {
         postFinder = setMatcher( postFinder, postSelector );
     }
     return markFunction( function( seed, results, context, xml ) {
         var temp, i, elem,
             preMap = [],
             postMap = [],
             preexisting = results.length,

             // Get initial elements from seed or context
             elems = seed || multipleContexts(
                 selector || "*",
                 context.nodeType ? [ context ] : context,
                 []
             ),

             // Prefilter to get matcher input, preserving a map for seed-results synchronization
             matcherIn = preFilter && ( seed || !selector ) ?
                 condense( elems, preMap, preFilter, context, xml ) :
                 elems,

             matcherOut = matcher ?

                 // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                 postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                     // ...intermediate processing is necessary
                     [] :

                     // ...otherwise use results directly
                     results :
                 matcherIn;

         // Find primary matches
         if ( matcher ) {
             matcher( matcherIn, matcherOut, context, xml );
         }

         // Apply postFilter
         if ( postFilter ) {
             temp = condense( matcherOut, postMap );
             postFilter( temp, [], context, xml );

             // Un-match failing elements by moving them back to matcherIn
             i = temp.length;
             while ( i-- ) {
                 if ( ( elem = temp[ i ] ) ) {
                     matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
                 }
             }
         }

         if ( seed ) {
             if ( postFinder || preFilter ) {
                 if ( postFinder ) {

                     // Get the final matcherOut by condensing this intermediate into postFinder contexts
                     temp = [];
                     i = matcherOut.length;
                     while ( i-- ) {
                         if ( ( elem = matcherOut[ i ] ) ) {

                             // Restore matcherIn since elem is not yet a final match
                             temp.push( ( matcherIn[ i ] = elem ) );
                         }
                     }
                     postFinder( null, ( matcherOut = [] ), temp, xml );
                 }

                 // Move matched elements from seed to results to keep them synchronized
                 i = matcherOut.length;
                 while ( i-- ) {
                     if ( ( elem = matcherOut[ i ] ) &&
                         ( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

                         seed[ temp ] = !( results[ temp ] = elem );
                     }
                 }
             }

         // Add elements to results, through postFinder if defined
         } else {
             matcherOut = condense(
                 matcherOut === results ?
                     matcherOut.splice( preexisting, matcherOut.length ) :
                     matcherOut
             );
             if ( postFinder ) {
                 postFinder( null, results, matcherOut, xml );
             } else {
                 push.apply( results, matcherOut );
             }
         }
     } );
 }

 function matcherFromTokens( tokens ) {
     var checkContext, matcher, j,
         len = tokens.length,
         leadingRelative = Expr.relative[ tokens[ 0 ].type ],
         implicitRelative = leadingRelative || Expr.relative[ " " ],
         i = leadingRelative ? 1 : 0,

         // The foundational matcher ensures that elements are reachable from top-level context(s)
         matchContext = addCombinator( function( elem ) {
             return elem === checkContext;
         }, implicitRelative, true ),
         matchAnyContext = addCombinator( function( elem ) {
             return indexOf( checkContext, elem ) > -1;
         }, implicitRelative, true ),
         matchers = [ function( elem, context, xml ) {
             var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                 ( checkContext = context ).nodeType ?
                     matchContext( elem, context, xml ) :
                     matchAnyContext( elem, context, xml ) );

             // Avoid hanging onto element (issue #299)
             checkContext = null;
             return ret;
         } ];

     for ( ; i < len; i++ ) {
         if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
             matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
         } else {
             matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

             // Return special upon seeing a positional matcher
             if ( matcher[ expando ] ) {

                 // Find the next relative operator (if any) for proper handling
                 j = ++i;
                 for ( ; j < len; j++ ) {
                     if ( Expr.relative[ tokens[ j ].type ] ) {
                         break;
                     }
                 }
                 return setMatcher(
                     i > 1 && elementMatcher( matchers ),
                     i > 1 && toSelector(

                     // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                     tokens
                         .slice( 0, i - 1 )
                         .concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
                     ).replace( rtrim, "$1" ),
                     matcher,
                     i < j && matcherFromTokens( tokens.slice( i, j ) ),
                     j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
                     j < len && toSelector( tokens )
                 );
             }
             matchers.push( matcher );
         }
     }

     return elementMatcher( matchers );
 }

 function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
     var bySet = setMatchers.length > 0,
         byElement = elementMatchers.length > 0,
         superMatcher = function( seed, context, xml, results, outermost ) {
             var elem, j, matcher,
                 matchedCount = 0,
                 i = "0",
                 unmatched = seed && [],
                 setMatched = [],
                 contextBackup = outermostContext,

                 // We must always have either seed elements or outermost context
                 elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

                 // Use integer dirruns iff this is the outermost matcher
                 dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
                 len = elems.length;

             if ( outermost ) {

                 // Support: IE 11+, Edge 17 - 18+
                 // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                 // two documents; shallow comparisons work.
                 // eslint-disable-next-line eqeqeq
                 outermostContext = context == document || context || outermost;
             }

             // Add elements passing elementMatchers directly to results
             // Support: IE<9, Safari
             // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
             for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
                 if ( byElement && elem ) {
                     j = 0;

                     // Support: IE 11+, Edge 17 - 18+
                     // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                     // two documents; shallow comparisons work.
                     // eslint-disable-next-line eqeqeq
                     if ( !context && elem.ownerDocument != document ) {
                         setDocument( elem );
                         xml = !documentIsHTML;
                     }
                     while ( ( matcher = elementMatchers[ j++ ] ) ) {
                         if ( matcher( elem, context || document, xml ) ) {
                             results.push( elem );
                             break;
                         }
                     }
                     if ( outermost ) {
                         dirruns = dirrunsUnique;
                     }
                 }

                 // Track unmatched elements for set filters
                 if ( bySet ) {

                     // They will have gone through all possible matchers
                     if ( ( elem = !matcher && elem ) ) {
                         matchedCount--;
                     }

                     // Lengthen the array for every element, matched or not
                     if ( seed ) {
                         unmatched.push( elem );
                     }
                 }
             }

             // `i` is now the count of elements visited above, and adding it to `matchedCount`
             // makes the latter nonnegative.
             matchedCount += i;

             // Apply set filters to unmatched elements
             // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
             // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
             // no element matchers and no seed.
             // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
             // case, which will result in a "00" `matchedCount` that differs from `i` but is also
             // numerically zero.
             if ( bySet && i !== matchedCount ) {
                 j = 0;
                 while ( ( matcher = setMatchers[ j++ ] ) ) {
                     matcher( unmatched, setMatched, context, xml );
                 }

                 if ( seed ) {

                     // Reintegrate element matches to eliminate the need for sorting
                     if ( matchedCount > 0 ) {
                         while ( i-- ) {
                             if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
                                 setMatched[ i ] = pop.call( results );
                             }
                         }
                     }

                     // Discard index placeholder values to get only actual matches
                     setMatched = condense( setMatched );
                 }

                 // Add matches to results
                 push.apply( results, setMatched );

                 // Seedless set matches succeeding multiple successful matchers stipulate sorting
                 if ( outermost && !seed && setMatched.length > 0 &&
                     ( matchedCount + setMatchers.length ) > 1 ) {

                     Sizzle.uniqueSort( results );
                 }
             }

             // Override manipulation of globals by nested matchers
             if ( outermost ) {
                 dirruns = dirrunsUnique;
                 outermostContext = contextBackup;
             }

             return unmatched;
         };

     return bySet ?
         markFunction( superMatcher ) :
         superMatcher;
 }

 compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
     var i,
         setMatchers = [],
         elementMatchers = [],
         cached = compilerCache[ selector + " " ];

     if ( !cached ) {

         // Generate a function of recursive functions that can be used to check each element
         if ( !match ) {
             match = tokenize( selector );
         }
         i = match.length;
         while ( i-- ) {
             cached = matcherFromTokens( match[ i ] );
             if ( cached[ expando ] ) {
                 setMatchers.push( cached );
             } else {
                 elementMatchers.push( cached );
             }
         }

         // Cache the compiled function
         cached = compilerCache(
             selector,
             matcherFromGroupMatchers( elementMatchers, setMatchers )
         );

         // Save selector and tokenization
         cached.selector = selector;
     }
     return cached;
 };

 /**
  * A low-level selection function that works with Sizzle's compiled
  *  selector functions
  * @param {String|Function} selector A selector or a pre-compiled
  *  selector function built with Sizzle.compile
  * @param {Element} context
  * @param {Array} [results]
  * @param {Array} [seed] A set of elements to match against
  */
 select = Sizzle.select = function( selector, context, results, seed ) {
     var i, tokens, token, type, find,
         compiled = typeof selector === "function" && selector,
         match = !seed && tokenize( ( selector = compiled.selector || selector ) );

     results = results || [];

     // Try to minimize operations if there is only one selector in the list and no seed
     // (the latter of which guarantees us context)
     if ( match.length === 1 ) {

         // Reduce context if the leading compound selector is an ID
         tokens = match[ 0 ] = match[ 0 ].slice( 0 );
         if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
             context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

             context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
                 .replace( runescape, funescape ), context ) || [] )[ 0 ];
             if ( !context ) {
                 return results;

             // Precompiled matchers will still verify ancestry, so step up a level
             } else if ( compiled ) {
                 context = context.parentNode;
             }

             selector = selector.slice( tokens.shift().value.length );
         }

         // Fetch a seed set for right-to-left matching
         i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
         while ( i-- ) {
             token = tokens[ i ];

             // Abort if we hit a combinator
             if ( Expr.relative[ ( type = token.type ) ] ) {
                 break;
             }
             if ( ( find = Expr.find[ type ] ) ) {

                 // Search, expanding context for leading sibling combinators
                 if ( ( seed = find(
                     token.matches[ 0 ].replace( runescape, funescape ),
                     rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
                         context
                 ) ) ) {

                     // If seed is empty or no tokens remain, we can return early
                     tokens.splice( i, 1 );
                     selector = seed.length && toSelector( tokens );
                     if ( !selector ) {
                         push.apply( results, seed );
                         return results;
                     }

                     break;
                 }
             }
         }
     }

     // Compile and execute a filtering function if one is not provided
     // Provide `match` to avoid retokenization if we modified the selector above
     ( compiled || compile( selector, match ) )(
         seed,
         context,
         !documentIsHTML,
         results,
         !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
     );
     return results;
 };

 // One-time assignments

 // Sort stability
 support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

 // Support: Chrome 14-35+
 // Always assume duplicates if they aren't passed to the comparison function
 support.detectDuplicates = !!hasDuplicate;

 // Initialize against the default document
 setDocument();

 // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
 // Detached nodes confoundingly follow *each other*
 support.sortDetached = assert( function( el ) {

     // Should return 1, but returns 4 (following)
     return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
 } );

 // Support: IE<8
 // Prevent attribute/property "interpolation"
 // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
 if ( !assert( function( el ) {
     el.innerHTML = "<a href='#'></a>";
     return el.firstChild.getAttribute( "href" ) === "#";
 } ) ) {
     addHandle( "type|href|height|width", function( elem, name, isXML ) {
         if ( !isXML ) {
             return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
         }
     } );
 }

 // Support: IE<9
 // Use defaultValue in place of getAttribute("value")
 if ( !support.attributes || !assert( function( el ) {
     el.innerHTML = "<input/>";
     el.firstChild.setAttribute( "value", "" );
     return el.firstChild.getAttribute( "value" ) === "";
 } ) ) {
     addHandle( "value", function( elem, _name, isXML ) {
         if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
             return elem.defaultValue;
         }
     } );
 }

 // Support: IE<9
 // Use getAttributeNode to fetch booleans when getAttribute lies
 if ( !assert( function( el ) {
     return el.getAttribute( "disabled" ) == null;
 } ) ) {
     addHandle( booleans, function( elem, name, isXML ) {
         var val;
         if ( !isXML ) {
             return elem[ name ] === true ? name.toLowerCase() :
                 ( val = elem.getAttributeNode( name ) ) && val.specified ?
                     val.value :
                     null;
         }
     } );
 }

 return Sizzle;

 } )( window );



 jQuery.find = Sizzle;
 jQuery.expr = Sizzle.selectors;

 // Deprecated
 jQuery.expr[ ":" ] = jQuery.expr.pseudos;
 jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
 jQuery.text = Sizzle.getText;
 jQuery.isXMLDoc = Sizzle.isXML;
 jQuery.contains = Sizzle.contains;
 jQuery.escapeSelector = Sizzle.escape;




 var dir = function( elem, dir, until ) {
     var matched = [],
         truncate = until !== undefined;

     while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
         if ( elem.nodeType === 1 ) {
             if ( truncate && jQuery( elem ).is( until ) ) {
                 break;
             }
             matched.push( elem );
         }
     }
     return matched;
 };


 var siblings = function( n, elem ) {
     var matched = [];

     for ( ; n; n = n.nextSibling ) {
         if ( n.nodeType === 1 && n !== elem ) {
             matched.push( n );
         }
     }

     return matched;
 };


 var rneedsContext = jQuery.expr.match.needsContext;



 function nodeName( elem, name ) {

     return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

 }
 var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



 // Implement the identical functionality for filter and not
 function winnow( elements, qualifier, not ) {
     if ( isFunction( qualifier ) ) {
         return jQuery.grep( elements, function( elem, i ) {
             return !!qualifier.call( elem, i, elem ) !== not;
         } );
     }

     // Single element
     if ( qualifier.nodeType ) {
         return jQuery.grep( elements, function( elem ) {
             return ( elem === qualifier ) !== not;
         } );
     }

     // Arraylike of elements (jQuery, arguments, Array)
     if ( typeof qualifier !== "string" ) {
         return jQuery.grep( elements, function( elem ) {
             return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
         } );
     }

     // Filt