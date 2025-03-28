!(function () {
  var t = {
      7111: function (t, e, r) {
        var n = r(6733),
          o = r(9821),
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw i(o(t) + " is not a function");
        };
      },
      1176: function (t, e, r) {
        var n = r(5052),
          o = String,
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw i(o(t) + " is not an object");
        };
      },
      9540: function (t, e, r) {
        var n = r(905),
          o = r(3231),
          i = r(9646),
          c = function (t) {
            return function (e, r, c) {
              var a,
                u = n(e),
                s = i(u),
                d = o(c, s);
              if (t && r != r) {
                for (; s > d; ) if ((a = u[d++]) != a) return !0;
              } else
                for (; s > d; d++)
                  if ((t || d in u) && u[d] === r) return t || d || 0;
              return !t && -1;
            };
          };
        t.exports = { includes: c(!0), indexOf: c(!1) };
      },
      6554: function (t, e, r) {
        "use strict";
        var n = r(7400),
          o = r(3718),
          i = TypeError,
          c = Object.getOwnPropertyDescriptor,
          a =
            n &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", {
                  writable: !1,
                }).length = 1;
              } catch (t) {
                return t instanceof TypeError;
              }
            })();
        t.exports = a
          ? function (t, e) {
              if (o(t) && !c(t, "length").writable)
                throw i("Cannot set read only .length");
              return (t.length = e);
            }
          : function (t, e) {
              return (t.length = e);
            };
      },
      7079: function (t, e, r) {
        var n = r(6529),
          o = n({}.toString),
          i = n("".slice);
        t.exports = function (t) {
          return i(o(t), 8, -1);
        };
      },
      7081: function (t, e, r) {
        var n = r(8270),
          o = r(4826),
          i = r(7933),
          c = r(1787);
        t.exports = function (t, e, r) {
          for (var a = o(e), u = c.f, s = i.f, d = 0; d < a.length; d++) {
            var l = a[d];
            n(t, l) || (r && n(r, l)) || u(t, l, s(e, l));
          }
        };
      },
      5762: function (t, e, r) {
        var n = r(7400),
          o = r(1787),
          i = r(5358);
        t.exports = n
          ? function (t, e, r) {
              return o.f(t, e, i(1, r));
            }
          : function (t, e, r) {
              return (t[e] = r), t;
            };
      },
      5358: function (t) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        };
      },
      4768: function (t, e, r) {
        var n = r(6733),
          o = r(1787),
          i = r(6039),
          c = r(8400);
        t.exports = function (t, e, r, a) {
          a || (a = {});
          var u = a.enumerable,
            s = void 0 !== a.name ? a.name : e;
          if ((n(r) && i(r, s, a), a.global)) u ? (t[e] = r) : c(e, r);
          else {
            try {
              a.unsafe ? t[e] && (u = !0) : delete t[e];
            } catch (t) {}
            u
              ? (t[e] = r)
              : o.f(t, e, {
                  value: r,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return t;
        };
      },
      8400: function (t, e, r) {
        var n = r(9859),
          o = Object.defineProperty;
        t.exports = function (t, e) {
          try {
            o(n, t, { value: e, configurable: !0, writable: !0 });
          } catch (r) {
            n[t] = e;
          }
          return e;
        };
      },
      7400: function (t, e, r) {
        var n = r(4229);
        t.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      3777: function (t) {
        var e = "object" == typeof document && document.all,
          r = void 0 === e && void 0 !== e;
        t.exports = { all: e, IS_HTMLDDA: r };
      },
      2635: function (t, e, r) {
        var n = r(9859),
          o = r(5052),
          i = n.document,
          c = o(i) && o(i.createElement);
        t.exports = function (t) {
          return c ? i.createElement(t) : {};
        };
      },
      3064: function (t) {
        var e = TypeError;
        t.exports = function (t) {
          if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
          return t;
        };
      },
      598: function (t, e, r) {
        var n = r(1333);
        t.exports = n("navigator", "userAgent") || "";
      },
      6358: function (t, e, r) {
        var n,
          o,
          i = r(9859),
          c = r(598),
          a = i.process,
          u = i.Deno,
          s = (a && a.versions) || (u && u.version),
          d = s && s.v8;
        d && (o = (n = d.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
          !o &&
            c &&
            (!(n = c.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = c.match(/Chrome\/(\d+)/)) &&
            (o = +n[1]),
          (t.exports = o);
      },
      3837: function (t) {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      3103: function (t, e, r) {
        var n = r(9859),
          o = r(7933).f,
          i = r(5762),
          c = r(4768),
          a = r(8400),
          u = r(7081),
          s = r(6541);
        t.exports = function (t, e) {
          var r,
            d,
            l,
            m,
            p,
            f = t.target,
            v = t.global,
            y = t.stat;
          if ((r = v ? n : y ? n[f] || a(f, {}) : (n[f] || {}).prototype))
            for (d in e) {
              if (
                ((m = e[d]),
                (l = t.dontCallGetSet ? (p = o(r, d)) && p.value : r[d]),
                !s(v ? d : f + (y ? "." : "#") + d, t.forced) && void 0 !== l)
              ) {
                if (typeof m == typeof l) continue;
                u(m, l);
              }
              (t.sham || (l && l.sham)) && i(m, "sham", !0), c(r, d, m, t);
            }
        };
      },
      4229: function (t) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      7188: function (t, e, r) {
        var n = r(4229);
        t.exports = !n(function () {
          var t = function () {}.bind();
          return "function" != typeof t || t.hasOwnProperty("prototype");
        });
      },
      266: function (t, e, r) {
        var n = r(7188),
          o = Function.prototype.call;
        t.exports = n
          ? o.bind(o)
          : function () {
              return o.apply(o, arguments);
            };
      },
      1805: function (t, e, r) {
        var n = r(7400),
          o = r(8270),
          i = Function.prototype,
          c = n && Object.getOwnPropertyDescriptor,
          a = o(i, "name"),
          u = a && "something" === function () {}.name,
          s = a && (!n || (n && c(i, "name").configurable));
        t.exports = { EXISTS: a, PROPER: u, CONFIGURABLE: s };
      },
      6529: function (t, e, r) {
        var n = r(7188),
          o = Function.prototype,
          i = o.call,
          c = n && o.bind.bind(i, i);
        t.exports = function (t) {
          return n
            ? c(t)
            : function () {
                return i.apply(t, arguments);
              };
        };
      },
      5968: function (t, e, r) {
        var n = r(7079),
          o = r(6529);
        t.exports = function (t) {
          if ("Function" === n(t)) return o(t);
        };
      },
      1333: function (t, e, r) {
        var n = r(9859),
          o = r(6733),
          i = function (t) {
            return o(t) ? t : void 0;
          };
        t.exports = function (t, e) {
          return arguments.length < 2 ? i(n[t]) : n[t] && n[t][e];
        };
      },
      5300: function (t, e, r) {
        var n = r(7111),
          o = r(9650);
        t.exports = function (t, e) {
          var r = t[e];
          return o(r) ? void 0 : n(r);
        };
      },
      9859: function (t, e, r) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8270: function (t, e, r) {
        var n = r(5968),
          o = r(2991),
          i = n({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (t, e) {
            return i(o(t), e);
          };
      },
      5977: function (t) {
        t.exports = {};
      },
      4394: function (t, e, r) {
        var n = r(7400),
          o = r(4229),
          i = r(2635);
        t.exports =
          !n &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      9337: function (t, e, r) {
        var n = r(5968),
          o = r(4229),
          i = r(7079),
          c = Object,
          a = n("".split);
        t.exports = o(function () {
          return !c("z").propertyIsEnumerable(0);
        })
          ? function (t) {
              return "String" == i(t) ? a(t, "") : c(t);
            }
          : c;
      },
      8511: function (t, e, r) {
        var n = r(5968),
          o = r(6733),
          i = r(5353),
          c = n(Function.toString);
        o(i.inspectSource) ||
          (i.inspectSource = function (t) {
            return c(t);
          }),
          (t.exports = i.inspectSource);
      },
      6407: function (t, e, r) {
        var n,
          o,
          i,
          c = r(1180),
          a = r(9859),
          u = r(5052),
          s = r(5762),
          d = r(8270),
          l = r(5353),
          m = r(4399),
          p = r(5977),
          f = "Object already initialized",
          v = a.TypeError,
          y = a.WeakMap;
        if (c || l.state) {
          var g = l.state || (l.state = new y());
          (g.get = g.get),
            (g.has = g.has),
            (g.set = g.set),
            (n = function (t, e) {
              if (g.has(t)) throw v(f);
              return (e.facade = t), g.set(t, e), e;
            }),
            (o = function (t) {
              return g.get(t) || {};
            }),
            (i = function (t) {
              return g.has(t);
            });
        } else {
          var h = m("state");
          (p[h] = !0),
            (n = function (t, e) {
              if (d(t, h)) throw v(f);
              return (e.facade = t), s(t, h, e), e;
            }),
            (o = function (t) {
              return d(t, h) ? t[h] : {};
            }),
            (i = function (t) {
              return d(t, h);
            });
        }
        t.exports = {
          set: n,
          get: o,
          has: i,
          enforce: function (t) {
            return i(t) ? o(t) : n(t, {});
          },
          getterFor: function (t) {
            return function (e) {
              var r;
              if (!u(e) || (r = o(e)).type !== t)
                throw v("Incompatible receiver, " + t + " required");
              return r;
            };
          },
        };
      },
      3718: function (t, e, r) {
        var n = r(7079);
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == n(t);
          };
      },
      6733: function (t, e, r) {
        var n = r(3777),
          o = n.all;
        t.exports = n.IS_HTMLDDA
          ? function (t) {
              return "function" == typeof t || t === o;
            }
          : function (t) {
              return "function" == typeof t;
            };
      },
      6541: function (t, e, r) {
        var n = r(4229),
          o = r(6733),
          i = /#|\.prototype\./,
          c = function (t, e) {
            var r = u[a(t)];
            return r == d || (r != s && (o(e) ? n(e) : !!e));
          },
          a = (c.normalize = function (t) {
            return String(t).replace(i, ".").toLowerCase();
          }),
          u = (c.data = {}),
          s = (c.NATIVE = "N"),
          d = (c.POLYFILL = "P");
        t.exports = c;
      },
      9650: function (t) {
        t.exports = function (t) {
          return null == t;
        };
      },
      5052: function (t, e, r) {
        var n = r(6733),
          o = r(3777),
          i = o.all;
        t.exports = o.IS_HTMLDDA
          ? function (t) {
              return "object" == typeof t ? null !== t : n(t) || t === i;
            }
          : function (t) {
              return "object" == typeof t ? null !== t : n(t);
            };
      },
      4231: function (t) {
        t.exports = !1;
      },
      9395: function (t, e, r) {
        var n = r(1333),
          o = r(6733),
          i = r(1321),
          c = r(6969),
          a = Object;
        t.exports = c
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              var e = n("Symbol");
              return o(e) && i(e.prototype, a(t));
            };
      },
      9646: function (t, e, r) {
        var n = r(4237);
        t.exports = function (t) {
          return n(t.length);
        };
      },
      6039: function (t, e, r) {
        var n = r(4229),
          o = r(6733),
          i = r(8270),
          c = r(7400),
          a = r(1805).CONFIGURABLE,
          u = r(8511),
          s = r(6407),
          d = s.enforce,
          l = s.get,
          m = Object.defineProperty,
          p =
            c &&
            !n(function () {
              return 8 !== m(function () {}, "length", { value: 8 }).length;
            }),
          f = String(String).split("String"),
          v = (t.exports = function (t, e, r) {
            "Symbol(" === String(e).slice(0, 7) &&
              (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              r && r.getter && (e = "get " + e),
              r && r.setter && (e = "set " + e),
              (!i(t, "name") || (a && t.name !== e)) &&
                (c
                  ? m(t, "name", { value: e, configurable: !0 })
                  : (t.name = e)),
              p &&
                r &&
                i(r, "arity") &&
                t.length !== r.arity &&
                m(t, "length", { value: r.arity });
            try {
              r && i(r, "constructor") && r.constructor
                ? c && m(t, "prototype", { writable: !1 })
                : t.prototype && (t.prototype = void 0);
            } catch (t) {}
            var n = d(t);
            return (
              i(n, "source") ||
                (n.source = f.join("string" == typeof e ? e : "")),
              t
            );
          });
        Function.prototype.toString = v(function () {
          return (o(this) && l(this).source) || u(this);
        }, "toString");
      },
      917: function (t) {
        var e = Math.ceil,
          r = Math.floor;
        t.exports =
          Math.trunc ||
          function (t) {
            var n = +t;
            return (n > 0 ? r : e)(n);
          };
      },
      1787: function (t, e, r) {
        var n = r(7400),
          o = r(4394),
          i = r(7137),
          c = r(1176),
          a = r(9310),
          u = TypeError,
          s = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          l = "enumerable",
          m = "configurable",
          p = "writable";
        e.f = n
          ? i
            ? function (t, e, r) {
                if (
                  (c(t),
                  (e = a(e)),
                  c(r),
                  "function" == typeof t &&
                    "prototype" === e &&
                    "value" in r &&
                    p in r &&
                    !r.writable)
                ) {
                  var n = d(t, e);
                  n &&
                    n.writable &&
                    ((t[e] = r.value),
                    (r = {
                      configurable: m in r ? r.configurable : n.configurable,
                      enumerable: l in r ? r.enumerable : n.enumerable,
                      writable: !1,
                    }));
                }
                return s(t, e, r);
              }
            : s
          : function (t, e, r) {
              if ((c(t), (e = a(e)), c(r), o))
                try {
                  return s(t, e, r);
                } catch (t) {}
              if ("get" in r || "set" in r) throw u("Accessors not supported");
              return "value" in r && (t[e] = r.value), t;
            };
      },
      7933: function (t, e, r) {
        var n = r(7400),
          o = r(266),
          i = r(9195),
          c = r(5358),
          a = r(905),
          u = r(9310),
          s = r(8270),
          d = r(4394),
          l = Object.getOwnPropertyDescriptor;
        e.f = n
          ? l
          : function (t, e) {
              if (((t = a(t)), (e = u(e)), d))
                try {
                  return l(t, e);
                } catch (t) {}
              if (s(t, e)) return c(!o(i.f, t, e), t[e]);
            };
      },
      8151: function (t, e, r) {
        var n = r(140),
          o = r(3837).concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return n(t, o);
          };
      },
      894: function (t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      1321: function (t, e, r) {
        var n = r(5968);
        t.exports = n({}.isPrototypeOf);
      },
      140: function (t, e, r) {
        var n = r(5968),
          o = r(8270),
          i = r(905),
          c = r(9540).indexOf,
          a = r(5977),
          u = n([].push);
        t.exports = function (t, e) {
          var r,
            n = i(t),
            s = 0,
            d = [];
          for (r in n) !o(a, r) && o(n, r) && u(d, r);
          for (; e.length > s; ) o(n, (r = e[s++])) && (~c(d, r) || u(d, r));
          return d;
        };
      },
      9195: function (t, e) {
        "use strict";
        var r = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          o = n && !r.call({ 1: 2 }, 1);
        e.f = o
          ? function (t) {
              var e = n(this, t);
              return !!e && e.enumerable;
            }
          : r;
      },
      2914: function (t, e, r) {
        var n = r(266),
          o = r(6733),
          i = r(5052),
          c = TypeError;
        t.exports = function (t, e) {
          var r, a;
          if ("string" === e && o((r = t.toString)) && !i((a = n(r, t))))
            return a;
          if (o((r = t.valueOf)) && !i((a = n(r, t)))) return a;
          if ("string" !== e && o((r = t.toString)) && !i((a = n(r, t))))
            return a;
          throw c("Can't convert object to primitive value");
        };
      },
      4826: function (t, e, r) {
        var n = r(1333),
          o = r(5968),
          i = r(8151),
          c = r(894),
          a = r(1176),
          u = o([].concat);
        t.exports =
          n("Reflect", "ownKeys") ||
          function (t) {
            var e = i.f(a(t)),
              r = c.f;
            return r ? u(e, r(t)) : e;
          };
      },
      8885: function (t, e, r) {
        var n = r(9650),
          o = TypeError;
        t.exports = function (t) {
          if (n(t)) throw o("Can't call method on " + t);
          return t;
        };
      },
      4399: function (t, e, r) {
        var n = r(3036),
          o = r(1441),
          i = n("keys");
        t.exports = function (t) {
          return i[t] || (i[t] = o(t));
        };
      },
      5353: function (t, e, r) {
        var n = r(9859),
          o = r(8400),
          i = "__core-js_shared__",
          c = n[i] || o(i, {});
        t.exports = c;
      },
      3036: function (t, e, r) {
        var n = r(4231),
          o = r(5353);
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: "3.25.5",
          mode: n ? "pure" : "global",
          copyright: " Â© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      4860: function (t, e, r) {
        var n = r(6358),
          o = r(4229);
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var t = Symbol();
            return (
              !String(t) ||
              !(Object(t) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            );
          });
      },
      3231: function (t, e, r) {
        var n = r(3329),
          o = Math.max,
          i = Math.min;
        t.exports = function (t, e) {
          var r = n(t);
          return r < 0 ? o(r + e, 0) : i(r, e);
        };
      },
      905: function (t, e, r) {
        var n = r(9337),
          o = r(8885);
        t.exports = function (t) {
          return n(o(t));
        };
      },
      3329: function (t, e, r) {
        var n = r(917);
        t.exports = function (t) {
          var e = +t;
          return e != e || 0 === e ? 0 : n(e);
        };
      },
      4237: function (t, e, r) {
        var n = r(3329),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(n(t), 9007199254740991) : 0;
        };
      },
      2991: function (t, e, r) {
        var n = r(8885),
          o = Object;
        t.exports = function (t) {
          return o(n(t));
        };
      },
      2066: function (t, e, r) {
        var n = r(266),
          o = r(5052),
          i = r(9395),
          c = r(5300),
          a = r(2914),
          u = r(95),
          s = TypeError,
          d = u("toPrimitive");
        t.exports = function (t, e) {
          if (!o(t) || i(t)) return t;
          var r,
            u = c(t, d);
          if (u) {
            if (
              (void 0 === e && (e = "default"), (r = n(u, t, e)), !o(r) || i(r))
            )
              return r;
            throw s("Can't convert object to primitive value");
          }
          return void 0 === e && (e = "number"), a(t, e);
        };
      },
      9310: function (t, e, r) {
        var n = r(2066),
          o = r(9395);
        t.exports = function (t) {
          var e = n(t, "string");
          return o(e) ? e : e + "";
        };
      },
      9821: function (t) {
        var e = String;
        t.exports = function (t) {
          try {
            return e(t);
          } catch (t) {
            return "Object";
          }
        };
      },
      1441: function (t, e, r) {
        var n = r(5968),
          o = 0,
          i = Math.random(),
          c = n((1).toString);
        t.exports = function (t) {
          return "Symbol(" + (void 0 === t ? "" : t) + ")_" + c(++o + i, 36);
        };
      },
      6969: function (t, e, r) {
        var n = r(4860);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      7137: function (t, e, r) {
        var n = r(7400),
          o = r(4229);
        t.exports =
          n &&
          o(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      1180: function (t, e, r) {
        var n = r(9859),
          o = r(6733),
          i = n.WeakMap;
        t.exports = o(i) && /native code/.test(String(i));
      },
      95: function (t, e, r) {
        var n = r(9859),
          o = r(3036),
          i = r(8270),
          c = r(1441),
          a = r(4860),
          u = r(6969),
          s = o("wks"),
          d = n.Symbol,
          l = d && d.for,
          m = u ? d : (d && d.withoutSetter) || c;
        t.exports = function (t) {
          if (!i(s, t) || (!a && "string" != typeof s[t])) {
            var e = "Symbol." + t;
            a && i(d, t) ? (s[t] = d[t]) : (s[t] = u && l ? l(e) : m(e));
          }
          return s[t];
        };
      },
      6728: function (t, e, r) {
        "use strict";
        var n = r(3103),
          o = r(2991),
          i = r(9646),
          c = r(6554),
          a = r(3064),
          u = r(4229)(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          }),
          s = !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).push();
            } catch (t) {
              return t instanceof TypeError;
            }
          })();
        n(
          { target: "Array", proto: !0, arity: 1, forced: u || s },
          {
            push: function (t) {
              var e = o(this),
                r = i(e),
                n = arguments.length;
              a(r + n);
              for (var u = 0; u < n; u++) (e[r] = arguments[u]), r++;
              return c(e, r), r;
            },
          }
        );
      },
      594: function (t, e, r) {
        var n = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          a = parseInt,
          u = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          s = "object" == typeof self && self && self.Object === Object && self,
          d = u || s || Function("return this")(),
          l = Object.prototype.toString,
          m = Math.max,
          p = Math.min,
          f = function () {
            return d.Date.now();
          };
        function v(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function y(t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  "[object Symbol]" == l.call(t))
              );
            })(t)
          )
            return NaN;
          if (v(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = v(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(n, "");
          var r = i.test(t);
          return r || c.test(t)
            ? a(t.slice(2), r ? 2 : 8)
            : o.test(t)
            ? NaN
            : +t;
        }
        t.exports = function (t, e, r) {
          var n,
            o,
            i,
            c,
            a,
            u,
            s = 0,
            d = !1,
            l = !1,
            g = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function h(e) {
            var r = n,
              i = o;
            return (n = o = void 0), (s = e), (c = t.apply(i, r));
          }
          function _(t) {
            return (s = t), (a = setTimeout(w, e)), d ? h(t) : c;
          }
          function b(t) {
            var r = t - u;
            return void 0 === u || r >= e || r < 0 || (l && t - s >= i);
          }
          function w() {
            var t = f();
            if (b(t)) return I(t);
            a = setTimeout(
              w,
              (function (t) {
                var r = e - (t - u);
                return l ? p(r, i - (t - s)) : r;
              })(t)
            );
          }
          function I(t) {
            return (a = void 0), g && n ? h(t) : ((n = o = void 0), c);
          }
          function S() {
            var t = f(),
              r = b(t);
            if (((n = arguments), (o = this), (u = t), r)) {
              if (void 0 === a) return _(u);
              if (l) return (a = setTimeout(w, e)), h(u);
            }
            return void 0 === a && (a = setTimeout(w, e)), c;
          }
          return (
            (e = y(e) || 0),
            v(r) &&
              ((d = !!r.leading),
              (i = (l = "maxWait" in r) ? m(y(r.maxWait) || 0, e) : i),
              (g = "trailing" in r ? !!r.trailing : g)),
            (S.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (s = 0),
                (n = u = o = a = void 0);
            }),
            (S.flush = function () {
              return void 0 === a ? c : I(f());
            }),
            S
          );
        };
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return r.d(e, { a: e }), e;
  }),
    (r.d = function (t, e) {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      var t;
      r.g.importScripts && (t = r.g.location + "");
      var e = r.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName("script");
        n.length && (t = n[n.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = t);
    })(),
    (function () {
      "use strict";
      if (document.currentScript instanceof HTMLScriptElement) {
        const t = document.currentScript.src,
          e = new URL(t),
          n = e.origin,
          o = e.pathname.split("/").slice(0, -1).join("/").concat("/");
        r.p = `${n}${o}`;
      }
      const t = (t) => {
          console.error("Tagging Data Layer:", t);
        },
        e =
          (e) =>
          (...r) => {
            try {
              e(...r);
            } catch (e) {
              t(e);
            }
          };
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) t[n] = r[n];
        }
        return t;
      }
      var o = (function t(e, r) {
          function o(t, o, i) {
            if ("undefined" != typeof document) {
              "number" == typeof (i = n({}, r, i)).expires &&
                (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                i.expires && (i.expires = i.expires.toUTCString()),
                (t = encodeURIComponent(t)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape));
              var c = "";
              for (var a in i)
                i[a] &&
                  ((c += "; " + a),
                  !0 !== i[a] && (c += "=" + i[a].split(";")[0]));
              return (document.cookie = t + "=" + e.write(o, t) + c);
            }
          }
          return Object.create(
            {
              set: o,
              get: function (t) {
                if (
                  "undefined" != typeof document &&
                  (!arguments.length || t)
                ) {
                  for (
                    var r = document.cookie ? document.cookie.split("; ") : [],
                      n = {},
                      o = 0;
                    o < r.length;
                    o++
                  ) {
                    var i = r[o].split("="),
                      c = i.slice(1).join("=");
                    try {
                      var a = decodeURIComponent(i[0]);
                      if (((n[a] = e.read(c, a)), t === a)) break;
                    } catch (t) {}
                  }
                  return t ? n[t] : n;
                }
              },
              remove: function (t, e) {
                o(t, "", n({}, e, { expires: -1 }));
              },
              withAttributes: function (e) {
                return t(this.converter, n({}, this.attributes, e));
              },
              withConverter: function (e) {
                return t(n({}, this.converter, e), this.attributes);
              },
            },
            {
              attributes: { value: Object.freeze(r) },
              converter: { value: Object.freeze(e) },
            }
          );
        })(
          {
            read: function (t) {
              return (
                '"' === t[0] && (t = t.slice(1, -1)),
                t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
              );
            },
            write: function (t) {
              return encodeURIComponent(t).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent
              );
            },
          },
          { path: "/" }
        ),
        i = o,
        c = r(594),
        a = r.n(c);
      const u = "___TAGGING_GTM_SUITE--",
        s = {
          userId: `${u}userId`,
          sessionId: `${u}sessionId`,
          sessionCount: `${u}sessionCount`,
          lastCollectionPathname: `${u}lastCollectionPathname`,
          lastDlPushTimestamp: `${u}lastDlPushTimestamp`,
          userOnSignupPath: `${u}userOnSignupPath`,
          userLoggedIn: `${u}userLoggedIn`,
          cart: `${u}cart`,
          cookies: `${u}cookies`,
          params: `${u}params`,
        },
        d = "_sld_",
        l = "_sld_visitor_info",
        m = "_fbc",
        p = "_fbp",
        f = "_ga",
        v = "_ga_",
        y = "_gaexp",
        g = "_gid",
        h = "__utma",
        _ = "crto_is_user_optout",
        b = "crto_mapped_user_id",
        w = "ttclid",
        I = "_scid",
        S = "utm_source",
        C = "utm_medium",
        O = "utm_campaign",
        x = "utm_content",
        j = "utm_term",
        E = "gclid",
        P = "gclsrc",
        T = "fbclid",
        k = "ttclid",
        A = "irclickid",
        R = "sscid",
        q = "vlmcid",
        D = "gadid",
        F = "fbadid",
        L = "ttadid",
        N = "scadid",
        $ = "padid",
        U = "referrer",
        M = "user_id",
        V = "session_id",
        z = "session_count",
        J = "consent",
        B = (t) => null !== t,
        G = (t, e) => t.includes(e);
      var H = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let W;
      const X = new Uint8Array(16);
      function K() {
        if (
          !W &&
          ((W =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !W)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return W(X);
      }
      const Y = [];
      for (let t = 0; t < 256; ++t) Y.push((t + 256).toString(16).slice(1));
      function Q(t, e = 0) {
        return (
          Y[t[e + 0]] +
          Y[t[e + 1]] +
          Y[t[e + 2]] +
          Y[t[e + 3]] +
          "-" +
          Y[t[e + 4]] +
          Y[t[e + 5]] +
          "-" +
          Y[t[e + 6]] +
          Y[t[e + 7]] +
          "-" +
          Y[t[e + 8]] +
          Y[t[e + 9]] +
          "-" +
          Y[t[e + 10]] +
          Y[t[e + 11]] +
          Y[t[e + 12]] +
          Y[t[e + 13]] +
          Y[t[e + 14]] +
          Y[t[e + 15]]
        ).toLowerCase();
      }
      var Z = function (t, e, r) {
        if (H.randomUUID && !e && !t) return H.randomUUID();
        const n = (t = t || {}).random || (t.rng || K)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = n[t];
          return e;
        }
        return Q(n);
      };
      const tt = () => Z(),
        et = (t) => {
          try {
            switch (t.action) {
              case "GET":
                return localStorage.getItem(s[t.key]);
              case "SET":
                return localStorage.setItem(s[t.key], t.value);
              case "REMOVE":
                return localStorage.removeItem(s[t.key]);
            }
          } catch (t) {
            throw (
              (console.error(
                "Tagging Data Layer: There was a problem accessing `localStorage`, and we need this access for our data layer to function. This is likely because you are in private/incognito mode, as this usually prevents `localStorage` access."
              ),
              t)
            );
          }
        },
        rt = (t) => et({ action: "GET", key: t }),
        nt = (t, e) => et({ action: "SET", key: t, value: e }),
        ot = (t) => et({ action: "REMOVE", key: t }),
        it = () => {
          const t = rt("sessionCount");
          return null === t ? (ct("1"), "1") : t;
        },
        ct = (t) => {
          try {
            nt("sessionCount", t);
          } catch {
            return;
          }
        },
        at = () => String(Math.floor(Date.now() / 1e3)),
        ut = (t) => {
          try {
            nt("lastDlPushTimestamp", t);
          } catch {
            return;
          }
        },
        st = () => {
          const t = rt("sessionId");
          if (null === t) {
            const t = at();
            return dt(t), t;
          }
          if (
            ((e = (() => {
              const t = rt("lastDlPushTimestamp");
              if (null === t) {
                const t = at();
                return ut(t), t;
              }
              return t;
            })()),
            Number(e) + 1800 <= Math.floor(Date.now() / 1e3))
          ) {
            const t = at();
            return dt(t), ct(String(Number(it()) + 1)), t;
          }
          return t;
          var e;
        },
        dt = (t) => {
          try {
            nt("sessionId", t);
          } catch {
            return;
          }
        },
        lt = () => {
          const t = rt("userId");
          if (null === t) {
            const t = i.get("_shopify_y") ?? tt();
            return mt(t), t;
          }
          return t;
        },
        mt = (t) => {
          try {
            nt("userId", t);
          } catch {
            return;
          }
        },
        pt = () => {
          try {
            return rt("lastCollectionPathname") ?? "";
          } catch {
            return "";
          }
        },
        ft = (t) => {
          try {
            nt("lastCollectionPathname", t);
          } catch {
            return;
          }
        },
        vt = (t) => {
          t ? nt("userOnSignupPath", "true") : ot("userOnSignupPath");
        },
        yt = () => Boolean(rt("userLoggedIn")),
        gt = (t) => {
          t ? nt("userLoggedIn", "true") : ot("userLoggedIn");
        },
        ht = () => {
          const t = rt("cart");
          if (null === t) return [];
          return JSON.parse(t).map(({ image: t, ...e }) => ({
            ...e,
            image: "string" == typeof t || null === t ? t : t.url,
          }));
        },
        _t = (t) => {
          nt("cart", JSON.stringify(t));
        },
        bt = () => {
          const t = rt("cookies");
          return null !== t ? JSON.parse(t) : {};
        },
        wt = () => {
          const t = rt("params");
          return null !== t ? JSON.parse(t) : {};
        },
        It = (t) => {
          if (!t) return null;
          const e = async (t) => {
            const r = window.google_tag_data?.ics?.entries;
            return void 0 !== r && Object.keys(r).length > 0
              ? r
              : t > 10
              ? null
              : (await ((n = 2 ** t * 10),
                new Promise((t) => setTimeout(t, n))),
                e(t + 1));
            var n;
          };
          return e(1);
        },
        St = (t) => t.split(".").slice(0, 4).join("."),
        Ct = (t) =>
          Object.fromEntries(
            Object.entries(t).map(([t, e]) => {
              const r = t.includes(v) && e && e.split(".").length >= 4;
              return [t, r ? St(e) : e];
            })
          ),
        Ot = [m, p, f, y, g, w, _, b, h, I],
        xt = (t) => {
          const e = Ct(i.get()),
            r = ((t) => {
              const e = Object.keys(t).filter((t) => t.includes(v));
              return [...Ot, ...e];
            })(e),
            n = Ct(bt()),
            o = Ct(
              ((t, e) =>
                Object.fromEntries(
                  Object.entries(e)
                    .filter(([e]) => t.includes(e.replace(d, "")))
                    .map(([t, e]) => [t.replace(d, ""), e])
                ))(r, t.attributes ?? {})
            ),
            c = r
              .map((t) => {
                const r = e[t],
                  i = n[t],
                  c = o[t];
                return r !== i ? [t, r] : i !== c ? [t, i] : null;
              })
              .filter(B);
          var a;
          return (
            (a = { ...n, ...Object.fromEntries(c) }),
            nt("cookies", JSON.stringify(a)),
            Object.fromEntries(c.map(([t, e]) => [`${d}${t}`, e]))
          );
        },
        jt = [S, C, O, x, j, E],
        Et = [P, T, k, A, R, q, D, F, L, N, $],
        Pt = [U, M, V, z, J],
        Tt = [...jt, ...Et, ...Pt],
        kt = () => {
          if ("" !== document.referrer) {
            const t = new URL(document.referrer);
            return t.hostname === location.hostname ||
              t.hostname.includes("myshopify.com")
              ? {}
              : { referrer: document.referrer };
          }
          return {};
        },
        At = (t) => ({
          consent: Object.fromEntries(
            Object.entries(t).map(([t, e]) => [t, e.update ?? e.initial])
          ),
        }),
        Rt = () => {
          const t = new URLSearchParams(location.search),
            e = [...jt, ...Et]
              .filter((e) => t.has(e))
              .map((e) => [e, t.get(e)]);
          return Object.fromEntries(e);
        },
        qt = ({ stale: t, updated: e }) => {
          const r = t.filter(([t]) => G(jt, t)),
            n = Object.fromEntries(r),
            o = e.some(([t]) => G(jt, t)),
            i = e.some(([t, e]) => "referrer" === t && n[t] !== e);
          return Object.fromEntries(
            o
              ? [...t.filter(([t]) => !G(jt, t)), ...e].filter(
                  ([t]) => "referrer" !== t
                )
              : i
              ? [...t, ...e].filter(([t]) => !G(jt, t))
              : [...t, ...e]
          );
        },
        Dt = (t, e) => {
          const r = ((t) => {
              const e = Object.entries(t),
                r = l,
                n = e.find(([t]) => t === r);
              if (!n) return {};
              try {
                const t = n[1].replaceAll("&quot;", '"');
                return JSON.parse(t);
              } catch {
                return {};
              }
            })(t.attributes ?? {}),
            n = qt({
              stale: Object.entries(wt()),
              updated: Object.entries({
                ...Rt(),
                ...kt(),
                user_id: lt(),
                session_id: st(),
                session_count: it(),
                ...(e ? At(e) : {}),
              }),
            }),
            o = ([t]) => G(Tt, t),
            i = qt({
              stale: Object.entries(r).filter(o),
              updated: Object.entries(n).filter(o),
            });
          var c;
          (c = i), nt("params", JSON.stringify(c));
          return Object.entries(i).some(([t, e]) => {
            return (
              (n = e),
              (o = r[t] ?? null),
              !(JSON.stringify(n) === JSON.stringify(o))
            );
            var n, o;
          })
            ? { [l]: JSON.stringify(i) }
            : {};
        },
        Ft = async (t, e = !0, r = !1) => {
          const n = (r) => {
              const n = { ...xt(t), ...Dt(t, r) };
              e &&
                t.items.length > 0 &&
                Object.entries(n).length > 0 &&
                (async (t) => {
                  await fetch("/cart/update.js", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ attributes: t }),
                  });
                })(n);
            },
            o = await It(r);
          if ((n(o), o)) {
            const t = a()(() => n(o), 200);
            Object.keys(o).forEach((e) => {
              o[e] = new Proxy(o[e], {
                set(e, r, n, o) {
                  return "update" === r && t(), Reflect.set(e, r, n, o);
                },
              });
            });
          }
        };
      r(6728);
      const Lt = (t) => {
          window.dataLayer || (window.dataLayer = []);
          const e = {
            ...t,
            event_time: new Date().toISOString(),
            marketing: { ...bt(), ...wt(), ...t.marketing },
          };
          window.dataLayer.push(e), ut(at());
        },
        Nt = (t) => ({
          event: "sld_add_to_cart",
          event_id: t.eventId,
          ecommerce: {
            currencyCode: t.currencyCode,
            add: {
              actionField: { list: t.item.list },
              products: [
                {
                  id: t.item.id,
                  name: t.item.name,
                  brand: t.item.brand,
                  category: t.item.category,
                  variant: t.item.variant,
                  price: t.item.price,
                  quantity: t.item.quantity,
                  list: t.item.list,
                  product_id: t.item.productId,
                  variant_id: t.item.variantId,
                  ...(t.item.compareAtPrice
                    ? { compare_at_price: t.item.compareAtPrice }
                    : {}),
                  image: t.item.image,
                },
              ],
            },
          },
        }),
        $t = (t) => ({
          event: "sld_remove_from_cart",
          event_id: t.eventId,
          ecommerce: {
            currencyCode: t.currencyCode,
            remove: {
              actionField: { list: t.item.list },
              products: [
                {
                  id: t.item.id,
                  name: t.item.name,
                  brand: t.item.brand,
                  category: t.item.category,
                  variant: t.item.variant,
                  price: t.item.price,
                  quantity: t.item.quantity,
                  list: t.item.list,
                  product_id: t.item.productId,
                  variant_id: t.item.variantId,
                  image: t.item.image,
                },
              ],
            },
          },
        }),
        Ut = (t) => {
          const e = t.items,
            r = ht(),
            n = pt(),
            o = e.filter((t) => !r.some((e) => e.variantId === t.variantId)),
            i = r.filter((t) => !e.some((e) => e.variantId === t.variantId)),
            c = r
              .map((t) => {
                const r = e.find((e) => e.variantId === t.variantId);
                if (!r) return null;
                const n = Number(r.quantity),
                  o = Number(t.quantity);
                if (n === o) return null;
                if (n > o) {
                  const e = String(n - o);
                  return ["INCREASED", { ...t, quantity: e }];
                }
                {
                  const e = String(o - n);
                  return ["DECREASED", { ...t, quantity: e }];
                }
              })
              .filter(B),
            a = c.filter(([t, e]) => "INCREASED" === t).map(([t, e]) => e),
            u = c.filter(([t, e]) => "DECREASED" === t).map(([t, e]) => e);
          [...o, ...a].forEach((e) => {
            Lt(
              Nt({
                eventId: tt(),
                currencyCode: t.currencyCode,
                item: { list: n, ...e },
              })
            );
          }),
            [...i, ...u].forEach((e) => {
              Lt($t({ eventId: tt(), currencyCode: t.currencyCode, item: e }));
            });
          const s = [
            ...r
              .map((t) => {
                const r = e.find((e) => e.variantId === t.variantId);
                return r ? { ...t, quantity: r.quantity } : null;
              })
              .filter(B),
            ...o.map((t) => ({ ...t, list: n })),
          ];
          _t(s),
            (o.length > 0 || i.length > 0 || c.length > 0) &&
              Lt({
                ecommerce: {
                  cart_contents: {
                    products: s.map((t) => ({
                      id: t.id,
                      name: t.name,
                      brand: t.brand,
                      category: t.category,
                      variant: t.variant,
                      price: t.price,
                      quantity: t.quantity,
                      list: t.list,
                      product_id: t.productId,
                      variant_id: t.variantId,
                      compare_at_price: t.compareAtPrice,
                      image: t.image,
                    })),
                  },
                },
              });
        },
        Mt = (t) => {
          switch (t) {
            case "contact_information":
              return "1";
            case "shipping_method":
              return "2";
            case "payment_method":
              return "3";
          }
        },
        Vt = () => {
          const t = document.querySelectorAll('a[href*="/products/"]');
          return Array.from(t).map((t) => {
            const e = new URL(t.href, location.origin);
            return decodeURIComponent(e.pathname).split("/").reverse()[0];
          });
        },
        zt = window.fetch,
        Jt = async (t, e) => {
          const r = await zt("/cart.js"),
            n = await r.json();
          Ut({
            currencyCode: n.currency,
            items: n.items.map((t, e) => ({
              id: t.sku ?? String(t.id),
              name: t.product_title,
              brand: t.vendor,
              category: t.product_type,
              variant: t.variant_title,
              position: e,
              price: String(0.01 * t.price),
              quantity: String(t.quantity),
              productId: String(t.product_id),
              variantId: String(t.id),
              image: t.featured_image?.url ?? null,
            })),
          }),
            Ft({ attributes: n.attributes, items: ht() }, t, e);
        },
        Bt = ({ method: t, url: e }) => {
          const r = "POST" === t.toUpperCase(),
            n =
              e.toString().includes("/cart/add") ||
              e.toString().includes("/cart/update") ||
              e.toString().includes("/cart/change") ||
              e.toString().includes("/cart/clear");
          return r && n;
        },
        Gt = (e, r) => {
          window.fetch = async (...n) => {
            const o = await zt(...n);
            return (
              (async (t, e, r) => {
                const [n, o] = t,
                  i = o?.method ?? (n instanceof Request ? n.method : "GET"),
                  c =
                    n instanceof Request
                      ? n.url
                      : n instanceof URL
                      ? n.toString()
                      : n;
                Bt({ method: i, url: c }) && (await Jt(e, r));
              })(n, e, r).catch(t),
              o
            );
          };
        },
        Ht = (e, r) => {
          const n = window.XMLHttpRequest.prototype.open;
          window.XMLHttpRequest.prototype.open = function (...o) {
            const [i, c] = o;
            return (
              this.addEventListener("readystatechange", () => {
                this.readyState === this.DONE &&
                  (async ({ method: t, url: e }, r, n) => {
                    Bt({ method: t, url: e }) && (await Jt(r, n));
                  })({ method: i, url: c }, e, r).catch(t);
              }),
              n.apply(this, o)
            );
          };
        },
        Wt = {
          cartAttributesReconcile: Ft,
          cartItemsReconcile: Ut,
          cartView: (t) => {
            Lt(
              ((t) => ({
                event: "sld_view_cart",
                event_id: t.eventId,
                cart_total: t.cartTotal,
                ecommerce: {
                  currencyCode: t.currencyCode,
                  actionField: { list: "Shopping Cart" },
                  impressions: t.items.map((t) => ({
                    id: t.id,
                    name: t.name,
                    brand: t.brand,
                    category: t.category,
                    variant: t.variant,
                    price: t.price,
                    position: t.position,
                    product_id: t.productId,
                    variant_id: t.variantId,
                    quantity: t.quantity,
                  })),
                },
              }))({ ...t, eventId: tt() })
            );
          },
          checkoutComplete: (t) => {
            const e = window.Shopify?.Checkout?.page;
            if (e?.includes("thank_you")) {
              const e = ht();
              Lt(
                ((t) => {
                  const e = lt();
                  return t.customer
                    ? {
                        event_id: t.eventId,
                        user_properties: {
                          visitor_type: "logged_in",
                          customer_id: t.customer.id,
                          customer_email: t.customer.email,
                          customer_first_name: t.customer.firstName,
                          customer_last_name: t.customer.lastName,
                          customer_phone: t.customer.phone,
                          customer_city: t.customer.city,
                          customer_zip: t.customer.zip,
                          customer_address_1: t.customer.address1,
                          customer_address_2: t.customer.address2,
                          customer_country: t.customer.country,
                          customer_province: t.customer.province,
                          customer_province_code: t.customer.provinceCode,
                          customer_order_count: t.customer.orderCount,
                          customer_total_spent: t.customer.totalSpent,
                          customer_tags: t.customer.tags,
                          user_consent: "no",
                          user_id: e,
                        },
                      }
                    : {
                        event_id: t.eventId,
                        user_properties: {
                          visitor_type: "guest",
                          user_consent: "yes",
                          user_id: e,
                        },
                      };
                })({ eventId: tt(), customer: t.customer })
              ),
                Lt(
                  ((t) => ({
                    event: "sld_purchase",
                    event_id: t.eventId,
                    ecommerce: {
                      currencyCode: t.currencyCode,
                      purchase: {
                        actionField: {
                          id: t.actionField.id,
                          ...(t.actionField.order_name
                            ? { order_name: t.actionField.order_name }
                            : {}),
                          revenue: t.actionField.revenue,
                          tax: t.actionField.tax,
                          shipping: t.actionField.shipping,
                          affiliation: t.actionField.affiliation,
                          ...(t.actionField.coupon
                            ? { coupon: t.actionField.coupon }
                            : {}),
                          sub_total: t.actionField.subTotal,
                          product_sub_total: t.actionField.productSubTotal,
                          discount_amount: t.actionField.discountAmount,
                        },
                        products: t.items.map((t, e) => ({
                          id: t.id,
                          name: t.name,
                          brand: t.brand,
                          category: t.category,
                          variant: t.variant,
                          price: t.price,
                          quantity: t.quantity,
                          list: t.list,
                          position: String(e + 1),
                          product_id: t.productId,
                          variant_id: t.variantId,
                          image: t.image,
                        })),
                      },
                    },
                    marketing: { landing_site: t.landingSite },
                  }))({
                    eventId: tt(),
                    currencyCode: t.currencyCode,
                    actionField: t.actionField,
                    items: t.items.map((t) => ({
                      ...t,
                      list:
                        e.find((e) => e.variantId === t.variantId)?.list ?? "",
                    })),
                    landingSite: t.landingSite,
                  })
                ),
                _t([]),
                Lt({ ecommerce: { cart_contents: { products: [] } } });
            }
          },
          checkoutStep: (t) => {
            const e = window.Shopify?.Checkout?.step,
              r = window.Shopify?.Checkout?.token;
            if (
              ("contact_information" === e ||
                "shipping_method" === e ||
                "payment_method" === e) &&
              r
            ) {
              const n = ht();
              Lt(
                ((t) => {
                  const e = ((t) => {
                    switch (t) {
                      case "contact_information":
                        return "sld_begin_checkout";
                      case "shipping_method":
                        return "sld_add_shipping_info";
                      case "payment_method":
                        return "sld_add_payment_info";
                    }
                  })(t.step);
                  return {
                    event: e,
                    event_id: `${e}_${t.token}`,
                    ecommerce: {
                      currencyCode: t.currencyCode,
                      checkout: {
                        actionField: { step: Mt(t.step) },
                        products: t.items.map((t) => ({
                          id: t.id,
                          name: t.name,
                          brand: t.brand,
                          category: t.category,
                          variant: t.variant,
                          price: t.price,
                          quantity: t.quantity,
                          list: t.list,
                          product_id: t.productId,
                          variant_id: t.variantId,
                          image: t.image,
                        })),
                      },
                    },
                  };
                })({
                  token: r,
                  step: e,
                  currencyCode: t.currencyCode,
                  items: t.items.map((t) => {
                    const e = n.find((e) => e.variantId === t.variantId);
                    return { ...t, list: e?.list ?? "" };
                  }),
                })
              );
            }
          },
          collectionView: (t) => {
            const e = Vt(),
              r = decodeURIComponent(location.pathname),
              n = Array.from(
                new Map(t.items.map((t) => [t.productId, t])).values()
              ).filter((t) => e.includes(t.handle)),
              o = (n.length / t.items.length) * 100 < 10;
            ft(r),
              Lt(
                ((t) => ({
                  event: "sld_view_item_list",
                  event_id: t.eventId,
                  ecommerce: {
                    currencyCode: t.currencyCode,
                    impressions: t.items.map((e) => ({
                      id: e.id,
                      name: e.name,
                      brand: e.brand,
                      category: e.category,
                      price: e.price,
                      position: e.position,
                      list: t.collectionPathname,
                      product_id: e.productId,
                      variant_id: e.variantId,
                    })),
                  },
                }))({
                  eventId: tt(),
                  collectionPathname: r,
                  currencyCode: t.currencyCode,
                  items: o ? t.items : n,
                })
              );
          },
          productAddToCartAjax: (t = !0, e = !1) => {
            Gt(t, e), Ht(t, e);
          },
          productAddToCartForm: (t, e = !0, r = !1) => {
            const n = (n) => {
              const o = ht(),
                i = ((e) => {
                  const r = e.querySelector('select[name="id"]'),
                    n = e.querySelector('input[name="quantity"]');
                  return {
                    ...(r
                      ? t.items.find((t) => t.variantId === r.value) ??
                        t.defaultVariant ??
                        t.items[0]
                      : t.defaultVariant ?? t.items[0]),
                    quantity: n?.value ?? "1",
                  };
                })(n),
                c = pt();
              Lt(
                Nt({
                  eventId: tt(),
                  currencyCode: t.currencyCode,
                  item: { ...i, list: c },
                })
              );
              const a = [
                ...o.filter((t) => t.variantId !== i.variantId),
                { ...i, list: c },
              ];
              _t(a),
                Lt({
                  ecommerce: {
                    cart_contents: {
                      products: a.map((t) => ({
                        id: t.id,
                        name: t.name,
                        brand: t.brand,
                        category: t.category,
                        variant: t.variant,
                        price: t.price,
                        quantity: t.quantity,
                        list: t.list,
                        product_id: t.productId,
                        variant_id: t.variantId,
                        compare_at_price: t.compareAtPrice,
                        image: t.image,
                      })),
                    },
                  },
                }),
                Ft({ attributes: t.attributes, items: a }, e, r);
            };
            (() => {
              const t = document.querySelectorAll('form[action^="/cart/add"]'),
                e = Array.from(t),
                r = e.filter(
                  (t) => t.querySelectorAll('[id="name"]').length > 0
                );
              return r.length > 0 ? r : e;
            })().forEach((t) => {
              const e = t.querySelectorAll('[name="add"]'),
                r = () => n(t);
              e.length > 0
                ? e.forEach((t) => t.addEventListener("click", r))
                : t.addEventListener("submit", r);
            });
          },
          productRemoveFromCart: (t) => {
            let e = [];
            const r = () => {
              const r = Array.from(
                document.querySelectorAll('a[href*="quantity=0"]')
              );
              e.forEach(([t, e]) => {
                t.removeEventListener("click", e);
              }),
                (e = r.map((e) => [
                  e,
                  () =>
                    ((e) => {
                      const r = e.searchParams.get("line");
                      if (r) {
                        const e = Number(r) - 1,
                          n = t.items.find((t) => t.position === e);
                        if (n) {
                          const e = ht(),
                            r = e.find((t) => t.variantId === n.variantId);
                          Lt(
                            $t({
                              eventId: tt(),
                              currencyCode: t.currencyCode,
                              item: { ...n, list: r?.list ?? "" },
                            })
                          );
                          const o = e.filter(
                            (t) => t.variantId !== n.variantId
                          );
                          _t(o),
                            Lt({
                              ecommerce: {
                                cart_contents: {
                                  products: o.map((t) => ({
                                    id: t.id,
                                    name: t.name,
                                    brand: t.brand,
                                    category: t.category,
                                    variant: t.variant,
                                    price: t.price,
                                    quantity: t.quantity,
                                    list: t.list,
                                    product_id: t.productId,
                                    variant_id: t.variantId,
                                    compare_at_price: t.compareAtPrice,
                                    image: t.image,
                                  })),
                                },
                              },
                            });
                        }
                      }
                    })(new URL(e.href, location.origin)),
                ])),
                e.forEach(([t, e]) => {
                  t.addEventListener("click", e);
                });
            };
            r();
            const n = document.querySelector('form[action="/cart"]');
            if (n) {
              new MutationObserver(r).observe(n, {
                subtree: !0,
                childList: !0,
              });
            }
          },
          productSelect: (t) => {
            document.querySelectorAll('a[href*="/products/"]').forEach((e) => {
              e.addEventListener("click", () => {
                const r = new URL(e.href, location.origin),
                  n = decodeURIComponent(r.pathname).split("/").reverse()[0],
                  o = t.items.filter((t) => t.handle === n);
                if (o.length > 0) {
                  const e = r.searchParams.get("variant"),
                    n = o.find((t) => t.variantId === e) ?? o[0];
                  Lt(
                    ((t) => ({
                      event: "sld_select_item",
                      event_id: t.eventId,
                      ecommerce: {
                        currencyCode: t.currencyCode,
                        click: {
                          actionField: { list: t.collectionPathname },
                          products: [
                            {
                              id: t.item.id,
                              name: t.item.name,
                              brand: t.item.brand,
                              category: t.item.category,
                              price: t.item.price,
                              position: t.item.position,
                              list: t.collectionPathname,
                              product_id: t.item.productId,
                              variant_id: t.item.variantId,
                            },
                          ],
                        },
                      },
                    }))({
                      eventId: tt(),
                      collectionPathname: decodeURIComponent(location.pathname),
                      currencyCode: t.currencyCode,
                      item: n,
                    })
                  );
                }
              });
            });
          },
          productView: (t) => {
            let e = null;
            setInterval(() => {
              const r = (() => {
                const e = document.querySelector(
                  'form[action^="/cart/add"] select[name="id"]'
                );
                if (e) {
                  const r = e.value;
                  return (
                    t.items.find((t) => t.variantId === r) ??
                    t.defaultVariant ??
                    t.items[0]
                  );
                }
                return t.defaultVariant ?? t.items[0];
              })();
              r.variantId !== e &&
                ((e = r.variantId),
                Lt(
                  ((t) => ({
                    event: "sld_view_item",
                    event_id: t.eventId,
                    ecommerce: {
                      currencyCode: t.currencyCode,
                      detail: {
                        actionField: { list: t.item.list },
                        products: [
                          {
                            id: t.item.id,
                            name: t.item.name,
                            brand: t.item.brand,
                            category: t.item.category,
                            variant: t.item.variant,
                            price: t.item.price,
                            list: t.item.list,
                            product_id: t.item.productId,
                            variant_id: t.item.variantId,
                            compare_at_price: t.item.compareAtPrice,
                            image: t.item.image,
                            inventory: t.item.inventory,
                          },
                        ],
                      },
                    },
                  }))({
                    eventId: tt(),
                    currencyCode: t.currencyCode,
                    item: { ...r, list: pt() },
                  })
                ));
            }, 500);
          },
          searchResultsView: (t) => {
            const e = Vt(),
              r = decodeURIComponent(location.pathname),
              n = Array.from(
                new Map(t.items.map((t) => [t.productId, t])).values()
              ).filter((t) => e.includes(t.handle));
            ft(r),
              Lt(
                ((t) => ({
                  event: "sld_view_search_results",
                  event_id: t.eventId,
                  ecommerce: {
                    currencyCode: t.currencyCode,
                    actionField: { list: "search results" },
                    impressions: t.items.map((e) => ({
                      id: e.id,
                      name: e.name,
                      brand: e.brand,
                      category: e.category,
                      price: e.price,
                      position: e.position,
                      list: t.collectionPathname,
                      product_id: e.productId,
                      variant_id: e.variantId,
                    })),
                  },
                }))({
                  eventId: tt(),
                  collectionPathname: r,
                  currencyCode: t.currencyCode,
                  items: n,
                })
              );
          },
          storeOrderNotesOffsite: (t) => {
            const e = Object.entries(bt())
                .filter((t) => void 0 !== t[1])
                .map(([t, e]) => ({ name: `${d}${t}`, value: e })),
              r = { name: l, value: JSON.stringify(wt()) };
            Lt({
              _tagging_internal:
                "checkoutId" in t
                  ? {
                      orderNotes: {
                        checkoutId: t.checkoutId,
                        noteAttributes: [...e, r],
                      },
                    }
                  : {
                      orderNotesV2: {
                        event_name: "sld_begin_checkout",
                        event: {
                          context: {
                            document_location: document.location.toString(),
                            document_title: document.title,
                            referrer: document.referrer,
                          },
                          event_data: t,
                          event_time: new Date().toISOString(),
                          note_attributes: [...e, r],
                        },
                      },
                    },
            });
          },
          user: (t) => {
            const e = new URL(location.href),
              r = window.Shopify?.customerPrivacy?.getTrackingConsent() ?? "",
              n = lt(),
              o = st(),
              i = it(),
              c = ht();
            t.customer
              ? (Boolean(rt("userOnSignupPath")) &&
                  "/" === e.pathname &&
                  Lt(
                    ((t) => {
                      const e = lt(),
                        r = st(),
                        n = it();
                      return {
                        event: "sld_sign_up",
                        event_id: t.eventId,
                        user_properties: {
                          visitor_type: "logged_in",
                          customer_id: t.customer.id,
                          customer_email: t.customer.email,
                          customer_order_count: t.customer.orderCount,
                          customer_total_spent: t.customer.totalSpent,
                          user_consent: t.userConsent,
                          user_id: e,
                          session_id: r,
                          session_count: n,
                        },
                      };
                    })({ eventId: tt(), customer: t.customer, userConsent: r })
                  ),
                vt(!1),
                yt() ||
                  (gt(!0),
                  Lt(
                    ((t) => {
                      const e = lt(),
                        r = st(),
                        n = it();
                      return {
                        event: "sld_login",
                        event_id: t.eventId,
                        user_properties: {
                          visitor_type: "logged_in",
                          customer_id: t.customer.id,
                          customer_email: t.customer.email,
                          customer_order_count: t.customer.orderCount,
                          customer_total_spent: t.customer.totalSpent,
                          user_id: e,
                          session_id: r,
                          session_count: n,
                        },
                      };
                    })({ eventId: tt(), customer: t.customer })
                  )),
                Lt(
                  ((t) => ({
                    event: "sld_user_data",
                    event_id: t.eventId,
                    cart_total: t.cartTotal,
                    device: {
                      screen_resolution: `${window.screen.width}x${window.screen.height}`,
                      viewport_size: `${document.body.clientWidth}x${document.body.clientHeight}`,
                      encoding: document.characterSet,
                      language: navigator.language,
                      colors: `${screen.colorDepth}-bit`,
                    },
                    page: { title: document.title },
                    user_properties: {
                      visitor_type: "logged_in",
                      customer_id: t.customer.id,
                      customer_email: t.customer.email,
                      customer_first_name: t.customer.firstName,
                      customer_last_name: t.customer.lastName,
                      customer_phone: t.customer.phone,
                      customer_city: t.customer.city,
                      customer_zip: t.customer.zip,
                      customer_address_1: t.customer.address1,
                      customer_address_2: t.customer.address2,
                      customer_country: t.customer.country,
                      customer_province: t.customer.province,
                      customer_province_code: t.customer.provinceCode,
                      customer_order_count: t.customer.orderCount,
                      customer_total_spent: t.customer.totalSpent,
                      customer_tags: t.customer.tags,
                      user_consent: t.userConsent,
                      user_id: t.userId,
                      session_id: t.sessionId,
                      session_count: t.sessionCount,
                    },
                    ecommerce: {
                      currencyCode: t.currencyCode,
                      cart_contents: {
                        products: t.cart.map((t) => ({
                          id: t.id,
                          name: t.name,
                          brand: t.brand,
                          category: t.category,
                          variant: t.variant,
                          price: t.price,
                          quantity: t.quantity,
                          list: t.list,
                          product_id: t.productId,
                          variant_id: t.variantId,
                          compare_at_price: t.compareAtPrice,
                          image: t.image,
                        })),
                      },
                    },
                  }))({
                    eventId: tt(),
                    cartTotal: t.cartTotal,
                    currencyCode: t.currencyCode,
                    customer: t.customer,
                    userConsent: r,
                    userId: n,
                    sessionId: o,
                    sessionCount: i,
                    cart: c,
                  })
                ))
              : (yt() && gt(!1),
                Lt(
                  ((t) => ({
                    event: "sld_user_data",
                    event_id: t.eventId,
                    cart_total: t.cartTotal,
                    device: {
                      screen_resolution: `${window.screen.width}x${window.screen.height}`,
                      viewport_size: `${document.body.clientWidth}x${document.body.clientHeight}`,
                      encoding: document.characterSet,
                      language: navigator.language,
                      colors: `${screen.colorDepth}-bit`,
                    },
                    page: { title: document.title },
                    user_properties: {
                      visitor_type: "guest",
                      user_consent: t.userConsent,
                      user_id: t.userId,
                      session_id: t.sessionId,
                      session_count: t.sessionCount,
                    },
                    ecommerce: {
                      currencyCode: t.currencyCode,
                      cart_contents: {
                        products: t.cart.map((t) => ({
                          id: t.id,
                          name: t.name,
                          brand: t.brand,
                          category: t.category,
                          variant: t.variant,
                          price: t.price,
                          quantity: t.quantity,
                          list: t.list,
                          product_id: t.productId,
                          variant_id: t.variantId,
                          compare_at_price: t.compareAtPrice,
                          image: t.image,
                        })),
                      },
                    },
                  }))({
                    eventId: tt(),
                    cartTotal: t.cartTotal,
                    currencyCode: t.currencyCode,
                    userConsent: r,
                    userId: n,
                    sessionId: o,
                    sessionCount: i,
                    cart: c,
                  })
                ),
                "/account/register" === e.pathname
                  ? vt(!0)
                  : "/challenge" !== e.pathname && vt(!1));
          },
        },
        Xt = { pushToDataLayer: Lt },
        Kt = {
          handlers: {
            cartAttributesReconcile:
              ((Yt = Wt.cartAttributesReconcile),
              async (...e) => {
                try {
                  await Yt(...e);
                } catch (e) {
                  t(e);
                }
              }),
            cartItemsReconcile: e(Wt.cartItemsReconcile),
            cartView: e(Wt.cartView),
            checkoutComplete: e(Wt.checkoutComplete),
            checkoutStep: e(Wt.checkoutStep),
            collectionView: e(Wt.collectionView),
            productAddToCartAjax: e(Wt.productAddToCartAjax),
            productAddToCartForm: e(Wt.productAddToCartForm),
            productRemoveFromCart: e(Wt.productRemoveFromCart),
            productSelect: e(Wt.productSelect),
            productView: e(Wt.productView),
            searchResultsView: e(Wt.searchResultsView),
            storeOrderNotesOffsite: e(Wt.storeOrderNotesOffsite),
            user: e(Wt.user),
          },
          utils: { pushToDataLayer: e(Xt.pushToDataLayer) },
        };
      var Yt;
      window.TaggingGtmSuite = Kt;
    })();
})();
