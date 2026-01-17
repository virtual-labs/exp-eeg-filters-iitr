(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const c of r)
      if (c.type === "childList")
        for (const u of c.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && l(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const c = {};
    return (
      r.integrity && (c.integrity = r.integrity),
      r.referrerPolicy && (c.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const c = a(r);
    fetch(r.href, c);
  }
})();
function ob(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var bf = { exports: {} },
  vl = {};
var Mm;
function lv() {
  if (Mm) return vl;
  Mm = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function a(l, r, c) {
    var u = null;
    if (
      (c !== void 0 && (u = "" + c),
      r.key !== void 0 && (u = "" + r.key),
      "key" in r)
    ) {
      c = {};
      for (var h in r) h !== "key" && (c[h] = r[h]);
    } else c = r;
    return (
      (r = c.ref),
      { $$typeof: i, type: l, key: u, ref: r !== void 0 ? r : null, props: c }
    );
  }
  return (vl.Fragment = e), (vl.jsx = a), (vl.jsxs = a), vl;
}
var Tm;
function ov() {
  return Tm || ((Tm = 1), (bf.exports = lv())), bf.exports;
}
var q = ov(),
  yf = { exports: {} },
  wt = {};
var Am;
function rv() {
  if (Am) return wt;
  Am = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    u = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    w = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (w && A[w]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    O = {};
  function E(A, k, V) {
    (this.props = A),
      (this.context = k),
      (this.refs = O),
      (this.updater = V || _);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (A, k) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, k, "setState");
    }),
    (E.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function W() {}
  W.prototype = E.prototype;
  function K(A, k, V) {
    (this.props = A),
      (this.context = k),
      (this.refs = O),
      (this.updater = V || _);
  }
  var J = (K.prototype = new W());
  (J.constructor = K), M(J, E.prototype), (J.isPureReactComponent = !0);
  var H = Array.isArray;
  function tt() {}
  var T = { H: null, A: null, T: null, S: null },
    S = Object.prototype.hasOwnProperty;
  function v(A, k, V) {
    var nt = V.ref;
    return {
      $$typeof: i,
      type: A,
      key: k,
      ref: nt !== void 0 ? nt : null,
      props: V,
    };
  }
  function N(A, k) {
    return v(A.type, k, A.props);
  }
  function R(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function B(A) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (V) {
        return k[V];
      })
    );
  }
  var $ = /\/+/g;
  function st(A, k) {
    return typeof A == "object" && A !== null && A.key != null
      ? B("" + A.key)
      : k.toString(36);
  }
  function at(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(tt, tt)
            : ((A.status = "pending"),
              A.then(
                function (k) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = k));
                },
                function (k) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = k));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function j(A, k, V, nt, lt) {
    var ot = typeof A;
    (ot === "undefined" || ot === "boolean") && (A = null);
    var bt = !1;
    if (A === null) bt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case e:
              bt = !0;
              break;
            case m:
              return (bt = A._init), j(bt(A._payload), k, V, nt, lt);
          }
      }
    if (bt)
      return (
        (lt = lt(A)),
        (bt = nt === "" ? "." + st(A, 0) : nt),
        H(lt)
          ? ((V = ""),
            bt != null && (V = bt.replace($, "$&/") + "/"),
            j(lt, k, V, "", function (qt) {
              return qt;
            }))
          : lt != null &&
            (R(lt) &&
              (lt = N(
                lt,
                V +
                  (lt.key == null || (A && A.key === lt.key)
                    ? ""
                    : ("" + lt.key).replace($, "$&/") + "/") +
                  bt
              )),
            k.push(lt)),
        1
      );
    bt = 0;
    var pt = nt === "" ? "." : nt + ":";
    if (H(A))
      for (var dt = 0; dt < A.length; dt++)
        (nt = A[dt]), (ot = pt + st(nt, dt)), (bt += j(nt, k, V, ot, lt));
    else if (((dt = x(A)), typeof dt == "function"))
      for (A = dt.call(A), dt = 0; !(nt = A.next()).done; )
        (nt = nt.value), (ot = pt + st(nt, dt++)), (bt += j(nt, k, V, ot, lt));
    else if (ot === "object") {
      if (typeof A.then == "function") return j(at(A), k, V, nt, lt);
      throw (
        ((k = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return bt;
  }
  function G(A, k, V) {
    if (A == null) return A;
    var nt = [],
      lt = 0;
    return (
      j(A, nt, "", "", function (ot) {
        return k.call(V, ot, lt++);
      }),
      nt
    );
  }
  function et(A) {
    if (A._status === -1) {
      var k = A._result;
      (k = k()),
        k.then(
          function (V) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = V));
          },
          function (V) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = V));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = k));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var k = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(k)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    ct = {
      map: G,
      forEach: function (A, k, V) {
        G(
          A,
          function () {
            k.apply(this, arguments);
          },
          V
        );
      },
      count: function (A) {
        var k = 0;
        return (
          G(A, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (A) {
        return (
          G(A, function (k) {
            return k;
          }) || []
        );
      },
      only: function (A) {
        if (!R(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    };
  return (
    (wt.Activity = b),
    (wt.Children = ct),
    (wt.Component = E),
    (wt.Fragment = a),
    (wt.Profiler = r),
    (wt.PureComponent = K),
    (wt.StrictMode = l),
    (wt.Suspense = p),
    (wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
    (wt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return T.H.useMemoCache(A);
      },
    }),
    (wt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (wt.cacheSignal = function () {
      return null;
    }),
    (wt.cloneElement = function (A, k, V) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var nt = M({}, A.props),
        lt = A.key;
      if (k != null)
        for (ot in (k.key !== void 0 && (lt = "" + k.key), k))
          !S.call(k, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && k.ref === void 0) ||
            (nt[ot] = k[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) nt.children = V;
      else if (1 < ot) {
        for (var bt = Array(ot), pt = 0; pt < ot; pt++)
          bt[pt] = arguments[pt + 2];
        nt.children = bt;
      }
      return v(A.type, lt, nt);
    }),
    (wt.createContext = function (A) {
      return (
        (A = {
          $$typeof: u,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: c, _context: A }),
        A
      );
    }),
    (wt.createElement = function (A, k, V) {
      var nt,
        lt = {},
        ot = null;
      if (k != null)
        for (nt in (k.key !== void 0 && (ot = "" + k.key), k))
          S.call(k, nt) &&
            nt !== "key" &&
            nt !== "__self" &&
            nt !== "__source" &&
            (lt[nt] = k[nt]);
      var bt = arguments.length - 2;
      if (bt === 1) lt.children = V;
      else if (1 < bt) {
        for (var pt = Array(bt), dt = 0; dt < bt; dt++)
          pt[dt] = arguments[dt + 2];
        lt.children = pt;
      }
      if (A && A.defaultProps)
        for (nt in ((bt = A.defaultProps), bt))
          lt[nt] === void 0 && (lt[nt] = bt[nt]);
      return v(A, ot, lt);
    }),
    (wt.createRef = function () {
      return { current: null };
    }),
    (wt.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (wt.isValidElement = R),
    (wt.lazy = function (A) {
      return { $$typeof: m, _payload: { _status: -1, _result: A }, _init: et };
    }),
    (wt.memo = function (A, k) {
      return { $$typeof: d, type: A, compare: k === void 0 ? null : k };
    }),
    (wt.startTransition = function (A) {
      var k = T.T,
        V = {};
      T.T = V;
      try {
        var nt = A(),
          lt = T.S;
        lt !== null && lt(V, nt),
          typeof nt == "object" &&
            nt !== null &&
            typeof nt.then == "function" &&
            nt.then(tt, it);
      } catch (ot) {
        it(ot);
      } finally {
        k !== null && V.types !== null && (k.types = V.types), (T.T = k);
      }
    }),
    (wt.unstable_useCacheRefresh = function () {
      return T.H.useCacheRefresh();
    }),
    (wt.use = function (A) {
      return T.H.use(A);
    }),
    (wt.useActionState = function (A, k, V) {
      return T.H.useActionState(A, k, V);
    }),
    (wt.useCallback = function (A, k) {
      return T.H.useCallback(A, k);
    }),
    (wt.useContext = function (A) {
      return T.H.useContext(A);
    }),
    (wt.useDebugValue = function () {}),
    (wt.useDeferredValue = function (A, k) {
      return T.H.useDeferredValue(A, k);
    }),
    (wt.useEffect = function (A, k) {
      return T.H.useEffect(A, k);
    }),
    (wt.useEffectEvent = function (A) {
      return T.H.useEffectEvent(A);
    }),
    (wt.useId = function () {
      return T.H.useId();
    }),
    (wt.useImperativeHandle = function (A, k, V) {
      return T.H.useImperativeHandle(A, k, V);
    }),
    (wt.useInsertionEffect = function (A, k) {
      return T.H.useInsertionEffect(A, k);
    }),
    (wt.useLayoutEffect = function (A, k) {
      return T.H.useLayoutEffect(A, k);
    }),
    (wt.useMemo = function (A, k) {
      return T.H.useMemo(A, k);
    }),
    (wt.useOptimistic = function (A, k) {
      return T.H.useOptimistic(A, k);
    }),
    (wt.useReducer = function (A, k, V) {
      return T.H.useReducer(A, k, V);
    }),
    (wt.useRef = function (A) {
      return T.H.useRef(A);
    }),
    (wt.useState = function (A) {
      return T.H.useState(A);
    }),
    (wt.useSyncExternalStore = function (A, k, V) {
      return T.H.useSyncExternalStore(A, k, V);
    }),
    (wt.useTransition = function () {
      return T.H.useTransition();
    }),
    (wt.version = "19.2.0"),
    wt
  );
}
var Om;
function Kf() {
  return Om || ((Om = 1), (yf.exports = rv())), yf.exports;
}
var ut = Kf(),
  vf = { exports: {} },
  wl = {},
  wf = { exports: {} },
  _f = {};
var zm;
function cv() {
  return (
    zm ||
      ((zm = 1),
      (function (i) {
        function e(j, G) {
          var et = j.length;
          j.push(G);
          t: for (; 0 < et; ) {
            var it = (et - 1) >>> 1,
              ct = j[it];
            if (0 < r(ct, G)) (j[it] = G), (j[et] = ct), (et = it);
            else break t;
          }
        }
        function a(j) {
          return j.length === 0 ? null : j[0];
        }
        function l(j) {
          if (j.length === 0) return null;
          var G = j[0],
            et = j.pop();
          if (et !== G) {
            j[0] = et;
            t: for (var it = 0, ct = j.length, A = ct >>> 1; it < A; ) {
              var k = 2 * (it + 1) - 1,
                V = j[k],
                nt = k + 1,
                lt = j[nt];
              if (0 > r(V, et))
                nt < ct && 0 > r(lt, V)
                  ? ((j[it] = lt), (j[nt] = et), (it = nt))
                  : ((j[it] = V), (j[k] = et), (it = k));
              else if (nt < ct && 0 > r(lt, et))
                (j[it] = lt), (j[nt] = et), (it = nt);
              else break t;
            }
          }
          return G;
        }
        function r(j, G) {
          var et = j.sortIndex - G.sortIndex;
          return et !== 0 ? et : j.id - G.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          i.unstable_now = function () {
            return c.now();
          };
        } else {
          var u = Date,
            h = u.now();
          i.unstable_now = function () {
            return u.now() - h;
          };
        }
        var p = [],
          d = [],
          m = 1,
          b = null,
          w = 3,
          x = !1,
          _ = !1,
          M = !1,
          O = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function J(j) {
          for (var G = a(d); G !== null; ) {
            if (G.callback === null) l(d);
            else if (G.startTime <= j)
              l(d), (G.sortIndex = G.expirationTime), e(p, G);
            else break;
            G = a(d);
          }
        }
        function H(j) {
          if (((M = !1), J(j), !_))
            if (a(p) !== null) (_ = !0), tt || ((tt = !0), B());
            else {
              var G = a(d);
              G !== null && at(H, G.startTime - j);
            }
        }
        var tt = !1,
          T = -1,
          S = 5,
          v = -1;
        function N() {
          return O ? !0 : !(i.unstable_now() - v < S);
        }
        function R() {
          if (((O = !1), tt)) {
            var j = i.unstable_now();
            v = j;
            var G = !0;
            try {
              t: {
                (_ = !1), M && ((M = !1), W(T), (T = -1)), (x = !0);
                var et = w;
                try {
                  e: {
                    for (
                      J(j), b = a(p);
                      b !== null && !(b.expirationTime > j && N());

                    ) {
                      var it = b.callback;
                      if (typeof it == "function") {
                        (b.callback = null), (w = b.priorityLevel);
                        var ct = it(b.expirationTime <= j);
                        if (((j = i.unstable_now()), typeof ct == "function")) {
                          (b.callback = ct), J(j), (G = !0);
                          break e;
                        }
                        b === a(p) && l(p), J(j);
                      } else l(p);
                      b = a(p);
                    }
                    if (b !== null) G = !0;
                    else {
                      var A = a(d);
                      A !== null && at(H, A.startTime - j), (G = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (w = et), (x = !1);
                }
                G = void 0;
              }
            } finally {
              G ? B() : (tt = !1);
            }
          }
        }
        var B;
        if (typeof K == "function")
          B = function () {
            K(R);
          };
        else if (typeof MessageChannel < "u") {
          var $ = new MessageChannel(),
            st = $.port2;
          ($.port1.onmessage = R),
            (B = function () {
              st.postMessage(null);
            });
        } else
          B = function () {
            E(R, 0);
          };
        function at(j, G) {
          T = E(function () {
            j(i.unstable_now());
          }, G);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (i.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (S = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (i.unstable_next = function (j) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = w;
            }
            var et = w;
            w = G;
            try {
              return j();
            } finally {
              w = et;
            }
          }),
          (i.unstable_requestPaint = function () {
            O = !0;
          }),
          (i.unstable_runWithPriority = function (j, G) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var et = w;
            w = j;
            try {
              return G();
            } finally {
              w = et;
            }
          }),
          (i.unstable_scheduleCallback = function (j, G, et) {
            var it = i.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? it + et : it))
                : (et = it),
              j)
            ) {
              case 1:
                var ct = -1;
                break;
              case 2:
                ct = 250;
                break;
              case 5:
                ct = 1073741823;
                break;
              case 4:
                ct = 1e4;
                break;
              default:
                ct = 5e3;
            }
            return (
              (ct = et + ct),
              (j = {
                id: m++,
                callback: G,
                priorityLevel: j,
                startTime: et,
                expirationTime: ct,
                sortIndex: -1,
              }),
              et > it
                ? ((j.sortIndex = et),
                  e(d, j),
                  a(p) === null &&
                    j === a(d) &&
                    (M ? (W(T), (T = -1)) : (M = !0), at(H, et - it)))
                : ((j.sortIndex = ct),
                  e(p, j),
                  _ || x || ((_ = !0), tt || ((tt = !0), B()))),
              j
            );
          }),
          (i.unstable_shouldYield = N),
          (i.unstable_wrapCallback = function (j) {
            var G = w;
            return function () {
              var et = w;
              w = G;
              try {
                return j.apply(this, arguments);
              } finally {
                w = et;
              }
            };
          });
      })(_f)),
    _f
  );
}
var Dm;
function uv() {
  return Dm || ((Dm = 1), (wf.exports = cv())), wf.exports;
}
var xf = { exports: {} },
  Ae = {};
var km;
function fv() {
  if (km) return Ae;
  km = 1;
  var i = Kf();
  function e(p) {
    var d = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        d += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      d +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var l = {
      d: {
        f: a,
        r: function () {
          throw Error(e(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function c(p, d, m) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: d,
      implementation: m,
    };
  }
  var u = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, d) {
    if (p === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return (
    (Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (Ae.createPortal = function (p, d) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11))
        throw Error(e(299));
      return c(p, d, null, m);
    }),
    (Ae.flushSync = function (p) {
      var d = u.T,
        m = l.p;
      try {
        if (((u.T = null), (l.p = 2), p)) return p();
      } finally {
        (u.T = d), (l.p = m), l.d.f();
      }
    }),
    (Ae.preconnect = function (p, d) {
      typeof p == "string" &&
        (d
          ? ((d = d.crossOrigin),
            (d =
              typeof d == "string"
                ? d === "use-credentials"
                  ? d
                  : ""
                : void 0))
          : (d = null),
        l.d.C(p, d));
    }),
    (Ae.prefetchDNS = function (p) {
      typeof p == "string" && l.d.D(p);
    }),
    (Ae.preinit = function (p, d) {
      if (typeof p == "string" && d && typeof d.as == "string") {
        var m = d.as,
          b = h(m, d.crossOrigin),
          w = typeof d.integrity == "string" ? d.integrity : void 0,
          x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        m === "style"
          ? l.d.S(p, typeof d.precedence == "string" ? d.precedence : void 0, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: x,
            })
          : m === "script" &&
            l.d.X(p, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: x,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
      }
    }),
    (Ae.preinitModule = function (p, d) {
      if (typeof p == "string")
        if (typeof d == "object" && d !== null) {
          if (d.as == null || d.as === "script") {
            var m = h(d.as, d.crossOrigin);
            l.d.M(p, {
              crossOrigin: m,
              integrity: typeof d.integrity == "string" ? d.integrity : void 0,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
          }
        } else d == null && l.d.M(p);
    }),
    (Ae.preload = function (p, d) {
      if (
        typeof p == "string" &&
        typeof d == "object" &&
        d !== null &&
        typeof d.as == "string"
      ) {
        var m = d.as,
          b = h(m, d.crossOrigin);
        l.d.L(p, m, {
          crossOrigin: b,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority:
            typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy:
            typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet:
            typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0,
        });
      }
    }),
    (Ae.preloadModule = function (p, d) {
      if (typeof p == "string")
        if (d) {
          var m = h(d.as, d.crossOrigin);
          l.d.m(p, {
            as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
            crossOrigin: m,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          });
        } else l.d.m(p);
    }),
    (Ae.requestFormReset = function (p) {
      l.d.r(p);
    }),
    (Ae.unstable_batchedUpdates = function (p, d) {
      return p(d);
    }),
    (Ae.useFormState = function (p, d, m) {
      return u.H.useFormState(p, d, m);
    }),
    (Ae.useFormStatus = function () {
      return u.H.useHostTransitionStatus();
    }),
    (Ae.version = "19.2.0"),
    Ae
  );
}
var Rm;
function hv() {
  if (Rm) return xf.exports;
  Rm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return i(), (xf.exports = fv()), xf.exports;
}
var Bm;
function dv() {
  if (Bm) return wl;
  Bm = 1;
  var i = uv(),
    e = Kf(),
    a = hv();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        n += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var n = t,
      s = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (s = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? s : null;
  }
  function u(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (c(t) !== t) throw Error(l(188));
  }
  function d(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = c(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var s = t, o = n; ; ) {
      var f = s.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((o = f.return), o !== null)) {
          s = o;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === s) return p(f), t;
          if (g === o) return p(f), n;
          g = g.sibling;
        }
        throw Error(l(188));
      }
      if (s.return !== o.return) (s = f), (o = g);
      else {
        for (var y = !1, C = f.child; C; ) {
          if (C === s) {
            (y = !0), (s = f), (o = g);
            break;
          }
          if (C === o) {
            (y = !0), (o = f), (s = g);
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = g.child; C; ) {
            if (C === s) {
              (y = !0), (s = g), (o = f);
              break;
            }
            if (C === o) {
              (y = !0), (o = g), (s = f);
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (s.alternate !== o) throw Error(l(190));
    }
    if (s.tag !== 3) throw Error(l(188));
    return s.stateNode.current === s ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    w = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    T = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    N = Symbol.for("react.memo_cache_sentinel"),
    R = Symbol.iterator;
  function B(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (R && t[R]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var $ = Symbol.for("react.client.reference");
  function st(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === $ ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case E:
        return "Profiler";
      case O:
        return "StrictMode";
      case H:
        return "Suspense";
      case tt:
        return "SuspenseList";
      case v:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case _:
          return "Portal";
        case K:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case T:
          return (
            (n = t.displayName || null), n !== null ? n : st(t.type) || "Memo"
          );
        case S:
          (n = t._payload), (t = t._init);
          try {
            return st(t(n));
          } catch {}
      }
    return null;
  }
  var at = Array.isArray,
    j = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    it = [],
    ct = -1;
  function A(t) {
    return { current: t };
  }
  function k(t) {
    0 > ct || ((t.current = it[ct]), (it[ct] = null), ct--);
  }
  function V(t, n) {
    ct++, (it[ct] = t.current), (t.current = n);
  }
  var nt = A(null),
    lt = A(null),
    ot = A(null),
    bt = A(null);
  function pt(t, n) {
    switch ((V(ot, n), V(lt, t), V(nt, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Pp(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          (n = Pp(n)), (t = Ip(n, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    k(nt), V(nt, t);
  }
  function dt() {
    k(nt), k(lt), k(ot);
  }
  function qt(t) {
    t.memoizedState !== null && V(bt, t);
    var n = nt.current,
      s = Ip(n, t.type);
    n !== s && (V(lt, t), V(nt, s));
  }
  function vt(t) {
    lt.current === t && (k(nt), k(lt)),
      bt.current === t && (k(bt), (pl._currentValue = et));
  }
  var Nt, ee;
  function St(t) {
    if (Nt === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        (Nt = (n && n[1]) || ""),
          (ee =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Nt +
      t +
      ee
    );
  }
  var At = !1;
  function yt(t, n) {
    if (!t || At) return "";
    At = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var I = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(I.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(I, []);
                } catch (X) {
                  var Y = X;
                }
                Reflect.construct(t, [], I);
              } else {
                try {
                  I.call();
                } catch (X) {
                  Y = X;
                }
                t.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                Y = X;
              }
              (I = t()) &&
                typeof I.catch == "function" &&
                I.catch(function () {});
            }
          } catch (X) {
            if (X && Y && typeof X.stack == "string") return [X.stack, Y.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = o.DetermineComponentFrameRoot(),
        y = g[0],
        C = g[1];
      if (y && C) {
        var z = y.split(`
`),
          F = C.split(`
`);
        for (
          f = o = 0;
          o < z.length && !z[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; f < F.length && !F[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (o === z.length || f === F.length)
          for (
            o = z.length - 1, f = F.length - 1;
            1 <= o && 0 <= f && z[o] !== F[f];

          )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (z[o] !== F[f]) {
            if (o !== 1 || f !== 1)
              do
                if ((o--, f--, 0 > f || z[o] !== F[f])) {
                  var Z =
                    `
` + z[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", t.displayName)),
                    Z
                  );
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      (At = !1), (Error.prepareStackTrace = s);
    }
    return (s = t ? t.displayName || t.name : "") ? St(s) : "";
  }
  function se(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return St(t.type);
      case 16:
        return St("Lazy");
      case 13:
        return t.child !== n && n !== null
          ? St("Suspense Fallback")
          : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return yt(t.type, !1);
      case 11:
        return yt(t.type.render, !1);
      case 1:
        return yt(t.type, !0);
      case 31:
        return St("Activity");
      default:
        return "";
    }
  }
  function Ot(t) {
    try {
      var n = "",
        s = null;
      do (n += se(t, s)), (s = t), (t = t.return);
      while (t);
      return n;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var Ut = Object.prototype.hasOwnProperty,
    ne = i.unstable_scheduleCallback,
    An = i.unstable_cancelCallback,
    sn = i.unstable_shouldYield,
    Zi = i.unstable_requestPaint,
    Ft = i.unstable_now,
    ln = i.unstable_getCurrentPriorityLevel,
    le = i.unstable_ImmediatePriority,
    we = i.unstable_UserBlockingPriority,
    Be = i.unstable_NormalPriority,
    Ms = i.unstable_LowPriority,
    Ts = i.unstable_IdlePriority,
    ui = i.log,
    on = i.unstable_setDisableYieldValue,
    xn = null,
    Te = null;
  function fi(t) {
    if (
      (typeof ui == "function" && on(t),
      Te && typeof Te.setStrictMode == "function")
    )
      try {
        Te.setStrictMode(xn, t);
      } catch {}
  }
  var Qe = Math.clz32 ? Math.clz32 : Q2,
    G2 = Math.log,
    X2 = Math.LN2;
  function Q2(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((G2(t) / X2) | 0)) | 0;
  }
  var Wl = 256,
    $l = 262144,
    Jl = 4194304;
  function Ki(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function to(t, n, s) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var f = 0,
      g = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var C = o & 134217727;
    return (
      C !== 0
        ? ((o = C & ~g),
          o !== 0
            ? (f = Ki(o))
            : ((y &= C),
              y !== 0
                ? (f = Ki(y))
                : s || ((s = C & ~t), s !== 0 && (f = Ki(s)))))
        : ((C = o & ~g),
          C !== 0
            ? (f = Ki(C))
            : y !== 0
            ? (f = Ki(y))
            : s || ((s = o & ~t), s !== 0 && (f = Ki(s)))),
      f === 0
        ? 0
        : n !== 0 &&
          n !== f &&
          (n & g) === 0 &&
          ((g = f & -f),
          (s = n & -n),
          g >= s || (g === 32 && (s & 4194048) !== 0))
        ? n
        : f
    );
  }
  function As(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Z2(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zh() {
    var t = Jl;
    return (Jl <<= 1), (Jl & 62914560) === 0 && (Jl = 4194304), t;
  }
  function ac(t) {
    for (var n = [], s = 0; 31 > s; s++) n.push(t);
    return n;
  }
  function Os(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function K2(t, n, s, o, f, g) {
    var y = t.pendingLanes;
    (t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0);
    var C = t.entanglements,
      z = t.expirationTimes,
      F = t.hiddenUpdates;
    for (s = y & ~s; 0 < s; ) {
      var Z = 31 - Qe(s),
        I = 1 << Z;
      (C[Z] = 0), (z[Z] = -1);
      var Y = F[Z];
      if (Y !== null)
        for (F[Z] = null, Z = 0; Z < Y.length; Z++) {
          var X = Y[Z];
          X !== null && (X.lane &= -536870913);
        }
      s &= ~I;
    }
    o !== 0 && Dh(t, o, 0),
      g !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= g & ~(y & ~n));
  }
  function Dh(t, n, s) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var o = 31 - Qe(n);
    (t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (s & 261930));
  }
  function kh(t, n) {
    var s = (t.entangledLanes |= n);
    for (t = t.entanglements; s; ) {
      var o = 31 - Qe(s),
        f = 1 << o;
      (f & n) | (t[o] & n) && (t[o] |= n), (s &= ~f);
    }
  }
  function Rh(t, n) {
    var s = n & -n;
    return (
      (s = (s & 42) !== 0 ? 1 : sc(s)),
      (s & (t.suspendedLanes | n)) !== 0 ? 0 : s
    );
  }
  function sc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function lc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Bh() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : vm(t.type));
  }
  function Lh(t, n) {
    var s = G.p;
    try {
      return (G.p = t), n();
    } finally {
      G.p = s;
    }
  }
  var hi = Math.random().toString(36).slice(2),
    _e = "__reactFiber$" + hi,
    Le = "__reactProps$" + hi,
    Ta = "__reactContainer$" + hi,
    oc = "__reactEvents$" + hi,
    P2 = "__reactListeners$" + hi,
    I2 = "__reactHandles$" + hi,
    Hh = "__reactResources$" + hi,
    zs = "__reactMarker$" + hi;
  function rc(t) {
    delete t[_e], delete t[Le], delete t[oc], delete t[P2], delete t[I2];
  }
  function Aa(t) {
    var n = t[_e];
    if (n) return n;
    for (var s = t.parentNode; s; ) {
      if ((n = s[Ta] || s[_e])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (t = im(t); t !== null; ) {
            if ((s = t[_e])) return s;
            t = im(t);
          }
        return n;
      }
      (t = s), (s = t.parentNode);
    }
    return null;
  }
  function Oa(t) {
    if ((t = t[_e] || t[Ta])) {
      var n = t.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return t;
    }
    return null;
  }
  function Ds(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function za(t) {
    var n = t[Hh];
    return (
      n ||
        (n = t[Hh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function be(t) {
    t[zs] = !0;
  }
  var jh = new Set(),
    Nh = {};
  function Pi(t, n) {
    Da(t, n), Da(t + "Capture", n);
  }
  function Da(t, n) {
    for (Nh[t] = n, t = 0; t < n.length; t++) jh.add(n[t]);
  }
  var W2 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Uh = {},
    Fh = {};
  function $2(t) {
    return Ut.call(Fh, t)
      ? !0
      : Ut.call(Uh, t)
      ? !1
      : W2.test(t)
      ? (Fh[t] = !0)
      : ((Uh[t] = !0), !1);
  }
  function eo(t, n, s) {
    if ($2(n))
      if (s === null) t.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + s);
      }
  }
  function no(t, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + s);
    }
  }
  function qn(t, n, s, o) {
    if (o === null) t.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(n, s, "" + o);
    }
  }
  function rn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function qh(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function J2(t, n, s) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (
      !t.hasOwnProperty(n) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        g = o.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            (s = "" + y), g.call(this, y);
          },
        }),
        Object.defineProperty(t, n, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = "" + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function cc(t) {
    if (!t._valueTracker) {
      var n = qh(t) ? "checked" : "value";
      t._valueTracker = J2(t, n, "" + t[n]);
    }
  }
  function Yh(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      o = "";
    return (
      t && (o = qh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== s ? (n.setValue(t), !0) : !1
    );
  }
  function io(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ty = /[\n"\\]/g;
  function cn(t) {
    return t.replace(ty, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function uc(t, n, s, o, f, g, y, C) {
    (t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + rn(n))
          : t.value !== "" + rn(n) && (t.value = "" + rn(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? fc(t, y, rn(n))
        : s != null
        ? fc(t, y, rn(s))
        : o != null && t.removeAttribute("value"),
      f == null && g != null && (t.defaultChecked = !!g),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      C != null &&
      typeof C != "function" &&
      typeof C != "symbol" &&
      typeof C != "boolean"
        ? (t.name = "" + rn(C))
        : t.removeAttribute("name");
  }
  function Vh(t, n, s, o, f, g, y, C) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.type = g),
      n != null || s != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) {
        cc(t);
        return;
      }
      (s = s != null ? "" + rn(s) : ""),
        (n = n != null ? "" + rn(n) : s),
        C || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (o = o ?? f),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = C ? t.checked : !!o),
      (t.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      cc(t);
  }
  function fc(t, n, s) {
    (n === "number" && io(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function ka(t, n, s, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var f = 0; f < s.length; f++) n["$" + s[f]] = !0;
      for (s = 0; s < t.length; s++)
        (f = n.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== f && (t[s].selected = f),
          f && o && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + rn(s), n = null, f = 0; f < t.length; f++) {
        if (t[f].value === s) {
          (t[f].selected = !0), o && (t[f].defaultSelected = !0);
          return;
        }
        n !== null || t[f].disabled || (n = t[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Gh(t, n, s) {
    if (
      n != null &&
      ((n = "" + rn(n)), n !== t.value && (t.value = n), s == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = s != null ? "" + rn(s) : "";
  }
  function Xh(t, n, s, o) {
    if (n == null) {
      if (o != null) {
        if (s != null) throw Error(l(92));
        if (at(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        s = o;
      }
      s == null && (s = ""), (n = s);
    }
    (s = rn(n)),
      (t.defaultValue = s),
      (o = t.textContent),
      o === s && o !== "" && o !== null && (t.value = o),
      cc(t);
  }
  function Ra(t, n) {
    if (n) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var ey = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qh(t, n, s) {
    var o = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : o
      ? t.setProperty(n, s)
      : typeof s != "number" || s === 0 || ey.has(n)
      ? n === "float"
        ? (t.cssFloat = s)
        : (t[n] = ("" + s).trim())
      : (t[n] = s + "px");
  }
  function Zh(t, n, s) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), s != null)) {
      for (var o in s)
        !s.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var f in n)
        (o = n[f]), n.hasOwnProperty(f) && s[f] !== o && Qh(t, f, o);
    } else for (var g in n) n.hasOwnProperty(g) && Qh(t, g, n[g]);
  }
  function hc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ny = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    iy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ao(t) {
    return iy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Yn() {}
  var dc = null;
  function gc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ba = null,
    La = null;
  function Kh(t) {
    var n = Oa(t);
    if (n && (t = n.stateNode)) {
      var s = t[Le] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (uc(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (n = s.name),
            s.type === "radio" && n != null)
          ) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + cn("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var o = s[n];
              if (o !== t && o.form === t.form) {
                var f = o[Le] || null;
                if (!f) throw Error(l(90));
                uc(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (n = 0; n < s.length; n++)
              (o = s[n]), o.form === t.form && Yh(o);
          }
          break t;
        case "textarea":
          Gh(t, s.value, s.defaultValue);
          break t;
        case "select":
          (n = s.value), n != null && ka(t, !!s.multiple, n, !1);
      }
    }
  }
  var pc = !1;
  function Ph(t, n, s) {
    if (pc) return t(n, s);
    pc = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((pc = !1),
        (Ba !== null || La !== null) &&
          (Qo(), Ba && ((n = Ba), (t = La), (La = Ba = null), Kh(n), t)))
      )
        for (n = 0; n < t.length; n++) Kh(t[n]);
    }
  }
  function ks(t, n) {
    var s = t.stateNode;
    if (s === null) return null;
    var o = s[Le] || null;
    if (o === null) return null;
    s = o[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(l(231, n, typeof s));
    return s;
  }
  var Vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    mc = !1;
  if (Vn)
    try {
      var Rs = {};
      Object.defineProperty(Rs, "passive", {
        get: function () {
          mc = !0;
        },
      }),
        window.addEventListener("test", Rs, Rs),
        window.removeEventListener("test", Rs, Rs);
    } catch {
      mc = !1;
    }
  var di = null,
    bc = null,
    so = null;
  function Ih() {
    if (so) return so;
    var t,
      n = bc,
      s = n.length,
      o,
      f = "value" in di ? di.value : di.textContent,
      g = f.length;
    for (t = 0; t < s && n[t] === f[t]; t++);
    var y = s - t;
    for (o = 1; o <= y && n[s - o] === f[g - o]; o++);
    return (so = f.slice(t, 1 < o ? 1 - o : void 0));
  }
  function lo(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function oo() {
    return !0;
  }
  function Wh() {
    return !1;
  }
  function He(t) {
    function n(s, o, f, g, y) {
      (this._reactName = s),
        (this._targetInst = f),
        (this.type = o),
        (this.nativeEvent = g),
        (this.target = y),
        (this.currentTarget = null);
      for (var C in t)
        t.hasOwnProperty(C) && ((s = t[C]), (this[C] = s ? s(g) : g[C]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? oo
          : Wh),
        (this.isPropagationStopped = Wh),
        this
      );
    }
    return (
      b(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = oo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = oo));
        },
        persist: function () {},
        isPersistent: oo,
      }),
      n
    );
  }
  var Ii = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ro = He(Ii),
    Bs = b({}, Ii, { view: 0, detail: 0 }),
    ay = He(Bs),
    yc,
    vc,
    Ls,
    co = b({}, Bs, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _c,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ls &&
              (Ls && t.type === "mousemove"
                ? ((yc = t.screenX - Ls.screenX), (vc = t.screenY - Ls.screenY))
                : (vc = yc = 0),
              (Ls = t)),
            yc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : vc;
      },
    }),
    $h = He(co),
    sy = b({}, co, { dataTransfer: 0 }),
    ly = He(sy),
    oy = b({}, Bs, { relatedTarget: 0 }),
    wc = He(oy),
    ry = b({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cy = He(ry),
    uy = b({}, Ii, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    fy = He(uy),
    hy = b({}, Ii, { data: 0 }),
    Jh = He(hy),
    dy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function my(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = py[t])
      ? !!n[t]
      : !1;
  }
  function _c() {
    return my;
  }
  var by = b({}, Bs, {
      key: function (t) {
        if (t.key) {
          var n = dy[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = lo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? gy[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _c,
      charCode: function (t) {
        return t.type === "keypress" ? lo(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? lo(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    yy = He(by),
    vy = b({}, co, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    td = He(vy),
    wy = b({}, Bs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _c,
    }),
    _y = He(wy),
    xy = b({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sy = He(xy),
    Cy = b({}, co, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ey = He(Cy),
    My = b({}, Ii, { newState: 0, oldState: 0 }),
    Ty = He(My),
    Ay = [9, 13, 27, 32],
    xc = Vn && "CompositionEvent" in window,
    Hs = null;
  Vn && "documentMode" in document && (Hs = document.documentMode);
  var Oy = Vn && "TextEvent" in window && !Hs,
    ed = Vn && (!xc || (Hs && 8 < Hs && 11 >= Hs)),
    nd = " ",
    id = !1;
  function ad(t, n) {
    switch (t) {
      case "keyup":
        return Ay.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ha = !1;
  function zy(t, n) {
    switch (t) {
      case "compositionend":
        return sd(n);
      case "keypress":
        return n.which !== 32 ? null : ((id = !0), nd);
      case "textInput":
        return (t = n.data), t === nd && id ? null : t;
      default:
        return null;
    }
  }
  function Dy(t, n) {
    if (Ha)
      return t === "compositionend" || (!xc && ad(t, n))
        ? ((t = Ih()), (so = bc = di = null), (Ha = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return ed && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var ky = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ld(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!ky[t.type] : n === "textarea";
  }
  function od(t, n, s, o) {
    Ba ? (La ? La.push(o) : (La = [o])) : (Ba = o),
      (n = Jo(n, "onChange")),
      0 < n.length &&
        ((s = new ro("onChange", "change", null, s, o)),
        t.push({ event: s, listeners: n }));
  }
  var js = null,
    Ns = null;
  function Ry(t) {
    Vp(t, 0);
  }
  function uo(t) {
    var n = Ds(t);
    if (Yh(n)) return t;
  }
  function rd(t, n) {
    if (t === "change") return n;
  }
  var cd = !1;
  if (Vn) {
    var Sc;
    if (Vn) {
      var Cc = "oninput" in document;
      if (!Cc) {
        var ud = document.createElement("div");
        ud.setAttribute("oninput", "return;"),
          (Cc = typeof ud.oninput == "function");
      }
      Sc = Cc;
    } else Sc = !1;
    cd = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function fd() {
    js && (js.detachEvent("onpropertychange", hd), (Ns = js = null));
  }
  function hd(t) {
    if (t.propertyName === "value" && uo(Ns)) {
      var n = [];
      od(n, Ns, t, gc(t)), Ph(Ry, n);
    }
  }
  function By(t, n, s) {
    t === "focusin"
      ? (fd(), (js = n), (Ns = s), js.attachEvent("onpropertychange", hd))
      : t === "focusout" && fd();
  }
  function Ly(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return uo(Ns);
  }
  function Hy(t, n) {
    if (t === "click") return uo(n);
  }
  function jy(t, n) {
    if (t === "input" || t === "change") return uo(n);
  }
  function Ny(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Ze = typeof Object.is == "function" ? Object.is : Ny;
  function Us(t, n) {
    if (Ze(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(t),
      o = Object.keys(n);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var f = s[o];
      if (!Ut.call(n, f) || !Ze(t[f], n[f])) return !1;
    }
    return !0;
  }
  function dd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gd(t, n) {
    var s = dd(t);
    t = 0;
    for (var o; s; ) {
      if (s.nodeType === 3) {
        if (((o = t + s.textContent.length), t <= n && o >= n))
          return { node: s, offset: n - t };
        t = o;
      }
      t: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break t;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = dd(s);
    }
  }
  function pd(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? pd(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function md(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = io(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = n.contentWindow;
      else break;
      n = io(t.document);
    }
    return n;
  }
  function Ec(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Uy = Vn && "documentMode" in document && 11 >= document.documentMode,
    ja = null,
    Mc = null,
    Fs = null,
    Tc = !1;
  function bd(t, n, s) {
    var o =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Tc ||
      ja == null ||
      ja !== io(o) ||
      ((o = ja),
      "selectionStart" in o && Ec(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Fs && Us(Fs, o)) ||
        ((Fs = o),
        (o = Jo(Mc, "onSelect")),
        0 < o.length &&
          ((n = new ro("onSelect", "select", null, n, s)),
          t.push({ event: n, listeners: o }),
          (n.target = ja))));
  }
  function Wi(t, n) {
    var s = {};
    return (
      (s[t.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + t] = "webkit" + n),
      (s["Moz" + t] = "moz" + n),
      s
    );
  }
  var Na = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionrun: Wi("Transition", "TransitionRun"),
      transitionstart: Wi("Transition", "TransitionStart"),
      transitioncancel: Wi("Transition", "TransitionCancel"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    Ac = {},
    yd = {};
  Vn &&
    ((yd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Na.animationend.animation,
      delete Na.animationiteration.animation,
      delete Na.animationstart.animation),
    "TransitionEvent" in window || delete Na.transitionend.transition);
  function $i(t) {
    if (Ac[t]) return Ac[t];
    if (!Na[t]) return t;
    var n = Na[t],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in yd) return (Ac[t] = n[s]);
    return t;
  }
  var vd = $i("animationend"),
    wd = $i("animationiteration"),
    _d = $i("animationstart"),
    Fy = $i("transitionrun"),
    qy = $i("transitionstart"),
    Yy = $i("transitioncancel"),
    xd = $i("transitionend"),
    Sd = new Map(),
    Oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Oc.push("scrollEnd");
  function Sn(t, n) {
    Sd.set(t, n), Pi(n, [t]);
  }
  var fo =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    un = [],
    Ua = 0,
    zc = 0;
  function ho() {
    for (var t = Ua, n = (zc = Ua = 0); n < t; ) {
      var s = un[n];
      un[n++] = null;
      var o = un[n];
      un[n++] = null;
      var f = un[n];
      un[n++] = null;
      var g = un[n];
      if (((un[n++] = null), o !== null && f !== null)) {
        var y = o.pending;
        y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (o.pending = f);
      }
      g !== 0 && Cd(s, f, g);
    }
  }
  function go(t, n, s, o) {
    (un[Ua++] = t),
      (un[Ua++] = n),
      (un[Ua++] = s),
      (un[Ua++] = o),
      (zc |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function Dc(t, n, s, o) {
    return go(t, n, s, o), po(t);
  }
  function Ji(t, n) {
    return go(t, null, null, n), po(t);
  }
  function Cd(t, n, s) {
    t.lanes |= s;
    var o = t.alternate;
    o !== null && (o.lanes |= s);
    for (var f = !1, g = t.return; g !== null; )
      (g.childLanes |= s),
        (o = g.alternate),
        o !== null && (o.childLanes |= s),
        g.tag === 22 &&
          ((t = g.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = g),
        (g = g.return);
    return t.tag === 3
      ? ((g = t.stateNode),
        f &&
          n !== null &&
          ((f = 31 - Qe(s)),
          (t = g.hiddenUpdates),
          (o = t[f]),
          o === null ? (t[f] = [n]) : o.push(n),
          (n.lane = s | 536870912)),
        g)
      : null;
  }
  function po(t) {
    if (50 < rl) throw ((rl = 0), (Fu = null), Error(l(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Fa = {};
  function Vy(t, n, s, o) {
    (this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ke(t, n, s, o) {
    return new Vy(t, n, s, o);
  }
  function kc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Gn(t, n) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = Ke(t.tag, n, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = n),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 65011712),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function Ed(t, n) {
    t.flags &= 65011714;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (n = s.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function mo(t, n, s, o, f, g) {
    var y = 0;
    if (((o = t), typeof t == "function")) kc(t) && (y = 1);
    else if (typeof t == "string")
      y = K1(t, s, nt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case v:
          return (t = Ke(31, s, n, f)), (t.elementType = v), (t.lanes = g), t;
        case M:
          return ta(s.children, f, g, n);
        case O:
          (y = 8), (f |= 24);
          break;
        case E:
          return (
            (t = Ke(12, s, n, f | 2)), (t.elementType = E), (t.lanes = g), t
          );
        case H:
          return (t = Ke(13, s, n, f)), (t.elementType = H), (t.lanes = g), t;
        case tt:
          return (t = Ke(19, s, n, f)), (t.elementType = tt), (t.lanes = g), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
                y = 10;
                break t;
              case W:
                y = 9;
                break t;
              case J:
                y = 11;
                break t;
              case T:
                y = 14;
                break t;
              case S:
                (y = 16), (o = null);
                break t;
            }
          (y = 29),
            (s = Error(l(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (n = Ke(y, s, n, f)), (n.elementType = t), (n.type = o), (n.lanes = g), n
    );
  }
  function ta(t, n, s, o) {
    return (t = Ke(7, t, o, n)), (t.lanes = s), t;
  }
  function Rc(t, n, s) {
    return (t = Ke(6, t, null, n)), (t.lanes = s), t;
  }
  function Md(t) {
    var n = Ke(18, null, null, 0);
    return (n.stateNode = t), n;
  }
  function Bc(t, n, s) {
    return (
      (n = Ke(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var Td = new WeakMap();
  function fn(t, n) {
    if (typeof t == "object" && t !== null) {
      var s = Td.get(t);
      return s !== void 0
        ? s
        : ((n = { value: t, source: n, stack: Ot(n) }), Td.set(t, n), n);
    }
    return { value: t, source: n, stack: Ot(n) };
  }
  var qa = [],
    Ya = 0,
    bo = null,
    qs = 0,
    hn = [],
    dn = 0,
    gi = null,
    On = 1,
    zn = "";
  function Xn(t, n) {
    (qa[Ya++] = qs), (qa[Ya++] = bo), (bo = t), (qs = n);
  }
  function Ad(t, n, s) {
    (hn[dn++] = On), (hn[dn++] = zn), (hn[dn++] = gi), (gi = t);
    var o = On;
    t = zn;
    var f = 32 - Qe(o) - 1;
    (o &= ~(1 << f)), (s += 1);
    var g = 32 - Qe(n) + f;
    if (30 < g) {
      var y = f - (f % 5);
      (g = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (f -= y),
        (On = (1 << (32 - Qe(n) + f)) | (s << f) | o),
        (zn = g + t);
    } else (On = (1 << g) | (s << f) | o), (zn = t);
  }
  function Lc(t) {
    t.return !== null && (Xn(t, 1), Ad(t, 1, 0));
  }
  function Hc(t) {
    for (; t === bo; )
      (bo = qa[--Ya]), (qa[Ya] = null), (qs = qa[--Ya]), (qa[Ya] = null);
    for (; t === gi; )
      (gi = hn[--dn]),
        (hn[dn] = null),
        (zn = hn[--dn]),
        (hn[dn] = null),
        (On = hn[--dn]),
        (hn[dn] = null);
  }
  function Od(t, n) {
    (hn[dn++] = On),
      (hn[dn++] = zn),
      (hn[dn++] = gi),
      (On = n.id),
      (zn = n.overflow),
      (gi = t);
  }
  var xe = null,
    Wt = null,
    zt = !1,
    pi = null,
    gn = !1,
    jc = Error(l(519));
  function mi(t) {
    var n = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Ys(fn(n, t)), jc);
  }
  function zd(t) {
    var n = t.stateNode,
      s = t.type,
      o = t.memoizedProps;
    switch (((n[_e] = t), (n[Le] = o), s)) {
      case "dialog":
        Et("cancel", n), Et("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < ul.length; s++) Et(ul[s], n);
        break;
      case "source":
        Et("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Et("error", n), Et("load", n);
        break;
      case "details":
        Et("toggle", n);
        break;
      case "input":
        Et("invalid", n),
          Vh(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          );
        break;
      case "select":
        Et("invalid", n);
        break;
      case "textarea":
        Et("invalid", n), Xh(n, o.value, o.defaultValue, o.children);
    }
    (s = o.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      n.textContent === "" + s ||
      o.suppressHydrationWarning === !0 ||
      Zp(n.textContent, s)
        ? (o.popover != null && (Et("beforetoggle", n), Et("toggle", n)),
          o.onScroll != null && Et("scroll", n),
          o.onScrollEnd != null && Et("scrollend", n),
          o.onClick != null && (n.onclick = Yn),
          (n = !0))
        : (n = !1),
      n || mi(t, !0);
  }
  function Dd(t) {
    for (xe = t.return; xe; )
      switch (xe.tag) {
        case 5:
        case 31:
        case 13:
          gn = !1;
          return;
        case 27:
        case 3:
          gn = !0;
          return;
        default:
          xe = xe.return;
      }
  }
  function Va(t) {
    if (t !== xe) return !1;
    if (!zt) return Dd(t), (zt = !0), !1;
    var n = t.tag,
      s;
    if (
      ((s = n !== 3 && n !== 27) &&
        ((s = n === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || ef(t.type, t.memoizedProps))),
        (s = !s)),
      s && Wt && mi(t),
      Dd(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = nm(t);
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = nm(t);
    } else
      n === 27
        ? ((n = Wt), zi(t.type) ? ((t = of), (of = null), (Wt = t)) : (Wt = n))
        : (Wt = xe ? mn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ea() {
    (Wt = xe = null), (zt = !1);
  }
  function Nc() {
    var t = pi;
    return (
      t !== null &&
        (Fe === null ? (Fe = t) : Fe.push.apply(Fe, t), (pi = null)),
      t
    );
  }
  function Ys(t) {
    pi === null ? (pi = [t]) : pi.push(t);
  }
  var Uc = A(null),
    na = null,
    Qn = null;
  function bi(t, n, s) {
    V(Uc, n._currentValue), (n._currentValue = s);
  }
  function Zn(t) {
    (t._currentValue = Uc.current), k(Uc);
  }
  function Fc(t, n, s) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function qc(t, n, s, o) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var y = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var C = g;
          g = f;
          for (var z = 0; z < n.length; z++)
            if (C.context === n[z]) {
              (g.lanes |= s),
                (C = g.alternate),
                C !== null && (C.lanes |= s),
                Fc(g.return, s, t),
                o || (y = null);
              break t;
            }
          g = C.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(l(341));
        (y.lanes |= s),
          (g = y.alternate),
          g !== null && (g.lanes |= s),
          Fc(y, s, t),
          (y = null);
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            (f.return = y.return), (y = f);
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function Ga(t, n, s, o) {
    t = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var C = f.type;
          Ze(f.pendingProps.value, y.value) ||
            (t !== null ? t.push(C) : (t = [C]));
        }
      } else if (f === bt.current) {
        if (((y = f.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(pl) : (t = [pl]));
      }
      f = f.return;
    }
    t !== null && qc(n, t, s, o), (n.flags |= 262144);
  }
  function yo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ze(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ia(t) {
    (na = t),
      (Qn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return kd(na, t);
  }
  function vo(t, n) {
    return na === null && ia(t), kd(t, n);
  }
  function kd(t, n) {
    var s = n._currentValue;
    if (((n = { context: n, memoizedValue: s, next: null }), Qn === null)) {
      if (t === null) throw Error(l(308));
      (Qn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Qn = Qn.next = n;
    return s;
  }
  var Gy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (s, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (s) {
                  return s();
                });
            };
          },
    Xy = i.unstable_scheduleCallback,
    Qy = i.unstable_NormalPriority,
    he = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yc() {
    return { controller: new Gy(), data: new Map(), refCount: 0 };
  }
  function Vs(t) {
    t.refCount--,
      t.refCount === 0 &&
        Xy(Qy, function () {
          t.controller.abort();
        });
  }
  var Gs = null,
    Vc = 0,
    Xa = 0,
    Qa = null;
  function Zy(t, n) {
    if (Gs === null) {
      var s = (Gs = []);
      (Vc = 0),
        (Xa = Qu()),
        (Qa = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o);
          },
        });
    }
    return Vc++, n.then(Rd, Rd), n;
  }
  function Rd() {
    if (--Vc === 0 && Gs !== null) {
      Qa !== null && (Qa.status = "fulfilled");
      var t = Gs;
      (Gs = null), (Xa = 0), (Qa = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function Ky(t, n) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var f = 0; f < s.length; f++) (0, s[f])(n);
        },
        function (f) {
          for (o.status = "rejected", o.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        }
      ),
      o
    );
  }
  var Bd = j.S;
  j.S = function (t, n) {
    (bp = Ft()),
      typeof n == "object" &&
        n !== null &&
        typeof n.then == "function" &&
        Zy(t, n),
      Bd !== null && Bd(t, n);
  };
  var aa = A(null);
  function Gc() {
    var t = aa.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function wo(t, n) {
    n === null ? V(aa, aa.current) : V(aa, n.pool);
  }
  function Ld() {
    var t = Gc();
    return t === null ? null : { parent: he._currentValue, pool: t };
  }
  var Za = Error(l(460)),
    Xc = Error(l(474)),
    _o = Error(l(542)),
    xo = { then: function () {} };
  function Hd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function jd(t, n, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(n) : s !== n && (n.then(Yn, Yn), (n = s)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Ud(t), t);
      default:
        if (typeof n.status == "string") n.then(Yn, Yn);
        else {
          if (((t = Kt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(l(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "fulfilled"), (f.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "rejected"), (f.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Ud(t), t);
        }
        throw ((la = n), Za);
    }
  }
  function sa(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (s) {
      throw s !== null && typeof s == "object" && typeof s.then == "function"
        ? ((la = s), Za)
        : s;
    }
  }
  var la = null;
  function Nd() {
    if (la === null) throw Error(l(459));
    var t = la;
    return (la = null), t;
  }
  function Ud(t) {
    if (t === Za || t === _o) throw Error(l(483));
  }
  var Ka = null,
    Xs = 0;
  function So(t) {
    var n = Xs;
    return (Xs += 1), Ka === null && (Ka = []), jd(Ka, t, n);
  }
  function Qs(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function Co(t, n) {
    throw n.$$typeof === w
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function Fd(t) {
    function n(L, D) {
      if (t) {
        var U = L.deletions;
        U === null ? ((L.deletions = [D]), (L.flags |= 16)) : U.push(D);
      }
    }
    function s(L, D) {
      if (!t) return null;
      for (; D !== null; ) n(L, D), (D = D.sibling);
      return null;
    }
    function o(L) {
      for (var D = new Map(); L !== null; )
        L.key !== null ? D.set(L.key, L) : D.set(L.index, L), (L = L.sibling);
      return D;
    }
    function f(L, D) {
      return (L = Gn(L, D)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, D, U) {
      return (
        (L.index = U),
        t
          ? ((U = L.alternate),
            U !== null
              ? ((U = U.index), U < D ? ((L.flags |= 67108866), D) : U)
              : ((L.flags |= 67108866), D))
          : ((L.flags |= 1048576), D)
      );
    }
    function y(L) {
      return t && L.alternate === null && (L.flags |= 67108866), L;
    }
    function C(L, D, U, P) {
      return D === null || D.tag !== 6
        ? ((D = Rc(U, L.mode, P)), (D.return = L), D)
        : ((D = f(D, U)), (D.return = L), D);
    }
    function z(L, D, U, P) {
      var gt = U.type;
      return gt === M
        ? Z(L, D, U.props.children, P, U.key)
        : D !== null &&
          (D.elementType === gt ||
            (typeof gt == "object" &&
              gt !== null &&
              gt.$$typeof === S &&
              sa(gt) === D.type))
        ? ((D = f(D, U.props)), Qs(D, U), (D.return = L), D)
        : ((D = mo(U.type, U.key, U.props, null, L.mode, P)),
          Qs(D, U),
          (D.return = L),
          D);
    }
    function F(L, D, U, P) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== U.containerInfo ||
        D.stateNode.implementation !== U.implementation
        ? ((D = Bc(U, L.mode, P)), (D.return = L), D)
        : ((D = f(D, U.children || [])), (D.return = L), D);
    }
    function Z(L, D, U, P, gt) {
      return D === null || D.tag !== 7
        ? ((D = ta(U, L.mode, P, gt)), (D.return = L), D)
        : ((D = f(D, U)), (D.return = L), D);
    }
    function I(L, D, U) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = Rc("" + D, L.mode, U)), (D.return = L), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (U = mo(D.type, D.key, D.props, null, L.mode, U)),
              Qs(U, D),
              (U.return = L),
              U
            );
          case _:
            return (D = Bc(D, L.mode, U)), (D.return = L), D;
          case S:
            return (D = sa(D)), I(L, D, U);
        }
        if (at(D) || B(D))
          return (D = ta(D, L.mode, U, null)), (D.return = L), D;
        if (typeof D.then == "function") return I(L, So(D), U);
        if (D.$$typeof === K) return I(L, vo(L, D), U);
        Co(L, D);
      }
      return null;
    }
    function Y(L, D, U, P) {
      var gt = D !== null ? D.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return gt !== null ? null : C(L, D, "" + U, P);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return U.key === gt ? z(L, D, U, P) : null;
          case _:
            return U.key === gt ? F(L, D, U, P) : null;
          case S:
            return (U = sa(U)), Y(L, D, U, P);
        }
        if (at(U) || B(U)) return gt !== null ? null : Z(L, D, U, P, null);
        if (typeof U.then == "function") return Y(L, D, So(U), P);
        if (U.$$typeof === K) return Y(L, D, vo(L, U), P);
        Co(L, U);
      }
      return null;
    }
    function X(L, D, U, P, gt) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return (L = L.get(U) || null), C(D, L, "" + P, gt);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case x:
            return (
              (L = L.get(P.key === null ? U : P.key) || null), z(D, L, P, gt)
            );
          case _:
            return (
              (L = L.get(P.key === null ? U : P.key) || null), F(D, L, P, gt)
            );
          case S:
            return (P = sa(P)), X(L, D, U, P, gt);
        }
        if (at(P) || B(P)) return (L = L.get(U) || null), Z(D, L, P, gt, null);
        if (typeof P.then == "function") return X(L, D, U, So(P), gt);
        if (P.$$typeof === K) return X(L, D, U, vo(D, P), gt);
        Co(D, P);
      }
      return null;
    }
    function rt(L, D, U, P) {
      for (
        var gt = null, kt = null, ft = D, xt = (D = 0), Tt = null;
        ft !== null && xt < U.length;
        xt++
      ) {
        ft.index > xt ? ((Tt = ft), (ft = null)) : (Tt = ft.sibling);
        var Rt = Y(L, ft, U[xt], P);
        if (Rt === null) {
          ft === null && (ft = Tt);
          break;
        }
        t && ft && Rt.alternate === null && n(L, ft),
          (D = g(Rt, D, xt)),
          kt === null ? (gt = Rt) : (kt.sibling = Rt),
          (kt = Rt),
          (ft = Tt);
      }
      if (xt === U.length) return s(L, ft), zt && Xn(L, xt), gt;
      if (ft === null) {
        for (; xt < U.length; xt++)
          (ft = I(L, U[xt], P)),
            ft !== null &&
              ((D = g(ft, D, xt)),
              kt === null ? (gt = ft) : (kt.sibling = ft),
              (kt = ft));
        return zt && Xn(L, xt), gt;
      }
      for (ft = o(ft); xt < U.length; xt++)
        (Tt = X(ft, L, xt, U[xt], P)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              ft.delete(Tt.key === null ? xt : Tt.key),
            (D = g(Tt, D, xt)),
            kt === null ? (gt = Tt) : (kt.sibling = Tt),
            (kt = Tt));
      return (
        t &&
          ft.forEach(function (Li) {
            return n(L, Li);
          }),
        zt && Xn(L, xt),
        gt
      );
    }
    function mt(L, D, U, P) {
      if (U == null) throw Error(l(151));
      for (
        var gt = null,
          kt = null,
          ft = D,
          xt = (D = 0),
          Tt = null,
          Rt = U.next();
        ft !== null && !Rt.done;
        xt++, Rt = U.next()
      ) {
        ft.index > xt ? ((Tt = ft), (ft = null)) : (Tt = ft.sibling);
        var Li = Y(L, ft, Rt.value, P);
        if (Li === null) {
          ft === null && (ft = Tt);
          break;
        }
        t && ft && Li.alternate === null && n(L, ft),
          (D = g(Li, D, xt)),
          kt === null ? (gt = Li) : (kt.sibling = Li),
          (kt = Li),
          (ft = Tt);
      }
      if (Rt.done) return s(L, ft), zt && Xn(L, xt), gt;
      if (ft === null) {
        for (; !Rt.done; xt++, Rt = U.next())
          (Rt = I(L, Rt.value, P)),
            Rt !== null &&
              ((D = g(Rt, D, xt)),
              kt === null ? (gt = Rt) : (kt.sibling = Rt),
              (kt = Rt));
        return zt && Xn(L, xt), gt;
      }
      for (ft = o(ft); !Rt.done; xt++, Rt = U.next())
        (Rt = X(ft, L, xt, Rt.value, P)),
          Rt !== null &&
            (t &&
              Rt.alternate !== null &&
              ft.delete(Rt.key === null ? xt : Rt.key),
            (D = g(Rt, D, xt)),
            kt === null ? (gt = Rt) : (kt.sibling = Rt),
            (kt = Rt));
      return (
        t &&
          ft.forEach(function (sv) {
            return n(L, sv);
          }),
        zt && Xn(L, xt),
        gt
      );
    }
    function Zt(L, D, U, P) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === M &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case x:
            t: {
              for (var gt = U.key; D !== null; ) {
                if (D.key === gt) {
                  if (((gt = U.type), gt === M)) {
                    if (D.tag === 7) {
                      s(L, D.sibling),
                        (P = f(D, U.props.children)),
                        (P.return = L),
                        (L = P);
                      break t;
                    }
                  } else if (
                    D.elementType === gt ||
                    (typeof gt == "object" &&
                      gt !== null &&
                      gt.$$typeof === S &&
                      sa(gt) === D.type)
                  ) {
                    s(L, D.sibling),
                      (P = f(D, U.props)),
                      Qs(P, U),
                      (P.return = L),
                      (L = P);
                    break t;
                  }
                  s(L, D);
                  break;
                } else n(L, D);
                D = D.sibling;
              }
              U.type === M
                ? ((P = ta(U.props.children, L.mode, P, U.key)),
                  (P.return = L),
                  (L = P))
                : ((P = mo(U.type, U.key, U.props, null, L.mode, P)),
                  Qs(P, U),
                  (P.return = L),
                  (L = P));
            }
            return y(L);
          case _:
            t: {
              for (gt = U.key; D !== null; ) {
                if (D.key === gt)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === U.containerInfo &&
                    D.stateNode.implementation === U.implementation
                  ) {
                    s(L, D.sibling),
                      (P = f(D, U.children || [])),
                      (P.return = L),
                      (L = P);
                    break t;
                  } else {
                    s(L, D);
                    break;
                  }
                else n(L, D);
                D = D.sibling;
              }
              (P = Bc(U, L.mode, P)), (P.return = L), (L = P);
            }
            return y(L);
          case S:
            return (U = sa(U)), Zt(L, D, U, P);
        }
        if (at(U)) return rt(L, D, U, P);
        if (B(U)) {
          if (((gt = B(U)), typeof gt != "function")) throw Error(l(150));
          return (U = gt.call(U)), mt(L, D, U, P);
        }
        if (typeof U.then == "function") return Zt(L, D, So(U), P);
        if (U.$$typeof === K) return Zt(L, D, vo(L, U), P);
        Co(L, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          D !== null && D.tag === 6
            ? (s(L, D.sibling), (P = f(D, U)), (P.return = L), (L = P))
            : (s(L, D), (P = Rc(U, L.mode, P)), (P.return = L), (L = P)),
          y(L))
        : s(L, D);
    }
    return function (L, D, U, P) {
      try {
        Xs = 0;
        var gt = Zt(L, D, U, P);
        return (Ka = null), gt;
      } catch (ft) {
        if (ft === Za || ft === _o) throw ft;
        var kt = Ke(29, ft, null, L.mode);
        return (kt.lanes = P), (kt.return = L), kt;
      } finally {
      }
    };
  }
  var oa = Fd(!0),
    qd = Fd(!1),
    yi = !1;
  function Qc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zc(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function vi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wi(t, n, s) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Bt & 2) !== 0)) {
      var f = o.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (o.pending = n),
        (n = po(t)),
        Cd(t, null, s),
        n
      );
    }
    return go(t, o, n, s), po(t);
  }
  function Zs(t, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194048) !== 0))
    ) {
      var o = n.lanes;
      (o &= t.pendingLanes), (s |= o), (n.lanes = s), kh(t, s);
    }
  }
  function Kc(t, n) {
    var s = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), s === o)) {
      var f = null,
        g = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          g === null ? (f = g = y) : (g = g.next = y), (s = s.next);
        } while (s !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      (s = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = s);
      return;
    }
    (t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = n) : (t.next = n),
      (s.lastBaseUpdate = n);
  }
  var Pc = !1;
  function Ks() {
    if (Pc) {
      var t = Qa;
      if (t !== null) throw t;
    }
  }
  function Ps(t, n, s, o) {
    Pc = !1;
    var f = t.updateQueue;
    yi = !1;
    var g = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      C = f.shared.pending;
    if (C !== null) {
      f.shared.pending = null;
      var z = C,
        F = z.next;
      (z.next = null), y === null ? (g = F) : (y.next = F), (y = z);
      var Z = t.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (C = Z.lastBaseUpdate),
        C !== y &&
          (C === null ? (Z.firstBaseUpdate = F) : (C.next = F),
          (Z.lastBaseUpdate = z)));
    }
    if (g !== null) {
      var I = f.baseState;
      (y = 0), (Z = F = z = null), (C = g);
      do {
        var Y = C.lane & -536870913,
          X = Y !== C.lane;
        if (X ? (Mt & Y) === Y : (o & Y) === Y) {
          Y !== 0 && Y === Xa && (Pc = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: C.tag,
                  payload: C.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var rt = t,
              mt = C;
            Y = n;
            var Zt = s;
            switch (mt.tag) {
              case 1:
                if (((rt = mt.payload), typeof rt == "function")) {
                  I = rt.call(Zt, I, Y);
                  break t;
                }
                I = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (
                  ((rt = mt.payload),
                  (Y = typeof rt == "function" ? rt.call(Zt, I, Y) : rt),
                  Y == null)
                )
                  break t;
                I = b({}, I, Y);
                break t;
              case 2:
                yi = !0;
            }
          }
          (Y = C.callback),
            Y !== null &&
              ((t.flags |= 64),
              X && (t.flags |= 8192),
              (X = f.callbacks),
              X === null ? (f.callbacks = [Y]) : X.push(Y));
        } else
          (X = {
            lane: Y,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            Z === null ? ((F = Z = X), (z = I)) : (Z = Z.next = X),
            (y |= Y);
        if (((C = C.next), C === null)) {
          if (((C = f.shared.pending), C === null)) break;
          (X = C),
            (C = X.next),
            (X.next = null),
            (f.lastBaseUpdate = X),
            (f.shared.pending = null);
        }
      } while (!0);
      Z === null && (z = I),
        (f.baseState = z),
        (f.firstBaseUpdate = F),
        (f.lastBaseUpdate = Z),
        g === null && (f.shared.lanes = 0),
        (Ei |= y),
        (t.lanes = y),
        (t.memoizedState = I);
    }
  }
  function Yd(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function Vd(t, n) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) Yd(s[t], n);
  }
  var Pa = A(null),
    Eo = A(0);
  function Gd(t, n) {
    (t = ni), V(Eo, t), V(Pa, n), (ni = t | n.baseLanes);
  }
  function Ic() {
    V(Eo, ni), V(Pa, Pa.current);
  }
  function Wc() {
    (ni = Eo.current), k(Pa), k(Eo);
  }
  var Pe = A(null),
    pn = null;
  function _i(t) {
    var n = t.alternate;
    V(oe, oe.current & 1),
      V(Pe, t),
      pn === null &&
        (n === null || Pa.current !== null || n.memoizedState !== null) &&
        (pn = t);
  }
  function $c(t) {
    V(oe, oe.current), V(Pe, t), pn === null && (pn = t);
  }
  function Xd(t) {
    t.tag === 22
      ? (V(oe, oe.current), V(Pe, t), pn === null && (pn = t))
      : xi();
  }
  function xi() {
    V(oe, oe.current), V(Pe, Pe.current);
  }
  function Ie(t) {
    k(Pe), pn === t && (pn = null), k(oe);
  }
  var oe = A(0);
  function Mo(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || sf(s) || lf(s)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Kn = 0,
    _t = null,
    Xt = null,
    de = null,
    To = !1,
    Ia = !1,
    ra = !1,
    Ao = 0,
    Is = 0,
    Wa = null,
    Py = 0;
  function ie() {
    throw Error(l(321));
  }
  function Jc(t, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < t.length; s++)
      if (!Ze(t[s], n[s])) return !1;
    return !0;
  }
  function tu(t, n, s, o, f, g) {
    return (
      (Kn = g),
      (_t = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Ag : pu),
      (ra = !1),
      (g = s(o, f)),
      (ra = !1),
      Ia && (g = Zd(n, s, o, f)),
      Qd(t),
      g
    );
  }
  function Qd(t) {
    j.H = Js;
    var n = Xt !== null && Xt.next !== null;
    if (((Kn = 0), (de = Xt = _t = null), (To = !1), (Is = 0), (Wa = null), n))
      throw Error(l(300));
    t === null ||
      ge ||
      ((t = t.dependencies), t !== null && yo(t) && (ge = !0));
  }
  function Zd(t, n, s, o) {
    _t = t;
    var f = 0;
    do {
      if ((Ia && (Wa = null), (Is = 0), (Ia = !1), 25 <= f))
        throw Error(l(301));
      if (((f += 1), (de = Xt = null), t.updateQueue != null)) {
        var g = t.updateQueue;
        (g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0);
      }
      (j.H = Og), (g = n(s, o));
    } while (Ia);
    return g;
  }
  function Iy() {
    var t = j.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? Ws(n) : n),
      (t = t.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== t && (_t.flags |= 1024),
      n
    );
  }
  function eu() {
    var t = Ao !== 0;
    return (Ao = 0), t;
  }
  function nu(t, n, s) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~s);
  }
  function iu(t) {
    if (To) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      To = !1;
    }
    (Kn = 0), (de = Xt = _t = null), (Ia = !1), (Is = Ao = 0), (Wa = null);
  }
  function De() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return de === null ? (_t.memoizedState = de = t) : (de = de.next = t), de;
  }
  function re() {
    if (Xt === null) {
      var t = _t.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xt.next;
    var n = de === null ? _t.memoizedState : de.next;
    if (n !== null) (de = n), (Xt = t);
    else {
      if (t === null)
        throw _t.alternate === null ? Error(l(467)) : Error(l(310));
      (Xt = t),
        (t = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        de === null ? (_t.memoizedState = de = t) : (de = de.next = t);
    }
    return de;
  }
  function Oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ws(t) {
    var n = Is;
    return (
      (Is += 1),
      Wa === null && (Wa = []),
      (t = jd(Wa, t, n)),
      (n = _t),
      (de === null ? n.memoizedState : de.next) === null &&
        ((n = n.alternate),
        (j.H = n === null || n.memoizedState === null ? Ag : pu)),
      t
    );
  }
  function zo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ws(t);
      if (t.$$typeof === K) return Se(t);
    }
    throw Error(l(438, String(t)));
  }
  function au(t) {
    var n = null,
      s = _t.updateQueue;
    if ((s !== null && (n = s.memoCache), n == null)) {
      var o = _t.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      s === null && ((s = Oo()), (_t.updateQueue = s)),
      (s.memoCache = n),
      (s = n.data[n.index]),
      s === void 0)
    )
      for (s = n.data[n.index] = Array(t), o = 0; o < t; o++) s[o] = N;
    return n.index++, s;
  }
  function Pn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Do(t) {
    var n = re();
    return su(n, Xt, t);
  }
  function su(t, n, s) {
    var o = t.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = s;
    var f = t.baseQueue,
      g = o.pending;
    if (g !== null) {
      if (f !== null) {
        var y = f.next;
        (f.next = g.next), (g.next = y);
      }
      (n.baseQueue = f = g), (o.pending = null);
    }
    if (((g = t.baseState), f === null)) t.memoizedState = g;
    else {
      n = f.next;
      var C = (y = null),
        z = null,
        F = n,
        Z = !1;
      do {
        var I = F.lane & -536870913;
        if (I !== F.lane ? (Mt & I) === I : (Kn & I) === I) {
          var Y = F.revertLane;
          if (Y === 0)
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: F.action,
                  hasEagerState: F.hasEagerState,
                  eagerState: F.eagerState,
                  next: null,
                }),
              I === Xa && (Z = !0);
          else if ((Kn & Y) === Y) {
            (F = F.next), Y === Xa && (Z = !0);
            continue;
          } else
            (I = {
              lane: 0,
              revertLane: F.revertLane,
              gesture: null,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null,
            }),
              z === null ? ((C = z = I), (y = g)) : (z = z.next = I),
              (_t.lanes |= Y),
              (Ei |= Y);
          (I = F.action),
            ra && s(g, I),
            (g = F.hasEagerState ? F.eagerState : s(g, I));
        } else
          (Y = {
            lane: I,
            revertLane: F.revertLane,
            gesture: F.gesture,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          }),
            z === null ? ((C = z = Y), (y = g)) : (z = z.next = Y),
            (_t.lanes |= I),
            (Ei |= I);
        F = F.next;
      } while (F !== null && F !== n);
      if (
        (z === null ? (y = g) : (z.next = C),
        !Ze(g, t.memoizedState) && ((ge = !0), Z && ((s = Qa), s !== null)))
      )
        throw s;
      (t.memoizedState = g),
        (t.baseState = y),
        (t.baseQueue = z),
        (o.lastRenderedState = g);
    }
    return f === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function lu(t) {
    var n = re(),
      s = n.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = t;
    var o = s.dispatch,
      f = s.pending,
      g = n.memoizedState;
    if (f !== null) {
      s.pending = null;
      var y = (f = f.next);
      do (g = t(g, y.action)), (y = y.next);
      while (y !== f);
      Ze(g, n.memoizedState) || (ge = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (s.lastRenderedState = g);
    }
    return [g, o];
  }
  function Kd(t, n, s) {
    var o = _t,
      f = re(),
      g = zt;
    if (g) {
      if (s === void 0) throw Error(l(407));
      s = s();
    } else s = n();
    var y = !Ze((Xt || f).memoizedState, s);
    if (
      (y && ((f.memoizedState = s), (ge = !0)),
      (f = f.queue),
      cu(Wd.bind(null, o, f, t), [t]),
      f.getSnapshot !== n || y || (de !== null && de.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        $a(9, { destroy: void 0 }, Id.bind(null, o, f, s, n), null),
        Kt === null)
      )
        throw Error(l(349));
      g || (Kn & 127) !== 0 || Pd(o, n, s);
    }
    return s;
  }
  function Pd(t, n, s) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: s }),
      (n = _t.updateQueue),
      n === null
        ? ((n = Oo()), (_t.updateQueue = n), (n.stores = [t]))
        : ((s = n.stores), s === null ? (n.stores = [t]) : s.push(t));
  }
  function Id(t, n, s, o) {
    (n.value = s), (n.getSnapshot = o), $d(n) && Jd(t);
  }
  function Wd(t, n, s) {
    return s(function () {
      $d(n) && Jd(t);
    });
  }
  function $d(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var s = n();
      return !Ze(t, s);
    } catch {
      return !0;
    }
  }
  function Jd(t) {
    var n = Ji(t, 2);
    n !== null && qe(n, t, 2);
  }
  function ou(t) {
    var n = De();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), ra)) {
        fi(!0);
        try {
          s();
        } finally {
          fi(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function tg(t, n, s, o) {
    return (t.baseState = s), su(t, Xt, typeof o == "function" ? o : Pn);
  }
  function Wy(t, n, s, o, f) {
    if (Bo(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var g = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          g.listeners.push(y);
        },
      };
      j.T !== null ? s(!0) : (g.isTransition = !1),
        o(g),
        (s = n.pending),
        s === null
          ? ((g.next = n.pending = g), eg(n, g))
          : ((g.next = s.next), (n.pending = s.next = g));
    }
  }
  function eg(t, n) {
    var s = n.action,
      o = n.payload,
      f = t.state;
    if (n.isTransition) {
      var g = j.T,
        y = {};
      j.T = y;
      try {
        var C = s(f, o),
          z = j.S;
        z !== null && z(y, C), ng(t, n, C);
      } catch (F) {
        ru(t, n, F);
      } finally {
        g !== null && y.types !== null && (g.types = y.types), (j.T = g);
      }
    } else
      try {
        (g = s(f, o)), ng(t, n, g);
      } catch (F) {
        ru(t, n, F);
      }
  }
  function ng(t, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (o) {
            ig(t, n, o);
          },
          function (o) {
            return ru(t, n, o);
          }
        )
      : ig(t, n, s);
  }
  function ig(t, n, s) {
    (n.status = "fulfilled"),
      (n.value = s),
      ag(n),
      (t.state = s),
      (n = t.pending),
      n !== null &&
        ((s = n.next),
        s === n ? (t.pending = null) : ((s = s.next), (n.next = s), eg(t, s)));
  }
  function ru(t, n, s) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = s), ag(n), (n = n.next);
      while (n !== o);
    }
    t.action = null;
  }
  function ag(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function sg(t, n) {
    return n;
  }
  function lg(t, n) {
    if (zt) {
      var s = Kt.formState;
      if (s !== null) {
        t: {
          var o = _t;
          if (zt) {
            if (Wt) {
              e: {
                for (var f = Wt, g = gn; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = mn(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (g = f.data), (f = g === "F!" || g === "F" ? f : null);
              }
              if (f) {
                (Wt = mn(f.nextSibling)), (o = f.data === "F!");
                break t;
              }
            }
            mi(o);
          }
          o = !1;
        }
        o && (n = s[0]);
      }
    }
    return (
      (s = De()),
      (s.memoizedState = s.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sg,
        lastRenderedState: n,
      }),
      (s.queue = o),
      (s = Eg.bind(null, _t, o)),
      (o.dispatch = s),
      (o = ou(!1)),
      (g = gu.bind(null, _t, !1, o.queue)),
      (o = De()),
      (f = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = f),
      (s = Wy.bind(null, _t, f, g, s)),
      (f.dispatch = s),
      (o.memoizedState = t),
      [n, s, !1]
    );
  }
  function og(t) {
    var n = re();
    return rg(n, Xt, t);
  }
  function rg(t, n, s) {
    if (
      ((n = su(t, n, sg)[0]),
      (t = Do(Pn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = Ws(n);
      } catch (y) {
        throw y === Za ? _o : y;
      }
    else o = n;
    n = re();
    var f = n.queue,
      g = f.dispatch;
    return (
      s !== n.memoizedState &&
        ((_t.flags |= 2048),
        $a(9, { destroy: void 0 }, $y.bind(null, f, s), null)),
      [o, g, t]
    );
  }
  function $y(t, n) {
    t.action = n;
  }
  function cg(t) {
    var n = re(),
      s = Xt;
    if (s !== null) return rg(n, s, t);
    re(), (n = n.memoizedState), (s = re());
    var o = s.queue.dispatch;
    return (s.memoizedState = t), [n, o, !1];
  }
  function $a(t, n, s, o) {
    return (
      (t = { tag: t, create: s, deps: o, inst: n, next: null }),
      (n = _t.updateQueue),
      n === null && ((n = Oo()), (_t.updateQueue = n)),
      (s = n.lastEffect),
      s === null
        ? (n.lastEffect = t.next = t)
        : ((o = s.next), (s.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function ug() {
    return re().memoizedState;
  }
  function ko(t, n, s, o) {
    var f = De();
    (_t.flags |= t),
      (f.memoizedState = $a(
        1 | n,
        { destroy: void 0 },
        s,
        o === void 0 ? null : o
      ));
  }
  function Ro(t, n, s, o) {
    var f = re();
    o = o === void 0 ? null : o;
    var g = f.memoizedState.inst;
    Xt !== null && o !== null && Jc(o, Xt.memoizedState.deps)
      ? (f.memoizedState = $a(n, g, s, o))
      : ((_t.flags |= t), (f.memoizedState = $a(1 | n, g, s, o)));
  }
  function fg(t, n) {
    ko(8390656, 8, t, n);
  }
  function cu(t, n) {
    Ro(2048, 8, t, n);
  }
  function Jy(t) {
    _t.flags |= 4;
    var n = _t.updateQueue;
    if (n === null) (n = Oo()), (_t.updateQueue = n), (n.events = [t]);
    else {
      var s = n.events;
      s === null ? (n.events = [t]) : s.push(t);
    }
  }
  function hg(t) {
    var n = re().memoizedState;
    return (
      Jy({ ref: n, nextImpl: t }),
      function () {
        if ((Bt & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function dg(t, n) {
    return Ro(4, 2, t, n);
  }
  function gg(t, n) {
    return Ro(4, 4, t, n);
  }
  function pg(t, n) {
    if (typeof n == "function") {
      t = t();
      var s = n(t);
      return function () {
        typeof s == "function" ? s() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function mg(t, n, s) {
    (s = s != null ? s.concat([t]) : null), Ro(4, 4, pg.bind(null, n, t), s);
  }
  function uu() {}
  function bg(t, n) {
    var s = re();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    return n !== null && Jc(n, o[1]) ? o[0] : ((s.memoizedState = [t, n]), t);
  }
  function yg(t, n) {
    var s = re();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    if (n !== null && Jc(n, o[1])) return o[0];
    if (((o = t()), ra)) {
      fi(!0);
      try {
        t();
      } finally {
        fi(!1);
      }
    }
    return (s.memoizedState = [o, n]), o;
  }
  function fu(t, n, s) {
    return s === void 0 || ((Kn & 1073741824) !== 0 && (Mt & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = s), (t = vp()), (_t.lanes |= t), (Ei |= t), s);
  }
  function vg(t, n, s, o) {
    return Ze(s, n)
      ? s
      : Pa.current !== null
      ? ((t = fu(t, s, o)), Ze(t, n) || (ge = !0), t)
      : (Kn & 42) === 0 || ((Kn & 1073741824) !== 0 && (Mt & 261930) === 0)
      ? ((ge = !0), (t.memoizedState = s))
      : ((t = vp()), (_t.lanes |= t), (Ei |= t), n);
  }
  function wg(t, n, s, o, f) {
    var g = G.p;
    G.p = g !== 0 && 8 > g ? g : 8;
    var y = j.T,
      C = {};
    (j.T = C), gu(t, !1, n, s);
    try {
      var z = f(),
        F = j.S;
      if (
        (F !== null && F(C, z),
        z !== null && typeof z == "object" && typeof z.then == "function")
      ) {
        var Z = Ky(z, o);
        $s(t, n, Z, Je(t));
      } else $s(t, n, o, Je(t));
    } catch (I) {
      $s(t, n, { then: function () {}, status: "rejected", reason: I }, Je());
    } finally {
      (G.p = g),
        y !== null && C.types !== null && (y.types = C.types),
        (j.T = y);
    }
  }
  function t1() {}
  function hu(t, n, s, o) {
    if (t.tag !== 5) throw Error(l(476));
    var f = _g(t).queue;
    wg(
      t,
      f,
      n,
      et,
      s === null
        ? t1
        : function () {
            return xg(t), s(o);
          }
    );
  }
  function _g(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: et,
      },
      next: null,
    };
    var s = {};
    return (
      (n.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Pn,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function xg(t) {
    var n = _g(t);
    n.next === null && (n = t.alternate.memoizedState),
      $s(t, n.next.queue, {}, Je());
  }
  function du() {
    return Se(pl);
  }
  function Sg() {
    return re().memoizedState;
  }
  function Cg() {
    return re().memoizedState;
  }
  function e1(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = Je();
          t = vi(s);
          var o = wi(n, t, s);
          o !== null && (qe(o, n, s), Zs(o, n, s)),
            (n = { cache: Yc() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function n1(t, n, s) {
    var o = Je();
    (s = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Bo(t)
        ? Mg(n, s)
        : ((s = Dc(t, n, s, o)), s !== null && (qe(s, t, o), Tg(s, n, o)));
  }
  function Eg(t, n, s) {
    var o = Je();
    $s(t, n, s, o);
  }
  function $s(t, n, s, o) {
    var f = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Bo(t)) Mg(n, f);
    else {
      var g = t.alternate;
      if (
        t.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var y = n.lastRenderedState,
            C = g(y, s);
          if (((f.hasEagerState = !0), (f.eagerState = C), Ze(C, y)))
            return go(t, n, f, 0), Kt === null && ho(), !1;
        } catch {
        } finally {
        }
      if (((s = Dc(t, n, f, o)), s !== null))
        return qe(s, t, o), Tg(s, n, o), !0;
    }
    return !1;
  }
  function gu(t, n, s, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Qu(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bo(t))
    ) {
      if (n) throw Error(l(479));
    } else (n = Dc(t, s, o, 2)), n !== null && qe(n, t, 2);
  }
  function Bo(t) {
    var n = t.alternate;
    return t === _t || (n !== null && n === _t);
  }
  function Mg(t, n) {
    Ia = To = !0;
    var s = t.pending;
    s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (t.pending = n);
  }
  function Tg(t, n, s) {
    if ((s & 4194048) !== 0) {
      var o = n.lanes;
      (o &= t.pendingLanes), (s |= o), (n.lanes = s), kh(t, s);
    }
  }
  var Js = {
    readContext: Se,
    use: zo,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useLayoutEffect: ie,
    useInsertionEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useSyncExternalStore: ie,
    useId: ie,
    useHostTransitionStatus: ie,
    useFormState: ie,
    useActionState: ie,
    useOptimistic: ie,
    useMemoCache: ie,
    useCacheRefresh: ie,
  };
  Js.useEffectEvent = ie;
  var Ag = {
      readContext: Se,
      use: zo,
      useCallback: function (t, n) {
        return (De().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: Se,
      useEffect: fg,
      useImperativeHandle: function (t, n, s) {
        (s = s != null ? s.concat([t]) : null),
          ko(4194308, 4, pg.bind(null, n, t), s);
      },
      useLayoutEffect: function (t, n) {
        return ko(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ko(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var s = De();
        n = n === void 0 ? null : n;
        var o = t();
        if (ra) {
          fi(!0);
          try {
            t();
          } finally {
            fi(!1);
          }
        }
        return (s.memoizedState = [o, n]), o;
      },
      useReducer: function (t, n, s) {
        var o = De();
        if (s !== void 0) {
          var f = s(n);
          if (ra) {
            fi(!0);
            try {
              s(n);
            } finally {
              fi(!1);
            }
          }
        } else f = n;
        return (
          (o.memoizedState = o.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (o.queue = t),
          (t = t.dispatch = n1.bind(null, _t, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = De();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: function (t) {
        t = ou(t);
        var n = t.queue,
          s = Eg.bind(null, _t, n);
        return (n.dispatch = s), [t.memoizedState, s];
      },
      useDebugValue: uu,
      useDeferredValue: function (t, n) {
        var s = De();
        return fu(s, t, n);
      },
      useTransition: function () {
        var t = ou(!1);
        return (
          (t = wg.bind(null, _t, t.queue, !0, !1)),
          (De().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, s) {
        var o = _t,
          f = De();
        if (zt) {
          if (s === void 0) throw Error(l(407));
          s = s();
        } else {
          if (((s = n()), Kt === null)) throw Error(l(349));
          (Mt & 127) !== 0 || Pd(o, n, s);
        }
        f.memoizedState = s;
        var g = { value: s, getSnapshot: n };
        return (
          (f.queue = g),
          fg(Wd.bind(null, o, g, t), [t]),
          (o.flags |= 2048),
          $a(9, { destroy: void 0 }, Id.bind(null, o, g, s, n), null),
          s
        );
      },
      useId: function () {
        var t = De(),
          n = Kt.identifierPrefix;
        if (zt) {
          var s = zn,
            o = On;
          (s = (o & ~(1 << (32 - Qe(o) - 1))).toString(32) + s),
            (n = "_" + n + "R_" + s),
            (s = Ao++),
            0 < s && (n += "H" + s.toString(32)),
            (n += "_");
        } else (s = Py++), (n = "_" + n + "r_" + s.toString(32) + "_");
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: du,
      useFormState: lg,
      useActionState: lg,
      useOptimistic: function (t) {
        var n = De();
        n.memoizedState = n.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = s),
          (n = gu.bind(null, _t, !0, s)),
          (s.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: au,
      useCacheRefresh: function () {
        return (De().memoizedState = e1.bind(null, _t));
      },
      useEffectEvent: function (t) {
        var n = De(),
          s = { impl: t };
        return (
          (n.memoizedState = s),
          function () {
            if ((Bt & 2) !== 0) throw Error(l(440));
            return s.impl.apply(void 0, arguments);
          }
        );
      },
    },
    pu = {
      readContext: Se,
      use: zo,
      useCallback: bg,
      useContext: Se,
      useEffect: cu,
      useImperativeHandle: mg,
      useInsertionEffect: dg,
      useLayoutEffect: gg,
      useMemo: yg,
      useReducer: Do,
      useRef: ug,
      useState: function () {
        return Do(Pn);
      },
      useDebugValue: uu,
      useDeferredValue: function (t, n) {
        var s = re();
        return vg(s, Xt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Do(Pn)[0],
          n = re().memoizedState;
        return [typeof t == "boolean" ? t : Ws(t), n];
      },
      useSyncExternalStore: Kd,
      useId: Sg,
      useHostTransitionStatus: du,
      useFormState: og,
      useActionState: og,
      useOptimistic: function (t, n) {
        var s = re();
        return tg(s, Xt, t, n);
      },
      useMemoCache: au,
      useCacheRefresh: Cg,
    };
  pu.useEffectEvent = hg;
  var Og = {
    readContext: Se,
    use: zo,
    useCallback: bg,
    useContext: Se,
    useEffect: cu,
    useImperativeHandle: mg,
    useInsertionEffect: dg,
    useLayoutEffect: gg,
    useMemo: yg,
    useReducer: lu,
    useRef: ug,
    useState: function () {
      return lu(Pn);
    },
    useDebugValue: uu,
    useDeferredValue: function (t, n) {
      var s = re();
      return Xt === null ? fu(s, t, n) : vg(s, Xt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = lu(Pn)[0],
        n = re().memoizedState;
      return [typeof t == "boolean" ? t : Ws(t), n];
    },
    useSyncExternalStore: Kd,
    useId: Sg,
    useHostTransitionStatus: du,
    useFormState: cg,
    useActionState: cg,
    useOptimistic: function (t, n) {
      var s = re();
      return Xt !== null
        ? tg(s, Xt, t, n)
        : ((s.baseState = t), [t, s.queue.dispatch]);
    },
    useMemoCache: au,
    useCacheRefresh: Cg,
  };
  Og.useEffectEvent = hg;
  function mu(t, n, s, o) {
    (n = t.memoizedState),
      (s = s(o, n)),
      (s = s == null ? n : b({}, n, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var bu = {
    enqueueSetState: function (t, n, s) {
      t = t._reactInternals;
      var o = Je(),
        f = vi(o);
      (f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, o)),
        n !== null && (qe(n, t, o), Zs(n, t, o));
    },
    enqueueReplaceState: function (t, n, s) {
      t = t._reactInternals;
      var o = Je(),
        f = vi(o);
      (f.tag = 1),
        (f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, o)),
        n !== null && (qe(n, t, o), Zs(n, t, o));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var s = Je(),
        o = vi(s);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = wi(t, o, s)),
        n !== null && (qe(n, t, s), Zs(n, t, s));
    },
  };
  function zg(t, n, s, o, f, g, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, g, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Us(s, o) || !Us(f, g)
        : !0
    );
  }
  function Dg(t, n, s, o) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, o),
      n.state !== t && bu.enqueueReplaceState(n, n.state, null);
  }
  function ca(t, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var o in n) o !== "ref" && (s[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      s === n && (s = b({}, s));
      for (var f in t) s[f] === void 0 && (s[f] = t[f]);
    }
    return s;
  }
  function kg(t) {
    fo(t);
  }
  function Rg(t) {
    console.error(t);
  }
  function Bg(t) {
    fo(t);
  }
  function Lo(t, n) {
    try {
      var s = t.onUncaughtError;
      s(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Lg(t, n, s) {
    try {
      var o = t.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function yu(t, n, s) {
    return (
      (s = vi(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Lo(t, n);
      }),
      s
    );
  }
  function Hg(t) {
    return (t = vi(t)), (t.tag = 3), t;
  }
  function jg(t, n, s, o) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = o.value;
      (t.payload = function () {
        return f(g);
      }),
        (t.callback = function () {
          Lg(n, s, o);
        });
    }
    var y = s.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        Lg(n, s, o),
          typeof f != "function" &&
            (Mi === null ? (Mi = new Set([this])) : Mi.add(this));
        var C = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: C !== null ? C : "",
        });
      });
  }
  function i1(t, n, s, o, f) {
    if (
      ((s.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = s.alternate),
        n !== null && Ga(n, s, f, !0),
        (s = Pe.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 31:
          case 13:
            return (
              pn === null ? Zo() : s.alternate === null && ae === 0 && (ae = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              o === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null ? (s.updateQueue = new Set([o])) : n.add(o),
                  Vu(t, o, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              o === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (s.updateQueue = n))
                    : ((s = n.retryQueue),
                      s === null ? (n.retryQueue = new Set([o])) : s.add(o)),
                  Vu(t, o, f)),
              !1
            );
        }
        throw Error(l(435, s.tag));
      }
      return Vu(t, o, f), Zo(), !1;
    }
    if (zt)
      return (
        (n = Pe.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            o !== jc && ((t = Error(l(422), { cause: o })), Ys(fn(t, s))))
          : (o !== jc && ((n = Error(l(423), { cause: o })), Ys(fn(n, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (o = fn(o, s)),
            (f = yu(t.stateNode, o, f)),
            Kc(t, f),
            ae !== 4 && (ae = 2)),
        !1
      );
    var g = Error(l(520), { cause: o });
    if (
      ((g = fn(g, s)),
      ol === null ? (ol = [g]) : ol.push(g),
      ae !== 4 && (ae = 2),
      n === null)
    )
      return !0;
    (o = fn(o, s)), (s = n);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = f & -f),
            (s.lanes |= t),
            (t = yu(s.stateNode, o, t)),
            Kc(s, t),
            !1
          );
        case 1:
          if (
            ((n = s.type),
            (g = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (Mi === null || !Mi.has(g)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Hg(f)),
              jg(f, t, s, o),
              Kc(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var vu = Error(l(461)),
    ge = !1;
  function Ce(t, n, s, o) {
    n.child = t === null ? qd(n, null, s, o) : oa(n, t.child, s, o);
  }
  function Ng(t, n, s, o, f) {
    s = s.render;
    var g = n.ref;
    if ("ref" in o) {
      var y = {};
      for (var C in o) C !== "ref" && (y[C] = o[C]);
    } else y = o;
    return (
      ia(n),
      (o = tu(t, n, s, y, g, f)),
      (C = eu()),
      t !== null && !ge
        ? (nu(t, n, f), In(t, n, f))
        : (zt && C && Lc(n), (n.flags |= 1), Ce(t, n, o, f), n.child)
    );
  }
  function Ug(t, n, s, o, f) {
    if (t === null) {
      var g = s.type;
      return typeof g == "function" &&
        !kc(g) &&
        g.defaultProps === void 0 &&
        s.compare === null
        ? ((n.tag = 15), (n.type = g), Fg(t, n, g, o, f))
        : ((t = mo(s.type, null, o, n, n.mode, f)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((g = t.child), !Tu(t, f))) {
      var y = g.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Us), s(y, o) && t.ref === n.ref)
      )
        return In(t, n, f);
    }
    return (
      (n.flags |= 1),
      (t = Gn(g, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Fg(t, n, s, o, f) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (Us(g, o) && t.ref === n.ref)
        if (((ge = !1), (n.pendingProps = o = g), Tu(t, f)))
          (t.flags & 131072) !== 0 && (ge = !0);
        else return (n.lanes = t.lanes), In(t, n, f);
    }
    return wu(t, n, s, o, f);
  }
  function qg(t, n, s, o) {
    var f = o.children,
      g = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((g = g !== null ? g.baseLanes | s : s), t !== null)) {
          for (o = n.child = t.child, f = 0; o !== null; )
            (f = f | o.lanes | o.childLanes), (o = o.sibling);
          o = f & ~g;
        } else (o = 0), (n.child = null);
        return Yg(t, n, g, s, o);
      }
      if ((s & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && wo(n, g !== null ? g.cachePool : null),
          g !== null ? Gd(n, g) : Ic(),
          Xd(n);
      else
        return (
          (o = n.lanes = 536870912),
          Yg(t, n, g !== null ? g.baseLanes | s : s, s, o)
        );
    } else
      g !== null
        ? (wo(n, g.cachePool), Gd(n, g), xi(), (n.memoizedState = null))
        : (t !== null && wo(n, null), Ic(), xi());
    return Ce(t, n, f, s), n.child;
  }
  function tl(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function Yg(t, n, s, o, f) {
    var g = Gc();
    return (
      (g = g === null ? null : { parent: he._currentValue, pool: g }),
      (n.memoizedState = { baseLanes: s, cachePool: g }),
      t !== null && wo(n, null),
      Ic(),
      Xd(n),
      t !== null && Ga(t, n, o, !0),
      (n.childLanes = f),
      null
    );
  }
  function Ho(t, n) {
    return (
      (n = No({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    );
  }
  function Vg(t, n, s) {
    return (
      oa(n, t.child, null, s),
      (t = Ho(n, n.pendingProps)),
      (t.flags |= 2),
      Ie(n),
      (n.memoizedState = null),
      t
    );
  }
  function a1(t, n, s) {
    var o = n.pendingProps,
      f = (n.flags & 128) !== 0;
    if (((n.flags &= -129), t === null)) {
      if (zt) {
        if (o.mode === "hidden")
          return (t = Ho(n, o)), (n.lanes = 536870912), tl(null, t);
        if (
          ($c(n),
          (t = Wt)
            ? ((t = em(t, gn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: On, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Md(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return (n.lanes = 536870912), null;
      }
      return Ho(n, o);
    }
    var g = t.memoizedState;
    if (g !== null) {
      var y = g.dehydrated;
      if (($c(n), f))
        if (n.flags & 256) (n.flags &= -257), (n = Vg(t, n, s));
        else if (n.memoizedState !== null)
          (n.child = t.child), (n.flags |= 128), (n = null);
        else throw Error(l(558));
      else if (
        (ge || Ga(t, n, s, !1), (f = (s & t.childLanes) !== 0), ge || f)
      ) {
        if (
          ((o = Kt),
          o !== null && ((y = Rh(o, s)), y !== 0 && y !== g.retryLane))
        )
          throw ((g.retryLane = y), Ji(t, y), qe(o, t, y), vu);
        Zo(), (n = Vg(t, n, s));
      } else
        (t = g.treeContext),
          (Wt = mn(y.nextSibling)),
          (xe = n),
          (zt = !0),
          (pi = null),
          (gn = !1),
          t !== null && Od(n, t),
          (n = Ho(n, o)),
          (n.flags |= 4096);
      return n;
    }
    return (
      (t = Gn(t.child, { mode: o.mode, children: o.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    );
  }
  function jo(t, n) {
    var s = n.ref;
    if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(l(284));
      (t === null || t.ref !== s) && (n.flags |= 4194816);
    }
  }
  function wu(t, n, s, o, f) {
    return (
      ia(n),
      (s = tu(t, n, s, o, void 0, f)),
      (o = eu()),
      t !== null && !ge
        ? (nu(t, n, f), In(t, n, f))
        : (zt && o && Lc(n), (n.flags |= 1), Ce(t, n, s, f), n.child)
    );
  }
  function Gg(t, n, s, o, f, g) {
    return (
      ia(n),
      (n.updateQueue = null),
      (s = Zd(n, o, s, f)),
      Qd(t),
      (o = eu()),
      t !== null && !ge
        ? (nu(t, n, g), In(t, n, g))
        : (zt && o && Lc(n), (n.flags |= 1), Ce(t, n, s, g), n.child)
    );
  }
  function Xg(t, n, s, o, f) {
    if ((ia(n), n.stateNode === null)) {
      var g = Fa,
        y = s.contextType;
      typeof y == "object" && y !== null && (g = Se(y)),
        (g = new s(o, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = bu),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = o),
        (g.state = n.memoizedState),
        (g.refs = {}),
        Qc(n),
        (y = s.contextType),
        (g.context = typeof y == "object" && y !== null ? Se(y) : Fa),
        (g.state = n.memoizedState),
        (y = s.getDerivedStateFromProps),
        typeof y == "function" && (mu(n, s, y, o), (g.state = n.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((y = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          y !== g.state && bu.enqueueReplaceState(g, g.state, null),
          Ps(n, o, g, f),
          Ks(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      g = n.stateNode;
      var C = n.memoizedProps,
        z = ca(s, C);
      g.props = z;
      var F = g.context,
        Z = s.contextType;
      (y = Fa), typeof Z == "object" && Z !== null && (y = Se(Z));
      var I = s.getDerivedStateFromProps;
      (Z =
        typeof I == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (C = n.pendingProps !== C),
        Z ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((C || F !== y) && Dg(n, g, o, y)),
        (yi = !1);
      var Y = n.memoizedState;
      (g.state = Y),
        Ps(n, o, g, f),
        Ks(),
        (F = n.memoizedState),
        C || Y !== F || yi
          ? (typeof I == "function" && (mu(n, s, I, o), (F = n.memoizedState)),
            (z = yi || zg(n, s, z, o, Y, F, y))
              ? (Z ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = F)),
            (g.props = o),
            (g.state = F),
            (g.context = y),
            (o = z))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (g = n.stateNode),
        Zc(t, n),
        (y = n.memoizedProps),
        (Z = ca(s, y)),
        (g.props = Z),
        (I = n.pendingProps),
        (Y = g.context),
        (F = s.contextType),
        (z = Fa),
        typeof F == "object" && F !== null && (z = Se(F)),
        (C = s.getDerivedStateFromProps),
        (F =
          typeof C == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((y !== I || Y !== z) && Dg(n, g, o, z)),
        (yi = !1),
        (Y = n.memoizedState),
        (g.state = Y),
        Ps(n, o, g, f),
        Ks();
      var X = n.memoizedState;
      y !== I ||
      Y !== X ||
      yi ||
      (t !== null && t.dependencies !== null && yo(t.dependencies))
        ? (typeof C == "function" && (mu(n, s, C, o), (X = n.memoizedState)),
          (Z =
            yi ||
            zg(n, s, Z, o, Y, X, z) ||
            (t !== null && t.dependencies !== null && yo(t.dependencies)))
            ? (F ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(o, X, z),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(o, X, z)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (y === t.memoizedProps && Y === t.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && Y === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = X)),
          (g.props = o),
          (g.state = X),
          (g.context = z),
          (o = Z))
        : (typeof g.componentDidUpdate != "function" ||
            (y === t.memoizedProps && Y === t.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && Y === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (g = o),
      jo(t, n),
      (o = (n.flags & 128) !== 0),
      g || o
        ? ((g = n.stateNode),
          (s =
            o && typeof s.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = oa(n, t.child, null, f)),
              (n.child = oa(n, null, s, f)))
            : Ce(t, n, s, f),
          (n.memoizedState = g.state),
          (t = n.child))
        : (t = In(t, n, f)),
      t
    );
  }
  function Qg(t, n, s, o) {
    return ea(), (n.flags |= 256), Ce(t, n, s, o), n.child;
  }
  var _u = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function xu(t) {
    return { baseLanes: t, cachePool: Ld() };
  }
  function Su(t, n, s) {
    return (t = t !== null ? t.childLanes & ~s : 0), n && (t |= $e), t;
  }
  function Zg(t, n, s) {
    var o = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      y;
    if (
      ((y = g) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (oe.current & 2) !== 0),
      y && ((f = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (zt) {
        if (
          (f ? _i(n) : xi(),
          (t = Wt)
            ? ((t = em(t, gn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: On, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Md(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return lf(t) ? (n.lanes = 32) : (n.lanes = 536870912), null;
      }
      var C = o.children;
      return (
        (o = o.fallback),
        f
          ? (xi(),
            (f = n.mode),
            (C = No({ mode: "hidden", children: C }, f)),
            (o = ta(o, f, s, null)),
            (C.return = n),
            (o.return = n),
            (C.sibling = o),
            (n.child = C),
            (o = n.child),
            (o.memoizedState = xu(s)),
            (o.childLanes = Su(t, y, s)),
            (n.memoizedState = _u),
            tl(null, o))
          : (_i(n), Cu(n, C))
      );
    }
    var z = t.memoizedState;
    if (z !== null && ((C = z.dehydrated), C !== null)) {
      if (g)
        n.flags & 256
          ? (_i(n), (n.flags &= -257), (n = Eu(t, n, s)))
          : n.memoizedState !== null
          ? (xi(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (xi(),
            (C = o.fallback),
            (f = n.mode),
            (o = No({ mode: "visible", children: o.children }, f)),
            (C = ta(C, f, s, null)),
            (C.flags |= 2),
            (o.return = n),
            (C.return = n),
            (o.sibling = C),
            (n.child = o),
            oa(n, t.child, null, s),
            (o = n.child),
            (o.memoizedState = xu(s)),
            (o.childLanes = Su(t, y, s)),
            (n.memoizedState = _u),
            (n = tl(null, o)));
      else if ((_i(n), lf(C))) {
        if (((y = C.nextSibling && C.nextSibling.dataset), y)) var F = y.dgst;
        (y = F),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = y),
          Ys({ value: o, source: null, stack: null }),
          (n = Eu(t, n, s));
      } else if (
        (ge || Ga(t, n, s, !1), (y = (s & t.childLanes) !== 0), ge || y)
      ) {
        if (
          ((y = Kt),
          y !== null && ((o = Rh(y, s)), o !== 0 && o !== z.retryLane))
        )
          throw ((z.retryLane = o), Ji(t, o), qe(y, t, o), vu);
        sf(C) || Zo(), (n = Eu(t, n, s));
      } else
        sf(C)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = z.treeContext),
            (Wt = mn(C.nextSibling)),
            (xe = n),
            (zt = !0),
            (pi = null),
            (gn = !1),
            t !== null && Od(n, t),
            (n = Cu(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (xi(),
        (C = o.fallback),
        (f = n.mode),
        (z = t.child),
        (F = z.sibling),
        (o = Gn(z, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = z.subtreeFlags & 65011712),
        F !== null ? (C = Gn(F, C)) : ((C = ta(C, f, s, null)), (C.flags |= 2)),
        (C.return = n),
        (o.return = n),
        (o.sibling = C),
        (n.child = o),
        tl(null, o),
        (o = n.child),
        (C = t.child.memoizedState),
        C === null
          ? (C = xu(s))
          : ((f = C.cachePool),
            f !== null
              ? ((z = he._currentValue),
                (f = f.parent !== z ? { parent: z, pool: z } : f))
              : (f = Ld()),
            (C = { baseLanes: C.baseLanes | s, cachePool: f })),
        (o.memoizedState = C),
        (o.childLanes = Su(t, y, s)),
        (n.memoizedState = _u),
        tl(t.child, o))
      : (_i(n),
        (s = t.child),
        (t = s.sibling),
        (s = Gn(s, { mode: "visible", children: o.children })),
        (s.return = n),
        (s.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = s),
        (n.memoizedState = null),
        s);
  }
  function Cu(t, n) {
    return (
      (n = No({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function No(t, n) {
    return (t = Ke(22, t, null, n)), (t.lanes = 0), t;
  }
  function Eu(t, n, s) {
    return (
      oa(n, t.child, null, s),
      (t = Cu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Kg(t, n, s) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), Fc(t.return, n, s);
  }
  function Mu(t, n, s, o, f, g) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: s,
          tailMode: f,
          treeForkCount: g,
        })
      : ((y.isBackwards = n),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = o),
        (y.tail = s),
        (y.tailMode = f),
        (y.treeForkCount = g));
  }
  function Pg(t, n, s) {
    var o = n.pendingProps,
      f = o.revealOrder,
      g = o.tail;
    o = o.children;
    var y = oe.current,
      C = (y & 2) !== 0;
    if (
      (C ? ((y = (y & 1) | 2), (n.flags |= 128)) : (y &= 1),
      V(oe, y),
      Ce(t, n, o, s),
      (o = zt ? qs : 0),
      !C && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Kg(t, s, n);
        else if (t.tag === 19) Kg(t, s, n);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (f) {
      case "forwards":
        for (s = n.child, f = null; s !== null; )
          (t = s.alternate),
            t !== null && Mo(t) === null && (f = s),
            (s = s.sibling);
        (s = f),
          s === null
            ? ((f = n.child), (n.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          Mu(n, !1, f, s, g, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (s = null, f = n.child, n.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && Mo(t) === null)) {
            n.child = f;
            break;
          }
          (t = f.sibling), (f.sibling = s), (s = f), (f = t);
        }
        Mu(n, !0, s, null, g, o);
        break;
      case "together":
        Mu(n, !1, null, null, void 0, o);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function In(t, n, s) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Ei |= n.lanes),
      (s & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ga(t, n, s, !1), (s & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        t = n.child, s = Gn(t, t.pendingProps), n.child = s, s.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (s = s.sibling = Gn(t, t.pendingProps)),
          (s.return = n);
      s.sibling = null;
    }
    return n.child;
  }
  function Tu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && yo(t)));
  }
  function s1(t, n, s) {
    switch (n.tag) {
      case 3:
        pt(n, n.stateNode.containerInfo),
          bi(n, he, t.memoizedState.cache),
          ea();
        break;
      case 27:
      case 5:
        qt(n);
        break;
      case 4:
        pt(n, n.stateNode.containerInfo);
        break;
      case 10:
        bi(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return (n.flags |= 128), $c(n), null;
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (_i(n), (n.flags |= 128), null)
            : (s & n.child.childLanes) !== 0
            ? Zg(t, n, s)
            : (_i(n), (t = In(t, n, s)), t !== null ? t.sibling : null);
        _i(n);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((o = (s & n.childLanes) !== 0),
          o || (Ga(t, n, s, !1), (o = (s & n.childLanes) !== 0)),
          f)
        ) {
          if (o) return Pg(t, n, s);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          V(oe, oe.current),
          o)
        )
          break;
        return null;
      case 22:
        return (n.lanes = 0), qg(t, n, s, n.pendingProps);
      case 24:
        bi(n, he, t.memoizedState.cache);
    }
    return In(t, n, s);
  }
  function Ig(t, n, s) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) ge = !0;
      else {
        if (!Tu(t, s) && (n.flags & 128) === 0) return (ge = !1), s1(t, n, s);
        ge = (t.flags & 131072) !== 0;
      }
    else (ge = !1), zt && (n.flags & 1048576) !== 0 && Ad(n, qs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          var o = n.pendingProps;
          if (((t = sa(n.elementType)), (n.type = t), typeof t == "function"))
            kc(t)
              ? ((o = ca(t, o)), (n.tag = 1), (n = Xg(null, n, t, o, s)))
              : ((n.tag = 0), (n = wu(null, n, t, o, s)));
          else {
            if (t != null) {
              var f = t.$$typeof;
              if (f === J) {
                (n.tag = 11), (n = Ng(null, n, t, o, s));
                break t;
              } else if (f === T) {
                (n.tag = 14), (n = Ug(null, n, t, o, s));
                break t;
              }
            }
            throw ((n = st(t) || t), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return wu(t, n, n.type, n.pendingProps, s);
      case 1:
        return (o = n.type), (f = ca(o, n.pendingProps)), Xg(t, n, o, f, s);
      case 3:
        t: {
          if ((pt(n, n.stateNode.containerInfo), t === null))
            throw Error(l(387));
          o = n.pendingProps;
          var g = n.memoizedState;
          (f = g.element), Zc(t, n), Ps(n, o, null, s);
          var y = n.memoizedState;
          if (
            ((o = y.cache),
            bi(n, he, o),
            o !== g.cache && qc(n, [he], s, !0),
            Ks(),
            (o = y.element),
            g.isDehydrated)
          )
            if (
              ((g = { element: o, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = g),
              (n.memoizedState = g),
              n.flags & 256)
            ) {
              n = Qg(t, n, o, s);
              break t;
            } else if (o !== f) {
              (f = fn(Error(l(424)), n)), Ys(f), (n = Qg(t, n, o, s));
              break t;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Wt = mn(t.firstChild),
                  xe = n,
                  zt = !0,
                  pi = null,
                  gn = !0,
                  s = qd(n, null, o, s),
                  n.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((ea(), o === f)) {
              n = In(t, n, s);
              break t;
            }
            Ce(t, n, o, s);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          jo(t, n),
          t === null
            ? (s = om(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = s)
              : zt ||
                ((s = n.type),
                (t = n.pendingProps),
                (o = tr(ot.current).createElement(s)),
                (o[_e] = n),
                (o[Le] = t),
                Ee(o, s, t),
                be(o),
                (n.stateNode = o))
            : (n.memoizedState = om(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          qt(n),
          t === null &&
            zt &&
            ((o = n.stateNode = am(n.type, n.pendingProps, ot.current)),
            (xe = n),
            (gn = !0),
            (f = Wt),
            zi(n.type) ? ((of = f), (Wt = mn(o.firstChild))) : (Wt = f)),
          Ce(t, n, n.pendingProps.children, s),
          jo(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            zt &&
            ((f = o = Wt) &&
              ((o = L1(o, n.type, n.pendingProps, gn)),
              o !== null
                ? ((n.stateNode = o),
                  (xe = n),
                  (Wt = mn(o.firstChild)),
                  (gn = !1),
                  (f = !0))
                : (f = !1)),
            f || mi(n)),
          qt(n),
          (f = n.type),
          (g = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (o = g.children),
          ef(f, g) ? (o = null) : y !== null && ef(f, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = tu(t, n, Iy, null, null, s)), (pl._currentValue = f)),
          jo(t, n),
          Ce(t, n, o, s),
          n.child
        );
      case 6:
        return (
          t === null &&
            zt &&
            ((t = s = Wt) &&
              ((s = H1(s, n.pendingProps, gn)),
              s !== null
                ? ((n.stateNode = s), (xe = n), (Wt = null), (t = !0))
                : (t = !1)),
            t || mi(n)),
          null
        );
      case 13:
        return Zg(t, n, s);
      case 4:
        return (
          pt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = oa(n, null, o, s)) : Ce(t, n, o, s),
          n.child
        );
      case 11:
        return Ng(t, n, n.type, n.pendingProps, s);
      case 7:
        return Ce(t, n, n.pendingProps, s), n.child;
      case 8:
        return Ce(t, n, n.pendingProps.children, s), n.child;
      case 12:
        return Ce(t, n, n.pendingProps.children, s), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          bi(n, n.type, o.value),
          Ce(t, n, o.children, s),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (o = n.pendingProps.children),
          ia(n),
          (f = Se(f)),
          (o = o(f)),
          (n.flags |= 1),
          Ce(t, n, o, s),
          n.child
        );
      case 14:
        return Ug(t, n, n.type, n.pendingProps, s);
      case 15:
        return Fg(t, n, n.type, n.pendingProps, s);
      case 19:
        return Pg(t, n, s);
      case 31:
        return a1(t, n, s);
      case 22:
        return qg(t, n, s, n.pendingProps);
      case 24:
        return (
          ia(n),
          (o = Se(he)),
          t === null
            ? ((f = Gc()),
              f === null &&
                ((f = Kt),
                (g = Yc()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= s),
                (f = g)),
              (n.memoizedState = { parent: o, cache: f }),
              Qc(n),
              bi(n, he, f))
            : ((t.lanes & s) !== 0 && (Zc(t, n), Ps(n, null, null, s), Ks()),
              (f = t.memoizedState),
              (g = n.memoizedState),
              f.parent !== o
                ? ((f = { parent: o, cache: o }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  bi(n, he, o))
                : ((o = g.cache),
                  bi(n, he, o),
                  o !== f.cache && qc(n, [he], s, !0))),
          Ce(t, n, n.pendingProps.children, s),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function Wn(t) {
    t.flags |= 4;
  }
  function Au(t, n, s, o, f) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (f & 335544128) === f))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Sp()) t.flags |= 8192;
        else throw ((la = xo), Xc);
    } else t.flags &= -16777217;
  }
  function Wg(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !hm(n)))
      if (Sp()) t.flags |= 8192;
      else throw ((la = xo), Xc);
  }
  function Uo(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? zh() : 536870912), (t.lanes |= n), (ns |= n));
  }
  function el(t, n) {
    if (!zt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), (n = n.sibling);
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var o = null; s !== null; )
            s.alternate !== null && (o = s), (s = s.sibling);
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function $t(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      o = 0;
    if (n)
      for (var f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags & 65011712),
          (o |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling);
    else
      for (f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags),
          (o |= f.flags),
          (f.return = t),
          (f = f.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = s), n;
  }
  function l1(t, n, s) {
    var o = n.pendingProps;
    switch ((Hc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $t(n), null;
      case 1:
        return $t(n), null;
      case 3:
        return (
          (s = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Zn(he),
          dt(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (Va(n)
              ? Wn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Nc())),
          $t(n),
          null
        );
      case 26:
        var f = n.type,
          g = n.memoizedState;
        return (
          t === null
            ? (Wn(n),
              g !== null ? ($t(n), Wg(n, g)) : ($t(n), Au(n, f, null, o, s)))
            : g
            ? g !== t.memoizedState
              ? (Wn(n), $t(n), Wg(n, g))
              : ($t(n), (n.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== o && Wn(n),
              $t(n),
              Au(n, f, t, o, s)),
          null
        );
      case 27:
        if (
          (vt(n),
          (s = ot.current),
          (f = n.type),
          t !== null && n.stateNode != null)
        )
          t.memoizedProps !== o && Wn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return $t(n), null;
          }
          (t = nt.current),
            Va(n) ? zd(n) : ((t = am(f, o, s)), (n.stateNode = t), Wn(n));
        }
        return $t(n), null;
      case 5:
        if ((vt(n), (f = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && Wn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return $t(n), null;
          }
          if (((g = nt.current), Va(n))) zd(n);
          else {
            var y = tr(ot.current);
            switch (g) {
              case 1:
                g = y.createElementNS("http://www.w3.org/2000/svg", f);
                break;
              case 2:
                g = y.createElementNS("http://www.w3.org/1998/Math/MathML", f);
                break;
              default:
                switch (f) {
                  case "svg":
                    g = y.createElementNS("http://www.w3.org/2000/svg", f);
                    break;
                  case "math":
                    g = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f
                    );
                    break;
                  case "script":
                    (g = y.createElement("div")),
                      (g.innerHTML = "<script></script>"),
                      (g = g.removeChild(g.firstChild));
                    break;
                  case "select":
                    (g =
                      typeof o.is == "string"
                        ? y.createElement("select", { is: o.is })
                        : y.createElement("select")),
                      o.multiple
                        ? (g.multiple = !0)
                        : o.size && (g.size = o.size);
                    break;
                  default:
                    g =
                      typeof o.is == "string"
                        ? y.createElement(f, { is: o.is })
                        : y.createElement(f);
                }
            }
            (g[_e] = n), (g[Le] = o);
            t: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) g.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                (y.child.return = y), (y = y.child);
                continue;
              }
              if (y === n) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n) break t;
                y = y.return;
              }
              (y.sibling.return = y.return), (y = y.sibling);
            }
            n.stateNode = g;
            t: switch ((Ee(g, f, o), f)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break t;
              case "img":
                o = !0;
                break t;
              default:
                o = !1;
            }
            o && Wn(n);
          }
        }
        return (
          $t(n),
          Au(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, s),
          null
        );
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && Wn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = ot.current), Va(n))) {
            if (
              ((t = n.stateNode),
              (s = n.memoizedProps),
              (o = null),
              (f = xe),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            (t[_e] = n),
              (t = !!(
                t.nodeValue === s ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Zp(t.nodeValue, s)
              )),
              t || mi(n, !0);
          } else (t = tr(t).createTextNode(o)), (t[_e] = n), (n.stateNode = t);
        }
        return $t(n), null;
      case 31:
        if (((s = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((o = Va(n)), s !== null)) {
            if (t === null) {
              if (!o) throw Error(l(318));
              if (
                ((t = n.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(l(557));
              t[_e] = n;
            } else
              ea(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            $t(n), (t = !1);
          } else
            (s = Nc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (t = !0);
          if (!t) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return $t(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Va(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(l(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(l(317));
              f[_e] = n;
            } else
              ea(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            $t(n), (f = !1);
          } else
            (f = Nc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
        }
        return (
          Ie(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = s), n)
            : ((s = o !== null),
              (t = t !== null && t.memoizedState !== null),
              s &&
                ((o = n.child),
                (f = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (f = o.alternate.memoizedState.cachePool.pool),
                (g = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (g = o.memoizedState.cachePool.pool),
                g !== f && (o.flags |= 2048)),
              s !== t && s && (n.child.flags |= 8192),
              Uo(n, n.updateQueue),
              $t(n),
              null)
        );
      case 4:
        return dt(), t === null && Iu(n.stateNode.containerInfo), $t(n), null;
      case 10:
        return Zn(n.type), $t(n), null;
      case 19:
        if ((k(oe), (o = n.memoizedState), o === null)) return $t(n), null;
        if (((f = (n.flags & 128) !== 0), (g = o.rendering), g === null))
          if (f) el(o, !1);
          else {
            if (ae !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((g = Mo(t)), g !== null)) {
                  for (
                    n.flags |= 128,
                      el(o, !1),
                      t = g.updateQueue,
                      n.updateQueue = t,
                      Uo(n, t),
                      n.subtreeFlags = 0,
                      t = s,
                      s = n.child;
                    s !== null;

                  )
                    Ed(s, t), (s = s.sibling);
                  return (
                    V(oe, (oe.current & 1) | 2),
                    zt && Xn(n, o.treeForkCount),
                    n.child
                  );
                }
                t = t.sibling;
              }
            o.tail !== null &&
              Ft() > Go &&
              ((n.flags |= 128), (f = !0), el(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!f)
            if (((t = Mo(g)), t !== null)) {
              if (
                ((n.flags |= 128),
                (f = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Uo(n, t),
                el(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !g.alternate &&
                  !zt)
              )
                return $t(n), null;
            } else
              2 * Ft() - o.renderingStartTime > Go &&
                s !== 536870912 &&
                ((n.flags |= 128), (f = !0), el(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((t = o.last),
              t !== null ? (t.sibling = g) : (n.child = g),
              (o.last = g));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ft()),
            (t.sibling = null),
            (s = oe.current),
            V(oe, f ? (s & 1) | 2 : s & 1),
            zt && Xn(n, o.treeForkCount),
            t)
          : ($t(n), null);
      case 22:
      case 23:
        return (
          Ie(n),
          Wc(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (s & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              ($t(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : $t(n),
          (s = n.updateQueue),
          s !== null && Uo(n, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== s && (n.flags |= 2048),
          t !== null && k(aa),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          n.memoizedState.cache !== s && (n.flags |= 2048),
          Zn(he),
          $t(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function o1(t, n) {
    switch ((Hc(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Zn(he),
          dt(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return vt(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if ((Ie(n), n.alternate === null)) throw Error(l(340));
          ea();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 13:
        if (
          (Ie(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          ea();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return k(oe), null;
      case 4:
        return dt(), null;
      case 10:
        return Zn(n.type), null;
      case 22:
      case 23:
        return (
          Ie(n),
          Wc(),
          t !== null && k(aa),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return Zn(he), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $g(t, n) {
    switch ((Hc(n), n.tag)) {
      case 3:
        Zn(he), dt();
        break;
      case 26:
      case 27:
      case 5:
        vt(n);
        break;
      case 4:
        dt();
        break;
      case 31:
        n.memoizedState !== null && Ie(n);
        break;
      case 13:
        Ie(n);
        break;
      case 19:
        k(oe);
        break;
      case 10:
        Zn(n.type);
        break;
      case 22:
      case 23:
        Ie(n), Wc(), t !== null && k(aa);
        break;
      case 24:
        Zn(he);
    }
  }
  function nl(t, n) {
    try {
      var s = n.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        s = f;
        do {
          if ((s.tag & t) === t) {
            o = void 0;
            var g = s.create,
              y = s.inst;
            (o = g()), (y.destroy = o);
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (C) {
      Vt(n, n.return, C);
    }
  }
  function Si(t, n, s) {
    try {
      var o = n.updateQueue,
        f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        o = g;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst,
              C = y.destroy;
            if (C !== void 0) {
              (y.destroy = void 0), (f = n);
              var z = s,
                F = C;
              try {
                F();
              } catch (Z) {
                Vt(f, z, Z);
              }
            }
          }
          o = o.next;
        } while (o !== g);
      }
    } catch (Z) {
      Vt(n, n.return, Z);
    }
  }
  function Jg(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var s = t.stateNode;
      try {
        Vd(n, s);
      } catch (o) {
        Vt(t, t.return, o);
      }
    }
  }
  function tp(t, n, s) {
    (s.props = ca(t.type, t.memoizedProps)), (s.state = t.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (o) {
      Vt(t, n, o);
    }
  }
  function il(t, n) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof s == "function" ? (t.refCleanup = s(o)) : (s.current = o);
      }
    } catch (f) {
      Vt(t, n, f);
    }
  }
  function Dn(t, n) {
    var s = t.ref,
      o = t.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Vt(t, n, f);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          Vt(t, n, f);
        }
      else s.current = null;
  }
  function ep(t) {
    var n = t.type,
      s = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break t;
        case "img":
          s.src ? (o.src = s.src) : s.srcSet && (o.srcset = s.srcSet);
      }
    } catch (f) {
      Vt(t, t.return, f);
    }
  }
  function Ou(t, n, s) {
    try {
      var o = t.stateNode;
      O1(o, t.type, s, n), (o[Le] = n);
    } catch (f) {
      Vt(t, t.return, f);
    }
  }
  function np(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && zi(t.type)) ||
      t.tag === 4
    );
  }
  function zu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || np(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && zi(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Du(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        n
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
              ? s.ownerDocument.body
              : s
            ).insertBefore(t, n)
          : ((n =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s),
            n.appendChild(t),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = Yn));
    else if (
      o !== 4 &&
      (o === 27 && zi(t.type) && ((s = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (Du(t, n, s), t = t.sibling; t !== null; )
        Du(t, n, s), (t = t.sibling);
  }
  function Fo(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), n ? s.insertBefore(t, n) : s.appendChild(t);
    else if (
      o !== 4 &&
      (o === 27 && zi(t.type) && (s = t.stateNode), (t = t.child), t !== null)
    )
      for (Fo(t, n, s), t = t.sibling; t !== null; )
        Fo(t, n, s), (t = t.sibling);
  }
  function ip(t) {
    var n = t.stateNode,
      s = t.memoizedProps;
    try {
      for (var o = t.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      Ee(n, o, s), (n[_e] = t), (n[Le] = s);
    } catch (g) {
      Vt(t, t.return, g);
    }
  }
  var $n = !1,
    pe = !1,
    ku = !1,
    ap = typeof WeakSet == "function" ? WeakSet : Set,
    ye = null;
  function r1(t, n) {
    if (((t = t.containerInfo), (Ju = or), (t = md(t)), Ec(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var f = o.anchorOffset,
              g = o.focusNode;
            o = o.focusOffset;
            try {
              s.nodeType, g.nodeType;
            } catch {
              s = null;
              break t;
            }
            var y = 0,
              C = -1,
              z = -1,
              F = 0,
              Z = 0,
              I = t,
              Y = null;
            e: for (;;) {
              for (
                var X;
                I !== s || (f !== 0 && I.nodeType !== 3) || (C = y + f),
                  I !== g || (o !== 0 && I.nodeType !== 3) || (z = y + o),
                  I.nodeType === 3 && (y += I.nodeValue.length),
                  (X = I.firstChild) !== null;

              )
                (Y = I), (I = X);
              for (;;) {
                if (I === t) break e;
                if (
                  (Y === s && ++F === f && (C = y),
                  Y === g && ++Z === o && (z = y),
                  (X = I.nextSibling) !== null)
                )
                  break;
                (I = Y), (Y = I.parentNode);
              }
              I = X;
            }
            s = C === -1 || z === -1 ? null : { start: C, end: z };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      tf = { focusedElem: t, selectionRange: s }, or = !1, ye = n;
      ye !== null;

    )
      if (
        ((n = ye), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (ye = t);
      else
        for (; ye !== null; ) {
          switch (((n = ye), (g = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (s = 0; s < t.length; s++)
                  (f = t[s]), (f.ref.impl = f.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && g !== null) {
                (t = void 0),
                  (s = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (o = s.stateNode);
                try {
                  var rt = ca(s.type, f);
                  (t = o.getSnapshotBeforeUpdate(rt, g)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (mt) {
                  Vt(s, s.return, mt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  af(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      af(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (ye = t);
            break;
          }
          ye = n.return;
        }
  }
  function sp(t, n, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ti(t, s), o & 4 && nl(5, s);
        break;
      case 1:
        if ((ti(t, s), o & 4))
          if (((t = s.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Vt(s, s.return, y);
            }
          else {
            var f = ca(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(f, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Vt(s, s.return, y);
            }
          }
        o & 64 && Jg(s), o & 512 && il(s, s.return);
        break;
      case 3:
        if ((ti(t, s), o & 64 && ((t = s.updateQueue), t !== null))) {
          if (((n = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          try {
            Vd(t, n);
          } catch (y) {
            Vt(s, s.return, y);
          }
        }
        break;
      case 27:
        n === null && o & 4 && ip(s);
      case 26:
      case 5:
        ti(t, s), n === null && o & 4 && ep(s), o & 512 && il(s, s.return);
        break;
      case 12:
        ti(t, s);
        break;
      case 31:
        ti(t, s), o & 4 && rp(t, s);
        break;
      case 13:
        ti(t, s),
          o & 4 && cp(t, s),
          o & 64 &&
            ((t = s.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((s = b1.bind(null, s)), j1(t, s))));
        break;
      case 22:
        if (((o = s.memoizedState !== null || $n), !o)) {
          (n = (n !== null && n.memoizedState !== null) || pe), (f = $n);
          var g = pe;
          ($n = o),
            (pe = n) && !g ? ei(t, s, (s.subtreeFlags & 8772) !== 0) : ti(t, s),
            ($n = f),
            (pe = g);
        }
        break;
      case 30:
        break;
      default:
        ti(t, s);
    }
  }
  function lp(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), lp(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && rc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var te = null,
    je = !1;
  function Jn(t, n, s) {
    for (s = s.child; s !== null; ) op(t, n, s), (s = s.sibling);
  }
  function op(t, n, s) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(xn, s);
      } catch {}
    switch (s.tag) {
      case 26:
        pe || Dn(s, n),
          Jn(t, n, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        pe || Dn(s, n);
        var o = te,
          f = je;
        zi(s.type) && ((te = s.stateNode), (je = !1)),
          Jn(t, n, s),
          hl(s.stateNode),
          (te = o),
          (je = f);
        break;
      case 5:
        pe || Dn(s, n);
      case 6:
        if (
          ((o = te),
          (f = je),
          (te = null),
          Jn(t, n, s),
          (te = o),
          (je = f),
          te !== null)
        )
          if (je)
            try {
              (te.nodeType === 9
                ? te.body
                : te.nodeName === "HTML"
                ? te.ownerDocument.body
                : te
              ).removeChild(s.stateNode);
            } catch (g) {
              Vt(s, n, g);
            }
          else
            try {
              te.removeChild(s.stateNode);
            } catch (g) {
              Vt(s, n, g);
            }
        break;
      case 18:
        te !== null &&
          (je
            ? ((t = te),
              Jp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                s.stateNode
              ),
              us(t))
            : Jp(te, s.stateNode));
        break;
      case 4:
        (o = te),
          (f = je),
          (te = s.stateNode.containerInfo),
          (je = !0),
          Jn(t, n, s),
          (te = o),
          (je = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Si(2, s, n), pe || Si(4, s, n), Jn(t, n, s);
        break;
      case 1:
        pe ||
          (Dn(s, n),
          (o = s.stateNode),
          typeof o.componentWillUnmount == "function" && tp(s, n, o)),
          Jn(t, n, s);
        break;
      case 21:
        Jn(t, n, s);
        break;
      case 22:
        (pe = (o = pe) || s.memoizedState !== null), Jn(t, n, s), (pe = o);
        break;
      default:
        Jn(t, n, s);
    }
  }
  function rp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        us(t);
      } catch (s) {
        Vt(n, n.return, s);
      }
    }
  }
  function cp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        us(t);
      } catch (s) {
        Vt(n, n.return, s);
      }
  }
  function c1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new ap()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new ap()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function qo(t, n) {
    var s = c1(t);
    n.forEach(function (o) {
      if (!s.has(o)) {
        s.add(o);
        var f = y1.bind(null, t, o);
        o.then(f, f);
      }
    });
  }
  function Ne(t, n) {
    var s = n.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var f = s[o],
          g = t,
          y = n,
          C = y;
        t: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (zi(C.type)) {
                (te = C.stateNode), (je = !1);
                break t;
              }
              break;
            case 5:
              (te = C.stateNode), (je = !1);
              break t;
            case 3:
            case 4:
              (te = C.stateNode.containerInfo), (je = !0);
              break t;
          }
          C = C.return;
        }
        if (te === null) throw Error(l(160));
        op(g, y, f),
          (te = null),
          (je = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null);
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) up(n, t), (n = n.sibling);
  }
  var Cn = null;
  function up(t, n) {
    var s = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ne(n, t),
          Ue(t),
          o & 4 && (Si(3, t, t.return), nl(3, t), Si(5, t, t.return));
        break;
      case 1:
        Ne(n, t),
          Ue(t),
          o & 512 && (pe || s === null || Dn(s, s.return)),
          o & 64 &&
            $n &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? o : s.concat(o)))));
        break;
      case 26:
        var f = Cn;
        if (
          (Ne(n, t),
          Ue(t),
          o & 512 && (pe || s === null || Dn(s, s.return)),
          o & 4)
        ) {
          var g = s !== null ? s.memoizedState : null;
          if (((o = t.memoizedState), s === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  (o = t.type),
                    (s = t.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (o) {
                    case "title":
                      (g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[zs] ||
                          g[_e] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(o)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title")
                          )),
                        Ee(g, o, s),
                        (g[_e] = t),
                        be(g),
                        (o = g);
                      break t;
                    case "link":
                      var y = um("link", "href", f).get(o + (s.href || ""));
                      if (y) {
                        for (var C = 0; C < y.length; C++)
                          if (
                            ((g = y[C]),
                            g.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              g.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              g.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              g.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            y.splice(C, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(o)),
                        Ee(g, o, s),
                        f.head.appendChild(g);
                      break;
                    case "meta":
                      if (
                        (y = um("meta", "content", f).get(
                          o + (s.content || "")
                        ))
                      ) {
                        for (C = 0; C < y.length; C++)
                          if (
                            ((g = y[C]),
                            g.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              g.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              g.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              g.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            y.splice(C, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(o)),
                        Ee(g, o, s),
                        f.head.appendChild(g);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (g[_e] = t), be(g), (o = g);
                }
                t.stateNode = o;
              } else fm(f, t.type, t.stateNode);
            else t.stateNode = cm(f, o, t.memoizedProps);
          else
            g !== o
              ? (g === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : g.count--,
                o === null
                  ? fm(f, t.type, t.stateNode)
                  : cm(f, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                Ou(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        Ne(n, t),
          Ue(t),
          o & 512 && (pe || s === null || Dn(s, s.return)),
          s !== null && o & 4 && Ou(t, t.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (
          (Ne(n, t),
          Ue(t),
          o & 512 && (pe || s === null || Dn(s, s.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Ra(f, "");
          } catch (rt) {
            Vt(t, t.return, rt);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), Ou(t, f, s !== null ? s.memoizedProps : f)),
          o & 1024 && (ku = !0);
        break;
      case 6:
        if ((Ne(n, t), Ue(t), o & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          (o = t.memoizedProps), (s = t.stateNode);
          try {
            s.nodeValue = o;
          } catch (rt) {
            Vt(t, t.return, rt);
          }
        }
        break;
      case 3:
        if (
          ((ir = null),
          (f = Cn),
          (Cn = er(n.containerInfo)),
          Ne(n, t),
          (Cn = f),
          Ue(t),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            us(n.containerInfo);
          } catch (rt) {
            Vt(t, t.return, rt);
          }
        ku && ((ku = !1), fp(t));
        break;
      case 4:
        (o = Cn),
          (Cn = er(t.stateNode.containerInfo)),
          Ne(n, t),
          Ue(t),
          (Cn = o);
        break;
      case 12:
        Ne(n, t), Ue(t);
        break;
      case 31:
        Ne(n, t),
          Ue(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 13:
        Ne(n, t),
          Ue(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Vo = Ft()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var z = s !== null && s.memoizedState !== null,
          F = $n,
          Z = pe;
        if (
          (($n = F || f),
          (pe = Z || z),
          Ne(n, t),
          (pe = Z),
          ($n = F),
          Ue(t),
          o & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = f ? n._visibility & -2 : n._visibility | 1,
              f && (s === null || z || $n || pe || ua(t)),
              s = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (s === null) {
                z = s = n;
                try {
                  if (((g = z.stateNode), f))
                    (y = g.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    C = z.stateNode;
                    var I = z.memoizedProps.style,
                      Y =
                        I != null && I.hasOwnProperty("display")
                          ? I.display
                          : null;
                    C.style.display =
                      Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (rt) {
                  Vt(z, z.return, rt);
                }
              }
            } else if (n.tag === 6) {
              if (s === null) {
                z = n;
                try {
                  z.stateNode.nodeValue = f ? "" : z.memoizedProps;
                } catch (rt) {
                  Vt(z, z.return, rt);
                }
              }
            } else if (n.tag === 18) {
              if (s === null) {
                z = n;
                try {
                  var X = z.stateNode;
                  f ? tm(X, !0) : tm(z.stateNode, !1);
                } catch (rt) {
                  Vt(z, z.return, rt);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              s === n && (s = null), (n = n.return);
            }
            s === n && (s = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((s = o.retryQueue),
            s !== null && ((o.retryQueue = null), qo(t, s))));
        break;
      case 19:
        Ne(n, t),
          Ue(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ne(n, t), Ue(t);
    }
  }
  function Ue(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var s, o = t.return; o !== null; ) {
          if (np(o)) {
            s = o;
            break;
          }
          o = o.return;
        }
        if (s == null) throw Error(l(160));
        switch (s.tag) {
          case 27:
            var f = s.stateNode,
              g = zu(t);
            Fo(t, g, f);
            break;
          case 5:
            var y = s.stateNode;
            s.flags & 32 && (Ra(y, ""), (s.flags &= -33));
            var C = zu(t);
            Fo(t, C, y);
            break;
          case 3:
          case 4:
            var z = s.stateNode.containerInfo,
              F = zu(t);
            Du(t, F, z);
            break;
          default:
            throw Error(l(161));
        }
      } catch (Z) {
        Vt(t, t.return, Z);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function fp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        fp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ti(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) sp(t, n.alternate, n), (n = n.sibling);
  }
  function ua(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Si(4, n, n.return), ua(n);
          break;
        case 1:
          Dn(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && tp(n, n.return, s),
            ua(n);
          break;
        case 27:
          hl(n.stateNode);
        case 26:
        case 5:
          Dn(n, n.return), ua(n);
          break;
        case 22:
          n.memoizedState === null && ua(n);
          break;
        case 30:
          ua(n);
          break;
        default:
          ua(n);
      }
      t = t.sibling;
    }
  }
  function ei(t, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        f = t,
        g = n,
        y = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ei(f, g, s), nl(4, g);
          break;
        case 1:
          if (
            (ei(f, g, s),
            (o = g),
            (f = o.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (F) {
              Vt(o, o.return, F);
            }
          if (((o = g), (f = o.updateQueue), f !== null)) {
            var C = o.stateNode;
            try {
              var z = f.shared.hiddenCallbacks;
              if (z !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < z.length; f++)
                  Yd(z[f], C);
            } catch (F) {
              Vt(o, o.return, F);
            }
          }
          s && y & 64 && Jg(g), il(g, g.return);
          break;
        case 27:
          ip(g);
        case 26:
        case 5:
          ei(f, g, s), s && o === null && y & 4 && ep(g), il(g, g.return);
          break;
        case 12:
          ei(f, g, s);
          break;
        case 31:
          ei(f, g, s), s && y & 4 && rp(f, g);
          break;
        case 13:
          ei(f, g, s), s && y & 4 && cp(f, g);
          break;
        case 22:
          g.memoizedState === null && ei(f, g, s), il(g, g.return);
          break;
        case 30:
          break;
        default:
          ei(f, g, s);
      }
      n = n.sibling;
    }
  }
  function Ru(t, n) {
    var s = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && Vs(s));
  }
  function Bu(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Vs(t));
  }
  function En(t, n, s, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) hp(t, n, s, o), (n = n.sibling);
  }
  function hp(t, n, s, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        En(t, n, s, o), f & 2048 && nl(9, n);
        break;
      case 1:
        En(t, n, s, o);
        break;
      case 3:
        En(t, n, s, o),
          f & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Vs(t)));
        break;
      case 12:
        if (f & 2048) {
          En(t, n, s, o), (t = n.stateNode);
          try {
            var g = n.memoizedProps,
              y = g.id,
              C = g.onPostCommit;
            typeof C == "function" &&
              C(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (z) {
            Vt(n, n.return, z);
          }
        } else En(t, n, s, o);
        break;
      case 31:
        En(t, n, s, o);
        break;
      case 13:
        En(t, n, s, o);
        break;
      case 23:
        break;
      case 22:
        (g = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? g._visibility & 2
              ? En(t, n, s, o)
              : al(t, n)
            : g._visibility & 2
            ? En(t, n, s, o)
            : ((g._visibility |= 2),
              Ja(t, n, s, o, (n.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && Ru(y, n);
        break;
      case 24:
        En(t, n, s, o), f & 2048 && Bu(n.alternate, n);
        break;
      default:
        En(t, n, s, o);
    }
  }
  function Ja(t, n, s, o, f) {
    for (
      f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var g = t,
        y = n,
        C = s,
        z = o,
        F = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ja(g, y, C, z, f), nl(8, y);
          break;
        case 23:
          break;
        case 22:
          var Z = y.stateNode;
          y.memoizedState !== null
            ? Z._visibility & 2
              ? Ja(g, y, C, z, f)
              : al(g, y)
            : ((Z._visibility |= 2), Ja(g, y, C, z, f)),
            f && F & 2048 && Ru(y.alternate, y);
          break;
        case 24:
          Ja(g, y, C, z, f), f && F & 2048 && Bu(y.alternate, y);
          break;
        default:
          Ja(g, y, C, z, f);
      }
      n = n.sibling;
    }
  }
  function al(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var s = t,
          o = n,
          f = o.flags;
        switch (o.tag) {
          case 22:
            al(s, o), f & 2048 && Ru(o.alternate, o);
            break;
          case 24:
            al(s, o), f & 2048 && Bu(o.alternate, o);
            break;
          default:
            al(s, o);
        }
        n = n.sibling;
      }
  }
  var sl = 8192;
  function ts(t, n, s) {
    if (t.subtreeFlags & sl)
      for (t = t.child; t !== null; ) dp(t, n, s), (t = t.sibling);
  }
  function dp(t, n, s) {
    switch (t.tag) {
      case 26:
        ts(t, n, s),
          t.flags & sl &&
            t.memoizedState !== null &&
            P1(s, Cn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ts(t, n, s);
        break;
      case 3:
      case 4:
        var o = Cn;
        (Cn = er(t.stateNode.containerInfo)), ts(t, n, s), (Cn = o);
        break;
      case 22:
        t.memoizedState === null &&
          ((o = t.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = sl), (sl = 16777216), ts(t, n, s), (sl = o))
            : ts(t, n, s));
        break;
      default:
        ts(t, n, s);
    }
  }
  function gp(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function ll(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          (ye = o), mp(o, t);
        }
      gp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) pp(t), (t = t.sibling);
  }
  function pp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ll(t), t.flags & 2048 && Si(9, t, t.return);
        break;
      case 3:
        ll(t);
        break;
      case 12:
        ll(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Yo(t))
          : ll(t);
        break;
      default:
        ll(t);
    }
  }
  function Yo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          (ye = o), mp(o, t);
        }
      gp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          Si(8, n, n.return), Yo(n);
          break;
        case 22:
          (s = n.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Yo(n));
          break;
        default:
          Yo(n);
      }
      t = t.sibling;
    }
  }
  function mp(t, n) {
    for (; ye !== null; ) {
      var s = ye;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Vs(s.memoizedState.cache);
      }
      if (((o = s.child), o !== null)) (o.return = s), (ye = o);
      else
        t: for (s = t; ye !== null; ) {
          o = ye;
          var f = o.sibling,
            g = o.return;
          if ((lp(o), o === s)) {
            ye = null;
            break t;
          }
          if (f !== null) {
            (f.return = g), (ye = f);
            break t;
          }
          ye = g;
        }
    }
  }
  var u1 = {
      getCacheForType: function (t) {
        var n = Se(he),
          s = n.data.get(t);
        return s === void 0 && ((s = t()), n.data.set(t, s)), s;
      },
      cacheSignal: function () {
        return Se(he).controller.signal;
      },
    },
    f1 = typeof WeakMap == "function" ? WeakMap : Map,
    Bt = 0,
    Kt = null,
    Ct = null,
    Mt = 0,
    Yt = 0,
    We = null,
    Ci = !1,
    es = !1,
    Lu = !1,
    ni = 0,
    ae = 0,
    Ei = 0,
    fa = 0,
    Hu = 0,
    $e = 0,
    ns = 0,
    ol = null,
    Fe = null,
    ju = !1,
    Vo = 0,
    bp = 0,
    Go = 1 / 0,
    Xo = null,
    Mi = null,
    me = 0,
    Ti = null,
    is = null,
    ii = 0,
    Nu = 0,
    Uu = null,
    yp = null,
    rl = 0,
    Fu = null;
  function Je() {
    return (Bt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : j.T !== null ? Qu() : Bh();
  }
  function vp() {
    if ($e === 0)
      if ((Mt & 536870912) === 0 || zt) {
        var t = $l;
        ($l <<= 1), ($l & 3932160) === 0 && ($l = 262144), ($e = t);
      } else $e = 536870912;
    return (t = Pe.current), t !== null && (t.flags |= 32), $e;
  }
  function qe(t, n, s) {
    ((t === Kt && (Yt === 2 || Yt === 9)) || t.cancelPendingCommit !== null) &&
      (as(t, 0), Ai(t, Mt, $e, !1)),
      Os(t, s),
      ((Bt & 2) === 0 || t !== Kt) &&
        (t === Kt &&
          ((Bt & 2) === 0 && (fa |= s), ae === 4 && Ai(t, Mt, $e, !1)),
        kn(t));
  }
  function wp(t, n, s) {
    if ((Bt & 6) !== 0) throw Error(l(327));
    var o = (!s && (n & 127) === 0 && (n & t.expiredLanes) === 0) || As(t, n),
      f = o ? g1(t, n) : Yu(t, n, !0),
      g = o;
    do {
      if (f === 0) {
        es && !o && Ai(t, n, 0, !1);
        break;
      } else {
        if (((s = t.current.alternate), g && !h1(s))) {
          (f = Yu(t, n, !1)), (g = !1);
          continue;
        }
        if (f === 2) {
          if (((g = n), t.errorRecoveryDisabledLanes & g)) var y = 0;
          else
            (y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            n = y;
            t: {
              var C = t;
              f = ol;
              var z = C.current.memoizedState.isDehydrated;
              if ((z && (as(C, y).flags |= 256), (y = Yu(C, y, !1)), y !== 2)) {
                if (Lu && !z) {
                  (C.errorRecoveryDisabledLanes |= g), (fa |= g), (f = 4);
                  break t;
                }
                (g = Fe),
                  (Fe = f),
                  g !== null && (Fe === null ? (Fe = g) : Fe.push.apply(Fe, g));
              }
              f = y;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          as(t, 0), Ai(t, n, 0, !0);
          break;
        }
        t: {
          switch (((o = t), (g = f), g)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ai(o, n, $e, !Ci);
              break t;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((f = Vo + 300 - Ft()), 10 < f)) {
            if ((Ai(o, n, $e, !Ci), to(o, 0, !0) !== 0)) break t;
            (ii = n),
              (o.timeoutHandle = Wp(
                _p.bind(
                  null,
                  o,
                  s,
                  Fe,
                  Xo,
                  ju,
                  n,
                  $e,
                  fa,
                  ns,
                  Ci,
                  g,
                  "Throttled",
                  -0,
                  0
                ),
                f
              ));
            break t;
          }
          _p(o, s, Fe, Xo, ju, n, $e, fa, ns, Ci, g, null, -0, 0);
        }
      }
      break;
    } while (!0);
    kn(t);
  }
  function _p(t, n, s, o, f, g, y, C, z, F, Z, I, Y, X) {
    if (
      ((t.timeoutHandle = -1),
      (I = n.subtreeFlags),
      I & 8192 || (I & 16785408) === 16785408)
    ) {
      (I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Yn,
      }),
        dp(n, g, I);
      var rt =
        (g & 62914560) === g ? Vo - Ft() : (g & 4194048) === g ? bp - Ft() : 0;
      if (((rt = I1(I, rt)), rt !== null)) {
        (ii = g),
          (t.cancelPendingCommit = rt(
            Op.bind(null, t, n, g, s, o, f, y, C, z, Z, I, null, Y, X)
          )),
          Ai(t, g, y, !F);
        return;
      }
    }
    Op(t, n, g, s, o, f, y, C, z);
  }
  function h1(t) {
    for (var n = t; ; ) {
      var s = n.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        n.flags & 16384 &&
        ((s = n.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var o = 0; o < s.length; o++) {
          var f = s[o],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!Ze(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        (s.return = n), (n = s);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Ai(t, n, s, o) {
    (n &= ~Hu),
      (n &= ~fa),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes);
    for (var f = n; 0 < f; ) {
      var g = 31 - Qe(f),
        y = 1 << g;
      (o[g] = -1), (f &= ~y);
    }
    s !== 0 && Dh(t, s, n);
  }
  function Qo() {
    return (Bt & 6) === 0 ? (cl(0), !1) : !0;
  }
  function qu() {
    if (Ct !== null) {
      if (Yt === 0) var t = Ct.return;
      else (t = Ct), (Qn = na = null), iu(t), (Ka = null), (Xs = 0), (t = Ct);
      for (; t !== null; ) $g(t.alternate, t), (t = t.return);
      Ct = null;
    }
  }
  function as(t, n) {
    var s = t.timeoutHandle;
    s !== -1 && ((t.timeoutHandle = -1), k1(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      (ii = 0),
      qu(),
      (Kt = t),
      (Ct = s = Gn(t.current, null)),
      (Mt = n),
      (Yt = 0),
      (We = null),
      (Ci = !1),
      (es = As(t, n)),
      (Lu = !1),
      (ns = $e = Hu = fa = Ei = ae = 0),
      (Fe = ol = null),
      (ju = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var f = 31 - Qe(o),
          g = 1 << f;
        (n |= t[f]), (o &= ~g);
      }
    return (ni = n), ho(), s;
  }
  function xp(t, n) {
    (_t = null),
      (j.H = Js),
      n === Za || n === _o
        ? ((n = Nd()), (Yt = 3))
        : n === Xc
        ? ((n = Nd()), (Yt = 4))
        : (Yt =
            n === vu
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (We = n),
      Ct === null && ((ae = 1), Lo(t, fn(n, t.current)));
  }
  function Sp() {
    var t = Pe.current;
    return t === null
      ? !0
      : (Mt & 4194048) === Mt
      ? pn === null
      : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0
      ? t === pn
      : !1;
  }
  function Cp() {
    var t = j.H;
    return (j.H = Js), t === null ? Js : t;
  }
  function Ep() {
    var t = j.A;
    return (j.A = u1), t;
  }
  function Zo() {
    (ae = 4),
      Ci || ((Mt & 4194048) !== Mt && Pe.current !== null) || (es = !0),
      ((Ei & 134217727) === 0 && (fa & 134217727) === 0) ||
        Kt === null ||
        Ai(Kt, Mt, $e, !1);
  }
  function Yu(t, n, s) {
    var o = Bt;
    Bt |= 2;
    var f = Cp(),
      g = Ep();
    (Kt !== t || Mt !== n) && ((Xo = null), as(t, n)), (n = !1);
    var y = ae;
    t: do
      try {
        if (Yt !== 0 && Ct !== null) {
          var C = Ct,
            z = We;
          switch (Yt) {
            case 8:
              qu(), (y = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (n = !0);
              var F = Yt;
              if (((Yt = 0), (We = null), ss(t, C, z, F), s && es)) {
                y = 0;
                break t;
              }
              break;
            default:
              (F = Yt), (Yt = 0), (We = null), ss(t, C, z, F);
          }
        }
        d1(), (y = ae);
        break;
      } catch (Z) {
        xp(t, Z);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Qn = na = null),
      (Bt = o),
      (j.H = f),
      (j.A = g),
      Ct === null && ((Kt = null), (Mt = 0), ho()),
      y
    );
  }
  function d1() {
    for (; Ct !== null; ) Mp(Ct);
  }
  function g1(t, n) {
    var s = Bt;
    Bt |= 2;
    var o = Cp(),
      f = Ep();
    Kt !== t || Mt !== n
      ? ((Xo = null), (Go = Ft() + 500), as(t, n))
      : (es = As(t, n));
    t: do
      try {
        if (Yt !== 0 && Ct !== null) {
          n = Ct;
          var g = We;
          e: switch (Yt) {
            case 1:
              (Yt = 0), (We = null), ss(t, n, g, 1);
              break;
            case 2:
            case 9:
              if (Hd(g)) {
                (Yt = 0), (We = null), Tp(n);
                break;
              }
              (n = function () {
                (Yt !== 2 && Yt !== 9) || Kt !== t || (Yt = 7), kn(t);
              }),
                g.then(n, n);
              break t;
            case 3:
              Yt = 7;
              break t;
            case 4:
              Yt = 5;
              break t;
            case 7:
              Hd(g)
                ? ((Yt = 0), (We = null), Tp(n))
                : ((Yt = 0), (We = null), ss(t, n, g, 7));
              break;
            case 5:
              var y = null;
              switch (Ct.tag) {
                case 26:
                  y = Ct.memoizedState;
                case 5:
                case 27:
                  var C = Ct;
                  if (y ? hm(y) : C.stateNode.complete) {
                    (Yt = 0), (We = null);
                    var z = C.sibling;
                    if (z !== null) Ct = z;
                    else {
                      var F = C.return;
                      F !== null ? ((Ct = F), Ko(F)) : (Ct = null);
                    }
                    break e;
                  }
              }
              (Yt = 0), (We = null), ss(t, n, g, 5);
              break;
            case 6:
              (Yt = 0), (We = null), ss(t, n, g, 6);
              break;
            case 8:
              qu(), (ae = 6);
              break t;
            default:
              throw Error(l(462));
          }
        }
        p1();
        break;
      } catch (Z) {
        xp(t, Z);
      }
    while (!0);
    return (
      (Qn = na = null),
      (j.H = o),
      (j.A = f),
      (Bt = s),
      Ct !== null ? 0 : ((Kt = null), (Mt = 0), ho(), ae)
    );
  }
  function p1() {
    for (; Ct !== null && !sn(); ) Mp(Ct);
  }
  function Mp(t) {
    var n = Ig(t.alternate, t, ni);
    (t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (Ct = n);
  }
  function Tp(t) {
    var n = t,
      s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Gg(s, n, n.pendingProps, n.type, void 0, Mt);
        break;
      case 11:
        n = Gg(s, n, n.pendingProps, n.type.render, n.ref, Mt);
        break;
      case 5:
        iu(n);
      default:
        $g(s, n), (n = Ct = Ed(n, ni)), (n = Ig(s, n, ni));
    }
    (t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (Ct = n);
  }
  function ss(t, n, s, o) {
    (Qn = na = null), iu(n), (Ka = null), (Xs = 0);
    var f = n.return;
    try {
      if (i1(t, f, n, s, Mt)) {
        (ae = 1), Lo(t, fn(s, t.current)), (Ct = null);
        return;
      }
    } catch (g) {
      if (f !== null) throw ((Ct = f), g);
      (ae = 1), Lo(t, fn(s, t.current)), (Ct = null);
      return;
    }
    n.flags & 32768
      ? (zt || o === 1
          ? (t = !0)
          : es || (Mt & 536870912) !== 0
          ? (t = !1)
          : ((Ci = t = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = Pe.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        Ap(n, t))
      : Ko(n);
  }
  function Ko(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Ap(n, Ci);
        return;
      }
      t = n.return;
      var s = l1(n.alternate, n, ni);
      if (s !== null) {
        Ct = s;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ct = n;
        return;
      }
      Ct = n = t;
    } while (n !== null);
    ae === 0 && (ae = 5);
  }
  function Ap(t, n) {
    do {
      var s = o1(t.alternate, t);
      if (s !== null) {
        (s.flags &= 32767), (Ct = s);
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        Ct = t;
        return;
      }
      Ct = t = s;
    } while (t !== null);
    (ae = 6), (Ct = null);
  }
  function Op(t, n, s, o, f, g, y, C, z) {
    t.cancelPendingCommit = null;
    do Po();
    while (me !== 0);
    if ((Bt & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === t.current) throw Error(l(177));
      if (
        ((g = n.lanes | n.childLanes),
        (g |= zc),
        K2(t, s, g, y, C, z),
        t === Kt && ((Ct = Kt = null), (Mt = 0)),
        (is = n),
        (Ti = t),
        (ii = s),
        (Nu = g),
        (Uu = f),
        (yp = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            v1(Be, function () {
              return Bp(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = j.T), (j.T = null), (f = G.p), (G.p = 2), (y = Bt), (Bt |= 4);
        try {
          r1(t, n, s);
        } finally {
          (Bt = y), (G.p = f), (j.T = o);
        }
      }
      (me = 1), zp(), Dp(), kp();
    }
  }
  function zp() {
    if (me === 1) {
      me = 0;
      var t = Ti,
        n = is,
        s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        (s = j.T), (j.T = null);
        var o = G.p;
        G.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          up(n, t);
          var g = tf,
            y = md(t.containerInfo),
            C = g.focusedElem,
            z = g.selectionRange;
          if (
            y !== C &&
            C &&
            C.ownerDocument &&
            pd(C.ownerDocument.documentElement, C)
          ) {
            if (z !== null && Ec(C)) {
              var F = z.start,
                Z = z.end;
              if ((Z === void 0 && (Z = F), "selectionStart" in C))
                (C.selectionStart = F),
                  (C.selectionEnd = Math.min(Z, C.value.length));
              else {
                var I = C.ownerDocument || document,
                  Y = (I && I.defaultView) || window;
                if (Y.getSelection) {
                  var X = Y.getSelection(),
                    rt = C.textContent.length,
                    mt = Math.min(z.start, rt),
                    Zt = z.end === void 0 ? mt : Math.min(z.end, rt);
                  !X.extend && mt > Zt && ((y = Zt), (Zt = mt), (mt = y));
                  var L = gd(C, mt),
                    D = gd(C, Zt);
                  if (
                    L &&
                    D &&
                    (X.rangeCount !== 1 ||
                      X.anchorNode !== L.node ||
                      X.anchorOffset !== L.offset ||
                      X.focusNode !== D.node ||
                      X.focusOffset !== D.offset)
                  ) {
                    var U = I.createRange();
                    U.setStart(L.node, L.offset),
                      X.removeAllRanges(),
                      mt > Zt
                        ? (X.addRange(U), X.extend(D.node, D.offset))
                        : (U.setEnd(D.node, D.offset), X.addRange(U));
                  }
                }
              }
            }
            for (I = [], X = C; (X = X.parentNode); )
              X.nodeType === 1 &&
                I.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
            for (
              typeof C.focus == "function" && C.focus(), C = 0;
              C < I.length;
              C++
            ) {
              var P = I[C];
              (P.element.scrollLeft = P.left), (P.element.scrollTop = P.top);
            }
          }
          (or = !!Ju), (tf = Ju = null);
        } finally {
          (Bt = f), (G.p = o), (j.T = s);
        }
      }
      (t.current = n), (me = 2);
    }
  }
  function Dp() {
    if (me === 2) {
      me = 0;
      var t = Ti,
        n = is,
        s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        (s = j.T), (j.T = null);
        var o = G.p;
        G.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          sp(t, n.alternate, n);
        } finally {
          (Bt = f), (G.p = o), (j.T = s);
        }
      }
      me = 3;
    }
  }
  function kp() {
    if (me === 4 || me === 3) {
      (me = 0), Zi();
      var t = Ti,
        n = is,
        s = ii,
        o = yp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (me = 5)
        : ((me = 0), (is = Ti = null), Rp(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Mi = null),
        lc(s),
        (n = n.stateNode),
        Te && typeof Te.onCommitFiberRoot == "function")
      )
        try {
          Te.onCommitFiberRoot(xn, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (n = j.T), (f = G.p), (G.p = 2), (j.T = null);
        try {
          for (var g = t.onRecoverableError, y = 0; y < o.length; y++) {
            var C = o[y];
            g(C.value, { componentStack: C.stack });
          }
        } finally {
          (j.T = n), (G.p = f);
        }
      }
      (ii & 3) !== 0 && Po(),
        kn(t),
        (f = t.pendingLanes),
        (s & 261930) !== 0 && (f & 42) !== 0
          ? t === Fu
            ? rl++
            : ((rl = 0), (Fu = t))
          : (rl = 0),
        cl(0);
    }
  }
  function Rp(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Vs(n)));
  }
  function Po() {
    return zp(), Dp(), kp(), Bp();
  }
  function Bp() {
    if (me !== 5) return !1;
    var t = Ti,
      n = Nu;
    Nu = 0;
    var s = lc(ii),
      o = j.T,
      f = G.p;
    try {
      (G.p = 32 > s ? 32 : s), (j.T = null), (s = Uu), (Uu = null);
      var g = Ti,
        y = ii;
      if (((me = 0), (is = Ti = null), (ii = 0), (Bt & 6) !== 0))
        throw Error(l(331));
      var C = Bt;
      if (
        ((Bt |= 4),
        pp(g.current),
        hp(g, g.current, y, s),
        (Bt = C),
        cl(0, !1),
        Te && typeof Te.onPostCommitFiberRoot == "function")
      )
        try {
          Te.onPostCommitFiberRoot(xn, g);
        } catch {}
      return !0;
    } finally {
      (G.p = f), (j.T = o), Rp(t, n);
    }
  }
  function Lp(t, n, s) {
    (n = fn(s, n)),
      (n = yu(t.stateNode, n, 2)),
      (t = wi(t, n, 2)),
      t !== null && (Os(t, 2), kn(t));
  }
  function Vt(t, n, s) {
    if (t.tag === 3) Lp(t, t, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Lp(n, t, s);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Mi === null || !Mi.has(o)))
          ) {
            (t = fn(s, t)),
              (s = Hg(2)),
              (o = wi(n, s, 2)),
              o !== null && (jg(s, o, n, t), Os(o, 2), kn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Vu(t, n, s) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new f1();
      var f = new Set();
      o.set(n, f);
    } else (f = o.get(n)), f === void 0 && ((f = new Set()), o.set(n, f));
    f.has(s) ||
      ((Lu = !0), f.add(s), (t = m1.bind(null, t, n, s)), n.then(t, t));
  }
  function m1(t, n, s) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      Kt === t &&
        (Mt & s) === s &&
        (ae === 4 || (ae === 3 && (Mt & 62914560) === Mt && 300 > Ft() - Vo)
          ? (Bt & 2) === 0 && as(t, 0)
          : (Hu |= s),
        ns === Mt && (ns = 0)),
      kn(t);
  }
  function Hp(t, n) {
    n === 0 && (n = zh()), (t = Ji(t, n)), t !== null && (Os(t, n), kn(t));
  }
  function b1(t) {
    var n = t.memoizedState,
      s = 0;
    n !== null && (s = n.retryLane), Hp(t, s);
  }
  function y1(t, n) {
    var s = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var o = t.stateNode,
          f = t.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(n), Hp(t, s);
  }
  function v1(t, n) {
    return ne(t, n);
  }
  var Io = null,
    ls = null,
    Gu = !1,
    Wo = !1,
    Xu = !1,
    Oi = 0;
  function kn(t) {
    t !== ls &&
      t.next === null &&
      (ls === null ? (Io = ls = t) : (ls = ls.next = t)),
      (Wo = !0),
      Gu || ((Gu = !0), _1());
  }
  function cl(t, n) {
    if (!Xu && Wo) {
      Xu = !0;
      do
        for (var s = !1, o = Io; o !== null; ) {
          if (t !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var y = o.suspendedLanes,
                C = o.pingedLanes;
              (g = (1 << (31 - Qe(42 | t) + 1)) - 1),
                (g &= f & ~(y & ~C)),
                (g = g & 201326741 ? (g & 201326741) | 1 : g ? g | 2 : 0);
            }
            g !== 0 && ((s = !0), Fp(o, g));
          } else
            (g = Mt),
              (g = to(
                o,
                o === Kt ? g : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (g & 3) === 0 || As(o, g) || ((s = !0), Fp(o, g));
          o = o.next;
        }
      while (s);
      Xu = !1;
    }
  }
  function w1() {
    jp();
  }
  function jp() {
    Wo = Gu = !1;
    var t = 0;
    Oi !== 0 && D1() && (t = Oi);
    for (var n = Ft(), s = null, o = Io; o !== null; ) {
      var f = o.next,
        g = Np(o, n);
      g === 0
        ? ((o.next = null),
          s === null ? (Io = f) : (s.next = f),
          f === null && (ls = s))
        : ((s = o), (t !== 0 || (g & 3) !== 0) && (Wo = !0)),
        (o = f);
    }
    (me !== 0 && me !== 5) || cl(t), Oi !== 0 && (Oi = 0);
  }
  function Np(t, n) {
    for (
      var s = t.suspendedLanes,
        o = t.pingedLanes,
        f = t.expirationTimes,
        g = t.pendingLanes & -62914561;
      0 < g;

    ) {
      var y = 31 - Qe(g),
        C = 1 << y,
        z = f[y];
      z === -1
        ? ((C & s) === 0 || (C & o) !== 0) && (f[y] = Z2(C, n))
        : z <= n && (t.expiredLanes |= C),
        (g &= ~C);
    }
    if (
      ((n = Kt),
      (s = Mt),
      (s = to(
        t,
        t === n ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (o = t.callbackNode),
      s === 0 ||
        (t === n && (Yt === 2 || Yt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && An(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((s & 3) === 0 || As(t, s)) {
      if (((n = s & -s), n === t.callbackPriority)) return n;
      switch ((o !== null && An(o), lc(s))) {
        case 2:
        case 8:
          s = we;
          break;
        case 32:
          s = Be;
          break;
        case 268435456:
          s = Ts;
          break;
        default:
          s = Be;
      }
      return (
        (o = Up.bind(null, t)),
        (s = ne(s, o)),
        (t.callbackPriority = n),
        (t.callbackNode = s),
        n
      );
    }
    return (
      o !== null && o !== null && An(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Up(t, n) {
    if (me !== 0 && me !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var s = t.callbackNode;
    if (Po() && t.callbackNode !== s) return null;
    var o = Mt;
    return (
      (o = to(
        t,
        t === Kt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (wp(t, o, n),
          Np(t, Ft()),
          t.callbackNode != null && t.callbackNode === s
            ? Up.bind(null, t)
            : null)
    );
  }
  function Fp(t, n) {
    if (Po()) return null;
    wp(t, n, !0);
  }
  function _1() {
    R1(function () {
      (Bt & 6) !== 0 ? ne(le, w1) : jp();
    });
  }
  function Qu() {
    if (Oi === 0) {
      var t = Xa;
      t === 0 && ((t = Wl), (Wl <<= 1), (Wl & 261888) === 0 && (Wl = 256)),
        (Oi = t);
    }
    return Oi;
  }
  function qp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ao("" + t);
  }
  function Yp(t, n) {
    var s = n.ownerDocument.createElement("input");
    return (
      (s.name = n.name),
      (s.value = n.value),
      t.id && s.setAttribute("form", t.id),
      n.parentNode.insertBefore(s, n),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function x1(t, n, s, o, f) {
    if (n === "submit" && s && s.stateNode === f) {
      var g = qp((f[Le] || null).action),
        y = o.submitter;
      y &&
        ((n = (n = y[Le] || null)
          ? qp(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((g = n), (y = null)));
      var C = new ro("action", "action", null, o, f);
      t.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Oi !== 0) {
                  var z = y ? Yp(f, y) : new FormData(f);
                  hu(
                    s,
                    { pending: !0, data: z, method: f.method, action: g },
                    null,
                    z
                  );
                }
              } else
                typeof g == "function" &&
                  (C.preventDefault(),
                  (z = y ? Yp(f, y) : new FormData(f)),
                  hu(
                    s,
                    { pending: !0, data: z, method: f.method, action: g },
                    g,
                    z
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Zu = 0; Zu < Oc.length; Zu++) {
    var Ku = Oc[Zu],
      S1 = Ku.toLowerCase(),
      C1 = Ku[0].toUpperCase() + Ku.slice(1);
    Sn(S1, "on" + C1);
  }
  Sn(vd, "onAnimationEnd"),
    Sn(wd, "onAnimationIteration"),
    Sn(_d, "onAnimationStart"),
    Sn("dblclick", "onDoubleClick"),
    Sn("focusin", "onFocus"),
    Sn("focusout", "onBlur"),
    Sn(Fy, "onTransitionRun"),
    Sn(qy, "onTransitionStart"),
    Sn(Yy, "onTransitionCancel"),
    Sn(xd, "onTransitionEnd"),
    Da("onMouseEnter", ["mouseout", "mouseover"]),
    Da("onMouseLeave", ["mouseout", "mouseover"]),
    Da("onPointerEnter", ["pointerout", "pointerover"]),
    Da("onPointerLeave", ["pointerout", "pointerover"]),
    Pi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Pi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Pi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Pi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Pi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ul =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    E1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ul)
    );
  function Vp(t, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var o = t[s],
        f = o.event;
      o = o.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var y = o.length - 1; 0 <= y; y--) {
            var C = o[y],
              z = C.instance,
              F = C.currentTarget;
            if (((C = C.listener), z !== g && f.isPropagationStopped()))
              break t;
            (g = C), (f.currentTarget = F);
            try {
              g(f);
            } catch (Z) {
              fo(Z);
            }
            (f.currentTarget = null), (g = z);
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((C = o[y]),
              (z = C.instance),
              (F = C.currentTarget),
              (C = C.listener),
              z !== g && f.isPropagationStopped())
            )
              break t;
            (g = C), (f.currentTarget = F);
            try {
              g(f);
            } catch (Z) {
              fo(Z);
            }
            (f.currentTarget = null), (g = z);
          }
      }
    }
  }
  function Et(t, n) {
    var s = n[oc];
    s === void 0 && (s = n[oc] = new Set());
    var o = t + "__bubble";
    s.has(o) || (Gp(n, t, 2, !1), s.add(o));
  }
  function Pu(t, n, s) {
    var o = 0;
    n && (o |= 4), Gp(s, t, o, n);
  }
  var $o = "_reactListening" + Math.random().toString(36).slice(2);
  function Iu(t) {
    if (!t[$o]) {
      (t[$o] = !0),
        jh.forEach(function (s) {
          s !== "selectionchange" && (E1.has(s) || Pu(s, !1, t), Pu(s, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[$o] || ((n[$o] = !0), Pu("selectionchange", !1, n));
    }
  }
  function Gp(t, n, s, o) {
    switch (vm(n)) {
      case 2:
        var f = J1;
        break;
      case 8:
        f = tv;
        break;
      default:
        f = hf;
    }
    (s = f.bind(null, n, s, t)),
      (f = void 0),
      !mc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      o
        ? f !== void 0
          ? t.addEventListener(n, s, { capture: !0, passive: f })
          : t.addEventListener(n, s, !0)
        : f !== void 0
        ? t.addEventListener(n, s, { passive: f })
        : t.addEventListener(n, s, !1);
  }
  function Wu(t, n, s, o, f) {
    var g = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var C = o.stateNode.containerInfo;
          if (C === f) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var z = y.tag;
              if ((z === 3 || z === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; C !== null; ) {
            if (((y = Aa(C)), y === null)) return;
            if (((z = y.tag), z === 5 || z === 6 || z === 26 || z === 27)) {
              o = g = y;
              continue t;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    Ph(function () {
      var F = g,
        Z = gc(s),
        I = [];
      t: {
        var Y = Sd.get(t);
        if (Y !== void 0) {
          var X = ro,
            rt = t;
          switch (t) {
            case "keypress":
              if (lo(s) === 0) break t;
            case "keydown":
            case "keyup":
              X = yy;
              break;
            case "focusin":
              (rt = "focus"), (X = wc);
              break;
            case "focusout":
              (rt = "blur"), (X = wc);
              break;
            case "beforeblur":
            case "afterblur":
              X = wc;
              break;
            case "click":
              if (s.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = $h;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = ly;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = _y;
              break;
            case vd:
            case wd:
            case _d:
              X = cy;
              break;
            case xd:
              X = Sy;
              break;
            case "scroll":
            case "scrollend":
              X = ay;
              break;
            case "wheel":
              X = Ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = td;
              break;
            case "toggle":
            case "beforetoggle":
              X = Ty;
          }
          var mt = (n & 4) !== 0,
            Zt = !mt && (t === "scroll" || t === "scrollend"),
            L = mt ? (Y !== null ? Y + "Capture" : null) : Y;
          mt = [];
          for (var D = F, U; D !== null; ) {
            var P = D;
            if (
              ((U = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                U === null ||
                L === null ||
                ((P = ks(D, L)), P != null && mt.push(fl(D, P, U))),
              Zt)
            )
              break;
            D = D.return;
          }
          0 < mt.length &&
            ((Y = new X(Y, rt, null, s, Z)),
            I.push({ event: Y, listeners: mt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((Y = t === "mouseover" || t === "pointerover"),
            (X = t === "mouseout" || t === "pointerout"),
            Y &&
              s !== dc &&
              (rt = s.relatedTarget || s.fromElement) &&
              (Aa(rt) || rt[Ta]))
          )
            break t;
          if (
            (X || Y) &&
            ((Y =
              Z.window === Z
                ? Z
                : (Y = Z.ownerDocument)
                ? Y.defaultView || Y.parentWindow
                : window),
            X
              ? ((rt = s.relatedTarget || s.toElement),
                (X = F),
                (rt = rt ? Aa(rt) : null),
                rt !== null &&
                  ((Zt = c(rt)),
                  (mt = rt.tag),
                  rt !== Zt || (mt !== 5 && mt !== 27 && mt !== 6)) &&
                  (rt = null))
              : ((X = null), (rt = F)),
            X !== rt)
          ) {
            if (
              ((mt = $h),
              (P = "onMouseLeave"),
              (L = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((mt = td),
                (P = "onPointerLeave"),
                (L = "onPointerEnter"),
                (D = "pointer")),
              (Zt = X == null ? Y : Ds(X)),
              (U = rt == null ? Y : Ds(rt)),
              (Y = new mt(P, D + "leave", X, s, Z)),
              (Y.target = Zt),
              (Y.relatedTarget = U),
              (P = null),
              Aa(Z) === F &&
                ((mt = new mt(L, D + "enter", rt, s, Z)),
                (mt.target = U),
                (mt.relatedTarget = Zt),
                (P = mt)),
              (Zt = P),
              X && rt)
            )
              e: {
                for (mt = M1, L = X, D = rt, U = 0, P = L; P; P = mt(P)) U++;
                P = 0;
                for (var gt = D; gt; gt = mt(gt)) P++;
                for (; 0 < U - P; ) (L = mt(L)), U--;
                for (; 0 < P - U; ) (D = mt(D)), P--;
                for (; U--; ) {
                  if (L === D || (D !== null && L === D.alternate)) {
                    mt = L;
                    break e;
                  }
                  (L = mt(L)), (D = mt(D));
                }
                mt = null;
              }
            else mt = null;
            X !== null && Xp(I, Y, X, mt, !1),
              rt !== null && Zt !== null && Xp(I, Zt, rt, mt, !0);
          }
        }
        t: {
          if (
            ((Y = F ? Ds(F) : window),
            (X = Y.nodeName && Y.nodeName.toLowerCase()),
            X === "select" || (X === "input" && Y.type === "file"))
          )
            var kt = rd;
          else if (ld(Y))
            if (cd) kt = jy;
            else {
              kt = Ly;
              var ft = By;
            }
          else
            (X = Y.nodeName),
              !X ||
              X.toLowerCase() !== "input" ||
              (Y.type !== "checkbox" && Y.type !== "radio")
                ? F && hc(F.elementType) && (kt = rd)
                : (kt = Hy);
          if (kt && (kt = kt(t, F))) {
            od(I, kt, s, Z);
            break t;
          }
          ft && ft(t, Y, F),
            t === "focusout" &&
              F &&
              Y.type === "number" &&
              F.memoizedProps.value != null &&
              fc(Y, "number", Y.value);
        }
        switch (((ft = F ? Ds(F) : window), t)) {
          case "focusin":
            (ld(ft) || ft.contentEditable === "true") &&
              ((ja = ft), (Mc = F), (Fs = null));
            break;
          case "focusout":
            Fs = Mc = ja = null;
            break;
          case "mousedown":
            Tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Tc = !1), bd(I, s, Z);
            break;
          case "selectionchange":
            if (Uy) break;
          case "keydown":
          case "keyup":
            bd(I, s, Z);
        }
        var xt;
        if (xc)
          t: {
            switch (t) {
              case "compositionstart":
                var Tt = "onCompositionStart";
                break t;
              case "compositionend":
                Tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Tt = "onCompositionUpdate";
                break t;
            }
            Tt = void 0;
          }
        else
          Ha
            ? ad(t, s) && (Tt = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (Tt = "onCompositionStart");
        Tt &&
          (ed &&
            s.locale !== "ko" &&
            (Ha || Tt !== "onCompositionStart"
              ? Tt === "onCompositionEnd" && Ha && (xt = Ih())
              : ((di = Z),
                (bc = "value" in di ? di.value : di.textContent),
                (Ha = !0))),
          (ft = Jo(F, Tt)),
          0 < ft.length &&
            ((Tt = new Jh(Tt, t, null, s, Z)),
            I.push({ event: Tt, listeners: ft }),
            xt
              ? (Tt.data = xt)
              : ((xt = sd(s)), xt !== null && (Tt.data = xt)))),
          (xt = Oy ? zy(t, s) : Dy(t, s)) &&
            ((Tt = Jo(F, "onBeforeInput")),
            0 < Tt.length &&
              ((ft = new Jh("onBeforeInput", "beforeinput", null, s, Z)),
              I.push({ event: ft, listeners: Tt }),
              (ft.data = xt))),
          x1(I, t, F, s, Z);
      }
      Vp(I, n);
    });
  }
  function fl(t, n, s) {
    return { instance: t, listener: n, currentTarget: s };
  }
  function Jo(t, n) {
    for (var s = n + "Capture", o = []; t !== null; ) {
      var f = t,
        g = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = ks(t, s)),
          f != null && o.unshift(fl(t, f, g)),
          (f = ks(t, n)),
          f != null && o.push(fl(t, f, g))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function M1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Xp(t, n, s, o, f) {
    for (var g = n._reactName, y = []; s !== null && s !== o; ) {
      var C = s,
        z = C.alternate,
        F = C.stateNode;
      if (((C = C.tag), z !== null && z === o)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        F === null ||
        ((z = F),
        f
          ? ((F = ks(s, g)), F != null && y.unshift(fl(s, F, z)))
          : f || ((F = ks(s, g)), F != null && y.push(fl(s, F, z)))),
        (s = s.return);
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var T1 = /\r\n?/g,
    A1 = /\u0000|\uFFFD/g;
  function Qp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        T1,
        `
`
      )
      .replace(A1, "");
  }
  function Zp(t, n) {
    return (n = Qp(n)), Qp(t) === n;
  }
  function Qt(t, n, s, o, f, g) {
    switch (s) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || Ra(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            Ra(t, "" + o);
        break;
      case "className":
        no(t, "class", o);
        break;
      case "tabIndex":
        no(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        no(t, s, o);
        break;
      case "style":
        Zh(t, o, g);
        break;
      case "data":
        if (n !== "object") {
          no(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        (o = ao("" + o)), t.setAttribute(s, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof g == "function" &&
            (s === "formAction"
              ? (n !== "input" && Qt(t, n, "name", f.name, f, null),
                Qt(t, n, "formEncType", f.formEncType, f, null),
                Qt(t, n, "formMethod", f.formMethod, f, null),
                Qt(t, n, "formTarget", f.formTarget, f, null))
              : (Qt(t, n, "encType", f.encType, f, null),
                Qt(t, n, "method", f.method, f, null),
                Qt(t, n, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(s);
          break;
        }
        (o = ao("" + o)), t.setAttribute(s, o);
        break;
      case "onClick":
        o != null && (t.onclick = Yn);
        break;
      case "onScroll":
        o != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (s = ao("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "" + o)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(s, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(s, o)
          : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(s, o)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(s)
          : t.setAttribute(s, o);
        break;
      case "popover":
        Et("beforetoggle", t), Et("toggle", t), eo(t, "popover", o);
        break;
      case "xlinkActuate":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        eo(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = ny.get(s) || s), eo(t, s, o));
    }
  }
  function $u(t, n, s, o, f, g) {
    switch (s) {
      case "style":
        Zh(t, o, g);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Ra(t, o)
          : (typeof o == "number" || typeof o == "bigint") && Ra(t, "" + o);
        break;
      case "onScroll":
        o != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Et("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Yn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nh.hasOwnProperty(s))
          t: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (n = s.slice(2, f ? s.length - 7 : void 0)),
              (g = t[Le] || null),
              (g = g != null ? g[s] : null),
              typeof g == "function" && t.removeEventListener(n, g, f),
              typeof o == "function")
            ) {
              typeof g != "function" &&
                g !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(n, o, f);
              break t;
            }
            s in t
              ? (t[s] = o)
              : o === !0
              ? t.setAttribute(s, "")
              : eo(t, s, o);
          }
    }
  }
  function Ee(t, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Et("error", t), Et("load", t);
        var o = !1,
          f = !1,
          g;
        for (g in s)
          if (s.hasOwnProperty(g)) {
            var y = s[g];
            if (y != null)
              switch (g) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  Qt(t, n, g, y, s, null);
              }
          }
        f && Qt(t, n, "srcSet", s.srcSet, s, null),
          o && Qt(t, n, "src", s.src, s, null);
        return;
      case "input":
        Et("invalid", t);
        var C = (g = y = f = null),
          z = null,
          F = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var Z = s[o];
            if (Z != null)
              switch (o) {
                case "name":
                  f = Z;
                  break;
                case "type":
                  y = Z;
                  break;
                case "checked":
                  z = Z;
                  break;
                case "defaultChecked":
                  F = Z;
                  break;
                case "value":
                  g = Z;
                  break;
                case "defaultValue":
                  C = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(l(137, n));
                  break;
                default:
                  Qt(t, n, o, Z, s, null);
              }
          }
        Vh(t, g, C, z, F, y, f, !1);
        return;
      case "select":
        Et("invalid", t), (o = y = g = null);
        for (f in s)
          if (s.hasOwnProperty(f) && ((C = s[f]), C != null))
            switch (f) {
              case "value":
                g = C;
                break;
              case "defaultValue":
                y = C;
                break;
              case "multiple":
                o = C;
              default:
                Qt(t, n, f, C, s, null);
            }
        (n = g),
          (s = y),
          (t.multiple = !!o),
          n != null ? ka(t, !!o, n, !1) : s != null && ka(t, !!o, s, !0);
        return;
      case "textarea":
        Et("invalid", t), (g = f = o = null);
        for (y in s)
          if (s.hasOwnProperty(y) && ((C = s[y]), C != null))
            switch (y) {
              case "value":
                o = C;
                break;
              case "defaultValue":
                f = C;
                break;
              case "children":
                g = C;
                break;
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(l(91));
                break;
              default:
                Qt(t, n, y, C, s, null);
            }
        Xh(t, o, f, g);
        return;
      case "option":
        for (z in s)
          if (s.hasOwnProperty(z) && ((o = s[z]), o != null))
            switch (z) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Qt(t, n, z, o, s, null);
            }
        return;
      case "dialog":
        Et("beforetoggle", t), Et("toggle", t), Et("cancel", t), Et("close", t);
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ul.length; o++) Et(ul[o], t);
        break;
      case "image":
        Et("error", t), Et("load", t);
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Et("error", t), Et("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (F in s)
          if (s.hasOwnProperty(F) && ((o = s[F]), o != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                Qt(t, n, F, o, s, null);
            }
        return;
      default:
        if (hc(n)) {
          for (Z in s)
            s.hasOwnProperty(Z) &&
              ((o = s[Z]), o !== void 0 && $u(t, n, Z, o, s, void 0));
          return;
        }
    }
    for (C in s)
      s.hasOwnProperty(C) && ((o = s[C]), o != null && Qt(t, n, C, o, s, null));
  }
  function O1(t, n, s, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          y = null,
          C = null,
          z = null,
          F = null,
          Z = null;
        for (X in s) {
          var I = s[X];
          if (s.hasOwnProperty(X) && I != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = I;
              default:
                o.hasOwnProperty(X) || Qt(t, n, X, null, o, I);
            }
        }
        for (var Y in o) {
          var X = o[Y];
          if (((I = s[Y]), o.hasOwnProperty(Y) && (X != null || I != null)))
            switch (Y) {
              case "type":
                g = X;
                break;
              case "name":
                f = X;
                break;
              case "checked":
                F = X;
                break;
              case "defaultChecked":
                Z = X;
                break;
              case "value":
                y = X;
                break;
              case "defaultValue":
                C = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(l(137, n));
                break;
              default:
                X !== I && Qt(t, n, Y, X, o, I);
            }
        }
        uc(t, y, C, z, F, Z, g, f);
        return;
      case "select":
        X = y = C = Y = null;
        for (g in s)
          if (((z = s[g]), s.hasOwnProperty(g) && z != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                X = z;
              default:
                o.hasOwnProperty(g) || Qt(t, n, g, null, o, z);
            }
        for (f in o)
          if (
            ((g = o[f]),
            (z = s[f]),
            o.hasOwnProperty(f) && (g != null || z != null))
          )
            switch (f) {
              case "value":
                Y = g;
                break;
              case "defaultValue":
                C = g;
                break;
              case "multiple":
                y = g;
              default:
                g !== z && Qt(t, n, f, g, o, z);
            }
        (n = C),
          (s = y),
          (o = X),
          Y != null
            ? ka(t, !!s, Y, !1)
            : !!o != !!s &&
              (n != null ? ka(t, !!s, n, !0) : ka(t, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        X = Y = null;
        for (C in s)
          if (
            ((f = s[C]),
            s.hasOwnProperty(C) && f != null && !o.hasOwnProperty(C))
          )
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qt(t, n, C, null, o, f);
            }
        for (y in o)
          if (
            ((f = o[y]),
            (g = s[y]),
            o.hasOwnProperty(y) && (f != null || g != null))
          )
            switch (y) {
              case "value":
                Y = f;
                break;
              case "defaultValue":
                X = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== g && Qt(t, n, y, f, o, g);
            }
        Gh(t, Y, X);
        return;
      case "option":
        for (var rt in s)
          if (
            ((Y = s[rt]),
            s.hasOwnProperty(rt) && Y != null && !o.hasOwnProperty(rt))
          )
            switch (rt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Qt(t, n, rt, null, o, Y);
            }
        for (z in o)
          if (
            ((Y = o[z]),
            (X = s[z]),
            o.hasOwnProperty(z) && Y !== X && (Y != null || X != null))
          )
            switch (z) {
              case "selected":
                t.selected =
                  Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                Qt(t, n, z, Y, o, X);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var mt in s)
          (Y = s[mt]),
            s.hasOwnProperty(mt) &&
              Y != null &&
              !o.hasOwnProperty(mt) &&
              Qt(t, n, mt, null, o, Y);
        for (F in o)
          if (
            ((Y = o[F]),
            (X = s[F]),
            o.hasOwnProperty(F) && Y !== X && (Y != null || X != null))
          )
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(l(137, n));
                break;
              default:
                Qt(t, n, F, Y, o, X);
            }
        return;
      default:
        if (hc(n)) {
          for (var Zt in s)
            (Y = s[Zt]),
              s.hasOwnProperty(Zt) &&
                Y !== void 0 &&
                !o.hasOwnProperty(Zt) &&
                $u(t, n, Zt, void 0, o, Y);
          for (Z in o)
            (Y = o[Z]),
              (X = s[Z]),
              !o.hasOwnProperty(Z) ||
                Y === X ||
                (Y === void 0 && X === void 0) ||
                $u(t, n, Z, Y, o, X);
          return;
        }
    }
    for (var L in s)
      (Y = s[L]),
        s.hasOwnProperty(L) &&
          Y != null &&
          !o.hasOwnProperty(L) &&
          Qt(t, n, L, null, o, Y);
    for (I in o)
      (Y = o[I]),
        (X = s[I]),
        !o.hasOwnProperty(I) ||
          Y === X ||
          (Y == null && X == null) ||
          Qt(t, n, I, Y, o, X);
  }
  function Kp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function z1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, n = 0, s = performance.getEntriesByType("resource"), o = 0;
        o < s.length;
        o++
      ) {
        var f = s[o],
          g = f.transferSize,
          y = f.initiatorType,
          C = f.duration;
        if (g && C && Kp(y)) {
          for (y = 0, C = f.responseEnd, o += 1; o < s.length; o++) {
            var z = s[o],
              F = z.startTime;
            if (F > C) break;
            var Z = z.transferSize,
              I = z.initiatorType;
            Z &&
              Kp(I) &&
              ((z = z.responseEnd), (y += Z * (z < C ? 1 : (C - F) / (z - F))));
          }
          if ((--o, (n += (8 * (g + y)) / (f.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Ju = null,
    tf = null;
  function tr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Pp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ip(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function ef(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nf = null;
  function D1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === nf
        ? !1
        : ((nf = t), !0)
      : ((nf = null), !1);
  }
  var Wp = typeof setTimeout == "function" ? setTimeout : void 0,
    k1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $p = typeof Promise == "function" ? Promise : void 0,
    R1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $p < "u"
        ? function (t) {
            return $p.resolve(null).then(t).catch(B1);
          }
        : Wp;
  function B1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function zi(t) {
    return t === "head";
  }
  function Jp(t, n) {
    var s = n,
      o = 0;
    do {
      var f = s.nextSibling;
      if ((t.removeChild(s), f && f.nodeType === 8))
        if (((s = f.data), s === "/$" || s === "/&")) {
          if (o === 0) {
            t.removeChild(f), us(n);
            return;
          }
          o--;
        } else if (
          s === "$" ||
          s === "$?" ||
          s === "$~" ||
          s === "$!" ||
          s === "&"
        )
          o++;
        else if (s === "html") hl(t.ownerDocument.documentElement);
        else if (s === "head") {
          (s = t.ownerDocument.head), hl(s);
          for (var g = s.firstChild; g; ) {
            var y = g.nextSibling,
              C = g.nodeName;
            g[zs] ||
              C === "SCRIPT" ||
              C === "STYLE" ||
              (C === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
              s.removeChild(g),
              (g = y);
          }
        } else s === "body" && hl(t.ownerDocument.body);
      s = f;
    } while (s);
    us(n);
  }
  function tm(t, n) {
    var s = t;
    t = 0;
    do {
      var o = s.nextSibling;
      if (
        (s.nodeType === 1
          ? n
            ? ((s._stashedDisplay = s.style.display),
              (s.style.display = "none"))
            : ((s.style.display = s._stashedDisplay || ""),
              s.getAttribute("style") === "" && s.removeAttribute("style"))
          : s.nodeType === 3 &&
            (n
              ? ((s._stashedText = s.nodeValue), (s.nodeValue = ""))
              : (s.nodeValue = s._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((s = o.data), s === "/$")) {
          if (t === 0) break;
          t--;
        } else (s !== "$" && s !== "$?" && s !== "$~" && s !== "$!") || t++;
      s = o;
    } while (s);
  }
  function af(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var s = n;
      switch (((n = n.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          af(s), rc(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function L1(t, n, s, o) {
    for (; t.nodeType === 1; ) {
      var f = s;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[zs])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((g = t.getAttribute("rel")),
                g === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((g = t.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === g) return t;
      } else return t;
      if (((t = mn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function H1(t, n, s) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function em(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function sf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function lf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function j1(t, n) {
    var s = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || s.readyState !== "loading") n();
    else {
      var o = function () {
        n(), s.removeEventListener("DOMContentLoaded", o);
      };
      s.addEventListener("DOMContentLoaded", o), (t._reactRetry = o);
    }
  }
  function mn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var of = null;
  function nm(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "/$" || s === "/&") {
          if (n === 0) return mn(t.nextSibling);
          n--;
        } else
          (s !== "$" && s !== "$!" && s !== "$?" && s !== "$~" && s !== "&") ||
            n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function im(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&") {
          if (n === 0) return t;
          n--;
        } else (s !== "/$" && s !== "/&") || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function am(t, n, s) {
    switch (((n = tr(s)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  function hl(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    rc(t);
  }
  var bn = new Map(),
    sm = new Set();
  function er(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ai = G.d;
  G.d = { f: N1, r: U1, D: F1, C: q1, L: Y1, m: V1, X: X1, S: G1, M: Q1 };
  function N1() {
    var t = ai.f(),
      n = Qo();
    return t || n;
  }
  function U1(t) {
    var n = Oa(t);
    n !== null && n.tag === 5 && n.type === "form" ? xg(n) : ai.r(t);
  }
  var os = typeof document > "u" ? null : document;
  function lm(t, n, s) {
    var o = os;
    if (o && typeof n == "string" && n) {
      var f = cn(n);
      (f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        sm.has(f) ||
          (sm.add(f),
          (t = { rel: t, crossOrigin: s, href: n }),
          o.querySelector(f) === null &&
            ((n = o.createElement("link")),
            Ee(n, "link", t),
            be(n),
            o.head.appendChild(n)));
    }
  }
  function F1(t) {
    ai.D(t), lm("dns-prefetch", t, null);
  }
  function q1(t, n) {
    ai.C(t, n), lm("preconnect", t, n);
  }
  function Y1(t, n, s) {
    ai.L(t, n, s);
    var o = os;
    if (o && t && n) {
      var f = 'link[rel="preload"][as="' + cn(n) + '"]';
      n === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + cn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + cn(s.imageSizes) + '"]'))
        : (f += '[href="' + cn(t) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = rs(t);
          break;
        case "script":
          g = cs(t);
      }
      bn.has(g) ||
        ((t = b(
          {
            rel: "preload",
            href: n === "image" && s && s.imageSrcSet ? void 0 : t,
            as: n,
          },
          s
        )),
        bn.set(g, t),
        o.querySelector(f) !== null ||
          (n === "style" && o.querySelector(dl(g))) ||
          (n === "script" && o.querySelector(gl(g))) ||
          ((n = o.createElement("link")),
          Ee(n, "link", t),
          be(n),
          o.head.appendChild(n)));
    }
  }
  function V1(t, n) {
    ai.m(t, n);
    var s = os;
    if (s && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + cn(o) + '"][href="' + cn(t) + '"]',
        g = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = cs(t);
      }
      if (
        !bn.has(g) &&
        ((t = b({ rel: "modulepreload", href: t }, n)),
        bn.set(g, t),
        s.querySelector(f) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(gl(g))) return;
        }
        (o = s.createElement("link")),
          Ee(o, "link", t),
          be(o),
          s.head.appendChild(o);
      }
    }
  }
  function G1(t, n, s) {
    ai.S(t, n, s);
    var o = os;
    if (o && t) {
      var f = za(o).hoistableStyles,
        g = rs(t);
      n = n || "default";
      var y = f.get(g);
      if (!y) {
        var C = { loading: 0, preload: null };
        if ((y = o.querySelector(dl(g)))) C.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": n }, s)),
            (s = bn.get(g)) && rf(t, s);
          var z = (y = o.createElement("link"));
          be(z),
            Ee(z, "link", t),
            (z._p = new Promise(function (F, Z) {
              (z.onload = F), (z.onerror = Z);
            })),
            z.addEventListener("load", function () {
              C.loading |= 1;
            }),
            z.addEventListener("error", function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            nr(y, n, o);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: C }),
          f.set(g, y);
      }
    }
  }
  function X1(t, n) {
    ai.X(t, n);
    var s = os;
    if (s && t) {
      var o = za(s).hoistableScripts,
        f = cs(t),
        g = o.get(f);
      g ||
        ((g = s.querySelector(gl(f))),
        g ||
          ((t = b({ src: t, async: !0 }, n)),
          (n = bn.get(f)) && cf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ee(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        o.set(f, g));
    }
  }
  function Q1(t, n) {
    ai.M(t, n);
    var s = os;
    if (s && t) {
      var o = za(s).hoistableScripts,
        f = cs(t),
        g = o.get(f);
      g ||
        ((g = s.querySelector(gl(f))),
        g ||
          ((t = b({ src: t, async: !0, type: "module" }, n)),
          (n = bn.get(f)) && cf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ee(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        o.set(f, g));
    }
  }
  function om(t, n, s, o) {
    var f = (f = ot.current) ? er(f) : null;
    if (!f) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((n = rs(s.href)),
            (s = za(f).hoistableStyles),
            (o = s.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              s.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = rs(s.href);
          var g = za(f).hoistableStyles,
            y = g.get(t);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(t, y),
              (g = f.querySelector(dl(t))) &&
                !g._p &&
                ((y.instance = g), (y.state.loading = 5)),
              bn.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                bn.set(t, s),
                g || Z1(f, t, s, y.state))),
            n && o === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (n && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = s.async),
          (s = s.src),
          typeof s == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = cs(s)),
              (s = za(f).hoistableScripts),
              (o = s.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function rs(t) {
    return 'href="' + cn(t) + '"';
  }
  function dl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rm(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Z1(t, n, s, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Ee(n, "link", s),
        be(n),
        t.head.appendChild(n));
  }
  function cs(t) {
    return '[src="' + cn(t) + '"]';
  }
  function gl(t) {
    return "script[async]" + t;
  }
  function cm(t, n, s) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + cn(s.href) + '"]');
          if (o) return (n.instance = o), be(o), o;
          var f = b({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            be(o),
            Ee(o, "style", f),
            nr(o, s.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          f = rs(s.href);
          var g = t.querySelector(dl(f));
          if (g) return (n.state.loading |= 4), (n.instance = g), be(g), g;
          (o = rm(s)),
            (f = bn.get(f)) && rf(o, f),
            (g = (t.ownerDocument || t).createElement("link")),
            be(g);
          var y = g;
          return (
            (y._p = new Promise(function (C, z) {
              (y.onload = C), (y.onerror = z);
            })),
            Ee(g, "link", o),
            (n.state.loading |= 4),
            nr(g, s.precedence, t),
            (n.instance = g)
          );
        case "script":
          return (
            (g = cs(s.src)),
            (f = t.querySelector(gl(g)))
              ? ((n.instance = f), be(f), f)
              : ((o = s),
                (f = bn.get(g)) && ((o = b({}, s)), cf(o, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                be(f),
                Ee(f, "link", o),
                t.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), nr(o, s.precedence, t));
    return n.instance;
  }
  function nr(t, n, s) {
    for (
      var o = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = o.length ? o[o.length - 1] : null,
        g = f,
        y = 0;
      y < o.length;
      y++
    ) {
      var C = o[y];
      if (C.dataset.precedence === n) g = C;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(t, g.nextSibling)
      : ((n = s.nodeType === 9 ? s.head : s), n.insertBefore(t, n.firstChild));
  }
  function rf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function cf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var ir = null;
  function um(t, n, s) {
    if (ir === null) {
      var o = new Map(),
        f = (ir = new Map());
      f.set(s, o);
    } else (f = ir), (o = f.get(s)), o || ((o = new Map()), f.set(s, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), s = s.getElementsByTagName(t), f = 0;
      f < s.length;
      f++
    ) {
      var g = s[f];
      if (
        !(
          g[zs] ||
          g[_e] ||
          (t === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = g.getAttribute(n) || "";
        y = t + y;
        var C = o.get(y);
        C ? C.push(g) : o.set(y, [g]);
      }
    }
    return o;
  }
  function fm(t, n, s) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function K1(t, n, s) {
    if (s === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function hm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function P1(t, n, s, o) {
    if (
      s.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (s.state.loading & 4) === 0
    ) {
      if (s.instance === null) {
        var f = rs(o.href),
          g = n.querySelector(dl(f));
        if (g) {
          (n = g._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (t.count++, (t = ar.bind(t)), n.then(t, t)),
            (s.state.loading |= 4),
            (s.instance = g),
            be(g);
          return;
        }
        (g = n.ownerDocument || n),
          (o = rm(o)),
          (f = bn.get(f)) && rf(o, f),
          (g = g.createElement("link")),
          be(g);
        var y = g;
        (y._p = new Promise(function (C, z) {
          (y.onload = C), (y.onerror = z);
        })),
          Ee(g, "link", o),
          (s.instance = g);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(s, n),
        (n = s.state.preload) &&
          (s.state.loading & 3) === 0 &&
          (t.count++,
          (s = ar.bind(t)),
          n.addEventListener("load", s),
          n.addEventListener("error", s));
    }
  }
  var uf = 0;
  function I1(t, n) {
    return (
      t.stylesheets && t.count === 0 && lr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (s) {
            var o = setTimeout(function () {
              if ((t.stylesheets && lr(t, t.stylesheets), t.unsuspend)) {
                var g = t.unsuspend;
                (t.unsuspend = null), g();
              }
            }, 6e4 + n);
            0 < t.imgBytes && uf === 0 && (uf = 62500 * z1());
            var f = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && lr(t, t.stylesheets), t.unsuspend))
              ) {
                var g = t.unsuspend;
                (t.unsuspend = null), g();
              }
            }, (t.imgBytes > uf ? 50 : 800) + n);
            return (
              (t.unsuspend = s),
              function () {
                (t.unsuspend = null), clearTimeout(o), clearTimeout(f);
              }
            );
          }
        : null
    );
  }
  function ar() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) lr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var sr = null;
  function lr(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (sr = new Map()),
        n.forEach(W1, t),
        (sr = null),
        ar.call(t));
  }
  function W1(t, n) {
    if (!(n.state.loading & 4)) {
      var s = sr.get(t);
      if (s) var o = s.get(null);
      else {
        (s = new Map()), sr.set(t, s);
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var y = f[g];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (s.set(y.dataset.precedence, y), (o = y));
        }
        o && s.set(null, o);
      }
      (f = n.instance),
        (y = f.getAttribute("data-precedence")),
        (g = s.get(y) || o),
        g === o && s.set(null, f),
        s.set(y, f),
        this.count++,
        (o = ar.bind(this)),
        f.addEventListener("load", o),
        f.addEventListener("error", o),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var pl = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function $1(t, n, s, o, f, g, y, C, z) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ac(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ac(0)),
      (this.hiddenUpdates = ac(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = z),
      (this.incompleteTransitions = new Map());
  }
  function dm(t, n, s, o, f, g, y, C, z, F, Z, I) {
    return (
      (t = new $1(t, n, s, y, z, F, Z, I, C)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = Ke(3, null, null, n)),
      (t.current = g),
      (g.stateNode = t),
      (n = Yc()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: o, isDehydrated: s, cache: n }),
      Qc(g),
      t
    );
  }
  function gm(t) {
    return t ? ((t = Fa), t) : Fa;
  }
  function pm(t, n, s, o, f, g) {
    (f = gm(f)),
      o.context === null ? (o.context = f) : (o.pendingContext = f),
      (o = vi(n)),
      (o.payload = { element: s }),
      (g = g === void 0 ? null : g),
      g !== null && (o.callback = g),
      (s = wi(t, o, n)),
      s !== null && (qe(s, t, n), Zs(s, t, n));
  }
  function mm(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function ff(t, n) {
    mm(t, n), (t = t.alternate) && mm(t, n);
  }
  function bm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Ji(t, 67108864);
      n !== null && qe(n, t, 67108864), ff(t, 67108864);
    }
  }
  function ym(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Je();
      n = sc(n);
      var s = Ji(t, n);
      s !== null && qe(s, t, n), ff(t, n);
    }
  }
  var or = !0;
  function J1(t, n, s, o) {
    var f = j.T;
    j.T = null;
    var g = G.p;
    try {
      (G.p = 2), hf(t, n, s, o);
    } finally {
      (G.p = g), (j.T = f);
    }
  }
  function tv(t, n, s, o) {
    var f = j.T;
    j.T = null;
    var g = G.p;
    try {
      (G.p = 8), hf(t, n, s, o);
    } finally {
      (G.p = g), (j.T = f);
    }
  }
  function hf(t, n, s, o) {
    if (or) {
      var f = df(o);
      if (f === null) Wu(t, n, o, rr, s), wm(t, o);
      else if (nv(f, t, n, s, o)) o.stopPropagation();
      else if ((wm(t, o), n & 4 && -1 < ev.indexOf(t))) {
        for (; f !== null; ) {
          var g = Oa(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var y = Ki(g.pendingLanes);
                  if (y !== 0) {
                    var C = g;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; y; ) {
                      var z = 1 << (31 - Qe(y));
                      (C.entanglements[1] |= z), (y &= ~z);
                    }
                    kn(g), (Bt & 6) === 0 && ((Go = Ft() + 500), cl(0));
                  }
                }
                break;
              case 31:
              case 13:
                (C = Ji(g, 2)), C !== null && qe(C, g, 2), Qo(), ff(g, 2);
            }
          if (((g = df(o)), g === null && Wu(t, n, o, rr, s), g === f)) break;
          f = g;
        }
        f !== null && o.stopPropagation();
      } else Wu(t, n, o, null, s);
    }
  }
  function df(t) {
    return (t = gc(t)), gf(t);
  }
  var rr = null;
  function gf(t) {
    if (((rr = null), (t = Aa(t)), t !== null)) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (((t = u(n)), t !== null)) return t;
          t = null;
        } else if (s === 31) {
          if (((t = h(n)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (rr = t), null;
  }
  function vm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ln()) {
          case le:
            return 2;
          case we:
            return 8;
          case Be:
          case Ms:
            return 32;
          case Ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1,
    Di = null,
    ki = null,
    Ri = null,
    ml = new Map(),
    bl = new Map(),
    Bi = [],
    ev =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function wm(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Di = null;
        break;
      case "dragenter":
      case "dragleave":
        ki = null;
        break;
      case "mouseover":
      case "mouseout":
        Ri = null;
        break;
      case "pointerover":
      case "pointerout":
        ml.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bl.delete(n.pointerId);
    }
  }
  function yl(t, n, s, o, f, g) {
    return t === null || t.nativeEvent !== g
      ? ((t = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: o,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = Oa(n)), n !== null && bm(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        t);
  }
  function nv(t, n, s, o, f) {
    switch (n) {
      case "focusin":
        return (Di = yl(Di, t, n, s, o, f)), !0;
      case "dragenter":
        return (ki = yl(ki, t, n, s, o, f)), !0;
      case "mouseover":
        return (Ri = yl(Ri, t, n, s, o, f)), !0;
      case "pointerover":
        var g = f.pointerId;
        return ml.set(g, yl(ml.get(g) || null, t, n, s, o, f)), !0;
      case "gotpointercapture":
        return (
          (g = f.pointerId), bl.set(g, yl(bl.get(g) || null, t, n, s, o, f)), !0
        );
    }
    return !1;
  }
  function _m(t) {
    var n = Aa(t.target);
    if (n !== null) {
      var s = c(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = u(s)), n !== null)) {
            (t.blockedOn = n),
              Lh(t.priority, function () {
                ym(s);
              });
            return;
          }
        } else if (n === 31) {
          if (((n = h(s)), n !== null)) {
            (t.blockedOn = n),
              Lh(t.priority, function () {
                ym(s);
              });
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function cr(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var s = df(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var o = new s.constructor(s.type, s);
        (dc = o), s.target.dispatchEvent(o), (dc = null);
      } else return (n = Oa(s)), n !== null && bm(n), (t.blockedOn = s), !1;
      n.shift();
    }
    return !0;
  }
  function xm(t, n, s) {
    cr(t) && s.delete(n);
  }
  function iv() {
    (pf = !1),
      Di !== null && cr(Di) && (Di = null),
      ki !== null && cr(ki) && (ki = null),
      Ri !== null && cr(Ri) && (Ri = null),
      ml.forEach(xm),
      bl.forEach(xm);
  }
  function ur(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      pf ||
        ((pf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, iv)));
  }
  var fr = null;
  function Sm(t) {
    fr !== t &&
      ((fr = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        fr === t && (fr = null);
        for (var n = 0; n < t.length; n += 3) {
          var s = t[n],
            o = t[n + 1],
            f = t[n + 2];
          if (typeof o != "function") {
            if (gf(o || s) === null) continue;
            break;
          }
          var g = Oa(s);
          g !== null &&
            (t.splice(n, 3),
            (n -= 3),
            hu(g, { pending: !0, data: f, method: s.method, action: o }, o, f));
        }
      }));
  }
  function us(t) {
    function n(z) {
      return ur(z, t);
    }
    Di !== null && ur(Di, t),
      ki !== null && ur(ki, t),
      Ri !== null && ur(Ri, t),
      ml.forEach(n),
      bl.forEach(n);
    for (var s = 0; s < Bi.length; s++) {
      var o = Bi[s];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Bi.length && ((s = Bi[0]), s.blockedOn === null); )
      _m(s), s.blockedOn === null && Bi.shift();
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (o = 0; o < s.length; o += 3) {
        var f = s[o],
          g = s[o + 1],
          y = f[Le] || null;
        if (typeof g == "function") y || Sm(s);
        else if (y) {
          var C = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (y = g[Le] || null))) C = y.formAction;
            else if (gf(f) !== null) continue;
          } else C = y.action;
          typeof C == "function" ? (s[o + 1] = C) : (s.splice(o, 3), (o -= 3)),
            Sm(s);
        }
      }
  }
  function Cm() {
    function t(g) {
      g.canIntercept &&
        g.info === "react-transition" &&
        g.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (f = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      f !== null && (f(), (f = null)), o || setTimeout(s, 20);
    }
    function s() {
      if (!o && !navigation.transition) {
        var g = navigation.currentEntry;
        g &&
          g.url != null &&
          navigation.navigate(g.url, {
            state: g.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        f = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(s, 100),
        function () {
          (o = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            f !== null && (f(), (f = null));
        }
      );
    }
  }
  function mf(t) {
    this._internalRoot = t;
  }
  (hr.prototype.render = mf.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var s = n.current,
        o = Je();
      pm(s, o, t, n, null, null);
    }),
    (hr.prototype.unmount = mf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          pm(t.current, 2, null, t, null, null), Qo(), (n[Ta] = null);
        }
      });
  function hr(t) {
    this._internalRoot = t;
  }
  hr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Bh();
      t = { blockedOn: null, target: t, priority: n };
      for (var s = 0; s < Bi.length && n !== 0 && n < Bi[s].priority; s++);
      Bi.splice(s, 0, t), s === 0 && _m(t);
    }
  };
  var Em = e.version;
  if (Em !== "19.2.0") throw Error(l(527, Em, "19.2.0"));
  G.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return (
      (t = d(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var av = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dr.isDisabled && dr.supportsFiber)
      try {
        (xn = dr.inject(av)), (Te = dr);
      } catch {}
  }
  return (
    (wl.createRoot = function (t, n) {
      if (!r(t)) throw Error(l(299));
      var s = !1,
        o = "",
        f = kg,
        g = Rg,
        y = Bg;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (n = dm(t, 1, !1, null, null, s, o, null, f, g, y, Cm)),
        (t[Ta] = n.current),
        Iu(t),
        new mf(n)
      );
    }),
    (wl.hydrateRoot = function (t, n, s) {
      if (!r(t)) throw Error(l(299));
      var o = !1,
        f = "",
        g = kg,
        y = Rg,
        C = Bg,
        z = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (g = s.onUncaughtError),
          s.onCaughtError !== void 0 && (y = s.onCaughtError),
          s.onRecoverableError !== void 0 && (C = s.onRecoverableError),
          s.formState !== void 0 && (z = s.formState)),
        (n = dm(t, 1, !0, n, s ?? null, o, f, z, g, y, C, Cm)),
        (n.context = gm(null)),
        (s = n.current),
        (o = Je()),
        (o = sc(o)),
        (f = vi(o)),
        (f.callback = null),
        wi(s, f, o),
        (s = o),
        (n.current.lanes = s),
        Os(n, s),
        kn(n),
        (t[Ta] = n.current),
        Iu(t),
        new hr(n)
      );
    }),
    (wl.version = "19.2.0"),
    wl
  );
}
var Lm;
function gv() {
  if (Lm) return vf.exports;
  Lm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return i(), (vf.exports = dv()), vf.exports;
}
var pv = gv();
const mv = "_grandContainer_9ptvi_1",
  bv = "_parentContainer_9ptvi_21",
  yv = "_topContainer_9ptvi_47",
  vv = "_middleContainer_9ptvi_69",
  wv = "_instructionContainer_9ptvi_89",
  _v = "_footerContainer_9ptvi_115",
  Hi = {
    grandContainer: mv,
    parentContainer: bv,
    topContainer: yv,
    middleContainer: vv,
    instructionContainer: wv,
    footerContainer: _v,
  },
  xv = "_Container_12oti_1",
  Sv = "_panelContainer_12oti_13",
  Cv = "_panelButton_12oti_35",
  Ev = "_buttonIcon_12oti_87",
  _l = { Container: xv, panelContainer: Sv, panelButton: Cv, buttonIcon: Ev };
var Or = { exports: {} };
var Mv = Or.exports,
  Hm;
function Tv() {
  return (
    Hm ||
      ((Hm = 1),
      (function (i, e) {
        ((a, l) => {
          i.exports = l();
        })(Mv, function a() {
          var l =
              typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : l !== void 0
                ? l
                : {},
            r,
            c = !l.document && !!l.postMessage,
            u = l.IS_PAPA_WORKER || !1,
            h = {},
            p = 0,
            d = {};
          function m(S) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (v) {
                var N = H(v);
                (N.chunkSize = parseInt(N.chunkSize)),
                  v.step || v.chunk || (N.chunkSize = null),
                  (this._handle = new M(N)),
                  ((this._handle.streamer = this)._config = N);
              }.call(this, S),
              (this.parseChunk = function (v, N) {
                var R = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < R) {
                  let $ = this._config.newline;
                  $ ||
                    ((B = this._config.quoteChar || '"'),
                    ($ = this._handle.guessLineEndings(v, B))),
                    (v = [...v.split($).slice(R)].join($));
                }
                this.isFirstChunk &&
                  T(this._config.beforeFirstChunk) &&
                  (B = this._config.beforeFirstChunk(v)) !== void 0 &&
                  (v = B),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var R = this._partialLine + v,
                  B =
                    ((this._partialLine = ""),
                    this._handle.parse(R, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((v = B.meta.cursor),
                    (R =
                      (this._finished ||
                        ((this._partialLine = R.substring(v - this._baseIndex)),
                        (this._baseIndex = v)),
                      B && B.data && (this._rowCount += B.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    u)
                  )
                    l.postMessage({
                      results: B,
                      workerId: d.WORKER_ID,
                      finished: R,
                    });
                  else if (T(this._config.chunk) && !N) {
                    if (
                      (this._config.chunk(B, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = B = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(B.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(B.errors)),
                      (this._completeResults.meta = B.meta)),
                    this._completed ||
                      !R ||
                      !T(this._config.complete) ||
                      (B && B.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input
                      ),
                      (this._completed = !0)),
                    R || (B && B.meta.paused) || this._nextChunk(),
                    B
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (v) {
                T(this._config.error)
                  ? this._config.error(v)
                  : u &&
                    this._config.error &&
                    l.postMessage({
                      workerId: d.WORKER_ID,
                      error: v,
                      finished: !1,
                    });
              });
          }
          function b(S) {
            var v;
            (S = S || {}).chunkSize || (S.chunkSize = d.RemoteChunkSize),
              m.call(this, S),
              (this._nextChunk = c
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (N) {
                (this._input = N), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((v = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (v.withCredentials = this._config.withCredentials),
                    c ||
                      ((v.onload = tt(this._chunkLoaded, this)),
                      (v.onerror = tt(this._chunkError, this))),
                    v.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !c
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var N,
                      R = this._config.downloadRequestHeaders;
                    for (N in R) v.setRequestHeader(N, R[N]);
                  }
                  var B;
                  this._config.chunkSize &&
                    ((B = this._start + this._config.chunkSize - 1),
                    v.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + B
                    ));
                  try {
                    v.send(this._config.downloadRequestBody);
                  } catch ($) {
                    this._chunkError($.message);
                  }
                  c && v.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                v.readyState === 4 &&
                  (v.status < 200 || 400 <= v.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || v.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((N) =>
                            (N = N.getResponseHeader("Content-Range")) !== null
                              ? parseInt(N.substring(N.lastIndexOf("/") + 1))
                              : -1)(v)),
                      this.parseChunk(v.responseText)));
              }),
              (this._chunkError = function (N) {
                (N = v.statusText || N), this._sendError(new Error(N));
              });
          }
          function w(S) {
            (S = S || {}).chunkSize || (S.chunkSize = d.LocalChunkSize),
              m.call(this, S);
            var v,
              N,
              R = typeof FileReader < "u";
            (this.stream = function (B) {
              (this._input = B),
                (N = B.slice || B.webkitSlice || B.mozSlice),
                R
                  ? (((v = new FileReader()).onload = tt(
                      this._chunkLoaded,
                      this
                    )),
                    (v.onerror = tt(this._chunkError, this)))
                  : (v = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var B = this._input,
                  $ =
                    (this._config.chunkSize &&
                      (($ = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size
                      )),
                      (B = N.call(B, this._start, $))),
                    v.readAsText(B, this._config.encoding));
                R || this._chunkLoaded({ target: { result: $ } });
              }),
              (this._chunkLoaded = function (B) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(B.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(v.error);
              });
          }
          function x(S) {
            var v;
            m.call(this, (S = S || {})),
              (this.stream = function (N) {
                return (v = N), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var N, R;
                if (!this._finished)
                  return (
                    (N = this._config.chunkSize),
                    (v = N
                      ? ((R = v.substring(0, N)), v.substring(N))
                      : ((R = v), "")),
                    (this._finished = !v),
                    this.parseChunk(R)
                  );
              });
          }
          function _(S) {
            m.call(this, (S = S || {}));
            var v = [],
              N = !0,
              R = !1;
            (this.pause = function () {
              m.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                m.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (B) {
                (this._input = B),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                R && v.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  v.length ? this.parseChunk(v.shift()) : (N = !0);
              }),
              (this._streamData = tt(function (B) {
                try {
                  v.push(
                    typeof B == "string" ? B : B.toString(this._config.encoding)
                  ),
                    N &&
                      ((N = !1),
                      this._checkIsFinished(),
                      this.parseChunk(v.shift()));
                } catch ($) {
                  this._streamError($);
                }
              }, this)),
              (this._streamError = tt(function (B) {
                this._streamCleanUp(), this._sendError(B);
              }, this)),
              (this._streamEnd = tt(function () {
                this._streamCleanUp(), (R = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = tt(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function M(S) {
            var v,
              N,
              R,
              B,
              $ = Math.pow(2, 53),
              st = -$,
              at = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              j =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              G = this,
              et = 0,
              it = 0,
              ct = !1,
              A = !1,
              k = [],
              V = { data: [], errors: [], meta: {} };
            function nt(pt) {
              return S.skipEmptyLines === "greedy"
                ? pt.join("").trim() === ""
                : pt.length === 1 && pt[0].length === 0;
            }
            function lt() {
              if (
                (V &&
                  R &&
                  (bt(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      d.DefaultDelimiter +
                      "'"
                  ),
                  (R = !1)),
                S.skipEmptyLines &&
                  (V.data = V.data.filter(function (Nt) {
                    return !nt(Nt);
                  })),
                ot())
              ) {
                let Nt = function (ee, St) {
                  T(S.transformHeader) && (ee = S.transformHeader(ee, St)),
                    k.push(ee);
                };
                var vt = Nt;
                if (V)
                  if (Array.isArray(V.data[0])) {
                    for (var pt = 0; ot() && pt < V.data.length; pt++)
                      V.data[pt].forEach(Nt);
                    V.data.splice(0, 1);
                  } else V.data.forEach(Nt);
              }
              function dt(Nt, ee) {
                for (
                  var St = S.header ? {} : [], At = 0;
                  At < Nt.length;
                  At++
                ) {
                  var yt = At,
                    se = Nt[At],
                    se = ((Ot, Ut) =>
                      ((ne) => (
                        S.dynamicTypingFunction &&
                          S.dynamicTyping[ne] === void 0 &&
                          (S.dynamicTyping[ne] = S.dynamicTypingFunction(ne)),
                        (S.dynamicTyping[ne] || S.dynamicTyping) === !0
                      ))(Ot)
                        ? Ut === "true" ||
                          Ut === "TRUE" ||
                          (Ut !== "false" &&
                            Ut !== "FALSE" &&
                            (((ne) => {
                              if (
                                at.test(ne) &&
                                ((ne = parseFloat(ne)), st < ne && ne < $)
                              )
                                return 1;
                            })(Ut)
                              ? parseFloat(Ut)
                              : j.test(Ut)
                              ? new Date(Ut)
                              : Ut === ""
                              ? null
                              : Ut))
                        : Ut)(
                      (yt = S.header
                        ? At >= k.length
                          ? "__parsed_extra"
                          : k[At]
                        : yt),
                      (se = S.transform ? S.transform(se, yt) : se)
                    );
                  yt === "__parsed_extra"
                    ? ((St[yt] = St[yt] || []), St[yt].push(se))
                    : (St[yt] = se);
                }
                return (
                  S.header &&
                    (At > k.length
                      ? bt(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            k.length +
                            " fields but parsed " +
                            At,
                          it + ee
                        )
                      : At < k.length &&
                        bt(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            k.length +
                            " fields but parsed " +
                            At,
                          it + ee
                        )),
                  St
                );
              }
              var qt;
              V &&
                (S.header || S.dynamicTyping || S.transform) &&
                ((qt = 1),
                !V.data.length || Array.isArray(V.data[0])
                  ? ((V.data = V.data.map(dt)), (qt = V.data.length))
                  : (V.data = dt(V.data, 0)),
                S.header && V.meta && (V.meta.fields = k),
                (it += qt));
            }
            function ot() {
              return S.header && k.length === 0;
            }
            function bt(pt, dt, qt, vt) {
              (pt = { type: pt, code: dt, message: qt }),
                vt !== void 0 && (pt.row = vt),
                V.errors.push(pt);
            }
            T(S.step) &&
              ((B = S.step),
              (S.step = function (pt) {
                (V = pt),
                  ot()
                    ? lt()
                    : (lt(),
                      V.data.length !== 0 &&
                        ((et += pt.data.length),
                        S.preview && et > S.preview
                          ? N.abort()
                          : ((V.data = V.data[0]), B(V, G))));
              })),
              (this.parse = function (pt, dt, qt) {
                var vt = S.quoteChar || '"',
                  vt =
                    (S.newline || (S.newline = this.guessLineEndings(pt, vt)),
                    (R = !1),
                    S.delimiter
                      ? T(S.delimiter) &&
                        ((S.delimiter = S.delimiter(pt)),
                        (V.meta.delimiter = S.delimiter))
                      : ((vt = ((Nt, ee, St, At, yt) => {
                          var se, Ot, Ut, ne;
                          yt = yt || [
                            ",",
                            "	",
                            "|",
                            ";",
                            d.RECORD_SEP,
                            d.UNIT_SEP,
                          ];
                          for (var An = 0; An < yt.length; An++) {
                            for (
                              var sn,
                                Zi = yt[An],
                                Ft = 0,
                                ln = 0,
                                le = 0,
                                we =
                                  ((Ut = void 0),
                                  new E({
                                    comments: At,
                                    delimiter: Zi,
                                    newline: ee,
                                    preview: 10,
                                  }).parse(Nt)),
                                Be = 0;
                              Be < we.data.length;
                              Be++
                            )
                              St && nt(we.data[Be])
                                ? le++
                                : ((sn = we.data[Be].length),
                                  (ln += sn),
                                  Ut === void 0
                                    ? (Ut = sn)
                                    : 0 < sn &&
                                      ((Ft += Math.abs(sn - Ut)), (Ut = sn)));
                            0 < we.data.length && (ln /= we.data.length - le),
                              (Ot === void 0 || Ft <= Ot) &&
                                (ne === void 0 || ne < ln) &&
                                1.99 < ln &&
                                ((Ot = Ft), (se = Zi), (ne = ln));
                          }
                          return {
                            successful: !!(S.delimiter = se),
                            bestDelimiter: se,
                          };
                        })(
                          pt,
                          S.newline,
                          S.skipEmptyLines,
                          S.comments,
                          S.delimitersToGuess
                        )).successful
                          ? (S.delimiter = vt.bestDelimiter)
                          : ((R = !0), (S.delimiter = d.DefaultDelimiter)),
                        (V.meta.delimiter = S.delimiter)),
                    H(S));
                return (
                  S.preview && S.header && vt.preview++,
                  (v = pt),
                  (N = new E(vt)),
                  (V = N.parse(v, dt, qt)),
                  lt(),
                  ct ? { meta: { paused: !0 } } : V || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return ct;
              }),
              (this.pause = function () {
                (ct = !0),
                  N.abort(),
                  (v = T(S.chunk) ? "" : v.substring(N.getCharIndex()));
              }),
              (this.resume = function () {
                G.streamer._halted
                  ? ((ct = !1), G.streamer.parseChunk(v, !0))
                  : setTimeout(G.resume, 3);
              }),
              (this.aborted = function () {
                return A;
              }),
              (this.abort = function () {
                (A = !0),
                  N.abort(),
                  (V.meta.aborted = !0),
                  T(S.complete) && S.complete(V),
                  (v = "");
              }),
              (this.guessLineEndings = function (Nt, vt) {
                Nt = Nt.substring(0, 1048576);
                var vt = new RegExp(O(vt) + "([^]*?)" + O(vt), "gm"),
                  qt = (Nt = Nt.replace(vt, "")).split("\r"),
                  vt = Nt.split(`
`),
                  Nt = 1 < vt.length && vt[0].length < qt[0].length;
                if (qt.length === 1 || Nt)
                  return `
`;
                for (var ee = 0, St = 0; St < qt.length; St++)
                  qt[St][0] ===
                    `
` && ee++;
                return ee >= qt.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function O(S) {
            return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function E(S) {
            var v = (S = S || {}).delimiter,
              N = S.newline,
              R = S.comments,
              B = S.step,
              $ = S.preview,
              st = S.fastMode,
              at = null,
              j = !1,
              G = S.quoteChar == null ? '"' : S.quoteChar,
              et = G;
            if (
              (S.escapeChar !== void 0 && (et = S.escapeChar),
              (typeof v != "string" || -1 < d.BAD_DELIMITERS.indexOf(v)) &&
                (v = ","),
              R === v)
            )
              throw new Error("Comment character same as delimiter");
            R === !0
              ? (R = "#")
              : (typeof R != "string" || -1 < d.BAD_DELIMITERS.indexOf(R)) &&
                (R = !1),
              N !==
                `
` &&
                N !== "\r" &&
                N !==
                  `\r
` &&
                (N = `
`);
            var it = 0,
              ct = !1;
            (this.parse = function (A, k, V) {
              if (typeof A != "string")
                throw new Error("Input must be a string");
              var nt = A.length,
                lt = v.length,
                ot = N.length,
                bt = R.length,
                pt = T(B),
                dt = [],
                qt = [],
                vt = [],
                Nt = (it = 0);
              if (!A) return Ft();
              if (st || (st !== !1 && A.indexOf(G) === -1)) {
                for (var ee = A.split(N), St = 0; St < ee.length; St++) {
                  if (((vt = ee[St]), (it += vt.length), St !== ee.length - 1))
                    it += N.length;
                  else if (V) return Ft();
                  if (!R || vt.substring(0, bt) !== R) {
                    if (pt) {
                      if (((dt = []), ne(vt.split(v)), ln(), ct)) return Ft();
                    } else ne(vt.split(v));
                    if ($ && $ <= St) return (dt = dt.slice(0, $)), Ft(!0);
                  }
                }
                return Ft();
              }
              for (
                var At = A.indexOf(v, it),
                  yt = A.indexOf(N, it),
                  se = new RegExp(O(et) + O(G), "g"),
                  Ot = A.indexOf(G, it);
                ;

              )
                if (A[it] === G)
                  for (Ot = it, it++; ; ) {
                    if ((Ot = A.indexOf(G, Ot + 1)) === -1)
                      return (
                        V ||
                          qt.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: dt.length,
                            index: it,
                          }),
                        sn()
                      );
                    if (Ot === nt - 1)
                      return sn(A.substring(it, Ot).replace(se, G));
                    if (G === et && A[Ot + 1] === et) Ot++;
                    else if (G === et || Ot === 0 || A[Ot - 1] !== et) {
                      At !== -1 && At < Ot + 1 && (At = A.indexOf(v, Ot + 1));
                      var Ut = An(
                        (yt =
                          yt !== -1 && yt < Ot + 1
                            ? A.indexOf(N, Ot + 1)
                            : yt) === -1
                          ? At
                          : Math.min(At, yt)
                      );
                      if (A.substr(Ot + 1 + Ut, lt) === v) {
                        vt.push(A.substring(it, Ot).replace(se, G)),
                          A[(it = Ot + 1 + Ut + lt)] !== G &&
                            (Ot = A.indexOf(G, it)),
                          (At = A.indexOf(v, it)),
                          (yt = A.indexOf(N, it));
                        break;
                      }
                      if (
                        ((Ut = An(yt)),
                        A.substring(Ot + 1 + Ut, Ot + 1 + Ut + ot) === N)
                      ) {
                        if (
                          (vt.push(A.substring(it, Ot).replace(se, G)),
                          Zi(Ot + 1 + Ut + ot),
                          (At = A.indexOf(v, it)),
                          (Ot = A.indexOf(G, it)),
                          pt && (ln(), ct))
                        )
                          return Ft();
                        if ($ && dt.length >= $) return Ft(!0);
                        break;
                      }
                      qt.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: dt.length,
                        index: it,
                      }),
                        Ot++;
                    }
                  }
                else if (
                  R &&
                  vt.length === 0 &&
                  A.substring(it, it + bt) === R
                ) {
                  if (yt === -1) return Ft();
                  (it = yt + ot),
                    (yt = A.indexOf(N, it)),
                    (At = A.indexOf(v, it));
                } else if (At !== -1 && (At < yt || yt === -1))
                  vt.push(A.substring(it, At)),
                    (it = At + lt),
                    (At = A.indexOf(v, it));
                else {
                  if (yt === -1) break;
                  if (
                    (vt.push(A.substring(it, yt)),
                    Zi(yt + ot),
                    pt && (ln(), ct))
                  )
                    return Ft();
                  if ($ && dt.length >= $) return Ft(!0);
                }
              return sn();
              function ne(le) {
                dt.push(le), (Nt = it);
              }
              function An(le) {
                var we = 0;
                return (we =
                  le !== -1 &&
                  (le = A.substring(Ot + 1, le)) &&
                  le.trim() === ""
                    ? le.length
                    : we);
              }
              function sn(le) {
                return (
                  V ||
                    (le === void 0 && (le = A.substring(it)),
                    vt.push(le),
                    (it = nt),
                    ne(vt),
                    pt && ln()),
                  Ft()
                );
              }
              function Zi(le) {
                (it = le), ne(vt), (vt = []), (yt = A.indexOf(N, it));
              }
              function Ft(le) {
                if (S.header && !k && dt.length && !j) {
                  var we = dt[0],
                    Be = Object.create(null),
                    Ms = new Set(we);
                  let Ts = !1;
                  for (let ui = 0; ui < we.length; ui++) {
                    let on = we[ui];
                    if (
                      Be[
                        (on = T(S.transformHeader)
                          ? S.transformHeader(on, ui)
                          : on)
                      ]
                    ) {
                      let xn,
                        Te = Be[on];
                      for (; (xn = on + "_" + Te), Te++, Ms.has(xn); );
                      Ms.add(xn),
                        (we[ui] = xn),
                        Be[on]++,
                        (Ts = !0),
                        ((at = at === null ? {} : at)[xn] = on);
                    } else (Be[on] = 1), (we[ui] = on);
                    Ms.add(on);
                  }
                  Ts && console.warn("Duplicate headers found and renamed."),
                    (j = !0);
                }
                return {
                  data: dt,
                  errors: qt,
                  meta: {
                    delimiter: v,
                    linebreak: N,
                    aborted: ct,
                    truncated: !!le,
                    cursor: Nt + (k || 0),
                    renamedHeaders: at,
                  },
                };
              }
              function ln() {
                B(Ft()), (dt = []), (qt = []);
              }
            }),
              (this.abort = function () {
                ct = !0;
              }),
              (this.getCharIndex = function () {
                return it;
              });
          }
          function W(S) {
            var v = S.data,
              N = h[v.workerId],
              R = !1;
            if (v.error) N.userError(v.error, v.file);
            else if (v.results && v.results.data) {
              var B = {
                abort: function () {
                  (R = !0),
                    K(v.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: J,
                resume: J,
              };
              if (T(N.userStep)) {
                for (
                  var $ = 0;
                  $ < v.results.data.length &&
                  (N.userStep(
                    {
                      data: v.results.data[$],
                      errors: v.results.errors,
                      meta: v.results.meta,
                    },
                    B
                  ),
                  !R);
                  $++
                );
                delete v.results;
              } else
                T(N.userChunk) &&
                  (N.userChunk(v.results, B, v.file), delete v.results);
            }
            v.finished && !R && K(v.workerId, v.results);
          }
          function K(S, v) {
            var N = h[S];
            T(N.userComplete) && N.userComplete(v), N.terminate(), delete h[S];
          }
          function J() {
            throw new Error("Not implemented.");
          }
          function H(S) {
            if (typeof S != "object" || S === null) return S;
            var v,
              N = Array.isArray(S) ? [] : {};
            for (v in S) N[v] = H(S[v]);
            return N;
          }
          function tt(S, v) {
            return function () {
              S.apply(v, arguments);
            };
          }
          function T(S) {
            return typeof S == "function";
          }
          return (
            (d.parse = function (S, v) {
              var N = (v = v || {}).dynamicTyping || !1;
              if (
                (T(N) && ((v.dynamicTypingFunction = N), (N = {})),
                (v.dynamicTyping = N),
                (v.transform = !!T(v.transform) && v.transform),
                !v.worker || !d.WORKERS_SUPPORTED)
              )
                return (
                  (N = null),
                  d.NODE_STREAM_INPUT,
                  typeof S == "string"
                    ? ((S = ((R) =>
                        R.charCodeAt(0) !== 65279 ? R : R.slice(1))(S)),
                      (N = new (v.download ? b : x)(v)))
                    : S.readable === !0 && T(S.read) && T(S.on)
                    ? (N = new _(v))
                    : ((l.File && S instanceof File) || S instanceof Object) &&
                      (N = new w(v)),
                  N.stream(S)
                );
              ((N = (() => {
                var R;
                return (
                  !!d.WORKERS_SUPPORTED &&
                  ((R = (() => {
                    var B = l.URL || l.webkitURL || null,
                      $ = a.toString();
                    return (
                      d.BLOB_URL ||
                      (d.BLOB_URL = B.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            $,
                            ")();",
                          ],
                          { type: "text/javascript" }
                        )
                      ))
                    );
                  })()),
                  ((R = new l.Worker(R)).onmessage = W),
                  (R.id = p++),
                  (h[R.id] = R))
                );
              })()).userStep = v.step),
                (N.userChunk = v.chunk),
                (N.userComplete = v.complete),
                (N.userError = v.error),
                (v.step = T(v.step)),
                (v.chunk = T(v.chunk)),
                (v.complete = T(v.complete)),
                (v.error = T(v.error)),
                delete v.worker,
                N.postMessage({ input: S, config: v, workerId: N.id });
            }),
            (d.unparse = function (S, v) {
              var N = !1,
                R = !0,
                B = ",",
                $ = `\r
`,
                st = '"',
                at = st + st,
                j = !1,
                G = null,
                et = !1,
                it =
                  ((() => {
                    if (typeof v == "object") {
                      if (
                        (typeof v.delimiter != "string" ||
                          d.BAD_DELIMITERS.filter(function (k) {
                            return v.delimiter.indexOf(k) !== -1;
                          }).length ||
                          (B = v.delimiter),
                        (typeof v.quotes != "boolean" &&
                          typeof v.quotes != "function" &&
                          !Array.isArray(v.quotes)) ||
                          (N = v.quotes),
                        (typeof v.skipEmptyLines != "boolean" &&
                          typeof v.skipEmptyLines != "string") ||
                          (j = v.skipEmptyLines),
                        typeof v.newline == "string" && ($ = v.newline),
                        typeof v.quoteChar == "string" && (st = v.quoteChar),
                        typeof v.header == "boolean" && (R = v.header),
                        Array.isArray(v.columns))
                      ) {
                        if (v.columns.length === 0)
                          throw new Error("Option columns is empty");
                        G = v.columns;
                      }
                      v.escapeChar !== void 0 && (at = v.escapeChar + st),
                        v.escapeFormulae instanceof RegExp
                          ? (et = v.escapeFormulae)
                          : typeof v.escapeFormulae == "boolean" &&
                            v.escapeFormulae &&
                            (et = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(O(st), "g"));
              if (
                (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S))
              ) {
                if (!S.length || Array.isArray(S[0])) return ct(null, S, j);
                if (typeof S[0] == "object")
                  return ct(G || Object.keys(S[0]), S, j);
              } else if (typeof S == "object")
                return (
                  typeof S.data == "string" && (S.data = JSON.parse(S.data)),
                  Array.isArray(S.data) &&
                    (S.fields || (S.fields = (S.meta && S.meta.fields) || G),
                    S.fields ||
                      (S.fields = Array.isArray(S.data[0])
                        ? S.fields
                        : typeof S.data[0] == "object"
                        ? Object.keys(S.data[0])
                        : []),
                    Array.isArray(S.data[0]) ||
                      typeof S.data[0] == "object" ||
                      (S.data = [S.data])),
                  ct(S.fields || [], S.data || [], j)
                );
              throw new Error("Unable to serialize unrecognized input");
              function ct(k, V, nt) {
                var lt = "",
                  ot =
                    (typeof k == "string" && (k = JSON.parse(k)),
                    typeof V == "string" && (V = JSON.parse(V)),
                    Array.isArray(k) && 0 < k.length),
                  bt = !Array.isArray(V[0]);
                if (ot && R) {
                  for (var pt = 0; pt < k.length; pt++)
                    0 < pt && (lt += B), (lt += A(k[pt], pt));
                  0 < V.length && (lt += $);
                }
                for (var dt = 0; dt < V.length; dt++) {
                  var qt = (ot ? k : V[dt]).length,
                    vt = !1,
                    Nt = ot
                      ? Object.keys(V[dt]).length === 0
                      : V[dt].length === 0;
                  if (
                    (nt &&
                      !ot &&
                      (vt =
                        nt === "greedy"
                          ? V[dt].join("").trim() === ""
                          : V[dt].length === 1 && V[dt][0].length === 0),
                    nt === "greedy" && ot)
                  ) {
                    for (var ee = [], St = 0; St < qt; St++) {
                      var At = bt ? k[St] : St;
                      ee.push(V[dt][At]);
                    }
                    vt = ee.join("").trim() === "";
                  }
                  if (!vt) {
                    for (var yt = 0; yt < qt; yt++) {
                      0 < yt && !Nt && (lt += B);
                      var se = ot && bt ? k[yt] : yt;
                      lt += A(V[dt][se], yt);
                    }
                    dt < V.length - 1 && (!nt || (0 < qt && !Nt)) && (lt += $);
                  }
                }
                return lt;
              }
              function A(k, V) {
                var nt, lt;
                return k == null
                  ? ""
                  : k.constructor === Date
                  ? JSON.stringify(k).slice(1, 25)
                  : ((lt = !1),
                    et &&
                      typeof k == "string" &&
                      et.test(k) &&
                      ((k = "'" + k), (lt = !0)),
                    (nt = k.toString().replace(it, at)),
                    (lt =
                      lt ||
                      N === !0 ||
                      (typeof N == "function" && N(k, V)) ||
                      (Array.isArray(N) && N[V]) ||
                      ((ot, bt) => {
                        for (var pt = 0; pt < bt.length; pt++)
                          if (-1 < ot.indexOf(bt[pt])) return !0;
                        return !1;
                      })(nt, d.BAD_DELIMITERS) ||
                      -1 < nt.indexOf(B) ||
                      nt.charAt(0) === " " ||
                      nt.charAt(nt.length - 1) === " ")
                      ? st + nt + st
                      : nt);
              }
            }),
            (d.RECORD_SEP = ""),
            (d.UNIT_SEP = ""),
            (d.BYTE_ORDER_MARK = "\uFEFF"),
            (d.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              d.BYTE_ORDER_MARK,
            ]),
            (d.WORKERS_SUPPORTED = !c && !!l.Worker),
            (d.NODE_STREAM_INPUT = 1),
            (d.LocalChunkSize = 10485760),
            (d.RemoteChunkSize = 5242880),
            (d.DefaultDelimiter = ","),
            (d.Parser = E),
            (d.ParserHandle = M),
            (d.NetworkStreamer = b),
            (d.FileStreamer = w),
            (d.StringStreamer = x),
            (d.ReadableStreamStreamer = _),
            l.jQuery &&
              ((r = l.jQuery).fn.parse = function (S) {
                var v = S.config || {},
                  N = [];
                return (
                  this.each(function ($) {
                    if (
                      !(
                        r(this).prop("tagName").toUpperCase() === "INPUT" &&
                        r(this).attr("type").toLowerCase() === "file" &&
                        l.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var st = 0; st < this.files.length; st++)
                      N.push({
                        file: this.files[st],
                        inputElem: this,
                        instanceConfig: r.extend({}, v),
                      });
                  }),
                  R(),
                  this
                );
                function R() {
                  if (N.length === 0) T(S.complete) && S.complete();
                  else {
                    var $,
                      st,
                      at,
                      j,
                      G = N[0];
                    if (T(S.before)) {
                      var et = S.before(G.file, G.inputElem);
                      if (typeof et == "object") {
                        if (et.action === "abort")
                          return (
                            ($ = "AbortError"),
                            (st = G.file),
                            (at = G.inputElem),
                            (j = et.reason),
                            void (T(S.error) && S.error({ name: $ }, st, at, j))
                          );
                        if (et.action === "skip") return void B();
                        typeof et.config == "object" &&
                          (G.instanceConfig = r.extend(
                            G.instanceConfig,
                            et.config
                          ));
                      } else if (et === "skip") return void B();
                    }
                    var it = G.instanceConfig.complete;
                    (G.instanceConfig.complete = function (ct) {
                      T(it) && it(ct, G.file, G.inputElem), B();
                    }),
                      d.parse(G.file, G.instanceConfig);
                  }
                }
                function B() {
                  N.splice(0, 1), R();
                }
              }),
            u &&
              (l.onmessage = function (S) {
                (S = S.data),
                  d.WORKER_ID === void 0 && S && (d.WORKER_ID = S.workerId),
                  typeof S.input == "string"
                    ? l.postMessage({
                        workerId: d.WORKER_ID,
                        results: d.parse(S.input, S.config),
                        finished: !0,
                      })
                    : ((l.File && S.input instanceof File) ||
                        S.input instanceof Object) &&
                      (S = d.parse(S.input, S.config)) &&
                      l.postMessage({
                        workerId: d.WORKER_ID,
                        results: S,
                        finished: !0,
                      });
              }),
            ((b.prototype = Object.create(m.prototype)).constructor = b),
            ((w.prototype = Object.create(m.prototype)).constructor = w),
            ((x.prototype = Object.create(x.prototype)).constructor = x),
            ((_.prototype = Object.create(m.prototype)).constructor = _),
            d
          );
        });
      })(Or)),
    Or.exports
  );
}
var Av = Tv();
const Ov = ob(Av),
  Fn = ut.createContext(),
  kr = {
    Prefrontal: ["Fp1", "Fp2"],
    Frontal: ["F3", "F4", "F7", "F8", "Fz"],
    Central: ["C3", "C4", "Cz"],
    Temporal: ["T3", "T4", "T5", "T6"],
    Parietal: ["P3", "P4", "Pz"],
    Occipital: ["O1", "O2"],
    Reference: ["A1", "A2"],
    All: [
      "Fp1",
      "Fp2",
      "F3",
      "Fz",
      "F4",
      "F7",
      "F8",
      "C3",
      "Cz",
      "C4",
      "T3",
      "T4",
      "T5",
      "T6",
      "P3",
      "Pz",
      "P4",
      "O1",
      "O2",
      "A1",
      "A2",
    ],
  },
  zv = ({ children: i }) => {
    const [e, a] = ut.useState(!1),
      l = ut.useRef(null),
      [r, c] = ut.useState("vlabEEGnormal_raw.csv"),
      u = ut.useRef(r),
      [h, p] = ut.useState(5),
      [d, m] = ut.useState(500),
      [b, w] = ut.useState({ baseline: !1, powerline: !1, emg: !1 }),
      [x, _] = ut.useState(!1),
      [M, O] = ut.useState(!1),
      [E, W] = ut.useState(!1),
      [K, J] = ut.useState(!1),
      [H, tt] = ut.useState([]),
      [T, S] = ut.useState({
        order: 5,
        characteristic: "IIR",
        filterType: "bandpass",
        windowMode: "windowSync",
        preGain: !1,
        Fs: 500,
        Fc: 10,
        F1: null,
        F2: null,
        Fa: null,
        Fb: null,
        Att: 100,
      }),
      [v, N] = ut.useState([]),
      [R, B] = ut.useState(500),
      [$, st] = ut.useState([]),
      [at, j] = ut.useState(null),
      [G, et] = ut.useState(!1),
      [it, ct] = ut.useState([]),
      [A, k] = ut.useState("Frontal"),
      [V, nt] = ut.useState(kr.Frontal);
    ut.useEffect(() => {
      nt(kr[A]);
    }, [A]),
      ut.useEffect(() => {
        Ov.parse(r, {
          download: !0,
          skipEmptyLines: !0,
          complete: (ot) => {
            const bt = ot.data;
            if (!bt.length) return;
            const pt = bt[0],
              dt = pt.indexOf("Time");
            ct([
              "#ff4d4d",
              "#4da6ff",
              "#66ff66",
              "#ffcc00",
              "#cc66ff",
              "#00cccc",
              "#ff9966",
              "#9999ff",
              "#ff6666",
              "#66ccff",
              "#99ff99",
              "#ffd966",
              "#d699ff",
              "#00ffcc",
              "#ffb366",
              "#b3b3ff",
              "#ff8080",
              "#80bfff",
              "#80ffbf",
              "#ff80ff",
              "#a6a6ff",
              "#ffcc99",
              "#66ffcc",
              "#cccccc",
            ]);
            const vt = [
                "Fp1",
                "Fp2",
                "F3",
                "Fz",
                "F4",
                "F7",
                "F8",
                "C3",
                "Cz",
                "C4",
                "T3",
                "T4",
                "T5",
                "T6",
                "P3",
                "Pz",
                "P4",
                "O1",
                "O2",
                "A1",
                "A2",
              ],
              Nt = vt.map((yt) => pt.indexOf(yt)),
              ee = parseFloat(bt[1][dt]) || 0,
              St = bt.slice(1).map((yt) => {
                const se = { x: parseFloat(yt[dt]) - ee };
                return (
                  vt.forEach((Ot, Ut) => {
                    se[Ot] = parseFloat(yt[Nt[Ut]]) || 0;
                  }),
                  se
                );
              });
            N(St);
            const At = St.length > 1 ? St[1].x - St[0].x : 0.002;
            B(At > 0 ? 1 / At : 500);
          },
          error: (ot) => console.error("CSV parse error", ot),
        });
      }, [r]);
    const lt = () => {};
    return q.jsx(Fn.Provider, {
      value: {
        showInstruction: e,
        setShowInstruction: a,
        buttonRef: l,
        generateECG: x,
        setGenerateECG: _,
        noisyECG: H,
        setNoisyECG: tt,
        filteredECG: E,
        setFilteredECG: W,
        config: T,
        setConfig: S,
        time: h,
        setTime: p,
        userFs: d,
        setUserFs: m,
        csvFilePath: r,
        prevPathRef: u,
        setCsvFilePath: c,
        rawSamples: v,
        originalFs: R,
        noise: b,
        setNoise: w,
        applyNoise: lt,
        applyNoiseTrigger: M,
        setApplyNoiseTrigger: O,
        freqResponse: at,
        setFreqResponse: j,
        applyFreqTrigger: G,
        setApplyFreqTrigger: et,
        colors: it,
        setColors: ct,
        selectedLobe: A,
        setSelectedLobe: k,
        selectedChannels: V,
        setSelectedChannels: nt,
        applypsdTrigger: K,
        setApplypsdTrigger: J,
        filteredSamples: $,
        setFilteredSamples: st,
      },
      children: i,
    });
  },
  Dv = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ut.useContext(Fn),
      l = () => {
        e(!i);
      };
    return q.jsx("div", {
      className: _l.Container,
      children: q.jsxs("div", {
        className: _l.panelContainer,
        children: [
          q.jsx("h1", {
            children: "Application and Usage of Filters on EEG Signal",
          }),
          q.jsx("div", {
            className: _l.buttonContainer,
            children: q.jsxs("button", {
              ref: a,
              className: _l.panelButton,
              onClick: l,
              children: [
                q.jsx("span", { className: _l.buttonIcon, children: "ℹ️" }),
                "Instruction",
              ],
            }),
          }),
        ],
      }),
    });
  },
  kv = "_box_xbv2t_15",
  Rv = "_container_xbv2t_25",
  Bv = "_card_xbv2t_115",
  ji = { box: kv, container: Rv, card: Bv },
  Lv = () =>
    q.jsx("div", {
      className: ji.box,
      children: q.jsxs("div", {
        className: ji.container,
        children: [
          q.jsx("div", {
            className: ji.card,
            children: q.jsx("h1", { children: "INSTRUCTIONS" }),
          }),
          q.jsx("div", {
            className: ji.card,
            children: q.jsxs("p", {
              children: [
                q.jsx("span", { children: "STEP 1: " }),
                "Select an ",
                q.jsx("b", { children: "EEG Dataset" }),
                " from the dropdown menu. Choose the desired ",
                q.jsx("b", { children: "Brain Lobe" }),
                " for EEG recording. Adjust the ",
                q.jsx("b", { children: "Duration" }),
                " and ",
                q.jsx("b", { children: "Sampling Rate" }),
                " sliders as required.",
              ],
            }),
          }),
          q.jsx("div", {
            className: ji.card,
            children: q.jsxs("p", {
              children: [
                q.jsx("span", { children: "STEP 2: " }),
                "Click the ",
                q.jsx("b", { children: '"Generate EEG Signal"' }),
                " button to visualize the original unfiltered EEG signal.",
              ],
            }),
          }),
          q.jsx("div", {
            className: ji.card,
            children: q.jsxs("p", {
              children: [
                q.jsx("span", { children: "STEP 3: " }),
                "Configure the filter settings in the",
                " ",
                q.jsx("b", { children: "Filter Design" }),
                " section. Choose the ",
                q.jsx("b", { children: "Algorithm" }),
                " (IIR/FIR),",
                " ",
                q.jsx("b", { children: "Filter Type" }),
                " (Lowpass, Highpass, etc.), and set the",
                " ",
                q.jsx("b", { children: "Cutoff Frequencies" }),
                " and ",
                q.jsx("b", { children: "Order" }),
                ".",
              ],
            }),
          }),
          q.jsx("div", {
            className: ji.card,
            children: q.jsxs("p", {
              children: [
                q.jsx("span", { children: "STEP 4: " }),
                "Click the ",
                q.jsx("b", { children: '"Apply Filter"' }),
                " button to process the noisy signal. Compare the ",
                q.jsx("b", { children: "Filtered EEG" }),
                " graph with Original signals to evaluate the filter's performance.",
              ],
            }),
          }),
          q.jsx("div", {
            className: ji.card,
            children: q.jsxs("p", {
              children: [
                q.jsx("span", { children: "STEP 5: " }),
                "Click the ",
                q.jsx("b", { children: '"Compute PSD"' }),
                " button to visualize the Power Spectral Density (PSD) of the Noisy, and Filtered signals. Observe the frequency components and compare the filter's effect on the signal's spectrum.",
              ],
            }),
          }),
        ],
      }),
    }),
  Hv = "_leftPanelContainer_1t2e1_1",
  jv = "_container_1t2e1_29",
  Nv = "_psdContainer_1t2e1_49",
  Sf = { leftPanelContainer: Hv, container: jv, psdContainer: Nv },
  Uv = "_signalContainer_9l95f_1",
  Fv = { signalContainer: Uv };
function Vl(i) {
  return (i + 0.5) | 0;
}
const Ui = (i, e, a) => Math.max(Math.min(i, a), e);
function Tl(i) {
  return Ui(Vl(i * 2.55), 0, 255);
}
function Xi(i) {
  return Ui(Vl(i * 255), 0, 255);
}
function ri(i) {
  return Ui(Vl(i / 2.55) / 100, 0, 1);
}
function jm(i) {
  return Ui(Vl(i * 100), 0, 100);
}
const yn = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  jf = [..."0123456789ABCDEF"],
  qv = (i) => jf[i & 15],
  Yv = (i) => jf[(i & 240) >> 4] + jf[i & 15],
  gr = (i) => (i & 240) >> 4 === (i & 15),
  Vv = (i) => gr(i.r) && gr(i.g) && gr(i.b) && gr(i.a);
function Gv(i) {
  var e = i.length,
    a;
  return (
    i[0] === "#" &&
      (e === 4 || e === 5
        ? (a = {
            r: 255 & (yn[i[1]] * 17),
            g: 255 & (yn[i[2]] * 17),
            b: 255 & (yn[i[3]] * 17),
            a: e === 5 ? yn[i[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (a = {
            r: (yn[i[1]] << 4) | yn[i[2]],
            g: (yn[i[3]] << 4) | yn[i[4]],
            b: (yn[i[5]] << 4) | yn[i[6]],
            a: e === 9 ? (yn[i[7]] << 4) | yn[i[8]] : 255,
          })),
    a
  );
}
const Xv = (i, e) => (i < 255 ? e(i) : "");
function Qv(i) {
  var e = Vv(i) ? qv : Yv;
  return i ? "#" + e(i.r) + e(i.g) + e(i.b) + Xv(i.a, e) : void 0;
}
const Zv =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function rb(i, e, a) {
  const l = e * Math.min(a, 1 - a),
    r = (c, u = (c + i / 30) % 12) =>
      a - l * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [r(0), r(8), r(4)];
}
function Kv(i, e, a) {
  const l = (r, c = (r + i / 60) % 6) =>
    a - a * e * Math.max(Math.min(c, 4 - c, 1), 0);
  return [l(5), l(3), l(1)];
}
function Pv(i, e, a) {
  const l = rb(i, 1, 0.5);
  let r;
  for (e + a > 1 && ((r = 1 / (e + a)), (e *= r), (a *= r)), r = 0; r < 3; r++)
    (l[r] *= 1 - e - a), (l[r] += e);
  return l;
}
function Iv(i, e, a, l, r) {
  return i === r
    ? (e - a) / l + (e < a ? 6 : 0)
    : e === r
    ? (a - i) / l + 2
    : (i - e) / l + 4;
}
function Pf(i) {
  const a = i.r / 255,
    l = i.g / 255,
    r = i.b / 255,
    c = Math.max(a, l, r),
    u = Math.min(a, l, r),
    h = (c + u) / 2;
  let p, d, m;
  return (
    c !== u &&
      ((m = c - u),
      (d = h > 0.5 ? m / (2 - c - u) : m / (c + u)),
      (p = Iv(a, l, r, m, c)),
      (p = p * 60 + 0.5)),
    [p | 0, d || 0, h]
  );
}
function If(i, e, a, l) {
  return (Array.isArray(e) ? i(e[0], e[1], e[2]) : i(e, a, l)).map(Xi);
}
function Wf(i, e, a) {
  return If(rb, i, e, a);
}
function Wv(i, e, a) {
  return If(Pv, i, e, a);
}
function $v(i, e, a) {
  return If(Kv, i, e, a);
}
function cb(i) {
  return ((i % 360) + 360) % 360;
}
function Jv(i) {
  const e = Zv.exec(i);
  let a = 255,
    l;
  if (!e) return;
  e[5] !== l && (a = e[6] ? Tl(+e[5]) : Xi(+e[5]));
  const r = cb(+e[2]),
    c = +e[3] / 100,
    u = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (l = Wv(r, c, u))
      : e[1] === "hsv"
      ? (l = $v(r, c, u))
      : (l = Wf(r, c, u)),
    { r: l[0], g: l[1], b: l[2], a }
  );
}
function tw(i, e) {
  var a = Pf(i);
  (a[0] = cb(a[0] + e)), (a = Wf(a)), (i.r = a[0]), (i.g = a[1]), (i.b = a[2]);
}
function ew(i) {
  if (!i) return;
  const e = Pf(i),
    a = e[0],
    l = jm(e[1]),
    r = jm(e[2]);
  return i.a < 255
    ? `hsla(${a}, ${l}%, ${r}%, ${ri(i.a)})`
    : `hsl(${a}, ${l}%, ${r}%)`;
}
const Nm = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Um = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function nw() {
  const i = {},
    e = Object.keys(Um),
    a = Object.keys(Nm);
  let l, r, c, u, h;
  for (l = 0; l < e.length; l++) {
    for (u = h = e[l], r = 0; r < a.length; r++)
      (c = a[r]), (h = h.replace(c, Nm[c]));
    (c = parseInt(Um[u], 16)),
      (i[h] = [(c >> 16) & 255, (c >> 8) & 255, c & 255]);
  }
  return i;
}
let pr;
function iw(i) {
  pr || ((pr = nw()), (pr.transparent = [0, 0, 0, 0]));
  const e = pr[i.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const aw =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function sw(i) {
  const e = aw.exec(i);
  let a = 255,
    l,
    r,
    c;
  if (e) {
    if (e[7] !== l) {
      const u = +e[7];
      a = e[8] ? Tl(u) : Ui(u * 255, 0, 255);
    }
    return (
      (l = +e[1]),
      (r = +e[3]),
      (c = +e[5]),
      (l = 255 & (e[2] ? Tl(l) : Ui(l, 0, 255))),
      (r = 255 & (e[4] ? Tl(r) : Ui(r, 0, 255))),
      (c = 255 & (e[6] ? Tl(c) : Ui(c, 0, 255))),
      { r: l, g: r, b: c, a }
    );
  }
}
function lw(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ri(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const Cf = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  fs = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function ow(i, e, a) {
  const l = fs(ri(i.r)),
    r = fs(ri(i.g)),
    c = fs(ri(i.b));
  return {
    r: Xi(Cf(l + a * (fs(ri(e.r)) - l))),
    g: Xi(Cf(r + a * (fs(ri(e.g)) - r))),
    b: Xi(Cf(c + a * (fs(ri(e.b)) - c))),
    a: i.a + a * (e.a - i.a),
  };
}
function mr(i, e, a) {
  if (i) {
    let l = Pf(i);
    (l[e] = Math.max(0, Math.min(l[e] + l[e] * a, e === 0 ? 360 : 1))),
      (l = Wf(l)),
      (i.r = l[0]),
      (i.g = l[1]),
      (i.b = l[2]);
  }
}
function ub(i, e) {
  return i && Object.assign(e || {}, i);
}
function Fm(i) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((e = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (e.a = Xi(i[3])))
      : ((e = ub(i, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Xi(e.a))),
    e
  );
}
function rw(i) {
  return i.charAt(0) === "r" ? sw(i) : Jv(i);
}
class Hl {
  constructor(e) {
    if (e instanceof Hl) return e;
    const a = typeof e;
    let l;
    a === "object"
      ? (l = Fm(e))
      : a === "string" && (l = Gv(e) || iw(e) || rw(e)),
      (this._rgb = l),
      (this._valid = !!l);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = ub(this._rgb);
    return e && (e.a = ri(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Fm(e);
  }
  rgbString() {
    return this._valid ? lw(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Qv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? ew(this._rgb) : void 0;
  }
  mix(e, a) {
    if (e) {
      const l = this.rgb,
        r = e.rgb;
      let c;
      const u = a === c ? 0.5 : a,
        h = 2 * u - 1,
        p = l.a - r.a,
        d = ((h * p === -1 ? h : (h + p) / (1 + h * p)) + 1) / 2;
      (c = 1 - d),
        (l.r = 255 & (d * l.r + c * r.r + 0.5)),
        (l.g = 255 & (d * l.g + c * r.g + 0.5)),
        (l.b = 255 & (d * l.b + c * r.b + 0.5)),
        (l.a = u * l.a + (1 - u) * r.a),
        (this.rgb = l);
    }
    return this;
  }
  interpolate(e, a) {
    return e && (this._rgb = ow(this._rgb, e._rgb, a)), this;
  }
  clone() {
    return new Hl(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = Xi(e)), this;
  }
  clearer(e) {
    const a = this._rgb;
    return (a.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      a = Vl(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = a), this;
  }
  opaquer(e) {
    const a = this._rgb;
    return (a.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return mr(this._rgb, 2, e), this;
  }
  darken(e) {
    return mr(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return mr(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return mr(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return tw(this._rgb, e), this;
  }
}
function si() {}
const cw = (() => {
  let i = 0;
  return () => i++;
})();
function Pt(i) {
  return i == null;
}
function Me(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const e = Object.prototype.toString.call(i);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Lt(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function wn(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Rn(i, e) {
  return wn(i) ? i : e;
}
function Dt(i, e) {
  return typeof i > "u" ? e : i;
}
const uw = (i, e) =>
  typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * e : +i;
function Jt(i, e, a) {
  if (i && typeof i.call == "function") return i.apply(a, e);
}
function Gt(i, e, a, l) {
  let r, c, u;
  if (Me(i)) for (c = i.length, r = 0; r < c; r++) e.call(a, i[r], r);
  else if (Lt(i))
    for (u = Object.keys(i), c = u.length, r = 0; r < c; r++)
      e.call(a, i[u[r]], u[r]);
}
function Rr(i, e) {
  let a, l, r, c;
  if (!i || !e || i.length !== e.length) return !1;
  for (a = 0, l = i.length; a < l; ++a)
    if (
      ((r = i[a]),
      (c = e[a]),
      r.datasetIndex !== c.datasetIndex || r.index !== c.index)
    )
      return !1;
  return !0;
}
function Br(i) {
  if (Me(i)) return i.map(Br);
  if (Lt(i)) {
    const e = Object.create(null),
      a = Object.keys(i),
      l = a.length;
    let r = 0;
    for (; r < l; ++r) e[a[r]] = Br(i[a[r]]);
    return e;
  }
  return i;
}
function fb(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function fw(i, e, a, l) {
  if (!fb(i)) return;
  const r = e[i],
    c = a[i];
  Lt(r) && Lt(c) ? jl(r, c, l) : (e[i] = Br(c));
}
function jl(i, e, a) {
  const l = Me(e) ? e : [e],
    r = l.length;
  if (!Lt(i)) return i;
  a = a || {};
  const c = a.merger || fw;
  let u;
  for (let h = 0; h < r; ++h) {
    if (((u = l[h]), !Lt(u))) continue;
    const p = Object.keys(u);
    for (let d = 0, m = p.length; d < m; ++d) c(p[d], i, u, a);
  }
  return i;
}
function Dl(i, e) {
  return jl(i, e, { merger: hw });
}
function hw(i, e, a) {
  if (!fb(i)) return;
  const l = e[i],
    r = a[i];
  Lt(l) && Lt(r)
    ? Dl(l, r)
    : Object.prototype.hasOwnProperty.call(e, i) || (e[i] = Br(r));
}
const qm = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function dw(i) {
  const e = i.split("."),
    a = [];
  let l = "";
  for (const r of e)
    (l += r),
      l.endsWith("\\") ? (l = l.slice(0, -1) + ".") : (a.push(l), (l = ""));
  return a;
}
function gw(i) {
  const e = dw(i);
  return (a) => {
    for (const l of e) {
      if (l === "") break;
      a = a && a[l];
    }
    return a;
  };
}
function Lr(i, e) {
  return (qm[e] || (qm[e] = gw(e)))(i);
}
function $f(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Hr = (i) => typeof i < "u",
  Qi = (i) => typeof i == "function",
  Ym = (i, e) => {
    if (i.size !== e.size) return !1;
    for (const a of i) if (!e.has(a)) return !1;
    return !0;
  };
function pw(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Oe = Math.PI,
  Nn = 2 * Oe,
  mw = Nn + Oe,
  jr = Number.POSITIVE_INFINITY,
  bw = Oe / 180,
  Mn = Oe / 2,
  ha = Oe / 4,
  Vm = (Oe * 2) / 3,
  hb = Math.log10,
  gs = Math.sign;
function kl(i, e, a) {
  return Math.abs(i - e) < a;
}
function Gm(i) {
  const e = Math.round(i);
  i = kl(i, e, i / 1e3) ? e : i;
  const a = Math.pow(10, Math.floor(hb(i))),
    l = i / a;
  return (l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : 10) * a;
}
function yw(i) {
  const e = [],
    a = Math.sqrt(i);
  let l;
  for (l = 1; l < a; l++) i % l === 0 && (e.push(l), e.push(i / l));
  return a === (a | 0) && e.push(a), e.sort((r, c) => r - c).pop(), e;
}
function vw(i) {
  return (
    typeof i == "symbol" ||
    (typeof i == "object" &&
      i !== null &&
      !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i))
  );
}
function Nl(i) {
  return !vw(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function ww(i, e) {
  const a = Math.round(i);
  return a - e <= i && a + e >= i;
}
function _w(i, e, a) {
  let l, r, c;
  for (l = 0, r = i.length; l < r; l++)
    (c = i[l][a]),
      isNaN(c) || ((e.min = Math.min(e.min, c)), (e.max = Math.max(e.max, c)));
}
function ya(i) {
  return i * (Oe / 180);
}
function xw(i) {
  return i * (180 / Oe);
}
function Xm(i) {
  if (!wn(i)) return;
  let e = 1,
    a = 0;
  for (; Math.round(i * e) / e !== i; ) (e *= 10), a++;
  return a;
}
function Sw(i, e) {
  const a = e.x - i.x,
    l = e.y - i.y,
    r = Math.sqrt(a * a + l * l);
  let c = Math.atan2(l, a);
  return c < -0.5 * Oe && (c += Nn), { angle: c, distance: r };
}
function Nf(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function Cw(i, e) {
  return ((i - e + mw) % Nn) - Oe;
}
function Ni(i) {
  return ((i % Nn) + Nn) % Nn;
}
function db(i, e, a, l) {
  const r = Ni(i),
    c = Ni(e),
    u = Ni(a),
    h = Ni(c - r),
    p = Ni(u - r),
    d = Ni(r - c),
    m = Ni(r - u);
  return r === c || r === u || (l && c === u) || (h > p && d < m);
}
function vn(i, e, a) {
  return Math.max(e, Math.min(a, i));
}
function Ew(i) {
  return vn(i, -32768, 32767);
}
function Al(i, e, a, l = 1e-6) {
  return i >= Math.min(e, a) - l && i <= Math.max(e, a) + l;
}
function Jf(i, e, a) {
  a = a || ((u) => i[u] < e);
  let l = i.length - 1,
    r = 0,
    c;
  for (; l - r > 1; ) (c = (r + l) >> 1), a(c) ? (r = c) : (l = c);
  return { lo: r, hi: l };
}
const va = (i, e, a, l) =>
    Jf(
      i,
      a,
      l
        ? (r) => {
            const c = i[r][e];
            return c < a || (c === a && i[r + 1][e] === a);
          }
        : (r) => i[r][e] < a
    ),
  Mw = (i, e, a) => Jf(i, a, (l) => i[l][e] >= a);
function Tw(i, e, a) {
  let l = 0,
    r = i.length;
  for (; l < r && i[l] < e; ) l++;
  for (; r > l && i[r - 1] > a; ) r--;
  return l > 0 || r < i.length ? i.slice(l, r) : i;
}
const gb = ["push", "pop", "shift", "splice", "unshift"];
function Aw(i, e) {
  if (i._chartjs) {
    i._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    gb.forEach((a) => {
      const l = "_onData" + $f(a),
        r = i[a];
      Object.defineProperty(i, a, {
        configurable: !0,
        enumerable: !1,
        value(...c) {
          const u = r.apply(this, c);
          return (
            i._chartjs.listeners.forEach((h) => {
              typeof h[l] == "function" && h[l](...c);
            }),
            u
          );
        },
      });
    });
}
function Qm(i, e) {
  const a = i._chartjs;
  if (!a) return;
  const l = a.listeners,
    r = l.indexOf(e);
  r !== -1 && l.splice(r, 1),
    !(l.length > 0) &&
      (gb.forEach((c) => {
        delete i[c];
      }),
      delete i._chartjs);
}
function Ow(i) {
  const e = new Set(i);
  return e.size === i.length ? i : Array.from(e);
}
const pb = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function mb(i, e) {
  let a = [],
    l = !1;
  return function (...r) {
    (a = r),
      l ||
        ((l = !0),
        pb.call(window, () => {
          (l = !1), i.apply(e, a);
        }));
  };
}
function zw(i, e) {
  let a;
  return function (...l) {
    return (
      e ? (clearTimeout(a), (a = setTimeout(i, e, l))) : i.apply(this, l), e
    );
  };
}
const bb = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  tn = (i, e, a) => (i === "start" ? e : i === "end" ? a : (e + a) / 2),
  Dw = (i, e, a, l) =>
    i === (l ? "left" : "right") ? a : i === "center" ? (e + a) / 2 : e;
function kw(i, e, a) {
  const l = e.length;
  let r = 0,
    c = l;
  if (i._sorted) {
    const { iScale: u, vScale: h, _parsed: p } = i,
      d = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      m = u.axis,
      { min: b, max: w, minDefined: x, maxDefined: _ } = u.getUserBounds();
    if (x) {
      if (
        ((r = Math.min(
          va(p, m, b).lo,
          a ? l : va(e, m, u.getPixelForValue(b)).lo
        )),
        d)
      ) {
        const M = p
          .slice(0, r + 1)
          .reverse()
          .findIndex((O) => !Pt(O[h.axis]));
        r -= Math.max(0, M);
      }
      r = vn(r, 0, l - 1);
    }
    if (_) {
      let M = Math.max(
        va(p, u.axis, w, !0).hi + 1,
        a ? 0 : va(e, m, u.getPixelForValue(w), !0).hi + 1
      );
      if (d) {
        const O = p.slice(M - 1).findIndex((E) => !Pt(E[h.axis]));
        M += Math.max(0, O);
      }
      c = vn(M, r, l) - r;
    } else c = l - r;
  }
  return { start: r, count: c };
}
function Rw(i) {
  const { xScale: e, yScale: a, _scaleRanges: l } = i,
    r = { xmin: e.min, xmax: e.max, ymin: a.min, ymax: a.max };
  if (!l) return (i._scaleRanges = r), !0;
  const c =
    l.xmin !== e.min ||
    l.xmax !== e.max ||
    l.ymin !== a.min ||
    l.ymax !== a.max;
  return Object.assign(l, r), c;
}
const br = (i) => i === 0 || i === 1,
  Zm = (i, e, a) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - e) * Nn) / a)),
  Km = (i, e, a) => Math.pow(2, -10 * i) * Math.sin(((i - e) * Nn) / a) + 1,
  Rl = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * Mn) + 1,
    easeOutSine: (i) => Math.sin(i * Mn),
    easeInOutSine: (i) => -0.5 * (Math.cos(Oe * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      br(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (br(i) ? i : Zm(i, 0.075, 0.3)),
    easeOutElastic: (i) => (br(i) ? i : Km(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return br(i)
        ? i
        : i < 0.5
        ? 0.5 * Zm(i * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Km(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let e = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((e *= 1.525) + 1) * i - e))
        : 0.5 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2);
    },
    easeInBounce: (i) => 1 - Rl.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? Rl.easeInBounce(i * 2) * 0.5
        : Rl.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function th(i) {
  if (i && typeof i == "object") {
    const e = i.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Pm(i) {
  return th(i) ? i : new Hl(i);
}
function Ef(i) {
  return th(i) ? i : new Hl(i).saturate(0.5).darken(0.1).hexString();
}
const Bw = ["x", "y", "borderWidth", "radius", "tension"],
  Lw = ["color", "borderColor", "backgroundColor"];
function Hw(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    i.set("animations", {
      colors: { type: "color", properties: Lw },
      numbers: { type: "number", properties: Bw },
    }),
    i.describe("animations", { _fallback: "animation" }),
    i.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    });
}
function jw(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Im = new Map();
function Nw(i, e) {
  e = e || {};
  const a = i + JSON.stringify(e);
  let l = Im.get(a);
  return l || ((l = new Intl.NumberFormat(i, e)), Im.set(a, l)), l;
}
function yb(i, e, a) {
  return Nw(e, a).format(i);
}
const Uw = {
  values(i) {
    return Me(i) ? i : "" + i;
  },
  numeric(i, e, a) {
    if (i === 0) return "0";
    const l = this.chart.options.locale;
    let r,
      c = i;
    if (a.length > 1) {
      const d = Math.max(Math.abs(a[0].value), Math.abs(a[a.length - 1].value));
      (d < 1e-4 || d > 1e15) && (r = "scientific"), (c = Fw(i, a));
    }
    const u = hb(Math.abs(c)),
      h = isNaN(u) ? 1 : Math.max(Math.min(-1 * Math.floor(u), 20), 0),
      p = { notation: r, minimumFractionDigits: h, maximumFractionDigits: h };
    return Object.assign(p, this.options.ticks.format), yb(i, l, p);
  },
};
function Fw(i, e) {
  let a = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(a) >= 1 && i !== Math.floor(i) && (a = i - Math.floor(i)), a;
}
var vb = { formatters: Uw };
function qw(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, a) => a.lineWidth,
      tickColor: (e, a) => a.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: vb.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    i.describe("scales", { _fallback: "scale" }),
    i.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const xa = Object.create(null),
  Uf = Object.create(null);
function Bl(i, e) {
  if (!e) return i;
  const a = e.split(".");
  for (let l = 0, r = a.length; l < r; ++l) {
    const c = a[l];
    i = i[c] || (i[c] = Object.create(null));
  }
  return i;
}
function Mf(i, e, a) {
  return typeof e == "string" ? jl(Bl(i, e), a) : jl(Bl(i, ""), e);
}
class Yw {
  constructor(e, a) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (l) => l.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (l, r) => Ef(r.backgroundColor)),
      (this.hoverBorderColor = (l, r) => Ef(r.borderColor)),
      (this.hoverColor = (l, r) => Ef(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(a);
  }
  set(e, a) {
    return Mf(this, e, a);
  }
  get(e) {
    return Bl(this, e);
  }
  describe(e, a) {
    return Mf(Uf, e, a);
  }
  override(e, a) {
    return Mf(xa, e, a);
  }
  route(e, a, l, r) {
    const c = Bl(this, e),
      u = Bl(this, l),
      h = "_" + a;
    Object.defineProperties(c, {
      [h]: { value: c[a], writable: !0 },
      [a]: {
        enumerable: !0,
        get() {
          const p = this[h],
            d = u[r];
          return Lt(p) ? Object.assign({}, d, p) : Dt(p, d);
        },
        set(p) {
          this[h] = p;
        },
      },
    });
  }
  apply(e) {
    e.forEach((a) => a(this));
  }
}
var ue = new Yw(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Hw, jw, qw]
);
function Vw(i) {
  return !i || Pt(i.size) || Pt(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function Wm(i, e, a, l, r) {
  let c = e[r];
  return (
    c || ((c = e[r] = i.measureText(r).width), a.push(r)), c > l && (l = c), l
  );
}
function da(i, e, a) {
  const l = i.currentDevicePixelRatio,
    r = a !== 0 ? Math.max(a / 2, 0.5) : 0;
  return Math.round((e - r) * l) / l + r;
}
function $m(i, e) {
  (!e && !i) ||
    ((e = e || i.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, i.width, i.height),
    e.restore());
}
function Ff(i, e, a, l) {
  wb(i, e, a, l, null);
}
function wb(i, e, a, l, r) {
  let c, u, h, p, d, m, b, w;
  const x = e.pointStyle,
    _ = e.rotation,
    M = e.radius;
  let O = (_ || 0) * bw;
  if (
    x &&
    typeof x == "object" &&
    ((c = x.toString()),
    c === "[object HTMLImageElement]" || c === "[object HTMLCanvasElement]")
  ) {
    i.save(),
      i.translate(a, l),
      i.rotate(O),
      i.drawImage(x, -x.width / 2, -x.height / 2, x.width, x.height),
      i.restore();
    return;
  }
  if (!(isNaN(M) || M <= 0)) {
    switch ((i.beginPath(), x)) {
      default:
        r ? i.ellipse(a, l, r / 2, M, 0, 0, Nn) : i.arc(a, l, M, 0, Nn),
          i.closePath();
        break;
      case "triangle":
        (m = r ? r / 2 : M),
          i.moveTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          (O += Vm),
          i.lineTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          (O += Vm),
          i.lineTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          i.closePath();
        break;
      case "rectRounded":
        (d = M * 0.516),
          (p = M - d),
          (u = Math.cos(O + ha) * p),
          (b = Math.cos(O + ha) * (r ? r / 2 - d : p)),
          (h = Math.sin(O + ha) * p),
          (w = Math.sin(O + ha) * (r ? r / 2 - d : p)),
          i.arc(a - b, l - h, d, O - Oe, O - Mn),
          i.arc(a + w, l - u, d, O - Mn, O),
          i.arc(a + b, l + h, d, O, O + Mn),
          i.arc(a - w, l + u, d, O + Mn, O + Oe),
          i.closePath();
        break;
      case "rect":
        if (!_) {
          (p = Math.SQRT1_2 * M),
            (m = r ? r / 2 : p),
            i.rect(a - m, l - p, 2 * m, 2 * p);
          break;
        }
        O += ha;
      case "rectRot":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (u = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (w = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + w, l - u),
          i.lineTo(a + b, l + h),
          i.lineTo(a - w, l + u),
          i.closePath();
        break;
      case "crossRot":
        O += ha;
      case "cross":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (u = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (w = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + w, l - u),
          i.lineTo(a - w, l + u);
        break;
      case "star":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (u = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (w = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + w, l - u),
          i.lineTo(a - w, l + u),
          (O += ha),
          (b = Math.cos(O) * (r ? r / 2 : M)),
          (u = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (w = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + w, l - u),
          i.lineTo(a - w, l + u);
        break;
      case "line":
        (u = r ? r / 2 : Math.cos(O) * M),
          (h = Math.sin(O) * M),
          i.moveTo(a - u, l - h),
          i.lineTo(a + u, l + h);
        break;
      case "dash":
        i.moveTo(a, l),
          i.lineTo(a + Math.cos(O) * (r ? r / 2 : M), l + Math.sin(O) * M);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), e.borderWidth > 0 && i.stroke();
  }
}
function Ul(i, e, a) {
  return (
    (a = a || 0.5),
    !e ||
      (i &&
        i.x > e.left - a &&
        i.x < e.right + a &&
        i.y > e.top - a &&
        i.y < e.bottom + a)
  );
}
function eh(i, e) {
  i.save(),
    i.beginPath(),
    i.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    i.clip();
}
function nh(i) {
  i.restore();
}
function Gw(i, e, a, l, r) {
  if (!e) return i.lineTo(a.x, a.y);
  if (r === "middle") {
    const c = (e.x + a.x) / 2;
    i.lineTo(c, e.y), i.lineTo(c, a.y);
  } else (r === "after") != !!l ? i.lineTo(e.x, a.y) : i.lineTo(a.x, e.y);
  i.lineTo(a.x, a.y);
}
function Xw(i, e, a, l) {
  if (!e) return i.lineTo(a.x, a.y);
  i.bezierCurveTo(
    l ? e.cp1x : e.cp2x,
    l ? e.cp1y : e.cp2y,
    l ? a.cp2x : a.cp1x,
    l ? a.cp2y : a.cp1y,
    a.x,
    a.y
  );
}
function Qw(i, e) {
  e.translation && i.translate(e.translation[0], e.translation[1]),
    Pt(e.rotation) || i.rotate(e.rotation),
    e.color && (i.fillStyle = e.color),
    e.textAlign && (i.textAlign = e.textAlign),
    e.textBaseline && (i.textBaseline = e.textBaseline);
}
function Zw(i, e, a, l, r) {
  if (r.strikethrough || r.underline) {
    const c = i.measureText(l),
      u = e - c.actualBoundingBoxLeft,
      h = e + c.actualBoundingBoxRight,
      p = a - c.actualBoundingBoxAscent,
      d = a + c.actualBoundingBoxDescent,
      m = r.strikethrough ? (p + d) / 2 : d;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = r.decorationWidth || 2),
      i.moveTo(u, m),
      i.lineTo(h, m),
      i.stroke();
  }
}
function Kw(i, e) {
  const a = i.fillStyle;
  (i.fillStyle = e.color),
    i.fillRect(e.left, e.top, e.width, e.height),
    (i.fillStyle = a);
}
function Nr(i, e, a, l, r, c = {}) {
  const u = Me(e) ? e : [e],
    h = c.strokeWidth > 0 && c.strokeColor !== "";
  let p, d;
  for (i.save(), i.font = r.string, Qw(i, c), p = 0; p < u.length; ++p)
    (d = u[p]),
      c.backdrop && Kw(i, c.backdrop),
      h &&
        (c.strokeColor && (i.strokeStyle = c.strokeColor),
        Pt(c.strokeWidth) || (i.lineWidth = c.strokeWidth),
        i.strokeText(d, a, l, c.maxWidth)),
      i.fillText(d, a, l, c.maxWidth),
      Zw(i, a, l, d, c),
      (l += Number(r.lineHeight));
  i.restore();
}
function qf(i, e) {
  const { x: a, y: l, w: r, h: c, radius: u } = e;
  i.arc(a + u.topLeft, l + u.topLeft, u.topLeft, 1.5 * Oe, Oe, !0),
    i.lineTo(a, l + c - u.bottomLeft),
    i.arc(a + u.bottomLeft, l + c - u.bottomLeft, u.bottomLeft, Oe, Mn, !0),
    i.lineTo(a + r - u.bottomRight, l + c),
    i.arc(
      a + r - u.bottomRight,
      l + c - u.bottomRight,
      u.bottomRight,
      Mn,
      0,
      !0
    ),
    i.lineTo(a + r, l + u.topRight),
    i.arc(a + r - u.topRight, l + u.topRight, u.topRight, 0, -Mn, !0),
    i.lineTo(a + u.topLeft, l);
}
const Pw = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Iw = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ww(i, e) {
  const a = ("" + i).match(Pw);
  if (!a || a[1] === "normal") return e * 1.2;
  switch (((i = +a[2]), a[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return e * i;
}
const $w = (i) => +i || 0;
function _b(i, e) {
  const a = {},
    l = Lt(e),
    r = l ? Object.keys(e) : e,
    c = Lt(i) ? (l ? (u) => Dt(i[u], i[e[u]]) : (u) => i[u]) : () => i;
  for (const u of r) a[u] = $w(c(u));
  return a;
}
function Jw(i) {
  return _b(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Ll(i) {
  return _b(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Tn(i) {
  const e = Jw(i);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Ge(i, e) {
  (i = i || {}), (e = e || ue.font);
  let a = Dt(i.size, e.size);
  typeof a == "string" && (a = parseInt(a, 10));
  let l = Dt(i.style, e.style);
  l &&
    !("" + l).match(Iw) &&
    (console.warn('Invalid font style specified: "' + l + '"'), (l = void 0));
  const r = {
    family: Dt(i.family, e.family),
    lineHeight: Ww(Dt(i.lineHeight, e.lineHeight), a),
    size: a,
    style: l,
    weight: Dt(i.weight, e.weight),
    string: "",
  };
  return (r.string = Vw(r)), r;
}
function yr(i, e, a, l) {
  let r, c, u;
  for (r = 0, c = i.length; r < c; ++r)
    if (((u = i[r]), u !== void 0 && u !== void 0)) return u;
}
function t_(i, e, a) {
  const { min: l, max: r } = i,
    c = uw(e, (r - l) / 2),
    u = (h, p) => (a && h === 0 ? 0 : h + p);
  return { min: u(l, -Math.abs(c)), max: u(r, c) };
}
function Ca(i, e) {
  return Object.assign(Object.create(i), e);
}
function ih(i, e = [""], a, l, r = () => i[0]) {
  const c = a || i;
  typeof l > "u" && (l = Eb("_fallback", i));
  const u = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: c,
    _fallback: l,
    _getTarget: r,
    override: (h) => ih([h, ...i], e, c, l),
  };
  return new Proxy(u, {
    deleteProperty(h, p) {
      return delete h[p], delete h._keys, delete i[0][p], !0;
    },
    get(h, p) {
      return Sb(h, p, () => r_(p, e, i, h));
    },
    getOwnPropertyDescriptor(h, p) {
      return Reflect.getOwnPropertyDescriptor(h._scopes[0], p);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(h, p) {
      return t0(h).includes(p);
    },
    ownKeys(h) {
      return t0(h);
    },
    set(h, p, d) {
      const m = h._storage || (h._storage = r());
      return (h[p] = m[p] = d), delete h._keys, !0;
    },
  });
}
function ps(i, e, a, l) {
  const r = {
    _cacheable: !1,
    _proxy: i,
    _context: e,
    _subProxy: a,
    _stack: new Set(),
    _descriptors: xb(i, l),
    setContext: (c) => ps(i, c, a, l),
    override: (c) => ps(i.override(c), e, a, l),
  };
  return new Proxy(r, {
    deleteProperty(c, u) {
      return delete c[u], delete i[u], !0;
    },
    get(c, u, h) {
      return Sb(c, u, () => n_(c, u, h));
    },
    getOwnPropertyDescriptor(c, u) {
      return c._descriptors.allKeys
        ? Reflect.has(i, u)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, u);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(c, u) {
      return Reflect.has(i, u);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(c, u, h) {
      return (i[u] = h), delete c[u], !0;
    },
  });
}
function xb(i, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: a = e.scriptable,
    _indexable: l = e.indexable,
    _allKeys: r = e.allKeys,
  } = i;
  return {
    allKeys: r,
    scriptable: a,
    indexable: l,
    isScriptable: Qi(a) ? a : () => a,
    isIndexable: Qi(l) ? l : () => l,
  };
}
const e_ = (i, e) => (i ? i + $f(e) : e),
  ah = (i, e) =>
    Lt(e) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Sb(i, e, a) {
  if (Object.prototype.hasOwnProperty.call(i, e) || e === "constructor")
    return i[e];
  const l = a();
  return (i[e] = l), l;
}
function n_(i, e, a) {
  const { _proxy: l, _context: r, _subProxy: c, _descriptors: u } = i;
  let h = l[e];
  return (
    Qi(h) && u.isScriptable(e) && (h = i_(e, h, i, a)),
    Me(h) && h.length && (h = a_(e, h, i, u.isIndexable)),
    ah(e, h) && (h = ps(h, r, c && c[e], u)),
    h
  );
}
function i_(i, e, a, l) {
  const { _proxy: r, _context: c, _subProxy: u, _stack: h } = a;
  if (h.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(h).join("->") + "->" + i
    );
  h.add(i);
  let p = e(c, u || l);
  return h.delete(i), ah(i, p) && (p = sh(r._scopes, r, i, p)), p;
}
function a_(i, e, a, l) {
  const { _proxy: r, _context: c, _subProxy: u, _descriptors: h } = a;
  if (typeof c.index < "u" && l(i)) return e[c.index % e.length];
  if (Lt(e[0])) {
    const p = e,
      d = r._scopes.filter((m) => m !== p);
    e = [];
    for (const m of p) {
      const b = sh(d, r, i, m);
      e.push(ps(b, c, u && u[i], h));
    }
  }
  return e;
}
function Cb(i, e, a) {
  return Qi(i) ? i(e, a) : i;
}
const s_ = (i, e) => (i === !0 ? e : typeof i == "string" ? Lr(e, i) : void 0);
function l_(i, e, a, l, r) {
  for (const c of e) {
    const u = s_(a, c);
    if (u) {
      i.add(u);
      const h = Cb(u._fallback, a, r);
      if (typeof h < "u" && h !== a && h !== l) return h;
    } else if (u === !1 && typeof l < "u" && a !== l) return null;
  }
  return !1;
}
function sh(i, e, a, l) {
  const r = e._rootScopes,
    c = Cb(e._fallback, a, l),
    u = [...i, ...r],
    h = new Set();
  h.add(l);
  let p = Jm(h, u, a, c || a, l);
  return p === null ||
    (typeof c < "u" && c !== a && ((p = Jm(h, u, c, p, l)), p === null))
    ? !1
    : ih(Array.from(h), [""], r, c, () => o_(e, a, l));
}
function Jm(i, e, a, l, r) {
  for (; a; ) a = l_(i, e, a, l, r);
  return a;
}
function o_(i, e, a) {
  const l = i._getTarget();
  e in l || (l[e] = {});
  const r = l[e];
  return Me(r) && Lt(a) ? a : r || {};
}
function r_(i, e, a, l) {
  let r;
  for (const c of e)
    if (((r = Eb(e_(c, i), a)), typeof r < "u"))
      return ah(i, r) ? sh(a, l, i, r) : r;
}
function Eb(i, e) {
  for (const a of e) {
    if (!a) continue;
    const l = a[i];
    if (typeof l < "u") return l;
  }
}
function t0(i) {
  let e = i._keys;
  return e || (e = i._keys = c_(i._scopes)), e;
}
function c_(i) {
  const e = new Set();
  for (const a of i)
    for (const l of Object.keys(a).filter((r) => !r.startsWith("_"))) e.add(l);
  return Array.from(e);
}
const u_ = Number.EPSILON || 1e-14,
  ms = (i, e) => e < i.length && !i[e].skip && i[e],
  Mb = (i) => (i === "x" ? "y" : "x");
function f_(i, e, a, l) {
  const r = i.skip ? e : i,
    c = e,
    u = a.skip ? e : a,
    h = Nf(c, r),
    p = Nf(u, c);
  let d = h / (h + p),
    m = p / (h + p);
  (d = isNaN(d) ? 0 : d), (m = isNaN(m) ? 0 : m);
  const b = l * d,
    w = l * m;
  return {
    previous: { x: c.x - b * (u.x - r.x), y: c.y - b * (u.y - r.y) },
    next: { x: c.x + w * (u.x - r.x), y: c.y + w * (u.y - r.y) },
  };
}
function h_(i, e, a) {
  const l = i.length;
  let r,
    c,
    u,
    h,
    p,
    d = ms(i, 0);
  for (let m = 0; m < l - 1; ++m)
    if (((p = d), (d = ms(i, m + 1)), !(!p || !d))) {
      if (kl(e[m], 0, u_)) {
        a[m] = a[m + 1] = 0;
        continue;
      }
      (r = a[m] / e[m]),
        (c = a[m + 1] / e[m]),
        (h = Math.pow(r, 2) + Math.pow(c, 2)),
        !(h <= 9) &&
          ((u = 3 / Math.sqrt(h)),
          (a[m] = r * u * e[m]),
          (a[m + 1] = c * u * e[m]));
    }
}
function d_(i, e, a = "x") {
  const l = Mb(a),
    r = i.length;
  let c,
    u,
    h,
    p = ms(i, 0);
  for (let d = 0; d < r; ++d) {
    if (((u = h), (h = p), (p = ms(i, d + 1)), !h)) continue;
    const m = h[a],
      b = h[l];
    u &&
      ((c = (m - u[a]) / 3),
      (h[`cp1${a}`] = m - c),
      (h[`cp1${l}`] = b - c * e[d])),
      p &&
        ((c = (p[a] - m) / 3),
        (h[`cp2${a}`] = m + c),
        (h[`cp2${l}`] = b + c * e[d]));
  }
}
function g_(i, e = "x") {
  const a = Mb(e),
    l = i.length,
    r = Array(l).fill(0),
    c = Array(l);
  let u,
    h,
    p,
    d = ms(i, 0);
  for (u = 0; u < l; ++u)
    if (((h = p), (p = d), (d = ms(i, u + 1)), !!p)) {
      if (d) {
        const m = d[e] - p[e];
        r[u] = m !== 0 ? (d[a] - p[a]) / m : 0;
      }
      c[u] = h
        ? d
          ? gs(r[u - 1]) !== gs(r[u])
            ? 0
            : (r[u - 1] + r[u]) / 2
          : r[u - 1]
        : r[u];
    }
  h_(i, r, c), d_(i, c, e);
}
function vr(i, e, a) {
  return Math.max(Math.min(i, a), e);
}
function p_(i, e) {
  let a,
    l,
    r,
    c,
    u,
    h = Ul(i[0], e);
  for (a = 0, l = i.length; a < l; ++a)
    (u = c),
      (c = h),
      (h = a < l - 1 && Ul(i[a + 1], e)),
      c &&
        ((r = i[a]),
        u &&
          ((r.cp1x = vr(r.cp1x, e.left, e.right)),
          (r.cp1y = vr(r.cp1y, e.top, e.bottom))),
        h &&
          ((r.cp2x = vr(r.cp2x, e.left, e.right)),
          (r.cp2y = vr(r.cp2y, e.top, e.bottom))));
}
function m_(i, e, a, l, r) {
  let c, u, h, p;
  if (
    (e.spanGaps && (i = i.filter((d) => !d.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    g_(i, r);
  else {
    let d = l ? i[i.length - 1] : i[0];
    for (c = 0, u = i.length; c < u; ++c)
      (h = i[c]),
        (p = f_(d, h, i[Math.min(c + 1, u - (l ? 0 : 1)) % u], e.tension)),
        (h.cp1x = p.previous.x),
        (h.cp1y = p.previous.y),
        (h.cp2x = p.next.x),
        (h.cp2y = p.next.y),
        (d = h);
  }
  e.capBezierPoints && p_(i, a);
}
function lh() {
  return typeof window < "u" && typeof document < "u";
}
function oh(i) {
  let e = i.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Ur(i, e, a) {
  let l;
  return (
    typeof i == "string"
      ? ((l = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (l = (l / 100) * e.parentNode[a]))
      : (l = i),
    l
  );
}
const Ir = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function b_(i, e) {
  return Ir(i).getPropertyValue(e);
}
const y_ = ["top", "right", "bottom", "left"];
function wa(i, e, a) {
  const l = {};
  a = a ? "-" + a : "";
  for (let r = 0; r < 4; r++) {
    const c = y_[r];
    l[c] = parseFloat(i[e + "-" + c + a]) || 0;
  }
  return (l.width = l.left + l.right), (l.height = l.top + l.bottom), l;
}
const v_ = (i, e, a) => (i > 0 || e > 0) && (!a || !a.shadowRoot);
function w_(i, e) {
  const a = i.touches,
    l = a && a.length ? a[0] : i,
    { offsetX: r, offsetY: c } = l;
  let u = !1,
    h,
    p;
  if (v_(r, c, i.target)) (h = r), (p = c);
  else {
    const d = e.getBoundingClientRect();
    (h = l.clientX - d.left), (p = l.clientY - d.top), (u = !0);
  }
  return { x: h, y: p, box: u };
}
function ma(i, e) {
  if ("native" in i) return i;
  const { canvas: a, currentDevicePixelRatio: l } = e,
    r = Ir(a),
    c = r.boxSizing === "border-box",
    u = wa(r, "padding"),
    h = wa(r, "border", "width"),
    { x: p, y: d, box: m } = w_(i, a),
    b = u.left + (m && h.left),
    w = u.top + (m && h.top);
  let { width: x, height: _ } = e;
  return (
    c && ((x -= u.width + h.width), (_ -= u.height + h.height)),
    {
      x: Math.round((((p - b) / x) * a.width) / l),
      y: Math.round((((d - w) / _) * a.height) / l),
    }
  );
}
function __(i, e, a) {
  let l, r;
  if (e === void 0 || a === void 0) {
    const c = i && oh(i);
    if (!c) (e = i.clientWidth), (a = i.clientHeight);
    else {
      const u = c.getBoundingClientRect(),
        h = Ir(c),
        p = wa(h, "border", "width"),
        d = wa(h, "padding");
      (e = u.width - d.width - p.width),
        (a = u.height - d.height - p.height),
        (l = Ur(h.maxWidth, c, "clientWidth")),
        (r = Ur(h.maxHeight, c, "clientHeight"));
    }
  }
  return { width: e, height: a, maxWidth: l || jr, maxHeight: r || jr };
}
const Fi = (i) => Math.round(i * 10) / 10;
function x_(i, e, a, l) {
  const r = Ir(i),
    c = wa(r, "margin"),
    u = Ur(r.maxWidth, i, "clientWidth") || jr,
    h = Ur(r.maxHeight, i, "clientHeight") || jr,
    p = __(i, e, a);
  let { width: d, height: m } = p;
  if (r.boxSizing === "content-box") {
    const w = wa(r, "border", "width"),
      x = wa(r, "padding");
    (d -= x.width + w.width), (m -= x.height + w.height);
  }
  return (
    (d = Math.max(0, d - c.width)),
    (m = Math.max(0, l ? d / l : m - c.height)),
    (d = Fi(Math.min(d, u, p.maxWidth))),
    (m = Fi(Math.min(m, h, p.maxHeight))),
    d && !m && (m = Fi(d / 2)),
    (e !== void 0 || a !== void 0) &&
      l &&
      p.height &&
      m > p.height &&
      ((m = p.height), (d = Fi(Math.floor(m * l)))),
    { width: d, height: m }
  );
}
function e0(i, e, a) {
  const l = e || 1,
    r = Fi(i.height * l),
    c = Fi(i.width * l);
  (i.height = Fi(i.height)), (i.width = Fi(i.width));
  const u = i.canvas;
  return (
    u.style &&
      (a || (!u.style.height && !u.style.width)) &&
      ((u.style.height = `${i.height}px`), (u.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== l || u.height !== r || u.width !== c
      ? ((i.currentDevicePixelRatio = l),
        (u.height = r),
        (u.width = c),
        i.ctx.setTransform(l, 0, 0, l, 0, 0),
        !0)
      : !1
  );
}
const S_ = (function () {
  let i = !1;
  try {
    const e = {
      get passive() {
        return (i = !0), !1;
      },
    };
    lh() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return i;
})();
function n0(i, e) {
  const a = b_(i, e),
    l = a && a.match(/^(\d+)(\.\d+)?px$/);
  return l ? +l[1] : void 0;
}
function ba(i, e, a, l) {
  return { x: i.x + a * (e.x - i.x), y: i.y + a * (e.y - i.y) };
}
function C_(i, e, a, l) {
  return {
    x: i.x + a * (e.x - i.x),
    y:
      l === "middle"
        ? a < 0.5
          ? i.y
          : e.y
        : l === "after"
        ? a < 1
          ? i.y
          : e.y
        : a > 0
        ? e.y
        : i.y,
  };
}
function E_(i, e, a, l) {
  const r = { x: i.cp2x, y: i.cp2y },
    c = { x: e.cp1x, y: e.cp1y },
    u = ba(i, r, a),
    h = ba(r, c, a),
    p = ba(c, e, a),
    d = ba(u, h, a),
    m = ba(h, p, a);
  return ba(d, m, a);
}
const M_ = function (i, e) {
    return {
      x(a) {
        return i + i + e - a;
      },
      setWidth(a) {
        e = a;
      },
      textAlign(a) {
        return a === "center" ? a : a === "right" ? "left" : "right";
      },
      xPlus(a, l) {
        return a - l;
      },
      leftForLtr(a, l) {
        return a - l;
      },
    };
  },
  T_ = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, e) {
        return i + e;
      },
      leftForLtr(i, e) {
        return i;
      },
    };
  };
function hs(i, e, a) {
  return i ? M_(e, a) : T_();
}
function Tb(i, e) {
  let a, l;
  (e === "ltr" || e === "rtl") &&
    ((a = i.canvas.style),
    (l = [a.getPropertyValue("direction"), a.getPropertyPriority("direction")]),
    a.setProperty("direction", e, "important"),
    (i.prevTextDirection = l));
}
function Ab(i, e) {
  e !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", e[0], e[1]));
}
function Ob(i) {
  return i === "angle"
    ? { between: db, compare: Cw, normalize: Ni }
    : { between: Al, compare: (e, a) => e - a, normalize: (e) => e };
}
function i0({ start: i, end: e, count: a, loop: l, style: r }) {
  return {
    start: i % a,
    end: e % a,
    loop: l && (e - i + 1) % a === 0,
    style: r,
  };
}
function A_(i, e, a) {
  const { property: l, start: r, end: c } = a,
    { between: u, normalize: h } = Ob(l),
    p = e.length;
  let { start: d, end: m, loop: b } = i,
    w,
    x;
  if (b) {
    for (d += p, m += p, w = 0, x = p; w < x && u(h(e[d % p][l]), r, c); ++w)
      d--, m--;
    (d %= p), (m %= p);
  }
  return m < d && (m += p), { start: d, end: m, loop: b, style: i.style };
}
function O_(i, e, a) {
  if (!a) return [i];
  const { property: l, start: r, end: c } = a,
    u = e.length,
    { compare: h, between: p, normalize: d } = Ob(l),
    { start: m, end: b, loop: w, style: x } = A_(i, e, a),
    _ = [];
  let M = !1,
    O = null,
    E,
    W,
    K;
  const J = () => p(r, K, E) && h(r, K) !== 0,
    H = () => h(c, E) === 0 || p(c, K, E),
    tt = () => M || J(),
    T = () => !M || H();
  for (let S = m, v = m; S <= b; ++S)
    (W = e[S % u]),
      !W.skip &&
        ((E = d(W[l])),
        E !== K &&
          ((M = p(E, r, c)),
          O === null && tt() && (O = h(E, r) === 0 ? S : v),
          O !== null &&
            T() &&
            (_.push(i0({ start: O, end: S, loop: w, count: u, style: x })),
            (O = null)),
          (v = S),
          (K = E)));
  return (
    O !== null && _.push(i0({ start: O, end: b, loop: w, count: u, style: x })),
    _
  );
}
function z_(i, e) {
  const a = [],
    l = i.segments;
  for (let r = 0; r < l.length; r++) {
    const c = O_(l[r], i.points, e);
    c.length && a.push(...c);
  }
  return a;
}
function D_(i, e, a, l) {
  let r = 0,
    c = e - 1;
  if (a && !l) for (; r < e && !i[r].skip; ) r++;
  for (; r < e && i[r].skip; ) r++;
  for (r %= e, a && (c += r); c > r && i[c % e].skip; ) c--;
  return (c %= e), { start: r, end: c };
}
function k_(i, e, a, l) {
  const r = i.length,
    c = [];
  let u = e,
    h = i[e],
    p;
  for (p = e + 1; p <= a; ++p) {
    const d = i[p % r];
    d.skip || d.stop
      ? h.skip ||
        ((l = !1),
        c.push({ start: e % r, end: (p - 1) % r, loop: l }),
        (e = u = d.stop ? p : null))
      : ((u = p), h.skip && (e = p)),
      (h = d);
  }
  return u !== null && c.push({ start: e % r, end: u % r, loop: l }), c;
}
function R_(i, e) {
  const a = i.points,
    l = i.options.spanGaps,
    r = a.length;
  if (!r) return [];
  const c = !!i._loop,
    { start: u, end: h } = D_(a, r, c, l);
  if (l === !0) return a0(i, [{ start: u, end: h, loop: c }], a, e);
  const p = h < u ? h + r : h,
    d = !!i._fullLoop && u === 0 && h === r - 1;
  return a0(i, k_(a, u, p, d), a, e);
}
function a0(i, e, a, l) {
  return !l || !l.setContext || !a ? e : B_(i, e, a, l);
}
function B_(i, e, a, l) {
  const r = i._chart.getContext(),
    c = s0(i.options),
    {
      _datasetIndex: u,
      options: { spanGaps: h },
    } = i,
    p = a.length,
    d = [];
  let m = c,
    b = e[0].start,
    w = b;
  function x(_, M, O, E) {
    const W = h ? -1 : 1;
    if (_ !== M) {
      for (_ += p; a[_ % p].skip; ) _ -= W;
      for (; a[M % p].skip; ) M += W;
      _ % p !== M % p &&
        (d.push({ start: _ % p, end: M % p, loop: O, style: E }),
        (m = E),
        (b = M % p));
    }
  }
  for (const _ of e) {
    b = h ? b : _.start;
    let M = a[b % p],
      O;
    for (w = b + 1; w <= _.end; w++) {
      const E = a[w % p];
      (O = s0(
        l.setContext(
          Ca(r, {
            type: "segment",
            p0: M,
            p1: E,
            p0DataIndex: (w - 1) % p,
            p1DataIndex: w % p,
            datasetIndex: u,
          })
        )
      )),
        L_(O, m) && x(b, w - 1, _.loop, m),
        (M = E),
        (m = O);
    }
    b < w - 1 && x(b, w - 1, _.loop, m);
  }
  return d;
}
function s0(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function L_(i, e) {
  if (!e) return !1;
  const a = [],
    l = function (r, c) {
      return th(c) ? (a.includes(c) || a.push(c), a.indexOf(c)) : c;
    };
  return JSON.stringify(i, l) !== JSON.stringify(e, l);
}
function wr(i, e, a) {
  return i.options.clip ? i[a] : e[a];
}
function H_(i, e) {
  const { xScale: a, yScale: l } = i;
  return a && l
    ? {
        left: wr(a, e, "left"),
        right: wr(a, e, "right"),
        top: wr(l, e, "top"),
        bottom: wr(l, e, "bottom"),
      }
    : e;
}
function j_(i, e) {
  const a = e._clip;
  if (a.disabled) return !1;
  const l = H_(e, i.chartArea);
  return {
    left: a.left === !1 ? 0 : l.left - (a.left === !0 ? 0 : a.left),
    right: a.right === !1 ? i.width : l.right + (a.right === !0 ? 0 : a.right),
    top: a.top === !1 ? 0 : l.top - (a.top === !0 ? 0 : a.top),
    bottom:
      a.bottom === !1 ? i.height : l.bottom + (a.bottom === !0 ? 0 : a.bottom),
  };
}
class N_ {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, a, l, r) {
    const c = a.listeners[r],
      u = a.duration;
    c.forEach((h) =>
      h({
        chart: e,
        initial: a.initial,
        numSteps: u,
        currentStep: Math.min(l - a.start, u),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = pb.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let a = 0;
    this._charts.forEach((l, r) => {
      if (!l.running || !l.items.length) return;
      const c = l.items;
      let u = c.length - 1,
        h = !1,
        p;
      for (; u >= 0; --u)
        (p = c[u]),
          p._active
            ? (p._total > l.duration && (l.duration = p._total),
              p.tick(e),
              (h = !0))
            : ((c[u] = c[c.length - 1]), c.pop());
      h && (r.draw(), this._notify(r, l, e, "progress")),
        c.length ||
          ((l.running = !1),
          this._notify(r, l, e, "complete"),
          (l.initial = !1)),
        (a += c.length);
    }),
      (this._lastDate = e),
      a === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const a = this._charts;
    let l = a.get(e);
    return (
      l ||
        ((l = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        a.set(e, l)),
      l
    );
  }
  listen(e, a, l) {
    this._getAnims(e).listeners[a].push(l);
  }
  add(e, a) {
    !a || !a.length || this._getAnims(e).items.push(...a);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const a = this._charts.get(e);
    a &&
      ((a.running = !0),
      (a.start = Date.now()),
      (a.duration = a.items.reduce((l, r) => Math.max(l, r._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const a = this._charts.get(e);
    return !(!a || !a.running || !a.items.length);
  }
  stop(e) {
    const a = this._charts.get(e);
    if (!a || !a.items.length) return;
    const l = a.items;
    let r = l.length - 1;
    for (; r >= 0; --r) l[r].cancel();
    (a.items = []), this._notify(e, a, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var li = new N_();
const l0 = "transparent",
  U_ = {
    boolean(i, e, a) {
      return a > 0.5 ? e : i;
    },
    color(i, e, a) {
      const l = Pm(i || l0),
        r = l.valid && Pm(e || l0);
      return r && r.valid ? r.mix(l, a).hexString() : e;
    },
    number(i, e, a) {
      return i + (e - i) * a;
    },
  };
class F_ {
  constructor(e, a, l, r) {
    const c = a[l];
    r = yr([e.to, r, c, e.from]);
    const u = yr([e.from, c, r]);
    (this._active = !0),
      (this._fn = e.fn || U_[e.type || typeof u]),
      (this._easing = Rl[e.easing] || Rl.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = a),
      (this._prop = l),
      (this._from = u),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, a, l) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        c = l - this._start,
        u = this._duration - c;
      (this._start = l),
        (this._duration = Math.floor(Math.max(u, e.duration))),
        (this._total += c),
        (this._loop = !!e.loop),
        (this._to = yr([e.to, a, r, e.from])),
        (this._from = yr([e.from, r, a]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const a = e - this._start,
      l = this._duration,
      r = this._prop,
      c = this._from,
      u = this._loop,
      h = this._to;
    let p;
    if (((this._active = c !== h && (u || a < l)), !this._active)) {
      (this._target[r] = h), this._notify(!0);
      return;
    }
    if (a < 0) {
      this._target[r] = c;
      return;
    }
    (p = (a / l) % 2),
      (p = u && p > 1 ? 2 - p : p),
      (p = this._easing(Math.min(1, Math.max(0, p)))),
      (this._target[r] = this._fn(c, h, p));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((a, l) => {
      e.push({ res: a, rej: l });
    });
  }
  _notify(e) {
    const a = e ? "res" : "rej",
      l = this._promises || [];
    for (let r = 0; r < l.length; r++) l[r][a]();
  }
}
class zb {
  constructor(e, a) {
    (this._chart = e), (this._properties = new Map()), this.configure(a);
  }
  configure(e) {
    if (!Lt(e)) return;
    const a = Object.keys(ue.animation),
      l = this._properties;
    Object.getOwnPropertyNames(e).forEach((r) => {
      const c = e[r];
      if (!Lt(c)) return;
      const u = {};
      for (const h of a) u[h] = c[h];
      ((Me(c.properties) && c.properties) || [r]).forEach((h) => {
        (h === r || !l.has(h)) && l.set(h, u);
      });
    });
  }
  _animateOptions(e, a) {
    const l = a.options,
      r = Y_(e, l);
    if (!r) return [];
    const c = this._createAnimations(r, l);
    return (
      l.$shared &&
        q_(e.options.$animations, l).then(
          () => {
            e.options = l;
          },
          () => {}
        ),
      c
    );
  }
  _createAnimations(e, a) {
    const l = this._properties,
      r = [],
      c = e.$animations || (e.$animations = {}),
      u = Object.keys(a),
      h = Date.now();
    let p;
    for (p = u.length - 1; p >= 0; --p) {
      const d = u[p];
      if (d.charAt(0) === "$") continue;
      if (d === "options") {
        r.push(...this._animateOptions(e, a));
        continue;
      }
      const m = a[d];
      let b = c[d];
      const w = l.get(d);
      if (b)
        if (w && b.active()) {
          b.update(w, m, h);
          continue;
        } else b.cancel();
      if (!w || !w.duration) {
        e[d] = m;
        continue;
      }
      (c[d] = b = new F_(w, e, d, m)), r.push(b);
    }
    return r;
  }
  update(e, a) {
    if (this._properties.size === 0) {
      Object.assign(e, a);
      return;
    }
    const l = this._createAnimations(e, a);
    if (l.length) return li.add(this._chart, l), !0;
  }
}
function q_(i, e) {
  const a = [],
    l = Object.keys(e);
  for (let r = 0; r < l.length; r++) {
    const c = i[l[r]];
    c && c.active() && a.push(c.wait());
  }
  return Promise.all(a);
}
function Y_(i, e) {
  if (!e) return;
  let a = i.options;
  if (!a) {
    i.options = e;
    return;
  }
  return (
    a.$shared &&
      (i.options = a = Object.assign({}, a, { $shared: !1, $animations: {} })),
    a
  );
}
function o0(i, e) {
  const a = (i && i.options) || {},
    l = a.reverse,
    r = a.min === void 0 ? e : 0,
    c = a.max === void 0 ? e : 0;
  return { start: l ? c : r, end: l ? r : c };
}
function V_(i, e, a) {
  if (a === !1) return !1;
  const l = o0(i, a),
    r = o0(e, a);
  return { top: r.end, right: l.end, bottom: r.start, left: l.start };
}
function G_(i) {
  let e, a, l, r;
  return (
    Lt(i)
      ? ((e = i.top), (a = i.right), (l = i.bottom), (r = i.left))
      : (e = a = l = r = i),
    { top: e, right: a, bottom: l, left: r, disabled: i === !1 }
  );
}
function Db(i, e) {
  const a = [],
    l = i._getSortedDatasetMetas(e);
  let r, c;
  for (r = 0, c = l.length; r < c; ++r) a.push(l[r].index);
  return a;
}
function r0(i, e, a, l = {}) {
  const r = i.keys,
    c = l.mode === "single";
  let u, h, p, d;
  if (e === null) return;
  let m = !1;
  for (u = 0, h = r.length; u < h; ++u) {
    if (((p = +r[u]), p === a)) {
      if (((m = !0), l.all)) continue;
      break;
    }
    (d = i.values[p]), wn(d) && (c || e === 0 || gs(e) === gs(d)) && (e += d);
  }
  return !m && !l.all ? 0 : e;
}
function X_(i, e) {
  const { iScale: a, vScale: l } = e,
    r = a.axis === "x" ? "x" : "y",
    c = l.axis === "x" ? "x" : "y",
    u = Object.keys(i),
    h = new Array(u.length);
  let p, d, m;
  for (p = 0, d = u.length; p < d; ++p)
    (m = u[p]), (h[p] = { [r]: m, [c]: i[m] });
  return h;
}
function Tf(i, e) {
  const a = i && i.options.stacked;
  return a || (a === void 0 && e.stack !== void 0);
}
function Q_(i, e, a) {
  return `${i.id}.${e.id}.${a.stack || a.type}`;
}
function Z_(i) {
  const { min: e, max: a, minDefined: l, maxDefined: r } = i.getUserBounds();
  return {
    min: l ? e : Number.NEGATIVE_INFINITY,
    max: r ? a : Number.POSITIVE_INFINITY,
  };
}
function K_(i, e, a) {
  const l = i[e] || (i[e] = {});
  return l[a] || (l[a] = {});
}
function c0(i, e, a, l) {
  for (const r of e.getMatchingVisibleMetas(l).reverse()) {
    const c = i[r.index];
    if ((a && c > 0) || (!a && c < 0)) return r.index;
  }
  return null;
}
function u0(i, e) {
  const { chart: a, _cachedMeta: l } = i,
    r = a._stacks || (a._stacks = {}),
    { iScale: c, vScale: u, index: h } = l,
    p = c.axis,
    d = u.axis,
    m = Q_(c, u, l),
    b = e.length;
  let w;
  for (let x = 0; x < b; ++x) {
    const _ = e[x],
      { [p]: M, [d]: O } = _,
      E = _._stacks || (_._stacks = {});
    (w = E[d] = K_(r, m, M)),
      (w[h] = O),
      (w._top = c0(w, u, !0, l.type)),
      (w._bottom = c0(w, u, !1, l.type));
    const W = w._visualValues || (w._visualValues = {});
    W[h] = O;
  }
}
function Af(i, e) {
  const a = i.scales;
  return Object.keys(a)
    .filter((l) => a[l].axis === e)
    .shift();
}
function P_(i, e) {
  return Ca(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function I_(i, e, a) {
  return Ca(i, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: a,
    index: e,
    mode: "default",
    type: "data",
  });
}
function xl(i, e) {
  const a = i.controller.index,
    l = i.vScale && i.vScale.axis;
  if (l) {
    e = e || i._parsed;
    for (const r of e) {
      const c = r._stacks;
      if (!c || c[l] === void 0 || c[l][a] === void 0) return;
      delete c[l][a],
        c[l]._visualValues !== void 0 &&
          c[l]._visualValues[a] !== void 0 &&
          delete c[l]._visualValues[a];
    }
  }
}
const Of = (i) => i === "reset" || i === "none",
  f0 = (i, e) => (e ? i : Object.assign({}, i)),
  W_ = (i, e, a) =>
    i && !e.hidden && e._stacked && { keys: Db(a, !0), values: null };
class kb {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(e, a) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = a),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = Tf(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && xl(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      a = this._cachedMeta,
      l = this.getDataset(),
      r = (b, w, x, _) => (b === "x" ? w : b === "r" ? _ : x),
      c = (a.xAxisID = Dt(l.xAxisID, Af(e, "x"))),
      u = (a.yAxisID = Dt(l.yAxisID, Af(e, "y"))),
      h = (a.rAxisID = Dt(l.rAxisID, Af(e, "r"))),
      p = a.indexAxis,
      d = (a.iAxisID = r(p, c, u, h)),
      m = (a.vAxisID = r(p, u, c, h));
    (a.xScale = this.getScaleForId(c)),
      (a.yScale = this.getScaleForId(u)),
      (a.rScale = this.getScaleForId(h)),
      (a.iScale = this.getScaleForId(d)),
      (a.vScale = this.getScaleForId(m));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const a = this._cachedMeta;
    return e === a.iScale ? a.vScale : a.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Qm(this._data, this), e._stacked && xl(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      a = e.data || (e.data = []),
      l = this._data;
    if (Lt(a)) {
      const r = this._cachedMeta;
      this._data = X_(a, r);
    } else if (l !== a) {
      if (l) {
        Qm(l, this);
        const r = this._cachedMeta;
        xl(r), (r._parsed = []);
      }
      a && Object.isExtensible(a) && Aw(a, this),
        (this._syncList = []),
        (this._data = a);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const a = this._cachedMeta,
      l = this.getDataset();
    let r = !1;
    this._dataCheck();
    const c = a._stacked;
    (a._stacked = Tf(a.vScale, a)),
      a.stack !== l.stack && ((r = !0), xl(a), (a.stack = l.stack)),
      this._resyncElements(e),
      (r || c !== a._stacked) &&
        (u0(this, a._parsed), (a._stacked = Tf(a.vScale, a)));
  }
  configure() {
    const e = this.chart.config,
      a = e.datasetScopeKeys(this._type),
      l = e.getOptionScopes(this.getDataset(), a, !0);
    (this.options = e.createResolver(l, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, a) {
    const { _cachedMeta: l, _data: r } = this,
      { iScale: c, _stacked: u } = l,
      h = c.axis;
    let p = e === 0 && a === r.length ? !0 : l._sorted,
      d = e > 0 && l._parsed[e - 1],
      m,
      b,
      w;
    if (this._parsing === !1) (l._parsed = r), (l._sorted = !0), (w = r);
    else {
      Me(r[e])
        ? (w = this.parseArrayData(l, r, e, a))
        : Lt(r[e])
        ? (w = this.parseObjectData(l, r, e, a))
        : (w = this.parsePrimitiveData(l, r, e, a));
      const x = () => b[h] === null || (d && b[h] < d[h]);
      for (m = 0; m < a; ++m)
        (l._parsed[m + e] = b = w[m]), p && (x() && (p = !1), (d = b));
      l._sorted = p;
    }
    u && u0(this, w);
  }
  parsePrimitiveData(e, a, l, r) {
    const { iScale: c, vScale: u } = e,
      h = c.axis,
      p = u.axis,
      d = c.getLabels(),
      m = c === u,
      b = new Array(r);
    let w, x, _;
    for (w = 0, x = r; w < x; ++w)
      (_ = w + l),
        (b[w] = { [h]: m || c.parse(d[_], _), [p]: u.parse(a[_], _) });
    return b;
  }
  parseArrayData(e, a, l, r) {
    const { xScale: c, yScale: u } = e,
      h = new Array(r);
    let p, d, m, b;
    for (p = 0, d = r; p < d; ++p)
      (m = p + l),
        (b = a[m]),
        (h[p] = { x: c.parse(b[0], m), y: u.parse(b[1], m) });
    return h;
  }
  parseObjectData(e, a, l, r) {
    const { xScale: c, yScale: u } = e,
      { xAxisKey: h = "x", yAxisKey: p = "y" } = this._parsing,
      d = new Array(r);
    let m, b, w, x;
    for (m = 0, b = r; m < b; ++m)
      (w = m + l),
        (x = a[w]),
        (d[m] = { x: c.parse(Lr(x, h), w), y: u.parse(Lr(x, p), w) });
    return d;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, a, l) {
    const r = this.chart,
      c = this._cachedMeta,
      u = a[e.axis],
      h = { keys: Db(r, !0), values: a._stacks[e.axis]._visualValues };
    return r0(h, u, c.index, { mode: l });
  }
  updateRangeFromParsed(e, a, l, r) {
    const c = l[a.axis];
    let u = c === null ? NaN : c;
    const h = r && l._stacks[a.axis];
    r && h && ((r.values = h), (u = r0(r, c, this._cachedMeta.index))),
      (e.min = Math.min(e.min, u)),
      (e.max = Math.max(e.max, u));
  }
  getMinMax(e, a) {
    const l = this._cachedMeta,
      r = l._parsed,
      c = l._sorted && e === l.iScale,
      u = r.length,
      h = this._getOtherScale(e),
      p = W_(a, l, this.chart),
      d = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: m, max: b } = Z_(h);
    let w, x;
    function _() {
      x = r[w];
      const M = x[h.axis];
      return !wn(x[e.axis]) || m > M || b < M;
    }
    for (
      w = 0;
      w < u && !(!_() && (this.updateRangeFromParsed(d, e, x, p), c));
      ++w
    );
    if (c) {
      for (w = u - 1; w >= 0; --w)
        if (!_()) {
          this.updateRangeFromParsed(d, e, x, p);
          break;
        }
    }
    return d;
  }
  getAllParsedValues(e) {
    const a = this._cachedMeta._parsed,
      l = [];
    let r, c, u;
    for (r = 0, c = a.length; r < c; ++r)
      (u = a[r][e.axis]), wn(u) && l.push(u);
    return l;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const a = this._cachedMeta,
      l = a.iScale,
      r = a.vScale,
      c = this.getParsed(e);
    return {
      label: l ? "" + l.getLabelForValue(c[l.axis]) : "",
      value: r ? "" + r.getLabelForValue(c[r.axis]) : "",
    };
  }
  _update(e) {
    const a = this._cachedMeta;
    this.update(e || "default"),
      (a._clip = G_(
        Dt(this.options.clip, V_(a.xScale, a.yScale, this.getMaxOverflow()))
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      a = this.chart,
      l = this._cachedMeta,
      r = l.data || [],
      c = a.chartArea,
      u = [],
      h = this._drawStart || 0,
      p = this._drawCount || r.length - h,
      d = this.options.drawActiveElementsOnTop;
    let m;
    for (l.dataset && l.dataset.draw(e, c, h, p), m = h; m < h + p; ++m) {
      const b = r[m];
      b.hidden || (b.active && d ? u.push(b) : b.draw(e, c));
    }
    for (m = 0; m < u.length; ++m) u[m].draw(e, c);
  }
  getStyle(e, a) {
    const l = a ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(l)
      : this.resolveDataElementOptions(e || 0, l);
  }
  getContext(e, a, l) {
    const r = this.getDataset();
    let c;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const u = this._cachedMeta.data[e];
      (c = u.$context || (u.$context = I_(this.getContext(), e, u))),
        (c.parsed = this.getParsed(e)),
        (c.raw = r.data[e]),
        (c.index = c.dataIndex = e);
    } else
      (c =
        this.$context ||
        (this.$context = P_(this.chart.getContext(), this.index))),
        (c.dataset = r),
        (c.index = c.datasetIndex = this.index);
    return (c.active = !!a), (c.mode = l), c;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, a) {
    return this._resolveElementOptions(this.dataElementType.id, a, e);
  }
  _resolveElementOptions(e, a = "default", l) {
    const r = a === "active",
      c = this._cachedDataOpts,
      u = e + "-" + a,
      h = c[u],
      p = this.enableOptionSharing && Hr(l);
    if (h) return f0(h, p);
    const d = this.chart.config,
      m = d.datasetElementScopeKeys(this._type, e),
      b = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      w = d.getOptionScopes(this.getDataset(), m),
      x = Object.keys(ue.elements[e]),
      _ = () => this.getContext(l, r, a),
      M = d.resolveNamedOptions(w, x, _, b);
    return M.$shared && ((M.$shared = p), (c[u] = Object.freeze(f0(M, p)))), M;
  }
  _resolveAnimations(e, a, l) {
    const r = this.chart,
      c = this._cachedDataOpts,
      u = `animation-${a}`,
      h = c[u];
    if (h) return h;
    let p;
    if (r.options.animation !== !1) {
      const m = this.chart.config,
        b = m.datasetAnimationScopeKeys(this._type, a),
        w = m.getOptionScopes(this.getDataset(), b);
      p = m.createResolver(w, this.getContext(e, l, a));
    }
    const d = new zb(r, p && p.animations);
    return p && p._cacheable && (c[u] = Object.freeze(d)), d;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, a) {
    return !a || Of(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, a) {
    const l = this.resolveDataElementOptions(e, a),
      r = this._sharedOptions,
      c = this.getSharedOptions(l),
      u = this.includeOptions(a, c) || c !== r;
    return (
      this.updateSharedOptions(c, a, l), { sharedOptions: c, includeOptions: u }
    );
  }
  updateElement(e, a, l, r) {
    Of(r) ? Object.assign(e, l) : this._resolveAnimations(a, r).update(e, l);
  }
  updateSharedOptions(e, a, l) {
    e && !Of(a) && this._resolveAnimations(void 0, a).update(e, l);
  }
  _setStyle(e, a, l, r) {
    e.active = r;
    const c = this.getStyle(a, r);
    this._resolveAnimations(a, l, r).update(e, {
      options: (!r && this.getSharedOptions(c)) || c,
    });
  }
  removeHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !1);
  }
  setHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const a = this._data,
      l = this._cachedMeta.data;
    for (const [h, p, d] of this._syncList) this[h](p, d);
    this._syncList = [];
    const r = l.length,
      c = a.length,
      u = Math.min(c, r);
    u && this.parse(0, u),
      c > r
        ? this._insertElements(r, c - r, e)
        : c < r && this._removeElements(c, r - c);
  }
  _insertElements(e, a, l = !0) {
    const r = this._cachedMeta,
      c = r.data,
      u = e + a;
    let h;
    const p = (d) => {
      for (d.length += a, h = d.length - 1; h >= u; h--) d[h] = d[h - a];
    };
    for (p(c), h = e; h < u; ++h) c[h] = new this.dataElementType();
    this._parsing && p(r._parsed),
      this.parse(e, a),
      l && this.updateElements(c, e, a, "reset");
  }
  updateElements(e, a, l, r) {}
  _removeElements(e, a) {
    const l = this._cachedMeta;
    if (this._parsing) {
      const r = l._parsed.splice(e, a);
      l._stacked && xl(l, r);
    }
    l.data.splice(e, a);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [a, l, r] = e;
      this[a](l, r);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, a) {
    a && this._sync(["_removeElements", e, a]);
    const l = arguments.length - 2;
    l && this._sync(["_insertElements", e, l]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
class $_ extends kb {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  };
  static overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  };
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const a = this._cachedMeta,
      { dataset: l, data: r = [], _dataset: c } = a,
      u = this.chart._animationsDisabled;
    let { start: h, count: p } = kw(a, r, u);
    (this._drawStart = h),
      (this._drawCount = p),
      Rw(a) && ((h = 0), (p = r.length)),
      (l._chart = this.chart),
      (l._datasetIndex = this.index),
      (l._decimated = !!c._decimated),
      (l.points = r);
    const d = this.resolveDatasetElementOptions(e);
    this.options.showLine || (d.borderWidth = 0),
      (d.segment = this.options.segment),
      this.updateElement(l, void 0, { animated: !u, options: d }, e),
      this.updateElements(r, h, p, e);
  }
  updateElements(e, a, l, r) {
    const c = r === "reset",
      { iScale: u, vScale: h, _stacked: p, _dataset: d } = this._cachedMeta,
      { sharedOptions: m, includeOptions: b } = this._getSharedOptions(a, r),
      w = u.axis,
      x = h.axis,
      { spanGaps: _, segment: M } = this.options,
      O = Nl(_) ? _ : Number.POSITIVE_INFINITY,
      E = this.chart._animationsDisabled || c || r === "none",
      W = a + l,
      K = e.length;
    let J = a > 0 && this.getParsed(a - 1);
    for (let H = 0; H < K; ++H) {
      const tt = e[H],
        T = E ? tt : {};
      if (H < a || H >= W) {
        T.skip = !0;
        continue;
      }
      const S = this.getParsed(H),
        v = Pt(S[x]),
        N = (T[w] = u.getPixelForValue(S[w], H)),
        R = (T[x] =
          c || v
            ? h.getBasePixel()
            : h.getPixelForValue(p ? this.applyStack(h, S, p) : S[x], H));
      (T.skip = isNaN(N) || isNaN(R) || v),
        (T.stop = H > 0 && Math.abs(S[w] - J[w]) > O),
        M && ((T.parsed = S), (T.raw = d.data[H])),
        b &&
          (T.options =
            m || this.resolveDataElementOptions(H, tt.active ? "active" : r)),
        E || this.updateElement(tt, H, T, r),
        (J = S);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      a = e.dataset,
      l = (a.options && a.options.borderWidth) || 0,
      r = e.data || [];
    if (!r.length) return l;
    const c = r[0].size(this.resolveDataElementOptions(0)),
      u = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(l, c, u) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
function ga() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class rh {
  static override(e) {
    Object.assign(rh.prototype, e);
  }
  options;
  constructor(e) {
    this.options = e || {};
  }
  init() {}
  formats() {
    return ga();
  }
  parse() {
    return ga();
  }
  format() {
    return ga();
  }
  add() {
    return ga();
  }
  diff() {
    return ga();
  }
  startOf() {
    return ga();
  }
  endOf() {
    return ga();
  }
}
var J_ = { _date: rh };
function tx(i, e, a, l) {
  const { controller: r, data: c, _sorted: u } = i,
    h = r._cachedMeta.iScale,
    p = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (h && e === h.axis && e !== "r" && u && c.length) {
    const d = h._reversePixels ? Mw : va;
    if (l) {
      if (r._sharedOptions) {
        const m = c[0],
          b = typeof m.getRange == "function" && m.getRange(e);
        if (b) {
          const w = d(c, e, a - b),
            x = d(c, e, a + b);
          return { lo: w.lo, hi: x.hi };
        }
      }
    } else {
      const m = d(c, e, a);
      if (p) {
        const { vScale: b } = r._cachedMeta,
          { _parsed: w } = i,
          x = w
            .slice(0, m.lo + 1)
            .reverse()
            .findIndex((M) => !Pt(M[b.axis]));
        m.lo -= Math.max(0, x);
        const _ = w.slice(m.hi).findIndex((M) => !Pt(M[b.axis]));
        m.hi += Math.max(0, _);
      }
      return m;
    }
  }
  return { lo: 0, hi: c.length - 1 };
}
function Wr(i, e, a, l, r) {
  const c = i.getSortedVisibleDatasetMetas(),
    u = a[e];
  for (let h = 0, p = c.length; h < p; ++h) {
    const { index: d, data: m } = c[h],
      { lo: b, hi: w } = tx(c[h], e, u, r);
    for (let x = b; x <= w; ++x) {
      const _ = m[x];
      _.skip || l(_, d, x);
    }
  }
}
function ex(i) {
  const e = i.indexOf("x") !== -1,
    a = i.indexOf("y") !== -1;
  return function (l, r) {
    const c = e ? Math.abs(l.x - r.x) : 0,
      u = a ? Math.abs(l.y - r.y) : 0;
    return Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2));
  };
}
function zf(i, e, a, l, r) {
  const c = [];
  return (
    (!r && !i.isPointInArea(e)) ||
      Wr(
        i,
        a,
        e,
        function (h, p, d) {
          (!r && !Ul(h, i.chartArea, 0)) ||
            (h.inRange(e.x, e.y, l) &&
              c.push({ element: h, datasetIndex: p, index: d }));
        },
        !0
      ),
    c
  );
}
function nx(i, e, a, l) {
  let r = [];
  function c(u, h, p) {
    const { startAngle: d, endAngle: m } = u.getProps(
        ["startAngle", "endAngle"],
        l
      ),
      { angle: b } = Sw(u, { x: e.x, y: e.y });
    db(b, d, m) && r.push({ element: u, datasetIndex: h, index: p });
  }
  return Wr(i, a, e, c), r;
}
function ix(i, e, a, l, r, c) {
  let u = [];
  const h = ex(a);
  let p = Number.POSITIVE_INFINITY;
  function d(m, b, w) {
    const x = m.inRange(e.x, e.y, r);
    if (l && !x) return;
    const _ = m.getCenterPoint(r);
    if (!(!!c || i.isPointInArea(_)) && !x) return;
    const O = h(e, _);
    O < p
      ? ((u = [{ element: m, datasetIndex: b, index: w }]), (p = O))
      : O === p && u.push({ element: m, datasetIndex: b, index: w });
  }
  return Wr(i, a, e, d), u;
}
function Df(i, e, a, l, r, c) {
  return !c && !i.isPointInArea(e)
    ? []
    : a === "r" && !l
    ? nx(i, e, a, r)
    : ix(i, e, a, l, r, c);
}
function h0(i, e, a, l, r) {
  const c = [],
    u = a === "x" ? "inXRange" : "inYRange";
  let h = !1;
  return (
    Wr(i, a, e, (p, d, m) => {
      p[u] &&
        p[u](e[a], r) &&
        (c.push({ element: p, datasetIndex: d, index: m }),
        (h = h || p.inRange(e.x, e.y, r)));
    }),
    l && !h ? [] : c
  );
}
var ax = {
  modes: {
    index(i, e, a, l) {
      const r = ma(e, i),
        c = a.axis || "x",
        u = a.includeInvisible || !1,
        h = a.intersect ? zf(i, r, c, l, u) : Df(i, r, c, !1, l, u),
        p = [];
      return h.length
        ? (i.getSortedVisibleDatasetMetas().forEach((d) => {
            const m = h[0].index,
              b = d.data[m];
            b &&
              !b.skip &&
              p.push({ element: b, datasetIndex: d.index, index: m });
          }),
          p)
        : [];
    },
    dataset(i, e, a, l) {
      const r = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      let h = a.intersect ? zf(i, r, c, l, u) : Df(i, r, c, !1, l, u);
      if (h.length > 0) {
        const p = h[0].datasetIndex,
          d = i.getDatasetMeta(p).data;
        h = [];
        for (let m = 0; m < d.length; ++m)
          h.push({ element: d[m], datasetIndex: p, index: m });
      }
      return h;
    },
    point(i, e, a, l) {
      const r = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      return zf(i, r, c, l, u);
    },
    nearest(i, e, a, l) {
      const r = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      return Df(i, r, c, a.intersect, l, u);
    },
    x(i, e, a, l) {
      const r = ma(e, i);
      return h0(i, r, "x", a.intersect, l);
    },
    y(i, e, a, l) {
      const r = ma(e, i);
      return h0(i, r, "y", a.intersect, l);
    },
  },
};
const Rb = ["left", "top", "right", "bottom"];
function Sl(i, e) {
  return i.filter((a) => a.pos === e);
}
function d0(i, e) {
  return i.filter((a) => Rb.indexOf(a.pos) === -1 && a.box.axis === e);
}
function Cl(i, e) {
  return i.sort((a, l) => {
    const r = e ? l : a,
      c = e ? a : l;
    return r.weight === c.weight ? r.index - c.index : r.weight - c.weight;
  });
}
function sx(i) {
  const e = [];
  let a, l, r, c, u, h;
  for (a = 0, l = (i || []).length; a < l; ++a)
    (r = i[a]),
      ({
        position: c,
        options: { stack: u, stackWeight: h = 1 },
      } = r),
      e.push({
        index: a,
        box: r,
        pos: c,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: u && c + u,
        stackWeight: h,
      });
  return e;
}
function lx(i) {
  const e = {};
  for (const a of i) {
    const { stack: l, pos: r, stackWeight: c } = a;
    if (!l || !Rb.includes(r)) continue;
    const u = e[l] || (e[l] = { count: 0, placed: 0, weight: 0, size: 0 });
    u.count++, (u.weight += c);
  }
  return e;
}
function ox(i, e) {
  const a = lx(i),
    { vBoxMaxWidth: l, hBoxMaxHeight: r } = e;
  let c, u, h;
  for (c = 0, u = i.length; c < u; ++c) {
    h = i[c];
    const { fullSize: p } = h.box,
      d = a[h.stack],
      m = d && h.stackWeight / d.weight;
    h.horizontal
      ? ((h.width = m ? m * l : p && e.availableWidth), (h.height = r))
      : ((h.width = l), (h.height = m ? m * r : p && e.availableHeight));
  }
  return a;
}
function rx(i) {
  const e = sx(i),
    a = Cl(
      e.filter((d) => d.box.fullSize),
      !0
    ),
    l = Cl(Sl(e, "left"), !0),
    r = Cl(Sl(e, "right")),
    c = Cl(Sl(e, "top"), !0),
    u = Cl(Sl(e, "bottom")),
    h = d0(e, "x"),
    p = d0(e, "y");
  return {
    fullSize: a,
    leftAndTop: l.concat(c),
    rightAndBottom: r.concat(p).concat(u).concat(h),
    chartArea: Sl(e, "chartArea"),
    vertical: l.concat(r).concat(p),
    horizontal: c.concat(u).concat(h),
  };
}
function g0(i, e, a, l) {
  return Math.max(i[a], e[a]) + Math.max(i[l], e[l]);
}
function Bb(i, e) {
  (i.top = Math.max(i.top, e.top)),
    (i.left = Math.max(i.left, e.left)),
    (i.bottom = Math.max(i.bottom, e.bottom)),
    (i.right = Math.max(i.right, e.right));
}
function cx(i, e, a, l) {
  const { pos: r, box: c } = a,
    u = i.maxPadding;
  if (!Lt(r)) {
    a.size && (i[r] -= a.size);
    const b = l[a.stack] || { size: 0, count: 1 };
    (b.size = Math.max(b.size, a.horizontal ? c.height : c.width)),
      (a.size = b.size / b.count),
      (i[r] += a.size);
  }
  c.getPadding && Bb(u, c.getPadding());
  const h = Math.max(0, e.outerWidth - g0(u, i, "left", "right")),
    p = Math.max(0, e.outerHeight - g0(u, i, "top", "bottom")),
    d = h !== i.w,
    m = p !== i.h;
  return (
    (i.w = h),
    (i.h = p),
    a.horizontal ? { same: d, other: m } : { same: m, other: d }
  );
}
function ux(i) {
  const e = i.maxPadding;
  function a(l) {
    const r = Math.max(e[l] - i[l], 0);
    return (i[l] += r), r;
  }
  (i.y += a("top")), (i.x += a("left")), a("right"), a("bottom");
}
function fx(i, e) {
  const a = e.maxPadding;
  function l(r) {
    const c = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((u) => {
        c[u] = Math.max(e[u], a[u]);
      }),
      c
    );
  }
  return l(i ? ["left", "right"] : ["top", "bottom"]);
}
function Ol(i, e, a, l) {
  const r = [];
  let c, u, h, p, d, m;
  for (c = 0, u = i.length, d = 0; c < u; ++c) {
    (h = i[c]),
      (p = h.box),
      p.update(h.width || e.w, h.height || e.h, fx(h.horizontal, e));
    const { same: b, other: w } = cx(e, a, h, l);
    (d |= b && r.length), (m = m || w), p.fullSize || r.push(h);
  }
  return (d && Ol(r, e, a, l)) || m;
}
function _r(i, e, a, l, r) {
  (i.top = a),
    (i.left = e),
    (i.right = e + l),
    (i.bottom = a + r),
    (i.width = l),
    (i.height = r);
}
function p0(i, e, a, l) {
  const r = a.padding;
  let { x: c, y: u } = e;
  for (const h of i) {
    const p = h.box,
      d = l[h.stack] || { placed: 0, weight: 1 },
      m = h.stackWeight / d.weight || 1;
    if (h.horizontal) {
      const b = e.w * m,
        w = d.size || p.height;
      Hr(d.start) && (u = d.start),
        p.fullSize
          ? _r(p, r.left, u, a.outerWidth - r.right - r.left, w)
          : _r(p, e.left + d.placed, u, b, w),
        (d.start = u),
        (d.placed += b),
        (u = p.bottom);
    } else {
      const b = e.h * m,
        w = d.size || p.width;
      Hr(d.start) && (c = d.start),
        p.fullSize
          ? _r(p, c, r.top, w, a.outerHeight - r.bottom - r.top)
          : _r(p, c, e.top + d.placed, w, b),
        (d.start = c),
        (d.placed += b),
        (c = p.right);
    }
  }
  (e.x = c), (e.y = u);
}
var qi = {
  addBox(i, e) {
    i.boxes || (i.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(a) {
                e.draw(a);
              },
            },
          ];
        }),
      i.boxes.push(e);
  },
  removeBox(i, e) {
    const a = i.boxes ? i.boxes.indexOf(e) : -1;
    a !== -1 && i.boxes.splice(a, 1);
  },
  configure(i, e, a) {
    (e.fullSize = a.fullSize), (e.position = a.position), (e.weight = a.weight);
  },
  update(i, e, a, l) {
    if (!i) return;
    const r = Tn(i.options.layout.padding),
      c = Math.max(e - r.width, 0),
      u = Math.max(a - r.height, 0),
      h = rx(i.boxes),
      p = h.vertical,
      d = h.horizontal;
    Gt(i.boxes, (M) => {
      typeof M.beforeLayout == "function" && M.beforeLayout();
    });
    const m =
        p.reduce(
          (M, O) => (O.box.options && O.box.options.display === !1 ? M : M + 1),
          0
        ) || 1,
      b = Object.freeze({
        outerWidth: e,
        outerHeight: a,
        padding: r,
        availableWidth: c,
        availableHeight: u,
        vBoxMaxWidth: c / 2 / m,
        hBoxMaxHeight: u / 2,
      }),
      w = Object.assign({}, r);
    Bb(w, Tn(l));
    const x = Object.assign(
        { maxPadding: w, w: c, h: u, x: r.left, y: r.top },
        r
      ),
      _ = ox(p.concat(d), b);
    Ol(h.fullSize, x, b, _),
      Ol(p, x, b, _),
      Ol(d, x, b, _) && Ol(p, x, b, _),
      ux(x),
      p0(h.leftAndTop, x, b, _),
      (x.x += x.w),
      (x.y += x.h),
      p0(h.rightAndBottom, x, b, _),
      (i.chartArea = {
        left: x.left,
        top: x.top,
        right: x.left + x.w,
        bottom: x.top + x.h,
        height: x.h,
        width: x.w,
      }),
      Gt(h.chartArea, (M) => {
        const O = M.box;
        Object.assign(O, i.chartArea),
          O.update(x.w, x.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Lb {
  acquireContext(e, a) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, a, l) {}
  removeEventListener(e, a, l) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, a, l, r) {
    return (
      (a = Math.max(0, a || e.width)),
      (l = l || e.height),
      { width: a, height: Math.max(0, r ? Math.floor(a / r) : l) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class hx extends Lb {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const zr = "$chartjs",
  dx = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  m0 = (i) => i === null || i === "";
function gx(i, e) {
  const a = i.style,
    l = i.getAttribute("height"),
    r = i.getAttribute("width");
  if (
    ((i[zr] = {
      initial: {
        height: l,
        width: r,
        style: { display: a.display, height: a.height, width: a.width },
      },
    }),
    (a.display = a.display || "block"),
    (a.boxSizing = a.boxSizing || "border-box"),
    m0(r))
  ) {
    const c = n0(i, "width");
    c !== void 0 && (i.width = c);
  }
  if (m0(l))
    if (i.style.height === "") i.height = i.width / (e || 2);
    else {
      const c = n0(i, "height");
      c !== void 0 && (i.height = c);
    }
  return i;
}
const Hb = S_ ? { passive: !0 } : !1;
function px(i, e, a) {
  i && i.addEventListener(e, a, Hb);
}
function mx(i, e, a) {
  i && i.canvas && i.canvas.removeEventListener(e, a, Hb);
}
function bx(i, e) {
  const a = dx[i.type] || i.type,
    { x: l, y: r } = ma(i, e);
  return {
    type: a,
    chart: e,
    native: i,
    x: l !== void 0 ? l : null,
    y: r !== void 0 ? r : null,
  };
}
function Fr(i, e) {
  for (const a of i) if (a === e || a.contains(e)) return !0;
}
function yx(i, e, a) {
  const l = i.canvas,
    r = new MutationObserver((c) => {
      let u = !1;
      for (const h of c)
        (u = u || Fr(h.addedNodes, l)), (u = u && !Fr(h.removedNodes, l));
      u && a();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function vx(i, e, a) {
  const l = i.canvas,
    r = new MutationObserver((c) => {
      let u = !1;
      for (const h of c)
        (u = u || Fr(h.removedNodes, l)), (u = u && !Fr(h.addedNodes, l));
      u && a();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const Fl = new Map();
let b0 = 0;
function jb() {
  const i = window.devicePixelRatio;
  i !== b0 &&
    ((b0 = i),
    Fl.forEach((e, a) => {
      a.currentDevicePixelRatio !== i && e();
    }));
}
function wx(i, e) {
  Fl.size || window.addEventListener("resize", jb), Fl.set(i, e);
}
function _x(i) {
  Fl.delete(i), Fl.size || window.removeEventListener("resize", jb);
}
function xx(i, e, a) {
  const l = i.canvas,
    r = l && oh(l);
  if (!r) return;
  const c = mb((h, p) => {
      const d = r.clientWidth;
      a(h, p), d < r.clientWidth && a();
    }, window),
    u = new ResizeObserver((h) => {
      const p = h[0],
        d = p.contentRect.width,
        m = p.contentRect.height;
      (d === 0 && m === 0) || c(d, m);
    });
  return u.observe(r), wx(i, c), u;
}
function kf(i, e, a) {
  a && a.disconnect(), e === "resize" && _x(i);
}
function Sx(i, e, a) {
  const l = i.canvas,
    r = mb((c) => {
      i.ctx !== null && a(bx(c, i));
    }, i);
  return px(l, e, r), r;
}
class Cx extends Lb {
  acquireContext(e, a) {
    const l = e && e.getContext && e.getContext("2d");
    return l && l.canvas === e ? (gx(e, a), l) : null;
  }
  releaseContext(e) {
    const a = e.canvas;
    if (!a[zr]) return !1;
    const l = a[zr].initial;
    ["height", "width"].forEach((c) => {
      const u = l[c];
      Pt(u) ? a.removeAttribute(c) : a.setAttribute(c, u);
    });
    const r = l.style || {};
    return (
      Object.keys(r).forEach((c) => {
        a.style[c] = r[c];
      }),
      (a.width = a.width),
      delete a[zr],
      !0
    );
  }
  addEventListener(e, a, l) {
    this.removeEventListener(e, a);
    const r = e.$proxies || (e.$proxies = {}),
      u = { attach: yx, detach: vx, resize: xx }[a] || Sx;
    r[a] = u(e, a, l);
  }
  removeEventListener(e, a) {
    const l = e.$proxies || (e.$proxies = {}),
      r = l[a];
    if (!r) return;
    (({ attach: kf, detach: kf, resize: kf })[a] || mx)(e, a, r),
      (l[a] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, a, l, r) {
    return x_(e, a, l, r);
  }
  isAttached(e) {
    const a = e && oh(e);
    return !!(a && a.isConnected);
  }
}
function Ex(i) {
  return !lh() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? hx
    : Cx;
}
let vs = class {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  hasValue() {
    return Nl(this.x) && Nl(this.y);
  }
  getProps(e, a) {
    const l = this.$animations;
    if (!a || !l) return this;
    const r = {};
    return (
      e.forEach((c) => {
        r[c] = l[c] && l[c].active() ? l[c]._to : this[c];
      }),
      r
    );
  }
};
function Mx(i, e) {
  const a = i.options.ticks,
    l = Tx(i),
    r = Math.min(a.maxTicksLimit || l, l),
    c = a.major.enabled ? Ox(e) : [],
    u = c.length,
    h = c[0],
    p = c[u - 1],
    d = [];
  if (u > r) return zx(e, d, c, u / r), d;
  const m = Ax(c, e, r);
  if (u > 0) {
    let b, w;
    const x = u > 1 ? Math.round((p - h) / (u - 1)) : null;
    for (xr(e, d, m, Pt(x) ? 0 : h - x, h), b = 0, w = u - 1; b < w; b++)
      xr(e, d, m, c[b], c[b + 1]);
    return xr(e, d, m, p, Pt(x) ? e.length : p + x), d;
  }
  return xr(e, d, m), d;
}
function Tx(i) {
  const e = i.options.offset,
    a = i._tickSize(),
    l = i._length / a + (e ? 0 : 1),
    r = i._maxLength / a;
  return Math.floor(Math.min(l, r));
}
function Ax(i, e, a) {
  const l = Dx(i),
    r = e.length / a;
  if (!l) return Math.max(r, 1);
  const c = yw(l);
  for (let u = 0, h = c.length - 1; u < h; u++) {
    const p = c[u];
    if (p > r) return p;
  }
  return Math.max(r, 1);
}
function Ox(i) {
  const e = [];
  let a, l;
  for (a = 0, l = i.length; a < l; a++) i[a].major && e.push(a);
  return e;
}
function zx(i, e, a, l) {
  let r = 0,
    c = a[0],
    u;
  for (l = Math.ceil(l), u = 0; u < i.length; u++)
    u === c && (e.push(i[u]), r++, (c = a[r * l]));
}
function xr(i, e, a, l, r) {
  const c = Dt(l, 0),
    u = Math.min(Dt(r, i.length), i.length);
  let h = 0,
    p,
    d,
    m;
  for (
    a = Math.ceil(a), r && ((p = r - l), (a = p / Math.floor(p / a))), m = c;
    m < 0;

  )
    h++, (m = Math.round(c + h * a));
  for (d = Math.max(c, 0); d < u; d++)
    d === m && (e.push(i[d]), h++, (m = Math.round(c + h * a)));
}
function Dx(i) {
  const e = i.length;
  let a, l;
  if (e < 2) return !1;
  for (l = i[0], a = 1; a < e; ++a) if (i[a] - i[a - 1] !== l) return !1;
  return l;
}
const kx = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  y0 = (i, e, a) => (e === "top" || e === "left" ? i[e] + a : i[e] - a),
  v0 = (i, e) => Math.min(e || i, i);
function w0(i, e) {
  const a = [],
    l = i.length / e,
    r = i.length;
  let c = 0;
  for (; c < r; c += l) a.push(i[Math.floor(c)]);
  return a;
}
function Rx(i, e, a) {
  const l = i.ticks.length,
    r = Math.min(e, l - 1),
    c = i._startPixel,
    u = i._endPixel,
    h = 1e-6;
  let p = i.getPixelForTick(r),
    d;
  if (
    !(
      a &&
      (l === 1
        ? (d = Math.max(p - c, u - p))
        : e === 0
        ? (d = (i.getPixelForTick(1) - p) / 2)
        : (d = (p - i.getPixelForTick(r - 1)) / 2),
      (p += r < e ? d : -d),
      p < c - h || p > u + h)
    )
  )
    return p;
}
function Bx(i, e) {
  Gt(i, (a) => {
    const l = a.gc,
      r = l.length / 2;
    let c;
    if (r > e) {
      for (c = 0; c < r; ++c) delete a.data[l[c]];
      l.splice(0, r);
    }
  });
}
function El(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function _0(i, e) {
  if (!i.display) return 0;
  const a = Ge(i.font, e),
    l = Tn(i.padding);
  return (Me(i.text) ? i.text.length : 1) * a.lineHeight + l.height;
}
function Lx(i, e) {
  return Ca(i, { scale: e, type: "scale" });
}
function Hx(i, e, a) {
  return Ca(i, { tick: a, index: e, type: "tick" });
}
function jx(i, e, a) {
  let l = bb(i);
  return ((a && e !== "right") || (!a && e === "right")) && (l = kx(l)), l;
}
function Nx(i, e, a, l) {
  const { top: r, left: c, bottom: u, right: h, chart: p } = i,
    { chartArea: d, scales: m } = p;
  let b = 0,
    w,
    x,
    _;
  const M = u - r,
    O = h - c;
  if (i.isHorizontal()) {
    if (((x = tn(l, c, h)), Lt(a))) {
      const E = Object.keys(a)[0],
        W = a[E];
      _ = m[E].getPixelForValue(W) + M - e;
    } else
      a === "center" ? (_ = (d.bottom + d.top) / 2 + M - e) : (_ = y0(i, a, e));
    w = h - c;
  } else {
    if (Lt(a)) {
      const E = Object.keys(a)[0],
        W = a[E];
      x = m[E].getPixelForValue(W) - O + e;
    } else
      a === "center" ? (x = (d.left + d.right) / 2 - O + e) : (x = y0(i, a, e));
    (_ = tn(l, u, r)), (b = a === "left" ? -Mn : Mn);
  }
  return { titleX: x, titleY: _, maxWidth: w, rotation: b };
}
class ws extends vs {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, a) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: a, _suggestedMin: l, _suggestedMax: r } = this;
    return (
      (e = Rn(e, Number.POSITIVE_INFINITY)),
      (a = Rn(a, Number.NEGATIVE_INFINITY)),
      (l = Rn(l, Number.POSITIVE_INFINITY)),
      (r = Rn(r, Number.NEGATIVE_INFINITY)),
      { min: Rn(e, l), max: Rn(a, r), minDefined: wn(e), maxDefined: wn(a) }
    );
  }
  getMinMax(e) {
    let { min: a, max: l, minDefined: r, maxDefined: c } = this.getUserBounds(),
      u;
    if (r && c) return { min: a, max: l };
    const h = this.getMatchingVisibleMetas();
    for (let p = 0, d = h.length; p < d; ++p)
      (u = h[p].controller.getMinMax(this, e)),
        r || (a = Math.min(a, u.min)),
        c || (l = Math.max(l, u.max));
    return (
      (a = c && a > l ? l : a),
      (l = r && a > l ? a : l),
      { min: Rn(a, Rn(l, a)), max: Rn(l, Rn(a, l)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Jt(this.options.beforeUpdate, [this]);
  }
  update(e, a, l) {
    const { beginAtZero: r, grace: c, ticks: u } = this.options,
      h = u.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, l)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + l.left + l.right
        : this.height + l.top + l.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = t_(this, c, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const p = h < this.ticks.length;
    this._convertTicksToLabels(p ? w0(this.ticks, h) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      u.display &&
        (u.autoSkip || u.source === "auto") &&
        ((this.ticks = Mx(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      p && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      a,
      l;
    this.isHorizontal()
      ? ((a = this.left), (l = this.right))
      : ((a = this.top), (l = this.bottom), (e = !e)),
      (this._startPixel = a),
      (this._endPixel = l),
      (this._reversePixels = e),
      (this._length = l - a),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Jt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Jt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Jt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Jt(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Jt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const a = this.options.ticks;
    let l, r, c;
    for (l = 0, r = e.length; l < r; l++)
      (c = e[l]), (c.label = Jt(a.callback, [c.value, l, e], this));
  }
  afterTickToLabelConversion() {
    Jt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Jt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      a = e.ticks,
      l = v0(this.ticks.length, e.ticks.maxTicksLimit),
      r = a.minRotation || 0,
      c = a.maxRotation;
    let u = r,
      h,
      p,
      d;
    if (
      !this._isVisible() ||
      !a.display ||
      r >= c ||
      l <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const m = this._getLabelSizes(),
      b = m.widest.width,
      w = m.highest.height,
      x = vn(this.chart.width - b, 0, this.maxWidth);
    (h = e.offset ? this.maxWidth / l : x / (l - 1)),
      b + 6 > h &&
        ((h = x / (l - (e.offset ? 0.5 : 1))),
        (p =
          this.maxHeight -
          El(e.grid) -
          a.padding -
          _0(e.title, this.chart.options.font)),
        (d = Math.sqrt(b * b + w * w)),
        (u = xw(
          Math.min(
            Math.asin(vn((m.highest.height + 6) / h, -1, 1)),
            Math.asin(vn(p / d, -1, 1)) - Math.asin(vn(w / d, -1, 1))
          )
        )),
        (u = Math.max(r, Math.min(c, u)))),
      (this.labelRotation = u);
  }
  afterCalculateLabelRotation() {
    Jt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Jt(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: a,
        options: { ticks: l, title: r, grid: c },
      } = this,
      u = this._isVisible(),
      h = this.isHorizontal();
    if (u) {
      const p = _0(r, a.options.font);
      if (
        (h
          ? ((e.width = this.maxWidth), (e.height = El(c) + p))
          : ((e.height = this.maxHeight), (e.width = El(c) + p)),
        l.display && this.ticks.length)
      ) {
        const {
            first: d,
            last: m,
            widest: b,
            highest: w,
          } = this._getLabelSizes(),
          x = l.padding * 2,
          _ = ya(this.labelRotation),
          M = Math.cos(_),
          O = Math.sin(_);
        if (h) {
          const E = l.mirror ? 0 : O * b.width + M * w.height;
          e.height = Math.min(this.maxHeight, e.height + E + x);
        } else {
          const E = l.mirror ? 0 : M * b.width + O * w.height;
          e.width = Math.min(this.maxWidth, e.width + E + x);
        }
        this._calculatePadding(d, m, O, M);
      }
    }
    this._handleMargins(),
      h
        ? ((this.width = this._length =
            a.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            a.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, a, l, r) {
    const {
        ticks: { align: c, padding: u },
        position: h,
      } = this.options,
      p = this.labelRotation !== 0,
      d = h !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const m = this.getPixelForTick(0) - this.left,
        b = this.right - this.getPixelForTick(this.ticks.length - 1);
      let w = 0,
        x = 0;
      p
        ? d
          ? ((w = r * e.width), (x = l * a.height))
          : ((w = l * e.height), (x = r * a.width))
        : c === "start"
        ? (x = a.width)
        : c === "end"
        ? (w = e.width)
        : c !== "inner" && ((w = e.width / 2), (x = a.width / 2)),
        (this.paddingLeft = Math.max(
          ((w - m + u) * this.width) / (this.width - m),
          0
        )),
        (this.paddingRight = Math.max(
          ((x - b + u) * this.width) / (this.width - b),
          0
        ));
    } else {
      let m = a.height / 2,
        b = e.height / 2;
      c === "start"
        ? ((m = 0), (b = e.height))
        : c === "end" && ((m = a.height), (b = 0)),
        (this.paddingTop = m + u),
        (this.paddingBottom = b + u);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Jt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: a } = this.options;
    return a === "top" || a === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let a, l;
    for (a = 0, l = e.length; a < l; a++)
      Pt(e[a].label) && (e.splice(a, 1), l--, a--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const a = this.options.ticks.sampleSize;
      let l = this.ticks;
      a < l.length && (l = w0(l, a)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            l,
            l.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return e;
  }
  _computeLabelSizes(e, a, l) {
    const { ctx: r, _longestTextCache: c } = this,
      u = [],
      h = [],
      p = Math.floor(a / v0(a, l));
    let d = 0,
      m = 0,
      b,
      w,
      x,
      _,
      M,
      O,
      E,
      W,
      K,
      J,
      H;
    for (b = 0; b < a; b += p) {
      if (
        ((_ = e[b].label),
        (M = this._resolveTickFontOptions(b)),
        (r.font = O = M.string),
        (E = c[O] = c[O] || { data: {}, gc: [] }),
        (W = M.lineHeight),
        (K = J = 0),
        !Pt(_) && !Me(_))
      )
        (K = Wm(r, E.data, E.gc, K, _)), (J = W);
      else if (Me(_))
        for (w = 0, x = _.length; w < x; ++w)
          (H = _[w]),
            !Pt(H) && !Me(H) && ((K = Wm(r, E.data, E.gc, K, H)), (J += W));
      u.push(K), h.push(J), (d = Math.max(K, d)), (m = Math.max(J, m));
    }
    Bx(c, a);
    const tt = u.indexOf(d),
      T = h.indexOf(m),
      S = (v) => ({ width: u[v] || 0, height: h[v] || 0 });
    return {
      first: S(0),
      last: S(a - 1),
      widest: S(tt),
      highest: S(T),
      widths: u,
      heights: h,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, a) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const a = this._startPixel + e * this._length;
    return Ew(this._alignToPixels ? da(this.chart, a, 0) : a);
  }
  getDecimalForPixel(e) {
    const a = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - a : a;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: a } = this;
    return e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0;
  }
  getContext(e) {
    const a = this.ticks || [];
    if (e >= 0 && e < a.length) {
      const l = a[e];
      return l.$context || (l.$context = Hx(this.getContext(), e, l));
    }
    return this.$context || (this.$context = Lx(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      a = ya(this.labelRotation),
      l = Math.abs(Math.cos(a)),
      r = Math.abs(Math.sin(a)),
      c = this._getLabelSizes(),
      u = e.autoSkipPadding || 0,
      h = c ? c.widest.width + u : 0,
      p = c ? c.highest.height + u : 0;
    return this.isHorizontal()
      ? p * l > h * r
        ? h / l
        : p / r
      : p * r < h * l
      ? p / l
      : h / r;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const a = this.axis,
      l = this.chart,
      r = this.options,
      { grid: c, position: u, border: h } = r,
      p = c.offset,
      d = this.isHorizontal(),
      b = this.ticks.length + (p ? 1 : 0),
      w = El(c),
      x = [],
      _ = h.setContext(this.getContext()),
      M = _.display ? _.width : 0,
      O = M / 2,
      E = function (j) {
        return da(l, j, M);
      };
    let W, K, J, H, tt, T, S, v, N, R, B, $;
    if (u === "top")
      (W = E(this.bottom)),
        (T = this.bottom - w),
        (v = W - O),
        (R = E(e.top) + O),
        ($ = e.bottom);
    else if (u === "bottom")
      (W = E(this.top)),
        (R = e.top),
        ($ = E(e.bottom) - O),
        (T = W + O),
        (v = this.top + w);
    else if (u === "left")
      (W = E(this.right)),
        (tt = this.right - w),
        (S = W - O),
        (N = E(e.left) + O),
        (B = e.right);
    else if (u === "right")
      (W = E(this.left)),
        (N = e.left),
        (B = E(e.right) - O),
        (tt = W + O),
        (S = this.left + w);
    else if (a === "x") {
      if (u === "center") W = E((e.top + e.bottom) / 2 + 0.5);
      else if (Lt(u)) {
        const j = Object.keys(u)[0],
          G = u[j];
        W = E(this.chart.scales[j].getPixelForValue(G));
      }
      (R = e.top), ($ = e.bottom), (T = W + O), (v = T + w);
    } else if (a === "y") {
      if (u === "center") W = E((e.left + e.right) / 2);
      else if (Lt(u)) {
        const j = Object.keys(u)[0],
          G = u[j];
        W = E(this.chart.scales[j].getPixelForValue(G));
      }
      (tt = W - O), (S = tt - w), (N = e.left), (B = e.right);
    }
    const st = Dt(r.ticks.maxTicksLimit, b),
      at = Math.max(1, Math.ceil(b / st));
    for (K = 0; K < b; K += at) {
      const j = this.getContext(K),
        G = c.setContext(j),
        et = h.setContext(j),
        it = G.lineWidth,
        ct = G.color,
        A = et.dash || [],
        k = et.dashOffset,
        V = G.tickWidth,
        nt = G.tickColor,
        lt = G.tickBorderDash || [],
        ot = G.tickBorderDashOffset;
      (J = Rx(this, K, p)),
        J !== void 0 &&
          ((H = da(l, J, it)),
          d ? (tt = S = N = B = H) : (T = v = R = $ = H),
          x.push({
            tx1: tt,
            ty1: T,
            tx2: S,
            ty2: v,
            x1: N,
            y1: R,
            x2: B,
            y2: $,
            width: it,
            color: ct,
            borderDash: A,
            borderDashOffset: k,
            tickWidth: V,
            tickColor: nt,
            tickBorderDash: lt,
            tickBorderDashOffset: ot,
          }));
    }
    return (this._ticksLength = b), (this._borderValue = W), x;
  }
  _computeLabelItems(e) {
    const a = this.axis,
      l = this.options,
      { position: r, ticks: c } = l,
      u = this.isHorizontal(),
      h = this.ticks,
      { align: p, crossAlign: d, padding: m, mirror: b } = c,
      w = El(l.grid),
      x = w + m,
      _ = b ? -m : x,
      M = -ya(this.labelRotation),
      O = [];
    let E,
      W,
      K,
      J,
      H,
      tt,
      T,
      S,
      v,
      N,
      R,
      B,
      $ = "middle";
    if (r === "top")
      (tt = this.bottom - _), (T = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (tt = this.top + _), (T = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const at = this._getYAxisLabelAlignment(w);
      (T = at.textAlign), (H = at.x);
    } else if (r === "right") {
      const at = this._getYAxisLabelAlignment(w);
      (T = at.textAlign), (H = at.x);
    } else if (a === "x") {
      if (r === "center") tt = (e.top + e.bottom) / 2 + x;
      else if (Lt(r)) {
        const at = Object.keys(r)[0],
          j = r[at];
        tt = this.chart.scales[at].getPixelForValue(j) + x;
      }
      T = this._getXAxisLabelAlignment();
    } else if (a === "y") {
      if (r === "center") H = (e.left + e.right) / 2 - x;
      else if (Lt(r)) {
        const at = Object.keys(r)[0],
          j = r[at];
        H = this.chart.scales[at].getPixelForValue(j);
      }
      T = this._getYAxisLabelAlignment(w).textAlign;
    }
    a === "y" && (p === "start" ? ($ = "top") : p === "end" && ($ = "bottom"));
    const st = this._getLabelSizes();
    for (E = 0, W = h.length; E < W; ++E) {
      (K = h[E]), (J = K.label);
      const at = c.setContext(this.getContext(E));
      (S = this.getPixelForTick(E) + c.labelOffset),
        (v = this._resolveTickFontOptions(E)),
        (N = v.lineHeight),
        (R = Me(J) ? J.length : 1);
      const j = R / 2,
        G = at.color,
        et = at.textStrokeColor,
        it = at.textStrokeWidth;
      let ct = T;
      u
        ? ((H = S),
          T === "inner" &&
            (E === W - 1
              ? (ct = this.options.reverse ? "left" : "right")
              : E === 0
              ? (ct = this.options.reverse ? "right" : "left")
              : (ct = "center")),
          r === "top"
            ? d === "near" || M !== 0
              ? (B = -R * N + N / 2)
              : d === "center"
              ? (B = -st.highest.height / 2 - j * N + N)
              : (B = -st.highest.height + N / 2)
            : d === "near" || M !== 0
            ? (B = N / 2)
            : d === "center"
            ? (B = st.highest.height / 2 - j * N)
            : (B = st.highest.height - R * N),
          b && (B *= -1),
          M !== 0 && !at.showLabelBackdrop && (H += (N / 2) * Math.sin(M)))
        : ((tt = S), (B = ((1 - R) * N) / 2));
      let A;
      if (at.showLabelBackdrop) {
        const k = Tn(at.backdropPadding),
          V = st.heights[E],
          nt = st.widths[E];
        let lt = B - k.top,
          ot = 0 - k.left;
        switch ($) {
          case "middle":
            lt -= V / 2;
            break;
          case "bottom":
            lt -= V;
            break;
        }
        switch (T) {
          case "center":
            ot -= nt / 2;
            break;
          case "right":
            ot -= nt;
            break;
          case "inner":
            E === W - 1 ? (ot -= nt) : E > 0 && (ot -= nt / 2);
            break;
        }
        A = {
          left: ot,
          top: lt,
          width: nt + k.width,
          height: V + k.height,
          color: at.backdropColor,
        };
      }
      O.push({
        label: J,
        font: v,
        textOffset: B,
        options: {
          rotation: M,
          color: G,
          strokeColor: et,
          strokeWidth: it,
          textAlign: ct,
          textBaseline: $,
          translation: [H, tt],
          backdrop: A,
        },
      });
    }
    return O;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: a } = this.options;
    if (-ya(this.labelRotation)) return e === "top" ? "left" : "right";
    let r = "center";
    return (
      a.align === "start"
        ? (r = "left")
        : a.align === "end"
        ? (r = "right")
        : a.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: a,
        ticks: { crossAlign: l, mirror: r, padding: c },
      } = this.options,
      u = this._getLabelSizes(),
      h = e + c,
      p = u.widest.width;
    let d, m;
    return (
      a === "left"
        ? r
          ? ((m = this.right + c),
            l === "near"
              ? (d = "left")
              : l === "center"
              ? ((d = "center"), (m += p / 2))
              : ((d = "right"), (m += p)))
          : ((m = this.right - h),
            l === "near"
              ? (d = "right")
              : l === "center"
              ? ((d = "center"), (m -= p / 2))
              : ((d = "left"), (m = this.left)))
        : a === "right"
        ? r
          ? ((m = this.left + c),
            l === "near"
              ? (d = "right")
              : l === "center"
              ? ((d = "center"), (m -= p / 2))
              : ((d = "left"), (m -= p)))
          : ((m = this.left + h),
            l === "near"
              ? (d = "left")
              : l === "center"
              ? ((d = "center"), (m += p / 2))
              : ((d = "right"), (m = this.right)))
        : (d = "right"),
      { textAlign: d, x: m }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      a = this.options.position;
    if (a === "left" || a === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (a === "top" || a === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: a },
      left: l,
      top: r,
      width: c,
      height: u,
    } = this;
    a && (e.save(), (e.fillStyle = a), e.fillRect(l, r, c, u), e.restore());
  }
  getLineWidthForValue(e) {
    const a = this.options.grid;
    if (!this._isVisible() || !a.display) return 0;
    const r = this.ticks.findIndex((c) => c.value === e);
    return r >= 0 ? a.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(e) {
    const a = this.options.grid,
      l = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let c, u;
    const h = (p, d, m) => {
      !m.width ||
        !m.color ||
        (l.save(),
        (l.lineWidth = m.width),
        (l.strokeStyle = m.color),
        l.setLineDash(m.borderDash || []),
        (l.lineDashOffset = m.borderDashOffset),
        l.beginPath(),
        l.moveTo(p.x, p.y),
        l.lineTo(d.x, d.y),
        l.stroke(),
        l.restore());
    };
    if (a.display)
      for (c = 0, u = r.length; c < u; ++c) {
        const p = r[c];
        a.drawOnChartArea && h({ x: p.x1, y: p.y1 }, { x: p.x2, y: p.y2 }, p),
          a.drawTicks &&
            h(
              { x: p.tx1, y: p.ty1 },
              { x: p.tx2, y: p.ty2 },
              {
                color: p.tickColor,
                width: p.tickWidth,
                borderDash: p.tickBorderDash,
                borderDashOffset: p.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: a,
        options: { border: l, grid: r },
      } = this,
      c = l.setContext(this.getContext()),
      u = l.display ? c.width : 0;
    if (!u) return;
    const h = r.setContext(this.getContext(0)).lineWidth,
      p = this._borderValue;
    let d, m, b, w;
    this.isHorizontal()
      ? ((d = da(e, this.left, u) - u / 2),
        (m = da(e, this.right, h) + h / 2),
        (b = w = p))
      : ((b = da(e, this.top, u) - u / 2),
        (w = da(e, this.bottom, h) + h / 2),
        (d = m = p)),
      a.save(),
      (a.lineWidth = c.width),
      (a.strokeStyle = c.color),
      a.beginPath(),
      a.moveTo(d, b),
      a.lineTo(m, w),
      a.stroke(),
      a.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const l = this.ctx,
      r = this._computeLabelArea();
    r && eh(l, r);
    const c = this.getLabelItems(e);
    for (const u of c) {
      const h = u.options,
        p = u.font,
        d = u.label,
        m = u.textOffset;
      Nr(l, d, 0, m, p, h);
    }
    r && nh(l);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: a, title: l, reverse: r },
    } = this;
    if (!l.display) return;
    const c = Ge(l.font),
      u = Tn(l.padding),
      h = l.align;
    let p = c.lineHeight / 2;
    a === "bottom" || a === "center" || Lt(a)
      ? ((p += u.bottom),
        Me(l.text) && (p += c.lineHeight * (l.text.length - 1)))
      : (p += u.top);
    const {
      titleX: d,
      titleY: m,
      maxWidth: b,
      rotation: w,
    } = Nx(this, p, a, h);
    Nr(e, l.text, 0, 0, c, {
      color: l.color,
      maxWidth: b,
      rotation: w,
      textAlign: jx(h, a, r),
      textBaseline: "middle",
      translation: [d, m],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      a = (e.ticks && e.ticks.z) || 0,
      l = Dt(e.grid && e.grid.z, -1),
      r = Dt(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== ws.prototype.draw
      ? [
          {
            z: a,
            draw: (c) => {
              this.draw(c);
            },
          },
        ]
      : [
          {
            z: l,
            draw: (c) => {
              this.drawBackground(), this.drawGrid(c), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: a,
            draw: (c) => {
              this.drawLabels(c);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const a = this.chart.getSortedVisibleDatasetMetas(),
      l = this.axis + "AxisID",
      r = [];
    let c, u;
    for (c = 0, u = a.length; c < u; ++c) {
      const h = a[c];
      h[l] === this.id && (!e || h.type === e) && r.push(h);
    }
    return r;
  }
  _resolveTickFontOptions(e) {
    const a = this.options.ticks.setContext(this.getContext(e));
    return Ge(a.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Sr {
  constructor(e, a, l) {
    (this.type = e),
      (this.scope = a),
      (this.override = l),
      (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype
    );
  }
  register(e) {
    const a = Object.getPrototypeOf(e);
    let l;
    qx(a) && (l = this.register(a));
    const r = this.items,
      c = e.id,
      u = this.scope + "." + c;
    if (!c) throw new Error("class does not have id: " + e);
    return (
      c in r ||
        ((r[c] = e),
        Ux(e, u, l),
        this.override && ue.override(e.id, e.overrides)),
      u
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const a = this.items,
      l = e.id,
      r = this.scope;
    l in a && delete a[l],
      r && l in ue[r] && (delete ue[r][l], this.override && delete xa[l]);
  }
}
function Ux(i, e, a) {
  const l = jl(Object.create(null), [
    a ? ue.get(a) : {},
    ue.get(e),
    i.defaults,
  ]);
  ue.set(e, l),
    i.defaultRoutes && Fx(e, i.defaultRoutes),
    i.descriptors && ue.describe(e, i.descriptors);
}
function Fx(i, e) {
  Object.keys(e).forEach((a) => {
    const l = a.split("."),
      r = l.pop(),
      c = [i].concat(l).join("."),
      u = e[a].split("."),
      h = u.pop(),
      p = u.join(".");
    ue.route(c, r, p, h);
  });
}
function qx(i) {
  return "id" in i && "defaults" in i;
}
class Yx {
  constructor() {
    (this.controllers = new Sr(kb, "datasets", !0)),
      (this.elements = new Sr(vs, "elements")),
      (this.plugins = new Sr(Object, "plugins")),
      (this.scales = new Sr(ws, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, a, l) {
    [...a].forEach((r) => {
      const c = l || this._getRegistryForType(r);
      l || c.isForType(r) || (c === this.plugins && r.id)
        ? this._exec(e, c, r)
        : Gt(r, (u) => {
            const h = l || this._getRegistryForType(u);
            this._exec(e, h, u);
          });
    });
  }
  _exec(e, a, l) {
    const r = $f(e);
    Jt(l["before" + r], [], l), a[e](l), Jt(l["after" + r], [], l);
  }
  _getRegistryForType(e) {
    for (let a = 0; a < this._typedRegistries.length; a++) {
      const l = this._typedRegistries[a];
      if (l.isForType(e)) return l;
    }
    return this.plugins;
  }
  _get(e, a, l) {
    const r = a.get(e);
    if (r === void 0)
      throw new Error('"' + e + '" is not a registered ' + l + ".");
    return r;
  }
}
var Hn = new Yx();
class Vx {
  constructor() {
    this._init = void 0;
  }
  notify(e, a, l, r) {
    if (
      (a === "beforeInit" &&
        ((this._init = this._createDescriptors(e, !0)),
        this._notify(this._init, e, "install")),
      this._init === void 0)
    )
      return;
    const c = r ? this._descriptors(e).filter(r) : this._descriptors(e),
      u = this._notify(c, e, a, l);
    return (
      a === "afterDestroy" &&
        (this._notify(c, e, "stop"),
        this._notify(this._init, e, "uninstall"),
        (this._init = void 0)),
      u
    );
  }
  _notify(e, a, l, r) {
    r = r || {};
    for (const c of e) {
      const u = c.plugin,
        h = u[l],
        p = [a, r, c.options];
      if (Jt(h, p, u) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Pt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const a = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), a;
  }
  _createDescriptors(e, a) {
    const l = e && e.config,
      r = Dt(l.options && l.options.plugins, {}),
      c = Gx(l);
    return r === !1 && !a ? [] : Qx(e, c, r, a);
  }
  _notifyStateChanges(e) {
    const a = this._oldCache || [],
      l = this._cache,
      r = (c, u) =>
        c.filter((h) => !u.some((p) => h.plugin.id === p.plugin.id));
    this._notify(r(a, l), e, "stop"), this._notify(r(l, a), e, "start");
  }
}
function Gx(i) {
  const e = {},
    a = [],
    l = Object.keys(Hn.plugins.items);
  for (let c = 0; c < l.length; c++) a.push(Hn.getPlugin(l[c]));
  const r = i.plugins || [];
  for (let c = 0; c < r.length; c++) {
    const u = r[c];
    a.indexOf(u) === -1 && (a.push(u), (e[u.id] = !0));
  }
  return { plugins: a, localIds: e };
}
function Xx(i, e) {
  return !e && i === !1 ? null : i === !0 ? {} : i;
}
function Qx(i, { plugins: e, localIds: a }, l, r) {
  const c = [],
    u = i.getContext();
  for (const h of e) {
    const p = h.id,
      d = Xx(l[p], r);
    d !== null &&
      c.push({
        plugin: h,
        options: Zx(i.config, { plugin: h, local: a[p] }, d, u),
      });
  }
  return c;
}
function Zx(i, { plugin: e, local: a }, l, r) {
  const c = i.pluginScopeKeys(e),
    u = i.getOptionScopes(l, c);
  return (
    a && e.defaults && u.push(e.defaults),
    i.createResolver(u, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Yf(i, e) {
  const a = ue.datasets[i] || {};
  return (
    ((e.datasets || {})[i] || {}).indexAxis || e.indexAxis || a.indexAxis || "x"
  );
}
function Kx(i, e) {
  let a = i;
  return (
    i === "_index_" ? (a = e) : i === "_value_" && (a = e === "x" ? "y" : "x"),
    a
  );
}
function Px(i, e) {
  return i === e ? "_index_" : "_value_";
}
function x0(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function Ix(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function Vf(i, ...e) {
  if (x0(i)) return i;
  for (const a of e) {
    const l =
      a.axis || Ix(a.position) || (i.length > 1 && x0(i[0].toLowerCase()));
    if (l) return l;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function S0(i, e, a) {
  if (a[e + "AxisID"] === i) return { axis: e };
}
function Wx(i, e) {
  if (e.data && e.data.datasets) {
    const a = e.data.datasets.filter((l) => l.xAxisID === i || l.yAxisID === i);
    if (a.length) return S0(i, "x", a[0]) || S0(i, "y", a[0]);
  }
  return {};
}
function $x(i, e) {
  const a = xa[i.type] || { scales: {} },
    l = e.scales || {},
    r = Yf(i.type, e),
    c = Object.create(null);
  return (
    Object.keys(l).forEach((u) => {
      const h = l[u];
      if (!Lt(h))
        return console.error(`Invalid scale configuration for scale: ${u}`);
      if (h._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${u}`
        );
      const p = Vf(u, h, Wx(u, i), ue.scales[h.type]),
        d = Px(p, r),
        m = a.scales || {};
      c[u] = Dl(Object.create(null), [{ axis: p }, h, m[p], m[d]]);
    }),
    i.data.datasets.forEach((u) => {
      const h = u.type || i.type,
        p = u.indexAxis || Yf(h, e),
        m = (xa[h] || {}).scales || {};
      Object.keys(m).forEach((b) => {
        const w = Kx(b, p),
          x = u[w + "AxisID"] || w;
        (c[x] = c[x] || Object.create(null)),
          Dl(c[x], [{ axis: w }, l[x], m[b]]);
      });
    }),
    Object.keys(c).forEach((u) => {
      const h = c[u];
      Dl(h, [ue.scales[h.type], ue.scale]);
    }),
    c
  );
}
function Nb(i) {
  const e = i.options || (i.options = {});
  (e.plugins = Dt(e.plugins, {})), (e.scales = $x(i, e));
}
function Ub(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function Jx(i) {
  return (i = i || {}), (i.data = Ub(i.data)), Nb(i), i;
}
const C0 = new Map(),
  Fb = new Set();
function Cr(i, e) {
  let a = C0.get(i);
  return a || ((a = e()), C0.set(i, a), Fb.add(a)), a;
}
const Ml = (i, e, a) => {
  const l = Lr(e, a);
  l !== void 0 && i.add(l);
};
class tS {
  constructor(e) {
    (this._config = Jx(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = Ub(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), Nb(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Cr(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, a) {
    return Cr(`${e}.transition.${a}`, () => [
      [`datasets.${e}.transitions.${a}`, `transitions.${a}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, a) {
    return Cr(`${e}-${a}`, () => [
      [`datasets.${e}.elements.${a}`, `datasets.${e}`, `elements.${a}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const a = e.id,
      l = this.type;
    return Cr(`${l}-plugin-${a}`, () => [
      [`plugins.${a}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, a) {
    const l = this._scopeCache;
    let r = l.get(e);
    return (!r || a) && ((r = new Map()), l.set(e, r)), r;
  }
  getOptionScopes(e, a, l) {
    const { options: r, type: c } = this,
      u = this._cachedScopes(e, l),
      h = u.get(a);
    if (h) return h;
    const p = new Set();
    a.forEach((m) => {
      e && (p.add(e), m.forEach((b) => Ml(p, e, b))),
        m.forEach((b) => Ml(p, r, b)),
        m.forEach((b) => Ml(p, xa[c] || {}, b)),
        m.forEach((b) => Ml(p, ue, b)),
        m.forEach((b) => Ml(p, Uf, b));
    });
    const d = Array.from(p);
    return (
      d.length === 0 && d.push(Object.create(null)), Fb.has(a) && u.set(a, d), d
    );
  }
  chartOptionScopes() {
    const { options: e, type: a } = this;
    return [e, xa[a] || {}, ue.datasets[a] || {}, { type: a }, ue, Uf];
  }
  resolveNamedOptions(e, a, l, r = [""]) {
    const c = { $shared: !0 },
      { resolver: u, subPrefixes: h } = E0(this._resolverCache, e, r);
    let p = u;
    if (nS(u, a)) {
      (c.$shared = !1), (l = Qi(l) ? l() : l);
      const d = this.createResolver(e, l, h);
      p = ps(u, l, d);
    }
    for (const d of a) c[d] = p[d];
    return c;
  }
  createResolver(e, a, l = [""], r) {
    const { resolver: c } = E0(this._resolverCache, e, l);
    return Lt(a) ? ps(c, a, void 0, r) : c;
  }
}
function E0(i, e, a) {
  let l = i.get(e);
  l || ((l = new Map()), i.set(e, l));
  const r = a.join();
  let c = l.get(r);
  return (
    c ||
      ((c = {
        resolver: ih(e, a),
        subPrefixes: a.filter((h) => !h.toLowerCase().includes("hover")),
      }),
      l.set(r, c)),
    c
  );
}
const eS = (i) => Lt(i) && Object.getOwnPropertyNames(i).some((e) => Qi(i[e]));
function nS(i, e) {
  const { isScriptable: a, isIndexable: l } = xb(i);
  for (const r of e) {
    const c = a(r),
      u = l(r),
      h = (u || c) && i[r];
    if ((c && (Qi(h) || eS(h))) || (u && Me(h))) return !0;
  }
  return !1;
}
var iS = "4.5.1";
const aS = ["top", "bottom", "left", "right", "chartArea"];
function M0(i, e) {
  return i === "top" || i === "bottom" || (aS.indexOf(i) === -1 && e === "x");
}
function T0(i, e) {
  return function (a, l) {
    return a[i] === l[i] ? a[e] - l[e] : a[i] - l[i];
  };
}
function A0(i) {
  const e = i.chart,
    a = e.options.animation;
  e.notifyPlugins("afterRender"), Jt(a && a.onComplete, [i], e);
}
function sS(i) {
  const e = i.chart,
    a = e.options.animation;
  Jt(a && a.onProgress, [i], e);
}
function qb(i) {
  return (
    lh() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Dr = {},
  O0 = (i) => {
    const e = qb(i);
    return Object.values(Dr)
      .filter((a) => a.canvas === e)
      .pop();
  };
function lS(i, e, a) {
  const l = Object.keys(i);
  for (const r of l) {
    const c = +r;
    if (c >= e) {
      const u = i[r];
      delete i[r], (a > 0 || c > e) && (i[c + a] = u);
    }
  }
}
function oS(i, e, a, l) {
  return !a || i.type === "mouseout" ? null : l ? e : i;
}
let _s = class {
  static defaults = ue;
  static instances = Dr;
  static overrides = xa;
  static registry = Hn;
  static version = iS;
  static getChart = O0;
  static register(...e) {
    Hn.add(...e), z0();
  }
  static unregister(...e) {
    Hn.remove(...e), z0();
  }
  constructor(e, a) {
    const l = (this.config = new tS(a)),
      r = qb(e),
      c = O0(r);
    if (c)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          c.id +
          "' must be destroyed before the canvas with ID '" +
          c.canvas.id +
          "' can be reused."
      );
    const u = l.createResolver(l.chartOptionScopes(), this.getContext());
    (this.platform = new (l.platform || Ex(r))()),
      this.platform.updateConfig(l);
    const h = this.platform.acquireContext(r, u.aspectRatio),
      p = h && h.canvas,
      d = p && p.height,
      m = p && p.width;
    if (
      ((this.id = cw()),
      (this.ctx = h),
      (this.canvas = p),
      (this.width = m),
      (this.height = d),
      (this._options = u),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Vx()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = zw((b) => this.update(b), u.resizeDelay || 0)),
      (this._dataChanges = []),
      (Dr[this.id] = this),
      !h || !p)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    li.listen(this, "complete", A0),
      li.listen(this, "progress", sS),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: e, maintainAspectRatio: a },
      width: l,
      height: r,
      _aspectRatio: c,
    } = this;
    return Pt(e) ? (a && c ? c : r ? l / r : null) : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return Hn;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : e0(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return $m(this.canvas, this.ctx), this;
  }
  stop() {
    return li.stop(this), this;
  }
  resize(e, a) {
    li.running(this)
      ? (this._resizeBeforeDraw = { width: e, height: a })
      : this._resize(e, a);
  }
  _resize(e, a) {
    const l = this.options,
      r = this.canvas,
      c = l.maintainAspectRatio && this.aspectRatio,
      u = this.platform.getMaximumSize(r, e, a, c),
      h = l.devicePixelRatio || this.platform.getDevicePixelRatio(),
      p = this.width ? "resize" : "attach";
    (this.width = u.width),
      (this.height = u.height),
      (this._aspectRatio = this.aspectRatio),
      e0(this, h, !0) &&
        (this.notifyPlugins("resize", { size: u }),
        Jt(l.onResize, [this, u], this),
        this.attached && this._doResize(p) && this.render());
  }
  ensureScalesHaveIDs() {
    const a = this.options.scales || {};
    Gt(a, (l, r) => {
      l.id = r;
    });
  }
  buildOrUpdateScales() {
    const e = this.options,
      a = e.scales,
      l = this.scales,
      r = Object.keys(l).reduce((u, h) => ((u[h] = !1), u), {});
    let c = [];
    a &&
      (c = c.concat(
        Object.keys(a).map((u) => {
          const h = a[u],
            p = Vf(u, h),
            d = p === "r",
            m = p === "x";
          return {
            options: h,
            dposition: d ? "chartArea" : m ? "bottom" : "left",
            dtype: d ? "radialLinear" : m ? "category" : "linear",
          };
        })
      )),
      Gt(c, (u) => {
        const h = u.options,
          p = h.id,
          d = Vf(p, h),
          m = Dt(h.type, u.dtype);
        (h.position === void 0 || M0(h.position, d) !== M0(u.dposition)) &&
          (h.position = u.dposition),
          (r[p] = !0);
        let b = null;
        if (p in l && l[p].type === m) b = l[p];
        else {
          const w = Hn.getScale(m);
          (b = new w({ id: p, type: m, ctx: this.ctx, chart: this })),
            (l[b.id] = b);
        }
        b.init(h, e);
      }),
      Gt(r, (u, h) => {
        u || delete l[h];
      }),
      Gt(l, (u) => {
        qi.configure(this, u, u.options), qi.addBox(this, u);
      });
  }
  _updateMetasets() {
    const e = this._metasets,
      a = this.data.datasets.length,
      l = e.length;
    if ((e.sort((r, c) => r.index - c.index), l > a)) {
      for (let r = a; r < l; ++r) this._destroyDatasetMeta(r);
      e.splice(a, l - a);
    }
    this._sortedMetasets = e.slice(0).sort(T0("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: { datasets: a },
    } = this;
    e.length > a.length && delete this._stacks,
      e.forEach((l, r) => {
        a.filter((c) => c === l._dataset).length === 0 &&
          this._destroyDatasetMeta(r);
      });
  }
  buildOrUpdateControllers() {
    const e = [],
      a = this.data.datasets;
    let l, r;
    for (this._removeUnreferencedMetasets(), l = 0, r = a.length; l < r; l++) {
      const c = a[l];
      let u = this.getDatasetMeta(l);
      const h = c.type || this.config.type;
      if (
        (u.type &&
          u.type !== h &&
          (this._destroyDatasetMeta(l), (u = this.getDatasetMeta(l))),
        (u.type = h),
        (u.indexAxis = c.indexAxis || Yf(h, this.options)),
        (u.order = c.order || 0),
        (u.index = l),
        (u.label = "" + c.label),
        (u.visible = this.isDatasetVisible(l)),
        u.controller)
      )
        u.controller.updateIndex(l), u.controller.linkScales();
      else {
        const p = Hn.getController(h),
          { datasetElementType: d, dataElementType: m } = ue.datasets[h];
        Object.assign(p, {
          dataElementType: Hn.getElement(m),
          datasetElementType: d && Hn.getElement(d),
        }),
          (u.controller = new p(this, l)),
          e.push(u.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    Gt(
      this.data.datasets,
      (e, a) => {
        this.getDatasetMeta(a).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const a = this.config;
    a.update();
    const l = (this._options = a.createResolver(
        a.chartOptionScopes(),
        this.getContext()
      )),
      r = (this._animationsDisabled = !l.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
    )
      return;
    const c = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let u = 0;
    for (let d = 0, m = this.data.datasets.length; d < m; d++) {
      const { controller: b } = this.getDatasetMeta(d),
        w = !r && c.indexOf(b) === -1;
      b.buildOrUpdateElements(w), (u = Math.max(+b.getMaxOverflow(), u));
    }
    (u = this._minPadding = l.layout.autoPadding ? u : 0),
      this._updateLayout(u),
      r ||
        Gt(c, (d) => {
          d.reset();
        }),
      this._updateDatasets(e),
      this.notifyPlugins("afterUpdate", { mode: e }),
      this._layers.sort(T0("z", "_idx"));
    const { _active: h, _lastEvent: p } = this;
    p
      ? this._eventHandler(p, !0)
      : h.length && this._updateHoverStyles(h, h, !0),
      this.render();
  }
  _updateScales() {
    Gt(this.scales, (e) => {
      qi.removeBox(this, e);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options,
      a = new Set(Object.keys(this._listeners)),
      l = new Set(e.events);
    (!Ym(a, l) || !!this._responsiveListeners !== e.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this,
      a = this._getUniformDataChanges() || [];
    for (const { method: l, start: r, count: c } of a) {
      const u = l === "_removeElements" ? -c : c;
      lS(e, r, u);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) return;
    this._dataChanges = [];
    const a = this.data.datasets.length,
      l = (c) =>
        new Set(
          e
            .filter((u) => u[0] === c)
            .map((u, h) => h + "," + u.splice(1).join(","))
        ),
      r = l(0);
    for (let c = 1; c < a; c++) if (!Ym(r, l(c))) return;
    return Array.from(r)
      .map((c) => c.split(","))
      .map((c) => ({ method: c[1], start: +c[2], count: +c[3] }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    qi.update(this, this.width, this.height, e);
    const a = this.chartArea,
      l = a.width <= 0 || a.height <= 0;
    (this._layers = []),
      Gt(
        this.boxes,
        (r) => {
          (l && r.position === "chartArea") ||
            (r.configure && r.configure(), this._layers.push(...r._layers()));
        },
        this
      ),
      this._layers.forEach((r, c) => {
        r._idx = c;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: e,
        cancelable: !0,
      }) !== !1
    ) {
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this.getDatasetMeta(a).controller.configure();
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this._updateDataset(a, Qi(e) ? e({ datasetIndex: a }) : e);
      this.notifyPlugins("afterDatasetsUpdate", { mode: e });
    }
  }
  _updateDataset(e, a) {
    const l = this.getDatasetMeta(e),
      r = { meta: l, index: e, mode: a, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
      (l.controller._update(a),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (li.has(this)
        ? this.attached && !li.running(this) && li.start(this)
        : (this.draw(), A0({ chart: this })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: l, height: r } = this._resizeBeforeDraw;
      (this._resizeBeforeDraw = null), this._resize(l, r);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const a = this._layers;
    for (e = 0; e < a.length && a[e].z <= 0; ++e) a[e].draw(this.chartArea);
    for (this._drawDatasets(); e < a.length; ++e) a[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const a = this._sortedMetasets,
      l = [];
    let r, c;
    for (r = 0, c = a.length; r < c; ++r) {
      const u = a[r];
      (!e || u.visible) && l.push(u);
    }
    return l;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let a = e.length - 1; a >= 0; --a) this._drawDataset(e[a]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const a = this.ctx,
      l = { meta: e, index: e.index, cancelable: !0 },
      r = j_(this, e);
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 &&
      (r && eh(a, r),
      e.controller.draw(),
      r && nh(a),
      (l.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(e) {
    return Ul(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, a, l, r) {
    const c = ax.modes[a];
    return typeof c == "function" ? c(this, e, l, r) : [];
  }
  getDatasetMeta(e) {
    const a = this.data.datasets[e],
      l = this._metasets;
    let r = l.filter((c) => c && c._dataset === a).pop();
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (a && a.order) || 0,
          index: e,
          _dataset: a,
          _parsed: [],
          _sorted: !1,
        }),
        l.push(r)),
      r
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Ca(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const a = this.data.datasets[e];
    if (!a) return !1;
    const l = this.getDatasetMeta(e);
    return typeof l.hidden == "boolean" ? !l.hidden : !a.hidden;
  }
  setDatasetVisibility(e, a) {
    const l = this.getDatasetMeta(e);
    l.hidden = !a;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, a, l) {
    const r = l ? "show" : "hide",
      c = this.getDatasetMeta(e),
      u = c.controller._resolveAnimations(void 0, r);
    Hr(a)
      ? ((c.data[a].hidden = !l), this.update())
      : (this.setDatasetVisibility(e, l),
        u.update(c, { visible: l }),
        this.update((h) => (h.datasetIndex === e ? r : void 0)));
  }
  hide(e, a) {
    this._updateVisibility(e, a, !1);
  }
  show(e, a) {
    this._updateVisibility(e, a, !0);
  }
  _destroyDatasetMeta(e) {
    const a = this._metasets[e];
    a && a.controller && a.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, a;
    for (
      this.stop(), li.remove(this), e = 0, a = this.data.datasets.length;
      e < a;
      ++e
    )
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: a } = this;
    this._stop(),
      this.config.clearCache(),
      e &&
        (this.unbindEvents(),
        $m(e, a),
        this.platform.releaseContext(a),
        (this.canvas = null),
        (this.ctx = null)),
      delete Dr[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const e = this._listeners,
      a = this.platform,
      l = (c, u) => {
        a.addEventListener(this, c, u), (e[c] = u);
      },
      r = (c, u, h) => {
        (c.offsetX = u), (c.offsetY = h), this._eventHandler(c);
      };
    Gt(this.options.events, (c) => l(c, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners,
      a = this.platform,
      l = (p, d) => {
        a.addEventListener(this, p, d), (e[p] = d);
      },
      r = (p, d) => {
        e[p] && (a.removeEventListener(this, p, d), delete e[p]);
      },
      c = (p, d) => {
        this.canvas && this.resize(p, d);
      };
    let u;
    const h = () => {
      r("attach", h),
        (this.attached = !0),
        this.resize(),
        l("resize", c),
        l("detach", u);
    };
    (u = () => {
      (this.attached = !1),
        r("resize", c),
        this._stop(),
        this._resize(0, 0),
        l("attach", h);
    }),
      a.isAttached(this.canvas) ? h() : u();
  }
  unbindEvents() {
    Gt(this._listeners, (e, a) => {
      this.platform.removeEventListener(this, a, e);
    }),
      (this._listeners = {}),
      Gt(this._responsiveListeners, (e, a) => {
        this.platform.removeEventListener(this, a, e);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(e, a, l) {
    const r = l ? "set" : "remove";
    let c, u, h, p;
    for (
      a === "dataset" &&
        ((c = this.getDatasetMeta(e[0].datasetIndex)),
        c.controller["_" + r + "DatasetHoverStyle"]()),
        h = 0,
        p = e.length;
      h < p;
      ++h
    ) {
      u = e[h];
      const d = u && this.getDatasetMeta(u.datasetIndex).controller;
      d && d[r + "HoverStyle"](u.element, u.datasetIndex, u.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const a = this._active || [],
      l = e.map(({ datasetIndex: c, index: u }) => {
        const h = this.getDatasetMeta(c);
        if (!h) throw new Error("No dataset found at index " + c);
        return { datasetIndex: c, element: h.data[u], index: u };
      });
    !Rr(l, a) &&
      ((this._active = l),
      (this._lastEvent = null),
      this._updateHoverStyles(l, a));
  }
  notifyPlugins(e, a, l) {
    return this._plugins.notify(this, e, a, l);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((a) => a.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, a, l) {
    const r = this.options.hover,
      c = (p, d) =>
        p.filter(
          (m) =>
            !d.some(
              (b) => m.datasetIndex === b.datasetIndex && m.index === b.index
            )
        ),
      u = c(a, e),
      h = l ? e : c(e, a);
    u.length && this.updateHoverStyle(u, r.mode, !1),
      h.length && r.mode && this.updateHoverStyle(h, r.mode, !0);
  }
  _eventHandler(e, a) {
    const l = {
        event: e,
        replay: a,
        cancelable: !0,
        inChartArea: this.isPointInArea(e),
      },
      r = (u) =>
        (u.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", l, r) === !1) return;
    const c = this._handleEvent(e, a, l.inChartArea);
    return (
      (l.cancelable = !1),
      this.notifyPlugins("afterEvent", l, r),
      (c || l.changed) && this.render(),
      this
    );
  }
  _handleEvent(e, a, l) {
    const { _active: r = [], options: c } = this,
      u = a,
      h = this._getActiveElements(e, r, l, u),
      p = pw(e),
      d = oS(e, this._lastEvent, l, p);
    l &&
      ((this._lastEvent = null),
      Jt(c.onHover, [e, h, this], this),
      p && Jt(c.onClick, [e, h, this], this));
    const m = !Rr(h, r);
    return (
      (m || a) && ((this._active = h), this._updateHoverStyles(h, r, a)),
      (this._lastEvent = d),
      m
    );
  }
  _getActiveElements(e, a, l, r) {
    if (e.type === "mouseout") return [];
    if (!l) return a;
    const c = this.options.hover;
    return this.getElementsAtEventForMode(e, c.mode, c, r);
  }
};
function z0() {
  return Gt(_s.instances, (i) => i._plugins.invalidate());
}
function Yb(i, e, a = e) {
  (i.lineCap = Dt(a.borderCapStyle, e.borderCapStyle)),
    i.setLineDash(Dt(a.borderDash, e.borderDash)),
    (i.lineDashOffset = Dt(a.borderDashOffset, e.borderDashOffset)),
    (i.lineJoin = Dt(a.borderJoinStyle, e.borderJoinStyle)),
    (i.lineWidth = Dt(a.borderWidth, e.borderWidth)),
    (i.strokeStyle = Dt(a.borderColor, e.borderColor));
}
function rS(i, e, a) {
  i.lineTo(a.x, a.y);
}
function cS(i) {
  return i.stepped
    ? Gw
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? Xw
    : rS;
}
function Vb(i, e, a = {}) {
  const l = i.length,
    { start: r = 0, end: c = l - 1 } = a,
    { start: u, end: h } = e,
    p = Math.max(r, u),
    d = Math.min(c, h),
    m = (r < u && c < u) || (r > h && c > h);
  return {
    count: l,
    start: p,
    loop: e.loop,
    ilen: d < p && !m ? l + d - p : d - p,
  };
}
function uS(i, e, a, l) {
  const { points: r, options: c } = e,
    { count: u, start: h, loop: p, ilen: d } = Vb(r, a, l),
    m = cS(c);
  let { move: b = !0, reverse: w } = l || {},
    x,
    _,
    M;
  for (x = 0; x <= d; ++x)
    (_ = r[(h + (w ? d - x : x)) % u]),
      !_.skip &&
        (b ? (i.moveTo(_.x, _.y), (b = !1)) : m(i, M, _, w, c.stepped),
        (M = _));
  return p && ((_ = r[(h + (w ? d : 0)) % u]), m(i, M, _, w, c.stepped)), !!p;
}
function fS(i, e, a, l) {
  const r = e.points,
    { count: c, start: u, ilen: h } = Vb(r, a, l),
    { move: p = !0, reverse: d } = l || {};
  let m = 0,
    b = 0,
    w,
    x,
    _,
    M,
    O,
    E;
  const W = (J) => (u + (d ? h - J : J)) % c,
    K = () => {
      M !== O && (i.lineTo(m, O), i.lineTo(m, M), i.lineTo(m, E));
    };
  for (p && ((x = r[W(0)]), i.moveTo(x.x, x.y)), w = 0; w <= h; ++w) {
    if (((x = r[W(w)]), x.skip)) continue;
    const J = x.x,
      H = x.y,
      tt = J | 0;
    tt === _
      ? (H < M ? (M = H) : H > O && (O = H), (m = (b * m + J) / ++b))
      : (K(), i.lineTo(J, H), (_ = tt), (b = 0), (M = O = H)),
      (E = H);
  }
  K();
}
function Gf(i) {
  const e = i.options,
    a = e.borderDash && e.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !a
    ? fS
    : uS;
}
function hS(i) {
  return i.stepped
    ? C_
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? E_
    : ba;
}
function dS(i, e, a, l) {
  let r = e._path;
  r || ((r = e._path = new Path2D()), e.path(r, a, l) && r.closePath()),
    Yb(i, e.options),
    i.stroke(r);
}
function gS(i, e, a, l) {
  const { segments: r, options: c } = e,
    u = Gf(e);
  for (const h of r)
    Yb(i, c, h.style),
      i.beginPath(),
      u(i, e, h, { start: a, end: a + l - 1 }) && i.closePath(),
      i.stroke();
}
const pS = typeof Path2D == "function";
function mS(i, e, a, l) {
  pS && !e.options.segment ? dS(i, e, a, l) : gS(i, e, a, l);
}
class ch extends vs {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  };
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, a) {
    const l = this.options;
    if (
      (l.tension || l.cubicInterpolationMode === "monotone") &&
      !l.stepped &&
      !this._pointsUpdated
    ) {
      const r = l.spanGaps ? this._loop : this._fullLoop;
      m_(this._points, l, e, r, a), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = R_(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      a = this.points;
    return e.length && a[e[0].start];
  }
  last() {
    const e = this.segments,
      a = this.points,
      l = e.length;
    return l && a[e[l - 1].end];
  }
  interpolate(e, a) {
    const l = this.options,
      r = e[a],
      c = this.points,
      u = z_(this, { property: a, start: r, end: r });
    if (!u.length) return;
    const h = [],
      p = hS(l);
    let d, m;
    for (d = 0, m = u.length; d < m; ++d) {
      const { start: b, end: w } = u[d],
        x = c[b],
        _ = c[w];
      if (x === _) {
        h.push(x);
        continue;
      }
      const M = Math.abs((r - x[a]) / (_[a] - x[a])),
        O = p(x, _, M, l.stepped);
      (O[a] = e[a]), h.push(O);
    }
    return h.length === 1 ? h[0] : h;
  }
  pathSegment(e, a, l) {
    return Gf(this)(e, this, a, l);
  }
  path(e, a, l) {
    const r = this.segments,
      c = Gf(this);
    let u = this._loop;
    (a = a || 0), (l = l || this.points.length - a);
    for (const h of r) u &= c(e, this, h, { start: a, end: a + l - 1 });
    return !!u;
  }
  draw(e, a, l, r) {
    const c = this.options || {};
    (this.points || []).length &&
      c.borderWidth &&
      (e.save(), mS(e, this, l, r), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
function D0(i, e, a, l) {
  const r = i.options,
    { [a]: c } = i.getProps([a], l);
  return Math.abs(e - c) < r.radius + r.hitRadius;
}
class uh extends vs {
  static id = "point";
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  constructor(e) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, a, l) {
    const r = this.options,
      { x: c, y: u } = this.getProps(["x", "y"], l);
    return (
      Math.pow(e - c, 2) + Math.pow(a - u, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(e, a) {
    return D0(this, e, "x", a);
  }
  inYRange(e, a) {
    return D0(this, e, "y", a);
  }
  getCenterPoint(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  size(e) {
    e = e || this.options || {};
    let a = e.radius || 0;
    a = Math.max(a, (a && e.hoverRadius) || 0);
    const l = (a && e.borderWidth) || 0;
    return (a + l) * 2;
  }
  draw(e, a) {
    const l = this.options;
    this.skip ||
      l.radius < 0.1 ||
      !Ul(this, a, this.size(l) / 2) ||
      ((e.strokeStyle = l.borderColor),
      (e.lineWidth = l.borderWidth),
      (e.fillStyle = l.backgroundColor),
      Ff(e, l, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
const k0 = (i, e) => {
    let { boxHeight: a = e, boxWidth: l = e } = i;
    return (
      i.usePointStyle &&
        ((a = Math.min(a, e)), (l = i.pointStyleWidth || Math.min(l, e))),
      { boxWidth: l, boxHeight: a, itemHeight: Math.max(e, a) }
    );
  },
  bS = (i, e) =>
    i !== null &&
    e !== null &&
    i.datasetIndex === e.datasetIndex &&
    i.index === e.index;
class R0 extends vs {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, a, l) {
    (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let a = Jt(e.generateLabels, [this.chart], this) || [];
    e.filter && (a = a.filter((l) => e.filter(l, this.chart.data))),
      e.sort && (a = a.sort((l, r) => e.sort(l, r, this.chart.data))),
      this.options.reverse && a.reverse(),
      (this.legendItems = a);
  }
  fit() {
    const { options: e, ctx: a } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const l = e.labels,
      r = Ge(l.font),
      c = r.size,
      u = this._computeTitleHeight(),
      { boxWidth: h, itemHeight: p } = k0(l, c);
    let d, m;
    (a.font = r.string),
      this.isHorizontal()
        ? ((d = this.maxWidth), (m = this._fitRows(u, c, h, p) + 10))
        : ((m = this.maxHeight), (d = this._fitCols(u, r, h, p) + 10)),
      (this.width = Math.min(d, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(m, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, a, l, r) {
    const {
        ctx: c,
        maxWidth: u,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.lineWidths = [0]),
      m = r + h;
    let b = e;
    (c.textAlign = "left"), (c.textBaseline = "middle");
    let w = -1,
      x = -m;
    return (
      this.legendItems.forEach((_, M) => {
        const O = l + a / 2 + c.measureText(_.text).width;
        (M === 0 || d[d.length - 1] + O + 2 * h > u) &&
          ((b += m), (d[d.length - (M > 0 ? 0 : 1)] = 0), (x += m), w++),
          (p[M] = { left: 0, top: x, row: w, width: O, height: r }),
          (d[d.length - 1] += O + h);
      }),
      b
    );
  }
  _fitCols(e, a, l, r) {
    const {
        ctx: c,
        maxHeight: u,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.columnSizes = []),
      m = u - e;
    let b = h,
      w = 0,
      x = 0,
      _ = 0,
      M = 0;
    return (
      this.legendItems.forEach((O, E) => {
        const { itemWidth: W, itemHeight: K } = yS(l, a, c, O, r);
        E > 0 &&
          x + K + 2 * h > m &&
          ((b += w + h),
          d.push({ width: w, height: x }),
          (_ += w + h),
          M++,
          (w = x = 0)),
          (p[E] = { left: _, top: x, col: M, width: W, height: K }),
          (w = Math.max(w, W)),
          (x += K + h);
      }),
      (b += w),
      d.push({ width: w, height: x }),
      b
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: a,
        options: {
          align: l,
          labels: { padding: r },
          rtl: c,
        },
      } = this,
      u = hs(c, this.left, this.width);
    if (this.isHorizontal()) {
      let h = 0,
        p = tn(l, this.left + r, this.right - this.lineWidths[h]);
      for (const d of a)
        h !== d.row &&
          ((h = d.row),
          (p = tn(l, this.left + r, this.right - this.lineWidths[h]))),
          (d.top += this.top + e + r),
          (d.left = u.leftForLtr(u.x(p), d.width)),
          (p += d.width + r);
    } else {
      let h = 0,
        p = tn(l, this.top + e + r, this.bottom - this.columnSizes[h].height);
      for (const d of a)
        d.col !== h &&
          ((h = d.col),
          (p = tn(
            l,
            this.top + e + r,
            this.bottom - this.columnSizes[h].height
          ))),
          (d.top = p),
          (d.left += this.left + r),
          (d.left = u.leftForLtr(u.x(d.left), d.width)),
          (p += d.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      eh(e, this), this._draw(), nh(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: a, lineWidths: l, ctx: r } = this,
      { align: c, labels: u } = e,
      h = ue.color,
      p = hs(e.rtl, this.left, this.width),
      d = Ge(u.font),
      { padding: m } = u,
      b = d.size,
      w = b / 2;
    let x;
    this.drawTitle(),
      (r.textAlign = p.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = d.string);
    const { boxWidth: _, boxHeight: M, itemHeight: O } = k0(u, b),
      E = function (tt, T, S) {
        if (isNaN(_) || _ <= 0 || isNaN(M) || M < 0) return;
        r.save();
        const v = Dt(S.lineWidth, 1);
        if (
          ((r.fillStyle = Dt(S.fillStyle, h)),
          (r.lineCap = Dt(S.lineCap, "butt")),
          (r.lineDashOffset = Dt(S.lineDashOffset, 0)),
          (r.lineJoin = Dt(S.lineJoin, "miter")),
          (r.lineWidth = v),
          (r.strokeStyle = Dt(S.strokeStyle, h)),
          r.setLineDash(Dt(S.lineDash, [])),
          u.usePointStyle)
        ) {
          const N = {
              radius: (M * Math.SQRT2) / 2,
              pointStyle: S.pointStyle,
              rotation: S.rotation,
              borderWidth: v,
            },
            R = p.xPlus(tt, _ / 2),
            B = T + w;
          wb(r, N, R, B, u.pointStyleWidth && _);
        } else {
          const N = T + Math.max((b - M) / 2, 0),
            R = p.leftForLtr(tt, _),
            B = Ll(S.borderRadius);
          r.beginPath(),
            Object.values(B).some(($) => $ !== 0)
              ? qf(r, { x: R, y: N, w: _, h: M, radius: B })
              : r.rect(R, N, _, M),
            r.fill(),
            v !== 0 && r.stroke();
        }
        r.restore();
      },
      W = function (tt, T, S) {
        Nr(r, S.text, tt, T + O / 2, d, {
          strikethrough: S.hidden,
          textAlign: p.textAlign(S.textAlign),
        });
      },
      K = this.isHorizontal(),
      J = this._computeTitleHeight();
    K
      ? (x = {
          x: tn(c, this.left + m, this.right - l[0]),
          y: this.top + m + J,
          line: 0,
        })
      : (x = {
          x: this.left + m,
          y: tn(c, this.top + J + m, this.bottom - a[0].height),
          line: 0,
        }),
      Tb(this.ctx, e.textDirection);
    const H = O + m;
    this.legendItems.forEach((tt, T) => {
      (r.strokeStyle = tt.fontColor), (r.fillStyle = tt.fontColor);
      const S = r.measureText(tt.text).width,
        v = p.textAlign(tt.textAlign || (tt.textAlign = u.textAlign)),
        N = _ + w + S;
      let R = x.x,
        B = x.y;
      p.setWidth(this.width),
        K
          ? T > 0 &&
            R + N + m > this.right &&
            ((B = x.y += H),
            x.line++,
            (R = x.x = tn(c, this.left + m, this.right - l[x.line])))
          : T > 0 &&
            B + H > this.bottom &&
            ((R = x.x = R + a[x.line].width + m),
            x.line++,
            (B = x.y =
              tn(c, this.top + J + m, this.bottom - a[x.line].height)));
      const $ = p.x(R);
      if (
        (E($, B, tt),
        (R = Dw(v, R + _ + w, K ? R + N : this.right, e.rtl)),
        W(p.x(R), B, tt),
        K)
      )
        x.x += N + m;
      else if (typeof tt.text != "string") {
        const st = d.lineHeight;
        x.y += Gb(tt, st) + m;
      } else x.y += H;
    }),
      Ab(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      a = e.title,
      l = Ge(a.font),
      r = Tn(a.padding);
    if (!a.display) return;
    const c = hs(e.rtl, this.left, this.width),
      u = this.ctx,
      h = a.position,
      p = l.size / 2,
      d = r.top + p;
    let m,
      b = this.left,
      w = this.width;
    if (this.isHorizontal())
      (w = Math.max(...this.lineWidths)),
        (m = this.top + d),
        (b = tn(e.align, b, this.right - w));
    else {
      const _ = this.columnSizes.reduce((M, O) => Math.max(M, O.height), 0);
      m =
        d +
        tn(
          e.align,
          this.top,
          this.bottom - _ - e.labels.padding - this._computeTitleHeight()
        );
    }
    const x = tn(h, b, b + w);
    (u.textAlign = c.textAlign(bb(h))),
      (u.textBaseline = "middle"),
      (u.strokeStyle = a.color),
      (u.fillStyle = a.color),
      (u.font = l.string),
      Nr(u, a.text, x, m, l);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      a = Ge(e.font),
      l = Tn(e.padding);
    return e.display ? a.lineHeight + l.height : 0;
  }
  _getLegendItemAt(e, a) {
    let l, r, c;
    if (Al(e, this.left, this.right) && Al(a, this.top, this.bottom)) {
      for (c = this.legendHitBoxes, l = 0; l < c.length; ++l)
        if (
          ((r = c[l]),
          Al(e, r.left, r.left + r.width) && Al(a, r.top, r.top + r.height))
        )
          return this.legendItems[l];
    }
    return null;
  }
  handleEvent(e) {
    const a = this.options;
    if (!_S(e.type, a)) return;
    const l = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const r = this._hoveredItem,
        c = bS(r, l);
      r && !c && Jt(a.onLeave, [e, r, this], this),
        (this._hoveredItem = l),
        l && !c && Jt(a.onHover, [e, l, this], this);
    } else l && Jt(a.onClick, [e, l, this], this);
  }
}
function yS(i, e, a, l, r) {
  const c = vS(l, i, e, a),
    u = wS(r, l, e.lineHeight);
  return { itemWidth: c, itemHeight: u };
}
function vS(i, e, a, l) {
  let r = i.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((c, u) => (c.length > u.length ? c : u))),
    e + a.size / 2 + l.measureText(r).width
  );
}
function wS(i, e, a) {
  let l = i;
  return typeof e.text != "string" && (l = Gb(e, a)), l;
}
function Gb(i, e) {
  const a = i.text ? i.text.length : 0;
  return e * a;
}
function _S(i, e) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (i === "click" || i === "mouseup"))
  );
}
var fh = {
  id: "legend",
  _element: R0,
  start(i, e, a) {
    const l = (i.legend = new R0({ ctx: i.ctx, options: a, chart: i }));
    qi.configure(i, l, a), qi.addBox(i, l);
  },
  stop(i) {
    qi.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, e, a) {
    const l = i.legend;
    qi.configure(i, l, a), (l.options = a);
  },
  afterUpdate(i) {
    const e = i.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(i, e) {
    e.replay || i.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, e, a) {
      const l = e.datasetIndex,
        r = a.chart;
      r.isDatasetVisible(l)
        ? (r.hide(l), (e.hidden = !0))
        : (r.show(l), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const e = i.data.datasets,
          {
            labels: {
              usePointStyle: a,
              pointStyle: l,
              textAlign: r,
              color: c,
              useBorderRadius: u,
              borderRadius: h,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((p) => {
          const d = p.controller.getStyle(a ? 0 : void 0),
            m = Tn(d.borderWidth);
          return {
            text: e[p.index].label,
            fillStyle: d.backgroundColor,
            fontColor: c,
            hidden: !p.visible,
            lineCap: d.borderCapStyle,
            lineDash: d.borderDash,
            lineDashOffset: d.borderDashOffset,
            lineJoin: d.borderJoinStyle,
            lineWidth: (m.width + m.height) / 4,
            strokeStyle: d.borderColor,
            pointStyle: l || d.pointStyle,
            rotation: d.rotation,
            textAlign: r || d.textAlign,
            borderRadius: u && (h || d.borderRadius),
            datasetIndex: p.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
const zl = {
  average(i) {
    if (!i.length) return !1;
    let e,
      a,
      l = new Set(),
      r = 0,
      c = 0;
    for (e = 0, a = i.length; e < a; ++e) {
      const h = i[e].element;
      if (h && h.hasValue()) {
        const p = h.tooltipPosition();
        l.add(p.x), (r += p.y), ++c;
      }
    }
    return c === 0 || l.size === 0
      ? !1
      : { x: [...l].reduce((h, p) => h + p) / l.size, y: r / c };
  },
  nearest(i, e) {
    if (!i.length) return !1;
    let a = e.x,
      l = e.y,
      r = Number.POSITIVE_INFINITY,
      c,
      u,
      h;
    for (c = 0, u = i.length; c < u; ++c) {
      const p = i[c].element;
      if (p && p.hasValue()) {
        const d = p.getCenterPoint(),
          m = Nf(e, d);
        m < r && ((r = m), (h = p));
      }
    }
    if (h) {
      const p = h.tooltipPosition();
      (a = p.x), (l = p.y);
    }
    return { x: a, y: l };
  },
};
function Ln(i, e) {
  return e && (Me(e) ? Array.prototype.push.apply(i, e) : i.push(e)), i;
}
function oi(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function xS(i, e) {
  const { element: a, datasetIndex: l, index: r } = e,
    c = i.getDatasetMeta(l).controller,
    { label: u, value: h } = c.getLabelAndValue(r);
  return {
    chart: i,
    label: u,
    parsed: c.getParsed(r),
    raw: i.data.datasets[l].data[r],
    formattedValue: h,
    dataset: c.getDataset(),
    dataIndex: r,
    datasetIndex: l,
    element: a,
  };
}
function B0(i, e) {
  const a = i.chart.ctx,
    { body: l, footer: r, title: c } = i,
    { boxWidth: u, boxHeight: h } = e,
    p = Ge(e.bodyFont),
    d = Ge(e.titleFont),
    m = Ge(e.footerFont),
    b = c.length,
    w = r.length,
    x = l.length,
    _ = Tn(e.padding);
  let M = _.height,
    O = 0,
    E = l.reduce(
      (J, H) => J + H.before.length + H.lines.length + H.after.length,
      0
    );
  if (
    ((E += i.beforeBody.length + i.afterBody.length),
    b &&
      (M += b * d.lineHeight + (b - 1) * e.titleSpacing + e.titleMarginBottom),
    E)
  ) {
    const J = e.displayColors ? Math.max(h, p.lineHeight) : p.lineHeight;
    M += x * J + (E - x) * p.lineHeight + (E - 1) * e.bodySpacing;
  }
  w && (M += e.footerMarginTop + w * m.lineHeight + (w - 1) * e.footerSpacing);
  let W = 0;
  const K = function (J) {
    O = Math.max(O, a.measureText(J).width + W);
  };
  return (
    a.save(),
    (a.font = d.string),
    Gt(i.title, K),
    (a.font = p.string),
    Gt(i.beforeBody.concat(i.afterBody), K),
    (W = e.displayColors ? u + 2 + e.boxPadding : 0),
    Gt(l, (J) => {
      Gt(J.before, K), Gt(J.lines, K), Gt(J.after, K);
    }),
    (W = 0),
    (a.font = m.string),
    Gt(i.footer, K),
    a.restore(),
    (O += _.width),
    { width: O, height: M }
  );
}
function SS(i, e) {
  const { y: a, height: l } = e;
  return a < l / 2 ? "top" : a > i.height - l / 2 ? "bottom" : "center";
}
function CS(i, e, a, l) {
  const { x: r, width: c } = l,
    u = a.caretSize + a.caretPadding;
  if ((i === "left" && r + c + u > e.width) || (i === "right" && r - c - u < 0))
    return !0;
}
function ES(i, e, a, l) {
  const { x: r, width: c } = a,
    {
      width: u,
      chartArea: { left: h, right: p },
    } = i;
  let d = "center";
  return (
    l === "center"
      ? (d = r <= (h + p) / 2 ? "left" : "right")
      : r <= c / 2
      ? (d = "left")
      : r >= u - c / 2 && (d = "right"),
    CS(d, i, e, a) && (d = "center"),
    d
  );
}
function L0(i, e, a) {
  const l = a.yAlign || e.yAlign || SS(i, a);
  return { xAlign: a.xAlign || e.xAlign || ES(i, e, a, l), yAlign: l };
}
function MS(i, e) {
  let { x: a, width: l } = i;
  return e === "right" ? (a -= l) : e === "center" && (a -= l / 2), a;
}
function TS(i, e, a) {
  let { y: l, height: r } = i;
  return (
    e === "top" ? (l += a) : e === "bottom" ? (l -= r + a) : (l -= r / 2), l
  );
}
function H0(i, e, a, l) {
  const { caretSize: r, caretPadding: c, cornerRadius: u } = i,
    { xAlign: h, yAlign: p } = a,
    d = r + c,
    { topLeft: m, topRight: b, bottomLeft: w, bottomRight: x } = Ll(u);
  let _ = MS(e, h);
  const M = TS(e, p, d);
  return (
    p === "center"
      ? h === "left"
        ? (_ += d)
        : h === "right" && (_ -= d)
      : h === "left"
      ? (_ -= Math.max(m, w) + r)
      : h === "right" && (_ += Math.max(b, x) + r),
    { x: vn(_, 0, l.width - e.width), y: vn(M, 0, l.height - e.height) }
  );
}
function Er(i, e, a) {
  const l = Tn(a.padding);
  return e === "center"
    ? i.x + i.width / 2
    : e === "right"
    ? i.x + i.width - l.right
    : i.x + l.left;
}
function j0(i) {
  return Ln([], oi(i));
}
function AS(i, e, a) {
  return Ca(i, { tooltip: e, tooltipItems: a, type: "tooltip" });
}
function N0(i, e) {
  const a = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return a ? i.override(a) : i;
}
const Xb = {
  beforeTitle: si,
  title(i) {
    if (i.length > 0) {
      const e = i[0],
        a = e.chart.data.labels,
        l = a ? a.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (l > 0 && e.dataIndex < l) return a[e.dataIndex];
    }
    return "";
  },
  afterTitle: si,
  beforeBody: si,
  beforeLabel: si,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let e = i.dataset.label || "";
    e && (e += ": ");
    const a = i.formattedValue;
    return Pt(a) || (e += a), e;
  },
  labelColor(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: a.borderColor,
      backgroundColor: a.backgroundColor,
      borderWidth: a.borderWidth,
      borderDash: a.borderDash,
      borderDashOffset: a.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: a.pointStyle, rotation: a.rotation };
  },
  afterLabel: si,
  afterBody: si,
  beforeFooter: si,
  footer: si,
  afterFooter: si,
};
function Ye(i, e, a, l) {
  const r = i[e].call(a, l);
  return typeof r > "u" ? Xb[e].call(a, l) : r;
}
class U0 extends vs {
  static positioners = zl;
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(e) {
    (this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const a = this.chart,
      l = this.options.setContext(this.getContext()),
      r = l.enabled && a.options.animation && l.animations,
      c = new zb(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(c)), c;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = AS(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, a) {
    const { callbacks: l } = a,
      r = Ye(l, "beforeTitle", this, e),
      c = Ye(l, "title", this, e),
      u = Ye(l, "afterTitle", this, e);
    let h = [];
    return (h = Ln(h, oi(r))), (h = Ln(h, oi(c))), (h = Ln(h, oi(u))), h;
  }
  getBeforeBody(e, a) {
    return j0(Ye(a.callbacks, "beforeBody", this, e));
  }
  getBody(e, a) {
    const { callbacks: l } = a,
      r = [];
    return (
      Gt(e, (c) => {
        const u = { before: [], lines: [], after: [] },
          h = N0(l, c);
        Ln(u.before, oi(Ye(h, "beforeLabel", this, c))),
          Ln(u.lines, Ye(h, "label", this, c)),
          Ln(u.after, oi(Ye(h, "afterLabel", this, c))),
          r.push(u);
      }),
      r
    );
  }
  getAfterBody(e, a) {
    return j0(Ye(a.callbacks, "afterBody", this, e));
  }
  getFooter(e, a) {
    const { callbacks: l } = a,
      r = Ye(l, "beforeFooter", this, e),
      c = Ye(l, "footer", this, e),
      u = Ye(l, "afterFooter", this, e);
    let h = [];
    return (h = Ln(h, oi(r))), (h = Ln(h, oi(c))), (h = Ln(h, oi(u))), h;
  }
  _createItems(e) {
    const a = this._active,
      l = this.chart.data,
      r = [],
      c = [],
      u = [];
    let h = [],
      p,
      d;
    for (p = 0, d = a.length; p < d; ++p) h.push(xS(this.chart, a[p]));
    return (
      e.filter && (h = h.filter((m, b, w) => e.filter(m, b, w, l))),
      e.itemSort && (h = h.sort((m, b) => e.itemSort(m, b, l))),
      Gt(h, (m) => {
        const b = N0(e.callbacks, m);
        r.push(Ye(b, "labelColor", this, m)),
          c.push(Ye(b, "labelPointStyle", this, m)),
          u.push(Ye(b, "labelTextColor", this, m));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = c),
      (this.labelTextColors = u),
      (this.dataPoints = h),
      h
    );
  }
  update(e, a) {
    const l = this.options.setContext(this.getContext()),
      r = this._active;
    let c,
      u = [];
    if (!r.length) this.opacity !== 0 && (c = { opacity: 0 });
    else {
      const h = zl[l.position].call(this, r, this._eventPosition);
      (u = this._createItems(l)),
        (this.title = this.getTitle(u, l)),
        (this.beforeBody = this.getBeforeBody(u, l)),
        (this.body = this.getBody(u, l)),
        (this.afterBody = this.getAfterBody(u, l)),
        (this.footer = this.getFooter(u, l));
      const p = (this._size = B0(this, l)),
        d = Object.assign({}, h, p),
        m = L0(this.chart, l, d),
        b = H0(l, d, m, this.chart);
      (this.xAlign = m.xAlign),
        (this.yAlign = m.yAlign),
        (c = {
          opacity: 1,
          x: b.x,
          y: b.y,
          width: p.width,
          height: p.height,
          caretX: h.x,
          caretY: h.y,
        });
    }
    (this._tooltipItems = u),
      (this.$context = void 0),
      c && this._resolveAnimations().update(this, c),
      e &&
        l.external &&
        l.external.call(this, { chart: this.chart, tooltip: this, replay: a });
  }
  drawCaret(e, a, l, r) {
    const c = this.getCaretPosition(e, l, r);
    a.lineTo(c.x1, c.y1), a.lineTo(c.x2, c.y2), a.lineTo(c.x3, c.y3);
  }
  getCaretPosition(e, a, l) {
    const { xAlign: r, yAlign: c } = this,
      { caretSize: u, cornerRadius: h } = l,
      { topLeft: p, topRight: d, bottomLeft: m, bottomRight: b } = Ll(h),
      { x: w, y: x } = e,
      { width: _, height: M } = a;
    let O, E, W, K, J, H;
    return (
      c === "center"
        ? ((J = x + M / 2),
          r === "left"
            ? ((O = w), (E = O - u), (K = J + u), (H = J - u))
            : ((O = w + _), (E = O + u), (K = J - u), (H = J + u)),
          (W = O))
        : (r === "left"
            ? (E = w + Math.max(p, m) + u)
            : r === "right"
            ? (E = w + _ - Math.max(d, b) - u)
            : (E = this.caretX),
          c === "top"
            ? ((K = x), (J = K - u), (O = E - u), (W = E + u))
            : ((K = x + M), (J = K + u), (O = E + u), (W = E - u)),
          (H = K)),
      { x1: O, x2: E, x3: W, y1: K, y2: J, y3: H }
    );
  }
  drawTitle(e, a, l) {
    const r = this.title,
      c = r.length;
    let u, h, p;
    if (c) {
      const d = hs(l.rtl, this.x, this.width);
      for (
        e.x = Er(this, l.titleAlign, l),
          a.textAlign = d.textAlign(l.titleAlign),
          a.textBaseline = "middle",
          u = Ge(l.titleFont),
          h = l.titleSpacing,
          a.fillStyle = l.titleColor,
          a.font = u.string,
          p = 0;
        p < c;
        ++p
      )
        a.fillText(r[p], d.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + h),
          p + 1 === c && (e.y += l.titleMarginBottom - h);
    }
  }
  _drawColorBox(e, a, l, r, c) {
    const u = this.labelColors[l],
      h = this.labelPointStyles[l],
      { boxHeight: p, boxWidth: d } = c,
      m = Ge(c.bodyFont),
      b = Er(this, "left", c),
      w = r.x(b),
      x = p < m.lineHeight ? (m.lineHeight - p) / 2 : 0,
      _ = a.y + x;
    if (c.usePointStyle) {
      const M = {
          radius: Math.min(d, p) / 2,
          pointStyle: h.pointStyle,
          rotation: h.rotation,
          borderWidth: 1,
        },
        O = r.leftForLtr(w, d) + d / 2,
        E = _ + p / 2;
      (e.strokeStyle = c.multiKeyBackground),
        (e.fillStyle = c.multiKeyBackground),
        Ff(e, M, O, E),
        (e.strokeStyle = u.borderColor),
        (e.fillStyle = u.backgroundColor),
        Ff(e, M, O, E);
    } else {
      (e.lineWidth = Lt(u.borderWidth)
        ? Math.max(...Object.values(u.borderWidth))
        : u.borderWidth || 1),
        (e.strokeStyle = u.borderColor),
        e.setLineDash(u.borderDash || []),
        (e.lineDashOffset = u.borderDashOffset || 0);
      const M = r.leftForLtr(w, d),
        O = r.leftForLtr(r.xPlus(w, 1), d - 2),
        E = Ll(u.borderRadius);
      Object.values(E).some((W) => W !== 0)
        ? (e.beginPath(),
          (e.fillStyle = c.multiKeyBackground),
          qf(e, { x: M, y: _, w: d, h: p, radius: E }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = u.backgroundColor),
          e.beginPath(),
          qf(e, { x: O, y: _ + 1, w: d - 2, h: p - 2, radius: E }),
          e.fill())
        : ((e.fillStyle = c.multiKeyBackground),
          e.fillRect(M, _, d, p),
          e.strokeRect(M, _, d, p),
          (e.fillStyle = u.backgroundColor),
          e.fillRect(O, _ + 1, d - 2, p - 2));
    }
    e.fillStyle = this.labelTextColors[l];
  }
  drawBody(e, a, l) {
    const { body: r } = this,
      {
        bodySpacing: c,
        bodyAlign: u,
        displayColors: h,
        boxHeight: p,
        boxWidth: d,
        boxPadding: m,
      } = l,
      b = Ge(l.bodyFont);
    let w = b.lineHeight,
      x = 0;
    const _ = hs(l.rtl, this.x, this.width),
      M = function (S) {
        a.fillText(S, _.x(e.x + x), e.y + w / 2), (e.y += w + c);
      },
      O = _.textAlign(u);
    let E, W, K, J, H, tt, T;
    for (
      a.textAlign = u,
        a.textBaseline = "middle",
        a.font = b.string,
        e.x = Er(this, O, l),
        a.fillStyle = l.bodyColor,
        Gt(this.beforeBody, M),
        x = h && O !== "right" ? (u === "center" ? d / 2 + m : d + 2 + m) : 0,
        J = 0,
        tt = r.length;
      J < tt;
      ++J
    ) {
      for (
        E = r[J],
          W = this.labelTextColors[J],
          a.fillStyle = W,
          Gt(E.before, M),
          K = E.lines,
          h &&
            K.length &&
            (this._drawColorBox(a, e, J, _, l),
            (w = Math.max(b.lineHeight, p))),
          H = 0,
          T = K.length;
        H < T;
        ++H
      )
        M(K[H]), (w = b.lineHeight);
      Gt(E.after, M);
    }
    (x = 0), (w = b.lineHeight), Gt(this.afterBody, M), (e.y -= c);
  }
  drawFooter(e, a, l) {
    const r = this.footer,
      c = r.length;
    let u, h;
    if (c) {
      const p = hs(l.rtl, this.x, this.width);
      for (
        e.x = Er(this, l.footerAlign, l),
          e.y += l.footerMarginTop,
          a.textAlign = p.textAlign(l.footerAlign),
          a.textBaseline = "middle",
          u = Ge(l.footerFont),
          a.fillStyle = l.footerColor,
          a.font = u.string,
          h = 0;
        h < c;
        ++h
      )
        a.fillText(r[h], p.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + l.footerSpacing);
    }
  }
  drawBackground(e, a, l, r) {
    const { xAlign: c, yAlign: u } = this,
      { x: h, y: p } = e,
      { width: d, height: m } = l,
      {
        topLeft: b,
        topRight: w,
        bottomLeft: x,
        bottomRight: _,
      } = Ll(r.cornerRadius);
    (a.fillStyle = r.backgroundColor),
      (a.strokeStyle = r.borderColor),
      (a.lineWidth = r.borderWidth),
      a.beginPath(),
      a.moveTo(h + b, p),
      u === "top" && this.drawCaret(e, a, l, r),
      a.lineTo(h + d - w, p),
      a.quadraticCurveTo(h + d, p, h + d, p + w),
      u === "center" && c === "right" && this.drawCaret(e, a, l, r),
      a.lineTo(h + d, p + m - _),
      a.quadraticCurveTo(h + d, p + m, h + d - _, p + m),
      u === "bottom" && this.drawCaret(e, a, l, r),
      a.lineTo(h + x, p + m),
      a.quadraticCurveTo(h, p + m, h, p + m - x),
      u === "center" && c === "left" && this.drawCaret(e, a, l, r),
      a.lineTo(h, p + b),
      a.quadraticCurveTo(h, p, h + b, p),
      a.closePath(),
      a.fill(),
      r.borderWidth > 0 && a.stroke();
  }
  _updateAnimationTarget(e) {
    const a = this.chart,
      l = this.$animations,
      r = l && l.x,
      c = l && l.y;
    if (r || c) {
      const u = zl[e.position].call(this, this._active, this._eventPosition);
      if (!u) return;
      const h = (this._size = B0(this, e)),
        p = Object.assign({}, u, this._size),
        d = L0(a, e, p),
        m = H0(e, p, d, a);
      (r._to !== m.x || c._to !== m.y) &&
        ((this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (this.width = h.width),
        (this.height = h.height),
        (this.caretX = u.x),
        (this.caretY = u.y),
        this._resolveAnimations().update(this, m));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const a = this.options.setContext(this.getContext());
    let l = this.opacity;
    if (!l) return;
    this._updateAnimationTarget(a);
    const r = { width: this.width, height: this.height },
      c = { x: this.x, y: this.y };
    l = Math.abs(l) < 0.001 ? 0 : l;
    const u = Tn(a.padding),
      h =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    a.enabled &&
      h &&
      (e.save(),
      (e.globalAlpha = l),
      this.drawBackground(c, e, r, a),
      Tb(e, a.textDirection),
      (c.y += u.top),
      this.drawTitle(c, e, a),
      this.drawBody(c, e, a),
      this.drawFooter(c, e, a),
      Ab(e, a.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, a) {
    const l = this._active,
      r = e.map(({ datasetIndex: h, index: p }) => {
        const d = this.chart.getDatasetMeta(h);
        if (!d) throw new Error("Cannot find a dataset at index " + h);
        return { datasetIndex: h, element: d.data[p], index: p };
      }),
      c = !Rr(l, r),
      u = this._positionChanged(r, a);
    (c || u) &&
      ((this._active = r),
      (this._eventPosition = a),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, a, l = !0) {
    if (a && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      c = this._active || [],
      u = this._getActiveElements(e, c, a, l),
      h = this._positionChanged(u, e),
      p = a || !Rr(u, c) || h;
    return (
      p &&
        ((this._active = u),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, a))),
      p
    );
  }
  _getActiveElements(e, a, l, r) {
    const c = this.options;
    if (e.type === "mouseout") return [];
    if (!r)
      return a.filter(
        (h) =>
          this.chart.data.datasets[h.datasetIndex] &&
          this.chart
            .getDatasetMeta(h.datasetIndex)
            .controller.getParsed(h.index) !== void 0
      );
    const u = this.chart.getElementsAtEventForMode(e, c.mode, c, l);
    return c.reverse && u.reverse(), u;
  }
  _positionChanged(e, a) {
    const { caretX: l, caretY: r, options: c } = this,
      u = zl[c.position].call(this, e, a);
    return u !== !1 && (l !== u.x || r !== u.y);
  }
}
var hh = {
  id: "tooltip",
  _element: U0,
  positioners: zl,
  afterInit(i, e, a) {
    a && (i.tooltip = new U0({ chart: i, options: a }));
  },
  beforeUpdate(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  reset(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  afterDraw(i) {
    const e = i.tooltip;
    if (e && e._willRender()) {
      const a = { tooltip: e };
      if (i.notifyPlugins("beforeTooltipDraw", { ...a, cancelable: !0 }) === !1)
        return;
      e.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", a);
    }
  },
  afterEvent(i, e) {
    if (i.tooltip) {
      const a = e.replay;
      i.tooltip.handleEvent(e.event, a, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, e) => e.bodyFont.size,
    boxWidth: (i, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Xb,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const OS = (i, e, a, l) => (
  typeof e == "string"
    ? ((a = i.push(e) - 1), l.unshift({ index: a, label: e }))
    : isNaN(e) && (a = null),
  a
);
function zS(i, e, a, l) {
  const r = i.indexOf(e);
  if (r === -1) return OS(i, e, a, l);
  const c = i.lastIndexOf(e);
  return r !== c ? a : r;
}
const DS = (i, e) => (i === null ? null : vn(Math.round(i), 0, e));
function F0(i) {
  const e = this.getLabels();
  return i >= 0 && i < e.length ? e[i] : i;
}
class dh extends ws {
  static id = "category";
  static defaults = { ticks: { callback: F0 } };
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const a = this._addedLabels;
    if (a.length) {
      const l = this.getLabels();
      for (const { index: r, label: c } of a) l[r] === c && l.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, a) {
    if (Pt(e)) return null;
    const l = this.getLabels();
    return (
      (a =
        isFinite(a) && l[a] === e ? a : zS(l, e, Dt(a, e), this._addedLabels)),
      DS(a, l.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: a } = this.getUserBounds();
    let { min: l, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (l = 0), a || (r = this.getLabels().length - 1)),
      (this.min = l),
      (this.max = r);
  }
  buildTicks() {
    const e = this.min,
      a = this.max,
      l = this.options.offset,
      r = [];
    let c = this.getLabels();
    (c = e === 0 && a === c.length - 1 ? c : c.slice(e, a + 1)),
      (this._valueRange = Math.max(c.length - (l ? 0 : 1), 1)),
      (this._startValue = this.min - (l ? 0.5 : 0));
    for (let u = e; u <= a; u++) r.push({ value: u });
    return r;
  }
  getLabelForValue(e) {
    return F0.call(this, e);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function kS(i, e) {
  const a = [],
    {
      bounds: r,
      step: c,
      min: u,
      max: h,
      precision: p,
      count: d,
      maxTicks: m,
      maxDigits: b,
      includeBounds: w,
    } = i,
    x = c || 1,
    _ = m - 1,
    { min: M, max: O } = e,
    E = !Pt(u),
    W = !Pt(h),
    K = !Pt(d),
    J = (O - M) / (b + 1);
  let H = Gm((O - M) / _ / x) * x,
    tt,
    T,
    S,
    v;
  if (H < 1e-14 && !E && !W) return [{ value: M }, { value: O }];
  (v = Math.ceil(O / H) - Math.floor(M / H)),
    v > _ && (H = Gm((v * H) / _ / x) * x),
    Pt(p) || ((tt = Math.pow(10, p)), (H = Math.ceil(H * tt) / tt)),
    r === "ticks"
      ? ((T = Math.floor(M / H) * H), (S = Math.ceil(O / H) * H))
      : ((T = M), (S = O)),
    E && W && c && ww((h - u) / c, H / 1e3)
      ? ((v = Math.round(Math.min((h - u) / H, m))),
        (H = (h - u) / v),
        (T = u),
        (S = h))
      : K
      ? ((T = E ? u : T), (S = W ? h : S), (v = d - 1), (H = (S - T) / v))
      : ((v = (S - T) / H),
        kl(v, Math.round(v), H / 1e3)
          ? (v = Math.round(v))
          : (v = Math.ceil(v)));
  const N = Math.max(Xm(H), Xm(T));
  (tt = Math.pow(10, Pt(p) ? N : p)),
    (T = Math.round(T * tt) / tt),
    (S = Math.round(S * tt) / tt);
  let R = 0;
  for (
    E &&
    (w && T !== u
      ? (a.push({ value: u }),
        T < u && R++,
        kl(Math.round((T + R * H) * tt) / tt, u, q0(u, J, i)) && R++)
      : T < u && R++);
    R < v;
    ++R
  ) {
    const B = Math.round((T + R * H) * tt) / tt;
    if (W && B > h) break;
    a.push({ value: B });
  }
  return (
    W && w && S !== h
      ? a.length && kl(a[a.length - 1].value, h, q0(h, J, i))
        ? (a[a.length - 1].value = h)
        : a.push({ value: h })
      : (!W || S === h) && a.push({ value: S }),
    a
  );
}
function q0(i, e, { horizontal: a, minRotation: l }) {
  const r = ya(l),
    c = (a ? Math.sin(r) : Math.cos(r)) || 0.001,
    u = 0.75 * e * ("" + i).length;
  return Math.min(e / c, u);
}
class RS extends ws {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, a) {
    return Pt(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: a, maxDefined: l } = this.getUserBounds();
    let { min: r, max: c } = this;
    const u = (p) => (r = a ? r : p),
      h = (p) => (c = l ? c : p);
    if (e) {
      const p = gs(r),
        d = gs(c);
      p < 0 && d < 0 ? h(0) : p > 0 && d > 0 && u(0);
    }
    if (r === c) {
      let p = c === 0 ? 1 : Math.abs(c * 0.05);
      h(c + p), e || u(r - p);
    }
    (this.min = r), (this.max = c);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: a, stepSize: l } = e,
      r;
    return (
      l
        ? ((r = Math.ceil(this.max / l) - Math.floor(this.min / l) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${l} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (a = a || 11)),
      a && (r = Math.min(a, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      a = e.ticks;
    let l = this.getTickLimit();
    l = Math.max(2, l);
    const r = {
        maxTicks: l,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: a.precision,
        step: a.stepSize,
        count: a.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: a.minRotation || 0,
        includeBounds: a.includeBounds !== !1,
      },
      c = this._range || this,
      u = kS(r, c);
    return (
      e.bounds === "ticks" && _w(u, this, "value"),
      e.reverse
        ? (u.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      u
    );
  }
  configure() {
    const e = this.ticks;
    let a = this.min,
      l = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const r = (l - a) / Math.max(e.length - 1, 1) / 2;
      (a -= r), (l += r);
    }
    (this._startValue = a), (this._endValue = l), (this._valueRange = l - a);
  }
  getLabelForValue(e) {
    return yb(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class gh extends RS {
  static id = "linear";
  static defaults = { ticks: { callback: vb.formatters.numeric } };
  determineDataLimits() {
    const { min: e, max: a } = this.getMinMax(!0);
    (this.min = wn(e) ? e : 0),
      (this.max = wn(a) ? a : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      a = e ? this.width : this.height,
      l = ya(this.options.ticks.minRotation),
      r = (e ? Math.sin(l) : Math.cos(l)) || 0.001,
      c = this._resolveTickFontOptions(0);
    return Math.ceil(a / Math.min(40, c.lineHeight / r));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
const $r = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ve = Object.keys($r);
function Y0(i, e) {
  return i - e;
}
function V0(i, e) {
  if (Pt(e)) return null;
  const a = i._adapter,
    { parser: l, round: r, isoWeekday: c } = i._parseOpts;
  let u = e;
  return (
    typeof l == "function" && (u = l(u)),
    wn(u) || (u = typeof l == "string" ? a.parse(u, l) : a.parse(u)),
    u === null
      ? null
      : (r &&
          (u =
            r === "week" && (Nl(c) || c === !0)
              ? a.startOf(u, "isoWeek", c)
              : a.startOf(u, r)),
        +u)
  );
}
function G0(i, e, a, l) {
  const r = Ve.length;
  for (let c = Ve.indexOf(i); c < r - 1; ++c) {
    const u = $r[Ve[c]],
      h = u.steps ? u.steps : Number.MAX_SAFE_INTEGER;
    if (u.common && Math.ceil((a - e) / (h * u.size)) <= l) return Ve[c];
  }
  return Ve[r - 1];
}
function BS(i, e, a, l, r) {
  for (let c = Ve.length - 1; c >= Ve.indexOf(a); c--) {
    const u = Ve[c];
    if ($r[u].common && i._adapter.diff(r, l, u) >= e - 1) return u;
  }
  return Ve[a ? Ve.indexOf(a) : 0];
}
function LS(i) {
  for (let e = Ve.indexOf(i) + 1, a = Ve.length; e < a; ++e)
    if ($r[Ve[e]].common) return Ve[e];
}
function X0(i, e, a) {
  if (!a) i[e] = !0;
  else if (a.length) {
    const { lo: l, hi: r } = Jf(a, e),
      c = a[l] >= e ? a[l] : a[r];
    i[c] = !0;
  }
}
function HS(i, e, a, l) {
  const r = i._adapter,
    c = +r.startOf(e[0].value, l),
    u = e[e.length - 1].value;
  let h, p;
  for (h = c; h <= u; h = +r.add(h, 1, l))
    (p = a[h]), p >= 0 && (e[p].major = !0);
  return e;
}
function Q0(i, e, a) {
  const l = [],
    r = {},
    c = e.length;
  let u, h;
  for (u = 0; u < c; ++u)
    (h = e[u]), (r[h] = u), l.push({ value: h, major: !1 });
  return c === 0 || !a ? l : HS(i, l, r, a);
}
class Z0 extends ws {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  };
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, a = {}) {
    const l = e.time || (e.time = {}),
      r = (this._adapter = new J_._date(e.adapters.date));
    r.init(a),
      Dl(l.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: l.parser,
        round: l.round,
        isoWeekday: l.isoWeekday,
      }),
      super.init(e),
      (this._normalized = a.normalized);
  }
  parse(e, a) {
    return e === void 0 ? null : V0(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      a = this._adapter,
      l = e.time.unit || "day";
    let { min: r, max: c, minDefined: u, maxDefined: h } = this.getUserBounds();
    function p(d) {
      !u && !isNaN(d.min) && (r = Math.min(r, d.min)),
        !h && !isNaN(d.max) && (c = Math.max(c, d.max));
    }
    (!u || !h) &&
      (p(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        p(this.getMinMax(!1))),
      (r = wn(r) && !isNaN(r) ? r : +a.startOf(Date.now(), l)),
      (c = wn(c) && !isNaN(c) ? c : +a.endOf(Date.now(), l) + 1),
      (this.min = Math.min(r, c - 1)),
      (this.max = Math.max(r + 1, c));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let a = Number.POSITIVE_INFINITY,
      l = Number.NEGATIVE_INFINITY;
    return e.length && ((a = e[0]), (l = e[e.length - 1])), { min: a, max: l };
  }
  buildTicks() {
    const e = this.options,
      a = e.time,
      l = e.ticks,
      r = l.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const c = this.min,
      u = this.max,
      h = Tw(r, c, u);
    return (
      (this._unit =
        a.unit ||
        (l.autoSkip
          ? G0(a.minUnit, this.min, this.max, this._getLabelCapacity(c))
          : BS(this, h.length, a.minUnit, this.min, this.max))),
      (this._majorUnit =
        !l.major.enabled || this._unit === "year" ? void 0 : LS(this._unit)),
      this.initOffsets(r),
      e.reverse && h.reverse(),
      Q0(this, h, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let a = 0,
      l = 0,
      r,
      c;
    this.options.offset &&
      e.length &&
      ((r = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (a = 1 - r)
        : (a = (this.getDecimalForValue(e[1]) - r) / 2),
      (c = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (l = c)
        : (l = (c - this.getDecimalForValue(e[e.length - 2])) / 2));
    const u = e.length < 3 ? 0.5 : 0.25;
    (a = vn(a, 0, u)),
      (l = vn(l, 0, u)),
      (this._offsets = { start: a, end: l, factor: 1 / (a + 1 + l) });
  }
  _generate() {
    const e = this._adapter,
      a = this.min,
      l = this.max,
      r = this.options,
      c = r.time,
      u = c.unit || G0(c.minUnit, a, l, this._getLabelCapacity(a)),
      h = Dt(r.ticks.stepSize, 1),
      p = u === "week" ? c.isoWeekday : !1,
      d = Nl(p) || p === !0,
      m = {};
    let b = a,
      w,
      x;
    if (
      (d && (b = +e.startOf(b, "isoWeek", p)),
      (b = +e.startOf(b, d ? "day" : u)),
      e.diff(l, a, u) > 1e5 * h)
    )
      throw new Error(
        a + " and " + l + " are too far apart with stepSize of " + h + " " + u
      );
    const _ = r.ticks.source === "data" && this.getDataTimestamps();
    for (w = b, x = 0; w < l; w = +e.add(w, h, u), x++) X0(m, w, _);
    return (
      (w === l || r.bounds === "ticks" || x === 1) && X0(m, w, _),
      Object.keys(m)
        .sort(Y0)
        .map((M) => +M)
    );
  }
  getLabelForValue(e) {
    const a = this._adapter,
      l = this.options.time;
    return l.tooltipFormat
      ? a.format(e, l.tooltipFormat)
      : a.format(e, l.displayFormats.datetime);
  }
  format(e, a) {
    const r = this.options.time.displayFormats,
      c = this._unit,
      u = a || r[c];
    return this._adapter.format(e, u);
  }
  _tickFormatFunction(e, a, l, r) {
    const c = this.options,
      u = c.ticks.callback;
    if (u) return Jt(u, [e, a, l], this);
    const h = c.time.displayFormats,
      p = this._unit,
      d = this._majorUnit,
      m = p && h[p],
      b = d && h[d],
      w = l[a],
      x = d && b && w && w.major;
    return this._adapter.format(e, r || (x ? b : m));
  }
  generateTickLabels(e) {
    let a, l, r;
    for (a = 0, l = e.length; a < l; ++a)
      (r = e[a]), (r.label = this._tickFormatFunction(r.value, a, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const a = this._offsets,
      l = this.getDecimalForValue(e);
    return this.getPixelForDecimal((a.start + l) * a.factor);
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return this.min + l * (this.max - this.min);
  }
  _getLabelSize(e) {
    const a = this.options.ticks,
      l = this.ctx.measureText(e).width,
      r = ya(this.isHorizontal() ? a.maxRotation : a.minRotation),
      c = Math.cos(r),
      u = Math.sin(r),
      h = this._resolveTickFontOptions(0).size;
    return { w: l * c + h * u, h: l * u + h * c };
  }
  _getLabelCapacity(e) {
    const a = this.options.time,
      l = a.displayFormats,
      r = l[a.unit] || l.millisecond,
      c = this._tickFormatFunction(e, 0, Q0(this, [e], this._majorUnit), r),
      u = this._getLabelSize(c),
      h =
        Math.floor(this.isHorizontal() ? this.width / u.w : this.height / u.h) -
        1;
    return h > 0 ? h : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      a,
      l;
    if (e.length) return e;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (a = 0, l = r.length; a < l; ++a)
      e = e.concat(r[a].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let a, l;
    if (e.length) return e;
    const r = this.getLabels();
    for (a = 0, l = r.length; a < l; ++a) e.push(V0(this, r[a]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return Ow(e.sort(Y0));
  }
}
function Mr(i, e, a) {
  let l = 0,
    r = i.length - 1,
    c,
    u,
    h,
    p;
  a
    ? (e >= i[l].pos && e <= i[r].pos && ({ lo: l, hi: r } = va(i, "pos", e)),
      ({ pos: c, time: h } = i[l]),
      ({ pos: u, time: p } = i[r]))
    : (e >= i[l].time &&
        e <= i[r].time &&
        ({ lo: l, hi: r } = va(i, "time", e)),
      ({ time: c, pos: h } = i[l]),
      ({ time: u, pos: p } = i[r]));
  const d = u - c;
  return d ? h + ((p - h) * (e - c)) / d : h;
}
class b6 extends Z0 {
  static id = "timeseries";
  static defaults = Z0.defaults;
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      a = (this._table = this.buildLookupTable(e));
    (this._minPos = Mr(a, this.min)),
      (this._tableRange = Mr(a, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: a, max: l } = this,
      r = [],
      c = [];
    let u, h, p, d, m;
    for (u = 0, h = e.length; u < h; ++u)
      (d = e[u]), d >= a && d <= l && r.push(d);
    if (r.length < 2)
      return [
        { time: a, pos: 0 },
        { time: l, pos: 1 },
      ];
    for (u = 0, h = r.length; u < h; ++u)
      (m = r[u + 1]),
        (p = r[u - 1]),
        (d = r[u]),
        Math.round((m + p) / 2) !== d && c.push({ time: d, pos: u / (h - 1) });
    return c;
  }
  _generate() {
    const e = this.min,
      a = this.max;
    let l = super.getDataTimestamps();
    return (
      (!l.includes(e) || !l.length) && l.splice(0, 0, e),
      (!l.includes(a) || l.length === 1) && l.push(a),
      l.sort((r, c) => r - c)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const a = this.getDataTimestamps(),
      l = this.getLabelTimestamps();
    return (
      a.length && l.length
        ? (e = this.normalize(a.concat(l)))
        : (e = a.length ? a : l),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (Mr(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return Mr(this._table, l * this._tableRange + this._minPos, !0);
  }
}
const Qb = "label";
function K0(i, e) {
  typeof i == "function" ? i(e) : i && (i.current = e);
}
function jS(i, e) {
  const a = i.options;
  a && e && Object.assign(a, e);
}
function Zb(i, e) {
  i.labels = e;
}
function Kb(i, e, a = Qb) {
  const l = [];
  i.datasets = e.map((r) => {
    const c = i.datasets.find((u) => u[a] === r[a]);
    return !c || !r.data || l.includes(c)
      ? { ...r }
      : (l.push(c), Object.assign(c, r), c);
  });
}
function NS(i, e = Qb) {
  const a = { labels: [], datasets: [] };
  return Zb(a, i.labels), Kb(a, i.datasets, e), a;
}
function US(i, e) {
  const {
      height: a = 150,
      width: l = 300,
      redraw: r = !1,
      datasetIdKey: c,
      type: u,
      data: h,
      options: p,
      plugins: d = [],
      fallbackContent: m,
      updateMode: b,
      ...w
    } = i,
    x = ut.useRef(null),
    _ = ut.useRef(null),
    M = () => {
      x.current &&
        ((_.current = new _s(x.current, {
          type: u,
          data: NS(h, c),
          options: p && { ...p },
          plugins: d,
        })),
        K0(e, _.current));
    },
    O = () => {
      K0(e, null), _.current && (_.current.destroy(), (_.current = null));
    };
  return (
    ut.useEffect(() => {
      !r && _.current && p && jS(_.current, p);
    }, [r, p]),
    ut.useEffect(() => {
      !r && _.current && Zb(_.current.config.data, h.labels);
    }, [r, h.labels]),
    ut.useEffect(() => {
      !r && _.current && h.datasets && Kb(_.current.config.data, h.datasets, c);
    }, [r, h.datasets]),
    ut.useEffect(() => {
      _.current && (r ? (O(), setTimeout(M)) : _.current.update(b));
    }, [r, p, h.labels, h.datasets, b]),
    ut.useEffect(() => {
      _.current && (O(), setTimeout(M));
    }, [u]),
    ut.useEffect(() => (M(), () => O()), []),
    q.jsx("canvas", {
      ref: x,
      role: "img",
      height: a,
      width: l,
      ...w,
      children: m,
    })
  );
}
const FS = ut.forwardRef(US);
function qS(i, e) {
  return (
    _s.register(e),
    ut.forwardRef((a, l) => q.jsx(FS, { ...a, ref: l, type: i }))
  );
}
const Gl = qS("line", $_);
_s.register(ch, uh, gh, dh, hh, fh);
function YS(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let c = 0; c < i.length; c += l) r.push(i[Math.floor(c)]);
  return r;
}
function VS(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const GS = () => {
    const {
        time: i,
        userFs: e,
        generateECG: a,
        rawSamples: l,
        colors: r,
        selectedChannels: c,
      } = ut.useContext(Fn),
      u = ut.useMemo(() => {
        if (!l.length || !a) return [];
        const m = VS(l);
        return YS(l, m, e).filter((w) => w.x <= i);
      }, [i, e, a, l]),
      p = {
        datasets: c.map((m, b) => ({
          label: m,
          data: u.map((w) => ({ x: w.x, y: w[m] })),
          borderColor: r[b % r.length],
          borderWidth: 1,
          pointRadius: 0,
          tension: 0,
        })),
      },
      d = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return q.jsxs("div", {
      className: Fv.signalContainer,
      children: [
        q.jsx("h3", { children: "EEG Signal (Unfiltered)" }),
        q.jsx(Gl, { data: p, options: d }),
      ],
    });
  },
  XS = "_signalContainer_sipfw_1",
  QS = { signalContainer: XS };
function Tr(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Rf = { exports: {} };
var P0;
function ZS() {
  return (
    P0 ||
      ((P0 = 1),
      (function (i, e) {
        (function (a) {
          i.exports = a();
        })(function () {
          return (function a(l, r, c) {
            function u(d, m) {
              if (!r[d]) {
                if (!l[d]) {
                  var b = typeof Tr == "function" && Tr;
                  if (!m && b) return b(d, !0);
                  if (h) return h(d, !0);
                  var w = new Error("Cannot find module '" + d + "'");
                  throw ((w.code = "MODULE_NOT_FOUND"), w);
                }
                var x = (r[d] = { exports: {} });
                l[d][0].call(
                  x.exports,
                  function (_) {
                    var M = l[d][1][_];
                    return u(M || _);
                  },
                  x,
                  x.exports,
                  a,
                  l,
                  r,
                  c
                );
              }
              return r[d].exports;
            }
            for (
              var h = typeof Tr == "function" && Tr, p = 0;
              p < c.length;
              p++
            )
              u(c[p]);
            return u;
          })(
            {
              1: [
                function (a, l, r) {
                  l.exports = {
                    CalcCascades: a("./src/calcCascades"),
                    Fft: a("./src/fft"),
                    FirCoeffs: a("./src/firCoeffs"),
                    FirFilter: a("./src/firFilter"),
                    IirCoeffs: a("./src/iirCoeffs"),
                    IirFilter: a("./src/iirFilter"),
                    TestFilter: a("./src/testFilter"),
                  };
                },
                {
                  "./src/calcCascades": 2,
                  "./src/fft": 3,
                  "./src/firCoeffs": 4,
                  "./src/firFilter": 5,
                  "./src/iirCoeffs": 6,
                  "./src/iirFilter": 7,
                  "./src/testFilter": 8,
                },
              ],
              2: [
                function (a, l, r) {
                  var c = a("./iirCoeffs"),
                    u = new c(),
                    h = {
                      bessel: {
                        q: [
                          [0.57735026919],
                          [0.805538281842, 0.521934581669],
                          [1.02331395383, 0.611194546878, 0.510317824749],
                          [
                            1.22566942541, 0.710852074442, 0.559609164796,
                            0.505991069397,
                          ],
                          [
                            1.41530886916, 0.809790964842, 0.620470155556,
                            0.537552151325, 0.503912727276,
                          ],
                          [
                            1.59465693507, 0.905947107025, 0.684008068137,
                            0.579367238641, 0.525936202016, 0.502755558204,
                          ],
                          [
                            1.76552743493, 0.998998442993, 0.747625068271,
                            0.624777082395, 0.556680772868, 0.519027293158,
                            0.502045428643,
                          ],
                          [
                            1.9292718407, 1.08906376917, 0.810410302962,
                            0.671382379377, 0.591144659703, 0.542678365981,
                            0.514570953471, 0.501578400482,
                          ],
                          [
                            2.08691792612, 1.17637337045, 0.872034231424,
                            0.718163551101, 0.627261751983, 0.569890924765,
                            0.533371782078, 0.511523796759, 0.50125489338,
                          ],
                          [
                            2.23926560629, 1.26117120993, 0.932397288146,
                            0.764647810579, 0.664052481472, 0.598921924986,
                            0.555480327396, 0.526848630061, 0.509345928377,
                            0.501021580965,
                          ],
                          [
                            2.38695091667, 1.34368488961, 0.991497755204,
                            0.81060830488, 0.701011199665, 0.628878390935,
                            0.57943181849, 0.545207253735, 0.52208637596,
                            0.507736060535, 0.500847111042,
                          ],
                          [
                            2.53048919562, 1.42411783481, 1.04937620183,
                            0.85593899901, 0.737862159044, 0.659265671705,
                            0.604435823473, 0.565352679646, 0.537608804383,
                            0.51849505465, 0.506508536474, 0.500715908905,
                          ],
                        ],
                        f3dB: [
                          [1.27201964951],
                          [1.60335751622, 1.43017155999],
                          [1.9047076123, 1.68916826762, 1.60391912877],
                          [
                            2.18872623053, 1.95319575902, 1.8320926012,
                            1.77846591177,
                          ],
                          [
                            2.45062684305, 2.20375262593, 2.06220731793,
                            1.98055310881, 1.94270419166,
                          ],
                          [
                            2.69298925084, 2.43912611431, 2.28431825401,
                            2.18496722634, 2.12472538477, 2.09613322542,
                          ],
                          [
                            2.91905714471, 2.66069088948, 2.49663434571,
                            2.38497976939, 2.30961462222, 2.26265746534,
                            2.24005716132,
                          ],
                          [
                            3.13149167404, 2.87016099416, 2.69935018044,
                            2.57862945683, 2.49225505119, 2.43227707449,
                            2.39427710712, 2.37582307687,
                          ],
                          [
                            3.33237300564, 3.06908580184, 2.89318259511,
                            2.76551588399, 2.67073340527, 2.60094950474,
                            2.55161764546, 2.52001358804, 2.50457164552,
                          ],
                          [
                            3.52333123464, 3.25877569704, 3.07894353744,
                            2.94580435024, 2.84438325189, 2.76691082498,
                            2.70881411245, 2.66724655259, 2.64040228249,
                            2.62723439989,
                          ],
                          [
                            3.70566068548, 3.44032173223, 3.2574059854,
                            3.11986367838, 3.01307175388, 2.92939234605,
                            2.86428726094, 2.81483068055, 2.77915465405,
                            2.75596888377, 2.74456638588,
                          ],
                          [
                            3.88040469682, 3.61463243697, 3.4292654707,
                            3.28812274966, 3.17689762788, 3.08812364257,
                            3.01720732972, 2.96140104561, 2.91862858495,
                            2.88729479473, 2.8674198668, 2.8570800015,
                          ],
                        ],
                        f1dB: [
                          [2.16477559371],
                          [2.70320928596, 2.41122332505],
                          [3.25676581436, 2.88822569572, 2.74246238837],
                          [
                            3.76153580353, 3.35675411406, 3.14862673032,
                            3.05646412475,
                          ],
                          [
                            4.22174260104, 3.79644757806, 3.55260471864,
                            3.41193742197, 3.34673435508,
                          ],
                          [
                            4.64584812552, 4.20789257981, 3.94082363122,
                            3.76942681446, 3.66549975744, 3.61617359345,
                          ],
                          [
                            5.04060395196, 4.5944592201, 4.3111677248,
                            4.11836351827, 3.98822359814, 3.90713836715,
                            3.86811234525,
                          ],
                          [
                            5.41107948467, 4.95951159709, 4.66435804468,
                            4.45575796102, 4.30650679478, 4.20286750045,
                            4.13720522991, 4.10531748119,
                          ],
                          [
                            5.76110791853, 5.30592898465, 5.00182215701,
                            4.7811081045, 4.61724509926, 4.49660100894,
                            4.41131378918, 4.35667671372, 4.32997951075,
                          ],
                          [
                            6.09364309488, 5.63609116014, 5.32506930789,
                            5.09480346139, 4.91939504255, 4.78540258409,
                            4.68493280536, 4.61302286993, 4.56661931366,
                            4.54382759952,
                          ],
                          [
                            6.41100731543, 5.95195558182, 5.63550073656,
                            5.39754464742, 5.21278891332, 5.06801430334,
                            4.95539684456, 4.8697869429, 4.80814951843,
                            4.76793469612, 4.74828032403,
                          ],
                          [
                            6.71506056052, 6.25514029778, 5.9343616072,
                            5.69011422355, 5.49763642361, 5.34401973764,
                            5.22125973611, 5.12485045619, 5.05037962112,
                            4.99699982231, 4.96155789635, 4.94441828777,
                          ],
                        ],
                      },
                    },
                    p = {
                      bessel: {
                        as: [
                          [1.3617],
                          [1.3397, 0.7743],
                          [1.2217, 0.9686, 0.5131],
                          [1.1112, 0.9754, 0.7202, 0.3728],
                          [1.0215, 0.9393, 0.7815, 0.5604, 0.2883],
                        ],
                        bs: [
                          [0.618],
                          [0.4889, 0.389],
                          [0.3887, 0.3505, 0.2756],
                          [0.3162, 0.2979, 0.2621, 0.2087],
                          [0.265, 0.2549, 0.2351, 0.2059, 0.1665],
                        ],
                      },
                      butterworth: {
                        as: [
                          [1.4142],
                          [1.8478, 0.7654],
                          [1.9319, 1.4142, 0.5176],
                          [1.9616, 1.6629, 1.1111, 0.3902],
                          [1.9754, 1.782, 1.4142, 0.908, 0.3129],
                        ],
                        bs: [
                          [1],
                          [1, 1],
                          [1, 1, 1],
                          [1, 1, 1, 1],
                          [1, 1, 1, 1, 1],
                        ],
                      },
                      tschebyscheff05: {
                        as: [
                          [1.3614],
                          [2.6282, 0.3648],
                          [3.8645, 0.7528, 0.1589],
                          [5.1117, 1.0639, 0.3439, 0.0885],
                          [6.3648, 1.3582, 0.4822, 0.1994, 0.0563],
                        ],
                        bs: [
                          [1.3827],
                          [3.4341, 1.1509],
                          [6.9797, 1.8573, 1.0711],
                          [11.9607, 2.9365, 1.4206, 1.0407],
                          [18.3695, 4.3453, 1.944, 1.252, 1.0263],
                        ],
                      },
                      tschebyscheff1: {
                        as: [
                          [1.3022],
                          [2.5904, 0.3039],
                          [3.8437, 0.6292, 0.1296],
                          [5.1019, 0.8916, 0.2806, 0.0717],
                          [6.3634, 1.1399, 0.3939, 0.1616, 0.0455],
                        ],
                        bs: [
                          [1.5515],
                          [4.1301, 1.1697],
                          [8.5529, 1.9124, 1.0766],
                          [14.7608, 3.0426, 1.4334, 1.0432],
                          [22.7468, 4.5167, 1.9665, 1.2569, 1.0277],
                        ],
                      },
                      tschebyscheff2: {
                        as: [
                          [1.1813],
                          [2.4025, 0.2374],
                          [3.588, 0.4925, 0.0995],
                          [4.7743, 0.6991, 0.2153, 0.0547],
                          [5.9618, 0.8947, 0.3023, 0.1233, 0.0347],
                        ],
                        bs: [
                          [1.7775],
                          [4.9862, 1.1896],
                          [10.4648, 1.9622, 1.0826],
                          [18.151, 3.1353, 1.4449, 1.0461],
                          [28.0376, 4.6644, 1.9858, 1.2614, 1.0294],
                        ],
                      },
                      tschebyscheff3: {
                        as: [
                          [1.065],
                          [2.1853, 0.1964],
                          [3.2721, 0.4077, 0.0815],
                          [4.3583, 0.5791, 0.1765, 0.0448],
                          [5.4449, 0.7414, 0.2479, 0.1008, 0.0283],
                        ],
                        bs: [
                          [1.9305],
                          [5.5339, 1.2009],
                          [11.6773, 1.9873, 1.0861],
                          [20.2948, 3.1808, 1.4507, 1.0478],
                          [31.3788, 4.7363, 1.9952, 1.2638, 1.0304],
                        ],
                      },
                      allpass: {
                        as: [
                          [1.6278],
                          [2.337, 1.3506],
                          [2.6117, 2.0706, 1.0967],
                          [2.7541, 2.4174, 1.785, 0.9239],
                          [2.8406, 2.612, 2.1733, 1.5583, 0.8018],
                        ],
                        bs: [
                          [0.8832],
                          [1.4878, 1.1837],
                          [1.7763, 1.6015, 1.2596],
                          [1.942, 1.83, 1.6101, 1.2822],
                          [2.049, 1.9714, 1.8184, 1.5923, 1.2877],
                        ],
                      },
                    },
                    d = function (x, _) {
                      var M = [],
                        O = 0;
                      if (_ !== "fromPZ")
                        for (
                          x.order > 12 && (x.order = 12), O = 0;
                          O < x.order;
                          O++
                        ) {
                          var E, W, K;
                          x.transform === "matchedZ"
                            ? M.push(
                                u.lowpassMZ({
                                  Fs: x.Fs,
                                  Fc: x.Fc,
                                  preGain: x.preGain,
                                  as: p[x.characteristic].as[x.order - 1][O],
                                  bs: p[x.characteristic].bs[x.order - 1][O],
                                })
                              )
                            : (x.characteristic === "butterworth"
                                ? ((E =
                                    0.5 /
                                    Math.sin(
                                      (Math.PI / (2 * x.order)) * (O + 0.5)
                                    )),
                                  (W = 1))
                                : ((E = h[x.characteristic].q[x.order - 1][O]),
                                  (W = x.oneDb
                                    ? h[x.characteristic].f1dB[x.order - 1][O]
                                    : h[x.characteristic].f3dB[x.order - 1][
                                        O
                                      ])),
                              (K = _ === "highpass" ? x.Fc / W : x.Fc * W),
                              (_ !== "bandpass" && _ !== "bandstop") ||
                                (x.characteristic === "bessel" &&
                                  (K = (Math.sqrt(x.order) * K) / x.order)),
                              M.push(
                                u[_]({
                                  Fs: x.Fs,
                                  Fc: K,
                                  Q: E,
                                  BW: x.BW || 0,
                                  gain: x.gain || 0,
                                  preGain: x.preGain || !1,
                                })
                              ));
                        }
                      else for (O = 0; O < x.length; O++) M.push(u[_](x[O]));
                      return M;
                    },
                    m = function (x) {
                      return function (_) {
                        return d(_, x);
                      };
                    },
                    b = {},
                    w = function () {
                      var x = [];
                      for (var _ in u) (b[_] = m(_)), x.push(_);
                      return (
                        (b.available = function () {
                          return x;
                        }),
                        b
                      );
                    };
                  l.exports = w;
                },
                { "./iirCoeffs": 6 },
              ],
              3: [
                function (a, l, r) {
                  var c = function (u) {
                    if (
                      !(function (T) {
                        return !(T & (T - 1));
                      })(u)
                    )
                      return !1;
                    var h = {};
                    (h.length = u),
                      (h.buffer = new Float64Array(u)),
                      (h.re = new Float64Array(u)),
                      (h.im = new Float64Array(u)),
                      (h.reI = new Float64Array(u)),
                      (h.imI = new Float64Array(u)),
                      (h.twiddle = new Int32Array(u)),
                      (h.sinTable = new Float64Array(u - 1)),
                      (h.cosTable = new Float64Array(u - 1));
                    var p = 2 * Math.PI,
                      d = Math.floor(Math.log(u) / Math.LN2);
                    for (b = h.sinTable.length; b--; )
                      (h.sinTable[b] = Math.sin(p * (b / u))),
                        (h.cosTable[b] = Math.cos(p * (b / u)));
                    for (
                      var m = u >> 1, b = 0, w = 0;
                      (h.twiddle[b] = w), !(++b >= u);

                    ) {
                      for (d = m; d <= w; ) (w -= d), (d >>= 1);
                      w += d;
                    }
                    var x = Math.PI,
                      _ = 2 * Math.PI,
                      M = Math.abs,
                      O = Math.pow,
                      E = Math.cos,
                      W = Math.sin,
                      K = function (T) {
                        return W(x * T) / (x * T);
                      },
                      J = Math.E,
                      H = {
                        rectangular: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        none: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        hanning: {
                          calc: function (T, S) {
                            return 0.5 * (1 - E((_ * T) / (S - 1)));
                          },
                          values: [],
                          correction: 2,
                        },
                        hamming: {
                          calc: function (T, S) {
                            return 0.54 - 0.46 * E((_ * T) / (S - 1));
                          },
                          values: [],
                          correction: 1.8518999946875638,
                        },
                        tukery: {
                          calc: function (T, S, v) {
                            return T < (v * (S - 1)) / 2
                              ? 0.5 * (1 + E(x * ((2 * T) / (v * (S - 1)) - 1)))
                              : (S - 1) * (1 - v / 2) < T
                              ? 0.5 *
                                (1 +
                                  E(x * ((2 * T) / (v * (S - 1)) - 2 / v + 1)))
                              : 1;
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        cosine: {
                          calc: function (T, S) {
                            return W((x * T) / (S - 1));
                          },
                          values: [],
                          correction: 1.570844266360796,
                        },
                        lanczos: {
                          calc: function (T, S) {
                            return K((2 * T) / (S - 1) - 1);
                          },
                          values: [],
                          correction: 1.6964337576195783,
                        },
                        triangular: {
                          calc: function (T, S) {
                            return (
                              (2 / (S + 1)) * ((S + 1) / 2 - M(T - (S - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        bartlett: {
                          calc: function (T, S) {
                            return (
                              (2 / (S - 1)) * ((S - 1) / 2 - M(T - (S - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        gaussian: {
                          calc: function (T, S, v) {
                            return O(
                              J,
                              -0.5 *
                                O((T - (S - 1) / 2) / ((v * (S - 1)) / 2), 2)
                            );
                          },
                          values: [],
                          correction: 5 / 3,
                        },
                        bartlettHanning: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.62 - 0.48 * M(T / (S - 1) - 0.5) - 0.38 * E(v)
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        blackman: {
                          calc: function (T, S, v) {
                            var N = (1 - v) / 2,
                              R = v / 2,
                              B = (_ * T) / (S - 1);
                            return N - 0.5 * E(B) + R * E(2 * B);
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        blackmanHarris: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.35875 -
                              0.48829 * E(v) +
                              0.14128 * E(2 * v) -
                              0.01168 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.5594508635,
                        },
                        nuttall3: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return 0.375 - 0.5 * E(v) + 0.125 * E(2 * v);
                          },
                          values: [],
                          correction: 1.56,
                        },
                        nuttall3a: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return 0.40897 - 0.5 * E(v) + 0.09103 * E(2 * v);
                          },
                          values: [],
                          correction: 1.692,
                        },
                        nuttall3b: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.4243801 - 0.4973406 * E(v) + 0.078793 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.7372527,
                        },
                        nuttall4: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.3125 -
                              0.46875 * E(v) +
                              0.1875 * E(2 * v) -
                              0.03125 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.454543,
                        },
                        nuttall4a: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.338946 -
                              0.481973 * E(v) +
                              0.161054 * E(2 * v) -
                              0.018027 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.512732763,
                        },
                        nuttall4b: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.355768 -
                              0.481973 * E(v) +
                              0.144232 * E(2 * v) -
                              0.012604 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.55223262,
                        },
                        nuttall4c: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.3635819 -
                              0.4891775 * E(v) +
                              0.1365995 * E(2 * v) -
                              0.0106411 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.57129067,
                        },
                        sft3f: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return 0.26526 - 0.5 * E(v) + 0.23474 * E(2 * v);
                          },
                          values: [],
                          correction: 1.3610238,
                        },
                        sft4f: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.21706 -
                              0.42103 * E(v) +
                              0.28294 * E(2 * v) -
                              0.07897 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.2773573,
                        },
                        sft5f: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.1881 -
                              0.36923 * E(v) +
                              0.28702 * E(2 * v) -
                              0.13077 * E(3 * v) +
                              0.02488 * E(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.23167769,
                        },
                        sft3m: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.28235 - 0.52105 * E(v) + 0.19659 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39343451,
                        },
                        sft4m: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.241906 -
                              0.460841 * E(v) +
                              0.2552381 * E(2 * v) -
                              0.041872 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.3190596,
                        },
                        sft5m: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.209671 -
                              0.407331 * E(v) +
                              0.281225 * E(2 * v) -
                              0.092669 * E(3 * v) +
                              0.0091036 * E(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.26529456464,
                        },
                        nift: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              0.2810639 -
                              0.5208972 * E(v) +
                              0.1980399 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39094182,
                        },
                        hpft: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.912510941 * E(v) +
                                1.079173272 * E(2 * v) -
                                0.1832630879 * E(3 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        srft: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.93 * E(v) +
                                1.29 * E(2 * v) -
                                0.388 * E(3 * v) +
                                0.028 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft70: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.90796 * E(v) +
                                1.07349 * E(2 * v) -
                                0.18199 * E(3 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft95: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.9383379 * E(v) +
                                1.3045202 * E(2 * v) -
                                0.402827 * E(3 * v) +
                                0.0350665 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft90d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.942604 * E(v) +
                                1.340318 * E(2 * v) -
                                0.440811 * E(3 * v) +
                                0.043097 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft116d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.9575375 * E(v) +
                                1.4780705 * E(2 * v) -
                                0.6367431 * E(3 * v) +
                                0.1228389 * E(4 * v) -
                                0.0066288 * E(5 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft144d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.96760033 * E(v) +
                                1.57983607 * E(2 * v) -
                                0.81123644 * E(3 * v) +
                                0.22583558 * E(4 * v) -
                                0.02773848 * E(5 * v) +
                                9036e-7 * E(6 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft196d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.97441842 * E(v) +
                                1.65409888 * E(2 * v) -
                                0.95788186 * E(3 * v) +
                                0.3367342 * E(4 * v) -
                                0.06364621 * E(5 * v) +
                                0.00521942 * E(6 * v) -
                                10599e-8 * E(7 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft223d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.98298997309 * E(v) +
                                1.75556083063 * E(2 * v) -
                                1.19037717712 * E(3 * v) +
                                0.56155440797 * E(4 * v) -
                                0.17296769663 * E(5 * v) +
                                0.03233247087 * E(6 * v) -
                                0.00324954578 * E(7 * v) +
                                0.0001380104 * E(8 * v) -
                                132725e-11 * E(9 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft248d: {
                          calc: function (T, S) {
                            var v = (_ * T) / (S - 1);
                            return (
                              (1 -
                                1.985844164102 * E(v) +
                                1.791176438506 * E(2 * v) -
                                1.282075284005 * E(3 * v) +
                                0.667777530266 * E(4 * v) -
                                0.240160796576 * E(5 * v) +
                                0.056656381764 * E(6 * v) -
                                0.008134974479 * E(7 * v) +
                                0.00062454465 * E(8 * v) -
                                19808998e-12 * E(9 * v) +
                                132974e-12 * E(10 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                      },
                      tt = function (T) {
                        return H[T.name].values.length !== T.N
                          ? (T.n === 0 && (H[T.name].values.length = 0),
                            (H[T.name].values[T.n] =
                              H[T.name].correction *
                              H[T.name].calc(T.n, T.N, T.a)),
                            H[T.name].values[T.n])
                          : H[T.name].values;
                      };
                    return {
                      forward: function (T, S) {
                        var v, N, R, B, $, st, at, j, G, et, it, ct;
                        R = h.buffer.length;
                        var A = { name: S, N: R, a: 0.5, n: 0 },
                          k = tt(A);
                        if (typeof k == "number")
                          for (v = 0; v < R; ++v)
                            (A.n = v), (h.buffer[v] = T[v] * tt(A));
                        else for (v = 0; v < R; ++v) h.buffer[v] = T[v] * k[v];
                        for (v = R; v--; )
                          (h.re[v] = h.buffer[h.twiddle[v]]), (h.im[v] = 0);
                        for (B = 1; B < R; B = $)
                          for (
                            st = 0, $ = B + B, at = R / $, N = 0;
                            N < B;
                            N++
                          ) {
                            for (
                              j = h.cosTable[st], G = h.sinTable[st], v = N;
                              v < R;
                              v += $
                            )
                              (et = v + B),
                                (it = G * h.im[et] + j * h.re[et]),
                                (ct = j * h.im[et] - G * h.re[et]),
                                (h.re[et] = h.re[v] - it),
                                (h.re[v] += it),
                                (h.im[et] = h.im[v] - ct),
                                (h.im[v] += ct);
                            st += at;
                          }
                        return { re: h.re, im: h.im };
                      },
                      inverse: function (T, S) {
                        var v, N, R, B, $, st, at, j, G, et, it, ct;
                        for (R = T.length, v = R; v--; )
                          (N = h.twiddle[v]),
                            (h.reI[v] = T[N]),
                            (h.imI[v] = -S[N]);
                        for (B = 1; B < R; B = $)
                          for (
                            st = 0, $ = B + B, at = R / $, N = 0;
                            N < B;
                            N++
                          ) {
                            for (
                              j = h.cosTable[st], G = h.sinTable[st], v = N;
                              v < R;
                              v += $
                            )
                              (et = v + B),
                                (it = G * h.imI[et] + j * h.reI[et]),
                                (ct = j * h.imI[et] - G * h.reI[et]),
                                (h.reI[et] = h.reI[v] - it),
                                (h.reI[v] += it),
                                (h.imI[et] = h.imI[v] - ct),
                                (h.imI[v] += ct);
                            st += at;
                          }
                        for (v = R; v--; ) h.buffer[v] = h.reI[v] / R;
                        return h.buffer;
                      },
                      magnitude: function (T) {
                        for (var S = [], v = 0; v < T.re.length; v++)
                          S.push(
                            Math.sqrt(T.re[v] * T.re[v] + T.im[v] * T.im[v])
                          );
                        return S;
                      },
                      magToDb: function (T) {
                        for (var S = [], v = 0; v < T.length; v++)
                          S.push(20 * Math.log(T[v]) * Math.LOG10E);
                        return S;
                      },
                      phase: function (T) {
                        for (var S = [], v = 0; v < T.re.length; v++)
                          S.push(Math.atan2(T.im[v], T.re[v]));
                        return S;
                      },
                      windows: function () {
                        var T = [];
                        for (var S in H) T.push(S);
                        return T;
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              4: [
                function (a, l, r) {
                  var c = function () {
                    var u = function (m) {
                        var b = m.Fs,
                          w = m.Fa,
                          x = m.Fb,
                          _ = m.order || 51,
                          M = m.Att || 100,
                          O = function (T) {
                            for (var S = 0, v = 1, N = 1; v > 1e-6 * N; )
                              (S += 2), (v *= (T * T) / (S * S)), (N += v);
                            return N;
                          };
                        _ / 2 - Math.floor(_ / 2) == 0 && _++;
                        var E,
                          W = (_ - 1) / 2,
                          K = [],
                          J = 0,
                          H = 0,
                          tt = [];
                        for (K[0] = (2 * (x - w)) / b, H = 1; H <= W; H++)
                          K[H] =
                            (Math.sin((2 * H * Math.PI * x) / b) -
                              Math.sin((2 * H * Math.PI * w) / b)) /
                            (H * Math.PI);
                        for (
                          J =
                            M < 21
                              ? 0
                              : M > 50
                              ? 0.1102 * (M - 8.7)
                              : 0.5842 * Math.pow(M - 21, 0.4) +
                                0.07886 * (M - 21),
                            E = O(J),
                            H = 0;
                          H <= W;
                          H++
                        )
                          tt[W + H] =
                            (K[H] * O(J * Math.sqrt(1 - (H * H) / (W * W)))) /
                            E;
                        for (H = 0; H < W; H++) tt[H] = tt[_ - 1 - H];
                        return tt;
                      },
                      h = function (m) {
                        var b = m.Fs,
                          w = m.Fc,
                          x = m.order,
                          _ = (2 * Math.PI * w) / b,
                          M = 0,
                          O = 0,
                          E = [];
                        for (M = 0; M <= x; M++)
                          M - x / 2 == 0
                            ? (E[M] = _)
                            : ((E[M] = Math.sin(_ * (M - x / 2)) / (M - x / 2)),
                              (E[M] *=
                                0.54 - 0.46 * Math.cos((2 * Math.PI * M) / x))),
                            (O += E[M]);
                        for (M = 0; M <= x; M++) E[M] /= O;
                        return E;
                      },
                      p = function (m) {
                        var b;
                        for (b = 0; b < m.length; b++) m[b] = -m[b];
                        return m[(m.length - 1) / 2]++, m;
                      },
                      d = function (m) {
                        for (
                          var b = h({ order: m.order, Fs: m.Fs, Fc: m.F2 }),
                            w = p(h({ order: m.order, Fs: m.Fs, Fc: m.F1 })),
                            x = [],
                            _ = 0;
                          _ < b.length;
                          _++
                        )
                          x.push(b[_] + w[_]);
                        return x;
                      };
                    return {
                      lowpass: function (m) {
                        return h(m);
                      },
                      highpass: function (m) {
                        return p(h(m));
                      },
                      bandstop: function (m) {
                        return d(m);
                      },
                      bandpass: function (m) {
                        return p(d(m));
                      },
                      kbFilter: function (m) {
                        return u(m);
                      },
                      available: function () {
                        return [
                          "lowpass",
                          "highpass",
                          "bandstop",
                          "bandpass",
                          "kbFilter",
                        ];
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              5: [
                function (a, l, r) {
                  var c = a("./utils"),
                    u = c.runMultiFilter,
                    h = c.runMultiFilterReverse,
                    p = c.complex,
                    d = c.evaluatePhase,
                    m = function (b) {
                      var w = b,
                        x = [],
                        _ = 0;
                      for (_ = 0; _ < w.length; _++) x[_] = { re: w[_], im: 0 };
                      var M = function (J) {
                          var H,
                            tt = [];
                          for (H = 0; H < J; H++) tt.push(0);
                          return { buf: tt, pointer: 0 };
                        },
                        O = M(w.length - 1),
                        E = function (J, H) {
                          H.buf[H.pointer] = J;
                          var tt = 0;
                          for (_ = 0; _ < H.buf.length; _++)
                            tt += w[_] * H.buf[(H.pointer + _) % H.buf.length];
                          return (
                            (H.pointer = (H.pointer + 1) % H.buf.length), tt
                          );
                        },
                        W = function (J) {
                          var H = M(w.length - 1);
                          return u(J, H, E);
                        },
                        K = function (J) {
                          for (
                            var H = J.Fs,
                              tt = J.Fr,
                              T = -Math.PI * (tt / H) * 2,
                              S = { re: 0, im: 0 },
                              v = 0;
                            v < w.length - 1;
                            v++
                          )
                            S = p.add(
                              S,
                              p.mul(x[v], {
                                re: Math.cos(T * v),
                                im: Math.sin(T * v),
                              })
                            );
                          var N = p.magnitude(S);
                          return {
                            magnitude: N,
                            phase: p.phase(S),
                            dBmagnitude: 20 * Math.log(N) * Math.LOG10E,
                          };
                        };
                      return {
                        responsePoint: function (J) {
                          return K(J);
                        },
                        response: function (J) {
                          J = J || 100;
                          var H = [],
                            tt = 0,
                            T = 2 * J;
                          for (tt = 0; tt < J; tt++)
                            H[tt] = K({ Fs: T, Fr: tt });
                          return d(H), H;
                        },
                        simulate: function (J) {
                          return W(J);
                        },
                        singleStep: function (J) {
                          return E(J, O);
                        },
                        multiStep: function (J, H) {
                          return u(J, O, E, H);
                        },
                        filtfilt: function (J, H) {
                          return h(u(J, O, E, H), O, E, !0);
                        },
                        reinit: function () {
                          O = M(w.length - 1);
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              6: [
                function (a, l, r) {
                  var c = function () {
                    var u = function (d, m) {
                        var b = d.Q,
                          w = d.Fc,
                          x = d.Fs,
                          _ = {},
                          M = (2 * Math.PI * w) / x;
                        return (
                          d.BW
                            ? (_.alpha =
                                Math.sin(M) *
                                Math.sinh(
                                  ((Math.log(2) / 2) * d.BW * M) / Math.sin(M)
                                ))
                            : (_.alpha = Math.sin(M) / (2 * b)),
                          (_.cw = Math.cos(M)),
                          (_.a0 = 1 + _.alpha),
                          (m.a0 = _.a0),
                          m.a.push((-2 * _.cw) / _.a0),
                          (m.k = 1),
                          m.a.push((1 - _.alpha) / _.a0),
                          _
                        );
                      },
                      h = function (d) {
                        var m = d.Q,
                          b = d.Fc,
                          w = d.Fs,
                          x = {},
                          _ = (2 * Math.PI * b) / w;
                        return (
                          (x.alpha = Math.sin(_) / (2 * m)),
                          (x.cw = Math.cos(_)),
                          (x.A = Math.pow(10, d.gain / 40)),
                          x
                        );
                      },
                      p = function () {
                        var d = {};
                        return (d.z = [0, 0]), (d.a = []), (d.b = []), d;
                      };
                    return {
                      fromPZ: function (d) {
                        var m = p();
                        return (
                          (m.a0 = 1),
                          m.b.push(1),
                          m.b.push(-d.z0.re - d.z1.re),
                          m.b.push(d.z0.re * d.z1.re - d.z0.im * d.z1.im),
                          m.a.push(-d.p0.re - d.p1.re),
                          m.a.push(d.p0.re * d.p1.re - d.p0.im * d.p1.im),
                          d.type === "lowpass"
                            ? (m.k =
                                (1 + m.a[0] + m.a[1]) / (1 + m.b[1] + m.b[2]))
                            : (m.k =
                                (1 - m.a[0] + m.a[1]) / (1 - m.b[1] + m.b[2])),
                          m
                        );
                      },
                      lowpassMZ: function (d) {
                        var m = p();
                        m.a0 = 1;
                        var b = d.as,
                          w = d.bs,
                          x = (2 * Math.PI * d.Fc) / d.Fs,
                          _ = -b / (2 * w);
                        return (
                          m.a.push(
                            2 *
                              -Math.pow(Math.E, _ * x) *
                              Math.cos(
                                -x *
                                  Math.sqrt(
                                    Math.abs(
                                      Math.pow(b, 2) / (4 * Math.pow(w, 2)) -
                                        1 / w
                                    )
                                  )
                              )
                          ),
                          m.a.push(Math.pow(Math.E, 2 * _ * x)),
                          d.preGain
                            ? (m.b.push(1), (m.k = m.a0 + m.a[0] + m.a[1]))
                            : (m.b.push(m.a0 + m.a[0] + m.a[1]), (m.k = 1)),
                          m.b.push(0),
                          m.b.push(0),
                          m
                        );
                      },
                      lowpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = 3 * m.wp + 3 * m.wp2 + 1),
                          m.b.push((3 * m.wp2 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((6 * m.wp2 - 2) / m.a0),
                          m.a.push((3 * m.wp2 - 3 * m.wp + 1) / m.a0),
                          m
                        );
                      },
                      highpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = m.wp + m.wp2 + 3),
                          m.b.push((3 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((2 * m.wp2 - 6) / m.a0),
                          m.a.push((m.wp2 - m.wp + 3) / m.a0),
                          m
                        );
                      },
                      lowpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 - b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 - b.cw) / (2 * b.a0))),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      highpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 + b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 + b.cw) / (2 * b.a0))),
                          m.b.push(-2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      allpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((1 - b.alpha) / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push((1 + b.alpha) / b.a0),
                          m
                        );
                      },
                      bandpassQ: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((b.alpha * d.Q) / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandpass: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(b.alpha / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandstop: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(1 / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      peak: function (d) {
                        var m = p(),
                          b = h(d);
                        return (
                          (m.k = 1),
                          (m.a0 = 1 + b.alpha / b.A),
                          m.a.push((-2 * b.cw) / m.a0),
                          m.a.push((1 - b.alpha / b.A) / m.a0),
                          m.b.push((1 + b.alpha * b.A) / m.a0),
                          m.b.push((-2 * b.cw) / m.a0),
                          m.b.push((1 - b.alpha * b.A) / m.a0),
                          m
                        );
                      },
                      lowshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var w = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 + (b.A - 1) * b.cw + w),
                          m.a.push((-2 * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 + (b.A - 1) * b.cw - w) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw + w)) / m.a0
                          ),
                          m.b.push(
                            (2 * b.A * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw - w)) / m.a0
                          ),
                          m
                        );
                      },
                      highshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var w = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 - (b.A - 1) * b.cw + w),
                          m.a.push((2 * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 - (b.A - 1) * b.cw - w) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw + w)) / m.a0
                          ),
                          m.b.push(
                            (-2 * b.A * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw - w)) / m.a0
                          ),
                          m
                        );
                      },
                      aweighting: function (d) {
                        var m = p();
                        m.k = 1;
                        var b = (2 * Math.PI * d.Fc) / d.Fs,
                          w = 2 * Math.tan(b / 2),
                          x = d.Q,
                          _ = Math.pow(w, 2);
                        return (
                          (m.a0 = 4 * x + _ * x + 2 * w),
                          m.a.push(2 * _ * x - 8 * x),
                          m.a.push(4 * x + _ * x - 2 * w),
                          m.b.push(_ * x),
                          m.b.push(2 * _ * x),
                          m.b.push(_ * x),
                          m
                        );
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              7: [
                function (a, l, r) {
                  var c = a("./utils"),
                    u = c.complex,
                    h = c.runMultiFilter,
                    p = c.runMultiFilterReverse,
                    d = c.evaluatePhase,
                    m = function (b) {
                      for (
                        var w = b, x = { re: 1, im: 0 }, _ = [], M = [], O = 0;
                        O < w.length;
                        O++
                      ) {
                        _[O] = {};
                        var E = w[O];
                        (_[O].b0 = { re: E.b[0], im: 0 }),
                          (_[O].b1 = { re: E.b[1], im: 0 }),
                          (_[O].b2 = { re: E.b[2], im: 0 }),
                          (_[O].a1 = { re: E.a[0], im: 0 }),
                          (_[O].a2 = { re: E.a[1], im: 0 }),
                          (_[O].k = { re: E.k, im: 0 }),
                          (_[O].z = [0, 0]),
                          (M[O] = {}),
                          (M[O].b1 = E.b[1] / E.b[0]),
                          (M[O].b2 = E.b[2] / E.b[0]),
                          (M[O].a1 = E.a[0]),
                          (M[O].a2 = E.a[1]);
                      }
                      var W = function (R, B) {
                          var $ =
                              B * R.k.re - R.a1.re * R.z[0] - R.a2.re * R.z[1],
                            st =
                              R.b0.re * $ + R.b1.re * R.z[0] + R.b2.re * R.z[1];
                          return (R.z[1] = R.z[0]), (R.z[0] = $), st;
                        },
                        K = function (R, B) {
                          var $ = R,
                            st = 0;
                          for (st = 0; st < B.length; st++) $ = W(B[st], $);
                          return $;
                        },
                        J = function (R, B) {
                          var $ = R.Fs,
                            st = R.Fr,
                            at = -Math.PI * (st / $) * 2,
                            j = { re: Math.cos(at), im: Math.sin(at) },
                            G = u.mul(
                              B.k,
                              u.add(B.b0, u.mul(j, u.add(B.b1, u.mul(B.b2, j))))
                            ),
                            et = u.add(
                              x,
                              u.mul(j, u.add(B.a1, u.mul(B.a2, j)))
                            ),
                            it = u.div(G, et);
                          return {
                            magnitude: u.magnitude(it),
                            phase: u.phase(it),
                          };
                        },
                        H = function (R) {
                          var B = 0,
                            $ = { magnitude: 1, phase: 0 };
                          for (B = 0; B < _.length; B++) {
                            var st = J(R, _[B]);
                            ($.magnitude *= st.magnitude),
                              ($.phase += st.phase);
                          }
                          return (
                            ($.dBmagnitude =
                              20 * Math.log($.magnitude) * Math.LOG10E),
                            $
                          );
                        },
                        tt = function () {
                          for (var R = [], B = 0; B < w.length; B++)
                            R[B] = {
                              b0: { re: E.b[0], im: 0 },
                              b1: { re: E.b[1], im: 0 },
                              b2: { re: E.b[2], im: 0 },
                              a1: { re: E.a[0], im: 0 },
                              a2: { re: E.a[1], im: 0 },
                              k: { re: E.k, im: 0 },
                              z: [0, 0],
                            };
                          return R;
                        },
                        T = function (R) {
                          var B = tt();
                          return h(R, B, K);
                        },
                        S = function (R, B) {
                          var $ = {},
                            st = [],
                            at = 0;
                          for (at = 0; at < B; at++) st.push(R(at));
                          $.out = T(st);
                          var j = !1,
                            G = !1;
                          for (at = 0; at < B - 1; at++)
                            if (
                              ($.out[at] > $.out[at + 1] &&
                                !j &&
                                ((j = !0),
                                ($.max = { sample: at, value: $.out[at] })),
                              j && !G && $.out[at] < $.out[at + 1])
                            ) {
                              (G = !0),
                                ($.min = { sample: at, value: $.out[at] });
                              break;
                            }
                          return $;
                        },
                        v = function (R, B) {
                          var $ = Math.pow(R / 2, 2) - B;
                          return $ < 0
                            ? [
                                { re: -R / 2, im: Math.sqrt(Math.abs($)) },
                                { re: -R / 2, im: -Math.sqrt(Math.abs($)) },
                              ]
                            : [
                                { re: -R / 2 + Math.sqrt($), im: 0 },
                                { re: -R / 2 - Math.sqrt($), im: 0 },
                              ];
                        },
                        N = function () {
                          for (var R = [], B = 0; B < M.length; B++)
                            (R[B] = {}),
                              (R[B].z = v(M[B].b1, M[B].b2)),
                              (R[B].p = v(M[B].a1, M[B].a2));
                          return R;
                        };
                      return {
                        singleStep: function (R) {
                          return K(R, _);
                        },
                        multiStep: function (R, B) {
                          return h(R, _, K, B);
                        },
                        filtfilt: function (R, B) {
                          return p(h(R, _, K, B), _, K, !0);
                        },
                        simulate: function (R) {
                          return T(R);
                        },
                        stepResponse: function (R) {
                          return S(function () {
                            return 1;
                          }, R);
                        },
                        impulseResponse: function (R) {
                          return S(function (B) {
                            return B === 0 ? 1 : 0;
                          }, R);
                        },
                        responsePoint: function (R) {
                          return H(R);
                        },
                        response: function (R) {
                          R = R || 100;
                          var B = [],
                            $ = 0,
                            st = 2 * R;
                          for ($ = 0; $ < R; $++) B[$] = H({ Fs: st, Fr: $ });
                          return d(B), B;
                        },
                        polesZeros: function () {
                          return N();
                        },
                        reinit: function () {
                          for (O = 0; O < _.length; O++) _[O].z = [0, 0];
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              8: [
                function (a, l, r) {
                  var c = function (u) {
                    var h,
                      p = u,
                      d = [],
                      m = function (_) {
                        for (h = 0; h < _.steps; h++)
                          d.push(
                            p.singleStep(
                              (Math.random() - 0.5) * _.pp + _.offset
                            )
                          );
                      },
                      b = function (_) {
                        var M = _.offset + _.pp,
                          O = _.offset - _.pp;
                        for (h = 0; h < _.steps; h++)
                          h % 200 < 100
                            ? d.push(p.singleStep(M))
                            : d.push(p.singleStep(O));
                      },
                      w = function (_) {
                        var M = _.offset + _.pp,
                          O = _.offset - _.pp;
                        for (h = 0; h < _.steps; h++)
                          h % 100 == 0
                            ? d.push(p.singleStep(M))
                            : d.push(p.singleStep(O));
                      },
                      x = function (_) {
                        var M = _.offset + _.pp,
                          O = _.offset - _.pp,
                          E = O,
                          W = (M - O) / 100;
                        for (h = 0; h < _.steps; h++)
                          h % 200 < 100 ? (E += W) : (E -= W),
                            d.push(p.singleStep(E));
                      };
                    return {
                      randomStability: function (_) {
                        for (
                          p.reinit(), d.length = 0, m(_), h = _.setup;
                          h < d.length;
                          h++
                        )
                          if (d[h] > _.maxStable || d[h] < _.minStable)
                            return d[h];
                        return !0;
                      },
                      directedRandomStability: function (_) {
                        p.reinit(), (d.length = 0);
                        var M;
                        for (M = 0; M < _.tests; M++) {
                          var O = Math.random();
                          O < 0.25
                            ? m(_)
                            : O < 0.5
                            ? b(_)
                            : O < 0.75
                            ? w(_)
                            : x(_);
                        }
                        for (m(_), h = _.setup; h < d.length; h++)
                          if (d[h] > _.maxStable || d[h] < _.minStable)
                            return d[h];
                        return !0;
                      },
                      evaluateBehavior: function () {},
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              9: [
                function (a, l, r) {
                  (r.evaluatePhase = function (d) {
                    var m = 0,
                      b = 0,
                      w = Math.PI,
                      x = 2 * w,
                      _ = [];
                    for (b = 0; b < d.length; b++) _.push(d[b].phase);
                    for (
                      d[0].unwrappedPhase = d[0].phase,
                        d[0].groupDelay = 0,
                        b = 1;
                      b < _.length;
                      b++
                    ) {
                      var M = _[b] - _[b - 1];
                      if (M > w) for (m = b; m < _.length; m++) _[m] -= x;
                      else if (M < -w) for (m = b; m < _.length; m++) _[m] += x;
                      _[b] < 0
                        ? (d[b].unwrappedPhase = -_[b])
                        : (d[b].unwrappedPhase = _[b]),
                        (d[b].phaseDelay =
                          d[b].unwrappedPhase / (b / d.length)),
                        (d[b].groupDelay =
                          (d[b].unwrappedPhase - d[b - 1].unwrappedPhase) /
                          (w / d.length)),
                        d[b].groupDelay < 0 &&
                          (d[b].groupDelay = -d[b].groupDelay);
                    }
                    d[0].magnitude !== 0
                      ? ((d[0].phaseDelay = d[1].phaseDelay),
                        (d[0].groupDelay = d[1].groupDelay))
                      : ((d[0].phaseDelay = d[2].phaseDelay),
                        (d[0].groupDelay = d[2].groupDelay),
                        (d[1].phaseDelay = d[2].phaseDelay),
                        (d[1].groupDelay = d[2].groupDelay));
                  }),
                    (r.runMultiFilter = function (d, m, b, w) {
                      var x = [];
                      w && (x = d);
                      var _;
                      for (_ = 0; _ < d.length; _++) x[_] = b(d[_], m);
                      return x;
                    }),
                    (r.runMultiFilterReverse = function (d, m, b, w) {
                      var x = [];
                      w && (x = d);
                      var _;
                      for (_ = d.length - 1; _ >= 0; _--) x[_] = b(d[_], m);
                      return x;
                    });
                  var c = function (d, m) {
                    for (var b = !0; b; ) {
                      var w = d,
                        x = m;
                      if (
                        ((b = !1),
                        x || (x = 1),
                        w !== Math.floor(w) || x !== Math.floor(x))
                      )
                        return 1;
                      if (w === 0 || w === 1) return x;
                      (d = w - 1), (m = x * w), (b = !0);
                    }
                  };
                  r.besselFactors = function (d) {
                    for (var m = [], b = 0; b < d + 1; b++) {
                      var w = c(2 * d - b),
                        x = Math.pow(2, d - b) * c(b) * c(d - b);
                      m.unshift(Math.floor(w / x));
                    }
                    return m;
                  };
                  var u = function (d, m) {
                      for (var b = 0, w = 0; w < m; w++) {
                        var x = 1 / Math.pow(2, w + 1);
                        d > x && ((d -= x), (b += x));
                      }
                      return b;
                    },
                    h = function (d, m) {
                      return d & Math.pow(2, m);
                    },
                    p = function (d, m, b) {
                      var w = Math.abs(d),
                        x = d - w;
                      return {
                        number: h(w, m).toString(),
                        fraction: u(x, b).toString(),
                        numberBits: m,
                        fractionBits: b,
                      };
                    };
                  (r.fixedPoint = {
                    convert: function (d, m, b) {
                      return p(d, m, b);
                    },
                    add: function (d, m) {},
                    sub: function (d, m) {},
                    mul: function (d, m) {},
                    div: function (d, m) {},
                  }),
                    (r.complex = {
                      div: function (d, m) {
                        var b = d.re,
                          w = d.im,
                          x = m.re,
                          _ = m.im,
                          M = x * x + _ * _;
                        return {
                          re: (b * x + w * _) / M,
                          im: (w * x - b * _) / M,
                        };
                      },
                      mul: function (d, m) {
                        var b = d.re,
                          w = d.im,
                          x = m.re,
                          _ = m.im;
                        return {
                          re: b * x - w * _,
                          im: (b + w) * (x + _) - b * x - w * _,
                        };
                      },
                      add: function (d, m) {
                        return { re: d.re + m.re, im: d.im + m.im };
                      },
                      sub: function (d, m) {
                        return { re: d.re - m.re, im: d.im - m.im };
                      },
                      phase: function (d) {
                        return Math.atan2(d.im, d.re);
                      },
                      magnitude: function (d) {
                        return Math.sqrt(d.re * d.re + d.im * d.im);
                      },
                    });
                },
                {},
              ],
            },
            {},
            [1]
          )(1);
        });
      })(Rf)),
    Rf.exports
  );
}
var KS = ZS();
const ql = ob(KS);
function PS(i) {
  const e = new ql.CalcCascades(),
    a = {
      order: i.order,
      characteristic: "butterworth",
      Fs: i.Fs,
      preGain: !!i.preGain,
    };
  if (i.filterType === "lowpass") return e.lowpass({ ...a, Fc: i.Fc });
  if (i.filterType === "highpass") return e.highpass({ ...a, Fc: i.Fc });
  if (i.filterType === "bandpass") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      r = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandpass({ ...a, Fc: r, BW: l });
  }
  if (i.filterType === "bandstop") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      r = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandstop({ ...a, Fc: r, BW: l });
  }
  return null;
}
function IS(i) {
  const e = new ql.FirCoeffs();
  if (i.windowMode === "KaiserBessel") {
    i.characteristic === "FIR" && i.order < 3 && (i.order = 3);
    let a = i.order;
    return (
      a % 2 === 0 && (a += 1),
      e.kbFilter({ order: a, Fs: i.Fs, Fa: i.Fa, Fb: i.Fb, Att: i.Att })
    );
  }
  return i.filterType === "lowpass"
    ? e.lowpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
    : i.filterType === "highpass"
    ? e.highpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
    : i.filterType === "bandpass"
    ? e.bandpass({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
    : i.filterType === "bandstop"
    ? e.bandstop({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
    : null;
}
function WS(i, e) {
  if (!Array.isArray(i) || !i.length) return [];
  if (e.characteristic === "IIR") {
    const a = PS(e);
    return a ? new ql.IirFilter(a).multiStep(i) : i;
  }
  if (e.characteristic === "FIR") {
    const a = IS(e);
    return new ql.FirFilter(a).multiStep(i);
  }
  return i;
}
_s.register(ch, uh, gh, dh, hh, fh);
function $S(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let c = 0; c < i.length; c += l) r.push(i[Math.floor(c)]);
  return r;
}
function JS(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const t5 = () => {
    const {
        time: i,
        userFs: e,
        config: a,
        filteredECG: l,
        rawSamples: r,
        colors: c,
        selectedChannels: u,
        setFilteredSamples: h,
      } = ut.useContext(Fn),
      p = ut.useMemo(() => {
        if (!r.length || !l) return [];
        const w = JS(r),
          x = $S(r, w, e).filter((M) => M.x <= i),
          _ = { ...a, Fs: Number(e) };
        return u.map((M) => {
          const O = x.map((W) => W[M]),
            E = WS(O, _);
          return x.map((W, K) => ({ x: W.x, y: E[K] }));
        });
      }, [i, e, a, l, r, u]);
    ut.useEffect(() => {
      console.log("data after filter", p), h(p);
    }, [i, e, a, l, r, p, h]);
    const m = {
        datasets: u.map((w, x) => ({
          label: w,
          data: p[x] || [],
          borderColor: c[x % c.length],
          borderWidth: 1,
          pointRadius: 0,
          tension: 0,
        })),
      },
      b = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !0 } },
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return q.jsxs("div", {
      className: QS.signalContainer,
      children: [
        q.jsxs("h3", {
          children: [
            "EEG Signal (Filtered) ",
            q.jsx("span", { children: " Filter Used : " }),
            q.jsx("span", {
              children:
                a.characteristic === "FIR"
                  ? `Window based FIR - ${a.windowMode} - ${a.filterType}`
                  : `Butterworth IIR - ${a.filterType}`,
            }),
          ],
        }),
        q.jsx(Gl, { data: m, options: b }),
      ],
    });
  },
  e5 = "_signalContainer_sipfw_1",
  n5 = { signalContainer: e5 };
function i5(i, e, a = 0.05, l = 0.2) {
  const r = Math.random() * 2 * Math.PI;
  return i.map((c, u) => c + a * Math.sin(2 * Math.PI * l * (u / e) + r));
}
function a5(i, e, a = 15e-6, l = 50) {
  return (
    console.log("addPowerlineNoise", a, l),
    i.map((c, u) => c + a * Math.sin((2 * Math.PI * l * u) / e))
  );
}
function s5(i, e = 0.03) {
  return i.map((a) => a + e * (Math.random() * 2 - 1));
}
_s.register(ch, uh, gh, dh, hh, fh);
function l5(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let c = 0; c < i.length; c += l) r.push(i[Math.floor(c)]);
  return r;
}
function o5(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const r5 = () => {
  const {
    time: i,
    userFs: e,
    applyNoiseTrigger: a,
    setApplyNoiseTrigger: l,
    noise: r,
    rawSamples: c,
    selectedChannels: u,
    colors: h,
  } = ut.useContext(Fn);
  ut.useEffect(() => {
    !r.baseline && !r.powerline && !r.emg && l(!1);
  }, [r, l]);
  const p = ut.useMemo(() => {
      if (!c.length || !a) return [];
      const w = o5(c),
        _ = l5(c, w, e).filter((O) => O.x <= i),
        M = {};
      return (
        u.forEach((O) => {
          let E = _.map((W) => W[O]);
          r.baseline && (E = i5(E, e)),
            r.powerline && (E = a5(E, e)),
            r.emg && (E = s5(E)),
            (M[O] = E);
        }),
        _.map((O, E) => {
          const W = { x: O.x };
          return (
            u.forEach((K) => {
              W[K] = M[K][E];
            }),
            W
          );
        })
      );
    }, [a, r, i, e, c, u]),
    m = {
      datasets: u.map((w, x) => ({
        label: w,
        data: p.map((_) => ({ x: _.x, y: _[w] })),
        borderColor: h[x % h.length],
        borderWidth: 1,
        pointRadius: 0,
        tension: 0,
      })),
    },
    b = {
      responsive: !0,
      animation: !0,
      parsing: !1,
      plugins: { legend: { display: !0 } },
      scales: {
        x: {
          type: "linear",
          title: {
            display: !0,
            text: "Time (s)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 13 } },
        },
        y: {
          title: {
            display: !0,
            text: "Amplitude (mV)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 12 } },
        },
      },
    };
  return q.jsxs("div", {
    className: n5.signalContainer,
    children: [
      q.jsxs("h3", {
        children: [
          "EEG Signal",
          " ",
          q.jsxs("span", {
            children: [
              " ",
              "(Contiminated with",
              " ",
              r.baseline
                ? `Baseline Wander ${
                    (r.baseline && r.powerline) || (r.baseline && r.emg)
                      ? ","
                      : ""
                  }`
                : "",
              " ",
              r.powerline ? `Powerline Noise${r.emg ? "," : ""}` : "",
              " ",
              r.emg ? "Muscle Noise" : "",
              ")",
            ],
          }),
        ],
      }),
      q.jsx(Gl, { data: m, options: b }),
    ],
  });
};
function Pb(i, e) {
  const a = 1 << Math.ceil(Math.log2(i.length)),
    l = new ql.Fft(a),
    r = new Array(a).fill(0);
  for (let b = 0; b < i.length; b++) r[b] = i[b];
  const c = l.forward(r, "hanning"),
    u = l.magnitude(c),
    p = l.magToDb(u).map((b) => ((b * b) / (a * e)) * 1e3),
    d = p.map((b, w) => (w * e) / a),
    m = Math.floor(a / 2);
  return { freqs: d.slice(0, m), psd: p.slice(0, m) };
}
const c5 = "_signalContainer_v98p0_1",
  u5 = { signalContainer: c5 },
  f5 = () => {
    const {
        rawSamples: i,
        generateECG: e,
        userFs: a,
        colors: l,
        selectedChannels: r,
      } = ut.useContext(Fn),
      c = ut.useMemo(() => {
        if (!e || i.length === 0) return null;
        const p = r[0];
        if (!p) return null;
        console.log("rawSamples", i), console.log("channel", p);
        const d = i.map((b) => b[p]),
          m = Pb(d, a);
        return { channel: p, ...m };
      }, [i, e, a, r]);
    if (!c) return null;
    const u = {
        datasets: [
          {
            label: `Unfiltered EEG PSD (${c.channel})`,
            data: c.psd.map((p, d) => ({ x: c.freqs[d], y: p })),
            borderColor: l[0] || "#005FA7",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      h = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: a / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            title: {
              display: !0,
              text: "PSD (dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return q.jsxs("div", {
      className: u5.signalContainer,
      children: [
        q.jsx("h3", { children: "Power Spectral Density — Unfiltered EEG" }),
        q.jsx(Gl, { data: u, options: h }),
      ],
    });
  },
  h5 = "_signalContainer_ealwr_1",
  d5 = { signalContainer: h5 },
  g5 = () => {
    const {
        filteredSamples: i,
        generateECG: e,
        userFs: a,
        colors: l,
        selectedChannels: r,
      } = ut.useContext(Fn),
      c = ut.useMemo(() => {
        if (!e || i.length === 0) return null;
        console.log("filteredSamples", i);
        const p = r[0];
        if (!p) return null;
        const m = i[0].map((w) => w.y);
        console.log("Filtered PSD signal length:", m.length);
        const b = Pb(m, a);
        return console.log("Filtered PSD data", b), { channel: p, ...b };
      }, [i, e, a, r]);
    if (!c) return null;
    const u = {
        datasets: [
          {
            label: `Filtered EEG PSD (${c.channel})`,
            data: c.psd.map((p, d) => ({ x: c.freqs[d], y: p })),
            borderColor: l[0] || "blue",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      h = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: a / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            title: {
              display: !0,
              text: "PSD (dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return q.jsxs("div", {
      className: d5.signalContainer,
      children: [
        q.jsx("h3", { children: "Power Spectral Density — Filtered EEG" }),
        q.jsx(Gl, { data: u, options: h }),
      ],
    });
  },
  p5 = () => {
    const {
      generateECG: i,
      applyNoiseTrigger: e,
      filteredECG: a,
      applypsdTrigger: l,
    } = ut.useContext(Fn);
    return q.jsx("div", {
      className: Sf.leftPanelContainer,
      children: q.jsxs("div", {
        className: Sf.container,
        children: [
          q.jsxs("div", {
            className: Sf.psdContainer,
            children: [l && q.jsx(f5, {}), l && q.jsx(g5, {})],
          }),
          q.jsx("div", { children: i && q.jsx(GS, {}) }),
          q.jsx("div", { children: e && q.jsx(r5, {}) }),
          q.jsx("div", { children: a && q.jsx(t5, {}) }),
        ],
      }),
    });
  },
  m5 = "_rightPanelContainer_1re0l_1",
  b5 = "_right_1re0l_1",
  y5 = "_box_1re0l_49",
  v5 = "_rangeValue_1re0l_235",
  w5 = "_syncInputContainer_1re0l_251",
  _5 = "_channelInfo_1re0l_291",
  x5 = "_psdContainer_1re0l_315",
  Bn = {
    rightPanelContainer: m5,
    right: b5,
    box: y5,
    rangeValue: v5,
    syncInputContainer: w5,
    channelInfo: _5,
    psdContainer: x5,
  };
function Ib(i, e, a) {
  if (typeof i == "function" ? i === e : i.has(e))
    return arguments.length < 3 ? e : a;
  throw new TypeError("Private element is not present on this object");
}
function S5(i, e) {
  if (e.has(i))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function I0(i, e) {
  return i.get(Ib(i, e));
}
function C5(i, e, a) {
  S5(i, e), e.set(i, a);
}
function E5(i, e, a) {
  return i.set(Ib(i, e), a), a;
}
const M5 = 100,
  ht = {},
  T5 = () => {
    ht.previousActiveElement instanceof HTMLElement
      ? (ht.previousActiveElement.focus(), (ht.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  A5 = (i) =>
    new Promise((e) => {
      if (!i) return e();
      const a = window.scrollX,
        l = window.scrollY;
      (ht.restoreFocusTimeout = setTimeout(() => {
        T5(), e();
      }, M5)),
        window.scrollTo(a, l);
    }),
  Wb = "swal2-",
  O5 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  Q = O5.reduce((i, e) => ((i[e] = Wb + e), i), {}),
  z5 = ["success", "warning", "info", "question", "error"],
  qr = z5.reduce((i, e) => ((i[e] = Wb + e), i), {}),
  $b = "SweetAlert2:",
  ph = (i) => i.charAt(0).toUpperCase() + i.slice(1),
  ke = (i) => {
    console.warn(`${$b} ${typeof i == "object" ? i.join(" ") : i}`);
  },
  Ea = (i) => {
    console.error(`${$b} ${i}`);
  },
  W0 = [],
  D5 = (i) => {
    W0.includes(i) || (W0.push(i), ke(i));
  },
  Jb = (i, e = null) => {
    D5(
      `"${i}" is deprecated and will be removed in the next major release.${
        e ? ` Use "${e}" instead.` : ""
      }`
    );
  },
  Jr = (i) => (typeof i == "function" ? i() : i),
  mh = (i) => i && typeof i.toPromise == "function",
  Xl = (i) => (mh(i) ? i.toPromise() : Promise.resolve(i)),
  bh = (i) => i && Promise.resolve(i) === i,
  Re = () => document.body.querySelector(`.${Q.container}`),
  Ql = (i) => {
    const e = Re();
    return e ? e.querySelector(i) : null;
  },
  nn = (i) => Ql(`.${i}`),
  jt = () => nn(Q.popup),
  xs = () => nn(Q.icon),
  k5 = () => nn(Q["icon-content"]),
  t2 = () => nn(Q.title),
  yh = () => nn(Q["html-container"]),
  e2 = () => nn(Q.image),
  vh = () => nn(Q["progress-steps"]),
  tc = () => nn(Q["validation-message"]),
  Un = () => Ql(`.${Q.actions} .${Q.confirm}`),
  Ss = () => Ql(`.${Q.actions} .${Q.cancel}`),
  Ma = () => Ql(`.${Q.actions} .${Q.deny}`),
  R5 = () => nn(Q["input-label"]),
  Cs = () => Ql(`.${Q.loader}`),
  Zl = () => nn(Q.actions),
  n2 = () => nn(Q.footer),
  ec = () => nn(Q["timer-progress-bar"]),
  wh = () => nn(Q.close),
  B5 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  _h = () => {
    const i = jt();
    if (!i) return [];
    const e = i.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      a = Array.from(e).sort((c, u) => {
        const h = parseInt(c.getAttribute("tabindex") || "0"),
          p = parseInt(u.getAttribute("tabindex") || "0");
        return h > p ? 1 : h < p ? -1 : 0;
      }),
      l = i.querySelectorAll(B5),
      r = Array.from(l).filter((c) => c.getAttribute("tabindex") !== "-1");
    return [...new Set(a.concat(r))].filter((c) => Xe(c));
  },
  xh = () =>
    ci(document.body, Q.shown) &&
    !ci(document.body, Q["toast-shown"]) &&
    !ci(document.body, Q["no-backdrop"]),
  nc = () => {
    const i = jt();
    return i ? ci(i, Q.toast) : !1;
  },
  L5 = () => {
    const i = jt();
    return i ? i.hasAttribute("data-loading") : !1;
  },
  an = (i, e) => {
    if (((i.textContent = ""), e)) {
      const l = new DOMParser().parseFromString(e, "text/html"),
        r = l.querySelector("head");
      r &&
        Array.from(r.childNodes).forEach((u) => {
          i.appendChild(u);
        });
      const c = l.querySelector("body");
      c &&
        Array.from(c.childNodes).forEach((u) => {
          u instanceof HTMLVideoElement || u instanceof HTMLAudioElement
            ? i.appendChild(u.cloneNode(!0))
            : i.appendChild(u);
        });
    }
  },
  ci = (i, e) => {
    if (!e) return !1;
    const a = e.split(/\s+/);
    for (let l = 0; l < a.length; l++)
      if (!i.classList.contains(a[l])) return !1;
    return !0;
  },
  H5 = (i, e) => {
    Array.from(i.classList).forEach((a) => {
      !Object.values(Q).includes(a) &&
        !Object.values(qr).includes(a) &&
        !Object.values(e.showClass || {}).includes(a) &&
        i.classList.remove(a);
    });
  },
  en = (i, e, a) => {
    if ((H5(i, e), !e.customClass)) return;
    const l = e.customClass[a];
    if (l) {
      if (typeof l != "string" && !l.forEach) {
        ke(
          `Invalid type of customClass.${a}! Expected string or iterable object, got "${typeof l}"`
        );
        return;
      }
      Ht(i, l);
    }
  },
  ic = (i, e) => {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return i.querySelector(`.${Q.popup} > .${Q[e]}`);
      case "checkbox":
        return i.querySelector(`.${Q.popup} > .${Q.checkbox} input`);
      case "radio":
        return (
          i.querySelector(`.${Q.popup} > .${Q.radio} input:checked`) ||
          i.querySelector(`.${Q.popup} > .${Q.radio} input:first-child`)
        );
      case "range":
        return i.querySelector(`.${Q.popup} > .${Q.range} input`);
      default:
        return i.querySelector(`.${Q.popup} > .${Q.input}`);
    }
  },
  i2 = (i) => {
    if ((i.focus(), i.type !== "file")) {
      const e = i.value;
      (i.value = ""), (i.value = e);
    }
  },
  a2 = (i, e, a) => {
    !i ||
      !e ||
      (typeof e == "string" && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach((l) => {
        Array.isArray(i)
          ? i.forEach((r) => {
              a ? r.classList.add(l) : r.classList.remove(l);
            })
          : a
          ? i.classList.add(l)
          : i.classList.remove(l);
      }));
  },
  Ht = (i, e) => {
    a2(i, e, !0);
  },
  _n = (i, e) => {
    a2(i, e, !1);
  },
  Yi = (i, e) => {
    const a = Array.from(i.children);
    for (let l = 0; l < a.length; l++) {
      const r = a[l];
      if (r instanceof HTMLElement && ci(r, e)) return r;
    }
  },
  _a = (i, e, a) => {
    a === `${parseInt(`${a}`)}` && (a = parseInt(a)),
      a || parseInt(`${a}`) === 0
        ? i.style.setProperty(e, typeof a == "number" ? `${a}px` : a)
        : i.style.removeProperty(e);
  },
  ve = (i, e = "flex") => {
    i && (i.style.display = e);
  },
  ze = (i) => {
    i && (i.style.display = "none");
  },
  Sh = (i, e = "block") => {
    i &&
      new MutationObserver(() => {
        Kl(i, i.innerHTML, e);
      }).observe(i, { childList: !0, subtree: !0 });
  },
  $0 = (i, e, a, l) => {
    const r = i.querySelector(e);
    r && r.style.setProperty(a, l);
  },
  Kl = (i, e, a = "flex") => {
    e ? ve(i, a) : ze(i);
  },
  Xe = (i) =>
    !!(i && (i.offsetWidth || i.offsetHeight || i.getClientRects().length)),
  j5 = () => !Xe(Un()) && !Xe(Ma()) && !Xe(Ss()),
  Xf = (i) => i.scrollHeight > i.clientHeight,
  N5 = (i, e) => {
    let a = i;
    for (; a && a !== e; ) {
      if (Xf(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  },
  s2 = (i) => {
    const e = window.getComputedStyle(i),
      a = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      l = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return a > 0 || l > 0;
  },
  Ch = (i, e = !1) => {
    const a = ec();
    a &&
      Xe(a) &&
      (e && ((a.style.transition = "none"), (a.style.width = "100%")),
      setTimeout(() => {
        (a.style.transition = `width ${i / 1e3}s linear`),
          (a.style.width = "0%");
      }, 10));
  },
  U5 = () => {
    const i = ec();
    if (!i) return;
    const e = parseInt(window.getComputedStyle(i).width);
    i.style.removeProperty("transition"), (i.style.width = "100%");
    const a = parseInt(window.getComputedStyle(i).width),
      l = (e / a) * 100;
    i.style.width = `${l}%`;
  },
  F5 = () => typeof window > "u" || typeof document > "u",
  q5 = `
 <div aria-labelledby="${Q.title}" aria-describedby="${Q["html-container"]}" class="${Q.popup}" tabindex="-1">
   <button type="button" class="${Q.close}"></button>
   <ul class="${Q["progress-steps"]}"></ul>
   <div class="${Q.icon}"></div>
   <img class="${Q.image}" />
   <h2 class="${Q.title}" id="${Q.title}"></h2>
   <div class="${Q["html-container"]}" id="${Q["html-container"]}"></div>
   <input class="${Q.input}" id="${Q.input}" />
   <input type="file" class="${Q.file}" />
   <div class="${Q.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${Q.select}" id="${Q.select}"></select>
   <div class="${Q.radio}"></div>
   <label class="${Q.checkbox}">
     <input type="checkbox" id="${Q.checkbox}" />
     <span class="${Q.label}"></span>
   </label>
   <textarea class="${Q.textarea}" id="${Q.textarea}"></textarea>
   <div class="${Q["validation-message"]}" id="${Q["validation-message"]}"></div>
   <div class="${Q.actions}">
     <div class="${Q.loader}"></div>
     <button type="button" class="${Q.confirm}"></button>
     <button type="button" class="${Q.deny}"></button>
     <button type="button" class="${Q.cancel}"></button>
   </div>
   <div class="${Q.footer}"></div>
   <div class="${Q["timer-progress-bar-container"]}">
     <div class="${Q["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  Y5 = () => {
    const i = Re();
    return i
      ? (i.remove(),
        _n(
          [document.documentElement, document.body],
          [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]]
        ),
        !0)
      : !1;
  },
  pa = () => {
    ht.currentInstance && ht.currentInstance.resetValidationMessage();
  },
  V5 = () => {
    const i = jt();
    if (!i) return;
    const e = Yi(i, Q.input),
      a = Yi(i, Q.file),
      l = i.querySelector(`.${Q.range} input`),
      r = i.querySelector(`.${Q.range} output`),
      c = Yi(i, Q.select),
      u = i.querySelector(`.${Q.checkbox} input`),
      h = Yi(i, Q.textarea);
    e && (e.oninput = pa),
      a && (a.onchange = pa),
      c && (c.onchange = pa),
      u && (u.onchange = pa),
      h && (h.oninput = pa),
      l &&
        r &&
        ((l.oninput = () => {
          pa(), (r.value = l.value);
        }),
        (l.onchange = () => {
          pa(), (r.value = l.value);
        }));
  },
  G5 = (i) => {
    if (typeof i == "string") {
      const e = document.querySelector(i);
      if (!e) throw new Error(`Target element "${i}" not found`);
      return e;
    }
    return i;
  },
  X5 = (i) => {
    const e = jt();
    e &&
      (e.setAttribute("role", i.toast ? "alert" : "dialog"),
      e.setAttribute("aria-live", i.toast ? "polite" : "assertive"),
      i.toast || e.setAttribute("aria-modal", "true"));
  },
  Q5 = (i) => {
    window.getComputedStyle(i).direction === "rtl" &&
      (Ht(Re(), Q.rtl), (ht.isRTL = !0));
  },
  Z5 = (i) => {
    const e = Y5();
    if (F5()) {
      Ea("SweetAlert2 requires document to initialize");
      return;
    }
    const a = document.createElement("div");
    (a.className = Q.container),
      e && Ht(a, Q["no-transition"]),
      an(a, q5),
      (a.dataset.swal2Theme = i.theme);
    const l = G5(i.target || "body");
    l.appendChild(a),
      i.topLayer && (a.setAttribute("popover", ""), a.showPopover()),
      X5(i),
      Q5(l),
      V5();
  },
  Eh = (i, e) => {
    i instanceof HTMLElement
      ? e.appendChild(i)
      : typeof i == "object"
      ? K5(i, e)
      : i && an(e, i);
  },
  K5 = (i, e) => {
    "jquery" in i ? P5(e, i) : an(e, i.toString());
  },
  P5 = (i, e) => {
    if (((i.textContent = ""), 0 in e))
      for (let a = 0; a in e; a++) i.appendChild(e[a].cloneNode(!0));
    else i.appendChild(e.cloneNode(!0));
  },
  I5 = (i, e) => {
    const a = Zl(),
      l = Cs();
    !a ||
      !l ||
      (!e.showConfirmButton && !e.showDenyButton && !e.showCancelButton
        ? ze(a)
        : ve(a),
      en(a, e, "actions"),
      W5(a, l, e),
      an(l, e.loaderHtml || ""),
      en(l, e, "loader"));
  };
function W5(i, e, a) {
  const l = Un(),
    r = Ma(),
    c = Ss();
  !l ||
    !r ||
    !c ||
    (Lf(l, "confirm", a),
    Lf(r, "deny", a),
    Lf(c, "cancel", a),
    $5(l, r, c, a),
    a.reverseButtons &&
      (a.toast
        ? (i.insertBefore(c, l), i.insertBefore(r, l))
        : (i.insertBefore(c, e), i.insertBefore(r, e), i.insertBefore(l, e))));
}
function $5(i, e, a, l) {
  if (!l.buttonsStyling) {
    _n([i, e, a], Q.styled);
    return;
  }
  Ht([i, e, a], Q.styled),
    l.confirmButtonColor &&
      i.style.setProperty(
        "--swal2-confirm-button-background-color",
        l.confirmButtonColor
      ),
    l.denyButtonColor &&
      e.style.setProperty(
        "--swal2-deny-button-background-color",
        l.denyButtonColor
      ),
    l.cancelButtonColor &&
      a.style.setProperty(
        "--swal2-cancel-button-background-color",
        l.cancelButtonColor
      ),
    Bf(i),
    Bf(e),
    Bf(a);
}
function Bf(i) {
  const e = window.getComputedStyle(i);
  if (e.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const a = e.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)"
  );
  i.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${a}`)
  );
}
function Lf(i, e, a) {
  const l = ph(e);
  Kl(i, a[`show${l}Button`], "inline-block"),
    an(i, a[`${e}ButtonText`] || ""),
    i.setAttribute("aria-label", a[`${e}ButtonAriaLabel`] || ""),
    (i.className = Q[e]),
    en(i, a, `${e}Button`);
}
const J5 = (i, e) => {
    const a = wh();
    a &&
      (an(a, e.closeButtonHtml || ""),
      en(a, e, "closeButton"),
      Kl(a, e.showCloseButton),
      a.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
  },
  t3 = (i, e) => {
    const a = Re();
    a &&
      (e3(a, e.backdrop),
      n3(a, e.position),
      i3(a, e.grow),
      en(a, e, "container"));
  };
function e3(i, e) {
  typeof e == "string"
    ? (i.style.background = e)
    : e || Ht([document.documentElement, document.body], Q["no-backdrop"]);
}
function n3(i, e) {
  e &&
    (e in Q
      ? Ht(i, Q[e])
      : (ke('The "position" parameter is not valid, defaulting to "center"'),
        Ht(i, Q.center)));
}
function i3(i, e) {
  e && Ht(i, Q[`grow-${e}`]);
}
var It = { innerParams: new WeakMap(), domCache: new WeakMap() };
const a3 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  s3 = (i, e) => {
    const a = jt();
    if (!a) return;
    const l = It.innerParams.get(i),
      r = !l || e.input !== l.input;
    a3.forEach((c) => {
      const u = Yi(a, Q[c]);
      u && (r3(c, e.inputAttributes), (u.className = Q[c]), r && ze(u));
    }),
      e.input && (r && l3(e), c3(e));
  },
  l3 = (i) => {
    if (!i.input) return;
    if (!ce[i.input]) {
      Ea(
        `Unexpected type of input! Expected ${Object.keys(ce).join(
          " | "
        )}, got "${i.input}"`
      );
      return;
    }
    const e = l2(i.input);
    if (!e) return;
    const a = ce[i.input](e, i);
    ve(e),
      i.inputAutoFocus &&
        setTimeout(() => {
          i2(a);
        });
  },
  o3 = (i) => {
    for (let e = 0; e < i.attributes.length; e++) {
      const a = i.attributes[e].name;
      ["id", "type", "value", "style"].includes(a) || i.removeAttribute(a);
    }
  },
  r3 = (i, e) => {
    const a = jt();
    if (!a) return;
    const l = ic(a, i);
    if (l) {
      o3(l);
      for (const r in e) l.setAttribute(r, e[r]);
    }
  },
  c3 = (i) => {
    if (!i.input) return;
    const e = l2(i.input);
    e && en(e, i, "input");
  },
  Mh = (i, e) => {
    !i.placeholder &&
      e.inputPlaceholder &&
      (i.placeholder = e.inputPlaceholder);
  },
  Pl = (i, e, a) => {
    if (a.inputLabel) {
      const l = document.createElement("label"),
        r = Q["input-label"];
      l.setAttribute("for", i.id),
        (l.className = r),
        typeof a.customClass == "object" && Ht(l, a.customClass.inputLabel),
        (l.innerText = a.inputLabel),
        e.insertAdjacentElement("beforebegin", l);
    }
  },
  l2 = (i) => {
    const e = jt();
    if (e) return Yi(e, Q[i] || Q.input);
  },
  Yr = (i, e) => {
    ["string", "number"].includes(typeof e)
      ? (i.value = `${e}`)
      : bh(e) ||
        ke(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`
        );
  },
  ce = {};
ce.text =
  ce.email =
  ce.password =
  ce.number =
  ce.tel =
  ce.url =
  ce.search =
  ce.date =
  ce["datetime-local"] =
  ce.time =
  ce.week =
  ce.month =
    (i, e) => {
      const a = i;
      return Yr(a, e.inputValue), Pl(a, a, e), Mh(a, e), (a.type = e.input), a;
    };
ce.file = (i, e) => {
  const a = i;
  return Pl(a, a, e), Mh(a, e), a;
};
ce.range = (i, e) => {
  const a = i,
    l = a.querySelector("input"),
    r = a.querySelector("output");
  return (
    l && (Yr(l, e.inputValue), (l.type = e.input), Pl(l, i, e)),
    r && Yr(r, e.inputValue),
    i
  );
};
ce.select = (i, e) => {
  const a = i;
  if (((a.textContent = ""), e.inputPlaceholder)) {
    const l = document.createElement("option");
    an(l, e.inputPlaceholder),
      (l.value = ""),
      (l.disabled = !0),
      (l.selected = !0),
      a.appendChild(l);
  }
  return Pl(a, a, e), a;
};
ce.radio = (i) => {
  const e = i;
  return (e.textContent = ""), i;
};
ce.checkbox = (i, e) => {
  const a = jt();
  if (!a) throw new Error("Popup not found");
  const l = ic(a, "checkbox");
  if (!l) throw new Error("Checkbox input not found");
  (l.value = "1"), (l.checked = !!e.inputValue);
  const c = i.querySelector("span");
  if (c) {
    const u = e.inputPlaceholder || e.inputLabel;
    u && an(c, u);
  }
  return l;
};
ce.textarea = (i, e) => {
  const a = i;
  Yr(a, e.inputValue), Mh(a, e), Pl(a, a, e);
  const l = (r) =>
    parseInt(window.getComputedStyle(r).marginLeft) +
    parseInt(window.getComputedStyle(r).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const r = jt();
        if (!r) return;
        const c = parseInt(window.getComputedStyle(r).width),
          u = () => {
            if (!document.body.contains(a)) return;
            const h = a.offsetWidth + l(a),
              p = jt();
            p && (h > c ? (p.style.width = `${h}px`) : _a(p, "width", e.width));
          };
        new MutationObserver(u).observe(a, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    a
  );
};
const u3 = (i, e) => {
    const a = yh();
    a &&
      (Sh(a),
      en(a, e, "htmlContainer"),
      e.html
        ? (Eh(e.html, a), ve(a, "block"))
        : e.text
        ? ((a.textContent = e.text), ve(a, "block"))
        : ze(a),
      s3(i, e));
  },
  f3 = (i, e) => {
    const a = n2();
    a &&
      (Sh(a),
      Kl(a, !!e.footer, "block"),
      e.footer && Eh(e.footer, a),
      en(a, e, "footer"));
  },
  h3 = (i, e) => {
    const a = It.innerParams.get(i),
      l = xs();
    if (!l) return;
    if (a && e.icon === a.icon) {
      tb(l, e), J0(l, e);
      return;
    }
    if (!e.icon && !e.iconHtml) {
      ze(l);
      return;
    }
    if (e.icon && Object.keys(qr).indexOf(e.icon) === -1) {
      Ea(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`
      ),
        ze(l);
      return;
    }
    ve(l),
      tb(l, e),
      J0(l, e),
      Ht(l, e.showClass && e.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", o2);
  },
  J0 = (i, e) => {
    for (const [a, l] of Object.entries(qr)) e.icon !== a && _n(i, l);
    Ht(i, e.icon && qr[e.icon]), p3(i, e), o2(), en(i, e, "icon");
  },
  o2 = () => {
    const i = jt();
    if (!i) return;
    const e = window.getComputedStyle(i).getPropertyValue("background-color"),
      a = i.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let l = 0; l < a.length; l++) a[l].style.backgroundColor = e;
  },
  d3 = (i) => `
  ${i.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${i.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${i.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  g3 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  tb = (i, e) => {
    if (!e.icon && !e.iconHtml) return;
    let a = i.innerHTML,
      l = "";
    e.iconHtml
      ? (l = eb(e.iconHtml))
      : e.icon === "success"
      ? ((l = d3(e)), (a = a.replace(/ style=".*?"/g, "")))
      : e.icon === "error"
      ? (l = g3)
      : e.icon && (l = eb({ question: "?", warning: "!", info: "i" }[e.icon])),
      a.trim() !== l.trim() && an(i, l);
  },
  p3 = (i, e) => {
    if (e.iconColor) {
      (i.style.color = e.iconColor), (i.style.borderColor = e.iconColor);
      for (const a of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        $0(i, a, "background-color", e.iconColor);
      $0(i, ".swal2-success-ring", "border-color", e.iconColor);
    }
  },
  eb = (i) => `<div class="${Q["icon-content"]}">${i}</div>`,
  m3 = (i, e) => {
    const a = e2();
    if (a) {
      if (!e.imageUrl) {
        ze(a);
        return;
      }
      ve(a, ""),
        a.setAttribute("src", e.imageUrl),
        a.setAttribute("alt", e.imageAlt || ""),
        _a(a, "width", e.imageWidth),
        _a(a, "height", e.imageHeight),
        (a.className = Q.image),
        en(a, e, "image");
    }
  };
let Th = !1,
  r2 = 0,
  c2 = 0,
  u2 = 0,
  f2 = 0;
const b3 = (i) => {
    i.addEventListener("mousedown", Vr),
      document.body.addEventListener("mousemove", Gr),
      i.addEventListener("mouseup", Xr),
      i.addEventListener("touchstart", Vr),
      document.body.addEventListener("touchmove", Gr),
      i.addEventListener("touchend", Xr);
  },
  y3 = (i) => {
    i.removeEventListener("mousedown", Vr),
      document.body.removeEventListener("mousemove", Gr),
      i.removeEventListener("mouseup", Xr),
      i.removeEventListener("touchstart", Vr),
      document.body.removeEventListener("touchmove", Gr),
      i.removeEventListener("touchend", Xr);
  },
  Vr = (i) => {
    const e = jt();
    if (!e) return;
    const a = xs();
    if (i.target === e || (a && a.contains(i.target))) {
      Th = !0;
      const l = h2(i);
      (r2 = l.clientX),
        (c2 = l.clientY),
        (u2 = parseInt(e.style.insetInlineStart) || 0),
        (f2 = parseInt(e.style.insetBlockStart) || 0),
        Ht(e, "swal2-dragging");
    }
  },
  Gr = (i) => {
    const e = jt();
    if (e && Th) {
      let { clientX: a, clientY: l } = h2(i);
      const r = a - r2;
      (e.style.insetInlineStart = `${u2 + (ht.isRTL ? -r : r)}px`),
        (e.style.insetBlockStart = `${f2 + (l - c2)}px`);
    }
  },
  Xr = () => {
    const i = jt();
    (Th = !1), _n(i, "swal2-dragging");
  },
  h2 = (i) => {
    let e = 0,
      a = 0;
    return (
      i.type.startsWith("mouse")
        ? ((e = i.clientX), (a = i.clientY))
        : i.type.startsWith("touch") &&
          ((e = i.touches[0].clientX), (a = i.touches[0].clientY)),
      { clientX: e, clientY: a }
    );
  },
  v3 = (i, e) => {
    const a = Re(),
      l = jt();
    if (!(!a || !l)) {
      if (e.toast) {
        _a(a, "width", e.width), (l.style.width = "100%");
        const r = Cs();
        r && l.insertBefore(r, xs());
      } else _a(l, "width", e.width);
      _a(l, "padding", e.padding),
        e.color && (l.style.color = e.color),
        e.background && (l.style.background = e.background),
        ze(tc()),
        w3(l, e),
        e.draggable && !e.toast
          ? (Ht(l, Q.draggable), b3(l))
          : (_n(l, Q.draggable), y3(l));
    }
  },
  w3 = (i, e) => {
    const a = e.showClass || {};
    (i.className = `${Q.popup} ${Xe(i) ? a.popup : ""}`),
      e.toast
        ? (Ht([document.documentElement, document.body], Q["toast-shown"]),
          Ht(i, Q.toast))
        : Ht(i, Q.modal),
      en(i, e, "popup"),
      typeof e.customClass == "string" && Ht(i, e.customClass),
      e.icon && Ht(i, Q[`icon-${e.icon}`]);
  },
  _3 = (i, e) => {
    const a = vh();
    if (!a) return;
    const { progressSteps: l, currentProgressStep: r } = e;
    if (!l || l.length === 0 || r === void 0) {
      ze(a);
      return;
    }
    ve(a),
      (a.textContent = ""),
      r >= l.length &&
        ke(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      l.forEach((c, u) => {
        const h = x3(c);
        if (
          (a.appendChild(h),
          u === r && Ht(h, Q["active-progress-step"]),
          u !== l.length - 1)
        ) {
          const p = S3(e);
          a.appendChild(p);
        }
      });
  },
  x3 = (i) => {
    const e = document.createElement("li");
    return Ht(e, Q["progress-step"]), an(e, i), e;
  },
  S3 = (i) => {
    const e = document.createElement("li");
    return (
      Ht(e, Q["progress-step-line"]),
      i.progressStepsDistance && _a(e, "width", i.progressStepsDistance),
      e
    );
  },
  C3 = (i, e) => {
    const a = t2();
    a &&
      (Sh(a),
      Kl(a, !!(e.title || e.titleText), "block"),
      e.title && Eh(e.title, a),
      e.titleText && (a.innerText = e.titleText),
      en(a, e, "title"));
  },
  d2 = (i, e) => {
    var a;
    v3(i, e),
      t3(i, e),
      _3(i, e),
      h3(i, e),
      m3(i, e),
      C3(i, e),
      J5(i, e),
      u3(i, e),
      I5(i, e),
      f3(i, e);
    const l = jt();
    typeof e.didRender == "function" && l && e.didRender(l),
      (a = ht.eventEmitter) === null || a === void 0 || a.emit("didRender", l);
  },
  E3 = () => Xe(jt()),
  g2 = () => {
    var i;
    return (i = Un()) === null || i === void 0 ? void 0 : i.click();
  },
  M3 = () => {
    var i;
    return (i = Ma()) === null || i === void 0 ? void 0 : i.click();
  },
  T3 = () => {
    var i;
    return (i = Ss()) === null || i === void 0 ? void 0 : i.click();
  },
  Es = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  p2 = (i) => {
    if (i.keydownTarget && i.keydownHandlerAdded && i.keydownHandler) {
      const e = i.keydownHandler;
      i.keydownTarget.removeEventListener("keydown", e, {
        capture: i.keydownListenerCapture,
      }),
        (i.keydownHandlerAdded = !1);
    }
  },
  A3 = (i, e, a) => {
    if ((p2(i), !e.toast)) {
      const l = (c) => z3(e, c, a);
      i.keydownHandler = l;
      const r = e.keydownListenerCapture ? window : jt();
      if (r) {
        (i.keydownTarget = r),
          (i.keydownListenerCapture = e.keydownListenerCapture);
        const c = l;
        i.keydownTarget.addEventListener("keydown", c, {
          capture: i.keydownListenerCapture,
        }),
          (i.keydownHandlerAdded = !0);
      }
    }
  },
  Qf = (i, e) => {
    var a;
    const l = _h();
    if (l.length) {
      (i = i + e),
        i === -2 && (i = l.length - 1),
        i === l.length ? (i = 0) : i === -1 && (i = l.length - 1),
        l[i].focus();
      return;
    }
    (a = jt()) === null || a === void 0 || a.focus();
  },
  m2 = ["ArrowRight", "ArrowDown"],
  O3 = ["ArrowLeft", "ArrowUp"],
  z3 = (i, e, a) => {
    i &&
      (e.isComposing ||
        e.keyCode === 229 ||
        (i.stopKeydownPropagation && e.stopPropagation(),
        e.key === "Enter"
          ? D3(e, i)
          : e.key === "Tab"
          ? k3(e)
          : [...m2, ...O3].includes(e.key)
          ? R3(e.key)
          : e.key === "Escape" && B3(e, i, a)));
  },
  D3 = (i, e) => {
    if (!Jr(e.allowEnterKey)) return;
    const a = jt();
    if (!a || !e.input) return;
    const l = ic(a, e.input);
    if (
      i.target &&
      l &&
      i.target instanceof HTMLElement &&
      i.target.outerHTML === l.outerHTML
    ) {
      if (["textarea", "file"].includes(e.input)) return;
      g2(), i.preventDefault();
    }
  },
  k3 = (i) => {
    const e = i.target,
      a = _h();
    let l = -1;
    for (let r = 0; r < a.length; r++)
      if (e === a[r]) {
        l = r;
        break;
      }
    i.shiftKey ? Qf(l, -1) : Qf(l, 1), i.stopPropagation(), i.preventDefault();
  },
  R3 = (i) => {
    const e = Zl(),
      a = Un(),
      l = Ma(),
      r = Ss();
    if (!e || !a || !l || !r) return;
    const c = [a, l, r];
    if (
      document.activeElement instanceof HTMLElement &&
      !c.includes(document.activeElement)
    )
      return;
    const u = m2.includes(i) ? "nextElementSibling" : "previousElementSibling";
    let h = document.activeElement;
    if (h) {
      for (let p = 0; p < e.children.length; p++) {
        if (((h = h[u]), !h)) return;
        if (h instanceof HTMLButtonElement && Xe(h)) break;
      }
      h instanceof HTMLButtonElement && h.focus();
    }
  },
  B3 = (i, e, a) => {
    i.preventDefault(), Jr(e.allowEscapeKey) && a(Es.esc);
  };
var bs = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const L3 = () => {
    const i = Re();
    Array.from(document.body.children).forEach((a) => {
      a.contains(i) ||
        (a.hasAttribute("aria-hidden") &&
          a.setAttribute(
            "data-previous-aria-hidden",
            a.getAttribute("aria-hidden") || ""
          ),
        a.setAttribute("aria-hidden", "true"));
    });
  },
  b2 = () => {
    Array.from(document.body.children).forEach((e) => {
      e.hasAttribute("data-previous-aria-hidden")
        ? (e.setAttribute(
            "aria-hidden",
            e.getAttribute("data-previous-aria-hidden") || ""
          ),
          e.removeAttribute("data-previous-aria-hidden"))
        : e.removeAttribute("aria-hidden");
    });
  },
  y2 = typeof window < "u" && !!window.GestureEvent,
  H3 = () => {
    if (y2 && !ci(document.body, Q.iosfix)) {
      const i = document.body.scrollTop;
      (document.body.style.top = `${i * -1}px`),
        Ht(document.body, Q.iosfix),
        j3();
    }
  },
  j3 = () => {
    const i = Re();
    if (!i) return;
    let e;
    (i.ontouchstart = (a) => {
      e = N3(a);
    }),
      (i.ontouchmove = (a) => {
        e && (a.preventDefault(), a.stopPropagation());
      });
  },
  N3 = (i) => {
    const e = i.target,
      a = Re(),
      l = yh();
    return !a || !l || U3(i) || F3(i)
      ? !1
      : e === a ||
          (!Xf(a) &&
            e instanceof HTMLElement &&
            !N5(e, l) &&
            e.tagName !== "INPUT" &&
            e.tagName !== "TEXTAREA" &&
            !(Xf(l) && l.contains(e)));
  },
  U3 = (i) =>
    !!(i.touches && i.touches.length && i.touches[0].touchType === "stylus"),
  F3 = (i) => i.touches && i.touches.length > 1,
  q3 = () => {
    if (ci(document.body, Q.iosfix)) {
      const i = parseInt(document.body.style.top, 10);
      _n(document.body, Q.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = i * -1);
    }
  },
  Y3 = () => {
    const i = document.createElement("div");
    (i.className = Q["scrollbar-measure"]), document.body.appendChild(i);
    const e = i.getBoundingClientRect().width - i.clientWidth;
    return document.body.removeChild(i), e;
  };
let ds = null;
const V3 = (i) => {
    ds === null &&
      (document.body.scrollHeight > window.innerHeight || i === "scroll") &&
      ((ds = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${ds + Y3()}px`));
  },
  G3 = () => {
    ds !== null &&
      ((document.body.style.paddingRight = `${ds}px`), (ds = null));
  };
function v2(i, e, a, l) {
  nc() ? nb(i, l) : (A5(a).then(() => nb(i, l)), p2(ht)),
    y2
      ? (e.setAttribute("style", "display:none !important"),
        e.removeAttribute("class"),
        (e.innerHTML = ""))
      : e.remove(),
    xh() && (G3(), q3(), b2()),
    X3();
}
function X3() {
  _n(
    [document.documentElement, document.body],
    [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]]
  );
}
function Vi(i) {
  i = Z3(i);
  const e = bs.swalPromiseResolve.get(this),
    a = Q3(this);
  this.isAwaitingPromise ? i.isDismissed || (Il(this), e(i)) : a && e(i);
}
const Q3 = (i) => {
  const e = jt();
  if (!e) return !1;
  const a = It.innerParams.get(i);
  if (!a || ci(e, a.hideClass.popup)) return !1;
  _n(e, a.showClass.popup), Ht(e, a.hideClass.popup);
  const l = Re();
  return (
    _n(l, a.showClass.backdrop), Ht(l, a.hideClass.backdrop), K3(i, e, a), !0
  );
};
function w2(i) {
  const e = bs.swalPromiseReject.get(this);
  Il(this), e && e(i);
}
const Il = (i) => {
    i.isAwaitingPromise &&
      (delete i.isAwaitingPromise, It.innerParams.get(i) || i._destroy());
  },
  Z3 = (i) =>
    typeof i > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, i),
  K3 = (i, e, a) => {
    var l;
    const r = Re(),
      c = s2(e);
    typeof a.willClose == "function" && a.willClose(e),
      (l = ht.eventEmitter) === null || l === void 0 || l.emit("willClose", e),
      c && r
        ? P3(i, e, r, !!a.returnFocus, a.didClose)
        : r && v2(i, r, !!a.returnFocus, a.didClose);
  },
  P3 = (i, e, a, l, r) => {
    ht.swalCloseEventFinishedCallback = v2.bind(null, i, a, l, r);
    const c = function (u) {
      if (u.target === e) {
        var h;
        (h = ht.swalCloseEventFinishedCallback) === null ||
          h === void 0 ||
          h.call(ht),
          delete ht.swalCloseEventFinishedCallback,
          e.removeEventListener("animationend", c),
          e.removeEventListener("transitionend", c);
      }
    };
    e.addEventListener("animationend", c),
      e.addEventListener("transitionend", c);
  },
  nb = (i, e) => {
    setTimeout(() => {
      var a;
      typeof e == "function" && e.bind(i.params)(),
        (a = ht.eventEmitter) === null || a === void 0 || a.emit("didClose"),
        i._destroy && i._destroy();
    });
  },
  ys = (i) => {
    let e = jt();
    if ((e || new Yl(), (e = jt()), !e)) return;
    const a = Cs();
    nc() ? ze(xs()) : I3(e, i),
      ve(a),
      e.setAttribute("data-loading", "true"),
      e.setAttribute("aria-busy", "true"),
      e.focus();
  },
  I3 = (i, e) => {
    const a = Zl(),
      l = Cs();
    !a ||
      !l ||
      (!e && Xe(Un()) && (e = Un()),
      ve(a),
      e &&
        (ze(e),
        l.setAttribute("data-button-to-replace", e.className),
        a.insertBefore(l, e)),
      Ht([i, a], Q.loading));
  },
  W3 = (i, e) => {
    e.input === "select" || e.input === "radio"
      ? n4(i, e)
      : ["text", "email", "number", "tel", "textarea"].some(
          (a) => a === e.input
        ) &&
        (mh(e.inputValue) || bh(e.inputValue)) &&
        (ys(Un()), i4(i, e));
  },
  $3 = (i, e) => {
    const a = i.getInput();
    if (!a) return null;
    switch (e.input) {
      case "checkbox":
        return J3(a);
      case "radio":
        return t4(a);
      case "file":
        return e4(a);
      default:
        return e.inputAutoTrim ? a.value.trim() : a.value;
    }
  },
  J3 = (i) => (i.checked ? 1 : 0),
  t4 = (i) => (i.checked ? i.value : null),
  e4 = (i) =>
    i.files && i.files.length
      ? i.getAttribute("multiple") !== null
        ? i.files
        : i.files[0]
      : null,
  n4 = (i, e) => {
    const a = jt();
    if (!a) return;
    const l = (r) => {
      e.input === "select"
        ? a4(a, Qr(r), e)
        : e.input === "radio" && s4(a, Qr(r), e);
    };
    mh(e.inputOptions) || bh(e.inputOptions)
      ? (ys(Un()),
        Xl(e.inputOptions).then((r) => {
          i.hideLoading(), l(r);
        }))
      : typeof e.inputOptions == "object"
      ? l(e.inputOptions)
      : Ea(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`
        );
  },
  i4 = (i, e) => {
    const a = i.getInput();
    a &&
      (ze(a),
      Xl(e.inputValue)
        .then((l) => {
          (a.value = e.input === "number" ? `${parseFloat(l) || 0}` : `${l}`),
            ve(a),
            a.focus(),
            i.hideLoading();
        })
        .catch((l) => {
          Ea(`Error in inputValue promise: ${l}`),
            (a.value = ""),
            ve(a),
            a.focus(),
            i.hideLoading();
        }));
  };
function a4(i, e, a) {
  const l = Yi(i, Q.select);
  if (!l) return;
  const r = (c, u, h) => {
    const p = document.createElement("option");
    (p.value = h),
      an(p, u),
      (p.selected = _2(h, a.inputValue)),
      c.appendChild(p);
  };
  e.forEach((c) => {
    const u = c[0],
      h = c[1];
    if (Array.isArray(h)) {
      const p = document.createElement("optgroup");
      (p.label = u),
        (p.disabled = !1),
        l.appendChild(p),
        h.forEach((d) => r(p, d[1], d[0]));
    } else r(l, h, u);
  }),
    l.focus();
}
function s4(i, e, a) {
  const l = Yi(i, Q.radio);
  if (!l) return;
  e.forEach((c) => {
    const u = c[0],
      h = c[1],
      p = document.createElement("input"),
      d = document.createElement("label");
    (p.type = "radio"),
      (p.name = Q.radio),
      (p.value = u),
      _2(u, a.inputValue) && (p.checked = !0);
    const m = document.createElement("span");
    an(m, h),
      (m.className = Q.label),
      d.appendChild(p),
      d.appendChild(m),
      l.appendChild(d);
  });
  const r = l.querySelectorAll("input");
  r.length && r[0].focus();
}
const Qr = (i) => {
    const e = [];
    return (
      i instanceof Map
        ? i.forEach((a, l) => {
            let r = a;
            typeof r == "object" && (r = Qr(r)), e.push([l, r]);
          })
        : Object.keys(i).forEach((a) => {
            let l = i[a];
            typeof l == "object" && (l = Qr(l)), e.push([a, l]);
          }),
      e
    );
  },
  _2 = (i, e) =>
    !!e && e !== null && e !== void 0 && e.toString() === i.toString(),
  l4 = (i) => {
    const e = It.innerParams.get(i);
    i.disableButtons(), e.input ? x2(i, "confirm") : Oh(i, !0);
  },
  o4 = (i) => {
    const e = It.innerParams.get(i);
    i.disableButtons(), e.returnInputValueOnDeny ? x2(i, "deny") : Ah(i, !1);
  },
  r4 = (i, e) => {
    i.disableButtons(), e(Es.cancel);
  },
  x2 = (i, e) => {
    const a = It.innerParams.get(i);
    if (!a.input) {
      Ea(
        `The "input" parameter is needed to be set when using returnInputValueOn${ph(
          e
        )}`
      );
      return;
    }
    const l = i.getInput(),
      r = $3(i, a);
    a.inputValidator
      ? c4(i, r, e)
      : l && !l.checkValidity()
      ? (i.enableButtons(),
        i.showValidationMessage(a.validationMessage || l.validationMessage))
      : e === "deny"
      ? Ah(i, r)
      : Oh(i, r);
  },
  c4 = (i, e, a) => {
    const l = It.innerParams.get(i);
    i.disableInput(),
      Promise.resolve()
        .then(() => Xl(l.inputValidator(e, l.validationMessage)))
        .then((c) => {
          i.enableButtons(),
            i.enableInput(),
            c ? i.showValidationMessage(c) : a === "deny" ? Ah(i, e) : Oh(i, e);
        });
  },
  Ah = (i, e) => {
    const a = It.innerParams.get(i);
    a.showLoaderOnDeny && ys(Ma()),
      a.preDeny
        ? ((i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preDeny(e, a.validationMessage)))
            .then((r) => {
              r === !1
                ? (i.hideLoading(), Il(i))
                : i.close({ isDenied: !0, value: typeof r > "u" ? e : r });
            })
            .catch((r) => S2(i, r)))
        : i.close({ isDenied: !0, value: e });
  },
  ib = (i, e) => {
    i.close({ isConfirmed: !0, value: e });
  },
  S2 = (i, e) => {
    i.rejectPromise(e);
  },
  Oh = (i, e) => {
    const a = It.innerParams.get(i);
    a.showLoaderOnConfirm && ys(),
      a.preConfirm
        ? (i.resetValidationMessage(),
          (i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preConfirm(e, a.validationMessage)))
            .then((r) => {
              Xe(tc()) || r === !1
                ? (i.hideLoading(), Il(i))
                : ib(i, typeof r > "u" ? e : r);
            })
            .catch((r) => S2(i, r)))
        : ib(i, e);
  };
function Zr() {
  const i = It.innerParams.get(this);
  if (!i) return;
  const e = It.domCache.get(this);
  ze(e.loader),
    nc() ? i.icon && ve(xs()) : u4(e),
    _n([e.popup, e.actions], Q.loading),
    e.popup.removeAttribute("aria-busy"),
    e.popup.removeAttribute("data-loading"),
    (e.confirmButton.disabled = !1),
    (e.denyButton.disabled = !1),
    (e.cancelButton.disabled = !1);
}
const u4 = (i) => {
  const e = i.loader.getAttribute("data-button-to-replace"),
    a = e ? i.popup.getElementsByClassName(e) : [];
  a.length ? ve(a[0], "inline-block") : j5() && ze(i.actions);
};
function C2() {
  const i = It.innerParams.get(this),
    e = It.domCache.get(this);
  return e ? ic(e.popup, i.input) : null;
}
function E2(i, e, a) {
  const l = It.domCache.get(i);
  e.forEach((r) => {
    l[r].disabled = a;
  });
}
function M2(i, e) {
  const a = jt();
  if (!(!a || !i))
    if (i.type === "radio") {
      const l = a.querySelectorAll(`[name="${Q.radio}"]`);
      for (let r = 0; r < l.length; r++) l[r].disabled = e;
    } else i.disabled = e;
}
function T2() {
  E2(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function A2() {
  E2(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function O2() {
  M2(this.getInput(), !1);
}
function z2() {
  M2(this.getInput(), !0);
}
function D2(i) {
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  an(e.validationMessage, i),
    (e.validationMessage.className = Q["validation-message"]),
    a.customClass &&
      a.customClass.validationMessage &&
      Ht(e.validationMessage, a.customClass.validationMessage),
    ve(e.validationMessage);
  const l = this.getInput();
  l &&
    (l.setAttribute("aria-invalid", "true"),
    l.setAttribute("aria-describedby", Q["validation-message"]),
    i2(l),
    Ht(l, Q.inputerror));
}
function k2() {
  const i = It.domCache.get(this);
  i.validationMessage && ze(i.validationMessage);
  const e = this.getInput();
  e &&
    (e.removeAttribute("aria-invalid"),
    e.removeAttribute("aria-describedby"),
    _n(e, Q.inputerror));
}
const Gi = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  f4 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  h4 = { allowEnterKey: void 0 },
  d4 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  R2 = (i) => Object.prototype.hasOwnProperty.call(Gi, i),
  B2 = (i) => f4.indexOf(i) !== -1,
  L2 = (i) => h4[i],
  g4 = (i) => {
    R2(i) || ke(`Unknown parameter "${i}"`);
  },
  p4 = (i) => {
    d4.includes(i) && ke(`The parameter "${i}" is incompatible with toasts`);
  },
  m4 = (i) => {
    const e = L2(i);
    e && Jb(i, e);
  },
  H2 = (i) => {
    i.backdrop === !1 &&
      i.allowOutsideClick &&
      ke(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      ),
      i.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "bootstrap-4",
          "bootstrap-4-light",
          "bootstrap-4-dark",
          "bootstrap-5",
          "bootstrap-5-light",
          "bootstrap-5-dark",
          "material-ui",
          "material-ui-light",
          "material-ui-dark",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(i.theme) &&
        ke(`Invalid theme "${i.theme}"`);
    for (const e in i) g4(e), i.toast && p4(e), m4(e);
  };
function j2(i) {
  const e = Re(),
    a = jt(),
    l = It.innerParams.get(this);
  if (!a || ci(a, l.hideClass.popup)) {
    ke(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const r = b4(i),
    c = Object.assign({}, l, r);
  H2(c),
    e && (e.dataset.swal2Theme = c.theme),
    d2(this, c),
    It.innerParams.set(this, c),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, i),
        writable: !1,
        enumerable: !0,
      },
    });
}
const b4 = (i) => {
  const e = {};
  return (
    Object.keys(i).forEach((a) => {
      if (B2(a)) {
        const l = i;
        e[a] = l[a];
      } else ke(`Invalid parameter to update: ${a}`);
    }),
    e
  );
};
function N2() {
  var i;
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  if (!a) {
    U2(this);
    return;
  }
  e.popup &&
    ht.swalCloseEventFinishedCallback &&
    (ht.swalCloseEventFinishedCallback(),
    delete ht.swalCloseEventFinishedCallback),
    typeof a.didDestroy == "function" && a.didDestroy(),
    (i = ht.eventEmitter) === null || i === void 0 || i.emit("didDestroy"),
    y4(this);
}
const y4 = (i) => {
    U2(i),
      delete i.params,
      delete ht.keydownHandler,
      delete ht.keydownTarget,
      delete ht.currentInstance;
  },
  U2 = (i) => {
    i.isAwaitingPromise
      ? (Hf(It, i), (i.isAwaitingPromise = !0))
      : (Hf(bs, i),
        Hf(It, i),
        delete i.isAwaitingPromise,
        delete i.disableButtons,
        delete i.enableButtons,
        delete i.getInput,
        delete i.disableInput,
        delete i.enableInput,
        delete i.hideLoading,
        delete i.disableLoading,
        delete i.showValidationMessage,
        delete i.resetValidationMessage,
        delete i.close,
        delete i.closePopup,
        delete i.closeModal,
        delete i.closeToast,
        delete i.rejectPromise,
        delete i.update,
        delete i._destroy);
  },
  Hf = (i, e) => {
    for (const a in i) i[a].delete(e);
  };
var v4 = Object.freeze({
  __proto__: null,
  _destroy: N2,
  close: Vi,
  closeModal: Vi,
  closePopup: Vi,
  closeToast: Vi,
  disableButtons: A2,
  disableInput: z2,
  disableLoading: Zr,
  enableButtons: T2,
  enableInput: O2,
  getInput: C2,
  handleAwaitingPromise: Il,
  hideLoading: Zr,
  rejectPromise: w2,
  resetValidationMessage: k2,
  showValidationMessage: D2,
  update: j2,
});
const w4 = (i, e, a) => {
    i.toast ? _4(i, e, a) : (S4(e), C4(e), E4(i, e, a));
  },
  _4 = (i, e, a) => {
    e.popup.onclick = () => {
      (i && (x4(i) || i.timer || i.input)) || a(Es.close);
    };
  },
  x4 = (i) =>
    !!(
      i.showConfirmButton ||
      i.showDenyButton ||
      i.showCancelButton ||
      i.showCloseButton
    );
let Kr = !1;
const S4 = (i) => {
    i.popup.onmousedown = () => {
      i.container.onmouseup = function (e) {
        (i.container.onmouseup = () => {}),
          e.target === i.container && (Kr = !0);
      };
    };
  },
  C4 = (i) => {
    i.container.onmousedown = (e) => {
      e.target === i.container && e.preventDefault(),
        (i.popup.onmouseup = function (a) {
          (i.popup.onmouseup = () => {}),
            (a.target === i.popup ||
              (a.target instanceof HTMLElement &&
                i.popup.contains(a.target))) &&
              (Kr = !0);
        });
    };
  },
  E4 = (i, e, a) => {
    e.container.onclick = (l) => {
      if (Kr) {
        Kr = !1;
        return;
      }
      l.target === e.container && Jr(i.allowOutsideClick) && a(Es.backdrop);
    };
  },
  M4 = (i) => typeof i == "object" && i.jquery,
  ab = (i) => i instanceof Element || M4(i),
  T4 = (i) => {
    const e = {};
    return (
      typeof i[0] == "object" && !ab(i[0])
        ? Object.assign(e, i[0])
        : ["title", "html", "icon"].forEach((a, l) => {
            const r = i[l];
            typeof r == "string" || ab(r)
              ? (e[a] = r)
              : r !== void 0 &&
                Ea(
                  `Unexpected type of ${a}! Expected "string" or "Element", got ${typeof r}`
                );
          }),
      e
    );
  };
function A4(...i) {
  return new this(...i);
}
function O4(i) {
  class e extends this {
    _main(l, r) {
      return super._main(l, Object.assign({}, i, r));
    }
  }
  return e;
}
const z4 = () => ht.timeout && ht.timeout.getTimerLeft(),
  F2 = () => {
    if (ht.timeout) return U5(), ht.timeout.stop();
  },
  q2 = () => {
    if (ht.timeout) {
      const i = ht.timeout.start();
      return Ch(i), i;
    }
  },
  D4 = () => {
    const i = ht.timeout;
    return i && (i.running ? F2() : q2());
  },
  k4 = (i) => {
    if (ht.timeout) {
      const e = ht.timeout.increase(i);
      return Ch(e, !0), e;
    }
  },
  R4 = () => !!(ht.timeout && ht.timeout.isRunning());
let sb = !1;
const Zf = {};
function B4(i = "data-swal-template") {
  (Zf[i] = this),
    sb || (document.body.addEventListener("click", L4), (sb = !0));
}
const L4 = (i) => {
  for (let e = i.target; e && e !== document; e = e.parentNode)
    for (const a in Zf) {
      const l = e.getAttribute && e.getAttribute(a);
      if (l) {
        Zf[a].fire({ template: l });
        return;
      }
    }
};
class H4 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(e) {
    return typeof this.events[e] > "u" && (this.events[e] = []), this.events[e];
  }
  on(e, a) {
    const l = this._getHandlersByEventName(e);
    l.includes(a) || l.push(a);
  }
  once(e, a) {
    const l = (...r) => {
      this.removeListener(e, l), a.apply(this, r);
    };
    this.on(e, l);
  }
  emit(e, ...a) {
    this._getHandlersByEventName(e).forEach((l) => {
      try {
        l.apply(this, a);
      } catch (r) {
        console.error(r);
      }
    });
  }
  removeListener(e, a) {
    const l = this._getHandlersByEventName(e),
      r = l.indexOf(a);
    r > -1 && l.splice(r, 1);
  }
  removeAllListeners(e) {
    this.events[e] !== void 0 && (this.events[e].length = 0);
  }
  reset() {
    this.events = {};
  }
}
ht.eventEmitter = new H4();
const j4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.on(i, e);
  },
  N4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.once(i, e);
  },
  U4 = (i, e) => {
    if (ht.eventEmitter) {
      if (!i) {
        ht.eventEmitter.reset();
        return;
      }
      e
        ? ht.eventEmitter.removeListener(i, e)
        : ht.eventEmitter.removeAllListeners(i);
    }
  };
var F4 = Object.freeze({
  __proto__: null,
  argsToParams: T4,
  bindClickHandler: B4,
  clickCancel: T3,
  clickConfirm: g2,
  clickDeny: M3,
  enableLoading: ys,
  fire: A4,
  getActions: Zl,
  getCancelButton: Ss,
  getCloseButton: wh,
  getConfirmButton: Un,
  getContainer: Re,
  getDenyButton: Ma,
  getFocusableElements: _h,
  getFooter: n2,
  getHtmlContainer: yh,
  getIcon: xs,
  getIconContent: k5,
  getImage: e2,
  getInputLabel: R5,
  getLoader: Cs,
  getPopup: jt,
  getProgressSteps: vh,
  getTimerLeft: z4,
  getTimerProgressBar: ec,
  getTitle: t2,
  getValidationMessage: tc,
  increaseTimer: k4,
  isDeprecatedParameter: L2,
  isLoading: L5,
  isTimerRunning: R4,
  isUpdatableParameter: B2,
  isValidParameter: R2,
  isVisible: E3,
  mixin: O4,
  off: U4,
  on: j4,
  once: N4,
  resumeTimer: q2,
  showLoading: ys,
  stopTimer: F2,
  toggleTimer: D4,
});
class q4 {
  constructor(e, a) {
    (this.callback = e),
      (this.remaining = a),
      (this.running = !1),
      this.start();
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(e) {
    const a = this.running;
    return (
      a && this.stop(), (this.remaining += e), a && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const Y2 = ["swal-title", "swal-html", "swal-footer"],
  Y4 = (i) => {
    const e =
      typeof i.template == "string"
        ? document.querySelector(i.template)
        : i.template;
    if (!e) return {};
    const a = e.content;
    return (
      I4(a), Object.assign(V4(a), G4(a), X4(a), Q4(a), Z4(a), K4(a), P4(a, Y2))
    );
  },
  V4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-param")).forEach((l) => {
        Sa(l, ["name", "value"]);
        const r = l.getAttribute("name"),
          c = l.getAttribute("value");
        !r ||
          !c ||
          (r in Gi && typeof Gi[r] == "boolean"
            ? (e[r] = c !== "false")
            : r in Gi && typeof Gi[r] == "object"
            ? (e[r] = JSON.parse(c))
            : (e[r] = c));
      }),
      e
    );
  },
  G4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-function-param")).forEach((l) => {
        const r = l.getAttribute("name"),
          c = l.getAttribute("value");
        !r || !c || (e[r] = new Function(`return ${c}`)());
      }),
      e
    );
  },
  X4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-button")).forEach((l) => {
        Sa(l, ["type", "color", "aria-label"]);
        const r = l.getAttribute("type");
        if (!(!r || !["confirm", "cancel", "deny"].includes(r))) {
          if (
            ((e[`${r}ButtonText`] = l.innerHTML),
            (e[`show${ph(r)}Button`] = !0),
            l.hasAttribute("color"))
          ) {
            const c = l.getAttribute("color");
            c !== null && (e[`${r}ButtonColor`] = c);
          }
          if (l.hasAttribute("aria-label")) {
            const c = l.getAttribute("aria-label");
            c !== null && (e[`${r}ButtonAriaLabel`] = c);
          }
        }
      }),
      e
    );
  },
  Q4 = (i) => {
    const e = {},
      a = i.querySelector("swal-image");
    return (
      a &&
        (Sa(a, ["src", "width", "height", "alt"]),
        a.hasAttribute("src") && (e.imageUrl = a.getAttribute("src") || void 0),
        a.hasAttribute("width") &&
          (e.imageWidth = a.getAttribute("width") || void 0),
        a.hasAttribute("height") &&
          (e.imageHeight = a.getAttribute("height") || void 0),
        a.hasAttribute("alt") &&
          (e.imageAlt = a.getAttribute("alt") || void 0)),
      e
    );
  },
  Z4 = (i) => {
    const e = {},
      a = i.querySelector("swal-icon");
    return (
      a &&
        (Sa(a, ["type", "color"]),
        a.hasAttribute("type") && (e.icon = a.getAttribute("type")),
        a.hasAttribute("color") && (e.iconColor = a.getAttribute("color")),
        (e.iconHtml = a.innerHTML)),
      e
    );
  },
  K4 = (i) => {
    const e = {},
      a = i.querySelector("swal-input");
    a &&
      (Sa(a, ["type", "label", "placeholder", "value"]),
      (e.input = a.getAttribute("type") || "text"),
      a.hasAttribute("label") && (e.inputLabel = a.getAttribute("label")),
      a.hasAttribute("placeholder") &&
        (e.inputPlaceholder = a.getAttribute("placeholder")),
      a.hasAttribute("value") && (e.inputValue = a.getAttribute("value")));
    const l = Array.from(i.querySelectorAll("swal-input-option"));
    return (
      l.length &&
        ((e.inputOptions = {}),
        l.forEach((r) => {
          Sa(r, ["value"]);
          const c = r.getAttribute("value");
          if (!c) return;
          const u = r.innerHTML;
          e.inputOptions[c] = u;
        })),
      e
    );
  },
  P4 = (i, e) => {
    const a = {};
    for (const l in e) {
      const r = e[l],
        c = i.querySelector(r);
      c && (Sa(c, []), (a[r.replace(/^swal-/, "")] = c.innerHTML.trim()));
    }
    return a;
  },
  I4 = (i) => {
    const e = Y2.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(i.children).forEach((a) => {
      const l = a.tagName.toLowerCase();
      e.includes(l) || ke(`Unrecognized element <${l}>`);
    });
  },
  Sa = (i, e) => {
    Array.from(i.attributes).forEach((a) => {
      e.indexOf(a.name) === -1 &&
        ke([
          `Unrecognized attribute "${a.name}" on <${i.tagName.toLowerCase()}>.`,
          `${
            e.length
              ? `Allowed attributes are: ${e.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  V2 = 10,
  W4 = (i) => {
    var e, a;
    const l = Re(),
      r = jt();
    if (!l || !r) return;
    typeof i.willOpen == "function" && i.willOpen(r),
      (e = ht.eventEmitter) === null || e === void 0 || e.emit("willOpen", r);
    const u = window.getComputedStyle(document.body).overflowY;
    if (
      (t6(l, r, i),
      setTimeout(() => {
        $4(l, r);
      }, V2),
      xh() &&
        (J4(l, i.scrollbarPadding !== void 0 ? i.scrollbarPadding : !1, u),
        L3()),
      !nc() &&
        !ht.previousActiveElement &&
        (ht.previousActiveElement = document.activeElement),
      typeof i.didOpen == "function")
    ) {
      const h = i.didOpen;
      setTimeout(() => h(r));
    }
    (a = ht.eventEmitter) === null || a === void 0 || a.emit("didOpen", r);
  },
  Pr = (i) => {
    const e = jt();
    if (!e || i.target !== e) return;
    const a = Re();
    a &&
      (e.removeEventListener("animationend", Pr),
      e.removeEventListener("transitionend", Pr),
      (a.style.overflowY = "auto"),
      _n(a, Q["no-transition"]));
  },
  $4 = (i, e) => {
    s2(e)
      ? ((i.style.overflowY = "hidden"),
        e.addEventListener("animationend", Pr),
        e.addEventListener("transitionend", Pr))
      : (i.style.overflowY = "auto");
  },
  J4 = (i, e, a) => {
    H3(),
      e && a !== "hidden" && V3(a),
      setTimeout(() => {
        i.scrollTop = 0;
      });
  },
  t6 = (i, e, a) => {
    var l;
    (l = a.showClass) !== null &&
      l !== void 0 &&
      l.backdrop &&
      Ht(i, a.showClass.backdrop),
      a.animation
        ? (e.style.setProperty("opacity", "0", "important"),
          ve(e, "grid"),
          setTimeout(() => {
            var r;
            (r = a.showClass) !== null &&
              r !== void 0 &&
              r.popup &&
              Ht(e, a.showClass.popup),
              e.style.removeProperty("opacity");
          }, V2))
        : ve(e, "grid"),
      Ht([document.documentElement, document.body], Q.shown),
      a.heightAuto &&
        a.backdrop &&
        !a.toast &&
        Ht([document.documentElement, document.body], Q["height-auto"]);
  };
var lb = {
  email: (i, e) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(i)
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid email address"),
  url: (i, e) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      i
    )
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid URL"),
};
function e6(i) {
  i.inputValidator ||
    (i.input === "email" && (i.inputValidator = lb.email),
    i.input === "url" && (i.inputValidator = lb.url));
}
function n6(i) {
  (!i.target ||
    (typeof i.target == "string" && !document.querySelector(i.target)) ||
    (typeof i.target != "string" && !i.target.appendChild)) &&
    (ke('Target parameter is not valid, defaulting to "body"'),
    (i.target = "body"));
}
function i6(i) {
  e6(i),
    i.showLoaderOnConfirm &&
      !i.preConfirm &&
      ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    n6(i),
    typeof i.title == "string" &&
      (i.title = i.title
        .split(
          `
`
        )
        .join("<br />")),
    Z5(i);
}
let jn;
var Ar = new WeakMap();
class fe {
  constructor(...e) {
    if (
      (C5(
        this,
        Ar,
        Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 })
      ),
      typeof window > "u")
    )
      return;
    jn = this;
    const a = Object.freeze(this.constructor.argsToParams(e));
    (this.params = a),
      (this.isAwaitingPromise = !1),
      E5(Ar, this, this._main(jn.params));
  }
  _main(e, a = {}) {
    if ((H2(Object.assign({}, a, e)), ht.currentInstance)) {
      const c = bs.swalPromiseResolve.get(ht.currentInstance),
        { isAwaitingPromise: u } = ht.currentInstance;
      ht.currentInstance._destroy(), u || c({ isDismissed: !0 }), xh() && b2();
    }
    ht.currentInstance = jn;
    const l = s6(e, a);
    i6(l),
      Object.freeze(l),
      ht.timeout && (ht.timeout.stop(), delete ht.timeout),
      clearTimeout(ht.restoreFocusTimeout);
    const r = l6(jn);
    return d2(jn, l), It.innerParams.set(jn, l), a6(jn, r, l);
  }
  then(e) {
    return I0(Ar, this).then(e);
  }
  finally(e) {
    return I0(Ar, this).finally(e);
  }
}
const a6 = (i, e, a) =>
    new Promise((l, r) => {
      const c = (u) => {
        i.close({ isDismissed: !0, dismiss: u, isConfirmed: !1, isDenied: !1 });
      };
      bs.swalPromiseResolve.set(i, l),
        bs.swalPromiseReject.set(i, r),
        (e.confirmButton.onclick = () => {
          l4(i);
        }),
        (e.denyButton.onclick = () => {
          o4(i);
        }),
        (e.cancelButton.onclick = () => {
          r4(i, c);
        }),
        (e.closeButton.onclick = () => {
          c(Es.close);
        }),
        w4(a, e, c),
        A3(ht, a, c),
        W3(i, a),
        W4(a),
        o6(ht, a, c),
        r6(e, a),
        setTimeout(() => {
          e.container.scrollTop = 0;
        });
    }),
  s6 = (i, e) => {
    const a = Y4(i),
      l = Object.assign({}, Gi, e, a, i);
    return (
      (l.showClass = Object.assign({}, Gi.showClass, l.showClass)),
      (l.hideClass = Object.assign({}, Gi.hideClass, l.hideClass)),
      l.animation === !1 &&
        ((l.showClass = { backdrop: "swal2-noanimation" }), (l.hideClass = {})),
      l
    );
  },
  l6 = (i) => {
    const e = {
      popup: jt(),
      container: Re(),
      actions: Zl(),
      confirmButton: Un(),
      denyButton: Ma(),
      cancelButton: Ss(),
      loader: Cs(),
      closeButton: wh(),
      validationMessage: tc(),
      progressSteps: vh(),
    };
    return It.domCache.set(i, e), e;
  },
  o6 = (i, e, a) => {
    const l = ec();
    ze(l),
      e.timer &&
        ((i.timeout = new q4(() => {
          a("timer"), delete i.timeout;
        }, e.timer)),
        e.timerProgressBar &&
          l &&
          (ve(l),
          en(l, e, "timerProgressBar"),
          setTimeout(() => {
            i.timeout && i.timeout.running && Ch(e.timer);
          })));
  },
  r6 = (i, e) => {
    if (!e.toast) {
      if (!Jr(e.allowEnterKey)) {
        Jb("allowEnterKey"), f6();
        return;
      }
      c6(i) || u6(i, e) || Qf(-1, 1);
    }
  },
  c6 = (i) => {
    const e = Array.from(i.popup.querySelectorAll("[autofocus]"));
    for (const a of e)
      if (a instanceof HTMLElement && Xe(a)) return a.focus(), !0;
    return !1;
  },
  u6 = (i, e) =>
    e.focusDeny && Xe(i.denyButton)
      ? (i.denyButton.focus(), !0)
      : e.focusCancel && Xe(i.cancelButton)
      ? (i.cancelButton.focus(), !0)
      : e.focusConfirm && Xe(i.confirmButton)
      ? (i.confirmButton.focus(), !0)
      : !1,
  f6 = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
fe.prototype.disableButtons = A2;
fe.prototype.enableButtons = T2;
fe.prototype.getInput = C2;
fe.prototype.disableInput = z2;
fe.prototype.enableInput = O2;
fe.prototype.hideLoading = Zr;
fe.prototype.disableLoading = Zr;
fe.prototype.showValidationMessage = D2;
fe.prototype.resetValidationMessage = k2;
fe.prototype.close = Vi;
fe.prototype.closePopup = Vi;
fe.prototype.closeModal = Vi;
fe.prototype.closeToast = Vi;
fe.prototype.rejectPromise = w2;
fe.prototype.update = j2;
fe.prototype._destroy = N2;
Object.assign(fe, F4);
Object.keys(v4).forEach((i) => {
  fe[i] = function (...e) {
    if (jn && jn[i]) return jn[i](...e);
  };
});
fe.DismissReason = Es;
fe.version = "11.26.17";
const Yl = fe;
Yl.default = Yl;
typeof document < "u" &&
  (function (i, e) {
    var a = i.createElement("style");
    if ((i.getElementsByTagName("head")[0].appendChild(a), a.styleSheet))
      a.styleSheet.disabled || (a.styleSheet.cssText = e);
    else
      try {
        a.innerHTML = e;
      } catch {
        a.innerText = e;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
  );
const h6 = () => {
    const {
        time: i,
        setTime: e,
        userFs: a,
        setUserFs: l,
        setGenerateECG: r,
        setApplyNoiseTrigger: c,
        config: u,
        setConfig: h,
        setFilteredECG: p,
        csvFilePath: d,
        prevPathRef: m,
        setCsvFilePath: b,
        generateECG: w,
        selectedLobe: x,
        setSelectedLobe: _,
        setApplypsdTrigger: M,
        setFilteredSamples: O,
      } = ut.useContext(Fn),
      [E, W] = ut.useState("IIR"),
      [K, J] = ut.useState("windowSync"),
      [H, tt] = ut.useState("lowpass"),
      [T, S] = ut.useState(0.5),
      [v, N] = ut.useState(40),
      [R, B] = ut.useState(5),
      [$, st] = ut.useState(100),
      [at, j] = ut.useState(!1),
      G = () => {
        if (!w) {
          Yl.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate EEG signal first!",
          });
          return;
        }
        M(!0);
      },
      et = () => {
        if (!w) {
          Yl.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate EEG signal first!",
          });
          return;
        }
        const k = {
          ...u,
          characteristic: E,
          filterType: H,
          windowMode: K,
          Att: Number($),
          preGain: at,
          order: Number(R),
          Fs: Number(a),
          Fc: Number(it()),
          F1: Number(T),
          F2: Number(v),
          Fa: Number(ct()),
          Fb: Number(A()),
        };
        h(k), p(!0);
      },
      it = () => {
        if (
          (E === "IIR" && H === "highpass") ||
          (E === "FIR" && K === "windowSync" && H === "highpass")
        )
          return Number(T);
        if (
          (E === "IIR" && H === "lowpass") ||
          (E === "FIR" && K === "windowSync" && H === "lowpass")
        )
          return Number(v);
        if (
          (E === "IIR" && H === "bandpass") ||
          (E === "IIR" && H === "bandstop")
        ) {
          const k = Number(T),
            V = Number(v);
          return (k + V) / 2;
        }
      },
      ct = () => {
        if (K === "KaiserBessel") {
          if (H === "lowpass") return 0;
          if (H === "highpass") return T;
          if (H === "bandpass") return T;
        }
      },
      A = () => {
        if (K === "KaiserBessel") {
          if (H === "lowpass") return v;
          if (H === "highpass") return Number(a) / 2;
          if (H === "bandpass") return v;
        }
      };
    return (
      ut.useEffect(() => {
        et();
      }, [v, T, E, H, K, $, at, R, a]),
      ut.useEffect(() => {
        m.current !== d && (c(!1), p(!1), M(!1), O([]), (m.current = d));
      }, [d, m, c, p, M, O]),
      q.jsx("div", {
        className: Bn.rightPanelContainer,
        children: q.jsxs("div", {
          className: Bn.right,
          children: [
            q.jsx("h2", { children: "EEG Signal & Filter Controls" }),
            q.jsxs("div", {
              className: Bn.box,
              children: [
                q.jsx("h3", { children: "Signal Setup" }),
                q.jsx("label", { children: "Select EEG Dataset" }),
                q.jsxs("select", {
                  value: d,
                  onChange: (k) => b(k.target.value),
                  children: [
                    q.jsx("option", {
                      value: "/vlabEEGnormal_raw.csv",
                      children: "EEG Dataset 1 (Normal)",
                    }),
                    q.jsx("option", {
                      value: "/vlabEEGeyeblink_raw.csv",
                      children: "EEG Dataset 2 (Eye Blink)",
                    }),
                    q.jsx("option", {
                      value: "/vlabEEGjawClinching_raw.csv",
                      children: "EEG Dataset 3 (Jaw Clinching)",
                    }),
                    q.jsx("option", {
                      value: "/vlabEEGmuscle_raw.csv",
                      children: "EEG Dataset 4 (Muscle)",
                    }),
                  ],
                }),
                q.jsx("label", { children: "Select Lobe" }),
                q.jsx("select", {
                  value: x,
                  onChange: (k) => _(k.target.value),
                  children: Object.keys(kr).map((k) =>
                    q.jsx("option", { value: k, children: k }, k)
                  ),
                }),
                x &&
                  q.jsxs("p", {
                    className: Bn.channelInfo,
                    children: [
                      "ChannelsName",
                      " ",
                      ": ",
                      kr[x].map((k) => k).join(", "),
                    ],
                  }),
                q.jsx("label", { children: "Duration (seconds) " }),
                q.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "70",
                  value: i,
                  onChange: (k) => e(Number(k.target.value)),
                }),
                q.jsxs("p", {
                  className: Bn.rangeValue,
                  children: [
                    "Value: ",
                    q.jsxs("span", { id: "demo", children: [i, " seconds"] }),
                  ],
                }),
                q.jsx("label", { children: "Sampling Rate (Hz) " }),
                q.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "1000",
                  value: a,
                  onChange: (k) => l(Number(k.target.value)),
                }),
                q.jsxs("p", {
                  className: Bn.rangeValue,
                  children: [
                    "Value: ",
                    q.jsxs("span", { id: "demo", children: [a, " Hz"] }),
                  ],
                }),
                q.jsx("button", {
                  onClick: () => r(!0),
                  children: "Generate EEG Signal",
                }),
              ],
            }),
            q.jsxs("div", {
              className: Bn.box,
              children: [
                q.jsx("h3", { children: "Filter Design" }),
                q.jsx("label", { children: "Filter Algorithm" }),
                q.jsxs("select", {
                  value: E,
                  onChange: (k) => W(k.target.value),
                  children: [
                    q.jsx("option", {
                      value: "IIR",
                      children: "Butterworth (IIR)",
                    }),
                    q.jsx("option", { value: "FIR", children: "FIR Window" }),
                  ],
                }),
                E === "FIR" &&
                  q.jsxs(q.Fragment, {
                    children: [
                      q.jsx("label", { children: "Window Mode" }),
                      q.jsxs("select", {
                        value: K,
                        onChange: (k) => J(k.target.value),
                        children: [
                          q.jsx("option", {
                            value: "windowSync",
                            children: "window-sync",
                          }),
                          q.jsx("option", {
                            value: "KaiserBessel",
                            children: "Kaiser–Bessel",
                          }),
                        ],
                      }),
                    ],
                  }),
                q.jsxs(q.Fragment, {
                  children: [
                    q.jsx("label", { children: "Filter Type" }),
                    q.jsxs("select", {
                      value: H,
                      onChange: (k) => tt(k.target.value),
                      children: [
                        q.jsx("option", {
                          value: "lowpass",
                          children: "Lowpass",
                        }),
                        q.jsx("option", {
                          value: "highpass",
                          children: "Highpass",
                        }),
                        q.jsx("option", {
                          value: "bandpass",
                          children: "Bandpass",
                        }),
                        K === "windowSync" &&
                          q.jsx("option", {
                            value: "bandstop",
                            children: "Bandstop",
                          }),
                      ],
                    }),
                    " ",
                  ],
                }),
                (H === "highpass" || H === "bandpass" || H === "bandstop") &&
                  q.jsxs(q.Fragment, {
                    children: [
                      q.jsxs("div", {
                        className: Bn.syncInputContainer,
                        children: [
                          q.jsx("label", { children: "Low Cutoff (Hz) : " }),
                          q.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: T,
                            onChange: (k) => S(k.target.value),
                          }),
                        ],
                      }),
                      q.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: T,
                        onChange: (k) => S(Number(k.target.value)),
                      }),
                    ],
                  }),
                (H === "lowpass" || H === "bandpass" || H === "bandstop") &&
                  q.jsxs(q.Fragment, {
                    children: [
                      q.jsxs("div", {
                        className: Bn.syncInputContainer,
                        children: [
                          q.jsx("label", { children: "High Cutoff (Hz) : " }),
                          q.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: v,
                            onChange: (k) => N(k.target.value),
                          }),
                        ],
                      }),
                      q.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: v,
                        onChange: (k) => N(Number(k.target.value)),
                      }),
                    ],
                  }),
                q.jsxs("label", {
                  children: [
                    "Filter Order ",
                    K === "KaiserBessel" ? "(odd)" : "",
                    " ",
                  ],
                }),
                q.jsx("input", {
                  type: "number",
                  min: E === "IIR" ? 2 : 21,
                  max: E === "IIR" ? 12 : 201,
                  step: K === "KaiserBessel" ? 2 : 1,
                  value: R,
                  onChange: (k) => {
                    let V = Number(k.target.value);
                    E === "FIR" &&
                      K === "KaiserBessel" &&
                      V % 2 === 0 &&
                      (V = V + 1),
                      B(V);
                  },
                }),
                E === "FIR" &&
                  K === "KaiserBessel" &&
                  q.jsxs(q.Fragment, {
                    children: [
                      q.jsx("label", { children: "Attenuation (dB) " }),
                      q.jsx("input", {
                        type: "number",
                        value: $,
                        onChange: (k) => st(k.target.value),
                      }),
                    ],
                  }),
                E === "IIR" &&
                  q.jsxs(q.Fragment, {
                    children: [
                      q.jsx("label", { children: "preGain" }),
                      q.jsxs("select", {
                        value: at,
                        onChange: (k) => j(k.target.value === "true"),
                        children: [
                          q.jsx("option", { value: !1, children: "false" }),
                          q.jsx("option", { value: !0, children: "true" }),
                        ],
                      }),
                    ],
                  }),
                q.jsxs("div", {
                  className: Bn.psdContainer,
                  children: [
                    q.jsx("button", { onClick: et, children: "Apply Filter" }),
                    q.jsx("button", { onClick: G, children: "Compute PSD" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  d6 = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ut.useContext(Fn),
      l = ut.useRef(null);
    return (
      ut.useEffect(() => {
        const r = (c) => {
          l.current &&
            !l.current.contains(c.target) &&
            a.current &&
            !a.current.contains(c.target) &&
            e(!1);
        };
        return (
          i && document.addEventListener("mousedown", r),
          () => {
            document.removeEventListener("mousedown", r);
          }
        );
      }, [i, e, a]),
      q.jsx("div", {
        className: Hi.grandContainer,
        children: q.jsxs("div", {
          className: Hi.parentContainer,
          children: [
            q.jsx("div", {
              className: Hi.topContainer,
              children: q.jsx(Dv, {}),
            }),
            q.jsxs("div", {
              className: Hi.middleContainer,
              children: [
                i &&
                  q.jsx("div", {
                    ref: l,
                    className: Hi.instructionContainer,
                    children: q.jsx(Lv, {}),
                  }),
                q.jsx(p5, { className: Hi.leftPanelContainer }),
                q.jsx(h6, { className: Hi.rightPanelContainer }),
              ],
            }),
            q.jsx("div", {
              className: Hi.footerContainer,
              children: "©Copyright 2025 Virtual Labs, IIT Roorkee",
            }),
          ],
        }),
      })
    );
  };
function g6() {
  return q.jsx(q.Fragment, { children: q.jsx(d6, {}) });
}
pv.createRoot(document.getElementById("root")).render(
  q.jsx(ut.StrictMode, { children: q.jsx(zv, { children: q.jsx(g6, {}) }) })
);
