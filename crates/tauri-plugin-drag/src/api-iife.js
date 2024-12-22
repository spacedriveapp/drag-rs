if ("__TAURI__" in window) {
  var __TAURI_PLUGIN_DRAG__ = function (t) {
    "use strict";
    function e(t, e, r, i) {
      if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t);
    }
    function r(t, e, r, i, n) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r;
    }
    var i, n, s;
    "function" == typeof SuppressedError && SuppressedError;
    class a {
      constructor() {
        this.__TAURI_CHANNEL_MARKER__ = true, i.set(this, () => {}), n.set(this, 0), s.set(this, {}), this.id = function (t, e = false) {
          return window.__TAURI_INTERNALS__.transformCallback(t, e);
        }(({message: t, id: a}) => {
          if (a === e(this, n, "f")) {
            r(this, n, a + 1, "f"), e(this, i, "f").call(this, t);
            const o = Object.keys(e(this, s, "f"));
            if (o.length > 0) {
              let t = a + 1;
              for (const r of o.sort()) {
                if (parseInt(r) !== t) break;
                {
                  const n = e(this, s, "f")[r];
                  delete e(this, s, "f")[r], e(this, i, "f").call(this, n), t += 1;
                }
              }
              r(this, n, t, "f");
            }
          } else e(this, s, "f")[a.toString()] = t;
        });
      }
      set onmessage (t) {
        r(this, i, t, "f");
      }
      get onmessage() {
        return e(this, i, "f");
      }
      toJSON() {
        return `__CHANNEL__:${this.id}`;
      }
    }
    return i = new WeakMap, n = new WeakMap, s = new WeakMap, t.startDrag = async function (t, e) {
      const r = new a;
      e && (r.onmessage = e), await async function (t, e = {}, r) {
        return window.__TAURI_INTERNALS__.invoke(t, e, r);
      }("plugin:drag|start_drag", {
        item: t.item,
        image: t.icon || undefined,  // Make icon optional
        onEvent: r
      });
    }, t;
  }({});
  Object.defineProperty(window.__TAURI__, "drag", {value: __TAURI_PLUGIN_DRAG__});
}
