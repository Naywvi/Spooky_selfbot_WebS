_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [8],
    {
        Juyh: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "default", function () {
                    return p;
                });
            var o = n("1OyB"),
                a = n("vuIU"),
                i = n("JX7q"),
                r = n("Ji7U"),
                s = n("md7G"),
                c = n("foSv"),
                l = n("q1tI"),
                u = n.n(l),
                d = (n("8Kt/"), n("YFqc"), n("cmSt")),
                h = n("yMCV"),
                m = n("HuT5"),
                f = n("veun"),
                y = n("z/o8"),
                v = u.a.createElement;
            function g(e) {
                var t = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = Object(c.a)(e);
                    if (t) {
                        var a = Object(c.a)(this).constructor;
                        n = Reflect.construct(o, arguments, a);
                    } else n = o.apply(this, arguments);
                    return Object(s.a)(this, n);
                };
            }
            var p = (function (e) {
                Object(r.a)(n, e);
                var t = g(n);
                function n(e) {
                    var a;
                    return Object(o.a)(this, n), ((a = t.call(this, e)).smoothScroller = new f.a()), (a.state = { elementsToPreload: null }), (a.loadingCompleted = a.loadingCompleted.bind(Object(i.a)(a))), a;
                }
                return (
                    Object(a.a)(n, [
                        {
                            key: "loadingCompleted",
                            value: function () {
                                Object(h.a)(0);
                                var e = document.querySelector(".left"),
                                    t = document.querySelector(".right");
                                y.a.fromTo(e, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: "elastic.out(1, 0.75)" }), y.a.fromTo(t, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.1, ease: "elastic.out(1, 0.75)" });
                            },
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                0 == Object(m.k)() && this.smoothScroller.init(),
                                    document.querySelector(".contactInfoLink").addEventListener("click", function () {
                                        var e = document.querySelector(".right");
                                        window.scrollTo({ top: e.offsetTop + 50, left: 0, behavior: "smooth" });
                                    });
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.smoothScroller.destroy();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return v(
                                    "div",
                                    { className: "page" },
                                    v(d.a, { className: "loader", elementsToPreload: this.state.elementsToPreload, loadingCompletedCallback: this.loadingCompleted }),
                                    v(
                                        "div",
                                        { className: "page-content page-about content-item" },
                                        v(
                                            "div",
                                            { className: "left" },
                                            v("div", { className: "contactInfoLink" }, "Contact info"),
                                            v("h2", null, "The spooky staff thanks you for your attention \ud83d\udc4b"),
                                            v(
                                                "p",
                                                null,
                                                "The prices are fixed and does not change. You can benefit from discounts during events exclusively prescribed by the staff."
                                            ),
                                            v(
                                                "p",
                                                null,
                                                "The staff can indeed modify or add commands following any updates or changes to the content."
                                            ),
                                            v(
                                                "p",
                                                null,
                                                "You can find the rules on our",
                                                v("a", { href: "https://discord.gg/28vD4E3AMQ", target: "_blank" }, " discord"),
                                                ". The staff retains the right to revoke or ban users who do not respect the rules of conduct."
                                            ),
                                            v("p", null, "To access our services you will need to login via discord. This allows the recovery of the token and your information in order to allow the total security of our services. This being so, even if the token changes, your record does not change. You will just have to reconnect to the website."),
                                            
                                        ),
                                        v(
                                            "div",
                                            { className: "right" },
                                            v("h2", null, "Join us the family on discord"),
                                            v("a", { href: "https://discord.gg/kbX8jvZPGS", className: "contact-cta "}, v("img", { alt: "Files", src: "./img/about.png"}))
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(u.a.Component);
        },
        cmSt: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return f;
            });
            var o = n("1OyB"),
                a = n("vuIU"),
                i = n("Ji7U"),
                r = n("md7G"),
                s = n("foSv"),
                c = n("q1tI"),
                l = n.n(c),
                u = n("z/o8"),
                d = n("pc+1"),
                h = l.a.createElement;
            function m(e) {
                var t = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = Object(s.a)(e);
                    if (t) {
                        var a = Object(s.a)(this).constructor;
                        n = Reflect.construct(o, arguments, a);
                    } else n = o.apply(this, arguments);
                    return Object(r.a)(this, n);
                };
            }
            var f = (function (e) {
                Object(i.a)(n, e);
                var t = m(n);
                function n(e) {
                    var a;
                    return Object(o.a)(this, n), ((a = t.call(this, e)).state = { isLoading: !0, loadingPercentage: 0, elementsToPreload: e.elementsToPreload, loadingCompletedCallback: e.loadingCompletedCallback }), a;
                }
                return (
                    Object(a.a)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                u.a.set(document.querySelector(".containerContent"), { opacity: 1 });
                                var e = this,
                                    t = d.b.easeOut;
                                u.a.fromTo(document.querySelector(".loaderTitle"), 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: t }),
                                    u.a.fromTo(document.querySelector(".loaderPercentage"), 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0, delay: 0.1, ease: t }),
                                    u.a.fromTo(
                                        document.querySelector(".loaderLineProgress"),
                                        0.2,
                                        { opacity: 0, y: 10 },
                                        {
                                            opacity: 1,
                                            y: 0,
                                            delay: 0.2,
                                            ease: t,
                                            onComplete: function () {
                                                e.startLoader();
                                            },
                                        }
                                    );
                            },
                        },
                        {
                            key: "startLoader",
                            value: function () {
                                document.querySelector("body").classList.add("loading");
                                var e = this;
                                if (null == this.state.elementsToPreload)
                                    return (
                                        e.setState({ loadingPercentage: 100 }),
                                        u.a.to(document.querySelector(".loaderLineProgress"), 0.3, { width: 100, ease: d.b.easeOut }),
                                        void setTimeout(function () {
                                            e.finishLoader();
                                        }, 500)
                                    );
                                var t = document.querySelectorAll(this.state.elementsToPreload),
                                    n = imagesLoaded(t, { background: !0 }, function (e) {});
                                n.on("progress", function (t, n) {
                                    var o = Math.ceil((t.progressedCount / t.images.length) * 100);
                                    e.setState({ loadingPercentage: o }), u.a.to(document.querySelector(".loaderLineProgress"), 0.3, { width: o, ease: d.b.easeOut });
                                }),
                                    n.on("done", function (t) {
                                        e.finishLoader();
                                    });
                            },
                        },
                        {
                            key: "finishLoader",
                            value: function () {
                                var e = this,
                                    t = document.querySelector(".loaderContent");
                                u.a.fromTo(
                                    t,
                                    0.5,
                                    { opacity: 1 },
                                    {
                                        opacity: 0,
                                        ease: d.b.easeOut,
                                        onComplete: function () {
                                            e.setState({ isLoading: !1 }), e.state.loadingCompletedCallback(), document.querySelector("body").classList.remove("loading");
                                        },
                                    }
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return this.state.isLoading
                                    ? h(
                                          "div",
                                          { className: "loader" },
                                          h(
                                              "div",
                                              { className: "loaderContent" },
                                              h("div", { className: "loaderTitle" }, "Loading"),
                                              h("div", { className: "loaderPercentage" }, this.state.loadingPercentage),
                                              h("div", { className: "loaderLine" }, h("span", { className: "loaderLineProgress" }))
                                          )
                                      )
                                    : null;
                            },
                        },
                    ]),
                    n
                );
            })(l.a.Component);
        },
        rB5V: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/about",
                function () {
                    return n("Juyh");
                },
            ]);
        },
        veun: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            });
            var o = n("1OyB"),
                a = n("vuIU"),
                i = (function () {
                    function e() {
                        Object(o.a)(this, e);
                    }
                    return (
                        Object(a.a)(e, [
                            {
                                key: "bindMethods",
                                value: function () {
                                    var e = this;
                                    ["scroll", "run", "resize"].forEach(function (t) {
                                        return (e[t] = e[t].bind(e));
                                    });
                                },
                            },
                            {
                                key: "setStyles",
                                value: function () {
                                    Object.assign(this.dom.el.style, { position: "fixed", top: 0, left: 0, height: "100%", width: "100%", overflow: "hidden" });
                                },
                            },
                            {
                                key: "removeStyles",
                                value: function () {
                                    null != this.dom && Object.assign(this.dom.el.style, { position: "static", height: "auto", width: "auto" });
                                },
                            },
                            {
                                key: "setHeight",
                                value: function () {
                                    document.body.style.height = "".concat(this.dom.content.getBoundingClientRect().height, "px");
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    this.setHeight(), this.scroll();
                                },
                            },
                            {
                                key: "preload",
                                value: function () {
                                    var e = this;
                                    console.log("preload work items"),
                                        imagesLoaded(this.dom.content, { background: !0 }, function (t) {
                                            e.setHeight();
                                        });
                                },
                            },
                            {
                                key: "scroll",
                                value: function () {
                                    this.data.current = window.scrollY;
                                },
                            },
                            {
                                key: "run",
                                value: function () {
                                    (this.data.last += (this.data.current - this.data.last) * this.data.ease), (this.data.rounded = Math.round(100 * this.data.last) / 100);
                                    var e = 7.5 * +((this.data.current - this.data.rounded) / this.config.width);
                                    (this.dom.content.style.transform = "translate3d(0, -".concat(this.data.rounded, "px, 0) skewY(").concat(e, "deg)")), this.requestAnimationFrame();
                                },
                            },
                            {
                                key: "on",
                                value: function () {
                                    this.setStyles(), this.setHeight(), this.addEvents(), this.requestAnimationFrame();
                                },
                            },
                            {
                                key: "off",
                                value: function () {
                                    this.cancelAnimationFrame(), this.removeEvents();
                                },
                            },
                            {
                                key: "requestAnimationFrame",
                                value: (function (e) {
                                    function t() {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (t.toString = function () {
                                            return e.toString();
                                        }),
                                        t
                                    );
                                })(function () {
                                    this.rAF = requestAnimationFrame(this.run);
                                }),
                            },
                            {
                                key: "cancelAnimationFrame",
                                value: (function (e) {
                                    function t() {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (t.toString = function () {
                                            return e.toString();
                                        }),
                                        t
                                    );
                                })(function () {
                                    cancelAnimationFrame(this.rAF);
                                }),
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    (document.body.style.height = ""), (this.data = null), this.removeStyles(), this.removeEvents(), this.cancelAnimationFrame();
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    this.setHeight(), (this.data.rounded = this.data.last = this.data.current);
                                },
                            },
                            {
                                key: "addEvents",
                                value: function () {
                                    window.addEventListener("resize", this.resize, { passive: !0 }), window.addEventListener("scroll", this.scroll, { passive: !0 });
                                },
                            },
                            {
                                key: "removeEvents",
                                value: function () {
                                    window.removeEventListener("resize", this.resize, { passive: !0 }), window.removeEventListener("scroll", this.scroll, { passive: !0 });
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    this.bindMethods(),
                                        (this.config = { height: window.innerHeight, width: window.innerWidth }),
                                        (this.data = { ease: 0.1, current: 0, last: 0, rounded: 0 }),
                                        (this.dom = { el: document.getElementById("container"), content: document.querySelector("[data-scroll-content]") }),
                                        (this.rAF = null),
                                        this.preload(),
                                        this.on();
                                },
                            },
                        ]),
                        e
                    );
                })();
        },
        yMCV: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return a;
            });
            var o = n("z/o8"),
                a = function (e) {
                    var t = document.querySelector(".logo"),
                        n = document.querySelector(".mainNav");
                    1 != t.style.opacity &&
                        (o.a.fromTo(t, 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0, delay: e, ease: "elastic.out(1, 0.75)" }),
                        o.a.fromTo(n, 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0, delay: e + 0.1, ease: "elastic.out(1, 0.75)" }));
                };
        },
    },
    [["rB5V", 0, 1, 2, 3, 4]],
]);
