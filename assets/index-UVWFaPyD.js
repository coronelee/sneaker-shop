(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const r of l.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = s(i);
    fetch(i.href, l);
  }
})();
/**
 * @vue/shared v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Es(e, t) {
  const s = new Set(e.split(","));
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n);
}
const V = {},
  Ze = [],
  fe = () => {},
  ji = () => !1,
  Dt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Is = (e) => e.startsWith("onUpdate:"),
  ee = Object.assign,
  Os = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  Si = Object.prototype.hasOwnProperty,
  S = (e, t) => Si.call(e, t),
  A = Array.isArray,
  et = (e) => Vt(e) === "[object Map]",
  jn = (e) => Vt(e) === "[object Set]",
  T = (e) => typeof e == "function",
  W = (e) => typeof e == "string",
  lt = (e) => typeof e == "symbol",
  z = (e) => e !== null && typeof e == "object",
  Sn = (e) => (z(e) || T(e)) && T(e.then) && T(e.catch),
  Pn = Object.prototype.toString,
  Vt = (e) => Pn.call(e),
  Pi = (e) => Vt(e).slice(8, -1),
  Bn = (e) => Vt(e) === "[object Object]",
  As = (e) => W(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ft = Es(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Kt = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  Bi = /-(\w)/g,
  $e = Kt((e) => e.replace(Bi, (t, s) => (s ? s.toUpperCase() : ""))),
  Mi = /\B([A-Z])/g,
  rt = Kt((e) => e.replace(Mi, "-$1").toLowerCase()),
  zt = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  is = Kt((e) => (e ? `on${zt(e)}` : "")),
  Re = (e, t) => !Object.is(e, t),
  ls = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t);
  },
  kt = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s });
  },
  Ri = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Qs;
const Mn = () =>
  Qs ||
  (Qs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Ts(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        i = W(n) ? Hi(n) : Ts(n);
      if (i) for (const l in i) t[l] = i[l];
    }
    return t;
  } else if (W(e) || z(e)) return e;
}
const ki = /;(?![^(]*\))/g,
  Li = /:([^]+)/,
  Ni = /\/\*[^]*?\*\//g;
function Hi(e) {
  const t = {};
  return (
    e
      .replace(Ni, "")
      .split(ki)
      .forEach((s) => {
        if (s) {
          const n = s.split(Li);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function js(e) {
  let t = "";
  if (W(e)) t = e;
  else if (A(e))
    for (let s = 0; s < e.length; s++) {
      const n = js(e[s]);
      n && (t += n + " ");
    }
  else if (z(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const Ui =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Di = Es(Ui);
function Rn(e) {
  return !!e || e === "";
}
const Ce = (e) =>
    W(e)
      ? e
      : e == null
        ? ""
        : A(e) || (z(e) && (e.toString === Pn || !T(e.toString)))
          ? JSON.stringify(e, kn, 2)
          : String(e),
  kn = (e, t) =>
    t && t.__v_isRef
      ? kn(e, t.value)
      : et(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [n, i], l) => ((s[rs(n, l) + " =>"] = i), s),
              {}
            ),
          }
        : jn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => rs(s)) }
          : lt(t)
            ? rs(t)
            : z(t) && !A(t) && !Bn(t)
              ? String(t)
              : t,
  rs = (e, t = "") => {
    var s;
    return lt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let pe;
class Vi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = pe),
      !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = pe;
      try {
        return (pe = this), t();
      } finally {
        pe = s;
      }
    }
  }
  on() {
    pe = this;
  }
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ki(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function zi() {
  return pe;
}
let Ve;
class Ss {
  constructor(t, s, n, i) {
    (this.fn = t),
      (this.trigger = s),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Ki(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), We();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Wi(s.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), qe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Be,
      s = Ve;
    try {
      return (Be = !0), (Ve = this), this._runnings++, Zs(this), this.fn();
    } finally {
      en(this), this._runnings--, (Ve = s), (Be = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Zs(this),
      en(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function Wi(e) {
  return e.value;
}
function Zs(e) {
  e._trackId++, (e._depsLength = 0);
}
function en(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ln(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ln(e, t) {
  const s = e.get(t);
  s !== void 0 &&
    t._trackId !== s &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Be = !0,
  ps = 0;
const Nn = [];
function We() {
  Nn.push(Be), (Be = !1);
}
function qe() {
  const e = Nn.pop();
  Be = e === void 0 ? !0 : e;
}
function Ps() {
  ps++;
}
function Bs() {
  for (ps--; !ps && hs.length; ) hs.shift()();
}
function Hn(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Ln(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const hs = [];
function Un(e, t, s) {
  Ps();
  for (const n of e.keys()) {
    let i;
    n._dirtyLevel < t &&
      (i ?? (i = e.get(n) === n._trackId)) &&
      (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0),
      (n._dirtyLevel = t)),
      n._shouldSchedule &&
        (i ?? (i = e.get(n) === n._trackId)) &&
        (n.trigger(),
        (!n._runnings || n.allowRecurse) &&
          n._dirtyLevel !== 2 &&
          ((n._shouldSchedule = !1), n.scheduler && hs.push(n.scheduler)));
  }
  Bs();
}
const Dn = (e, t) => {
    const s = new Map();
    return (s.cleanup = e), (s.computed = t), s;
  },
  gs = new WeakMap(),
  Ke = Symbol(""),
  ms = Symbol("");
function le(e, t, s) {
  if (Be && Ve) {
    let n = gs.get(e);
    n || gs.set(e, (n = new Map()));
    let i = n.get(s);
    i || n.set(s, (i = Dn(() => n.delete(s)))), Hn(Ve, i);
  }
}
function Oe(e, t, s, n, i, l) {
  const r = gs.get(e);
  if (!r) return;
  let c = [];
  if (t === "clear") c = [...r.values()];
  else if (s === "length" && A(e)) {
    const a = Number(n);
    r.forEach((d, p) => {
      (p === "length" || (!lt(p) && p >= a)) && c.push(d);
    });
  } else
    switch ((s !== void 0 && c.push(r.get(s)), t)) {
      case "add":
        A(e)
          ? As(s) && c.push(r.get("length"))
          : (c.push(r.get(Ke)), et(e) && c.push(r.get(ms)));
        break;
      case "delete":
        A(e) || (c.push(r.get(Ke)), et(e) && c.push(r.get(ms)));
        break;
      case "set":
        et(e) && c.push(r.get(Ke));
        break;
    }
  Ps();
  for (const a of c) a && Un(a, 4);
  Bs();
}
const qi = Es("__proto__,__v_isRef,__isVue"),
  Vn = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(lt)
  ),
  tn = Gi();
function Gi() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...s) {
        const n = M(this);
        for (let l = 0, r = this.length; l < r; l++) le(n, "get", l + "");
        const i = n[t](...s);
        return i === -1 || i === !1 ? n[t](...s.map(M)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...s) {
        We(), Ps();
        const n = M(this)[t].apply(this, s);
        return Bs(), qe(), n;
      };
    }),
    e
  );
}
function Ji(e) {
  const t = M(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class Kn {
  constructor(t = !1, s = !1) {
    (this._isReadonly = t), (this._shallow = s);
  }
  get(t, s, n) {
    const i = this._isReadonly,
      l = this._shallow;
    if (s === "__v_isReactive") return !i;
    if (s === "__v_isReadonly") return i;
    if (s === "__v_isShallow") return l;
    if (s === "__v_raw")
      return n === (i ? (l ? cl : Gn) : l ? qn : Wn).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const r = A(t);
    if (!i) {
      if (r && S(tn, s)) return Reflect.get(tn, s, n);
      if (s === "hasOwnProperty") return Ji;
    }
    const c = Reflect.get(t, s, n);
    return (lt(s) ? Vn.has(s) : qi(s)) || (i || le(t, "get", s), l)
      ? c
      : re(c)
        ? r && As(s)
          ? c
          : c.value
        : z(c)
          ? i
            ? Jn(c)
            : ks(c)
          : c;
  }
}
class zn extends Kn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let l = t[s];
    if (!this._shallow) {
      const a = nt(l);
      if (
        (!Lt(n) && !nt(n) && ((l = M(l)), (n = M(n))), !A(t) && re(l) && !re(n))
      )
        return a ? !1 : ((l.value = n), !0);
    }
    const r = A(t) && As(s) ? Number(s) < t.length : S(t, s),
      c = Reflect.set(t, s, n, i);
    return (
      t === M(i) && (r ? Re(n, l) && Oe(t, "set", s, n) : Oe(t, "add", s, n)), c
    );
  }
  deleteProperty(t, s) {
    const n = S(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Oe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!lt(s) || !Vn.has(s)) && le(t, "has", s), n;
  }
  ownKeys(t) {
    return le(t, "iterate", A(t) ? "length" : Ke), Reflect.ownKeys(t);
  }
}
class Yi extends Kn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Xi = new zn(),
  Qi = new Yi(),
  Zi = new zn(!0),
  Ms = (e) => e,
  Wt = (e) => Reflect.getPrototypeOf(e);
function $t(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const i = M(e),
    l = M(t);
  s || (Re(t, l) && le(i, "get", t), le(i, "get", l));
  const { has: r } = Wt(i),
    c = n ? Ms : s ? Ns : gt;
  if (r.call(i, t)) return c(e.get(t));
  if (r.call(i, l)) return c(e.get(l));
  e !== i && e.get(t);
}
function Et(e, t = !1) {
  const s = this.__v_raw,
    n = M(s),
    i = M(e);
  return (
    t || (Re(e, i) && le(n, "has", e), le(n, "has", i)),
    e === i ? s.has(e) : s.has(e) || s.has(i)
  );
}
function It(e, t = !1) {
  return (
    (e = e.__v_raw), !t && le(M(e), "iterate", Ke), Reflect.get(e, "size", e)
  );
}
function sn(e) {
  e = M(e);
  const t = M(this);
  return Wt(t).has.call(t, e) || (t.add(e), Oe(t, "add", e, e)), this;
}
function nn(e, t) {
  t = M(t);
  const s = M(this),
    { has: n, get: i } = Wt(s);
  let l = n.call(s, e);
  l || ((e = M(e)), (l = n.call(s, e)));
  const r = i.call(s, e);
  return (
    s.set(e, t), l ? Re(t, r) && Oe(s, "set", e, t) : Oe(s, "add", e, t), this
  );
}
function ln(e) {
  const t = M(this),
    { has: s, get: n } = Wt(t);
  let i = s.call(t, e);
  i || ((e = M(e)), (i = s.call(t, e))), n && n.call(t, e);
  const l = t.delete(e);
  return i && Oe(t, "delete", e, void 0), l;
}
function rn() {
  const e = M(this),
    t = e.size !== 0,
    s = e.clear();
  return t && Oe(e, "clear", void 0, void 0), s;
}
function Ot(e, t) {
  return function (n, i) {
    const l = this,
      r = l.__v_raw,
      c = M(r),
      a = t ? Ms : e ? Ns : gt;
    return (
      !e && le(c, "iterate", Ke), r.forEach((d, p) => n.call(i, a(d), a(p), l))
    );
  };
}
function At(e, t, s) {
  return function (...n) {
    const i = this.__v_raw,
      l = M(i),
      r = et(l),
      c = e === "entries" || (e === Symbol.iterator && r),
      a = e === "keys" && r,
      d = i[e](...n),
      p = s ? Ms : t ? Ns : gt;
    return (
      !t && le(l, "iterate", a ? ms : Ke),
      {
        next() {
          const { value: x, done: F } = d.next();
          return F
            ? { value: x, done: F }
            : { value: c ? [p(x[0]), p(x[1])] : p(x), done: F };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Te(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function el() {
  const e = {
      get(l) {
        return $t(this, l);
      },
      get size() {
        return It(this);
      },
      has: Et,
      add: sn,
      set: nn,
      delete: ln,
      clear: rn,
      forEach: Ot(!1, !1),
    },
    t = {
      get(l) {
        return $t(this, l, !1, !0);
      },
      get size() {
        return It(this);
      },
      has: Et,
      add: sn,
      set: nn,
      delete: ln,
      clear: rn,
      forEach: Ot(!1, !0),
    },
    s = {
      get(l) {
        return $t(this, l, !0);
      },
      get size() {
        return It(this, !0);
      },
      has(l) {
        return Et.call(this, l, !0);
      },
      add: Te("add"),
      set: Te("set"),
      delete: Te("delete"),
      clear: Te("clear"),
      forEach: Ot(!0, !1),
    },
    n = {
      get(l) {
        return $t(this, l, !0, !0);
      },
      get size() {
        return It(this, !0);
      },
      has(l) {
        return Et.call(this, l, !0);
      },
      add: Te("add"),
      set: Te("set"),
      delete: Te("delete"),
      clear: Te("clear"),
      forEach: Ot(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      (e[l] = At(l, !1, !1)),
        (s[l] = At(l, !0, !1)),
        (t[l] = At(l, !1, !0)),
        (n[l] = At(l, !0, !0));
    }),
    [e, s, t, n]
  );
}
const [tl, sl, nl, il] = el();
function Rs(e, t) {
  const s = t ? (e ? il : nl) : e ? sl : tl;
  return (n, i, l) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? n
          : Reflect.get(S(s, i) && i in n ? s : n, i, l);
}
const ll = { get: Rs(!1, !1) },
  rl = { get: Rs(!1, !0) },
  ol = { get: Rs(!0, !1) },
  Wn = new WeakMap(),
  qn = new WeakMap(),
  Gn = new WeakMap(),
  cl = new WeakMap();
function ul(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function al(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ul(Pi(e));
}
function ks(e) {
  return nt(e) ? e : Ls(e, !1, Xi, ll, Wn);
}
function fl(e) {
  return Ls(e, !1, Zi, rl, qn);
}
function Jn(e) {
  return Ls(e, !0, Qi, ol, Gn);
}
function Ls(e, t, s, n, i) {
  if (!z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const l = i.get(e);
  if (l) return l;
  const r = al(e);
  if (r === 0) return e;
  const c = new Proxy(e, r === 2 ? n : s);
  return i.set(e, c), c;
}
function tt(e) {
  return nt(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Lt(e) {
  return !!(e && e.__v_isShallow);
}
function Yn(e) {
  return tt(e) || nt(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Xn(e) {
  return Object.isExtensible(e) && kt(e, "__v_skip", !0), e;
}
const gt = (e) => (z(e) ? ks(e) : e),
  Ns = (e) => (z(e) ? Jn(e) : e);
class Qn {
  constructor(t, s, n, i) {
    (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ss(
        () => t(this._value),
        () => jt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = n);
  }
  get value() {
    const t = M(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Re(t._value, (t._value = t.effect.run())) &&
        jt(t, 4),
      Zn(t),
      t.effect._dirtyLevel >= 2 && jt(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function dl(e, t, s = !1) {
  let n, i;
  const l = T(e);
  return (
    l ? ((n = e), (i = fe)) : ((n = e.get), (i = e.set)),
    new Qn(n, i, l || !i, s)
  );
}
function Zn(e) {
  var t;
  Be &&
    Ve &&
    ((e = M(e)),
    Hn(
      Ve,
      (t = e.dep) != null
        ? t
        : (e.dep = Dn(() => (e.dep = void 0), e instanceof Qn ? e : void 0))
    ));
}
function jt(e, t = 4, s) {
  e = M(e);
  const n = e.dep;
  n && Un(n, t);
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return pl(e, !1);
}
function pl(e, t) {
  return re(e) ? e : new hl(e, t);
}
class hl {
  constructor(t, s) {
    (this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : M(t)),
      (this._value = s ? t : gt(t));
  }
  get value() {
    return Zn(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Lt(t) || nt(t);
    (t = s ? t : M(t)),
      Re(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = s ? t : gt(t)), jt(this, 4));
  }
}
function gl(e) {
  return re(e) ? e.value : e;
}
const ml = {
  get: (e, t, s) => gl(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return re(i) && !re(s) ? ((i.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function ei(e) {
  return tt(e) ? e : new Proxy(e, ml);
}
/**
 * @vue/runtime-core v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Me(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    qt(i, t, s);
  }
}
function me(e, t, s, n) {
  if (T(e)) {
    const l = Me(e, t, s, n);
    return (
      l &&
        Sn(l) &&
        l.catch((r) => {
          qt(r, t, s);
        }),
      l
    );
  }
  const i = [];
  for (let l = 0; l < e.length; l++) i.push(me(e[l], t, s, n));
  return i;
}
function qt(e, t, s, n = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const r = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let p = 0; p < d.length; p++) if (d[p](e, r, c) === !1) return;
      }
      l = l.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Me(a, null, 10, [e, r, c]);
      return;
    }
  }
  _l(e, s, i, n);
}
function _l(e, t, s, n = !0) {
  console.error(e);
}
let mt = !1,
  _s = !1;
const Q = [];
let Fe = 0;
const st = [];
let je = null,
  De = 0;
const ti = Promise.resolve();
let Hs = null;
function xl(e) {
  const t = Hs || ti;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vl(e) {
  let t = Fe + 1,
    s = Q.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      i = Q[n],
      l = _t(i);
    l < e || (l === e && i.pre) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Us(e) {
  (!Q.length || !Q.includes(e, mt && e.allowRecurse ? Fe + 1 : Fe)) &&
    (e.id == null ? Q.push(e) : Q.splice(vl(e.id), 0, e), si());
}
function si() {
  !mt && !_s && ((_s = !0), (Hs = ti.then(ii)));
}
function bl(e) {
  const t = Q.indexOf(e);
  t > Fe && Q.splice(t, 1);
}
function yl(e) {
  A(e)
    ? st.push(...e)
    : (!je || !je.includes(e, e.allowRecurse ? De + 1 : De)) && st.push(e),
    si();
}
function on(e, t, s = mt ? Fe + 1 : 0) {
  for (; s < Q.length; s++) {
    const n = Q[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue;
      Q.splice(s, 1), s--, n();
    }
  }
}
function ni(e) {
  if (st.length) {
    const t = [...new Set(st)].sort((s, n) => _t(s) - _t(n));
    if (((st.length = 0), je)) {
      je.push(...t);
      return;
    }
    for (je = t, De = 0; De < je.length; De++) je[De]();
    (je = null), (De = 0);
  }
}
const _t = (e) => (e.id == null ? 1 / 0 : e.id),
  wl = (e, t) => {
    const s = _t(e) - _t(t);
    if (s === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return s;
  };
function ii(e) {
  (_s = !1), (mt = !0), Q.sort(wl);
  try {
    for (Fe = 0; Fe < Q.length; Fe++) {
      const t = Q[Fe];
      t && t.active !== !1 && Me(t, null, 14);
    }
  } finally {
    (Fe = 0),
      (Q.length = 0),
      ni(),
      (mt = !1),
      (Hs = null),
      (Q.length || st.length) && ii();
  }
}
function Fl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || V;
  let i = s;
  const l = t.startsWith("update:"),
    r = l && t.slice(7);
  if (r && r in n) {
    const p = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: x, trim: F } = n[p] || V;
    F && (i = s.map(($) => (W($) ? $.trim() : $))), x && (i = s.map(Ri));
  }
  let c,
    a = n[(c = is(t))] || n[(c = is($e(t)))];
  !a && l && (a = n[(c = is(rt(t)))]), a && me(a, e, 6, i);
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), me(d, e, 6, i);
  }
}
function li(e, t, s = !1) {
  const n = t.emitsCache,
    i = n.get(e);
  if (i !== void 0) return i;
  const l = e.emits;
  let r = {},
    c = !1;
  if (!T(e)) {
    const a = (d) => {
      const p = li(d, t, !0);
      p && ((c = !0), ee(r, p));
    };
    !s && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !l && !c
    ? (z(e) && n.set(e, null), null)
    : (A(l) ? l.forEach((a) => (r[a] = null)) : ee(r, l),
      z(e) && n.set(e, r),
      r);
}
function Gt(e, t) {
  return !e || !Dt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      S(e, t[0].toLowerCase() + t.slice(1)) || S(e, rt(t)) || S(e, t));
}
let he = null,
  ri = null;
function Nt(e) {
  const t = he;
  return (he = e), (ri = (e && e.type.__scopeId) || null), t;
}
function Cl(e, t = he, s) {
  if (!t || e._n) return e;
  const n = (...i) => {
    n._d && xn(-1);
    const l = Nt(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Nt(l), n._d && xn(1);
    }
    return r;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function os(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    props: l,
    propsOptions: [r],
    slots: c,
    attrs: a,
    emit: d,
    render: p,
    renderCache: x,
    data: F,
    setupState: $,
    ctx: U,
    inheritAttrs: k,
  } = e;
  let J, q;
  const _e = Nt(e);
  try {
    if (s.shapeFlag & 4) {
      const Y = i || n,
        ae = Y;
      (J = we(p.call(ae, Y, x, l, $, F, U))), (q = a);
    } else {
      const Y = t;
      (J = we(
        Y.length > 1 ? Y(l, { attrs: a, slots: c, emit: d }) : Y(l, null)
      )),
        (q = t.props ? a : $l(a));
    }
  } catch (Y) {
    (ht.length = 0), qt(Y, e, 1), (J = G(ze));
  }
  let N = J;
  if (q && k !== !1) {
    const Y = Object.keys(q),
      { shapeFlag: ae } = N;
    Y.length && ae & 7 && (r && Y.some(Is) && (q = El(q, r)), (N = it(N, q)));
  }
  return (
    s.dirs && ((N = it(N)), (N.dirs = N.dirs ? N.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (N.transition = s.transition),
    (J = N),
    Nt(_e),
    J
  );
}
const $l = (e) => {
    let t;
    for (const s in e)
      (s === "class" || s === "style" || Dt(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  El = (e, t) => {
    const s = {};
    for (const n in e) (!Is(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function Il(e, t, s) {
  const { props: n, children: i, component: l } = e,
    { props: r, children: c, patchFlag: a } = t,
    d = l.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return n ? cn(n, r, d) : !!r;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        const F = p[x];
        if (r[F] !== n[F] && !Gt(d, F)) return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable)
      ? !0
      : n === r
        ? !1
        : n
          ? r
            ? cn(n, r, d)
            : !0
          : !!r;
  return !1;
}
function cn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < n.length; i++) {
    const l = n[i];
    if (t[l] !== e[l] && !Gt(s, l)) return !0;
  }
  return !1;
}
function Ol({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent);
    else break;
  }
}
const oi = "components",
  ci = Symbol.for("v-ndc");
function Al(e) {
  return W(e) ? Tl(oi, e, !1) || e : e || ci;
}
function Tl(e, t, s = !0, n = !1) {
  const i = he || Z;
  if (i) {
    const l = i.type;
    if (e === oi) {
      const c = Cr(l, !1);
      if (c && (c === t || c === $e(t) || c === zt($e(t)))) return l;
    }
    const r = un(i[e] || l[e], t) || un(i.appContext[e], t);
    return !r && n ? l : r;
  }
}
function un(e, t) {
  return e && (e[t] || e[$e(t)] || e[zt($e(t))]);
}
const jl = (e) => e.__isSuspense;
function Sl(e, t) {
  t && t.pendingBranch
    ? A(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : yl(e);
}
const Pl = Symbol.for("v-scx"),
  Bl = () => Pt(Pl),
  Tt = {};
function cs(e, t, s) {
  return ui(e, t, s);
}
function ui(
  e,
  t,
  { immediate: s, deep: n, flush: i, once: l, onTrack: r, onTrigger: c } = V
) {
  if (t && l) {
    const B = t;
    t = (...Ee) => {
      B(...Ee), ae();
    };
  }
  const a = Z,
    d = (B) => (n === !0 ? B : Qe(B, n === !1 ? 1 : void 0));
  let p,
    x = !1,
    F = !1;
  if (
    (re(e)
      ? ((p = () => e.value), (x = Lt(e)))
      : tt(e)
        ? ((p = () => d(e)), (x = !0))
        : A(e)
          ? ((F = !0),
            (x = e.some((B) => tt(B) || Lt(B))),
            (p = () =>
              e.map((B) => {
                if (re(B)) return B.value;
                if (tt(B)) return d(B);
                if (T(B)) return Me(B, a, 2);
              })))
          : T(e)
            ? t
              ? (p = () => Me(e, a, 2))
              : (p = () => ($ && $(), me(e, a, 3, [U])))
            : (p = fe),
    t && n)
  ) {
    const B = p;
    p = () => Qe(B());
  }
  let $,
    U = (B) => {
      $ = N.onStop = () => {
        Me(B, a, 4), ($ = N.onStop = void 0);
      };
    },
    k;
  if (Qt)
    if (
      ((U = fe),
      t ? s && me(t, a, 3, [p(), F ? [] : void 0, U]) : p(),
      i === "sync")
    ) {
      const B = Bl();
      k = B.__watcherHandles || (B.__watcherHandles = []);
    } else return fe;
  let J = F ? new Array(e.length).fill(Tt) : Tt;
  const q = () => {
    if (!(!N.active || !N.dirty))
      if (t) {
        const B = N.run();
        (n || x || (F ? B.some((Ee, xe) => Re(Ee, J[xe])) : Re(B, J))) &&
          ($ && $(),
          me(t, a, 3, [B, J === Tt ? void 0 : F && J[0] === Tt ? [] : J, U]),
          (J = B));
      } else N.run();
  };
  q.allowRecurse = !!t;
  let _e;
  i === "sync"
    ? (_e = q)
    : i === "post"
      ? (_e = () => ie(q, a && a.suspense))
      : ((q.pre = !0), a && (q.id = a.uid), (_e = () => Us(q)));
  const N = new Ss(p, fe, _e),
    Y = zi(),
    ae = () => {
      N.stop(), Y && Os(Y.effects, N);
    };
  return (
    t
      ? s
        ? q()
        : (J = N.run())
      : i === "post"
        ? ie(N.run.bind(N), a && a.suspense)
        : N.run(),
    k && k.push(ae),
    ae
  );
}
function Ml(e, t, s) {
  const n = this.proxy,
    i = W(e) ? (e.includes(".") ? ai(n, e) : () => n[e]) : e.bind(n, n);
  let l;
  T(t) ? (l = t) : ((l = t.handler), (s = t));
  const r = vt(this),
    c = ui(i, l.bind(n), s);
  return r(), c;
}
function ai(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++) n = n[s[i]];
    return n;
  };
}
function Qe(e, t, s = 0, n) {
  if (!z(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (s >= t) return e;
    s++;
  }
  if (((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), re(e))) Qe(e.value, t, s, n);
  else if (A(e)) for (let i = 0; i < e.length; i++) Qe(e[i], t, s, n);
  else if (jn(e) || et(e))
    e.forEach((i) => {
      Qe(i, t, s, n);
    });
  else if (Bn(e)) for (const i in e) Qe(e[i], t, s, n);
  return e;
}
function He(e, t, s, n) {
  const i = e.dirs,
    l = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const c = i[r];
    l && (c.oldValue = l[r].value);
    let a = c.dir[n];
    a && (We(), me(a, s, 8, [e.el, c, e, t]), qe());
  }
}
const St = (e) => !!e.type.__asyncLoader,
  fi = (e) => e.type.__isKeepAlive;
function Rl(e, t) {
  di(e, "a", t);
}
function kl(e, t) {
  di(e, "da", t);
}
function di(e, t, s = Z) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let i = s;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((Jt(t, n, s), s)) {
    let i = s.parent;
    for (; i && i.parent; )
      fi(i.parent.vnode) && Ll(n, t, s, i), (i = i.parent);
  }
}
function Ll(e, t, s, n) {
  const i = Jt(t, e, n, !0);
  hi(() => {
    Os(n[t], i);
  }, s);
}
function Jt(e, t, s = Z, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...r) => {
          if (s.isUnmounted) return;
          We();
          const c = vt(s),
            a = me(t, s, e, r);
          return c(), qe(), a;
        });
    return n ? i.unshift(l) : i.push(l), l;
  }
}
const Ae =
    (e) =>
    (t, s = Z) =>
      (!Qt || e === "sp") && Jt(e, (...n) => t(...n), s),
  Nl = Ae("bm"),
  pi = Ae("m"),
  Hl = Ae("bu"),
  Ul = Ae("u"),
  Dl = Ae("bum"),
  hi = Ae("um"),
  Vl = Ae("sp"),
  Kl = Ae("rtg"),
  zl = Ae("rtc");
function Wl(e, t = Z) {
  Jt("ec", e, t);
}
function xs(e, t, s, n) {
  let i;
  const l = s && s[n];
  if (A(e) || W(e)) {
    i = new Array(e.length);
    for (let r = 0, c = e.length; r < c; r++)
      i[r] = t(e[r], r, void 0, l && l[r]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++) i[r] = t(r + 1, r, void 0, l && l[r]);
  } else if (z(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (r, c) => t(r, c, void 0, l && l[c]));
    else {
      const r = Object.keys(e);
      i = new Array(r.length);
      for (let c = 0, a = r.length; c < a; c++) {
        const d = r[c];
        i[c] = t(e[d], d, c, l && l[c]);
      }
    }
  else i = [];
  return s && (s[n] = i), i;
}
const vs = (e) => (e ? (Ii(e) ? zs(e) || e.proxy : vs(e.parent)) : null),
  dt = ee(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vs(e.parent),
    $root: (e) => vs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ds(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Us(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = xl.bind(e.proxy)),
    $watch: (e) => Ml.bind(e),
  }),
  us = (e, t) => e !== V && !e.__isScriptSetup && S(e, t),
  ql = {
    get({ _: e }, t) {
      const {
        ctx: s,
        setupState: n,
        data: i,
        props: l,
        accessCache: r,
        type: c,
        appContext: a,
      } = e;
      let d;
      if (t[0] !== "$") {
        const $ = r[t];
        if ($ !== void 0)
          switch ($) {
            case 1:
              return n[t];
            case 2:
              return i[t];
            case 4:
              return s[t];
            case 3:
              return l[t];
          }
        else {
          if (us(n, t)) return (r[t] = 1), n[t];
          if (i !== V && S(i, t)) return (r[t] = 2), i[t];
          if ((d = e.propsOptions[0]) && S(d, t)) return (r[t] = 3), l[t];
          if (s !== V && S(s, t)) return (r[t] = 4), s[t];
          bs && (r[t] = 0);
        }
      }
      const p = dt[t];
      let x, F;
      if (p) return t === "$attrs" && le(e, "get", t), p(e);
      if ((x = c.__cssModules) && (x = x[t])) return x;
      if (s !== V && S(s, t)) return (r[t] = 4), s[t];
      if (((F = a.config.globalProperties), S(F, t))) return F[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: i, ctx: l } = e;
      return us(i, t)
        ? ((i[t] = s), !0)
        : n !== V && S(n, t)
          ? ((n[t] = s), !0)
          : S(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((l[t] = s), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: i,
          propsOptions: l,
        },
      },
      r
    ) {
      let c;
      return (
        !!s[r] ||
        (e !== V && S(e, r)) ||
        us(t, r) ||
        ((c = l[0]) && S(c, r)) ||
        S(n, r) ||
        S(dt, r) ||
        S(i.config.globalProperties, r)
      );
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : S(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      );
    },
  };
function an(e) {
  return A(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let bs = !0;
function Gl(e) {
  const t = Ds(e),
    s = e.proxy,
    n = e.ctx;
  (bs = !1), t.beforeCreate && fn(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: l,
    methods: r,
    watch: c,
    provide: a,
    inject: d,
    created: p,
    beforeMount: x,
    mounted: F,
    beforeUpdate: $,
    updated: U,
    activated: k,
    deactivated: J,
    beforeDestroy: q,
    beforeUnmount: _e,
    destroyed: N,
    unmounted: Y,
    render: ae,
    renderTracked: B,
    renderTriggered: Ee,
    errorCaptured: xe,
    serverPrefetch: Zt,
    expose: ke,
    inheritAttrs: ot,
    components: yt,
    directives: wt,
    filters: es,
  } = t;
  if ((d && Jl(d, n, null), r))
    for (const K in r) {
      const H = r[K];
      T(H) && (n[K] = H.bind(s));
    }
  if (i) {
    const K = i.call(s, s);
    z(K) && (e.data = ks(K));
  }
  if (((bs = !0), l))
    for (const K in l) {
      const H = l[K],
        Le = T(H) ? H.bind(s, s) : T(H.get) ? H.get.bind(s, s) : fe,
        Ft = !T(H) && T(H.set) ? H.set.bind(s) : fe,
        Ne = Er({ get: Le, set: Ft });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (ve) => (Ne.value = ve),
      });
    }
  if (c) for (const K in c) gi(c[K], n, s, K);
  if (a) {
    const K = T(a) ? a.call(s) : a;
    Reflect.ownKeys(K).forEach((H) => {
      tr(H, K[H]);
    });
  }
  p && fn(p, e, "c");
  function te(K, H) {
    A(H) ? H.forEach((Le) => K(Le.bind(s))) : H && K(H.bind(s));
  }
  if (
    (te(Nl, x),
    te(pi, F),
    te(Hl, $),
    te(Ul, U),
    te(Rl, k),
    te(kl, J),
    te(Wl, xe),
    te(zl, B),
    te(Kl, Ee),
    te(Dl, _e),
    te(hi, Y),
    te(Vl, Zt),
    A(ke))
  )
    if (ke.length) {
      const K = e.exposed || (e.exposed = {});
      ke.forEach((H) => {
        Object.defineProperty(K, H, {
          get: () => s[H],
          set: (Le) => (s[H] = Le),
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === fe && (e.render = ae),
    ot != null && (e.inheritAttrs = ot),
    yt && (e.components = yt),
    wt && (e.directives = wt);
}
function Jl(e, t, s = fe) {
  A(e) && (e = ys(e));
  for (const n in e) {
    const i = e[n];
    let l;
    z(i)
      ? "default" in i
        ? (l = Pt(i.from || n, i.default, !0))
        : (l = Pt(i.from || n))
      : (l = Pt(i)),
      re(l)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (r) => (l.value = r),
          })
        : (t[n] = l);
  }
}
function fn(e, t, s) {
  me(A(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function gi(e, t, s, n) {
  const i = n.includes(".") ? ai(s, n) : () => s[n];
  if (W(e)) {
    const l = t[e];
    T(l) && cs(i, l);
  } else if (T(e)) cs(i, e.bind(s));
  else if (z(e))
    if (A(e)) e.forEach((l) => gi(l, t, s, n));
    else {
      const l = T(e.handler) ? e.handler.bind(s) : t[e.handler];
      T(l) && cs(i, l, e);
    }
}
function Ds(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: i,
      optionsCache: l,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    c = l.get(t);
  let a;
  return (
    c
      ? (a = c)
      : !i.length && !s && !n
        ? (a = t)
        : ((a = {}),
          i.length && i.forEach((d) => Ht(a, d, r, !0)),
          Ht(a, t, r)),
    z(t) && l.set(t, a),
    a
  );
}
function Ht(e, t, s, n = !1) {
  const { mixins: i, extends: l } = t;
  l && Ht(e, l, s, !0), i && i.forEach((r) => Ht(e, r, s, !0));
  for (const r in t)
    if (!(n && r === "expose")) {
      const c = Yl[r] || (s && s[r]);
      e[r] = c ? c(e[r], t[r]) : t[r];
    }
  return e;
}
const Yl = {
  data: dn,
  props: pn,
  emits: pn,
  methods: at,
  computed: at,
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  components: at,
  directives: at,
  watch: Ql,
  provide: dn,
  inject: Xl,
};
function dn(e, t) {
  return t
    ? e
      ? function () {
          return ee(
            T(e) ? e.call(this, this) : e,
            T(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Xl(e, t) {
  return at(ys(e), ys(t));
}
function ys(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function at(e, t) {
  return e ? ee(Object.create(null), e, t) : t;
}
function pn(e, t) {
  return e
    ? A(e) && A(t)
      ? [...new Set([...e, ...t])]
      : ee(Object.create(null), an(e), an(t ?? {}))
    : t;
}
function Ql(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ee(Object.create(null), e);
  for (const n in t) s[n] = se(e[n], t[n]);
  return s;
}
function mi() {
  return {
    app: null,
    config: {
      isNativeTag: ji,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Zl = 0;
function er(e, t) {
  return function (n, i = null) {
    T(n) || (n = ee({}, n)), i != null && !z(i) && (i = null);
    const l = mi(),
      r = new WeakSet();
    let c = !1;
    const a = (l.app = {
      _uid: Zl++,
      _component: n,
      _props: i,
      _container: null,
      _context: l,
      _instance: null,
      version: Ir,
      get config() {
        return l.config;
      },
      set config(d) {},
      use(d, ...p) {
        return (
          r.has(d) ||
            (d && T(d.install)
              ? (r.add(d), d.install(a, ...p))
              : T(d) && (r.add(d), d(a, ...p))),
          a
        );
      },
      mixin(d) {
        return l.mixins.includes(d) || l.mixins.push(d), a;
      },
      component(d, p) {
        return p ? ((l.components[d] = p), a) : l.components[d];
      },
      directive(d, p) {
        return p ? ((l.directives[d] = p), a) : l.directives[d];
      },
      mount(d, p, x) {
        if (!c) {
          const F = G(n, i);
          return (
            (F.appContext = l),
            x === !0 ? (x = "svg") : x === !1 && (x = void 0),
            p && t ? t(F, d) : e(F, d, x),
            (c = !0),
            (a._container = d),
            (d.__vue_app__ = a),
            zs(F.component) || F.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(d, p) {
        return (l.provides[d] = p), a;
      },
      runWithContext(d) {
        const p = pt;
        pt = a;
        try {
          return d();
        } finally {
          pt = p;
        }
      },
    });
    return a;
  };
}
let pt = null;
function tr(e, t) {
  if (Z) {
    let s = Z.provides;
    const n = Z.parent && Z.parent.provides;
    n === s && (s = Z.provides = Object.create(n)), (s[e] = t);
  }
}
function Pt(e, t, s = !1) {
  const n = Z || he;
  if (n || pt) {
    const i = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : pt._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return s && T(t) ? t.call(n && n.proxy) : t;
  }
}
function sr(e, t, s, n = !1) {
  const i = {},
    l = {};
  kt(l, Xt, 1), (e.propsDefaults = Object.create(null)), _i(e, t, i, l);
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0);
  s ? (e.props = n ? i : fl(i)) : e.type.props ? (e.props = i) : (e.props = l),
    (e.attrs = l);
}
function nr(e, t, s, n) {
  const {
      props: i,
      attrs: l,
      vnode: { patchFlag: r },
    } = e,
    c = M(i),
    [a] = e.propsOptions;
  let d = !1;
  if ((n || r > 0) && !(r & 16)) {
    if (r & 8) {
      const p = e.vnode.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        let F = p[x];
        if (Gt(e.emitsOptions, F)) continue;
        const $ = t[F];
        if (a)
          if (S(l, F)) $ !== l[F] && ((l[F] = $), (d = !0));
          else {
            const U = $e(F);
            i[U] = ws(a, c, U, $, e, !1);
          }
        else $ !== l[F] && ((l[F] = $), (d = !0));
      }
    }
  } else {
    _i(e, t, i, l) && (d = !0);
    let p;
    for (const x in c)
      (!t || (!S(t, x) && ((p = rt(x)) === x || !S(t, p)))) &&
        (a
          ? s &&
            (s[x] !== void 0 || s[p] !== void 0) &&
            (i[x] = ws(a, c, x, void 0, e, !0))
          : delete i[x]);
    if (l !== c) for (const x in l) (!t || !S(t, x)) && (delete l[x], (d = !0));
  }
  d && Oe(e, "set", "$attrs");
}
function _i(e, t, s, n) {
  const [i, l] = e.propsOptions;
  let r = !1,
    c;
  if (t)
    for (let a in t) {
      if (ft(a)) continue;
      const d = t[a];
      let p;
      i && S(i, (p = $e(a)))
        ? !l || !l.includes(p)
          ? (s[p] = d)
          : ((c || (c = {}))[p] = d)
        : Gt(e.emitsOptions, a) ||
          ((!(a in n) || d !== n[a]) && ((n[a] = d), (r = !0)));
    }
  if (l) {
    const a = M(s),
      d = c || V;
    for (let p = 0; p < l.length; p++) {
      const x = l[p];
      s[x] = ws(i, a, x, d[x], e, !S(d, x));
    }
  }
  return r;
}
function ws(e, t, s, n, i, l) {
  const r = e[s];
  if (r != null) {
    const c = S(r, "default");
    if (c && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && T(a)) {
        const { propsDefaults: d } = i;
        if (s in d) n = d[s];
        else {
          const p = vt(i);
          (n = d[s] = a.call(null, t)), p();
        }
      } else n = a;
    }
    r[0] &&
      (l && !c ? (n = !1) : r[1] && (n === "" || n === rt(s)) && (n = !0));
  }
  return n;
}
function xi(e, t, s = !1) {
  const n = t.propsCache,
    i = n.get(e);
  if (i) return i;
  const l = e.props,
    r = {},
    c = [];
  let a = !1;
  if (!T(e)) {
    const p = (x) => {
      a = !0;
      const [F, $] = xi(x, t, !0);
      ee(r, F), $ && c.push(...$);
    };
    !s && t.mixins.length && t.mixins.forEach(p),
      e.extends && p(e.extends),
      e.mixins && e.mixins.forEach(p);
  }
  if (!l && !a) return z(e) && n.set(e, Ze), Ze;
  if (A(l))
    for (let p = 0; p < l.length; p++) {
      const x = $e(l[p]);
      hn(x) && (r[x] = V);
    }
  else if (l)
    for (const p in l) {
      const x = $e(p);
      if (hn(x)) {
        const F = l[p],
          $ = (r[x] = A(F) || T(F) ? { type: F } : ee({}, F));
        if ($) {
          const U = _n(Boolean, $.type),
            k = _n(String, $.type);
          ($[0] = U > -1),
            ($[1] = k < 0 || U < k),
            (U > -1 || S($, "default")) && c.push(x);
        }
      }
    }
  const d = [r, c];
  return z(e) && n.set(e, d), d;
}
function hn(e) {
  return e[0] !== "$" && !ft(e);
}
function gn(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function mn(e, t) {
  return gn(e) === gn(t);
}
function _n(e, t) {
  return A(t) ? t.findIndex((s) => mn(s, e)) : T(t) && mn(t, e) ? 0 : -1;
}
const vi = (e) => e[0] === "_" || e === "$stable",
  Vs = (e) => (A(e) ? e.map(we) : [we(e)]),
  ir = (e, t, s) => {
    if (t._n) return t;
    const n = Cl((...i) => Vs(t(...i)), s);
    return (n._c = !1), n;
  },
  bi = (e, t, s) => {
    const n = e._ctx;
    for (const i in e) {
      if (vi(i)) continue;
      const l = e[i];
      if (T(l)) t[i] = ir(i, l, n);
      else if (l != null) {
        const r = Vs(l);
        t[i] = () => r;
      }
    }
  },
  yi = (e, t) => {
    const s = Vs(t);
    e.slots.default = () => s;
  },
  lr = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? ((e.slots = M(t)), kt(t, "_", s)) : bi(t, (e.slots = {}));
    } else (e.slots = {}), t && yi(e, t);
    kt(e.slots, Xt, 1);
  },
  rr = (e, t, s) => {
    const { vnode: n, slots: i } = e;
    let l = !0,
      r = V;
    if (n.shapeFlag & 32) {
      const c = t._;
      c
        ? s && c === 1
          ? (l = !1)
          : (ee(i, t), !s && c === 1 && delete i._)
        : ((l = !t.$stable), bi(t, i)),
        (r = t);
    } else t && (yi(e, t), (r = { default: 1 }));
    if (l) for (const c in i) !vi(c) && r[c] == null && delete i[c];
  };
function Fs(e, t, s, n, i = !1) {
  if (A(e)) {
    e.forEach((F, $) => Fs(F, t && (A(t) ? t[$] : t), s, n, i));
    return;
  }
  if (St(n) && !i) return;
  const l = n.shapeFlag & 4 ? zs(n.component) || n.component.proxy : n.el,
    r = i ? null : l,
    { i: c, r: a } = e,
    d = t && t.r,
    p = c.refs === V ? (c.refs = {}) : c.refs,
    x = c.setupState;
  if (
    (d != null &&
      d !== a &&
      (W(d)
        ? ((p[d] = null), S(x, d) && (x[d] = null))
        : re(d) && (d.value = null)),
    T(a))
  )
    Me(a, c, 12, [r, p]);
  else {
    const F = W(a),
      $ = re(a);
    if (F || $) {
      const U = () => {
        if (e.f) {
          const k = F ? (S(x, a) ? x[a] : p[a]) : a.value;
          i
            ? A(k) && Os(k, l)
            : A(k)
              ? k.includes(l) || k.push(l)
              : F
                ? ((p[a] = [l]), S(x, a) && (x[a] = p[a]))
                : ((a.value = [l]), e.k && (p[e.k] = a.value));
        } else
          F
            ? ((p[a] = r), S(x, a) && (x[a] = r))
            : $ && ((a.value = r), e.k && (p[e.k] = r));
      };
      r ? ((U.id = -1), ie(U, s)) : U();
    }
  }
}
const ie = Sl;
function or(e) {
  return cr(e);
}
function cr(e, t) {
  const s = Mn();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: i,
      patchProp: l,
      createElement: r,
      createText: c,
      createComment: a,
      setText: d,
      setElementText: p,
      parentNode: x,
      nextSibling: F,
      setScopeId: $ = fe,
      insertStaticContent: U,
    } = e,
    k = (
      o,
      u,
      f,
      h = null,
      g = null,
      b = null,
      w = void 0,
      v = null,
      y = !!u.dynamicChildren
    ) => {
      if (o === u) return;
      o && !ut(o, u) && ((h = Ct(o)), ve(o, g, b, !0), (o = null)),
        u.patchFlag === -2 && ((y = !1), (u.dynamicChildren = null));
      const { type: m, ref: C, shapeFlag: I } = u;
      switch (m) {
        case Yt:
          J(o, u, f, h);
          break;
        case ze:
          q(o, u, f, h);
          break;
        case Bt:
          o == null && _e(u, f, h, w);
          break;
        case ue:
          yt(o, u, f, h, g, b, w, v, y);
          break;
        default:
          I & 1
            ? ae(o, u, f, h, g, b, w, v, y)
            : I & 6
              ? wt(o, u, f, h, g, b, w, v, y)
              : (I & 64 || I & 128) && m.process(o, u, f, h, g, b, w, v, y, Je);
      }
      C != null && g && Fs(C, o && o.ref, b, u || o, !u);
    },
    J = (o, u, f, h) => {
      if (o == null) n((u.el = c(u.children)), f, h);
      else {
        const g = (u.el = o.el);
        u.children !== o.children && d(g, u.children);
      }
    },
    q = (o, u, f, h) => {
      o == null ? n((u.el = a(u.children || "")), f, h) : (u.el = o.el);
    },
    _e = (o, u, f, h) => {
      [o.el, o.anchor] = U(o.children, u, f, h, o.el, o.anchor);
    },
    N = ({ el: o, anchor: u }, f, h) => {
      let g;
      for (; o && o !== u; ) (g = F(o)), n(o, f, h), (o = g);
      n(u, f, h);
    },
    Y = ({ el: o, anchor: u }) => {
      let f;
      for (; o && o !== u; ) (f = F(o)), i(o), (o = f);
      i(u);
    },
    ae = (o, u, f, h, g, b, w, v, y) => {
      u.type === "svg" ? (w = "svg") : u.type === "math" && (w = "mathml"),
        o == null ? B(u, f, h, g, b, w, v, y) : Zt(o, u, g, b, w, v, y);
    },
    B = (o, u, f, h, g, b, w, v) => {
      let y, m;
      const { props: C, shapeFlag: I, transition: E, dirs: O } = o;
      if (
        ((y = o.el = r(o.type, b, C && C.is, C)),
        I & 8
          ? p(y, o.children)
          : I & 16 && xe(o.children, y, null, h, g, as(o, b), w, v),
        O && He(o, null, h, "created"),
        Ee(y, o, o.scopeId, w, h),
        C)
      ) {
        for (const L in C)
          L !== "value" &&
            !ft(L) &&
            l(y, L, null, C[L], b, o.children, h, g, Ie);
        "value" in C && l(y, "value", null, C.value, b),
          (m = C.onVnodeBeforeMount) && ye(m, h, o);
      }
      O && He(o, null, h, "beforeMount");
      const j = ur(g, E);
      j && E.beforeEnter(y),
        n(y, u, f),
        ((m = C && C.onVnodeMounted) || j || O) &&
          ie(() => {
            m && ye(m, h, o), j && E.enter(y), O && He(o, null, h, "mounted");
          }, g);
    },
    Ee = (o, u, f, h, g) => {
      if ((f && $(o, f), h)) for (let b = 0; b < h.length; b++) $(o, h[b]);
      if (g) {
        let b = g.subTree;
        if (u === b) {
          const w = g.vnode;
          Ee(o, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    xe = (o, u, f, h, g, b, w, v, y = 0) => {
      for (let m = y; m < o.length; m++) {
        const C = (o[m] = v ? Se(o[m]) : we(o[m]));
        k(null, C, u, f, h, g, b, w, v);
      }
    },
    Zt = (o, u, f, h, g, b, w) => {
      const v = (u.el = o.el);
      let { patchFlag: y, dynamicChildren: m, dirs: C } = u;
      y |= o.patchFlag & 16;
      const I = o.props || V,
        E = u.props || V;
      let O;
      if (
        (f && Ue(f, !1),
        (O = E.onVnodeBeforeUpdate) && ye(O, f, u, o),
        C && He(u, o, f, "beforeUpdate"),
        f && Ue(f, !0),
        m
          ? ke(o.dynamicChildren, m, v, f, h, as(u, g), b)
          : w || H(o, u, v, null, f, h, as(u, g), b, !1),
        y > 0)
      ) {
        if (y & 16) ot(v, u, I, E, f, h, g);
        else if (
          (y & 2 && I.class !== E.class && l(v, "class", null, E.class, g),
          y & 4 && l(v, "style", I.style, E.style, g),
          y & 8)
        ) {
          const j = u.dynamicProps;
          for (let L = 0; L < j.length; L++) {
            const D = j[L],
              X = I[D],
              de = E[D];
            (de !== X || D === "value") &&
              l(v, D, X, de, g, o.children, f, h, Ie);
          }
        }
        y & 1 && o.children !== u.children && p(v, u.children);
      } else !w && m == null && ot(v, u, I, E, f, h, g);
      ((O = E.onVnodeUpdated) || C) &&
        ie(() => {
          O && ye(O, f, u, o), C && He(u, o, f, "updated");
        }, h);
    },
    ke = (o, u, f, h, g, b, w) => {
      for (let v = 0; v < u.length; v++) {
        const y = o[v],
          m = u[v],
          C =
            y.el && (y.type === ue || !ut(y, m) || y.shapeFlag & 70)
              ? x(y.el)
              : f;
        k(y, m, C, null, h, g, b, w, !0);
      }
    },
    ot = (o, u, f, h, g, b, w) => {
      if (f !== h) {
        if (f !== V)
          for (const v in f)
            !ft(v) && !(v in h) && l(o, v, f[v], null, w, u.children, g, b, Ie);
        for (const v in h) {
          if (ft(v)) continue;
          const y = h[v],
            m = f[v];
          y !== m && v !== "value" && l(o, v, m, y, w, u.children, g, b, Ie);
        }
        "value" in h && l(o, "value", f.value, h.value, w);
      }
    },
    yt = (o, u, f, h, g, b, w, v, y) => {
      const m = (u.el = o ? o.el : c("")),
        C = (u.anchor = o ? o.anchor : c(""));
      let { patchFlag: I, dynamicChildren: E, slotScopeIds: O } = u;
      O && (v = v ? v.concat(O) : O),
        o == null
          ? (n(m, f, h), n(C, f, h), xe(u.children || [], f, C, g, b, w, v, y))
          : I > 0 && I & 64 && E && o.dynamicChildren
            ? (ke(o.dynamicChildren, E, f, g, b, w, v),
              (u.key != null || (g && u === g.subTree)) && wi(o, u, !0))
            : H(o, u, f, C, g, b, w, v, y);
    },
    wt = (o, u, f, h, g, b, w, v, y) => {
      (u.slotScopeIds = v),
        o == null
          ? u.shapeFlag & 512
            ? g.ctx.activate(u, f, h, w, y)
            : es(u, f, h, g, b, w, y)
          : Ws(o, u, y);
    },
    es = (o, u, f, h, g, b, w) => {
      const v = (o.component = vr(o, h, g));
      if ((fi(o) && (v.ctx.renderer = Je), br(v), v.asyncDep)) {
        if ((g && g.registerDep(v, te), !o.el)) {
          const y = (v.subTree = G(ze));
          q(null, y, u, f);
        }
      } else te(v, o, u, f, g, b, w);
    },
    Ws = (o, u, f) => {
      const h = (u.component = o.component);
      if (Il(o, u, f))
        if (h.asyncDep && !h.asyncResolved) {
          K(h, u, f);
          return;
        } else (h.next = u), bl(h.update), (h.effect.dirty = !0), h.update();
      else (u.el = o.el), (h.vnode = u);
    },
    te = (o, u, f, h, g, b, w) => {
      const v = () => {
          if (o.isMounted) {
            let { next: C, bu: I, u: E, parent: O, vnode: j } = o;
            {
              const Ye = Fi(o);
              if (Ye) {
                C && ((C.el = j.el), K(o, C, w)),
                  Ye.asyncDep.then(() => {
                    o.isUnmounted || v();
                  });
                return;
              }
            }
            let L = C,
              D;
            Ue(o, !1),
              C ? ((C.el = j.el), K(o, C, w)) : (C = j),
              I && ls(I),
              (D = C.props && C.props.onVnodeBeforeUpdate) && ye(D, O, C, j),
              Ue(o, !0);
            const X = os(o),
              de = o.subTree;
            (o.subTree = X),
              k(de, X, x(de.el), Ct(de), o, g, b),
              (C.el = X.el),
              L === null && Ol(o, X.el),
              E && ie(E, g),
              (D = C.props && C.props.onVnodeUpdated) &&
                ie(() => ye(D, O, C, j), g);
          } else {
            let C;
            const { el: I, props: E } = u,
              { bm: O, m: j, parent: L } = o,
              D = St(u);
            if (
              (Ue(o, !1),
              O && ls(O),
              !D && (C = E && E.onVnodeBeforeMount) && ye(C, L, u),
              Ue(o, !0),
              I && ns)
            ) {
              const X = () => {
                (o.subTree = os(o)), ns(I, o.subTree, o, g, null);
              };
              D
                ? u.type.__asyncLoader().then(() => !o.isUnmounted && X())
                : X();
            } else {
              const X = (o.subTree = os(o));
              k(null, X, f, h, o, g, b), (u.el = X.el);
            }
            if ((j && ie(j, g), !D && (C = E && E.onVnodeMounted))) {
              const X = u;
              ie(() => ye(C, L, X), g);
            }
            (u.shapeFlag & 256 ||
              (L && St(L.vnode) && L.vnode.shapeFlag & 256)) &&
              o.a &&
              ie(o.a, g),
              (o.isMounted = !0),
              (u = f = h = null);
          }
        },
        y = (o.effect = new Ss(v, fe, () => Us(m), o.scope)),
        m = (o.update = () => {
          y.dirty && y.run();
        });
      (m.id = o.uid), Ue(o, !0), m();
    },
    K = (o, u, f) => {
      u.component = o;
      const h = o.vnode.props;
      (o.vnode = u),
        (o.next = null),
        nr(o, u.props, h, f),
        rr(o, u.children, f),
        We(),
        on(o),
        qe();
    },
    H = (o, u, f, h, g, b, w, v, y = !1) => {
      const m = o && o.children,
        C = o ? o.shapeFlag : 0,
        I = u.children,
        { patchFlag: E, shapeFlag: O } = u;
      if (E > 0) {
        if (E & 128) {
          Ft(m, I, f, h, g, b, w, v, y);
          return;
        } else if (E & 256) {
          Le(m, I, f, h, g, b, w, v, y);
          return;
        }
      }
      O & 8
        ? (C & 16 && Ie(m, g, b), I !== m && p(f, I))
        : C & 16
          ? O & 16
            ? Ft(m, I, f, h, g, b, w, v, y)
            : Ie(m, g, b, !0)
          : (C & 8 && p(f, ""), O & 16 && xe(I, f, h, g, b, w, v, y));
    },
    Le = (o, u, f, h, g, b, w, v, y) => {
      (o = o || Ze), (u = u || Ze);
      const m = o.length,
        C = u.length,
        I = Math.min(m, C);
      let E;
      for (E = 0; E < I; E++) {
        const O = (u[E] = y ? Se(u[E]) : we(u[E]));
        k(o[E], O, f, null, g, b, w, v, y);
      }
      m > C ? Ie(o, g, b, !0, !1, I) : xe(u, f, h, g, b, w, v, y, I);
    },
    Ft = (o, u, f, h, g, b, w, v, y) => {
      let m = 0;
      const C = u.length;
      let I = o.length - 1,
        E = C - 1;
      for (; m <= I && m <= E; ) {
        const O = o[m],
          j = (u[m] = y ? Se(u[m]) : we(u[m]));
        if (ut(O, j)) k(O, j, f, null, g, b, w, v, y);
        else break;
        m++;
      }
      for (; m <= I && m <= E; ) {
        const O = o[I],
          j = (u[E] = y ? Se(u[E]) : we(u[E]));
        if (ut(O, j)) k(O, j, f, null, g, b, w, v, y);
        else break;
        I--, E--;
      }
      if (m > I) {
        if (m <= E) {
          const O = E + 1,
            j = O < C ? u[O].el : h;
          for (; m <= E; )
            k(null, (u[m] = y ? Se(u[m]) : we(u[m])), f, j, g, b, w, v, y), m++;
        }
      } else if (m > E) for (; m <= I; ) ve(o[m], g, b, !0), m++;
      else {
        const O = m,
          j = m,
          L = new Map();
        for (m = j; m <= E; m++) {
          const oe = (u[m] = y ? Se(u[m]) : we(u[m]));
          oe.key != null && L.set(oe.key, m);
        }
        let D,
          X = 0;
        const de = E - j + 1;
        let Ye = !1,
          Js = 0;
        const ct = new Array(de);
        for (m = 0; m < de; m++) ct[m] = 0;
        for (m = O; m <= I; m++) {
          const oe = o[m];
          if (X >= de) {
            ve(oe, g, b, !0);
            continue;
          }
          let be;
          if (oe.key != null) be = L.get(oe.key);
          else
            for (D = j; D <= E; D++)
              if (ct[D - j] === 0 && ut(oe, u[D])) {
                be = D;
                break;
              }
          be === void 0
            ? ve(oe, g, b, !0)
            : ((ct[be - j] = m + 1),
              be >= Js ? (Js = be) : (Ye = !0),
              k(oe, u[be], f, null, g, b, w, v, y),
              X++);
        }
        const Ys = Ye ? ar(ct) : Ze;
        for (D = Ys.length - 1, m = de - 1; m >= 0; m--) {
          const oe = j + m,
            be = u[oe],
            Xs = oe + 1 < C ? u[oe + 1].el : h;
          ct[m] === 0
            ? k(null, be, f, Xs, g, b, w, v, y)
            : Ye && (D < 0 || m !== Ys[D] ? Ne(be, f, Xs, 2) : D--);
        }
      }
    },
    Ne = (o, u, f, h, g = null) => {
      const { el: b, type: w, transition: v, children: y, shapeFlag: m } = o;
      if (m & 6) {
        Ne(o.component.subTree, u, f, h);
        return;
      }
      if (m & 128) {
        o.suspense.move(u, f, h);
        return;
      }
      if (m & 64) {
        w.move(o, u, f, Je);
        return;
      }
      if (w === ue) {
        n(b, u, f);
        for (let I = 0; I < y.length; I++) Ne(y[I], u, f, h);
        n(o.anchor, u, f);
        return;
      }
      if (w === Bt) {
        N(o, u, f);
        return;
      }
      if (h !== 2 && m & 1 && v)
        if (h === 0) v.beforeEnter(b), n(b, u, f), ie(() => v.enter(b), g);
        else {
          const { leave: I, delayLeave: E, afterLeave: O } = v,
            j = () => n(b, u, f),
            L = () => {
              I(b, () => {
                j(), O && O();
              });
            };
          E ? E(b, j, L) : L();
        }
      else n(b, u, f);
    },
    ve = (o, u, f, h = !1, g = !1) => {
      const {
        type: b,
        props: w,
        ref: v,
        children: y,
        dynamicChildren: m,
        shapeFlag: C,
        patchFlag: I,
        dirs: E,
      } = o;
      if ((v != null && Fs(v, null, f, o, !0), C & 256)) {
        u.ctx.deactivate(o);
        return;
      }
      const O = C & 1 && E,
        j = !St(o);
      let L;
      if ((j && (L = w && w.onVnodeBeforeUnmount) && ye(L, u, o), C & 6))
        Ti(o.component, f, h);
      else {
        if (C & 128) {
          o.suspense.unmount(f, h);
          return;
        }
        O && He(o, null, u, "beforeUnmount"),
          C & 64
            ? o.type.remove(o, u, f, g, Je, h)
            : m && (b !== ue || (I > 0 && I & 64))
              ? Ie(m, u, f, !1, !0)
              : ((b === ue && I & 384) || (!g && C & 16)) && Ie(y, u, f),
          h && qs(o);
      }
      ((j && (L = w && w.onVnodeUnmounted)) || O) &&
        ie(() => {
          L && ye(L, u, o), O && He(o, null, u, "unmounted");
        }, f);
    },
    qs = (o) => {
      const { type: u, el: f, anchor: h, transition: g } = o;
      if (u === ue) {
        Ai(f, h);
        return;
      }
      if (u === Bt) {
        Y(o);
        return;
      }
      const b = () => {
        i(f), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (o.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: v } = g,
          y = () => w(f, b);
        v ? v(o.el, b, y) : y();
      } else b();
    },
    Ai = (o, u) => {
      let f;
      for (; o !== u; ) (f = F(o)), i(o), (o = f);
      i(u);
    },
    Ti = (o, u, f) => {
      const { bum: h, scope: g, update: b, subTree: w, um: v } = o;
      h && ls(h),
        g.stop(),
        b && ((b.active = !1), ve(w, o, u, f)),
        v && ie(v, u),
        ie(() => {
          o.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          o.asyncDep &&
          !o.asyncResolved &&
          o.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Ie = (o, u, f, h = !1, g = !1, b = 0) => {
      for (let w = b; w < o.length; w++) ve(o[w], u, f, h, g);
    },
    Ct = (o) =>
      o.shapeFlag & 6
        ? Ct(o.component.subTree)
        : o.shapeFlag & 128
          ? o.suspense.next()
          : F(o.anchor || o.el);
  let ts = !1;
  const Gs = (o, u, f) => {
      o == null
        ? u._vnode && ve(u._vnode, null, null, !0)
        : k(u._vnode || null, o, u, null, null, null, f),
        ts || ((ts = !0), on(), ni(), (ts = !1)),
        (u._vnode = o);
    },
    Je = {
      p: k,
      um: ve,
      m: Ne,
      r: qs,
      mt: es,
      mc: xe,
      pc: H,
      pbc: ke,
      n: Ct,
      o: e,
    };
  let ss, ns;
  return (
    t && ([ss, ns] = t(Je)), { render: Gs, hydrate: ss, createApp: er(Gs, ss) }
  );
}
function as({ type: e, props: t }, s) {
  return (s === "svg" && e === "foreignObject") ||
    (s === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : s;
}
function Ue({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function ur(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function wi(e, t, s = !1) {
  const n = e.children,
    i = t.children;
  if (A(n) && A(i))
    for (let l = 0; l < n.length; l++) {
      const r = n[l];
      let c = i[l];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = i[l] = Se(i[l])), (c.el = r.el)),
        s || wi(r, c)),
        c.type === Yt && (c.el = r.el);
    }
}
function ar(e) {
  const t = e.slice(),
    s = [0];
  let n, i, l, r, c;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const d = e[n];
    if (d !== 0) {
      if (((i = s[s.length - 1]), e[i] < d)) {
        (t[n] = i), s.push(n);
        continue;
      }
      for (l = 0, r = s.length - 1; l < r; )
        (c = (l + r) >> 1), e[s[c]] < d ? (l = c + 1) : (r = c);
      d < e[s[l]] && (l > 0 && (t[n] = s[l - 1]), (s[l] = n));
    }
  }
  for (l = s.length, r = s[l - 1]; l-- > 0; ) (s[l] = r), (r = t[r]);
  return s;
}
function Fi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Fi(t);
}
const fr = (e) => e.__isTeleport,
  ue = Symbol.for("v-fgt"),
  Yt = Symbol.for("v-txt"),
  ze = Symbol.for("v-cmt"),
  Bt = Symbol.for("v-stc"),
  ht = [];
let ge = null;
function P(e = !1) {
  ht.push((ge = e ? null : []));
}
function dr() {
  ht.pop(), (ge = ht[ht.length - 1] || null);
}
let xt = 1;
function xn(e) {
  xt += e;
}
function Ci(e) {
  return (
    (e.dynamicChildren = xt > 0 ? ge || Ze : null),
    dr(),
    xt > 0 && ge && ge.push(e),
    e
  );
}
function R(e, t, s, n, i, l) {
  return Ci(_(e, t, s, n, i, l, !0));
}
function $i(e, t, s, n, i) {
  return Ci(G(e, t, s, n, i, !0));
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xt = "__vInternal",
  Ei = ({ key: e }) => e ?? null,
  Mt = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? W(e) || re(e) || T(e)
        ? { i: he, r: e, k: t, f: !!s }
        : e
      : null
  );
function _(
  e,
  t = null,
  s = null,
  n = 0,
  i = null,
  l = e === ue ? 0 : 1,
  r = !1,
  c = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ei(t),
    ref: t && Mt(t),
    scopeId: ri,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  };
  return (
    c
      ? (Ks(a, s), l & 128 && e.normalize(a))
      : s && (a.shapeFlag |= W(s) ? 8 : 16),
    xt > 0 &&
      !r &&
      ge &&
      (a.patchFlag > 0 || l & 6) &&
      a.patchFlag !== 32 &&
      ge.push(a),
    a
  );
}
const G = hr;
function hr(e, t = null, s = null, n = 0, i = null, l = !1) {
  if (((!e || e === ci) && (e = ze), pr(e))) {
    const c = it(e, t, !0);
    return (
      s && Ks(c, s),
      xt > 0 &&
        !l &&
        ge &&
        (c.shapeFlag & 6 ? (ge[ge.indexOf(e)] = c) : ge.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if (($r(e) && (e = e.__vccOpts), t)) {
    t = gr(t);
    let { class: c, style: a } = t;
    c && !W(c) && (t.class = js(c)),
      z(a) && (Yn(a) && !A(a) && (a = ee({}, a)), (t.style = Ts(a)));
  }
  const r = W(e) ? 1 : jl(e) ? 128 : fr(e) ? 64 : z(e) ? 4 : T(e) ? 2 : 0;
  return _(e, t, s, n, i, r, l, !0);
}
function gr(e) {
  return e ? (Yn(e) || Xt in e ? ee({}, e) : e) : null;
}
function it(e, t, s = !1) {
  const { props: n, ref: i, patchFlag: l, children: r } = e,
    c = t ? mr(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ei(c),
    ref:
      t && t.ref ? (s && i ? (A(i) ? i.concat(Mt(t)) : [i, Mt(t)]) : Mt(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ue ? (l === -1 ? 16 : l | 16) : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Rt(e = " ", t = 0) {
  return G(Yt, null, e, t);
}
function Ge(e, t) {
  const s = G(Bt, null, e);
  return (s.staticCount = t), s;
}
function ne(e = "", t = !1) {
  return t ? (P(), $i(ze, null, e)) : G(ze, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean"
    ? G(ze)
    : A(e)
      ? G(ue, null, e.slice())
      : typeof e == "object"
        ? Se(e)
        : G(Yt, null, String(e));
}
function Se(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : it(e);
}
function Ks(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (A(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ks(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !(Xt in t)
        ? (t._ctx = he)
        : i === 3 &&
          he &&
          (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    T(t)
      ? ((t = { default: t, _ctx: he }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [Rt(t)])) : (s = 8));
  (e.children = t), (e.shapeFlag |= s);
}
function mr(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = js([t.class, n.class]));
      else if (i === "style") t.style = Ts([t.style, n.style]);
      else if (Dt(i)) {
        const l = t[i],
          r = n[i];
        r &&
          l !== r &&
          !(A(l) && l.includes(r)) &&
          (t[i] = l ? [].concat(l, r) : r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  me(e, t, 7, [s, n]);
}
const _r = mi();
let xr = 0;
function vr(e, t, s) {
  const n = e.type,
    i = (t ? t.appContext : e.appContext) || _r,
    l = {
      uid: xr++,
      vnode: e,
      type: n,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Vi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: xi(n, i),
      emitsOptions: li(n, i),
      emit: null,
      emitted: null,
      propsDefaults: V,
      inheritAttrs: n.inheritAttrs,
      ctx: V,
      data: V,
      props: V,
      attrs: V,
      slots: V,
      refs: V,
      setupState: V,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = Fl.bind(null, l)),
    e.ce && e.ce(l),
    l
  );
}
let Z = null,
  Ut,
  Cs;
{
  const e = Mn(),
    t = (s, n) => {
      let i;
      return (
        (i = e[s]) || (i = e[s] = []),
        i.push(n),
        (l) => {
          i.length > 1 ? i.forEach((r) => r(l)) : i[0](l);
        }
      );
    };
  (Ut = t("__VUE_INSTANCE_SETTERS__", (s) => (Z = s))),
    (Cs = t("__VUE_SSR_SETTERS__", (s) => (Qt = s)));
}
const vt = (e) => {
    const t = Z;
    return (
      Ut(e),
      e.scope.on(),
      () => {
        e.scope.off(), Ut(t);
      }
    );
  },
  vn = () => {
    Z && Z.scope.off(), Ut(null);
  };
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function br(e, t = !1) {
  t && Cs(t);
  const { props: s, children: n } = e.vnode,
    i = Ii(e);
  sr(e, s, i, t), lr(e, n);
  const l = i ? yr(e, t) : void 0;
  return t && Cs(!1), l;
}
function yr(e, t) {
  const s = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Xn(new Proxy(e.ctx, ql)));
  const { setup: n } = s;
  if (n) {
    const i = (e.setupContext = n.length > 1 ? Fr(e) : null),
      l = vt(e);
    We();
    const r = Me(n, e, 0, [e.props, i]);
    if ((qe(), l(), Sn(r))) {
      if ((r.then(vn, vn), t))
        return r
          .then((c) => {
            bn(e, c, t);
          })
          .catch((c) => {
            qt(c, e, 0);
          });
      e.asyncDep = r;
    } else bn(e, r, t);
  } else Oi(e, t);
}
function bn(e, t, s) {
  T(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : z(t) && (e.setupState = ei(t)),
    Oi(e, s);
}
let yn;
function Oi(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && yn && !n.render) {
      const i = n.template || Ds(e).template;
      if (i) {
        const { isCustomElement: l, compilerOptions: r } = e.appContext.config,
          { delimiters: c, compilerOptions: a } = n,
          d = ee(ee({ isCustomElement: l, delimiters: c }, r), a);
        n.render = yn(i, d);
      }
    }
    e.render = n.render || fe;
  }
  {
    const i = vt(e);
    We();
    try {
      Gl(e);
    } finally {
      qe(), i();
    }
  }
}
function wr(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return le(e, "get", "$attrs"), t[s];
      },
    }))
  );
}
function Fr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return wr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ei(Xn(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s];
          if (s in dt) return dt[s](e);
        },
        has(t, s) {
          return s in t || s in dt;
        },
      }))
    );
}
function Cr(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function $r(e) {
  return T(e) && "__vccOpts" in e;
}
const Er = (e, t) => dl(e, t, Qt),
  Ir = "3.4.19";
/**
 * @vue/runtime-dom v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Or = "http://www.w3.org/2000/svg",
  Ar = "http://www.w3.org/1998/Math/MathML",
  Pe = typeof document < "u" ? document : null,
  wn = Pe && Pe.createElement("template"),
  Tr = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const i =
        t === "svg"
          ? Pe.createElementNS(Or, e)
          : t === "mathml"
            ? Pe.createElementNS(Ar, e)
            : Pe.createElement(e, s ? { is: s } : void 0);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          i.setAttribute("multiple", n.multiple),
        i
      );
    },
    createText: (e) => Pe.createTextNode(e),
    createComment: (e) => Pe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, i, l) {
      const r = s ? s.previousSibling : t.lastChild;
      if (i && (i === l || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), s),
            !(i === l || !(i = i.nextSibling));

        );
      else {
        wn.innerHTML =
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
              ? `<math>${e}</math>`
              : e;
        const c = wn.content;
        if (n === "svg" || n === "mathml") {
          const a = c.firstChild;
          for (; a.firstChild; ) c.appendChild(a.firstChild);
          c.removeChild(a);
        }
        t.insertBefore(c, s);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  },
  jr = Symbol("_vtc");
function Sr(e, t, s) {
  const n = e[jr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const Fn = Symbol("_vod"),
  Pr = Symbol(""),
  Br = /(^|;)\s*display\s*:/;
function Mr(e, t, s) {
  const n = e.style,
    i = W(s),
    l = n.display;
  let r = !1;
  if (s && !i) {
    if (t && !W(t)) for (const c in t) s[c] == null && $s(n, c, "");
    for (const c in s) c === "display" && (r = !0), $s(n, c, s[c]);
  } else if (i) {
    if (t !== s) {
      const c = n[Pr];
      c && (s += ";" + c), (n.cssText = s), (r = Br.test(s));
    }
  } else t && e.removeAttribute("style");
  Fn in e && ((e[Fn] = r ? n.display : ""), (n.display = l));
}
const Cn = /\s*!important$/;
function $s(e, t, s) {
  if (A(s)) s.forEach((n) => $s(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
  else {
    const n = Rr(e, t);
    Cn.test(s)
      ? e.setProperty(rt(n), s.replace(Cn, ""), "important")
      : (e[n] = s);
  }
}
const $n = ["Webkit", "Moz", "ms"],
  fs = {};
function Rr(e, t) {
  const s = fs[t];
  if (s) return s;
  let n = $e(t);
  if (n !== "filter" && n in e) return (fs[t] = n);
  n = zt(n);
  for (let i = 0; i < $n.length; i++) {
    const l = $n[i] + n;
    if (l in e) return (fs[t] = l);
  }
  return t;
}
const En = "http://www.w3.org/1999/xlink";
function kr(e, t, s, n, i) {
  if (n && t.startsWith("xlink:"))
    s == null
      ? e.removeAttributeNS(En, t.slice(6, t.length))
      : e.setAttributeNS(En, t, s);
  else {
    const l = Di(t);
    s == null || (l && !Rn(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : s);
  }
}
function Lr(e, t, s, n, i, l, r) {
  if (t === "innerHTML" || t === "textContent") {
    n && r(n, i, l), (e[t] = s ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    e._value = s;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value,
      p = s ?? "";
    d !== p && (e.value = p), s == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (s = Rn(s))
      : s == null && d === "string"
        ? ((s = ""), (a = !0))
        : d === "number" && ((s = 0), (a = !0));
  }
  try {
    e[t] = s;
  } catch {}
  a && e.removeAttribute(t);
}
function Nr(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Hr(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const In = Symbol("_vei");
function Ur(e, t, s, n, i = null) {
  const l = e[In] || (e[In] = {}),
    r = l[t];
  if (n && r) r.value = n;
  else {
    const [c, a] = Dr(t);
    if (n) {
      const d = (l[t] = zr(n, i));
      Nr(e, c, d, a);
    } else r && (Hr(e, c, r, a), (l[t] = void 0));
  }
}
const On = /(?:Once|Passive|Capture)$/;
function Dr(e) {
  let t;
  if (On.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(On)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : rt(e.slice(2)), t];
}
let ds = 0;
const Vr = Promise.resolve(),
  Kr = () => ds || (Vr.then(() => (ds = 0)), (ds = Date.now()));
function zr(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    me(Wr(n, s.value), t, 5, [n]);
  };
  return (s.value = e), (s.attached = Kr()), s;
}
function Wr(e, t) {
  if (A(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0);
      }),
      t.map((n) => (i) => !i._stopped && n && n(i))
    );
  } else return t;
}
const An = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  qr = (e, t, s, n, i, l, r, c, a) => {
    const d = i === "svg";
    t === "class"
      ? Sr(e, n, d)
      : t === "style"
        ? Mr(e, s, n)
        : Dt(t)
          ? Is(t) || Ur(e, t, s, n, r)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Gr(e, t, n, d)
              )
            ? Lr(e, t, n, l, r, c, a)
            : (t === "true-value"
                ? (e._trueValue = n)
                : t === "false-value" && (e._falseValue = n),
              kr(e, t, n, d));
  };
function Gr(e, t, s, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && An(t) && T(s))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return An(t) && W(s) ? !1 : t in e;
}
const Jr = ee({ patchProp: qr }, Tr);
let Tn;
function Yr() {
  return Tn || (Tn = or(Jr));
}
const Xr = (...e) => {
  const t = Yr().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const i = Zr(n);
      if (!i) return;
      const l = t._component;
      !T(l) && !l.render && !l.template && (l.template = i.innerHTML),
        (i.innerHTML = "");
      const r = s(i, !1, Qr(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        r
      );
    }),
    t
  );
};
function Qr(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zr(e) {
  return W(e) ? document.querySelector(e) : e;
}
const eo = "img/back-text.svg",
  to = "img/cart.svg",
  so = "img/empty-cart.svg",
  no = {
    class:
      "h-screen w-screen bg-[#444B58B2] z-40 absolute top-0 left-0 flex justify-center items-center transition-all duration-300 overflow-y-hidden no-scrollbar",
  },
  io = { class: "w-auto h-auto bg-white p-10 rounded" },
  lo = { key: 0, class: "flex flex-col justify-center align-center" },
  ro = _(
    "span",
    { class: "text-[#444B58] text-center w-full" },
    "Корзина пуста :(",
    -1
  ),
  oo = _(
    "div",
    { class: "flex justify-center align-center w-full" },
    [_("img", { src: so, alt: "empty-cart", class: "w-[200px]" })],
    -1
  ),
  co = { key: 1, class: "gap-5 flex flex-col" },
  uo = _(
    "div",
    { class: "flex justify-between w-full gap-10" },
    [
      _("span", { class: "font-bold text-[#444B58]" }, "Оформление заказа"),
      _("span", { class: "text-[#B2B5BB]" }, "Заказ 3456 67"),
    ],
    -1
  ),
  ao = {
    class:
      "flex justify-between w-full flex-col border border-[#D9D9D9] rounded p-5",
  },
  fo = _("span", null, "Состав заказа: ", -1),
  po = ["src"],
  ho = { class: "flex flex-col justify-center align-center w-3/5" },
  go = ["onClick"],
  mo = {
    class:
      "flex justify-between w-full flex-col [&>input]:family-sans [&>input]:outline-none [&>input]:border-none [&>input]:bg-[#F6F6F6] [&>input]:w-full gap-5 [&>input]:h-[50px] [&>input]:rounded [&>input]:p-5 [&>input]:text-[#B2B5BB]",
  },
  _o = _("input", { type: "text", placeholder: "Ваше Имя" }, null, -1),
  xo = _("input", { type: "text", placeholder: "Номер телефона" }, null, -1),
  vo = _("input", { type: "text", placeholder: "E-mail" }, null, -1),
  bo = {
    class:
      "flex justify-between w-full [&>button]:bg-[#F14F4F] [&>button]:text-white [&>button]:rounded [&>button]:px-5 [&>button]:py-2 [&>button]:transition",
  },
  yo = _("button", { class: "hover:brightness-90" }, "Оформить заказ", -1),
  wo = {
    __name: "CartComponent",
    props: {
      cartItems: Array,
      toggleCard: Function,
      deleteCartItems: Function,
    },
    setup(e) {
      const t = e,
        s = ce(0);
      pi(() => {
        n();
      });
      const n = () => {
        s.value = t.cartItems.reduce((i, l) => i + l.price, 0);
      };
      return (i, l) => (
        P(),
        R("div", no, [
          _("div", io, [
            e.cartItems.length === 0
              ? (P(),
                R("div", lo, [
                  ro,
                  oo,
                  _(
                    "button",
                    {
                      class: "hover:brightness-90",
                      onClick:
                        l[0] ||
                        (l[0] = (...r) => e.toggleCard && e.toggleCard(...r)),
                    },
                    "Закрыть"
                  ),
                ]))
              : ne("", !0),
            e.cartItems.length > 0
              ? (P(),
                R("div", co, [
                  uo,
                  _("div", ao, [
                    _(
                      "span",
                      null,
                      "Товаров в корзине: " + Ce(e.cartItems.length) + " шт.",
                      1
                    ),
                    _(
                      "span",
                      null,
                      "Общая стоимость: " + Ce(s.value) + " ₽",
                      1
                    ),
                    fo,
                    (P(!0),
                    R(
                      ue,
                      null,
                      xs(
                        e.cartItems,
                        (r) => (
                          P(),
                          R(
                            "span",
                            {
                              key: r,
                              class: "flex justify-between align-center gap-2",
                            },
                            [
                              _(
                                "img",
                                {
                                  src: r.img,
                                  alt: "item",
                                  class: "h-[70px] w-1/5",
                                },
                                null,
                                8,
                                po
                              ),
                              _("div", ho, [
                                _("span", null, Ce(r.name), 1),
                                _("span", null, Ce(r.price), 1),
                              ]),
                              _(
                                "button",
                                {
                                  class: "w-1/5",
                                  onClick: (c) => (e.deleteCartItems(r), n()),
                                },
                                "Удалить",
                                8,
                                go
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _("div", mo, [
                    _o,
                    xo,
                    vo,
                    _("div", bo, [
                      yo,
                      _(
                        "button",
                        {
                          class: "hover:brightness-90",
                          onClick:
                            l[1] ||
                            (l[1] = (...r) =>
                              e.toggleCard && e.toggleCard(...r)),
                        },
                        "Отменить"
                      ),
                    ]),
                  ]),
                ]))
              : ne("", !0),
          ]),
        ])
      );
    },
  },
  Fo = _(
    "img",
    {
      src: eo,
      alt: "back ",
      class: "w-full h-full absolute flex justify-center items-center",
    },
    null,
    -1
  ),
  Co = _("span", { class: "font-bold text-3xl family-sans" }, "SneakMax", -1),
  $o = _("img", { src: to, class: "w-6 h-6", alt: "" }, null, -1),
  Eo = [$o],
  Io = Ge(
    '<span class="hover:text-[#F14F4F]">Каталог</span><span class="hover:text-[#F14F4F]">О нас</span><span class="hover:text-[#F14F4F]">Подбор товара</span><span class="hover:text-[#F14F4F]">Наша команда</span><span class="hover:text-[#F14F4F]">Доставка и оплата</span><span class="hover:text-[#F14F4F]">Контакты</span>',
    6
  ),
  Oo = _(
    "div",
    {
      class:
        "w-[1180px] h-full flex flex-col justify-center items-start text-white gap-5 z-10 max-xl:w-[900px] max-lg:w-screen max-lg:px-10",
    },
    [
      _(
        "h1",
        { class: "text-2xl font-bold w-1/2 max-lg:w-full" },
        " Кроссовки известных брендов с доставкой по России и СНГ "
      ),
      _(
        "h2",
        { class: "text-xs font-normal w-1/2 max-lg:w-full" },
        " Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам "
      ),
      _(
        "button",
        { class: "w-[250px] h-[60px] bg-[#F14F4F] rounded" },
        "Перейти к покупкам"
      ),
    ],
    -1
  ),
  Ao = {
    __name: "HeaderComponent",
    props: { cartItems: Array, deleteCartItems: Function },
    setup(e) {
      const t = ce(!1),
        s = () => {
          t.value = !t.value;
        };
      return (n, i) => (
        P(),
        R(
          ue,
          null,
          [
            _(
              "header",
              {
                class:
                  "h-[550px] w-screen bg-[#484283] flex flex-col justify-center items-center relative",
              },
              [
                Fo,
                _(
                  "div",
                  {
                    class:
                      "flex justify-between items-center w-[1180px] text-white text-base family-sans border-b border-[#FFFFFF50] pt-5 pb-5 absolute top-0 z-20 max-xl:w-[900px] max-lg:w-screen max-lg:px-10 overflow-hidden",
                  },
                  [
                    Co,
                    _("div", { class: "" }, [
                      _("div", { class: "lg:hidden", onClick: s }, Eo),
                      _(
                        "div",
                        {
                          class:
                            "flex gap-4 [&>span]:cursor-pointer [&>span]:transition max-lg:hidden",
                        },
                        [
                          Io,
                          _(
                            "span",
                            { class: "hover:text-[#F14F4F]", onClick: s },
                            "Корзина"
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                Oo,
              ]
            ),
            t.value
              ? (P(),
                $i(
                  Al(wo),
                  {
                    key: 0,
                    cartItems: e.cartItems,
                    toggleCard: s,
                    deleteCartItems: e.deleteCartItems,
                  },
                  null,
                  8,
                  ["cartItems", "deleteCartItems"]
                ))
              : ne("", !0),
          ],
          64
        )
      );
    },
  },
  To = "img/add-cart.svg",
  jo = { class: "w-screen flex justify-center items-center h-auto" },
  So = { class: "w-[1180px] h-auto" },
  Po = _(
    "h1",
    { class: "w-full text-3xl mt-10 mb-10 max-xl:px-10" },
    "Каталог",
    -1
  ),
  Bo = { class: "flex gap-5 text-[#444B58] max-xl:flex-col max-xl:px-10" },
  Mo = {
    class:
      "w-1/4 bg-[#FFF4EE] flex-col flex p-5 h-auto max-h-[450px] max-xl:flex-row max-xl:w-[500px] max-xl:gap-5 max-[580px]:flex-col max-[580px]:w-[300px] max-[580px]:max-h-[600px] max-[380px]:w-full",
  },
  Ro = { class: "flex flex-col" },
  ko = _("span", null, "Подбор по параметрам", -1),
  Lo = _("span", null, "Цена руб.", -1),
  No = {
    class:
      "flex [&>input]:w-1/2 gap-5 [&>input]:bg-transparent [&>input]:outline-none [&>input]:border max-xl:flex-col max-xl:[&>input]:w-full",
  },
  Ho = ["defaultValue"],
  Uo = ["defaultValue"],
  Do = _("span", null, "Пол", -1),
  Vo = {
    class:
      "flex justify-between [&>div>input]:w-4 [&>div>input]:h-4 [&>div>input]:cursor-pointer [&>div>input]:rounded-full [&>div>input]:border [&>div>input]:border-[#DBBBA9]",
  },
  Ko = _("span", null, "Размер", -1),
  zo = { class: "grid gap-1 grid-cols-3" },
  Wo = ["id"],
  qo = {
    class: "w-3/4 grid grid-cols-3 gap-5 max-xl:w-full max-[580px]:grid-cols-2",
  },
  Go = ["onClick"],
  Jo = ["src"],
  Yo = { class: "flex flex-col justify-end align-end" },
  Xo = { class: "font-normal text-[#444B58]" },
  Qo = { class: "text-[#444B58] font-bold" },
  Zo = {
    __name: "CatalogComponent",
    props: { addCartItems: Function },
    setup(e) {
      const t = ce(["35", "36", "37", "38", "39", "40", "41", "42", "43"]),
        s = ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
        n = ce(8499),
        i = ce(16499),
        l = ce(["male", "female"]),
        r = ce([
          {
            name: 'Мужские Кроссовки Nike Air Force 1 "07 QS"',
            price: 12999,
            img: "sneakers/sneaker (1).svg",
            size: "36",
            gender: "male",
          },
          {
            name: "Мужские Кроссовки Nike Air Max 270",
            price: 8499,
            img: "sneakers/sneaker (2).svg",
            size: "37",
            gender: "male",
          },
          {
            name: "Женские Кроссовки Nike Blazer Mid Suede",
            price: 8999,
            img: "sneakers/sneaker (3).svg",
            size: "38",
            gender: "female",
          },
          {
            name: "Мужские Кроссовки Puma X Aka Boku Future Rider",
            price: 11299,
            img: "sneakers/sneaker (4).svg",
            size: "39",
            gender: "male",
          },
          {
            name: "Женские Кроссовки Under Armour Curry 8",
            price: 15199,
            img: "sneakers/sneaker (5).svg",
            size: "38",
            gender: "female",
          },
          {
            name: "Женские Кроссовки Nike Kyrie 7",
            price: 11299,
            img: "sneakers/sneaker (6).svg",
            size: "40",
            gender: "female",
          },
          {
            name: "Женские Кроссовки Jordan Air Jordan 11",
            price: 10799,
            img: "sneakers/sneaker (7).svg",
            size: "38",
            gender: "female",
          },
          {
            name: "Мужские Кроссовки Nike LeBron XVIII",
            price: 16499,
            img: "sneakers/sneaker (8).svg",
            size: "38",
            gender: "male",
          },
          {
            name: "Мужские Кроссовки Nike Lebron XVIII Low",
            price: 13999,
            img: "sneakers/sneaker (9).svg",
            size: "38",
            gender: "male",
          },
        ]),
        c = ce(r.value),
        a = (x) => {
          l.value.includes(x)
            ? l.value.includes(x) && l.value.splice(l.value.indexOf(x), 1)
            : l.value.push(x);
        },
        d = () => {
          if (t.value.length === 0) return r.value;
          (c.value = r.value.filter((x) => t.value.includes(x.size))),
            (c.value = c.value.filter(
              (x) => x.price >= n.value && x.price <= i.value
            )),
            (c.value = c.value.filter((x) => l.value.includes(x.gender)));
        },
        p = (x) => {
          t.value.includes(x.target.innerText)
            ? (t.value.splice(t.value.indexOf(x.target.innerText), 1),
              document
                .getElementById(x.target.innerText)
                .classList.remove("bg-[#F14F4F1a]"))
            : (t.value.push(x.target.innerText),
              document
                .getElementById(x.target.innerText)
                .classList.add("bg-[#F14F4F1a]"));
        };
      return (x, F) => (
        P(),
        R("div", jo, [
          _("div", So, [
            Po,
            _("div", Bo, [
              _("div", Mo, [
                _("div", Ro, [
                  ko,
                  Rt(),
                  Lo,
                  _("div", No, [
                    _(
                      "input",
                      {
                        type: "text",
                        onInput:
                          F[0] ||
                          (F[0] = ($) => ((n.value = $.target.value), d())),
                        defaultValue: n.value,
                      },
                      null,
                      40,
                      Ho
                    ),
                    _(
                      "input",
                      {
                        type: "text",
                        onInput:
                          F[1] ||
                          (F[1] = ($) => ((i.value = $.target.value), d())),
                        defaultValue: i.value,
                      },
                      null,
                      40,
                      Uo
                    ),
                  ]),
                  Do,
                  _("div", Vo, [
                    _("div", null, [
                      _("input", {
                        type: "checkbox",
                        onClick: F[2] || (F[2] = ($) => (a("male"), d())),
                        checked: "",
                      }),
                      Rt(" Мужской "),
                    ]),
                    _("div", null, [
                      _("input", {
                        type: "checkbox",
                        onClick: F[3] || (F[3] = ($) => (a("female"), d())),
                        checked: "",
                      }),
                      Rt(" Женский "),
                    ]),
                  ]),
                ]),
                _("div", null, [
                  Ko,
                  _("div", zo, [
                    (P(),
                    R(
                      ue,
                      null,
                      xs(s, ($) =>
                        _(
                          "span",
                          {
                            key: $,
                            onClick: F[4] || (F[4] = (U) => (p(U), d())),
                            id: $,
                            class:
                              "cursor-pointer transition border flex justify-center items-center border-[#DBBBA9] p-5 bg-[#F14F4F1a]",
                          },
                          Ce($),
                          9,
                          Wo
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
                _(
                  "button",
                  {
                    class:
                      "bg-[#444B58] text-white h-[50px] rounded mt-5 px-5 hover:brightness-90",
                    onClick:
                      F[5] ||
                      (F[5] = ($) => (
                        (c.value = r.value),
                        (t.value = [
                          "35",
                          "36",
                          "37",
                          "38",
                          "39",
                          "40",
                          "41",
                          "42",
                          "43",
                        ]),
                        (l.value = ["male", "female"]),
                        (n.value = 8499),
                        (i.value = 16499),
                        d()
                      )),
                  },
                  " Сбросить "
                ),
              ]),
              _("div", qo, [
                (P(!0),
                R(
                  ue,
                  null,
                  xs(
                    c.value,
                    ($) => (
                      P(),
                      R(
                        "span",
                        {
                          key: $,
                          class:
                            "flex justify-between flex-col relative border border-[#cccccc50] rounded p-2 hover:shadow-lg transition",
                        },
                        [
                          _(
                            "img",
                            {
                              src: To,
                              alt: "",
                              class:
                                "absolute top-5 left-5 w-1/6 h-1/6 cursor-pointer",
                              onClick: (U) => e.addCartItems($),
                            },
                            null,
                            8,
                            Go
                          ),
                          _(
                            "img",
                            { src: $.img, alt: "sneaker", class: "w-full" },
                            null,
                            8,
                            Jo
                          ),
                          _("div", Yo, [
                            _("span", Xo, Ce($.name), 1),
                            _("span", Qo, Ce($.price) + " ₽", 1),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  ec = "img/mask.png",
  bt = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, i] of t) s[n] = i;
    return s;
  },
  tc = {},
  sc = {
    class:
      "w-screen h-[580px] bg-[#484283] bg-[url('img/figure.svg')] bg-no-repeat mt-10",
  },
  nc = Ge(
    '<div class="w-[1180px] h-full flex [&amp;&gt;div]:w-1/2 [&amp;&gt;div]:h-full justify-center items-center mx-auto max-xl:w-[900px] max-[910px]:px-10 max-[910px]:w-full"><div class="flex flex-col justify-center text-white gap-5 family-sans max-[800px]:w-full"><span class="text-3xl font-bold">Пара слов о нас</span><span>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </span><span class="flex gap-2 font-bold justify-end items-center text-2xl"><div class="w-5 h-px bg-white"></div> SneakMax</span></div><div class="max-[800px]:hidden"><img src="' +
      ec +
      '" alt="" class="w-full h-full"></div></div>',
    1
  ),
  ic = [nc];
function lc(e, t) {
  return P(), R("div", sc, ic);
}
const rc = bt(tc, [["render", lc]]),
  Xe = "img/photo.png",
  oc = "img/2page.png",
  cc = {
    class: "w-screen h-auto bg-white flex justify-center items-center p-10",
  },
  uc = {
    class: "w-[1180px] h-full bg-[#FFF4EE] rounded p-10 flex flex-col gap-5",
  },
  ac = { key: 0, class: "text-3xl font-bold text-[#444B58]" },
  fc = { key: 1, class: "text-[#444B58]" },
  dc = { key: 2, class: "text-3xl font-bold text-[#444B58]" },
  pc = { key: 3, class: "text-[#444B58]" },
  hc = _("div", { class: "w-full h-px bg-[#444B58]" }, null, -1),
  gc = { key: 4 },
  mc = Ge(
    '<span class="text-[#444B58] text-2xl">Какой тип кроссовок рассматриваете?</span><div class="max-sm:grid-cols-2 grid grid-cols-3 justify-center [&amp;&gt;div&gt;div]:items-center [&amp;&gt;div&gt;div]:justify-center [&amp;&gt;div&gt;div]:flex [&amp;&gt;div&gt;div]:gap-2 items-center [&amp;&gt;div]:gap-2 [&amp;&gt;div]:flex [&amp;&gt;div]:justify-center [&amp;&gt;div]:items-center [&amp;&gt;div]:flex-col [&amp;&gt;div&gt;img]:w-full gap-10 [&amp;&gt;div&gt;div&gt;input]:webkit-appearance-none [&amp;&gt;div&gt;div&gt;input]:outline-none [&amp;&gt;div&gt;div&gt;input]:w-4 [&amp;&gt;div&gt;div&gt;input]:h-4 [&amp;&gt;div&gt;div&gt;input]:cursor-pointer [&amp;&gt;div&gt;div&gt;input]:border [&amp;&gt;div&gt;div&gt;input]:border-[#DBBBA9] [&amp;&gt;div&gt;div&gt;input]:appearance-none"><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div><div><img src="' +
      Xe +
      '" alt=""><div><input type="checkbox" class="checked:bg-[#F14F4F]"> <span>кеды</span></div></div></div>',
    2
  ),
  _c = [mc],
  xc = { key: 5 },
  vc = Ge(
    '<span class="text-[#444B58] text-2xl">Какой размер вам подойдет?</span><div class="flex flex-wrap justify-between w-full mt-5 [&amp;&gt;span&gt;input]:w-4 [&amp;&gt;span&gt;input]:h-4 [&amp;&gt;span&gt;input]:cursor-pointer [&amp;&gt;span&gt;input]:appearance-none [&amp;&gt;span&gt;input]:border [&amp;&gt;span&gt;input]:border-[#DBBBA9] [&amp;&gt;span]:gap-2 [&amp;&gt;span]:flex [&amp;&gt;span]:justify-center [&amp;&gt;span]:items-center"><span><input type="checkbox" class="checked:bg-[#F14F4F]">менее 36</span><span><input type="checkbox" class="checked:bg-[#F14F4F]">36-38</span><span><input type="checkbox" class="checked:bg-[#F14F4F]">39-41</span><span><input type="checkbox" class="checked:bg-[#F14F4F]">42-44</span><span><input type="checkbox" class="checked:bg-[#F14F4F]">45 и больше</span></div><img src="' +
      oc +
      '" alt="" class="w-full rounded mt-5">',
    3
  ),
  bc = [vc],
  yc = { key: 6, class: "flex flex-col" },
  wc = _(
    "span",
    { class: "text-[#444B58] text-2xl" },
    "Уточните какие-либо моменты",
    -1
  ),
  Fc = _(
    "textarea",
    {
      name: "",
      id: "",
      cols: "30",
      rows: "10",
      class: "p-5 mt-5 text-[#444B58]",
    },
    null,
    -1
  ),
  Cc = [wc, Fc],
  $c = { key: 7, class: "flex justify-center items-center" },
  Ec = {
    class:
      "flex flex-col w-4/6 max-xl:w-full gap-5 p-5 bg-[#DBBBA9] rounded text-white [&>input]:border [&>input]:border-[#DBBBA9] [&>input]:rounded [&>input]:p-5 [&>input]:outline-none",
  },
  Ic = _("span", { class: "text-4xl font-bold" }, "Получить предложение", -1),
  Oc = _(
    "span",
    null,
    "Получите подборку подходящих для вас моделей на почту",
    -1
  ),
  Ac = _("input", { type: "text", placeholder: "Ваше имя" }, null, -1),
  Tc = _("input", { type: "text", placeholder: "Ваша почта" }, null, -1),
  jc = { key: 8, class: "h-px bg-[#444B58] w-full" },
  Sc = { key: 9, class: "flex justify-between" },
  Pc = {
    __name: "TestComponent",
    setup(e) {
      const t = ce(1),
        s = ce(!1);
      return (n, i) => (
        P(),
        R("div", cc, [
          _("div", uc, [
            t.value < 4
              ? (P(), R("span", ac, "Мы подберем идеальную пару для вас"))
              : ne("", !0),
            t.value < 4
              ? (P(),
                R(
                  "span",
                  fc,
                  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями "
                ))
              : ne("", !0),
            t.value === 4
              ? (P(), R("span", dc, "Ваша подборка готова!"))
              : ne("", !0),
            t.value === 4
              ? (P(),
                R(
                  "span",
                  pc,
                  "Оставьте свои контактные данные, чтобы бы мы могли отправить подготовленный для вас каталог"
                ))
              : ne("", !0),
            hc,
            t.value === 1 ? (P(), R("div", gc, _c)) : ne("", !0),
            t.value === 2 ? (P(), R("div", xc, bc)) : ne("", !0),
            t.value === 3 ? (P(), R("div", yc, Cc)) : ne("", !0),
            t.value === 4
              ? (P(),
                R("div", $c, [
                  _("div", Ec, [
                    Ic,
                    Oc,
                    Ac,
                    Tc,
                    _(
                      "button",
                      {
                        class: "bg-[#F14F4F] text-white px-10 py-5 rounded",
                        onClick: i[0] || (i[0] = (l) => (s.value = !0)),
                      },
                      " Получить предложение "
                    ),
                  ]),
                ]))
              : ne("", !0),
            t.value < 4 ? (P(), R("div", jc)) : ne("", !0),
            t.value < 4
              ? (P(),
                R("div", Sc, [
                  _("span", null, Ce(t.value) + " / 3", 1),
                  _(
                    "button",
                    { onClick: i[1] || (i[1] = (l) => t.value++) },
                    "Далее"
                  ),
                ]))
              : ne("", !0),
          ]),
        ])
      );
    },
  },
  Bc = "team/team (1).jpg",
  Mc = "team/team (2).jpg",
  Rc = "team/team (3).jpg",
  kc = "team/team (4).jpg",
  Lc = "team/team (5).jpg",
  Nc = "team/team (6).jpg",
  Hc = {},
  Uc = {
    class:
      "w-screen h-auto py-10 bg-[#484283] bg-[url('img/Group.svg')] bg-no-repeat bg-right-top flex justify-center items-center",
  },
  Dc = Ge(
    '<div class="w-[1180px] h-full flex flex-col justify-center text-white px-10"><span class="text-3xl font-bold">Наша команда</span><div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 [&amp;&gt;div]:flex [&amp;&gt;div]:flex-col gap-5 [&amp;&gt;div]:gap-2"><div><img src="' +
      Bc +
      '" alt=""><span class="text-xl font-bold">Анна Иванова</span><span>Администратор</span></div><div><img src="' +
      Mc +
      '" alt=""><span class="text-xl font-bold">Максим Золотарев</span><span>Администратор</span></div><div><img src="' +
      Rc +
      '" alt=""><span class="text-xl font-bold">Мария Петрова</span><span>Администратор</span></div><div><img src="' +
      kc +
      '" alt=""><span class="text-xl font-bold">Иван Соколов</span><span>Администратор</span></div><div><img src="' +
      Lc +
      '" alt=""><span class="text-xl font-bold">Александр Кузнецов</span><span>Администратор</span></div><div><img src="' +
      Nc +
      '" alt=""><span class="text-xl font-bold">Екатерина Смирнова</span><span>Администратор</span></div></div></div>',
    1
  ),
  Vc = [Dc];
function Kc(e, t) {
  return P(), R("div", Uc, Vc);
}
const zc = bt(Hc, [["render", Kc]]),
  Wc = {
    class:
      "w-screen h-auto bg-white p-10 flex justify-center items-center text-[#242424]",
  },
  qc = { class: "w-[1180px] h-full flex flex-col" },
  Gc = _(
    "span",
    { class: "text-3xl font-bold" },
    "Часто задаваемые вопросы",
    -1
  ),
  Jc = { class: "border-b border-t border-[#242424] mt-5" },
  Yc = { class: "flex flex-col" },
  Xc = { class: "p-5" },
  Qc = { class: "flex justify-between w-full" },
  Zc = _("span", { class: "text-xl text-normal" }, "Вопрос 1", -1),
  eu = { key: 0, class: "text-[#24242480]" },
  tu = _("div", { class: "h-px bg-[#242424] w-full" }, null, -1),
  su = { class: "p-5" },
  nu = { class: "flex justify-between w-full" },
  iu = _("span", { class: "text-xl text-normal" }, "Вопрос 2", -1),
  lu = { key: 0, class: "text-[#24242480]" },
  ru = {
    __name: "QuestionsComponent",
    setup(e) {
      const t = ce(!1),
        s = ce(!1);
      return (n, i) => (
        P(),
        R("div", Wc, [
          _("div", qc, [
            Gc,
            _("div", Jc, [
              _("div", Yc, [
                _("div", Xc, [
                  _("div", Qc, [
                    Zc,
                    _(
                      "button",
                      { onClick: i[0] || (i[0] = (l) => (t.value = !t.value)) },
                      Ce(t.value ? "-" : "+"),
                      1
                    ),
                  ]),
                  t.value
                    ? (P(),
                      R(
                        "span",
                        eu,
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore pariatur laboriosam cum magnam in adipisci, recusandae sed assumenda dignissimos aperiam enim explicabo, non dolores quis similique sint. Iste, maiores?"
                      ))
                    : ne("", !0),
                ]),
                tu,
                _("div", su, [
                  _("div", nu, [
                    iu,
                    _(
                      "button",
                      { onClick: i[1] || (i[1] = (l) => (s.value = !s.value)) },
                      Ce(s.value ? "-" : "+"),
                      1
                    ),
                  ]),
                  s.value
                    ? (P(),
                      R(
                        "span",
                        lu,
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore pariatur laboriosam cum magnam in adipisci, recusandae sed assumenda dignissimos aperiam enim explicabo, non dolores quis similique sint. Iste, maiores?"
                      ))
                    : ne("", !0),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  ou = "img/VK.svg",
  cu = "img/Instagram.svg",
  uu = "img/map.png",
  au = {},
  fu = {
    class:
      "w-screen h-auto py-10 bg-[#F3F6F6] flex justify-center items-center",
  },
  du = Ge(
    '<div class="w-[1180px] px-10 h-full flex justify-center items-center max-md:w-full"><div class="flex flex-col gap-5 max-md:w-screen"><span class="text-3xl font-bold text-[#444B58]">Контакты</span><span class="text-[#B2B5BB] flex gap-5 justify-start align-center"><span>главный офис</span><div class="h-[18px] w-[18px] rounded-full bg-white flex justify-center items-center"><abbr color="#000" title="Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж">?</abbr></div></span><span class="text-[#444B58] text-2xl font-bold">+7 800 789 89 89</span><span class="text-[#444B58]">г. Санкт-Петербург, Комсомольская, 43 к1</span><span class="text-[#B2B5BB]">отдел продаж</span><span class="text-[#444B58] text-2xl font-bold">+7 800 789 89 89</span><span class="text-[#444B58]">г. Санкт-Петербург, Комсомольская, 43 к1</span><div class="flex gap-5"><button class="w-10 h-10"><img src="' +
      ou +
      '" alt=""></button><button class="w-10 h-10"><img src="' +
      cu +
      '" alt=""></button></div></div><div class="w-1/2"><img src="' +
      uu +
      '" alt="" class="w-full h-full max-md:hidden"></div></div>',
    1
  ),
  pu = [du];
function hu(e, t) {
  return P(), R("div", fu, pu);
}
const gu = bt(au, [["render", hu]]),
  mu = "inst/logo.png",
  _u = "inst/inst (1).jpg",
  xu = "inst/inst (2).jpg",
  vu = "inst/inst (3).jpg",
  bu = "inst/inst (4).jpg",
  yu = "inst/inst (5).jpg",
  wu = {},
  Fu = {
    class: "w-screen h-auto bg-white py-10 flex justify-center items-center",
  },
  Cu = Ge(
    '<div class="w-[1180px] h-full flex justify-center gap-10 items-center px-10 max-[1100px]:w-full max-[1100px]:flex-col" data-v-6c3ba57d><div class="w-2/3 max-[1100px]:w-full h-[400px] bg-[#484283] flex justify-center items-center flex-col p-5 text-center text-white [&amp;&gt;input]:w-full gap-2 [&amp;&gt;input]:p-3 [&amp;&gt;input]:rounded rounded" data-v-6c3ba57d><h1 class="text-3xl font-bold" data-v-6c3ba57d>Есть вопросы?</h1><span data-v-6c3ba57d>Заполните форму и наш менеджер свяжется с вами</span><input type="text" placeholder="Ваше имя" data-v-6c3ba57d><input type="text" placeholder="Номер телефона" data-v-6c3ba57d><button class="w-full bg-[#F14F4F] p-3 rounded" data-v-6c3ba57d>Отправить</button></div><div class="w-2/3 max-[1100px]:w-full flex justify-center items-center flex-col" data-v-6c3ba57d><img src="' +
      mu +
      '" alt="" data-v-6c3ba57d><div class="gridCont grid grid-col-4 grid-row-2 gap-[10px]" data-v-6c3ba57d><img src="' +
      _u +
      '" alt="" class="grid-area-1" style="grid-area:a;" data-v-6c3ba57d><img src="' +
      xu +
      '" alt="" class="grid-area-2" style="grid-area:c;" data-v-6c3ba57d><img src="' +
      vu +
      '" alt="" class="grid-area-3" style="grid-area:d;" data-v-6c3ba57d><img src="' +
      bu +
      '" alt="" class="grid-area-4" style="grid-area:b;" data-v-6c3ba57d><img src="' +
      yu +
      '" alt="" class="grid-area-5" style="grid-area:e;" data-v-6c3ba57d></div></div></div>',
    1
  ),
  $u = [Cu];
function Eu(e, t) {
  return P(), R("div", Fu, $u);
}
const Iu = bt(wu, [
    ["render", Eu],
    ["__scopeId", "data-v-6c3ba57d"],
  ]),
  Ou = {},
  Au = {
    class:
      "h-auto w-screen bg-[#444B58] flex flex-col justify-center items-center",
  },
  Tu = _(
    "div",
    {
      class:
        "flex justify-between items-center w-[1180px] text-white text-base family-sans pt-5 pb-5 top-0 z-20 max-xl:w-[900px] max-lg:w-screen max-lg:px-10",
    },
    [
      _(
        "div",
        { class: "font-bold text-3xl family-sans w-full text-center" },
        "SneakMax"
      ),
    ],
    -1
  ),
  ju = [Tu];
function Su(e, t) {
  return P(), R("header", Au, ju);
}
const Pu = bt(Ou, [["render", Su]]),
  Bu = { class: "" },
  Mu = {
    __name: "App",
    setup(e) {
      const t = ce([]),
        s = (i) => {
          t.value.push(i);
        },
        n = (i) => {
          t.value.splice(t.value.indexOf(i), 1);
        };
      return (i, l) => (
        P(),
        R("h1", Bu, [
          G(Ao, { cartItems: t.value, deleteCartItems: n }, null, 8, [
            "cartItems",
          ]),
          G(Zo, { addCartItems: s }),
          G(rc),
          G(Pc),
          G(zc),
          G(ru),
          G(gu),
          G(Iu),
          G(Pu),
        ])
      );
    },
  };
Xr(Mu).mount("#app");
