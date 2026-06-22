/* Auto-generated from index.html — do not edit by hand; edit the inline source or rebuild */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function getTodayLocal() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return "".concat(y, "-").concat(m, "-").concat(day);
}
function coerceExerciseWeightsToArray(raw) {
  if (raw == null || raw === '') return [];
  return Array.isArray(raw) ? raw : [raw];
}
function finiteNumsFromExerciseWeights(raw) {
  return coerceExerciseWeightsToArray(raw).map(function (v) {
    return parseFloat(String(v));
  }).filter(function (n) {
    return Number.isFinite(n);
  });
}

/** Best prior weights for workout UI: PR max and previous session per set (history newest-first). */
function getExerciseLiftHints(history, exerciseName, calendarToday) {
  var completedSessions = [];
  for (var i = 0; i < history.length; i++) {
    var d = history[i];
    if (!d.workoutDone || !d.weights) continue;
    if (finiteNumsFromExerciseWeights(d.weights[exerciseName]).length === 0) continue;
    completedSessions.push(d);
  }
  var allTimeMax = null;
  for (var _i = 0; _i < completedSessions.length; _i++) {
    var nums = finiteNumsFromExerciseWeights(completedSessions[_i].weights[exerciseName]);
    var m = Math.max.apply(Math, _toConsumableArray(nums));
    if (allTimeMax === null || m > allTimeMax) allTimeMax = m;
  }
  var prevDay = completedSessions.find(function (d) {
    return d.date !== calendarToday;
  });
  var prevSessionBySet = [];
  var prevSessionDate = null;
  if (prevDay) {
    prevSessionDate = prevDay.date;
    prevSessionBySet = coerceExerciseWeightsToArray(prevDay.weights[exerciseName]).map(function (w) {
      return String(w == null ? '' : w).trim();
    });
  }
  return {
    allTimeMax: allTimeMax,
    prevSessionDate: prevSessionDate,
    prevSessionBySet: prevSessionBySet
  };
}
function validateDataIntegrity() {
  var requiredKeys = ['vita-history', 'vita-nutrition', 'vita-knowledge-base', 'vita-challenges', 'vita-badges'];
  var missingKeys = requiredKeys.filter(function (key) {
    return !localStorage.getItem(key);
  });
  if (missingKeys.length > 0) {
    console.warn('Missing data keys:', missingKeys);
  }
  return missingKeys.length === 0;
}
function VitaApp() {
  console.log('VitaApp component starting...');
  var _useState = useState('today'),
    _useState2 = _slicedToArray(_useState, 2),
    view = _useState2[0],
    setView = _useState2[1];
  console.log('View state initialized:', view);
  var today = getTodayLocal();
  console.log('Today date:', today);
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    journal = _useState8[0],
    setJournal = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    water = _useState10[0],
    setWater = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    saas = _useState12[0],
    setSaas = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    deepWork = _useState14[0],
    setDeepWork = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    talks = _useState16[0],
    setTalks = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    miles = _useState18[0],
    setMiles = _useState18[1];
  var _useState19 = useState({}),
    _useState20 = _slicedToArray(_useState19, 2),
    weights = _useState20[0],
    setWeights = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    workout = _useState22[0],
    setWorkout = _useState22[1];
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    history = _useState24[0],
    setHistory = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    viewingDay = _useState26[0],
    setViewingDay = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showAllHistory = _useState28[0],
    setShowAllHistory = _useState28[1];
  var _useState29 = useState({}),
    _useState30 = _slicedToArray(_useState29, 2),
    nutritionData = _useState30[0],
    setNutritionData = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showAddFood = _useState32[0],
    setShowAddFood = _useState32[1];
  var _useState33 = useState('breakfast'),
    _useState34 = _slicedToArray(_useState33, 2),
    selectedMeal = _useState34[0],
    setSelectedMeal = _useState34[1];
  var _useState35 = useState({
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: ''
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    customFood = _useState36[0],
    setCustomFood = _useState36[1];
  var _useState37 = useState(''),
    _useState38 = _slicedToArray(_useState37, 2),
    saveStatus = _useState38[0],
    setSaveStatus = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    isExisting = _useState40[0],
    setIsExisting = _useState40[1];
  var _useState41 = useState(null),
    _useState42 = _slicedToArray(_useState41, 2),
    energyLevel = _useState42[0],
    setEnergyLevel = _useState42[1];
  var _useState43 = useState([]),
    _useState44 = _slicedToArray(_useState43, 2),
    knowledgeBase = _useState44[0],
    setKnowledgeBase = _useState44[1]; // Personal notes and insights
  var _useState45 = useState([]),
    _useState46 = _slicedToArray(_useState45, 2),
    spacedRepetition = _useState46[0],
    setSpacedRepetition = _useState46[1]; // Ideas to remember
  var _useState47 = useState(null),
    _useState48 = _slicedToArray(_useState47, 2),
    currentBookApplication = _useState48[0],
    setCurrentBookApplication = _useState48[1]; // Today's application prompt
  var _useState49 = useState([]),
    _useState50 = _slicedToArray(_useState49, 2),
    challenges = _useState50[0],
    setChallenges = _useState50[1]; // Active challenges
  var _useState51 = useState([]),
    _useState52 = _slicedToArray(_useState51, 2),
    completedChallenges = _useState52[0],
    setCompletedChallenges = _useState52[1]; // Completed challenges
  var _useState53 = useState([]),
    _useState54 = _slicedToArray(_useState53, 2),
    badges = _useState54[0],
    setBadges = _useState54[1]; // Earned badges
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    showCreateChallenge = _useState56[0],
    setShowCreateChallenge = _useState56[1];
  var _useState57 = useState({}),
    _useState58 = _slicedToArray(_useState57, 2),
    aiCoachInsights = _useState58[0],
    setAiCoachInsights = _useState58[1]; // AI coach analysis and insights
  var _useState59 = useState('daily'),
    _useState60 = _slicedToArray(_useState59, 2),
    coachMode = _useState60[0],
    setCoachMode = _useState60[1]; // daily, weekly, monthly
  var _useState61 = useState(false),
    _useState62 = _slicedToArray(_useState61, 2),
    showAddNote = _useState62[0],
    setShowAddNote = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    showAddRepetition = _useState64[0],
    setShowAddRepetition = _useState64[1];
  var _useState65 = useState({
      content: '',
      source: '',
      category: '',
      tags: ''
    }),
    _useState66 = _slicedToArray(_useState65, 2),
    newNote = _useState66[0],
    setNewNote = _useState66[1];
  var _useState67 = useState({
      content: '',
      source: ''
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    newRepetitionItem = _useState68[0],
    setNewRepetitionItem = _useState68[1];
  var _useState69 = useState({
      booksRead: 0,
      pagesRead: 0,
      insightsGained: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastReadingDate: null
    }),
    _useState70 = _slicedToArray(_useState69, 2),
    readingProgress = _useState70[0],
    setReadingProgress = _useState70[1];
  var _useState71 = useState(false),
    _useState72 = _slicedToArray(_useState71, 2),
    showReadingModal = _useState72[0],
    setShowReadingModal = _useState72[1];
  var _useState73 = useState({
      bookTitle: '',
      pagesRead: '',
      insights: '',
      notes: ''
    }),
    _useState74 = _slicedToArray(_useState73, 2),
    readingEntry = _useState74[0],
    setReadingEntry = _useState74[1];
  var _useState75 = useState([]),
    _useState76 = _slicedToArray(_useState75, 2),
    readingHistory = _useState76[0],
    setReadingHistory = _useState76[1];
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    manualWorkoutType = _useState78[0],
    setManualWorkoutType = _useState78[1]; // Manual override for today's workout
  var _useState79 = useState({
      productivity: '',
      health: '',
      leadership: '',
      mindset: ''
    }),
    _useState80 = _slicedToArray(_useState79, 2),
    categoryAffirmations = _useState80[0],
    setCategoryAffirmations = _useState80[1]; // Current affirmations for each category
  var _useState81 = useState(''),
    _useState82 = _slicedToArray(_useState81, 2),
    foodSearchTerm = _useState82[0],
    setFoodSearchTerm = _useState82[1]; // Search term for nutrition foods
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    showDataModal = _useState84[0],
    setShowDataModal = _useState84[1]; // Data management modal
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    backupBanner = _useState86[0],
    setBackupBanner = _useState86[1];
  var _useState87 = useState(false),
    _useState88 = _slicedToArray(_useState87, 2),
    showMoreNav = _useState88[0],
    setShowMoreNav = _useState88[1];
  var _useState89 = useState(''),
    _useState90 = _slicedToArray(_useState89, 2),
    sleepTime = _useState90[0],
    setSleepTime = _useState90[1];
  var _useState91 = useState(''),
    _useState92 = _slicedToArray(_useState91, 2),
    wakeTime = _useState92[0],
    setWakeTime = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    weeklyReview = _useState94[0],
    setWeeklyReview = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    showWeeklyReview = _useState96[0],
    setShowWeeklyReview = _useState96[1];
  var _useState97 = useState({
      wentWell: '',
      nextWeekFocus: ''
    }),
    _useState98 = _slicedToArray(_useState97, 2),
    weeklyReviewText = _useState98[0],
    setWeeklyReviewText = _useState98[1];
  var _useState99 = useState([]),
    _useState100 = _slicedToArray(_useState99, 2),
    customTasks = _useState100[0],
    setCustomTasks = _useState100[1];
  var _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    showManageTasks = _useState102[0],
    setShowManageTasks = _useState102[1];
  var _useState103 = useState([]),
    _useState104 = _slicedToArray(_useState103, 2),
    hiddenTasks = _useState104[0],
    setHiddenTasks = _useState104[1];
  var _useState105 = useState(''),
    _useState106 = _slicedToArray(_useState105, 2),
    newCustomTask = _useState106[0],
    setNewCustomTask = _useState106[1];
  var _useState107 = useState(''),
    _useState108 = _slicedToArray(_useState107, 2),
    bodyWeight = _useState108[0],
    setBodyWeight = _useState108[1];
  var _useState109 = useState([]),
    _useState110 = _slicedToArray(_useState109, 2),
    weightHistory = _useState110[0],
    setWeightHistory = _useState110[1];
  var _useState111 = useState(false),
    _useState112 = _slicedToArray(_useState111, 2),
    showWeightLog = _useState112[0],
    setShowWeightLog = _useState112[1];
  var _useState113 = useState({
      title: '',
      description: '',
      duration: '',
      category: '',
      reward: ''
    }),
    _useState114 = _slicedToArray(_useState113, 2),
    customChallengeForm = _useState114[0],
    setCustomChallengeForm = _useState114[1];
  console.log('All state initialized successfully');
  var rotation = ['back-biceps', 'legs', 'chest-triceps', 'shoulders', 'full-body', 'core-abs', 'cardio-conditioning', 'running'];
  var exercises = {
    'back-biceps': [['Deadlifts 4x6', 'Bent Rows 4x8', 'Pull-ups 3x10', 'Barbell Curls 3x12', 'Hammer Curls 3x10'], ['T-Bar Rows 4x8', 'Lat Pulldowns 4x10', 'Cable Rows 3x12', 'Preacher Curls 3x12', 'Concentration Curls 3x10'], ['Romanian Deadlifts 4x8', 'Seated Rows 4x10', 'Face Pulls 3x12', 'EZ Bar Curls 3x12', 'Cable Curls 3x10'], ['Rack Pulls 4x6', 'Pendlay Rows 4x8', 'Assisted Pull-ups 3x8', 'Dumbbell Curls 3x12', 'Reverse Curls 3x10']],
    'legs': [['Squats 4x8', 'Romanian Deadlifts 4x10', 'Leg Press 3x12', 'Lunges 3x10', 'Calf Raises 4x15'], ['Front Squats 4x8', 'Bulgarian Splits 3x10', 'Leg Curls 4x12', 'Leg Extensions 3x12', 'Seated Calf 4x15'], ['Box Squats 4x8', 'Trap Bar Deadlifts 4x8', 'Hack Squat 3x10', 'Walking Lunges 3x12', 'Standing Calf 4x15'], ['Pause Squats 4x6', 'Deficit Deadlifts 4x8', 'Belt Squat 3x12', 'Step-ups 3x10', 'Leg Press Calf 4x20']],
    'chest-triceps': [['Bench Press 4x8', 'Incline DB Press 4x10', 'Dips 3x12', 'Tricep Pushdowns 3x12', 'Overhead Ext 3x10'], ['Incline Bench 4x8', 'Flat DB Press 4x10', 'Cable Flyes 3x12', 'Close Grip Bench 3x10', 'Skull Crushers 3x12'], ['Floor Press 4x8', 'Incline Flyes 4x10', 'Diamond Push-ups 3x12', 'Rope Pushdowns 3x12', 'Tricep Kickbacks 3x15'], ['Board Press 4x6', 'Hammer Press 4x8', 'Ring Dips 3x10', 'V-Bar Pushdowns 3x12', 'Overhead Rope Ext 3x12']],
    'shoulders': [['Military Press 4x8', 'Lateral Raises 4x12', 'Rear Delt Flyes 4x15', 'Face Pulls 3x12', 'Shrugs 4x10'], ['Arnold Press 4x8', 'Front Raises 4x12', 'Bent-over Raises 4x15', 'Upright Rows 3x10', 'Farmer Walks 3x30s'], ['Push Press 4x6', 'Cable Laterals 4x12', 'Machine Raises 4x15', 'Band Pull-aparts 3x15', 'Dumbbell Shrugs 4x12'], ['Z Press 4x6', 'Single-arm Laterals 4x12', 'Reverse Flyes 4x15', 'Y Raises 3x12', 'Trap Raises 4x10']],
    'full-body': [['Deadlifts 4x6', 'Bench Press 4x8', 'Pull-ups 3x8', 'Squats 4x8', 'Overhead Press 4x8'], ['Romanian DL 4x8', 'Incline Press 4x8', 'Rows 4x10', 'Front Squats 4x8', 'Dips 3x10'], ['Trap Bar DL 4x8', 'Floor Press 4x8', 'Lat Pulldowns 4x10', 'Bulgarian Split 3x10', 'Push-ups 3x15'], ['Deficit DL 4x6', 'Close Grip Bench 4x8', 'Face Pulls 3x12', 'Pause Squats 4x6', 'Diamond Push-ups 3x12']],
    'core-abs': [['Planks 3x45s', 'Russian Twists 4x20', 'Leg Raises 4x15', 'Bicycle Crunches 4x20', 'Mountain Climbers 4x30s'], ['Dead Bugs 4x12', 'Pallof Press 3x12', 'Flutter Kicks 4x30s', 'V-ups 4x15', 'Woodchoppers 3x15'], ['Ab Wheel 4x10', 'Dragon Flags 4x8', 'Hollow Body Hold 3x30s', 'Side Planks 3x30s', 'Reverse Crunches 4x15'], ['Weighted Sit-ups 4x12', 'Cable Crunches 4x15', 'Farmers Carry 3x40s', 'Stir the Pot 3x20s', 'Toes to Bar 4x10']],
    'cardio-conditioning': [['Burpees 4x10', 'Mountain Climbers 4x30s', 'Jump Squats 4x15', 'High Knees 4x30s', 'Box Jumps 4x10'], ['Battle Ropes 4x30s', 'Rowing Sprints 8x30s', 'Kettlebell Swings 4x20', 'Slam Balls 4x15', 'Wall Balls 4x15'], ['Bike Sprints 8x20s', 'Assault Bike 4x30s', 'Ski Erg 4x30s', 'Fan Bike 4x30s', 'Echo Bike 4x30s'], ['Bear Crawls 4x30s', 'Crab Walks 4x30s', 'Broad Jumps 4x10', 'Sprint Intervals 8x20s', 'Hill Sprints 6x30s']]
  };

  // Inline Encapsulated Notes script will attach after render; helper to safely run DOM ops
  function initEncapsulatedNotes() {
    try {
      var saveStore = function saveStore() {
        localStorage.setItem(KEY, JSON.stringify(notes));
      };
      var formatRemaining = function formatRemaining(ms) {
        if (ms <= 0) return 'unlocked';
        var d = Math.ceil(ms / (24 * 60 * 60 * 1000));
        return d + ' day' + (d === 1 ? '' : 's');
      };
      var _render = function render() {
        el.list.innerHTML = '';
        if (!notes.length) {
          el.list.innerHTML = '<p className="text-sm text-slate-400">No locked notes.</p>';
          return;
        }
        var now = Date.now();
        notes.slice().reverse().forEach(function (n) {
          var wrap = document.createElement('div');
          wrap.style.cssText = 'background:#06131f;border:1px solid #122233;padding:10px;border-radius:6px;margin-bottom:8px;display:flex;justify-content:space-between;gap:12px;align-items:flex-start';
          var left = document.createElement('div');
          var meta = document.createElement('div');
          meta.style.cssText = 'font-size:12px;color:#94a3b8;margin-top:6px';
          meta.textContent = "Created: ".concat(new Date(n.created).toLocaleString(), " \u2022 Unlocks: ").concat(new Date(n.unlockAt).toLocaleString());
          if (now < n.unlockAt) {
            left.innerHTML = '<strong style="color:#f59e0b">Locked note</strong><div style="margin-top:8px;color:#cbd5e1">Hidden until unlock date.</div>';
            left.appendChild(meta);
          } else {
            var text = document.createElement('div');
            text.textContent = n.text;
            text.style.whiteSpace = 'pre-wrap';
            text.style.color = '#e6eef8';
            left.appendChild(text);
            left.appendChild(meta);
          }
          var actions = document.createElement('div');
          actions.style.cssText = 'display:flex;flex-direction:column;gap:6px';
          var rem = document.createElement('div');
          rem.style.cssText = 'font-size:12px;color:#cbd5e1';
          rem.textContent = now < n.unlockAt ? "Unlocks in ".concat(formatRemaining(n.unlockAt - now)) : 'Unlocked';
          actions.appendChild(rem);
          var del = document.createElement('button');
          del.textContent = 'Delete';
          del.style.cssText = 'padding:6px;border-radius:6px;background:#334155;color:#e6eef8;border:0;cursor:pointer';
          del.onclick = function () {
            if (confirm('Delete this note?')) {
              notes = notes.filter(function (x) {
                return x.id !== n.id;
              });
              saveStore();
              _render();
            }
          };
          actions.appendChild(del);
          wrap.appendChild(left);
          wrap.appendChild(actions);
          el.list.appendChild(wrap);
        });
      };
      var addNote = function addNote(text, days) {
        var d = Math.max(1, parseInt(days) || 365);
        var unlockAt = Date.now() + d * 24 * 60 * 60 * 1000;
        notes.push({
          id: Date.now().toString(36),
          text: text.trim(),
          created: Date.now(),
          unlockAt: unlockAt
        });
        saveStore();
        _render();
        el.note.value = '';
        el.days.value = '365';
      };
      var KEY = 'encapsulated-notes-v1';
      var noteEl = document.getElementById('enc-note-ai');
      if (!noteEl) return;
      var el = {
        note: noteEl,
        days: document.getElementById('enc-days-ai'),
        save: document.getElementById('enc-save-ai'),
        clear: document.getElementById('enc-clear-ai'),
        list: document.getElementById('enc-list-ai')
      };
      var notes = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (el.save.dataset.boundEncNotes === '1') {
        _render();
        return;
      }
      el.save.dataset.boundEncNotes = '1';
      el.clear.dataset.boundEncNotes = '1';
      el.save.addEventListener('click', function () {
        var t = el.note.value.trim();
        if (!t) return alert('Enter a note.');
        addNote(t, el.days.value);
      });
      el.clear.addEventListener('click', function () {
        if (confirm('Clear ALL encapsulated notes?')) {
          notes = [];
          saveStore();
          _render();
        }
      });
      _render();
    } catch (e) {
      console.error('initEncapsulatedNotes error', e);
    }
  }
  // Initialize encapsulated notes and tracker when the affirmations view becomes active
  function initTracker() {
    try {
      var saveStore = function saveStore() {
        localStorage.setItem(KEY, JSON.stringify(events));
      };
      var daysUntilDate = function daysUntilDate(dStr, recurrence) {
        if (!dStr) return {
          days: Infinity,
          nextDate: null
        };
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var target = new Date(dStr);
        if (recurrence === 'annual') {
          var month = target.getMonth();
          var day = target.getDate();
          var next = new Date(today.getFullYear(), month, day);
          if (next < today) next = new Date(today.getFullYear() + 1, month, day);
          var diff = Math.ceil((next - today) / (24 * 60 * 60 * 1000));
          return {
            days: diff,
            nextDate: next
          };
        } else {
          var _diff = Math.ceil((target - today) / (24 * 60 * 60 * 1000));
          return {
            days: _diff,
            nextDate: target
          };
        }
      };
      var _render2 = function render() {
        el.list.innerHTML = '';
        if (!events.length) {
          el.list.innerHTML = '<p className="text-sm text-slate-400">No events yet.</p>';
          return;
        }
        var mapped = events.map(function (ev) {
          var info = daysUntilDate(ev.date, ev.recurrence);
          return _objectSpread(_objectSpread({}, ev), {}, {
            days: info.days,
            next: info.nextDate
          });
        }).sort(function (a, b) {
          return a.days - b.days;
        });
        mapped.forEach(function (ev) {
          var wrap = document.createElement('div');
          wrap.style.cssText = 'display:flex;justify-content:space-between;gap:12px;padding:10px;border-radius:8px;border:1px solid #122233;background:#06131f;margin-top:8px';
          var left = document.createElement('div');
          var title = document.createElement('div');
          title.textContent = ev.title;
          title.style.fontWeight = '600';
          var meta = document.createElement('div');
          meta.style.cssText = 'font-size:13px;color:#94a3b8;margin-top:4px';
          meta.textContent = ev.recurrence === 'annual' ? "Next: ".concat(ev.next.toLocaleDateString(), " \u2022 Recurs annually") : "Date: ".concat(ev.next.toLocaleDateString());
          left.appendChild(title);
          left.appendChild(meta);
          var right = document.createElement('div');
          right.style.textAlign = 'right';
          var days = document.createElement('div');
          days.style.cssText = 'font-size:20px;font-weight:700';
          days.textContent = ev.days >= 0 ? "".concat(ev.days, "d") : 'past';
          var actions = document.createElement('div');
          actions.style.marginTop = '8px';
          var edit = document.createElement('button');
          edit.textContent = 'Edit';
          edit.style.marginRight = '6px';
          edit.onclick = function () {
            return startEdit(ev.id);
          };
          var del = document.createElement('button');
          del.textContent = 'Delete';
          del.style.cssText = 'background:#ef4444;color:#fff;padding:6px;border-radius:6px;border:0';
          del.onclick = function () {
            if (confirm('Delete this event?')) {
              events = events.filter(function (x) {
                return x.id !== ev.id;
              });
              saveStore();
              _render2();
            }
          };
          actions.appendChild(edit);
          actions.appendChild(del);
          right.appendChild(days);
          right.appendChild(actions);
          wrap.appendChild(left);
          wrap.appendChild(right);
          el.list.appendChild(wrap);
        });
      };
      var startEdit = function startEdit(id) {
        var ev = events.find(function (x) {
          return x.id === id;
        });
        if (!ev) return;
        editingId = id;
        el.title.value = ev.title;
        el.date.value = ev.date;
        el.recurrence.value = ev.recurrence || 'none';
        el.save.textContent = 'Update Event';
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
      var addOrUpdate = function addOrUpdate() {
        var title = el.title.value.trim();
        var date = el.date.value;
        var recurrence = el.recurrence.value;
        if (!title || !date) return alert('Please provide title and date.');
        if (editingId) {
          events = events.map(function (ev) {
            return ev.id === editingId ? _objectSpread(_objectSpread({}, ev), {}, {
              title: title,
              date: date,
              recurrence: recurrence
            }) : ev;
          });
          editingId = null;
          el.save.textContent = 'Save Event';
        } else {
          events.push({
            id: Date.now().toString(36),
            title: title,
            date: date,
            recurrence: recurrence,
            created: Date.now()
          });
        }
        el.title.value = '';
        el.date.value = '';
        el.recurrence.value = 'none';
        saveStore();
        _render2();
      };
      var KEY = 'vita-tracker-events-v1';
      var titleEl = document.getElementById('tracker-title');
      if (!titleEl) return;
      var el = {
        title: titleEl,
        date: document.getElementById('tracker-date'),
        recurrence: document.getElementById('tracker-recurrence'),
        save: document.getElementById('tracker-save'),
        clear: document.getElementById('tracker-clear'),
        list: document.getElementById('tracker-list')
      };
      var events = JSON.parse(localStorage.getItem(KEY) || '[]');
      var editingId = null;
      if (el.save.dataset.boundTracker === '1') {
        _render2();
        return;
      }
      el.save.dataset.boundTracker = '1';
      el.clear.dataset.boundTracker = '1';
      el.save.addEventListener('click', addOrUpdate);
      el.clear.addEventListener('click', function () {
        if (confirm('Clear ALL events?')) {
          events = [];
          saveStore();
          _render2();
        }
      });
      _render2();
    } catch (e) {
      console.error('initTracker error', e);
    }
  }
  useEffect(function () {
    if (view === 'affirmations') {
      var timer = setTimeout(function () {
        try {
          initEncapsulatedNotes();
          initTracker();
        } catch (e) {
          console.error(e);
        }
      }, 50);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [view, categoryAffirmations]);
  var tasks = {
    core: [{
      id: 'cold',
      t: 'Cold shower/exposure'
    }, {
      id: 'workout',
      t: 'Lifted/Ran (workout completed)'
    }, {
      id: 'sun',
      t: 'Morning sunlight 10+ min'
    }, {
      id: 'sleep',
      t: '7-8hr sleep scheduled'
    }, {
      id: 'priorities',
      t: 'Wrote down 3 priorities for today'
    }, {
      id: 'deep',
      t: '2-3hr deep work (phone locked away)'
    }, {
      id: 'progress',
      t: 'Moved the product forward (tangible progress)'
    }, {
      id: 'read',
      t: 'Read for 30 minutes'
    }, {
      id: 'connect',
      t: 'Had real conversation with someone important (non-work)'
    }],
    lead: [{
      id: 'no',
      t: 'Said no to distraction'
    }, {
      id: 'talk',
      t: 'Had hard conversation'
    }, {
      id: 'own',
      t: 'Owned mistake no excuses'
    }, {
      id: 'help',
      t: 'Helped someone'
    }, {
      id: 'hard',
      t: 'Did hardest thing first'
    }],
    comm: [{
      id: 'rec',
      t: 'Recorded 60s pitch'
    }, {
      id: 'pause',
      t: 'Paused before responding'
    }, {
      id: 'short',
      t: 'Rewrote 50% shorter'
    }, {
      id: 'clear',
      t: 'Explained product clearly'
    }]
  };
  var labels = {
    'back-biceps': 'Back & Biceps',
    'legs': 'Legs',
    'chest-triceps': 'Chest & Triceps',
    'shoulders': 'Shoulders',
    'full-body': 'Full Body',
    'core-abs': 'Core & Abs',
    'cardio-conditioning': 'Cardio Conditioning',
    'running': 'Running'
  };
  function makeStorage() {
    if (window.storage && window.storage.get && window.storage.set && window.storage.list) {
      return window.storage;
    }
    return {
      get: function () {
        var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
          var val;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                val = localStorage.getItem(key);
                return _context.abrupt("return", val ? {
                  value: val
                } : null);
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function get(_x) {
          return _get.apply(this, arguments);
        }
        return get;
      }(),
      set: function () {
        var _set = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, value) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                localStorage.setItem(key, value);
                return _context2.abrupt("return", {
                  key: key,
                  value: value
                });
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function set(_x2, _x3) {
          return _set.apply(this, arguments);
        }
        return set;
      }(),
      list: function () {
        var _list = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(prefix) {
          var keys;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                keys = Object.keys(localStorage).filter(function (k) {
                  return k.startsWith(prefix);
                });
                return _context3.abrupt("return", {
                  keys: keys
                });
              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function list(_x4) {
          return _list.apply(this, arguments);
        }
        return list;
      }()
    };
  }
  useEffect(function () {
    loadData();
  }, []);

  // Load nutrition data on component mount
  useEffect(function () {
    var saved = localStorage.getItem('vita-nutrition');
    if (saved) {
      try {
        setNutritionData(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading nutrition data:', e);
      }
    }
  }, []);

  // Soft backup reminder — non-blocking banner instead of confirm()
  useEffect(function () {
    var lastBackup = localStorage.getItem('vita-last-backup');
    var daysSinceBackup = lastBackup ? Math.floor((Date.now() - new Date(lastBackup).getTime()) / (1000 * 60 * 60 * 24)) : 999;
    if (daysSinceBackup > 7) {
      setBackupBanner(daysSinceBackup);
    }
  }, []);

  // Load custom tasks, hidden tasks, weight history from localStorage
  useEffect(function () {
    try {
      var saved = localStorage.getItem('vita-custom-tasks');
      if (saved) setCustomTasks(JSON.parse(saved));
    } catch (e) {}
    try {
      var _saved = localStorage.getItem('vita-hidden-tasks');
      if (_saved) setHiddenTasks(JSON.parse(_saved));
    } catch (e) {}
    try {
      var _saved2 = localStorage.getItem('vita-weight-history');
      if (_saved2) setWeightHistory(JSON.parse(_saved2));
    } catch (e) {}
    try {
      var _saved3 = localStorage.getItem('vita-weekly-review');
      if (_saved3) setWeeklyReview(JSON.parse(_saved3));
    } catch (e) {}
  }, []);

  // Load knowledge data on component mount
  useEffect(function () {
    // Load knowledge base
    var savedKnowledge = localStorage.getItem('vita-knowledge-base');
    if (savedKnowledge) {
      try {
        setKnowledgeBase(JSON.parse(savedKnowledge));
      } catch (e) {
        console.error('Error loading knowledge base:', e);
      }
    }

    // Load spaced repetition items
    var savedRepetition = localStorage.getItem('vita-spaced-repetition');
    if (savedRepetition) {
      try {
        var repetitionData = JSON.parse(savedRepetition);
        // Filter out completed items and update due dates
        var now = new Date();
        var activeItems = repetitionData.filter(function (item) {
          var dueDate = new Date(item.nextReview);
          return dueDate <= now;
        });
        setSpacedRepetition(activeItems);
      } catch (e) {
        console.error('Error loading spaced repetition:', e);
      }
    }

    // Load challenges and badges
    var savedChallenges = localStorage.getItem('vita-challenges');
    if (savedChallenges) {
      try {
        var challengeData = JSON.parse(savedChallenges);
        setChallenges(challengeData.filter(function (c) {
          return !c.completed;
        }));
        setCompletedChallenges(challengeData.filter(function (c) {
          return c.completed;
        }));
      } catch (e) {
        console.error('Error loading challenges:', e);
      }
    }
    var savedBadges = localStorage.getItem('vita-badges');
    if (savedBadges) {
      try {
        setBadges(JSON.parse(savedBadges));
      } catch (e) {
        console.error('Error loading badges:', e);
      }
    }

    // Load AI coach insights
    var savedCoachInsights = localStorage.getItem('vita-ai-coach');
    if (savedCoachInsights) {
      try {
        setAiCoachInsights(JSON.parse(savedCoachInsights));
      } catch (e) {
        console.error('Error loading AI coach insights:', e);
      }
    }

    // Load reading progress
    var savedReadingProgress = localStorage.getItem('vita-reading-progress');
    if (savedReadingProgress) {
      try {
        setReadingProgress(JSON.parse(savedReadingProgress));
      } catch (e) {
        console.error('Error loading reading progress:', e);
      }
    }

    // Load reading history
    var savedReadingHistory = localStorage.getItem('vita-reading-history');
    if (savedReadingHistory) {
      try {
        setReadingHistory(JSON.parse(savedReadingHistory));
      } catch (e) {
        console.error('Error loading reading history:', e);
      }
    }

    // Generate today's book application
    generateTodaysApplication();
  }, []);

  // Auto-save workout progress when navigating away from workouts tab
  useEffect(function () {
    if (view !== 'workouts' && workout && workout.type) {
      // Save current workout progress to localStorage
      var workoutProgress = {
        type: workout.type,
        "var": workout["var"],
        weights: weights,
        miles: miles,
        savedAt: new Date().toISOString()
      };
      try {
        localStorage.setItem('vita-workout-progress', JSON.stringify(workoutProgress));
      } catch (e) {
        console.error('Error saving workout progress:', e);
      }
    }
  }, [view, workout, weights, miles]); // Include all dependencies

  // Load saved workout progress when component mounts
  useEffect(function () {
    var saved = localStorage.getItem('vita-workout-progress');
    if (saved) {
      try {
        var workoutProgress = JSON.parse(saved);
        // Only restore if it's recent (within last 24 hours) and not completed today
        var savedTime = new Date(workoutProgress.savedAt);
        var now = new Date();
        var hoursDiff = (now - savedTime) / (1000 * 60 * 60);
        if (hoursDiff < 24 && data && !data.workoutDone) {
          setWorkout({
            type: workoutProgress.type,
            "var": workoutProgress["var"]
          });
          // Handle backward compatibility: convert single weights to arrays if needed
          var processedWeights = {};
          if (workoutProgress.weights) {
            for (var _i2 = 0, _Object$entries = Object.entries(workoutProgress.weights); _i2 < _Object$entries.length; _i2++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                exercise = _Object$entries$_i[0],
                weight = _Object$entries$_i[1];
              if (Array.isArray(weight)) {
                processedWeights[exercise] = weight;
              } else if (weight) {
                // Convert single weight to array for backward compatibility
                processedWeights[exercise] = [weight];
              }
            }
          }
          setWeights(processedWeights);
          setMiles(workoutProgress.miles || '');
        }
      } catch (e) {
        console.error('Error loading workout progress:', e);
      }
    }
  }, []);
  function loadData() {
    return _loadData.apply(this, arguments);
  }
  function _loadData() {
    _loadData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var storage, initialData, td, raw, d, merged, cleanData, wr, workoutData;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            setLoading(true);
            storage = makeStorage();
            initialData = {
              date: today,
              done: [],
              journal: '',
              water: 0,
              saas: '',
              deepWork: '',
              talks: '',
              miles: '',
              weights: {},
              mood: null,
              workoutDone: false,
              energyLevel: null
            };
            _context12.prev = 3;
            _context12.prev = 4;
            _context12.next = 7;
            return storage.get("day:".concat(today));
          case 7:
            td = _context12.sent;
            if (td && td.value) {
              raw = typeof td.value === 'string' ? td.value : '';
              d = JSON.parse(raw || '{}');
              merged = _objectSpread(_objectSpread({}, initialData), d);
              cleanData = JSON.parse(JSON.stringify(merged));
              setData(cleanData);
              setJournal(cleanData.journal || '');
              setWater(cleanData.water || 0);
              setSaas(cleanData.saas || '');
              setDeepWork(cleanData.deepWork || '');
              setTalks(cleanData.talks || '');
              setMiles(cleanData.miles || '');
              setWeights(cleanData.weights || {});
              setIsExisting(true);
            } else {
              setData(JSON.parse(JSON.stringify(initialData)));
              setJournal('');
              setWater(0);
              setSaas('');
              setDeepWork('');
              setTalks('');
              setMiles('');
              setWeights({});
              setIsExisting(false);
            }
            _context12.next = 23;
            break;
          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](4);
            console.error('Error loading today\'s data:', _context12.t0);
            setData(JSON.parse(JSON.stringify(initialData)));
            setJournal('');
            setWater(0);
            setSaas('');
            setDeepWork('');
            setTalks('');
            setMiles('');
            setWeights({});
            setIsExisting(false);
          case 23:
            _context12.prev = 23;
            _context12.next = 26;
            return storage.get('workout-rotation');
          case 26:
            wr = _context12.sent;
            if (wr && wr.value) {
              workoutData = JSON.parse(wr.value);
              setWorkout(workoutData);
            } else {
              setWorkout({
                type: 'back-biceps',
                "var": 0
              });
            }
            _context12.next = 34;
            break;
          case 30:
            _context12.prev = 30;
            _context12.t1 = _context12["catch"](23);
            console.error('Error loading workout rotation:', _context12.t1);
            setWorkout({
              type: 'back-biceps',
              "var": 0
            });
          case 34:
            _context12.next = 36;
            return refreshHistory();
          case 36:
            _context12.next = 44;
            break;
          case 38:
            _context12.prev = 38;
            _context12.t2 = _context12["catch"](3);
            console.error('Critical error in loadData:', _context12.t2);
            setData(JSON.parse(JSON.stringify(initialData)));
            setWorkout({
              type: 'back-biceps',
              "var": 0
            });
            setHistory([]);
          case 44:
            _context12.prev = 44;
            setLoading(false);
            return _context12.finish(44);
          case 47:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[3, 38, 44, 47], [4, 11], [23, 30]]);
    }));
    return _loadData.apply(this, arguments);
  }
  function refreshHistory() {
    return _refreshHistory.apply(this, arguments);
  }
  function _refreshHistory() {
    _refreshHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var storage, res, hist, validHistory;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            storage = makeStorage();
            _context14.prev = 1;
            _context14.next = 4;
            return storage.list('day:');
          case 4:
            res = _context14.sent;
            if (!(res !== null && res !== void 0 && res.keys)) {
              _context14.next = 13;
              break;
            }
            _context14.next = 8;
            return Promise.all(res.keys.map(/*#__PURE__*/function () {
              var _ref57 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(k) {
                var r, raw, parsed;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return storage.get(k);
                    case 3:
                      r = _context13.sent;
                      if (!(!r || !r.value)) {
                        _context13.next = 6;
                        break;
                      }
                      return _context13.abrupt("return", null);
                    case 6:
                      raw = typeof r.value === 'string' ? r.value : '';
                      parsed = JSON.parse(raw || '{}'); // Ensure we have all fields for proper display
                      return _context13.abrupt("return", {
                        date: parsed.date || k.replace('day:', ''),
                        done: parsed.done || [],
                        journal: parsed.journal || '',
                        water: parsed.water || 0,
                        saas: parsed.saas || '',
                        deepWork: parsed.deepWork || '',
                        talks: parsed.talks || '',
                        miles: parsed.miles || '',
                        weights: parsed.weights || {},
                        workoutDone: parsed.workoutDone || false,
                        workoutType: parsed.workoutType || null,
                        workoutExercises: parsed.workoutExercises || null,
                        mood: parsed.mood || null,
                        energyLevel: parsed.energyLevel || null,
                        // Add nutrition data for this day
                        nutritionData: function () {
                          try {
                            var nutritionKey = parsed.date || k.replace('day:', '');
                            var savedNutrition = localStorage.getItem('vita-nutrition');
                            if (savedNutrition) {
                              var _nutritionData = JSON.parse(savedNutrition);
                              return _nutritionData[nutritionKey] || null;
                            }
                            return null;
                          } catch (e) {
                            console.error('Error loading nutrition data for history:', e);
                            return null;
                          }
                        }()
                      });
                    case 11:
                      _context13.prev = 11;
                      _context13.t0 = _context13["catch"](0);
                      console.error('Error loading history item:', k, _context13.t0);
                      return _context13.abrupt("return", null);
                    case 15:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, null, [[0, 11]]);
              }));
              return function (_x8) {
                return _ref57.apply(this, arguments);
              };
            }()));
          case 8:
            hist = _context14.sent;
            validHistory = hist.filter(Boolean);
            setHistory(validHistory.sort(function (a, b) {
              return new Date(b.date) - new Date(a.date);
            }));
            _context14.next = 14;
            break;
          case 13:
            setHistory([]);
          case 14:
            _context14.next = 20;
            break;
          case 16:
            _context14.prev = 16;
            _context14.t0 = _context14["catch"](1);
            console.error('Error refreshing history:', _context14.t0);
            setHistory([]);
          case 20:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[1, 16]]);
    }));
    return _refreshHistory.apply(this, arguments);
  }
  function save(_x5) {
    return _save.apply(this, arguments);
  }
  function _save() {
    _save = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(d) {
      var storage, cleanData;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            setSaveStatus('Saving…');
            storage = makeStorage(); // Ensure we have a clean copy of the data
            cleanData = JSON.parse(JSON.stringify(d));
            _context15.next = 6;
            return storage.set("day:".concat(today), JSON.stringify(cleanData));
          case 6:
            setSaveStatus('Saved ✓');
            setTimeout(function () {
              return setSaveStatus('');
            }, 2000);
            _context15.next = 10;
            return refreshHistory();
          case 10:
            setIsExisting(true);
            _context15.next = 18;
            break;
          case 13:
            _context15.prev = 13;
            _context15.t0 = _context15["catch"](0);
            console.error('Save error', _context15.t0);
            setSaveStatus('Save failed ❌');
            setTimeout(function () {
              return setSaveStatus('');
            }, 3000);
          case 18:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 13]]);
    }));
    return _save.apply(this, arguments);
  }
  function startNewDay() {
    return _startNewDay.apply(this, arguments);
  }
  function _startNewDay() {
    _startNewDay = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var storage, newData;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            if (window.confirm('Start a new day? This will snapshot and save the current entry, then reset Today to a fresh entry.')) {
              _context16.next = 2;
              break;
            }
            return _context16.abrupt("return");
          case 2:
            storage = makeStorage();
            _context16.prev = 3;
            if (!(data && data.date)) {
              _context16.next = 7;
              break;
            }
            _context16.next = 7;
            return storage.set("day:".concat(data.date), JSON.stringify(data));
          case 7:
            newData = {
              date: today,
              done: [],
              journal: '',
              water: 0,
              saas: '',
              deepWork: '',
              talks: '',
              miles: '',
              weights: {},
              mood: null,
              workoutDone: false,
              energyLevel: null
            };
            setData(JSON.parse(JSON.stringify(newData)));
            setJournal('');
            setWater(0);
            setSaas('');
            setDeepWork('');
            setTalks('');
            setMiles('');
            setWeights({});
            _context16.next = 18;
            return storage.set("day:".concat(today), JSON.stringify(newData));
          case 18:
            _context16.next = 20;
            return refreshHistory();
          case 20:
            setIsExisting(false);
            setSaveStatus('New day started');
            setTimeout(function () {
              return setSaveStatus('');
            }, 2000);
            _context16.next = 28;
            break;
          case 25:
            _context16.prev = 25;
            _context16.t0 = _context16["catch"](3);
            console.error('New day error', _context16.t0);
          case 28:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[3, 25]]);
    }));
    return _startNewDay.apply(this, arguments);
  }
  function completeWorkout() {
    return _completeWorkout.apply(this, arguments);
  }
  function _completeWorkout() {
    _completeWorkout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var storage, selectedWorkoutType, nd, cleanData, idx, nextWorkout;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            storage = makeStorage();
            selectedWorkoutType = manualWorkoutType || workout.type;
            nd = _objectSpread(_objectSpread({}, data), {}, {
              workoutType: selectedWorkoutType,
              workoutDone: true,
              miles: selectedWorkoutType === 'running' ? miles : undefined,
              weights: selectedWorkoutType !== 'running' ? _objectSpread({}, weights) : undefined,
              workoutExercises: selectedWorkoutType !== 'running' ? exercises[selectedWorkoutType][workout["var"]] : undefined,
              workoutDate: new Date().toISOString()
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context17.next = 7;
            return save(cleanData);
          case 7:
            // Show success message
            setSaveStatus('Workout completed! 💪');
            setTimeout(function () {
              return setSaveStatus('');
            }, 2000);

            // Update workout rotation
            idx = rotation.indexOf(workout.type);
            nextWorkout = {
              type: rotation[(idx + 1) % rotation.length],
              "var": 0
            };
            setWorkout(nextWorkout);
            setWeights({});
            setMiles('');

            // Save the workout rotation
            _context17.prev = 14;
            _context17.next = 17;
            return storage.set('workout-rotation', JSON.stringify(nextWorkout));
          case 17:
            _context17.next = 22;
            break;
          case 19:
            _context17.prev = 19;
            _context17.t0 = _context17["catch"](14);
            console.error('Failed to save workout rotation', _context17.t0);
          case 22:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[14, 19]]);
    }));
    return _completeWorkout.apply(this, arguments);
  }
  function toggle(_x6) {
    return _toggle.apply(this, arguments);
  }
  function _toggle() {
    _toggle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(id) {
      var done, nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            if (data) {
              _context18.next = 2;
              break;
            }
            return _context18.abrupt("return");
          case 2:
            done = data.done.includes(id) ? data.done.filter(function (x) {
              return x !== id;
            }) : [].concat(_toConsumableArray(data.done), [id]);
            nd = _objectSpread(_objectSpread({}, data), {}, {
              done: done
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context18.next = 8;
            return save(cleanData);
          case 8:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return _toggle.apply(this, arguments);
  }
  function updateWater(_x7) {
    return _updateWater.apply(this, arguments);
  }
  function _updateWater() {
    _updateWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(n) {
      var nw, nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            nw = Math.max(0, (water || 0) + n);
            setWater(nw);
            nd = _objectSpread(_objectSpread({}, data), {}, {
              water: nw
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context19.next = 7;
            return save(cleanData);
          case 7:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    return _updateWater.apply(this, arguments);
  }
  function genNew() {
    var currentWorkoutType = manualWorkoutType || workout.type;
    if (!workout || currentWorkoutType === 'running') return;
    var vars = exercises[currentWorkoutType] || [];
    setWorkout(_objectSpread(_objectSpread({}, workout), {}, {
      "var": (workout["var"] + 1) % Math.max(1, vars.length)
    }));
  }
  function getStreak() {
    var _sorted$;
    if (!history || history.length === 0) return 0;
    var streak = 0;
    var sorted = _toConsumableArray(history).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    var todayStr = getTodayLocal();
    var todayHasData = data && data.done && data.done.length > 0;
    if (todayHasData) streak = 1;else if (sorted.length > 0 && sorted[0].date === todayStr) {
      if (sorted[0].done && sorted[0].done.length > 0) streak = 1;
    }
    var startIdx = ((_sorted$ = sorted[0]) === null || _sorted$ === void 0 ? void 0 : _sorted$.date) === todayStr ? 1 : 0;
    var expectedDate = new Date(todayStr);
    expectedDate.setDate(expectedDate.getDate() - (streak > 0 ? 1 : 0));
    for (var i = startIdx; i < sorted.length; i++) {
      var dayDate = new Date(sorted[i].date);
      var diff = Math.round((expectedDate - dayDate) / (1000 * 60 * 60 * 24));
      if (diff === 0 && sorted[i].done && sorted[i].done.length > 0) {
        streak++;
        expectedDate.setDate(expectedDate.getDate() - 1);
      } else if (diff === 0) {
        break;
      } else {
        break;
      }
    }
    return streak;
  }

  // Morning Brief generator
  function getMorningBrief() {
    var today = new Date();
    var dayName = today.toLocaleDateString('en-US', {
      weekday: 'long'
    });
    var isSunday = today.getDay() === 0;
    var streak = getStreak();
    var recentHistory = history.slice(0, 7);
    var avgTasks = recentHistory.length > 0 ? Math.round(recentHistory.reduce(function (s, d) {
      return s + (d.done ? d.done.length : 0);
    }, 0) / recentHistory.length) : 0;
    var recentMoods = recentHistory.filter(function (d) {
      return d.mood;
    }).map(function (d) {
      return d.mood;
    });
    var lastMood = recentMoods.length > 0 ? recentMoods[0] : null;
    var workoutsThisWeek = recentHistory.filter(function (d) {
      return d.workoutDone;
    }).length;
    var greeting = '';
    var hour = today.getHours();
    if (hour < 12) greeting = 'Good morning';else if (hour < 17) greeting = 'Good afternoon';else greeting = 'Good evening';
    var tips = [];
    if (workoutsThisWeek < 3) tips.push('Consider fitting a workout in today');
    if (lastMood === '😔 Off' || lastMood === '😰 Hard') tips.push('Yesterday was tough — be kind to yourself today');
    if (streak >= 5) tips.push("".concat(streak, "-day streak going strong \u2014 protect the chain"));
    if (avgTasks < 8) tips.push('Try tackling your hardest task first thing');
    if (isSunday) tips.push('Sunday is a great day for a weekly review');
    if (tips.length === 0) tips.push('Stay focused and make today count');
    return {
      greeting: greeting,
      dayName: dayName,
      tips: tips,
      avgTasks: avgTasks,
      workoutsThisWeek: workoutsThisWeek,
      streak: streak
    };
  }

  // Journaling prompts — rotates daily
  var journalingPrompts = ["What's one thing you're grateful for right now?", "What would make today a 10/10 day?", "What's something you've been avoiding? Why?", "Who had a positive impact on you recently?", "What's a lesson from this week you want to carry forward?", "If you could change one habit starting today, what would it be?", "What's something you accomplished recently that you're proud of?", "Where do you feel stuck right now? What's one small step forward?", "What would your ideal morning routine look like?", "What's one boundary you need to set or reinforce?", "How do you want to feel at the end of today?", "What's one skill you want to develop this month?", "Describe your energy patterns — when do you feel most alive?", "What's a fear you've overcome or want to overcome?", "Write a letter to your future self 6 months from now.", "What relationships need more attention?", "What's draining your energy right now?", "What's one thing you could simplify in your life?", "When did you last feel truly proud of yourself?", "What does your ideal day look like in 5 years?", "What are you most curious about right now?", "What pattern keeps repeating in your life?", "What would you do if you knew you couldn't fail?", "Who do you admire most? What quality of theirs do you want?", "What's your biggest time waster and how can you reduce it?", "When was the last time you left your comfort zone?", "What would you tell your younger self?", "What are you tolerating that you shouldn't be?", "How has your definition of success changed?", "What gives you the most energy and flow?"];
  function getTodaysPrompt() {
    var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return journalingPrompts[dayOfYear % journalingPrompts.length];
  }

  // Sleep/Wake logging
  function saveSleepData(sleep, wake) {
    var todayKey = getTodayLocal();
    var sleepData = JSON.parse(localStorage.getItem('vita-sleep-data') || '{}');
    sleepData[todayKey] = {
      sleep: sleep,
      wake: wake
    };
    localStorage.setItem('vita-sleep-data', JSON.stringify(sleepData));
  }
  function loadSleepData() {
    try {
      var sleepData = JSON.parse(localStorage.getItem('vita-sleep-data') || '{}');
      return sleepData[getTodayLocal()] || null;
    } catch (e) {
      return null;
    }
  }

  // Custom tasks management
  function addCustomTask(name) {
    if (!name.trim()) return;
    var id = 'custom_' + Date.now();
    var updated = [].concat(_toConsumableArray(customTasks), [{
      id: id,
      t: name.trim()
    }]);
    setCustomTasks(updated);
    localStorage.setItem('vita-custom-tasks', JSON.stringify(updated));
    setNewCustomTask('');
  }
  function removeCustomTask(id) {
    var updated = customTasks.filter(function (t) {
      return t.id !== id;
    });
    setCustomTasks(updated);
    localStorage.setItem('vita-custom-tasks', JSON.stringify(updated));
  }
  function toggleHideTask(id) {
    var updated = hiddenTasks.includes(id) ? hiddenTasks.filter(function (x) {
      return x !== id;
    }) : [].concat(_toConsumableArray(hiddenTasks), [id]);
    setHiddenTasks(updated);
    localStorage.setItem('vita-hidden-tasks', JSON.stringify(updated));
  }

  // Body weight tracking
  function logBodyWeight(weight) {
    if (!weight) return;
    var todayKey = getTodayLocal();
    var entry = {
      date: todayKey,
      weight: parseFloat(weight),
      timestamp: Date.now()
    };
    var existing = weightHistory.filter(function (w) {
      return w.date !== todayKey;
    });
    var updated = [entry].concat(_toConsumableArray(existing)).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    setWeightHistory(updated);
    localStorage.setItem('vita-weight-history', JSON.stringify(updated));
    setBodyWeight('');
    setSaveStatus('⚖️ Weight logged!');
    setTimeout(function () {
      return setSaveStatus('');
    }, 2000);
  }

  // Weekly review
  function saveWeeklyReview(review) {
    var weekKey = function () {
      var d = new Date();
      var day = d.getDay();
      var diff = d.getDate() - day;
      return new Date(d.setDate(diff)).toISOString().split('T')[0];
    }();
    var reviews = JSON.parse(localStorage.getItem('vita-weekly-reviews') || '{}');
    reviews[weekKey] = _objectSpread(_objectSpread({}, review), {}, {
      savedAt: Date.now()
    });
    localStorage.setItem('vita-weekly-reviews', JSON.stringify(reviews));
    setShowWeeklyReview(false);
    setSaveStatus('📋 Weekly review saved!');
    setTimeout(function () {
      return setSaveStatus('');
    }, 3000);
  }

  // Knowledge Integration Functions
  function generateTodaysApplication() {
    var books = [{
      title: "Atomic Habits",
      author: "James Clear",
      application: "Today, identify one habit you want to build and start with a 2-minute version. For example, if you want to read more, commit to reading just one page after breakfast."
    }, {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      application: "Today, identify your habit loop: pick a cue, routine, and reward for one habit you want to change. Replace the routine while keeping the same cue and reward."
    }, {
      title: "How to Win Friends",
      author: "Dale Carnegie",
      application: "Today, practice the principle of appreciation: find three people to genuinely compliment or thank before noon. Notice how it affects your interactions."
    }, {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      application: "Today, catch yourself in 'fast thinking' mode when making a decision. Pause and consciously switch to 'slow thinking' by asking: What information am I missing?"
    }, {
      title: "The 7 Habits",
      author: "Stephen Covey",
      application: "Today, practice 'begin with the end in mind': Before starting your first task, visualize what success looks like and work backwards from there."
    }, {
      title: "Deep Work",
      author: "Cal Newport",
      application: "Today, schedule your most important deep work session during your peak energy time. Protect this time fiercely - no email, no notifications."
    }, {
      title: "The Life-Changing Magic",
      author: "Marie Kondo",
      application: "Today, apply the 'spark joy' test to your digital life: delete 10 apps, unsubscribe from 5 newsletters, and organize one digital folder that sparks confusion."
    }, {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      application: "Today, question a cultural norm: Pick one societal 'truth' you follow automatically and ask yourself why you believe it. Is it serving you?"
    }, {
      title: "The Body Keeps Score",
      author: "Bessel van der Kolk",
      application: "Today, practice body awareness: Throughout the day, notice physical sensations in your body. When you feel tension, take 3 deep breaths and relax that area."
    }, {
      title: "Meditations",
      author: "Marcus Aurelius",
      application: "Today, practice Stoic acceptance: When something doesn't go your way, remind yourself 'This was not in my control' and focus on your response instead."
    }];
    var today = new Date();
    var dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    var bookIndex = dayOfYear % books.length;
    setCurrentBookApplication(books[bookIndex]);
  }
  function addToKnowledgeBase(note) {
    var newEntry = {
      id: Date.now(),
      content: note.content,
      source: note.source,
      category: note.category,
      dateAdded: new Date().toISOString(),
      tags: note.tags || []
    };
    var updatedKnowledge = [newEntry].concat(_toConsumableArray(knowledgeBase));
    setKnowledgeBase(updatedKnowledge);
    localStorage.setItem('vita-knowledge-base', JSON.stringify(updatedKnowledge));
  }
  function addToSpacedRepetition(item) {
    var newItem = {
      id: Date.now(),
      content: item.content,
      source: item.source,
      interval: 1,
      // days
      nextReview: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      // tomorrow
      easeFactor: 2.5,
      // SuperMemo default
      repetitions: 0,
      lastReviewed: new Date().toISOString()
    };
    var updatedRepetition = [].concat(_toConsumableArray(spacedRepetition), [newItem]);
    setSpacedRepetition(updatedRepetition);
    localStorage.setItem('vita-spaced-repetition', JSON.stringify(updatedRepetition));
  }
  function saveReadingProgress(entry) {
    var today = new Date().toDateString();
    var now = new Date();
    var isNewReadingDay = readingProgress.lastReadingDate !== today;

    // Create new reading entry
    var newEntry = {
      id: Date.now(),
      date: now.toISOString(),
      bookTitle: entry.bookTitle || 'Untitled',
      pagesRead: parseInt(entry.pagesRead || 0),
      insights: entry.insights || '',
      notes: entry.notes || ''
    };

    // Update reading history
    var updatedHistory = [newEntry].concat(_toConsumableArray(readingHistory));
    setReadingHistory(updatedHistory);
    localStorage.setItem('vita-reading-history', JSON.stringify(updatedHistory));

    // Update reading progress stats
    var isNewBook = entry.bookTitle && (!readingHistory.length || readingHistory[0].bookTitle !== entry.bookTitle);
    var updatedProgress = _objectSpread(_objectSpread({}, readingProgress), {}, {
      booksRead: readingProgress.booksRead + (isNewBook ? 1 : 0),
      pagesRead: readingProgress.pagesRead + parseInt(entry.pagesRead || 0),
      insightsGained: readingProgress.insightsGained + (entry.insights ? 1 : 0),
      currentStreak: isNewReadingDay ? readingProgress.currentStreak + 1 : readingProgress.currentStreak,
      longestStreak: Math.max(readingProgress.longestStreak, readingProgress.currentStreak + (isNewReadingDay ? 1 : 0)),
      lastReadingDate: today
    });
    setReadingProgress(updatedProgress);
    localStorage.setItem('vita-reading-progress', JSON.stringify(updatedProgress));
    setReadingEntry({
      bookTitle: '',
      pagesRead: '',
      insights: '',
      notes: ''
    });
    setShowReadingModal(false);
    setSaveStatus('📚 Reading progress saved!');
    setTimeout(function () {
      return setSaveStatus('');
    }, 3000);
  }
  function reviewSpacedItem(itemId, quality) {
    // SuperMemo-2 algorithm for spaced repetition
    var item = spacedRepetition.find(function (i) {
      return i.id === itemId;
    });
    if (!item) return;
    var newInterval, newEaseFactor;
    if (quality >= 3) {
      // Correct response
      if (item.repetitions === 0) {
        newInterval = 1;
      } else if (item.repetitions === 1) {
        newInterval = 6;
      } else {
        newInterval = Math.round(item.interval * item.easeFactor);
      }
      newEaseFactor = item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    } else {
      // Incorrect response
      newInterval = 1;
      newEaseFactor = item.easeFactor;
    }
    newEaseFactor = Math.max(1.3, newEaseFactor);
    var updatedItem = _objectSpread(_objectSpread({}, item), {}, {
      interval: newInterval,
      easeFactor: newEaseFactor,
      repetitions: quality >= 3 ? item.repetitions + 1 : 0,
      nextReview: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000).toISOString(),
      lastReviewed: new Date().toISOString()
    });
    var updatedRepetition = spacedRepetition.map(function (i) {
      return i.id === itemId ? updatedItem : i;
    }).filter(function (i) {
      return new Date(i.nextReview) > new Date();
    }); // Remove completed items

    setSpacedRepetition(updatedRepetition);
    localStorage.setItem('vita-spaced-repetition', JSON.stringify(updatedRepetition));
  }

  // Challenge Management Functions
  function createChallenge(challengeData) {
    var newChallenge = {
      id: Date.now(),
      title: challengeData.title,
      description: challengeData.description,
      duration: challengeData.duration,
      category: challengeData.category,
      type: challengeData.type,
      // 'habit', 'avoid', 'track'
      target: challengeData.target,
      unit: challengeData.unit,
      reward: challengeData.reward,
      createdAt: new Date().toISOString(),
      startDate: new Date().toISOString(),
      completed: false,
      progress: [],
      currentStreak: 0,
      bestStreak: 0
    };
    var updatedChallenges = [].concat(_toConsumableArray(challenges), [newChallenge]);
    setChallenges(updatedChallenges);
    localStorage.setItem('vita-challenges', JSON.stringify([].concat(_toConsumableArray(updatedChallenges), _toConsumableArray(completedChallenges))));
  }
  function updateChallengeProgress(challengeId, completed) {
    var challenge = challenges.find(function (c) {
      return c.id === challengeId;
    });
    if (!challenge) return;
    var today = new Date().toISOString().split('T')[0];
    var existingProgress = challenge.progress.find(function (p) {
      return p.date === today;
    });
    var newProgress;
    if (existingProgress) {
      newProgress = challenge.progress.map(function (p) {
        return p.date === today ? _objectSpread(_objectSpread({}, p), {}, {
          completed: completed
        }) : p;
      });
    } else {
      newProgress = [].concat(_toConsumableArray(challenge.progress), [{
        date: today,
        completed: completed
      }]);
    }

    // Calculate streaks
    var sortedProgress = newProgress.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    var currentStreak = 0;
    var bestStreak = challenge.bestStreak;
    var _iterator = _createForOfIteratorHelper(sortedProgress),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var day = _step.value;
        if (day.completed) {
          currentStreak++;
        } else {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    bestStreak = Math.max(bestStreak, currentStreak);
    var updatedChallenge = _objectSpread(_objectSpread({}, challenge), {}, {
      progress: newProgress,
      currentStreak: currentStreak,
      bestStreak: bestStreak
    });

    // Check if challenge is completed
    var challengeEndDate = new Date(challenge.startDate);
    challengeEndDate.setDate(challengeEndDate.getDate() + challenge.duration);
    if (new Date() >= challengeEndDate && currentStreak >= Math.ceil(challenge.duration * 0.8)) {
      // Challenge completed successfully
      updatedChallenge.completed = true;
      updatedChallenge.completedAt = new Date().toISOString();

      // Award badge
      awardBadge({
        name: "".concat(challenge.title, " Champion"),
        description: "Completed ".concat(challenge.duration, "-day ").concat(challenge.category, " challenge"),
        icon: getBadgeIcon(challenge.category),
        earnedAt: new Date().toISOString(),
        challengeId: challenge.id
      });
      setCompletedChallenges(function (prev) {
        return [].concat(_toConsumableArray(prev), [updatedChallenge]);
      });
      setChallenges(function (prev) {
        return prev.filter(function (c) {
          return c.id !== challengeId;
        });
      });
    } else {
      setChallenges(function (prev) {
        return prev.map(function (c) {
          return c.id === challengeId ? updatedChallenge : c;
        });
      });
    }
    localStorage.setItem('vita-challenges', JSON.stringify([].concat(_toConsumableArray(challenges.filter(function (c) {
      return c.id !== challengeId;
    }).map(function (c) {
      return c.id === challengeId ? updatedChallenge : c;
    })), _toConsumableArray(completedChallenges))));
  }
  function awardBadge(badge) {
    var newBadges = [].concat(_toConsumableArray(badges), [badge]);
    setBadges(newBadges);
    localStorage.setItem('vita-badges', JSON.stringify(newBadges));
  }
  function getBadgeIcon(category) {
    var icons = {
      fitness: '💪',
      discipline: '🎯',
      nutrition: '🥗',
      reading: '📚',
      mindfulness: '🧘',
      sleep: '😴',
      productivity: '🚀',
      social: '🤝'
    };
    return icons[category] || '🏆';
  }
  function getSuggestedChallenges() {
    return [{
      title: "7-Day Discipline Challenge",
      description: "Complete all daily tasks for 7 consecutive days",
      duration: 7,
      category: 'discipline',
      type: 'habit',
      target: 1,
      unit: 'days',
      reward: 'Consistency Badge'
    }, {
      title: "30-Day Fitness Challenge",
      description: "Complete a workout every day for 30 days",
      duration: 30,
      category: 'fitness',
      type: 'habit',
      target: 1,
      unit: 'workouts',
      reward: 'Fitness Champion Badge'
    }, {
      title: "No Sugar for 10 Days",
      description: "Avoid all added sugars for 10 consecutive days",
      duration: 10,
      category: 'nutrition',
      type: 'avoid',
      target: 0,
      unit: 'sugar items',
      reward: 'Sugar-Free Badge'
    }, {
      title: "Read 10 Minutes Daily for 14 Days",
      description: "Read for at least 10 minutes every day",
      duration: 14,
      category: 'reading',
      type: 'habit',
      target: 10,
      unit: 'minutes',
      reward: 'Reading Habit Badge'
    }, {
      title: "Mindful Morning Routine",
      description: "Practice 10 minutes of mindfulness or meditation daily",
      duration: 21,
      category: 'mindfulness',
      type: 'habit',
      target: 10,
      unit: 'minutes',
      reward: 'Mindfulness Master Badge'
    }, {
      title: "Sleep Champion",
      description: "Get 7+ hours of sleep every night",
      duration: 14,
      category: 'sleep',
      type: 'habit',
      target: 7,
      unit: 'hours',
      reward: 'Sleep Champion Badge'
    }];
  }

  // AI Life Coach Functions
  function generateAICoachInsights() {
    var _Object$entries$sort$;
    if (history.length < 3) {
      return {
        dailyFocus: "Keep tracking your activities to receive personalized coaching insights.",
        weeklyReview: "Not enough data yet for weekly analysis.",
        monthlyReflection: "Continue building your data for monthly reflections.",
        personalizedSuggestions: [],
        patternInsights: [],
        priorityActions: []
      };
    }

    // Analyze daily focus based on current patterns
    var today = new Date();
    var dayOfWeek = today.toLocaleDateString('en-US', {
      weekday: 'long'
    });
    var recentWeek = history.slice(0, 7);

    // Daily focus analysis
    var dailyFocus = "";

    // Check for concerning patterns
    var avgTasks = recentWeek.reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / recentWeek.length;
    var avgMood = recentWeek.filter(function (d) {
      return d.mood;
    }).length / recentWeek.length;
    var workoutStreak = recentWeek.filter(function (d) {
      return d.workoutDone;
    }).length;
    if (avgTasks < 10) {
      dailyFocus = "Focus on building momentum with small, consistent actions. Start with your most important 3 tasks today.";
    } else if (workoutStreak < 3) {
      dailyFocus = "Your body thrives on movement. Schedule a workout today - even 20 minutes makes a difference.";
    } else if (avgMood < 0.7) {
      dailyFocus = "Prioritize emotional wellbeing today. Consider a walk in nature or connecting with someone meaningful.";
    } else {
      dailyFocus = "You're on a strong trajectory! Today, focus on deepening one key habit or relationship.";
    }

    // Weekly review analysis
    var weeklyStats = {
      totalTasks: recentWeek.reduce(function (sum, d) {
        return sum + (d.done ? d.done.length : 0);
      }, 0),
      workoutsCompleted: recentWeek.filter(function (d) {
        return d.workoutDone;
      }).length,
      avgMoodScore: recentWeek.filter(function (d) {
        return d.mood;
      }).map(function (d) {
        var scores = {
          '😊 Sharp': 5,
          '🙂 Good': 4,
          '😐 Okay': 3,
          '😔 Off': 2,
          '😰 Hard': 1
        };
        return scores[d.mood] || 3;
      }).reduce(function (a, b) {
        return a + b;
      }, 0) / Math.max(1, recentWeek.filter(function (d) {
        return d.mood;
      }).length),
      readingDays: recentWeek.filter(function (d) {
        return d.done && d.done.some(function (task) {
          return task.includes('read');
        });
      }).length,
      socialDays: recentWeek.filter(function (d) {
        return d.done && d.done.some(function (task) {
          return task.includes('connect') || task.includes('social');
        });
      }).length
    };
    var weeklyReview = "This week you completed ".concat(weeklyStats.totalTasks, " tasks and ").concat(weeklyStats.workoutsCompleted, " workouts. ");
    if (weeklyStats.avgMoodScore >= 4) {
      weeklyReview += "Your emotional wellbeing has been strong. ";
    } else if (weeklyStats.avgMoodScore >= 3) {
      weeklyReview += "Your mood has been stable but could use some attention. ";
    } else {
      weeklyReview += "Your emotional state needs nurturing. ";
    }
    if (weeklyStats.readingDays >= 4) {
      weeklyReview += "Excellent reading consistency! ";
    } else if (weeklyStats.readingDays >= 2) {
      weeklyReview += "Good reading habits developing. ";
    } else {
      weeklyReview += "Consider building a daily reading ritual. ";
    }
    weeklyReview += "Next week, focus on sustaining your strongest habits while gently improving areas of opportunity.";

    // Monthly reflection (based on last 30 days)
    var monthlyData = history.slice(0, 30);
    var monthlyReflection = "";
    if (monthlyData.length >= 30) {
      var monthlyStats = {
        avgDailyTasks: monthlyData.reduce(function (sum, d) {
          return sum + (d.done ? d.done.length : 0);
        }, 0) / 30,
        workoutConsistency: monthlyData.filter(function (d) {
          return d.workoutDone;
        }).length / 30,
        moodConsistency: monthlyData.filter(function (d) {
          return d.mood;
        }).length / 30,
        bestStreak: function () {
          var currentStreak = 0;
          var maxStreak = 0;
          var _iterator2 = _createForOfIteratorHelper(monthlyData),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var day = _step2.value;
              if (day.done && day.done.length > 0) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
              } else {
                currentStreak = 0;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return maxStreak;
        }()
      };
      monthlyReflection = "This month, you've shown remarkable ".concat(monthlyStats.workoutConsistency > 0.7 ? 'physical' : monthlyStats.avgDailyTasks > 15 ? 'productive' : 'personal', " consistency. ");
      if (monthlyStats.bestStreak > 10) {
        monthlyReflection += "Your ".concat(monthlyStats.bestStreak, "-day streak demonstrates incredible discipline. ");
      }
      monthlyReflection += "Reflect on what systems and mindsets made this possible, and consider how to apply these insights to new areas of growth.";
    } else {
      monthlyReflection = "Continue building your data foundation. Monthly reflections become most valuable after consistent tracking for several weeks.";
    }

    // Personalized suggestions based on patterns
    var personalizedSuggestions = [];

    // Analyze productivity patterns
    var productivityByDay = {};
    recentWeek.forEach(function (day) {
      var dayName = new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short'
      });
      productivityByDay[dayName] = (productivityByDay[dayName] || 0) + (day.done ? day.done.length : 0);
    });
    var mostProductiveDay = (_Object$entries$sort$ = Object.entries(productivityByDay).sort(function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];
      var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];
      return b - a;
    })[0]) === null || _Object$entries$sort$ === void 0 ? void 0 : _Object$entries$sort$[0];
    if (mostProductiveDay) {
      personalizedSuggestions.push({
        type: 'productivity',
        title: 'Optimize Your Schedule',
        suggestion: "Schedule important work for ".concat(mostProductiveDay, "s when you're naturally most productive."),
        icon: '📅'
      });
    }

    // Energy pattern analysis
    var energyPatterns = recentWeek.filter(function (d) {
      return d.energyLevel;
    });
    if (energyPatterns.length >= 3) {
      var highEnergyDays = energyPatterns.filter(function (d) {
        return d.energyLevel === 'high';
      }).length;
      var lowEnergyDays = energyPatterns.filter(function (d) {
        return d.energyLevel === 'low' || d.energyLevel === 'exhausted';
      }).length;
      if (highEnergyDays > lowEnergyDays) {
        personalizedSuggestions.push({
          type: 'energy',
          title: 'Leverage Peak Energy',
          suggestion: 'Use your high-energy periods for challenging tasks and creative work.',
          icon: '⚡'
        });
      } else {
        personalizedSuggestions.push({
          type: 'energy',
          title: 'Energy Management',
          suggestion: 'Focus on sleep, nutrition, and recovery to improve baseline energy levels.',
          icon: '🔋'
        });
      }
    }

    // Social connection analysis
    var socialPatterns = recentWeek.filter(function (d) {
      return d.done && d.done.some(function (task) {
        return task.includes('connect') || task.includes('social') || task.includes('friend');
      });
    });
    if (socialPatterns.length < 2) {
      personalizedSuggestions.push({
        type: 'social',
        title: 'Build Social Connections',
        suggestion: 'Schedule regular social interactions - they\'re crucial for emotional wellbeing.',
        icon: '🤝'
      });
    }

    // Reading habit analysis
    var readingPatterns = recentWeek.filter(function (d) {
      return d.done && d.done.some(function (task) {
        return task.includes('read');
      });
    });
    if (readingPatterns.length >= 5) {
      personalizedSuggestions.push({
        type: 'growth',
        title: 'Deepen Reading Practice',
        suggestion: 'Consider joining a book club or starting a reading journal to enhance comprehension.',
        icon: '📚'
      });
    } else if (readingPatterns.length < 2) {
      personalizedSuggestions.push({
        type: 'growth',
        title: 'Cultivate Reading Habit',
        suggestion: 'Start with 10 minutes daily. Reading compounds knowledge exponentially.',
        icon: '📖'
      });
    }

    // Pattern insights
    var patternInsights = [];

    // Workout-mood correlation
    var workoutMoodData = recentWeek.filter(function (d) {
      return d.mood && d.workoutDone !== undefined;
    });
    if (workoutMoodData.length >= 4) {
      var workoutDaysMood = workoutMoodData.filter(function (d) {
        return d.workoutDone;
      }).map(function (d) {
        var scores = {
          '😊 Sharp': 5,
          '🙂 Good': 4,
          '😐 Okay': 3,
          '😔 Off': 2,
          '😰 Hard': 1
        };
        return scores[d.mood] || 3;
      }).reduce(function (a, b) {
        return a + b;
      }, 0) / workoutMoodData.filter(function (d) {
        return d.workoutDone;
      }).length;
      var nonWorkoutDaysMood = workoutMoodData.filter(function (d) {
        return !d.workoutDone;
      }).map(function (d) {
        var scores = {
          '😊 Sharp': 5,
          '🙂 Good': 4,
          '😐 Okay': 3,
          '😔 Off': 2,
          '😰 Hard': 1
        };
        return scores[d.mood] || 3;
      }).reduce(function (a, b) {
        return a + b;
      }, 0) / Math.max(1, workoutMoodData.filter(function (d) {
        return !d.workoutDone;
      }).length);
      if (workoutDaysMood > nonWorkoutDaysMood + 0.5) {
        patternInsights.push({
          title: 'Movement Boosts Mood',
          insight: 'Your workouts correlate with improved emotional state. Exercise could be your natural mood enhancer.',
          impact: 'High'
        });
      }
    }

    // Priority actions based on current state
    var priorityActions = [];

    // Check for immediate needs
    var todayData = history[0];
    if (todayData) {
      if (!todayData.mood) {
        priorityActions.push({
          action: 'Set your mood for today',
          reason: 'Mood tracking helps identify patterns and improve emotional awareness',
          urgency: 'medium'
        });
      }
      if (!todayData.workoutDone && workoutStreak >= 3) {
        priorityActions.push({
          action: 'Complete today\'s workout',
          reason: 'You\'re on a workout streak - don\'t break the momentum!',
          urgency: 'high'
        });
      }
      if ((todayData.done ? todayData.done.length : 0) < 5) {
        priorityActions.push({
          action: 'Focus on high-impact tasks',
          reason: 'Starting your day with key accomplishments builds momentum',
          urgency: 'medium'
        });
      }
    }
    return {
      dailyFocus: dailyFocus,
      weeklyReview: weeklyReview,
      monthlyReflection: monthlyReflection,
      personalizedSuggestions: personalizedSuggestions,
      patternInsights: patternInsights,
      priorityActions: priorityActions
    };
  }
  if (loading || !data || !workout) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center h-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xl text-gray-300"
    }, "Loading\u2026"));
  }
  if (view === 'workouts') {
    var currentWorkoutType = manualWorkoutType || workout.type;
    var ex = currentWorkoutType === 'running' ? null : exercises[currentWorkoutType][workout["var"]];
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-6 py-2 bg-slate-700 rounded-lg"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-6 py-2 bg-slate-700 rounded-lg"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-6 py-2 bg-amber-600 text-white rounded-lg"
    }, "Workouts")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold"
    }, "Today: ", labels[manualWorkoutType || workout.type]), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mb-2"
    }, manualWorkoutType ? "\uD83C\uDFAF Manual selection \u2022 Suggested: ".concat(labels[workout.type]) : "\uD83D\uDCC5 Suggested \u2022 Next: ".concat(labels[rotation[(rotation.indexOf(workout.type) + 1) % rotation.length]])), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: manualWorkoutType || workout.type,
      onChange: function onChange(e) {
        return setManualWorkoutType(e.target.value === workout.type ? null : e.target.value);
      },
      className: "px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-sm"
    }, /*#__PURE__*/React.createElement("option", {
      value: workout.type
    }, "\uD83D\uDCC5 ", labels[workout.type], " (Suggested)"), rotation.filter(function (type) {
      return type !== workout.type;
    }).map(function (type) {
      return /*#__PURE__*/React.createElement("option", {
        key: type,
        value: type
      }, "\uD83C\uDFAF ", labels[type]);
    })), manualWorkoutType && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setManualWorkoutType(null);
      },
      className: "px-2 py-1 bg-slate-600 text-white rounded text-xs hover:bg-slate-500",
      title: "Reset to suggested workout"
    }, "Reset"))), /*#__PURE__*/React.createElement("div", null, (manualWorkoutType || workout.type) !== 'running' && /*#__PURE__*/React.createElement("button", {
      onClick: genNew,
      className: "px-4 py-2 bg-slate-700 rounded"
    }, "New Exercises"))), currentWorkoutType === 'running' ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.1",
      value: miles,
      onChange: function onChange(e) {
        return setMiles(e.target.value);
      },
      placeholder: "Miles run",
      className: "w-full p-3 bg-slate-700 rounded text-white"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var workoutProgress;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              workoutProgress = {
                type: workout.type,
                "var": workout["var"],
                weights: weights,
                miles: miles,
                savedAt: new Date().toISOString()
              };
              localStorage.setItem('vita-workout-progress', JSON.stringify(workoutProgress));
              setSaveStatus('Progress saved! 💾');
              setTimeout(function () {
                return setSaveStatus('');
              }, 2000);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })),
      className: "flex-1 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors"
    }, "\uD83D\uDCBE Save Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: completeWorkout,
      disabled: !miles || data.workoutDone,
      className: "flex-1 py-2 bg-green-600 rounded font-semibold disabled:bg-slate-600"
    }, data.workoutDone ? '✓ Done' : 'Complete'))) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, ex.map(function (e, i) {
      // Parse set information from exercise name (e.g., "Bench Press 4x8" -> 4 sets)
      var setMatch = e.match(/(\d+)x\d+/);
      var numSets = setMatch ? parseInt(setMatch[1]) : 1;
      var exerciseWeights = weights[e] || [];
      var _getExerciseLiftHints = getExerciseLiftHints(history, e, today),
        allTimeMax = _getExerciseLiftHints.allTimeMax,
        prevSessionDate = _getExerciseLiftHints.prevSessionDate,
        prevSessionBySet = _getExerciseLiftHints.prevSessionBySet;
      var prevLabel = prevSessionDate ? "Last time (".concat(prevSessionDate, "):") : null;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "bg-slate-700 rounded-lg p-4 ".concat(data.workoutDone ? 'opacity-75' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-medium mb-2 flex items-center justify-between gap-2"
      }, /*#__PURE__*/React.createElement("span", null, e), data.workoutDone && exerciseWeights.length > 0 && /*#__PURE__*/React.createElement("span", {
        className: "text-green-400 text-sm shrink-0"
      }, "\u2713 Saved")), (allTimeMax !== null || prevLabel) && /*#__PURE__*/React.createElement("div", {
        className: "mb-3 space-y-1 text-xs text-amber-200/90"
      }, allTimeMax !== null && /*#__PURE__*/React.createElement("div", null, "Heaviest logged (any set): ", /*#__PURE__*/React.createElement("span", {
        className: "font-semibold text-amber-100"
      }, allTimeMax, " lbs")), prevLabel && prevSessionBySet.some(function (cell) {
        return cell !== '';
      }) && /*#__PURE__*/React.createElement("div", {
        className: "text-gray-400"
      }, prevLabel, ' ', /*#__PURE__*/React.createElement("span", {
        className: "text-slate-200"
      }, prevSessionBySet.filter(Boolean).join(' / '), " lbs"))), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, Array.from({
        length: numSets
      }, function (_, setIndex) {
        return /*#__PURE__*/React.createElement("div", {
          key: setIndex,
          className: "flex flex-wrap items-center gap-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-400 w-12 shrink-0"
        }, "Set ", setIndex + 1, ":"), /*#__PURE__*/React.createElement("input", {
          type: "number",
          placeholder: "Weight (lbs)",
          value: exerciseWeights[setIndex] || '',
          onChange: function onChange(ev) {
            var newWeights = _toConsumableArray(exerciseWeights);
            newWeights[setIndex] = ev.target.value;
            setWeights(_objectSpread(_objectSpread({}, weights), {}, _defineProperty({}, e, newWeights)));
          },
          className: "flex-1 min-w-[120px] p-2 bg-slate-600 rounded text-sm text-white ".concat(data.workoutDone ? 'cursor-not-allowed' : ''),
          disabled: data.workoutDone
        }), /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-500 shrink-0"
        }, "lbs"), prevSessionDate && prevSessionBySet[setIndex] !== undefined && prevSessionBySet[setIndex] !== '' ? /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-amber-200/70 ml-auto md:ml-0"
        }, "was ", prevSessionBySet[setIndex], " lbs") : prevSessionDate ? /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-slate-500 ml-auto md:ml-0"
        }, "\u2014") : null);
      })), data.workoutDone && exerciseWeights.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 text-xs text-gray-400"
      }, "Today logged: ", exerciseWeights.filter(function (w) {
        return String(w).trim() !== '';
      }).join(', '), " lbs"));
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var workoutProgress;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              workoutProgress = {
                type: workout.type,
                "var": workout["var"],
                weights: weights,
                miles: miles,
                savedAt: new Date().toISOString()
              };
              localStorage.setItem('vita-workout-progress', JSON.stringify(workoutProgress));
              setSaveStatus('Progress saved! 💾');
              setTimeout(function () {
                return setSaveStatus('');
              }, 2000);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      })),
      className: "flex-1 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors"
    }, "\uD83D\uDCBE Save Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: completeWorkout,
      disabled: data.workoutDone,
      className: "flex-1 py-2 bg-green-600 rounded font-semibold disabled:bg-slate-600"
    }, data.workoutDone ? '✓ Workout Completed' : 'Complete Workout'))))));
  }
  if (view === 'affirmations') {
    // Personalized affirmations based on user's goals and progress
    var affirmations = {
      general: ["I am becoming the best version of myself every day", "I have the power to create the life I desire", "Every challenge I face is an opportunity to grow stronger", "I am worthy of success and happiness", "My potential is limitless and I unlock it daily", "I choose progress over perfection", "I am grateful for my journey and excited for what comes next", "I radiate confidence and positive energy", "I am capable of achieving extraordinary things", "Today, I choose to be unstoppable"],
      productivity: ["I am focused, disciplined, and productive in all my endeavors", "Deep work is my superpower and I master it daily", "I complete important tasks with ease and efficiency", "My time is valuable and I use it wisely", "I set clear goals and achieve them consistently", "I am a master of my schedule and priorities", "Procrastination has no power over me", "I work with purpose and passion every day", "My productivity creates lasting impact", "I accomplish more than I thought possible"],
      health: ["My body is strong, healthy, and full of energy", "I nourish my body with healthy choices", "Every workout brings me closer to my ideal self", "I am committed to my physical and mental wellbeing", "Rest and recovery are essential parts of my strength", "I treat my body with love and respect", "My health is my foundation for success", "I move my body with joy and purpose", "I am grateful for my body's incredible capabilities", "Healthy habits are my daily celebration of self-love"],
      mindset: ["I think positively and attract positive outcomes", "Challenges are opportunities in disguise", "I learn and grow from every experience", "My mindset determines my reality", "I choose faith over fear in every situation", "I am resilient and bounce back stronger", "My thoughts create my reality", "I embrace change and adapt with grace", "I am the author of my own story", "Every day brings new possibilities and growth"],
      leadership: ["I lead with integrity and inspire others", "My hard conversations create meaningful change", "I own my mistakes and learn from them", "I help others grow and succeed", "I lead by example in all I do", "My leadership creates positive impact", "I communicate clearly and effectively", "I build strong relationships and trust", "I take initiative and responsibility", "I am a force for positive change"]
    };

    // Get today's affirmation based on user's recent focus with improved randomization
    var getTodaysAffirmation = function getTodaysAffirmation() {
      // Check recent activity to personalize
      var recentTasks = history.slice(0, 7).flatMap(function (d) {
        return d.done || [];
      });
      var hasProductivity = recentTasks.some(function (t) {
        return ['deep', 'progress', 'priorities'].includes(t);
      });
      var hasLeadership = recentTasks.some(function (t) {
        return ['hard', 'own', 'help'].includes(t);
      });
      var hasWorkout = history.slice(0, 7).some(function (d) {
        return d.workoutDone;
      });

      // Determine primary category based on activity
      var primaryCategory = 'general';
      if (hasProductivity && hasLeadership) primaryCategory = 'leadership';else if (hasProductivity) primaryCategory = 'productivity';else if (hasWorkout) primaryCategory = 'health';

      // Add weekly rotation for variety - each week focuses on different category
      var weekOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
      var weekCategories = ['productivity', 'health', 'leadership', 'mindset'];
      var weeklyCategory = weekCategories[weekOfYear % 4];

      // Use activity-based category 70% of time, weekly rotation 30% of time
      var category = Math.random() > 0.3 ? primaryCategory : weeklyCategory;

      // Create more random seed using multiple factors
      var userActivitySeed = history.length * 7 + recentTasks.length * 3 + (data.done ? data.done.length : 0);
      var timeSeed = Date.now() % 1000;
      var combinedSeed = userActivitySeed + timeSeed + Math.floor(Math.random() * 100);
      var categoryAffirmations = affirmations[category] || affirmations.general;
      return categoryAffirmations[combinedSeed % categoryAffirmations.length];
    };
    var todaysAffirmation = getTodaysAffirmation();
    var affirmationCategory = todaysAffirmation.includes('productivity') || todaysAffirmation.includes('work') ? 'productivity' : todaysAffirmation.includes('health') || todaysAffirmation.includes('body') ? 'health' : todaysAffirmation.includes('leadership') || todaysAffirmation.includes('lead') ? 'leadership' : todaysAffirmation.includes('mindset') || todaysAffirmation.includes('think') ? 'mindset' : 'general';
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-4 py-2 bg-amber-600 text-white rounded-lg text-sm"
    }, "Affirmations")), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "px-4 text-sm font-medium text-slate-400 bg-slate-900"
    }, "\uD83C\uDFAF TODAY'S FOCUS"), /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-center text-slate-500 text-sm mb-4"
    }, "Your personalized daily affirmation based on recent activity"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-8 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full text-xs font-medium ".concat(affirmationCategory === 'productivity' ? 'bg-blue-600' : affirmationCategory === 'health' ? 'bg-green-600' : affirmationCategory === 'leadership' ? 'bg-purple-600' : affirmationCategory === 'mindset' ? 'bg-yellow-600' : 'bg-amber-600', " text-white")
    }, affirmationCategory.charAt(0).toUpperCase() + affirmationCategory.slice(1))), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed"
    }, "\"", todaysAffirmation, "\""), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm"
    }, "Your affirmation for ", new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "px-4 text-sm font-medium text-slate-400 bg-slate-900"
    }, "\uD83C\uDFB2 EXPLORE CATEGORIES"), /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-center text-slate-500 text-sm mb-6"
    }, "Try affirmations from different life areas for variety and inspiration"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-blue-400"
    }, "\uD83D\uDCBC Productivity"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-3"
    }, "Focus on work efficiency and goal achievement"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4 min-h-[3rem]"
    }, categoryAffirmations.productivity || affirmations.productivity[Math.floor(Math.random() * affirmations.productivity.length)]), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCategoryAffirmations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            productivity: affirmations.productivity[Math.floor(Math.random() * affirmations.productivity.length)]
          });
        });
      },
      className: "w-full py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
    }, "Get New One")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-green-400"
    }, "\uD83D\uDCAA Health & Fitness"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-3"
    }, "Build strength, energy, and wellness habits"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4 min-h-[3rem]"
    }, categoryAffirmations.health || affirmations.health[Math.floor(Math.random() * affirmations.health.length)]), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCategoryAffirmations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            health: affirmations.health[Math.floor(Math.random() * affirmations.health.length)]
          });
        });
      },
      className: "w-full py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
    }, "Get New One")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-purple-400"
    }, "\uD83D\uDC51 Leadership"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-3"
    }, "Develop influence, communication, and impact"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4 min-h-[3rem]"
    }, categoryAffirmations.leadership || affirmations.leadership[Math.floor(Math.random() * affirmations.leadership.length)]), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCategoryAffirmations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            leadership: affirmations.leadership[Math.floor(Math.random() * affirmations.leadership.length)]
          });
        });
      },
      className: "w-full py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
    }, "Get New One")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-yellow-400"
    }, "\uD83E\uDDE0 Mindset"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-3"
    }, "Cultivate positive thinking and growth orientation"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4 min-h-[3rem]"
    }, categoryAffirmations.mindset || affirmations.mindset[Math.floor(Math.random() * affirmations.mindset.length)]), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCategoryAffirmations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            mindset: affirmations.mindset[Math.floor(Math.random() * affirmations.mindset.length)]
          });
        });
      },
      className: "w-full py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 transition-colors"
    }, "Get New One")))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "px-4 text-sm font-medium text-slate-400 bg-slate-900"
    }, "\uD83D\uDCA1 DAILY INSPIRATION"), /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-center text-slate-500 text-sm mb-6"
    }, "Quick motivational reminders for your journey"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-4 text-sm text-gray-300"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "\uD83C\uDF1F Remember:"), " Every expert was once a beginner. Every champion was once afraid to start."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "\u26A1 Action:"), " The bridge between your goals and accomplishment is your daily actions."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCC8 Growth:"), " You're not competing with anyone else. You're competing with who you were yesterday."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCAA Resilience:"), " The only way to fail is to stop trying. Every setback is a setup for a comeback.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-4 border-t border-slate-700"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var allAffirmations = [].concat(_toConsumableArray(affirmations.productivity), _toConsumableArray(affirmations.health), _toConsumableArray(affirmations.leadership), _toConsumableArray(affirmations.mindset));
        var randomAffirmation = allAffirmations[Math.floor(Math.random() * allAffirmations.length)];
        alert("\uD83C\uDFB2 Surprise Affirmation:\n\n\"".concat(randomAffirmation, "\""));
      },
      className: "w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
    }, "\uD83C\uDFB2 Surprise Me - Random Affirmation"))))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-amber-400"
    }, "\uD83D\uDD12 Encapsulated Notes (AI Coach)"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-300 mb-3"
    }, "Write a message to your future self and lock it for N days. Hidden until unlock."), /*#__PURE__*/React.createElement("label", {
      className: "text-sm text-slate-200"
    }, "Note"), /*#__PURE__*/React.createElement("textarea", {
      id: "enc-note-ai",
      placeholder: "Message to future you...",
      style: {
        width: '100%',
        height: 90,
        padding: 8,
        marginTop: 6,
        borderRadius: 6,
        background: '#071226',
        color: '#e6eef8',
        border: '1px solid #334155'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        whiteSpace: 'nowrap',
        color: '#cbd5e1'
      }
    }, "Lock days"), /*#__PURE__*/React.createElement("input", {
      id: "enc-days-ai",
      type: "number",
      min: "1",
      defaultValue: 365,
      style: {
        width: 110,
        padding: 6,
        borderRadius: 6,
        background: '#071226',
        color: '#e6eef8',
        border: '1px solid #334155'
      }
    }), /*#__PURE__*/React.createElement("button", {
      id: "enc-save-ai",
      className: "px-3 py-1 rounded bg-amber-600 text-black"
    }, "Create Locked Note"), /*#__PURE__*/React.createElement("button", {
      id: "enc-clear-ai",
      className: "px-3 py-1 rounded bg-slate-700 text-gray-200"
    }, "Clear All")), /*#__PURE__*/React.createElement("h4", {
      className: "text-sm text-slate-300 mt-4"
    }, "Your Locked Notes"), /*#__PURE__*/React.createElement("div", {
      id: "enc-list-ai",
      style: {
        marginTop: 8
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-2 text-amber-400"
    }, "\uD83D\uDCC5 Tracker \u2014 Events"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-300 mb-3"
    }, "Add events like birthdays or maintenance and track days until they occur."), /*#__PURE__*/React.createElement("label", {
      className: "text-sm text-slate-200"
    }, "Title"), /*#__PURE__*/React.createElement("input", {
      id: "tracker-title",
      className: "w-full p-2 rounded bg-slate-900 text-white border border-slate-700",
      placeholder: "e.g., Mom's Birthday, Change AC Filter"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-sm text-slate-200"
    }, "Date"), /*#__PURE__*/React.createElement("input", {
      id: "tracker-date",
      type: "date",
      className: "w-full p-2 rounded bg-slate-900 text-white border border-slate-700"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 180
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-sm text-slate-200"
    }, "Recurrence"), /*#__PURE__*/React.createElement("select", {
      id: "tracker-recurrence",
      className: "w-full p-2 rounded bg-slate-900 text-white border border-slate-700"
    }, /*#__PURE__*/React.createElement("option", {
      value: "none"
    }, "One-time"), /*#__PURE__*/React.createElement("option", {
      value: "annual"
    }, "Annual")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      id: "tracker-save",
      className: "px-4 py-2 bg-amber-600 rounded text-black"
    }, "Save Event"), /*#__PURE__*/React.createElement("button", {
      id: "tracker-clear",
      className: "px-4 py-2 bg-slate-700 rounded text-gray-200"
    }, "Clear All")), /*#__PURE__*/React.createElement("h4", {
      className: "text-sm text-slate-300 mt-4"
    }, "Upcoming Events"), /*#__PURE__*/React.createElement("div", {
      id: "tracker-list",
      style: {
        marginTop: 8
      }
    }))));
  }
  if (view === 'coach') {
    // Calculate streaks and insights
    var calculateStreaks = function calculateStreaks() {
      var streaks = {
        current: 0,
        longest: 0,
        workoutStreak: 0,
        longestWorkout: 0
      };

      // Task completion streak
      for (var i = 0; i < history.length; i++) {
        if (history[i].done && history[i].done.length > 0) {
          streaks.current++;
        } else {
          streaks.longest = Math.max(streaks.longest, streaks.current);
          streaks.current = 0;
        }
      }
      streaks.longest = Math.max(streaks.longest, streaks.current);

      // Workout streak
      for (var _i3 = 0; _i3 < history.length; _i3++) {
        if (history[_i3].workoutDone) {
          streaks.workoutStreak++;
        } else {
          streaks.longestWorkout = Math.max(streaks.longestWorkout, streaks.workoutStreak);
          streaks.workoutStreak = 0;
        }
      }
      streaks.longestWorkout = Math.max(streaks.longestWorkout, streaks.workoutStreak);
      return streaks;
    };
    var streaks = calculateStreaks();
    var todayTasks = data.done ? data.done.length : 0;
    var avgTasks = history.length > 0 ? Math.round(history.reduce(function (s, d) {
      return s + (d.done ? d.done.length : 0);
    }, 0) / history.length * 10) / 10 : 0;

    // Generate personalized coaching message
    var getCoachingMessage = function getCoachingMessage() {
      var messages = {
        excellent: ["🚀 INCREDIBLE! You're crushing it! Keep this momentum going!", "💪 You're in BEAST MODE! This level of consistency is rare and valuable.", "🌟 You're not just participating, you're DOMINATING your growth journey!", "🏆 LEGENDARY performance! You're setting the standard for excellence."],
        great: ["🔥 Great work! You're building habits that will change your life.", "💪 Solid progress! Consistency like yours creates extraordinary results.", "🎯 You're on fire! Keep channeling this energy into your goals.", "⭐ Excellent momentum! You're becoming the person you want to be."],
        good: ["👍 Good job! Every step forward counts. Keep building these habits.", "💪 Steady progress! Small, consistent actions create big changes.", "🎯 You're moving in the right direction. Stay focused on your goals.", "⭐ Keep it up! You're developing habits that will serve you for life."],
        needsImprovement: ["💪 Let's get back on track! Remember why you started this journey.", "🎯 Every champion has off days. Today is your chance to get back to winning.", "🔥 Your future self is counting on you. Let's make today count!", "💪 You've got this! One strong day can restart your momentum."]
      };
      if (streaks.current >= 7) return messages.excellent[Math.floor(Math.random() * messages.excellent.length)];
      if (streaks.current >= 3) return messages.great[Math.floor(Math.random() * messages.great.length)];
      if (todayTasks > 0) return messages.good[Math.floor(Math.random() * messages.good.length)];
      return messages.needsImprovement[Math.floor(Math.random() * messages.needsImprovement.length)];
    };
    var coachingMessage = getCoachingMessage();
    var habitDefs = [{
      id: 'reading',
      name: 'Read for 30+ minutes',
      category: 'learning'
    }, {
      id: 'meditation',
      name: 'Meditate or mindfulness',
      category: 'mindfulness'
    }, {
      id: 'networking',
      name: 'Connect with someone meaningful',
      category: 'social'
    }, {
      id: 'learning',
      name: 'Learn something new (skill/course)',
      category: 'growth'
    }, {
      id: 'gratitude',
      name: 'Write 3 things grateful for',
      category: 'mindfulness'
    }, {
      id: 'planning',
      name: 'Review and plan tomorrow',
      category: 'productivity'
    }];
    var trackedHabitsRaw = JSON.parse(localStorage.getItem('vita-tracked-habits') || '{}');
    var todayKey = getTodayLocal();
    var todayTracked = trackedHabitsRaw[todayKey] || [];
    var computeHabitStreak = function computeHabitStreak(habitId) {
      var streak = 0;
      var dates = Object.keys(trackedHabitsRaw).sort().reverse();
      var _iterator3 = _createForOfIteratorHelper(dates),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var dt = _step3.value;
          if (trackedHabitsRaw[dt].includes(habitId)) streak++;else break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return streak;
    };
    var trackHabitToday = function trackHabitToday(habitId) {
      var raw = JSON.parse(localStorage.getItem('vita-tracked-habits') || '{}');
      var today = getTodayLocal();
      if (!raw[today]) raw[today] = [];
      if (!raw[today].includes(habitId)) raw[today].push(habitId);else raw[today] = raw[today].filter(function (h) {
        return h !== habitId;
      });
      localStorage.setItem('vita-tracked-habits', JSON.stringify(raw));
      setSaveStatus('✅ Habit updated!');
      setTimeout(function () {
        return setSaveStatus('');
      }, 2000);
      setView('coach');
    };
    var extendedHabits = habitDefs.map(function (h) {
      return _objectSpread(_objectSpread({}, h), {}, {
        streak: computeHabitStreak(h.id),
        trackedToday: todayTracked.includes(h.id)
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-3 py-2 bg-amber-600 text-white rounded-lg text-xs"
    }, "Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold mb-4 text-center text-amber-400"
    }, "\uD83C\uDFC6 Your Accountability Coach"), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg text-white mb-4 leading-relaxed"
    }, coachingMessage), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center gap-4 text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 px-3 py-2 rounded"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "Current Streak:"), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-400 font-bold ml-1"
    }, streaks.current, " days")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 px-3 py-2 rounded"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "Best Streak:"), /*#__PURE__*/React.createElement("span", {
      className: "text-green-400 font-bold ml-1"
    }, streaks.longest, " days"))))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-400 mb-2"
    }, "Today's Tasks"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-amber-400"
    }, todayTasks, "/18"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "completed")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-400 mb-2"
    }, "Average Tasks"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-blue-400"
    }, avgTasks, "/18"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "per day")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-400 mb-2"
    }, "Workout Streak"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-green-400"
    }, streaks.workoutStreak), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "days"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4"
    }, "\uD83C\uDFAF Extended Habit Tracking"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mb-4"
    }, "Track additional habits beyond your core tasks for comprehensive personal development."), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, extendedHabits.map(function (habit) {
      return /*#__PURE__*/React.createElement("div", {
        key: habit.id,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium"
      }, habit.name), /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-1 rounded text-xs ".concat(habit.category === 'learning' ? 'bg-blue-600' : habit.category === 'mindfulness' ? 'bg-purple-600' : habit.category === 'social' ? 'bg-green-600' : habit.category === 'growth' ? 'bg-yellow-600' : 'bg-gray-600', " text-white")
      }, habit.category)), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return trackHabitToday(habit.id);
        },
        className: "flex-1 py-2 ".concat(habit.trackedToday ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-600 hover:bg-slate-500', " text-white rounded text-sm")
      }, habit.trackedToday ? '✓ Done Today' : 'Track Today'), /*#__PURE__*/React.createElement("div", {
        className: "px-3 py-2 bg-slate-600 rounded text-sm text-gray-300"
      }, "Streak: ", habit.streak, " days")));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4"
    }, "\uD83D\uDCCA Progress Insights"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-3 bg-slate-700 rounded"
    }, /*#__PURE__*/React.createElement("span", null, "Weekly Goal Progress"), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-400 font-bold"
    }, history.slice(0, 7).filter(function (d) {
      return d.done && d.done.length > 0;
    }).length, "/7 days")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-3 bg-slate-700 rounded"
    }, /*#__PURE__*/React.createElement("span", null, "Consistency Rating"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold ".concat(streaks.current >= 7 ? 'text-green-400' : streaks.current >= 3 ? 'text-yellow-400' : 'text-red-400')
    }, streaks.current >= 7 ? 'Excellent' : streaks.current >= 3 ? 'Good' : 'Needs Focus')), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-3 bg-slate-700 rounded"
    }, /*#__PURE__*/React.createElement("span", null, "Next Milestone"), /*#__PURE__*/React.createElement("span", {
      className: "text-blue-400"
    }, streaks.longest + 1, " day streak"))))));
  }
  if (view === 'books') {
    // Curated book database for self-improvement and entrepreneurship
    var bookDatabase = {
      productivity: [{
        title: "Deep Work",
        author: "Cal Newport",
        summary: "In an age of constant distraction, Cal Newport argues that the ability to perform deep work—focused, cognitively demanding tasks—is becoming increasingly rare and valuable. Newport explores the concept of deep work versus shallow work, showing how deep work leads to higher quality output and greater satisfaction. He provides practical strategies for cultivating deep work habits, including scheduling rituals, creating the right environment, and embracing boredom. The book challenges the notion that connectivity and multitasking are virtues, instead advocating for deliberate disconnection to achieve meaningful results.",
        keyInsights: ["Deep work is the ability to focus without distraction on cognitively demanding tasks", "Schedule deep work sessions and protect them fiercely", "Minimize shallow work that doesn't create value", "Train your concentration through deliberate practice", "Embrace boredom to build mental resilience", "Quit social media if it hinders your deep work"],
        whyRead: "Master the skill of focused, distraction-free work in our hyper-connected world"
      }, {
        title: "Atomic Habits",
        author: "James Clear",
        summary: "James Clear reveals how small changes can create remarkable results through the power of habit compounding. Drawing on scientific research, Clear explains the psychology behind habit formation and provides a practical framework for building good habits and breaking bad ones. He introduces the Four Laws of Behavior Change: make it obvious, attractive, easy, and satisfying. The book emphasizes the importance of identity-based habits, environmental design, and the 'never miss twice' rule for maintaining consistency. Clear shows how understanding the science of small habits can transform your life in profound ways.",
        keyInsights: ["Small habits compound into remarkable results over time", "Focus on systems rather than goals for sustainable change", "Make habits attractive, easy, and satisfying", "Track your habits and never miss twice in a row", "Design your environment to support good habits", "Focus on identity change rather than outcome goals"],
        whyRead: "Learn the science of habit formation and transformation"
      }, {
        title: "Getting Things Done",
        author: "David Allen",
        summary: "David Allen's groundbreaking productivity methodology provides a complete system for organizing your life and work. The GTD method is built around the principle that your mind is for having ideas, not storing them. Allen teaches a five-step process: Capture, Clarify, Organize, Reflect, and Engage. He emphasizes the importance of collecting all your commitments into a trusted external system, processing them into actionable items, and maintaining regular reviews to keep everything current. The book addresses the psychology of productivity, showing how proper organization eliminates mental clutter and frees your mind for creative thinking.",
        keyInsights: ["Capture everything that requires attention into a trusted system", "Clarify what each item means and what action is required", "Organize reminders and information in the right categories", "Reflect regularly and keep your system current", "Your mind is for having ideas, not storing them", "Use the two-minute rule for quick tasks"],
        whyRead: "Build a productivity system that eliminates overwhelm and maximizes focus"
      }],
      mindset: [{
        title: "Mindset",
        author: "Carol Dweck",
        summary: "Carol Dweck's groundbreaking research reveals that our beliefs about intelligence and ability profoundly impact our success. She identifies two mindsets: fixed mindset (believing abilities are innate and unchangeable) and growth mindset (believing abilities can be developed through effort and learning). Dweck shows how these mindsets affect motivation, resilience, and achievement in school, work, and relationships. The book provides practical strategies for cultivating a growth mindset, including praising effort rather than intelligence, embracing challenges, and learning from criticism. Dweck demonstrates that changing your mindset can transform your life and help you reach your full potential.",
        keyInsights: ["Growth mindset believes abilities can be developed through dedication", "Fixed mindset avoids challenges and gives up easily", "Embrace challenges as opportunities to grow", "Learn from criticism and find lessons in setbacks", "Praise effort and process, not just outcomes", "View failures as learning opportunities"],
        whyRead: "Discover how your mindset shapes your success and happiness"
      }, {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        summary: "Eckhart Tolle presents a revolutionary approach to spirituality and self-awareness that transcends traditional religious boundaries. He argues that true enlightenment comes from living in the present moment rather than being trapped in thoughts about the past or future. Tolle explains how the ego creates suffering through attachment, resistance, and identification with the mind. He provides practical exercises for becoming present, observing thoughts without judgment, and finding peace in everyday activities. The book challenges readers to question their relationship with time and discover the eternal nature of consciousness that exists beyond the thinking mind.",
        keyInsights: ["The present moment is all we ever have", "Your mind creates suffering through attachment to past/future", "Accept what is without resistance", "Find peace through presence and awareness", "Observe your thoughts without judgment", "The ego thrives on drama and identification"],
        whyRead: "Learn to live in the present and find inner peace"
      }],
      leadership: [{
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        summary: "Stephen Covey's timeless classic presents seven habits that form the foundation of personal and professional effectiveness. Moving beyond quick-fix solutions, Covey provides a principle-centered approach to solving personal and professional problems. The habits are organized into three categories: private victory (habits 1-3), public victory (habits 4-6), and renewal (habit 7). Covey emphasizes that true change comes from within, starting with character development and moving outward to influence others. He illustrates how these habits create a framework for long-term success in all areas of life, from career to relationships to personal growth.",
        keyInsights: ["Be proactive - take responsibility for your life", "Begin with the end in mind - define your mission", "Put first things first - prioritize important over urgent", "Seek win-win solutions in relationships", "Seek first to understand, then to be understood", "Synergize - create better solutions through teamwork", "Sharpen the saw - renew yourself regularly"],
        whyRead: "Master the fundamental principles of personal and professional effectiveness"
      }, {
        title: "Dare to Lead",
        author: "Brené Brown",
        summary: "Brené Brown explores what it takes to be a courageous leader in an increasingly complex world. Drawing on extensive research, Brown identifies four skill sets that define daring leadership: rumbling with vulnerability, living into our values, braving trust, and learning to rise. She challenges the myth that vulnerability is weakness, instead showing how it builds connection and innovation. Brown provides practical tools for having difficult conversations, embracing discomfort, and creating cultures of belonging and innovation. The book combines research insights with real-world examples, showing how courageous leadership can transform organizations and communities.",
        keyInsights: ["Vulnerability is the birthplace of innovation and change", "Courage is contagious - model the behavior you seek", "Lean into discomfort and have tough conversations", "Build trust through reliability, accountability, and compassion", "Rumple with vulnerability instead of avoiding it", "Practice values-based leadership"],
        whyRead: "Learn to lead with courage, compassion, and connection"
      }],
      entrepreneurship: [{
        title: "The Lean Startup",
        author: "Eric Ries",
        summary: "Eric Ries revolutionizes entrepreneurship with the Lean Startup methodology, showing how to build successful businesses in an uncertain world. Drawing from his own experiences, Ries introduces the Build-Measure-Learn feedback loop as the foundation for innovation. He explains how to validate business hypotheses through minimum viable products, split testing, and actionable metrics. The book emphasizes the importance of learning over planning, showing how successful entrepreneurs use scientific methods to reduce risk and increase success rates. Ries provides practical tools for innovation accounting, pivot strategies, and sustainable growth in any business context.",
        keyInsights: ["Build-Measure-Learn feedback loop drives innovation", "Validated learning comes from running experiments", "Pivot when assumptions prove wrong", "Minimum Viable Product tests fundamental business hypotheses", "Use actionable metrics over vanity metrics", "Innovation requires discipline and focus"],
        whyRead: "Master the methodology for building successful businesses"
      }, {
        title: "Zero to One",
        author: "Peter Thiel",
        summary: "Peter Thiel challenges conventional wisdom about innovation and entrepreneurship, arguing that true progress comes from creating something fundamentally new rather than improving existing products. Thiel examines the patterns of successful companies like PayPal, LinkedIn, and SpaceX, identifying key principles for building enduring businesses. He explores the importance of monopoly creation, the power of secrets, and the role of timing in innovation. The book provides contrarian insights about competition, globalization, and the future of technology. Thiel combines philosophical depth with practical business advice, showing entrepreneurs how to create transformative companies that change the world.",
        keyInsights: ["Create monopoly by doing something others cannot", "Focus on technology and timing for competitive advantage", "Sales and distribution are often more important than product", "Build enduring companies, not just successful ones", "Competition is for losers - seek monopoly", "The future belongs to those who create it"],
        whyRead: "Learn how to build the future and create lasting value"
      }],
      health: [{
        title: "Why We Sleep",
        author: "Matthew Walker",
        summary: "Neuroscientist Matthew Walker presents a comprehensive exploration of sleep's transformative power for health, performance, and longevity. Drawing on decades of research, Walker explains how sleep affects every aspect of human functioning, from learning and memory to immune function and emotional regulation. He reveals the devastating consequences of sleep deprivation, showing how even small sleep deficits accumulate into serious health risks. The book provides practical strategies for optimizing sleep, including maintaining consistent sleep schedules, creating ideal sleep environments, and understanding the different stages of sleep. Walker makes a compelling case that sleep is not a luxury but an essential pillar of health and success.",
        keyInsights: ["Sleep is essential for learning, memory, and emotional regulation", "Most adults need 7-9 hours of quality sleep", "Poor sleep increases risk of disease and early death", "Consistent sleep schedule is more important than sleep duration", "Sleep deprivation impairs decision-making and creativity", "Dreaming plays crucial role in emotional processing"],
        whyRead: "Understand the transformative power of sleep for health and performance"
      }, {
        title: "How Not to Die",
        author: "Michael Greger",
        summary: "Dr. Michael Greger presents a comprehensive guide to preventing and reversing chronic diseases through evidence-based nutrition. Drawing on thousands of scientific studies, Greger identifies the most effective dietary interventions for preventing heart disease, cancer, diabetes, and other common illnesses. He introduces the 'Daily Dozen' - twelve categories of healthy foods that provide optimal nutrition. The book challenges conventional dietary wisdom, showing how plant-based eating can prevent and even reverse chronic diseases. Greger provides practical, actionable advice backed by rigorous scientific evidence, making complex nutritional science accessible to everyone.",
        keyInsights: ["Plant-based diets prevent and reverse chronic diseases", "Daily dozen: beans, berries, greens, and other protective foods", "Processed meats and added sugars are the biggest dietary risks", "Nutrition can prevent 80% of heart disease and cancers", "Whole foods provide synergistic health benefits", "Small dietary changes can have major health impacts"],
        whyRead: "Discover evidence-based nutrition for longevity and disease prevention"
      }]
    };

    // Get today's book recommendation
    var getTodaysBook = function getTodaysBook() {
      var today = new Date();
      var categories = Object.keys(bookDatabase);
      var categoryIndex = today.getDay() % categories.length; // Rotate by day of week
      var category = categories[categoryIndex];
      var books = bookDatabase[category];
      var bookIndex = Math.floor(today.getDate() / 7) % books.length; // Rotate weekly
      return _objectSpread(_objectSpread({}, books[bookIndex]), {}, {
        category: category
      });
    };
    var todaysBook = getTodaysBook();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-2 py-2 bg-amber-600 text-white rounded text-xs"
    }, "Books")), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 mb-6 border border-purple-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, "\uD83E\uDDE0"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-white"
    }, "Knowledge Integration"), /*#__PURE__*/React.createElement("p", {
      className: "text-purple-200"
    }, "Transform reading into lifelong wisdom"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-800 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-purple-200"
    }, "\uD83D\uDCDD Personal Knowledge"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, knowledgeBase.length), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-300"
    }, "Saved insights")), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-800 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-blue-200"
    }, "\uD83D\uDD04 Spaced Repetition"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, spacedRepetition.length), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-300"
    }, "Ideas to review")), /*#__PURE__*/React.createElement("div", {
      className: "bg-green-800 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-green-200"
    }, "\uD83D\uDCA1 Daily Application"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-bold text-white"
    }, "Ready"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-green-300"
    }, "Apply ideas today")))), currentBookApplication && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-amber-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-amber-400"
    }, "Apply This Idea Today"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "From \"", currentBookApplication.title, "\" by ", currentBookApplication.author))), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-900 rounded-lg p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-white leading-relaxed"
    }, currentBookApplication.application)), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        addToKnowledgeBase({
          content: currentBookApplication.application,
          source: "".concat(currentBookApplication.title, " - Daily Application"),
          category: 'application',
          tags: ['daily-practice', 'implementation']
        });
        setSaveStatus('✅ Application saved to knowledge base!');
        setTimeout(function () {
          return setSaveStatus('');
        }, 3000);
      },
      className: "flex-1 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
    }, "\uD83D\uDCBE Save to Knowledge Base"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        addToSpacedRepetition({
          content: currentBookApplication.application,
          source: "".concat(currentBookApplication.title, " - Application")
        });
        setSaveStatus('🔄 Added to spaced repetition!');
        setTimeout(function () {
          return setSaveStatus('');
        }, 3000);
      },
      className: "flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    }, "\uD83D\uDD04 Add to Spaced Repetition"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block ".concat(todaysBook.category === 'productivity' ? 'bg-blue-600' : todaysBook.category === 'mindset' ? 'bg-purple-600' : todaysBook.category === 'leadership' ? 'bg-green-600' : todaysBook.category === 'entrepreneurship' ? 'bg-yellow-600' : 'bg-red-600', " text-white")
    }, todaysBook.category.charAt(0).toUpperCase() + todaysBook.category.slice(1)), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-white"
    }, todaysBook.title), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "by ", todaysBook.author)), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, "Today's Pick"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600"
    }, new Date().toLocaleDateString()))), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-amber-400 mb-2"
    }, "Why You Should Read This:"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 text-sm"
    }, todaysBook.whyRead)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-amber-400 mb-3"
    }, "Book Summary:"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4 leading-relaxed"
    }, todaysBook.summary), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-amber-400 mb-3"
    }, "Key Takeaways:"), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-2"
    }, todaysBook.keyInsights.map(function (insight, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: "flex items-start text-sm text-gray-300"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-amber-400 mr-2 mt-1"
      }, "\u2022"), /*#__PURE__*/React.createElement("span", null, insight));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
    }, Object.entries(bookDatabase).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        category = _ref8[0],
        books = _ref8[1];
      return /*#__PURE__*/React.createElement("div", {
        key: category,
        className: "bg-slate-800 rounded-xl p-4 border border-slate-700"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-lg mb-3 capitalize text-amber-400"
      }, category), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, books.map(function (book, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "border-l-2 border-amber-500 pl-3"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-white text-sm"
        }, book.title), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-400 text-xs mb-1"
        }, "by ", book.author), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs leading-relaxed"
        }, book.whyRead));
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 mt-3"
      }, books.length, " books in this category"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-purple-400"
    }, "\uD83D\uDCDD Personal Knowledge Base"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAddNote(true);
      },
      className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    }, "\u2795 Add Note")), showAddNote && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-purple-400"
    }, "Add to Knowledge Base"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("textarea", {
      placeholder: "Your insight, quote, or key learning...",
      value: newNote.content,
      onChange: function onChange(e) {
        return setNewNote(_objectSpread(_objectSpread({}, newNote), {}, {
          content: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400",
      rows: "4"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Source (book, article, experience...)",
      value: newNote.source,
      onChange: function onChange(e) {
        return setNewNote(_objectSpread(_objectSpread({}, newNote), {}, {
          source: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    }), /*#__PURE__*/React.createElement("select", {
      value: newNote.category,
      onChange: function onChange(e) {
        return setNewNote(_objectSpread(_objectSpread({}, newNote), {}, {
          category: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select category"), /*#__PURE__*/React.createElement("option", {
      value: "mindset"
    }, "Mindset"), /*#__PURE__*/React.createElement("option", {
      value: "productivity"
    }, "Productivity"), /*#__PURE__*/React.createElement("option", {
      value: "leadership"
    }, "Leadership"), /*#__PURE__*/React.createElement("option", {
      value: "health"
    }, "Health"), /*#__PURE__*/React.createElement("option", {
      value: "finance"
    }, "Finance"), /*#__PURE__*/React.createElement("option", {
      value: "relationships"
    }, "Relationships"), /*#__PURE__*/React.createElement("option", {
      value: "personal"
    }, "Personal")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Tags (comma separated)",
      value: newNote.tags,
      onChange: function onChange(e) {
        return setNewNote(_objectSpread(_objectSpread({}, newNote), {}, {
          tags: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mt-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (newNote.content.trim()) {
          addToKnowledgeBase(_objectSpread(_objectSpread({}, newNote), {}, {
            tags: newNote.tags.split(',').map(function (tag) {
              return tag.trim();
            }).filter(function (tag) {
              return tag;
            })
          }));
          setNewNote({
            content: '',
            source: '',
            category: '',
            tags: ''
          });
          setShowAddNote(false);
          setSaveStatus('✅ Note added to knowledge base!');
          setTimeout(function () {
            return setSaveStatus('');
          }, 3000);
        }
      },
      className: "flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    }, "Save"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setNewNote({
          content: '',
          source: '',
          category: '',
          tags: ''
        });
        setShowAddNote(false);
      },
      className: "flex-1 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
    }, "Cancel")))), showReadingModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCDA Log Reading Progress"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Book title (optional)",
      value: readingEntry.bookTitle,
      onChange: function onChange(e) {
        return setReadingEntry(_objectSpread(_objectSpread({}, readingEntry), {}, {
          bookTitle: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "Pages read today",
      value: readingEntry.pagesRead,
      onChange: function onChange(e) {
        return setReadingEntry(_objectSpread(_objectSpread({}, readingEntry), {}, {
          pagesRead: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    }), /*#__PURE__*/React.createElement("textarea", {
      placeholder: "Key insights or takeaways...",
      value: readingEntry.insights,
      onChange: function onChange(e) {
        return setReadingEntry(_objectSpread(_objectSpread({}, readingEntry), {}, {
          insights: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400",
      rows: "3"
    }), /*#__PURE__*/React.createElement("textarea", {
      placeholder: "Reading notes (optional)",
      value: readingEntry.notes,
      onChange: function onChange(e) {
        return setReadingEntry(_objectSpread(_objectSpread({}, readingEntry), {}, {
          notes: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400",
      rows: "2"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mt-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveReadingProgress(readingEntry);
      },
      className: "flex-1 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
    }, "Save Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setReadingEntry({
          bookTitle: '',
          pagesRead: '',
          insights: '',
          notes: ''
        });
        setShowReadingModal(false);
      },
      className: "flex-1 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
    }, "Cancel")))), knowledgeBase.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 max-h-96 overflow-y-auto"
    }, knowledgeBase.slice(0, 10).map(function (note) {
      return /*#__PURE__*/React.createElement("div", {
        key: note.id,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-white mb-2"
      }, note.content), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-gray-400"
      }, note.source && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCDA ", note.source), note.category && /*#__PURE__*/React.createElement("span", {
        className: "ml-2"
      }, "\uD83C\uDFF7\uFE0F ", note.category)), /*#__PURE__*/React.createElement("span", {
        className: "text-gray-500"
      }, new Date(note.dateAdded).toLocaleDateString())), note.tags && note.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-1 mt-2"
      }, note.tags.map(function (tag, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: index,
          className: "px-2 py-1 bg-purple-600 text-xs rounded"
        }, tag);
      })));
    }), knowledgeBase.length > 10 && /*#__PURE__*/React.createElement("p", {
      className: "text-center text-gray-400 py-2"
    }, "+", knowledgeBase.length - 10, " more notes in your knowledge base")) : /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl mb-4 block"
    }, "\uD83D\uDCDD"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "Your knowledge base is empty"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, "Start capturing insights from books, articles, and experiences"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-blue-400"
    }, "\uD83D\uDD04 Spaced Repetition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAddRepetition(true);
      },
      className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    }, "\u2795 Add Item")), showAddRepetition && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-blue-400"
    }, "Add to Spaced Repetition"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("textarea", {
      placeholder: "The idea or concept you want to remember...",
      value: newRepetitionItem.content,
      onChange: function onChange(e) {
        return setNewRepetitionItem(_objectSpread(_objectSpread({}, newRepetitionItem), {}, {
          content: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400",
      rows: "4"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Source (book, video, experience...)",
      value: newRepetitionItem.source,
      onChange: function onChange(e) {
        return setNewRepetitionItem(_objectSpread(_objectSpread({}, newRepetitionItem), {}, {
          source: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mt-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (newRepetitionItem.content.trim()) {
          addToSpacedRepetition(newRepetitionItem);
          setNewRepetitionItem({
            content: '',
            source: ''
          });
          setShowAddRepetition(false);
          setSaveStatus('🔄 Added to spaced repetition!');
          setTimeout(function () {
            return setSaveStatus('');
          }, 3000);
        }
      },
      className: "flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    }, "Add"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setNewRepetitionItem({
          content: '',
          source: ''
        });
        setShowAddRepetition(false);
      },
      className: "flex-1 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
    }, "Cancel")))), spacedRepetition.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, spacedRepetition.slice(0, 5).map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-blue-400 mt-1"
      }, "\uD83E\uDDE0"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-white mb-2"
      }, item.content), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-gray-400"
      }, item.source && "\uD83D\uDCDA ".concat(item.source)), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return reviewSpacedItem(item.id, 5);
        },
        className: "px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
      }, "Easy"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return reviewSpacedItem(item.id, 4);
        },
        className: "px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
      }, "Good"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return reviewSpacedItem(item.id, 3);
        },
        className: "px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
      }, "Hard"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return reviewSpacedItem(item.id, 1);
        },
        className: "px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
      }, "Again"))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4 mt-2 text-xs text-gray-500"
      }, /*#__PURE__*/React.createElement("span", null, "Repetition: ", item.repetitions), /*#__PURE__*/React.createElement("span", null, "Next: ", new Date(item.nextReview).toLocaleDateString())))));
    }), spacedRepetition.length > 5 && /*#__PURE__*/React.createElement("p", {
      className: "text-center text-gray-400 py-2"
    }, "+", spacedRepetition.length - 5, " more items to review")) : /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl mb-4 block"
    }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "No items in spaced repetition"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, "Add important ideas you want to remember long-term"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-3"
    }, "\uD83D\uDCDA Reading Challenge"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-blue-400"
    }, readingProgress.booksRead), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Books Read")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-400"
    }, readingProgress.pagesRead), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Pages Read")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-purple-400"
    }, readingProgress.insightsGained), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Key Insights")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-yellow-400"
    }, readingProgress.currentStreak), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Current Streak"))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowReadingModal(true);
      },
      className: "w-full mt-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
    }, "Log Reading Progress")), readingHistory.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-green-400"
    }, "\uD83D\uDCD6 Reading History"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 max-h-96 overflow-y-auto"
    }, readingHistory.map(function (entry) {
      var entryDate = new Date(entry.date);
      var today = new Date();
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      var dateDisplay;
      if (entryDate.toDateString() === today.toDateString()) {
        dateDisplay = 'Today';
      } else if (entryDate.toDateString() === yesterday.toDateString()) {
        dateDisplay = 'Yesterday';
      } else {
        dateDisplay = entryDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: entryDate.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
        });
      }
      return /*#__PURE__*/React.createElement("div", {
        key: entry.id,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mb-1"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-amber-400 font-medium"
      }, "\uD83D\uDCDA ", entry.bookTitle), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-500"
      }, "\u2022 ", dateDisplay)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4 text-sm text-gray-400"
      }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC4 ", entry.pagesRead, " pages"), entry.insights && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCA1 Insight logged")))), entry.insights && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 p-3 bg-amber-900 bg-opacity-30 rounded border-l-2 border-amber-500"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-amber-200 text-sm leading-relaxed"
      }, entry.insights)), entry.notes && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 p-2 bg-slate-600 rounded text-sm text-gray-300"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-gray-500"
      }, "Notes:"), " ", entry.notes));
    })), readingHistory.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8 text-gray-500"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg mb-2"
    }, "No reading history yet"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "Log your first reading session above!")))));
  }
  if (view === 'nutrition') {
    // Comprehensive food database with 500+ foods
    var foodDatabase = {
      proteins: [
      // Poultry
      {
        name: "Chicken Breast (4oz)",
        calories: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6
      }, {
        name: "Chicken Thigh (4oz)",
        calories: 203,
        protein: 25,
        carbs: 0,
        fat: 11
      }, {
        name: "Chicken Wings (3oz)",
        calories: 203,
        protein: 20,
        carbs: 0,
        fat: 14
      }, {
        name: "Chicken Drumstick (4oz)",
        calories: 172,
        protein: 28,
        carbs: 0,
        fat: 6
      }, {
        name: "Chicken Tenders (4oz)",
        calories: 180,
        protein: 29,
        carbs: 6,
        fat: 4
      }, {
        name: "Rotisserie Chicken (4oz)",
        calories: 190,
        protein: 27,
        carbs: 0,
        fat: 9
      }, {
        name: "Chicken Sausage (1 link)",
        calories: 140,
        protein: 15,
        carbs: 1,
        fat: 8
      }, {
        name: "Turkey Breast (4oz)",
        calories: 135,
        protein: 30,
        carbs: 0,
        fat: 1
      }, {
        name: "Turkey Ground (4oz)",
        calories: 170,
        protein: 22,
        carbs: 0,
        fat: 8
      }, {
        name: "Turkey Sausage (1 link)",
        calories: 130,
        protein: 13,
        carbs: 1,
        fat: 8
      }, {
        name: "Turkey Leg (4oz)",
        calories: 175,
        protein: 28,
        carbs: 0,
        fat: 6
      }, {
        name: "Duck Breast (4oz)",
        calories: 190,
        protein: 25,
        carbs: 0,
        fat: 9
      }, {
        name: "Cornish Hen (4oz)",
        calories: 180,
        protein: 26,
        carbs: 0,
        fat: 8
      },
      // Fish & Seafood
      {
        name: "Salmon (4oz)",
        calories: 206,
        protein: 22,
        carbs: 0,
        fat: 12
      }, {
        name: "Salmon (smoked, 3oz)",
        calories: 100,
        protein: 16,
        carbs: 0,
        fat: 4
      }, {
        name: "Tilapia (4oz)",
        calories: 128,
        protein: 26,
        carbs: 0,
        fat: 3
      }, {
        name: "Tuna (canned, 4oz)",
        calories: 100,
        protein: 22,
        carbs: 0,
        fat: 1
      }, {
        name: "Tuna (fresh, 4oz)",
        calories: 130,
        protein: 28,
        carbs: 0,
        fat: 1
      }, {
        name: "Shrimp (4oz)",
        calories: 120,
        protein: 24,
        carbs: 1,
        fat: 2
      }, {
        name: "Cod (4oz)",
        calories: 105,
        protein: 23,
        carbs: 0,
        fat: 1
      }, {
        name: "Halibut (4oz)",
        calories: 119,
        protein: 23,
        carbs: 0,
        fat: 3
      }, {
        name: "Mahi Mahi (4oz)",
        calories: 109,
        protein: 23,
        carbs: 0,
        fat: 1
      }, {
        name: "Swordfish (4oz)",
        calories: 165,
        protein: 27,
        carbs: 0,
        fat: 6
      }, {
        name: "Sea Bass (4oz)",
        calories: 124,
        protein: 24,
        carbs: 0,
        fat: 3
      }, {
        name: "Trout (4oz)",
        calories: 168,
        protein: 24,
        carbs: 0,
        fat: 8
      }, {
        name: "Catfish (4oz)",
        calories: 152,
        protein: 19,
        carbs: 0,
        fat: 8
      }, {
        name: "Sardines (canned, 3oz)",
        calories: 177,
        protein: 21,
        carbs: 0,
        fat: 10
      }, {
        name: "Anchovies (1oz)",
        calories: 37,
        protein: 6,
        carbs: 0,
        fat: 1
      }, {
        name: "Crab Meat (4oz)",
        calories: 98,
        protein: 20,
        carbs: 0,
        fat: 1
      }, {
        name: "Lobster (4oz)",
        calories: 102,
        protein: 21,
        carbs: 0,
        fat: 1
      }, {
        name: "Scallops (4oz)",
        calories: 94,
        protein: 18,
        carbs: 3,
        fat: 1
      }, {
        name: "Clams (4oz)",
        calories: 84,
        protein: 14,
        carbs: 3,
        fat: 1
      }, {
        name: "Mussels (4oz)",
        calories: 97,
        protein: 14,
        carbs: 4,
        fat: 3
      }, {
        name: "Oysters (6 medium)",
        calories: 57,
        protein: 6,
        carbs: 3,
        fat: 2
      }, {
        name: "Calamari (4oz)",
        calories: 104,
        protein: 18,
        carbs: 3,
        fat: 2
      }, {
        name: "Octopus (4oz)",
        calories: 93,
        protein: 17,
        carbs: 2,
        fat: 1
      },
      // Beef
      {
        name: "Beef (lean, 4oz)",
        calories: 170,
        protein: 26,
        carbs: 0,
        fat: 7
      }, {
        name: "Beef (ground 80/20, 4oz)",
        calories: 287,
        protein: 19,
        carbs: 0,
        fat: 23
      }, {
        name: "Beef (ground 90/10, 4oz)",
        calories: 217,
        protein: 22,
        carbs: 0,
        fat: 14
      }, {
        name: "Beef (ground 93/7, 4oz)",
        calories: 170,
        protein: 24,
        carbs: 0,
        fat: 8
      }, {
        name: "Beef Steak (sirloin, 4oz)",
        calories: 190,
        protein: 26,
        carbs: 0,
        fat: 9
      }, {
        name: "Beef Steak (ribeye, 4oz)",
        calories: 250,
        protein: 26,
        carbs: 0,
        fat: 16
      }, {
        name: "Beef Steak (filet mignon, 4oz)",
        calories: 200,
        protein: 28,
        carbs: 0,
        fat: 10
      }, {
        name: "Beef Steak (NY strip, 4oz)",
        calories: 220,
        protein: 26,
        carbs: 0,
        fat: 13
      }, {
        name: "Beef Steak (flank, 4oz)",
        calories: 180,
        protein: 26,
        carbs: 0,
        fat: 8
      }, {
        name: "Beef Steak (skirt, 4oz)",
        calories: 200,
        protein: 25,
        carbs: 0,
        fat: 11
      }, {
        name: "Beef Roast (4oz)",
        calories: 185,
        protein: 26,
        carbs: 0,
        fat: 8
      }, {
        name: "Beef Brisket (4oz)",
        calories: 246,
        protein: 24,
        carbs: 0,
        fat: 16
      }, {
        name: "Beef Short Ribs (4oz)",
        calories: 290,
        protein: 23,
        carbs: 0,
        fat: 22
      }, {
        name: "Beef Liver (4oz)",
        calories: 153,
        protein: 23,
        carbs: 4,
        fat: 4
      }, {
        name: "Corned Beef (4oz)",
        calories: 213,
        protein: 15,
        carbs: 0,
        fat: 16
      }, {
        name: "Beef Stew Meat (4oz)",
        calories: 180,
        protein: 26,
        carbs: 0,
        fat: 8
      }, {
        name: "Veal Cutlet (4oz)",
        calories: 167,
        protein: 30,
        carbs: 0,
        fat: 5
      },
      // Pork
      {
        name: "Pork Tenderloin (4oz)",
        calories: 143,
        protein: 26,
        carbs: 0,
        fat: 3
      }, {
        name: "Pork Chops (4oz)",
        calories: 193,
        protein: 25,
        carbs: 0,
        fat: 9
      }, {
        name: "Pork Loin (4oz)",
        calories: 163,
        protein: 27,
        carbs: 0,
        fat: 5
      }, {
        name: "Pork Belly (4oz)",
        calories: 518,
        protein: 10,
        carbs: 0,
        fat: 53
      }, {
        name: "Pork Ribs (4oz)",
        calories: 290,
        protein: 20,
        carbs: 0,
        fat: 23
      }, {
        name: "Pork Shoulder (4oz)",
        calories: 232,
        protein: 23,
        carbs: 0,
        fat: 15
      }, {
        name: "Ground Pork (4oz)",
        calories: 252,
        protein: 18,
        carbs: 0,
        fat: 20
      }, {
        name: "Bacon (2 slices)",
        calories: 87,
        protein: 6,
        carbs: 0,
        fat: 7
      }, {
        name: "Bacon (turkey, 2 slices)",
        calories: 60,
        protein: 4,
        carbs: 0,
        fat: 5
      }, {
        name: "Canadian Bacon (2 slices)",
        calories: 68,
        protein: 9,
        carbs: 1,
        fat: 3
      }, {
        name: "Ham (4oz)",
        calories: 120,
        protein: 20,
        carbs: 2,
        fat: 4
      }, {
        name: "Ham (deli, 3 slices)",
        calories: 90,
        protein: 14,
        carbs: 2,
        fat: 3
      }, {
        name: "Prosciutto (2oz)",
        calories: 130,
        protein: 14,
        carbs: 0,
        fat: 8
      }, {
        name: "Pepperoni (1oz)",
        calories: 138,
        protein: 6,
        carbs: 0,
        fat: 12
      }, {
        name: "Salami (1oz)",
        calories: 119,
        protein: 6,
        carbs: 0,
        fat: 10
      }, {
        name: "Sausage (Italian, 1 link)",
        calories: 268,
        protein: 17,
        carbs: 1,
        fat: 21
      }, {
        name: "Sausage (breakfast, 2 links)",
        calories: 180,
        protein: 10,
        carbs: 0,
        fat: 16
      }, {
        name: "Bratwurst (1 link)",
        calories: 283,
        protein: 12,
        carbs: 2,
        fat: 25
      }, {
        name: "Hot Dog (1 beef)",
        calories: 186,
        protein: 7,
        carbs: 2,
        fat: 17
      }, {
        name: "Hot Dog (1 turkey)",
        calories: 100,
        protein: 8,
        carbs: 3,
        fat: 6
      },
      // Lamb & Game
      {
        name: "Lamb Chops (4oz)",
        calories: 229,
        protein: 25,
        carbs: 0,
        fat: 14
      }, {
        name: "Lamb Leg (4oz)",
        calories: 183,
        protein: 26,
        carbs: 0,
        fat: 8
      }, {
        name: "Ground Lamb (4oz)",
        calories: 240,
        protein: 21,
        carbs: 0,
        fat: 17
      }, {
        name: "Bison/Buffalo (4oz)",
        calories: 143,
        protein: 28,
        carbs: 0,
        fat: 2
      }, {
        name: "Venison (4oz)",
        calories: 134,
        protein: 26,
        carbs: 0,
        fat: 3
      }, {
        name: "Elk (4oz)",
        calories: 124,
        protein: 26,
        carbs: 0,
        fat: 2
      },
      // Eggs
      {
        name: "Egg (1 large)",
        calories: 72,
        protein: 6,
        carbs: 0,
        fat: 5
      }, {
        name: "Eggs (2 large)",
        calories: 143,
        protein: 13,
        carbs: 1,
        fat: 10
      }, {
        name: "Eggs (3 large)",
        calories: 215,
        protein: 19,
        carbs: 1,
        fat: 15
      }, {
        name: "Egg Whites (4 large)",
        calories: 68,
        protein: 14,
        carbs: 1,
        fat: 0
      }, {
        name: "Scrambled Eggs (2 large)",
        calories: 203,
        protein: 13,
        carbs: 2,
        fat: 15
      }, {
        name: "Omelette (2 eggs + veggies)",
        calories: 180,
        protein: 14,
        carbs: 4,
        fat: 12
      }, {
        name: "Omelette (3 eggs + cheese)",
        calories: 340,
        protein: 24,
        carbs: 2,
        fat: 26
      }, {
        name: "Hard Boiled Egg (1 large)",
        calories: 78,
        protein: 6,
        carbs: 1,
        fat: 5
      }, {
        name: "Fried Egg (1 large)",
        calories: 90,
        protein: 6,
        carbs: 0,
        fat: 7
      }, {
        name: "Poached Egg (1 large)",
        calories: 72,
        protein: 6,
        carbs: 0,
        fat: 5
      }, {
        name: "Deviled Eggs (2 halves)",
        calories: 126,
        protein: 6,
        carbs: 1,
        fat: 10
      },
      // Dairy Proteins
      {
        name: "Greek Yogurt (plain, 6oz)",
        calories: 100,
        protein: 18,
        carbs: 6,
        fat: 0
      }, {
        name: "Greek Yogurt (vanilla, 6oz)",
        calories: 120,
        protein: 18,
        carbs: 12,
        fat: 1
      }, {
        name: "Cottage Cheese (4oz)",
        calories: 110,
        protein: 13,
        carbs: 3,
        fat: 5
      }, {
        name: "Cheese (cheddar, 1oz)",
        calories: 113,
        protein: 7,
        carbs: 1,
        fat: 9
      },
      // Plant-Based Proteins
      {
        name: "Protein Shake (whey, 1 scoop)",
        calories: 120,
        protein: 24,
        carbs: 3,
        fat: 1
      }, {
        name: "Protein Shake (casein, 1 scoop)",
        calories: 120,
        protein: 24,
        carbs: 3,
        fat: 1
      }, {
        name: "Protein Shake (plant, 1 scoop)",
        calories: 130,
        protein: 22,
        carbs: 6,
        fat: 2
      }, {
        name: "Protein Shake (mass gainer)",
        calories: 650,
        protein: 32,
        carbs: 110,
        fat: 6
      }, {
        name: "Tofu (firm, 4oz)",
        calories: 94,
        protein: 10,
        carbs: 2,
        fat: 6
      }, {
        name: "Tofu (silken, 4oz)",
        calories: 55,
        protein: 5,
        carbs: 2,
        fat: 3
      }, {
        name: "Tempeh (4oz)",
        calories: 193,
        protein: 19,
        carbs: 9,
        fat: 11
      }, {
        name: "Edamame (1 cup)",
        calories: 120,
        protein: 11,
        carbs: 10,
        fat: 5
      }, {
        name: "Seitan (4oz)",
        calories: 190,
        protein: 25,
        carbs: 8,
        fat: 2
      }, {
        name: "Beyond Burger (1 patty)",
        calories: 230,
        protein: 20,
        carbs: 5,
        fat: 14
      }, {
        name: "Impossible Burger (1 patty)",
        calories: 240,
        protein: 19,
        carbs: 9,
        fat: 14
      }, {
        name: "Veggie Burger (1 patty)",
        calories: 124,
        protein: 11,
        carbs: 10,
        fat: 4
      },
      // Beans & Legumes
      {
        name: "Lentils (1 cup cooked)",
        calories: 230,
        protein: 18,
        carbs: 40,
        fat: 1
      }, {
        name: "Black Beans (1 cup cooked)",
        calories: 227,
        protein: 15,
        carbs: 41,
        fat: 1
      }, {
        name: "Chickpeas (1 cup cooked)",
        calories: 269,
        protein: 15,
        carbs: 45,
        fat: 4
      }, {
        name: "Kidney Beans (1 cup cooked)",
        calories: 225,
        protein: 15,
        carbs: 40,
        fat: 1
      }, {
        name: "Pinto Beans (1 cup cooked)",
        calories: 245,
        protein: 15,
        carbs: 45,
        fat: 1
      }, {
        name: "Navy Beans (1 cup cooked)",
        calories: 255,
        protein: 15,
        carbs: 47,
        fat: 1
      }, {
        name: "Lima Beans (1 cup cooked)",
        calories: 216,
        protein: 15,
        carbs: 39,
        fat: 1
      }, {
        name: "Cannellini Beans (1 cup cooked)",
        calories: 225,
        protein: 15,
        carbs: 40,
        fat: 1
      }, {
        name: "Split Peas (1 cup cooked)",
        calories: 231,
        protein: 16,
        carbs: 41,
        fat: 1
      }, {
        name: "Black-Eyed Peas (1 cup cooked)",
        calories: 198,
        protein: 13,
        carbs: 36,
        fat: 1
      }, {
        name: "Hummus (2 tbsp)",
        calories: 70,
        protein: 2,
        carbs: 6,
        fat: 5
      }, {
        name: "Peanut Butter (2 tbsp)",
        calories: 188,
        protein: 8,
        carbs: 6,
        fat: 16
      }, {
        name: "Almond Butter (2 tbsp)",
        calories: 196,
        protein: 7,
        carbs: 6,
        fat: 18
      }, {
        name: "Cashew Butter (2 tbsp)",
        calories: 188,
        protein: 6,
        carbs: 9,
        fat: 16
      }, {
        name: "Sunflower Seed Butter (2 tbsp)",
        calories: 200,
        protein: 7,
        carbs: 7,
        fat: 16
      }, {
        name: "Almonds (1oz)",
        calories: 164,
        protein: 6,
        carbs: 6,
        fat: 14
      }, {
        name: "Walnuts (1oz)",
        calories: 185,
        protein: 4,
        carbs: 4,
        fat: 18
      }, {
        name: "Hemp Seeds (3 tbsp)",
        calories: 166,
        protein: 10,
        carbs: 3,
        fat: 15
      }, {
        name: "Chia Seeds (2 tbsp)",
        calories: 137,
        protein: 5,
        carbs: 12,
        fat: 9
      }, {
        name: "Flax Seeds (2 tbsp)",
        calories: 110,
        protein: 4,
        carbs: 6,
        fat: 9
      }, {
        name: "Pumpkin Seeds (1oz)",
        calories: 151,
        protein: 7,
        carbs: 5,
        fat: 13
      }, {
        name: "Sunflower Seeds (1oz)",
        calories: 165,
        protein: 6,
        carbs: 7,
        fat: 14
      }],
      carbs: [
      // Grains & Cereals
      {
        name: "Brown Rice (1 cup cooked)",
        calories: 216,
        protein: 5,
        carbs: 44,
        fat: 2
      }, {
        name: "White Rice (1 cup cooked)",
        calories: 205,
        protein: 4,
        carbs: 44,
        fat: 0
      }, {
        name: "Jasmine Rice (1 cup cooked)",
        calories: 205,
        protein: 4,
        carbs: 45,
        fat: 0
      }, {
        name: "Basmati Rice (1 cup cooked)",
        calories: 210,
        protein: 4,
        carbs: 46,
        fat: 0
      }, {
        name: "Wild Rice (1 cup cooked)",
        calories: 166,
        protein: 7,
        carbs: 35,
        fat: 1
      }, {
        name: "Fried Rice (1 cup)",
        calories: 238,
        protein: 6,
        carbs: 34,
        fat: 9
      }, {
        name: "Quinoa (1 cup cooked)",
        calories: 222,
        protein: 8,
        carbs: 39,
        fat: 4
      }, {
        name: "Oatmeal (1 cup cooked)",
        calories: 147,
        protein: 5,
        carbs: 27,
        fat: 3
      }, {
        name: "Steel Cut Oats (1 cup cooked)",
        calories: 150,
        protein: 5,
        carbs: 27,
        fat: 3
      }, {
        name: "Overnight Oats (1 cup)",
        calories: 210,
        protein: 8,
        carbs: 36,
        fat: 5
      }, {
        name: "Whole Wheat Pasta (1 cup cooked)",
        calories: 174,
        protein: 7,
        carbs: 37,
        fat: 1
      }, {
        name: "White Pasta (1 cup cooked)",
        calories: 157,
        protein: 6,
        carbs: 31,
        fat: 1
      }, {
        name: "Penne Pasta (1 cup cooked)",
        calories: 157,
        protein: 6,
        carbs: 31,
        fat: 1
      }, {
        name: "Spaghetti (1 cup cooked)",
        calories: 157,
        protein: 6,
        carbs: 31,
        fat: 1
      }, {
        name: "Egg Noodles (1 cup cooked)",
        calories: 221,
        protein: 7,
        carbs: 40,
        fat: 3
      }, {
        name: "Rice Noodles (1 cup cooked)",
        calories: 192,
        protein: 2,
        carbs: 44,
        fat: 0
      }, {
        name: "Ramen Noodles (1 cup cooked)",
        calories: 188,
        protein: 5,
        carbs: 27,
        fat: 7
      }, {
        name: "Udon Noodles (1 cup cooked)",
        calories: 190,
        protein: 6,
        carbs: 40,
        fat: 1
      }, {
        name: "Soba Noodles (1 cup cooked)",
        calories: 113,
        protein: 6,
        carbs: 24,
        fat: 0
      }, {
        name: "Barley (1 cup cooked)",
        calories: 193,
        protein: 4,
        carbs: 44,
        fat: 1
      }, {
        name: "Farro (1 cup cooked)",
        calories: 185,
        protein: 7,
        carbs: 37,
        fat: 1
      }, {
        name: "Couscous (1 cup cooked)",
        calories: 176,
        protein: 6,
        carbs: 36,
        fat: 0
      }, {
        name: "Bulgur (1 cup cooked)",
        calories: 151,
        protein: 6,
        carbs: 34,
        fat: 0
      }, {
        name: "Buckwheat (1 cup cooked)",
        calories: 155,
        protein: 6,
        carbs: 33,
        fat: 1
      }, {
        name: "Millet (1 cup cooked)",
        calories: 207,
        protein: 6,
        carbs: 41,
        fat: 2
      }, {
        name: "Amaranth (1 cup cooked)",
        calories: 251,
        protein: 9,
        carbs: 46,
        fat: 4
      }, {
        name: "Polenta (1 cup cooked)",
        calories: 145,
        protein: 3,
        carbs: 32,
        fat: 1
      }, {
        name: "Grits (1 cup cooked)",
        calories: 143,
        protein: 3,
        carbs: 31,
        fat: 1
      },
      // Bread & Bakery
      {
        name: "Whole Wheat Bread (2 slices)",
        calories: 140,
        protein: 6,
        carbs: 24,
        fat: 2
      }, {
        name: "White Bread (2 slices)",
        calories: 133,
        protein: 4,
        carbs: 26,
        fat: 1
      }, {
        name: "Sourdough Bread (2 slices)",
        calories: 154,
        protein: 6,
        carbs: 30,
        fat: 1
      }, {
        name: "Rye Bread (2 slices)",
        calories: 166,
        protein: 6,
        carbs: 31,
        fat: 2
      }, {
        name: "Pumpernickel Bread (2 slices)",
        calories: 160,
        protein: 6,
        carbs: 30,
        fat: 2
      }, {
        name: "Multigrain Bread (2 slices)",
        calories: 138,
        protein: 6,
        carbs: 24,
        fat: 2
      }, {
        name: "Ciabatta Bread (1 roll)",
        calories: 210,
        protein: 7,
        carbs: 40,
        fat: 3
      }, {
        name: "Focaccia Bread (1 piece)",
        calories: 230,
        protein: 6,
        carbs: 30,
        fat: 10
      }, {
        name: "Naan Bread (1 piece)",
        calories: 262,
        protein: 9,
        carbs: 45,
        fat: 5
      }, {
        name: "Baguette (4 inches)",
        calories: 185,
        protein: 7,
        carbs: 36,
        fat: 1
      }, {
        name: "Croissant (medium)",
        calories: 231,
        protein: 5,
        carbs: 26,
        fat: 12
      }, {
        name: "Dinner Roll (1 roll)",
        calories: 87,
        protein: 3,
        carbs: 15,
        fat: 2
      }, {
        name: "Brioche Bun (1 bun)",
        calories: 240,
        protein: 7,
        carbs: 34,
        fat: 9
      }, {
        name: "Hamburger Bun (1 bun)",
        calories: 140,
        protein: 4,
        carbs: 26,
        fat: 2
      }, {
        name: "Hot Dog Bun (1 bun)",
        calories: 120,
        protein: 4,
        carbs: 22,
        fat: 2
      }, {
        name: "Bagel (plain, medium)",
        calories: 289,
        protein: 11,
        carbs: 56,
        fat: 2
      }, {
        name: "Bagel (everything, medium)",
        calories: 300,
        protein: 12,
        carbs: 56,
        fat: 3
      }, {
        name: "English Muffin",
        calories: 134,
        protein: 5,
        carbs: 27,
        fat: 1
      }, {
        name: "Pita Bread (small)",
        calories: 165,
        protein: 6,
        carbs: 33,
        fat: 1
      }, {
        name: "Pita Bread (whole wheat)",
        calories: 170,
        protein: 7,
        carbs: 35,
        fat: 2
      }, {
        name: "Tortilla (large flour)",
        calories: 210,
        protein: 6,
        carbs: 36,
        fat: 5
      }, {
        name: "Tortilla (medium flour)",
        calories: 146,
        protein: 4,
        carbs: 24,
        fat: 4
      }, {
        name: "Tortilla (medium corn)",
        calories: 52,
        protein: 1,
        carbs: 11,
        fat: 1
      }, {
        name: "Tortilla (low carb)",
        calories: 60,
        protein: 5,
        carbs: 11,
        fat: 2
      }, {
        name: "Wrap (spinach, large)",
        calories: 180,
        protein: 6,
        carbs: 32,
        fat: 4
      }, {
        name: "Flatbread (1 piece)",
        calories: 180,
        protein: 6,
        carbs: 30,
        fat: 4
      }, {
        name: "Cornbread (1 piece)",
        calories: 173,
        protein: 4,
        carbs: 29,
        fat: 5
      }, {
        name: "Biscuit (medium)",
        calories: 166,
        protein: 3,
        carbs: 22,
        fat: 7
      },
      // Potatoes & Root Vegetables
      {
        name: "Sweet Potato (medium)",
        calories: 103,
        protein: 2,
        carbs: 24,
        fat: 0
      }, {
        name: "White Potato (medium)",
        calories: 161,
        protein: 4,
        carbs: 37,
        fat: 0
      }, {
        name: "Baked Potato (medium)",
        calories: 161,
        protein: 4,
        carbs: 37,
        fat: 0
      }, {
        name: "Baked Potato with Butter",
        calories: 250,
        protein: 5,
        carbs: 37,
        fat: 10
      }, {
        name: "Mashed Potatoes (1 cup)",
        calories: 237,
        protein: 4,
        carbs: 35,
        fat: 9
      }, {
        name: "French Fries (medium serving)",
        calories: 365,
        protein: 4,
        carbs: 44,
        fat: 17
      }, {
        name: "Hash Browns (1 cup)",
        calories: 326,
        protein: 3,
        carbs: 35,
        fat: 20
      }, {
        name: "Tater Tots (10 pieces)",
        calories: 170,
        protein: 2,
        carbs: 20,
        fat: 9
      }, {
        name: "Potato Salad (1 cup)",
        calories: 358,
        protein: 7,
        carbs: 28,
        fat: 21
      }, {
        name: "Corn (1 cup)",
        calories: 132,
        protein: 5,
        carbs: 29,
        fat: 2
      }, {
        name: "Corn on the Cob (1 ear)",
        calories: 90,
        protein: 3,
        carbs: 19,
        fat: 1
      }, {
        name: "Peas (1 cup cooked)",
        calories: 134,
        protein: 9,
        carbs: 25,
        fat: 1
      }, {
        name: "Yams (1 cup cooked)",
        calories: 158,
        protein: 2,
        carbs: 37,
        fat: 0
      }, {
        name: "Plantain (1 medium)",
        calories: 220,
        protein: 2,
        carbs: 57,
        fat: 1
      }, {
        name: "Taro (1 cup cooked)",
        calories: 187,
        protein: 1,
        carbs: 46,
        fat: 0
      }, {
        name: "Parsnips (1 cup cooked)",
        calories: 111,
        protein: 2,
        carbs: 27,
        fat: 0
      }, {
        name: "Turnips (1 cup cooked)",
        calories: 34,
        protein: 1,
        carbs: 8,
        fat: 0
      }, {
        name: "Rutabaga (1 cup cooked)",
        calories: 51,
        protein: 2,
        carbs: 12,
        fat: 0
      }],
      vegetables: [{
        name: "Broccoli (1 cup)",
        calories: 31,
        protein: 3,
        carbs: 6,
        fat: 0
      }, {
        name: "Broccoli (steamed, 1 cup)",
        calories: 55,
        protein: 4,
        carbs: 11,
        fat: 1
      }, {
        name: "Broccolini (1 cup)",
        calories: 35,
        protein: 3,
        carbs: 6,
        fat: 0
      }, {
        name: "Spinach (raw, 2 cups)",
        calories: 14,
        protein: 2,
        carbs: 2,
        fat: 0
      }, {
        name: "Spinach (cooked, 1 cup)",
        calories: 41,
        protein: 5,
        carbs: 7,
        fat: 0
      }, {
        name: "Kale (raw, 2 cups)",
        calories: 66,
        protein: 5,
        carbs: 11,
        fat: 1
      }, {
        name: "Kale (cooked, 1 cup)",
        calories: 36,
        protein: 2,
        carbs: 7,
        fat: 1
      }, {
        name: "Mixed Greens Salad (2 cups)",
        calories: 20,
        protein: 2,
        carbs: 4,
        fat: 0
      }, {
        name: "Romaine Lettuce (2 cups)",
        calories: 16,
        protein: 1,
        carbs: 3,
        fat: 0
      }, {
        name: "Iceberg Lettuce (2 cups)",
        calories: 14,
        protein: 1,
        carbs: 3,
        fat: 0
      }, {
        name: "Carrots (1 cup raw)",
        calories: 50,
        protein: 1,
        carbs: 12,
        fat: 0
      }, {
        name: "Carrots (1 cup cooked)",
        calories: 55,
        protein: 1,
        carbs: 13,
        fat: 0
      }, {
        name: "Baby Carrots (10 pieces)",
        calories: 35,
        protein: 1,
        carbs: 8,
        fat: 0
      }, {
        name: "Bell Pepper (red, 1 cup)",
        calories: 31,
        protein: 1,
        carbs: 7,
        fat: 0
      }, {
        name: "Bell Pepper (green, 1 cup)",
        calories: 24,
        protein: 1,
        carbs: 6,
        fat: 0
      }, {
        name: "Jalapeño (1 pepper)",
        calories: 4,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Zucchini (1 cup)",
        calories: 20,
        protein: 1,
        carbs: 4,
        fat: 1
      }, {
        name: "Yellow Squash (1 cup)",
        calories: 20,
        protein: 1,
        carbs: 4,
        fat: 0
      }, {
        name: "Spaghetti Squash (1 cup)",
        calories: 42,
        protein: 1,
        carbs: 10,
        fat: 0
      }, {
        name: "Acorn Squash (1 cup)",
        calories: 56,
        protein: 1,
        carbs: 15,
        fat: 0
      }, {
        name: "Butternut Squash (1 cup)",
        calories: 82,
        protein: 2,
        carbs: 22,
        fat: 0
      }, {
        name: "Tomatoes (1 medium)",
        calories: 22,
        protein: 1,
        carbs: 5,
        fat: 0
      }, {
        name: "Cherry Tomatoes (1 cup)",
        calories: 27,
        protein: 1,
        carbs: 6,
        fat: 0
      }, {
        name: "Sun-Dried Tomatoes (1oz)",
        calories: 74,
        protein: 4,
        carbs: 16,
        fat: 1
      }, {
        name: "Cucumber (1 cup)",
        calories: 16,
        protein: 1,
        carbs: 4,
        fat: 0
      }, {
        name: "Cauliflower (1 cup raw)",
        calories: 25,
        protein: 2,
        carbs: 5,
        fat: 0
      }, {
        name: "Cauliflower Rice (1 cup)",
        calories: 25,
        protein: 2,
        carbs: 5,
        fat: 0
      }, {
        name: "Brussels Sprouts (1 cup)",
        calories: 65,
        protein: 4,
        carbs: 13,
        fat: 1
      }, {
        name: "Asparagus (1 cup)",
        calories: 27,
        protein: 3,
        carbs: 5,
        fat: 0
      }, {
        name: "Green Beans (1 cup)",
        calories: 34,
        protein: 2,
        carbs: 8,
        fat: 0
      }, {
        name: "Snap Peas (1 cup)",
        calories: 41,
        protein: 3,
        carbs: 7,
        fat: 0
      }, {
        name: "Snow Peas (1 cup)",
        calories: 26,
        protein: 2,
        carbs: 5,
        fat: 0
      }, {
        name: "Mushrooms (white, 1 cup)",
        calories: 21,
        protein: 2,
        carbs: 3,
        fat: 0
      }, {
        name: "Mushrooms (portobello, 1 cap)",
        calories: 18,
        protein: 2,
        carbs: 3,
        fat: 0
      }, {
        name: "Mushrooms (shiitake, 1 cup)",
        calories: 34,
        protein: 1,
        carbs: 7,
        fat: 0
      }, {
        name: "Mushrooms (cremini, 1 cup)",
        calories: 27,
        protein: 3,
        carbs: 4,
        fat: 0
      }, {
        name: "Onion (1 medium)",
        calories: 44,
        protein: 1,
        carbs: 10,
        fat: 0
      }, {
        name: "Red Onion (1 medium)",
        calories: 44,
        protein: 1,
        carbs: 10,
        fat: 0
      }, {
        name: "Green Onions (1/4 cup)",
        calories: 8,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Shallots (1 tbsp)",
        calories: 7,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Leek (1 medium)",
        calories: 54,
        protein: 1,
        carbs: 13,
        fat: 0
      }, {
        name: "Garlic (1 clove)",
        calories: 4,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Celery (1 cup)",
        calories: 16,
        protein: 1,
        carbs: 3,
        fat: 0
      }, {
        name: "Beets (1 cup cooked)",
        calories: 75,
        protein: 3,
        carbs: 17,
        fat: 0
      }, {
        name: "Eggplant (1 cup)",
        calories: 35,
        protein: 1,
        carbs: 8,
        fat: 0
      }, {
        name: "Artichoke (medium)",
        calories: 120,
        protein: 7,
        carbs: 27,
        fat: 0
      }, {
        name: "Artichoke Hearts (1/2 cup)",
        calories: 45,
        protein: 2,
        carbs: 10,
        fat: 0
      }, {
        name: "Arugula (2 cups)",
        calories: 10,
        protein: 1,
        carbs: 2,
        fat: 0
      }, {
        name: "Bok Choy (1 cup)",
        calories: 13,
        protein: 2,
        carbs: 2,
        fat: 0
      }, {
        name: "Collard Greens (1 cup cooked)",
        calories: 36,
        protein: 3,
        carbs: 7,
        fat: 1
      }, {
        name: "Swiss Chard (1 cup cooked)",
        calories: 35,
        protein: 3,
        carbs: 7,
        fat: 0
      }, {
        name: "Watercress (1 cup)",
        calories: 4,
        protein: 1,
        carbs: 0,
        fat: 0
      }, {
        name: "Cabbage (green, 1 cup)",
        calories: 22,
        protein: 1,
        carbs: 5,
        fat: 0
      }, {
        name: "Cabbage (red, 1 cup)",
        calories: 28,
        protein: 1,
        carbs: 7,
        fat: 0
      }, {
        name: "Coleslaw (1 cup)",
        calories: 83,
        protein: 1,
        carbs: 15,
        fat: 3
      }, {
        name: "Sauerkraut (1 cup)",
        calories: 27,
        protein: 1,
        carbs: 6,
        fat: 0
      }, {
        name: "Kimchi (1 cup)",
        calories: 23,
        protein: 2,
        carbs: 4,
        fat: 1
      }, {
        name: "Radishes (1 cup)",
        calories: 19,
        protein: 1,
        carbs: 4,
        fat: 0
      }, {
        name: "Daikon Radish (1 cup)",
        calories: 21,
        protein: 1,
        carbs: 5,
        fat: 0
      }, {
        name: "Jicama (1 cup)",
        calories: 46,
        protein: 1,
        carbs: 11,
        fat: 0
      }, {
        name: "Okra (1 cup)",
        calories: 33,
        protein: 2,
        carbs: 7,
        fat: 0
      }, {
        name: "Bamboo Shoots (1 cup)",
        calories: 14,
        protein: 2,
        carbs: 2,
        fat: 0
      }, {
        name: "Bean Sprouts (1 cup)",
        calories: 31,
        protein: 3,
        carbs: 6,
        fat: 0
      }, {
        name: "Water Chestnuts (1/2 cup)",
        calories: 60,
        protein: 1,
        carbs: 15,
        fat: 0
      }, {
        name: "Hearts of Palm (1 cup)",
        calories: 41,
        protein: 4,
        carbs: 7,
        fat: 1
      }, {
        name: "Seaweed/Nori (1 sheet)",
        calories: 5,
        protein: 1,
        carbs: 1,
        fat: 0
      }, {
        name: "Corn (canned, 1 cup)",
        calories: 133,
        protein: 4,
        carbs: 30,
        fat: 2
      }],
      fruits: [{
        name: "Avocado (medium)",
        calories: 234,
        protein: 3,
        carbs: 12,
        fat: 21
      }, {
        name: "Avocado (1/2 medium)",
        calories: 117,
        protein: 1,
        carbs: 6,
        fat: 11
      }, {
        name: "Apple (medium)",
        calories: 95,
        protein: 0,
        carbs: 25,
        fat: 0
      }, {
        name: "Apple (small)",
        calories: 77,
        protein: 0,
        carbs: 21,
        fat: 0
      }, {
        name: "Banana (medium)",
        calories: 105,
        protein: 1,
        carbs: 27,
        fat: 0
      }, {
        name: "Banana (small)",
        calories: 72,
        protein: 1,
        carbs: 19,
        fat: 0
      }, {
        name: "Orange (medium)",
        calories: 62,
        protein: 1,
        carbs: 15,
        fat: 0
      }, {
        name: "Clementine",
        calories: 35,
        protein: 1,
        carbs: 9,
        fat: 0
      }, {
        name: "Tangerine",
        calories: 47,
        protein: 1,
        carbs: 12,
        fat: 0
      }, {
        name: "Grapefruit (half)",
        calories: 52,
        protein: 1,
        carbs: 13,
        fat: 0
      }, {
        name: "Grapes (red, 1 cup)",
        calories: 104,
        protein: 1,
        carbs: 27,
        fat: 0
      }, {
        name: "Grapes (green, 1 cup)",
        calories: 104,
        protein: 1,
        carbs: 27,
        fat: 0
      }, {
        name: "Strawberries (1 cup)",
        calories: 49,
        protein: 1,
        carbs: 12,
        fat: 0
      }, {
        name: "Blueberries (1 cup)",
        calories: 84,
        protein: 1,
        carbs: 21,
        fat: 0
      }, {
        name: "Raspberries (1 cup)",
        calories: 64,
        protein: 1,
        carbs: 15,
        fat: 0
      }, {
        name: "Blackberries (1 cup)",
        calories: 62,
        protein: 2,
        carbs: 14,
        fat: 1
      }, {
        name: "Cranberries (1 cup raw)",
        calories: 46,
        protein: 0,
        carbs: 12,
        fat: 0
      }, {
        name: "Mixed Berries (1 cup)",
        calories: 70,
        protein: 1,
        carbs: 17,
        fat: 0
      }, {
        name: "Pineapple (1 cup)",
        calories: 82,
        protein: 1,
        carbs: 22,
        fat: 0
      }, {
        name: "Mango (1 cup)",
        calories: 99,
        protein: 1,
        carbs: 25,
        fat: 1
      }, {
        name: "Papaya (1 cup)",
        calories: 55,
        protein: 1,
        carbs: 14,
        fat: 0
      }, {
        name: "Guava (1 medium)",
        calories: 37,
        protein: 1,
        carbs: 8,
        fat: 1
      }, {
        name: "Passion Fruit (1 medium)",
        calories: 17,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Dragon Fruit (1 medium)",
        calories: 60,
        protein: 1,
        carbs: 13,
        fat: 0
      }, {
        name: "Star Fruit (1 medium)",
        calories: 28,
        protein: 1,
        carbs: 6,
        fat: 0
      }, {
        name: "Lychee (10 pieces)",
        calories: 66,
        protein: 1,
        carbs: 17,
        fat: 0
      }, {
        name: "Jackfruit (1 cup)",
        calories: 143,
        protein: 3,
        carbs: 35,
        fat: 1
      }, {
        name: "Kiwi",
        calories: 42,
        protein: 1,
        carbs: 10,
        fat: 0
      }, {
        name: "Pear (medium)",
        calories: 101,
        protein: 1,
        carbs: 27,
        fat: 0
      }, {
        name: "Peach (medium)",
        calories: 59,
        protein: 1,
        carbs: 14,
        fat: 0
      }, {
        name: "Nectarine (medium)",
        calories: 62,
        protein: 2,
        carbs: 15,
        fat: 0
      }, {
        name: "Plum (medium)",
        calories: 30,
        protein: 0,
        carbs: 8,
        fat: 0
      }, {
        name: "Apricot (1 medium)",
        calories: 17,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Cherries (1 cup)",
        calories: 87,
        protein: 1,
        carbs: 22,
        fat: 0
      }, {
        name: "Watermelon (1 cup)",
        calories: 46,
        protein: 1,
        carbs: 12,
        fat: 0
      }, {
        name: "Cantaloupe (1 cup)",
        calories: 54,
        protein: 1,
        carbs: 13,
        fat: 0
      }, {
        name: "Honeydew (1 cup)",
        calories: 64,
        protein: 1,
        carbs: 16,
        fat: 0
      }, {
        name: "Coconut (fresh, 1oz)",
        calories: 99,
        protein: 1,
        carbs: 4,
        fat: 9
      }, {
        name: "Coconut (dried, 1oz)",
        calories: 185,
        protein: 2,
        carbs: 7,
        fat: 18
      }, {
        name: "Pomegranate (seeds, 1/2 cup)",
        calories: 72,
        protein: 1,
        carbs: 16,
        fat: 1
      }, {
        name: "Fig (fresh, 1 medium)",
        calories: 37,
        protein: 0,
        carbs: 10,
        fat: 0
      }, {
        name: "Fig (dried, 3 pieces)",
        calories: 95,
        protein: 1,
        carbs: 23,
        fat: 0
      }, {
        name: "Dates (Medjool, 1 date)",
        calories: 66,
        protein: 0,
        carbs: 18,
        fat: 0
      }, {
        name: "Raisins (1/4 cup)",
        calories: 108,
        protein: 1,
        carbs: 29,
        fat: 0
      }, {
        name: "Dried Cranberries (1/4 cup)",
        calories: 123,
        protein: 0,
        carbs: 33,
        fat: 1
      }, {
        name: "Dried Apricots (1/4 cup)",
        calories: 78,
        protein: 1,
        carbs: 20,
        fat: 0
      }, {
        name: "Dried Mango (1/4 cup)",
        calories: 120,
        protein: 1,
        carbs: 28,
        fat: 0
      }, {
        name: "Prunes (5 pieces)",
        calories: 114,
        protein: 1,
        carbs: 30,
        fat: 0
      }, {
        name: "Applesauce (1/2 cup)",
        calories: 51,
        protein: 0,
        carbs: 14,
        fat: 0
      }, {
        name: "Fruit Salad (1 cup)",
        calories: 90,
        protein: 1,
        carbs: 23,
        fat: 0
      }, {
        name: "Lemon",
        calories: 17,
        protein: 1,
        carbs: 5,
        fat: 0
      }, {
        name: "Lime",
        calories: 20,
        protein: 0,
        carbs: 7,
        fat: 0
      }, {
        name: "Persimmon (1 medium)",
        calories: 118,
        protein: 1,
        carbs: 31,
        fat: 0
      }],
      dairy: [
      // Milk
      {
        name: "Milk (whole, 8oz)",
        calories: 146,
        protein: 8,
        carbs: 11,
        fat: 8
      }, {
        name: "Milk (2% fat, 8oz)",
        calories: 122,
        protein: 8,
        carbs: 12,
        fat: 5
      }, {
        name: "Milk (1% fat, 8oz)",
        calories: 102,
        protein: 8,
        carbs: 12,
        fat: 2
      }, {
        name: "Milk (skim, 8oz)",
        calories: 83,
        protein: 8,
        carbs: 12,
        fat: 0
      }, {
        name: "Chocolate Milk (8oz)",
        calories: 208,
        protein: 8,
        carbs: 26,
        fat: 8
      }, {
        name: "Buttermilk (8oz)",
        calories: 98,
        protein: 8,
        carbs: 12,
        fat: 3
      }, {
        name: "Heavy Cream (2 tbsp)",
        calories: 101,
        protein: 1,
        carbs: 1,
        fat: 11
      }, {
        name: "Half and Half (2 tbsp)",
        calories: 40,
        protein: 1,
        carbs: 1,
        fat: 4
      }, {
        name: "Whipped Cream (2 tbsp)",
        calories: 15,
        protein: 0,
        carbs: 1,
        fat: 1
      }, {
        name: "Evaporated Milk (2 tbsp)",
        calories: 40,
        protein: 2,
        carbs: 3,
        fat: 2
      }, {
        name: "Condensed Milk (2 tbsp)",
        calories: 130,
        protein: 3,
        carbs: 22,
        fat: 3
      },
      // Plant Milks
      {
        name: "Almond Milk (unsweetened, 8oz)",
        calories: 30,
        protein: 1,
        carbs: 2,
        fat: 3
      }, {
        name: "Almond Milk (sweetened, 8oz)",
        calories: 60,
        protein: 1,
        carbs: 8,
        fat: 3
      }, {
        name: "Soy Milk (unsweetened, 8oz)",
        calories: 80,
        protein: 7,
        carbs: 4,
        fat: 4
      }, {
        name: "Oat Milk (unsweetened, 8oz)",
        calories: 50,
        protein: 0,
        carbs: 9,
        fat: 2
      }, {
        name: "Oat Milk (original, 8oz)",
        calories: 120,
        protein: 3,
        carbs: 16,
        fat: 5
      }, {
        name: "Coconut Milk (8oz)",
        calories: 45,
        protein: 0,
        carbs: 3,
        fat: 5
      }, {
        name: "Coconut Milk (canned, 1/4 cup)",
        calories: 120,
        protein: 1,
        carbs: 2,
        fat: 12
      }, {
        name: "Cashew Milk (unsweetened, 8oz)",
        calories: 25,
        protein: 1,
        carbs: 1,
        fat: 2
      }, {
        name: "Rice Milk (8oz)",
        calories: 115,
        protein: 1,
        carbs: 22,
        fat: 2
      }, {
        name: "Pea Milk (8oz)",
        calories: 70,
        protein: 8,
        carbs: 0,
        fat: 5
      },
      // Cheese
      {
        name: "Cheddar Cheese (1oz)",
        calories: 113,
        protein: 7,
        carbs: 1,
        fat: 9
      }, {
        name: "Mozzarella Cheese (1oz)",
        calories: 85,
        protein: 6,
        carbs: 1,
        fat: 6
      }, {
        name: "Fresh Mozzarella (1oz)",
        calories: 70,
        protein: 5,
        carbs: 1,
        fat: 5
      }, {
        name: "Swiss Cheese (1oz)",
        calories: 111,
        protein: 8,
        carbs: 1,
        fat: 9
      }, {
        name: "Parmesan Cheese (1oz)",
        calories: 111,
        protein: 10,
        carbs: 1,
        fat: 7
      }, {
        name: "Parmesan (grated, 2 tbsp)",
        calories: 42,
        protein: 4,
        carbs: 0,
        fat: 3
      }, {
        name: "Brie Cheese (1oz)",
        calories: 95,
        protein: 6,
        carbs: 0,
        fat: 8
      }, {
        name: "Gouda Cheese (1oz)",
        calories: 101,
        protein: 7,
        carbs: 1,
        fat: 8
      }, {
        name: "Blue Cheese (1oz)",
        calories: 100,
        protein: 6,
        carbs: 1,
        fat: 8
      }, {
        name: "Feta Cheese (1oz)",
        calories: 75,
        protein: 4,
        carbs: 1,
        fat: 6
      }, {
        name: "Goat Cheese (1oz)",
        calories: 75,
        protein: 5,
        carbs: 0,
        fat: 6
      }, {
        name: "Provolone Cheese (1oz)",
        calories: 98,
        protein: 7,
        carbs: 1,
        fat: 7
      }, {
        name: "Pepper Jack Cheese (1oz)",
        calories: 110,
        protein: 7,
        carbs: 0,
        fat: 9
      }, {
        name: "Colby Jack Cheese (1oz)",
        calories: 110,
        protein: 7,
        carbs: 1,
        fat: 9
      }, {
        name: "Monterey Jack Cheese (1oz)",
        calories: 106,
        protein: 7,
        carbs: 0,
        fat: 9
      }, {
        name: "American Cheese (1 slice)",
        calories: 66,
        protein: 4,
        carbs: 1,
        fat: 5
      }, {
        name: "Ricotta Cheese (1/4 cup)",
        calories: 107,
        protein: 7,
        carbs: 2,
        fat: 8
      }, {
        name: "Ricotta (part-skim, 1/4 cup)",
        calories: 86,
        protein: 7,
        carbs: 3,
        fat: 5
      }, {
        name: "Mascarpone Cheese (2 tbsp)",
        calories: 120,
        protein: 2,
        carbs: 1,
        fat: 13
      }, {
        name: "Cream Cheese (2 tbsp)",
        calories: 99,
        protein: 2,
        carbs: 1,
        fat: 10
      }, {
        name: "Cream Cheese (lite, 2 tbsp)",
        calories: 60,
        protein: 3,
        carbs: 2,
        fat: 5
      }, {
        name: "Queso Fresco (1oz)",
        calories: 80,
        protein: 5,
        carbs: 1,
        fat: 6
      }, {
        name: "Cotija Cheese (1oz)",
        calories: 100,
        protein: 6,
        carbs: 1,
        fat: 8
      }, {
        name: "Paneer (1oz)",
        calories: 83,
        protein: 6,
        carbs: 1,
        fat: 6
      }, {
        name: "Halloumi (1oz)",
        calories: 90,
        protein: 7,
        carbs: 1,
        fat: 7
      },
      // Yogurt
      {
        name: "Greek Yogurt (plain, 6oz)",
        calories: 100,
        protein: 18,
        carbs: 6,
        fat: 0
      }, {
        name: "Greek Yogurt (whole milk, 6oz)",
        calories: 150,
        protein: 15,
        carbs: 7,
        fat: 6
      }, {
        name: "Greek Yogurt (flavored, 6oz)",
        calories: 140,
        protein: 15,
        carbs: 16,
        fat: 2
      }, {
        name: "Regular Yogurt (plain, 6oz)",
        calories: 100,
        protein: 4,
        carbs: 7,
        fat: 5
      }, {
        name: "Yogurt (fruit on bottom, 6oz)",
        calories: 150,
        protein: 6,
        carbs: 25,
        fat: 2
      }, {
        name: "Skyr (Icelandic yogurt, 6oz)",
        calories: 100,
        protein: 17,
        carbs: 7,
        fat: 0
      }, {
        name: "Kefir (8oz)",
        calories: 104,
        protein: 9,
        carbs: 12,
        fat: 2
      },
      // Other Dairy
      {
        name: "Ice Cream (vanilla, 1/2 cup)",
        calories: 137,
        protein: 2,
        carbs: 16,
        fat: 7
      }, {
        name: "Ice Cream (chocolate, 1/2 cup)",
        calories: 143,
        protein: 3,
        carbs: 19,
        fat: 7
      }, {
        name: "Frozen Yogurt (1/2 cup)",
        calories: 110,
        protein: 3,
        carbs: 20,
        fat: 2
      }, {
        name: "Gelato (1/2 cup)",
        calories: 160,
        protein: 3,
        carbs: 22,
        fat: 7
      }, {
        name: "Sorbet (1/2 cup)",
        calories: 130,
        protein: 0,
        carbs: 32,
        fat: 0
      }, {
        name: "Cottage Cheese (full fat, 4oz)",
        calories: 110,
        protein: 13,
        carbs: 3,
        fat: 5
      }, {
        name: "Cottage Cheese (low-fat, 4oz)",
        calories: 90,
        protein: 14,
        carbs: 3,
        fat: 2
      }, {
        name: "Sour Cream (2 tbsp)",
        calories: 46,
        protein: 1,
        carbs: 1,
        fat: 5
      }, {
        name: "Sour Cream (light, 2 tbsp)",
        calories: 35,
        protein: 1,
        carbs: 2,
        fat: 3
      }, {
        name: "Butter (1 tbsp)",
        calories: 102,
        protein: 0,
        carbs: 0,
        fat: 12
      }, {
        name: "Ghee (1 tbsp)",
        calories: 120,
        protein: 0,
        carbs: 0,
        fat: 14
      }],
      snacks: [
      // Nuts
      {
        name: "Almonds (1oz)",
        calories: 164,
        protein: 6,
        carbs: 6,
        fat: 14
      }, {
        name: "Walnuts (1oz)",
        calories: 185,
        protein: 4,
        carbs: 4,
        fat: 18
      }, {
        name: "Peanuts (1oz)",
        calories: 161,
        protein: 7,
        carbs: 6,
        fat: 14
      }, {
        name: "Cashews (1oz)",
        calories: 157,
        protein: 5,
        carbs: 9,
        fat: 12
      }, {
        name: "Pistachios (1oz)",
        calories: 156,
        protein: 6,
        carbs: 8,
        fat: 12
      }, {
        name: "Brazil Nuts (1oz)",
        calories: 186,
        protein: 4,
        carbs: 3,
        fat: 19
      }, {
        name: "Macadamia Nuts (1oz)",
        calories: 204,
        protein: 2,
        carbs: 4,
        fat: 22
      }, {
        name: "Pecans (1oz)",
        calories: 196,
        protein: 3,
        carbs: 4,
        fat: 20
      }, {
        name: "Hazelnuts (1oz)",
        calories: 178,
        protein: 4,
        carbs: 5,
        fat: 17
      }, {
        name: "Pine Nuts (1oz)",
        calories: 191,
        protein: 4,
        carbs: 4,
        fat: 19
      }, {
        name: "Mixed Nuts (1oz)",
        calories: 175,
        protein: 5,
        carbs: 6,
        fat: 16
      }, {
        name: "Coconut Chips (1oz)",
        calories: 185,
        protein: 2,
        carbs: 7,
        fat: 18
      },
      // Nut Butter Combos
      {
        name: "Apple with Peanut Butter",
        calories: 200,
        protein: 5,
        carbs: 25,
        fat: 10
      }, {
        name: "Banana with Almond Butter",
        calories: 190,
        protein: 4,
        carbs: 27,
        fat: 8
      }, {
        name: "Celery with Peanut Butter",
        calories: 120,
        protein: 5,
        carbs: 5,
        fat: 9
      }, {
        name: "Greek Yogurt with Berries",
        calories: 150,
        protein: 20,
        carbs: 15,
        fat: 2
      }, {
        name: "Greek Yogurt with Granola",
        calories: 220,
        protein: 22,
        carbs: 22,
        fat: 5
      },
      // Bars
      {
        name: "Protein Bar",
        calories: 200,
        protein: 20,
        carbs: 20,
        fat: 5
      }, {
        name: "Energy Bar (Clif)",
        calories: 250,
        protein: 10,
        carbs: 44,
        fat: 6
      }, {
        name: "RX Bar",
        calories: 210,
        protein: 12,
        carbs: 24,
        fat: 9
      }, {
        name: "Kind Bar",
        calories: 200,
        protein: 6,
        carbs: 22,
        fat: 12
      }, {
        name: "Larabar",
        calories: 220,
        protein: 5,
        carbs: 28,
        fat: 11
      }, {
        name: "Nature Valley Granola Bar",
        calories: 190,
        protein: 3,
        carbs: 29,
        fat: 7
      }, {
        name: "Quest Bar",
        calories: 190,
        protein: 21,
        carbs: 21,
        fat: 7
      }, {
        name: "Built Bar",
        calories: 130,
        protein: 17,
        carbs: 15,
        fat: 3
      },
      // Salty Snacks
      {
        name: "Trail Mix (1oz)",
        calories: 140,
        protein: 4,
        carbs: 12,
        fat: 9
      }, {
        name: "Jerky (beef, 1oz)",
        calories: 116,
        protein: 9,
        carbs: 3,
        fat: 7
      }, {
        name: "Turkey Jerky (1oz)",
        calories: 100,
        protein: 12,
        carbs: 4,
        fat: 3
      }, {
        name: "Chips (potato, 1oz)",
        calories: 152,
        protein: 2,
        carbs: 15,
        fat: 10
      }, {
        name: "Chips (tortilla, 1oz)",
        calories: 142,
        protein: 2,
        carbs: 18,
        fat: 7
      }, {
        name: "Chips (pita, 1oz)",
        calories: 130,
        protein: 3,
        carbs: 19,
        fat: 5
      }, {
        name: "Chips (veggie, 1oz)",
        calories: 150,
        protein: 1,
        carbs: 16,
        fat: 9
      }, {
        name: "Chips (sweet potato, 1oz)",
        calories: 150,
        protein: 1,
        carbs: 15,
        fat: 9
      }, {
        name: "Chips (kettle cooked, 1oz)",
        calories: 150,
        protein: 2,
        carbs: 15,
        fat: 9
      }, {
        name: "Popcorn (3 cups air-popped)",
        calories: 93,
        protein: 3,
        carbs: 19,
        fat: 1
      }, {
        name: "Popcorn (butter, 3 cups)",
        calories: 170,
        protein: 2,
        carbs: 20,
        fat: 10
      }, {
        name: "Pretzels (1oz)",
        calories: 108,
        protein: 3,
        carbs: 22,
        fat: 1
      }, {
        name: "Pretzels (soft, 1 medium)",
        calories: 380,
        protein: 10,
        carbs: 79,
        fat: 4
      }, {
        name: "Cheese Crackers (20 pieces)",
        calories: 151,
        protein: 3,
        carbs: 16,
        fat: 8
      }, {
        name: "Crackers (Wheat Thins, 16 pc)",
        calories: 140,
        protein: 3,
        carbs: 22,
        fat: 5
      }, {
        name: "Crackers (Triscuit, 6 pc)",
        calories: 120,
        protein: 3,
        carbs: 20,
        fat: 4
      }, {
        name: "Crackers (Ritz, 5 pc)",
        calories: 80,
        protein: 1,
        carbs: 10,
        fat: 4
      }, {
        name: "Crackers (Graham, 2 sheets)",
        calories: 130,
        protein: 2,
        carbs: 24,
        fat: 3
      }, {
        name: "Rice Cakes (2 cakes)",
        calories: 70,
        protein: 1,
        carbs: 15,
        fat: 0
      }, {
        name: "Tortilla Chips & Salsa (10 chips)",
        calories: 170,
        protein: 2,
        carbs: 22,
        fat: 8
      }, {
        name: "Chips & Guacamole (10 chips)",
        calories: 230,
        protein: 3,
        carbs: 20,
        fat: 15
      },
      // Sweet Snacks
      {
        name: "Dark Chocolate (1oz)",
        calories: 170,
        protein: 2,
        carbs: 13,
        fat: 12
      }, {
        name: "Milk Chocolate (1oz)",
        calories: 235,
        protein: 3,
        carbs: 26,
        fat: 13
      }, {
        name: "White Chocolate (1oz)",
        calories: 153,
        protein: 2,
        carbs: 17,
        fat: 9
      }, {
        name: "Chocolate Chips (2 tbsp)",
        calories: 140,
        protein: 1,
        carbs: 18,
        fat: 8
      }, {
        name: "M&Ms (1.7oz pack)",
        calories: 240,
        protein: 3,
        carbs: 34,
        fat: 10
      }, {
        name: "Snickers Bar",
        calories: 250,
        protein: 4,
        carbs: 33,
        fat: 12
      }, {
        name: "Reese's Cups (2 pieces)",
        calories: 210,
        protein: 5,
        carbs: 24,
        fat: 13
      }, {
        name: "Gummy Bears (17 pieces)",
        calories: 140,
        protein: 3,
        carbs: 34,
        fat: 0
      }, {
        name: "Fruit Snacks (1 pouch)",
        calories: 80,
        protein: 0,
        carbs: 20,
        fat: 0
      }, {
        name: "String Cheese",
        calories: 80,
        protein: 7,
        carbs: 1,
        fat: 6
      }, {
        name: "Cheese Stick (Babybel)",
        calories: 70,
        protein: 5,
        carbs: 0,
        fat: 6
      },
      // Dips & Spreads as Snacks
      {
        name: "Hummus with Veggies",
        calories: 120,
        protein: 4,
        carbs: 12,
        fat: 7
      }, {
        name: "Hummus with Pita Chips",
        calories: 200,
        protein: 5,
        carbs: 25,
        fat: 10
      }, {
        name: "Guacamole (2 tbsp)",
        calories: 50,
        protein: 1,
        carbs: 3,
        fat: 5
      }, {
        name: "Salsa (2 tbsp)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Tzatziki (2 tbsp)",
        calories: 35,
        protein: 1,
        carbs: 2,
        fat: 3
      },
      // Other
      {
        name: "Granola (1/2 cup)",
        calories: 200,
        protein: 5,
        carbs: 25,
        fat: 8
      }, {
        name: "Cereal (1 cup)",
        calories: 150,
        protein: 3,
        carbs: 28,
        fat: 2
      }, {
        name: "Cereal (Cheerios, 1 cup)",
        calories: 100,
        protein: 3,
        carbs: 20,
        fat: 2
      }, {
        name: "Cereal (Frosted Flakes, 1 cup)",
        calories: 140,
        protein: 1,
        carbs: 34,
        fat: 0
      }, {
        name: "Dried Fruit Mix (1/4 cup)",
        calories: 110,
        protein: 1,
        carbs: 26,
        fat: 0
      }, {
        name: "Edamame (shelled, 1/2 cup)",
        calories: 60,
        protein: 6,
        carbs: 5,
        fat: 3
      }, {
        name: "Olives (10 medium)",
        calories: 40,
        protein: 0,
        carbs: 2,
        fat: 4
      }],
      beverages: [
      // Coffee
      {
        name: "Coffee (black, 8oz)",
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Coffee with Cream (8oz)",
        calories: 52,
        protein: 1,
        carbs: 1,
        fat: 5
      }, {
        name: "Coffee with Sugar (8oz)",
        calories: 30,
        protein: 0,
        carbs: 8,
        fat: 0
      }, {
        name: "Espresso (1 shot)",
        calories: 3,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Espresso (double shot)",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Latte (12oz, whole milk)",
        calories: 180,
        protein: 10,
        carbs: 14,
        fat: 9
      }, {
        name: "Latte (12oz, skim milk)",
        calories: 100,
        protein: 10,
        carbs: 14,
        fat: 0
      }, {
        name: "Latte (12oz, oat milk)",
        calories: 140,
        protein: 3,
        carbs: 19,
        fat: 5
      }, {
        name: "Latte (12oz, almond milk)",
        calories: 70,
        protein: 2,
        carbs: 8,
        fat: 3
      }, {
        name: "Cappuccino (12oz)",
        calories: 120,
        protein: 8,
        carbs: 10,
        fat: 5
      }, {
        name: "Mocha (12oz)",
        calories: 290,
        protein: 10,
        carbs: 35,
        fat: 12
      }, {
        name: "Americano (12oz)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Cold Brew Coffee (12oz)",
        calories: 5,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Iced Coffee (12oz, sweetened)",
        calories: 80,
        protein: 1,
        carbs: 20,
        fat: 0
      }, {
        name: "Frappuccino (Grande)",
        calories: 380,
        protein: 5,
        carbs: 60,
        fat: 14
      }, {
        name: "Flat White (12oz)",
        calories: 170,
        protein: 10,
        carbs: 13,
        fat: 9
      },
      // Tea
      {
        name: "Tea (black, unsweetened, 8oz)",
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Tea (green, unsweetened, 8oz)",
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Tea (herbal, 8oz)",
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Chai Latte (12oz)",
        calories: 190,
        protein: 6,
        carbs: 30,
        fat: 4
      }, {
        name: "Matcha Latte (12oz)",
        calories: 160,
        protein: 6,
        carbs: 22,
        fat: 5
      }, {
        name: "Iced Tea (sweetened, 12oz)",
        calories: 90,
        protein: 0,
        carbs: 23,
        fat: 0
      }, {
        name: "Iced Tea (unsweetened, 12oz)",
        calories: 3,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Boba/Bubble Tea (16oz)",
        calories: 350,
        protein: 2,
        carbs: 68,
        fat: 8
      },
      // Juice
      {
        name: "Orange Juice (8oz)",
        calories: 112,
        protein: 2,
        carbs: 26,
        fat: 0
      }, {
        name: "Apple Juice (8oz)",
        calories: 114,
        protein: 0,
        carbs: 28,
        fat: 0
      }, {
        name: "Cranberry Juice (8oz)",
        calories: 116,
        protein: 0,
        carbs: 30,
        fat: 0
      }, {
        name: "Grape Juice (8oz)",
        calories: 152,
        protein: 1,
        carbs: 37,
        fat: 0
      }, {
        name: "Grapefruit Juice (8oz)",
        calories: 96,
        protein: 1,
        carbs: 23,
        fat: 0
      }, {
        name: "Pineapple Juice (8oz)",
        calories: 132,
        protein: 1,
        carbs: 32,
        fat: 0
      }, {
        name: "Tomato Juice (8oz)",
        calories: 41,
        protein: 2,
        carbs: 10,
        fat: 0
      }, {
        name: "V8 Vegetable Juice (8oz)",
        calories: 50,
        protein: 2,
        carbs: 10,
        fat: 0
      }, {
        name: "Green Juice (pressed, 12oz)",
        calories: 120,
        protein: 2,
        carbs: 28,
        fat: 0
      }, {
        name: "Carrot Juice (8oz)",
        calories: 94,
        protein: 2,
        carbs: 22,
        fat: 0
      }, {
        name: "Beet Juice (8oz)",
        calories: 110,
        protein: 3,
        carbs: 26,
        fat: 0
      }, {
        name: "Lemonade (8oz)",
        calories: 99,
        protein: 0,
        carbs: 26,
        fat: 0
      },
      // Smoothies
      {
        name: "Fruit Smoothie (16oz)",
        calories: 250,
        protein: 4,
        carbs: 55,
        fat: 2
      }, {
        name: "Green Smoothie (16oz)",
        calories: 180,
        protein: 5,
        carbs: 35,
        fat: 3
      }, {
        name: "Protein Smoothie (16oz)",
        calories: 300,
        protein: 30,
        carbs: 35,
        fat: 5
      }, {
        name: "Açaí Bowl (medium)",
        calories: 380,
        protein: 6,
        carbs: 65,
        fat: 12
      },
      // Soda & Soft Drinks
      {
        name: "Coca-Cola (12oz can)",
        calories: 140,
        protein: 0,
        carbs: 39,
        fat: 0
      }, {
        name: "Pepsi (12oz can)",
        calories: 150,
        protein: 0,
        carbs: 41,
        fat: 0
      }, {
        name: "Sprite (12oz can)",
        calories: 140,
        protein: 0,
        carbs: 38,
        fat: 0
      }, {
        name: "Dr Pepper (12oz can)",
        calories: 150,
        protein: 0,
        carbs: 40,
        fat: 0
      }, {
        name: "Mountain Dew (12oz can)",
        calories: 170,
        protein: 0,
        carbs: 46,
        fat: 0
      }, {
        name: "Ginger Ale (12oz can)",
        calories: 130,
        protein: 0,
        carbs: 34,
        fat: 0
      }, {
        name: "Root Beer (12oz can)",
        calories: 152,
        protein: 0,
        carbs: 39,
        fat: 0
      }, {
        name: "Diet Soda (12oz can)",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Sparkling Water (12oz)",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Tonic Water (8oz)",
        calories: 83,
        protein: 0,
        carbs: 22,
        fat: 0
      }, {
        name: "Club Soda (12oz)",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      },
      // Energy & Sports Drinks
      {
        name: "Gatorade (20oz)",
        calories: 140,
        protein: 0,
        carbs: 36,
        fat: 0
      }, {
        name: "Powerade (20oz)",
        calories: 130,
        protein: 0,
        carbs: 35,
        fat: 0
      }, {
        name: "Pedialyte (12oz)",
        calories: 25,
        protein: 0,
        carbs: 6,
        fat: 0
      }, {
        name: "Coconut Water (8oz)",
        calories: 45,
        protein: 2,
        carbs: 9,
        fat: 0
      }, {
        name: "Red Bull (8.4oz)",
        calories: 110,
        protein: 1,
        carbs: 27,
        fat: 0
      }, {
        name: "Monster Energy (16oz)",
        calories: 210,
        protein: 0,
        carbs: 54,
        fat: 0
      }, {
        name: "Energy Drink (sugar-free, 16oz)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Pre-Workout Drink (1 scoop)",
        calories: 10,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "BCAA Drink (1 scoop)",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Electrolyte Powder (1 packet)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      },
      // Alcohol
      {
        name: "Beer (regular, 12oz)",
        calories: 153,
        protein: 2,
        carbs: 13,
        fat: 0
      }, {
        name: "Beer (light, 12oz)",
        calories: 103,
        protein: 1,
        carbs: 6,
        fat: 0
      }, {
        name: "Beer (IPA, 12oz)",
        calories: 200,
        protein: 2,
        carbs: 15,
        fat: 0
      }, {
        name: "Red Wine (5oz)",
        calories: 125,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "White Wine (5oz)",
        calories: 121,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Rosé Wine (5oz)",
        calories: 120,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Champagne (5oz)",
        calories: 85,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Vodka (1.5oz shot)",
        calories: 97,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Whiskey (1.5oz shot)",
        calories: 105,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Rum (1.5oz shot)",
        calories: 97,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Tequila (1.5oz shot)",
        calories: 97,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Gin (1.5oz shot)",
        calories: 97,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Margarita (8oz)",
        calories: 274,
        protein: 0,
        carbs: 36,
        fat: 0
      }, {
        name: "Piña Colada (8oz)",
        calories: 490,
        protein: 1,
        carbs: 64,
        fat: 12
      }, {
        name: "Mojito (8oz)",
        calories: 217,
        protein: 0,
        carbs: 24,
        fat: 0
      }, {
        name: "Long Island Iced Tea (8oz)",
        calories: 292,
        protein: 0,
        carbs: 22,
        fat: 0
      }, {
        name: "Hard Seltzer (12oz)",
        calories: 100,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Mimosa (6oz)",
        calories: 120,
        protein: 0,
        carbs: 12,
        fat: 0
      },
      // Other
      {
        name: "Water (8oz)",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Hot Chocolate (8oz)",
        calories: 190,
        protein: 8,
        carbs: 27,
        fat: 6
      }, {
        name: "Apple Cider (8oz)",
        calories: 120,
        protein: 0,
        carbs: 28,
        fat: 0
      }, {
        name: "Kombucha (12oz)",
        calories: 60,
        protein: 0,
        carbs: 14,
        fat: 0
      }],
      'prepared meals': [
      // Sandwiches & Burgers
      {
        name: "Hamburger (single patty)",
        calories: 354,
        protein: 20,
        carbs: 29,
        fat: 17
      }, {
        name: "Cheeseburger (single patty)",
        calories: 400,
        protein: 22,
        carbs: 30,
        fat: 22
      }, {
        name: "Double Cheeseburger",
        calories: 620,
        protein: 35,
        carbs: 33,
        fat: 38
      }, {
        name: "Turkey Burger",
        calories: 310,
        protein: 26,
        carbs: 28,
        fat: 12
      }, {
        name: "BLT Sandwich",
        calories: 344,
        protein: 12,
        carbs: 28,
        fat: 19
      }, {
        name: "Club Sandwich",
        calories: 456,
        protein: 28,
        carbs: 32,
        fat: 24
      }, {
        name: "Grilled Cheese Sandwich",
        calories: 366,
        protein: 14,
        carbs: 28,
        fat: 22
      }, {
        name: "Turkey & Cheese Sandwich",
        calories: 330,
        protein: 24,
        carbs: 30,
        fat: 12
      }, {
        name: "Ham & Cheese Sandwich",
        calories: 352,
        protein: 21,
        carbs: 29,
        fat: 16
      }, {
        name: "Tuna Salad Sandwich",
        calories: 390,
        protein: 22,
        carbs: 31,
        fat: 19
      }, {
        name: "Chicken Salad Sandwich",
        calories: 380,
        protein: 24,
        carbs: 28,
        fat: 18
      }, {
        name: "Egg Salad Sandwich",
        calories: 348,
        protein: 14,
        carbs: 28,
        fat: 20
      }, {
        name: "PB&J Sandwich",
        calories: 376,
        protein: 13,
        carbs: 50,
        fat: 15
      }, {
        name: "Philly Cheesesteak",
        calories: 510,
        protein: 30,
        carbs: 40,
        fat: 26
      }, {
        name: "Reuben Sandwich",
        calories: 520,
        protein: 28,
        carbs: 32,
        fat: 30
      }, {
        name: "Pulled Pork Sandwich",
        calories: 430,
        protein: 28,
        carbs: 36,
        fat: 18
      }, {
        name: "French Dip Sandwich",
        calories: 420,
        protein: 32,
        carbs: 34,
        fat: 16
      }, {
        name: "Meatball Sub (6 inch)",
        calories: 480,
        protein: 24,
        carbs: 44,
        fat: 22
      }, {
        name: "Italian Sub (6 inch)",
        calories: 500,
        protein: 22,
        carbs: 42,
        fat: 26
      }, {
        name: "Veggie Sandwich",
        calories: 290,
        protein: 10,
        carbs: 38,
        fat: 11
      },
      // Wraps & Burritos
      {
        name: "Chicken Wrap",
        calories: 420,
        protein: 28,
        carbs: 38,
        fat: 16
      }, {
        name: "Turkey Wrap",
        calories: 380,
        protein: 26,
        carbs: 36,
        fat: 14
      }, {
        name: "Chicken Caesar Wrap",
        calories: 470,
        protein: 30,
        carbs: 36,
        fat: 22
      }, {
        name: "Beef Burrito",
        calories: 490,
        protein: 24,
        carbs: 52,
        fat: 20
      }, {
        name: "Chicken Burrito",
        calories: 450,
        protein: 28,
        carbs: 50,
        fat: 16
      }, {
        name: "Bean Burrito",
        calories: 380,
        protein: 14,
        carbs: 55,
        fat: 12
      }, {
        name: "Breakfast Burrito",
        calories: 450,
        protein: 20,
        carbs: 40,
        fat: 22
      }, {
        name: "Burrito Bowl (Chipotle-style)",
        calories: 600,
        protein: 35,
        carbs: 55,
        fat: 22
      },
      // Pizza
      {
        name: "Pizza (cheese, 1 slice)",
        calories: 272,
        protein: 12,
        carbs: 34,
        fat: 10
      }, {
        name: "Pizza (pepperoni, 1 slice)",
        calories: 298,
        protein: 13,
        carbs: 34,
        fat: 13
      }, {
        name: "Pizza (meat lovers, 1 slice)",
        calories: 350,
        protein: 16,
        carbs: 34,
        fat: 18
      }, {
        name: "Pizza (veggie, 1 slice)",
        calories: 260,
        protein: 11,
        carbs: 35,
        fat: 9
      }, {
        name: "Pizza (margherita, 1 slice)",
        calories: 250,
        protein: 11,
        carbs: 30,
        fat: 10
      }, {
        name: "Pizza (BBQ chicken, 1 slice)",
        calories: 285,
        protein: 15,
        carbs: 36,
        fat: 10
      }, {
        name: "Pizza (Hawaiian, 1 slice)",
        calories: 280,
        protein: 13,
        carbs: 36,
        fat: 10
      }, {
        name: "Pizza (thin crust, 1 slice)",
        calories: 220,
        protein: 10,
        carbs: 24,
        fat: 9
      }, {
        name: "Pizza (deep dish, 1 slice)",
        calories: 400,
        protein: 16,
        carbs: 42,
        fat: 18
      }, {
        name: "Calzone (half)",
        calories: 480,
        protein: 22,
        carbs: 48,
        fat: 20
      },
      // Pasta Dishes
      {
        name: "Spaghetti & Meatballs (1 cup)",
        calories: 450,
        protein: 22,
        carbs: 48,
        fat: 18
      }, {
        name: "Fettuccine Alfredo (1 cup)",
        calories: 500,
        protein: 16,
        carbs: 42,
        fat: 30
      }, {
        name: "Chicken Alfredo (1 cup)",
        calories: 520,
        protein: 28,
        carbs: 42,
        fat: 26
      }, {
        name: "Pasta Bolognese (1 cup)",
        calories: 420,
        protein: 20,
        carbs: 46,
        fat: 16
      }, {
        name: "Penne Vodka (1 cup)",
        calories: 430,
        protein: 14,
        carbs: 48,
        fat: 20
      }, {
        name: "Carbonara (1 cup)",
        calories: 480,
        protein: 20,
        carbs: 42,
        fat: 24
      }, {
        name: "Pasta Primavera (1 cup)",
        calories: 320,
        protein: 12,
        carbs: 44,
        fat: 10
      }, {
        name: "Mac and Cheese (1 cup)",
        calories: 380,
        protein: 14,
        carbs: 40,
        fat: 18
      }, {
        name: "Lasagna (1 piece)",
        calories: 380,
        protein: 22,
        carbs: 30,
        fat: 18
      }, {
        name: "Ravioli (cheese, 8 pieces)",
        calories: 360,
        protein: 14,
        carbs: 44,
        fat: 14
      },
      // Rice & Bowls
      {
        name: "Chicken & Rice Bowl",
        calories: 450,
        protein: 35,
        carbs: 50,
        fat: 10
      }, {
        name: "Teriyaki Chicken Bowl",
        calories: 480,
        protein: 30,
        carbs: 58,
        fat: 12
      }, {
        name: "Poke Bowl (medium)",
        calories: 450,
        protein: 25,
        carbs: 55,
        fat: 14
      }, {
        name: "Bibimbap Bowl",
        calories: 490,
        protein: 22,
        carbs: 60,
        fat: 16
      }, {
        name: "Grain Bowl (quinoa base)",
        calories: 420,
        protein: 20,
        carbs: 48,
        fat: 16
      }, {
        name: "Buddha Bowl",
        calories: 380,
        protein: 15,
        carbs: 50,
        fat: 14
      },
      // Chicken Dishes
      {
        name: "Grilled Chicken Breast (6oz)",
        calories: 248,
        protein: 47,
        carbs: 0,
        fat: 5
      }, {
        name: "Fried Chicken (1 breast)",
        calories: 320,
        protein: 34,
        carbs: 11,
        fat: 15
      }, {
        name: "Fried Chicken (1 thigh)",
        calories: 280,
        protein: 20,
        carbs: 9,
        fat: 18
      }, {
        name: "Fried Chicken Tenders (4 pc)",
        calories: 360,
        protein: 28,
        carbs: 20,
        fat: 18
      }, {
        name: "Chicken Parmesan",
        calories: 490,
        protein: 38,
        carbs: 24,
        fat: 26
      }, {
        name: "Chicken Marsala",
        calories: 380,
        protein: 36,
        carbs: 12,
        fat: 18
      }, {
        name: "Chicken Stir Fry (1 cup)",
        calories: 320,
        protein: 28,
        carbs: 18,
        fat: 14
      }, {
        name: "Chicken Tikka Masala (1 cup)",
        calories: 350,
        protein: 24,
        carbs: 16,
        fat: 20
      }, {
        name: "Butter Chicken (1 cup)",
        calories: 380,
        protein: 24,
        carbs: 14,
        fat: 24
      }, {
        name: "Chicken Quesadilla",
        calories: 480,
        protein: 28,
        carbs: 36,
        fat: 24
      }, {
        name: "Chicken Fajitas (2 fajitas)",
        calories: 420,
        protein: 30,
        carbs: 32,
        fat: 18
      }, {
        name: "Chicken Nuggets (10 pieces)",
        calories: 430,
        protein: 22,
        carbs: 26,
        fat: 26
      }, {
        name: "Chicken Wings (buffalo, 6 pc)",
        calories: 430,
        protein: 32,
        carbs: 2,
        fat: 32
      }, {
        name: "Chicken Wings (BBQ, 6 pc)",
        calories: 450,
        protein: 30,
        carbs: 14,
        fat: 28
      }, {
        name: "Rotisserie Chicken (1/4)",
        calories: 320,
        protein: 38,
        carbs: 0,
        fat: 18
      },
      // Tacos & Mexican
      {
        name: "Taco (beef, hard shell)",
        calories: 210,
        protein: 10,
        carbs: 15,
        fat: 12
      }, {
        name: "Taco (chicken, soft)",
        calories: 190,
        protein: 14,
        carbs: 16,
        fat: 8
      }, {
        name: "Taco (fish)",
        calories: 220,
        protein: 15,
        carbs: 18,
        fat: 10
      }, {
        name: "Taco (carnitas)",
        calories: 230,
        protein: 14,
        carbs: 16,
        fat: 12
      }, {
        name: "Enchiladas (2 pieces)",
        calories: 440,
        protein: 22,
        carbs: 36,
        fat: 22
      }, {
        name: "Tamale (1 piece)",
        calories: 280,
        protein: 10,
        carbs: 30,
        fat: 14
      }, {
        name: "Nachos (loaded, 1 plate)",
        calories: 600,
        protein: 18,
        carbs: 55,
        fat: 34
      }, {
        name: "Quesadilla (cheese)",
        calories: 380,
        protein: 16,
        carbs: 32,
        fat: 20
      }, {
        name: "Tostada (1 piece)",
        calories: 200,
        protein: 8,
        carbs: 16,
        fat: 12
      }, {
        name: "Chips & Queso (1 serving)",
        calories: 320,
        protein: 8,
        carbs: 30,
        fat: 18
      }, {
        name: "Mexican Rice (1 cup)",
        calories: 210,
        protein: 4,
        carbs: 40,
        fat: 4
      }, {
        name: "Refried Beans (1/2 cup)",
        calories: 118,
        protein: 7,
        carbs: 20,
        fat: 2
      },
      // Asian Dishes
      {
        name: "Fried Rice (1 cup)",
        calories: 238,
        protein: 6,
        carbs: 34,
        fat: 9
      }, {
        name: "Chicken Fried Rice (1 cup)",
        calories: 310,
        protein: 14,
        carbs: 38,
        fat: 12
      }, {
        name: "Shrimp Fried Rice (1 cup)",
        calories: 290,
        protein: 12,
        carbs: 38,
        fat: 10
      }, {
        name: "Lo Mein (1 cup)",
        calories: 310,
        protein: 12,
        carbs: 38,
        fat: 12
      }, {
        name: "Chow Mein (1 cup)",
        calories: 260,
        protein: 10,
        carbs: 32,
        fat: 10
      }, {
        name: "Pad Thai (1 cup)",
        calories: 380,
        protein: 14,
        carbs: 46,
        fat: 14
      }, {
        name: "General Tso's Chicken (1 cup)",
        calories: 420,
        protein: 22,
        carbs: 38,
        fat: 20
      }, {
        name: "Orange Chicken (1 cup)",
        calories: 400,
        protein: 20,
        carbs: 42,
        fat: 16
      }, {
        name: "Kung Pao Chicken (1 cup)",
        calories: 350,
        protein: 24,
        carbs: 18,
        fat: 20
      }, {
        name: "Sweet & Sour Chicken (1 cup)",
        calories: 380,
        protein: 18,
        carbs: 44,
        fat: 14
      }, {
        name: "Beef & Broccoli (1 cup)",
        calories: 320,
        protein: 22,
        carbs: 14,
        fat: 18
      }, {
        name: "Mongolian Beef (1 cup)",
        calories: 360,
        protein: 22,
        carbs: 20,
        fat: 20
      }, {
        name: "Egg Drop Soup (1 cup)",
        calories: 73,
        protein: 4,
        carbs: 8,
        fat: 3
      }, {
        name: "Wonton Soup (1 cup)",
        calories: 182,
        protein: 14,
        carbs: 12,
        fat: 8
      }, {
        name: "Hot & Sour Soup (1 cup)",
        calories: 95,
        protein: 6,
        carbs: 10,
        fat: 3
      }, {
        name: "Miso Soup (1 cup)",
        calories: 84,
        protein: 6,
        carbs: 8,
        fat: 3
      }, {
        name: "Pho (1 bowl)",
        calories: 450,
        protein: 25,
        carbs: 55,
        fat: 10
      }, {
        name: "Ramen (1 bowl)",
        calories: 500,
        protein: 20,
        carbs: 60,
        fat: 18
      }, {
        name: "Tom Yum Soup (1 cup)",
        calories: 100,
        protein: 8,
        carbs: 8,
        fat: 4
      }, {
        name: "Curry (Thai, 1 cup)",
        calories: 350,
        protein: 18,
        carbs: 14,
        fat: 24
      }, {
        name: "Sushi Roll (6 pieces)",
        calories: 250,
        protein: 12,
        carbs: 36,
        fat: 6
      }, {
        name: "Sushi Roll (spicy tuna, 6 pc)",
        calories: 290,
        protein: 14,
        carbs: 38,
        fat: 8
      }, {
        name: "Sushi (nigiri, 2 pieces)",
        calories: 100,
        protein: 6,
        carbs: 14,
        fat: 1
      }, {
        name: "Sashimi (6 pieces)",
        calories: 120,
        protein: 22,
        carbs: 0,
        fat: 3
      }, {
        name: "Gyoza/Dumplings (6 pieces)",
        calories: 280,
        protein: 10,
        carbs: 28,
        fat: 14
      }, {
        name: "Spring Roll (1 piece)",
        calories: 90,
        protein: 3,
        carbs: 12,
        fat: 3
      }, {
        name: "Egg Roll (1 piece)",
        calories: 200,
        protein: 6,
        carbs: 20,
        fat: 10
      }, {
        name: "Edamame (appetizer, 1 cup)",
        calories: 120,
        protein: 11,
        carbs: 10,
        fat: 5
      },
      // Soups & Stews
      {
        name: "Chicken Noodle Soup (1 cup)",
        calories: 120,
        protein: 8,
        carbs: 14,
        fat: 3
      }, {
        name: "Tomato Soup (1 cup)",
        calories: 130,
        protein: 3,
        carbs: 20,
        fat: 4
      }, {
        name: "Cream of Mushroom Soup (1 cup)",
        calories: 200,
        protein: 4,
        carbs: 14,
        fat: 14
      }, {
        name: "Minestrone Soup (1 cup)",
        calories: 127,
        protein: 5,
        carbs: 21,
        fat: 3
      }, {
        name: "Clam Chowder (1 cup)",
        calories: 231,
        protein: 9,
        carbs: 20,
        fat: 12
      }, {
        name: "Broccoli Cheddar Soup (1 cup)",
        calories: 290,
        protein: 12,
        carbs: 16,
        fat: 20
      }, {
        name: "French Onion Soup (1 cup)",
        calories: 210,
        protein: 8,
        carbs: 18,
        fat: 12
      }, {
        name: "Lentil Soup (1 cup)",
        calories: 180,
        protein: 12,
        carbs: 28,
        fat: 2
      }, {
        name: "Split Pea Soup (1 cup)",
        calories: 190,
        protein: 12,
        carbs: 32,
        fat: 2
      }, {
        name: "Black Bean Soup (1 cup)",
        calories: 180,
        protein: 10,
        carbs: 30,
        fat: 2
      }, {
        name: "Beef Stew (1 cup)",
        calories: 220,
        protein: 18,
        carbs: 18,
        fat: 8
      }, {
        name: "Chili (beef, 1 cup)",
        calories: 260,
        protein: 18,
        carbs: 22,
        fat: 10
      }, {
        name: "Chili (turkey, 1 cup)",
        calories: 220,
        protein: 20,
        carbs: 22,
        fat: 6
      }, {
        name: "Chili (vegetarian, 1 cup)",
        calories: 190,
        protein: 10,
        carbs: 30,
        fat: 4
      }, {
        name: "Chicken Tortilla Soup (1 cup)",
        calories: 180,
        protein: 14,
        carbs: 18,
        fat: 6
      }, {
        name: "Pozole (1 cup)",
        calories: 240,
        protein: 16,
        carbs: 24,
        fat: 8
      }, {
        name: "Gazpacho (1 cup)",
        calories: 56,
        protein: 1,
        carbs: 8,
        fat: 2
      },
      // Salads
      {
        name: "Caesar Salad (side)",
        calories: 180,
        protein: 6,
        carbs: 10,
        fat: 14
      }, {
        name: "Caesar Salad with Chicken",
        calories: 390,
        protein: 34,
        carbs: 12,
        fat: 22
      }, {
        name: "Garden Salad (side)",
        calories: 70,
        protein: 3,
        carbs: 12,
        fat: 1
      }, {
        name: "Cobb Salad",
        calories: 510,
        protein: 34,
        carbs: 10,
        fat: 38
      }, {
        name: "Greek Salad",
        calories: 240,
        protein: 8,
        carbs: 12,
        fat: 18
      }, {
        name: "Spinach Salad (with dressing)",
        calories: 200,
        protein: 6,
        carbs: 10,
        fat: 14
      }, {
        name: "Asian Chicken Salad",
        calories: 380,
        protein: 28,
        carbs: 24,
        fat: 18
      }, {
        name: "Taco Salad",
        calories: 520,
        protein: 22,
        carbs: 38,
        fat: 30
      }, {
        name: "Caprese Salad",
        calories: 240,
        protein: 12,
        carbs: 6,
        fat: 18
      }, {
        name: "Waldorf Salad (1 cup)",
        calories: 220,
        protein: 3,
        carbs: 18,
        fat: 16
      }, {
        name: "Quinoa Salad (1 cup)",
        calories: 280,
        protein: 10,
        carbs: 36,
        fat: 10
      }, {
        name: "Pasta Salad (1 cup)",
        calories: 310,
        protein: 8,
        carbs: 38,
        fat: 14
      }, {
        name: "Couscous Salad (1 cup)",
        calories: 260,
        protein: 8,
        carbs: 36,
        fat: 10
      },
      // Breakfast Items
      {
        name: "Pancakes (3 medium)",
        calories: 350,
        protein: 10,
        carbs: 56,
        fat: 10
      }, {
        name: "Pancakes (protein, 3 medium)",
        calories: 300,
        protein: 24,
        carbs: 38,
        fat: 6
      }, {
        name: "Waffle (1 large)",
        calories: 310,
        protein: 8,
        carbs: 42,
        fat: 12
      }, {
        name: "French Toast (2 slices)",
        calories: 340,
        protein: 12,
        carbs: 38,
        fat: 16
      }, {
        name: "Breakfast Sandwich (egg & cheese)",
        calories: 310,
        protein: 16,
        carbs: 28,
        fat: 14
      }, {
        name: "Breakfast Sandwich (bacon egg cheese)",
        calories: 380,
        protein: 20,
        carbs: 28,
        fat: 20
      }, {
        name: "Breakfast Sandwich (sausage egg cheese)",
        calories: 450,
        protein: 22,
        carbs: 28,
        fat: 28
      }, {
        name: "Eggs Benedict (2 pieces)",
        calories: 560,
        protein: 24,
        carbs: 32,
        fat: 36
      }, {
        name: "Avocado Toast (1 slice)",
        calories: 240,
        protein: 6,
        carbs: 20,
        fat: 15
      }, {
        name: "Avocado Toast with Egg",
        calories: 330,
        protein: 14,
        carbs: 22,
        fat: 20
      }, {
        name: "Bagel with Cream Cheese",
        calories: 388,
        protein: 13,
        carbs: 57,
        fat: 12
      }, {
        name: "Bagel with Lox",
        calories: 420,
        protein: 22,
        carbs: 57,
        fat: 12
      }, {
        name: "Toast with Butter (2 slices)",
        calories: 237,
        protein: 4,
        carbs: 26,
        fat: 13
      }, {
        name: "Toast with Jam (2 slices)",
        calories: 210,
        protein: 4,
        carbs: 40,
        fat: 2
      }, {
        name: "Yogurt Parfait",
        calories: 280,
        protein: 16,
        carbs: 40,
        fat: 6
      }, {
        name: "Granola Bowl with Milk",
        calories: 350,
        protein: 10,
        carbs: 50,
        fat: 12
      }, {
        name: "Oatmeal with Banana & PB",
        calories: 350,
        protein: 12,
        carbs: 52,
        fat: 12
      }, {
        name: "Smoothie Bowl (medium)",
        calories: 350,
        protein: 10,
        carbs: 55,
        fat: 10
      },
      // Other Prepared
      {
        name: "Steak & Baked Potato",
        calories: 580,
        protein: 40,
        carbs: 40,
        fat: 26
      }, {
        name: "Meatloaf (1 slice)",
        calories: 290,
        protein: 18,
        carbs: 14,
        fat: 18
      }, {
        name: "Pot Roast (6oz)",
        calories: 340,
        protein: 38,
        carbs: 10,
        fat: 16
      }, {
        name: "Pork Chop (grilled, 6oz)",
        calories: 290,
        protein: 38,
        carbs: 0,
        fat: 14
      }, {
        name: "BBQ Ribs (4 ribs)",
        calories: 580,
        protein: 40,
        carbs: 18,
        fat: 38
      }, {
        name: "Fish and Chips",
        calories: 585,
        protein: 24,
        carbs: 52,
        fat: 30
      }, {
        name: "Fish Tacos (2 tacos)",
        calories: 440,
        protein: 30,
        carbs: 36,
        fat: 20
      }, {
        name: "Grilled Salmon Fillet (6oz)",
        calories: 310,
        protein: 34,
        carbs: 0,
        fat: 18
      }, {
        name: "Shrimp Scampi (1 cup)",
        calories: 310,
        protein: 26,
        carbs: 12,
        fat: 18
      }, {
        name: "Crab Cakes (2 cakes)",
        calories: 340,
        protein: 20,
        carbs: 18,
        fat: 20
      }, {
        name: "Jambalaya (1 cup)",
        calories: 310,
        protein: 16,
        carbs: 38,
        fat: 10
      }, {
        name: "Gumbo (1 cup)",
        calories: 240,
        protein: 14,
        carbs: 18,
        fat: 12
      }, {
        name: "Shepherd's Pie (1 serving)",
        calories: 380,
        protein: 22,
        carbs: 34,
        fat: 16
      }, {
        name: "Beef Stroganoff (1 cup)",
        calories: 420,
        protein: 24,
        carbs: 32,
        fat: 22
      }, {
        name: "Stuffed Peppers (1 pepper)",
        calories: 260,
        protein: 16,
        carbs: 24,
        fat: 10
      }, {
        name: "Eggplant Parmesan (1 serving)",
        calories: 320,
        protein: 14,
        carbs: 24,
        fat: 18
      }],
      'fast food': [
      // Burgers
      {
        name: "McDonald's Big Mac",
        calories: 550,
        protein: 25,
        carbs: 45,
        fat: 30
      }, {
        name: "McDonald's Quarter Pounder",
        calories: 520,
        protein: 30,
        carbs: 42,
        fat: 26
      }, {
        name: "McDonald's McChicken",
        calories: 400,
        protein: 14,
        carbs: 40,
        fat: 21
      }, {
        name: "McDonald's Filet-O-Fish",
        calories: 390,
        protein: 16,
        carbs: 39,
        fat: 19
      }, {
        name: "McDonald's McMuffin (Egg)",
        calories: 310,
        protein: 17,
        carbs: 30,
        fat: 13
      }, {
        name: "McDonald's McGriddle (Sausage)",
        calories: 430,
        protein: 11,
        carbs: 42,
        fat: 24
      }, {
        name: "McDonald's Hash Brown",
        calories: 140,
        protein: 1,
        carbs: 15,
        fat: 8
      }, {
        name: "McDonald's Fries (medium)",
        calories: 320,
        protein: 5,
        carbs: 43,
        fat: 15
      }, {
        name: "McDonald's Fries (large)",
        calories: 480,
        protein: 7,
        carbs: 65,
        fat: 23
      }, {
        name: "McDonald's 10pc Nuggets",
        calories: 410,
        protein: 24,
        carbs: 24,
        fat: 24
      }, {
        name: "Wendy's Dave's Single",
        calories: 590,
        protein: 30,
        carbs: 45,
        fat: 34
      }, {
        name: "Wendy's Baconator",
        calories: 950,
        protein: 57,
        carbs: 38,
        fat: 65
      }, {
        name: "Wendy's Spicy Chicken",
        calories: 500,
        protein: 30,
        carbs: 49,
        fat: 19
      }, {
        name: "Wendy's Fries (medium)",
        calories: 420,
        protein: 5,
        carbs: 56,
        fat: 19
      }, {
        name: "Burger King Whopper",
        calories: 660,
        protein: 28,
        carbs: 49,
        fat: 40
      }, {
        name: "Burger King Impossible Whopper",
        calories: 630,
        protein: 25,
        carbs: 58,
        fat: 34
      }, {
        name: "Five Guys Cheeseburger",
        calories: 840,
        protein: 47,
        carbs: 40,
        fat: 55
      }, {
        name: "Five Guys Fries (regular)",
        calories: 530,
        protein: 8,
        carbs: 63,
        fat: 23
      }, {
        name: "In-N-Out Double-Double",
        calories: 670,
        protein: 37,
        carbs: 39,
        fat: 41
      }, {
        name: "In-N-Out Protein Style Burger",
        calories: 330,
        protein: 18,
        carbs: 11,
        fat: 25
      }, {
        name: "Shake Shack ShackBurger",
        calories: 530,
        protein: 28,
        carbs: 27,
        fat: 34
      },
      // Chicken
      {
        name: "Chick-fil-A Sandwich (original)",
        calories: 440,
        protein: 28,
        carbs: 40,
        fat: 19
      }, {
        name: "Chick-fil-A Sandwich (spicy)",
        calories: 450,
        protein: 28,
        carbs: 42,
        fat: 19
      }, {
        name: "Chick-fil-A Nuggets (8pc)",
        calories: 250,
        protein: 27,
        carbs: 11,
        fat: 11
      }, {
        name: "Chick-fil-A Nuggets (12pc)",
        calories: 380,
        protein: 40,
        carbs: 16,
        fat: 17
      }, {
        name: "Chick-fil-A Fries (medium)",
        calories: 360,
        protein: 4,
        carbs: 43,
        fat: 18
      }, {
        name: "Chick-fil-A Grilled Nuggets (8pc)",
        calories: 130,
        protein: 25,
        carbs: 1,
        fat: 3
      }, {
        name: "Popeyes Chicken Sandwich",
        calories: 700,
        protein: 28,
        carbs: 50,
        fat: 42
      }, {
        name: "Popeyes 3pc Tenders",
        calories: 410,
        protein: 28,
        carbs: 25,
        fat: 22
      }, {
        name: "KFC Original Recipe (1 breast)",
        calories: 390,
        protein: 39,
        carbs: 11,
        fat: 21
      }, {
        name: "KFC Extra Crispy (1 breast)",
        calories: 490,
        protein: 34,
        carbs: 17,
        fat: 32
      }, {
        name: "Wingstop Wings (6 classic)",
        calories: 540,
        protein: 42,
        carbs: 0,
        fat: 40
      }, {
        name: "Wingstop Wings (6 boneless)",
        calories: 470,
        protein: 26,
        carbs: 28,
        fat: 28
      },
      // Subs & Sandwiches
      {
        name: "Subway 6\" Turkey Breast",
        calories: 250,
        protein: 18,
        carbs: 40,
        fat: 3
      }, {
        name: "Subway 6\" Italian BMT",
        calories: 380,
        protein: 17,
        carbs: 42,
        fat: 15
      }, {
        name: "Subway 6\" Meatball Marinara",
        calories: 460,
        protein: 18,
        carbs: 52,
        fat: 18
      }, {
        name: "Subway 6\" Chicken Teriyaki",
        calories: 330,
        protein: 26,
        carbs: 44,
        fat: 5
      }, {
        name: "Jersey Mike's Club Sub (regular)",
        calories: 680,
        protein: 34,
        carbs: 56,
        fat: 34
      }, {
        name: "Jimmy John's Original (regular)",
        calories: 570,
        protein: 26,
        carbs: 56,
        fat: 26
      },
      // Tex-Mex Fast Food
      {
        name: "Chipotle Chicken Bowl",
        calories: 665,
        protein: 42,
        carbs: 55,
        fat: 28
      }, {
        name: "Chipotle Steak Bowl",
        calories: 685,
        protein: 40,
        carbs: 55,
        fat: 32
      }, {
        name: "Chipotle Chicken Burrito",
        calories: 1005,
        protein: 50,
        carbs: 105,
        fat: 38
      }, {
        name: "Taco Bell Crunchy Taco",
        calories: 170,
        protein: 8,
        carbs: 13,
        fat: 10
      }, {
        name: "Taco Bell Burrito Supreme",
        calories: 390,
        protein: 16,
        carbs: 51,
        fat: 14
      }, {
        name: "Taco Bell Crunchwrap Supreme",
        calories: 530,
        protein: 16,
        carbs: 71,
        fat: 21
      }, {
        name: "Taco Bell Quesadilla (chicken)",
        calories: 510,
        protein: 26,
        carbs: 37,
        fat: 27
      }, {
        name: "Taco Bell Nachos BellGrande",
        calories: 740,
        protein: 16,
        carbs: 80,
        fat: 38
      },
      // Pizza Fast Food
      {
        name: "Domino's Cheese Pizza (1 slice)",
        calories: 200,
        protein: 8,
        carbs: 24,
        fat: 8
      }, {
        name: "Domino's Pepperoni Pizza (1 slice)",
        calories: 220,
        protein: 9,
        carbs: 24,
        fat: 10
      }, {
        name: "Domino's Breadsticks (2 pieces)",
        calories: 220,
        protein: 6,
        carbs: 34,
        fat: 7
      }, {
        name: "Pizza Hut Cheese (1 slice)",
        calories: 240,
        protein: 10,
        carbs: 26,
        fat: 10
      }, {
        name: "Pizza Hut Pepperoni (1 slice)",
        calories: 260,
        protein: 10,
        carbs: 26,
        fat: 12
      }, {
        name: "Little Caesar's Cheese (1 slice)",
        calories: 210,
        protein: 10,
        carbs: 24,
        fat: 8
      },
      // Asian Fast Food
      {
        name: "Panda Express Orange Chicken",
        calories: 490,
        protein: 25,
        carbs: 51,
        fat: 23
      }, {
        name: "Panda Express Kung Pao Chicken",
        calories: 290,
        protein: 16,
        carbs: 16,
        fat: 19
      }, {
        name: "Panda Express Beijing Beef",
        calories: 470,
        protein: 14,
        carbs: 56,
        fat: 22
      }, {
        name: "Panda Express Fried Rice (side)",
        calories: 520,
        protein: 13,
        carbs: 85,
        fat: 16
      }, {
        name: "Panda Express Chow Mein (side)",
        calories: 510,
        protein: 13,
        carbs: 80,
        fat: 17
      },
      // Other Fast Food
      {
        name: "Panera Bread Bowl Soup",
        calories: 880,
        protein: 36,
        carbs: 126,
        fat: 28
      }, {
        name: "Panera Mac & Cheese (bowl)",
        calories: 730,
        protein: 26,
        carbs: 70,
        fat: 38
      }, {
        name: "Panera Chicken Caesar Salad",
        calories: 510,
        protein: 35,
        carbs: 22,
        fat: 32
      }, {
        name: "Starbucks Egg Bites (2 pieces)",
        calories: 230,
        protein: 13,
        carbs: 9,
        fat: 16
      }, {
        name: "Starbucks Cake Pop",
        calories: 160,
        protein: 2,
        carbs: 20,
        fat: 8
      }, {
        name: "Starbucks Croissant",
        calories: 260,
        protein: 5,
        carbs: 32,
        fat: 14
      }],
      'sauces & condiments': [
      // Basic Condiments
      {
        name: "Ketchup (1 tbsp)",
        calories: 20,
        protein: 0,
        carbs: 5,
        fat: 0
      }, {
        name: "Mustard (1 tbsp)",
        calories: 3,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Dijon Mustard (1 tbsp)",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Honey Mustard (1 tbsp)",
        calories: 40,
        protein: 0,
        carbs: 6,
        fat: 2
      }, {
        name: "Mayonnaise (1 tbsp)",
        calories: 94,
        protein: 0,
        carbs: 0,
        fat: 10
      }, {
        name: "Mayo (light, 1 tbsp)",
        calories: 35,
        protein: 0,
        carbs: 1,
        fat: 3
      }, {
        name: "BBQ Sauce (2 tbsp)",
        calories: 60,
        protein: 0,
        carbs: 13,
        fat: 0
      }, {
        name: "Hot Sauce (1 tsp)",
        calories: 1,
        protein: 0,
        carbs: 0,
        fat: 0
      }, {
        name: "Sriracha (1 tsp)",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Soy Sauce (1 tbsp)",
        calories: 8,
        protein: 1,
        carbs: 1,
        fat: 0
      }, {
        name: "Teriyaki Sauce (2 tbsp)",
        calories: 40,
        protein: 1,
        carbs: 8,
        fat: 0
      }, {
        name: "Worcestershire Sauce (1 tbsp)",
        calories: 13,
        protein: 0,
        carbs: 3,
        fat: 0
      }, {
        name: "Fish Sauce (1 tbsp)",
        calories: 6,
        protein: 1,
        carbs: 1,
        fat: 0
      }, {
        name: "Hoisin Sauce (1 tbsp)",
        calories: 35,
        protein: 1,
        carbs: 7,
        fat: 1
      }, {
        name: "Oyster Sauce (1 tbsp)",
        calories: 9,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Steak Sauce (A1, 1 tbsp)",
        calories: 15,
        protein: 0,
        carbs: 3,
        fat: 0
      },
      // Dressings
      {
        name: "Ranch Dressing (2 tbsp)",
        calories: 129,
        protein: 0,
        carbs: 2,
        fat: 13
      }, {
        name: "Ranch (light, 2 tbsp)",
        calories: 60,
        protein: 1,
        carbs: 3,
        fat: 5
      }, {
        name: "Caesar Dressing (2 tbsp)",
        calories: 150,
        protein: 1,
        carbs: 1,
        fat: 16
      }, {
        name: "Italian Dressing (2 tbsp)",
        calories: 86,
        protein: 0,
        carbs: 3,
        fat: 8
      }, {
        name: "Italian Dressing (light, 2 tbsp)",
        calories: 28,
        protein: 0,
        carbs: 3,
        fat: 2
      }, {
        name: "Balsamic Vinaigrette (2 tbsp)",
        calories: 90,
        protein: 0,
        carbs: 5,
        fat: 8
      }, {
        name: "Blue Cheese Dressing (2 tbsp)",
        calories: 150,
        protein: 1,
        carbs: 1,
        fat: 16
      }, {
        name: "Thousand Island (2 tbsp)",
        calories: 110,
        protein: 0,
        carbs: 5,
        fat: 10
      }, {
        name: "French Dressing (2 tbsp)",
        calories: 146,
        protein: 0,
        carbs: 5,
        fat: 14
      }, {
        name: "Honey Mustard Dressing (2 tbsp)",
        calories: 110,
        protein: 0,
        carbs: 8,
        fat: 9
      }, {
        name: "Vinaigrette (2 tbsp)",
        calories: 72,
        protein: 0,
        carbs: 2,
        fat: 7
      }, {
        name: "Oil & Vinegar (2 tbsp)",
        calories: 140,
        protein: 0,
        carbs: 0,
        fat: 16
      }, {
        name: "Greek Dressing (2 tbsp)",
        calories: 120,
        protein: 0,
        carbs: 2,
        fat: 13
      }, {
        name: "Asian Sesame Dressing (2 tbsp)",
        calories: 80,
        protein: 1,
        carbs: 6,
        fat: 6
      },
      // Oils
      {
        name: "Olive Oil (1 tbsp)",
        calories: 119,
        protein: 0,
        carbs: 0,
        fat: 14
      }, {
        name: "Coconut Oil (1 tbsp)",
        calories: 121,
        protein: 0,
        carbs: 0,
        fat: 14
      }, {
        name: "Avocado Oil (1 tbsp)",
        calories: 124,
        protein: 0,
        carbs: 0,
        fat: 14
      }, {
        name: "Vegetable Oil (1 tbsp)",
        calories: 120,
        protein: 0,
        carbs: 0,
        fat: 14
      }, {
        name: "Sesame Oil (1 tbsp)",
        calories: 120,
        protein: 0,
        carbs: 0,
        fat: 14
      }, {
        name: "Butter (1 tbsp)",
        calories: 102,
        protein: 0,
        carbs: 0,
        fat: 12
      }, {
        name: "Cooking Spray (1 second)",
        calories: 7,
        protein: 0,
        carbs: 0,
        fat: 1
      },
      // Sauces
      {
        name: "Marinara Sauce (1/2 cup)",
        calories: 66,
        protein: 2,
        carbs: 10,
        fat: 2
      }, {
        name: "Alfredo Sauce (1/4 cup)",
        calories: 110,
        protein: 2,
        carbs: 4,
        fat: 10
      }, {
        name: "Pesto Sauce (2 tbsp)",
        calories: 160,
        protein: 3,
        carbs: 2,
        fat: 16
      }, {
        name: "Bolognese Sauce (1/2 cup)",
        calories: 140,
        protein: 8,
        carbs: 10,
        fat: 7
      }, {
        name: "Salsa (2 tbsp)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Salsa Verde (2 tbsp)",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0
      }, {
        name: "Pico de Gallo (2 tbsp)",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0
      }, {
        name: "Guacamole (2 tbsp)",
        calories: 50,
        protein: 1,
        carbs: 3,
        fat: 5
      }, {
        name: "Hummus (2 tbsp)",
        calories: 70,
        protein: 2,
        carbs: 6,
        fat: 5
      }, {
        name: "Tahini (1 tbsp)",
        calories: 89,
        protein: 3,
        carbs: 3,
        fat: 8
      }, {
        name: "Chimichurri (2 tbsp)",
        calories: 90,
        protein: 0,
        carbs: 1,
        fat: 10
      }, {
        name: "Tzatziki (2 tbsp)",
        calories: 35,
        protein: 1,
        carbs: 2,
        fat: 3
      }, {
        name: "Cranberry Sauce (2 tbsp)",
        calories: 50,
        protein: 0,
        carbs: 13,
        fat: 0
      }, {
        name: "Gravy (1/4 cup)",
        calories: 30,
        protein: 1,
        carbs: 3,
        fat: 1
      },
      // Sweeteners & Toppings
      {
        name: "Honey (1 tbsp)",
        calories: 64,
        protein: 0,
        carbs: 17,
        fat: 0
      }, {
        name: "Maple Syrup (2 tbsp)",
        calories: 104,
        protein: 0,
        carbs: 27,
        fat: 0
      }, {
        name: "Pancake Syrup (2 tbsp)",
        calories: 100,
        protein: 0,
        carbs: 26,
        fat: 0
      }, {
        name: "Sugar (1 tsp)",
        calories: 16,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Brown Sugar (1 tsp)",
        calories: 15,
        protein: 0,
        carbs: 4,
        fat: 0
      }, {
        name: "Agave Nectar (1 tbsp)",
        calories: 60,
        protein: 0,
        carbs: 16,
        fat: 0
      }, {
        name: "Jam/Jelly (1 tbsp)",
        calories: 50,
        protein: 0,
        carbs: 13,
        fat: 0
      }, {
        name: "Nutella (2 tbsp)",
        calories: 200,
        protein: 2,
        carbs: 23,
        fat: 12
      }, {
        name: "Whipped Cream (2 tbsp)",
        calories: 15,
        protein: 0,
        carbs: 1,
        fat: 1
      }, {
        name: "Chocolate Syrup (2 tbsp)",
        calories: 100,
        protein: 1,
        carbs: 24,
        fat: 0
      }, {
        name: "Caramel Sauce (2 tbsp)",
        calories: 100,
        protein: 0,
        carbs: 20,
        fat: 2
      }],
      desserts: [
      // Baked Goods
      {
        name: "Chocolate Chip Cookie (1 medium)",
        calories: 200,
        protein: 2,
        carbs: 28,
        fat: 10
      }, {
        name: "Oatmeal Raisin Cookie (1 medium)",
        calories: 180,
        protein: 3,
        carbs: 28,
        fat: 7
      }, {
        name: "Sugar Cookie (1 medium)",
        calories: 160,
        protein: 2,
        carbs: 22,
        fat: 7
      }, {
        name: "Brownie (2\" square)",
        calories: 230,
        protein: 3,
        carbs: 30,
        fat: 12
      }, {
        name: "Blondie (2\" square)",
        calories: 220,
        protein: 3,
        carbs: 28,
        fat: 11
      }, {
        name: "Chocolate Cake (1 slice)",
        calories: 350,
        protein: 5,
        carbs: 50,
        fat: 15
      }, {
        name: "Vanilla Cake (1 slice)",
        calories: 310,
        protein: 4,
        carbs: 48,
        fat: 12
      }, {
        name: "Carrot Cake (1 slice)",
        calories: 420,
        protein: 5,
        carbs: 52,
        fat: 22
      }, {
        name: "Red Velvet Cake (1 slice)",
        calories: 370,
        protein: 4,
        carbs: 48,
        fat: 18
      }, {
        name: "Cheesecake (1 slice)",
        calories: 400,
        protein: 7,
        carbs: 32,
        fat: 28
      }, {
        name: "Cupcake (frosted)",
        calories: 280,
        protein: 3,
        carbs: 40,
        fat: 12
      }, {
        name: "Muffin (blueberry)",
        calories: 350,
        protein: 5,
        carbs: 50,
        fat: 14
      }, {
        name: "Muffin (chocolate chip)",
        calories: 400,
        protein: 5,
        carbs: 56,
        fat: 18
      }, {
        name: "Muffin (bran)",
        calories: 300,
        protein: 6,
        carbs: 48,
        fat: 10
      }, {
        name: "Banana Bread (1 slice)",
        calories: 260,
        protein: 4,
        carbs: 38,
        fat: 10
      }, {
        name: "Scone (medium)",
        calories: 340,
        protein: 6,
        carbs: 44,
        fat: 16
      }, {
        name: "Cinnamon Roll (medium)",
        calories: 420,
        protein: 6,
        carbs: 58,
        fat: 18
      }, {
        name: "Danish Pastry (1 piece)",
        calories: 310,
        protein: 5,
        carbs: 34,
        fat: 17
      }, {
        name: "Donut (glazed)",
        calories: 260,
        protein: 3,
        carbs: 30,
        fat: 14
      }, {
        name: "Donut (chocolate frosted)",
        calories: 300,
        protein: 3,
        carbs: 34,
        fat: 17
      }, {
        name: "Donut (jelly-filled)",
        calories: 290,
        protein: 4,
        carbs: 38,
        fat: 14
      }, {
        name: "Pop-Tart (1 pastry)",
        calories: 200,
        protein: 2,
        carbs: 36,
        fat: 5
      },
      // Pies & Tarts
      {
        name: "Apple Pie (1 slice)",
        calories: 296,
        protein: 2,
        carbs: 43,
        fat: 14
      }, {
        name: "Pumpkin Pie (1 slice)",
        calories: 316,
        protein: 7,
        carbs: 41,
        fat: 14
      }, {
        name: "Pecan Pie (1 slice)",
        calories: 503,
        protein: 6,
        carbs: 64,
        fat: 27
      }, {
        name: "Cherry Pie (1 slice)",
        calories: 325,
        protein: 3,
        carbs: 50,
        fat: 14
      }, {
        name: "Key Lime Pie (1 slice)",
        calories: 350,
        protein: 5,
        carbs: 44,
        fat: 18
      }, {
        name: "Fruit Tart (1 piece)",
        calories: 280,
        protein: 3,
        carbs: 36,
        fat: 14
      },
      // Frozen & Creamy
      {
        name: "Ice Cream Sundae",
        calories: 350,
        protein: 5,
        carbs: 48,
        fat: 16
      }, {
        name: "Banana Split",
        calories: 520,
        protein: 8,
        carbs: 72,
        fat: 22
      }, {
        name: "Milkshake (chocolate, 16oz)",
        calories: 580,
        protein: 12,
        carbs: 80,
        fat: 24
      }, {
        name: "Milkshake (vanilla, 16oz)",
        calories: 530,
        protein: 12,
        carbs: 72,
        fat: 22
      }, {
        name: "Popsicle (1 bar)",
        calories: 42,
        protein: 0,
        carbs: 10,
        fat: 0
      }, {
        name: "Fudgsicle (1 bar)",
        calories: 80,
        protein: 3,
        carbs: 15,
        fat: 1
      }, {
        name: "Ice Cream Bar (coated)",
        calories: 260,
        protein: 3,
        carbs: 24,
        fat: 17
      }, {
        name: "Pudding (chocolate, 1/2 cup)",
        calories: 150,
        protein: 3,
        carbs: 26,
        fat: 4
      }, {
        name: "Pudding (vanilla, 1/2 cup)",
        calories: 140,
        protein: 3,
        carbs: 24,
        fat: 4
      }, {
        name: "Rice Pudding (1/2 cup)",
        calories: 170,
        protein: 4,
        carbs: 28,
        fat: 4
      }, {
        name: "Crème Brûlée",
        calories: 310,
        protein: 5,
        carbs: 28,
        fat: 20
      }, {
        name: "Tiramisu (1 serving)",
        calories: 350,
        protein: 6,
        carbs: 38,
        fat: 20
      }, {
        name: "Panna Cotta",
        calories: 280,
        protein: 4,
        carbs: 24,
        fat: 18
      }, {
        name: "Flan (1 serving)",
        calories: 220,
        protein: 6,
        carbs: 30,
        fat: 8
      }, {
        name: "Mousse (chocolate, 1/2 cup)",
        calories: 230,
        protein: 4,
        carbs: 22,
        fat: 14
      },
      // Other
      {
        name: "Cobbler (fruit, 1 serving)",
        calories: 320,
        protein: 3,
        carbs: 48,
        fat: 14
      }, {
        name: "Baklava (1 piece)",
        calories: 230,
        protein: 4,
        carbs: 28,
        fat: 12
      }, {
        name: "Churro (1 piece)",
        calories: 220,
        protein: 3,
        carbs: 28,
        fat: 11
      }, {
        name: "Cannoli (1 piece)",
        calories: 310,
        protein: 7,
        carbs: 28,
        fat: 20
      }, {
        name: "Éclair (1 piece)",
        calories: 260,
        protein: 6,
        carbs: 26,
        fat: 16
      }, {
        name: "Macaron (1 piece)",
        calories: 70,
        protein: 1,
        carbs: 10,
        fat: 3
      }, {
        name: "Mochi Ice Cream (1 piece)",
        calories: 110,
        protein: 1,
        carbs: 17,
        fat: 4
      }, {
        name: "Jello (1/2 cup)",
        calories: 80,
        protein: 2,
        carbs: 19,
        fat: 0
      }]
    };

    // State management for nutrition features

    var _todayKey = getTodayLocal();
    var todaysMeals = nutritionData && nutritionData[_todayKey] ? nutritionData[_todayKey] : {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: []
    };

    // Calculate daily totals
    var calculateTotals = function calculateTotals() {
      var allFoods = Object.values(todaysMeals).flat();
      return allFoods.reduce(function (totals, food) {
        return {
          calories: totals.calories + (food.calories || 0),
          protein: totals.protein + (food.protein || 0),
          carbs: totals.carbs + (food.carbs || 0),
          fat: totals.fat + (food.fat || 0)
        };
      }, {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      });
    };
    var dailyTotals = calculateTotals();
    var addFoodToMeal = function addFoodToMeal(food) {
      var mealType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedMeal;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var updatedMeals = _objectSpread(_objectSpread({}, todaysMeals), {}, _defineProperty({}, mealType, [].concat(_toConsumableArray(todaysMeals[mealType]), [food])));
      var updatedNutrition = _objectSpread(_objectSpread({}, nutritionData), {}, _defineProperty({}, _todayKey, updatedMeals));
      setNutritionData(updatedNutrition);
      localStorage.setItem('vita-nutrition', JSON.stringify(updatedNutrition));
      if (options.closeModal !== false) setShowAddFood(false);
    };
    var addFood = function addFood(food) {
      return addFoodToMeal(food, selectedMeal);
    };
    var addCustomFood = function addCustomFood() {
      if (!customFood.name.trim()) return;
      addFood({
        name: customFood.name.trim(),
        calories: parseInt(customFood.calories) || 0,
        protein: parseInt(customFood.protein) || 0,
        carbs: parseInt(customFood.carbs) || 0,
        fat: parseInt(customFood.fat) || 0
      });
      setCustomFood({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: ''
      });
    };
    var removeFood = function removeFood(mealType, index) {
      var updatedMeals = _objectSpread(_objectSpread({}, todaysMeals), {}, _defineProperty({}, mealType, todaysMeals[mealType].filter(function (_, i) {
        return i !== index;
      })));
      var updatedNutrition = _objectSpread(_objectSpread({}, nutritionData), {}, _defineProperty({}, _todayKey, updatedMeals));
      setNutritionData(updatedNutrition);
      localStorage.setItem('vita-nutrition', JSON.stringify(updatedNutrition));
    };
    var getYesterdayKey = function getYesterdayKey() {
      var date = new Date();
      date.setDate(date.getDate() - 1);
      var y = date.getFullYear();
      var m = String(date.getMonth() + 1).padStart(2, '0');
      var day = String(date.getDate()).padStart(2, '0');
      return "".concat(y, "-").concat(m, "-").concat(day);
    };
    var getNutritionHistory = function getNutritionHistory() {
      return Object.entries(nutritionData || {}).filter(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
          date = _ref10[0];
        return date !== _todayKey;
      }).sort(function (_ref11, _ref12) {
        var _ref13 = _slicedToArray(_ref11, 1),
          a = _ref13[0];
        var _ref14 = _slicedToArray(_ref12, 1),
          b = _ref14[0];
        return new Date(b) - new Date(a);
      });
    };
    var getFrequentFoods = function getFrequentFoods() {
      var mealType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
      var counts = {};
      getNutritionHistory().forEach(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
          meals = _ref16[1];
        var mealEntries = mealType ? [meals[mealType] || []] : Object.values(meals || {});
        mealEntries.flat().forEach(function (food) {
          if (!food || !food.name) return;
          if (!counts[food.name]) counts[food.name] = {
            food: food,
            count: 0
          };
          counts[food.name].count += 1;
        });
      });
      return Object.values(counts).sort(function (a, b) {
        return b.count - a.count;
      }).slice(0, limit);
    };
    var getRecentFoods = function getRecentFoods() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var seen = new Set();
      var recent = [];
      getNutritionHistory().forEach(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
          meals = _ref18[1];
        Object.values(meals || {}).flat().forEach(function (food) {
          if (!food || !food.name || seen.has(food.name)) return;
          seen.add(food.name);
          recent.push(food);
        });
      });
      return recent.slice(0, limit);
    };
    var getYesterdayMeal = function getYesterdayMeal(mealType) {
      var yesterdayMeals = nutritionData && nutritionData[getYesterdayKey()] || null;
      return yesterdayMeals ? yesterdayMeals[mealType] || [] : [];
    };
    var copyYesterdayMeal = function copyYesterdayMeal(mealType) {
      var yesterdayFoods = getYesterdayMeal(mealType);
      if (yesterdayFoods.length === 0) return;
      var updatedMeals = _objectSpread(_objectSpread({}, todaysMeals), {}, _defineProperty({}, mealType, [].concat(_toConsumableArray(todaysMeals[mealType]), _toConsumableArray(yesterdayFoods))));
      var updatedNutrition = _objectSpread(_objectSpread({}, nutritionData), {}, _defineProperty({}, _todayKey, updatedMeals));
      setNutritionData(updatedNutrition);
      localStorage.setItem('vita-nutrition', JSON.stringify(updatedNutrition));
    };
    var frequentFoods = getFrequentFoods(null, 8);
    var recentFoods = getRecentFoods(8);

    // Filter foods based on search term
    var filterFoods = function filterFoods(foods) {
      if (!foodSearchTerm.trim()) return foods;
      return foods.filter(function (food) {
        return food.name.toLowerCase().includes(foodSearchTerm.toLowerCase());
      });
    };

    // Data export functionality
    var _exportData = function _exportData() {
      var exportData = {
        version: '1.2.0',
        timestamp: new Date().toISOString(),
        app: 'Vita - Personal Development Tracker',
        data: {
          history: history,
          nutritionData: nutritionData,
          knowledgeBase: knowledgeBase,
          spacedRepetition: spacedRepetition,
          currentBookApplication: currentBookApplication,
          challenges: challenges,
          completedChallenges: completedChallenges,
          badges: badges,
          aiCoachInsights: aiCoachInsights,
          readingProgress: readingProgress,
          readingHistory: readingHistory,
          customTasks: JSON.parse(localStorage.getItem('vita-custom-tasks') || '[]'),
          hiddenTasks: JSON.parse(localStorage.getItem('vita-hidden-tasks') || '[]'),
          weightHistory: JSON.parse(localStorage.getItem('vita-weight-history') || '[]'),
          sleepData: JSON.parse(localStorage.getItem('vita-sleep-data') || '{}'),
          weeklyReviews: JSON.parse(localStorage.getItem('vita-weekly-reviews') || '{}'),
          trackedHabits: JSON.parse(localStorage.getItem('vita-tracked-habits') || '{}')
        }
      };
      var blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = "vita-backup-".concat(new Date().toISOString().split('T')[0], ".json");
      a.click();
      URL.revokeObjectURL(url);

      // Update last backup timestamp
      localStorage.setItem('vita-last-backup', new Date().toISOString());
      alert('✅ Data exported successfully! File downloaded to your device.');
    };

    // Data import functionality
    var _importData = function _importData(event) {
      var file = event.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var importedData = JSON.parse(e.target.result);

          // Validate data structure
          if (!importedData.data || !importedData.app || importedData.app !== 'Vita - Personal Development Tracker') {
            alert('❌ Invalid backup file format. Please select a valid Vita backup file.');
            return;
          }
          if (!confirm('⚠️ This will replace all your current data. Are you sure you want to continue?')) {
            return;
          }

          // Import data
          var _data = importedData.data;

          // Save to localStorage
          if (_data.history) localStorage.setItem('vita-history', JSON.stringify(_data.history));
          if (_data.nutritionData) localStorage.setItem('vita-nutrition', JSON.stringify(_data.nutritionData));
          if (_data.knowledgeBase) localStorage.setItem('vita-knowledge-base', JSON.stringify(_data.knowledgeBase));
          if (_data.spacedRepetition) localStorage.setItem('vita-spaced-repetition', JSON.stringify(_data.spacedRepetition));
          if (_data.challenges) localStorage.setItem('vita-challenges', JSON.stringify(_data.challenges));
          if (_data.completedChallenges) localStorage.setItem('vita-completed-challenges', JSON.stringify(_data.completedChallenges));
          if (_data.badges) localStorage.setItem('vita-badges', JSON.stringify(_data.badges));
          if (_data.aiCoachInsights) localStorage.setItem('vita-ai-insights', JSON.stringify(_data.aiCoachInsights));
          if (_data.readingProgress) localStorage.setItem('vita-reading-progress', JSON.stringify(_data.readingProgress));
          if (_data.readingHistory) localStorage.setItem('vita-reading-history', JSON.stringify(_data.readingHistory));
          if (_data.customTasks) localStorage.setItem('vita-custom-tasks', JSON.stringify(_data.customTasks));
          if (_data.hiddenTasks) localStorage.setItem('vita-hidden-tasks', JSON.stringify(_data.hiddenTasks));
          if (_data.weightHistory) localStorage.setItem('vita-weight-history', JSON.stringify(_data.weightHistory));
          if (_data.sleepData) localStorage.setItem('vita-sleep-data', JSON.stringify(_data.sleepData));
          if (_data.weeklyReviews) localStorage.setItem('vita-weekly-reviews', JSON.stringify(_data.weeklyReviews));
          if (_data.trackedHabits) localStorage.setItem('vita-tracked-habits', JSON.stringify(_data.trackedHabits));
          alert('✅ Data imported successfully! Refreshing the app...');
          window.location.reload();
        } catch (error) {
          alert('❌ Error importing data. Please check the file format and try again.');
          console.error('Import error:', error);
        }
      };
      reader.readAsText(file);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('data');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Data"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('dashboard');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Dashboard"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach-ai');
      },
      className: "px-3 py-2 bg-slate-700 text-gray-300 rounded-lg text-xs"
    }, "AI Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold mb-4 text-center"
    }, "Today's Nutrition"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-orange-400"
    }, dailyTotals.calories), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Calories")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-blue-400"
    }, dailyTotals.protein, "g"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Protein")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-400"
    }, dailyTotals.carbs, "g"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Carbs")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-purple-400"
    }, dailyTotals.fat, "g"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Fat"))), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAddFood(true);
      },
      className: "px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
    }, "+ Add Food"))), (frequentFoods.length > 0 || recentFoods.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-amber-400"
    }, "Quick Add"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Based on foods you usually log")), /*#__PURE__*/React.createElement("select", {
      value: selectedMeal,
      onChange: function onChange(e) {
        return setSelectedMeal(e.target.value);
      },
      className: "p-2 bg-slate-700 rounded text-white text-sm"
    }, /*#__PURE__*/React.createElement("option", {
      value: "breakfast"
    }, "Breakfast"), /*#__PURE__*/React.createElement("option", {
      value: "lunch"
    }, "Lunch"), /*#__PURE__*/React.createElement("option", {
      value: "dinner"
    }, "Dinner"), /*#__PURE__*/React.createElement("option", {
      value: "snacks"
    }, "Snacks"))), frequentFoods.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-wide text-gray-500 mb-2"
    }, "Most common"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 overflow-x-auto pb-1"
    }, frequentFoods.map(function (_ref19) {
      var food = _ref19.food,
        count = _ref19.count;
      return /*#__PURE__*/React.createElement("button", {
        key: "freq-".concat(food.name),
        onClick: function onClick() {
          return addFoodToMeal(food, selectedMeal, {
            closeModal: false
          });
        },
        className: "shrink-0 px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-left min-w-[150px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-medium text-white truncate"
      }, food.name), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-gray-400"
      }, food.calories, " cal \u2022 used ", count, "x"));
    }))), recentFoods.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-wide text-gray-500 mb-2"
    }, "Recent"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 overflow-x-auto pb-1"
    }, recentFoods.map(function (food) {
      return /*#__PURE__*/React.createElement("button", {
        key: "recent-".concat(food.name),
        onClick: function onClick() {
          return addFoodToMeal(food, selectedMeal, {
            closeModal: false
          });
        },
        className: "shrink-0 px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-left min-w-[150px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-medium text-white truncate"
      }, food.name), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-gray-400"
      }, food.calories, " cal \u2022 P:", food.protein, "g"));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4 mb-6"
    }, ['breakfast', 'lunch', 'dinner', 'snacks'].map(function (mealType) {
      return /*#__PURE__*/React.createElement("div", {
        key: mealType,
        className: "bg-slate-800 rounded-xl p-4 border border-slate-700"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center mb-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold capitalize text-amber-400"
      }, mealType), /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-gray-400"
      }, todaysMeals[mealType].reduce(function (sum, food) {
        return sum + (food.calories || 0);
      }, 0), " cal")), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2"
      }, getYesterdayMeal(mealType).length > 0 && todaysMeals[mealType].length === 0 && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return copyYesterdayMeal(mealType);
        },
        className: "px-3 py-1 bg-indigo-600 text-white rounded text-xs hover:bg-indigo-700"
      }, "Same as yesterday"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setSelectedMeal(mealType);
          setShowAddFood(true);
        },
        className: "px-3 py-1 bg-amber-600 text-white rounded text-xs hover:bg-amber-700"
      }, "+ Add"))), todaysMeals[mealType].length === 0 ? /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm italic"
      }, "No foods logged yet") : /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, todaysMeals[mealType].map(function (food, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "flex justify-between items-center bg-slate-700 rounded p-2"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm"
        }, food.name), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400"
        }, food.calories, " cal \u2022 P:", food.protein, "g \u2022 C:", food.carbs, "g \u2022 F:", food.fat, "g")), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return removeFood(mealType, index);
          },
          className: "text-red-400 hover:text-red-300 text-sm"
        }, "\u2715"));
      })), getFrequentFoods(mealType, 4).length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-slate-700"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 mb-2"
      }, "Usually for ", mealType), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2 overflow-x-auto pb-1"
      }, getFrequentFoods(mealType, 4).map(function (_ref20) {
        var food = _ref20.food,
          count = _ref20.count;
        return /*#__PURE__*/React.createElement("button", {
          key: "".concat(mealType, "-quick-").concat(food.name),
          onClick: function onClick() {
            return addFoodToMeal(food, mealType, {
              closeModal: false
            });
          },
          className: "shrink-0 px-2 py-1 bg-slate-700 rounded text-xs hover:bg-slate-600 text-gray-200"
        }, "+ ", food.name, " ", /*#__PURE__*/React.createElement("span", {
          className: "text-gray-500"
        }, "(", count, "x)"));
      }))));
    })), showAddFood && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 w-full max-w-md border border-slate-700 max-h-96 overflow-y-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold"
    }, "Add Food"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAddFood(false);
      },
      className: "text-gray-400 hover:text-white"
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Meal Type"), /*#__PURE__*/React.createElement("select", {
      value: selectedMeal,
      onChange: function onChange(e) {
        return setSelectedMeal(e.target.value);
      },
      className: "w-full p-2 bg-slate-700 rounded text-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: "breakfast"
    }, "Breakfast"), /*#__PURE__*/React.createElement("option", {
      value: "lunch"
    }, "Lunch"), /*#__PURE__*/React.createElement("option", {
      value: "dinner"
    }, "Dinner"), /*#__PURE__*/React.createElement("option", {
      value: "snacks"
    }, "Snacks"))), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Search Foods"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: foodSearchTerm,
      onChange: function onChange(e) {
        return setFoodSearchTerm(e.target.value);
      },
      placeholder: "Search for foods...",
      className: "w-full p-2 bg-slate-700 rounded text-white placeholder-gray-400"
    }), foodSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFoodSearchTerm('');
      },
      className: "text-xs text-gray-400 hover:text-white mt-1"
    }, "Clear search")), /*#__PURE__*/React.createElement("details", {
      className: "mb-4 bg-slate-900/60 rounded-lg border border-slate-700"
    }, /*#__PURE__*/React.createElement("summary", {
      className: "cursor-pointer p-3 text-sm text-amber-400"
    }, "Can't find it? Add quick custom food"), /*#__PURE__*/React.createElement("div", {
      className: "p-3 pt-0"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: customFood.name,
      onChange: function onChange(e) {
        return setCustomFood(_objectSpread(_objectSpread({}, customFood), {}, {
          name: e.target.value
        }));
      },
      placeholder: "Food name",
      className: "w-full p-2 bg-slate-700 rounded text-white placeholder-gray-400 text-sm mb-2"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: customFood.calories,
      onChange: function onChange(e) {
        return setCustomFood(_objectSpread(_objectSpread({}, customFood), {}, {
          calories: e.target.value
        }));
      },
      placeholder: "Cal",
      className: "p-2 bg-slate-700 rounded text-white placeholder-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: customFood.protein,
      onChange: function onChange(e) {
        return setCustomFood(_objectSpread(_objectSpread({}, customFood), {}, {
          protein: e.target.value
        }));
      },
      placeholder: "P",
      className: "p-2 bg-slate-700 rounded text-white placeholder-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: customFood.carbs,
      onChange: function onChange(e) {
        return setCustomFood(_objectSpread(_objectSpread({}, customFood), {}, {
          carbs: e.target.value
        }));
      },
      placeholder: "C",
      className: "p-2 bg-slate-700 rounded text-white placeholder-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: customFood.fat,
      onChange: function onChange(e) {
        return setCustomFood(_objectSpread(_objectSpread({}, customFood), {}, {
          fat: e.target.value
        }));
      },
      placeholder: "F",
      className: "p-2 bg-slate-700 rounded text-white placeholder-gray-400 text-sm"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addCustomFood,
      className: "w-full py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700"
    }, "Add Custom Food to ", selectedMeal))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4 max-h-80 overflow-y-auto"
    }, Object.entries(foodDatabase).map(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
        category = _ref22[0],
        foods = _ref22[1];
      var filteredFoods = filterFoods(foods);
      if (filteredFoods.length === 0) return null;
      return /*#__PURE__*/React.createElement("div", {
        key: category
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-medium capitalize mb-2 text-amber-400"
      }, category, " (", filteredFoods.length, foodSearchTerm ? " of ".concat(foods.length) : '', ")"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-1"
      }, filteredFoods.map(function (food, index) {
        return /*#__PURE__*/React.createElement("button", {
          key: "".concat(category, "-").concat(index),
          onClick: function onClick() {
            return addFood(food);
          },
          className: "w-full text-left p-2 bg-slate-700 rounded hover:bg-slate-600 transition-colors"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex justify-between"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-sm font-medium"
        }, food.name), /*#__PURE__*/React.createElement("span", {
          className: "text-sm text-amber-400"
        }, food.calories, " cal")), /*#__PURE__*/React.createElement("div", {
          className: "text-xs text-gray-400 mt-1"
        }, "P:", food.protein, "g \u2022 C:", food.carbs, "g \u2022 F:", food.fat, "g"));
      })));
    }).filter(Boolean)))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4"
    }, "\uD83C\uDFAF Nutrition Goals"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "Calories"), /*#__PURE__*/React.createElement("span", {
      className: dailyTotals.calories > 2000 ? 'text-red-400' : dailyTotals.calories > 1500 ? 'text-yellow-400' : 'text-green-400'
    }, dailyTotals.calories, "/2000")), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-green-500 h-2 rounded-full",
      style: {
        width: "".concat(Math.min(dailyTotals.calories / 2000 * 100, 100), "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "Protein"), /*#__PURE__*/React.createElement("span", {
      className: dailyTotals.protein > 150 ? 'text-red-400' : dailyTotals.protein > 100 ? 'text-yellow-400' : 'text-green-400'
    }, dailyTotals.protein, "g/150g")), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-500 h-2 rounded-full",
      style: {
        width: "".concat(Math.min(dailyTotals.protein / 150 * 100, 100), "%")
      }
    }))))));
  }
  if (view === 'intelligence') {
    // Analyze patterns and provide personalized insights
    var analyzePatterns = function analyzePatterns() {
      if (history.length < 7) {
        return {
          insights: [],
          message: "Need at least 7 days of data to generate insights. Keep tracking!"
        };
      }
      var insights = [];
      var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      // Analyze workout patterns
      var workoutDays = history.filter(function (d) {
        return d.workoutDone;
      });
      if (workoutDays.length > 0) {
        var _Object$entries$sort$2;
        var workoutDayCounts = {};
        workoutDays.forEach(function (day) {
          var dayName = new Date(day.date).toLocaleDateString('en-US', {
            weekday: 'long'
          });
          workoutDayCounts[dayName] = (workoutDayCounts[dayName] || 0) + 1;
        });
        var bestWorkoutDay = (_Object$entries$sort$2 = Object.entries(workoutDayCounts).sort(function (_ref23, _ref24) {
          var _ref25 = _slicedToArray(_ref23, 2),
            a = _ref25[1];
          var _ref26 = _slicedToArray(_ref24, 2),
            b = _ref26[1];
          return b - a;
        })[0]) === null || _Object$entries$sort$2 === void 0 ? void 0 : _Object$entries$sort$2[0];
        if (bestWorkoutDay) {
          insights.push({
            type: 'workout',
            icon: '💪',
            title: 'Workout Patterns',
            insight: "You workout most consistently on ".concat(bestWorkoutDay, "s. Consider scheduling important workouts on this day."),
            impact: 'High'
          });
        }
      }

      // Analyze task completion vs mood
      var moodData = history.filter(function (d) {
        return d.mood;
      });
      if (moodData.length > 3) {
        var moodTaskCorrelation = {};
        moodData.forEach(function (day) {
          var mood = day.mood;
          var taskRate = day.done ? day.done.length / 18 * 100 : 0;
          if (!moodTaskCorrelation[mood]) moodTaskCorrelation[mood] = [];
          moodTaskCorrelation[mood].push(taskRate);
        });
        var bestMood = Object.entries(moodTaskCorrelation).map(function (_ref27) {
          var _ref28 = _slicedToArray(_ref27, 2),
            mood = _ref28[0],
            rates = _ref28[1];
          return {
            mood: mood,
            avgTasks: rates.reduce(function (a, b) {
              return a + b;
            }, 0) / rates.length
          };
        }).sort(function (a, b) {
          return b.avgTasks - a.avgTasks;
        })[0];
        if (bestMood && bestMood.avgTasks > 50) {
          insights.push({
            type: 'mood',
            icon: '😊',
            title: 'Mood & Productivity',
            insight: "You're most productive when feeling ".concat(bestMood.mood, " (").concat(Math.round(bestMood.avgTasks), "% task completion). Try to cultivate this emotional state."),
            impact: 'High'
          });
        }
      }

      // Analyze reading patterns
      var readingDays = history.filter(function (d) {
        return d.done && d.done.some(function (task) {
          return task.includes('read');
        });
      });
      if (readingDays.length > 0) {
        var avgTasksOnReadingDays = readingDays.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / readingDays.length;
        var avgTasksOverall = history.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / history.length;
        if (avgTasksOnReadingDays > avgTasksOverall + 2) {
          insights.push({
            type: 'reading',
            icon: '📚',
            title: 'Reading Impact',
            insight: "You complete ".concat(Math.round(avgTasksOnReadingDays - avgTasksOverall), " more tasks on days you read. Reading boosts your productivity!"),
            impact: 'Medium'
          });
        }
      }

      // Analyze water intake patterns
      var waterData = history.filter(function (d) {
        return d.water && d.water > 0;
      });
      if (waterData.length > 3) {
        var avgTasksWithWater = waterData.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / waterData.length;
        var _avgTasksOverall = history.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / history.length;
        if (avgTasksWithWater > _avgTasksOverall + 1) {
          insights.push({
            type: 'hydration',
            icon: '💧',
            title: 'Hydration Habits',
            insight: "You perform better when staying hydrated. Consider increasing water intake for optimal productivity.",
            impact: 'Medium'
          });
        }
      }

      // Analyze sleep patterns (using morning routine as proxy)
      var morningRoutineDays = history.filter(function (d) {
        return d.done && d.done.some(function (task) {
          return task.includes('cold') || task.includes('sun');
        });
      });
      if (morningRoutineDays.length > 0) {
        var avgTasksMorningDays = morningRoutineDays.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / morningRoutineDays.length;
        var _avgTasksOverall2 = history.reduce(function (sum, day) {
          return sum + (day.done ? day.done.length : 0);
        }, 0) / history.length;
        if (avgTasksMorningDays > _avgTasksOverall2 + 1) {
          insights.push({
            type: 'routine',
            icon: '🌅',
            title: 'Morning Routine',
            insight: "Your morning routine (cold exposure/sunlight) boosts productivity by ".concat(Math.round(avgTasksMorningDays - _avgTasksOverall2), " tasks per day."),
            impact: 'High'
          });
        }
      }

      // Analyze deep work patterns
      var deepWorkDays = history.filter(function (d) {
        return d.deepWork && parseFloat(d.deepWork) > 0;
      });
      if (deepWorkDays.length > 3) {
        var deepWorkTaskCorr = deepWorkDays.map(function (day) {
          return {
            deepWork: parseFloat(day.deepWork) || 0,
            tasks: day.done ? day.done.length : 0
          };
        });
        var correlation = deepWorkTaskCorr.reduce(function (sum, data) {
          return sum + data.deepWork * data.tasks;
        }, 0) / deepWorkTaskCorr.length;
        if (correlation > 5) {
          insights.push({
            type: 'focus',
            icon: '🎯',
            title: 'Deep Work Benefits',
            insight: "Your deep work sessions strongly correlate with task completion. More focused time = better results.",
            impact: 'High'
          });
        }
      }
      return {
        insights: insights,
        message: insights.length === 0 ? "Keep tracking for more personalized insights!" : "Found ".concat(insights.length, " patterns in your data!")
      };
    };
    var _analyzePatterns = analyzePatterns(),
      insights = _analyzePatterns.insights,
      message = _analyzePatterns.message;
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach-ai');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "AI Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDD01"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-amber-400"
    }, "Habit Intelligence"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300"
    }, "Adaptive insights based on your patterns"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg text-white"
    }, message), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mt-1"
    }, "Data from last ", history.length, " days analyzed")), history.length >= 7 && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setSaveStatus('🔄 Re-analyzing your patterns...');
        setTimeout(function () {
          return setSaveStatus('');
        }, 2000);
      },
      className: "px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
    }, "\uD83D\uDD04 Refresh Insights"))), insights.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, insights.map(function (insight, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-3xl"
      }, insight.icon), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "text-lg font-bold text-amber-400"
      }, insight.title), /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-1 rounded text-xs font-medium ".concat(insight.impact === 'High' ? 'bg-red-600 text-white' : insight.impact === 'Medium' ? 'bg-yellow-600 text-white' : 'bg-green-600 text-white')
      }, insight.impact, " Impact")), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 leading-relaxed"
      }, insight.insight), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        className: "px-3 py-1 bg-slate-700 text-white rounded text-sm hover:bg-slate-600"
      }, "\u2705 Applied"), /*#__PURE__*/React.createElement("button", {
        className: "px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500"
      }, "\uD83E\uDD14 Not Relevant")))));
    })), history.length >= 7 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 mt-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCCA Your Patterns"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-green-400"
    }, "Most Productive Day"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, function (_averages$sort$) {
      var dayAverages = {};
      history.forEach(function (day) {
        var dayName = new Date(day.date).toLocaleDateString('en-US', {
          weekday: 'short'
        });
        if (!dayAverages[dayName]) dayAverages[dayName] = [];
        dayAverages[dayName].push(day.done ? day.done.length : 0);
      });
      var averages = Object.entries(dayAverages).map(function (_ref29) {
        var _ref30 = _slicedToArray(_ref29, 2),
          day = _ref30[0],
          tasks = _ref30[1];
        return {
          day: day,
          avg: tasks.reduce(function (a, b) {
            return a + b;
          }, 0) / tasks.length
        };
      });
      return ((_averages$sort$ = averages.sort(function (a, b) {
        return b.avg - a.avg;
      })[0]) === null || _averages$sort$ === void 0 ? void 0 : _averages$sort$.day) || 'N/A';
    }()), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Highest task completion")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-blue-400"
    }, "Consistency Score"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, Math.round(history.filter(function (d) {
      return d.done && d.done.length > 0;
    }).length / history.length * 100), "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Days with activity")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-purple-400"
    }, "Workout Frequency"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, Math.round(history.filter(function (d) {
      return d.workoutDone;
    }).length / history.length * 100), "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Days with workouts")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-yellow-400"
    }, "Reading Streak"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, function () {
      var currentStreak = 0;
      var maxStreak = 0;
      for (var i = history.length - 1; i >= 0; i--) {
        if (history[i].done && history[i].done.some(function (task) {
          return task.includes('read');
        })) {
          currentStreak++;
          maxStreak = Math.max(maxStreak, currentStreak);
        } else {
          currentStreak = 0;
        }
      }
      return maxStreak;
    }(), " days"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Longest reading streak")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 mt-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDD2E Tomorrow's Predictions"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, function () {
      var predictions = [];

      // Workout prediction
      var recentWorkouts = history.slice(0, 7).filter(function (d) {
        return d.workoutDone;
      }).length;
      if (recentWorkouts >= 4) {
        predictions.push("High chance you'll complete tomorrow's workout based on your recent consistency!");
      } else if (recentWorkouts <= 2) {
        predictions.push("Consider scheduling tomorrow's workout - your pattern shows you might skip otherwise.");
      }

      // Productivity prediction
      var avgTasks = history.slice(0, 7).reduce(function (sum, d) {
        return sum + (d.done ? d.done.length : 0);
      }, 0) / 7;
      if (avgTasks >= 12) {
        predictions.push("You're on a productivity high - tomorrow could be another strong day!");
      } else if (avgTasks <= 6) {
        predictions.push("Tomorrow might be challenging - consider starting with your easiest task first.");
      }

      // Mood prediction based on recent patterns
      var recentMoods = history.slice(0, 3).filter(function (d) {
        return d.mood;
      }).map(function (d) {
        return d.mood;
      });
      if (recentMoods.length > 0) {
        var mostCommonMood = recentMoods.sort(function (a, b) {
          return recentMoods.filter(function (v) {
            return v === a;
          }).length - recentMoods.filter(function (v) {
            return v === b;
          }).length;
        }).pop();
        predictions.push("Based on recent days, you might feel ".concat(mostCommonMood, " tomorrow."));
      }
      return predictions.length > 0 ? predictions : ["Keep tracking for personalized predictions!"];
    }().map(function (prediction, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-3 p-3 bg-slate-700 rounded-lg"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-amber-400 mt-1"
      }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm"
      }, prediction));
    })))));
  }
  if (view === 'wellness') {
    // Analyze mood and energy patterns with correlations
    var analyzeWellness = function analyzeWellness() {
      if (history.length < 3) {
        return {
          moodEnergyData: [],
          correlations: [],
          insights: [],
          message: "Need at least 3 days of mood/energy data. Start tracking your feelings!"
        };
      }
      var moodEnergyData = history.filter(function (d) {
        return d.mood || d.energyLevel;
      }).map(function (day) {
        return {
          date: day.date,
          mood: day.mood,
          energy: day.energyLevel,
          tasks: day.done ? day.done.length : 0,
          workoutDone: day.workoutDone,
          water: day.water || 0,
          sleepQuality: day.done && day.done.some(function (task) {
            return task.includes('sleep');
          }) ? 'good' : 'unknown',
          socialTime: day.done && day.done.some(function (task) {
            return task.includes('connect');
          }) ? 'yes' : 'no',
          deepWork: day.deepWork ? parseFloat(day.deepWork) : 0,
          nutritionLogged: function () {
            try {
              var nd = JSON.parse(localStorage.getItem('vita-nutrition') || '{}');
              var meals = nd[day.date];
              return meals ? Object.values(meals).some(function (arr) {
                return Array.isArray(arr) && arr.length > 0;
              }) : false;
            } catch (e) {
              return false;
            }
          }()
        };
      });

      // Calculate correlations
      var correlations = [];

      // Mood vs Task Completion
      var moodTaskData = moodEnergyData.filter(function (d) {
        return d.mood;
      });
      if (moodTaskData.length >= 3) {
        var moodScores = {
          '😊 Sharp': 5,
          '🙂 Good': 4,
          '😐 Okay': 3,
          '😔 Off': 2,
          '😰 Hard': 1
        };
        var avgTasksByMood = {};
        moodTaskData.forEach(function (d) {
          if (!avgTasksByMood[d.mood]) avgTasksByMood[d.mood] = [];
          avgTasksByMood[d.mood].push(d.tasks);
        });
        var moodCorrelations = Object.entries(avgTasksByMood).map(function (_ref31) {
          var _ref32 = _slicedToArray(_ref31, 2),
            mood = _ref32[0],
            tasks = _ref32[1];
          return {
            factor: mood,
            avgTasks: tasks.reduce(function (a, b) {
              return a + b;
            }, 0) / tasks.length,
            moodScore: moodScores[mood] || 3
          };
        }).sort(function (a, b) {
          return b.avgTasks - a.avgTasks;
        });
        correlations.push({
          title: 'Mood vs Productivity',
          factor: 'Emotional State',
          data: moodCorrelations,
          insight: "".concat(moodCorrelations[0].factor, " days show ").concat(Math.round(moodCorrelations[0].avgTasks), " avg tasks vs ").concat(moodCorrelations[moodCorrelations.length - 1].factor, " days with ").concat(Math.round(moodCorrelations[moodCorrelations.length - 1].avgTasks), " avg tasks"),
          recommendation: "Prioritize activities that help you feel ".concat(moodCorrelations[0].factor.split(' ')[1])
        });
      }

      // Energy vs Workouts
      var energyWorkoutData = moodEnergyData.filter(function (d) {
        return d.energy;
      });
      if (energyWorkoutData.length >= 3) {
        var energyLevels = {
          'high': 4,
          'good': 3,
          'low': 2,
          'exhausted': 1
        };
        var workoutRates = {};
        energyWorkoutData.forEach(function (d) {
          var energy = d.energy;
          if (!workoutRates[energy]) workoutRates[energy] = {
            total: 0,
            workouts: 0
          };
          workoutRates[energy].total++;
          if (d.workoutDone) workoutRates[energy].workouts++;
        });
        var energyCorrelations = Object.entries(workoutRates).map(function (_ref33) {
          var _ref34 = _slicedToArray(_ref33, 2),
            energy = _ref34[0],
            data = _ref34[1];
          return {
            factor: energy,
            workoutRate: data.workouts / data.total * 100,
            energyScore: energyLevels[energy] || 2
          };
        }).sort(function (a, b) {
          return b.workoutRate - a.workoutRate;
        });
        correlations.push({
          title: 'Energy vs Workouts',
          factor: 'Energy Level',
          data: energyCorrelations,
          insight: "".concat(energyCorrelations[0].factor, " energy days have ").concat(Math.round(energyCorrelations[0].workoutRate), "% workout completion vs ").concat(energyCorrelations[energyCorrelations.length - 1].factor, " days with ").concat(Math.round(energyCorrelations[energyCorrelations.length - 1].workoutRate), "%"),
          recommendation: "Schedule workouts on ".concat(energyCorrelations[0].factor, " energy days for better consistency")
        });
      }

      // Sleep vs Energy
      var sleepEnergyData = moodEnergyData.filter(function (d) {
        return d.energy && d.sleepQuality !== 'unknown';
      });
      if (sleepEnergyData.length >= 3) {
        var sleepEnergyCorr = sleepEnergyData.reduce(function (acc, d) {
          var key = d.sleepQuality;
          if (!acc[key]) acc[key] = {
            count: 0,
            totalEnergy: 0
          };
          acc[key].count++;
          acc[key].totalEnergy += d.energy === 'high' ? 4 : d.energy === 'good' ? 3 : d.energy === 'low' ? 2 : 1;
          return acc;
        }, {});
        var sleepInsights = Object.entries(sleepEnergyCorr).map(function (_ref35) {
          var _ref36 = _slicedToArray(_ref35, 2),
            sleep = _ref36[0],
            data = _ref36[1];
          return {
            sleep: sleep,
            avgEnergy: data.totalEnergy / data.count,
            count: data.count
          };
        }).sort(function (a, b) {
          return b.avgEnergy - a.avgEnergy;
        });
        correlations.push({
          title: 'Sleep vs Energy',
          factor: 'Sleep Quality',
          data: sleepInsights,
          insight: "".concat(sleepInsights[0].sleep, " sleep correlates with ").concat(Math.round(sleepInsights[0].avgEnergy * 25), "% higher energy levels"),
          recommendation: "Prioritize ".concat(sleepInsights[0].sleep, " sleep to maintain high energy throughout the day")
        });
      }

      // Social Time vs Stress/Mood
      var socialMoodData = moodEnergyData.filter(function (d) {
        return d.mood;
      });
      if (socialMoodData.length >= 3) {
        var socialMoodCorr = socialMoodData.reduce(function (acc, d) {
          var social = d.socialTime;
          var moodScore = {
            '😊 Sharp': 5,
            '🙂 Good': 4,
            '😐 Okay': 3,
            '😔 Off': 2,
            '😰 Hard': 1
          }[d.mood] || 3;
          if (!acc[social]) acc[social] = {
            count: 0,
            totalMood: 0
          };
          acc[social].count++;
          acc[social].totalMood += moodScore;
          return acc;
        }, {});
        var socialInsights = Object.entries(socialMoodCorr).map(function (_ref37) {
          var _ref38 = _slicedToArray(_ref37, 2),
            social = _ref38[0],
            data = _ref38[1];
          return {
            social: social === 'yes' ? 'With Social Time' : 'Without Social Time',
            avgMood: data.totalMood / data.count,
            count: data.count
          };
        }).sort(function (a, b) {
          return b.avgMood - a.avgMood;
        });
        correlations.push({
          title: 'Social Time vs Mood',
          factor: 'Social Connection',
          data: socialInsights,
          insight: "Days ".concat(socialInsights[0].social.toLowerCase(), " show ").concat(Math.round(socialInsights[0].avgMood / 5 * 100), "% better mood scores"),
          recommendation: "Incorporate meaningful social connections to improve your emotional wellbeing"
        });
      }

      // Generate insights
      var insights = [];

      // Current day analysis
      var today = new Date().toLocaleDateString();
      var todayData = moodEnergyData.find(function (d) {
        return new Date(d.date).toLocaleDateString() === today;
      });
      if (todayData) {
        if (todayData.energy === 'low' || todayData.energy === 'exhausted') {
          insights.push({
            type: 'energy',
            priority: 'high',
            message: 'Low energy detected. Consider a short walk, hydration, or light stretching.',
            icon: '🔋'
          });
        }
        if (todayData.mood === '😰 Hard' || todayData.mood === '😔 Off') {
          insights.push({
            type: 'mood',
            priority: 'high',
            message: 'Challenging mood detected. Try deep breathing, gratitude, or connecting with someone.',
            icon: '🧘'
          });
        }
      }

      // Pattern-based insights
      if (correlations.length > 0) {
        var topCorrelation = correlations[0];
        insights.push({
          type: 'pattern',
          priority: 'medium',
          message: "Pattern discovered: ".concat(topCorrelation.insight),
          icon: '📊'
        });
      }
      return {
        moodEnergyData: moodEnergyData,
        correlations: correlations,
        insights: insights,
        message: insights.length > 0 ? "Found ".concat(insights.length, " wellness insights!") : "Keep tracking mood & energy for personalized insights."
      };
    };
    var _analyzeWellness = analyzeWellness(),
      moodEnergyData = _analyzeWellness.moodEnergyData,
      correlations = _analyzeWellness.correlations,
      _insights = _analyzeWellness.insights,
      _message = _analyzeWellness.message;

    // Get current mood/energy stats
    var currentMood = data.mood;
    var currentEnergy = data.energyLevel;
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach-ai');
      },
      className: "px-2 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "AI Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold mb-4 text-center text-amber-400"
    }, "\uD83C\uDFE5 Wellness Dashboard"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-3 text-blue-400"
    }, "Current Mood"), /*#__PURE__*/React.createElement("div", {
      className: "text-3xl mb-2"
    }, currentMood || 'Not set'), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, currentMood ? 'Feeling tracked' : 'Tap to set your mood')), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-3 text-green-400"
    }, "Current Energy"), /*#__PURE__*/React.createElement("div", {
      className: "text-3xl mb-2"
    }, currentEnergy === 'high' && '⚡ High', currentEnergy === 'good' && '🔋 Good', currentEnergy === 'low' && '🪫 Low', currentEnergy === 'exhausted' && '😴 Exhausted', !currentEnergy && 'Not set'), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, currentEnergy ? 'Energy level tracked' : 'Tap to set your energy'))), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg text-white mb-2"
    }, _message), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Based on ", moodEnergyData.length, " days of wellness data"))), _insights.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCA1 Wellness Insights"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, _insights.map(function (insight, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-4 p-4 rounded-lg ".concat(insight.priority === 'high' ? 'bg-red-900 border border-red-700' : insight.priority === 'medium' ? 'bg-yellow-900 border border-yellow-700' : 'bg-slate-700')
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, insight.icon), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-white font-medium"
      }, insight.message), /*#__PURE__*/React.createElement("div", {
        className: "mt-2 flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        className: "px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500"
      }, "\u2705 Applied"), /*#__PURE__*/React.createElement("button", {
        className: "px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500"
      }, "\uD83E\uDD14 Later"))));
    }))), correlations.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDD17 Wellness Correlations"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, correlations.map(function (correlation, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-medium mb-2 text-blue-400"
      }, correlation.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm mb-3"
      }, correlation.insight), /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-600 rounded p-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-amber-400"
      }, "\uD83D\uDCA1 ", correlation.recommendation)));
    }))), moodEnergyData.length >= 7 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCC8 Wellness Trends (Last 7 Days)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-green-400"
    }, "Avg Mood Score"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold"
    }, function () {
      var recentData = moodEnergyData.slice(-7);
      var moodScores = recentData.filter(function (d) {
        return d.mood;
      }).map(function (d) {
        return {
          '😊 Sharp': 5,
          '🙂 Good': 4,
          '😐 Okay': 3,
          '😔 Off': 2,
          '😰 Hard': 1
        }[d.mood] || 3;
      });
      return moodScores.length > 0 ? Math.round(moodScores.reduce(function (a, b) {
        return a + b;
      }, 0) / moodScores.length * 20) + '%' : 'N/A';
    }())), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-blue-400"
    }, "Energy Days"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold"
    }, moodEnergyData.slice(-7).filter(function (d) {
      return d.energy === 'high' || d.energy === 'good';
    }).length, "/7"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "high/good energy")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-purple-400"
    }, "Best Mood Day"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-bold"
    }, function () {
      var dayMoods = {};
      moodEnergyData.slice(-7).forEach(function (d) {
        var day = new Date(d.date).toLocaleDateString('en-US', {
          weekday: 'short'
        });
        if (d.mood && !dayMoods[day]) dayMoods[day] = d.mood;
      });
      var bestDay = Object.entries(dayMoods).map(function (_ref39) {
        var _ref40 = _slicedToArray(_ref39, 2),
          day = _ref40[0],
          mood = _ref40[1];
        return {
          day: day,
          score: {
            '😊 Sharp': 5,
            '🙂 Good': 4,
            '😐 Okay': 3,
            '😔 Off': 2,
            '😰 Hard': 1
          }[mood] || 3
        };
      }).sort(function (a, b) {
        return b.score - a.score;
      })[0];
      return bestDay ? bestDay.day : 'N/A';
    }())), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-yellow-400"
    }, "Wellness Streak"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold"
    }, function () {
      var streak = 0;
      for (var i = moodEnergyData.length - 1; i >= 0; i--) {
        if (moodEnergyData[i].mood || moodEnergyData[i].energy) {
          streak++;
        } else {
          break;
        }
      }
      return streak;
    }()), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "days tracking")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDF31 Wellness Tips"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-green-400 mt-1"
    }, "\uD83D\uDCA7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Hydration Boost"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Drink water when feeling low energy"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-blue-400 mt-1"
    }, "\uD83C\uDFC3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Movement Matters"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Short walks improve mood instantly"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-purple-400 mt-1"
    }, "\uD83D\uDE34"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Sleep Priority"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "7-9 hours transforms energy levels")))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-yellow-400 mt-1"
    }, "\uD83E\uDD1D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Social Connection"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Meaningful conversations lift mood"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-red-400 mt-1"
    }, "\uD83D\uDCDD"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Gratitude Practice"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "3 daily thanks shift perspective"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-pink-400 mt-1"
    }, "\uD83E\uDDD8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Mindful Breathing"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "4-7-8 breathing reduces stress"))))))));
  }
  if (view === 'dashboard') {
    // Calculate comprehensive life scores
    var calculateLifeScores = function calculateLifeScores() {
      if (history.length < 3) {
        return {
          healthScore: 0,
          productivityScore: 0,
          moodScore: 0,
          consistencyScore: 0,
          goalProgress: [],
          insights: [],
          message: "Need at least 3 days of data for dashboard. Keep tracking!"
        };
      }

      // Health Score (0-100) - based on workouts, nutrition, water, energy
      var healthScore = function () {
        var score = 0;
        var recent = history.slice(0, 7);

        // Workout consistency (40% weight)
        var workoutRate = recent.filter(function (d) {
          return d.workoutDone;
        }).length / recent.length;
        score += workoutRate * 40;

        // Nutrition tracking (30% weight) - check actual nutrition data
        var nutritionRate = function () {
          try {
            var nd = JSON.parse(localStorage.getItem('vita-nutrition') || '{}');
            return recent.filter(function (d) {
              var meals = nd[d.date];
              if (!meals) return false;
              return Object.values(meals).some(function (arr) {
                return Array.isArray(arr) && arr.length > 0;
              });
            }).length / recent.length;
          } catch (e) {
            return 0;
          }
        }();
        score += nutritionRate * 30;

        // Water intake (15% weight)
        var avgWater = recent.reduce(function (sum, d) {
          return sum + (d.water || 0);
        }, 0) / recent.length;
        var waterScore = Math.min(avgWater / 8, 1); // Target 8 glasses
        score += waterScore * 15;

        // Energy levels (15% weight)
        var goodEnergyRate = recent.filter(function (d) {
          return d.energyLevel === 'high' || d.energyLevel === 'good';
        }).length / recent.length;
        score += goodEnergyRate * 15;
        return Math.round(Math.min(score, 100));
      }();

      // Productivity Score (0-100) - based on tasks, deep work, reading
      var productivityScore = function () {
        var score = 0;
        var recent = history.slice(0, 7);

        // Task completion rate (50% weight)
        var avgTasks = recent.reduce(function (sum, d) {
          return sum + (d.done ? d.done.length : 0);
        }, 0) / recent.length;
        var taskScore = Math.min(avgTasks / 18, 1); // Target 18 tasks per day
        score += taskScore * 50;

        // Deep work time (30% weight)
        var avgDeepWork = recent.reduce(function (sum, d) {
          return sum + (parseFloat(d.deepWork) || 0);
        }, 0) / recent.length;
        var deepWorkScore = Math.min(avgDeepWork / 4, 1); // Target 4 hours
        score += deepWorkScore * 30;

        // Reading habit (20% weight)
        var readingDays = recent.filter(function (d) {
          return d.done && d.done.some(function (task) {
            return task.includes('read');
          });
        }).length;
        var readingScore = readingDays / recent.length;
        score += readingScore * 20;
        return Math.round(Math.min(score, 100));
      }();

      // Mood Score (0-100) - based on mood tracking and consistency
      var moodScore = function () {
        var score = 0;
        var recent = history.slice(0, 7);

        // Positive mood ratio (60% weight)
        var moodData = recent.filter(function (d) {
          return d.mood;
        });
        if (moodData.length > 0) {
          var positiveMoods = moodData.filter(function (d) {
            return ['😊 Sharp', '🙂 Good'].includes(d.mood);
          }).length;
          var moodRatio = positiveMoods / moodData.length;
          score += moodRatio * 60;
        }

        // Mood tracking consistency (40% weight)
        var trackingRate = moodData.length / recent.length;
        score += trackingRate * 40;
        return Math.round(Math.min(score, 100));
      }();

      // Consistency Score (0-100) - based on daily tracking habits
      var consistencyScore = function () {
        var score = 0;
        var recent = history.slice(0, 7);

        // Daily task completion (25% weight)
        var daysWithTasks = recent.filter(function (d) {
          return d.done && d.done.length > 0;
        }).length;
        score += daysWithTasks / recent.length * 25;

        // Workout consistency (25% weight)
        var workoutDays = recent.filter(function (d) {
          return d.workoutDone;
        }).length;
        score += workoutDays / recent.length * 25;

        // Mood tracking (25% weight)
        var moodDays = recent.filter(function (d) {
          return d.mood;
        }).length;
        score += moodDays / recent.length * 25;

        // Journal entries (25% weight)
        var journalDays = recent.filter(function (d) {
          return d.journal && d.journal.trim();
        }).length;
        score += journalDays / recent.length * 25;
        return Math.round(Math.min(score, 100));
      }();

      // Goal Progress - based on various metrics
      var goalProgress = [{
        name: "Weekly Workouts",
        current: history.slice(0, 7).filter(function (d) {
          return d.workoutDone;
        }).length,
        target: 5,
        unit: "workouts",
        color: "blue"
      }, {
        name: "Daily Water Intake",
        current: Math.round(history.slice(0, 7).reduce(function (sum, d) {
          return sum + (d.water || 0);
        }, 0) / 7),
        target: 8,
        unit: "glasses",
        color: "cyan"
      }, {
        name: "Task Completion",
        current: Math.round(history.slice(0, 7).reduce(function (sum, d) {
          return sum + (d.done ? d.done.length : 0);
        }, 0) / 7),
        target: 15,
        unit: "tasks/day",
        color: "green"
      }, {
        name: "Deep Work Hours",
        current: Math.round(history.slice(0, 7).reduce(function (sum, d) {
          return sum + (parseFloat(d.deepWork) || 0);
        }, 0) / 7 * 10) / 10,
        target: 3,
        unit: "hours/day",
        color: "purple"
      }];

      // Generate insights based on scores
      var insights = [];
      if (healthScore < 50) insights.push({
        type: 'warning',
        message: 'Health score needs attention - focus on workouts and nutrition',
        icon: '⚠️'
      });
      if (productivityScore < 50) insights.push({
        type: 'warning',
        message: 'Productivity could improve - try the 2-minute rule for starting tasks',
        icon: '⚠️'
      });
      if (moodScore < 50) insights.push({
        type: 'warning',
        message: 'Mood tracking shows room for improvement - consider gratitude practices',
        icon: '⚠️'
      });
      if (consistencyScore < 50) insights.push({
        type: 'warning',
        message: 'Consistency is key to success - establish daily rituals',
        icon: '⚠️'
      });
      if (healthScore > 80) insights.push({
        type: 'success',
        message: 'Excellent health habits! Keep up the great work.',
        icon: '🎉'
      });
      if (productivityScore > 80) insights.push({
        type: 'success',
        message: 'Outstanding productivity! You\'re crushing your goals.',
        icon: '🚀'
      });
      if (moodScore > 80) insights.push({
        type: 'success',
        message: 'Fantastic emotional wellbeing! Maintain these positive habits.',
        icon: '😊'
      });
      if (consistencyScore > 80) insights.push({
        type: 'success',
        message: 'Remarkable consistency! This is what creates lasting change.',
        icon: '💪'
      });
      return {
        healthScore: healthScore,
        productivityScore: productivityScore,
        moodScore: moodScore,
        consistencyScore: consistencyScore,
        goalProgress: goalProgress,
        insights: insights,
        message: insights.length > 0 ? "Dashboard updated with ".concat(insights.length, " insights!") : "Your life metrics are being tracked."
      };
    };
    var _calculateLifeScores = calculateLifeScores(),
      healthScore = _calculateLifeScores.healthScore,
      productivityScore = _calculateLifeScores.productivityScore,
      moodScore = _calculateLifeScores.moodScore,
      consistencyScore = _calculateLifeScores.consistencyScore,
      goalProgress = _calculateLifeScores.goalProgress,
      _insights2 = _calculateLifeScores.insights,
      _message2 = _calculateLifeScores.message;

    // Overall life score (weighted average)
    var overallScore = Math.round(healthScore * 0.3 + productivityScore * 0.3 + moodScore * 0.2 + consistencyScore * 0.2);
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('dashboard');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Dashboard"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach-ai');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "AI Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 rounded-xl p-8 mb-6 border border-amber-700 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-6xl font-bold text-white mb-2"
    }, overallScore), /*#__PURE__*/React.createElement("div", {
      className: "text-xl text-amber-200 mb-4"
    }, "Overall Life Score"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-amber-300"
    }, "Based on last ", history.length, " days of tracking"), /*#__PURE__*/React.createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-amber-400"
    }, _message2))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDCAA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-green-400"
    }, "Health"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Physical wellbeing"))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-bold ".concat(healthScore >= 80 ? 'text-green-400' : healthScore >= 60 ? 'text-yellow-400' : 'text-red-400')
    }, healthScore), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500"
    }, "/100"))), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full ".concat(healthScore >= 80 ? 'bg-green-500' : healthScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'),
      style: {
        width: "".concat(healthScore, "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs text-gray-400"
    }, "Workouts \u2022 Nutrition \u2022 Hydration \u2022 Energy")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDE80"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-blue-400"
    }, "Productivity"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Task completion"))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-bold ".concat(productivityScore >= 80 ? 'text-blue-400' : productivityScore >= 60 ? 'text-yellow-400' : 'text-red-400')
    }, productivityScore), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500"
    }, "/100"))), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full ".concat(productivityScore >= 80 ? 'bg-blue-500' : productivityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'),
      style: {
        width: "".concat(productivityScore, "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs text-gray-400"
    }, "Tasks \u2022 Deep Work \u2022 Reading \u2022 Focus")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDE0A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-purple-400"
    }, "Mood"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Emotional wellbeing"))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-bold ".concat(moodScore >= 80 ? 'text-purple-400' : moodScore >= 60 ? 'text-yellow-400' : 'text-red-400')
    }, moodScore), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500"
    }, "/100"))), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full ".concat(moodScore >= 80 ? 'bg-purple-500' : moodScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'),
      style: {
        width: "".concat(moodScore, "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs text-gray-400"
    }, "Positive Days \u2022 Tracking \u2022 Balance")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-orange-400"
    }, "Consistency"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Habit formation"))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-bold ".concat(consistencyScore >= 80 ? 'text-orange-400' : consistencyScore >= 60 ? 'text-yellow-400' : 'text-red-400')
    }, consistencyScore), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500"
    }, "/100"))), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-700 rounded-full h-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full ".concat(consistencyScore >= 80 ? 'bg-orange-500' : consistencyScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'),
      style: {
        width: "".concat(consistencyScore, "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs text-gray-400"
    }, "Daily Habits \u2022 Tracking \u2022 Discipline"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDFAF Goal Progress (7-Day Average)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, goalProgress.map(function (goal, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium text-white"
      }, goal.name), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold ".concat(goal.color === 'blue' ? 'text-blue-400' : goal.color === 'cyan' ? 'text-cyan-400' : goal.color === 'green' ? 'text-green-400' : 'text-purple-400')
      }, goal.current, goal.unit.includes('/') ? '' : ' ', goal.unit)), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-600 rounded-full h-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "h-2 rounded-full ".concat(goal.color === 'blue' ? 'bg-blue-500' : goal.color === 'cyan' ? 'bg-cyan-500' : goal.color === 'green' ? 'bg-green-500' : 'bg-purple-500'),
        style: {
          width: "".concat(Math.min(goal.current / goal.target * 100, 100), "%")
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-gray-400"
      }, "Target: ", goal.target, " ", goal.unit));
    }))), _insights2.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCA1 Life Insights"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, _insights2.map(function (insight, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-4 p-4 rounded-lg ".concat(insight.type === 'success' ? 'bg-green-900 border border-green-700' : 'bg-yellow-900 border border-yellow-700')
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, insight.icon), /*#__PURE__*/React.createElement("p", {
        className: "text-sm ".concat(insight.type === 'success' ? 'text-green-200' : 'text-yellow-200')
      }, insight.message));
    }))), history.length >= 7 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCCA Weekly Trends"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-green-400"
    }, "Best Performing Day"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, function (_averages$sort$2) {
      var dayAverages = {};
      history.slice(0, 7).forEach(function (day) {
        var dayName = new Date(day.date).toLocaleDateString('en-US', {
          weekday: 'short'
        });
        if (!dayAverages[dayName]) dayAverages[dayName] = [];
        dayAverages[dayName].push(day.done ? day.done.length : 0);
      });
      var averages = Object.entries(dayAverages).map(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
          day = _ref42[0],
          tasks = _ref42[1];
        return {
          day: day,
          avg: tasks.reduce(function (a, b) {
            return a + b;
          }, 0) / tasks.length
        };
      });
      return ((_averages$sort$2 = averages.sort(function (a, b) {
        return b.avg - a.avg;
      })[0]) === null || _averages$sort$2 === void 0 ? void 0 : _averages$sort$2.day) || 'N/A';
    }()), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "highest productivity")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-blue-400"
    }, "Current Streak"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, function () {
      var streak = 0;
      for (var i = history.length - 1; i >= 0; i--) {
        if (history[i].done && history[i].done.length > 0) {
          streak++;
        } else {
          break;
        }
      }
      return streak;
    }(), " days"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "consecutive active days")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-purple-400"
    }, "Improvement Rate"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-white"
    }, function () {
      if (history.length < 14) return 'N/A';
      var recentWeek = history.slice(0, 7).reduce(function (sum, d) {
        return sum + (d.done ? d.done.length : 0);
      }, 0) / 7;
      var previousWeek = history.slice(7, 14).reduce(function (sum, d) {
        return sum + (d.done ? d.done.length : 0);
      }, 0) / 7;
      var improvement = (recentWeek - previousWeek) / previousWeek * 100;
      return (improvement > 0 ? '+' : '') + Math.round(improvement) + '%';
    }()), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "vs last week")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDFAF Quick Actions"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-blue-400 font-medium"
    }, "\uD83D\uDCDD Log Today"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400"
    }, "Add your daily data")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-green-400 font-medium"
    }, "\uD83D\uDCAA Workout"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400"
    }, "Start your session")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-purple-400 font-medium"
    }, "\uD83E\uDD57 Nutrition"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400"
    }, "Track your meals")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-amber-400 font-medium"
    }, "\uD83D\uDCDA Learn"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-400"
    }, "Read and apply ideas"))))));
  }
  if (view === 'challenges') {
    var suggestedChallenges = getSuggestedChallenges();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('dashboard');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Dashboard"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-1 py-2 bg-amber-600 text-white rounded text-xs"
    }, "Challenges")), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-xl p-6 mb-6 border border-purple-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-white"
    }, "Challenge Mode"), /*#__PURE__*/React.createElement("p", {
      className: "text-purple-200"
    }, "Gamify your growth journey"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-purple-200"
    }, "Active Challenges"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-white"
    }, challenges.length)), /*#__PURE__*/React.createElement("div", {
      className: "bg-pink-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-pink-200"
    }, "Completed"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-white"
    }, completedChallenges.length)), /*#__PURE__*/React.createElement("div", {
      className: "bg-red-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-red-200"
    }, "Badges Earned"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-white"
    }, badges.length)))), challenges.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDFAF Active Challenges"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, challenges.map(function (challenge) {
      var progress = challenge.progress.length;
      var completedDays = challenge.progress.filter(function (p) {
        return p.completed;
      }).length;
      var percentage = challenge.duration > 0 ? Math.round(progress / challenge.duration * 100) : 0;
      var completionRate = progress > 0 ? Math.round(completedDays / progress * 100) : 0;
      var today = new Date().toISOString().split('T')[0];
      var todayCompleted = challenge.progress.some(function (p) {
        return p.date === today && p.completed;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: challenge.id,
        className: "bg-slate-700 rounded-lg p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-bold text-white text-lg"
      }, challenge.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm mb-2"
      }, challenge.description), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4 text-xs text-gray-400"
      }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD25 Streak: ", challenge.currentStreak), /*#__PURE__*/React.createElement("span", null, "\u2B50 Best: ", challenge.bestStreak), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 ", progress, "/", challenge.duration, " days"))), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl font-bold text-amber-400"
      }, completionRate, "%"), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-gray-400"
      }, "success rate"))), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-600 rounded-full h-3 mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300",
        style: {
          width: "".concat(percentage, "%")
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm text-gray-300"
      }, todayCompleted ? /*#__PURE__*/React.createElement("span", {
        className: "text-green-400"
      }, "\u2705 Completed today!") : /*#__PURE__*/React.createElement("span", null, "Ready for today's challenge")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return updateChallengeProgress(challenge.id, !todayCompleted);
        },
        className: "px-4 py-2 rounded-lg font-medium transition-colors ".concat(todayCompleted ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-amber-600 text-white hover:bg-amber-700')
      }, todayCompleted ? '✅ Done' : 'Mark Complete')));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-amber-400"
    }, "\uD83D\uDCA1 Suggested Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowCreateChallenge(true);
      },
      className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    }, "\u2795 Create Custom")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, suggestedChallenges.map(function (challenge, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "bg-slate-700 rounded-lg p-4 border border-slate-600"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-bold text-white"
      }, challenge.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm mb-2"
      }, challenge.description), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 text-xs text-gray-400"
      }, /*#__PURE__*/React.createElement("span", null, "\u23F1\uFE0F ", challenge.duration, " days"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFC6 ", challenge.reward))), /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, getBadgeIcon(challenge.category))), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          createChallenge(challenge);
          setSaveStatus("\uD83C\uDFAF Started \"".concat(challenge.title, "\" challenge!"));
          setTimeout(function () {
            return setSaveStatus('');
          }, 3000);
        },
        className: "w-full py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
      }, "Start Challenge"));
    }))), showCreateChallenge && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDFAF Create Custom Challenge"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Challenge title",
      value: customChallengeForm.title,
      onChange: function onChange(e) {
        return setCustomChallengeForm(_objectSpread(_objectSpread({}, customChallengeForm), {}, {
          title: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    }), /*#__PURE__*/React.createElement("textarea", {
      placeholder: "Challenge description",
      value: customChallengeForm.description,
      onChange: function onChange(e) {
        return setCustomChallengeForm(_objectSpread(_objectSpread({}, customChallengeForm), {}, {
          description: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400",
      rows: "3"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "Duration (days)",
      value: customChallengeForm.duration,
      onChange: function onChange(e) {
        return setCustomChallengeForm(_objectSpread(_objectSpread({}, customChallengeForm), {}, {
          duration: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    }), /*#__PURE__*/React.createElement("select", {
      value: customChallengeForm.category,
      onChange: function onChange(e) {
        return setCustomChallengeForm(_objectSpread(_objectSpread({}, customChallengeForm), {}, {
          category: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Category"), /*#__PURE__*/React.createElement("option", {
      value: "fitness"
    }, "Fitness"), /*#__PURE__*/React.createElement("option", {
      value: "nutrition"
    }, "Nutrition"), /*#__PURE__*/React.createElement("option", {
      value: "productivity"
    }, "Productivity"), /*#__PURE__*/React.createElement("option", {
      value: "mindfulness"
    }, "Mindfulness"), /*#__PURE__*/React.createElement("option", {
      value: "reading"
    }, "Reading"), /*#__PURE__*/React.createElement("option", {
      value: "discipline"
    }, "Discipline"))), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Reward badge name",
      value: customChallengeForm.reward,
      onChange: function onChange(e) {
        return setCustomChallengeForm(_objectSpread(_objectSpread({}, customChallengeForm), {}, {
          reward: e.target.value
        }));
      },
      className: "w-full p-3 bg-slate-700 rounded-lg text-white placeholder-gray-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mt-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (!customChallengeForm.title || !customChallengeForm.duration) return;
        createChallenge({
          title: customChallengeForm.title,
          description: customChallengeForm.description || customChallengeForm.title,
          duration: parseInt(customChallengeForm.duration) || 7,
          category: customChallengeForm.category || 'discipline',
          type: 'habit',
          target: 1,
          unit: 'days',
          reward: customChallengeForm.reward || "".concat(customChallengeForm.title, " Badge")
        });
        setCustomChallengeForm({
          title: '',
          description: '',
          duration: '',
          category: '',
          reward: ''
        });
        setShowCreateChallenge(false);
        setSaveStatus('🎯 Custom challenge created!');
        setTimeout(function () {
          return setSaveStatus('');
        }, 3000);
      },
      className: "flex-1 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
    }, "Create Challenge"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowCreateChallenge(false);
      },
      className: "flex-1 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
    }, "Cancel")))), (completedChallenges.length > 0 || badges.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83C\uDFC6 Achievements"), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-purple-400"
    }, "Badges Earned"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-3"
    }, badges.map(function (badge, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3 text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-1"
      }, badge.icon), /*#__PURE__*/React.createElement("div", {
        className: "text-white font-medium text-sm"
      }, badge.name), /*#__PURE__*/React.createElement("div", {
        className: "text-purple-200 text-xs"
      }, badge.description));
    }))), completedChallenges.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-green-400"
    }, "Completed Challenges"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, completedChallenges.map(function (challenge) {
      return /*#__PURE__*/React.createElement("div", {
        key: challenge.id,
        className: "bg-slate-700 rounded-lg p-4 border border-green-600"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-green-400 text-2xl"
      }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "font-bold text-white"
      }, challenge.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm"
      }, challenge.description), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4 mt-2 text-xs text-gray-400"
      }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 ", challenge.duration, " days completed"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD25 Best streak: ", challenge.bestStreak), /*#__PURE__*/React.createElement("span", null, "\u2B50 Completed: ", new Date(challenge.completedAt).toLocaleDateString())))));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCA1 Challenge Success Tips"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-blue-400 mt-1"
    }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Start Small"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Choose challenges that are challenging but achievable"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-green-400 mt-1"
    }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Build Streaks"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Focus on consistency over perfection"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-purple-400 mt-1"
    }, "\uD83E\uDD1D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Accountability"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Share your challenges with friends or online")))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-yellow-400 mt-1"
    }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Track Progress"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Use the dashboard to monitor your improvement"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-red-400 mt-1"
    }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Celebrate Wins"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Reward yourself when you complete challenges"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-pink-400 mt-1"
    }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-white"
    }, "Learn & Adapt"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Use insights to improve future challenges"))))))));
  }
  if (view === 'coach-ai') {
    var coachInsights = generateAICoachInsights();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('nutrition');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('intelligence');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Intelligence"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('wellness');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Wellness"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('dashboard');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Dashboard"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('challenges');
      },
      className: "px-1 py-2 bg-slate-700 text-gray-300 rounded text-xs"
    }, "Challenges"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach-ai');
      },
      className: "px-1 py-2 bg-amber-600 text-white rounded text-xs"
    }, "AI Coach")), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-xl p-6 mb-6 border border-blue-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, "\uD83E\uDDEC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-white"
    }, "AI Life Coach"), /*#__PURE__*/React.createElement("p", {
      className: "text-blue-200"
    }, "Your intelligent personal development partner"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-blue-200"
    }, "Data Points"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-white"
    }, history.length), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-300"
    }, "days analyzed")), /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-purple-200"
    }, "Insights Generated"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-bold text-white"
    }, coachInsights.personalizedSuggestions.length + coachInsights.patternInsights.length), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-300"
    }, "personalized tips")), /*#__PURE__*/React.createElement("div", {
      className: "bg-indigo-800 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium mb-2 text-indigo-200"
    }, "Coach Mode"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-bold text-white capitalize"
    }, coachMode), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-indigo-300"
    }, "current focus")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center"
    }, [{
      key: 'daily',
      label: 'Daily Check-in',
      icon: '🌅',
      desc: 'Today\'s focus & priorities'
    }, {
      key: 'weekly',
      label: 'Weekly Review',
      icon: '📊',
      desc: '7-day pattern analysis'
    }, {
      key: 'monthly',
      label: 'Monthly Reflection',
      icon: '🌙',
      desc: '30-day growth insights'
    }].map(function (mode) {
      return /*#__PURE__*/React.createElement("button", {
        key: mode.key,
        onClick: function onClick() {
          return setCoachMode(mode.key);
        },
        className: "flex-1 p-4 rounded-lg border transition-all ".concat(coachMode === mode.key ? 'bg-amber-600 border-amber-500 text-white' : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600')
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-2"
      }, mode.icon), /*#__PURE__*/React.createElement("div", {
        className: "font-medium text-sm"
      }, mode.label), /*#__PURE__*/React.createElement("div", {
        className: "text-xs opacity-75 mt-1"
      }, mode.desc));
    }))), coachMode === 'daily' && /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-amber-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-amber-400"
    }, "Today's Focus"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Here's what you should prioritize today"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-900 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-white text-lg leading-relaxed"
    }, coachInsights.dailyFocus)), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      className: "flex-1 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
    }, "\u2705 Applied Today"), /*#__PURE__*/React.createElement("button", {
      className: "flex-1 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
    }, "\uD83E\uDD14 Need Clarification"))), coachInsights.priorityActions.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-red-400"
    }, "\uD83D\uDEA8 Priority Actions"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, coachInsights.priorityActions.map(function (action, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-4 p-4 rounded-lg ".concat(action.urgency === 'high' ? 'bg-red-900 border border-red-700' : 'bg-yellow-900 border border-yellow-700')
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl mt-1"
      }, action.urgency === 'high' ? '🔥' : '⚡'), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-white font-medium"
      }, action.action), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-300 mt-1"
      }, action.reason)));
    }))), coachInsights.personalizedSuggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-green-400"
    }, "\uD83D\uDCA1 Personalized Suggestions"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, coachInsights.personalizedSuggestions.map(function (suggestion, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-4 p-4 bg-slate-700 rounded-lg"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, suggestion.icon), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-medium text-white"
      }, suggestion.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm mt-1"
      }, suggestion.suggestion)));
    })))), coachMode === 'weekly' && /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-blue-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-blue-400"
    }, "Weekly Review"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Your 7-day performance analysis"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-900 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-white leading-relaxed"
    }, coachInsights.weeklyReview)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-blue-400"
    }, Math.round(history.slice(0, 7).reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / 7 * 10) / 10), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "avg tasks/day")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-400"
    }, history.slice(0, 7).filter(function (d) {
      return d.workoutDone;
    }).length), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "workouts")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-purple-400"
    }, Math.round(history.slice(0, 7).filter(function (d) {
      return d.mood;
    }).map(function (d) {
      var scores = {
        '😊 Sharp': 5,
        '🙂 Good': 4,
        '😐 Okay': 3,
        '😔 Off': 2,
        '😰 Hard': 1
      };
      return scores[d.mood] || 3;
    }).reduce(function (a, b) {
      return a + b;
    }, 0) / Math.max(1, history.slice(0, 7).filter(function (d) {
      return d.mood;
    }).length) * 10) / 10), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "avg mood")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-yellow-400"
    }, history.slice(0, 7).filter(function (d) {
      return d.done && d.done.some(function (task) {
        return task.includes('read');
      });
    }).length), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "reading days")))), coachInsights.patternInsights.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-purple-400"
    }, "\uD83D\uDD0D Pattern Insights"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, coachInsights.patternInsights.map(function (insight, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "flex items-start gap-4 p-4 bg-slate-700 rounded-lg"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, insight.impact === 'High' ? '🔥' : insight.impact === 'Medium' ? '⚡' : '💡'), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-medium text-white"
      }, insight.title), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-300 text-sm mt-1"
      }, insight.insight), /*#__PURE__*/React.createElement("span", {
        className: "inline-block mt-2 px-2 py-1 rounded text-xs font-medium ".concat(insight.impact === 'High' ? 'bg-red-600 text-white' : insight.impact === 'Medium' ? 'bg-yellow-600 text-white' : 'bg-green-600 text-white')
      }, insight.impact, " Impact")));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-green-400"
    }, "\uD83C\uDFAF Next Week Focus"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-green-400"
    }, "Maintain Your Strengths"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm text-gray-300"
    }, history.slice(0, 7).filter(function (d) {
      return d.workoutDone;
    }).length >= 4 && /*#__PURE__*/React.createElement("div", null, "\u2705 Keep up the workout momentum"), history.slice(0, 7).filter(function (d) {
      return d.done && d.done.some(function (task) {
        return task.includes('read');
      });
    }).length >= 4 && /*#__PURE__*/React.createElement("div", null, "\u2705 Continue your reading streak"), history.slice(0, 7).filter(function (d) {
      return d.mood;
    }).length >= 5 && /*#__PURE__*/React.createElement("div", null, "\u2705 Maintain mood tracking consistency"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-blue-400"
    }, "Areas for Growth"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm text-gray-300"
    }, history.slice(0, 7).filter(function (d) {
      return d.done && d.done.length > 0;
    }).length < 5 && /*#__PURE__*/React.createElement("div", null, "\uD83C\uDFAF Increase daily task completion"), history.slice(0, 7).filter(function (d) {
      return d.workoutDone;
    }).length < 3 && /*#__PURE__*/React.createElement("div", null, "\uD83C\uDFAF Build workout consistency"), history.slice(0, 7).filter(function (d) {
      return d.mood;
    }).length < 4 && /*#__PURE__*/React.createElement("div", null, "\uD83C\uDFAF Track mood more regularly")))))), coachMode === 'monthly' && /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-indigo-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83C\uDF19"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-indigo-400"
    }, "Monthly Reflection"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Deep insights from your 30-day journey"))), history.length >= 30 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-indigo-900 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-white leading-relaxed"
    }, coachInsights.monthlyReflection)) : /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300"
    }, "Monthly reflections unlock after 30 days of consistent tracking. You're currently at ", history.length, " days - keep going!")), history.length >= 30 && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-indigo-400"
    }, Math.round(history.slice(0, 30).reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / 30 * 10) / 10), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "avg tasks/day")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-400"
    }, Math.round(history.slice(0, 30).filter(function (d) {
      return d.workoutDone;
    }).length / 30 * 100), "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "workout rate")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-purple-400"
    }, function () {
      var currentStreak = 0;
      var maxStreak = 0;
      var _iterator4 = _createForOfIteratorHelper(history.slice(0, 30)),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var day = _step4.value;
          if (day.done && day.done.length > 0) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return maxStreak;
    }()), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "best streak")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-yellow-400"
    }, Math.round(history.slice(0, 30).filter(function (d) {
      return d.mood;
    }).length / 30 * 100), "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "mood tracking")))), history.length >= 30 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCC8 Growth Opportunities"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-red-400"
    }, "Needs Attention"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm text-gray-300"
    }, history.slice(0, 30).filter(function (d) {
      return d.workoutDone;
    }).length / 30 < 0.5 && /*#__PURE__*/React.createElement("div", null, "\u2022 Physical activity consistency"), history.slice(0, 30).reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / 30 < 10 && /*#__PURE__*/React.createElement("div", null, "\u2022 Daily productivity volume"), history.slice(0, 30).filter(function (d) {
      return d.mood;
    }).length / 30 < 0.6 && /*#__PURE__*/React.createElement("div", null, "\u2022 Emotional awareness tracking"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-3 text-green-400"
    }, "Strengths to Build On"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm text-gray-300"
    }, history.slice(0, 30).filter(function (d) {
      return d.workoutDone;
    }).length / 30 >= 0.7 && /*#__PURE__*/React.createElement("div", null, "\u2022 Excellent physical discipline"), history.slice(0, 30).reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / 30 >= 15 && /*#__PURE__*/React.createElement("div", null, "\u2022 Strong productivity habits"), history.slice(0, 30).filter(function (d) {
      return d.mood;
    }).length / 30 >= 0.8 && /*#__PURE__*/React.createElement("div", null, "\u2022 Good emotional awareness"))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-blue-400"
    }, "\uD83D\uDD2E Next Month Goals"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-blue-400"
    }, "Personal Challenge"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 text-sm"
    }, "Based on your patterns, consider committing to one significant challenge next month:"), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 space-y-2"
    }, history.slice(0, 30).filter(function (d) {
      return d.workoutDone;
    }).length / 30 < 0.6 && /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-amber-400"
    }, "\u2022 20-workout fitness challenge"), history.slice(0, 30).reduce(function (sum, d) {
      return sum + (d.done ? d.done.length : 0);
    }, 0) / 30 < 12 && /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-amber-400"
    }, "\u2022 20-task daily productivity goal"), history.slice(0, 30).filter(function (d) {
      return d.done && d.done.some(function (task) {
        return task.includes('read');
      });
    }).length < 15 && /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-amber-400"
    }, "\u2022 Daily reading habit (20+ days)"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-medium mb-2 text-green-400"
    }, "Systems to Refine"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 text-sm"
    }, "Consider optimizing these systems for even better results:"), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 space-y-2 text-sm text-gray-300"
    }, /*#__PURE__*/React.createElement("div", null, "\u2022 Morning routine optimization"), /*#__PURE__*/React.createElement("div", null, "\u2022 Evening reflection practice"), /*#__PURE__*/React.createElement("div", null, "\u2022 Weekly planning sessions"), /*#__PURE__*/React.createElement("div", null, "\u2022 Accountability partnerships")))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDCAC Coach Interaction"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      className: "p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-blue-400 font-medium"
    }, "\uD83C\uDFAF Get Specific Advice"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400 mt-1"
    }, "Ask for detailed guidance on a specific area")), /*#__PURE__*/React.createElement("button", {
      className: "p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-green-400 font-medium"
    }, "\uD83D\uDCCA Request Analysis"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400 mt-1"
    }, "Deep dive into a particular metric or pattern")), /*#__PURE__*/React.createElement("button", {
      className: "p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-purple-400 font-medium"
    }, "\uD83C\uDFAF Set New Goal"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400 mt-1"
    }, "Get help defining and planning a new objective")), /*#__PURE__*/React.createElement("button", {
      className: "p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-yellow-400 font-medium"
    }, "\uD83D\uDD04 Refresh Insights"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400 mt-1"
    }, "Generate fresh analysis with latest data"))))));
  }
  if (view === 'progress') {
    var rate = history.length > 0 ? Math.round(history.reduce(function (s, d) {
      return s + d.done.length;
    }, 0) / (history.length * 18) * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-6 py-2 bg-slate-700 rounded-lg"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-6 py-2 bg-amber-600 text-white rounded-lg"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-6 py-2 bg-slate-700 rounded-lg"
    }, "Workouts")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-2"
    }, "Completion"), /*#__PURE__*/React.createElement("p", {
      className: "text-4xl font-bold"
    }, rate, "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "avg across all days")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-2"
    }, "Days"), /*#__PURE__*/React.createElement("p", {
      className: "text-4xl font-bold"
    }, history.length), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "total tracked")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-2"
    }, "Workouts"), /*#__PURE__*/React.createElement("p", {
      className: "text-4xl font-bold"
    }, history.filter(function (d) {
      return d.workoutDone;
    }).length), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "completed")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-2"
    }, "This Week"), /*#__PURE__*/React.createElement("p", {
      className: "text-4xl font-bold"
    }, history.slice(0, 7).filter(function (d) {
      return d.done.length > 0;
    }).length), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "active days"))), history.length > 7 && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold mb-4"
    }, "Monthly Trends"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 max-h-48 overflow-y-auto"
    }, function () {
      var months = {};
      history.forEach(function (day) {
        var date = new Date(day.date);
        var monthKey = "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, '0'));
        if (!months[monthKey]) months[monthKey] = {
          days: 0,
          tasks: 0,
          workouts: 0
        };
        months[monthKey].days++;
        months[monthKey].tasks += day.done.length;
        if (day.workoutDone) months[monthKey].workouts++;
      });
      return Object.entries(months).sort(function (_ref43, _ref44) {
        var _ref45 = _slicedToArray(_ref43, 1),
          a = _ref45[0];
        var _ref46 = _slicedToArray(_ref44, 1),
          b = _ref46[0];
        return b.localeCompare(a);
      }).slice(0, 6).map(function (_ref47) {
        var _ref48 = _slicedToArray(_ref47, 2),
          month = _ref48[0],
          stats = _ref48[1];
        return {
          month: new Date(month + '-01').toLocaleDateString('en-US', {
            month: 'short',
            year: '2-digit'
          }),
          avgTasks: Math.round(stats.tasks / stats.days || 0),
          workoutRate: Math.round(stats.workouts / stats.days * 100) || 0
        };
      }).map(function (stat) {
        return /*#__PURE__*/React.createElement("div", {
          key: stat.month,
          className: "flex justify-between items-center bg-slate-700 rounded p-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "font-medium"
        }, stat.month), /*#__PURE__*/React.createElement("div", {
          className: "flex gap-4 text-sm"
        }, /*#__PURE__*/React.createElement("span", null, "Tasks: ", /*#__PURE__*/React.createElement("span", {
          className: "text-amber-400"
        }, stat.avgTasks, "/18")), /*#__PURE__*/React.createElement("span", null, "Workouts: ", /*#__PURE__*/React.createElement("span", {
          className: "text-green-400"
        }, stat.workoutRate, "%"))));
      });
    }())), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold"
    }, showAllHistory ? "All History (".concat(history.length, " days)") : 'Last 7 Days'), history.length > 7 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAllHistory(!showAllHistory);
      },
      className: "px-4 py-2 bg-slate-700 rounded-lg text-sm hover:bg-slate-600 transition-colors"
    }, showAllHistory ? 'Show Recent' : "Show All (".concat(history.length, ")"))), (showAllHistory ? history : history.slice(0, 7)).map(function (d) {
      var pct = Math.round(d.done.length / 18 * 100);
      var daysAgo = Math.floor((new Date() - new Date(d.date)) / (1000 * 60 * 60 * 24));
      var isToday = daysAgo === 0;
      var isYesterday = daysAgo === 1;
      return /*#__PURE__*/React.createElement("div", {
        key: d.date,
        className: "bg-slate-700 rounded-lg p-4 mb-3 cursor-pointer hover:bg-slate-600 transition-colors",
        onClick: function onClick() {
          return setViewingDay(d);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium"
      }, isToday ? 'Today' : isYesterday ? 'Yesterday' : new Date(d.date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })), daysAgo > 1 && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-500"
      }, "(", daysAgo, " days ago)")), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, d.workoutDone && /*#__PURE__*/React.createElement("span", {
        className: "text-green-400 text-sm"
      }, "\uD83D\uDCAA"), /*#__PURE__*/React.createElement("span", {
        className: "text-amber-400 font-bold"
      }, pct, "%"))), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-600 rounded-full h-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-amber-500 h-2 rounded-full",
        style: {
          width: "".concat(pct, "%")
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-gray-400"
      }, d.done.length, "/18 tasks \u2022 ", d.workoutDone ? "Workout: ".concat(d.workoutType || 'Completed') : 'No workout', d.journal && /*#__PURE__*/React.createElement("span", {
        className: "ml-2"
      }, "\uD83D\uDCDD")));
    }), history.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8 text-gray-500"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg mb-2"
    }, "No history yet"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "Complete some tasks and they'll appear here!"))), viewingDay && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold"
    }, new Date(viewingDay.date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingDay(null);
      },
      className: "px-3 py-1 bg-slate-700 rounded text-sm hover:bg-slate-600"
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mb-1"
    }, "Tasks Completed"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-amber-400"
    }, viewingDay.done.length, "/18"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300"
    }, Math.round(viewingDay.done.length / 18 * 100), "% complete")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mb-1"
    }, "Workout"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-bold text-green-400"
    }, viewingDay.workoutDone ? viewingDay.workoutType ? labels[viewingDay.workoutType] || viewingDay.workoutType : 'Completed' : 'Not completed'), viewingDay.miles && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300"
    }, viewingDay.miles, " miles run"), viewingDay.workoutDone && viewingDay.workoutExercises && viewingDay.workoutExercises.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mb-2"
    }, "Exercises Completed:"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, viewingDay.workoutExercises.map(function (exercise, idx) {
      var exerciseWeights = viewingDay.weights[exercise];
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-gray-300 mb-1"
      }, exercise), exerciseWeights && /*#__PURE__*/React.createElement("div", {
        className: "ml-2 text-xs text-amber-400"
      }, Array.isArray(exerciseWeights) ? exerciseWeights.map(function (weight, setIdx) {
        return "".concat(weight, " lbs");
      }).join(', ') : "".concat(exerciseWeights, " lbs")));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-3"
    }, "Completed Tasks"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, tasks.core.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        className: "p-2 rounded text-sm ".concat(viewingDay.done.includes(t.id) ? 'bg-green-900 border border-green-600' : 'bg-slate-700 opacity-50')
      }, /*#__PURE__*/React.createElement("span", null, viewingDay.done.includes(t.id) ? '✅' : '⬜'), " ", t.t);
    }), tasks.lead.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        className: "p-2 rounded text-sm ".concat(viewingDay.done.includes(t.id) ? 'bg-amber-900 border border-amber-600' : 'bg-slate-700 opacity-50')
      }, /*#__PURE__*/React.createElement("span", null, viewingDay.done.includes(t.id) ? '✅' : '⬜'), " ", t.t);
    }), tasks.comm.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        className: "p-2 rounded text-sm ".concat(viewingDay.done.includes(t.id) ? 'bg-purple-900 border border-purple-600' : 'bg-slate-700 opacity-50')
      }, /*#__PURE__*/React.createElement("span", null, viewingDay.done.includes(t.id) ? '✅' : '⬜'), " ", t.t);
    }))), viewingDay.journal && /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-2"
    }, "Reflection"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3 text-sm text-gray-300"
    }, viewingDay.journal)), (viewingDay.saas || viewingDay.deepWork || viewingDay.talks) && /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-2"
    }, "\uD83D\uDCBC SaaS Work"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3 text-sm"
    }, viewingDay.saas && /*#__PURE__*/React.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "What I worked on:"), /*#__PURE__*/React.createElement("div", {
      className: "text-gray-300 mt-1"
    }, viewingDay.saas)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 mt-3"
    }, viewingDay.deepWork && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "Deep Work Hours:"), /*#__PURE__*/React.createElement("div", {
      className: "text-amber-400 font-medium"
    }, viewingDay.deepWork, " hrs")), viewingDay.talks && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "User Talks:"), /*#__PURE__*/React.createElement("div", {
      className: "text-blue-400 font-medium"
    }, viewingDay.talks))))), viewingDay.nutritionData && /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-2"
    }, "\uD83E\uDD57 Nutrition"), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3 text-sm"
    }, Object.keys(viewingDay.nutritionData).length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, Object.entries(viewingDay.nutritionData).map(function (_ref49) {
      var _ref50 = _slicedToArray(_ref49, 2),
        meal = _ref50[0],
        items = _ref50[1];
      return /*#__PURE__*/React.createElement("div", {
        key: meal,
        className: "border-b border-slate-600 pb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-medium text-amber-400 capitalize mb-1"
      }, meal, ":"), /*#__PURE__*/React.createElement("div", {
        className: "text-gray-300 text-xs space-y-1"
      }, items.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex justify-between"
        }, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", null, item.calories, " cal"));
      })));
    })) : /*#__PURE__*/React.createElement("div", {
      className: "text-gray-400"
    }, "No nutrition data recorded"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-4 text-center"
    }, viewingDay.mood && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mb-1"
    }, "Mood"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg"
    }, viewingDay.mood)), viewingDay.water && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mb-1"
    }, "Water"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg"
    }, viewingDay.water, " glasses")), viewingDay.deepWork && /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-700 rounded p-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mb-1"
    }, "Deep Work"), /*#__PURE__*/React.createElement("p", {
      className: "text-lg"
    }, viewingDay.deepWork, " hrs"))))));
  }
  if (view === 'data') {
    // Data integrity check
    validateDataIntegrity();

    // Check last backup
    var lastBackup = localStorage.getItem('vita-last-backup');
    var daysSinceBackup = lastBackup ? Math.floor((Date.now() - new Date(lastBackup).getTime()) / (1000 * 60 * 60 * 24)) : 999;
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold mb-4 text-center"
    }, "Vita"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-center mb-6 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('today');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Today"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('progress');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Progress"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('workouts');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Workouts"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('affirmations');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Affirmations"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('coach');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Coach"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('books');
      },
      className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
    }, "Books"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView('data');
      },
      className: "px-4 py-2 bg-amber-600 text-white rounded-lg text-sm"
    }, "Data")), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "px-4 text-sm font-medium text-slate-400 bg-slate-900"
    }, "\uD83D\uDCBE DATA MANAGEMENT"), /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-center text-slate-500 text-sm mb-6"
    }, "Backup, restore, and manage your personal data")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl mb-2"
    }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-blue-400"
    }, history.length), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400"
    }, "Days Tracked")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl mb-2"
    }, "\uD83D\uDCDA"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-green-400"
    }, knowledgeBase.length), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400"
    }, "Knowledge Items")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-4 border border-slate-700 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl mb-2"
    }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-purple-400"
    }, badges.length), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400"
    }, "Achievements"))), daysSinceBackup > 7 && /*#__PURE__*/React.createElement("div", {
      className: "bg-yellow-900 border border-yellow-600 rounded-xl p-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-yellow-400 text-xl"
    }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-yellow-400"
    }, "Backup Recommended"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-yellow-200"
    }, "It's been ", daysSinceBackup, " days since your last backup. Regular backups protect your data.")))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-green-400"
    }, "\uD83D\uDCE4 Export Data"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4"
    }, "Download a backup of all your data. Keep this file safe - it contains your complete Vita history."), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: exportData,
      className: "w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
    }, "\uD83D\uDCE5 Download Backup"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Last backup: ", lastBackup ? new Date(lastBackup).toLocaleDateString() : 'Never'))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-blue-400"
    }, "\uD83D\uDCE5 Import Data"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-4"
    }, "Restore data from a previous backup. This will replace your current data."), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".json",
      onChange: importData,
      className: "w-full p-3 bg-slate-700 rounded text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Select a Vita backup file (.json)")))), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-amber-400"
    }, "\uD83D\uDD12 Data Security"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 text-sm text-gray-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-green-400 mt-1"
    }, "\u2705"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Local Storage:"), " All data stays on your device")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-green-400 mt-1"
    }, "\u2705"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "No Cloud Required:"), " Works offline completely")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-blue-400 mt-1"
    }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Regular Backups:"), " Export weekly to prevent data loss")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-amber-400 mt-1"
    }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Device Changes:"), " Backup before switching devices")))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 bg-slate-800 rounded-xl p-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold mb-4 text-purple-400"
    }, "\uD83D\uDCF1 PWA Installation"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-300 mb-3"
    }, "Vita is now a Progressive Web App! Install it on your device for a native app experience:"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm text-gray-400"
    }, /*#__PURE__*/React.createElement("div", null, "\u2022 ", /*#__PURE__*/React.createElement("strong", null, "iPhone:"), " Tap share button \u2192 \"Add to Home Screen\""), /*#__PURE__*/React.createElement("div", null, "\u2022 ", /*#__PURE__*/React.createElement("strong", null, "Android:"), " Tap menu \u2192 \"Add to Home Screen\""), /*#__PURE__*/React.createElement("div", null, "\u2022 ", /*#__PURE__*/React.createElement("strong", null, "Desktop:"), " Click install button in address bar")))));
  }
  var baseTasks = [].concat(_toConsumableArray(tasks.core), _toConsumableArray(tasks.lead), _toConsumableArray(tasks.comm));
  var allTasks = [].concat(_toConsumableArray(baseTasks.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  })), _toConsumableArray(customTasks.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  })));
  var total = allTasks.length;
  var done = data.done ? data.done.filter(function (id) {
    return allTasks.some(function (t) {
      return t.id === id;
    });
  }).length : 0;
  var streak = getStreak();
  var morningBrief = getMorningBrief();
  var todaySleepData = loadSleepData();
  var todayPrompt = getTodaysPrompt();
  var isSunday = new Date().getDay() === 0;
  var visibleCoreTasks = tasks.core.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  });
  var visibleLeadTasks = tasks.lead.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  });
  var visibleCommTasks = tasks.comm.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold mb-1"
  }, "Vita"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400"
  }, new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, streak > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-3 py-1 bg-amber-900 border border-amber-600 rounded-full"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-400 font-bold text-sm"
  }, streak), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-amber-300"
  }, "day", streak !== 1 ? 's' : '')), /*#__PURE__*/React.createElement("button", {
    onClick: startNewDay,
    className: "px-3 py-2 bg-slate-700 rounded text-sm"
  }, "New Day"))), saveStatus && /*#__PURE__*/React.createElement("p", {
    className: "text-center text-sm text-green-400 mb-2"
  }, saveStatus), backupBanner && /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-900/60 border border-amber-700 rounded-lg p-3 mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm text-amber-200"
  }, /*#__PURE__*/React.createElement("span", null, "Backup recommended \u2014 ", backupBanner, " days since last export")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setView('data');
      setBackupBanner(null);
    },
    className: "px-3 py-1 bg-amber-600 text-white rounded text-xs"
  }, "Backup"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setBackupBanner(null);
    },
    className: "px-2 py-1 text-amber-400 text-xs"
  }, "Dismiss"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 justify-center mb-6 flex-wrap items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('today');
    },
    className: "px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium"
  }, "Today"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('workouts');
    },
    className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
  }, "Workouts"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('nutrition');
    },
    className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
  }, "Nutrition"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('progress');
    },
    className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowMoreNav(!showMoreNav);
    },
    className: "px-4 py-2 bg-slate-700 text-gray-300 rounded-lg text-sm"
  }, "More \u25BE"), showMoreNav && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-full right-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 min-w-[160px] py-1"
  }, [{
    id: 'affirmations',
    label: 'Affirmations'
  }, {
    id: 'coach',
    label: 'Coach'
  }, {
    id: 'books',
    label: 'Books'
  }, {
    id: 'intelligence',
    label: 'Intelligence'
  }, {
    id: 'wellness',
    label: 'Wellness'
  }, {
    id: 'dashboard',
    label: 'Dashboard'
  }, {
    id: 'challenges',
    label: 'Challenges'
  }, {
    id: 'coach-ai',
    label: 'AI Coach'
  }, {
    id: 'data',
    label: 'Data & Backup'
  }].map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: function onClick() {
        setView(item.id);
        setShowMoreNav(false);
      },
      className: "w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 transition-colors"
    }, item.label);
  })))), streak >= 3 && done === 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-700/50 rounded-xl p-4 mb-6 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-amber-300 font-medium"
  }, "You're on a ", streak, "-day streak \u2014 keep it going today")), done > 0 && done >= total && /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-xl p-4 mb-6 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-green-300 font-bold text-lg"
  }, "Perfect day \u2014 all ", total, " tasks complete")), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold mb-2"
  }, morningBrief.greeting, "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-3"
  }, "It's ", morningBrief.dayName, ". You averaged ", morningBrief.avgTasks, " tasks/day this week with ", morningBrief.workoutsThisWeek, " workouts."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, morningBrief.tips.map(function (tip, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "text-sm text-amber-300"
    }, "\u2022 ", tip);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400 mb-3"
  }, "\uD83C\uDF19 Sleep & Wake"), todaySleepData ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-300"
  }, "Slept: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-indigo-400"
  }, todaySleepData.sleep)), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-300"
  }, "Woke: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-400"
  }, todaySleepData.wake)), todaySleepData.sleep && todaySleepData.wake && function () {
    var _todaySleepData$sleep = todaySleepData.sleep.split(':').map(Number),
      _todaySleepData$sleep2 = _slicedToArray(_todaySleepData$sleep, 2),
      sh = _todaySleepData$sleep2[0],
      sm = _todaySleepData$sleep2[1];
    var _todaySleepData$wake$ = todaySleepData.wake.split(':').map(Number),
      _todaySleepData$wake$2 = _slicedToArray(_todaySleepData$wake$, 2),
      wh = _todaySleepData$wake$2[0],
      wm = _todaySleepData$wake$2[1];
    var mins = wh * 60 + wm - (sh * 60 + sm);
    if (mins < 0) mins += 1440;
    var hrs = Math.floor(mins / 60);
    var m = mins % 60;
    return /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-green-400"
    }, "(", hrs, "h ", m, "m)");
  }()), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      localStorage.removeItem('vita-sleep-data');
      setSaveStatus('');
      setView('today');
    },
    className: "text-xs text-gray-500 hover:text-gray-300"
  }, "Edit")) : /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-500 block mb-1"
  }, "Bedtime"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: sleepTime,
    onChange: function onChange(e) {
      return setSleepTime(e.target.value);
    },
    className: "w-full p-2 bg-slate-700 rounded text-white text-sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-500 block mb-1"
  }, "Wake time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: wakeTime,
    onChange: function onChange(e) {
      return setWakeTime(e.target.value);
    },
    className: "w-full p-2 bg-slate-700 rounded text-white text-sm"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (sleepTime && wakeTime) {
        saveSleepData(sleepTime, wakeTime);
        setSleepTime('');
        setWakeTime('');
        setSaveStatus('🌙 Sleep logged!');
        setTimeout(function () {
          return setSaveStatus('');
        }, 2000);
      }
    },
    className: "px-4 py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
  }, "Log"))), isSunday && !showWeeklyReview && /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-700/50 rounded-xl p-4 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-300 font-medium"
  }, "\uD83D\uDCCB Sunday Weekly Review"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Reflect on your week and set intentions for the next one")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowWeeklyReview(true);
    },
    className: "px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
  }, "Start Review"))), showWeeklyReview && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-indigo-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold mb-4 text-indigo-400"
  }, "\uD83D\uDCCB Weekly Review"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 mb-4 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-700 rounded-lg p-3 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-xs"
  }, "Tasks completed"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-blue-400"
  }, history.slice(0, 7).reduce(function (s, d) {
    return s + (d.done ? d.done.length : 0);
  }, 0))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-700 rounded-lg p-3 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-xs"
  }, "Workouts"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-green-400"
  }, history.slice(0, 7).filter(function (d) {
    return d.workoutDone;
  }).length))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-gray-400 block mb-1"
  }, "What went well this week?"), /*#__PURE__*/React.createElement("textarea", {
    value: weeklyReviewText.wentWell,
    onChange: function onChange(e) {
      return setWeeklyReviewText(_objectSpread(_objectSpread({}, weeklyReviewText), {}, {
        wentWell: e.target.value
      }));
    },
    className: "w-full p-3 bg-slate-700 rounded text-white text-sm",
    rows: "3",
    placeholder: "Wins, breakthroughs, things you're proud of..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-gray-400 block mb-1"
  }, "Focus for next week"), /*#__PURE__*/React.createElement("textarea", {
    value: weeklyReviewText.nextWeekFocus,
    onChange: function onChange(e) {
      return setWeeklyReviewText(_objectSpread(_objectSpread({}, weeklyReviewText), {}, {
        nextWeekFocus: e.target.value
      }));
    },
    className: "w-full p-3 bg-slate-700 rounded text-white text-sm",
    rows: "3",
    placeholder: "Key goals, habits to improve, priorities..."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return saveWeeklyReview(weeklyReviewText);
    },
    className: "flex-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
  }, "Save Review"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowWeeklyReview(false);
    },
    className: "px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-3 text-sm font-medium text-gray-400"
  }, "Mood & Energy"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 flex-wrap mb-3"
  }, ['😊 Sharp', '🙂 Good', '😐 Okay', '😔 Off', '😰 Hard'].map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var nd, cleanData;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              nd = _objectSpread(_objectSpread({}, data), {}, {
                mood: m
              });
              cleanData = JSON.parse(JSON.stringify(nd));
              setData(cleanData);
              _context6.next = 5;
              return save(cleanData);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      })),
      className: "px-3 py-2 rounded-lg text-sm ".concat(data.mood === m ? 'bg-amber-500 text-white' : 'bg-slate-700 text-gray-300')
    }, m);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 flex-wrap"
  }, [{
    emoji: '⚡',
    label: 'High',
    value: 'high'
  }, {
    emoji: '🔋',
    label: 'Good',
    value: 'good'
  }, {
    emoji: '🪫',
    label: 'Low',
    value: 'low'
  }, {
    emoji: '😴',
    label: 'Exhausted',
    value: 'exhausted'
  }].map(function (e) {
    return /*#__PURE__*/React.createElement("button", {
      key: e.value,
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var nd, cleanData;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              nd = _objectSpread(_objectSpread({}, data), {}, {
                energyLevel: e.value
              });
              cleanData = JSON.parse(JSON.stringify(nd));
              setData(cleanData);
              _context7.next = 5;
              return save(cleanData);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      })),
      className: "px-3 py-2 rounded-lg text-sm ".concat(data.energyLevel === e.value ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-300')
    }, e.emoji, " ", e.label);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-gray-400"
  }, "\uD83D\uDCA7 Water"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-blue-400"
  }, water, "/8")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return updateWater(-1);
    },
    className: "px-4 py-2 bg-slate-700 text-white rounded-lg font-bold text-sm"
  }, "-"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return updateWater(1);
    },
    className: "flex-1 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm"
  }, "+ Glass"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400 mb-3"
  }, "\uD83D\uDCBB SaaS Work"), /*#__PURE__*/React.createElement("textarea", {
    value: saas,
    onChange: function onChange(e) {
      return setSaas(e.target.value);
    },
    onBlur: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            nd = _objectSpread(_objectSpread({}, data), {}, {
              saas: saas,
              deepWork: deepWork,
              talks: talks
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context8.next = 5;
            return save(cleanData);
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })),
    placeholder: "What did you work on today?",
    className: "w-full p-3 bg-slate-700 rounded text-white mb-3 text-sm",
    rows: "2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.5",
    value: deepWork,
    onChange: function onChange(e) {
      return setDeepWork(e.target.value);
    },
    onBlur: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            nd = _objectSpread(_objectSpread({}, data), {}, {
              saas: saas,
              deepWork: deepWork,
              talks: talks
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context9.next = 5;
            return save(cleanData);
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    })),
    placeholder: "Deep work (hrs)",
    className: "p-3 bg-slate-700 rounded text-white text-sm"
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: talks,
    onChange: function onChange(e) {
      return setTalks(e.target.value);
    },
    onBlur: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            nd = _objectSpread(_objectSpread({}, data), {}, {
              saas: saas,
              deepWork: deepWork,
              talks: talks
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context10.next = 5;
            return save(cleanData);
          case 5:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    })),
    placeholder: "User talks",
    className: "p-3 bg-slate-700 rounded text-white text-sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 mb-6"
  }, visibleCoreTasks.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-3 text-sm font-medium text-gray-400"
  }, "Non-Negotiables"), visibleCoreTasks.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return toggle(t.id);
      },
      className: "p-3 rounded-lg mb-2 cursor-pointer ".concat(data.done.includes(t.id) ? 'bg-green-900 border-2 border-green-500' : 'bg-slate-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm"
    }, t.t), data.done.includes(t.id) && /*#__PURE__*/React.createElement("span", null, "\u2705")));
  })), visibleLeadTasks.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-3 text-sm font-medium text-gray-400"
  }, "Leadership"), visibleLeadTasks.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return toggle(t.id);
      },
      className: "p-3 rounded-lg mb-2 cursor-pointer ".concat(data.done.includes(t.id) ? 'bg-amber-900 border-2 border-amber-500' : 'bg-slate-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm"
    }, t.t), data.done.includes(t.id) && /*#__PURE__*/React.createElement("span", null, "\u2705")));
  })), visibleCommTasks.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-3 text-sm font-medium text-gray-400"
  }, "Communication"), visibleCommTasks.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return toggle(t.id);
      },
      className: "p-3 rounded-lg mb-2 cursor-pointer ".concat(data.done.includes(t.id) ? 'bg-purple-900 border-2 border-purple-500' : 'bg-slate-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm"
    }, t.t), data.done.includes(t.id) && /*#__PURE__*/React.createElement("span", null, "\u2705")));
  })), customTasks.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  }).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-3 text-sm font-medium text-gray-400"
  }, "My Tasks"), customTasks.filter(function (t) {
    return !hiddenTasks.includes(t.id);
  }).map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return toggle(t.id);
      },
      className: "p-3 rounded-lg mb-2 cursor-pointer ".concat(data.done.includes(t.id) ? 'bg-cyan-900 border-2 border-cyan-500' : 'bg-slate-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm"
    }, t.t), data.done.includes(t.id) && /*#__PURE__*/React.createElement("span", null, "\u2705")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400"
  }, "\u2696\uFE0F Body Weight"), weightHistory.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowWeightLog(!showWeightLog);
    },
    className: "text-xs text-gray-500 hover:text-gray-300"
  }, showWeightLog ? 'Hide' : 'History')), weightHistory.length > 0 && weightHistory[0].date === getTodayLocal() ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold text-cyan-400"
  }, weightHistory[0].weight, " lbs"), weightHistory.length >= 2 && function () {
    var diff = (weightHistory[0].weight - weightHistory[1].weight).toFixed(1);
    return /*#__PURE__*/React.createElement("span", {
      className: "text-sm ".concat(diff > 0 ? 'text-red-400' : diff < 0 ? 'text-green-400' : 'text-gray-400')
    }, diff > 0 ? '+' : '', diff, " lbs");
  }()) : /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.1",
    value: bodyWeight,
    onChange: function onChange(e) {
      return setBodyWeight(e.target.value);
    },
    placeholder: "Weight (lbs)",
    className: "flex-1 p-2 bg-slate-700 rounded text-white text-sm"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return logBodyWeight(bodyWeight);
    },
    className: "px-4 py-2 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700"
  }, "Log")), showWeightLog && weightHistory.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-1 max-h-40 overflow-y-auto"
  }, weightHistory.slice(0, 14).map(function (w, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex justify-between text-xs text-gray-400 py-1 border-b border-slate-700"
    }, /*#__PURE__*/React.createElement("span", null, new Date(w.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-white"
    }, w.weight, " lbs"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400"
  }, "\u270F\uFE0F Manage Tasks"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowManageTasks(!showManageTasks);
    },
    className: "text-xs text-gray-500 hover:text-gray-300"
  }, showManageTasks ? 'Close' : 'Open')), showManageTasks && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: newCustomTask,
    onChange: function onChange(e) {
      return setNewCustomTask(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') addCustomTask(newCustomTask);
    },
    placeholder: "Add a custom task...",
    className: "flex-1 p-2 bg-slate-700 rounded text-white text-sm"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return addCustomTask(newCustomTask);
    },
    className: "px-4 py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700"
  }, "Add")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 mb-2"
  }, "Tap to hide/show. Red = hidden."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 max-h-60 overflow-y-auto"
  }, [].concat(_toConsumableArray(tasks.core), _toConsumableArray(tasks.lead), _toConsumableArray(tasks.comm)).map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return toggleHideTask(t.id);
      },
      className: "p-2 rounded text-sm cursor-pointer flex items-center justify-between ".concat(hiddenTasks.includes(t.id) ? 'bg-red-900/30 text-red-300 line-through' : 'bg-slate-700 text-gray-300')
    }, /*#__PURE__*/React.createElement("span", null, t.t), /*#__PURE__*/React.createElement("span", {
      className: "text-xs"
    }, hiddenTasks.includes(t.id) ? 'Hidden' : '✓'));
  }), customTasks.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "p-2 rounded text-sm bg-slate-700 text-gray-300 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: hiddenTasks.includes(t.id) ? 'line-through text-red-300' : ''
    }, t.t), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleHideTask(t.id);
      },
      className: "text-xs text-gray-500 hover:text-gray-300"
    }, hiddenTasks.includes(t.id) ? 'Show' : 'Hide'), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeCustomTask(t.id);
      },
      className: "text-xs text-red-400 hover:text-red-300"
    }, "Delete")));
  })))), history.length >= 7 && function () {
    var moodScores = {
      '😊 Sharp': 5,
      '🙂 Good': 4,
      '😐 Okay': 3,
      '😔 Off': 2,
      '😰 Hard': 1
    };
    var recent = history.slice(0, 14).filter(function (d) {
      return d.mood;
    });
    if (recent.length < 3) return null;
    var workoutDays = recent.filter(function (d) {
      return d.workoutDone;
    });
    var noWorkoutDays = recent.filter(function (d) {
      return !d.workoutDone;
    });
    var avgMoodWorkout = workoutDays.length > 0 ? (workoutDays.reduce(function (s, d) {
      return s + (moodScores[d.mood] || 3);
    }, 0) / workoutDays.length).toFixed(1) : null;
    var avgMoodNoWorkout = noWorkoutDays.length > 0 ? (noWorkoutDays.reduce(function (s, d) {
      return s + (moodScores[d.mood] || 3);
    }, 0) / noWorkoutDays.length).toFixed(1) : null;
    var avgWaterGood = recent.filter(function (d) {
      return (d.water || 0) >= 6;
    });
    var avgWaterLow = recent.filter(function (d) {
      return (d.water || 0) < 6;
    });
    var moodHighWater = avgWaterGood.length > 0 ? (avgWaterGood.reduce(function (s, d) {
      return s + (moodScores[d.mood] || 3);
    }, 0) / avgWaterGood.length).toFixed(1) : null;
    var moodLowWater = avgWaterLow.length > 0 ? (avgWaterLow.reduce(function (s, d) {
      return s + (moodScores[d.mood] || 3);
    }, 0) / avgWaterLow.length).toFixed(1) : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-medium text-gray-400 mb-3"
    }, "\uD83D\uDD17 Mood-Action Correlations"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-sm"
    }, avgMoodWorkout && avgMoodNoWorkout && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 bg-slate-700 rounded"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300"
    }, "Workout days vs rest days"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold ".concat(parseFloat(avgMoodWorkout) > parseFloat(avgMoodNoWorkout) ? 'text-green-400' : 'text-gray-400')
    }, avgMoodWorkout, " vs ", avgMoodNoWorkout)), moodHighWater && moodLowWater && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 bg-slate-700 rounded"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300"
    }, "Good hydration vs low"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold ".concat(parseFloat(moodHighWater) > parseFloat(moodLowWater) ? 'text-blue-400' : 'text-gray-400')
    }, moodHighWater, " vs ", moodLowWater)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mt-1"
    }, "Based on your last 14 days. Higher = better mood (1-5 scale).")));
  }(), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 rounded-xl p-5 mb-6 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400 mb-2"
  }, "\uD83D\uDCDA Reflection"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-amber-400/80 mb-3 italic"
  }, "Prompt: ", todayPrompt), /*#__PURE__*/React.createElement("textarea", {
    value: journal,
    onChange: function onChange(e) {
      return setJournal(e.target.value);
    },
    onBlur: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var nd, cleanData;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            nd = _objectSpread(_objectSpread({}, data), {}, {
              journal: journal
            });
            cleanData = JSON.parse(JSON.stringify(nd));
            setData(cleanData);
            _context11.next = 5;
            return save(cleanData);
          case 5:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    })),
    placeholder: "What did I lead? What did I ship? How did I grow?",
    className: "w-full p-3 bg-slate-700 rounded text-white text-sm",
    rows: "3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 border border-slate-700"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-gray-400 mb-3"
  }, "\uD83D\uDCCA Today's Summary"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-3 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-amber-400"
  }, done, "/", total), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Tasks")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-blue-400"
  }, water, "/8"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Water")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-purple-400"
  }, data.mood ? data.mood.split(' ')[0] : '—'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Mood")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-green-400"
  }, data.workoutDone ? '✅' : '—'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Workout"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 w-full bg-slate-700 rounded-full h-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-2 rounded-full bg-amber-500 transition-all duration-500",
    style: {
      width: "".concat(total > 0 ? done / total * 100 : 0, "%")
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 text-center mt-2"
  }, done === 0 ? "Let's get started" : done < total / 2 ? 'Making progress' : done < total ? 'Almost there' : 'Perfect day', deepWork ? " \u2022 ".concat(deepWork, "h deep work") : '', todaySleepData ? " \u2022 Sleep logged" : ''))));
}
try {
  ReactDOM.render(/*#__PURE__*/React.createElement(VitaApp, null), document.getElementById('root'));
} catch (err) {
  console.error('Vita failed to start:', err);
  var root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<div style="padding:24px;color:#e2e8f0;font-family:sans-serif;max-width:640px;margin:40px auto;"><h1 style="color:#f59e0b;">Vita failed to load</h1><p>Try a hard refresh (Ctrl+Shift+R). If this persists, clear site data for this page and reload.</p><pre style="background:#1e293b;padding:12px;border-radius:8px;overflow:auto;font-size:12px;">' + String(err && err.message ? err.message : err) + '</pre></div>';
  }
}

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      console.log('Service Worker registered successfully:', registration.scope);
    })["catch"](function (error) {
      console.log('Service Worker registration failed:', error);
    });
  });
}