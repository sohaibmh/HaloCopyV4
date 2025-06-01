(self["webpackChunkHalo"] = self["webpackChunkHalo"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_halotheme-155ee7"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=max_price]' : '#facet-range-form [name=price_max]',
  priceRangeMinPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=min_price]' : '#facet-range-form [name=price_min]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false,
  sortButton: '.actionBar-dropdown .btn-show-products'
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);
    $(document).on('click', this.options.sortButton, this.onSortBySubmit);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);
    $(document).off('click', this.options.sortButton, this.onSortBySubmit);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event) {
    event.preventDefault();
    $('.btn-show-products').removeClass('selected');
    $(event.currentTarget).addClass('selected');
    $(event.currentTarget).closest('.actionBar-dropdown').find('.dropdown-label').text($(event.currentTarget).find('span').text());
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams;
    if ($(event.currentTarget).closest('#sort').length) {
      queryParams = ['sort', $(event.currentTarget).attr('data-value')];
    } else {
      queryParams = ['limit', $(event.currentTarget).attr('data-value')];
    }
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    if (document.location.hash !== '') return;
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductDisplayMode.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductDisplayMode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var productListing = document.querySelector('#product-listing-container .productListing');
  var grid = document.querySelectorAll('.grid-view');
  var dropdownLabel = document.querySelector('.dropdown-label');
  if (!grid) return;
  grid.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.currentTarget;
      var index = target.getAttribute('data-index');
      var text = target.textContent;
      if (!target.classList.contains('selected')) {
        setTimeout(function () {
          grid.forEach(function (g) {
            return g.classList.remove('selected');
          });
          target.classList.add('selected');
          dropdownLabel.textContent = text;
          productListing.setAttribute('data-layout', "product-col" + index);
        }, 100);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloSidebarToggle.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSidebarToggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var sidebarMobile = document.querySelector('.page-sidebar-mobile');
  var sidebar = document.querySelector('.page-sidebar');
  var body = document.body;
  var closeBtn = document.querySelector('.page-sidebar .close');
  sidebarMobile.addEventListener('click', function () {
    sidebarMobile.classList.add('is-open');
    sidebar.classList.add('is-open');
    body.classList.add('openSidebar');
  });
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    sidebarMobile.classList.remove('is-open');
    sidebar.classList.remove('is-open');
    body.classList.remove('openSidebar');
  });
  document.addEventListener('click', function (event) {
    if (sidebar.classList.contains('is-open')) {
      var isClickInsideSidebar = sidebar.contains(event.target);
      var isClickInsideSidebarMobile = sidebarMobile.contains(event.target);
      if (!isClickInsideSidebar && !isClickInsideSidebarMobile) {
        sidebarMobile.classList.remove('is-open');
        sidebar.classList.remove('is-open');
        body.classList.remove('openSidebar');
      }
    }
  });
  var filterBlock = document.querySelectorAll('.accordion .accordion-block');
  filterBlock.forEach(function (item) {
    var itemList = item.querySelectorAll('.navList-action');
    var count = 0;
    itemList.forEach(function (item) {
      if (item.classList.contains('is-selected')) {
        count++;
      }
    });
    var itemCount = item.querySelector('.number-count');
    if (count == 0) {
      itemCount.classList.add('d-none');
    } else {
      itemCount.classList.remove('d-none');
    }
    itemCount.textContent = "" + count;
  });
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2hhbG90aGVtZS0xNTVlZTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQzFCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUM1QixTQUFBRCxZQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFFZEcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtNQUMxQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUN0Q0osTUFBTSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0lBQUMsT0FBQVIsS0FBQTtFQUNQO0VBQUNTLGNBQUEsQ0FBQVosV0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVksTUFBQSxHQUFBYixXQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFDbkIsSUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQWdDLENBQUM7SUFFM0QsSUFBSVosTUFBTSxDQUFDSyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtNQUM3Q0YsZUFBZSxDQUFDRyxLQUFLLENBQUMsQ0FBQztNQUN2QmQsTUFBTSxDQUFDSyxZQUFZLENBQUNVLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDbEQ7RUFDSixDQUFDO0VBQUFQLE1BQUEsQ0FFRFEsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNDLEtBQUssRUFBRUMsYUFB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LENBQUMsVUFBQ0MsSUFBSSxFQUFLO0lBQzFCLElBQU1pQixRQUFRLEdBQUdqQixJQUFJLENBQUNILGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0lBRXpELElBQUlxQixLQUFLLEdBQUcsQ0FBQztJQUViRCxRQUFRLENBQUNsQixPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO01BQ3ZCLElBQUlBLElBQUksQ0FBQ0ksU0FBUyxDQUFDQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDeENhLEtBQUssRUFBRTtNQUNYO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBTUMsU0FBUyxHQUFHbkIsSUFBSSxDQUFDTCxhQUFhLENBQUMsZUFBZSxDQUFDO0lBRXJELElBQUd1QixLQUFLLElBQUksQ0FBQyxFQUFFO01BQ1hDLFNBQVMsQ0FBQ2YsU0FBUyxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNIVyxTQUFTLENBQUNmLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN4QztJQUVBWSxTQUFTLENBQUNoQixXQUFXLFFBQU1lLEtBQU87RUFDdEMsQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7QUN4REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYWxvLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vSGFsby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vSGFsby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzLmpzIiwid2VicGFjazovL0hhbG8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlLmpzIiwid2VicGFjazovL0hhbG8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9IYWxvL2lnbm9yZWR8L1VzZXJzL3NvaGFpYi9EZXNrdG9wL0hhbG9Db3B5VjQvbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21heF0nLFxuICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA/ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyA6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1wcmljZV9taW5dJyxcbiAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICBzb3J0QnV0dG9uOiAnLmFjdGlvbkJhci1kcm9wZG93biAuYnRuLXNob3ctcHJvZHVjdHMnLFxufTtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcblxuICAgICAgICAgICAgLy8gUmVmcmVzaCByYW5nZSB2aWV3IHdoZW4gc2hvcC1ieS1wcmljZSBlbmFibGVkXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygnc2VhcmNoX3F1ZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRzLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc29ydEJ1dHRvbiwgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNvcnRCdXR0b24sIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLmJ0bi1zaG93LXByb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5hY3Rpb25CYXItZHJvcGRvd24nKS5maW5kKCcuZHJvcGRvd24tbGFiZWwnKS50ZXh0KCQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnc3BhbicpLnRleHQoKSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zO1xuICAgICAgICBcbiAgICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnI3NvcnQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gWydzb3J0JywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXZhbHVlJyldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBbJ2xpbWl0JywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXZhbHVlJyldO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoICE9PSAnJykgcmV0dXJuO1xuXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2R1Y3RMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXZpZXcnKTtcbiAgICBjb25zdCBkcm9wZG93bkxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWxhYmVsJyk7XG5cbiAgICBpZiAoIWdyaWQpIHJldHVybjtcblxuICAgIGdyaWQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5mb3JFYWNoKGcgPT4gZy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGF5b3V0JywgYHByb2R1Y3QtY29sJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXJNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1zaWRlYmFyJyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1zaWRlYmFyIC5jbG9zZScpO1xuXG4gICAgc2lkZWJhck1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzaWRlYmFyTW9iaWxlLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnb3BlblNpZGViYXInKTtcbiAgICB9KTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBzaWRlYmFyTW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlblNpZGViYXInKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xpY2tJbnNpZGVTaWRlYmFyID0gc2lkZWJhci5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNDbGlja0luc2lkZVNpZGViYXJNb2JpbGUgPSBzaWRlYmFyTW9iaWxlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmICghaXNDbGlja0luc2lkZVNpZGViYXIgJiYgIWlzQ2xpY2tJbnNpZGVTaWRlYmFyTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuU2lkZWJhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24gLmFjY29yZGlvbi1ibG9jaycpO1xuXG4gICAgZmlsdGVyQmxvY2suZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdCA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLm5hdkxpc3QtYWN0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgaXRlbUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXItY291bnQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIGl0ZW1Db3VudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1Db3VudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbUNvdW50LnRleHRDb250ZW50ID0gYCR7Y291bnR9YDtcbiAgICB9KTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInVybFV0aWxzIiwiVXJsIiwiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJkZWZhdWx0IiwiaG9va3MiLCJhcGkiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwibGVuZ3RoIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJzb3J0QnV0dG9uIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJfdGhpczIiLCJzaG93IiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImF0dHIiLCJnZXQiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsImluY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsb3Nlc3QiLCJmaW5kIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc2giLCJ0cmlnZ2VyIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwiaSIsInRlbXAiLCJwcm9kdWN0TGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJncmlkIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3Bkb3duTGFiZWwiLCJmb3JFYWNoIiwiaXRlbSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnIiwicmVtb3ZlIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic2lkZWJhck1vYmlsZSIsInNpZGViYXIiLCJib2R5IiwiY2xvc2VCdG4iLCJpc0NsaWNrSW5zaWRlU2lkZWJhciIsImlzQ2xpY2tJbnNpZGVTaWRlYmFyTW9iaWxlIiwiZmlsdGVyQmxvY2siLCJpdGVtTGlzdCIsImNvdW50IiwiaXRlbUNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==