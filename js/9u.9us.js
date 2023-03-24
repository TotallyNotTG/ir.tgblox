(function(self, undefined) {
    function CreateMethodProperty(e, r, t) {
        var a = {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        };
        Object.defineProperty(e, r, a)
    }

    function Get(n, t) {
        return n[t]
    }

    function IsCallable(n) {
        return "function" == typeof n
    }

    function ToObject(e) {
        if (null === e || e === undefined) throw TypeError();
        return Object(e)
    }

    function GetV(t, e) {
        return ToObject(t)[e]
    }

    function GetMethod(e, n) {
        var r = GetV(e, n);
        if (null === r || r === undefined) return undefined;
        if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
        return r
    }

    function Type(e) {
        switch (typeof e) {
            case "undefined":
                return "undefined";
            case "boolean":
                return "boolean";
            case "number":
                return "number";
            case "string":
                return "string";
            case "symbol":
                return "symbol";
            default:
                return null === e ? "null" : "Symbol" in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? "symbol" : "object"
        }
    }

    function IsConstructor(t) {
        return "object" === Type(t) && ("function" == typeof t && !!t.prototype)
    }

    function SpeciesConstructor(e, o) {
        var r = Get(e, "constructor");
        if (r === undefined) return o;
        if ("object" !== Type(r)) throw new TypeError("O.constructor is not an Object");
        var n = "function" == typeof self.Symbol && "symbol" == typeof self.Symbol.species ? r[self.Symbol.species] : undefined;
        if (n === undefined || null === n) return o;
        if (IsConstructor(n)) return n;
        throw new TypeError("No constructor found")
    }! function() {
        var t = Function.prototype.bind.call(Function.prototype.call, Promise.prototype.then),
            o = function(t, o) {
                return new t(function(t) {
                    t(o())
                })
            };
        CreateMethodProperty(Promise.prototype, "finally", function(e) {
            var r = this;
            if ("object" !== Type(r)) throw new TypeError("Method %PromisePrototype%.finally called on incompatible receiver " + Object.prototype.toString.call(r));
            var n = SpeciesConstructor(r, Promise);
            if (!1 === IsCallable(e)) var i = e,
                c = e;
            else i = function(r) {
                return t(o(n, e), function() {
                    return r
                })
            }, c = function(r) {
                return t(o(n, e), function() {
                    throw r
                })
            };
            return t(r, i, c)
        })
    }();
})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});