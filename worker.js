"use strict";
var server_browser = {
  exports: {},
};
var reactDomServer_browser_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative()
  ? Object.assign
  : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
var react = {
  exports: {},
};
var react_production_min = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = objectAssign,
  n$2 = 60103,
  p$3 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$3 = 60109,
  r$2 = 60110,
  t$1 = 60112;
react_production_min.Suspense = 60113;
var u$1 = 60115,
  v$1 = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w$1 = Symbol.for;
  n$2 = w$1("react.element");
  p$3 = w$1("react.portal");
  react_production_min.Fragment = w$1("react.fragment");
  react_production_min.StrictMode = w$1("react.strict_mode");
  react_production_min.Profiler = w$1("react.profiler");
  q$3 = w$1("react.provider");
  r$2 = w$1("react.context");
  t$1 = w$1("react.forward_ref");
  react_production_min.Suspense = w$1("react.suspense");
  u$1 = w$1("react.memo");
  v$1 = w$1("react.lazy");
}
var x$1 = typeof Symbol === "function" && Symbol.iterator;
function y$1(a) {
  if (a === null || typeof a !== "object") return null;
  a = (x$1 && a[x$1]) || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z$2(a) {
  for (
    var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1;
    c2 < arguments.length;
    c2++
  )
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return (
    "Minified React error #" +
    a +
    "; visit " +
    b2 +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var A$1 = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  B$1 = {};
function C(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function (a, b2) {
  if (typeof a !== "object" && typeof a !== "function" && a != null) throw Error(z$2(85));
  this.updater.enqueueSetState(this, a, b2, "setState");
};
C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {}
D$1.prototype = C.prototype;
function E$1(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
var F$1 = (E$1.prototype = new D$1());
F$1.constructor = E$1;
l$2(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G = {
    current: null,
  },
  H = Object.prototype.hasOwnProperty,
  I$1 = {
    key: true,
    ref: true,
    __self: true,
    __source: true,
  };
function J$1(a, b2, c2) {
  var e2,
    d2 = {},
    k2 = null,
    h2 = null;
  if (b2 != null)
    for (e2 in (b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2))
      H.call(b2, e2) && !I$1.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (g2 === 1) d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a && a.defaultProps)
    for (e2 in ((g2 = a.defaultProps), g2)) d2[e2] === void 0 && (d2[e2] = g2[e2]);
  return {
    $$typeof: n$2,
    type: a,
    key: k2,
    ref: h2,
    props: d2,
    _owner: G.current,
  };
}
function K$1(a, b2) {
  return {
    $$typeof: n$2,
    type: a.type,
    key: b2,
    ref: a.ref,
    props: a.props,
    _owner: a._owner,
  };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$2;
}
function escape(a) {
  var b2 = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    a.replace(/[=:]/g, function (a2) {
      return b2[a2];
    })
  );
}
var M$1 = /\/+/g;
function N$1(a, b2) {
  return typeof a === "object" && a !== null && a.key != null
    ? escape("" + a.key)
    : b2.toString(36);
}
function O$1(a, b2, c2, e2, d2) {
  var k2 = typeof a;
  if (k2 === "undefined" || k2 === "boolean") a = null;
  var h2 = false;
  if (a === null) h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$2:
          case p$3:
            h2 = true;
        }
    }
  if (h2)
    return (
      (h2 = a),
      (d2 = d2(h2)),
      (a = e2 === "" ? "." + N$1(h2, 0) : e2),
      Array.isArray(d2)
        ? ((c2 = ""),
          a != null && (c2 = a.replace(M$1, "$&/") + "/"),
          O$1(d2, b2, c2, "", function (a2) {
            return a2;
          }))
        : d2 != null &&
          (L(d2) &&
            (d2 = K$1(
              d2,
              c2 +
                (!d2.key || (h2 && h2.key === d2.key)
                  ? ""
                  : ("" + d2.key).replace(M$1, "$&/") + "/") +
                a
            )),
          b2.push(d2)),
      1
    );
  h2 = 0;
  e2 = e2 === "" ? "." : e2 + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = e2 + N$1(k2, g2);
      h2 += O$1(k2, b2, c2, f2, d2);
    }
  else if (((f2 = y$1(a)), typeof f2 === "function"))
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      (k2 = k2.value), (f2 = e2 + N$1(k2, g2++)), (h2 += O$1(k2, b2, c2, f2, d2));
  else if (k2 === "object")
    throw (
      ((b2 = "" + a),
      Error(
        z$2(
          31,
          b2 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2
        )
      ))
    );
  return h2;
}
function P$1(a, b2, c2) {
  if (a == null) return a;
  var e2 = [],
    d2 = 0;
  O$1(a, e2, "", "", function (a2) {
    return b2.call(c2, a2, d2++);
  });
  return e2;
}
function Q$1(a) {
  if (a._status === -1) {
    var b2 = a._result;
    b2 = b2();
    a._status = 0;
    a._result = b2;
    b2.then(
      function (b3) {
        a._status === 0 && ((b3 = b3.default), (a._status = 1), (a._result = b3));
      },
      function (b3) {
        a._status === 0 && ((a._status = 2), (a._result = b3));
      }
    );
  }
  if (a._status === 1) return a._result;
  throw a._result;
}
var R$1 = {
  current: null,
};
function S$1() {
  var a = R$1.current;
  if (a === null) throw Error(z$2(321));
  return a;
}
var T$1 = {
  ReactCurrentDispatcher: R$1,
  ReactCurrentBatchConfig: {
    transition: 0,
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: false,
  },
  assign: l$2,
};
react_production_min.Children = {
  map: P$1,
  forEach: function (a, b2, c2) {
    P$1(
      a,
      function () {
        b2.apply(this, arguments);
      },
      c2
    );
  },
  count: function (a) {
    var b2 = 0;
    P$1(a, function () {
      b2++;
    });
    return b2;
  },
  toArray: function (a) {
    return (
      P$1(a, function (a2) {
        return a2;
      }) || []
    );
  },
  only: function (a) {
    if (!L(a)) throw Error(z$2(143));
    return a;
  },
};
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function (a, b2, c2) {
  if (a === null || a === void 0) throw Error(z$2(267, a));
  var e2 = l$2({}, a.props),
    d2 = a.key,
    k2 = a.ref,
    h2 = a._owner;
  if (b2 != null) {
    b2.ref !== void 0 && ((k2 = b2.ref), (h2 = G.current));
    b2.key !== void 0 && (d2 = "" + b2.key);
    if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
    for (f2 in b2)
      H.call(b2, f2) &&
        !I$1.hasOwnProperty(f2) &&
        (e2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1) e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$2,
    type: a.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2,
  };
};
react_production_min.createContext = function (a, b2) {
  b2 === void 0 && (b2 = null);
  a = {
    $$typeof: r$2,
    _calculateChangedBits: b2,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
  };
  a.Provider = {
    $$typeof: q$3,
    _context: a,
  };
  return (a.Consumer = a);
};
react_production_min.createElement = J$1;
react_production_min.createFactory = function (a) {
  var b2 = J$1.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function () {
  return {
    current: null,
  };
};
react_production_min.forwardRef = function (a) {
  return {
    $$typeof: t$1,
    render: a,
  };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function (a) {
  return {
    $$typeof: v$1,
    _payload: {
      _status: -1,
      _result: a,
    },
    _init: Q$1,
  };
};
react_production_min.memo = function (a, b2) {
  return {
    $$typeof: u$1,
    type: a,
    compare: b2 === void 0 ? null : b2,
  };
};
react_production_min.useCallback = function (a, b2) {
  return S$1().useCallback(a, b2);
};
react_production_min.useContext = function (a, b2) {
  return S$1().useContext(a, b2);
};
react_production_min.useDebugValue = function () {};
react_production_min.useEffect = function (a, b2) {
  return S$1().useEffect(a, b2);
};
react_production_min.useImperativeHandle = function (a, b2, c2) {
  return S$1().useImperativeHandle(a, b2, c2);
};
react_production_min.useLayoutEffect = function (a, b2) {
  return S$1().useLayoutEffect(a, b2);
};
react_production_min.useMemo = function (a, b2) {
  return S$1().useMemo(a, b2);
};
react_production_min.useReducer = function (a, b2, c2) {
  return S$1().useReducer(a, b2, c2);
};
react_production_min.useRef = function (a) {
  return S$1().useRef(a);
};
react_production_min.useState = function (a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = objectAssign,
  m$2 = react.exports;
function p$2(a) {
  for (
    var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1;
    c2 < arguments.length;
    c2++
  )
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return (
    "Minified React error #" +
    a +
    "; visit " +
    b2 +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var q$2 = 60106,
  r$1 = 60107,
  u = 60108,
  z$1 = 60114,
  B = 60109,
  aa = 60110,
  ba = 60112,
  D = 60113,
  ca = 60120,
  da = 60115,
  ea = 60116,
  fa = 60121,
  ha = 60117,
  ia = 60119,
  ja = 60129,
  ka = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  q$2 = E("react.portal");
  r$1 = E("react.fragment");
  u = E("react.strict_mode");
  z$1 = E("react.profiler");
  B = E("react.provider");
  aa = E("react.context");
  ba = E("react.forward_ref");
  D = E("react.suspense");
  ca = E("react.suspense_list");
  da = E("react.memo");
  ea = E("react.lazy");
  fa = E("react.block");
  ha = E("react.fundamental");
  ia = E("react.scope");
  ja = E("react.debug_trace_mode");
  ka = E("react.legacy_hidden");
}
function F(a) {
  if (a == null) return null;
  if (typeof a === "function") return a.displayName || a.name || null;
  if (typeof a === "string") return a;
  switch (a) {
    case r$1:
      return "Fragment";
    case q$2:
      return "Portal";
    case z$1:
      return "Profiler";
    case u:
      return "StrictMode";
    case D:
      return "Suspense";
    case ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case aa:
        return (a.displayName || "Context") + ".Consumer";
      case B:
        return (a._context.displayName || "Context") + ".Provider";
      case ba:
        var b2 = a.render;
        b2 = b2.displayName || b2.name || "";
        return a.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case da:
        return F(a.type);
      case fa:
        return F(a._render);
      case ea:
        b2 = a._payload;
        a = a._init;
        try {
          return F(a(b2));
        } catch (c2) {}
    }
  return null;
}
var la = m$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ma = {};
function I(a, b2) {
  for (var c2 = a._threadCount | 0; c2 <= b2; c2++)
    (a[c2] = a._currentValue2), (a._threadCount = c2 + 1);
}
function na(a, b2, c2, d2) {
  if (d2 && ((d2 = a.contextType), typeof d2 === "object" && d2 !== null)) return I(d2, c2), d2[c2];
  if ((a = a.contextTypes)) {
    c2 = {};
    for (var f2 in a) c2[f2] = b2[f2];
    b2 = c2;
  } else b2 = ma;
  return b2;
}
for (var J = new Uint16Array(16), K = 0; 15 > K; K++) J[K] = K + 1;
J[15] = 0;
var oa =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pa = Object.prototype.hasOwnProperty,
  qa = {},
  ra = {};
function sa(a) {
  if (pa.call(ra, a)) return true;
  if (pa.call(qa, a)) return false;
  if (oa.test(a)) return (ra[a] = true);
  qa[a] = true;
  return false;
}
function ta(a, b2, c2, d2) {
  if (c2 !== null && c2.type === 0) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (c2 !== null) return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function ua(a, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ta(a, b2, c2, d2)) return true;
  if (d2) return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function M(a, b2, c2, d2, f2, h2, t2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = f2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = h2;
  this.removeEmptyString = t2;
}
var N = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (a) {
    N[a] = new M(a, 0, false, a, null, false, false);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (a) {
  var b2 = a[0];
  N[b2] = new M(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  N[a] = new M(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  N[a] = new M(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (a) {
    N[a] = new M(a, 3, false, a.toLowerCase(), null, false, false);
  });
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  N[a] = new M(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function (a) {
  N[a] = new M(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  N[a] = new M(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function (a) {
  N[a] = new M(a, 5, false, a.toLowerCase(), null, false, false);
});
var va = /[\-:]([a-z])/g;
function wa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (a) {
    var b2 = a.replace(va, wa);
    N[b2] = new M(b2, 1, false, a, null, false, false);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (a) {
    var b2 = a.replace(va, wa);
    N[b2] = new M(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b2 = a.replace(va, wa);
  N[b2] = new M(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  N[a] = new M(a, 1, false, a.toLowerCase(), null, false, false);
});
N.xlinkHref = new M(
  "xlinkHref",
  1,
  false,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  true,
  false
);
["src", "href", "action", "formAction"].forEach(function (a) {
  N[a] = new M(a, 1, false, a.toLowerCase(), null, true, true);
});
var xa = /["'&<>]/;
function O(a) {
  if (typeof a === "boolean" || typeof a === "number") return "" + a;
  a = "" + a;
  var b2 = xa.exec(a);
  if (b2) {
    var c2 = "",
      d2,
      f2 = 0;
    for (d2 = b2.index; d2 < a.length; d2++) {
      switch (a.charCodeAt(d2)) {
        case 34:
          b2 = "&quot;";
          break;
        case 38:
          b2 = "&amp;";
          break;
        case 39:
          b2 = "&#x27;";
          break;
        case 60:
          b2 = "&lt;";
          break;
        case 62:
          b2 = "&gt;";
          break;
        default:
          continue;
      }
      f2 !== d2 && (c2 += a.substring(f2, d2));
      f2 = d2 + 1;
      c2 += b2;
    }
    a = f2 !== d2 ? c2 + a.substring(f2, d2) : c2;
  }
  return a;
}
function ya(a, b2) {
  var c2 = N.hasOwnProperty(a) ? N[a] : null;
  var d2;
  if ((d2 = a !== "style"))
    d2 =
      c2 !== null
        ? c2.type === 0
        : !(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")
        ? false
        : true;
  if (d2 || ua(a, b2, c2, false)) return "";
  if (c2 !== null) {
    a = c2.attributeName;
    d2 = c2.type;
    if (d2 === 3 || (d2 === 4 && b2 === true)) return a + '=""';
    c2.sanitizeURL && (b2 = "" + b2);
    return a + '="' + (O(b2) + '"');
  }
  return sa(a) ? a + '="' + (O(b2) + '"') : "";
}
function za(a, b2) {
  return (a === b2 && (a !== 0 || 1 / a === 1 / b2)) || (a !== a && b2 !== b2);
}
var Aa = typeof Object.is === "function" ? Object.is : za,
  P = null,
  Q = null,
  R = null,
  S = false,
  T = false,
  U = null,
  V = 0;
function W() {
  if (P === null) throw Error(p$2(321));
  return P;
}
function Ba() {
  if (0 < V) throw Error(p$2(312));
  return {
    memoizedState: null,
    queue: null,
    next: null,
  };
}
function Ca() {
  R === null
    ? Q === null
      ? ((S = false), (Q = R = Ba()))
      : ((S = true), (R = Q))
    : R.next === null
    ? ((S = false), (R = R.next = Ba()))
    : ((S = true), (R = R.next));
  return R;
}
function Da(a, b2, c2, d2) {
  for (; T; ) (T = false), (V += 1), (R = null), (c2 = a(b2, d2));
  Ea();
  return c2;
}
function Ea() {
  P = null;
  T = false;
  Q = null;
  V = 0;
  R = U = null;
}
function Fa(a, b2) {
  return typeof b2 === "function" ? b2(a) : b2;
}
function Ga(a, b2, c2) {
  P = W();
  R = Ca();
  if (S) {
    var d2 = R.queue;
    b2 = d2.dispatch;
    if (U !== null && ((c2 = U.get(d2)), c2 !== void 0)) {
      U.delete(d2);
      d2 = R.memoizedState;
      do (d2 = a(d2, c2.action)), (c2 = c2.next);
      while (c2 !== null);
      R.memoizedState = d2;
      return [d2, b2];
    }
    return [R.memoizedState, b2];
  }
  a = a === Fa ? (typeof b2 === "function" ? b2() : b2) : c2 !== void 0 ? c2(b2) : b2;
  R.memoizedState = a;
  a = R.queue = {
    last: null,
    dispatch: null,
  };
  a = a.dispatch = Ha.bind(null, P, a);
  return [R.memoizedState, a];
}
function Ia(a, b2) {
  P = W();
  R = Ca();
  b2 = b2 === void 0 ? null : b2;
  if (R !== null) {
    var c2 = R.memoizedState;
    if (c2 !== null && b2 !== null) {
      var d2 = c2[1];
      a: if (d2 === null) d2 = false;
      else {
        for (var f2 = 0; f2 < d2.length && f2 < b2.length; f2++)
          if (!Aa(b2[f2], d2[f2])) {
            d2 = false;
            break a;
          }
        d2 = true;
      }
      if (d2) return c2[0];
    }
  }
  a = a();
  R.memoizedState = [a, b2];
  return a;
}
function Ha(a, b2, c2) {
  if (!(25 > V)) throw Error(p$2(301));
  if (a === P)
    if (
      ((T = true),
      (a = {
        action: c2,
        next: null,
      }),
      U === null && (U = new Map()),
      (c2 = U.get(b2)),
      c2 === void 0)
    )
      U.set(b2, a);
    else {
      for (b2 = c2; b2.next !== null; ) b2 = b2.next;
      b2.next = a;
    }
}
function Ja() {}
var X = null,
  Ka = {
    readContext: function (a) {
      var b2 = X.threadID;
      I(a, b2);
      return a[b2];
    },
    useContext: function (a) {
      W();
      var b2 = X.threadID;
      I(a, b2);
      return a[b2];
    },
    useMemo: Ia,
    useReducer: Ga,
    useRef: function (a) {
      P = W();
      R = Ca();
      var b2 = R.memoizedState;
      return b2 === null
        ? ((a = {
            current: a,
          }),
          (R.memoizedState = a))
        : b2;
    },
    useState: function (a) {
      return Ga(Fa, a);
    },
    useLayoutEffect: function () {},
    useCallback: function (a, b2) {
      return Ia(function () {
        return a;
      }, b2);
    },
    useImperativeHandle: Ja,
    useEffect: Ja,
    useDebugValue: Ja,
    useDeferredValue: function (a) {
      W();
      return a;
    },
    useTransition: function () {
      W();
      return [
        function (a) {
          a();
        },
        false,
      ];
    },
    useOpaqueIdentifier: function () {
      return (X.identifierPrefix || "") + "R:" + (X.uniqueID++).toString(36);
    },
    useMutableSource: function (a, b2) {
      W();
      return b2(a._source);
    },
  },
  La = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
  };
function Ma(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
var Na = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
  },
  Oa = l$1(
    {
      menuitem: true,
    },
    Na
  ),
  Y = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true,
  },
  Pa = ["Webkit", "ms", "Moz", "O"];
Object.keys(Y).forEach(function (a) {
  Pa.forEach(function (b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    Y[b2] = Y[a];
  });
});
var Qa = /([A-Z])/g,
  Ra = /^ms-/,
  Z = m$2.Children.toArray,
  Sa = la.ReactCurrentDispatcher,
  Ta = {
    listing: true,
    pre: true,
    textarea: true,
  },
  Ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  Va = {},
  Wa = {};
function Xa(a) {
  if (a === void 0 || a === null) return a;
  var b2 = "";
  m$2.Children.forEach(a, function (a2) {
    a2 != null && (b2 += a2);
  });
  return b2;
}
var Ya = Object.prototype.hasOwnProperty,
  Za = {
    children: null,
    dangerouslySetInnerHTML: null,
    suppressContentEditableWarning: null,
    suppressHydrationWarning: null,
  };
function $a(a, b2) {
  if (a === void 0) throw Error(p$2(152, F(b2) || "Component"));
}
function ab(a, b2, c2) {
  function d2(d3, h3) {
    var e2 = h3.prototype && h3.prototype.isReactComponent,
      f3 = na(h3, b2, c2, e2),
      t2 = [],
      g2 = false,
      n2 = {
        isMounted: function () {
          return false;
        },
        enqueueForceUpdate: function () {
          if (t2 === null) return null;
        },
        enqueueReplaceState: function (a2, c3) {
          g2 = true;
          t2 = [c3];
        },
        enqueueSetState: function (a2, c3) {
          if (t2 === null) return null;
          t2.push(c3);
        },
      };
    if (e2) {
      if (((e2 = new h3(d3.props, f3, n2)), typeof h3.getDerivedStateFromProps === "function")) {
        var k2 = h3.getDerivedStateFromProps.call(null, d3.props, e2.state);
        k2 != null && (e2.state = l$1({}, e2.state, k2));
      }
    } else if (
      ((P = {}),
      (e2 = h3(d3.props, f3, n2)),
      (e2 = Da(h3, d3.props, e2, f3)),
      e2 == null || e2.render == null)
    ) {
      a = e2;
      $a(a, h3);
      return;
    }
    e2.props = d3.props;
    e2.context = f3;
    e2.updater = n2;
    n2 = e2.state;
    n2 === void 0 && (e2.state = n2 = null);
    if (
      typeof e2.UNSAFE_componentWillMount === "function" ||
      typeof e2.componentWillMount === "function"
    )
      if (
        (typeof e2.componentWillMount === "function" &&
          typeof h3.getDerivedStateFromProps !== "function" &&
          e2.componentWillMount(),
        typeof e2.UNSAFE_componentWillMount === "function" &&
          typeof h3.getDerivedStateFromProps !== "function" &&
          e2.UNSAFE_componentWillMount(),
        t2.length)
      ) {
        n2 = t2;
        var v2 = g2;
        t2 = null;
        g2 = false;
        if (v2 && n2.length === 1) e2.state = n2[0];
        else {
          k2 = v2 ? n2[0] : e2.state;
          var H2 = true;
          for (v2 = v2 ? 1 : 0; v2 < n2.length; v2++) {
            var x2 = n2[v2];
            x2 = typeof x2 === "function" ? x2.call(e2, k2, d3.props, f3) : x2;
            x2 != null && (H2 ? ((H2 = false), (k2 = l$1({}, k2, x2))) : l$1(k2, x2));
          }
          e2.state = k2;
        }
      } else t2 = null;
    a = e2.render();
    $a(a, h3);
    if (
      typeof e2.getChildContext === "function" &&
      ((d3 = h3.childContextTypes), typeof d3 === "object")
    ) {
      var y2 = e2.getChildContext();
      for (var A2 in y2) if (!(A2 in d3)) throw Error(p$2(108, F(h3) || "Unknown", A2));
    }
    y2 && (b2 = l$1({}, b2, y2));
  }
  for (; m$2.isValidElement(a); ) {
    var f2 = a,
      h2 = f2.type;
    if (typeof h2 !== "function") break;
    d2(f2, h2);
  }
  return {
    child: a,
    context: b2,
  };
}
var bb = (function () {
  function a(a2, b3, f2) {
    m$2.isValidElement(a2)
      ? a2.type !== r$1
        ? (a2 = [a2])
        : ((a2 = a2.props.children), (a2 = m$2.isValidElement(a2) ? [a2] : Z(a2)))
      : (a2 = Z(a2));
    a2 = {
      type: null,
      domNamespace: La.html,
      children: a2,
      childIndex: 0,
      context: ma,
      footer: "",
    };
    var c2 = J[0];
    if (c2 === 0) {
      var d2 = J;
      c2 = d2.length;
      var g2 = 2 * c2;
      if (!(65536 >= g2)) throw Error(p$2(304));
      var e2 = new Uint16Array(g2);
      e2.set(d2);
      J = e2;
      J[0] = c2 + 1;
      for (d2 = c2; d2 < g2 - 1; d2++) J[d2] = d2 + 1;
      J[g2 - 1] = 0;
    } else J[0] = J[c2];
    this.threadID = c2;
    this.stack = [a2];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = b3;
    this.suspenseDepth = 0;
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    this.uniqueID = 0;
    this.identifierPrefix = (f2 && f2.identifierPrefix) || "";
  }
  var b2 = a.prototype;
  b2.destroy = function () {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      var a2 = this.threadID;
      J[a2] = J[0];
      J[0] = a2;
    }
  };
  b2.pushProvider = function (a2) {
    var b3 = ++this.contextIndex,
      c2 = a2.type._context,
      h2 = this.threadID;
    I(c2, h2);
    var t2 = c2[h2];
    this.contextStack[b3] = c2;
    this.contextValueStack[b3] = t2;
    c2[h2] = a2.props.value;
  };
  b2.popProvider = function () {
    var a2 = this.contextIndex,
      b3 = this.contextStack[a2],
      f2 = this.contextValueStack[a2];
    this.contextStack[a2] = null;
    this.contextValueStack[a2] = null;
    this.contextIndex--;
    b3[this.threadID] = f2;
  };
  b2.clearProviders = function () {
    for (var a2 = this.contextIndex; 0 <= a2; a2--)
      this.contextStack[a2][this.threadID] = this.contextValueStack[a2];
  };
  b2.read = function (a2) {
    if (this.exhausted) return null;
    var b3 = X;
    X = this;
    var c2 = Sa.current;
    Sa.current = Ka;
    try {
      for (var h2 = [""], t2 = false; h2[0].length < a2; ) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          var g2 = this.threadID;
          J[g2] = J[0];
          J[0] = g2;
          break;
        }
        var e2 = this.stack[this.stack.length - 1];
        if (t2 || e2.childIndex >= e2.children.length) {
          var L2 = e2.footer;
          L2 !== "" && (this.previousWasTextNode = false);
          this.stack.pop();
          if (e2.type === "select") this.currentSelectValue = null;
          else if (e2.type != null && e2.type.type != null && e2.type.type.$$typeof === B)
            this.popProvider(e2.type);
          else if (e2.type === D) {
            this.suspenseDepth--;
            var G2 = h2.pop();
            if (t2) {
              t2 = false;
              var C2 = e2.fallbackFrame;
              if (!C2) throw Error(p$2(303));
              this.stack.push(C2);
              h2[this.suspenseDepth] += "<!--$!-->";
              continue;
            } else h2[this.suspenseDepth] += G2;
          }
          h2[this.suspenseDepth] += L2;
        } else {
          var n2 = e2.children[e2.childIndex++],
            k2 = "";
          try {
            k2 += this.render(n2, e2.context, e2.domNamespace);
          } catch (v2) {
            if (v2 != null && typeof v2.then === "function") throw Error(p$2(294));
            throw v2;
          } finally {
          }
          h2.length <= this.suspenseDepth && h2.push("");
          h2[this.suspenseDepth] += k2;
        }
      }
      return h2[0];
    } finally {
      (Sa.current = c2), (X = b3), Ea();
    }
  };
  b2.render = function (a2, b3, f2) {
    if (typeof a2 === "string" || typeof a2 === "number") {
      f2 = "" + a2;
      if (f2 === "") return "";
      if (this.makeStaticMarkup) return O(f2);
      if (this.previousWasTextNode) return "<!-- -->" + O(f2);
      this.previousWasTextNode = true;
      return O(f2);
    }
    b3 = ab(a2, b3, this.threadID);
    a2 = b3.child;
    b3 = b3.context;
    if (a2 === null || a2 === false) return "";
    if (!m$2.isValidElement(a2)) {
      if (a2 != null && a2.$$typeof != null) {
        f2 = a2.$$typeof;
        if (f2 === q$2) throw Error(p$2(257));
        throw Error(p$2(258, f2.toString()));
      }
      a2 = Z(a2);
      this.stack.push({
        type: null,
        domNamespace: f2,
        children: a2,
        childIndex: 0,
        context: b3,
        footer: "",
      });
      return "";
    }
    var c2 = a2.type;
    if (typeof c2 === "string") return this.renderDOM(a2, b3, f2);
    switch (c2) {
      case ka:
      case ja:
      case u:
      case z$1:
      case ca:
      case r$1:
        return (
          (a2 = Z(a2.props.children)),
          this.stack.push({
            type: null,
            domNamespace: f2,
            children: a2,
            childIndex: 0,
            context: b3,
            footer: "",
          }),
          ""
        );
      case D:
        throw Error(p$2(294));
      case ia:
        throw Error(p$2(343));
    }
    if (typeof c2 === "object" && c2 !== null)
      switch (c2.$$typeof) {
        case ba:
          P = {};
          var d2 = c2.render(a2.props, a2.ref);
          d2 = Da(c2.render, a2.props, d2, a2.ref);
          d2 = Z(d2);
          this.stack.push({
            type: null,
            domNamespace: f2,
            children: d2,
            childIndex: 0,
            context: b3,
            footer: "",
          });
          return "";
        case da:
          return (
            (a2 = [
              m$2.createElement(
                c2.type,
                l$1(
                  {
                    ref: a2.ref,
                  },
                  a2.props
                )
              ),
            ]),
            this.stack.push({
              type: null,
              domNamespace: f2,
              children: a2,
              childIndex: 0,
              context: b3,
              footer: "",
            }),
            ""
          );
        case B:
          return (
            (c2 = Z(a2.props.children)),
            (f2 = {
              type: a2,
              domNamespace: f2,
              children: c2,
              childIndex: 0,
              context: b3,
              footer: "",
            }),
            this.pushProvider(a2),
            this.stack.push(f2),
            ""
          );
        case aa:
          c2 = a2.type;
          d2 = a2.props;
          var g2 = this.threadID;
          I(c2, g2);
          c2 = Z(d2.children(c2[g2]));
          this.stack.push({
            type: a2,
            domNamespace: f2,
            children: c2,
            childIndex: 0,
            context: b3,
            footer: "",
          });
          return "";
        case ha:
          throw Error(p$2(338));
        case ea:
          return (
            (c2 = a2.type),
            (d2 = c2._init),
            (c2 = d2(c2._payload)),
            (a2 = [
              m$2.createElement(
                c2,
                l$1(
                  {
                    ref: a2.ref,
                  },
                  a2.props
                )
              ),
            ]),
            this.stack.push({
              type: null,
              domNamespace: f2,
              children: a2,
              childIndex: 0,
              context: b3,
              footer: "",
            }),
            ""
          );
      }
    throw Error(p$2(130, c2 == null ? c2 : typeof c2, ""));
  };
  b2.renderDOM = function (a2, b3, f2) {
    var c2 = a2.type.toLowerCase();
    if (!Va.hasOwnProperty(c2)) {
      if (!Ua.test(c2)) throw Error(p$2(65, c2));
      Va[c2] = true;
    }
    var d2 = a2.props;
    if (c2 === "input")
      d2 = l$1(
        {
          type: void 0,
        },
        d2,
        {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: d2.value != null ? d2.value : d2.defaultValue,
          checked: d2.checked != null ? d2.checked : d2.defaultChecked,
        }
      );
    else if (c2 === "textarea") {
      var g2 = d2.value;
      if (g2 == null) {
        g2 = d2.defaultValue;
        var e2 = d2.children;
        if (e2 != null) {
          if (g2 != null) throw Error(p$2(92));
          if (Array.isArray(e2)) {
            if (!(1 >= e2.length)) throw Error(p$2(93));
            e2 = e2[0];
          }
          g2 = "" + e2;
        }
        g2 == null && (g2 = "");
      }
      d2 = l$1({}, d2, {
        value: void 0,
        children: "" + g2,
      });
    } else if (c2 === "select")
      (this.currentSelectValue = d2.value != null ? d2.value : d2.defaultValue),
        (d2 = l$1({}, d2, {
          value: void 0,
        }));
    else if (c2 === "option") {
      e2 = this.currentSelectValue;
      var L2 = Xa(d2.children);
      if (e2 != null) {
        var G2 = d2.value != null ? d2.value + "" : L2;
        g2 = false;
        if (Array.isArray(e2))
          for (var C2 = 0; C2 < e2.length; C2++) {
            if ("" + e2[C2] === G2) {
              g2 = true;
              break;
            }
          }
        else g2 = "" + e2 === G2;
        d2 = l$1(
          {
            selected: void 0,
            children: void 0,
          },
          d2,
          {
            selected: g2,
            children: L2,
          }
        );
      }
    }
    if ((g2 = d2)) {
      if (Oa[c2] && (g2.children != null || g2.dangerouslySetInnerHTML != null))
        throw Error(p$2(137, c2));
      if (g2.dangerouslySetInnerHTML != null) {
        if (g2.children != null) throw Error(p$2(60));
        if (
          !(
            typeof g2.dangerouslySetInnerHTML === "object" && "__html" in g2.dangerouslySetInnerHTML
          )
        )
          throw Error(p$2(61));
      }
      if (g2.style != null && typeof g2.style !== "object") throw Error(p$2(62));
    }
    g2 = d2;
    e2 = this.makeStaticMarkup;
    L2 = this.stack.length === 1;
    G2 = "<" + a2.type;
    b: if (c2.indexOf("-") === -1) C2 = typeof g2.is === "string";
    else
      switch (c2) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          C2 = false;
          break b;
        default:
          C2 = true;
      }
    for (w2 in g2)
      if (Ya.call(g2, w2)) {
        var n2 = g2[w2];
        if (n2 != null) {
          if (w2 === "style") {
            var k2 = void 0,
              v2 = "",
              H2 = "";
            for (k2 in n2)
              if (n2.hasOwnProperty(k2)) {
                var x2 = k2.indexOf("--") === 0,
                  y2 = n2[k2];
                if (y2 != null) {
                  if (x2) var A2 = k2;
                  else if (((A2 = k2), Wa.hasOwnProperty(A2))) A2 = Wa[A2];
                  else {
                    var cb = A2.replace(Qa, "-$1").toLowerCase().replace(Ra, "-ms-");
                    A2 = Wa[A2] = cb;
                  }
                  v2 += H2 + A2 + ":";
                  H2 = k2;
                  x2 =
                    y2 == null || typeof y2 === "boolean" || y2 === ""
                      ? ""
                      : x2 || typeof y2 !== "number" || y2 === 0 || (Y.hasOwnProperty(H2) && Y[H2])
                      ? ("" + y2).trim()
                      : y2 + "px";
                  v2 += x2;
                  H2 = ";";
                }
              }
            n2 = v2 || null;
          }
          k2 = null;
          C2
            ? Za.hasOwnProperty(w2) ||
              ((k2 = w2), (k2 = sa(k2) && n2 != null ? k2 + '="' + (O(n2) + '"') : ""))
            : (k2 = ya(w2, n2));
          k2 && (G2 += " " + k2);
        }
      }
    e2 || (L2 && (G2 += ' data-reactroot=""'));
    var w2 = G2;
    g2 = "";
    Na.hasOwnProperty(c2) ? (w2 += "/>") : ((w2 += ">"), (g2 = "</" + a2.type + ">"));
    a: {
      e2 = d2.dangerouslySetInnerHTML;
      if (e2 != null) {
        if (e2.__html != null) {
          e2 = e2.__html;
          break a;
        }
      } else if (((e2 = d2.children), typeof e2 === "string" || typeof e2 === "number")) {
        e2 = O(e2);
        break a;
      }
      e2 = null;
    }
    e2 != null
      ? ((d2 = []), Ta.hasOwnProperty(c2) && e2.charAt(0) === "\n" && (w2 += "\n"), (w2 += e2))
      : (d2 = Z(d2.children));
    a2 = a2.type;
    f2 =
      f2 == null || f2 === "http://www.w3.org/1999/xhtml"
        ? Ma(a2)
        : f2 === "http://www.w3.org/2000/svg" && a2 === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : f2;
    this.stack.push({
      domNamespace: f2,
      type: c2,
      children: d2,
      childIndex: 0,
      context: b3,
      footer: g2,
    });
    this.previousWasTextNode = false;
    return w2;
  };
  return a;
})();
reactDomServer_browser_production_min.renderToNodeStream = function () {
  throw Error(p$2(207));
};
reactDomServer_browser_production_min.renderToStaticMarkup = function (a, b2) {
  a = new bb(a, true, b2);
  try {
    return a.read(Infinity);
  } finally {
    a.destroy();
  }
};
reactDomServer_browser_production_min.renderToStaticNodeStream = function () {
  throw Error(p$2(208));
};
reactDomServer_browser_production_min.renderToString = function (a, b2) {
  a = new bb(a, false, b2);
  try {
    return a.read(Infinity);
  } finally {
    a.destroy();
  }
};
reactDomServer_browser_production_min.version = "17.0.2";
{
  server_browser.exports = reactDomServer_browser_production_min;
}
var ReactDOMServer = server_browser.exports;
function _setPrototypeOf(o, p2) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var propTypes = {
  exports: {},
};
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function _extends() {
  _extends =
    Object.assign ||
    function (target) {
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
  return _extends.apply(this, arguments);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list, index2) {
  for (var i = index2, k2 = i + 1, n2 = list.length; k2 < n2; i += 1, k2 += 1) {
    list[i] = list[k2];
  }
  list.pop();
}
function resolvePathname(to, from) {
  if (from === void 0) from = "";
  var toParts = (to && to.split("/")) || [];
  var fromParts = (from && from.split("/")) || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length) return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];
    if (part === ".") {
      spliceOne(fromParts, i);
    } else if (part === "..") {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }
  if (!mustEndAbs) for (; up--; up) fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/") result += "/";
  return result;
}
var isProduction = true;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? prefix + ": " + provided : prefix;
  throw new Error(value);
}
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return (
    path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 &&
    "/?#".indexOf(path.charAt(prefix2.length)) !== -1
  );
}
function stripBasename$1(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash,
  };
}
function createPath(location) {
  var pathname = location.pathname,
    search = location.search,
    hash = location.hash;
  var path = pathname || "/";
  if (search && search !== "?") path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location;
  if (typeof path === "string") {
    location = parsePath(path);
    location.state = state;
  } else {
    location = _extends({}, path);
    if (location.pathname === void 0) location.pathname = "";
    if (location.search) {
      if (location.search.charAt(0) !== "?") location.search = "?" + location.search;
    } else {
      location.search = "";
    }
    if (location.hash) {
      if (location.hash.charAt(0) !== "#") location.hash = "#" + location.hash;
    } else {
      location.hash = "";
    }
    if (state !== void 0 && location.state === void 0) location.state = state;
  }
  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e2) {
    if (e2 instanceof URIError) {
      throw new URIError(
        'Pathname "' +
          location.pathname +
          '" could not be decoded. This is likely caused by an invalid percent-encoding.'
      );
    } else {
      throw e2;
    }
  }
  if (key) location.key = key;
  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }
  return location;
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }
  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners,
  };
}
var canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsHistory() {
  var ua2 = window.navigator.userAgent;
  if (
    (ua2.indexOf("Android 2.") !== -1 || ua2.indexOf("Android 4.0") !== -1) &&
    ua2.indexOf("Mobile Safari") !== -1 &&
    ua2.indexOf("Chrome") === -1 &&
    ua2.indexOf("Windows Phone") === -1
  )
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e2) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
    _props$forceRefresh = _props.forceRefresh,
    forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
    _props$getUserConfirm = _props.getUserConfirmation,
    getUserConfirmation =
      _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
    _props$keyLength = _props.keyLength,
    keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {},
      key = _ref.key,
      state = _ref.state;
    var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search,
      hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename) path = stripBasename$1(path, basename);
    return createLocation(path, state, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action,
            location,
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location) {
    return basename + createPath(location);
  }
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
        state2 = location.state;
      if (canUseHistory) {
        globalHistory.pushState(
          {
            key,
            state: state2,
          },
          null,
          href
        );
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action,
            location,
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
        state2 = location.state;
      if (canUseHistory) {
        globalHistory.replaceState(
          {
            key,
            state: state2,
          },
          null,
          href
        );
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action,
            location,
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen,
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    },
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash$1,
  },
  slash: {
    encodePath: addLeadingSlash$1,
    decodePath: addLeadingSlash$1,
  },
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  supportsGoWithoutReloadUsingHash();
  var _props = props,
    _props$getUserConfirm = _props.getUserConfirmation,
    getUserConfirmation =
      _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
    _props$hashType = _props.hashType,
    hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType],
    encodePath2 = _HashPathCoders$hashT.encodePath,
    decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename) path2 = stripBasename$1(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a, b2) {
    return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return;
      if (ignorePath === createPath(location)) return;
      ignorePath = null;
      handlePop(location);
    }
  }
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action,
            location,
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location,
        });
      } else {
        setState();
      }
    });
  }
  function replace(path2, state) {
    var action = "REPLACE";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path3;
      setState({
        action,
        location,
      });
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen,
  };
  return history;
}
function clamp(n2, lowerBound, upperBound) {
  return Math.min(Math.max(n2, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props,
    getUserConfirmation = _props.getUserConfirmation,
    _props$initialEntries = _props.initialEntries,
    initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries,
    _props$initialIndex = _props.initialIndex,
    initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
    _props$keyLength = _props.keyLength,
    keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index2 = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === "string"
      ? createLocation(entry, void 0, createKey())
      : createLocation(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath;
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }
      setState({
        action,
        location,
        index: nextIndex,
        entries: nextEntries,
      });
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action,
        location,
      });
    });
  }
  function go(n2) {
    var nextIndex = clamp(history.index + n2, 0, history.entries.length - 1);
    var action = "POP";
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action,
          location,
          index: nextIndex,
        });
      } else {
        setState();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n2) {
    var nextIndex = history.index + n2;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener) {
    return transitionManager.appendListener(listener);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index2],
    index: index2,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen,
  };
  return history;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : {};
function getUniqueId() {
  var key = "__global_unique_id__";
  return (commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1);
}
function objectIs(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h2) {
        return h2 !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    },
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId() + "__";
  var Provider = /* @__PURE__ */ (function (_Component) {
    _inheritsLoose(Provider2, _Component);
    function Provider2() {
      var _this;
      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider2.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref;
      return (_ref = {}), (_ref[contextProp] = this.emitter), _ref;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits =
            typeof calculateChangedBits === "function"
              ? calculateChangedBits(oldValue, newValue)
              : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render2() {
      return this.props.children;
    };
    return Provider2;
  })(react.exports.Component);
  Provider.childContextTypes =
    ((_Provider$childContex = {}),
    (_Provider$childContex[contextProp] = PropTypes.object.isRequired),
    _Provider$childContex);
  var Consumer = /* @__PURE__ */ (function (_Component2) {
    _inheritsLoose(Consumer2, _Component2);
    function Consumer2() {
      var _this2;
      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue(),
      };
      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue(),
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits =
        observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits =
        observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render2() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  })(react.exports.Component);
  Consumer.contextTypes =
    ((_Consumer$contextType = {}),
    (_Consumer$contextType[contextProp] = PropTypes.object),
    _Consumer$contextType);
  return {
    Provider,
    Consumer,
  };
}
var index = React.createContext || createReactContext;
var pathToRegexp$2 = {
  exports: {},
};
var isarray$1 =
  Array.isArray ||
  function (arr) {
    return Object.prototype.toString.call(arr) == "[object Array]";
  };
var isarray = isarray$1;
pathToRegexp$2.exports = pathToRegexp;
pathToRegexp$2.exports.parse = parse;
pathToRegexp$2.exports.compile = compile;
pathToRegexp$2.exports.tokensToFunction = tokensToFunction;
pathToRegexp$2.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp(
  [
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = (options && options.delimiter) || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m2 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m2.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern
        ? escapeGroup(pattern)
        : asterisk
        ? ".*"
        : "[^" + escapeString(delimiter) + "]+?",
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options) {
  var matches = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function (obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError(
            'Expected "' +
              token.name +
              '" to not repeat, but received `' +
              JSON.stringify(value) +
              "`"
          );
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i2].test(segment)) {
            throw new TypeError(
              'Expected all "' +
                token.name +
                '" to match "' +
                token.pattern +
                '", but received `' +
                JSON.stringify(segment) +
                "`"
            );
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i2].test(segment)) {
        throw new TypeError(
          'Expected "' +
            token.name +
            '" to match "' +
            token.pattern +
            '", but received "' +
            segment +
            '"'
        );
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null,
      });
    }
  }
  return attachKeys(path, keys);
}
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys);
}
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route =
      (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
      "(?:" +
      delimiter +
      "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys);
}
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys, options);
  }
  return stringToRegexp(path, keys, options);
}
var pathToRegexp$1 = pathToRegexp$2.exports;
var reactIs$1 = {
  exports: {},
};
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f$1 = b ? Symbol.for("react.strict_mode") : 60108,
  g$1 = b ? Symbol.for("react.profiler") : 60114,
  h$1 = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m$1 = b ? Symbol.for("react.concurrent_mode") : 60111,
  n$1 = b ? Symbol.for("react.forward_ref") : 60112,
  p$1 = b ? Symbol.for("react.suspense") : 60113,
  q$1 = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (((a = a.type), a)) {
          case l:
          case m$1:
          case e:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k:
              case n$1:
              case t:
              case r:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m$1;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m$1;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h$1;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n$1;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f$1;
reactIs_production_min.Suspense = p$1;
reactIs_production_min.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function (a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function (a) {
  return z(a) === h$1;
};
reactIs_production_min.isElement = function (a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function (a) {
  return z(a) === n$1;
};
reactIs_production_min.isFragment = function (a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function (a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function (a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function (a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function (a) {
  return z(a) === g$1;
};
reactIs_production_min.isStrictMode = function (a) {
  return z(a) === f$1;
};
reactIs_production_min.isSuspense = function (a) {
  return z(a) === p$1;
};
reactIs_production_min.isValidElementType = function (a) {
  return (
    typeof a === "string" ||
    typeof a === "function" ||
    a === e ||
    a === m$1 ||
    a === g$1 ||
    a === f$1 ||
    a === p$1 ||
    a === q$1 ||
    (typeof a === "object" &&
      a !== null &&
      (a.$$typeof === t ||
        a.$$typeof === r ||
        a.$$typeof === h$1 ||
        a.$$typeof === k ||
        a.$$typeof === n$1 ||
        a.$$typeof === w ||
        a.$$typeof === x ||
        a.$$typeof === y ||
        a.$$typeof === v))
  );
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true,
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var createNamedContext = function createNamedContext2(name) {
  var context2 = index();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var context = /* @__PURE__ */ createNamedContext("Router");
var Router = /* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/",
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location,
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location,
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation,
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };
  _proto.render = function render2() {
    return /* @__PURE__ */ React.createElement(
      context.Provider,
      {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: Router2.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext,
        },
      },
      /* @__PURE__ */ React.createElement(historyContext.Provider, {
        children: this.props.children || null,
        value: this.props.history,
      })
    );
  };
  return Router2;
})(React.Component);
/* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);
  function MemoryRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter.prototype;
  _proto.render = function render2() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children,
    });
  };
  return MemoryRouter;
})(React.Component);
/* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);
  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };
  _proto.render = function render2() {
    return null;
  };
  return Lifecycle;
})(React.Component);
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp$1(path, keys, options);
  var result = {
    regexp,
    keys,
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options,
    };
  }
  var _options = options,
    path = _options.path,
    _options$exact = _options.exact,
    exact = _options$exact === void 0 ? false : _options$exact,
    _options$strict = _options.strict,
    strict = _options$strict === void 0 ? false : _options$strict,
    _options$sensitive = _options.sensitive,
    sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path2) {
    if (!path2 && path2 !== "") return null;
    if (matched) return matched;
    var _compilePath = compilePath$1(path2, {
        end: exact,
        strict,
        sensitive,
      }),
      regexp = _compilePath.regexp,
      keys = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
      values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys.reduce(function (memo, key, index2) {
        memo[key.name] = values[index2];
        return memo;
      }, {}),
    };
  }, null);
}
function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}
var Route = /* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return /* @__PURE__ */ React.createElement(context.Consumer, null, function (context$1) {
      !context$1 ? invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch
        ? _this.props.computedMatch
        : _this.props.path
        ? matchPath(location.pathname, _this.props)
        : context$1.match;
      var props = _extends({}, context$1, {
        location,
        match,
      });
      var _this$props = _this.props,
        children = _this$props.children,
        component = _this$props.component,
        render3 = _this$props.render;
      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }
      return /* @__PURE__ */ React.createElement(
        context.Provider,
        {
          value: props,
        },
        props.match
          ? children
            ? typeof children === "function"
              ? children(props)
              : children
            : component
            ? /* @__PURE__ */ React.createElement(component, props)
            : render3
            ? render3(props)
            : null
          : typeof children === "function"
          ? children(props)
          : null
      );
    });
  };
  return Route2;
})(React.Component);
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname,
  });
}
function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length),
  });
}
function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}
function staticHandler(methodName) {
  return function () {
    invariant(false);
  };
}
function noop() {}
var StaticRouter = /* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(StaticRouter2, _React$Component);
  function StaticRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };
    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };
    _this.handleListen = function () {
      return noop;
    };
    _this.handleBlock = function () {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter2.prototype;
  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
      _this$props$basename = _this$props.basename,
      basename = _this$props$basename === void 0 ? "" : _this$props$basename,
      _this$props$context = _this$props.context,
      context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation(location));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render2() {
    var _this$props2 = this.props,
      _this$props2$basename = _this$props2.basename,
      basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
      _this$props2$context = _this$props2.context,
      context2 = _this$props2$context === void 0 ? {} : _this$props2$context,
      _this$props2$location = _this$props2.location,
      location = _this$props2$location === void 0 ? "/" : _this$props2$location,
      rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock,
    };
    return /* @__PURE__ */ React.createElement(
      Router,
      _extends({}, rest, {
        history,
        staticContext: context2,
      })
    );
  };
  return StaticRouter2;
})(React.Component);
var Switch = /* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return /* @__PURE__ */ React.createElement(context.Consumer, null, function (context2) {
      !context2 ? invariant(false) : void 0;
      var location = _this.props.location || context2.location;
      var element, match;
      React.Children.forEach(_this.props.children, function (child) {
        if (match == null && /* @__PURE__ */ React.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path
            ? matchPath(
                location.pathname,
                _extends({}, child.props, {
                  path,
                })
              )
            : context2.match;
        }
      });
      return match
        ? /* @__PURE__ */ React.cloneElement(element, {
            location,
            computedMatch: match,
          })
        : null;
    });
  };
  return Switch2;
})(React.Component);
React.useContext;
/* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);
  function BrowserRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter.prototype;
  _proto.render = function render2() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children,
    });
  };
  return BrowserRouter;
})(React.Component);
/* @__PURE__ */ (function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);
  function HashRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter.prototype;
  _proto.render = function render2() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children,
    });
  };
  return HashRouter;
})(React.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C2) {
  return C2;
};
var forwardRef = React.forwardRef;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
    navigate = _ref.navigate,
    _onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        (!target || target === "_self") &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault();
        navigate();
      }
    },
  });
  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return /* @__PURE__ */ React.createElement("a", props);
});
var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
    component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
    replace = _ref2.replace,
    to = _ref2.to,
    innerRef = _ref2.innerRef,
    rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function (context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location ? history.createHref(location) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate() {
        var location2 = resolveToLocation(to, context2.location);
        var isDuplicateNavigation =
          createPath(context2.location) === createPath(normalizeToLocation(location2));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location2);
      },
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C2) {
  return C2;
};
var forwardRef$1 = React.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames
    .filter(function (i) {
      return i;
    })
    .join(" ");
}
forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
    ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
    _ref$activeClassName = _ref.activeClassName,
    activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
    activeStyle = _ref.activeStyle,
    classNameProp = _ref.className,
    exact = _ref.exact,
    isActiveProp = _ref.isActive,
    locationProp = _ref.location,
    sensitive = _ref.sensitive,
    strict = _ref.strict,
    styleProp = _ref.style,
    to = _ref.to,
    innerRef = _ref.innerRef,
    rest = _objectWithoutPropertiesLoose(_ref, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function (context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath
      ? matchPath(currentLocation.pathname, {
          path: escapedPath,
          exact,
          sensitive,
          strict,
        })
      : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;
    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = _extends({}, style, activeStyle);
    }
    var props = _extends(
      {
        "aria-current": (isActive && ariaCurrent) || null,
        className,
        style,
        to: toLocation,
      },
      rest
    );
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React.createElement(Link, props);
  });
});
var jsxRuntime = {
  exports: {},
};
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports,
  g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  n = Object.prototype.hasOwnProperty,
  p = {
    key: true,
    ref: true,
    __self: true,
    __source: true,
  };
function q(c2, a, k2) {
  var b2,
    d2 = {},
    e2 = null,
    l2 = null;
  k2 !== void 0 && (e2 = "" + k2);
  a.key !== void 0 && (e2 = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b2 in a) n.call(a, b2) && !p.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in ((a = c2.defaultProps), a)) d2[b2] === void 0 && (d2[b2] = a[b2]);
  return {
    $$typeof: g,
    type: c2,
    key: e2,
    ref: l2,
    props: d2,
    _owner: m.current,
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
function Env() {
  let msg = "default message here";
  try {
    msg = {}.MY_CUSTOM_SECRET || msg;
  } catch {}
  return /* @__PURE__ */ jsx("h1", {
    children: msg,
  });
}
var __glob_4_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Env,
});
function About() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("h1", {
      children: "About",
    }),
  });
}
var __glob_4_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About,
});
function Home() {
  return /* @__PURE__ */ jsx("h1", {
    children: "Home",
  });
}
var __glob_4_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Home,
});
const pages = {
  "./pages/Env.jsx": __glob_4_0,
  "./pages/about.jsx": __glob_4_1,
  "./pages/home.jsx": __glob_4_2,
};
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});
function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("nav", {
        children: /* @__PURE__ */ jsx("ul", {
          children: routes.map(({ name, path }) => {
            return /* @__PURE__ */ jsx(
              "li",
              {
                children: /* @__PURE__ */ jsx(Link, {
                  to: path,
                  children: name,
                }),
              },
              path
            );
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Switch, {
        children: routes.map(({ path, component: RouteComp }) => {
          return /* @__PURE__ */ jsx(
            Route,
            {
              path,
              children: /* @__PURE__ */ jsx(RouteComp, {}),
            },
            path
          );
        }),
      }),
    ],
  });
}
function render(url, context2) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, {
      location: url,
      context: context2,
      children: /* @__PURE__ */ jsx(App, {}),
    })
  );
}

addEventListener("fetch", (event) => {
  const url = new URL(event.request.url).pathname;
  console.log(url);
  const context = {};

  // has to be everything after the first /
  const out = render(url, context);

  event.respondWith(
    new Response(out, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  );

  console.log(context);
});
