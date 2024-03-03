/*! For license information please see solclient.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("solace", [], t)
      : "object" == typeof exports
        ? (exports.solace = t())
        : (e.solace = t());
})(this, () =>
  (() => {
    var e = {
        6010: (e, t, s) => {
          e.exports = s(3987);
        },
        840: (e, t, s) => {
          const { Base64: n } = s(7791),
            { Bits: r } = s(1531),
            { Convert: i } = s(3087),
            { Hex: o } = s(8586),
            { Long: a } = s(559);
          (e.exports.Base64 = n),
            (e.exports.Bits = r),
            (e.exports.Convert = i),
            (e.exports.Hex = o),
            (e.exports.Long = a);
        },
        7791: (e, t, s) => {
          var n = s(8764).lW;
          const r =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            i = [
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 99, -1, -1, 99, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              99, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
              52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1,
              -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27,
              28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            ];
          class o extends Error {}
          const a = {
              base64_encode(e) {
                let t = "",
                  s = 0;
                do {
                  const n = e.charCodeAt(s++),
                    i = e.charCodeAt(s++),
                    o = e.charCodeAt(s++),
                    a = n >> 2,
                    c = ((3 & n) << 4) | (i >> 4);
                  let u = ((15 & i) << 2) | (o >> 6),
                    l = 63 & o;
                  isNaN(i) ? (u = l = 64) : isNaN(o) && (l = 64),
                    (t += r.charAt(a)),
                    (t += r.charAt(c)),
                    (t += r.charAt(u)),
                    (t += r.charAt(l));
                } while (s < e.length);
                return t;
              },
              base64_decode(e) {
                let t = "",
                  s = 0;
                do {
                  for (; i[e.charCodeAt(s)] > 64; ) s++;
                  const n = i[e.charCodeAt(s++)],
                    r = i[e.charCodeAt(s++)],
                    a = i[e.charCodeAt(s++)],
                    c = i[e.charCodeAt(s++)];
                  if (n < 0 || r < 0 || a < 0 || c < 0)
                    throw new o("Invalid base64 character");
                  const u = (n << 2) | (r >> 4),
                    l = ((15 & r) << 4) | (a >> 2),
                    h = ((3 & a) << 6) | c;
                  (t += String.fromCharCode(u)),
                    64 !== a && (t += String.fromCharCode(l)),
                    64 !== c && (t += String.fromCharCode(h));
                } while (s < e.length - 3);
                return t;
              },
            },
            c = "undefined" == typeof window,
            u = "undefined" != typeof Blob,
            l =
              void 0 !== n && (u || c)
                ? {
                    base64_encode: (e) =>
                      n.from(e, "binary").toString("base64"),
                    base64_decode: (e) =>
                      n.from(e, "base64").toString("binary"),
                  }
                : {},
            h =
              "undefined" != typeof window
                ? {
                    base64_encode: window.btoa ? (e) => window.btoa(e) : null,
                    base64_decode: window.atob ? (e) => window.atob(e) : null,
                  }
                : {},
            d = {
              encode: h.base64_encode || l.base64_encode || a.base64_encode,
              decode: h.base64_decode || l.base64_decode || a.base64_decode,
            };
          e.exports.Base64 = d;
        },
        1531: (e) => {
          const t = {
            get: (e, t, s) => (e >>> t) & ((1 << s) - 1),
            set(e, t, s, n) {
              const r = (1 << n) - 1;
              return (e & ~(r << s)) | ((t & r) << s);
            },
          };
          e.exports.Bits = t;
        },
        3087: (e, t, s) => {
          const n = s(1583),
            { ErrorSubcode: r, OperationError: i } = s(3870),
            o = s(8764).lW,
            a = String.fromCharCode(0, 0),
            c = String.fromCharCode(0, 0, 0),
            u = String.fromCharCode(0, 0, 0, 0),
            l = 8192,
            h = 32768;
          function d(e) {
            const t = e.length,
              s = new ArrayBuffer(t),
              n = new Uint8Array(s, 0, t);
            for (let s = 0; s < t; s++) n[s] = e.charCodeAt(s);
            return n;
          }
          function p(e) {
            if (0 === e) return u;
            if (e > 0) {
              if (e < 256) return c + String.fromCharCode(e);
              if (e < 65536)
                return (
                  a + String.fromCharCode(e >> 8) + String.fromCharCode(255 & e)
                );
            }
            return (
              String.fromCharCode((e >> 24) & 255) +
              String.fromCharCode((e >> 16) & 255) +
              String.fromCharCode((e >> 8) & 255) +
              String.fromCharCode(255 & e)
            );
          }
          function _(e) {
            return (
              16777216 * e.charCodeAt(0) +
              (e.charCodeAt(1) << 16) +
              (e.charCodeAt(2) << 8) +
              e.charCodeAt(3)
            );
          }
          const E = {
            arrayBufferToString: function (e) {
              if (!e) return "";
              const t = e.byteLength,
                s = new Uint8Array(e);
              if (t < h) return String.fromCharCode.apply(null, s);
              let n = 0,
                r = "";
              for (; n < t; )
                (r += String.fromCharCode.apply(null, s.subarray(n, n + h))),
                  (n += h);
              return r;
            },
            stringToArrayBuffer: function (e) {
              return d(e).buffer;
            },
            uint8ArrayToString: function (e, t = void 0) {
              const s = e.byteLength,
                n = new Uint8Array(o.from(e));
              let r = "";
              for (let e = 0; e < s; e++)
                t && "hex" === t.toLowerCase()
                  ? (r += n[e].toString(16).padStart(2, "0"))
                  : (r += String.fromCharCode(255 & n[e]));
              return r;
            },
            stringToUint8Array: d,
            hexStringToUint8Array: function (e) {
              return null == e
                ? new Uint8Array()
                : Uint8Array.from(o.from(e, "hex"));
            },
            int8ToStr: function (e) {
              return String.fromCharCode(255 & e);
            },
            strToInt8: function (e) {
              return 255 & e.charCodeAt(0);
            },
            int16ToStr: function (e) {
              return (
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e)
              );
            },
            strToInt16: function (e) {
              return (e.charCodeAt(0) << 8) + e.charCodeAt(1);
            },
            int24ToStr: function (e) {
              return (
                String.fromCharCode((e >> 16) & 255) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e)
              );
            },
            strToInt24: function (e) {
              return (
                (e.charCodeAt(0) << 16) +
                (e.charCodeAt(1) << 8) +
                e.charCodeAt(2)
              );
            },
            int32ToStr: p,
            strToInt32: function (e) {
              return (
                (e.charCodeAt(0) << 24) +
                (e.charCodeAt(1) << 16) +
                (e.charCodeAt(2) << 8) +
                e.charCodeAt(3)
              );
            },
            strToUInt32: _,
            int64ToStr: function (e) {
              if ("number" != typeof e) return p(e.high) + p(e.low);
              if (e >= 0) {
                if (e < 256) return u + c + String.fromCharCode(e);
                if (e < 65536)
                  return (
                    u +
                    a +
                    String.fromCharCode(e >> 8) +
                    String.fromCharCode(255 & e)
                  );
                if (e < 4294967296)
                  return (
                    u +
                    (String.fromCharCode((e >> 24) & 255) +
                      String.fromCharCode((e >> 16) & 255) +
                      String.fromCharCode((e >> 8) & 255) +
                      String.fromCharCode(255 & e))
                  );
              }
              return (
                String.fromCharCode((e >> 56) & 255) +
                String.fromCharCode((e >> 48) & 255) +
                String.fromCharCode((e >> 40) & 255) +
                String.fromCharCode((e >> 32) & 255) +
                String.fromCharCode((e >> 24) & 255) +
                String.fromCharCode((e >> 16) & 255) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e)
              );
            },
            strToUInt64: function (e) {
              return n.fromBits(_(e.substr(4, 4)), _(e.substr(0, 4)), !0);
            },
            byteArrayToStr: function (e) {
              const t = e.length;
              if (t < l) return String.fromCharCode.apply(null, e);
              let s = 0,
                n = "";
              for (; s < t; )
                (n += String.fromCharCode.apply(null, e.slice(s, s + l))),
                  (s += l);
              return n;
            },
            strToByteArray: function (e) {
              const t = [];
              let s;
              for (s = 0; s < e.length; s++) t[s] = e.charCodeAt(s);
              return t;
            },
            strToHexArray: function (e) {
              return Array.prototype.map.call(e.split(""), function (e) {
                return e.charCodeAt(0).toString(16);
              });
            },
            ucs2ToUtf8: function (e) {
              return unescape(encodeURIComponent(e));
            },
            utf8ToUcs2: function (e) {
              return decodeURIComponent(escape(e));
            },
            anythingToBuffer: function (e) {
              if (o.isBuffer(e)) return e;
              if ("string" == typeof e) return o.from(e, "latin1");
              if (e instanceof ArrayBuffer) return o.from(e);
              if (
                e.buffer instanceof ArrayBuffer &&
                "number" == typeof e.byteLength &&
                "number" == typeof e.byteOffset
              )
                return 0 === e.byteOffset &&
                  e.byteLength === e.buffer.byteLength
                  ? o.from(e.buffer)
                  : o.from(e.buffer, e.byteOffset, e.byteLength);
              throw new i(
                "Parameter value failed validation",
                r.PARAMETER_OUT_OF_RANGE,
                "Expecting Buffer/Uint8Array, also accepting string, ArrayBuffer, any TypedArray, or DataView.",
              );
            },
          };
          e.exports.Convert = E;
        },
        8586: (e) => {
          function t(e) {
            if ("number" != typeof e) return "";
            const t = e.toString(16);
            return t.length < 2 ? `0${t}` : t;
          }
          const s = {
            formatHexString: function (e) {
              return "number" == typeof e
                ? `0x${t(e)}`
                : "object" == typeof e && Array.isArray(e)
                  ? e.map(t).join()
                  : "string" == typeof e
                    ? Array.prototype.map
                        .call(e, (s, n) => t(e.charCodeAt(n)))
                        .join("")
                    : null;
            },
          };
          e.exports.Hex = s;
        },
        559: (e, t, s) => {
          e.exports.Long = s(1583);
        },
        9850: (e, t, s) => {
          const n = s(840),
            r = s(1880),
            i = s(3170),
            o = s(3870),
            a = s(9359),
            c = s(828),
            u = s(8535),
            l = s(390),
            h = s(4789),
            d = s(4573),
            p = s(6780),
            _ = s(7252),
            E = s(5594),
            T = s(7291),
            g = s(1843),
            S = s(5470),
            m = s(3147),
            f = s(7882),
            I = s(2201);
          e.exports = {
            Convert: n,
            Debug: r,
            Destination: i,
            Error: o,
            ESKit: a,
            Factory: c,
            FSM: u,
            Log: l,
            Message: h,
            MessageTracing: d,
            Publisher: p,
            SDT: _,
            Session: E,
            SMF: T,
            SolcacheSession: g,
            TestEnv: S,
            Transport: m,
            Util: f,
            Validate: I,
          };
        },
        3987: (e, t, s) => {
          const n = s(828),
            {
              SolclientFactory: r,
              SolclientFactoryProfiles: i,
              SolclientFactoryProperties: o,
            } = n,
            { Long: a } = s(840),
            { Destination: c, DestinationType: u, Topic: l } = s(3170),
            {
              ErrorSubcode: h,
              NotImplementedError: d,
              OperationError: p,
              RequestError: _,
              RequestEventCode: E,
            } = s(3870),
            { makeIterator: T } = s(9359),
            { ConsoleLogImpl: g, LogImpl: S, LogLevel: m } = s(390),
            {
              Message: f,
              MessageCacheStatus: I,
              MessageDeliveryModeType: R,
              MessageDumpFlag: C,
              MessageOutcome: A,
              MessageType: O,
              MessageUserCosType: N,
              ReplicationGroupMessageId: P,
            } = s(4789),
            {
              MessageConsumer: D,
              MessageConsumerAcknowledgeMode: y,
              MessageConsumerEventName: b,
              MessageConsumerProperties: M,
              QueueBrowser: w,
              QueueBrowserEventName: v,
              QueueBrowserProperties: L,
            } = s(4858),
            { ReplayStartLocation: U, ReplayStartLocationBeginning: F } =
              s(2604),
            {
              MessagePublisherAcknowledgeMode: x,
              MessagePublisherProperties: B,
            } = s(6780),
            { Baggage: G, TraceContext: k, TraceContextSetter: W } = s(4573),
            {
              AbstractQueueDescriptor: $,
              QueueAccessType: q,
              QueueDescriptor: V,
              QueueDiscardBehavior: H,
              QueuePermissions: Y,
              QueueProperties: Q,
              QueueType: X,
            } = s(5754),
            {
              SDTField: j,
              SDTFieldType: K,
              SDTMapContainer: z,
              SDTStreamContainer: J,
              SDTUnsupportedValueError: Z,
              SDTValueErrorSubcode: ee,
            } = s(7252),
            {
              AuthenticationScheme: te,
              CapabilityType: se,
              MessageRxCBInfo: ne,
              MutableSessionProperty: re,
              Session: ie,
              SessionEvent: oe,
              SessionEventCBInfo: ae,
              SessionEventCode: ce,
              SessionProperties: ue,
              SessionState: le,
              SslDowngrade: he,
            } = s(5594),
            {
              CacheCBInfo: de,
              CacheLiveDataAction: pe,
              CacheRequestResult: _e,
              CacheReturnCode: Ee,
              CacheReturnSubcode: Te,
              CacheSession: ge,
              CacheSessionProperties: Se,
            } = s(1843),
            { StatType: me } = s(6818),
            { TransportError: fe, TransportProtocol: Ie } = s(3147),
            { Version: Re } = s(7882),
            Ce = {
              AbstractQueueDescriptor: $,
              AuthenticationScheme: te,
              Baggage: G,
              CacheCBInfo: de,
              CacheLiveDataAction: pe,
              CacheRequestResult: _e,
              CacheReturnCode: Ee,
              CacheReturnSubcode: Te,
              CacheSession: ge,
              CacheSessionProperties: Se,
              CapabilityType: se,
              ConsoleLogImpl: g,
              Destination: c,
              DestinationType: u,
              ErrorSubcode: h,
              LogImpl: S,
              LogLevel: m,
              Long: a,
              Message: f,
              MessageCacheStatus: I,
              MessageConsumer: D,
              MessageConsumerAcknowledgeMode: y,
              MessageConsumerEventName: b,
              MessageConsumerProperties: M,
              MessageDeliveryModeType: R,
              MessageDumpFlag: C,
              MessageOutcome: A,
              MessagePublisherAcknowledgeMode: x,
              MessagePublisherProperties: B,
              MessageRxCBInfo: ne,
              MessageType: O,
              MessageUserCosType: N,
              MutableSessionProperty: re,
              NotImplementedError: d,
              OperationError: p,
              QueueAccessType: q,
              QueueBrowser: w,
              QueueBrowserEventName: v,
              QueueBrowserProperties: L,
              QueueDescriptor: V,
              QueueDiscardBehavior: H,
              QueuePermissions: Y,
              QueueProperties: Q,
              QueueType: X,
              ReplayStartLocation: U,
              ReplayStartLocationBeginning: F,
              ReplicationGroupMessageId: P,
              RequestError: _,
              RequestEventCode: E,
              SDTField: j,
              SDTFieldType: K,
              SDTMapContainer: z,
              SDTStreamContainer: J,
              SDTUnsupportedValueError: Z,
              SDTValueErrorSubcode: ee,
              Session: ie,
              SessionEvent: oe,
              SessionEventCBInfo: ae,
              SessionEventCode: ce,
              SessionProperties: ue,
              SessionState: le,
              SolclientFactory: r,
              SolclientFactoryProfiles: i,
              SolclientFactoryProperties: o,
              SslDowngrade: he,
              StatType: me,
              Topic: l,
              TraceContext: k,
              TraceContextSetter: W,
              TransportError: fe,
              TransportProtocol: Ie,
              Version: Re,
              makeIterator: T,
              _internal: s(9850),
            };
          Object.assign(e.exports, Ce);
        },
        1880: (e, t, s) => {
          const { Debug: n } = s(4092);
          e.exports.Debug = n;
        },
        4092: (e, t, s) => {
          const n = (() => {
              const e = [];
              for (let t = 0; t < 256; ++t)
                e[t] = t < 33 || t > 126 ? "." : String.fromCharCode(t);
              return e;
            })(),
            r = {
              formatDumpBytes: function (e, t, r) {
                const { StringBuffer: i, StringUtils: o } = s(7882),
                  { isEmpty: a, padLeft: c, padRight: u } = o;
                if (a(e)) return null;
                const l = new i(),
                  h = new i(),
                  d = new i();
                let p = 0;
                for (let s = 0, i = e.length; s < i; ++s) {
                  const i = e.charCodeAt(s);
                  d.append(c(i.toString(16), 2, "0"), " "),
                    h.append(n[i] || "."),
                    p++,
                    8 === p && d.append("   "),
                    (16 !== p && s !== e.length - 1) ||
                      (r > 0 && l.append(u("", r, " ")),
                      l.append(u(d.toString(), 54, " ")),
                      t && l.append(h),
                      l.append("\n"),
                      d.clear(),
                      h.clear(),
                      (p = 0));
                }
                return l.toString();
              },
              parseSMFStream: function (e) {
                const {
                    Codec: {
                      Decode: { decodeCompoundMessage: t },
                    },
                  } = s(7291),
                  { LOG_WARN: n, LOG_ERROR: r } = s(390);
                if (null === e)
                  return void r("data null in debugParseSmfStream");
                let i = 0;
                for (
                  n(`parseSMFStream(): Starting parse, length ${e.length}`);
                  i < e.length;

                ) {
                  const s = t(e, i),
                    r = s ? s.smfHeader : null;
                  if (!s || !r)
                    return (
                      n("parseSMFStream(): couldn't decode message."),
                      void n(`Position: ${i} length: ${e.length}`)
                    );
                  n(
                    `>> Pos(${i}) Protocol ${r.smf_protocol}, Length: ${r.messageLength}`,
                  ),
                    (i += r.messageLength);
                }
              },
            };
          e.exports.Debug = r;
        },
        3170: (e, t, s) => {
          const { Destination: n } = s(6798),
            { DestinationFromNetwork: r } = s(5527),
            { DestinationType: i } = s(7691),
            { DestinationUtil: o } = s(7493),
            { Parameter: a } = s(2201),
            { Queue: c } = s(2199),
            { SolclientFactory: u } = s(828),
            { Topic: l } = s(508);
          (u.createTopicDestination = u.createFactory(
            (e) => (a.isString("topicName", e), l.createFromName(e)),
          )),
            (u.createTopic = u.createFactory((e) => new l(e))),
            (u.createDurableQueueDestination = u.createFactory(
              (e) => (a.isString("queueName", e), c.createFromLocalName(e)),
            )),
            (e.exports.Destination = n),
            (e.exports.DestinationFromNetwork = r),
            (e.exports.DestinationType = i),
            (e.exports.DestinationUtil = o),
            (e.exports.Queue = c),
            (e.exports.Topic = l);
        },
        5527: (e, t, s) => {
          const { DestinationType: n } = s(7691),
            { DestinationUtil: r } = s(7493),
            { Queue: i } = s(2199),
            { Topic: o } = s(508),
            a = "#P2P/QUE/";
          function c(e, t = void 0) {
            if (null === e || 0 === e.length) return null;
            const s = { name: e, bytes: t || r.encodeBytes(e) };
            if ("#" === e[0]) {
              if (e.startsWith(a)) {
                const t = 9;
                return (
                  (s.name = e.substr(t)),
                  (s.type = n.QUEUE),
                  (s.offset = t),
                  new i(s)
                );
              }
              if (e.startsWith("#P2P/QTMP/"))
                return (
                  (s.name = e),
                  (s.type = n.TEMPORARY_QUEUE),
                  (s.offset = 0),
                  new i(s)
                );
            }
            return new o(s);
          }
          const u = {
            createDestinationFromBytes: function (e) {
              return null === e || 0 === e.length
                ? null
                : c(r.decodeBytes(e), e);
            },
            createDestinationFromName: c,
          };
          e.exports.DestinationFromNetwork = u;
        },
        7691: (e, t, s) => {
          const { Enum: n } = s(9359),
            r = {
              TOPIC: "topic",
              QUEUE: "queue",
              TEMPORARY_QUEUE: "temporary_queue",
            };
          (e.exports.DestinationType = n.new(r)),
            e.exports.DestinationType._setCanonical({
              TOPIC: r.TOPIC,
              QUEUE: r.QUEUE,
              TEMPORARY_QUEUE: r.TEMPORARY_QUEUE,
            });
        },
        7493: (e, t, s) => {
          const n = s(828),
            { Convert: r } = s(840),
            { DestinationType: i } = s(7691),
            { LOG_ERROR: o } = s(390),
            { SubscriptionInfo: a } = s(4133),
            { UUID: c, StringUtils: u } = s(7882),
            { ucs2ToUtf8: l, utf8ToUcs2: h } = r,
            { ProfileBinding: d } = n,
            { toSafeChars: p, stripNullTerminate: _ } = u,
            { ErrorSubcode: E, OperationError: T } = s(3870),
            g = { [i.QUEUE]: "#P2P/QUE/", [i.TEMPORARY_QUEUE]: "#P2P/QTMP/" };
          function S(e) {
            return g[e] || "";
          }
          function m(e, t) {
            return new T(`Invalid ${e}: ${t}`, E.INVALID_TOPIC_SYNTAX);
          }
          function f(e, t, s, n = m.bind(null, e)) {
            let r;
            const i = s.length;
            if (i < 1)
              return (
                (r = n("Too short (must be >= 1 character).")), { error: r }
              );
            const o = t.length;
            if (o > 251)
              return (
                (r = n(
                  `Too long (encoding must be <= 250 bytes); name is ${o - 1} bytes: '${s}'`,
                )),
                { error: r }
              );
            let a = !1;
            ">" === s.charAt(i - 1) && (a = !0);
            for (let e = 0; e < i; ++e)
              switch (s.charAt(e)) {
                case "/":
                  if (0 === e || e === i - 1 || "/" === s.charAt(e - 1))
                    return (
                      (r = n(`Empty level(s) in '${s}'@${e}.`)), { error: r }
                    );
                  break;
                case "*":
                  if (e < i - 1 && "/" !== s.charAt(e + 1))
                    return (
                      (r = n(`Illegal wildcard(s) in '${s}'@${e}.`)),
                      { error: r }
                    );
                  a = !0;
              }
            return { isWildcarded: a };
          }
          function I(e) {
            return d.value.topicUtf8Encode ? `${l(e)}\0` : `${e}\0`;
          }
          function R(e, t) {
            const s = S(e),
              n = s.length,
              r = s + t;
            return { bytes: I(r), offset: n, networkName: r };
          }
          const C = {
            createPrefix: S,
            createTemporaryName: function (e, t, s) {
              const n = s || c.generateUUID();
              switch (e) {
                case i.TOPIC:
                  return `#P2P/TTMP/${t}/${n}`;
                case i.TEMPORARY_QUEUE:
                  return `#P2P/QTMP/${t}/${n}`;
                default:
                  o("Unknown/invalid destination type", i.describe(e));
              }
            },
            decodeBytes: function (e) {
              return _(d.value.topicUtf8Encode ? h(e) : e);
            },
            encode: R,
            encodeBytes: I,
            legacyValidate: f,
            toSafeChars: p,
            validateAndEncode: function (e, t, s = m.bind(null, e)) {
              const { bytes: n, offset: r } = R(e, t),
                { error: i, isWildcarded: o } = f(e, n, t, s);
              let c = i,
                u = {};
              if (
                ((u.isWildcarded = o),
                c ||
                  Object.keys(g).some((e) => {
                    const n = g[e];
                    return (
                      !!t.startsWith(n) &&
                      ((c = s(
                        `Reserved prefix '${n}' found at start of '${t}'`,
                      )),
                      !0)
                    );
                  }),
                !c)
              ) {
                const { error: s, subInfo: n } = a.parseFromName(t, e);
                (c = s), (u = n);
              }
              return {
                bytes: n,
                offset: r,
                error: c,
                isWildcarded: o,
                subscriptionInfo: u,
              };
            },
          };
          e.exports.DestinationUtil = C;
        },
        6798: (e, t, s) => {
          var n = s(9489);
          const { DestinationType: r } = s(7691),
            { DestinationUtil: i } = s(7493);
          class o {
            constructor(e, t = r.TOPIC) {
              if ("object" == typeof e)
                (this._name = e.name),
                  (this._type = e.type),
                  (this._bytes = e.bytes),
                  (this._offset = e.offset),
                  e.isValidated
                    ? ((this._isValidated = !0),
                      (this._isWildcarded = e.isWildcarded),
                      (this._subscriptionInfo = e.subscriptionInfo || {}))
                    : ((this._isValidated = !1), (this._subscriptionInfo = {}));
              else {
                (this._name = e), (this._type = t);
                const s = i.encode(t, e);
                (this._bytes = s.bytes),
                  (this._offset = s.offset),
                  (this._isValidated = !1),
                  (this._subscriptionInfo = {});
              }
            }
            getName() {
              return this._name;
            }
            get name() {
              return this.getName();
            }
            getType() {
              return this._type;
            }
            get type() {
              return this.getType();
            }
            getBytes() {
              return this._bytes;
            }
            get bytes() {
              return this.getBytes();
            }
            getOffset() {
              return this._offset;
            }
            get offset() {
              return this.getOffset();
            }
            validate() {
              if (this._isValidated) {
                if (this._error) throw this._error;
                return;
              }
              const { error: e, isWildcarded: t } = i.legacyValidate(
                this.type,
                this.bytes,
                this.name,
              );
              if (((this._isValidated = !0), e)) throw ((this._error = e), e);
              this._isWildcarded = t;
            }
            isWildcarded() {
              return this.validate(), this._isWildcarded;
            }
            getSubscriptionInfo() {
              return this._subscriptionInfo || {};
            }
            toString() {
              return n(this);
            }
            equals(e) {
              return (
                e instanceof o &&
                this.toString().valueOf() === e.toString().valueOf()
              );
            }
          }
          e.exports.Destination = o;
        },
        2199: (e, t, s) => {
          const n = s(7493),
            { assert: r } = s(9359),
            { Destination: i } = s(6798),
            { DestinationType: o } = s(7691);
          class a extends i {
            constructor(e) {
              r(e.name, "Queue name not supplied"),
                r(
                  e.type === o.QUEUE || e.type === o.TEMPORARY_QUEUE,
                  "Queue spec.type is invalid",
                ),
                r(e.bytes, "Queue spec missing bytes"),
                r(void 0 !== e.offset, "Queue spec missing offset"),
                super(e);
            }
            getOffset() {
              return this._offset;
            }
            get offset() {
              return this.getOffset();
            }
            inspect() {
              return `[Queue ${this.getName()}]`;
            }
            static createFromLocalName(e) {
              const t = n.DestinationUtil.validateAndEncode(o.QUEUE, e);
              if (t.error) throw t.error;
              return new a({
                name: e,
                type: o.QUEUE,
                isValidated: !0,
                bytes: t.bytes,
                offset: t.offset,
                isWildcarded: t.isWildcarded,
                subscriptionInfo: t.subscriptionInfo,
              });
            }
          }
          e.exports.Queue = a;
        },
        4133: (e, t, s) => {
          var n = s(9489);
          const { DestinationType: r } = s(7691),
            { ErrorSubcode: i, OperationError: o } = s(3870),
            a = {
              [r.TOPIC]: {
                _layers: [
                  function (e, t, s, n, r) {
                    let i = n;
                    return (
                      t.length - i > 10 &&
                      !r.isNoExport &&
                      t.startsWith("#noexport/", i)
                        ? ((i += 10), (r.isNoExport = !0))
                        : (r.isNoExport = !1),
                      { error: void 0, index: i, result: r }
                    );
                  },
                  function (e, t, s, n, r, i) {
                    let o,
                      a,
                      c = n,
                      u = -1;
                    return (
                      t.length - c > 7 &&
                      !r.isShare &&
                      t.startsWith("#share/", n) &&
                      t.length - (c + 7) > 2
                        ? ((c += 7),
                          (u = c),
                          (c = t.indexOf("/", u)),
                          c > 0
                            ? ((a = t.substring(u, c)),
                              (c += 1),
                              (r.isShare = !0),
                              (r.shareGroup = a),
                              (r.dispatchTopicIndex = c))
                            : ((o = i(`Illegal share Group in '${t}'@${u}.`)),
                              (r.isShare = !0)))
                        : (r.isShare = !1),
                      { error: o, index: c, result: r }
                    );
                  },
                ],
                parse: function (e, t, s, n, r) {
                  const { error: i, result: o } = (function (e, t, s, n, r, i) {
                    const o = e.length || 0;
                    let a,
                      c = 0,
                      u = r || {};
                    for (let r = 0; r < o; ++r) {
                      const {
                        error: o,
                        index: l,
                        result: h,
                      } = e[r](t, s, n, c, u, i);
                      if (((c = l), (u = h), (a = o), a)) break;
                    }
                    return { error: a, result: u };
                  })(this._layers, e, t, s, n, r);
                  return { error: i, result: o };
                },
              },
            };
          function c(e, t) {
            return new o(`Invalid ${e}: ${t}`, i.INVALID_TOPIC_SYNTAX);
          }
          class u {
            constructor(e) {
              (this._name = e),
                (this._isShare = !1),
                (this._isNoExport = !1),
                (this._dispatchTopicIndex = -1),
                (this._shareGroup = null);
            }
            getName() {
              return this._name;
            }
            get name() {
              return this.getName();
            }
            get isShare() {
              return this._isShare;
            }
            set isShare(e) {
              this._isShare = e;
            }
            get isNoExport() {
              return this._isNoExport;
            }
            set isNoExport(e) {
              this._isNoExport = e;
            }
            get dispatchTopicIndex() {
              return this._dispatchTopicIndex < 0
                ? 0
                : this._dispatchTopicIndex;
            }
            set dispatchTopicIndex(e) {
              this._dispatchTopicIndex = e < 0 ? -1 : e;
            }
            get shareGroup() {
              return this.isShare ? this._shareGroup : null;
            }
            set shareGroup(e) {
              this.isShare && (this._shareGroup = e);
            }
            toString() {
              return n(this);
            }
            static parseFromName(e, t = r.TOPIC) {
              let s = new u(e),
                n = null;
              const i = a[t];
              if (i) {
                const { error: r, result: o } = i.parse(
                  t,
                  e,
                  null,
                  s,
                  c.bind(null, t),
                );
                (s = o), (n = r);
              }
              return { error: n, subInfo: s };
            }
          }
          e.exports.SubscriptionInfo = u;
        },
        508: (e, t, s) => {
          const n = s(7493),
            { Destination: r } = s(6798),
            { DestinationType: i } = s(7691);
          class o extends r {
            constructor(e) {
              "object" == typeof e
                ? super({
                    type: i.TOPIC,
                    name: e.name,
                    bytes: e.bytes,
                    offset: e.offset,
                    isValidated: e.isValidated,
                    isWildcarded: e.isWildcarded,
                    subscriptionInfo: e.subscriptionInfo,
                  })
                : super(e, i.TOPIC);
            }
            inspect() {
              return `[Topic ${this.getName()}]`;
            }
            static createFromName(e) {
              const t = n.DestinationUtil.validateAndEncode(i.TOPIC, e);
              if (t.error) throw t.error;
              return new o({
                name: e,
                isValidated: !0,
                bytes: t.bytes,
                offset: t.offset,
                isWildcarded: t.isWildcarded,
                subscriptionInfo: t.subscriptionInfo,
              });
            }
          }
          e.exports.Topic = o;
        },
        5470: (e, t, s) => {
          function n(e) {
            throw new Error(
              "Test environment will not override build environment",
            );
          }
          (n.target = () => n()), (e.exports = n);
        },
        3870: (e, t, s) => {
          const { ErrorResponseSubcodeMapper: n } = s(8976),
            { ErrorSubcode: r } = s(2662),
            { NotImplementedError: i } = s(2227),
            { OperationError: o } = s(6177),
            { RequestError: a } = s(7904),
            { RequestEventCode: c } = s(4170),
            { SolaceError: u } = s(4006);
          (e.exports.ErrorResponseSubcodeMapper = n),
            (e.exports.ErrorSubcode = r),
            (e.exports.NotImplementedError = i),
            (e.exports.OperationError = o),
            (e.exports.RequestError = a),
            (e.exports.RequestEventCode = c),
            (e.exports.SolaceError = u);
        },
        8976: (e, t, s) => {
          const { ErrorSubcode: n } = s(2662),
            { makeMap: r } = s(9359),
            i = n,
            o = r(
              400,
              r(
                "client name parse error",
                i.CLIENT_NAME_INVALID,
                "document is too large",
                i.MESSAGE_TOO_LARGE,
                "inactivity timeout",
                i.INACTIVITY_TIMEOUT,
                "max num subscriptions exceeded",
                i.SUBSCRIPTION_TOO_MANY,
                "message too long",
                i.MESSAGE_TOO_LARGE,
                "nolocal discard",
                i.NOLOCAL_DISCARD,
                "not enough space",
                i.OUT_OF_RESOURCES,
                "subscription already exists",
                i.SUBSCRIPTION_ALREADY_PRESENT,
                "subscription attributes conflict with existing subscription",
                i.SUBSCRIPTION_ATTRIBUTES_CONFLICT,
                "subscription not found",
                i.SUBSCRIPTION_NOT_FOUND,
                "subscription parse error",
                i.SUBSCRIPTION_INVALID,
                "topic parse error",
                i.INVALID_TOPIC_SYNTAX,
                "unknown transport session identifier",
                i.UNKNOWN_TRANSPORT_SESSION_ID,
                "xml parse error",
                i.XML_PARSE_ERROR,
                "unsupported ssl downgrade value",
                i.LOGIN_FAILURE,
              ),
              401,
              r("", i.LOGIN_FAILURE),
              403,
              r(
                "basic authentication is shutdown",
                i.BASIC_AUTHENTICATION_IS_SHUTDOWN,
                "client certificate authentication is shutdown",
                i.CLIENT_CERTIFICATE_AUTHENTICATION_IS_SHUTDOWN,
                "client name already in use",
                i.CLIENT_NAME_ALREADY_IN_USE,
                "client username is shutdown",
                i.CLIENT_USERNAME_IS_SHUTDOWN,
                "dynamic clients not allowed",
                i.DYNAMIC_CLIENTS_NOT_ALLOWED,
                "invalid virtual router address",
                i.INVALID_VIRTUAL_ADDRESS,
                "forbidden",
                i.CLIENT_ACL_DENIED,
                "message vpn not allowed",
                i.MESSAGE_VPN_NOT_ALLOWED,
                "publish acl denied",
                i.PUBLISH_ACL_DENIED,
                "replication is standby",
                i.REPLICATION_IS_STANDBY,
                "selector does not match",
                i.SELECTOR_DOES_NOT_MATCH,
                "subscription acl denied",
                i.SUBSCRIPTION_ACL_DENIED,
                "subscription does not match",
                i.SUBSCRIPTION_DOES_NOT_MATCH,
                "compression is shutdown",
                i.LOGIN_FAILURE,
                "shared subscriptions not supported on topic endpoints",
                i.SHARED_SUBSCRIPTIONS_ENDPOINT_NOT_ALLOWED,
                "shared subscriptions not supported on queues",
                i.SHARED_SUBSCRIPTIONS_ENDPOINT_NOT_ALLOWED,
                "shared subscription permission denied",
                i.SHARED_SUBSCRIPTIONS_NOT_ALLOWED,
              ),
              404,
              r("", i.LOGIN_FAILURE),
              503,
              r(
                "low priority msg congestion",
                i.LOW_PRIORITY_MSG_CONGESTION,
                "message vpn unavailable",
                i.MESSAGE_VPN_UNAVAILABLE,
                "replication is standby",
                i.REPLICATION_IS_STANDBY,
                "service unavailable",
                i.GM_UNAVAILABLE,
                "spool over quota",
                i.SPOOL_OVER_QUOTA,
                "subscriber delete in progress",
                i.CLIENT_DELETE_IN_PROGRESS,
                "too many clients",
                i.TOO_MANY_CLIENTS,
                "too many connections for vpn",
                i.TOO_MANY_CLIENTS,
                "max message usage exceeded",
                i.MAX_MESSAGE_USAGE_EXCEEDED,
              ),
              507,
              r("ad not ready", i.GM_NOT_READY),
            ),
            a = r(
              "PARENT",
              o,
              400,
              r(
                "already bound",
                i.ALREADY_BOUND,
                "endpoint already exists",
                i.ENDPOINT_ALREADY_EXISTS,
                "subscription already exists",
                i.SUBSCRIPTION_ALREADY_PRESENT,
                "already exists",
                i.ENDPOINT_ALREADY_EXISTS,
                "endpoint property mismatch",
                i.ENDPOINT_PROPERTY_MISMATCH,
                "invalid durable topic endpoint name",
                i.INVALID_DTE_NAME,
                "invalid selector",
                i.INVALID_SELECTOR,
                "invalid topic name",
                i.INVALID_TOPIC_NAME_FOR_TOPIC_ENDPOINT,
                "invalid queue or topic endpoint durability",
                i.INVALID_QUEUE_OR_TOPIC_ENDPOINT_DURABILITY,
                "queue not found",
                i.QUEUE_NOT_FOUND,
                "quota out of range",
                i.QUOTA_OUT_OF_RANGE,
                "unknown flow name",
                i.UNKNOWN_FLOW_NAME,
                "unsubscribe not allowed",
                i.UNSUBSCRIBE_NOT_ALLOWED_CLIENTS_BOUND,
              ),
              403,
              r(
                "permission not allowed",
                i.PERMISSION_NOT_ALLOWED,
                "client initiated replay not allowed on non-exclusive topic endpoint",
                i.CLIENT_INITIATED_REPLAY_NON_EXCLUSIVE_NOT_ALLOWED,
                "client initiated replay not allowed on non-exclusive queue",
                i.CLIENT_INITIATED_REPLAY_NON_EXCLUSIVE_NOT_ALLOWED,
                "client initiated replay from inactive flow not allowed",
                i.CLIENT_INITIATED_REPLAY_INACTIVE_FLOW_NOT_ALLOWED,
                "client initiated replay from browser flow not allowed",
                i.CLIENT_INITIATED_REPLAY_BROWSER_FLOW_NOT_ALLOWED,
                "replay not supported on temporary queue",
                i.REPLAY_TEMPORARY_NOT_SUPPORTED,
                "replay not supported on anonymous queue",
                i.REPLAY_ANONYMOUS_QUEUE_NOT_SUPPORTED,
                "replay not supported on anonymous queue without subscriptions",
                i.REPLAY_ANONYMOUS_QUEUE_WITHOUT_SUBSCRIPTIONS_NOT_SUPPORTED,
                "unknown start location type",
                i.UNKNOWN_START_LOCATION_TYPE,
                "mismatched endpoint error id",
                i.MISMATCHED_ENDPOINT_ERROR_ID,
                "replay start message unavailable",
                i.REPLAY_START_MESSAGE_NOT_AVAILABLE,
                "browsing not supported on partitioned queue",
                i.PARTITIONED_QUEUE_BROWSING_NOT_SUPPORTED,
                "selectors not supported on partitioned queue",
                i.PARTITIONED_QUEUE_SELECTORS_NOT_SUPPORTED,
              ),
              503,
              r(
                "durable topic endpoint shutdown",
                i.TOPIC_ENDPOINT_SHUTDOWN,
                "endpoint shutdown",
                i.TOPIC_ENDPOINT_SHUTDOWN,
                "max clients exceeded for durable topic endpoint",
                i.MAX_CLIENTS_FOR_TE,
                "max clients exceeded for queue",
                i.MAX_CLIENTS_FOR_QUEUE,
                "no more non-durable queue or topic endpoint",
                i.NO_MORE_NON_DURABLE_QUEUE_OR_TOPIC_ENDPOINT,
                "no subscription match",
                i.NO_SUBSCRIPTION_MATCH,
                "queue shutdown",
                i.QUEUE_SHUTDOWN,
                "te shutdown",
                i.TOPIC_ENDPOINT_SHUTDOWN,
                "unknown durable topic endpoint",
                i.UNKNOWN_TOPIC_ENDPOINT_NAME,
                "unknown queue",
                i.UNKNOWN_QUEUE_NAME,
                "replay disabled",
                i.REPLAY_DISABLED,
                "replay cancelled",
                i.REPLAY_CANCELLED,
                "replay message unavailable",
                i.REPLAY_MESSAGE_UNAVAILABLE,
                "replay started",
                i.REPLAY_STARTED,
                "replayed message rejected by topic endpoint",
                i.REPLAY_MESSAGE_REJECTED,
                'replayed message rejected by queue"',
                i.REPLAY_MESSAGE_REJECTED,
                "replay log modified",
                i.REPLAY_LOG_MODIFIED,
                "mismatched endpoint error id",
                i.MISMATCHED_ENDPOINT_ERROR_ID,
                "out of replay resources",
                i.OUT_OF_REPLAY_RESOURCES,
                "topic or selector modified on durable topic endpoint",
                i.TOPIC_OR_SELECTOR_MODIFIED_ON_DURABLE_TOPIC_ENDPOINT,
                "replay failed",
                i.REPLAY_FAILED,
                "replay start time not available",
                i.REPLAY_START_TIME_NOT_AVAILABLE,
                "replay start message unavailable",
                i.REPLAY_START_MESSAGE_NOT_AVAILABLE,
                "sync replication ineligible",
                i.SYNC_REPLICATION_INELIGIBLE,
              ),
            );
          function c(e, t, s) {
            if (200 === t) return 0;
            const n = e[t] || {},
              r = (s || "").toLowerCase(),
              i = Object.keys(n).find((e) => e === r || r.indexOf(e) >= 0);
            return i
              ? n[i]
              : n[""]
                ? n[""]
                : e.PARENT
                  ? c(e.PARENT, t, s)
                  : void 0;
          }
          function u(e, t, s) {
            const n = c(e, t, s);
            return void 0 === n ? i.UNKNOWN_ERROR : n;
          }
          const l = {
            getErrorSubcode: (e, t) => u(o, e, t),
            getADErrorSubcode: (e, t) => u(a, e, t),
          };
          e.exports.ErrorResponseSubcodeMapper = l;
        },
        2662: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.ErrorSubcode = n.new({
            UNKNOWN_ERROR: 4294967295,
            NO_ERROR: 0,
            SESSION_NOT_CONNECTED: 2,
            INVALID_SESSION_OPERATION: 3,
            INVALID_OPERATION: 3,
            TIMEOUT: 4,
            MESSAGE_VPN_NOT_ALLOWED: 5,
            MESSAGE_VPN_UNAVAILABLE: 6,
            CLIENT_USERNAME_IS_SHUTDOWN: 7,
            DYNAMIC_CLIENTS_NOT_ALLOWED: 8,
            CLIENT_NAME_ALREADY_IN_USE: 9,
            CLIENT_NAME_INVALID: 10,
            CLIENT_DELETE_IN_PROGRESS: 11,
            TOO_MANY_CLIENTS: 12,
            LOGIN_FAILURE: 13,
            INVALID_VIRTUAL_ADDRESS: 14,
            CLIENT_ACL_DENIED: 15,
            SUBSCRIPTION_ACL_DENIED: 16,
            PUBLISH_ACL_DENIED: 17,
            PARAMETER_OUT_OF_RANGE: 18,
            PARAMETER_CONFLICT: 19,
            PARAMETER_INVALID_TYPE: 20,
            INTERNAL_ERROR: 21,
            INSUFFICIENT_SPACE: 22,
            OUT_OF_RESOURCES: 23,
            PROTOCOL_ERROR: 24,
            COMMUNICATION_ERROR: 25,
            KEEP_ALIVE_FAILURE: 26,
            TOPIC_MISSING: 28,
            INVALID_TOPIC_SYNTAX: 31,
            MESSAGE_TOO_LARGE: 32,
            XML_PARSE_ERROR: 33,
            SUBSCRIPTION_ALREADY_PRESENT: 34,
            SUBSCRIPTION_NOT_FOUND: 35,
            SUBSCRIPTION_INVALID: 36,
            SUBSCRIPTION_ERROR_OTHER: 37,
            SUBSCRIPTION_TOO_MANY: 38,
            SUBSCRIPTION_ATTRIBUTES_CONFLICT: 39,
            NO_LOCAL_NOT_SUPPORTED: 40,
            DATA_ERROR_OTHER: 42,
            CREATE_XHR_FAILED: 43,
            CONNECTION_ERROR: 44,
            DATA_DECODE_ERROR: 45,
            INACTIVITY_TIMEOUT: 46,
            UNKNOWN_TRANSPORT_SESSION_ID: 47,
            AD_MESSAGING_NOT_SUPPORTED: 48,
            CREATE_WEBSOCKET_FAILED: 49,
            REPLICATION_IS_STANDBY: 50,
            BASIC_AUTHENTICATION_IS_SHUTDOWN: 51,
            CLIENT_CERTIFICATE_AUTHENTICATION_IS_SHUTDOWN: 52,
            GM_UNAVAILABLE: 100,
            UNKNOWN_FLOW_NAME: 111,
            ALREADY_BOUND: 112,
            INVALID_TOPIC_NAME_FOR_TOPIC_ENDPOINT: 113,
            UNKNOWN_QUEUE_NAME: 114,
            UNKNOWN_TOPIC_ENDPOINT_NAME: 115,
            MAX_CLIENTS_FOR_QUEUE: 116,
            MAX_CLIENTS_FOR_TE: 117,
            UNEXPECTED_UNBIND: 118,
            QUEUE_NOT_FOUND: 119,
            SPOOL_OVER_QUOTA: 120,
            QUEUE_SHUTDOWN: 121,
            TOPIC_ENDPOINT_SHUTDOWN: 122,
            NO_MORE_NON_DURABLE_QUEUE_OR_TOPIC_ENDPOINT: 123,
            ENDPOINT_ALREADY_EXISTS: 124,
            PERMISSION_NOT_ALLOWED: 125,
            INVALID_SELECTOR: 126,
            MAX_MESSAGE_USAGE_EXCEEDED: 127,
            ENDPOINT_PROPERTY_MISMATCH: 128,
            NO_SUBSCRIPTION_MATCH: 129,
            MESSAGE_DELIVERY_MODE_MISMATCH: 130,
            MESSAGE_ALREADY_ACKNOWLEDGED: 131,
            SUBSCRIPTION_DOES_NOT_MATCH: 133,
            SELECTOR_DOES_NOT_MATCH: 134,
            INVALID_DTE_NAME: 135,
            UNSUBSCRIBE_NOT_ALLOWED_CLIENTS_BOUND: 136,
            CALLBACK_ERROR: 137,
            NOLOCAL_DISCARD: 138,
            GM_NOT_READY: 140,
            LOW_PRIORITY_MSG_CONGESTION: 141,
            QUOTA_OUT_OF_RANGE: 142,
            FAILED_LOADING_TRUSTSTORE: 143,
            FAILED_LOADING_CERTIFICATE_AND_KEY: 144,
            UNRESOLVED_HOSTS: 145,
            REPLAY_NOT_SUPPORTED: 146,
            REPLAY_DISABLED: 147,
            CLIENT_INITIATED_REPLAY_NON_EXCLUSIVE_NOT_ALLOWED: 148,
            CLIENT_INITIATED_REPLAY_INACTIVE_FLOW_NOT_ALLOWED: 149,
            CLIENT_INITIATED_REPLAY_BROWSER_FLOW_NOT_ALLOWED: 150,
            REPLAY_TEMPORARY_NOT_SUPPORTED: 151,
            UNKNOWN_START_LOCATION_TYPE: 152,
            REPLAY_CANCELLED: 153,
            REPLAY_MESSAGE_UNAVAILABLE: 154,
            REPLAY_START_TIME_NOT_AVAILABLE: 155,
            REPLAY_MESSAGE_REJECTED: 156,
            REPLAY_LOG_MODIFIED: 157,
            MISMATCHED_ENDPOINT_ERROR_ID: 158,
            OUT_OF_REPLAY_RESOURCES: 159,
            TOPIC_OR_SELECTOR_MODIFIED_ON_DURABLE_TOPIC_ENDPOINT: 160,
            REPLAY_FAILED: 161,
            REPLAY_STARTED: 162,
            COMPRESSED_TLS_NOT_SUPPORTED: 163,
            SHARED_SUBSCRIPTIONS_NOT_SUPPORTED: 164,
            SHARED_SUBSCRIPTIONS_NOT_ALLOWED: 165,
            SHARED_SUBSCRIPTIONS_ENDPOINT_NOT_ALLOWED: 166,
            REPLAY_START_MESSAGE_NOT_AVAILABLE: 167,
            MESSAGE_ID_NOT_COMPARABLE: 168,
            REPLAY_ANONYMOUS_QUEUE_NOT_SUPPORTED: 169,
            PARTITIONED_QUEUE_BROWSING_NOT_SUPPORTED: 170,
            PARTITIONED_QUEUE_SELECTORS_NOT_SUPPORTED: 171,
            REPLAY_ANONYMOUS_QUEUE_WITHOUT_SUBSCRIPTIONS_NOT_SUPPORTED: 172,
            SYNC_REPLICATION_INELIGIBLE: 173,
            INVALID_QUEUE_OR_TOPIC_ENDPOINT_DURABILITY: 174,
          });
        },
        2227: (e, t, s) => {
          const { SolaceError: n } = s(4006);
          class r extends n {
            constructor(e) {
              super("NotImplementedError", e || "", r);
            }
          }
          e.exports.NotImplementedError = r;
        },
        6177: (e, t, s) => {
          const { SolaceError: n } = s(4006);
          class r extends n {
            constructor(e, t, s) {
              super("OperationError", e, r),
                (this.subcode = t),
                (this.reason = s);
            }
          }
          e.exports.OperationError = r;
        },
        7904: (e, t, s) => {
          var n = s(9489);
          const { ErrorSubcode: r } = s(2662),
            { OperationError: i } = s(6177),
            { RequestEventCode: o } = s(4170),
            a = {
              [o.REQUEST_ABORTED]: r.SESSION_NOT_CONNECTED,
              [o.REQUEST_TIMEOUT]: r.TIMEOUT,
            };
          e.exports.RequestError = class extends i {
            constructor(e, t, s, n) {
              super(e, a[t], n),
                (this.name = "RequestError"),
                (this._eventCode = t),
                (this._correlationKey = s);
            }
            get requestEventCode() {
              return this._requestEventCode;
            }
            get errorSubcode() {
              return super.subcode;
            }
            inspect() {
              const e = super.inspect ? super.inspect() : {};
              return Object.assign(e, {
                requestEventCode: o.describe(this.requestEventCode),
                infoStr: this.infoStr,
                correlationKey: this.correlationKey,
              });
            }
            toString() {
              return n(this);
            }
          };
        },
        4170: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.RequestEventCode = n.new({
            REQUEST_ABORTED: 8,
            REQUEST_TIMEOUT: 9,
          });
        },
        4006: (e) => {
          class t extends Error {
            constructor(e, t, s) {
              super(t || ""),
                (this.message = t),
                (this.name = e),
                Error.captureStackTrace
                  ? Error.captureStackTrace(this, s)
                  : (this.stack = new Error().stack);
            }
          }
          e.exports.SolaceError = t;
        },
        9359: (e, t, s) => {
          const { ArrayOperations: n } = s(7727),
            { assert: r } = s(9729),
            { BidiMap: i } = s(2509),
            { Enum: o } = s(4427),
            { Iterator: a } = s(123),
            { Lazy: c } = s(809),
            { makeMap: u } = s(3925),
            { Mixin: l } = s(7597),
            { Resolver: h } = s(1207),
            { SetOperations: d } = s(6679);
          (e.exports.assert = r),
            (e.exports.ArrayOperations = n),
            (e.exports.BidiMap = i),
            (e.exports.Enum = o),
            (e.exports.Iterator = a),
            (e.exports.Lazy = c),
            (e.exports.makeIterator = a.makeIterator),
            (e.exports.makeMap = u),
            (e.exports.Mixin = l),
            (e.exports.mixin = l.mixin),
            (e.exports.Resolver = h),
            (e.exports.resolve = h.resolve),
            (e.exports.SetOperations = d);
        },
        7727: (e) => {
          function t(e, t) {
            const s = String(e),
              n = String(t);
            return s > n ? 1 : s < n ? -1 : 0;
          }
          e.exports = {
            ArrayOperations: {
              defaultComparator: t,
              insertOrdered: function (e, s, n = t) {
                const r = [...e];
                return this.inplaceInsertOrdered(r, s, n);
              },
              inplaceInsertOrdered: function (e, s, n = t) {
                let r = 0,
                  i = 0,
                  o = e.length;
                if (o > 0)
                  if (n(s, e[o - 1]) > 0) r = o;
                  else
                    for (r = (i + o) >> 1; o > i; )
                      n(s, e[r]) < 0 ? (o = r) : (i = r + 1),
                        (r = (i + o) >> 1);
                e.splice(r, 0, s);
              },
            },
          };
        },
        9729: (e) => {
          let t;
          (t = () => {}), (e.exports.assert = t);
        },
        2509: (e) => {
          e.exports.BidiMap = class {
            constructor(...e) {
              (this.forward = new Map()),
                (this.reverse = new Map()),
                e.forEach((e) => {
                  this.setValues(e[0], e[1]);
                });
            }
            setValues(e, t) {
              this.forward.set(e, t), this.reverse.set(t, e);
            }
          };
        },
        4427: (e) => {
          function t(e, t, s) {
            const n = t.filter((t) => e[t] === s);
            return n.length ? n[0] : null;
          }
          class s {
            constructor(e) {
              Object.defineProperties(this, {
                _canonical: {
                  value: null,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }),
                this._setCanonical(e);
            }
            _setCanonical(e, t = !1) {
              (this._canonical = Object.assign({}, e)),
                Object.keys(this).forEach((e) => {
                  const t = Object.getOwnPropertyDescriptor(this, e);
                  void 0 !== t.value &&
                    Object.defineProperty(this, e, {
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                      value: t.value,
                    });
                }),
                Object.keys(e).forEach((s) => {
                  Object.defineProperty(this, s, {
                    enumerable: !0,
                    writable: !t,
                    configurable: !t,
                    value: e[s],
                  });
                });
            }
            describe(e, s = "<none>", n = "<unknown>") {
              if (null == e) return s;
              const r =
                t(this._canonical, Object.keys(this._canonical || {}), e) || n;
              return r === e ? r : `${r} (${e})`;
            }
            nameOf(e) {
              return t(this._canonical, Object.keys(this._canonical || {}), e);
            }
            get names() {
              return Object.keys(this._canonical || {});
            }
            get values() {
              return (
                (e = this._canonical),
                (t = Object.keys(this._canonical || {})),
                Array.from(new Set(t.map((t) => e[t])))
              );
              var e, t;
            }
            get isEnum() {
              return !0;
            }
            static nameOf(e, t) {
              return e.nameOf(t);
            }
            static values(e) {
              return e.values();
            }
            static new(e) {
              return new s(e);
            }
            static ofStrings(e) {
              const t = {};
              return (
                e.forEach((e) => {
                  t[e] = e;
                }),
                s.new(t)
              );
            }
            static ofNumbers(e) {
              const t = {};
              return (
                e.forEach((e, s) => {
                  t[e] = s;
                }),
                s.new(t)
              );
            }
          }
          e.exports.Enum = s;
        },
        123: (e) => {
          class t {
            constructor(e, t = 0, s = e.length) {
              (this._arr = e), (this._index = t), (this._end = s);
            }
            deref() {
              return this._arr[this._index];
            }
            incr() {
              return ++this._index;
            }
            end() {
              return this._index >= this._end;
            }
            static makeIterator(e, s = 0, n = e.length) {
              return new t(e, s, n);
            }
          }
          e.exports.Iterator = t;
        },
        809: (e) => {
          const t = { enumerable: !0 };
          function s(e, s, n, r = null) {
            Object.defineProperty(e, s, Object.assign({ value: n }, t, r));
          }
          function n(e, n, r) {
            return (
              Object.defineProperty(
                e,
                n,
                Object.assign(
                  {
                    configurable: !0,
                    get: () => {
                      const t = r(e, n);
                      return s(e, n, t), t;
                    },
                    set: (t) => {
                      s(e, n, t);
                    },
                  },
                  t,
                ),
              ),
              e
            );
          }
          const r = {
            lazyProperties: function (e, t) {
              return (
                Object.keys(t).forEach((s) => {
                  n(e, s, t[s]);
                }),
                t
              );
            },
            lazyProperty: n,
            lazyValue: function (e) {
              return n({}, "value", e);
            },
          };
          e.exports.Lazy = r;
        },
        3925: (e) => {
          e.exports.makeMap = function (...e) {
            const t = {};
            for (let s = 0; s < e.length; s += 2) t[e[s]] = e[s + 1];
            return t;
          };
        },
        7597: (e) => {
          const t = {
            mixin: function (e, t) {
              const s = e.prototype,
                n = t.prototype;
              return (
                Object.getOwnPropertyNames(n).forEach((e) => {
                  "constructor" !== e &&
                    Object.defineProperty(
                      s,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                }),
                e
              );
            },
          };
          e.exports.Mixin = t;
        },
        1207: (e, t, s) => {
          const { Lazy: n } = s(809),
            { lazyProperty: r } = n;
          class i {
            constructor(e, t) {
              Object.keys(e).forEach((t) => {
                t.split(",")
                  .map((e) => e.trim())
                  .forEach((s) => {
                    const n = e[t],
                      i = "string" == typeof n ? n.split(".") : n,
                      o = (Array.isArray(i) ? i : [i]).concat(s);
                    r(this, s, () =>
                      (function (e, t, s) {
                        return s.reduce(
                          (e, t) => ("string" == typeof t ? e[t] : t),
                          t,
                        );
                      })(0, this, o),
                    );
                  });
              });
            }
            static resolve(e, t) {
              return new i(e, t);
            }
          }
          e.exports.Resolver = i;
        },
        6679: (e) => {
          function t(e, t) {
            return (
              t.forEach((t) => {
                e.add(t);
              }),
              e
            );
          }
          e.exports = {
            SetOperations: {
              inplaceDifference: function (e, t) {
                return (
                  t.forEach((t) => {
                    e.delete(t);
                  }),
                  e
                );
              },
              inplaceIntersection: function (e, t) {
                return (
                  e.forEach((s) => {
                    t.has(s) || e.delete(s);
                  }),
                  e
                );
              },
              inplaceUnion: t,
              isSuperset: function (e, t) {
                return Array.from(t).every((t) => e.has(t));
              },
              difference: function (e, t) {
                return new Set(Array.from(e).filter((e) => !t.has(e)));
              },
              intersection: function (e, t) {
                return new Set(Array.from(e).filter((e) => t.has(e)));
              },
              union: function (e, s) {
                return t(new Set(e), s);
              },
            },
          };
        },
        7758: (e, t, s) => {
          const { EventEmitter: n } = s(5571),
            { Timer: r } = s(1028);
          e.exports = { EventEmitter: n, Timer: r };
        },
        5571: (e, t, s) => {
          const n = s(4370).EventEmitter,
            { ArrayUtils: r } = s(7882),
            { ErrorSubcode: i, OperationError: o } = s(3870),
            { LOG_WARN: a } = s(390),
            { flatten: c, includes: u } = r,
            l = ["error", "newListener", "removeListener"],
            h = ["newListener", "removeListener"],
            d = {
              ignore() {},
              fail() {
                throw new Error("Emitter disabled");
              },
            };
          e.exports.EventEmitter = class extends n {
            constructor(e) {
              super();
              const {
                direct: t,
                emits: s,
                unsafe: n,
                formatEventName: r,
              } = e || {};
              this.formatEventName = r || ((e) => e);
              const i = this.emit.bind(this);
              this._installDirectFilter(t, i),
                this._installErrorHandlers(n),
                this._installEmitVerifier(),
                (this._listenerVerificationFilter = (function (e) {
                  if ("function" == typeof e) return (t) => u(l, t) || e(t);
                  if (!Array.isArray(e)) return null;
                  const t = new Set(c(e));
                  l.forEach((e) => t.add(e));
                  const s = Array.from(t);
                  return (e) => u(s, e);
                })(s)),
                (this._emits = s);
            }
            _installDirectFilter(e, t) {
              if (e) {
                if (u(h, e))
                  throw new o(
                    `Cannot configure listener collection events [${h.join(", ")}] as direct`,
                    i.INTERNAL_ERROR,
                  );
                (this._defaultEmitDirect = (...s) => t(e, ...s)),
                  (this.emitDirect = this._defaultEmitDirect),
                  (this._directEventName = e),
                  (this.on = (e, t) => {
                    this._verifyListenerEvent(e);
                    const s = super.on(e, t);
                    return this._setEmitDirect(e, !0, t), s;
                  }),
                  (this.addListener = (e, t) => this.on(e, t)),
                  (this.once = (e, t) => {
                    this._verifyListenerEvent(e);
                    const s = super.once(e, t);
                    return this._setEmitDirect(e, !1), s;
                  }),
                  (this.prependListener = (e, t) => {
                    this._verifyListenerEvent(e);
                    const s = super.prependListener(e, t);
                    return this._setEmitDirect(e, !0, t), s;
                  }),
                  (this.prependOnceListener = (e, t) => {
                    this._verifyListenerEvent(e);
                    const s = super.prependOnceListener(e, t);
                    return this._setEmitDirect(e, !1), s;
                  }),
                  (this.removeAllListeners = (e) => {
                    const t = super.removeAllListeners(e);
                    return (
                      (e !== this._directEventName && void 0 !== e) ||
                        (this.emitDirect = this._defaultEmitDirect),
                      t
                    );
                  }),
                  (this.removeListener = (e, t) => {
                    const s = super.removeListener(e, t);
                    return (
                      e === this._directEventName &&
                        0 === this.listenerCount(e) &&
                        (this.emitDirect = this._defaultEmitDirect),
                      s
                    );
                  }),
                  (this.directListenerCount = () =>
                    this.listenerCount(this._directEventName)),
                  (this.setOnFirstDirectListener = (e) => {
                    this._onFirstDirectListener = e;
                  });
              }
            }
            _setEmitDirect(e, t, s) {
              e === this._directEventName &&
                (t && 1 === this.directListenerCount()
                  ? (this.emitDirect = s)
                  : (this.emitDirect = this._defaultEmitDirect),
                1 === this.directListenerCount() &&
                  void 0 !== this._onFirstDirectListener &&
                  this._onFirstDirectListener());
            }
            _verifyListenerEvent(e) {
              this._listenerVerificationFilter &&
                (null == e &&
                  this.throwInternal(
                    new o(
                      `Emitter rejects listener for no-name event: ${e}`,
                      i.PARAMETER_OUT_OF_RANGE,
                    ),
                  ),
                this._listenerVerificationFilter(e) ||
                  this.throwInternal(
                    new o(
                      `Emitter rejects listeners for ${e}, emits ${this._emits}`,
                      i.PARAMETER_OUT_OF_RANGE,
                    ),
                  ));
            }
            _installEmitVerifier() {}
            _installErrorHandlers(e) {
              if (e)
                return void (this.throwInternal = (e) => {
                  throw e;
                });
              const t = this.emit.bind(this);
              (this.throwInternal = function (e) {
                throw ((this._internalError = !0), e);
              }),
                (this.emit = (e, ...s) => {
                  try {
                    t(e, ...s);
                  } catch (n) {
                    if (this._internalError)
                      throw ((this._internalError = void 0), n);
                    const r = this.formatErrorEvent(n, e, ...s);
                    try {
                      a(
                        `Listener for '${r.info.event.formattedName}' threw exception, dispatching to 'error'`,
                      ),
                        t("error", r);
                    } catch (e) {
                      a(
                        "Listener for 'error' threw exception:",
                        e,
                        "\nOriginal exception:",
                        n,
                      );
                    }
                  }
                });
            }
            get isDirect() {
              return (
                this.emitDirect && this.emitDirect !== this._defaultEmitDirect
              );
            }
            formatErrorEvent(e, t, ...s) {
              const n = this.formatEventName(t);
              return Object.assign(
                new o(
                  `Unhandled error in event handler for '${n}'`,
                  i.CALLBACK_ERROR,
                  `On event: ${[t, ...s]} ${e}`,
                ),
                {
                  stack: e.stack,
                  info: {
                    event: { name: t, formattedName: n, args: s },
                    error: e,
                  },
                },
              );
            }
            disableEmitter() {
              (this._defaultEmitDirect = d.ignore),
                this.removeAllListeners(),
                (this.emit = d.ignore),
                this.addListener("removeListener", d.fail),
                this.addListener("newListener", d.fail);
            }
          };
        },
        1028: (e) => {
          class t {
            constructor(e) {
              this.cancel = () => {
                (this.cancel = () => {}), e();
              };
            }
            static newInterval(e, s, ...n) {
              const r = setInterval(s, e, ...n);
              return new t(() => clearInterval(r));
            }
            static newTimeout(e, s, ...n) {
              const r = setTimeout(s, e, ...n);
              return new t(() => clearTimeout(r));
            }
          }
          e.exports.Timer = t;
        },
        828: (e, t, s) => {
          const { FactoryProfile: n, SolclientFactoryProfiles: r } = s(1777),
            { ProfileBinding: i } = s(3794),
            { SolclientFactory: o } = s(9016),
            { SolclientFactoryProperties: a } = s(3543);
          (e.exports.FactoryProfile = n),
            (e.exports.ProfileBinding = i),
            (e.exports.SolclientFactoryProfiles = r),
            (e.exports.SolclientFactoryProperties = a),
            (e.exports.SolclientFactory = o);
        },
        3794: (e, t, s) => {
          const { OperationError: n } = s(3870);
          let r = null;
          const i = {
            get value() {
              if (null === r)
                throw new n(
                  "Profile binding not initialized. Call solace.SolclientFactory.init",
                );
              return r;
            },
            set value(e) {
              r = e;
            },
          };
          e.exports.ProfileBinding = i;
        },
        1777: (e, t, s) => {
          var n = s(9489);
          class r {
            get guaranteedMessagingEnabled() {}
            get cometEnabled() {}
            get topicUtf8Encode() {}
            get byteArrayAsString() {}
            inspect() {
              return {
                guaranteedMessagingEnabled: this.guaranteedMessagingEnabled,
                cometEnabled: this.cometEnabled,
                topicUtf8Encode: this.topicUtf8Encode,
                byteArrayAsString: this.byteArrayAsString,
              };
            }
            toString() {
              return n(this);
            }
          }
          const i = new (class extends r {
              get guaranteedMessagingEnabled() {
                return !1;
              }
              get cometEnabled() {
                return !0;
              }
              get topicUtf8Encode() {
                return !1;
              }
              get byteArrayAsString() {
                return !0;
              }
            })(),
            o = new (class extends r {
              get guaranteedMessagingEnabled() {
                return !0;
              }
              get cometEnabled() {
                return !1;
              }
              get topicUtf8Encode() {
                return !0;
              }
              get byteArrayAsString() {
                return !0;
              }
            })(),
            a = new (class extends r {
              get guaranteedMessagingEnabled() {
                return !0;
              }
              get cometEnabled() {
                return !1;
              }
              get topicUtf8Encode() {
                return !0;
              }
              get byteArrayAsString() {
                return !1;
              }
            })(),
            c = {
              _legacy: i,
              _v10: o,
              _forward: a,
              _default: i,
              version7: i,
              version10: o,
              version10_5: a,
              inspect() {
                return {
                  version7: this.version7,
                  version10: this.version10,
                  version10_5: this.version10_5,
                };
              },
              toString() {
                return n(this);
              },
            };
          (e.exports.FactoryProfile = r),
            (e.exports.SolclientFactoryProfiles = c);
        },
        3543: (e, t, s) => {
          var n = s(9489);
          const { APIProperties: r } = s(7882),
            { Check: i } = s(2201);
          function o() {
            const { LogLevel: e } = s(390);
            return e.INFO;
          }
          e.exports.SolclientFactoryProperties = class extends r {
            constructor(e) {
              super({ logLevel: o(), logger: null }, e);
            }
            get profile() {
              return this._profile;
            }
            set profile(e) {
              this._profile = e;
            }
            get logLevel() {
              return i.number(this._logLevel) ? this._logLevel : o();
            }
            set logLevel(e) {
              this._logLevel = e;
            }
            get logger() {
              return this._logger || null;
            }
            set logger(e) {
              this._logger = e;
            }
            inspect() {
              const { LogLevel: e } = s(390);
              return {
                logLevel: e.describe(this._logLevel),
                profile: this._profile,
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        9016: (e, t, s) => {
          const { ErrorSubcode: n, OperationError: r } = s(3870),
            { FactoryProfile: i, SolclientFactoryProfiles: o } = s(1777),
            { Parameter: a } = s(2201),
            { ProfileBinding: c } = s(3794),
            { SolclientFactoryProperties: u } = s(3543),
            l = { initializeCount: 0, initializers: [] },
            h = {
              addInitializer(e) {
                l.initializers.push(e);
              },
              createFactory: (e) =>
                function (...t) {
                  if (0 === l.initializeCount)
                    throw new r(
                      "SolclientFactory not initialized",
                      n.INVALID_OPERATION,
                    );
                  return e(...t);
                },
              init(e) {
                if (l.initializeCount > 0) return this;
                const t = new u(e),
                  n = (e && e.profile) || o.version7;
                if (
                  (a.isInstanceOf("factoryProps.profile", n, i),
                  (c.value = n),
                  l.initializers.forEach((e) => {
                    e.call(this, t, l);
                  }),
                  ++l.initializeCount,
                  null != e)
                ) {
                  const { LOG_DEBUG: e } = s(390);
                }
                return this;
              },
              reset() {
                l.initializeCount = 0;
              },
              _getInitializeCount: () => l.initializeCount,
              get profiles() {
                return o;
              },
            };
          e.exports.SolclientFactory = h;
        },
        5370: (e, t, s) => {
          const { Flow: n } = s(4741),
            { FlowOperation: r } = s(620),
            { PrivateFlowEventName: i } = s(3801);
          (e.exports.Flow = n),
            (e.exports.FlowOperation = r),
            (e.exports.PrivateFlowEventName = i);
        },
        620: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.FlowOperation = n.new({
            CONNECT: "FlowOperation_CONNECT",
            DISCONNECT: "FlowOperation_DISCONNECT",
            START: "FlowOperation_START",
            STOP: "FlowOperation_STOP",
            DISPOSE: "FlowOperation_DESTROY",
            GET_STATS: "FlowOperation_GET_STATS",
            RESET_STATS: "FlowOperation_RESET_STATS",
            GET_PROPERTIES: "FlowOperation_GET_PROPERTIES",
            GET_DESTINATION: "FlowOperation_GET_DESTINATION",
          });
        },
        4741: (e, t, s) => {
          const {
              ErrorSubcode: n,
              NotImplementedError: r,
              OperationError: i,
            } = s(3870),
            { EventEmitter: o } = s(7758),
            { FlowOperation: a } = s(620),
            { LogFormatter: c } = s(390),
            { PrivateFlowEventName: u } = s(3801),
            { Stats: l } = s(6818),
            h = [a.DISPOSE, a.GET_STATS, a.GET_PROPERTIES, a.RESET_STATS];
          e.exports.Flow = class extends o {
            constructor(e, t, s) {
              const n = Object.assign({}, s);
              (n.emits = (n.emits || []).concat(u.values)), super(n);
              const r = t(this),
                i = this;
              (this.logger = new c((...e) => [
                `[session=${r.sessionIdHex}]`,
                `[flow=${i.flowIdDec}]`,
                ...e,
              ])),
                (this.log = this.logger.wrap(this.log, this)),
                (this._disposing = !1),
                (this._disposed = !1),
                (this._userDisconnected = !0),
                (this._properties = e),
                (this._sessionInterface = r),
                (this._stats = new l(r)),
                (this._privateEventEmitter = new o(n));
            }
            _emit(e, ...t) {
              this._privateEventEmitter.emit(e, ...t), this.emit(e, ...t);
            }
            _on(e, t) {
              this._privateEventEmitter.on(e, t);
            }
            _once(e, t) {
              this._privateEventEmitter.once(e, t);
            }
            _removeListener(e, t) {
              this._privateEventEmitter.removeListener(e, t);
            }
            clearStats() {
              const { LOG_TRACE: e } = this.logger;
              this._operationCheck(a.RESET_STATS), this._stats.resetStats();
            }
            connect() {
              const { LOG_DEBUG: e } = this.logger;
              (this.userDisconnected = !1), this._operationCheck(a.CONNECT);
            }
            dispose() {
              const { LOG_TRACE: e, LOG_DEBUG: t } = this.logger;
              if (this._disposed || this._disposing) return;
              this._operationCheck(a.DISPOSE), (this._disposing = !0);
              const s = () => {
                (this._disposed = !0),
                  (this._properties = null),
                  (this._userDisconnected = !0),
                  this._emit(this.getDisposedEvent()),
                  this.disableEmitter(),
                  this._privateEventEmitter.disableEmitter();
              };
              if (this._fsm._midDispatch) {
                const e = () => {
                  this._fsm.terminateFsm(), s();
                };
                setTimeout(() => e(), 0);
              } else s();
            }
            disconnect() {
              this._operationCheck(a.DISCONNECT);
              const { LOG_DEBUG: e } = this.logger;
              this.userDisconnected = !0;
            }
            _disconnectSession() {
              this._operationCheck(a.DISCONNECT);
            }
            getDisposedEvent() {
              throw new r("Abstract method");
            }
            getProperties() {
              return (
                this._operationCheck(a.GET_PROPERTIES), this._properties.clone()
              );
            }
            getStat(e) {
              return this._operationCheck(a.GET_STATS), this._stats.getStat(e);
            }
            handleUncorrelatedControlMessage(e) {
              throw new r(
                "Guaranteed Message Connection does not implement a control message handler",
                e,
              );
            }
            incStat(e, t) {
              this._stats.incStat(e, t);
            }
            processFSMEvent(e) {
              this._fsm.processEvent(e);
            }
            inspect() {
              return { flowId: this.flowIdDec };
            }
            toString() {
              return this.inspect();
            }
            get canAck() {
              return !this.disposed;
            }
            get disposed() {
              return this._disposed;
            }
            get flowIdDec() {
              return this.flowId || "(N/A)";
            }
            get flowId() {
              return new r("Flow does not implement ID accessor");
            }
            get session() {
              return this._session;
            }
            get userDisconnected() {
              return this._userDisconnected;
            }
            set userDisconnected(e) {
              this._userDisconnected = e;
            }
            _operationCheck(e) {
              const { LOG_TRACE: t } = this.logger;
              if ((a.describe(e), this._disposed))
                throw new i(
                  "Operation is invalid for Message Consumer in disposed state",
                  n.INVALID_OPERATION,
                );
              if (h.some((t) => t === e)) return !0;
              if (e === a.DISCONNECT && this._isDisconnected())
                throw new i(
                  "Operation is invalid for Message Consumer in disconnected state",
                  n.INVALID_OPERATION,
                );
            }
            _isDisconnected() {
              throw new r("Flow#_isDisconnected not implemented");
            }
          };
        },
        3801: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.PrivateFlowEventName = n.new({
            BIND_WAITING: "PrivateFlowEventName_bindWaiting",
          });
        },
        8535: (e, t, s) => {
          const { FsmEvent: n } = s(8562),
            { State: r } = s(9009),
            { StateMachine: i } = s(4831);
          (e.exports.FsmEvent = n),
            (e.exports.State = r),
            (e.exports.StateMachine = i);
        },
        1786: (e, t, s) => {
          const n = s(9009),
            { FsmObject: r } = s(4072);
          e.exports.EntryPoint = class extends r {
            constructor(e) {
              let t;
              super({ name: e.entryPointName }),
                (this.impl = this.impl || {}),
                (this.impl.outerState = new n.State({
                  name: `${e.state.getName()} outerEntryPoint: ${e.entryPointName}`,
                  parentContext: e.state.getParent(),
                }).initial(() => e.state.transitionTo(t))),
                (t = new n.State({
                  name: `${e.state.getName()} innerEntryPoint: ${e.entryPointName}`,
                  parentContext: e.state,
                }).initial(e.func));
            }
            getDestState() {
              return this.impl.outerState;
            }
          };
        },
        8562: (e, t, s) => {
          const { FsmObject: n } = s(4072);
          e.exports.FsmEvent = class extends n {};
        },
        3828: (e, t, s) => {
          const n = s(9009),
            { FsmObject: r } = s(4072);
          e.exports.ExitPoint = class extends r {
            constructor(e) {
              let t;
              super({ name: e.exitPointName }),
                (this.impl.innerState = new n.State({
                  name: `${e.state.getName()} innerExitPoint: ${e.exitPointName}`,
                  parentContext: e.state,
                }).initial(() => e.state.transitionTo(t))),
                (t = new n.State({
                  name: `${e.state.getName()} outerExitPoint: ${e.exitPointName}`,
                  parentContext: e.state.getParent(),
                }).initial(e.func));
            }
            getDestState() {
              return this.impl.innerState;
            }
          };
        },
        4072: (e, t, s) => {
          const { OperationError: n } = s(3870);
          e.exports.FsmObject = class {
            constructor(e) {
              if (!e) throw new n("No spec provided");
              if (!e.name) throw new n("No name provided for spec");
              this.impl = { name: e.name };
            }
            toString() {
              let e = this.getExtraStringInfo();
              return (
                e.length > 0 && (e = `; ${e}`),
                `{${this.constructor.name}: ${this.getName()}${e}}`
              );
            }
            getExtraStringInfo() {
              return "";
            }
            getName() {
              return this.impl.name;
            }
          };
        },
        4927: (e, t, s) => {
          const n = s(9009),
            { FsmObject: r } = s(4072),
            { Iterator: i } = s(9359),
            { LOG_TRACE: o } = s(390),
            { makeIterator: a } = i;
          class c extends r {
            constructor(e) {
              super(e),
                (this.impl = this.impl || {}),
                (this.impl.logPadding = "");
            }
            getStateMachine() {
              return this.impl.ancestorList[0];
            }
            initial(e) {
              return (
                this.impl.initialReaction &&
                  this.log(
                    `Replacing ${this} initialReaction ${this.impl.initialReaction} with ${e}`,
                  ),
                (this.impl.initialReaction = e.bind(this)),
                this
              );
            }
            transitionTo(e, t) {
              return new c.ReactionResult({
                caller: this,
                destState: e,
                action: t,
              });
            }
            terminate(e) {
              return new c.ReactionResult({
                caller: this,
                destState: this.getStateMachine().getFinalState(),
                action: e,
              });
            }
            getAncestorList() {
              return this.impl.ancestorList;
            }
            log(...e) {
              this.impl.logPadding;
            }
            onInitial(e) {
              let t;
              if (this.impl.initialReaction) {
                if (
                  (this.log(`Initial: for ${this}`),
                  (t = this.impl.initialReaction(e)),
                  t.external)
                )
                  throw new Error(
                    `Initial reaction for ${this} returned external transitions`,
                  );
                return t;
              }
              if (!(this instanceof n.State))
                throw new Error(`Missing initial reaction for ${this}`);
              return this.transitionTo(this);
            }
            processReactionResult(e, t) {
              let s = this;
              if (!e.destState) return this;
              const n = this.lowestCommonAncestor(e);
              for (; s !== n.deref(); ) s.onExit(), (s = s.getParent());
              for (
                e.action && e.action(s, t),
                  s.log(`Action: transition to ${e.destState} in context ${s}`),
                  n.incr();
                !n.end();
                n.incr()
              )
                (s = n.deref()), s.onEntry();
              const r = s.onInitial(t);
              return r.destState !== s ? s.processReactionResult(r, t) : s;
            }
            lowestCommonAncestor(e) {
              const t = this.impl.ancestorList,
                s = e.destState.getAncestorList();
              let n;
              if (t[0] !== s[0])
                throw new Error(
                  `No common ancestor between (${this} in ${t[0]}) and (${e.destState} in ${s[0]})`,
                );
              if (this === e.destState) (n = t.length), e.external && --n;
              else {
                for (n = 1; n < t.length && t[n] === s[n]; ++n);
                (n !== t.length && n !== s.length) || (e.external && --n);
              }
              return a(s, n - 1);
            }
            setLogPadding(e) {
              this.impl.logPadding = e;
            }
          }
          (c.ReactionResult = class {
            constructor(e) {
              if (!(e && e.caller && e.caller instanceof c))
                throw new Error("spec.caller is required to be a StateContext");
              if (!e.caller.getStateMachine().isRunning())
                throw new Error(
                  "ReactionResult objects can only be created while processing events",
                );
              if (e.destState) {
                if (!(e.destState instanceof n.State))
                  throw new Error("destState must be a State object");
                if (e.action && "function" != typeof e.action)
                  throw new Error("action must be a function");
                (this.destState = e.destState),
                  (this.action = e.action),
                  (this.external = e.external);
              }
            }
          }),
            (e.exports.StateContext = c);
        },
        4831: (e, t, s) => {
          const { LOG_ERROR: n } = s(390),
            { State: r } = s(9009),
            { StateContext: i } = s(4927);
          e.exports.StateMachine = class extends i {
            constructor(e) {
              if (e.parentContext)
                throw new Error(
                  `State machine cannot have parent state: ${e.parentContext}`,
                );
              super(e),
                (this.impl.ancestorList = [this]),
                (this.impl.eventQueue = []),
                (this.impl.finalState = new r({
                  name: "impl.final",
                  parentContext: this,
                })),
                (this.impl.handleUncaughtException = (e, t) => (
                  n(
                    `Uncaught exception in ${this} while processing ${e}: ${t.stack}`,
                  ),
                  this.terminate()
                ));
            }
            process(e) {
              const { impl: t } = this,
                { eventQueue: s } = t;
              if ((s.push(e), t.processingEvents)) return !1;
              for (t.processingEvents = !0; s.length; ) s.shift().apply(this);
              return (t.processingEvents = !1), this._onEventCompletion(), !0;
            }
            start() {
              if (this.getCurrentState())
                throw new Error(
                  `Cannot start ${this.getName()}; it is already started.`,
                );
              this.process(() => {
                const e = this.onInitial();
                if (void 0 === e.destState)
                  throw new Error(
                    `Missing destination state from initial transition for ${this}`,
                  );
                if (e.destState === this)
                  throw new Error(
                    `Destination state for initial transition for ${this} cannot be the FSM.`,
                  );
                const t = e.destState.getAncestorList();
                if (t[0] !== this)
                  throw new Error(
                    `Invalid destination state (${e.destState}) from initial transition for state machine (${this}); destState ancestor (${t[0]})`,
                  );
                this.impl.currentState = this.processReactionResult(e);
              });
            }
            isRunning() {
              return this.impl.processingEvents;
            }
            processEvent(e) {
              const { impl: t } = this;
              this.process(() => {
                let s;
                if ((this.log(`Processing event ${e}`), t.currentState))
                  try {
                    (s = t.currentState.handleEvent(e)),
                      (t.currentState = t.currentState.processReactionResult(
                        s,
                        e,
                      ));
                  } catch (n) {
                    this.log(`Caught exception ${n}, continuing`),
                      (s = t.handleUncaughtException.call(
                        t.currentState,
                        e,
                        n,
                      )),
                      (t.currentState = t.currentState.processReactionResult(
                        s,
                        e,
                      ));
                  }
              }) || this.log(`Deferring event ${e}`);
            }
            terminateFsm() {
              const e = this.getCurrentState();
              if (e) {
                if (this.impl.processingEvents)
                  throw new Error(
                    "Cannot terminate state machine while FSM is processing events. To terminate the FSM from within a reaction, return State~terminate() from a reaction.",
                  );
                this.process(() => {
                  const t = e.terminate();
                  this.impl.currentState = e.processReactionResult(t);
                });
              }
            }
            setPostEventAction(e) {
              if (!this.impl.processingEvents)
                throw new Error(
                  "Cannot set post event hook unless FSM is processing events.",
                );
              if (!e || "function" != typeof e)
                throw new Error(
                  `postEventAction must be a function; got (${e})`,
                );
              this.impl.postEventAction = e.bind(this);
            }
            _onEventCompletion() {
              const e = this.impl.postEventAction;
              e &&
                ((this.impl.postEventAction = void 0),
                this.log("Running post event action"),
                e.apply(this));
            }
            getCurrentState() {
              return this.impl.currentState;
            }
            getActiveState(e) {
              const t = this.impl.currentState.getAncestorList();
              for (let s = 1; s < t.length; ++s)
                if (t[s].getName() === e) return t[s];
            }
            isStateActive(e) {
              return void 0 !== this.getActiveState(e);
            }
            unhandledEventReaction(e) {
              if ("function" != typeof e)
                throw new Error(
                  `In ${this}: unhandled event reaction must be a function; got ${e}`,
                );
              return (this.impl.handleUnhandledEvent = e.bind(this)), this;
            }
            uncaughtExceptionReaction(e) {
              if ("function" != typeof e)
                throw new Error(
                  `In ${this}: Uncaught exception reaction must be a function; got ${e}`,
                );
              return (this.impl.handleUncaughtException = e), this;
            }
            getFinalState() {
              return this.impl.finalState;
            }
          };
        },
        9009: (e, t, s) => {
          const { EntryPoint: n } = s(1786),
            { ExitPoint: r } = s(3828),
            { StateContext: i } = s(4927);
          e.exports.State = class extends i {
            constructor(e, t = null) {
              super(e);
              const s = e.parentContext;
              Object.assign(this.impl, {
                parentContext: s,
                reactions: {},
                entryPoints: {},
                exitPoints: {},
                ancestorList: [...s.getAncestorList(), this],
                handleUnhandledEvent: (e) =>
                  s.handleEvent
                    ? s.handleEvent(e)
                    : s.impl.handleUnhandledEvent(e),
              }),
                s && (this.log = s.log.bind(this)),
                Object.keys(t || {}).forEach((e) => {
                  const s = t[e];
                  this[e] = "function" == typeof s ? s.bind(this) : s;
                }),
                this.setLogPadding(" ".repeat(this.impl.ancestorList.length));
            }
            reaction(e, t) {
              if (!e) throw new Error("No event name for reaction");
              if (!t) throw new Error(`No reaction function for reaction ${e}`);
              return (
                this.log(`Adding reaction to ${this} for event ${e}`),
                this.impl.reactions[e] &&
                  this.log(
                    `Replacing reaction ${this.impl.reactions[e]} with ${t}`,
                  ),
                (this.impl.reactions[e] = t.bind(this)),
                this
              );
            }
            entryPoint(e, t) {
              if (!e) throw new Error("No entry point name for entry point");
              if (!t)
                throw new Error(`No reaction function for entry point ${e}`);
              return (
                this.log(`Adding entryPoint ${e} to ${this}`),
                this.impl.entryPoints[e]
                  ? (this.log(`EntryPoint ${e} already exists in ${this}`),
                    this)
                  : ((this.impl.entryPoints[e] = new n({
                      state: this,
                      entryPointName: e,
                      func: t,
                    })),
                    this)
              );
            }
            exitPoint(e, t) {
              if (!e) throw new Error("No exit point name for entry point");
              if (!t)
                throw new Error(`No reaction function for exit point ${e}`);
              return (
                this.log(`Adding exitPoint ${e} to ${this}`),
                this.impl.exitPoints[e]
                  ? (this.log(`ExitPoint ${e} already exists in  ${this}`),
                    this)
                  : ((this.impl.exitPoints[e] = new r({
                      state: this,
                      exitPointName: e,
                      func: t,
                    })),
                    this)
              );
            }
            getEntryPointDestState(e) {
              return void 0 === this.impl.entryPoints[e]
                ? (this.log(`${this}: EntryPoint ${e} does not exist.`), this)
                : this.impl.entryPoints[e].getDestState();
            }
            getExitPointDestState(e) {
              return void 0 === this.impl.exitPoints[e]
                ? (this.log(`${this}: ExitPoint ${e} does not exist.`), this)
                : this.impl.exitPoints[e].getDestState();
            }
            entry(e) {
              return (
                this.impl.appEntryFunc &&
                  this.log(
                    `Replacing entry function ${this.impl.appEntryFunc} with ${e}`,
                  ),
                (this.impl.appEntryFunc = e.bind(this)),
                this
              );
            }
            exit(e) {
              return (
                this.impl.appExitFunc &&
                  this.log(
                    `Replacing exit function ${this.impl.appExitFunc} with ${e}`,
                  ),
                (this.impl.appExitFunc = e.bind(this)),
                this
              );
            }
            externalTransitionTo(e, t) {
              return new i.ReactionResult({
                caller: this,
                destState: e,
                action: t,
                external: !0,
              });
            }
            transitionToEntryPoint(e, t, s) {
              return new i.ReactionResult({
                caller: this,
                destState: e.getEntryPointDestState(t),
                action: s,
              });
            }
            transitionToExitPoint(e, t, s) {
              return new i.ReactionResult({
                caller: this,
                destState: e.getExitPointDestState(t),
                action: s,
              });
            }
            eventUnhandled() {
              return new i.ReactionResult({ caller: this });
            }
            internalTransition(e) {
              return new i.ReactionResult({
                caller: this,
                destState: this.getStateMachine().getCurrentState(),
                action: e,
              });
            }
            terminate(e) {
              return new i.ReactionResult({
                caller: this,
                destState: this.getStateMachine().getFinalState(),
                action: e,
              });
            }
            getParent() {
              return this.impl.parentContext;
            }
            onEntry() {
              this.log(`Entering: ${this}`),
                this.impl.appEntryFunc && this.impl.appEntryFunc();
            }
            onExit() {
              this.log(`Exiting: ${this}`),
                this.impl.appExitFunc && this.impl.appExitFunc();
            }
            handleEvent(e) {
              this.log(`Process: ${e}`);
              const t = this.impl.reactions[e.getName()];
              if (t) {
                const s = t(e);
                if (
                  (s ||
                    this.log(`Reaction returned undefined: ${e} in ${this}`),
                  s.destState)
                )
                  return this.log(`Handled: ${e}`), s;
                this.log(`Unhandled: ${e} in ${this}`);
              } else this.log(`No reaction: ${e} in ${this}`);
              return this.impl.handleUnhandledEvent(e);
            }
          };
        },
        390: (e, t, s) => {
          const { ConsoleLogImpl: n } = s(3893),
            { GlobalBinding: r } = s(8942),
            { LogImpl: i } = s(1669),
            { LogLevel: o } = s(8220),
            { Parameter: a } = s(2201),
            { SolclientFactory: c } = s(828),
            { isEnumMember: u, isFunction: l } = a,
            { getImpl: h, getLogLevel: d, setImpl: p, setLogLevel: _ } = r,
            E = {};
          function T(e, t) {
            Object.keys(E).forEach((s) => {
              t[`LOG_${s.toUpperCase()}`] = e[s];
            });
          }
          Object.assign(E, {
            trace(...e) {
              const t = h();
              t &&
                t.trace &&
                d() >= o.TRACE &&
                t.trace.apply(null, ["solclientjs: ", ...e]);
            },
            debug(...e) {
              const t = h();
              t &&
                t.debug &&
                d() >= o.DEBUG &&
                t.debug.apply(null, ["solclientjs: ", ...e]);
            },
            info(...e) {
              const t = h();
              t &&
                t.info &&
                d() >= o.INFO &&
                t.info.apply(null, ["solclientjs: ", ...e]);
            },
            warn(...e) {
              const t = h();
              t &&
                t.warn &&
                d() >= o.WARN &&
                t.warn.apply(null, ["solclientjs: ", ...e]);
            },
            error(...e) {
              const t = h();
              t &&
                t.error &&
                d() >= o.ERROR &&
                t.error.apply(null, ["solclientjs: ", ...e]);
            },
            fatal(...e) {
              const t = h();
              t && t.fatal && t.fatal.apply(null, ["solclientjs: ", ...e]);
            },
          }),
            (c.getLogLevel = () => d()),
            (c.setLogLevel = (e) => {
              u("logLevel", e, o), _(e);
            }),
            c.addInitializer((e) => {
              _(e.logLevel);
              const t = e.logger || h() || new n();
              Object.keys(new i()).forEach((e) => l(`logger.${e}`, t[e])), p(t);
            }),
            T(E, e.exports),
            (e.exports.LogImpl = i),
            (e.exports.LogLevel = o),
            (e.exports.Binding = r),
            (e.exports.ConsoleLogImpl = n),
            r.setImpl(new n()),
            (e.exports.LogFormatter = class {
              constructor(e) {
                this._formatter =
                  "function" == typeof e
                    ? e
                    : "string" == typeof e
                      ? function (...t) {
                          return [e, ...t];
                        }
                      : e ||
                        function (...e) {
                          return [...e];
                        };
                const t = this;
                Object.keys(E).forEach((e) => {
                  this[e] = function (...s) {
                    return E[e].apply(null, t._formatter(...s));
                  };
                }),
                  T(this, this);
              }
              get formatter() {
                return this._formatter;
              }
              set formatter(e) {
                this._formatter = e;
              }
              wrap(e, t) {
                const s = this;
                return function (...n) {
                  return e.apply(t, s._formatter(...n));
                };
              }
            });
        },
        3893: (e, t, s) => {
          const { LogImpl: n } = s(1669),
            r = () => {};
          function i(e) {
            const t = new Date(),
              s = " ".repeat(6 - e.length);
            let n = String(t.getFullYear()),
              r = String(t.getMonth() + 1),
              i = String(t.getDate()),
              o = String(t.getHours()),
              a = String(t.getMinutes()),
              c = String(t.getSeconds()),
              u = String(t.getMilliseconds());
            return (
              (n = "0".repeat(4 - n.length) + n),
              (r = r.length < 2 ? `0${r}` : r),
              (i = i.length < 2 ? `0${i}` : i),
              (o = o.length < 2 ? `0${o}` : o),
              (a = a.length < 2 ? `0${a}` : a),
              (c = c.length < 2 ? `0${c}` : c),
              (u = u.length < 3 ? `0${u}` : u),
              (u = u.length < 3 ? `0${u}` : u),
              [`${n}-${r}-${i} ${o}:${a}:${c}.${u}`, `${e}${s}`]
            );
          }
          e.exports.ConsoleLogImpl = class extends n {
            constructor(e) {
              let t = r,
                n = r,
                o = r,
                a = r,
                c = r,
                u = r;
              const l =
                e || ("undefined" == typeof window ? s.g : window).console;
              l &&
                (l.log || l.warn) &&
                (l.log && void 0 !== l.log
                  ? ((t = Function.prototype.bind.call(l.log, l)),
                    (n = Function.prototype.bind.call(l.log, l)))
                  : l.debug &&
                    "function" == typeof l.debug &&
                    ((t = Function.prototype.bind.call(l.debug, l)),
                    (n = Function.prototype.bind.call(l.debug, l))),
                (o =
                  l.info && void 0 !== l.info
                    ? Function.prototype.bind.call(l.info, l)
                    : Function.prototype.bind.call(l.log, l)),
                (a =
                  l.warn && void 0 !== l.warn
                    ? Function.prototype.bind.call(l.warn, l)
                    : Function.prototype.bind.call(l.log, l)),
                l.error && void 0 !== l.error
                  ? ((c = Function.prototype.bind.call(l.error, l)),
                    (u = Function.prototype.bind.call(l.error, l)))
                  : ((c = Function.prototype.bind.call(l.log, l)),
                    (u = Function.prototype.bind.call(l.log, l)))),
                super(
                  (...e) => {
                    t(...i("TRACE"), ...e);
                  },
                  (...e) => {
                    n(...i("DEBUG"), ...e);
                  },
                  (...e) => {
                    o(...i("INFO"), ...e);
                  },
                  (...e) => {
                    a(...i("WARN"), ...e);
                  },
                  (...e) => {
                    c(...i("ERROR"), ...e);
                  },
                  (...e) => {
                    u(...i("FATAL"), ...e);
                  },
                );
            }
          };
        },
        8942: (e, t, s) => {
          const { LogLevel: n } = s(8220),
            r = { impl: null, level: n.INFO },
            i = {
              getImpl: function () {
                return r.impl;
              },
              setImpl: function (e) {
                r.impl = e;
              },
              getLogLevel: function () {
                return r.level;
              },
              setLogLevel: function (e) {
                r.level = e;
              },
            };
          e.exports.GlobalBinding = i;
        },
        1669: (e) => {
          e.exports.LogImpl = class {
            constructor(e, t, s, n, r, i) {
              Object.assign(this, {
                trace: e,
                debug: t,
                info: s,
                warn: n,
                error: r,
                fatal: i,
              });
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
            fatal() {}
          };
        },
        8220: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.LogLevel = n.new({
            FATAL: 0,
            ERROR: 1,
            WARN: 2,
            INFO: 3,
            DEBUG: 4,
            TRACE: 5,
          });
        },
        4858: (e, t, s) => {
          const { ConsumerFlows: n } = s(4697),
            { ConsumerFSMEvent: r } = s(3120),
            { ConsumerFSMEventNames: i } = s(8694),
            { MessageConsumer: o } = s(8692),
            { MessageConsumerAcknowledgeMode: a } = s(544),
            { MessageConsumerEvent: c } = s(6203),
            { MessageConsumerEventName: u } = s(2235),
            { MessageConsumerProperties: l } = s(6334),
            { QueueBrowser: h } = s(1690),
            { QueueBrowserEventName: d } = s(2603),
            { QueueBrowserProperties: p } = s(1883);
          (e.exports.ConsumerFlows = n),
            (e.exports.ConsumerFSMEvent = r),
            (e.exports.ConsumerFSMEventNames = i),
            (e.exports.MessageConsumer = o),
            (e.exports.MessageConsumerEvent = c),
            (e.exports.MessageConsumerAcknowledgeMode = a),
            (e.exports.MessageConsumerEventName = u),
            (e.exports.MessageConsumerProperties = l),
            (e.exports.QueueBrowser = h),
            (e.exports.QueueBrowserEventName = d),
            (e.exports.QueueBrowserProperties = p);
        },
        5639: (e, t, s) => {
          const { Enum: n, assert: r } = s(9359),
            { MessageOutcome: i } = s(4789),
            { LOG_DEBUG: o, LOG_ERROR: a } = s(390),
            c = n.new({
              UNACKED: "UNACKED",
              ACKED_NOT_SENT: "ACKED_NOT_SENT",
              ACKED_SENT: "ACKED_SENT",
            });
          class u {
            constructor(e, t, s) {
              e
                ? ((this.exists = !0),
                  (this.id = e),
                  (this.key = e.toString()),
                  (this.state = t || c.UNACKED),
                  (this.settlementOutcome = s || i.ACCEPTED))
                : (this.exists = !1);
            }
            set(e, t, s = void 0) {
              (this.exists = !0),
                (this.id = e),
                (this.key = e.toString()),
                (this.state = t || c.UNACKED),
                (this.settlementOutcome = void 0 !== s ? s : null);
            }
            clear() {
              (this.exists = !1),
                (this.id = null),
                (this.key = null),
                (this.state = null),
                (this.settlementOutcome = null);
            }
          }
          Object.assign(e.exports, {
            ApplicationAckState: c,
            ApplicationAck: u,
            ApplicationAckRingBuffer: class {
              constructor(e) {
                r(e >= 2),
                  (this._size = e),
                  (this._insertIndex = 0),
                  (this._buffer = Array(e)
                    .fill(null)
                    .map(() => new u())),
                  (this._index = new Map());
              }
              reset() {
                (this._insertIndex = 0),
                  this._buffer.forEach((e) => {
                    e.exists = !1;
                  }),
                  this._index.clear();
              }
              insert(e, t) {
                r(t), r(e);
                const s = this._size,
                  n = this._buffer,
                  i = this._index,
                  o = this._insertIndex;
                r(
                  !n[o].exists,
                  "Invariant not enforced (before): insert index not empty",
                );
                const u = n[o];
                u.set(e, c.UNACKED),
                  i.has(u.key) &&
                    a(`Duplicate ID: ${i.get(u.key)} insertIndex: ${o}`),
                  i.set(u.key, o);
                const l = n[(o + 1) % s];
                let h;
                try {
                  h = t(l.exists ? l : null);
                } finally {
                  (this._insertIndex = (o + 1) % s),
                    l.exists && (i.delete(l.key), l.clear());
                }
                return (
                  r(
                    !n[this._insertIndex].exists,
                    "Invariant not enforced (after): insert index not empty",
                  ),
                  h
                );
              }
              get length() {
                return this._index.size;
              }
              front() {
                if (0 === this.length) return null;
                const e = this._buffer,
                  t = this._insertIndex,
                  s = this._size,
                  n = (t + 1) % s;
                if (e[n].exists) return e[n];
                for (let t = n, r = n + s - 1; t <= r; ++t) {
                  const n = e[t % s];
                  if (n.exists) return n;
                }
                return (
                  r(
                    0 === this._index.size,
                    "#front() failed so buffer must be empty",
                  ),
                  null
                );
              }
              forEach(e) {
                if (0 === this.length) return;
                const t = this._buffer,
                  s = this._size;
                let n = 0;
                for (
                  let r = this._insertIndex + 1, i = this._insertIndex + s;
                  r <= i;
                  ++r
                ) {
                  const i = t[r % s];
                  i.exists && e(i, n++, this);
                }
                r(n > 0, "Not empty but did not dispatch");
              }
              updateAckState(e, t, s = void 0) {
                const n = e.toString();
                r(this._index.has(n), "Ack key not found");
                const o = this._buffer[this._index.get(n)];
                r(o, "Ack key has no entry"),
                  (o.state = t),
                  null != s
                    ? (o.settlementOutcome = s)
                    : t === c.ACKED_NOT_SENT &&
                      (o.settlementOutcome = i.ACCEPTED);
              }
              has(e) {
                const t = e.toString();
                return this._index.has(t);
              }
            },
          });
        },
        4697: (e, t, s) => {
          const { assert: n } = s(9359),
            { MessageConsumer: r } = s(8692),
            { MessageConsumerEventName: i } = s(2235);
          e.exports.ConsumerFlows = class {
            constructor() {
              (this._allFlows = new Set()),
                (this._reconnectingFlows = new Set()),
                (this._flowsById = {});
            }
            add(e) {
              if (
                (n(e instanceof r, "Flow was not a consumer"),
                this._allFlows.has(e))
              )
                return e;
              const t = () => {
                  this._flowsById[e.flowId] = e;
                },
                s = () => {
                  const t = e.flowId;
                  this._allFlows.delete(e),
                    this._reconnectingFlows.delete(e),
                    this._flowsById[t] === e && delete this._flowsById[t];
                },
                o = () => {
                  this._reconnectingFlows.delete(e);
                };
              return (
                e._on(i.UP, t),
                e._on(i.RECONNECTED, () => {
                  t(), this._allFlows.add(e), this._reconnectingFlows.delete(e);
                }),
                e._on(i.DISPOSED, s),
                e._on(i.RECONNECTING, () => {
                  s(), this._reconnectingFlows.add(e);
                }),
                e._on(i.DOWN, o),
                e._on(i.DOWN_ERROR, o),
                this._allFlows.add(e),
                e
              );
            }
            get flows() {
              return Array.from(this._allFlows);
            }
            get reconnectingFlows() {
              return Array.from(this._reconnectingFlows);
            }
            getFlowById(e) {
              return this._flowsById[e];
            }
            disposeAll() {
              this._allFlows.forEach((e) => e.dispose());
            }
          };
        },
        8694: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.ConsumerFSMEventNames = n.new({
            SESSION_UP: "SESSION_UP",
            SESSION_UP_NO_AD: "SESSION_UP_NO_AD",
            SESSION_DOWN: "SESSION_DOWN",
            SESSION_DISCONNECT: "SESSION_DISCONNECT",
            FLOW_FAILED: "FLOW_FAILED",
            FLOW_UP: "FLOW_UP",
            FLOW_ACTIVE_IND: "FLOW_ACTIVE_IND",
            FLOW_CLOSE: "FLOW_CLOSE",
            FLOW_OPEN: "FLOW_OPEN",
            FLOW_UNBOUND: "FLOW_UNBOUND",
            ACK: "ACK",
            ACK_TIMEOUT: "ACK_TIMEOUT",
            BIND_TIMEOUT: "BIND_TIMEOUT",
            CREATE_TIMEOUT: "CREATE_TIMEOUT",
            UNBIND_TIMEOUT: "UNBIND_TIMEOUT",
            CAN_SEND: "CAN_SEND",
            TRANSPORT_ERROR: "TRANSPORT_ERROR",
            DISPOSE: "DISPOSE",
            VIRTUALROUTER_NAME_CHANGED: "VIRTUALROUTER_NAME_CHANGED",
            RECONNECT_INTERVAL_TIMEOUT: "RECONNECT_INTERVAL_TIMEOUT",
            BIND_RESPONSE: "BIND_RESPONSE",
            CREATE_FAILED: "CREATE_FAILED",
            CREATE_SUCCESS: "CREATE_SUCCESS",
          });
        },
        3120: (e, t, s) => {
          const { FsmEvent: n } = s(8535);
          e.exports.ConsumerFSMEvent = class extends n {
            constructor(e, t) {
              super(e), (this.details = t);
            }
          };
        },
        3678: (e, t, s) => {
          const n = s(7291),
            {
              ApplicationAck: r,
              ApplicationAckRingBuffer: i,
              ApplicationAckState: o,
            } = s(5639),
            { assert: a } = s(9359),
            { CapabilityType: c } = s(5594),
            { ConsumerFSMEvent: u } = s(3120),
            { ConsumerFSMEventNames: l } = s(8694),
            { ConsumerStateNames: h } = s(5805),
            {
              DestinationFromNetwork: d,
              DestinationType: p,
              Queue: _,
              Topic: E,
            } = s(3170),
            {
              ErrorResponseSubcodeMapper: T,
              ErrorSubcode: g,
              OperationError: S,
            } = s(3870),
            { LogFormatter: m } = s(390),
            { Long: f } = s(840),
            { MessageConsumerAcknowledgeMode: I } = s(544),
            { MessageConsumerEventName: R } = s(2235),
            { MessageDispatcher: C } = s(1896),
            { PrivateFlowEventName: A } = s(5370),
            {
              QueueAccessType: O,
              QueueDescriptor: N,
              QueuePermissions: P,
              QueueProperties: D,
              QueueType: y,
            } = s(5754),
            { MessageOutcome: b, RgmidFactory: M } = s(4789),
            { State: w, StateMachine: v } = s(8535),
            { Stats: L, StatType: U } = s(6818),
            { Timer: F } = s(7758),
            { TransportAcks: x, TransportAckResult: B } = s(1019),
            G = new r(f.UZERO, o.ACKED_SENT, b.ACCEPTED);
          e.exports.ConsumerFSM = class extends v {
            constructor({
              name: e,
              consumer: t,
              sessionInterface: s,
              properties: r,
            } = {}) {
              super({ name: e });
              const i = this,
                o = (this.logger = new m(function (...e) {
                  return [
                    `[session=${s.sessionIdHex}]`,
                    `[message-consumer-fsm=${t.flowIdDec}]`,
                    ...e,
                  ];
                })),
                {
                  LOG_TRACE: p,
                  LOG_DEBUG: _,
                  LOG_INFO: E,
                  LOG_WARN: y,
                  LOG_ERROR: M,
                } = o;
              this.log = o.wrap(this.log, this);
              const v = r.acknowledgeMode === I.AUTO;
              (this._consumer = t),
                (this._sessionInterface = s),
                (this._acknowledgeTimeoutInMsecs = r.acknowledgeTimeoutInMsecs),
                (this._acknowledgeThreshold = r.acknowledgeThreshold),
                (this._localPreferredWindowSize = r.windowSize),
                (this._localMaxWindowSize = r.windowSize),
                (this._hasAutoAckSupport = v),
                (this._messageDispatch = new C({
                  emitter: t,
                  autoAck: v,
                  logger: o,
                })),
                (this._stats = new L()),
                this._resetRemoteConnectionState(),
                this._resetLocalConnectionState(),
                (this._midDispatch = !1),
                (this._replayStartLocation = r.replayStartLocation),
                (this._errorCausingReconnect = null);
              const x = "EMIT",
                B = "DISPATCH",
                G = "NO_DISPATCH";
              let k = [];
              function W(e) {
                const t = {};
                k.forEach((s, n, r) => {
                  function i(e, s) {
                    if (void 0 === t[e]) return;
                    const i = t[e];
                    (t[e] = void 0), (r[i] = null), (r[n] = null);
                  }
                  if (!(n < e) && s)
                    switch (s.type) {
                      case x:
                        switch (s.data) {
                          case R.UP:
                          case R.ACTIVE:
                          case R.RECONNECTED:
                            t[s.data] = n;
                            break;
                          case R.DOWN:
                          case R.DOWN_ERROR:
                            i(R.UP, s.data);
                            break;
                          case R.INACTIVE:
                            i(R.ACTIVE, s.data);
                            break;
                          default:
                            M(
                              `Unexpected event in post-event action: ${s.data}`,
                            );
                        }
                        break;
                      case B:
                        t[s.type] = n;
                        break;
                      case G:
                        i(B, s.type);
                    }
                });
              }
              function $() {
                let e,
                  s = 0;
                for (e = 0; e < k.length; ++e) {
                  s < k.length && (W(e), (s = k.length));
                  const n = k[e];
                  if (n)
                    switch (n.type) {
                      case x:
                        void 0 !== n.error
                          ? t._emit(n.data, n.error)
                          : t._emit(n.data);
                        break;
                      case G:
                        break;
                      case B:
                        this.requestStartDispatchFSM();
                        break;
                      default:
                        M(`Unhandled post event action type: ${n.type}`);
                    }
                }
                k = [];
              }
              function q(e, t, s) {
                let n;
                (n =
                  void 0 !== t ? { type: e, data: t, error: s } : { type: e }),
                  k.push(n),
                  k.length,
                  1 === k.length && i.setPostEventAction($);
              }
              function V(e) {
                a(e instanceof S), t._emit(R.CONNECT_FAILED_ERROR, e);
              }
              function H(e) {
                let t = null;
                const s = e;
                if (
                  s &&
                  s.length > 0 &&
                  s.some((e) => e === b.FAILED || b.REJECTED) &&
                  !i._sessionInterface.isCapable(c.AD_APP_ACK_FAILED)
                ) {
                  const e = `Session.capabilitySettlementOutcomeNotSupported: [ ${s.map((e) => b.nameOf(e)).join(", ")} ]`;
                  y(e), (t = new S(e, g.INVALID_OPERATION));
                }
                return t;
              }
              function Y(e) {
                let t = null;
                return (
                  void 0 === i._replayStartLocation ||
                  i._sessionInterface.isCapable(c.MESSAGE_REPLAY)
                    ? r.topicEndpointSubscription
                      ? (t = (function (e) {
                          let t = null;
                          if (e) {
                            const s = e.getSubscriptionInfo();
                            s &&
                              (s.isShare || s.isNoExport) &&
                              !i._sessionInterface.isCapable(
                                c.SHARED_SUBSCRIPTIONS,
                              ) &&
                              (t = new S(
                                "Shared Subscriptions not Supported",
                                g.SHARED_SUBSCRIPTIONS_NOT_SUPPORTED,
                              ));
                          }
                          return t;
                        })(r.topicEndpointSubscription))
                      : r.requiredSettlementOutcomes &&
                        (t = H(r.requiredSettlementOutcomes))
                    : (t = new S(
                        "Message Replay Not Supported",
                        g.REPLAY_NOT_SUPPORTED,
                      )),
                  t
                    ? e.transitionTo(i.Unbound, () => V(t))
                    : r.createIfMissing &&
                        r.queueDescriptor &&
                        r.queueDescriptor.durable
                      ? e.transitionTo(i.CreateSent)
                      : e.transitionTo(i.BindSent)
                );
              }
              function Q(e, t = !1) {
                let s = null;
                return (
                  r.requiredSettlementOutcomes &&
                    (s = H(r.requiredSettlementOutcomes)),
                  s
                    ? e.transitionTo(i.Unbound, () => V(s))
                    : t
                      ? e.externalTransitionTo(i.Reconnecting.RBindSent)
                      : e.transitionTo(i.Reconnecting.RBindSent)
                );
              }
              (this._addEventToEmit = (e, t) => {
                (r.activeIndicationEnabled ||
                  (e !== R.INACTIVE && e !== R.ACTIVE)) &&
                  q(x, e, t);
              }),
                (this._requestStartDispatch = () => {
                  q(B);
                }),
                (this._requestStopDispatch = () => {
                  this.requestStopDispatchFSM(), q(G);
                }),
                this.unhandledEventReaction(function (e) {
                  switch (e.getName()) {
                    case l.VIRTUALROUTER_NAME_CHANGED:
                      return (
                        E(
                          "VirtualRouter name change: clearing all acknowledgement state and partition group ID, if any",
                        ),
                        i._resetRemoteConnectionState(),
                        this
                      );
                    case l.FLOW_UNBOUND:
                      return (
                        E(
                          "Received unsolicited unbind. Flow may be manually reconnected.",
                        ),
                        this.transitionToUnbound(R.DOWN_ERROR, e.details)
                      );
                    case l.DISPOSE:
                      return i._dispose(), i.getCurrentState().terminate();
                    case l.BIND_RESPONSE:
                      return (
                        (function (e) {
                          const t = s.getCorrelationTag(),
                            i = n.AdProtocolMessage.getCloseMessageConsumer(
                              e.flowId,
                              t,
                            );
                          s.sendControl(i),
                            s.enqueueRequest(
                              t,
                              () => this.handleAccidentalBind(e),
                              r.connectTimeoutInMsecs,
                              null,
                              null,
                            );
                        })(e.details),
                        this
                      );
                    default:
                      return (
                        e.getName(), this.getCurrentState().getName(), this
                      );
                  }
                }),
                this.initial(function () {
                  return this.transitionTo(i.Unbound, (e) => {
                    E(`Starting ${e.getStateMachine().getName()}`);
                  });
                }),
                (this.Unbound = new w(
                  { name: h.UNBOUND, parentContext: i },
                  {
                    emitDisabledEvent() {
                      t._emit(R.GM_DISABLED);
                    },
                  },
                )
                  .reaction(l.FLOW_CLOSE, function () {
                    return this.transitionTo(this);
                  })
                  .reaction(l.SESSION_DOWN, function () {
                    return this.transitionTo(this);
                  })
                  .reaction(l.SESSION_DISCONNECT, function () {
                    return this.transitionTo(this);
                  })
                  .reaction(l.FLOW_OPEN, function () {
                    return this.transitionTo(i.Unbound.AwaitSessionUp);
                  })
                  .reaction(l.SESSION_UP, function () {
                    return i._sessionInterface.isCapable(
                      c.GUARANTEED_MESSAGE_CONSUME,
                    )
                      ? this.transitionTo(i.Unbound.AwaitFlowOpen)
                      : (y(
                          `Consumer is not supported by router for this client on sessionId 0x${i._sessionInterface.sessionIdHex}`,
                        ),
                        this.internalTransition(() =>
                          this.emitDisabledEvent(),
                        ));
                  })
                  .reaction(l.SESSION_UP_NO_AD, function () {
                    return this.internalTransition(() =>
                      this.emitDisabledEvent(),
                    );
                  })
                  .exit(() => {
                    i._connectAttempts = r.connectAttempts;
                  })),
                (this.Unbound.AwaitSessionUp = new w(
                  {
                    name: h.UNBOUND_AWAIT_SESSION_UP,
                    parentContext: this.Unbound,
                  },
                  {
                    emitBindWaiting() {
                      t._emit(A.BIND_WAITING);
                    },
                  },
                )
                  .entry(function () {
                    this.emitBindWaiting();
                  })
                  .reaction(l.SESSION_DOWN, function () {
                    return this.internalTransition();
                  })
                  .reaction(l.SESSION_DISCONNECT, function () {
                    return this.internalTransition();
                  })
                  .reaction(l.SESSION_UP, function () {
                    return Y(this);
                  })),
                (this.Unbound.AwaitFlowOpen = new w({
                  name: h.UNBOUND_AWAIT_FLOWOPEN,
                  parentContext: this.Unbound,
                }).reaction(l.FLOW_OPEN, function () {
                  return Y(this);
                })),
                (this.BindSentExtensions = {
                  sendBindRequest() {
                    const e = s.getCorrelationTag(),
                      o = i._transportAcks;
                    i._endpointEnsure();
                    const a = i._endpoint,
                      c = i._subscription,
                      u = n.AdProtocolMessage.getOpenMessageConsumer(
                        r.queueDescriptor,
                        r.queueProperties,
                        a,
                        c,
                        e,
                        r.windowSize,
                        r.noLocal,
                        r.activeIndicationEnabled,
                        o.lastAcked,
                        o.lastReceived,
                        r.browser,
                        i._replayStartLocation,
                        t.endpointErrorId,
                        t.partitionGroupId,
                        r.requiredSettlementOutcomes &&
                          r.requiredSettlementOutcomes.length > 0,
                      );
                    s.sendControl(u),
                      s.enqueueRequest(
                        e,
                        this.handleBindTimeout.bind(this),
                        r.connectTimeoutInMsecs,
                        null,
                        this.handleBindResponse.bind(this),
                      ),
                      r.queueDescriptor,
                      r.queueProperties,
                      r.windowSize,
                      r.noLocal,
                      r.activeIndicationEnabled,
                      o.lastAcked,
                      o.lastReceived,
                      r.browser,
                      i._replayStartLocation,
                      t.endpointErrorId,
                      t.partitionGroupId,
                      r.requiredSettlementOutcomes;
                  },
                  cancelBindRequestTimer() {
                    this.bindRequestTimer.cancel();
                  },
                  handleBindTimeout() {
                    E("Bind timeout"),
                      i.processEvent(new u({ name: l.BIND_TIMEOUT }));
                  },
                  handleExpectedBind(e) {
                    let s = e.getPartitionGroupId();
                    (null != s && null != s) ||
                      ((s = void 0), i._clearPartitionGroupId());
                    const n = {
                      lastMsgIdAcked: e.getLastMsgIdAcked(),
                      flowId: e.getFlowId(),
                      accessType:
                        ((r = e.getAccessType()),
                        void 0 === r ? O.EXCLUSIVE : r),
                      topicEndpointBytes: e.getTopicEndpointBytes(),
                      grantedPermissions: e.getGrantedPermissions(),
                      allOthersPermissions: e.getAllOthersPermissions(),
                      respectsTTL: e.getRespectsTTL(),
                      activeFlow: e.getActiveFlow(),
                      wantFlowChangeNotify: e.getWantFlowChangeNotify(),
                      discardBehavior: e.getQueueDiscardBehavior(),
                      deliveryCountSent: e.getEndpointDeliveryCountSent(),
                      endpointId: e.getEndpointId(),
                      maxUnackedMessages: e.getMaxUnackedMessages(),
                      endpointErrorId: e.getEndpointErrorId(),
                      spoolerUniqueId: e.getSpoolerUniqueId(),
                      quota: e.getQuota(),
                      maxMsgSize: e.getMaxMsgSize(),
                      maxRedelivery: e.getMaxRedelivery(),
                      partitionGroupId: s,
                    };
                    var r;
                    if (
                      (Object.assign(t, {
                        accessType: n.accessType,
                        queueDiscardBehavior: n.discardBehavior,
                        deliveryCountSent: n.deliveryCountSent,
                        endpointId: n.endpointId,
                        respectsTTL: n.respectsTTL,
                        flowId: n.flowId,
                        permissions: n.grantedPermissions,
                        wantFlowChangeNotify: n.wantFlowChangeNotify,
                        endpointErrorId: n.endpointErrorId,
                        spoolerUniqueId: n.spoolerUniqueId,
                        partitionGroupId: s,
                      }),
                      i._sessionInterface.isCapable(c.BR_REPLAY_ERRORID) &&
                        (t.endpointErrorId = n.endpointErrorId),
                      n.topicEndpointBytes && n.topicEndpointBytes.length)
                    ) {
                      (n.endpoint = d.createDestinationFromBytes(
                        n.topicEndpointBytes,
                      )),
                        i._endpoint,
                        n.endpoint,
                        (i._endpoint = n.endpoint);
                      const e = i._consumer._properties;
                      e.queueDescriptor = new N({
                        name: n.endpoint.name,
                        type: e.queueDescriptor.type,
                        durable: e.queueDescriptor.durable,
                      });
                    }
                    const o = i._consumer._properties;
                    (o.queueProperties = new D({
                      respectsTTL: n.respectsTTL,
                      permissions: n.allOthersPermissions,
                      quotaMB: n.quota,
                      maxMessageSize: n.maxMsgSize,
                      discardBehavior: n.discardBehavior,
                      maxMessageRedelivery: n.maxRedelivery,
                      accessType: n.accessType,
                    })),
                      o.queueProperties.permissions ||
                        (o.queueProperties.permissions = P.NONE),
                      Object.assign(i, {
                        _active: n.activeFlow,
                        _remoteWindowSize: n.maxUnackedMessages,
                      }),
                      f.UZERO.eq(i._transportAcks.lastAcked)
                        ? (i._transportAcks.lastAcked =
                            n.lastMsgIdAcked || f.UZERO)
                        : i._transportAcks;
                  },
                  handleBindResponse(e) {
                    if (e.msgType !== n.SMFAdProtocolMessageType.BIND)
                      return (
                        E(
                          `Unexpected message type in bind response: ${n.SMFAdProtocolMessageType.describe(e.msgType)}`,
                        ),
                        i.processEvent(
                          new u(
                            { name: l.FLOW_FAILED },
                            new S(
                              `Unexpected bind response: ${n.SMFAdProtocolMessageType.describe(e.msgType)}`,
                              g.PROTOTOCOL_ERROR,
                            ),
                          ),
                        )
                      );
                    const t = e.smfHeader,
                      s = t.pm_respcode;
                    if (null === s)
                      return (
                        this._consumer.incStat(
                          U.RX_DISCARD_SMF_UNKNOWN_ELEMENT,
                        ),
                        void this._sessionInterface.sessionIdHex
                      );
                    if (200 !== s) {
                      const e = t.pm_respstr,
                        n = T.getADErrorSubcode(s, e);
                      return (
                        E("Flow failed (bind):", s, e, g.describe(n)),
                        i.processEvent(
                          new u(
                            { name: l.FLOW_FAILED },
                            new S(e, n, { responseCode: s }),
                          ),
                        )
                      );
                    }
                    const r = { name: l.BIND_RESPONSE };
                    return i.processEvent(new u(r, e));
                  },
                }),
                (this.BindSent = new w(
                  { name: h.BIND_SENT, parentContext: i },
                  this.BindSentExtensions,
                )
                  .entry(function () {
                    i._connectAttempts--,
                      this.sendBindRequest(),
                      (this.bindRequestTimer = F.newTimeout(
                        r.connectTimeoutInMsecs,
                        this.handleBindTimeout,
                      ));
                  })
                  .reaction(l.SESSION_DOWN, function () {
                    return this.transitionTo(i.Unbound.AwaitSessionUp);
                  })
                  .reaction(l.SESSION_DISCONNECT, function () {
                    return this.transitionTo(i.Unbound.AwaitSessionUp, () =>
                      i._addEventToEmit(R.DOWN),
                    );
                  })
                  .reaction(l.FLOW_CLOSE, function () {
                    return this.transitionTo(i.UnbindSent);
                  })
                  .reaction(l.BIND_TIMEOUT, function () {
                    return (
                      i._connectAttempts,
                      i._connectAttempts > 0
                        ? this.externalTransitionTo(i.BindSent)
                        : this.transitionTo(i.Unbound.AwaitFlowOpen, () =>
                            V(new S("Bind failed due to timeout", g.TIMEOUT)),
                          )
                    );
                  })
                  .reaction(l.FLOW_FAILED, function (e) {
                    return this.transitionTo(i.Unbound.AwaitFlowOpen, () =>
                      V(e.details),
                    );
                  })
                  .reaction(l.BIND_RESPONSE, function (e) {
                    return (
                      this.handleExpectedBind(e.details),
                      this.transitionTo(i.FlowUp)
                    );
                  })
                  .reaction(l.FLOW_UP, function () {
                    return this.transitionTo(i.FlowUp);
                  })
                  .exit(function () {
                    this.cancelBindRequestTimer();
                  })),
                (this.Reconnecting = new w({
                  name: h.RECONNECTING,
                  parentContext: i,
                })
                  .entry(function () {
                    this._errorCausingReconnect,
                      i._errorCausingReconnect,
                      t._emit(R.RECONNECTING, i._errorCausingReconnect),
                      (i._connectAttempts = r.connectAttempts),
                      (i.reconnectAttempts = r.reconnectAttempts);
                  })
                  .initial(function () {
                    return Q(this, !1);
                  })
                  .reaction(l.SESSION_DISCONNECT, function () {
                    return this.transitionTo(i.Reconnecting.RAwaitSessionUp);
                  })
                  .reaction(l.SESSION_DOWN, function () {
                    return this.transitionTo(i.Reconnecting.RAwaitSessionUp);
                  })),
                (this.Reconnecting.RAwaitSessionUp = new w({
                  name: h.RECONNECTING_AWAIT_SESSION_UP,
                  parentContext: this.Reconnecting,
                }).reaction(l.SESSION_UP, function () {
                  return (i._connectAttempts = r.connectAttempts), Q(this, !1);
                })),
                (this.Reconnecting.RBindSent = new w(
                  {
                    name: h.RECONNECTING_BIND_SENT,
                    parentContext: this.Reconnecting,
                  },
                  this.BindSentExtensions,
                )
                  .entry(function () {
                    i._connectAttempts--,
                      this.sendBindRequest(),
                      (this.bindRequestTimer = F.newTimeout(
                        r.connectTimeoutInMsecs,
                        this.handleBindTimeout,
                      ));
                  })
                  .reaction(l.FLOW_CLOSE, function () {
                    return this.transitionTo(i.UnbindSent);
                  })
                  .reaction(l.BIND_TIMEOUT, function () {
                    return (
                      i._connectAttempts,
                      i._connectAttempts > 0
                        ? Q(this, !0)
                        : this.transitionTo(i.Unbound.AwaitFlowOpen, () =>
                            V(new S("Rebind failed due to timeout", g.TIMEOUT)),
                          )
                    );
                  })
                  .reaction(l.FLOW_FAILED, function (e) {
                    if (i.reconnectAttempts > 0 || -1 === i.reconnectAttempts) {
                      if (
                        e &&
                        e.details &&
                        e.details.subcode &&
                        (e.details.subcode === g.QUEUE_SHUTDOWN ||
                          e.details.subcode === g.TOPIC_ENDPOINT_SHUTDOWN ||
                          e.details.subcode === g.GM_UNAVAILABLE)
                      )
                        return (
                          i.reconnectAttempts,
                          e.details.subcode,
                          this.transitionTo(i.Reconnecting.RAwaitTimer)
                        );
                    } else i.reconnectAttempts;
                    return this.transitionTo(i.Unbound.AwaitFlowOpen, () => {
                      return (
                        (s = e.details),
                        a(s instanceof S),
                        void t._emit(R.DOWN_ERROR, s)
                      );
                      var s;
                    });
                  })
                  .reaction(l.BIND_RESPONSE, function (e) {
                    return (
                      this.handleExpectedBind(e.details),
                      this.transitionTo(i.FlowUp, () =>
                        i._addEventToEmit(R.RECONNECTED),
                      )
                    );
                  })
                  .reaction(l.FLOW_UP, function () {
                    return this.transitionTo(i.FlowUp, () =>
                      i._addEventToEmit(R.RECONNECTED),
                    );
                  })
                  .exit(function () {
                    this.cancelBindRequestTimer();
                  })),
                (this.Reconnecting.RAwaitTimer = new w(
                  {
                    name: h.RECONNECTING_AWAIT_TIMER,
                    parentContext: this.Reconnecting,
                  },
                  {
                    handleReconnectIntervalTimeout() {
                      i.processEvent(
                        new u({ name: l.RECONNECT_INTERVAL_TIMEOUT }),
                      );
                    },
                    cancelReconnectIntervalTimer() {
                      this.reconnectIntervalTimer.cancel();
                    },
                  },
                )
                  .entry(function () {
                    i.reconnectAttempts > 0 && --i.reconnectAttempts,
                      r.reconnectIntervalInMsecs,
                      i.reconnectAttempts,
                      (this.reconnectIntervalTimer = F.newTimeout(
                        r.reconnectIntervalInMsecs,
                        this.handleReconnectIntervalTimeout,
                      ));
                  })
                  .exit(function () {
                    this.cancelReconnectIntervalTimer();
                  })
                  .reaction(l.RECONNECT_INTERVAL_TIMEOUT, function () {
                    return (
                      (i._connectAttempts = r.connectAttempts), Q(this, !1)
                    );
                  }));
              const X = (this.FlowUp = new w({
                name: h.FLOW_UP,
                parentContext: i,
              })
                .initial(function () {
                  return this.transitionTo(
                    0 === i._active ? X.XferInactive : X.Xfer,
                  );
                })
                .entry(() => {
                  (i._replayStartLocation = void 0),
                    i._errorCausingReconnect
                      ? (i._errorCausingReconnect = null)
                      : i._addEventToEmit(R.UP);
                })
                .reaction(l.SESSION_DOWN, function () {
                  return this.transitionTo(i.Unbound.AwaitSessionUp);
                })
                .reaction(l.SESSION_DISCONNECT, function () {
                  return this.transitionTo(i.Unbound.AwaitSessionUp, () =>
                    i._addEventToEmit(R.DOWN),
                  );
                })
                .reaction(l.FLOW_CLOSE, function () {
                  return this.transitionTo(i.UnbindSent);
                })
                .reaction(l.FLOW_UNBOUND, (e) =>
                  i.transitionToUnboundFromUp(r, R.DOWN_ERROR, e.details),
                ));
              (X.Xfer = new w({ name: h.FLOW_UP_XFER, parentContext: X })
                .entry(() => {
                  i._addEventToEmit(R.ACTIVE),
                    i._sendAcks(!0),
                    i._requestStartDispatch();
                })
                .exit(() => {
                  i._addEventToEmit(R.INACTIVE), i._requestStopDispatch();
                })
                .reaction(l.SESSION_DISCONNECT, function () {
                  return i._sendAcks(!0), this.eventUnhandled();
                })),
                (X.XferInactive = new w({
                  name: h.FLOW_UP_XFER_INACTIVE,
                  parentContext: X,
                }).reaction(l.FLOW_ACTIVE_IND, function () {
                  return this.transitionTo(X.Xfer);
                })),
                (this.UnbindSent = new w(
                  { name: h.UNBIND_SENT, parentContext: i },
                  {
                    sendUnbindRequest() {
                      i._endpointClear();
                      try {
                        const e = s.getCorrelationTag(),
                          i = n.AdProtocolMessage.getCloseMessageConsumer(
                            t.flowId,
                            e,
                          );
                        s.sendControl(i),
                          s.enqueueRequest(
                            e,
                            () => this.handleUnbindTimeout(),
                            r.connectTimeoutInMsecs,
                            null,
                            (e) => this.handleUnbindResponse(e),
                          ),
                          E("Sent consumer unbind request with arguments", {
                            flowId: t.flowId,
                            correlationTag: e,
                          });
                      } catch (e) {
                        E(
                          `Exception in sendUnbindRequest while trying to send unbind request: ${e}`,
                        ),
                          s.getCurrentStateName(),
                          i.processEvent(new u({ name: l.FLOW_UNBOUND }));
                      }
                    },
                    handleUnbindTimeout: () => (
                      E("Unbind timeout"),
                      i.processEvent(new u({ name: l.UNBIND_TIMEOUT }))
                    ),
                    handleUnbindResponse(e) {
                      e.msgType !== n.SMFAdProtocolMessageType.UNBIND &&
                        E(
                          `Unexpected message type in bind response: ${n.SMFAdProtocolMessageType.describe(e.msgType)}`,
                        );
                      const s = e.smfHeader.pm_respcode,
                        r = e.smfHeader.pm_respstr,
                        o = T.getADErrorSubcode(s, r);
                      return (
                        (t.endpointErrorId = e.getEndpointErrorId()),
                        E("Flow failed (unbind):", s, r, g.describe(o)),
                        i.processEvent(
                          new u({ name: l.FLOW_UNBOUND }, new S(r, o, s)),
                        )
                      );
                    },
                  },
                )
                  .entry(function () {
                    this.sendUnbindRequest();
                  })
                  .reaction(l.UNBIND_TIMEOUT, function () {
                    return this.externalTransitionTo(i.UnbindSent);
                  })
                  .reaction(l.FLOW_UNBOUND, () =>
                    i.transitionToUnbound(R.DOWN),
                  )),
                (this.CreateSent = new w(
                  { name: h.CREATE_SENT, parentContext: i },
                  {
                    sendCreateRequest() {
                      const e = s.getCorrelationTag(),
                        t = n.AdProtocolMessage.getCreate(
                          r.queueDescriptor,
                          r.queueProperties,
                          e,
                        );
                      s.sendControl(t),
                        s.enqueueRequest(
                          e,
                          this.handleCreateTimeout.bind(this),
                          r.connectTimeoutInMsecs,
                          null,
                          this.handleCreateResponse.bind(this),
                        );
                    },
                    handleCreateTimeout() {
                      E("Create timeout"),
                        i.processEvent(new u({ name: l.CREATE_TIMEOUT }));
                    },
                    handleCreateResponse(e) {
                      if (e.msgType !== n.SMFAdProtocolMessageType.CREATE)
                        return (
                          E(
                            `Unexpected message type in create response: ${n.SMFAdProtocolMessageType.describe(e.msgType)}`,
                          ),
                          i.processEvent(
                            new u(
                              { name: l.CREATE_FAILED },
                              new S(
                                `Unexpected create response: ${n.SMFAdProtocolMessageType.describe(e.msgType)}`,
                                g.PROTOTOCOL_ERROR,
                              ),
                            ),
                          )
                        );
                      const t = e.smfHeader,
                        s = t.pm_respcode;
                      if (200 !== s) {
                        const n = t.pm_respstr,
                          r = T.getADErrorSubcode(s, n);
                        if (
                          (E("Endpoint create failed:", s, n, g.describe(r)),
                          r === g.ENDPOINT_ALREADY_EXISTS)
                        ) {
                          const t = { name: l.CREATE_SUCCESS };
                          return i.processEvent(new u(t, e));
                        }
                        return i.processEvent(
                          new u(
                            { name: l.CREATE_FAILED },
                            new S(n, r, { responseCode: s }),
                          ),
                        );
                      }
                      const r = { name: l.CREATE_SUCCESS };
                      return i.processEvent(new u(r, e));
                    },
                  },
                )
                  .entry(function () {
                    this.sendCreateRequest();
                  })
                  .reaction(l.CREATE_TIMEOUT, function () {
                    return this.externalTransitionTo(i.BindSent);
                  })
                  .reaction(l.CREATE_SUCCESS, function () {
                    return this.externalTransitionTo(i.BindSent);
                  })
                  .reaction(l.CREATE_FAILED, function (e) {
                    return this.transitionTo(i.Unbound.AwaitFlowOpen, () =>
                      V(e.details),
                    );
                  }));
            }
            acceptMessage(e) {
              const { LOG_TRACE: t, LOG_DEBUG: s } = this.logger,
                n = e.getGuaranteedMessageId(),
                r = n.toString(),
                i = this._consumer;
              if (!this._fsmDispatch)
                return i.incStat(U.RX_DISCARD_NO_MATCHING_CONSUMER), !1;
              i.deliveryCountSent || e.setDeliveryCount(-1);
              const c = e._getSpoolerUniqueId();
              M.INVALID_SUID.eq(c)
                ? e._setSpoolerUniqueId(i.spoolerUniqueId)
                : void 0 === i.spoolerUniqueId ||
                    M.INVALID_SUID.eq(i.spoolerUniqueId)
                  ? (void 0 !== i.spoolerUniqueId &&
                      !M.INVALID_SUID.eq(i.spoolerUniqueId)) ||
                    M.INVALID_SUID.eq(c) ||
                    e._setSpoolerUniqueId(M.INVALID_SUID)
                  : (i.spoolerUniqueId.toString(),
                    c.toString(),
                    (i.spoolerUniqueId = c));
              const u = this._transportAcks,
                l = u.tryReceive(n, e.getGuaranteedPreviousMessageId()),
                h = u.acksPending > this.maxPendingAcks;
              switch (l) {
                case B.OK:
                  break;
                case B.DUPLICATE:
                  if (
                    (i.incStat(U.RX_DISCARD_DUPLICATE),
                    this._applicationAcks.has(n) || this._oldUnacked.has(r))
                  )
                    h ? this._sendAcks(h) : this._setTransportAckTimer();
                  else {
                    const e = new Map();
                    e.set(b.ACCEPTED, [[n, n]]), this._sendAck(e);
                  }
                  return !1;
                case B.OUT_OF_ORDER:
                  return i.incStat(U.RX_DISCARD_OUT_OF_ORDER), !1;
                default:
                  return a(!1, "Unhandled transport ack result", l), !1;
              }
              return this._applicationAcks.insert(n, (t) => {
                let s = !1;
                if (t)
                  switch (t.state) {
                    case o.UNACKED:
                      this._oldUnacked.add(t.key);
                      break;
                    case o.ACKED_NOT_SENT:
                      s = !0;
                      break;
                    case o.ACKED_SENT:
                      break;
                    default:
                      a(
                        !1,
                        "Unhandled application ack state",
                        o.describe(t.state),
                      );
                  }
                return (
                  (this._midDispatch = !0),
                  this._messageDispatch.push(e),
                  (this._midDispatch = !1),
                  h || s ? this._sendAcks(h) : this._setTransportAckTimer(),
                  !0
                );
              });
            }
            applicationAck(e, t = !1) {
              this.applicationSettle(e, b.ACCEPTED, t);
            }
            applicationSettle(e, t = b.ACCEPTED, s = !1) {
              const { LOG_TRACE: n } = this.logger,
                r = e.toString();
              switch (t) {
                case b.FAILED:
                  this._consumer.incStat(U.RX_SETTLE_FAILED);
                  break;
                case b.REJECTED:
                  this._consumer.incStat(U.RX_SETTLE_REJECTED);
                  break;
                case b.ACCEPTED:
                  s || this._consumer.incStat(U.RX_SETTLE_ACCEPTED),
                    this._consumer.incStat(U.RX_ACKED);
              }
              if (this._oldUnacked.delete(r)) {
                const s = new Map();
                return s.set(t, [[e, e]]), void this._sendAck(s);
              }
              this._applicationAcks.updateAckState(e, o.ACKED_NOT_SENT, t),
                t !== b.ACCEPTED
                  ? this._sendAcks(!0)
                  : this._setTransportAckTimer();
            }
            getDestination() {
              return this._endpointEnsure(), this._destination;
            }
            isDisconnected() {
              return (
                !this.getCurrentState() ||
                this.getActiveState(h.UNBOUND) ||
                this.getActiveState(h.UNBOUND_AWAITING_FLOWOPEN)
              );
            }
            requestStartDispatchUser() {
              (this._userDispatch = !0), this.applyStartDispatch();
            }
            requestStartDispatchFSM() {
              (this._fsmDispatch = !0), this.applyStartDispatch();
            }
            applyStartDispatch() {
              this._userDispatch && this._fsmDispatch
                ? (this.log(
                    `Starting message dispatch (fsm ${this._fsmDispatch}, user ${this._userDispatch})`,
                  ),
                  this._messageDispatch.start(),
                  (this._localMaxWindowSize = this._localPreferredWindowSize),
                  this._sendAcks(!0))
                : this.log(
                    `Not starting message dispatch (fsm ${this._fsmDispatch}, user ${this._userDispatch})`,
                  );
            }
            transitionToUnbound(e, t) {
              const s = this._consumer,
                { LOG_TRACE: n } = this.logger;
              return (
                s.userDisconnected,
                this._clearPartitionGroupId(),
                this.transitionTo(this.Unbound.AwaitFlowOpen, () =>
                  this._addEventToEmit(e, t),
                )
              );
            }
            transitionToUnboundFromUp(e, t, s) {
              const r = this._consumer,
                { LOG_TRACE: i } = this.logger;
              if (
                (s &&
                  s instanceof S &&
                  s.subcode &&
                  s.subcode === g.REPLAY_STARTED &&
                  (this._transportAcks.reset(), this._applicationAcks.reset()),
                this._clearPartitionGroupId(),
                r.endpointErrorId &&
                  this._sessionInterface.isCapable(c.MESSAGE_REPLAY))
              ) {
                r.endpointErrorId;
                const e = n.AdProtocolMessage.getUnbindAck(
                  r._flowId,
                  r.endpointErrorId,
                  this._transportAcks.lastAcked,
                );
                this._sessionInterface.sendControl(e);
              }
              return (-1 === e.reconnectAttempts || e.reconnectAttempts > 0) &&
                s &&
                s instanceof S &&
                s.subcode &&
                (s.subcode === g.REPLAY_STARTED ||
                  s.subcode === g.GM_UNAVAILABLE)
                ? ((this._errorCausingReconnect = s),
                  this.transitionTo(this.Reconnecting))
                : this.transitionTo(this.Unbound.AwaitFlowOpen, () =>
                    this._addEventToEmit(t, s),
                  );
            }
            requestStopDispatchUser() {
              (this._userDispatch = !1),
                this.log(
                  `Stop dispatch user (fsm ${this._fsmDispatch}, user ${this._userDispatch})`,
                ),
                this._messageDispatch.stop();
            }
            requestStopDispatchFSM() {
              (this._fsmDispatch = !1),
                this.log(
                  `Stop dispatch FSM (fsm ${this._fsmDispatch}, user ${this._userDispatch})`,
                ),
                this._sendAcks(!0);
            }
            _clearTransportAckTimer() {
              this._transportAckTimer &&
                (clearTimeout(this._transportAckTimer),
                (this._transportAckTimer = null));
            }
            _dispose() {
              this._clearTransportAckTimer(),
                this._endpointClear(),
                (this._destination = void 0),
                (this._unacked = null),
                (this._messageDispatch = null),
                (this._transportAcks = null),
                (this._consumer = null),
                (this._sessionInterface = null);
            }
            _endpointClear() {
              (this._endpoint = void 0), (this._subscription = void 0);
            }
            _endpointEnsure() {
              if (this._endpoint) return;
              const e = this._sessionInterface,
                t = this._consumer._properties,
                { queueDescriptor: s } = t;
              let n, r, i;
              s.type === y.QUEUE
                ? ((n = e.createDestinationFromDescriptor(s)),
                  (r = new _({
                    name: n.name,
                    type: p.QUEUE,
                    offset: 0,
                    bytes: n.bytes.substr(n.offset),
                  })),
                  (i = void 0))
                : ((r = s.name
                    ? e.createDestinationFromDescriptor(s)
                    : new E({ name: "\0?", offset: 0, bytes: "\0" })),
                  (i =
                    t.topicEndpointSubscription ||
                    e.createTemporaryDestination(p.TOPIC)),
                  (n = i)),
                Object.assign(this, {
                  _destination: n,
                  _endpoint: r,
                  _subscription: i,
                }),
                (t.queueDescriptor = new N({
                  name: r.name,
                  type: s.type,
                  durable: s.durable,
                }));
            }
            _resetLocalConnectionState() {
              Object.assign(this, {
                _remoteWindowSize: 0,
                _active: void 0,
                _fsmDispatch: !1,
                _userDispatch: !0,
              });
            }
            _clearPartitionGroupId() {
              const { LOG_TRACE: e } = this.logger;
              this._consumer.partitionGroupId = void 0;
            }
            _resetRemoteConnectionState() {
              const { LOG_TRACE: e } = this.logger;
              (this._transportAcks = new x()),
                (this._applicationAcks = new i(512)),
                (this._oldUnacked = new Set()),
                (this._consumer.endpointErrorId = void 0),
                (this._consumer.partitionGroupId = void 0);
            }
            _sendAck(e) {
              const t = n.AdProtocolMessage.getAck(
                this._consumer.flowId,
                this._transportAcks.lastReceived,
                this.windowSize,
                e,
              );
              this._sessionInterface.sendControl(t);
            }
            _addAckToRanges(e, t = null) {
              const s = e.currentRange,
                r = e.ackRanges,
                i = b.values,
                a = s.length;
              if (t && t.state !== o.UNACKED) {
                if (
                  0 === a ||
                  (a > 0 && s[a - 1].settlementOutcome === t.settlementOutcome)
                )
                  return void s.push(t);
                if (a > 0 && s[a - 1].settlementOutcome !== t.settlementOutcome)
                  return (
                    r[s[a - 1].settlementOutcome].push(s),
                    (e.currentRange = []),
                    void e.currentRange.push(t)
                  );
              }
              a && r[s[a - 1].settlementOutcome].push(s);
              let c = 0;
              for (let e = 0; e < i.length; e++) c += r[i[e]].length;
              if (
                null === t ||
                c === n.AdProtocolMessage.MAX_CLIENT_ACK_RANGES
              ) {
                const t = new Map();
                let s = !1;
                for (let e = 0; e < i.length; e++)
                  r[i[e]].length > 0 &&
                    (t.set(
                      i[e],
                      r[i[e]].map((e) => [e[0].id, e[e.length - 1].id]),
                    ),
                    (s = !0));
                if (s || e.forceTransportAck) {
                  const { LOG_TRACE: s } = this.logger;
                  this._sendAck(t);
                  const n = t.get(b.FAILED),
                    r = t.get(b.REJECTED);
                  this._transportAcks.lastReceived,
                    t.has(b.ACCEPTED) &&
                      t.get(b.ACCEPTED).map((e) => `[${e[0]}..${e[1]}]`),
                    t.has(b.FAILED) && (n[0][0], n[0][1]),
                    t.has(b.REJECTED) && (r[0][0], r[0][1]),
                    this._transportAcks.setAcked(),
                    (e.forceTransportAck = !1);
                }
                for (let e = 0; e < i.length; e++)
                  r[i[e]].forEach((e) => {
                    e.forEach((e) => {
                      if (e.state !== o.ACKED_SENT)
                        try {
                          this._applicationAcks.updateAckState(
                            e.id,
                            o.ACKED_SENT,
                          );
                        } catch (t) {
                          const { LOG_ERROR: s } = this.logger;
                          s(`Marking ack ${e.id} as sent failed: ${t}`);
                        }
                    });
                  });
                e.ackRanges = [];
                for (let t = 0; t < i.length; t++) e.ackRanges[i[t]] = [];
              }
              e.currentRange = [];
            }
            _sendAcks(e = !1) {
              this._clearTransportAckTimer();
              const t = this._applicationAcks,
                s = this._transportAcks,
                n = b.values,
                r = {
                  forceTransportAck: e || s.acksPending > 0,
                  ackRanges: [],
                  currentRange: [],
                };
              for (let e = 0; e < n.length; e++) r.ackRanges[n[e]] = [];
              const i = this._applicationAcks.front();
              0 === this._oldUnacked.size &&
                i &&
                i.state !== o.UNACKED &&
                this._addAckToRanges(r, G),
                t.forEach((e) => this._addAckToRanges(r, e)),
                this._addAckToRanges(r),
                a(!1 === r.forceTransportAck),
                a(0 === r.currentRange.length);
              for (let e = 0; e < n.length; e++)
                a(0 === r.ackRanges[n[e]].length);
            }
            _setTransportAckTimer() {
              this._transportAckTimer ||
                this._consumer.disposed ||
                (this._transportAckTimer = setTimeout(
                  () => this._sendAcks(!0),
                  this._acknowledgeTimeoutInMsecs,
                ));
            }
            get maxWindowSize() {
              return Math.min(
                this._localMaxWindowSize,
                this._remoteWindowSize || Number.POSITIVE_INFINITY,
              );
            }
            get windowSize() {
              return this.maxWindowSize - this._messageDispatch.length;
            }
            get maxPendingAcks() {
              return (this.windowSize * this._acknowledgeThreshold) / 100;
            }
            get hasAutoAckSupport() {
              return this._hasAutoAckSupport;
            }
          };
        },
        5805: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.ConsumerStateNames = n.new({
            UNBOUND: "UNBOUND",
            UNBOUND_AWAIT_SESSION_UP: "UNBOUND_AWAIT_SESSION_UP",
            UNBOUND_AWAIT_FLOWOPEN: "UNBOUND_AWAIT_FLOWOPEN",
            UNBOUND_AWAIT_ANY: "UNBOUND_AWAIT_ANY",
            BIND_SENT: "BIND_SENT",
            FLOW_UP: "FLOW_UP",
            FLOW_UP_XFER: "FLOW_UP_XFER",
            FLOW_UP_XFER_INACTIVE: "FLOW_UP_XFER_INACTIVE",
            UNBIND_SENT: "UNBIND_SENT",
            RECONNECTING: "RECONNECTING",
            RECONNECTING_BIND_SENT: "RECONNECTING_BIND_SENT",
            RECONNECTING_AWAIT_SESSION_UP: "RECONNECTING_AWAIT_SESSION_UP",
            RECONNECTING_AWAIT_TIMER: "RECONNECTING_AWAIT_TIMER",
            CREATE_SENT: "CREATE_SENT",
          });
        },
        544: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageConsumerAcknowledgeMode = n.new({
            AUTO: "AUTO",
            CLIENT: "CLIENT",
          });
        },
        2235: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageConsumerEventName = n.new({
            UP: "MessageConsumerEventName_up",
            DOWN: "MessageConsumerEventName_down",
            ACTIVE: "MessageConsumerEventName_active",
            INACTIVE: "MessageConsumerEventName_inactive",
            DOWN_ERROR: "MessageConsumerEventName_downError",
            RECONNECTING: "MessageConsumerEventName_reconnecting",
            RECONNECTED: "MessageConsumerEventName_reconnected",
            CONNECT_FAILED_ERROR: "MessageConsumerEventName_connectFailedError",
            GM_DISABLED: "MessageConsumerEventName_GMDisabled",
            DISPOSED: "MessageConsumerEventName_disposed",
            MESSAGE: "MessageConsumerEventName_message",
            SUBSCRIPTION_OK: "MessageConsumerEventName_ok",
            SUBSCRIPTION_ERROR: "MessageConsumerEventName_error",
          });
        },
        6203: (e, t, s) => {
          var n = s(9489);
          const { ErrorSubcode: r } = s(3870);
          e.exports.MessageConsumerEvent = class {
            constructor(e, t, s = void 0, n = 0, r = void 0, i = void 0) {
              (this._messageConsumerEventName = e),
                (this._infoStr = t),
                (this._responseCode = s),
                (this._errorSubcode = n),
                (this._correlationKey = r),
                (this._reason = i);
            }
            get messageConsumerEventName() {
              return this._messageConsumerEventName;
            }
            get name() {
              return this._messageConsumerEventName;
            }
            get infoStr() {
              return this._infoStr;
            }
            get responseCode() {
              return this._responseCode;
            }
            get errorSubcode() {
              return this._errorSubcode;
            }
            get subcode() {
              return this._errorSubcode;
            }
            get correlationKey() {
              return this._correlationKey;
            }
            get reason() {
              return this._reason;
            }
            set reason(e) {
              this._reason = e;
            }
            get requestEventCode() {}
            inspect() {
              return {
                messageConsumerEventName: this.messageConsumerEventName,
                infoStr: this.infoStr,
                responseCode: this.responseCode,
                errorSubcode: r.describe(this.errorSubcode),
                correlationKey: this.correlationKey
                  ? this.correlationKey.toString()
                  : null,
                reason: this.reason ? this.reason : null,
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        7903: (e, t, s) => {
          const {
              AbstractQueueDescriptor: n,
              QueueDescriptor: r,
              QueueDescriptorValidator: i,
              QueueProperties: o,
              QueuePropertiesValidator: a,
              QueueType: c,
            } = s(5754),
            { APIPropertiesValidators: u } = s(7882),
            { Check: l } = s(2201),
            { MessageConsumerAcknowledgeMode: h } = s(544),
            { OperationError: d, ErrorSubcode: p } = s(3870),
            { ReplayStartLocation: _ } = s(2604),
            {
              validateInstance: E,
              valBoolean: T,
              valInstance: g,
              valIsMember: S,
              valNumber: m,
              valRange: f,
              valTopicStringOrEmpty: I,
            } = u;
          function R(e, t) {
            if (t.queueDescriptor.getType() === c.TOPIC_ENDPOINT) {
              if (
                t.queueDescriptor.isDurable() &&
                !t.createIfMissing &&
                !t.topicEndpointSubscription
              )
                throw new d(
                  "topicEndpointSubscription must be set when queueDescriptor refers to a durable topic endpoint and not allowed to create.",
                  p.PARAMETER_CONFLICT,
                );
            } else if (t.topicEndpointSubscription)
              throw new d(
                "topicEndpointSubscription is set, but queueDescriptor refers to a queue that is not of type QueueType.TOPIC_ENDPOINT",
                p.PARAMETER_CONFLICT,
              );
          }
          const C = {
            validate(e, t, s) {
              if (
                Object.prototype.hasOwnProperty.call(
                  s,
                  "transportAcknowledgeTimeoutInMsecs",
                ) &&
                Object.prototype.hasOwnProperty.call(
                  s,
                  "acknowledgeTimeoutInMsecs",
                )
              )
                throw new d(
                  `${e} validation: transportAcknowledgeTimeoutInMsecs and acknowledgeTimeoutInMsecs are mutually exclusive`,
                  p.PARAMETER_CONFLICT,
                );
              if (
                Object.prototype.hasOwnProperty.call(
                  s,
                  "transportAcknowledgeThresholdPercentage",
                ) &&
                Object.prototype.hasOwnProperty.call(s, "acknowledgeThreshold")
              )
                throw new d(
                  `${e} validation: transportAcknowledgeThresholdPercentage and acknowledgeThreshold are mutually exclusive`,
                  p.PARAMETER_CONFLICT,
                );
              const u = E.bind(null, e, t);
              if (
                !(
                  t.queueDescriptor instanceof n ||
                  t.queueDescriptor instanceof r
                )
              )
                throw new d(
                  `${e} validation: queue descriptor must be an AbstractQueueDescriptor or a QueueDescriptor`,
                  p.PARAMETER_INVALID_TYPE,
                );
              if ((i.validate(t.queueDescriptor), t.queueProperties)) {
                if (t.queueDescriptor.durable && !t.createIfMissing)
                  throw new d(
                    `${e} validation: queueProperties cannot be set unless queueDescriptor refers to a temporary queue, or createIfMissing is set.`,
                    p.PARAMETER_CONFLICT,
                  );
                if (
                  (u("queueProperties", [g, o, "QueueProperties"]),
                  a.validate(t.queueProperties),
                  !t.queueDescriptor.durable &&
                    l.something(t.queueProperties.accessType))
                )
                  throw new d(
                    `${e} validation: queueProperties cannot specify accessType in creation of a temporary queue`,
                    p.PARAMETER_CONFLICT,
                  );
              }
              if (t.queueDescriptor.type === c.TOPIC_ENDPOINT) {
                if (
                  t.queueDescriptor.durable &&
                  !t.createIfMissing &&
                  !t.topicEndpointSubscription
                )
                  throw new d(
                    `${e} validation: topicEndpointSubscription must be set for durable topic endpoints unless creation is allowed.`,
                    p.PARAMETER_CONFLICT,
                  );
              } else if (t.topicEndpointSubscription)
                throw new d(
                  `${e} validation: topicEndpointSubscription cannot be set unless descriptor.type is TOPIC_ENDPOINT`,
                  p.PARAMETER_CONFLICT,
                );
              if (
                (u("connectTimeoutInMsecs", [m], [f, 50, Number.MAX_VALUE]),
                u("connectAttempts", [m], [f, 1, Number.MAX_VALUE]),
                u("topicEndpointSubscription", [R], [I]),
                u("acknowledgeMode", [S, h, "MessageConsumerAcknowledgeMode"]),
                u("transportAcknowledgeTimeoutInMsecs", [m], [f, 20, 1500]),
                u("transportAcknowledgeThresholdPercentage", [m], [f, 1, 75]),
                u("activeIndicationEnabled", [T]),
                u("noLocal", [T]),
                u("windowSize", [m], [f, 1, 255]),
                u("reconnectIntervalInMsecs", [m], [f, 50, Number.MAX_VALUE]),
                t.activeIndicationEnabled && t.queueDescriptor.type !== c.QUEUE)
              )
                throw new d(
                  `${e} validation: activeIndicationEnabled may only be true for QUEUE destinations`,
                  p.PARAMETER_CONFLICT,
                );
              if (
                t.replayStartLocation &&
                !(t.replayStartLocation instanceof _)
              )
                throw new d(
                  `${e} validation: replayStartLocation must be an instance of ReplayStartLocation`,
                  p.PARAMETER_INVALID_TYPE,
                );
            },
          };
          e.exports.MessageConsumerPropertiesValidator = C;
        },
        6334: (e, t, s) => {
          const n = s(5754),
            { APIProperties: r } = s(7882),
            { Check: i } = s(2201),
            { MessageConsumerAcknowledgeMode: o } = s(544),
            { Topic: a } = s(3170),
            c = {
              queueDescriptor: void 0,
              queueProperties: void 0,
              connectTimeoutInMsecs: 1e4,
              connectAttempts: 3,
              topicEndpointSubscription: void 0,
              acknowledgeMode: o.AUTO,
              requiredSettlementOutcomes: [],
              transportAcknowledgeTimeoutInMsecs: 1e3,
              transportAcknowledgeThresholdPercentage: 60,
              activeIndicationEnabled: !1,
              noLocal: !1,
              windowSize: 255,
              _browser: !1,
              replayStartLocation: void 0,
              reconnectAttempts: -1,
              reconnectIntervalInMsecs: 3e3,
              createIfMissing: !1,
            };
          e.exports.MessageConsumerProperties = class extends r {
            constructor(e) {
              super(c, e);
            }
            get queueDescriptor() {
              return i.something(this._queueDescriptor)
                ? this._queueDescriptor
                : c.queueDescriptor;
            }
            set queueDescriptor(e) {
              e instanceof n.AbstractQueueDescriptor
                ? (this._queueDescriptor = e)
                : (this._queueDescriptor = e
                    ? e.name
                      ? new n.QueueDescriptor(e)
                      : new n.AbstractQueueDescriptor(e)
                    : e);
            }
            get queueProperties() {
              return i.something(this._queueProperties)
                ? this._queueProperties
                : c.queueProperties;
            }
            set queueProperties(e) {
              this._queueProperties = e ? new n.QueueProperties(e) : e;
            }
            get connectTimeoutInMsecs() {
              return i.something(this._bindTimeoutInMsecs)
                ? this._bindTimeoutInMsecs
                : c.connectTimeoutInMsecs;
            }
            set connectTimeoutInMsecs(e) {
              this._bindTimeoutInMsecs = e;
            }
            get connectAttempts() {
              return i.something(this._connectAttempts)
                ? this._connectAttempts
                : c.connectAttempts;
            }
            set connectAttempts(e) {
              this._connectAttempts = e;
            }
            get topicEndpointSubscription() {
              return this._topicEndpointSubscription;
            }
            set topicEndpointSubscription(e) {
              this._topicEndpointSubscription =
                "string" == typeof e ? a.createFromName(e) : e;
            }
            get acknowledgeMode() {
              return i.something(this._acknowledgeMode)
                ? this._acknowledgeMode
                : c.acknowledgeMode;
            }
            set acknowledgeMode(e) {
              this._acknowledgeMode = e;
            }
            get requiredSettlementOutcomes() {
              return i.something(this._requiredSettlementOutcomes) &&
                i.array(this._requiredSettlementOutcomes)
                ? this._requiredSettlementOutcomes
                : c.requiredSettlementOutcomes;
            }
            set requiredSettlementOutcomes(e) {
              this._requiredSettlementOutcomes = e;
            }
            get acknowledgeTimeoutInMsecs() {
              return i.something(this._transportAcknowledgeTimeoutInMsecs)
                ? this._transportAcknowledgeTimeoutInMsecs
                : c.transportAcknowledgeTimeoutInMsecs;
            }
            set acknowledgeTimeoutInMsecs(e) {
              this._transportAcknowledgeTimeoutInMsecs = e;
            }
            get acknowledgeThreshold() {
              return i.something(this._transportAcknowledgeThresholdPercentage)
                ? this._transportAcknowledgeThresholdPercentage
                : c.transportAcknowledgeThresholdPercentage;
            }
            set acknowledgeThreshold(e) {
              this._transportAcknowledgeThresholdPercentage = e;
            }
            get transportAcknowledgeTimeoutInMsecs() {
              return i.something(this._transportAcknowledgeTimeoutInMsecs)
                ? this._transportAcknowledgeTimeoutInMsecs
                : c.transportAcknowledgeTimeoutInMsecs;
            }
            set transportAcknowledgeTimeoutInMsecs(e) {
              this._transportAcknowledgeTimeoutInMsecs = e;
            }
            get transportAcknowledgeThresholdPercentage() {
              return i.something(this._transportAcknowledgeThresholdPercentage)
                ? this._transportAcknowledgeThresholdPercentage
                : c.transportAcknowledgeThresholdPercentage;
            }
            set transportAcknowledgeThresholdPercentage(e) {
              this._transportAcknowledgeThresholdPercentage = e;
            }
            get activeIndicationEnabled() {
              return i.something(this._activeIndicationEnabled)
                ? this._activeIndicationEnabled
                : c.activeIndicationEnabled;
            }
            set activeIndicationEnabled(e) {
              this._activeIndicationEnabled = e;
            }
            get noLocal() {
              return i.something(this._noLocal) ? this._noLocal : c.noLocal;
            }
            set noLocal(e) {
              this._noLocal = e;
            }
            get windowSize() {
              return i.something(this._windowSize)
                ? this._windowSize
                : c.windowSize;
            }
            set windowSize(e) {
              this._windowSize = e;
            }
            get browser() {
              return i.something(this._browser) ? this._browser : c._browser;
            }
            set browser(e) {
              this._browser = e;
            }
            get replayStartLocation() {
              return i.something(this._replayStartLocation)
                ? this._replayStartLocation
                : c.replayStartLocation;
            }
            set replayStartLocation(e) {
              this._replayStartLocation = e;
            }
            get reconnectAttempts() {
              return i.something(this._reconnectAttempts)
                ? this._reconnectAttempts
                : c.reconnectAttempts;
            }
            set reconnectAttempts(e) {
              this._reconnectAttempts = e;
            }
            get reconnectIntervalInMsecs() {
              return i.something(this._reconnectIntervalInMsecs)
                ? this._reconnectIntervalInMsecs
                : c.reconnectIntervalInMsecs;
            }
            set reconnectIntervalInMsecs(e) {
              this._reconnectIntervalInMsecs = e;
            }
            get createIfMissing() {
              return i.something(this._createIfMissing)
                ? this._createIfMissing
                : c.createIfMissing;
            }
            set createIfMissing(e) {
              this._createIfMissing = e;
            }
          };
        },
        8692: (e, t, s) => {
          var n = s(9489);
          const r = s(7291),
            { CapabilityType: i } = s(5594),
            { ConsumerFSM: o } = s(3678),
            { ConsumerFSMEvent: a } = s(3120),
            { ConsumerFSMEventNames: c } = s(8694),
            {
              ErrorResponseSubcodeMapper: u,
              ErrorSubcode: l,
              OperationError: h,
            } = s(3870),
            { Flow: d, FlowOperation: p } = s(5370),
            { MessageConsumerEvent: _ } = s(6203),
            { MessageOutcome: E } = s(4789),
            { MessageConsumerEventName: T } = s(2235),
            { MessageConsumerProperties: g } = s(6334),
            { MessageConsumerPropertiesValidator: S } = s(7903),
            { Queue: m, Topic: f } = s(3170),
            {
              QueueAccessType: I,
              QueuePermissions: R,
              QueueDiscardBehavior: C,
            } = s(5754);
          function A(e) {
            return `MessageConsumerEventName.${T.describe(e)}`;
          }
          let O = 0;
          e.exports.MessageConsumer = class extends d {
            constructor({ properties: e, sessionInterfaceFactory: t } = {}) {
              const s = new g(e);
              S.validate(
                s.browser
                  ? "QueueBrowserProperties"
                  : "MessageConsumerProperties",
                s,
                e,
              ),
                super(s, t, {
                  direct: T.MESSAGE,
                  emits: T.values,
                  formatEventName: A,
                });
              const n = this.logger.formatter;
              (this.logger.formatter = (...e) => n("[message-consumer]", ...e)),
                (this._active = void 0),
                (this._fsm = this._makeFSM()),
                (this.endpointErrorId = void 0),
                (this.partitionGroupId = void 0),
                this._on(T.ACTIVE, () => this._onFlowActive(!0)),
                this._on(T.INACTIVE, () => this._onFlowActive(!1)),
                this._on(T.DOWN_ERROR, this._onFlowDisconnected.bind(this)),
                this._on(T.UP, this._onFlowUp.bind(this)),
                this._fsm.start();
            }
            _makeFSM() {
              const e = this._properties,
                t = "ConsumerFSM " + O++;
              return new o({
                name: t,
                consumer: this,
                sessionInterface: this._sessionInterface,
                properties: e,
              });
            }
            start() {
              this._operationCheck(p.START),
                this._fsm.requestStartDispatchUser();
            }
            stop() {
              this._operationCheck(p.STOP), this._fsm.requestStopDispatchUser();
            }
            connect() {
              if (
                null !==
                  this._sessionInterface.getCapability(
                    i.GUARANTEED_MESSAGE_CONSUME,
                  ) &&
                !this._sessionInterface.isCapable(i.GUARANTEED_MESSAGE_CONSUME)
              )
                throw new h(
                  "Consumer is not supported by router for this client",
                  l.INVALID_OPERATION,
                  null,
                );
              super.connect(),
                this.processFSMEvent(new a({ name: c.FLOW_OPEN }));
            }
            disconnect() {
              super.disconnect(),
                this.processFSMEvent(new a({ name: c.FLOW_CLOSE }));
            }
            getDestination() {
              const e = this._fsm.getDestination();
              return e instanceof m ? new m(e) : new f(e);
            }
            _disconnectSession() {
              super._disconnectSession(),
                this.processFSMEvent(new a({ name: c.SESSION_DISCONNECT }));
            }
            _operationCheck(e) {
              if (
                (super._operationCheck(e),
                e === p.GET_DESTINATION && this._isDisconnected())
              )
                throw new h(
                  "Cannot get destination of a disconnected flow",
                  l.INVALID_OPERATION,
                );
            }
            applicationAck(e, t = !1) {
              const { LOG_TRACE: s } = this.logger;
              this._fsm.applicationAck(e, t);
            }
            applicationSettle(e, t) {
              const { LOG_TRACE: s } = this.logger;
              E.nameOf(t), this._fsm.applicationSettle(e, t);
            }
            getDisposedEvent() {
              return T.DISPOSED;
            }
            handleDataMessage(e) {
              const { LOG_TRACE: t } = this.logger;
              e.setMessageConsumer(this), this._fsm.acceptMessage(e);
            }
            handleUncorrelatedControlMessage(e) {
              const { LOG_INFO: t, LOG_DEBUG: s, LOG_TRACE: n } = this.logger;
              t("Handling uncorrelated control message");
              const i = e.msgType,
                { SMFAdProtocolMessageType: o } = r;
              switch (i) {
                case o.UNBIND:
                  {
                    const t = e.smfHeader.pm_respcode,
                      s = e.smfHeader.pm_respstr,
                      n = u.getADErrorSubcode(t, s);
                    e.getEndpointErrorId(),
                      void 0 !== e.getEndpointErrorId() &&
                        (this.endpointErrorId = e.getEndpointErrorId()),
                      this.processFSMEvent(
                        new a({ name: c.FLOW_UNBOUND }, new h(s, n, t)),
                      );
                  }
                  break;
                case o.FLOWCHANGEUPDATE:
                  this.processFSMEvent(
                    new a(
                      { name: c.FLOW_ACTIVE_IND },
                      { active: e.getActiveFlow() },
                    ),
                  );
                  break;
                default:
                  o.describe(i);
              }
            }
            getProperties() {
              return super.getProperties();
            }
            onVRNChanged() {
              this.processFSMEvent(
                new a({ name: c.VIRTUALROUTER_NAME_CHANGED }),
              );
            }
            get accessType() {
              return this._accessType;
            }
            set accessType(e) {
              this._accessType = e;
            }
            get active() {
              return this._active;
            }
            set active(e) {
              e !== this._active && this._emit(e ? T.ACTIVE : T.INACTIVE),
                (this._active = e);
            }
            get queueDiscardBehavior() {
              return this._queueDiscardBehavior;
            }
            set queueDiscardBehavior(e) {
              this._queueDiscardBehavior = e;
            }
            get respectsTTL() {
              return this._respectsTTL;
            }
            set respectsTTL(e) {
              this._respectsTTL = e;
            }
            get flowId() {
              return this._flowId;
            }
            set flowId(e) {
              this._flowId = e;
            }
            get permissions() {
              return this._permissions || 0;
            }
            set permissions(e) {
              this._permissions = e;
            }
            _onFlowActive(e) {
              const { LOG_DEBUG: t } = this.logger;
              this._flowId, (this._active = e);
            }
            _onFlowDisconnected(e) {
              const { LOG_INFO: t } = this.logger;
              t(`${this} disconnected: ${e}.message`);
            }
            _disposeFSM() {
              const { LOG_INFO: e } = this.logger;
              e("Disposing FSM"),
                this.processFSMEvent(new a({ name: c.DISPOSE }));
            }
            _onFlowUp() {
              const { LOG_INFO: e } = this.logger;
              e(`Flow is up: flowId = ${this._flowId}`);
            }
            inspect() {
              return Object.assign(super.inspect(), {
                destination: this._destination,
                accessType: I.describe(this.accessType),
                permissions: R.describe(this.permissions),
                respectsTTL: this.respectsTTL,
                active: this.wantFlowChangeNotify
                  ? this.active
                  : "(indications disabled)",
                wantFlowChangeNotify: this.wantFlowChangeNotify,
                queueDiscardBehavior: C.describe(this.queueDiscardBehavior),
                maxWindowSize: this._fsm.maxWindowSize,
              });
            }
            toString() {
              return n(this);
            }
            _isDisconnected() {
              return this._fsm.isDisconnected();
            }
            addSubscription(e, t, s) {
              this._sessionInterface.updateQueueSubscription(
                e,
                this._fsm.getDestination(),
                !0,
                this,
                (s, n, r, i) => {
                  if (s) {
                    const s = new _(
                      T.SUBSCRIPTION_OK,
                      i,
                      r,
                      n,
                      t,
                      `Topic: ${e.getName()}`,
                    );
                    this._emit(T.SUBSCRIPTION_OK, s);
                  } else {
                    const s = new _(
                      T.SUBSCRIPTION_ERROR,
                      i,
                      r,
                      n,
                      t,
                      `Topic: ${e.getName()}`,
                    );
                    this._emit(T.SUBSCRIPTION_ERROR, s);
                  }
                },
                s,
              );
            }
            removeSubscription(e, t, s) {
              this._sessionInterface.updateQueueSubscription(
                e,
                this._fsm.getDestination(),
                !1,
                this,
                (s, n, r, i) => {
                  if (s) {
                    const s = new _(
                      T.SUBSCRIPTION_OK,
                      i,
                      r,
                      n,
                      t,
                      `Topic: ${e.getName()}`,
                    );
                    this._emit(T.SUBSCRIPTION_OK, s);
                  } else {
                    const s = new _(
                      T.SUBSCRIPTION_ERROR,
                      i,
                      r,
                      n,
                      t,
                      `Topic: ${e.getName()}`,
                    );
                    this._emit(T.SUBSCRIPTION_ERROR, s);
                  }
                },
                s,
              );
            }
          };
        },
        1896: (e, t, s) => {
          const { MessageConsumerEventName: n } = s(2235);
          function r(e) {
            return `MessageConsumerEventName.${n.describe(e)}`;
          }
          e.exports = {
            MessageDispatcher: class {
              constructor({ emitter: e, autoAck: t, logger: s } = {}) {
                Object.assign(this, {
                  emitter: e,
                  queue: [],
                  dispatch: !0,
                  formatEventName: r,
                  logger: s,
                }),
                  (this._dispatchOne = t
                    ? this._dispatchOneAutoAck
                    : this._dispatchOneBare),
                  this.emitter.setOnFirstDirectListener(
                    this._onFirstMessageListener.bind(this),
                  ),
                  (this._availableListener = !0);
              }
              start() {
                (this.dispatch = !0), this._flush();
              }
              stop() {
                this.dispatch = !1;
              }
              get length() {
                return this.queue.length;
              }
              push(e) {
                const { LOG_TRACE: t } = this.logger;
                this.queue.push(e),
                  this.dispatch ? this._flush() : e.getGuaranteedMessageId();
              }
              _onFirstMessageListener() {
                const { LOG_DEBUG: e } = this.logger;
                this._availableListener ||
                  (this.queue.length,
                  this.dispatch,
                  (this._availableListener = !0)),
                  this._flush();
              }
              _flush() {
                const { LOG_DEBUG: e } = this.logger;
                for (
                  ;
                  this.queue.length &&
                  this.dispatch &&
                  this.emitter.directListenerCount() > 0;

                )
                  this._dispatchOne(this.queue.shift());
                this.queue.length &&
                  this.dispatch &&
                  0 === this.emitter.directListenerCount() &&
                  this._availableListener &&
                  (this._availableListener = !1);
              }
              _dispatchOneAutoAck(e) {
                const { LOG_WARN: t } = this.logger;
                let s = null;
                if (((s = this._dispatchOneBare(e)), s))
                  t(
                    `Suppressing message acknowledgement for message ${e.getGuaranteedMessageId()} because client threw exception from listener`,
                    s,
                  );
                else {
                  if (e.isAcknowledged)
                    return void t(
                      `Consumer configured to auto-acknowledge messages, but message ${e.getGuaranteedMessageId()} was application acknowledged`,
                    );
                  e._autoAcknowledge();
                }
              }
              _dispatchOneBare(e) {
                const { LOG_WARN: t } = this.logger;
                let s;
                0 === this.listenerCount &&
                  t(
                    `No listeners to dispatch message ${e.getGuaranteedMessageId()}`,
                  );
                try {
                  this.emitter.emitDirect(e);
                } catch (t) {
                  (s = this.emitter.formatErrorEvent(t, n.MESSAGE, e)),
                    this.emitter.emit("error", s);
                }
                return s;
              }
            },
          };
        },
        2603: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.QueueBrowserEventName = n.new({
            UP: "QueueBrowserEventName_up",
            DOWN: "QueueBrowserEventName_down",
            DOWN_ERROR: "QueueBrowserEventName_downError",
            CONNECT_FAILED_ERROR: "QueueBrowserEventName_connectFailedError",
            GM_DISABLED: "QueueBrowserEventName_GMDisabled",
            DISPOSED: "QueueBrowserEventName_disposed",
            MESSAGE: "QueueBrowserEventName_message",
          });
        },
        1883: (e, t, s) => {
          const n = s(5754),
            { APIProperties: r } = s(7882),
            { Check: i } = s(2201),
            o = {
              queueDescriptor: void 0,
              connectTimeoutInMsecs: 1e4,
              connectAttempts: 3,
              windowSize: 255,
              transportAcknowledgeTimeoutInMsecs: 1e3,
              transportAcknowledgeThresholdPercentage: 60,
            };
          e.exports.QueueBrowserProperties = class extends r {
            constructor(e) {
              super(o, e);
            }
            get queueDescriptor() {
              return i.something(this._queueDescriptor)
                ? this._queueDescriptor
                : o.queueDescriptor;
            }
            set queueDescriptor(e) {
              this._queueDescriptor = e ? new n.QueueDescriptor(e) : e;
            }
            get connectTimeoutInMsecs() {
              return i.something(this._bindTimeoutInMsecs)
                ? this._bindTimeoutInMsecs
                : o.connectTimeoutInMsecs;
            }
            set connectTimeoutInMsecs(e) {
              this._bindTimeoutInMsecs = e;
            }
            get connectAttempts() {
              return i.something(this._connectAttempts)
                ? this._connectAttempts
                : o.connectAttempts;
            }
            set connectAttempts(e) {
              this._connectAttempts = e;
            }
            get windowSize() {
              return i.something(this._windowSize)
                ? this._windowSize
                : o.windowSize;
            }
            set windowSize(e) {
              this._windowSize = e;
            }
            get transportAcknowledgeTimeoutInMsecs() {
              return i.something(this._transportAcknowledgeTimeoutInMsecs)
                ? this._transportAcknowledgeTimeoutInMsecs
                : o.transportAcknowledgeTimeoutInMsecs;
            }
            set transportAcknowledgeTimeoutInMsecs(e) {
              this._transportAcknowledgeTimeoutInMsecs = e;
            }
            get transportAcknowledgeThresholdPercentage() {
              return i.something(this._transportAcknowledgeThresholdPercentage)
                ? this._transportAcknowledgeThresholdPercentage
                : o.transportAcknowledgeThresholdPercentage;
            }
            set transportAcknowledgeThresholdPercentage(e) {
              this._transportAcknowledgeThresholdPercentage = e;
            }
          };
        },
        1690: (e, t, s) => {
          const { EventEmitter: n } = s(7758),
            { LogFormatter: r } = s(390),
            { MessageConsumerEventName: i } = s(2235),
            { QueueBrowserEventName: o } = s(2603);
          function a(e) {
            return `QueueBrowserEventName.${o.describe(e)}`;
          }
          e.exports.QueueBrowser = class extends n {
            constructor(e) {
              super({ direct: o.MESSAGE, emits: o.values, formatEventName: a }),
                (this._messageConsumer = e),
                (this.logger = new r((...e) => ["[queue-browser]", ...e])),
                this._setupEventListers();
            }
            _setupEventListers() {
              this._messageConsumer.on(i.UP, this._onConsumerUp.bind(this)),
                this._messageConsumer.on(
                  i.CONNECT_FAILED_ERROR,
                  this._onConsumerConnectFailed.bind(this),
                ),
                this._messageConsumer.on(
                  i.DOWN,
                  this._onConsumerDown.bind(this),
                ),
                this._messageConsumer.on(
                  i.DOWN_ERROR,
                  this._onConsumerDownError.bind(this),
                ),
                this._messageConsumer.on(
                  i.MESSAGE,
                  this._onConsumerMessage.bind(this),
                ),
                this._messageConsumer.on(
                  i.DISPOSED,
                  this._onConsumerDisposed.bind(this),
                ),
                this._messageConsumer.on(
                  i.GM_DISABLED,
                  this._onConsumerGMDisabled.bind(this),
                );
            }
            _onConsumerMessage(e) {
              this.emit(o.MESSAGE, e);
            }
            _onConsumerUp(e) {
              this.emit(o.UP, e);
            }
            _onConsumerConnectFailed(e) {
              this.emit(o.CONNECT_FAILED_ERROR, e);
            }
            _onConsumerDown(e) {
              this.emit(o.DOWN, e);
            }
            _onConsumerDownError(e) {
              this.emit(o.DOWN_ERROR, e);
            }
            _onConsumerDisposed(e) {
              this.emit(o.DISPOSED, e);
            }
            _onConsumerGMDisabled(e) {
              this.emit(o.GM_DISABLED, e);
            }
            connect() {
              const { LOG_DEBUG: e, LOG_ERROR: t } = this.logger;
              try {
                this._messageConsumer.connect();
              } catch (e) {
                throw (t(e.toString()), e);
              }
            }
            disconnect() {
              const { LOG_DEBUG: e, LOG_ERROR: t } = this.logger;
              try {
                this._messageConsumer.disconnect();
              } catch (e) {
                throw (t(e.toString()), e);
              }
            }
            start() {
              const { LOG_DEBUG: e, LOG_ERROR: t } = this.logger;
              try {
                this._messageConsumer.start();
              } catch (e) {
                throw (t(e.toString()), e);
              }
            }
            stop() {
              const { LOG_DEBUG: e, LOG_ERROR: t } = this.logger;
              try {
                this._messageConsumer.stop();
              } catch (e) {
                throw (t(e.toString()), e);
              }
            }
            removeMessageFromQueue(e) {
              this._messageConsumer.applicationAck(e._guaranteedMsgId),
                (e._acked = !0);
            }
          };
        },
        1019: (e, t, s) => {
          var n = s(9489);
          const { Enum: r } = s(9359),
            { LOG_TRACE: i, LOG_DEBUG: o } = s(390),
            { Long: a } = s(840),
            c = r.new({ OK: 0, DUPLICATE: 1, OUT_OF_ORDER: 2 });
          e.exports = {
            TransportAcks: class {
              constructor(e = 0) {
                const t =
                  "number" == typeof e ? a.fromNumber(e, !0) : a.fromValue(e);
                (this.lastAcked = t), (this._acksPending = 0);
              }
              reset() {
                (this._acksPending = 0), (this.lastAcked = a.ZERO);
              }
              tryReceive(e, t) {
                return this._lastReceived.lt(t)
                  ? (this._lastReceived, c.OUT_OF_ORDER)
                  : this._lastReceived.gte(e)
                    ? (this._lastReceived, this._acksPending++, c.DUPLICATE)
                    : ((this._lastReceived = e), this._acksPending++, c.OK);
              }
              setAcked() {
                (this._lastAcked = a.fromValue(this._lastReceived)),
                  (this._acksPending = 0);
              }
              get acksPending() {
                return this._acksPending;
              }
              get lastAcked() {
                return this._lastAcked;
              }
              set lastAcked(e) {
                e.toString(),
                  Object.assign(this, {
                    _lastAcked: a.fromValue(e),
                    _lastReceived: a.fromValue(e),
                  });
              }
              get lastReceived() {
                return this._lastReceived;
              }
              toString() {
                return n(this);
              }
            },
            TransportAckResult: c,
          };
        },
        6780: (e, t, s) => {
          const { MessagePublisher: n } = s(9691),
            { MessagePublisherAcknowledgeMode: r } = s(142),
            { MessagePublisherEventName: i } = s(5290),
            { MessagePublisherProperties: o } = s(3762),
            { MessagePublisherPropertiesValidator: a } = s(6645),
            { PublisherFSMEvent: c } = s(9902),
            { PublisherFSMEventNames: u } = s(5166);
          (e.exports.MessagePublisherAcknowledgeMode = r),
            (e.exports.MessagePublisher = n),
            (e.exports.MessagePublisherProperties = o),
            (e.exports.PublisherFSMEvent = c),
            (e.exports.PublisherFSMEventNames = u),
            (e.exports.MessagePublisherPropertiesValidator = a),
            (e.exports.MessagePublisherEventName = i);
        },
        8809: (e, t, s) => {
          var n = s(9489);
          const { Long: r } = s(840),
            i = {
              _lastAcked: r.fromNumber(0, !0),
              _lastSent: r.fromNumber(0, !0),
              _next: r.fromNumber(1, !0),
            },
            o = (e) => e.toString(10);
          e.exports.MessageIds = class {
            constructor(e) {
              Object.assign(this, i, e);
            }
            get lastAcked() {
              return this._lastAcked;
            }
            set lastAcked(e) {
              this._lastAcked = r.fromValue(e);
            }
            get lastSent() {
              return this._lastSent;
            }
            setLastSent(e) {
              (this._lastSent = r.fromValue(e)),
                (this._next = this._lastSent.add(1));
            }
            get next() {
              return this._next;
            }
            inspect() {
              return {
                lastAcked: o(this.lastAcked),
                lastSent: o(this.lastSent),
                next: o(this.next),
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        142: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessagePublisherAcknowledgeMode = n.new({
            PER_MESSAGE: "PER_MESSAGE",
            WINDOWED: "WINDOWED",
          });
        },
        5290: (e, t, s) => {
          const { Enum: n } = s(9359),
            r = n.new({
              ACKNOWLEDGED_MESSAGE:
                "MessagePublisherEventName_acknowledgedMessage",
              CONNECT_FAILED_ERROR:
                "MessagePublisherEventName_connectFailedError",
              CAN_SEND: "MessagePublisherEventName_canSend",
              DISPOSED: "MessagePublisherEventName_disposed",
              DOWN: "MessagePublisherEventName_down",
              FLOW_NAME_CHANGED: "MessagePublisherEventName_flowNameChanged",
              GUARANTEED_MESSAGING_DOWN:
                "MessagePublisherEventName_guaranteedMessagingDown",
              REJECTED_MESSAGE: "MessagePublisherEventName_rejectedMessage",
              DISCONNECT_FAILED_ERROR:
                "MessagePublisherEventName_disconnectFailedError",
              UP: "MessagePublisherEventName_up",
              TRANSPORT_FULL: "MessagePublisherEventName_transportFull",
            });
          e.exports.MessagePublisherEventName = r;
        },
        6645: (e, t, s) => {
          const { APIPropertiesValidators: n } = s(7882),
            { MessagePublisherAcknowledgeMode: r } = s(142),
            {
              validateInstance: i,
              valBoolean: o,
              valIsMember: a,
              valNumber: c,
              valRange: u,
            } = n,
            l = {
              validate(e) {
                const t = i.bind(null, "MessagePublisherProperties", e);
                t("enabled", [o]),
                  t("windowSize", [c], [u, 1, 255]),
                  t("acknowledgeTimeoutInMsecs", [c], [u, 20, 6e4]),
                  t("acknowledgeMode", [
                    a,
                    r,
                    "MessagePublisherAcknowledgeMode",
                  ]),
                  t("connectRetryCount", [c], [u, 0, Number.MAX_VALUE]),
                  t("connectTimeoutInMsecs", [c], [u, 50, Number.MAX_VALUE]);
              },
            };
          e.exports.MessagePublisherPropertiesValidator = l;
        },
        3762: (e, t, s) => {
          const n = s(828),
            { APIProperties: r } = s(7882),
            { Check: i } = s(2201),
            { MessagePublisherAcknowledgeMode: o } = s(142),
            { TransportCapabilities: a } = s(3147);
          function c() {
            const { ProfileBinding: e } = n,
              t = e.value.guaranteedMessagingEnabled,
              s = a.web.webSocket();
            return t && s;
          }
          function u() {
            return {
              enabled: c(),
              windowSize: 50,
              acknowledgeTimeoutInMsecs: 2e3,
              acknowledgeMode: o.PER_MESSAGE,
              connectRetryCount: 3,
              connectTimeoutInMsecs: 5e3,
            };
          }
          e.exports.MessagePublisherProperties = class extends r {
            constructor(e) {
              super(u(), e || {});
            }
            get enabled() {
              return this._enabled;
            }
            set enabled(e) {
              this._enabled = e;
            }
            get windowSize() {
              return i.defined(this._windowSize)
                ? this._windowSize
                : u().windowSize;
            }
            set windowSize(e) {
              this._windowSize = e;
            }
            get acknowledgeTimeoutInMsecs() {
              return i.defined(this._acknowledgeTimeoutInMsecs)
                ? this._acknowledgeTimeoutInMsecs
                : u().acknowledgeTimeoutInMsecs;
            }
            set acknowledgeTimeoutInMsecs(e) {
              this._acknowledgeTimeoutInMsecs = e;
            }
            get acknowledgeMode() {
              return this._acknowledgeMode || o.PER_MESSAGE;
            }
            set acknowledgeMode(e) {
              this._acknowledgeMode = e;
            }
            get connectRetryCount() {
              return i.defined(this._connectRetryCount)
                ? this._connectRetryCount
                : u().connectRetryCount;
            }
            set connectRetryCount(e) {
              this._connectRetryCount = e;
            }
            get connectTimeoutInMsecs() {
              return i.defined(this._connectTimeoutInMsecs)
                ? this._connectTimeoutInMsecs
                : u().connectTimeoutInMsecs;
            }
            set connectTimeoutInMsecs(e) {
              this._connectTimeoutInMsecs = e;
            }
            inspect() {
              return {
                enabled: this.enabled,
                windowSize: this.windowSize,
                acknowledgeTimeoutInMsecs: this.acknowledgeTimeoutInMsecs,
                acknowledgeMode: o.describe(this.acknowledgeMode),
                connectRetryCount: this.connectRetryCount,
                connectTimeoutInMsecs: this.connectTimeoutInMsecs,
              };
            }
          };
        },
        9691: (e, t, s) => {
          var n = s(9489);
          const r = s(7291),
            { Flow: i, PrivateFlowEventName: o } = s(5370),
            { LogFormatter: a } = s(390),
            { MessagePublisherEventName: c } = s(5290),
            { MessagePublisherProperties: u } = s(3762),
            { PublisherFSM: l } = s(4343),
            { PublisherFSMEvent: h } = s(9902),
            { PublisherFSMEventNames: d } = s(5166),
            { LOG_WARN: p } = new a();
          e.exports.MessagePublisher = class extends i {
            constructor({ properties: e, sessionInterfaceFactory: t } = {}) {
              super(new u(e), t, {
                direct: c.ACKNOWLEDGED_MESSAGE,
                emits: c.values,
              }),
                (this._fsm = this._makeFSM());
              const s = new a();
              (s.formatter = function (...e) {
                return ["[message-publisher]", ...e];
              }),
                (this.log = s.wrap(this.log, this)),
                (this._bindWaiting = !0),
                this.on(o.BIND_WAITING, this._onBindWaiting.bind(this)),
                this.on(c.CONNECT_FAILED_ERROR, this._onBindFailed.bind(this)),
                this.on(c.DOWN, this._onDown.bind(this)),
                this.on(c.UP, this._onUp.bind(this));
            }
            _onBindFailed() {
              this._bindWaiting = !1;
            }
            _onBindWaiting() {
              this._bindWaiting = !0;
            }
            _onDown() {
              this._bindWaiting = !1;
            }
            _onUp() {
              this._bindWaiting = !1;
            }
            _makeFSM() {
              return new l({
                publisher: this,
                name: "PublisherFSM",
                sessionInterface: this._sessionInterface,
                properties: this._properties,
              });
            }
            get flowId() {
              return this._flowId;
            }
            set flowId(e) {
              this._flowId = e;
            }
            get name() {
              return this._flowName;
            }
            set name(e) {
              this._flowName = e;
            }
            get publisherId() {
              return this._publisherId;
            }
            set publisherId(e) {
              this._publisherId = e;
            }
            get properties() {
              return this._properties.clone();
            }
            connect() {
              super.connect(), this._fsm.getCurrentState() || this._fsm.start();
            }
            _disconnectSession() {
              super._disconnectSession(),
                this.processFSMEvent(new h({ name: d.FLOW_CLOSE }));
            }
            getDisposedEvent() {
              return c.DISPOSED;
            }
            handleAck(e) {
              this.processFSMEvent(new h({ name: d.ACK }, { ack: e }));
            }
            handleNack(e, t) {
              this.processFSMEvent(
                new h({ name: d.ACK }, { nack: e, ctrlMessage: t }),
              );
            }
            handleUncorrelatedControlMessage(e) {
              const t = e.msgType,
                { SMFAdProtocolMessageType: s } = r;
              switch (t) {
                case s.CLIENTACK: {
                  const t = e.getLastMsgIdAcked();
                  e.smfHeader.pm_respcode > 299
                    ? this.handleNack(t, e)
                    : this.handleAck(t);
                  break;
                }
                case s.CLIENTNACK: {
                  const t = e.getLastMsgIdAcked();
                  this.handleNack(t, e);
                  break;
                }
                case s.CLOSEPUBFLOW:
                  this.processFSMEvent(new h({ name: d.FLOW_UNBOUND }));
                  break;
                default:
                  p(
                    `Dropping unhandled AD control message for ${this}`,
                    s.describe(t),
                  );
              }
            }
            prepareAdMessageAndSend(e) {
              return this._fsm.prepareAdMessageAndSend(e);
            }
            isBindWaiting() {
              return this._bindWaiting;
            }
            inspect() {
              return Object.assign(super.inspect(), {
                name: this.name,
                publisherId: this.publisherId,
              });
            }
            toString() {
              return n(this);
            }
            _disposeFSM() {
              this.processFSMEvent(new h({ name: d.DISPOSE }));
            }
            _isDisconnected() {
              return this._fsm.isDisconnected();
            }
          };
        },
        5166: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.PublisherFSMEventNames = n.new({
            SESSION_UP: "PublisherSessionUp",
            SESSION_UP_NO_AD: "PublisherSessionUpNoAD",
            SESSION_DOWN: "PublisherSessionDown",
            FLOW_FAILED: "MessagePublisherFailed",
            FLOW_UP: "MessagePublisherUp",
            FLOW_CLOSE: "MessagePublisherClose",
            FLOW_UNBOUND: "MessagePublisherUnbound",
            TRANSPORT_FULL: "PublisherTransportFull",
            ACK: "PublisherAck",
            ACK_TIMEOUT: "PublisherAckTimeout",
            BIND_TIMEOUT: "PublisherBindTimeout",
            UNBIND_TIMEOUT: "PublisherUnbindTimeout",
            CAN_SEND: "PublisherCanSend",
            TRANSPORT_ERROR: "PublisherTransportError",
            RESEND_COMPLETE: "PublisherResendComplete",
            DISPOSE: "PublisherDispose",
          });
        },
        9902: (e, t, s) => {
          const { FsmEvent: n } = s(8535);
          e.exports.PublisherFSMEvent = class extends n {
            constructor(e, t, s) {
              super(e), Object.assign(this, t), Object.assign(this, s);
            }
            getEventText() {
              return this._eventText;
            }
          };
        },
        4343: (e, t, s) => {
          const n = s(7291),
            r = s(5594),
            {
              ErrorResponseSubcodeMapper: i,
              ErrorSubcode: o,
              OperationError: a,
            } = s(3870),
            { LogFormatter: c } = s(390),
            { Long: u } = s(840),
            { MessageIds: l } = s(8809),
            { MessagePublisherAcknowledgeMode: h } = s(142),
            { MessagePublisherEventName: d } = s(5290),
            { PrivateFlowEventName: p } = s(5370),
            { PublisherFSMEvent: _ } = s(9902),
            { PublisherFSMEventNames: E } = s(5166),
            { PublisherStateNames: T } = s(6955),
            { State: g, StateMachine: S } = s(8535),
            { StatType: m } = s(6818),
            { TransportReturnCode: f } = s(3147);
          e.exports.PublisherFSM = class extends S {
            constructor({
              publisher: e,
              name: t,
              sessionInterface: s,
              properties: l,
            } = {}) {
              super({ name: t });
              const h = this,
                S = () => {
                  const e = h.getCurrentState();
                  return e ? e.getName() : "<not running>";
                };
              (this.logger = new c((...t) => [
                `[session=${s.sessionIdHex}]`,
                `[message-publisher-fsm=${e.flowIdDec}]`,
                `[${S()}]`,
                ...t,
              ])),
                (this.log = this.logger.wrap(this.log, this));
              const {
                LOG_TRACE: f,
                LOG_DEBUG: I,
                LOG_INFO: R,
                LOG_WARN: C,
              } = this.logger;
              Object.assign(this, {
                _publisher: e,
                _acknowledgeMode: l.acknowledgeMode,
                _acknowledgeTimeoutInMsecs: l.acknowledgeTimeoutInMsecs,
                _sessionInterface: s,
                _windowSize: l.windowSize,
                _stateEvents: [],
              }),
                (this._guaranteedEnabled = l.enabled),
                (this._sendWindow = l.windowSize),
                this._resetConnectedInfo(),
                (this._notifiedWindowClosed = !1),
                (this._transportFlowControlled = !0),
                this.initial(function () {
                  return this.transitionTo(h.PublisherUnbound, (e) => {
                    e.getStateMachine().getName();
                  });
                }),
                h.unhandledEventReaction(function (e) {
                  switch (e.getName()) {
                    case E.FLOW_UNBOUND:
                      return (
                        (this._guaranteedEnabled = !1),
                        this._publisher.emit(d.GUARANTEED_MESSAGING_DOWN),
                        this.transitionTo(h.PublisherUnbound, (e) => {
                          e.getStateMachine().getName();
                        })
                      );
                    case E.DISPOSE:
                    case E.TRANSPORT_FULL:
                    case E.CAN_SEND:
                      break;
                    default:
                      e.getName();
                  }
                  return this;
                }),
                (h.PublisherUnbound = new g(
                  { name: T.UNBOUND, parentContext: h },
                  {
                    emitDownAndBindWaiting() {
                      e.emit(d.DOWN), e.emit(p.BIND_WAITING);
                    },
                  },
                )
                  .entry(function () {
                    this.emitDownAndBindWaiting(),
                      (h._connectRetryCount = l.connectRetryCount);
                  })
                  .reaction(E.FLOW_UNBOUND, function () {
                    return this.internalTransition();
                  })
                  .reaction(E.SESSION_UP, function () {
                    return this.transitionTo(h.PublisherOpenFlowSent);
                  })),
                (h.PublisherOpenFlowSent = new g(
                  { name: T.OPENFLOWSENT, parentContext: h },
                  {
                    emitOpenFlowFailedError(t) {
                      e.emit(d.CONNECT_FAILED_ERROR, t);
                    },
                    handleOpenFlowResponse(t) {
                      const o = t.smfHeader,
                        a = o.pm_respcode;
                      if (t.msgType !== n.SMFAdProtocolMessageType.OPENPUBFLOW)
                        return h.processEvent(
                          new _(
                            { name: E.FLOW_FAILED },
                            {
                              returnCode: a,
                              description: `Unexpected response: ${n.SMFAdProtocolMessageType.describe(t.msgType)}`,
                            },
                          ),
                        );
                      if (null === a)
                        return (
                          e.incStat(m.RX_DISCARD_SMF_UNKNOWN_ELEMENT),
                          s.sessionIdHex,
                          null
                        );
                      if (200 !== a) {
                        const e = o.pm_respstr,
                          t = i.getADErrorSubcode(a, e);
                        return h.processEvent(
                          new _(
                            { name: E.FLOW_FAILED },
                            { subcode: t, returnCode: a, description: e },
                          ),
                        );
                      }
                      const c = t.getLastMsgIdAcked(),
                        l = t.getWindow(),
                        p = t.getFlowId(),
                        T = t.getFlowName(),
                        g = t.getPublisherId();
                      if ((h._messageIds, void 0 === l))
                        return h.processEvent(
                          new _(
                            { name: E.FLOW_FAILED },
                            { description: "Window parameter not found" },
                          ),
                        );
                      if (l > this._windowSize)
                        return h.processEvent(
                          new _(
                            { name: E.FLOW_FAILED },
                            { description: "Invalid window negotiation" },
                          ),
                        );
                      (h._sendWindow = l - h._unackedList.length),
                        h._sendWindow < 0 && (h._sendWindow = 0),
                        Object.assign(h._publisher, {
                          name: T,
                          flowId: p,
                          publisherId: g,
                        }),
                        (h._guaranteedEnabled = !0),
                        0 === h._connectReason || 2 === h._connectReason
                          ? (h._messageIds.setLastSent(c),
                            h._messageIds,
                            h._connectReason,
                            2 === h._connectReason &&
                              e.emit(d.FLOW_NAME_CHANGED, {
                                messages: [...h._unackedList],
                                count: h._unackedList.length,
                              }),
                            (h._connectReason = 1),
                            h._unackedList.forEach((e) => {
                              e.getGuaranteedMessageId(),
                                h._renumber(e),
                                e.getGuaranteedMessageId(),
                                h._messageIds.setLastSent(
                                  e.getGuaranteedMessageId(),
                                );
                            }))
                          : h._unackedList.forEach((t) => {
                              t.setFlowId(p),
                                t.setPublisherId(e.publisherId),
                                t.getGuaranteedMessageId();
                            });
                      const S = h._sessionInterface
                        .getCapability(r.CapabilityType.MAX_GUARANTEED_MSG_SIZE)
                        .getValue();
                      return (
                        h._unackedList.forEach((e) => {
                          S < e._memoized_payload.length &&
                            C(
                              `Message size ${e._memoized_payload.length} above broker limit ${S}`,
                            );
                        }),
                        h._unackedList.length
                          ? (h._handleAck(c, !1, t, !0),
                            (h._firstUnackedToSend = h._unackedList[0]))
                          : (h._messageIds.lastAcked = u.fromValue(c)),
                        h._messageIds,
                        h.processEvent(new _({ name: E.FLOW_UP }))
                      );
                    },
                    handleOpenFlowTimeout: () => (
                      R("Open publisher connection timeout"),
                      h.processEvent(new _({ name: E.BIND_TIMEOUT }))
                    ),
                    handleUnknownFlowName() {
                      return (
                        R("Flow name unknown, republish required"),
                        h._resetConnectedInfo(!0),
                        this.externalTransitionTo(h.PublisherOpenFlowSent)
                      );
                    },
                    sendOpenFlow() {
                      const e = s.getCorrelationTag(),
                        t = n.AdProtocolMessage.getOpenMessagePublisher(
                          h._messageIds.lastAcked,
                          h._messageIds.lastSent,
                          l.windowSize,
                          h._publisher._flowName,
                          e,
                        );
                      h._messageIds.lastAcked,
                        h._messageIds.lastSent,
                        l.windowSize,
                        h._publisher._flowName,
                        s.sendControl(t),
                        s.enqueueRequest(
                          e,
                          () => this.handleOpenFlowTimeout(),
                          l.connectTimeoutInMsecs,
                          null,
                          (e) => this.handleOpenFlowResponse(e),
                        );
                    },
                  },
                )
                  .entry(function () {
                    try {
                      this.sendOpenFlow();
                    } catch (e) {
                      C(`Exception during bind attempt: ${e}`),
                        h.processEvent(new _({ name: E.SESSION_DOWN }));
                    }
                  })
                  .reaction(E.FLOW_CLOSE, function () {
                    return this.transitionTo(h.PublisherCloseFlowSent);
                  })
                  .reaction(E.FLOW_UP, function () {
                    return this.transitionTo(h.PublisherUp);
                  })
                  .reaction(E.SESSION_DOWN, function () {
                    return this.transitionTo(h.PublisherUnbound);
                  })
                  .reaction(E.BIND_TIMEOUT, function () {
                    return h._connectRetryCount > 0
                      ? (h._connectRetryCount--,
                        this.externalTransitionTo(h.PublisherOpenFlowSent))
                      : (this.emitOpenFlowFailedError({
                          subcode: o.TIMEOUT,
                          description:
                            "Open publisher connection failed due to timeout",
                        }),
                        this.transitionTo(h.PublisherUnbound));
                  })
                  .reaction(E.FLOW_FAILED, function (e) {
                    const { subcode: t, returnCode: s, description: n } = e;
                    return e.subcode === o.UNKNOWN_FLOW_NAME
                      ? this.handleUnknownFlowName()
                      : (this.emitOpenFlowFailedError({
                          event: e,
                          subcode: t,
                          returnCode: s,
                          description: n,
                        }),
                        h._resetConnectedInfo(),
                        this.transitionTo(h.PublisherUnbound));
                  })),
                (h.PublisherCloseFlowSent = new g(
                  { name: T.CLOSEFLOWSENT, parentContext: h },
                  {
                    handleCloseFlowResponse(t) {
                      const r = t.smfHeader,
                        i = r.pm_respcode;
                      return t.msgType !==
                        n.SMFAdProtocolMessageType.CLOSEPUBFLOW
                        ? h.processEvent(
                            new _(
                              { name: E.FLOW_FAILED },
                              {
                                returnCode: i,
                                description: `Unexpected response: ${n.SMFAdProtocolMessageType.describe(t.msgType)}`,
                              },
                            ),
                          )
                        : null === i
                          ? (e.incStat(m.RX_DISCARD_SMF_UNKNOWN_ELEMENT),
                            s.sessionIdHex,
                            null)
                          : (200 !== i &&
                              h.processEvent(
                                new _(
                                  { name: E.FLOW_FAILED },
                                  { returnCode: i, description: r.pm_respstr },
                                ),
                              ),
                            h.processEvent(new _({ name: E.FLOW_UNBOUND })));
                    },
                    handleCloseFlowTimeout: () => (
                      R("Close publisher connection timeout."),
                      h.processEvent(new _({ name: E.UNBIND_TIMEOUT }))
                    ),
                    sendCloseFlow() {
                      const e = s.getCorrelationTag(),
                        t = n.AdProtocolMessage.getCloseMessagePublisher(
                          h._publisher.flowId,
                          e,
                        );
                      s.sendControl(t),
                        s.enqueueRequest(
                          e,
                          () => this.handleCloseFlowTimeout(),
                          l.connectTimeoutInMsecs,
                          null,
                          (e) => this.handleCloseFlowResponse(e),
                        );
                    },
                  },
                )
                  .entry(function () {
                    return this.sendCloseFlow(), this;
                  })
                  .reaction(E.ACK, function (e) {
                    return h._handleAckEvent(e), this.internalTransition();
                  })
                  .reaction(E.FLOW_UNBOUND, function () {
                    return this.transitionTo(h.PublisherUnbound);
                  })
                  .reaction(E.FLOW_FAILED, function () {
                    this.transitionTo(h.PublisherUnbound);
                  })
                  .reaction(E.UNBIND_TIMEOUT, function () {
                    return this.transitionTo(h.PublisherCloseFlowSent);
                  })),
                (h.PublisherUp = new g(
                  { name: T.UP, parentContext: h },
                  {
                    emitFlowUp() {
                      e.emit(d.UP);
                    },
                  },
                )
                  .initial(function () {
                    return this.transitionTo(
                      h._unackedList.length
                        ? h.PublisherRetransmitting
                        : h.PublisherDataXfer,
                    );
                  })
                  .entry(function () {
                    return (
                      h._scheduleStateEvents(h.PublisherUp, () =>
                        this.emitFlowUp(),
                      ),
                      this
                    );
                  })
                  .reaction(E.ACK, function (e) {
                    return h._handleAckEvent(e), this.internalTransition();
                  })
                  .reaction(E.ACK_TIMEOUT, function () {
                    return (
                      (h._firstUnackedToSend = h._unackedList[0]),
                      this.transitionTo(h.PublisherRetransmitting)
                    );
                  })
                  .reaction(E.FLOW_CLOSE, function () {
                    return this.transitionTo(h.PublisherCloseFlowSent);
                  })
                  .reaction(E.SESSION_DOWN, function () {
                    return this.transitionTo(h.PublisherUnbound);
                  })
                  .reaction(E.TRANSPORT_FULL, function () {
                    return this.internalTransition();
                  })),
                (h.PublisherDataXfer = new g({
                  name: T.DATA_XFER,
                  parentContext: h.PublisherUp,
                })
                  .entry(() => {
                    (h._transportFlowControlled = !1),
                      h._scheduleStateEvents(h.PublisherDataXfer, () =>
                        h._maybeEmitCanSend(),
                      );
                  })
                  .reaction(E.TRANSPORT_FULL, function () {
                    return this.transitionTo(h.PublisherFlowControlled);
                  })
                  .exit(() => {
                    h._transportFlowControlled = !0;
                  })),
                (h.PublisherFlowControlled = new g({
                  name: T.FLOW_CONTROLLED,
                  parentContext: h.PublisherUp,
                })
                  .reaction(E.TRANSPORT_FULL, function () {
                    return (
                      R("Attempt to send while flow controlled"),
                      this.internalTransition()
                    );
                  })
                  .reaction(E.CAN_SEND, function () {
                    return this.transitionTo(h.PublisherRetransmitting);
                  })),
                (h.PublisherRetransmitting = new g(
                  { name: T.RETRANSMITTING, parentContext: h.PublisherUp },
                  {
                    retransmit() {
                      try {
                        h._resendFromUnacked();
                      } catch (e) {
                        e instanceof a && e.subcode === o.INSUFFICIENT_SPACE
                          ? h.processEvent(new _({ name: E.TRANSPORT_FULL }))
                          : (R(`Publisher resendFromUnacked failed: ${e}`),
                            h.processEvent(new _({ name: E.FLOW_FAILED })));
                      }
                    },
                  },
                )
                  .entry(function () {
                    this.retransmit();
                  })
                  .reaction(E.RESEND_COMPLETE, function () {
                    return this.transitionTo(h.PublisherDataXfer);
                  })
                  .reaction(E.TRANSPORT_FULL, function () {
                    return (
                      h._unackedList.length,
                      this.transitionTo(h.PublisherFlowControlled)
                    );
                  }));
            }
            isDisconnected() {
              return (
                !this.getCurrentState() || !!this.getActiveState(T.UNBOUND)
              );
            }
            prepareAdMessageAndSend(e) {
              if (!this._guaranteedEnabled)
                throw new a(
                  "Session does not provide Guaranteed Message Publish capability",
                  o.GM_UNAVAILABLE,
                  "close flow received from message-router",
                );
              if (this._sendWindow <= 0)
                throw (
                  (this._publisher.incStat(m.TX_WINDOW_CLOSED),
                  (this._notifiedWindowClosed = !0),
                  new a(
                    "Guaranteed Message Window Closed",
                    o.INSUFFICIENT_SPACE,
                  ))
                );
              const t = this._unackedList,
                {
                  LOG_TRACE: s,
                  LOG_DEBUG: i,
                  LOG_INFO: c,
                  LOG_WARN: u,
                } = this.logger;
              e._payload_is_memoized &&
                ((e._payload_is_memoized = !1),
                (e._memoized_csumm = void 0),
                (e._memoized_payload = void 0));
              const l = e.clone(),
                h = n.Codec.Encode.adaptMessageToSmf_payloadMemoize(l);
              var d = 0;
              try {
                d = this._sessionInterface
                  .getCapability(r.CapabilityType.MAX_GUARANTEED_MSG_SIZE)
                  .getValue();
              } catch (e) {
                c("Can't pre-check payload size, broker not connected yet?"),
                  e.stack;
              }
              if (0 < d && h > d)
                throw new a(
                  `Encoded payload size (${h}) exceeds broker size limit (MAX_GUARANTEED_MSG_SIZE, ${d})`,
                  o.MESSAGE_TOO_LARGE,
                );
              --this._sendWindow,
                this._renumber(l),
                this._cloneNumbers(l, e),
                t.push(l);
              const p = l.getGuaranteedMessageId();
              if (
                (this._messageIds.setLastSent(p),
                t.length,
                this._sendWindow,
                this._transportFlowControlled)
              )
                return (
                  void 0 === this._firstUnackedToSend &&
                    (this._firstUnackedToSend = l),
                  f.OK
                );
              let T;
              try {
                (T = this._sessionInterface.sendToTransport(l)),
                  T !== f.OK
                    ? T === f.NO_SPACE &&
                      ((T = f.OK),
                      (this._firstUnackedToSend = l),
                      this.processEvent(new _({ name: E.TRANSPORT_FULL })))
                    : l.setRedelivered(!0),
                  this._startAckTimer();
              } catch (e) {
                throw e instanceof a
                  ? (o.describe(e.subcode),
                    e.message,
                    t.pop(),
                    this._messageIds.setLastSent(
                      l.getGuaranteedPreviousMessageId(),
                    ),
                    ++this._sendWindow,
                    e)
                  : (e.message, e);
              }
              return f.OK;
            }
            _handleAckEvent(e) {
              this._publisher.incStat(m.TX_ACKS_RXED),
                this._handleAck(e.ack || e.nack, !!e.nack, e.ctrlMessage);
            }
            _handleAck(e, t, s = void 0, n = !1) {
              const { _messageIds: r, _unackedList: i } = this,
                { LOG_DEBUG: o, LOG_INFO: a } = this.logger;
              if (r.lastAcked.gte(e))
                return void (n
                  ? this._messageIds
                  : a(
                      `Dropping ack: remote ack for ${e}, local ids ${this._messageIds}`,
                    ));
              const c = [];
              for (; i.length && e.gte(i[0].getGuaranteedMessageId()); )
                c.push(i.shift());
              -1 === i.indexOf(this._firstUnackedToSend) &&
                (this._firstUnackedToSend = i[0]),
                (this._sendWindow += c.length),
                this._sendWindow,
                (r.lastAcked = e);
              const u = t ? c.pop() : null,
                l = c.length;
              if (l)
                if (this._acknowledgeMode === h.PER_MESSAGE) {
                  i.length;
                  for (let e = 0; e < l; ++e)
                    this._publisher.emit(d.ACKNOWLEDGED_MESSAGE, c[e]);
                } else {
                  const e = c[l - 1];
                  e.getGuaranteedMessageId(),
                    this._publisher.emit(d.ACKNOWLEDGED_MESSAGE, e);
                }
              u &&
                (u.getGuaranteedMessageId(),
                this._publisher.emit(d.REJECTED_MESSAGE, u, s)),
                i.length,
                i.length ? this._resetAckTimer() : this._clearAckTimer(),
                this._maybeEmitCanSend();
            }
            _maybeEmitCanSend() {
              const { LOG_TRACE: e } = this.logger;
              this._notifiedWindowClosed &&
                0 !== this._sendWindow &&
                ((this._notifiedWindowClosed = !1),
                this._publisher.emit(d.CAN_SEND));
            }
            _resendFromUnacked() {
              const { LOG_ERROR: e, LOG_INFO: t, LOG_DEBUG: s } = this.logger,
                n = this._unackedList;
              let r = n.indexOf(this._firstUnackedToSend);
              if (-1 === r)
                return (
                  this._firstUnackedToSend &&
                    e(
                      `Could not find first Unacked Messages in unacked message list: msgId = ${this._firstUnackedToSend.getGuaranteedMessageId}`,
                    ),
                  void (
                    0 === n.length &&
                    (this._messageIds.toString(),
                    this.processEvent(new _({ name: E.RESEND_COMPLETE })))
                  )
                );
              for (
                n.length, n.map((e) => e.getGuaranteedMessageId().toString());
                r < n.length;

              ) {
                n[r].getPublisherId() !== this._publisher.publisherId &&
                  e(
                    `Resending on invalid publisherId '${n[r].getPublisherId()}'when it should be '${this._publisher.publisherId}'`,
                  );
                const s = this._sessionInterface.sendData(n[r]);
                if (s === f.NO_SPACE)
                  return (
                    (this._firstUnackedToSend = n[r]),
                    t(
                      "Publisher sendMessage blocked due to insufficient space, wait for CAN_SEND",
                    ),
                    void this.processEvent(new _({ name: E.TRANSPORT_FULL }))
                  );
                if (s !== f.OK) return;
                n[r].setRedelivered(!0), r++, this._startAckTimer();
              }
              this._messageIds.toString(),
                this.processEvent(new _({ name: E.RESEND_COMPLETE }));
            }
            _resetConnectedInfo(e = !1) {
              const { LOG_DEBUG: t } = this.logger;
              this._ackTimer && this._clearAckTimer(),
                Object.assign(this, { _messageIds: new l() }),
                Object.assign(this._publisher, {
                  publisherId: void 0,
                  flowId: void 0,
                  flowName: null,
                }),
                e
                  ? (this._connectReason = 2)
                  : ((this._unackedList = []), (this._connectReason = 0));
            }
            _clearAckTimer() {
              const { LOG_TRACE: e } = this.logger;
              this._ackTimer && this._ackTimer,
                this._ackTimer &&
                  (clearTimeout(this._ackTimer), (this._ackTimer = null));
            }
            _emitStateEvents() {
              const { LOG_TRACE: e } = this.logger;
              for (; this._stateEvents.length; ) {
                const e = this._stateEvents.shift(),
                  t = e[0],
                  s = e[1];
                this.getActiveState(t.getName()) && s.apply(t);
              }
            }
            _handleAckTimeout() {
              const { LOG_TRACE: e } = this.logger;
              (this._ackTimer = null),
                this._publisher.incStat(m.TX_ACK_TIMEOUT),
                this.processEvent(new _({ name: E.ACK_TIMEOUT }));
            }
            _renumber(e) {
              const t = this._messageIds,
                s = t.next;
              e.setGuaranteedPreviousMessageId(t.lastSent),
                e.setGuaranteedMessageId(s);
              const n = this._publisher;
              e.setFlowId(n.flowId), e.setPublisherId(n.publisherId);
            }
            _cloneNumbers(e, t) {
              t.setGuaranteedPreviousMessageId(
                e.getGuaranteedPreviousMessageId(),
              ),
                t.setGuaranteedMessageId(e.getGuaranteedMessageId()),
                t.setFlowId(e.getFlowId()),
                t.setPublisherId(e.getPublisherId());
            }
            _resetAckTimer() {
              this._clearAckTimer(), this._startAckTimer();
            }
            _scheduleStateEvents(e, t) {
              this._stateEvents.push([e, t]),
                this._setPostEventAction(
                  () => this._emitStateEvents(),
                  "Emit state events",
                );
            }
            _setPostEventAction(e, t = "No action") {
              const { LOG_DEBUG: s, LOG_WARN: n } = this.logger;
              (this._postEventAction && this._postEventAction.desc === t) ||
                (this._postEventAction &&
                  this._postEventAction.desc &&
                  n(
                    `Replacing post event action ${this._postEventAction.desc} with ${t}`,
                  ),
                (this._postEventAction = { action: e || (() => {}), desc: t }),
                this.setPostEventAction(() => {
                  this._postEventAction.action(),
                    (this._postEventAction = null);
                }));
            }
            _startAckTimer() {
              this._ackTimer ||
                (this._ackTimer = setTimeout(
                  () => this._handleAckTimeout(),
                  this._acknowledgeTimeoutInMsecs,
                ));
            }
          };
        },
        6955: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.PublisherStateNames = n.new({
            UNBOUND: "PublisherUnbound",
            OPENFLOWSENT: "PublisherOpenFlowSent",
            UP: "PublisherUp",
            FAILED: "PublisherFailed",
            CLOSEFLOWSENT: "PublisherCloseFlowSent",
            DATA_XFER: "PublisherDataXfer",
            FLOW_CONTROLLED: "MessagePublisherFlowControlled",
            RETRANSMITTING: "PublisherRetransmitting",
          });
        },
        4573: (e, t, s) => {
          const { Baggage: n } = s(5165),
            { TraceContext: r } = s(2873),
            { TraceContextSetter: i } = s(9670),
            { MessageTracingSupport: o } = s(3742);
          (e.exports.Baggage = n),
            (e.exports.TraceContext = r),
            (e.exports.TraceContextSetter = i),
            (e.exports.MessageTracingSupport = o);
        },
        5165: (e, t, s) => {
          const {
            Parameter: { isStringOrNothing: n },
          } = s(2201);
          e.exports.Baggage = class {
            getBaggage() {
              return this._baggage || null;
            }
            setBaggage(e) {
              this._setBaggage(n("baggage", e));
            }
            _setBaggage(e) {
              this._baggage = e;
            }
          };
        },
        9670: (e, t, s) => {
          const { Parameter: n } = s(2201),
            { Convert: r } = s(840),
            i = s(8764).lW,
            {
              isNumber: o,
              isBoolean: a,
              isString: c,
              isStringOrNothing: u,
            } = n,
            { uint8ArrayToString: l } = r;
          class h {
            constructor() {
              (this._traceId = null),
                (this._spanId = null),
                (this._isSampled = !1),
                (this._traceState = null),
                (this._version = 1);
            }
            clone() {
              const e = new h();
              return (
                e._setSpanId(this._spanId),
                e._setTraceId(this._traceId),
                e._setSampled(this._isSampled),
                e._setTraceState(this._traceState),
                e._setVersion(this._version),
                e
              );
            }
            static get TRACE_ID_BYTES_LENGTH() {
              return 16;
            }
            static get SPAN_ID_BYTES_LENGTH() {
              return 8;
            }
            get version() {
              return this._version || 1;
            }
            setVersion(e) {
              this._setVersion(o("version", e));
            }
            _setVersion(e) {
              this._version = e;
            }
            get traceId() {
              return this._traceId;
            }
            setTraceId(e) {
              this._setTraceId(c("traceId", e));
            }
            _setTraceId(e) {
              this._traceId = e;
            }
            get spanId() {
              return this._spanId;
            }
            setSpanId(e) {
              this._setSpanId(c("spanId", e));
            }
            _setSpanId(e) {
              this._spanId = e;
            }
            get isSampled() {
              return this._isSampled || !1;
            }
            setSampled(e) {
              this._setSampled(a("isSampled", e));
            }
            _setSampled(e) {
              this._isSampled = e;
            }
            get traceState() {
              return this._traceState;
            }
            setTraceState(e) {
              this._setTraceState(u("traceState", e));
            }
            _setTraceState(e) {
              this._traceState = e;
            }
            static fromTraceContext(e) {
              if (null == e) return null;
              let t = null;
              if (
                (i.isBuffer(e)
                  ? (t = e)
                  : "string" == typeof e && (t = i.from(e, "latin1")),
                !t || t.length < 32)
              )
                return null;
              try {
                const e = new Uint8Array(t).buffer;
                let s = 0;
                const n = new h(),
                  r = e.slice(s, s + 1);
                let i = new DataView(r, 0, 1).getUint8(s);
                const o = i >> 4;
                n.setVersion(o);
                const a = 4 == (15 & i);
                n.setSampled(a), s++;
                const c = e.slice(s, s + 16),
                  u = l(c, "hex");
                n.setTraceId(u), (s += h.TRACE_ID_BYTES_LENGTH);
                const d = e.slice(s, s + 8),
                  p = l(d, "hex");
                n.setSpanId(p), (s += h.SPAN_ID_BYTES_LENGTH), s++, (s += 4);
                const _ = e.slice(s, s + 2),
                  E = new DataView(_, 0, _.byteLength).getUint16(0, !1);
                if (((s += 2), E > 0)) {
                  const t = e.slice(s, s + E),
                    r = l(t);
                  n.setTraceState(r);
                }
                return n;
              } catch (e) {
                return null;
              }
            }
          }
          e.exports.TraceContextSetter = h;
        },
        2873: (e, t, s) => {
          const { Parameter: n } = s(2201),
            { Convert: r } = s(840),
            { TraceContextSetter: i } = s(9670),
            { isBoolean: o, isStringOrNothing: a } = n,
            { stringToUint8Array: c, hexStringToUint8Array: u } = r;
          class l {
            constructor(e) {
              (this._traceId = a("traceId", e.traceId)),
                (this._spanId = a("spanId", e.spanId)),
                (this._isSampled = o("isSampled", e.isSampled)),
                (this._traceState = e.traceState),
                (this._version = e.version);
            }
            static clone(e) {
              const t = new i();
              return (
                t._setSpanId(e.getSpanId()),
                t._setTraceId(e.getTraceId()),
                t._setSampled(e.getIsSampled()),
                t._setTraceState(e.getTraceState()),
                t._setVersion(e.getVersion()),
                new l(t)
              );
            }
            get version() {
              return this._version || 1;
            }
            getVersion() {
              return this.version;
            }
            get MAX_TRACE_STATE_LENGTH() {
              return 512;
            }
            get traceId() {
              return this._traceId;
            }
            getTraceId() {
              return this._traceId;
            }
            get spanId() {
              return this._spanId;
            }
            getSpanId() {
              return this._spanId;
            }
            get isSampled() {
              return this._isSampled;
            }
            getIsSampled() {
              return this._isSampled || !1;
            }
            get traceState() {
              return this._traceState;
            }
            getTraceState() {
              return this._traceState || null;
            }
            getTruncatedTraceState() {
              return this._standardTraceStateTruncation(
                this.MAX_TRACE_STATE_LENGTH,
              );
            }
            getEncodedTraceContext() {
              if (null == this.traceId || null == this.spanId) return null;
              const e = null == this.traceState ? 0 : this.traceState.length,
                t = new ArrayBuffer(32 + e);
              let s = 0;
              const n = new DataView(t);
              let r = 0;
              (r |= this.version << 4),
                (r |= this.isSampled ? 4 : 0),
                n.setUint8(s, r, !1),
                s++;
              const i = u(this.traceId);
              for (let e = 0; e < 16; e++) n.setUint8(s + e, i[e], !1);
              s += 16;
              const o = u(this.spanId);
              for (let e = 0; e < 8; e++) n.setUint8(s + e, o[e], !1);
              if (
                ((s += 8),
                n.setUint8(s, 1, !1),
                s++,
                n.setUint16(s, 0, !1),
                n.setUint16(s + 2, 0, !1),
                (s += 4),
                null == this.traceState)
              )
                n.setUint16(s, 0, !1), (s += 2);
              else {
                const e = this.getTruncatedTraceState();
                if (null != e) {
                  const t = e.length,
                    r = new Uint16Array([t]);
                  n.setUint16(s, r, !1), (s += 2);
                  const i = c(e);
                  for (let e = 0; e < i.length; e++)
                    n.setUint8(s + e, i[e], !1);
                  s += i.length;
                }
              }
              return new Uint8Array(t);
            }
            _standardTraceStateTruncation(e) {
              if (!this._traceState || null == this._traceState) return null;
              if (this._traceState.length < e) return this._traceState;
              const t = new Array(),
                s = new Array();
              let n = 0;
              const r = this._traceState.split(",");
              for (let i = 0; i < r.length; i++) {
                let o = r[i];
                if ("" !== o && null != o) {
                  let r = o.length;
                  r > 128
                    ? t.push(o)
                    : n + r + (n > 0 ? 1 : 0) <= e
                      ? (s.push(o), (n += r + (n > 0 ? 1 : 0)))
                      : t.push(o);
                }
              }
              for (let r = 0; r < t.length; r++) {
                let i = t[r],
                  o = i.length;
                n + o + (n > 0 ? 1 : 0) <= e &&
                  (s.push(i), (n += o + (n > 0 ? 1 : 0)));
              }
              return s.join(",");
            }
            toString() {
              return (
                "{traceId=" +
                this.getTraceId() +
                ", spanId=" +
                this.getSpanId() +
                ", sampled=" +
                this.isSampled +
                ", traceState=" +
                (null == this.traceState ? "}" : "'" + this.traceState + "'}")
              );
            }
          }
          e.exports.TraceContext = l;
        },
        3742: (e, t, s) => {
          const { LogFormatter: n } = s(390),
            { Baggage: r } = s(5165),
            { TraceContext: i } = s(2873),
            { TraceContextSetter: o } = s(9670);
          e.exports.MessageTracingSupport = class {
            constructor() {}
            getTraceContextSetter() {
              return (
                (null != this._traceContextSetter &&
                  null != this._traceContextSetter) ||
                  (this._traceContextSetter = new o()),
                this._traceContextSetter
              );
            }
            getTransportContext() {
              return this._transportContext;
            }
            _setTransportContext(e) {
              null != e && (this._transportContext = new i(e));
            }
            getCreationContext() {
              return this._creationContext;
            }
            _setCreationContext(e) {
              null != e && (this._creationContext = new i(e));
            }
            getBaggage() {
              return this._baggage;
            }
            _setBaggage(e) {
              this._baggage = e;
            }
          };
        },
        4789: (e, t, s) => {
          const { ReplicationGroupMessageId: n, RgmidFactory: r } = s(4097),
            { Message: i } = s(337),
            { MessageCacheStatus: o } = s(2615),
            { MessageDeliveryModeType: a } = s(969),
            { MessageDumpFlag: c } = s(1012),
            { MessageDumpStandardProvider: u } = s(1983),
            { MessageDumpUtil: l } = s(8292),
            { MessageType: h } = s(165),
            { MessageOutcome: d } = s(5915),
            { MessageUserCosType: p } = s(95),
            { SolclientFactory: _ } = s(828);
          (_.createMessage = _.createFactory(() => new i())),
            (_.createReplicationGroupMessageId = _.createFactory((e) =>
              r.fromString(e),
            )),
            (e.exports.Message = i),
            (e.exports.MessageCacheStatus = o),
            (e.exports.MessageDeliveryModeType = a),
            (e.exports.MessageDumpFlag = c),
            (e.exports.MessageDumpStandardProvider = u),
            (e.exports.MessageDumpUtil = l),
            (e.exports.MessageType = h),
            (e.exports.MessageOutcome = d),
            (e.exports.MessageUserCosType = p),
            (e.exports.ReplicationGroupMessageId = n),
            (e.exports.RgmidFactory = r);
        },
        2615: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageCacheStatus = n.new({
            LIVE: 0,
            CACHED: 1,
            SUSPECT: 2,
          });
        },
        969: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageDeliveryModeType = n.new({
            DIRECT: 0,
            PERSISTENT: 1,
            NON_PERSISTENT: 2,
          });
        },
        1012: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageDumpFlag = n.new({
            MSGDUMP_BRIEF: 0,
            MSGDUMP_FULL: 1,
          });
        },
        1983: (e, t, s) => {
          const n = s(1880),
            r = s(8292),
            { Destination: i } = s(3170),
            { LOG_ERROR: o } = s(390),
            { Long: a } = s(840),
            { MessageCacheStatus: c } = s(2615),
            { MessageDeliveryModeType: u } = s(969),
            { MessageDumpFlag: l } = s(1012),
            { MessageUserCosType: h } = s(95),
            { SDTMapContainer: d, SDTFieldType: p } = s(7252),
            { StringUtils: _ } = s(7882),
            E = {
              fpDestination(e) {
                const t = e.getDestination();
                return null !== t && t instanceof i
                  ? ["Destination", !0, t.toString(), null]
                  : ["Destination", !1, "", null];
              },
              fpSenderId: (e) => [
                "SenderId",
                void 0 !== e.getSenderId() && null !== e.getSenderId(),
                e.getSenderId(),
                null,
              ],
              fpAppmsgType: (e) => [
                "AppMessageType",
                void 0 !== e.getApplicationMessageType() &&
                  null !== e.getApplicationMessageType(),
                e.getApplicationMessageType(),
                null,
              ],
              fpAppMsgId: (e) => [
                "AppMessageID",
                void 0 !== e.getApplicationMessageId() &&
                  null !== e.getApplicationMessageId(),
                e.getApplicationMessageId(),
                null,
              ],
              fpSequenceNumber(e) {
                const t = e.getSequenceNumber();
                return "number" == typeof t
                  ? ["SequenceNumber", !0, t, null]
                  : ["SequenceNumber", !1, "", null];
              },
              fpTopicSequenceNumber(e) {
                const t = e.getTopicSequenceNumber();
                return a.isLong(t)
                  ? ["TopicSequenceNumber", !0, t.toString(), null]
                  : ["TopicSequenceNumber", !1, "", null];
              },
              fpCorrelationId: (e) => [
                "CorrelationId",
                void 0 !== e.getCorrelationId() &&
                  null !== e.getCorrelationId(),
                e.getCorrelationId(),
                null,
              ],
              fpHttpContentType: () => ["HTTP Content Type", !1, void 0, null],
              fpHttpContentEncoding: () => [
                "HTTP Content Encoding",
                !1,
                void 0,
                null,
              ],
              fpSendTimestamp(e) {
                const t = e.getSenderTimestamp();
                return "number" == typeof t
                  ? [
                      "SendTimestamp",
                      !0,
                      `${t} (${r.MessageDumpUtil.formatDate(t)})`,
                      null,
                    ]
                  : ["SendTimestamp", !1, "", null];
              },
              fpRcvTimestamp(e) {
                const t = e.getReceiverTimestamp();
                return "number" == typeof t
                  ? [
                      "RcvTimestamp",
                      !0,
                      `${t} (${r.MessageDumpUtil.formatDate(t)})`,
                      null,
                    ]
                  : ["RcvTimestamp", !1, "", null];
              },
              fpClassOfService: (e) =>
                "number" == typeof e.getUserCos()
                  ? ["Class Of Service", !0, h.nameOf(e.getUserCos()), null]
                  : ["Class Of Service", !1, "", null],
              fpDeliveryMode: (e) =>
                "number" == typeof e.getDeliveryMode()
                  ? ["DeliveryMode", !0, u.nameOf(e.getDeliveryMode()), null]
                  : ["DeliveryMode", !1, "", null],
              fpGuaranteedMsgId(e) {
                const t = e.getGuaranteedMessageId();
                return a.isLong(t)
                  ? ["Message Id", !0, t.toString(10), null]
                  : ["Message Id", !1, "", null];
              },
              fpReplicationGroupMessageId(e) {
                const t = e.getReplicationGroupMessageId();
                return void 0 === t
                  ? ["Replication Group Message Id", !1, "", null]
                  : ["Replication Group Message Id", !0, t.toString(), null];
              },
              fpTimeToLive(e) {
                const t = e.getTimeToLive();
                if ("number" == typeof t) {
                  const e = r.MessageDumpUtil,
                    s = new Date();
                  return [
                    "TimeToLive",
                    !0,
                    `${t} (${e.formatDate(s.getTime() + t)})`,
                    null,
                  ];
                }
                return ["TimeToLive", !1, "", null];
              },
              fpExpiration(e) {
                const t = e.getGMExpiration();
                return "number" == typeof t
                  ? [
                      "Expiration",
                      !0,
                      `${t} (${r.MessageDumpUtil.formatDate(t)})`,
                      null,
                    ]
                  : ["Expiration", !1, "", null];
              },
              fpMessageDMQEligible: (e) => [
                "DMQ Eligible",
                e.isDMQEligible(),
                "",
                null,
              ],
              fpMessageRedelivered: (e) => [
                "Message Re-delivered",
                e.isRedelivered(),
                "",
                null,
              ],
              fpMessageDeliveryCount(e) {
                try {
                  return [
                    "Message Delivery Count",
                    !0,
                    e.getDeliveryCount(),
                    null,
                  ];
                } catch (e) {
                  return ["Message Delivery Count", !1, "", null];
                }
              },
              fpDiscardIndication: (e) => [
                "Discard Indication",
                e.isDiscardIndication(),
                "",
                null,
              ],
              fpAckImmediately: (e) => [
                "ACK Immediately",
                e.isAcknowledgeImmediately(),
                "",
                null,
              ],
              fpElidingEligible: (e) => [
                "Eliding Eligible",
                e.isElidingEligible(),
                "",
                null,
              ],
              fpReplyMessage: (e) => [
                "Reply Message",
                e.isReplyMessage(),
                "",
                null,
              ],
              fpReplyTo(e) {
                const t = e.getReplyTo();
                return null !== t && t instanceof i
                  ? ["ReplyTo", !0, t.toString(), null]
                  : ["ReplyTo", !1, "", null];
              },
              fpDeliverToOne: (e) => [
                "Deliver To One",
                e.isDeliverToOne(),
                "",
                null,
              ],
              fpCacheMessage: (e) => [
                "Message from cache",
                e.getCacheStatus() !== c.LIVE,
                "",
                null,
              ],
              fpCacheRequestId(e) {
                const t = e.getCacheRequestId();
                return "number" == typeof t
                  ? ["Cache Request Id", !0, t, null]
                  : ["Cache Request Id", !1, "", null];
              },
              fpUserPropertyMap(e, t) {
                const s = e.getUserPropertyMap();
                if (null !== s && s instanceof d) {
                  const e = `${s.getKeys().length} entries`;
                  let n = null;
                  if (t === l.MSGDUMP_FULL)
                    try {
                      n = r.MessageDumpUtil.printMap(s, 2);
                    } catch (e) {
                      o(e.message, e.stack), (n = "Error");
                    }
                  return ["User Property Map", !0, e, n];
                }
                return ["User Property Map", !1, "", null];
              },
              fpCorrelationTag(e) {
                const t = e.getCorrelationKey();
                return ["Correlation Tag Pointer", null != t, t, null];
              },
              fpUserData: (e) =>
                _.notEmpty(e.getUserData())
                  ? [
                      "User Data",
                      !0,
                      `len=${e.getUserData().length}`,
                      n.Debug.formatDumpBytes(e.getUserData(), !0, 2),
                    ]
                  : ["User Data", !1, "", null],
              fpSdtStream(e, t) {
                const s = e.getSdtContainer();
                if (null !== s && s.getType() === p.STREAM) {
                  const e = r.MessageDumpUtil,
                    n = `${e.countItems(s.getValue())} entries`;
                  let i = null;
                  if (t === l.MSGDUMP_FULL)
                    try {
                      i = e.printStream(s.getValue(), 2);
                    } catch (e) {
                      o(e.message, e.stack), (i = "Error");
                    }
                  return ["SDT Stream", !0, n, i];
                }
                return ["SDT Stream", !1, "", null];
              },
              fpSdtMap(e, t) {
                const s = e.getSdtContainer();
                if (null !== s && s.getType() === p.MAP) {
                  const e = `${s.getValue().getKeys().length} entries`;
                  let n = null;
                  if (t === l.MSGDUMP_FULL)
                    try {
                      n = r.MessageDumpUtil.printMap(s.getValue(), 2);
                    } catch (e) {
                      o(e.message, e.stack), (n = "Error");
                    }
                  return ["SDT Map", !0, e, n];
                }
                return ["SDT Map", !1, "", null];
              },
              fpBinaryAttachment(e, t) {
                if (!e._binaryAttachment || e._binaryAttachment.length < 1)
                  return ["Binary Attachment", !1, "", null];
                const s = e._binaryAttachment.toString("latin1"),
                  r = `len=${s.length}`;
                let i = null;
                return (
                  t === l.MSGDUMP_FULL &&
                    (i = n.Debug.formatDumpBytes(s, !0, 2)),
                  ["Binary Attachment", !0, r, i]
                );
              },
              fpXmlContent(e, t) {
                const s = e.getXmlContent();
                if (_.notEmpty(s)) {
                  const e = `len=${s.length}`;
                  let r = null;
                  return (
                    t === l.MSGDUMP_FULL &&
                      (r = n.Debug.formatDumpBytes(s, !0, 2)),
                    ["XML", !0, e, r]
                  );
                }
                return ["XML", !1, "", null];
              },
              fpXmlMetadata(e, t) {
                const s = e.getXmlMetadata();
                if (_.notEmpty(s)) {
                  const e = `len=${s.length}`;
                  let r = null;
                  return (
                    t === l.MSGDUMP_FULL &&
                      (r = n.Debug.formatDumpBytes(s, !0, 2)),
                    ["XML Metadata", !0, e, r]
                  );
                }
                return ["XML Metadata", !1, "", null];
              },
              fpTracingCreationContext(e, t) {
                const s = e.getCreationContext(),
                  n =
                    null != s &&
                    null != s.getTraceId() &&
                    null != s.getSpanId();
                let r = null;
                return (
                  t &&
                    t === l.MSGDUMP_FULL &&
                    (r = null != s ? s.toString() : null),
                  ["Tracing CreationContext", n, r, null]
                );
              },
              fpTracingTransportContext(e, t) {
                const s = e.getTransportContext(),
                  n =
                    null != s &&
                    null != s.getTraceId() &&
                    null != s.getSpanId();
                let r = null;
                return (
                  t &&
                    t === l.MSGDUMP_FULL &&
                    (r = null != s ? s.toString() : null),
                  ["Trace Context SMF Parameter", n, r, null]
                );
              },
              fpTracingBaggage(e, t) {
                const s =
                  null != e.getBaggage() && null != e.getBaggage().getBaggage();
                let n = null;
                if (t && t === l.MSGDUMP_FULL) {
                  const t = e.getBaggage();
                  n = null != t ? t.getBaggage() : null;
                }
                return ["Tracing Baggage", s, n, null];
              },
            };
          e.exports.MessageDumpStandardProvider = E;
        },
        8292: (e, t, s) => {
          const n = s(1880),
            r = s(1983),
            {
              SDTFieldType: i,
              SDTMapContainer: o,
              SDTStreamContainer: a,
              SDTUnsupportedValueError: c,
              SDTValueErrorSubcode: u,
            } = s(7252),
            { Check: l } = s(2201),
            { ErrorSubcode: h, OperationError: d } = s(3870),
            { MessageDumpFlag: p } = s(1012),
            { StringBuffer: _, StringUtils: E } = s(7882),
            T = {
              get dumpProviders() {
                const e = r.MessageDumpStandardProvider;
                return Object.keys(e).map((t) => e[t]);
              },
            },
            g = {
              getOutOfRangeValue: (e) =>
                "string" == typeof e
                  ? `<out of range>\n${n.Debug.formatDumpBytes(e)}`
                  : `<out of range>\n${n.Debug.formatDumpBytes(e.toString("latin1"))}`,
              getValue(e) {
                let t = null;
                try {
                  return (t = e.getValue()), t;
                } catch (e) {
                  if (e instanceof c) {
                    if (e.getSubcode() === u.VALUE_OUTSIDE_SUPPORTED_RANGE)
                      return this.getOutOfRangeValue(e.getSourceData());
                  } else if (
                    e instanceof d &&
                    e.subcode === h.PARAMETER_INVALID_TYPE
                  )
                    return "<invalid type>";
                  throw e;
                }
              },
              printMap(e, t) {
                if (l.nothing(e) || !(e instanceof o)) return null;
                const s = [],
                  r = E.padRight("", t, " ");
                return (
                  e
                    .getKeys()
                    .sort()
                    .forEach((o) => {
                      const a = e.getField(o),
                        c = a.getType(),
                        u = this.getValue(a);
                      let l;
                      switch (c) {
                        case i.MAP:
                          l = `\n${this.printMap(u, t + 2)}`;
                          break;
                        case i.STREAM:
                          l = `\n${this.printStream(u, t + 2)}`;
                          break;
                        case i.BYTEARRAY:
                          (l = n.Debug.formatDumpBytes(
                            u.toString("latin1"),
                            !1,
                            0,
                          )),
                            null !== l &&
                              "\n" === l.substr(-1) &&
                              (l = l.substring(0, l.length - 1));
                          break;
                        default:
                          l = null !== u ? u.toString() : null;
                      }
                      s.push(`${r}Key '${o}' (${i.nameOf(c)}): ${l}`);
                    }),
                  s.join("\n")
                );
              },
              printStream(e, t) {
                if (l.nothing(e) || !(e instanceof a)) return null;
                e.rewind();
                const s = [],
                  r = E.padRight("", t, " ");
                for (; e.hasNext(); ) {
                  const o = e.getNext(),
                    a = o.getType(),
                    c = this.getValue(o);
                  let u;
                  switch (a) {
                    case i.MAP:
                      u = `\n${this.printMap(c, t + 2)}`;
                      break;
                    case i.STREAM:
                      u = `\n${this.printStream(c, t + 2)}`;
                      break;
                    case i.BYTEARRAY:
                      (u = n.Debug.formatDumpBytes(
                        c.toString("latin1"),
                        !1,
                        0,
                      )),
                        null !== u &&
                          "\n" === u.substr(-1) &&
                          (u = u.substring(0, u.length - 1));
                      break;
                    case i.DESTINATION:
                      u = c.toString();
                      break;
                    default:
                      u = null !== c ? c.toString() : null;
                  }
                  s.push(`${r}(${i.nameOf(a)}): ${u}`);
                }
                return e.rewind(), s.join("\n");
              },
              countItems(e) {
                if (l.nothing(e) || !(e instanceof a)) return 0;
                e.rewind();
                let t = 0;
                for (; e.hasNext(); ) e.getNext(), t++;
                return e.rewind(), t;
              },
              formatDate: (e) => new Date(e).toString(),
              dump(e, t, s, n) {
                const r = new _();
                let i = "\n",
                  o = !1,
                  a = 40;
                return (
                  null != s && "string" == typeof s && (i = s),
                  null != n && "number" == typeof n && (a = n),
                  T.dumpProviders.forEach((s, n) => {
                    const [c, u, l, h] = s(e, t);
                    u &&
                      (o && r.append(i),
                      null === l || 0 === l.length
                        ? r.append(c)
                        : (r.append(E.padRight(`${c}:`, a, " ")), r.append(l)),
                      null !== h &&
                        t & p.MSGDUMP_FULL &&
                        (r.append("\n"),
                        0 !== h.indexOf("  ") && r.append("  "),
                        r.append(h),
                        "\n" !== h.substr(-1) &&
                          n < T.dumpProviders.length - 1 &&
                          r.append("\n")),
                      (o = !0));
                  }),
                  r.toString()
                );
              },
            };
          e.exports.MessageDumpUtil = g;
        },
        5915: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageOutcome = n.new({
            ACCEPTED: 0,
            FAILED: 1,
            REJECTED: 3,
          });
        },
        165: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageType = n.new({
            BINARY: 0,
            MAP: 1,
            STREAM: 2,
            TEXT: 3,
          });
        },
        95: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MessageUserCosType = n.new({ COS1: 0, COS2: 1, COS3: 2 });
        },
        337: (e, t, s) => {
          const { clone: n } = s(7882),
            r = s(828),
            { Codec: i } = s(7252),
            { Convert: o } = s(840),
            { Destination: a } = s(3170),
            { ErrorSubcode: c, OperationError: u } = s(3870),
            { LOG_DEBUG: l, LOG_WARN: h } = s(390),
            { MessageCacheStatus: d } = s(2615),
            { MessageDeliveryModeType: p } = s(969),
            { MessageDumpFlag: _ } = s(1012),
            { MessageDumpUtil: E } = s(8292),
            { MessageType: T } = s(165),
            { MessageOutcome: g } = s(5915),
            { MessageUserCosType: S } = s(95),
            { Parameter: m } = s(2201),
            { RgmidFactory: f } = s(4097),
            {
              SDTField: I,
              SDTFieldType: R,
              SDTMapContainer: C,
              SDTUnsupportedValueError: A,
            } = s(7252),
            {
              Baggage: O,
              MessageTracingSupport: N,
              TraceContext: P,
              TraceContextSetter: D,
            } = s(4573),
            { ProfileBinding: y } = r,
            { utf8ToUcs2: b, anythingToBuffer: M } = o,
            {
              isBoolean: w,
              isEnumMember: v,
              isInstanceOf: L,
              isInstanceOfOrNothing: U,
              isNumberOrNothing: F,
              isStringOrNothing: x,
            } = m,
            B = { circular: !1, includeNonEnumerable: !1 };
          function G(e) {
            (e._deliveryMode = p.DIRECT),
              (e._userCos = S.COS1),
              (e._cacheStatus = d.LIVE),
              (e._spoolerUniqueId = void 0),
              (e._priority = void 0),
              (e._deliveryCount = -1),
              (e._traceContextSetter = null),
              (e._creationContext = null),
              (e._transportContext = null),
              (e._baggage = new O());
          }
          class k extends N {
            constructor() {
              super(), G(this);
            }
            getType() {
              return this._messageType || T.BINARY;
            }
            setApplicationMessageId(e) {
              this._applicationMessageId = x("applicationMessageId", e);
            }
            getApplicationMessageId() {
              return this._applicationMessageId;
            }
            setApplicationMessageType(e) {
              this._applicationMessageType = x("applicationMessageType", e);
            }
            getApplicationMessageType() {
              return this._applicationMessageType;
            }
            getBinaryAttachment() {
              return this._binaryAttachment && y.value.byteArrayAsString
                ? this._binaryAttachment.toString("latin1")
                : this._binaryAttachment;
            }
            setBinaryAttachment(e) {
              e && (this._messageType = T.BINARY),
                this._setBinaryAttachment(M(e));
            }
            _setBinaryAttachment(e) {
              this._binaryAttachment = e;
            }
            getCacheRequestId() {
              return this._cacheRequestId;
            }
            _setCacheRequestID(e) {
              this._cacheRequestId = e;
            }
            getCorrelationId() {
              return this._correlationId;
            }
            setCorrelationId(e) {
              this._correlationId = x("correlationId", e);
            }
            getCorrelationKey() {
              return this._correlationKey || null;
            }
            setCorrelationKey(e) {
              this._correlationKey = e;
            }
            isDeliverToOne() {
              return this._deliverToOne || !1;
            }
            setDeliverToOne(e) {
              this._setDeliverToOne(
                (this._deliverToOne = w("deliverToOne", e)),
              );
            }
            _setDeliverToOne(e) {
              this._deliverToOne = e;
            }
            getDeliveryMode() {
              return this._deliveryMode;
            }
            setDeliveryMode(e) {
              this._setDeliveryMode(v("deliveryMode", e, p));
            }
            _setDeliveryMode(e) {
              this._deliveryMode = e;
            }
            getDestination() {
              return this._destination;
            }
            setDestination(e) {
              this._setDestination(L("destination", e, a));
            }
            _setDestination(e) {
              this._destination = e;
            }
            isDiscardIndication() {
              return this._discardIndication || !1;
            }
            setDiscardIndication(e) {
              this._setDiscardIndication(w("discardIndication", e));
            }
            _setDiscardIndication(e) {
              this._discardIndication = e;
            }
            isElidingEligible() {
              return this._elidingEligible || !1;
            }
            setElidingEligible(e) {
              this._setElidingEligible(w("setElidingEligible", e));
            }
            _setElidingEligible(e) {
              this._elidingEligible = e;
            }
            getPublisherId() {
              return this._publisherId;
            }
            setPublisherId(e) {
              this._publisherId = e;
            }
            getPublisherMessageId() {
              return this._publisherMsgId;
            }
            setPublisherMessageId(e) {
              this._publisherMsgId = e;
            }
            getTimeToLive() {
              return this._timeToLive;
            }
            setTimeToLive(e) {
              if (null != e) {
                if ("number" != typeof e || isNaN(e))
                  throw new u(
                    "Invalid type for time to live",
                    c.PARAMETER_INVALID_TYPE,
                  );
                if (e < 0 || e > 31536e7)
                  throw new u(
                    "Invalid time to live value",
                    c.PARAMETER_OUT_OF_RANGE,
                  );
                this._timeToLive = e;
              } else this._timeToLive = e;
            }
            getGMExpiration() {
              return this._expiration;
            }
            setGMExpiration(e) {
              this._expiration = F("GMExpiration", e);
            }
            isDMQEligible() {
              return this._dmqEligible || !1;
            }
            setDMQEligible(e) {
              this._setDMQEligible(w("DMQEligible", e));
            }
            _setDMQEligible(e) {
              this._dmqEligible = e;
            }
            getFlowId() {
              return this._flowId;
            }
            setFlowId(e) {
              this._flowId = e;
            }
            getGuaranteedPreviousMessageId() {
              return this._guaranteedPrevMsgId;
            }
            setGuaranteedPreviousMessageId(e) {
              this._guaranteedPrevMsgId = e;
            }
            _setSpoolerUniqueId(e) {
              this._spoolerUniqueId = e;
            }
            _getSpoolerUniqueId() {
              return void 0 === this._spoolerUniqueId
                ? f.INVALID_SUID
                : this._spoolerUniqueId;
            }
            getMessageConsumer() {
              return this._consumer;
            }
            setMessageConsumer(e) {
              this._consumer = e;
            }
            getGuaranteedMessageId() {
              return this._guaranteedMsgId;
            }
            setGuaranteedMessageId(e) {
              this._guaranteedMsgId = e;
            }
            _setSpoolerMessageId(e) {
              this._spoolerMessageId = e;
            }
            getReplicationGroupMessageId() {
              if (
                void 0 === this._spoolerUniqueId ||
                f.INVALID_SUID.eq(this._spoolerUniqueId)
              )
                return;
              const e = this._spoolerMessageId || this._guaranteedMsgId;
              return f.from({ suid: this._spoolerUniqueId, msgid: e });
            }
            getTopicSequenceNumber() {
              return this._topicSequenceNumber;
            }
            setTopicSequenceNumber(e) {
              this._topicSequenceNumber = e;
            }
            getDeliveryCount() {
              if (-1 === this._deliveryCount)
                throw new u(
                  "Endpoint does not report delivery count.",
                  c.INVALID_OPERATION,
                );
              return this._deliveryCount;
            }
            setDeliveryCount(e) {
              this._deliveryCount = e;
            }
            settle(e) {
              if (this._acked)
                throw new u(
                  "Message can only be settled once",
                  c.MESSAGE_ALREADY_ACKNOWLEDGED,
                );
              if (this._deliveryMode === p.DIRECT)
                throw new u(
                  "Cannot settle a DIRECT message",
                  c.MESSAGE_DELIVERY_MODE_MISMATCH,
                );
              if (!this._consumer)
                throw new u(
                  "Cannot settle a locally-created message",
                  c.MESSAGE_DELIVERY_MODE_MISMATCH,
                );
              if (!this._consumer._sessionInterface.canAck)
                throw new u(
                  "Cannot settle using associated session",
                  c.SESSION_NOT_CONNECTED,
                );
              if (!this._consumer.canAck)
                throw new u(
                  "Cannot settle using associated Message Consumer",
                  c.INVALID_OPERATION,
                );
              if (this._consumer.getProperties().browser)
                throw new u(
                  "Messages delivered to a Queue Browser can only be deleted by calling QueueBrowser.removeMessageFromQueue()",
                  c.INVALID_OPERATION,
                );
              if (this._consumer._fsm.hasAutoAckSupport)
                return void h(
                  `Consumer configured to auto-acknowledge messages, so message ${this._guaranteedMsgId} cannot be application settled`,
                );
              const t = e;
              if (-1 === g.values.indexOf(t))
                throw new u(
                  "Settlement outcome for message must be valid",
                  c.INVALID_OPERATION,
                );
              const s = this._consumer
                .getProperties()
                .requiredSettlementOutcomes.some((e) => e === t);
              if (t != g.ACCEPTED && !s)
                throw new u(
                  `solace.MessageOutcome.${g.nameOf(t)} not supported for this Message Consumer`,
                  c.INVALID_OPERATION,
                );
              this._consumer.applicationSettle(this._guaranteedMsgId, t),
                (this._acked = !0);
            }
            get isSettled() {
              return this._acked || !1;
            }
            _validateBeforeAcknowledge() {
              if (this._acked)
                throw new u(
                  "Message can only be acknowledged once",
                  c.MESSAGE_ALREADY_ACKNOWLEDGED,
                );
              if (this._deliveryMode === p.DIRECT)
                throw new u(
                  "Cannot acknowledge a DIRECT message",
                  c.MESSAGE_DELIVERY_MODE_MISMATCH,
                );
              if (!this._consumer)
                throw new u(
                  "Cannot acknowledge a locally-created message",
                  c.MESSAGE_DELIVERY_MODE_MISMATCH,
                );
              if (!this._consumer._sessionInterface.canAck)
                throw new u(
                  "Cannot acknowledge using associated session",
                  c.SESSION_NOT_CONNECTED,
                );
              if (!this._consumer.canAck)
                throw new u(
                  "Cannot acknowledge using associated Message Consumer",
                  c.INVALID_OPERATION,
                );
              if (this._consumer.getProperties().browser)
                throw new u(
                  "Messages delivered to a Queue Browser can only be deleted by calling QueueBrowser.removeMessageFromQueue()",
                  c.INVALID_OPERATION,
                );
            }
            acknowledge() {
              this._validateBeforeAcknowledge(),
                this._consumer._fsm.hasAutoAckSupport
                  ? h(
                      `Consumer configured to auto-acknowledge messages, so message ${this._guaranteedMsgId} cannot be application acknowledge`,
                    )
                  : (this._consumer.applicationAck(this._guaranteedMsgId, !1),
                    (this._acked = !0));
            }
            _autoAcknowledge() {
              this._validateBeforeAcknowledge(),
                this._consumer.applicationAck(this._guaranteedMsgId, !0),
                (this._acked = !0);
            }
            get isAcknowledged() {
              return this._acked || !1;
            }
            isAcknowledgeImmediately() {
              return this._ackImmediately || !1;
            }
            setAcknowledgeImmediately(e) {
              this._setAcknowledgeImmediately(w("acknowledgeImmediately", e));
            }
            _setAcknowledgeImmediately(e) {
              this._ackImmediately = e;
            }
            getCacheStatus() {
              return this._cacheStatus;
            }
            _setCacheStatus(e) {
              this._cacheStatus = e;
            }
            isReplyMessage() {
              return this._replyMessage || !1;
            }
            isRedelivered() {
              return this._redelivered || !1;
            }
            setRedelivered(e) {
              this._redelivered = e;
            }
            setAsReplyMessage(e) {
              this._replyMessage = w("asReplyMessage", e);
            }
            getReceiverTimestamp() {
              return this._receiverTimestamp;
            }
            getReplyTo() {
              return this._replyTo;
            }
            setReplyTo(e) {
              this._replyTo = U("replyTo", e, a);
            }
            getSenderId() {
              return this._senderId;
            }
            setSenderId(e) {
              this._senderId = x("senderId", e);
            }
            getSenderTimestamp() {
              return this._senderTimestamp;
            }
            setSenderTimestamp(e) {
              this._senderTimestamp = F("senderTimestamp", e);
            }
            getSequenceNumber() {
              if (this._sequenceNumberError) throw this._sequenceNumberError;
              return this._sequenceNumber;
            }
            setSequenceNumber(e) {
              e instanceof A
                ? (this._sequenceNumberError = e)
                : ((this._sequenceNumber = F("sequenceNumber", e)),
                  (this._sequenceNumberError = void 0),
                  (this._autoSequenceNumber = !1));
            }
            getUserCos() {
              return this._userCos;
            }
            getPriority() {
              return this._priority;
            }
            setUserCos(e) {
              this._setUserCos(v("userCos", e, S));
            }
            _setUserCos(e) {
              this._userCos = e;
            }
            setPriority(e) {
              if (null != e) {
                if ("number" != typeof e || isNaN(e))
                  throw new u(
                    "Invalid type for message priority",
                    c.PARAMETER_INVALID_TYPE,
                  );
                if (e < 0 || e > 255)
                  throw new u(
                    "Invalid priority value",
                    c.PARAMETER_OUT_OF_RANGE,
                  );
                this._setPriority(e);
              } else this._setPriority(void 0);
            }
            _setPriority(e) {
              this._priority = e;
            }
            getUserData() {
              return this._userData;
            }
            setUserData(e) {
              this._setUserData(x("userData", e));
            }
            _setUserData(e) {
              this._userData = e;
            }
            getXmlContent() {
              return this._xmlContent;
            }
            getXmlContentDecoded() {
              return this._xmlContent ? b(this._xmlContent) : this._xmlContent;
            }
            setXmlContent(e) {
              const t = x("xmlContent", e);
              this._xmlContent = t ? unescape(encodeURIComponent(t)) : t;
            }
            _setXmlContentInternal(e) {
              this._xmlContent = x("xmlContentInternal", e);
            }
            setXmlMetadata(e) {
              this._setXmlMetadata(x("xmlMetadata", e));
            }
            _setXmlMetadata(e) {
              this._xmlMetadata = e;
            }
            getXmlMetadata() {
              return this._xmlMetadata;
            }
            get binaryMetadataChunk() {
              return this._binaryMetaChunk || null;
            }
            set binaryMetadataChunk(e) {
              this._binaryMetaChunk = e;
            }
            get smfHeader() {
              return this._smfHeader;
            }
            set smfHeader(e) {
              this._smfHeader = e;
            }
            get hasAutoSequenceNumber() {
              return this._autoSequenceNumber || !1;
            }
            set hasAutoSequenceNumber(e) {
              this._autoSequenceNumber = e;
            }
            get hasAutoSenderTimestamp() {
              return this._autoSenderTimestamp || !1;
            }
            set hasAutoSenderTimestamp(e) {
              this._autoSenderTimestamp = e;
            }
            getUserPropertyMap() {
              return this._userPropertyMap;
            }
            setUserPropertyMap(e) {
              this._userPropertyMap = U("userPropertyMap", e, C);
            }
            setSdtContainer(e) {
              const t = U("sdtContainer", e, I);
              if (null == t)
                return (
                  (this._structuredContainer = null),
                  void this.setBinaryAttachment(null)
                );
              switch ((this._setBinaryAttachment(null), t.getType())) {
                case R.MAP:
                  this._messageType = T.MAP;
                  break;
                case R.STREAM:
                  this._messageType = T.STREAM;
                  break;
                case R.STRING:
                  this._messageType = T.TEXT;
                  break;
                default:
                  throw new u(
                    "Invalid parameter: expected SDTField Type of MAP, STREAM, or STRING.",
                    c.PARAMETER_INVALID_TYPE,
                  );
              }
              this._structuredContainer = t;
            }
            getSdtContainer() {
              const e = this.getType(),
                t = this._binaryAttachment,
                s = t ? t.length : 0;
              return e === T.BINARY
                ? null
                : (void 0 !== this._structuredContainer ||
                    (this._structuredContainer =
                      0 === s ? null : i.parseSingleElement(t, 0)),
                  this._structuredContainer);
            }
            getSequenceNumber() {
              if (this._sequenceNumberError) throw this._sequenceNumberError;
              return this._sequenceNumber;
            }
            getTraceContextSetter() {
              return super.getTraceContextSetter();
            }
            getCreationContext() {
              return super.getCreationContext();
            }
            getTransportContext() {
              return super.getTransportContext();
            }
            setTransportContext(e) {
              super._setTransportContext(e);
            }
            getBaggage() {
              return super.getBaggage();
            }
            dump(e = _.MSGDUMP_FULL) {
              const t = v("flags", e, _);
              return E.dump(this, t);
            }
            clone() {
              return n(this, B);
            }
            reset() {
              var e;
              (e = this), Object.keys(e).forEach((t) => delete e[t]), G(this);
            }
            clearExtendedVarLenParams() {
              this._transportContext = null;
            }
          }
          (k.SOLCLIENT_USER_PROP_QUEUE_PARTITION_KEY = "JMSXGroupID"),
            (e.exports.Message = k);
        },
        4097: (e, t, s) => {
          const { ErrorSubcode: n, OperationError: r } = s(3870),
            { Long: i } = s(840),
            { Parameter: o } = s(2201),
            { ReplayStartLocation: a, ReplayStartType: c } = s(2604),
            u = s(8764).lW,
            l = "rmid1:",
            h = /^[0-9a-fA-F]{32}$/g,
            d = i.UZERO,
            { isString: p, isValue: _, isInstanceOf: E } = o;
          class T extends a {
            constructor(e, t) {
              super({
                _replayStartValue: { suid: e, messageId: t },
                _type: c.RGMID,
              }),
                (this._suid = e),
                (this._messageId = t);
            }
            compare(e) {
              E("otherReplicationGroupMessageId", e, T);
              const t = e;
              if (!this._suid.equals(t._suid)) {
                const e =
                  "Unable to compare Replication Group Message ID from different origins";
                throw new r(
                  `Parameter otherReplicationGroupMessageId[${t.toString()}] failed validation`,
                  n.MESSAGE_ID_NOT_COMPARABLE,
                  e,
                );
              }
              return this._messageId.gt(t._messageId)
                ? 1
                : this._messageId.lt(t._messageId)
                  ? -1
                  : 0;
            }
            inspect() {
              return `[Replication Group Message Id: ${this.toString()}]`;
            }
            toString() {
              const e = u
                .from(
                  this._suid.toBytesBE().concat(this._messageId.toBytesBE()),
                )
                .toString("hex");
              return `${l}${e.substring(0, 5)}-${e.substring(5, 16)}-${e.substring(16, 24)}-${e.substring(24, 32)}`;
            }
          }
          function g(e) {
            return new T(e.suid, e.msgid);
          }
          const S = {
            fromString: function (e) {
              if (
                (p("id", e),
                _(
                  "id",
                  e.length,
                  41,
                  n.PARAMETER_OUT_OF_RANGE,
                  `length expected: 41 but is ${e.length}`,
                ),
                !e.startsWith(l))
              )
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, does not start with ${l}`,
                );
              const t = e.substring(6).split("-");
              if (
                4 !== t.length ||
                5 !== t[0].length ||
                11 !== t[1].length ||
                8 !== t[2].length ||
                8 !== t[3].length
              )
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, does not have valid separation of components`,
                );
              const s = t.join("").trim();
              if ((h.test(""), !h.test(s)))
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, invalid data string value`,
                );
              let o;
              try {
                o = u.from(s, "hex");
              } catch (t) {
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, failed to read data, cause: ${t.message}`,
                );
              }
              const a = o ? o.length : 0;
              if (16 !== a)
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, failed to read data from id expected length of 16 got ${a}`,
                );
              const c = i.fromBits(o.readUInt32BE(4), o.readUInt32BE(0), !0);
              if (c.eq(d))
                throw new r(
                  "Parameter id has invalid Replication Group Message ID format",
                  n.PARAMETER_OUT_OF_RANGE,
                  `id: ${e}, has invalid origin`,
                );
              return g({
                suid: c,
                msgid: i.fromBits(o.readUInt32BE(12), o.readUInt32BE(8), !0),
              });
            },
          };
          (S.from = g),
            (S.INVALID_SUID = d),
            (e.exports.ReplicationGroupMessageId = T),
            (e.exports.RgmidFactory = S);
        },
        5754: (e, t, s) => {
          const { AbstractQueueDescriptor: n } = s(1018),
            { QueueAccessType: r } = s(7914),
            { QueueDescriptor: i } = s(8122),
            { QueueDescriptorValidator: o } = s(5847),
            { QueueDiscardBehavior: a } = s(9388),
            { QueuePermissions: c } = s(5240),
            { QueueProperties: u } = s(4623),
            { QueuePropertiesValidator: l } = s(2815),
            { QueueType: h } = s(1239);
          (e.exports.AbstractQueueDescriptor = n),
            (e.exports.QueueAccessType = r),
            (e.exports.QueueDescriptor = i),
            (e.exports.QueueDescriptorValidator = o),
            (e.exports.QueueDiscardBehavior = a),
            (e.exports.QueuePermissions = c),
            (e.exports.QueueProperties = u),
            (e.exports.QueuePropertiesValidator = l),
            (e.exports.QueueType = h);
        },
        1018: (e, t, s) => {
          const { APIProperties: n } = s(7882),
            { DestinationType: r } = s(3170),
            { OperationError: i, ErrorSubcode: o } = s(3870),
            { QueueType: a } = s(1239),
            c = { durable: !0, type: void 0 },
            u = { [a.QUEUE]: "queue", [a.TOPIC_ENDPOINT]: "topic endpoint" },
            l = {
              [r.TOPIC]: null,
              [r.QUEUE]: a.QUEUE,
              [r.TEMPORARY_QUEUE]: a.QUEUE,
            };
          e.exports.AbstractQueueDescriptor = class extends n {
            constructor(e) {
              super(
                c,
                (function (e) {
                  if (e && e.name && e.type && r.values.includes(e.type)) {
                    if (!l[e.type])
                      throw new i(
                        `Cannot create a descriptor from a ${r.describe(e.type)} destination`,
                        o.PARAMETER_CONFLICT,
                      );
                    return {
                      name: e.name,
                      type: a.QUEUE,
                      durable: e.type !== r.TEMPORARY_QUEUE,
                    };
                  }
                  return e;
                })(e),
              );
            }
            getType() {
              return this._type;
            }
            get type() {
              return this.getType();
            }
            set type(e) {
              this._type = e;
            }
            isDurable() {
              return this._durable;
            }
            get durable() {
              return this.isDurable();
            }
            set durable(e) {
              this._durable = e;
            }
            inspect() {
              return { type: this.type, durable: this.durable };
            }
            toString() {
              return (
                (this.isDurable() ? "" : "non") +
                "-durable " +
                `${u[this.getType()]}`
              );
            }
          };
        },
        7914: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.QueueAccessType = n.new({
            EXCLUSIVE: "EXCLUSIVE",
            NONEXCLUSIVE: "NONEXCLUSIVE",
          });
        },
        5847: (e, t, s) => {
          const { APIPropertiesValidators: n } = s(7882),
            { QueueDescriptor: r } = s(8122),
            { QueueType: i } = s(1239),
            {
              validateInstance: o,
              valBoolean: a,
              valIsMember: c,
              valTopicString: u,
            } = n,
            l = {
              validate(e) {
                const t = o.bind(null, "QueueDescriptor", e);
                e instanceof r && t("name", [u]),
                  t("type", [c, i, "QueueType"]),
                  t("durable", [a]);
              },
            };
          e.exports.QueueDescriptorValidator = l;
        },
        8122: (e, t, s) => {
          const { AbstractQueueDescriptor: n } = s(1018),
            { Destination: r } = s(3170),
            i = { name: void 0, durable: !0 };
          class o extends n {
            constructor(e) {
              super(
                e instanceof r
                  ? { name: e.name, type: e.type }
                  : Object.assign({}, i, e),
              );
            }
            getName() {
              return this._name;
            }
            get name() {
              return this.getName();
            }
            set name(e) {
              this._name = e;
            }
            inspect() {
              return {
                name: this.name,
                type: this.type,
                durable: this.durable,
              };
            }
            toString() {
              return `${super.toString()} '${this.getName() || ""}'`;
            }
            static createFromSpec(e) {
              return e.name ? new o(e) : n(e);
            }
          }
          e.exports.QueueDescriptor = o;
        },
        9388: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.QueueDiscardBehavior = n.new({
            NOTIFY_SENDER_ON: "NOTIFY_SENDER_ON",
            NOTIFY_SENDER_OFF: "NOTIFY_SENDER_OFF",
          });
        },
        5240: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.QueuePermissions = n.new({
            NONE: "NONE",
            READ_ONLY: "READ_ONLY",
            CONSUME: "CONSUME",
            MODIFY_TOPIC: "MODIFY_TOPIC",
            DELETE: "DELETE",
          });
        },
        2815: (e, t, s) => {
          const { APIPropertiesValidators: n } = s(7882),
            { QueueAccessType: r } = s(7914),
            { QueueDiscardBehavior: i } = s(9388),
            { QueuePermissions: o } = s(5240),
            {
              validateInstance: a,
              valBoolean: c,
              valIsMember: u,
              valNumber: l,
              valRange: h,
            } = n,
            d = {
              validate(e) {
                const t = a.bind(null, "QueueProperties", e);
                void 0 !== e.permissions &&
                  null !== e.permissions &&
                  t("permissions", [u, o, "QueuePermissions"]),
                  void 0 !== e.accessType &&
                    null !== e.accessType &&
                    t("accessType", [u, r, "QueueAccessType"]),
                  void 0 !== e.quotaMB &&
                    null !== e.quotaMB &&
                    t("quotaMB", [l], [h, 0, Number.POSITIVE_INFINITY]),
                  void 0 !== e.maxMessageSize &&
                    null !== e.maxMessageSize &&
                    t("maxMessageSize", [l], [h, 0, Number.POSITIVE_INFINITY]),
                  void 0 !== e.respectsTTL &&
                    null !== e.respectsTTL &&
                    t("respectsTTL", [c]),
                  void 0 !== e.discardBehavior &&
                    null !== e.discardBehavior &&
                    t("discardBehavior", [u, i, "QueueDiscardBehavior"]),
                  void 0 !== e.maxMessageRedelivery &&
                    null !== e.maxMessageRedelivery &&
                    t("maxMessageRedelivery", [l], [h, 0, 255]);
              },
            };
          e.exports.QueuePropertiesValidator = d;
        },
        4623: (e, t, s) => {
          var n = s(9489);
          const { APIProperties: r } = s(7882),
            { QueueAccessType: i } = s(7914),
            { QueueDiscardBehavior: o } = s(9388),
            { QueuePermissions: a } = s(5240),
            c = {
              permissions: void 0,
              accessType: void 0,
              quotaMB: void 0,
              maxMessageSize: void 0,
              respectsTTL: void 0,
              discardBehavior: void 0,
              maxMessageRedelivery: void 0,
            };
          e.exports.QueueProperties = class extends r {
            constructor(e) {
              super(c, e);
            }
            get permissions() {
              return this._permissions;
            }
            set permissions(e) {
              this._permissions = e;
            }
            get accessType() {
              return this._accessType || c.accessType;
            }
            set accessType(e) {
              this._accessType = e;
            }
            get quotaMB() {
              return this._quotaMB;
            }
            set quotaMB(e) {
              this._quotaMB = e;
            }
            get maxMessageSize() {
              return this._maxMessageSize;
            }
            set maxMessageSize(e) {
              this._maxMessageSize = e;
            }
            get respectsTTL() {
              return this._respectsTTL;
            }
            set respectsTTL(e) {
              this._respectsTTL = e;
            }
            get discardBehavior() {
              return this._discardBehavior;
            }
            set discardBehavior(e) {
              this._discardBehavior = e;
            }
            get maxMessageRedelivery() {
              return this._maxMessageRedelivery;
            }
            set maxMessageRedelivery(e) {
              this._maxMessageRedelivery = e;
            }
            inspect() {
              return {
                permissions: a.describe(this.permissions),
                accessType: i.describe(this.accessType),
                quotaMB: this.quotaMB,
                maxMessageSize: this.maxMessageSize,
                respectsTTL: this.respectsTTL,
                discardBehavior: this.discardBehavior
                  ? o.describe(this.discardBehavior)
                  : "undefined",
                maxMessageRedelivery: this.maxMessageRedelivery,
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        1239: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.QueueType = n.new({
            QUEUE: "QUEUE",
            TOPIC_ENDPOINT: "TOPIC_ENDPOINT",
          });
        },
        2604: (e, t, s) => {
          const { Parameter: n } = s(2201),
            { ReplayStartLocation: r, ReplayStartType: i } = s(7517),
            { ReplayStartLocationBeginning: o } = s(5017),
            { ReplayStartLocationDate: a } = s(4994),
            { SolclientFactory: c } = s(828);
          (e.exports.ReplayStartLocation = r),
            (e.exports.ReplayStartLocationBeginning = o),
            (e.exports.ReplayStartLocationDate = a),
            (e.exports.ReplayStartType = i),
            (c.createReplayStartLocationBeginning = c.createFactory(
              () => new o(),
            )),
            (c.createReplayStartLocationDate = c.createFactory((e) =>
              a.createReplayStartLocationDate(n.isInstanceOf("date", e, Date)),
            ));
        },
        7517: (e, t, s) => {
          var n = s(9489);
          const { Enum: r } = s(9359),
            i = r.new({ BEGINNING: 0, DATE: 1, RGMID: 2 });
          (e.exports.ReplayStartLocation = class {
            constructor(e) {
              Object.assign(this, e),
                void 0 === this._type && (this._type = i.BEGINNING);
            }
            toString() {
              return n(this);
            }
          }),
            (e.exports.ReplayStartType = i);
        },
        5017: (e, t, s) => {
          const { ReplayStartLocation: n, ReplayStartType: r } = s(7517);
          e.exports.ReplayStartLocationBeginning = class extends n {
            constructor() {
              super({ _type: r.BEGINNING });
            }
            static inspect() {
              return "BEGINNING";
            }
          };
        },
        4994: (e, t, s) => {
          const { ReplayStartLocation: n, ReplayStartType: r } = s(7517);
          class i extends n {
            constructor(e) {
              super({ _replayStartValue: e.getTime(), _type: r.DATE });
            }
            inspect() {
              return `[Epoch Time: ${this._replayStartValue}]`;
            }
            static createReplayStartLocationDate(e) {
              return new i(e);
            }
          }
          e.exports.ReplayStartLocationDate = i;
        },
        7252: (e, t, s) => {
          const { Codec: n } = s(6646),
            { SDTDestType: r } = s(9080),
            { SDTField: i } = s(3971),
            { SDTFieldType: o } = s(6387),
            { SDTMapContainer: a } = s(1287),
            { SDTStreamContainer: c } = s(5341),
            { SDTUnsupportedValueError: u } = s(7598),
            { SDTValueErrorSubcode: l } = s(7014);
          (e.exports.Codec = n),
            (e.exports.SDTDestType = r),
            (e.exports.SDTField = i),
            (e.exports.SDTFieldType = o),
            (e.exports.SDTMapContainer = a),
            (e.exports.SDTStreamContainer = c),
            (e.exports.SDTUnsupportedValueError = u),
            (e.exports.SDTValueErrorSubcode = l);
        },
        6646: (e, t, s) => {
          const { EncodeSingleElement: n } = s(2529),
            { IEEE754LIB: r } = s(1454),
            { ParseSingleElement: i, StringToBuffer: o } = s(3967),
            { encodeSingleElement: a } = n,
            { parseSingleElement: c } = i,
            { stringToBuffer: u } = o,
            l = {
              encodeSingleElement: a,
              parseSingleElement: c,
              stringToBuffer: u,
              IEEE754LIB: r,
            };
          e.exports.Codec = l;
        },
        8992: (e, t, s) => {
          const { Convert: n } = s(840),
            { SDTDataTypes: r } = s(7155),
            i = {
              encodeHeader: function (e, t) {
                let s = (e << 2) & 255,
                  i = null;
                return (
                  e === r.Map || e === r.Stream
                    ? ((i = n.int32ToStr(t + 5)), (s |= 3))
                    : t + 2 <= 255
                      ? ((i = n.int8ToStr(t + 2)), (s |= 0))
                      : t + 3 <= 65535
                        ? ((i = n.int16ToStr(t + 3)), (s |= 1))
                        : ((i = n.int32ToStr(t + 5)), (s |= 3)),
                  n.int8ToStr(s) + i
                );
              },
            };
          e.exports.EncodeHeader = i;
        },
        2214: (e) => {
          const t = {
            int48ToStr: function (e) {
              let t = e;
              const s = [];
              for (let e = 0; e < 6; e++) {
                const e = t % 256;
                (t = Math.floor(t / 256)), s.push(String.fromCharCode(e));
              }
              return s.reverse(), s.join("");
            },
          };
          e.exports.EncodeInteger = t;
        },
        7187: (e, t, s) => {
          const n = s(2529),
            r = s(7882),
            { EncodeHeader: i } = s(8992),
            { SDTDataTypes: o } = s(7155),
            { SDTMapContainer: a } = s(1287),
            { encodeHeader: c } = i,
            u = {
              encodeMap(e) {
                const t = [];
                if (!(e instanceof a)) return null;
                const s = e.getKeys();
                let i,
                  u = null,
                  l = null,
                  h = null;
                for (i = 0; i < s.length; i++)
                  (u = e.getField(s[i])),
                    u &&
                      ((h = r.StringUtils.nullTerminate(s[i])),
                      (l = c(o.String, h.length)),
                      (l += h),
                      t.push(l),
                      n.EncodeSingleElement.encodeSingleElementToBuf(u, t));
                return t.join("");
              },
            };
          e.exports.EncodeMap = u;
        },
        2529: (e, t, s) => {
          const n = s(3170),
            { Convert: r } = s(840),
            { EncodeHeader: i } = s(8992),
            { EncodeInteger: o } = s(2214),
            { EncodeMap: a } = s(7187),
            { EncodeStream: c } = s(7678),
            { IEEE754LIB: u } = s(1454),
            { SDTDataTypes: l } = s(7155),
            { SDTDestType: h } = s(9080),
            { SDTField: d } = s(3971),
            { SDTFieldType: p } = s(6387),
            { StringUtils: _ } = s(7882),
            { encodeHeader: E } = i,
            { int48ToStr: T } = o,
            { encodeMap: g } = a,
            { encodeStream: S } = c,
            { nullTerminate: m } = _,
            f = Math.pow(2, 48);
          function I(e, t) {
            if (!(e instanceof d)) return !1;
            const s = e.getValue();
            let i = null,
              o = 0;
            switch (e.getType()) {
              case p.BOOL:
                (o = l.Boolean), (i = r.int8ToStr(s ? 1 : 0));
                break;
              case p.UINT8:
                (o = l.UnsignedInteger), (i = r.int8ToStr(s));
                break;
              case p.INT8:
                (o = l.Integer), (i = r.int8ToStr(s));
                break;
              case p.UINT16:
                (o = l.UnsignedInteger), (i = r.int16ToStr(s));
                break;
              case p.INT16:
                (o = l.Integer), (i = r.int16ToStr(s));
                break;
              case p.UINT32:
                (o = l.UnsignedInteger), (i = r.int32ToStr(s));
                break;
              case p.INT32:
                (o = l.Integer), (i = r.int32ToStr(s));
                break;
              case p.UINT64:
                (o = l.UnsignedInteger),
                  (i = String.fromCharCode(0) + String.fromCharCode(0) + T(s));
                break;
              case p.INT64:
                (o = l.Integer),
                  (i =
                    s >= 0
                      ? String.fromCharCode(0) + String.fromCharCode(0) + T(s)
                      : String.fromCharCode(255) +
                        String.fromCharCode(255) +
                        T(f + s));
                break;
              case p.WCHAR:
                (o = l.Char), (i = r.int16ToStr(s.charCodeAt(0)));
                break;
              case p.STRING:
                (o = l.String), (i = m(unescape(encodeURIComponent(s))));
                break;
              case p.BYTEARRAY:
                (o = l.ByteArray), (i = s.toString("latin1"));
                break;
              case p.FLOATTYPE:
                (o = l.Float), (i = u.toIEEE754Single(s));
                break;
              case p.DOUBLETYPE:
                (o = l.Float), (i = u.toIEEE754Double(s));
                break;
              case p.MAP:
                (o = l.Map), (i = g(s));
                break;
              case p.STREAM:
                (o = l.Stream), (i = S(s));
                break;
              case p.DESTINATION:
                (o = l.Destination),
                  s instanceof n.Destination &&
                    (i = r.int8ToStr(h[s.getType()]) + s.getBytes());
                break;
              case p.NULLTYPE:
                (o = l.Null), (i = "");
                break;
              case p.UNKNOWN:
                i = null;
            }
            if (null !== i) {
              const e = E(o, i.length);
              return t.push(e), t.push(i), !0;
            }
            return !1;
          }
          const R = {
            encodeSingleElement: function (e) {
              const t = [];
              return I(e, t), t.join("");
            },
            encodeSingleElementToBuf: I,
          };
          e.exports.EncodeSingleElement = R;
        },
        7678: (e, t, s) => {
          const n = s(2529),
            { SDTStreamContainer: r } = s(5341),
            i = {
              encodeStream: function (e) {
                const t = [];
                if (!(e instanceof r)) return null;
                let s = null;
                for (; e.hasNext(); )
                  (s = e.getNext()),
                    s && n.EncodeSingleElement.encodeSingleElementToBuf(s, t);
                return t.join("");
              },
            };
          e.exports.EncodeStream = i;
        },
        1454: (e) => {
          const t = {
            toIEEE754(e, t, s) {
              let n = e;
              const r = (1 << (t - 1)) - 1;
              let i, o, a;
              if (isNaN(n)) (o = (1 << r) - 1), (a = 1), (i = 0);
              else if (n === 1 / 0 || n === -1 / 0)
                (o = (1 << r) - 1), (a = 0), (i = n < 0 ? 1 : 0);
              else if (0 === n) (o = 0), (a = 0), (i = 1 / n == -1 / 0 ? 1 : 0);
              else if (
                ((i = n < 0), (n = Math.abs(n)), n >= Math.pow(2, 1 - r))
              ) {
                const e = Math.min(Math.floor(Math.log(n) / Math.LN2), r);
                (o = e + r), (a = n * Math.pow(2, s - e) - Math.pow(2, s));
              } else (o = 0), (a = n / Math.pow(2, 1 - r - s));
              const c = [];
              for (let e = s; e; e -= 1)
                c.push(a % 2 ? 1 : 0), (a = Math.floor(a / 2));
              for (let e = t; e; e -= 1)
                c.push(o % 2 ? 1 : 0), (o = Math.floor(o / 2));
              c.push(i ? 1 : 0), c.reverse();
              let u = c.join("");
              const l = [];
              for (; u.length; )
                l.push(parseInt(u.substring(0, 8), 2)), (u = u.substring(8));
              return l;
            },
            fromIEEE754(e, t, s) {
              const n = [];
              for (let t = e.length; t; t -= 1) {
                let s = e[t - 1];
                for (let e = 8; e; e -= 1) n.push(s % 2 ? 1 : 0), (s >>= 1);
              }
              n.reverse();
              const r = n.join(""),
                i = (1 << (t - 1)) - 1,
                o = parseInt(r.substring(0, 1), 2) ? -1 : 1,
                a = parseInt(r.substring(1, 1 + t), 2),
                c = parseInt(r.substring(1 + t), 2);
              return a === (1 << t) - 1
                ? 0 !== c
                  ? NaN
                  : o * (1 / 0)
                : a > 0
                  ? o * Math.pow(2, a - i) * (1 + c / Math.pow(2, s))
                  : 0 !== c
                    ? o * Math.pow(2, -(i - 1)) * (c / Math.pow(2, s))
                    : 0;
            },
            strToByteArr(e) {
              const t = [];
              for (let s = 0; s < e.length; s++) t.push(255 & e.charCodeAt(s));
              return t;
            },
            byteArrToStr(e) {
              const t = [];
              for (let s = 0; s < e.length; s++)
                t.push(String.fromCharCode(255 & e[s]));
              return t.join("");
            },
            fromIEEE754Double(e) {
              return this.fromIEEE754(this.strToByteArr(e), 11, 52);
            },
            toIEEE754Double(e) {
              return this.byteArrToStr(this.toIEEE754(e, 11, 52));
            },
            fromIEEE754Single(e) {
              return this.fromIEEE754(this.strToByteArr(e), 8, 23);
            },
            toIEEE754Single(e) {
              return this.byteArrToStr(this.toIEEE754(e, 8, 23));
            },
          };
          e.exports.IEEE754LIB = t;
        },
        1425: (e, t, s) => {
          const {
              DestinationFromNetwork: n,
              DestinationType: r,
              Queue: i,
            } = s(3170),
            { LOG_DEBUG: o, LOG_INFO: a } = s(390),
            { SDTDestType: c } = s(9080),
            { SDTField: u } = s(3971),
            { SDTFieldType: l } = s(6387),
            { Topic: h } = s(3170),
            d = {
              parseDestination: function (e, t, s) {
                const o = e.readUInt8(t),
                  d = e.toString("latin1", t + 1, t + s);
                let p = n.createDestinationFromBytes(d);
                if (c[p.type] !== o)
                  if (c[r.QUEUE] === o) p = i.createFromLocalName(d);
                  else {
                    if (c[r.TOPIC] !== o)
                      return (
                        a(
                          `Drop SDT field with invalid destination type ${o} when decoding ${d} to ${p.type}`,
                        ),
                        null
                      );
                    p.type, (p = new h(d));
                  }
                return u.create(l.DESTINATION, p);
              },
            };
          e.exports.ParseDestination = d;
        },
        198: (e, t, s) => {
          const { ParseInteger: n } = s(7267),
            { autoDecodeVarLengthNumber: r } = n,
            i = {
              parseFieldHeader: function (e, t) {
                let s = t;
                const n = e.readUInt8(s),
                  i = (252 & n) >> 2,
                  o = 1 + (3 & n);
                s++;
                const a = r(e, s, o);
                return (s += o), [i, a, a - (1 + o), s - t];
              },
            };
          e.exports.ParseFieldHeader = i;
        },
        6612: (e, t, s) => {
          const { SDTField: n } = s(3971),
            { SDTFieldType: r } = s(6387),
            i = {
              parseFloatField: function (e, t, s) {
                switch (s) {
                  case 4:
                    return n.create(r.FLOATTYPE, e.readFloatBE(t));
                  case 8:
                    return n.create(r.DOUBLETYPE, e.readDoubleBE(t));
                  default:
                    return n.create(r.UNKNOWN, e.toString("latin1", t, t + s));
                }
              },
            };
          e.exports.ParseFloat = i;
        },
        7267: (e, t, s) => {
          const n = s(1583),
            { SDTField: r } = s(3971),
            { SDTFieldType: i } = s(6387),
            { SDTUnsupportedValueError: o } = s(7598),
            { SDTValueErrorSubcode: a } = s(7014),
            { create: c } = r,
            u = {
              autoDecodeVarLengthNumber: function (e, t, s) {
                return !![1, 2, 3, 4].includes(s) && e.readUIntBE(t, s);
              },
              parseIntegerField: function (e, t, s, r) {
                let u = 0;
                switch (r) {
                  case 1:
                    return e
                      ? ((u = t.readInt8(s)), c(i.INT8, u))
                      : ((u = t.readUInt8(s)), c(i.UINT8, u));
                  case 2:
                    return e
                      ? ((u = t.readInt16BE(s)), c(i.INT16, u))
                      : ((u = t.readUInt16BE(s)), c(i.UINT16, u));
                  case 4:
                    return e
                      ? ((u = t.readInt32BE(s)), c(i.INT32, u))
                      : ((u = t.readUInt32BE(s)), c(i.UINT32, u));
                  case 8: {
                    let l = null;
                    const h = n.fromBits(
                      t.readUInt32BE(s + 4),
                      t.readUInt32BE(s),
                      !e,
                    );
                    h.getNumBitsAbs() > 48 &&
                      (l = new o(
                        "Value is not supported",
                        a.VALUE_OUTSIDE_SUPPORTED_RANGE,
                        t.toString("latin1", s, r),
                      )),
                      (u = h.toNumber());
                    const d = c(e ? i.INT64 : i.UINT64, u);
                    return l && d.setError(l), d;
                  }
                  default:
                    return null;
                }
              },
            };
          e.exports.ParseInteger = u;
        },
        6403: (e, t, s) => {
          const n = s(3967),
            { LOG_ERROR: r } = s(390),
            { ParseFieldHeader: i } = s(198),
            { SDTDataTypes: o } = s(7155),
            { SDTField: a } = s(3971),
            { SDTFieldType: c } = s(6387),
            { SDTMapContainer: u } = s(1287),
            l = {
              parseMapAt: function (e, t, s) {
                const l = new u();
                let h = t;
                for (; h < t + s; ) {
                  const t = i.parseFieldHeader(e, h);
                  if (((h += t[3]), t[0] !== o.String))
                    return (
                      r(
                        "Error parsing SDTMAP, expected to find a string field as map key, and didn't",
                      ),
                      r(`Type of key: ${t[0]}`),
                      a.create(c.MAP, null)
                    );
                  const s = e.toString("latin1", h, h + t[2] - 1);
                  h += t[2];
                  const u = i.parseFieldHeader(e, h),
                    d = n.ParseSingleElement.parseSingleElement(e, h);
                  (h += u[1]), d && l.addField(s, d);
                }
                return a.create(c.MAP, l);
              },
            };
          e.exports.ParseMap = l;
        },
        3967: (e, t, s) => {
          const { Convert: n } = s(840),
            { LOG_DEBUG: r } = s(390),
            { ParseDestination: i } = s(1425),
            { ParseFieldHeader: o } = s(198),
            { ParseFloat: a } = s(6612),
            { ParseInteger: c } = s(7267),
            { ParseMap: u } = s(6403),
            { ParseStream: l } = s(116),
            { SDTDataTypes: h } = s(7155),
            { SDTField: d } = s(3971),
            { SDTFieldType: p } = s(6387),
            { utf8ToUcs2: _ } = n,
            { parseFieldHeader: E } = o,
            { parseFloatField: T } = a,
            { parseIntegerField: g } = c,
            { parseMapAt: S } = u,
            { parseStreamAt: m } = l,
            { parseDestination: f } = i,
            I = {
              parseSingleElement(e, t) {
                const s = E(e, t);
                if (!s) return null;
                const n = t + s[3],
                  r = s[2];
                switch (s[0]) {
                  case h.Null:
                    return d.create(p.NULLTYPE, null);
                  case h.Boolean:
                    return d.create(p.BOOL, 0 !== e.readUInt8(n));
                  case h.Integer:
                    return g(!0, e, n, r);
                  case h.UnsignedInteger:
                    return g(!1, e, n, r);
                  case h.Float:
                    return T(e, n, r);
                  case h.Char:
                    return d.create(
                      p.WCHAR,
                      String.fromCharCode(e.readUInt16BE(n)),
                    );
                  case h.ByteArray:
                    return d.create(p.BYTEARRAY, e.slice(n, n + r));
                  case h.String:
                    return d.create(
                      p.STRING,
                      _(e.toString("latin1", n, n + r - 1)),
                    );
                  case h.Destination:
                    return f(e, n, r);
                  case h.SMFMessage:
                    return d.create(p.SMF_MESSAGE, e.slice(n, n + r));
                  case h.Map:
                    return S(e, n, r);
                  case h.Stream:
                    return m(e, n, r);
                  default:
                    return d.create(p.UNKNOWN, e.toString("latin1", n, n + r));
                }
              },
            },
            R = { stringToBuffer: (e) => s(8764).lW.from(e, "latin1") };
          (e.exports.ParseSingleElement = I), (e.exports.StringToBuffer = R);
        },
        116: (e, t, s) => {
          const n = s(3967),
            { ParseFieldHeader: r } = s(198),
            { SDTField: i } = s(3971),
            { SDTFieldType: o } = s(6387),
            { SDTStreamContainer: a } = s(5341),
            c = {
              parseStreamAt: function (e, t, s) {
                const c = new a();
                let u = t;
                for (; u < t + s; ) {
                  const t = r.parseFieldHeader(e, u),
                    s = n.ParseSingleElement.parseSingleElement(e, u);
                  (u += t[1]), s && c.addField(s);
                }
                return i.create(o.STREAM, c);
              },
            };
          e.exports.ParseStream = c;
        },
        7155: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SDTDataTypes = n.new({
            Null: 0,
            Boolean: 1,
            Integer: 2,
            UnsignedInteger: 3,
            Float: 4,
            Char: 5,
            ByteArray: 6,
            String: 7,
            Destination: 8,
            SMFMessage: 9,
            Map: 10,
            Stream: 11,
          });
        },
        9080: (e, t, s) => {
          const { DestinationType: n } = s(3170),
            { Enum: r } = s(9359),
            i = { [n.TOPIC]: 0, [n.QUEUE]: 1, [n.TEMPORARY_QUEUE]: 1 };
          e.exports.SDTDestType = r.new(i);
        },
        6387: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SDTFieldType = n.new({
            BOOL: 0,
            UINT8: 1,
            INT8: 2,
            UINT16: 3,
            INT16: 4,
            UINT32: 5,
            INT32: 6,
            UINT64: 7,
            INT64: 8,
            WCHAR: 9,
            STRING: 10,
            BYTEARRAY: 11,
            FLOATTYPE: 12,
            DOUBLETYPE: 13,
            MAP: 14,
            STREAM: 15,
            DESTINATION: 16,
            NULLTYPE: 17,
            UNKNOWN: 18,
            SMF_MESSAGE: 19,
          });
        },
        3971: (e, t, s) => {
          const n = s(828),
            { Convert: r } = s(840),
            { SDTFieldType: i } = s(6387),
            { validateSdtField: o } = s(2234),
            { anythingToBuffer: a } = r,
            { ProfileBinding: c } = n;
          class u {
            constructor(e = i.NULLTYPE, t = null) {
              const s = o(e, t);
              if (null !== s) throw s;
              (this._type = e),
                e === i.BYTEARRAY ? (this._value = a(t)) : (this._value = t),
                (this._error = void 0);
            }
            getType() {
              return this._type;
            }
            getValue() {
              if (void 0 !== this._error) throw this._error;
              return this.getValueNoThrow();
            }
            getValueNoThrow() {
              return void 0 !== this._error
                ? this._error
                : this._type === i.BYTEARRAY && c.value.byteArrayAsString
                  ? this._value.toString("latin1")
                  : this._value;
            }
            setError(e) {
              this._error = e;
            }
            toString() {
              return `[SDTField type:${this._type} value:${this._value}]`;
            }
            static create(e, t) {
              return new u(e, t);
            }
          }
          e.exports.SDTField = u;
        },
        1287: (e, t, s) => {
          const { ErrorSubcode: n, OperationError: r } = s(3870),
            { SDTField: i } = s(3971);
          e.exports.SDTMapContainer = class {
            constructor() {
              this._map = [];
            }
            getKeys() {
              return Object.keys(this._map);
            }
            getField(e) {
              return this._map[e];
            }
            deleteField(e) {
              delete this._map[e];
            }
            addField(e, t, s = void 0) {
              if (t instanceof i) this._map[e] = t;
              else {
                if (void 0 === s)
                  throw new r(
                    "Invalid parameters to addField: expected SDTField, or type and value",
                    n.PARAMETER_CONFLICT,
                  );
                this._map[e] = i.create(t, s);
              }
            }
          };
        },
        5341: (e, t, s) => {
          const n = s(3971),
            { ErrorSubcode: r, OperationError: i } = s(3870);
          e.exports.SDTStreamContainer = class {
            constructor() {
              (this._stream = []), (this._writable = !0), (this._readPt = 0);
            }
            hasNext() {
              return this._stream.length > this._readPt;
            }
            getNext() {
              return this._readPt < this._stream.length
                ? this._stream[this._readPt++]
                : void 0;
            }
            rewind() {
              this._readPt = 0;
            }
            addField(e, t = void 0) {
              if (this._writable)
                if (e instanceof n.SDTField) this._stream.push(e);
                else {
                  if (void 0 === t)
                    throw new i(
                      "Invalid parameters to addField: expected SDTField, or type and value",
                      r.PARAMETER_CONFLICT,
                    );
                  this._stream.push(n.SDTField.create(e, t));
                }
            }
          };
        },
        7598: (e, t, s) => {
          const n = s(1880),
            { SolaceError: r } = s(3870);
          e.exports.SDTUnsupportedValueError = class extends r {
            constructor(e, t, s) {
              super("SDTUnsupportedValue", e),
                (this.subcode = t),
                (this.sourceData = s || "");
            }
            inspect() {
              return super.inspect({
                subcode: null,
                sourceData: (e) => n.Debug.formatDumpBytes(e, !1, 0),
              });
            }
            getSubcode() {
              return this.subcode;
            }
            getSourceData() {
              return this.sourceData;
            }
          };
        },
        7014: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SDTValueErrorSubcode = n.new({
            VALUE_OUTSIDE_SUPPORTED_RANGE: 1,
          });
        },
        2234: (e, t, s) => {
          const n = s(3170),
            r = s(1287),
            i = s(5341),
            o = s(2201),
            { ErrorSubcode: a, OperationError: c } = s(3870),
            { SDTFieldType: u } = s(6387),
            l = (() => {
              const e = [];
              return (
                (e[u.BOOL] = "boolean"),
                (e[u.UINT8] = "number"),
                (e[u.INT8] = "number"),
                (e[u.UINT16] = "number"),
                (e[u.INT16] = "number"),
                (e[u.UINT32] = "number"),
                (e[u.INT32] = "number"),
                (e[u.UINT64] = "number"),
                (e[u.INT64] = "number"),
                (e[u.WCHAR] = "string"),
                (e[u.STRING] = "string"),
                (e[u.BYTEARRAY] = "object"),
                (e[u.FLOATTYPE] = "number"),
                (e[u.DOUBLETYPE] = "number"),
                e
              );
            })();
          function h(e) {
            return new c(
              `Invalid SDT type:value combination, expected value type ${e}`,
              a.PARAMETER_INVALID_TYPE,
            );
          }
          e.exports.validateSdtField = function (e, t) {
            return l[e] &&
              (("boolean" === l[e] && "boolean" != typeof t) ||
                ("number" === l[e] && "number" != typeof t) ||
                ("string" === l[e] && "string" != typeof t))
              ? h(l[e])
              : e !== u.MAP || o.Check.instanceOf(t, r.SDTMapContainer)
                ? e !== u.STREAM || o.Check.instanceOf(t, i.SDTStreamContainer)
                  ? e !== u.DESTINATION || o.Check.instanceOf(t, n.Destination)
                    ? null
                    : h("Destination")
                  : h("SDTStreamContainer")
                : h("SDTMapContainer");
          };
        },
        5594: (e, t, s) => {
          const { AuthenticationScheme: n } = s(3278),
            { CapabilityType: r, ClientCapabilityType: i } = s(2753),
            { MessageRxCBInfo: o } = s(806),
            { MutableSessionProperty: a } = s(8075),
            { Session: c } = s(3401),
            { SessionEvent: u } = s(5874),
            { SessionEventCBInfo: l } = s(3397),
            { SessionEventCode: h } = s(5332),
            { SessionEventName: d } = s(2495),
            { SessionProperties: p } = s(2975),
            { SessionState: _ } = s(109),
            { SolclientFactory: E } = s(828),
            { SslDowngrade: T } = s(5153);
          (E.createSession = E.createFactory((e, t, s) => new c(e, t, s))),
            (e.exports.AuthenticationScheme = n),
            (e.exports.CapabilityType = r),
            (e.exports.ClientCapabilityType = i),
            (e.exports.MessageRxCBInfo = o),
            (e.exports.MutableSessionProperty = a),
            (e.exports.Session = c),
            (e.exports.SessionEventCBInfo = l),
            (e.exports.SessionEventCode = h),
            (e.exports.SessionEvent = u),
            (e.exports.SessionEventName = d),
            (e.exports.SessionProperties = p),
            (e.exports.SessionState = _),
            (e.exports.SslDowngrade = T);
        },
        3278: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.AuthenticationScheme = n.new({
            BASIC: "AuthenticationScheme_basic",
            CLIENT_CERTIFICATE: "AuthenticationScheme_clientCertificate",
            AUTHENTICATION_SCHEME_BASIC: "AuthenticationScheme_basic",
            AUTHENTICATION_SCHEME_CLIENT_CERTIFICATE:
              "AuthenticationScheme_clientCertificate",
            OAUTH2: "AuthenticationScheme_oauth2",
          });
        },
        2753: (e, t, s) => {
          const { Enum: n } = s(9359);
          (e.exports.CapabilityType = n.new({
            PEER_SOFTWARE_VERSION: 0,
            PEER_SOFTWARE_DATE: 1,
            PEER_PLATFORM: 2,
            PEER_PORT_SPEED: 3,
            PEER_PORT_TYPE: 4,
            MAX_DIRECT_MSG_SIZE: 5,
            PEER_ROUTER_NAME: 6,
            MESSAGE_ELIDING: 7,
            NO_LOCAL: 8,
            GUARANTEED_MESSAGE_CONSUME: 9,
            TEMPORARY_ENDPOINT: 10,
            GUARANTEED_MESSAGE_PUBLISH: 11,
            GUARANTEED_MESSAGE_BROWSE: 12,
            ENDPOINT_MGMT: 13,
            SELECTOR: 14,
            MAX_GUARANTEED_MSG_SIZE: 15,
            ACTIVE_CONSUMER_INDICATION: 16,
            COMPRESSION: 17,
            CUT_THROUGH: 18,
            ENDPOINT_DISCARD_BEHAVIOR: 19,
            ENDPOINT_MESSAGE_TTL: 20,
            JNDI: 21,
            PER_TOPIC_SEQUENCE_NUMBERING: 22,
            QUEUE_SUBSCRIPTIONS: 23,
            SUBSCRIPTION_MANAGER: 24,
            TRANSACTED_SESSION: 25,
            MESSAGE_REPLAY: 26,
            COMPRESSED_SSL: 27,
            SHARED_SUBSCRIPTIONS: 28,
            BR_REPLAY_ERRORID: 29,
            AD_APP_ACK_FAILED: 30,
            VAR_LEN_EXT_PARAM: 31,
          })),
            (e.exports.ClientCapabilityType = n.new({
              UNBIND_ACK: 0,
              BR_ERRORID: 1,
              PQ: 2,
            }));
        },
        4664: (e) => {
          e.exports.CorrelatedRequest = class {
            constructor(e, t, s, n) {
              (this.correlationTag = e),
                (this.timer = t),
                (this.correlationKey = s),
                (this.respRecvdCallback = n);
            }
          };
        },
        1188: (e, t, s) => {
          const { CapabilityType: n } = s(2753);
          e.exports.DefaultCapabilities = {
            createDefaultCapabilities: (e) => ({
              [n.GUARANTEED_MESSAGE_CONSUME]: !0,
              [n.GUARANTEED_MESSAGE_PUBLISH]: !0,
              [n.SHARED_SUBSCRIPTIONS]: !0,
              [n.MAX_GUARANTEED_MSG_SIZE]: e.assumedMaxAdSize,
            }),
          };
        },
        8484: (e, t, s) => {
          const { Process: n } = s(7882),
            r = Math.pow(2, 32);
          function i(e, t) {
            return t > e.length ? "0".repeat(t - e.length) + e : e;
          }
          const o = {
            sessionCounter: 0,
            idCounter: 0,
            RandId: i((Math.random() * r).toFixed(0).toString(), 10),
            NextSessionCounter() {
              return i((++this.sessionCounter).toString(), 4);
            },
            NextId() {
              return ++this.idCounter;
            },
            GenerateClientName() {
              const { product: e, platform: t } = n;
              return `${e}/${t}/${this.RandId}/${this.NextSessionCounter()}`;
            },
            GenerateUserIdentification() {
              const { product: e, platform: t } = n;
              return `${e}/${t}/${this.RandId}`;
            },
            GenerateClientDescription: () =>
              `solclientjs/${n.description}`.substring(0, 254),
          };
          e.exports.GlobalContext = o;
        },
        2583: (e, t, s) => {
          const { LOG_TRACE: n } = s(390),
            { parseURL: r } = s(7882);
          let i;
          (i = (e, t) =>
            setTimeout(() => {
              try {
                const s = e.map((e) => {
                  const t = r(e).host;
                  return { url: e, host: t, address: t, resolved: !1 };
                });
                return t(null, s);
              } catch (e) {
                return t(e);
              }
            }, 0)),
            (e.exports.hostListDNSFilter = i);
        },
        1113: (e, t, s) => {
          const { assert: n } = s(9359),
            { hostListDNSFilter: r } = s(2583),
            { LogFormatter: i } = s(390),
            { parseURL: o } = s(7882);
          function a(e) {
            return Array.isArray(e) ? e.map((e) => o(e)) : a(e.split(/[,;]/));
          }
          class c {
            constructor(e = { url: null, waitTime: 0 }) {
              Object.assign(this, e);
            }
          }
          e.exports.HostList = class {
            constructor({
              url: e,
              connectRetries: t,
              reconnectRetries: s,
              connectRetriesPerHost: r,
              reconnectRetryWaitInMsecs: o,
            } = {}) {
              Object.assign(this, {
                hosts: a(e).map((e) => e.href),
                connectTryCount: -1 === t ? Number.POSITIVE_INFINITY : t + 1,
                reconnectTryCount: -1 === s ? Number.POSITIVE_INFINITY : s,
                connectTryCountPerHost:
                  -1 === r ? Number.POSITIVE_INFINITY : r + 1,
                reconnectRetryWaitInMsecs: o,
                _mutableState: {},
                logger: new i("[host-list]"),
              }),
                this.reset(),
                n(this.hosts.length >= 1),
                n(this.connectTryCount >= 1),
                n(this.reconnectTryCount >= 0),
                n(this.connectTryCountPerHost >= 1);
            }
            resolveHosts(e) {
              const { LOG_TRACE: t, LOG_WARN: s } = this.logger;
              r(this.hosts, (t, r) => {
                if (t) return e(t);
                n(
                  r.length === this.hosts.length,
                  "Resolve did not return a result for all hosts",
                );
                let i = 0;
                return (
                  r.forEach((e) => {
                    e.address && ++i,
                      e.resolved &&
                        (e.address
                          ? (e.address, e.url)
                          : s(
                              "DNS resolve FAILED:",
                              e.error.code,
                              `${e.error.syscall}('${e.error.hostname}')`,
                              "for",
                              e.url,
                            ));
                  }),
                  e(0 === i ? "All hosts failed DNS resolution" : null)
                );
              });
            }
            reset(e = { wasConnected: !1, disconnected: !1 }) {
              Object.assign(this._mutableState, {
                wasConnected: e.wasConnected,
                disconnected: e.disconnected,
                hostPointer: 0,
                hostTries: 0,
                listTries: 1,
                exhausted: !1,
                lastHostInfo: new c(),
              });
            }
            getNextHost() {
              const { LOG_TRACE: e } = this.logger,
                t = this._mutableState,
                s = t.wasConnected,
                r = t.lastHostInfo;
              n(
                r,
                "Next host request with no prior host info -- did you call reset()?",
              );
              try {
                if (t.disconnected) return null;
                n(!t.exhausted, "Next host request after host list exhausted");
                const e = Object.assign({
                  hosts: this.hosts,
                  hostTriesMax: this.connectTryCountPerHost,
                  listTriesMax: s
                    ? this.reconnectTryCount
                    : this.connectTryCount,
                });
                if (
                  (++t.hostTries,
                  t.hostTries > e.hostTriesMax
                    ? (t.hostTries,
                      r.url,
                      ++t.hostPointer,
                      t.hostPointer >= e.hosts.length
                        ? (++t.listTries,
                          t.listTries > e.listTriesMax
                            ? (e.listTriesMax, (t.exhausted = !0))
                            : (t.listTries,
                              e.listTriesMax,
                              (t.hostPointer = 0),
                              (t.hostTries = 1)))
                        : (t.hostTries = 1))
                    : (t.hostTries, e.hostTriesMax),
                  t.exhausted)
                )
                  return null;
                const i = e.hosts[t.hostPointer];
                n(
                  i,
                  `No host at the host pointer! ${e.hosts}[${t.hostPointer}]`,
                );
                const o = null === r.url,
                  a = r.url !== i,
                  u = r.url !== i && 0 === t.hostPointer,
                  l = o || (a && !u) ? 0 : this.reconnectRetryWaitInMsecs,
                  h = new c({ url: i, waitTime: l });
                return (t.lastHostInfo = h), h.url;
              } finally {
              }
            }
            get connectWaitTimeInMsecs() {
              return (
                n(
                  this._mutableState.lastHostInfo.url,
                  "Getting connectWaitTimeInMsecs having never called getNextHostInfo",
                ),
                this._mutableState.lastHostInfo.waitTime
              );
            }
            currentHostToString() {
              const e = this._mutableState,
                t = e.wasConnected,
                s = Object.assign({
                  hosts: this.hosts,
                  hostTriesMax: this.connectTryCountPerHost,
                  listTriesMax: t
                    ? this.reconnectTryCount
                    : this.connectTryCount,
                }),
                n = e.hostPointer + 1;
              return `host '${e.lastHostInfo.url}' (host ${n} of ${s.hosts.length})(host connection attempt ${e.hostTries} of ${s.hostTriesMax})(total ${t ? "reconnection" : "connection"} attempt ${e.listTries} of ${s.listTriesMax})`;
            }
          };
        },
        806: (e) => {
          e.exports.MessageRxCBInfo = class {
            constructor(e, t) {
              (this.messageRxCBFunction = e), (this.userObject = t);
            }
          };
        },
        8075: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.MutableSessionProperty = n.new({
            CLIENT_NAME: 1,
            CLIENT_DESCRIPTION: 2,
          });
        },
        2779: (e) => {
          e.exports.OutstandingDataRequest = class {
            constructor(e, t, s, n, r) {
              (this.correlationId = e),
                (this.timer = t),
                (this.replyReceivedCBFunction = s),
                (this.reqFailedCBFunction = n),
                (this.userObject = r);
            }
          };
        },
        4876: (e) => {
          e.exports.P2PUtil = {
            getP2PInboxTopic: (e) => `${e}/_`,
            getP2PTopicSubscription: (e) => `${e}/>`,
          };
        },
        3397: (e) => {
          e.exports.SessionEventCBInfo = class {
            constructor(e, t) {
              (this.userObject = t), (this.sessionEventCBFunction = e);
            }
          };
        },
        5332: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionEventCode = n.new({
            UP_NOTICE: 0,
            DOWN_ERROR: 1,
            CONNECT_FAILED_ERROR: 2,
            REJECTED_MESSAGE_ERROR: 4,
            SUBSCRIPTION_ERROR: 5,
            SUBSCRIPTION_OK: 6,
            VIRTUALROUTER_NAME_CHANGED: 7,
            REQUEST_ABORTED: 8,
            REQUEST_TIMEOUT: 9,
            PROPERTY_UPDATE_OK: 10,
            PROPERTY_UPDATE_ERROR: 11,
            CAN_ACCEPT_DATA: 13,
            DISCONNECTED: 14,
            RECONNECTING_NOTICE: 22,
            RECONNECTED_NOTICE: 23,
            REPUBLISHING_UNACKED_MESSAGES: 24,
            ACKNOWLEDGED_MESSAGE: 25,
            UNSUBSCRIBE_TE_TOPIC_OK: 26,
            UNSUBSCRIBE_TE_TOPIC_ERROR: 27,
            MESSAGE: 28,
            GUARANTEED_MESSAGE_PUBLISHER_DOWN: 29,
          });
        },
        2495: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionEventName = n.new({
            CONNECT: "SessionConnect",
            DISCONNECT: "SessionDisconnect",
            DISPOSE: "SessionDispose",
            CONNECT_TIMEOUT: "SessionConnectTimeout",
            CONNECT_WAIT_TIMEOUT: "SessionConnectWaitTimeout",
            DOWNGRADE_TIMEOUT: "SessionDowngradeTimeout",
            TRANSPORT_UP: "SessionTransportUp",
            TRANSPORT_DESTROYED: "SessionTransportDestroyed",
            TRANSPORT_CAN_ACCEPT_DATA: "SessionTransportCanAcceptData",
            TRANSPORT_PARSE_ERROR: "SessionTransportParseError",
            TRANSPORT_PROTOCOL_SMP: "SessionSMPMessage",
            TRANSPORT_PROTOCOL_CLIENTCTRL: "SessionClientCtrlMessage",
            EXCEPTION: "SessionException",
            SUBSCRIBE_TIMEOUT: "SessionSubscribeTimeout",
            CREATE_SUBSCRIBER: "SessionCreateSubscriber",
            FLOW_UP: "SessionFlowUp",
            FLOW_FAILED: "SessionFlowFailed",
            SEND_ERROR: "SessionSendError",
            FLOWS_DISCONNECTED: "SessionFlowsDisconnected",
            TRANSPORT_FLUSHED: "SessionTransportFlushed",
            DNS_RESOLUTION_COMPLETE: "SessionDNSResolutionComplete",
            TRANSPORT_CHANGE_DONE: "SessionTransportChangeDone",
          });
        },
        5874: (e, t, s) => {
          var n = s(9489);
          const {
              ErrorSubcode: r,
              OperationError: i,
              RequestError: o,
              RequestEventCode: a,
            } = s(3870),
            { SessionEventCode: c } = s(5332);
          function u(e) {
            return class extends e {
              constructor(e, t, s, n = void 0, r = 0, i = void 0, o = void 0) {
                super(...e),
                  (this._sessionEventCode = t),
                  (this._infoStr = s),
                  (this._responseCode = n),
                  (this._errorSubcode = r),
                  (this._correlationKey = i),
                  (this._reason = o);
              }
              get sessionEventCode() {
                return this._sessionEventCode;
              }
              get infoStr() {
                return this._infoStr;
              }
              get responseCode() {
                return this._responseCode;
              }
              get errorSubcode() {
                return this.subcode || this._errorSubcode;
              }
              get errorSubCode() {
                return this.errorSubcode;
              }
              get correlationKey() {
                return this._correlationKey;
              }
              get reason() {
                return this._reason;
              }
              set reason(e) {
                this._reason = e;
              }
              inspect() {
                return Object.assign(super.inspect || {}, {
                  sessionEventCode: c.describe(this.sessionEventCode),
                  infoStr: this.infoStr,
                  responseCode: this.responseCode,
                  errorSubcode: r.describe(this.errorSubcode),
                  correlationKey: this.correlationKey
                    ? this.correlationKey.toString()
                    : null,
                  reason: this.reason ? this.reason : null,
                });
              }
              toString() {
                return n(this);
              }
            };
          }
          const l = {
              [c.CONNECT_FAILED_ERROR]: i,
              [c.DOWN_ERROR]: i,
              [c.GUARANTEED_MESSAGE_PUBLISHER_DOWN]: i,
              [c.PROPERTY_UPDATE_ERROR]: o,
              [c.REJECTED_MESSAGE_ERROR]: o,
              [c.SUBSCRIPTION_ERROR]: o,
              [c.UNSUBSCRIBE_TE_TOPIC_ERROR]: i,
              [a.REQUEST_ABORTED]: o,
              [a.REQUEST_TIMEOUT]: o,
            },
            h = new Map()
              .set(Object, () => [])
              .set(i, (e, t, s, n, r, i) => [t, n, i])
              .set(o, (e, t, s, n, r, i) => [t, e, r, i]),
            d = new Map(),
            p = u(Object);
          (p.build = function (
            e,
            t,
            s = void 0,
            n = 0,
            r = void 0,
            i = void 0,
          ) {
            const o = l[e] || Object;
            return new ((() => {
              let e = d.get(o);
              return e || ((e = u(o)), d.set(o, e), e);
            })())((h.get(o) || (() => []))(e, t, s, n, r, i), e, t, s, n, r, i);
          }),
            (e.exports.SessionEvent = p);
        },
        9191: (e, t, s) => {
          var n = s(9489);
          const { ErrorSubcode: r } = s(3870),
            { FsmEvent: i } = s(8535),
            { Hex: o } = s(840),
            { formatHexString: a } = o;
          e.exports.SessionFSMEvent = class extends i {
            constructor(e, t) {
              super(e),
                (this.eventText = null),
                (this.errorSubcode = null),
                (this.eventReason = null),
                (this.smfMsg = null),
                (this.sessionId = null),
                (this.guaranteedFlowObject = null),
                Object.assign(this, t);
            }
            inspect() {
              return {
                eventText: this.eventText,
                eventReason: this.eventReason,
                errorSubcode: r.describe(this.errorSubcode),
                sessionId: (this.sessionId && a(this.sessionId)) || "N/A",
              };
            }
            getExtraStringInfo() {
              return n(this);
            }
          };
        },
        8837: (e, t, s) => {
          const n = s(4858),
            r = s(6780),
            i = s(7291),
            o = s(828),
            a = s(3147),
            { assert: c } = s(9359),
            { CapabilityType: u } = s(2753),
            { Check: l } = s(2201),
            { CorrelatedRequest: h } = s(4664),
            { Destination: d } = s(3170),
            {
              ErrorResponseSubcodeMapper: p,
              ErrorSubcode: _,
              OperationError: E,
            } = s(3870),
            { FsmEvent: T, State: g, StateMachine: S } = s(8535),
            { Hex: m } = s(840),
            { LogFormatter: f } = s(390),
            {
              Message: I,
              MessageOutcome: R,
              MessageDeliveryModeType: C,
            } = s(4789),
            { P2PUtil: A } = s(4876),
            { SessionEvent: O } = s(5874),
            { SessionEventCode: N } = s(5332),
            { SessionEventName: P } = s(2495),
            { SessionFSMEvent: D } = s(9191),
            { SessionRequestType: y } = s(9988),
            { SessionStateName: b } = s(156),
            { SslDowngrade: M } = s(5153),
            { StatType: w, StatsByMode: v } = s(6818),
            { StringUtils: L } = s(7882),
            { SubscriptionUpdateTimeoutMessages: U } = s(1726),
            { formatHexString: F } = m,
            { stripNullTerminate: x } = L,
            {
              STAT_TX_BYMODE_BYTES: B,
              STAT_TX_BYMODE_MSGS: G,
              STAT_RX_BYMODE_BYTES: k,
              STAT_RX_BYMODE_MSGS: W,
              STAT_TX_BYMODE_REDELIVERED: $,
              STAT_TX_BYMODE_BYTES_REDELIVERED: q,
            } = v;
          e.exports.SessionFSM = class extends S {
            constructor(e, t, s, r) {
              super({ name: "SessionFSM" });
              const i = this,
                o = (this.logger = new f(function (...e) {
                  return [
                    `[session-fsm=${i.sessionIdHex || "(N/A)"}]`,
                    `[${i.getCurrentStateName()}]`,
                    ...e,
                  ];
                })),
                { LOG_TRACE: u, LOG_DEBUG: l, LOG_INFO: h } = o;
              (this.log = o.wrap(this.log, this)),
                (this._sessionProperties = e),
                (this._session = t),
                (this._sessionStatistics = s),
                (this._hosts = r),
                (this._consumers = new n.ConsumerFlows()),
                (this._flowInterfaceFactory = (e) => ({
                  getCorrelationTag: this.getCorrelationTag.bind(this),
                  incStat: this.incStat.bind(this),
                  sendData: (t) => this.send(t, e, !1),
                  sendToTransport: (t) => this.sendToTransport(t, e, !1),
                  sendControl: (t) => this.send(t, e, !0),
                  enqueueRequest:
                    this.enqueueOutstandingCorrelatedReq.bind(this),
                  createDestinationFromDescriptor:
                    t.createDestinationFromDescriptor.bind(t),
                  createTemporaryDestination:
                    t.createTemporaryDestination.bind(t),
                  isCapable: t.isCapable.bind(t),
                  getCapability: t.getCapability.bind(t),
                  getCurrentStateName: this.getCurrentStateName.bind(this),
                  updateQueueSubscription: t.updateQueueSubscription.bind(t),
                  get sessionIdHex() {
                    return i.sessionIdHex;
                  },
                  get canAck() {
                    return t.canAck;
                  },
                })),
                (this._userBackpressured = !1),
                this.clearCurrentError(),
                this.initial(function () {
                  return this.transitionTo(i.SessionDisconnected, (e) =>
                    e.getStateMachine().reset(),
                  );
                }),
                this.unhandledEventReaction(function (e) {
                  const t = i.getCurrentState();
                  switch (e.getName()) {
                    case P.CREATE_SUBSCRIBER:
                      return (
                        c(
                          i._consumers,
                          "collection has lifetime of FSM instance",
                        ),
                        i._consumers.add(e.guaranteedFlowObject),
                        this
                      );
                    case P.DISPOSE:
                      return t.terminate(() => i.disposeInternal());
                    case P.FLOW_UP:
                      return e.guaranteedFlowObject, this;
                    default:
                      return e.getName(), i.getCurrentStateName(), this;
                  }
                }),
                (this.SessionConnecting = new g(
                  { name: b.CONNECTING, parentContext: i },
                  {
                    handleTransportDestroyed() {
                      if (
                        (i.clearConnectTimer(),
                        (i._currentHost = i._hosts.getNextHost()),
                        null === i._currentHost)
                      )
                        return this.transitionToExitPoint(
                          i.SessionConnecting,
                          "ErrorExit",
                        );
                      const { connectWaitTimeInMsecs: e } = i._hosts;
                      return e > 0 && !i._connectWaitTimer
                        ? ((i._connectWaitTimer = setTimeout(() => {
                            (i._connectWaitTimer = null),
                              i.processEvent(
                                new D({ name: P.CONNECT_WAIT_TIMEOUT }),
                              );
                          }, e)),
                          this.transitionTo(i.WaitingForInterConnectTimeout))
                        : this.transitionTo(i.WaitingForTransport);
                    },
                  },
                )
                  .entry(() => {
                    i.setConnectTimer();
                  })
                  .entryPoint("DisconnectTransport", function () {
                    return (
                      i._hosts.reset({
                        wasConnected: void 0,
                        disconnected: !0,
                      }),
                      (i._connectFailEvent = N.DISCONNECTED),
                      (i._connectSuccessEvent = N.DISCONNECTED),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .entryPoint("ReconnectTransport", function () {
                    (i._connectFailEvent = N.DOWN_ERROR),
                      (i._connectSuccessEvent = N.RECONNECTED_NOTICE);
                    const e = 0 === i._sessionProperties._reconnectRetries;
                    if (
                      (i._hosts.reset({ wasConnected: !0, disconnected: e }),
                      !e)
                    ) {
                      const e = i._currentError || {},
                        t = [
                          e.eventText,
                          e.responseCode,
                          e.errorSubcode,
                          void 0,
                          e.eventReason,
                        ];
                      i.setPostEventAction(() => {
                        i.setConnectTimer(),
                          i.emitSessionEvent(
                            O.build(N.RECONNECTING_NOTICE, ...t),
                          );
                      });
                    }
                    return this.transitionTo(i.DestroyingTransport);
                  })
                  .initial(
                    () => (
                      i.clearCurrentError(),
                      (i._connectFailEvent = N.CONNECT_FAILED_ERROR),
                      (i._connectSuccessEvent = N.UP_NOTICE),
                      i._hosts.resolveHosts((e) =>
                        i._hosts
                          ? e
                            ? (i.setCurrentError({
                                errorSubcode: _.UNRESOLVED_HOSTS,
                                eventText: e,
                              }),
                              i._hosts.reset({ disconnected: !0 }),
                              this.processEvent(new D({ name: P.EXCEPTION })))
                            : (i._hosts.reset({ wasConnected: !1 }),
                              (i._currentHost = i._hosts.getNextHost()),
                              this.processEvent(
                                new D({ name: P.DNS_RESOLUTION_COMPLETE }),
                              ))
                          : null,
                      ),
                      this.transitionTo(i.WaitingForDNS)
                    ),
                  )
                  .reaction(P.DNS_RESOLUTION_COMPLETE, function () {
                    return this.transitionTo(i.WaitingForTransport);
                  })
                  .reaction(P.DISCONNECT, function () {
                    return this.transitionToEntryPoint(
                      i.SessionConnecting,
                      "DisconnectTransport",
                    );
                  })
                  .reaction(P.CONNECT_TIMEOUT, function () {
                    return (
                      i.setCurrentError({
                        errorSubcode: _.TIMEOUT,
                        eventText: "Connect timeout",
                      }),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .reaction(P.SEND_ERROR, function (e) {
                    return (
                      h(`SEND_ERROR reached SessionConnecting. ${e}`),
                      i.setCurrentError(e),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .reaction(P.EXCEPTION, function (e) {
                    return (
                      i.setCurrentError(e),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .reaction(P.TRANSPORT_DESTROYED, function (e) {
                    return (
                      i.setCurrentError(e),
                      h("TRANSPORT_DESTROYED event"),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .exit(() => {
                    i.clearConnectTimer(),
                      i._connectWaitTimer &&
                        (clearTimeout(i._connectWaitTimer),
                        (i._connectWaitTimer = null));
                  })
                  .exitPoint(
                    "ConnectedExit",
                    () => (
                      i.setPostEventAction(() => {
                        if (
                          (i.emitSessionEvent(
                            O.build(
                              i._connectSuccessEvent,
                              `'${i._hosts.currentHostToString()}'`,
                              200,
                              0,
                              null,
                              null,
                            ),
                          ),
                          i._userBackpressured)
                        ) {
                          const e = O.build(
                            N.CAN_ACCEPT_DATA,
                            "",
                            null,
                            0,
                            null,
                            "",
                          );
                          i.emitSessionEvent(e), (i._userBackpressured = !1);
                        }
                      }),
                      i.clearCurrentError(),
                      this.transitionTo(i.SessionTransportUp)
                    ),
                  )
                  .exitPoint("ErrorExit", function () {
                    return (
                      i.setPostEventAction(() => {
                        const e = i._currentError || {},
                          t = [
                            e.eventText,
                            e.responseCode,
                            e.errorSubcode,
                            void 0,
                            e.eventReason,
                          ];
                        i.emitSessionEvent(O.build(i._connectFailEvent, ...t));
                      }),
                      this.transitionTo(i.SessionDisconnected)
                    );
                  })),
                (this.WaitingForDNS = new g({
                  name: b.WAITING_FOR_DNS,
                  parentContext: i.SessionConnecting,
                })),
                (this.DestroyingTransport = new g({
                  name: b.DESTROYING_TRANSPORT,
                  parentContext: i.SessionConnecting,
                })
                  .entry(() => {
                    h("Connecting, disposing transport"),
                      i.clearConnectTimer(),
                      i.destroyTransportSession("Disconnecting session", 0);
                  })
                  .reaction(P.TRANSPORT_DESTROYED, function (e) {
                    return (
                      i.setCurrentError(e),
                      i.SessionConnecting.handleTransportDestroyed.call(this)
                    );
                  })),
                (this.WaitingForInterConnectTimeout = new g({
                  name: b.WAITING_FOR_INTERCONNECT_TIMEOUT,
                  parentContext: i.SessionConnecting,
                }).reaction(P.CONNECT_WAIT_TIMEOUT, function () {
                  return this.transitionTo(i.WaitingForTransport);
                })),
                (this.WaitingForTransport = new g({
                  name: b.WAITING_FOR_TRANSPORT,
                  parentContext: i.SessionConnecting,
                }).initial(() => {
                  const e =
                    "Cannot establish transport session: creation failed";
                  i.setConnectTimer(), i.clearCurrentError();
                  try {
                    i.initTransport();
                  } catch (t) {
                    return (
                      this.setCurrentError({
                        eventText: t.message === e ? e : `${e}: ${t.message}`,
                        errorSubcode: t.subcode || _.INTERNAL_ERROR,
                        eventReason: t,
                      }),
                      i.SessionConnecting.handleTransportDestroyed.call(this)
                    );
                  }
                  return this.transitionTo(i.WaitingForTransportUp);
                })),
                (this.WaitingForTransportUp = new g({
                  name: b.WAITING_FOR_TRANSPORT_UP,
                  parentContext: this.WaitingForTransport,
                })
                  .entry(() => {
                    this._justEntered = !0;
                  })
                  .initial(() => {
                    if (!this._justEntered) return this;
                    this._justEntered = !1;
                    const e =
                      "Cannot establish transport session: connection failed";
                    try {
                      const t = i._transport.connect();
                      if (t !== a.TransportReturnCode.OK)
                        throw new E(
                          e,
                          _.CONNECTION_ERROR,
                          a.TransportReturnCode.describe(t),
                        );
                      h(
                        `Attempting to connect session '${i.sessionId}' to ${i._hosts.currentHostToString()}`,
                      );
                    } catch (t) {
                      return (
                        this.setCurrentError({
                          eventText: t.message === e ? e : `${e}: ${t.message}`,
                          errorSubcode: t.subcode || _.INTERNAL_ERROR,
                          eventReason: t,
                        }),
                        i.SessionConnecting.handleTransportDestroyed.call(this)
                      );
                    }
                    return this;
                  })
                  .reaction(P.SEND_ERROR, function (e) {
                    return (
                      h(
                        `SEND_ERROR while waiting for transport up, doing nothing. ${e}`,
                      ),
                      this.internalTransition(null)
                    );
                  })
                  .reaction(P.TRANSPORT_UP, function (e) {
                    if (
                      ((i.sessionId = e.sessionId || ""),
                      i.sendClientCtrlLogin() === a.TransportReturnCode.OK)
                    )
                      return this.transitionTo(i.WaitingForLogin);
                    const t = {
                      eventText: "Failed to send Client Control Login",
                      errorSubcode: _.LOGIN_FAILURE,
                      responseCode: 400,
                    };
                    return (
                      i.setCurrentError(t),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })),
                (this.WaitingForLogin = new g({
                  name: b.WAITING_FOR_LOGIN,
                  parentContext: i.SessionConnecting,
                })
                  .entry(() => {
                    i.setClientCtrlTimer();
                  })
                  .reaction(P.TRANSPORT_PROTOCOL_CLIENTCTRL, function (e) {
                    const t = e.smfMsg,
                      s = t.getResponse(),
                      n = s.responseCode,
                      r = { responseCode: n };
                    if (((i._responseCode = n), 200 === n))
                      if (i.checkNoLocal(t)) {
                        if (i.checkCompressedSsl(t))
                          return (
                            i.updateReadonlySessionProps(t),
                            this.transitionTo(i.WaitForTransportChange)
                          );
                        Object.assign(r, {
                          eventText:
                            "Compressed TLS is not supported by the Solace Message Router",
                          errorSubcode: _.COMPRESSED_TLS_NOT_SUPPORTED,
                        });
                      } else
                        Object.assign(r, {
                          eventText:
                            "No Local is not supported by the Solace Message Router",
                          errorSubcode: _.NO_LOCAL_NOT_SUPPORTED,
                        });
                    else {
                      const e = p.getErrorSubcode(n, s.responseString),
                        t = e === _.UNKNOWN_ERROR ? _.LOGIN_FAILURE : e;
                      h(
                        `Login failed. Subcode: ${t} respCode: ${n} respString: ${s.responseString}`,
                      ),
                        Object.assign(r, {
                          eventText: s.responseString,
                          errorSubcode: t,
                        });
                    }
                    return (
                      i.setCurrentError(r),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .reaction(P.DOWNGRADE_TIMEOUT, function () {
                    return i._transport.requestDowngrade &&
                      !1 !==
                        i._transport.requestDowngrade(
                          "ClientCtrl timeout",
                          _.TIMEOUT,
                        )
                      ? this.transitionTo(i.WaitingForTransportUp)
                      : (i.setCurrentError({
                          eventText: "ClientCtrl timeout",
                          errorSubcode: _.TIMEOUT,
                        }),
                        this.transitionTo(i.DestroyingTransport));
                  })
                  .exit(() => {
                    i.clearClientCtrlTimer();
                  })),
                (this.WaitForTransportChange = new g({
                  name: b.WAITING_FOR_TRANSPORT_CHANGE,
                  parentContext: i.SessionConnecting,
                })
                  .initial(function () {
                    const e = i.updateTransportCompression(
                      function (e) {
                        (this._transport = e),
                          this.processEvent(
                            new D({ name: P.TRANSPORT_CHANGE_DONE }),
                          );
                      }.bind(i),
                    );
                    return null === e
                      ? this
                      : ((i._transport = e),
                        this.transitionTo(i.ReapplyingSubscriptions));
                  })
                  .reaction(P.TRANSPORT_CHANGE_DONE, function () {
                    return this.transitionTo(i.ReapplyingSubscriptions);
                  })),
                (this.ReapplyingSubscriptions = new g({
                  name: b.REAPPLYING_SUBSCRIPTIONS,
                  parentContext: i.SessionConnecting,
                })
                  .entry(() => {
                    h("ReapplyingSubscriptions: entry"),
                      i.copySubscriptionCacheKeys();
                  })
                  .initial(function () {
                    return !0 === i.reapplySubscriptions()
                      ? this.transitionTo(i.WaitForSubConfirm)
                      : this.transitionTo(i.WaitForCanAcceptData);
                  })
                  .reaction(P.SUBSCRIBE_TIMEOUT, function () {
                    const e = _.TIMEOUT;
                    return (
                      i.setCurrentError({
                        eventText: "Subscription timeout while reapplying",
                        errorSubcode: e,
                      }),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })
                  .exit(function () {
                    return i.clearSubscriptionCacheKeys(), this;
                  })),
                (this.WaitForSubConfirm = new g({
                  name: b.WAITING_FOR_SUBCONFIRM,
                  parentContext: i.ReapplyingSubscriptions,
                }).reaction(P.TRANSPORT_PROTOCOL_SMP, function (e) {
                  const t = e.smfMsg.smfHeader,
                    s = x(e.smfMsg.encodedUtf8Subscription),
                    n = t.pm_respcode,
                    r = t.pm_respstr;
                  if (200 !== n) {
                    const e = p.getErrorSubcode(n, r);
                    return (
                      h(
                        `Waiting for subscription confirmation, got ${n} (${e}) '${r}' on subscription ${s}`,
                      ),
                      i.setCurrentError({
                        eventText: r,
                        responseCode: n,
                        errorSubcode: e,
                      }),
                      this.transitionTo(i.DestroyTransport)
                    );
                  }
                  return i._session.canConnectPublisher &&
                    i._defaultPublisher &&
                    i._defaultPublisher.isBindWaiting()
                    ? this.transitionTo(i.WaitingForMessagePublisher)
                    : this.transitionToExitPoint(
                        i.SessionConnecting,
                        "ConnectedExit",
                      );
                })),
                (this.WaitForCanAcceptData = new g({
                  name: b.WAITING_FOR_CAN_ACCEPT_DATA,
                  parentContext: i.ReapplyingSubscriptions,
                })
                  .reaction(P.TRANSPORT_PROTOCOL_SMP, function (e) {
                    const t = e.smfMsg.smfHeader,
                      s = x(e.smfMsg.encodedUtf8Subscription),
                      n = t.pm_respcode,
                      r = t.pm_respstr;
                    if (200 !== n) {
                      const e = p.getErrorSubcode(n, r);
                      return (
                        i.setCurrentError({
                          eventText: r,
                          responseCode: n,
                          errorSubcode: e,
                        }),
                        this.transitionTo(i.DestroyingTransport)
                      );
                    }
                    return (
                      h(
                        `Unexpected 200 OK response to subscription add for ${s}`,
                      ),
                      this.internalTransition(null)
                    );
                  })
                  .reaction(P.TRANSPORT_CAN_ACCEPT_DATA, function () {
                    return !0 === i.reapplySubscriptions()
                      ? this.transitionTo(i.WaitForSubConfirm)
                      : this.internalTransition(null);
                  })),
                (this.WaitingForMessagePublisher = new g({
                  name: b.WAITING_FOR_PUBFLOW,
                  parentContext: i.SessionConnecting,
                })
                  .entry(() => {
                    i._defaultPublisher.connect(),
                      i.sendPublisherSessionUpEvent(i._defaultPublisher);
                  })
                  .reaction(P.FLOW_UP, function () {
                    return i._defaultPublisher.isBindWaiting()
                      ? this.internalTransition(null)
                      : this.transitionToExitPoint(
                          i.SessionConnecting,
                          "ConnectedExit",
                        );
                  })
                  .reaction(P.FLOW_FAILED, function (e) {
                    return (
                      i.setCurrentError({
                        eventText: `Guaranteed Message Publisher Failed: ${e.eventText}`,
                        errorSubcode: _.LOGIN_FAILURE,
                      }),
                      this.transitionTo(i.DestroyingTransport)
                    );
                  })),
                (this.SessionTransportUp = new g({
                  name: b.TRANSPORT_UP,
                  parentContext: i,
                })
                  .entry(function () {
                    return i.clearConnectTimer(), this;
                  })
                  .initial(function () {
                    return (
                      i._session.canConnectConsumer &&
                        (i._consumers.flows.forEach((e) =>
                          i.sendConsumerSessionUpEvent(e),
                        ),
                        i._consumers.reconnectingFlows.forEach((e) =>
                          i.sendConsumerSessionUpEvent(e),
                        )),
                      this.transitionTo(i.FullyConnected)
                    );
                  })
                  .reaction(P.DISCONNECT, function () {
                    return this.transitionTo(i.SessionDisconnecting);
                  })
                  .reaction(P.EXCEPTION, function (e) {
                    return (
                      i.setCurrentError(e),
                      i.cleanupSession(),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "ReconnectTransport",
                      )
                    );
                  })
                  .reaction(P.SEND_ERROR, function (e) {
                    return (
                      i.setCurrentError(e),
                      i.cleanupSession(),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "ReconnectTransport",
                      )
                    );
                  })
                  .reaction(P.TRANSPORT_DESTROYED, function (e) {
                    return (
                      i.setCurrentError(e),
                      h(
                        "Received unsolicited TRANSPORT_DESTROYED event while transport is up",
                      ),
                      i.cleanupSession(),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "ReconnectTransport",
                      )
                    );
                  })
                  .reaction(P.TRANSPORT_PROTOCOL_SMP, function (e) {
                    const t = e.smfMsg.smfHeader,
                      s = x(e.smfMsg.encodedUtf8Subscription),
                      n = t.pm_respcode,
                      r = t.pm_respstr;
                    return (
                      i.handleSubscriptionUpdateError(n, r, s, void 0, !1),
                      this.internalTransition(null)
                    );
                  })
                  .reaction(P.TRANSPORT_CAN_ACCEPT_DATA, function (e) {
                    const t = O.build(
                      N.CAN_ACCEPT_DATA,
                      "",
                      null,
                      0,
                      null,
                      e.toString(),
                    );
                    return (
                      i.emitSessionEvent(t),
                      (i._userBackpressured = !1),
                      this.internalTransition(null)
                    );
                  })
                  .reaction(P.CREATE_SUBSCRIBER, function (e) {
                    const t = i._consumers.add(e.guaranteedFlowObject);
                    return i.sendConsumerSessionUpEvent(t), this;
                  })
                  .exit(function () {
                    return i.clearKeepAlive(), this;
                  })),
                (this.FullyConnected = new g({
                  name: b.FULLY_CONNECTED,
                  parentContext: i.SessionTransportUp,
                }).entry(() => {
                  (i._connectFailEvent = N.DOWN_ERROR), i.scheduleKeepAlive();
                })),
                (this.SessionDisconnected = new g({
                  name: b.DISCONNECTED,
                  parentContext: i,
                })
                  .reaction(P.DISCONNECT, function () {
                    return (
                      i.setPostEventAction(() => {
                        i.emitSessionEvent(O.build(N.DISCONNECTED));
                      }),
                      this.internalTransition(null)
                    );
                  })
                  .reaction(P.CONNECT, function () {
                    return this.transitionTo(i.SessionConnecting);
                  })
                  .reaction(P.EXCEPTION, function () {
                    return this.internalTransition(null);
                  })),
                (this.SessionDisconnecting = new g({
                  name: b.DISCONNECTING,
                  parentContext: i,
                })
                  .initial(
                    () => (
                      h(`Disconnecting session ${i}`),
                      this.transitionTo(i.DisconnectingFlows)
                    ),
                  )
                  .reaction(P.DISCONNECT, function () {
                    return this.internalTransition(null);
                  })
                  .reaction(P.EXCEPTION, function (e) {
                    return (
                      i.setCurrentError({ errEvent: e }),
                      i.cleanupSession(),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "DisconnectTransport",
                      )
                    );
                  })
                  .reaction(P.TRANSPORT_DESTROYED, function () {
                    return (
                      h(
                        "Received unsolicited TRANSPORT_DESTROYED while disconnecting transport",
                      ),
                      i.cleanupSession(),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "DisconnectTransport",
                      )
                    );
                  })),
                (this.DisconnectingFlows = new g(
                  {
                    name: b.DISCONNECTING_FLOWS,
                    parentContext: i.SessionDisconnecting,
                  },
                  {
                    gatherPendingFlows() {
                      const { MessageConsumerEventName: e } = n;
                      c(!this.isGathering), (this.isGathering = !0);
                      const t = (e, t, s) => {
                        if (
                          (c(e, "Trying to listen to undefined flow"),
                          this.known.has(e))
                        )
                          return;
                        this.known.add(e), this.pending.add(e);
                        const n = () => {
                          s.forEach((t) => e._removeListener(t, n)),
                            this.pending.delete(e),
                            this.isGathering || this.checkPendingFlows();
                        };
                        s.forEach((s) => t.call(e, s, n));
                        try {
                          e._disconnectSession();
                        } catch (e) {
                          n();
                        }
                      };
                      i._consumers &&
                        i._consumers.flows.forEach((s) => {
                          t(s, s._once, [e.DOWN, e.DOWN_ERROR]);
                        }),
                        (this.isGathering = !1);
                    },
                    checkPendingFlows() {
                      this.pending,
                        0 === this.pending.size &&
                          (this.gatherPendingFlows(),
                          0 === this.pending.size && this.proceed());
                    },
                    proceed() {
                      (this.known = null),
                        (this.pending = null),
                        h("All flows disconnected"),
                        i.processEvent(new T({ name: P.FLOWS_DISCONNECTED }));
                    },
                  },
                )
                  .entry(function () {
                    (this.known = new Set()),
                      (this.pending = new Set()),
                      this.checkPendingFlows();
                  })
                  .reaction(P.FLOWS_DISCONNECTED, function () {
                    return this.transitionTo(i.FlushingTransport);
                  })),
                (this.FlushingTransport = new g(
                  {
                    name: b.FLUSHING_TRANSPORT,
                    parentContext: i.SessionDisconnecting,
                  },
                  {
                    flushTransport() {
                      i.cleanupSession(),
                        i.flushTransportSession(() =>
                          this.onTransportFlushed(),
                        ),
                        (this.sessionId = null);
                    },
                    onTransportFlushed() {
                      i.processEvent(new T({ name: P.TRANSPORT_FLUSHED }));
                    },
                  },
                )
                  .entry(function () {
                    h("Flushing transport"), this.flushTransport();
                  })
                  .reaction(P.TRANSPORT_FLUSHED, function () {
                    return (
                      h("Handle Transport Flushed"),
                      this.transitionToEntryPoint(
                        i.SessionConnecting,
                        "DisconnectTransport",
                      )
                    );
                  }));
            }
            addToSubscriptionCache(e) {
              if (l.nothing(e) || !this._subscriptionCache) return;
              const { LOG_DEBUG: t } = this.logger,
                s = e.name;
              null === this._subscriptionCache[s] ||
              void 0 === this._subscriptionCache[s]
                ? ((this._subscriptionCache[s] = e),
                  this._subscriptionCacheCount++)
                : (this._subscriptionCache[s] = e);
            }
            cancelOutstandingCorrelatedReq(e) {
              if (l.nothing(e) || !this._correlatedReqs) return null;
              const t = this._correlatedReqs[e];
              if (null == t) return null;
              const { LOG_DEBUG: s, LOG_ERROR: n } = this.logger;
              t.timer && (clearTimeout(t.timer), (t.timer = null));
              try {
                delete this._correlatedReqs[e] ||
                  n(`Cannot delete ctrl request ${e}`);
              } catch (t) {
                n(`Cannot delete ctrl request ${e}`, t);
              }
              return t;
            }
            cleanupSession() {
              const { LOG_INFO: e } = this.logger;
              e("Clean up session");
              const { ConsumerFSMEvent: t, ConsumerFSMEventNames: s } = n;
              this._correlatedReqs &&
                Object.keys(this._correlatedReqs).forEach((e) =>
                  this.cancelOutstandingCorrelatedReq(e),
                ),
                this.clearConnectTimer(),
                this.clearClientCtrlTimer(),
                this.clearKeepAlive(),
                this._consumers.flows.forEach((e) => {
                  e.processFSMEvent(new t({ name: s.SESSION_DOWN }));
                }),
                this._consumers.reconnectingFlows.forEach((e) => {
                  e.processFSMEvent(new t({ name: s.SESSION_DOWN }));
                }),
                this._defaultPublisher &&
                  this._defaultPublisher.processFSMEvent(
                    new r.PublisherFSMEvent({
                      name: r.PublisherFSMEventNames.SESSION_DOWN,
                    }),
                  ),
                this._session.cleanupSession();
            }
            clearClientCtrlTimer() {
              this._clientCtrlTimer &&
                (clearTimeout(this._clientCtrlTimer),
                (this._clientCtrlTimer = null));
            }
            clearConnectTimer() {
              this._connectTimer &&
                (clearTimeout(this._connectTimer),
                (this._connectTimer = void 0));
            }
            clearKeepAlive() {
              const { LOG_INFO: e } = this.logger;
              this._keepAliveTimer &&
                (e("Cancel keepalive timer"),
                clearInterval(this._keepAliveTimer),
                (this._keepAliveTimer = null)),
                this.resetKeepAliveCounter();
            }
            checkNoLocal(e) {
              let t = !0;
              if (!0 === this._sessionProperties.noLocal) {
                const s = e.getRouterCapabilities();
                t = !!s && "boolean" == typeof s[u.NO_LOCAL] && s[u.NO_LOCAL];
              }
              return t;
            }
            checkCompressedSsl(e) {
              const { LOG_TRACE: t } = this.logger;
              if (this._compressedTLS) {
                const t = e.getRouterCapabilities();
                return (
                  !(!t || "boolean" != typeof t[u.COMPRESSED_SSL]) &&
                  !0 === t[u.COMPRESSED_SSL]
                );
              }
              return !0;
            }
            checkSessionDestinationCapability(e) {
              let t = null;
              return (
                e &&
                  e.getType() &&
                  e.getSubscriptionInfo() &&
                  (e.getSubscriptionInfo().isShare ||
                    e.getSubscriptionInfo().isNoExport) &&
                  !this._session.isCapable(u.SHARED_SUBSCRIPTIONS) &&
                  (t = new E(
                    "Shared subscriptions are not allowed by router for this client",
                    _.SHARED_SUBSCRIPTIONS_NOT_SUPPORTED,
                    null,
                  )),
                t
              );
            }
            clearCurrentError() {
              this._currentError = null;
            }
            clearSubscriptionCacheKeys() {
              this._subscriptionCacheKeys = null;
            }
            copySubscriptionCacheKeys() {
              this.clearSubscriptionCacheKeys(),
                (this._subscriptionCacheKeys = Object.keys(
                  this._subscriptionCache || {},
                ));
              const e = A.getP2PTopicSubscription(
                this._sessionProperties.p2pInboxBase,
              );
              this._subscriptionCacheKeys.push(e);
            }
            createMessagePublisher() {
              const { LOG_DEBUG: e } = this.logger;
              if (!this._sessionProperties.publisherProperties.enabled) return;
              const { MessagePublisher: t, MessagePublisherEventName: s } = r,
                n = new t({
                  properties: this._sessionProperties.publisherProperties,
                  sessionInterfaceFactory: this._flowInterfaceFactory,
                });
              n.on(s.UP, () =>
                this.processEvent(
                  new D({ name: P.FLOW_UP }, { guaranteedFlowObject: n }),
                ),
              ),
                n.on(s.CONNECT_FAILED_ERROR, (e) =>
                  this.processEvent(
                    new D(
                      { name: P.FLOW_FAILED },
                      {
                        guaranteedFlowObject: n,
                        event: e,
                        eventText: e.description,
                      },
                    ),
                  ),
                ),
                n.on(s.REJECTED_MESSAGE, (e, t) => {
                  const s = t.smfHeader,
                    n = s.pm_respcode,
                    r = s.pm_respstr,
                    i = p.getADErrorSubcode(n, r),
                    o = O.build(
                      N.REJECTED_MESSAGE_ERROR,
                      r,
                      n,
                      i,
                      e.getCorrelationKey(),
                    );
                  (o.message = e), this.emitSessionEvent(o);
                }),
                n.on(s.ACKNOWLEDGED_MESSAGE, (e) => {
                  const t = O.build(
                    N.ACKNOWLEDGED_MESSAGE,
                    "Message(s) acknowledged",
                    void 0,
                    0,
                    e.getCorrelationKey(),
                  );
                  (t.message = e), this.emitSessionEvent(t);
                }),
                n.on(s.FLOW_NAME_CHANGED, (e) => {
                  const { messages: t, count: s } = e;
                  if (s > 0) {
                    const e = O.build(
                      N.REPUBLISHING_UNACKED_MESSAGES,
                      `Republishing ${s} messages due to Guaranteed Message Publisher failed to reconnect`,
                    );
                    (e.messages = t), (e.count = s), this.emitSessionEvent(e);
                  }
                }),
                n.on(s.CAN_SEND, () => {
                  this.emitSessionEvent(
                    O.build(
                      N.CAN_ACCEPT_DATA,
                      `${n} window is now open and can send`,
                    ),
                  );
                }),
                n.on(s.GUARANTEED_MESSAGING_DOWN, () => {
                  this.emitSessionEvent(
                    O.build(
                      N.GUARANTEED_MESSAGE_PUBLISHER_DOWN,
                      "Guaranteed Message Publishing shut down",
                    ),
                  );
                }),
                (this._defaultPublisher = n);
            }
            sendConsumerSessionUpEvent(e) {
              const { ConsumerFSMEvent: t, ConsumerFSMEventNames: s } = n,
                r = new t({
                  name: this._session.canConnectConsumer
                    ? s.SESSION_UP
                    : s.SESSION_UP_NO_AD,
                });
              (r.guaranteedFlowObject = e), e.processFSMEvent(r);
            }
            sendPublisherSessionUpEvent(e) {
              const t = this._session.canConnectPublisher,
                s = new r.PublisherFSMEvent({
                  name: t
                    ? r.PublisherFSMEventNames.SESSION_UP
                    : r.PublisherFSMEventNames.SESSION_UP_NO_AD,
                });
              (s.guaranteedFlowObject = e), e.processFSMEvent(s);
            }
            createMessageConsumer(e) {
              const { MessageConsumer: t } = n,
                s = new t({
                  properties: e,
                  sessionInterfaceFactory: this._flowInterfaceFactory,
                }),
                r = s.getProperties();
              if (r.topicEndpointSubscription) {
                const e = this.checkSessionDestinationCapability(
                  r.topicEndpointSubscription,
                );
                if (e) throw e;
              }
              const { LOG_WARN: i } = this.logger,
                o = r.requiredSettlementOutcomes;
              if (
                o &&
                o.length > 0 &&
                o.some((e) => e === R.FAILED || R.REJECTED) &&
                !this._session.isCapable(u.AD_APP_ACK_FAILED)
              ) {
                const e = `Session.capabilitySettlementOutcomeNotSupported: [ ${o.map((e) => `solace.MessageOutcome.${R.nameOf(e)}`).join(", ")} ]`;
                throw (i(e), new E(e, _.INVALID_OPERATION, null));
              }
              const a = { guaranteedFlowObject: s };
              return (
                this.processEvent(new D({ name: P.CREATE_SUBSCRIBER }, a)), s
              );
            }
            createQueueBrowser(e) {
              const { MessageConsumerAcknowledgeMode: t, QueueBrowser: s } = n,
                { LOG_DEBUG: r } = this.logger,
                i = {};
              return (
                (i.queueDescriptor = e.queueDescriptor),
                (i.acknowledgeMode = t.CLIENT),
                (i.browser = !0),
                Object.prototype.hasOwnProperty.call(
                  e,
                  "connectTimeoutInMsecs",
                ) && (i.connectTimeoutInMsecs = e.connectTimeoutInMsecs),
                Object.prototype.hasOwnProperty.call(e, "connectAttempts") &&
                  (i.connectAttempts = e.connectAttempts),
                Object.prototype.hasOwnProperty.call(e, "windowSize") &&
                  (i.windowSize = e.windowSize),
                Object.prototype.hasOwnProperty.call(
                  e,
                  "transportAcknowledgeTimeoutInMsecs",
                ) &&
                  (i.transportAcknowledgeTimeoutInMsecs =
                    e.transportAcknowledgeTimeoutInMsecs),
                Object.prototype.hasOwnProperty.call(
                  e,
                  "transportAcknowledgeThresholdPercentage",
                ) &&
                  (i.transportAcknowledgeThresholdPercentage =
                    e.transportAcknowledgeThresholdPercentage),
                new s(this.createMessageConsumer(i))
              );
            }
            destroyTransportSession(e, t) {
              if (l.nothing(this._transport))
                return void this.processEvent(
                  new D({ name: P.TRANSPORT_DESTROYED }),
                );
              const { LOG_INFO: s, LOG_ERROR: n } = this.logger;
              s("Destroy transport session");
              const r = this._transport.destroy(e, t);
              (this._smfClient = null),
                r !== a.TransportReturnCode.OK &&
                  n(
                    `Failed to destroy transport session, return code: ${a.TransportReturnCode.describe(r)}`,
                  );
            }
            disposeInternal() {
              if (this._disposed) return;
              const e = {
                transport: () => {
                  this.destroyTransportSession("Disposing", 0),
                    (this._transport = null),
                    (this._smfClient = null);
                },
                session: () => {
                  this.cleanupSession(),
                    (this._session = null),
                    (this._sessionProperties = null),
                    (this._correlatedReqs = null),
                    (this._flowInterfaceFactory = null);
                },
                statistics: () => {
                  this._sessionStatistics &&
                    (this._sessionStatistics.resetStats(),
                    (this._sessionStatistics = null)),
                    (this._kaStats = null);
                },
                "subscription cache": () => {
                  this._subscriptionCache &&
                    (Object.keys(this._subscriptionCache).forEach((e) =>
                      this.removeFromSubscriptionCache(e),
                    ),
                    (this._subscriptionCache = null)),
                    this.clearSubscriptionCacheKeys(),
                    (this._subscriptionCacheCount = 0);
                },
                MessagePublishers: () => {
                  this._defaultPublisher &&
                    (this._defaultPublisher.dispose(),
                    (this._defaultPublisher = null));
                },
                MessageConsumers: () => {
                  this._consumers.disposeAll(), (this._consumers = null);
                },
                "host list": () => {
                  (this._currentHost = null), (this._hosts = null);
                },
              };
              Object.keys(e).forEach((t) => {
                const { LOG_TRACE: s, LOG_INFO: n } = this.logger,
                  r = e[t];
                try {
                  r();
                } catch (e) {
                  n(`Dispose: ${t} failed:`, e, "...continuing");
                }
              }),
                (this._disposed = !0);
            }
            emitSessionEvent(e) {
              this._session.sendEvent(e);
            }
            enqueueOutstandingCorrelatedReq(e, t, s, n, r) {
              if (l.nothing(e)) return;
              const { LOG_INFO: i } = this.logger;
              i(`Enqueue outstanding ctrl request correlationTag=${e}`);
              let o = null;
              t &&
                (o = setTimeout(
                  t,
                  s || this._sessionProperties.readTimeoutInMsecs,
                ));
              const a = new h(e, o, n, r);
              this._correlatedReqs[e] = a;
            }
            errorInFsm(e, t, s = null) {
              const { LOG_INFO: n } = this.logger,
                r = new D({ name: P.EXCEPTION });
              return (
                n(`Handling error in FSM: ${e} ${s && s.stack}`),
                this.setCurrentError({
                  eventText: e,
                  errorSubcode: t,
                  eventReason: s,
                }),
                this.processEvent(r)
              );
            }
            flushTransportSession(e) {
              this._transport ? this._transport.flush(e) : e();
            }
            getCorrelationTag() {
              return this._smfClient.nextCorrelationTag();
            }
            getCurrentStateName() {
              const e = this.getCurrentState();
              return e
                ? e === this.getFinalState()
                  ? b.DISPOSED
                  : this.getCurrentState().getName()
                : null;
            }
            getStat(e) {
              if (void 0 !== this._sessionStatistics)
                return e === w.TX_TOTAL_DATA_MSGS
                  ? this._sessionStatistics.getStat(w.TX_DIRECT_MSGS) +
                      this._sessionStatistics.getStat(w.TX_PERSISTENT_MSGS) +
                      this._sessionStatistics.getStat(w.TX_NONPERSISTENT_MSGS)
                  : e === w.TX_TOTAL_DATA_BYTES
                    ? this._sessionStatistics.getStat(w.TX_DIRECT_BYTES) +
                      this._sessionStatistics.getStat(w.TX_PERSISTENT_BYTES) +
                      this._sessionStatistics.getStat(w.TX_NONPERSISTENT_BYTES)
                    : this._sessionStatistics.getStat(e);
            }
            getTransportInfo() {
              return l.nothing(this._transport)
                ? "Not connected."
                : this._transport.getInfoStr();
            }
            handleADCtrlMessage(e, t) {
              const s = e.getFlowId(),
                n = t.pm_respstr,
                r = t.pm_corrtag,
                { LOG_INFO: o, LOG_DEBUG: a, LOG_WARN: c } = this.logger;
              if (r) {
                this.updateRxStats(e),
                  o(`Handle SMF response for correlationTag ${r}`);
                const t = this.cancelOutstandingCorrelatedReq(r);
                return l.nothing(t)
                  ? this.errorInFsm(
                      `Cannot find matching request for response: ${n}`,
                      _.INTERNAL_ERROR,
                    )
                  : t.respRecvdCallback
                    ? (t.respRecvdCallback(e, t), this)
                    : (this.incStat(w.RX_REPLY_MSG_DISCARD), this);
              }
              let u;
              const h = e.msgType,
                { SMFAdProtocolMessageType: d } = i;
              switch (h) {
                case d.CLIENTACK:
                case d.CLIENTNACK:
                case d.CLOSEPUBFLOW:
                  this._defaultPublisher.flowId === s &&
                    (u = this._defaultPublisher);
                  break;
                default:
                  u = this._consumers.getFlowById(s);
              }
              if (u && !u.disposed)
                return (
                  this.updateRxStats(e, u),
                  u.handleUncorrelatedControlMessage(e),
                  this
                );
              const p = e.getResponse(),
                E = p ? `"${p.responseCode} ${p.responseString}" ` : "";
              return (
                c(
                  `Dropping ADCTRL.${i.SMFAdProtocolMessageType.describe(e.msgType)} ${E}for unknown flow ${s}`,
                ),
                this.incStat(w.RX_DISCARD_NO_MATCHING_CONSUMER),
                this
              );
            }
            handleADTrMessage(e, t) {
              const { LOG_DEBUG: s } = this.logger,
                n = t.pm_ad_flowid,
                r = this._consumers.getFlowById(n);
              return !r || r.disposed
                ? (this.updateRxStats(e, this._sessionStatistics),
                  this.incStat(w.RX_DISCARD_NO_MATCHING_CONSUMER),
                  null)
                : (this.updateRxStats(e, r), r.handleDataMessage(e), r);
            }
            handleApiSubscriptionTimeout(e, t) {
              if (
                void 0 === this._correlatedReqs[e] ||
                null === this._correlatedReqs[e]
              )
                return;
              const { LOG_INFO: s, LOG_ERROR: n } = this.logger;
              s(`${t || "Subscription timeout"} for correlationTag=${e}`);
              try {
                delete this._correlatedReqs[e] ||
                  n(`Cannot delete ctrl request ${e}`);
              } catch (t) {
                n(`Cannot delete ctrl request ${e}, exception: ${t.message}`);
              }
            }
            handleClientCtrlMessage(e, t) {
              let s;
              const { LOG_INFO: n } = this.logger;
              this.updateRxStats(e),
                e.msgType === i.SMFClientCtrlMessageType.LOGIN
                  ? ((s = a.SMFClient.SMF_CLIENTCTRL_LOGIN_FAKE_CORRELATIONTAG),
                    n("Handle SMF response for ClientCTRL Login"))
                  : ((s = t.pm_corrtag),
                    n(`Handle SMF response for correlationTag ${s}`));
              const r = this.cancelOutstandingCorrelatedReq(s);
              if (l.nothing(r)) {
                const e = t.pm_respstr;
                return this.errorInFsm(
                  `Cannot find matching request for response: ${e}`,
                  _.INTERNAL_ERROR,
                );
              }
              return r.respRecvdCallback
                ? r.respRecvdCallback(e)
                : (n(
                    `Dropping ClientCtrl message due to mismatched correlation tag ${s}`,
                  ),
                  this.incStat(w.RX_REPLY_MSG_DISCARD));
            }
            handleClientCtrlResponse(e) {
              const t = new D({ name: P.TRANSPORT_PROTOCOL_CLIENTCTRL });
              (t.smfMsg = e), this.processEvent(t);
            }
            handleClientCtrlTimeout() {
              const { LOG_INFO: e } = this.logger;
              e("ClientCtrl timeout for session");
              const t = new D({ name: P.DOWNGRADE_TIMEOUT });
              this.processEvent(t);
            }
            handleConnectTimeout() {
              const { LOG_INFO: e } = this.logger;
              e("Connection timeout. Disconnecting");
              const t = new D({ name: P.CONNECT_TIMEOUT });
              this.processEvent(t);
            }
            handleUpdatePropertyTimeout(e, t) {
              const { LOG_ERROR: s } = this.logger;
              try {
                delete this._correlatedReqs[e] ||
                  s(`Cannot delete ctrl request ${e}`);
              } catch (t) {
                s(`Cannot delete ctrl request ${e}, exception: ${t.message}`);
              }
              const n = O.build(
                N.PROPERTY_UPDATE_ERROR,
                t,
                null,
                _.TIMEOUT,
                null,
                null,
              );
              this.sendEvent(n);
            }
            handleRejectedTrMessage(e) {
              const t = e.pm_respcode,
                s = e.pm_tr_topicname_bytes,
                n = s ? s.replace(/\0/g, "") : "",
                r = e.pm_respstr,
                i = p.getErrorSubcode(t, r);
              this.emitSessionEvent(
                O.build(N.REJECTED_MESSAGE_ERROR, r, t, i, null, `Topic: ${n}`),
              );
            }
            handleSMFMessage(e) {
              try {
                const t = e.smfHeader;
                if (t.discardMessage)
                  return (
                    this._sessionStatistics &&
                      this._sessionStatistics.incStat(
                        w.RX_DISCARD_SMF_UNKNOWN_ELEMENT,
                      ),
                    null
                  );
                switch (t.smf_protocol) {
                  case i.SMFProtocol.TRMSG:
                    return t.smf_adf
                      ? this.handleADTrMessage(e, t)
                      : (this.updateRxStats(e, this._sessionStatistics),
                        0 === t.pm_respcode
                          ? this._session.handleDataMessage(e)
                          : this.handleRejectedTrMessage(t));
                  case i.SMFProtocol.ADCTRL:
                    return this.handleADCtrlMessage(e, t);
                  case i.SMFProtocol.CLIENTCTRL:
                    return this.handleClientCtrlMessage(e, t);
                  case i.SMFProtocol.SMP:
                    return this.handleSMPMessage(e, t);
                  case i.SMFProtocol.KEEPALIVE:
                  case i.SMFProtocol.KEEPALIVEV2:
                    return null;
                  default:
                    return this.handleUnknownProtocolMessage(e, t);
                }
              } catch (e) {
                const { LOG_ERROR: t } = this.logger;
                return (
                  t(`Exception in handleSMFMessage, exception: ${e.stack}`),
                  this.errorInFsm(
                    `Exception in handleSMFMessage: ${e.message}`,
                    e.subcode || _.INTERNAL_ERROR,
                    e,
                  )
                );
              }
            }
            handleSMFParseError(e) {
              return this.errorInFsm(e, _.PROTOCOL_ERROR);
            }
            handleSMPMessage(e, t) {
              this.updateRxStats(e);
              const s = this.cancelOutstandingCorrelatedReq(t.pm_corrtag || "");
              if (l.nothing(s) || l.nothing(s.respRecvdCallback)) {
                const t = new D({ name: P.TRANSPORT_PROTOCOL_SMP });
                return (t.smfMsg = e), this.processEvent(t);
              }
              return s.respRecvdCallback(e, s);
            }
            handleSubscriptionUpdateError(e, t, s, n, r) {
              const i = p.getErrorSubcode(e, t);
              i !== _.SUBSCRIPTION_ALREADY_PRESENT &&
                i !== _.SUBSCRIPTION_NOT_FOUND &&
                this.removeFromSubscriptionCache(s),
                this._session.handleSubscriptionUpdateError(e, t, s, n, r);
            }
            handleSubscriptionTimeout(e) {
              const { LOG_ERROR: t } = this.logger;
              try {
                let s = !1;
                this._correlatedReqs && (s = delete this._correlatedReqs[e]),
                  s || t(`Cannot delete ctrl request ${e}`);
              } catch (s) {
                t(`Cannot delete ctrl request ${e}`, s);
              }
              const s = new D({ name: P.SUBSCRIBE_TIMEOUT });
              this.processEvent(s);
            }
            handleTransportEvent(e) {
              const { LOG_INFO: t, LOG_WARN: s } = this.logger,
                n = e.getInfoStr() || "";
              let r;
              switch (
                (t(`Receive transport event: ${e}`), e.getTransportEventCode())
              ) {
                case a.TransportSessionEventCode.UP_NOTICE:
                  (r = new D({ name: P.TRANSPORT_UP })),
                    (r.sessionId = e.getSessionId()),
                    this.processEvent(r);
                  break;
                case a.TransportSessionEventCode.DESTROYED_NOTICE:
                  (r = new D({ name: P.TRANSPORT_DESTROYED })),
                    (r.sessionId = e.getSessionId()),
                    (r.eventText = n),
                    (r.errorSubcode = e.getSubcode()),
                    (r.eventReason = e),
                    (this._smfClient = null),
                    (this._transport = null),
                    this.processEvent(r);
                  break;
                case a.TransportSessionEventCode.CAN_ACCEPT_DATA:
                  this.GuaranteedFlowControlledRelief(),
                    (r = new D({ name: P.TRANSPORT_CAN_ACCEPT_DATA })),
                    (r.sessionId = e.getSessionId()),
                    this.processEvent(r);
                  break;
                case a.TransportSessionEventCode.SEND_ERROR:
                  (r = new D({ name: P.SEND_ERROR })),
                    (r.sessionId = e.getSessionId()),
                    (r.eventText = e.getInfoStr()),
                    (r.errorSubcode = e.getSubcode()),
                    (r.eventReason = e),
                    this.processEvent(r);
                  break;
                case a.TransportSessionEventCode.DATA_DECODE_ERROR:
                case a.TransportSessionEventCode.PARSE_FAILURE:
                  return this.errorInFsm(e.getInfoStr(), e.getSubcode());
                default:
                  s("Received unknown transport session event", e);
              }
              return !0;
            }
            handleUnknownProtocolMessage(e, t) {
              const { LOG_INFO: s, LOG_ERROR: n } = this.logger;
              return (
                this.updateRxStats(e),
                t && t.smf_protocol === i.SMFProtocol.TSESSION
                  ? (n(
                      `Received transport session message instead of SMF message, protocol 0x${F(t.smf_protocol)}`,
                    ),
                    n(
                      `Transport MessageType=${e.messageType}, target sessionId=${F(e.sessionId)}`,
                    ),
                    this.errorInFsm(
                      "Received message with unknown protocol",
                      _.PARSE_FAILURE,
                    ))
                  : (this._sessionStatistics &&
                      this._sessionStatistics.incStat(
                        w.RX_DISCARD_SMF_UNKNOWN_ELEMENT,
                      ),
                    s(
                      `Drop message with unknown protocol 0x${F(t.smf_protocol)}`,
                    ),
                    null)
              );
            }
            incStat(e, t) {
              return this._sessionStatistics
                ? this._sessionStatistics.incStat(e, t)
                : void 0;
            }
            initTransport() {
              const { LOG_INFO: e } = this.logger,
                t = this._currentHost;
              e(`Creating transport session ${t}`),
                (this._kaStats = { lastMsgWritten: 0, lastBytesWritten: 0 }),
                (this._smfClient = new a.SMFClient(
                  (e) => this.handleSMFMessage(e),
                  (e) => this.handleSMFParseError(e),
                  this,
                )),
                (this._transport = a.TransportFactory.createTransport(
                  t,
                  (e) => this.handleTransportEvent(e),
                  this._smfClient,
                  this._sessionProperties.clone(),
                  () => this.sessionIdHex,
                )),
                this.injectTransportInterceptor(this._transportInterceptor);
            }
            injectTransportInterceptor(e) {
              (this._transportInterceptor = e),
                this._transport && this._transport.setInterceptor(e);
            }
            keepAliveTimeout() {
              const { LOG_TRACE: e, LOG_DEBUG: t, LOG_INFO: s } = this.logger;
              if (
                this._keepAliveCounter >=
                this._sessionProperties.keepAliveIntervalsLimit
              )
                return (
                  s(
                    `Exceed maximum keep alive intervals limit ${this._sessionProperties.keepAliveIntervalsLimit}`,
                  ),
                  this._keepAliveTimer && clearInterval(this._keepAliveTimer),
                  this.errorInFsm(
                    "Exceed maximum keep alive intervals limit",
                    _.KEEP_ALIVE_FAILURE,
                  )
                );
              const n = this._transport.getClientStats(),
                r = n.msgWritten,
                o = n.bytesWritten,
                c = new i.KeepAliveMessage();
              return this.send(c, null, !0) !== a.TransportReturnCode.OK
                ? this.errorInFsm(
                    "Cannot send keep alive message",
                    _.KEEP_ALIVE_FAILURE,
                  )
                : ((this._kaStats.lastMsgWritten === r &&
                    this._kaStats.lastBytesWritten < o) ||
                    (this._keepAliveCounter++,
                    this._kaStats.lastMsgWritten,
                    this._kaStats.lastBytesWritten),
                  this._keepAliveCounter,
                  (this._kaStats.lastBytesWritten = n.bytesWritten),
                  (this._kaStats.lastMsgWritten = n.msgWritten),
                  !0);
            }
            prepareAndSendMessage(e) {
              if (e instanceof I) {
                let t;
                const s = e.getDeliveryMode();
                switch (s) {
                  case C.DIRECT:
                    if (!this._transport) return;
                    (e._payload_is_memoized = !1),
                      (e._memoized_csumm = null),
                      (e._memoized_payload = null),
                      (t = this.sendToTransport(e));
                    break;
                  case C.PERSISTENT:
                  case C.NON_PERSISTENT:
                    if (!this._defaultPublisher) {
                      const e = this._session.adLocallyDisabled
                        ? "locally disabled"
                        : "remotely unsupported";
                      throw new E(
                        "Session does not provide Guaranteed Message Publish capability",
                        _.GM_UNAVAILABLE,
                        e,
                      );
                    }
                    this._gmSendDisallowed && this._gmSendDisallowed(),
                      (t = this._defaultPublisher.prepareAdMessageAndSend(e));
                    break;
                  default: {
                    const { LOG_ERROR: e } = this.logger;
                    e("Unhandled message delivery mode", C.describe(s));
                  }
                }
                if (t !== a.TransportReturnCode.OK) {
                  if (t === a.TransportReturnCode.NO_SPACE)
                    throw (
                      ((this._userBackpressured = !0),
                      new E(
                        "Cannot send message - no space in transport",
                        _.INSUFFICIENT_SPACE,
                        a.TransportReturnCode.describe(t),
                      ))
                    );
                  this.setCurrentError(
                    new E(
                      "Cannot send message",
                      _.INVALID_OPERATION,
                      a.TransportReturnCode.describe(t),
                    ),
                  ),
                    this.processEvent(new D({ name: P.EXCEPTION }));
                }
              }
            }
            GuaranteedFlowControlledRelief() {
              this._defaultPublisher &&
                this._defaultPublisher.processFSMEvent(
                  new r.PublisherFSMEvent({
                    name: r.PublisherFSMEventNames.CAN_SEND,
                  }),
                );
            }
            reapplySubscriptions() {
              const { LOG_INFO: e, LOG_DEBUG: t } = this.logger,
                {
                  SolclientFactory: { createTopicDestination: s },
                } = o;
              if (
                (e(
                  `Reapplying subscriptions, count=${this._subscriptionCacheKeys.length}`,
                ),
                !this._subscriptionCacheKeys)
              )
                return !0;
              try {
                for (; this._subscriptionCacheKeys.length; ) {
                  const e = this._subscriptionCacheKeys.shift(),
                    t = 0 === this._subscriptionCacheKeys.length,
                    n = s(e),
                    r = this.sendSubscribe(
                      n,
                      t,
                      null,
                      this._sessionProperties.readTimeoutInMsecs,
                      null,
                    );
                  r !== a.TransportReturnCode.OK &&
                    this.errorInFsm(
                      `Error occurred sending subscription: ${a.TransportReturnCode.describe(r)}`,
                      _.INTERNAL_ERROR,
                    );
                }
              } catch (e) {
                if (e instanceof E && e.subcode === _.INSUFFICIENT_SPACE)
                  return !1;
                this.errorInFsm(
                  `Unexpected expection occurred while reapplying subscriptions: ${e}`,
                  e.subcode || _.INTERNAL_ERROR,
                  e,
                );
              }
              return !0;
            }
            removeFromSubscriptionCache(e) {
              if (l.nothing(e) || !this._subscriptionCache) return null;
              const { LOG_DEBUG: t, LOG_ERROR: s } = this.logger,
                n = e instanceof d ? e.name : e,
                r = this._subscriptionCache[n];
              if (null == r) return null;
              try {
                delete this._subscriptionCache[n]
                  ? this._subscriptionCacheCount--
                  : s(`Cannot remove subscription ${n}`);
              } catch (e) {
                s(`Cannot remove subscription ${n}`, e);
              }
              return r;
            }
            reset() {
              this.resetStats(),
                (this.sessionId = null),
                (this._keepAliveTimer = null),
                this.resetKeepAliveCounter(),
                (this._correlatedReqs = {}),
                (this._disposed = !1),
                (this._smfClient = null),
                (this._kaStats = { lastMsgWritten: 0, lastBytesWritten: 0 }),
                (this._subscriptionCache = null),
                (this._subscriptionCacheKeys = null),
                (this._subscriptionCacheCount = 0),
                this._sessionProperties.reapplySubscriptions &&
                  (this._subscriptionCache = {}),
                (this._eventCode = null),
                (this._responseCode = null),
                (this.eventText = null),
                (this.errorSubcode = null),
                (this.eventReason = null);
            }
            resetKeepAliveCounter() {
              this._keepAliveCounter = 0;
            }
            resetStats() {
              return this._sessionStatistics
                ? this._sessionStatistics.resetStats()
                : void 0;
            }
            scheduleKeepAlive() {
              const { LOG_DEBUG: e, LOG_ERROR: t } = this.logger,
                { keepAliveIntervalInMsecs: s } = this._sessionProperties;
              0 !== s &&
                (this._keepAliveTimer && clearInterval(this._keepAliveTimer),
                (this._keepAliveTimer = setInterval(() => {
                  try {
                    this.keepAliveTimeout();
                  } catch (e) {
                    t("Error occurred in keepAliveTimeout", e);
                  }
                }, s)));
            }
            send(e, t = this._sessionStatistics, s = !1) {
              try {
                return this.sendToTransport(e, t, s);
              } catch (e) {
                const { LOG_TRACE: t } = this.logger;
                e.message,
                  e.stack,
                  this.errorInFsm(
                    `Send operation failed: ${e.message}`,
                    e.subcode || _.CONNECTION_ERROR,
                  );
              }
              return a.TransportReturnCode.CONNECTION_ERROR;
            }
            sendToTransport(e, t = this._sessionStatistics, s = !1) {
              let n = a.TransportReturnCode.CONNECTION_ERROR;
              if (!this._transport)
                throw new E("Transport has been destroyed", _.INTERNAL_ERROR);
              const r = i.Codec.Encode.encodeCompoundMessage(e);
              switch (((n = this._transport.send(r, s)), n)) {
                case a.TransportReturnCode.OK:
                  this.updateTxStats(e, t);
                  break;
                case a.TransportReturnCode.NO_SPACE:
                  if (!s) break;
                default:
                  throw new E(
                    `Transport returned ${a.TransportReturnCode.describe(n)}`,
                    _.INTERNAL_ERROR,
                  );
              }
              return n;
            }
            sendClientCtrlLogin() {
              const { LOG_INFO: e, LOG_DEBUG: t, LOG_TRACE: s } = this.logger;
              (this._compressedTLS =
                this._sessionProperties.compressionLevel > 0 &&
                null !== this._currentHost.match(/tcps:/i)),
                (this._plaintextTLS =
                  null !== this._currentHost.match(/tcps:/i) &&
                  this._sessionProperties.sslConnectionDowngradeTo ===
                    M.PLAINTEXT),
                this._plaintextTLS,
                this._compressedTLS;
              const n = i.ClientCtrlMessage.getLogin(
                  this._sessionProperties,
                  this._compressedTLS,
                  this._plaintextTLS,
                ),
                r = this.send(n);
              if (r !== a.TransportReturnCode.OK)
                (this._responseCode = null),
                  (this.eventReason = null),
                  r === a.TransportReturnCode.NO_SPACE
                    ? ((this.eventText =
                        "Cannot send client control - no space in transport"),
                      (this.errorSubcode = _.INSUFFICIENT_SPACE))
                    : (e(
                        `Cannot send client ctrl, return code\n          ${a.TransportReturnCode.describe(r)}`,
                      ),
                      (this.eventText = "Cannot send client ctrl"),
                      (this.errorSubcode = _.INVALID_OPERATION));
              else {
                const t = a.SMFClient.SMF_CLIENTCTRL_LOGIN_FAKE_CORRELATIONTAG;
                e(
                  `Using internally correlationTag=${t} for tracking ClientCTRL Login`,
                ),
                  this.enqueueOutstandingCorrelatedReq(
                    t,
                    null,
                    null,
                    null,
                    (e) => this.handleClientCtrlResponse(e),
                  );
              }
              return r;
            }
            sendSubscribe(e, t, s, n, r) {
              const { LOG_INFO: o, LOG_DEBUG: u } = this.logger;
              c(
                e instanceof d,
                "sendSubscribe requires a Destination, not a string",
              );
              const l = this.getCorrelationTag(),
                h = i.SMPMessage.getSubscriptionMessage(l, e, !0, t);
              c(h.encodedUtf8Subscription, "Encoded SMP message was invalid");
              const p = this.send(h);
              return p !== a.TransportReturnCode.OK
                ? (o("Subscribe failed", a.TransportReturnCode.describe(p)), p)
                : (t &&
                    this.enqueueOutstandingCorrelatedReq(
                      l,
                      () => this.handleSubscriptionTimeout(l),
                      n || this._sessionProperties.readTimeoutInMsecs,
                      s,
                      r,
                    ),
                  p);
            }
            sendUpdateProperty(e, t, s, n, r) {
              const o = this._smfClient.nextCorrelationTag(),
                c = i.ClientCtrlMessage.getUpdate(e, t, o),
                u = this.send(c);
              return (
                u !== a.TransportReturnCode.OK ||
                  this.enqueueOutstandingCorrelatedReq(
                    o,
                    () => this.handleUpdatePropertyTimeout(o),
                    n || this._sessionProperties.readTimeoutInMsecs,
                    s,
                    r,
                  ),
                u
              );
            }
            setClientCtrlTimer() {
              this.clearClientCtrlTimer(),
                (this._clientCtrlTimer = setTimeout(
                  () => this.handleClientCtrlTimeout(),
                  this._sessionProperties.transportDowngradeTimeoutInMsecs,
                ));
            }
            setConnectTimer() {
              this.clearConnectTimer(),
                (this._connectTimer = setTimeout(
                  () => this.handleConnectTimeout(),
                  this._sessionProperties.connectTimeoutInMsecs,
                ));
            }
            setCurrentError(e) {
              const t = this._currentError || {},
                { LOG_TRACE: s } = this.logger;
              Object.keys(e).forEach(
                (s) =>
                  null !== e[s] &&
                  void 0 !== e[s] &&
                  (null !== t[s] && void 0 !== t[s]
                    ? (t[s], e[s], !1)
                    : ((t[s] = e[s]), !0)),
              ),
                (this._currentError = t);
            }
            subscriptionUpdate(e, t, s, n, r, o) {
              const c = this.checkSessionDestinationCapability(e);
              if (c) throw c;
              const u = U[r] || U.default,
                l = r !== y.REMOVE_DTE_SUBSCRIPTION,
                h = r === y.ADD_SUBSCRIPTION || r === y.ADD_P2PINBOX,
                d = this.getCorrelationTag(),
                p = (
                  l
                    ? i.SMPMessage.getSubscriptionMessage
                    : i.AdProtocolMessage.getDTEUnsubscribeMessage
                )(d, e, h, t),
                _ = this.send(p);
              return (
                _ !== a.TransportReturnCode.OK ||
                  (t &&
                    this.enqueueOutstandingCorrelatedReq(
                      d,
                      () => this.handleApiSubscriptionTimeout(d, u),
                      n || this._sessionProperties.readTimeoutInMsecs,
                      s,
                      o,
                    ),
                  r === y.ADD_SUBSCRIPTION &&
                  this._sessionProperties.reapplySubscriptions
                    ? this.addToSubscriptionCache(e)
                    : r === y.REMOVE_SUBSCRIPTION &&
                      this._sessionProperties.reapplySubscriptions &&
                      this.removeFromSubscriptionCache(e)),
                _
              );
            }
            queueSubscriptionUpdate(e, t, s, n, r) {
              const o = n ? U[y.ADD_SUBSCRIPTION] : U[y.REMOVE_SUBSCRIPTION],
                c = this.getCorrelationTag(),
                u = i.SMPMessage.getQueueSubscriptionMessage(c, e, t, n),
                l = this.send(u);
              return (
                l !== a.TransportReturnCode.OK ||
                  this.enqueueOutstandingCorrelatedReq(
                    c,
                    () => {
                      const e = this._correlatedReqs[c];
                      this.handleApiSubscriptionTimeout(c, o), r(null, e);
                    },
                    s || this._sessionProperties.readTimeoutInMsecs,
                    null,
                    r,
                  ),
                l
              );
            }
            updateRxStats(e, t = this._sessionStatistics) {
              if (!t) return;
              const s = e.smfHeader;
              if (!s) return;
              const n = s.pm_deliverymode || 0,
                r = W[n],
                o = k[n],
                a = s.messageLength;
              switch (s.smf_protocol) {
                case i.SMFProtocol.TRMSG:
                  0 === s.pm_respcode &&
                    (t.incStat(w.RX_TOTAL_DATA_MSGS),
                    t.incStat(r),
                    t.incStat(w.RX_TOTAL_DATA_BYTES, a),
                    t.incStat(o, a),
                    s.smf_di && t.incStat(w.RX_DISCARD_MSG_INDICATION));
                  break;
                case i.SMFProtocol.CLIENTCTRL:
                case i.SMFProtocol.SMP:
                case i.SMFProtocol.KEEPALIVE:
                case i.SMFProtocol.KEEPALIVEV2:
                case i.SMFProtocol.ADCTRL:
                  t.incStat(w.RX_CONTROL_MSGS),
                    t.incStat(w.RX_CONTROL_BYTES, a);
              }
            }
            updateTxStats(e, t = this._sessionStatistics) {
              if (!t) return;
              void 0 !== e.getReplyTo &&
                e.getReplyTo() &&
                t.incStat(w.TX_REQUEST_SENT);
              const s = e.smfHeader;
              if (!s) return;
              const n = s.pm_deliverymode || 0;
              let r = G[n],
                o = B[n];
              n !== C.DIRECT && e.isRedelivered() && ((r = $[n]), (o = q[n]));
              const a = s.messageLength;
              switch (s.smf_protocol) {
                case i.SMFProtocol.TRMSG:
                  t.incStat(r), t.incStat(o, a);
                  break;
                case i.SMFProtocol.CLIENTCTRL:
                case i.SMFProtocol.SMP:
                case i.SMFProtocol.KEEPALIVE:
                case i.SMFProtocol.KEEPALIVEV2:
                case i.SMFProtocol.ADCTRL:
                  t.incStat(w.TX_CONTROL_MSGS),
                    t.incStat(w.TX_CONTROL_BYTES, a);
              }
            }
            updateReadonlySessionProps(e) {
              const t = this._sessionProperties;
              t._setVpnNameInUse(e.getVpnNameInUseValue() || "");
              const s = t.virtualRouterName,
                n = e.getVridInUseValue() || "";
              t._setVirtualRouterName(n),
                "" !== s && s !== n && this.handleVirtualRouterNameChange(s, n),
                t._setP2pInboxBase(e.getP2PTopicValue() || ""),
                t._setP2pInboxInUse(A.getP2PInboxTopic(t.p2pInboxBase)),
                this._session.updateCapabilities(e.getRouterCapabilities());
              const r = this._session._getCapability(
                u.GUARANTEED_MESSAGE_PUBLISH,
              );
              this._gmSendDisallowed =
                "boolean" != typeof r || r
                  ? null
                  : () => {
                      throw new E(
                        "Sending guaranteed message is not allowed by router for this client",
                        _.INVALID_OPERATION,
                        null,
                      );
                    };
            }
            handleVirtualRouterNameChange(e, t) {
              this._consumers &&
                (this._consumers.flows.forEach((e) => e.onVRNChanged()),
                this._consumers.reconnectingFlows.forEach((e) =>
                  e.onVRNChanged(),
                )),
                this.emitSessionEvent(
                  O.build(
                    N.VIRTUALROUTER_NAME_CHANGED,
                    `Virtual router name is changed from ${e} to ${t}`,
                    null,
                    0,
                    null,
                    null,
                  ),
                );
            }
            get sessionIdHex() {
              return (this.sessionId && F(this.sessionId)) || "N/A";
            }
            updateTransportCompression(e) {
              const { LOG_TRACE: t } = this.logger;
              return (
                this._plaintextTLS,
                this._compressedTLS,
                this._plaintextTLS
                  ? (a.TransportFactory.severTls(
                      this._transport,
                      this._compressedTLS,
                      e,
                    ),
                    null)
                  : this._compressedTLS
                    ? a.TransportFactory.startCompression(this._transport)
                    : this._transport
              );
            }
          };
        },
        413: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionOperation = n.new({
            CONNECT: "CONNECT",
            DISCONNECT: "DISCONNECT",
            CTRL: "CTRL",
            SEND: "SEND",
            QUERY_OPERATION: "QUERY_OPERATION",
          });
        },
        928: (e, t, s) => {
          const n = s(6780),
            r = (s(2975), s(7291)),
            { APIPropertiesValidators: i, parseURL: o } = s(7882),
            { AuthenticationScheme: a } = s(3278),
            { Check: c } = s(2201),
            { ErrorSubcode: u, OperationError: l } = s(3870),
            { LOG_WARN: h, LOG_INFO: d } = s(390),
            { SslDowngrade: p } = s(5153),
            { TransportProtocol: _ } = s(3147),
            {
              validateInstance: E,
              valArrayIsMember: T,
              valArrayOfString: g,
              valBoolean: S,
              valLength: m,
              valNotEmpty: f,
              valNumber: I,
              valRange: R,
              valString: C,
              valStringOrArray: A,
            } = i,
            O = ["http:", "https:", "ws:", "wss:", "tcp:", "tcps:"];
          function N(e, t, s) {
            const n = r.ClientCtrlMessage.validateClientName(
              t[s],
              (t) =>
                new l(
                  `${e} validation: Property '${s}': ${t}`,
                  u.PARAMETER_OUT_OF_RANGE,
                ),
            );
            if (n) throw n;
          }
          function P(e, t, s, n, r, i) {
            const o = t[s];
            if (
              !(
                (i && null === o) ||
                void 0 === o ||
                n.values.some((e) => e === o)
              )
            )
              throw new l(
                `${e} validation: Property '${s}' must be a member of ${r}`,
                u.PARAMETER_INVALID_TYPE,
              );
          }
          function D(e, t, s) {
            const n = t[s],
              r = "string" == typeof n ? n.split(",") : n;
            if (!c.array(r))
              throw new l(
                `${e} validation: Property '${s}' not an array or comma-delimited string`,
                u.PARAMETER_INVALID_TYPE,
              );
            r.forEach((t) => {
              let n = null;
              try {
                n = o(t);
              } catch (n) {
                throw new l(
                  `${e} validation: Property '${s}' contained an invalid URL: ${t}`,
                  u.PARAMETER_OUT_OF_RANGE,
                );
              }
              if (!c.included(n.protocol, O))
                throw new l(
                  `${e} validation: Property '${s}' contained a URL'${n.href}' with an invalid protocol: '${n.protocol}'`,
                  u.PARAMETER_OUT_OF_RANGE,
                );
            });
          }
          function y(e, t, s) {
            return (function (e, t, s, n) {
              const r = e[t];
              if (r instanceof Array) {
                const e = r.length;
                for (let t = 0; t < e; t++) {
                  const e = r[t];
                  if (n) {
                    if (n && (!c.string(e) || !e.match(s))) return !1;
                  } else if (c.string(e) && e.match(s)) return !0;
                }
                if (!n) return !1;
                if (n) return !0;
              }
              return c.string(r) && r.match(s);
            })(e, t, /^(https|wss|tcps):/i, s);
          }
          const b = {
            validate(e) {
              const t = E.bind(null, "SessionProperties", e);
              if (
                (t("url", [f], [A], [D]),
                t("userName", [C], [m, 189]),
                t("password", [C], [m, 128]),
                t("clientName", [C], [m, 160], [N]),
                t("applicationDescription", [C], [m, 254]),
                t("vpnName", [C], [m, 32]),
                t("connectTimeoutInMsecs", [I], [R, 1, Number.MAX_VALUE]),
                t("connectRetriesPerHost", [I], [R, -1, Number.MAX_VALUE]),
                t("connectRetries", [I], [R, -1, Number.MAX_VALUE]),
                t("reconnectRetries", [I], [R, -1, Number.MAX_VALUE]),
                t("reconnectRetryWaitInMsecs", [I], [R, 0, 6e4]),
                t("readTimeoutInMsecs", [I], [R, 1, Number.MAX_VALUE]),
                t("sendBufferMaxSize", [I], [R, 1, Number.MAX_VALUE]),
                t("maxWebPayload", [I], [R, 100, Number.MAX_VALUE]),
                t(
                  "bufferedAmountQueryIntervalInMsecs",
                  [I],
                  [R, 4, Number.MAX_VALUE],
                ),
                t("generateSendTimestamps", [S]),
                t("generateReceiveTimestamps", [S]),
                t("includeSenderId", [S]),
                t("keepAliveIntervalInMsecs", [I], [R, 0, Number.MAX_VALUE]),
                t("keepAliveIntervalsLimit", [I], [R, 3, Number.MAX_VALUE]),
                t("generateSequenceNumber", [S]),
                t("subscriberLocalPriority", [I], [R, 1, 4]),
                t("subscriberNetworkPriority", [I], [R, 1, 4]),
                t("ignoreDuplicateSubscriptionError", [S]),
                t("ignoreSubscriptionNotFoundError", [S]),
                t("reapplySubscriptions", [S]),
                t("noLocal", [S]),
                t(
                  "transportDowngradeTimeoutInMsecs",
                  [I],
                  [R, 1, Number.MAX_VALUE],
                ),
                t("idToken", [C]),
                t("accessToken", [C]),
                e.transportProtocol && e.webTransportProtocolList)
              )
                throw new l(
                  "SessionProperties validation: Property 'transportProtocol' and 'webTransportProtocolList' cannot be set at the same time",
                  u.PARAMETER_OUT_OF_RANGE,
                );
              if (
                null !== e.webTransportProtocolList &&
                void 0 !== e.webTransportProtocolList
              ) {
                if (!Array.isArray(e.webTransportProtocolList))
                  throw new l(
                    "Property 'webTransportProtocolList' must be an array if set",
                    u.PARAMETER_INVALID_TYPE,
                  );
                if (0 === e.webTransportProtocolList.length)
                  throw new l(
                    "Property 'webTransportProtocolList' must be non-empty if set",
                    u.PARAMETER_OUT_OF_RANGE,
                  );
              }
              t("authenticationScheme", [P, a, "AuthenticationScheme", !1]);
              const s = e.authenticationScheme === a.CLIENT_CERTIFICATE;
              if (!y(e, "url", !0) && s)
                throw new l(
                  "SessionProperties validation: Property 'authenticationScheme' cannot be set to client certificate for unsecured sessions",
                  u.PARAMETER_OUT_OF_RANGE,
                );
              if (c.equal(e.authenticationScheme, a.OAUTH2)) {
                if (!y(e, "url", !0))
                  throw new l(
                    `SessionProperties validation: Property 'authenticationScheme' cannot be set to '${a.OAUTH2}' unless the session property 'url' is written to use a secure communication protocol like tcps or https.`,
                    u.PARAMETER_CONFLICT,
                  );
                if (c.empty(e.idToken) && c.empty(e.accessToken))
                  throw new l(
                    `SessionProperties validation: Property 'authenticationScheme' can be set to '${a.OAUTH2}' only if there is an accompanying token set as a session property. The token types that are supported for OAuth authentication are OAuth2.0 Access Tokens and OpenID Connect ID Tokens. To set an access token you can use the accessToken session property. To set an id you can use the idToken session property.`,
                    u.PARAMETER_CONFLICT,
                  );
              } else
                (c.empty(e.idToken) && c.empty(e.accessToken)) ||
                  d(
                    `SessionProperties validation: Property 'authenticationScheme' must be set to '${a.OAUTH2}'in order to use either  an OAUTH2 access token or an OpenID Connect ID token.`,
                  );
              t("transportProtocol", [P, _, "TransportProtocol", !0]),
                t("webTransportProtocolList", [
                  T,
                  _,
                  "TransportProtocol",
                  !0,
                  !1,
                  !1,
                ]),
                (function (e, t) {
                  if (
                    t.length > 0 &&
                    (function (e) {
                      return (
                        e &&
                        (e === _.HTTP_BINARY_STREAMING ||
                          e === _.HTTP_BINARY ||
                          e === _.HTTP_BASE64)
                      );
                    })(e)
                  ) {
                    const s = t.length <= 5 ? t : t.slice(0, 5);
                    throw new l(
                      `SessionProperties validation: properties that are not supported by transport protocol ${e} have been set: ${s}`,
                      u.PARAMETER_OUT_OF_RANGE,
                    );
                  }
                })(e.transportProtocol, e.nonHTTPTransportPropsSet),
                e.publisherProperties &&
                  n.MessagePublisherPropertiesValidator.validate(
                    e.publisherProperties,
                  );
              const r = e.defaultConnectTimeoutInMsecs,
                i = e.connectTimeoutInMsecs;
              (e.webTransportProtocolList
                ? e.webTransportProtocolList.length
                : 1) > 1 &&
                i < r &&
                h(
                  `Connect timeout of ${i} msecs is less than default and recommended minimum of ${r} msecs for current transport selection. Transport downgrades may not complete.`,
                );
            },
          };
          e.exports.SessionPropertiesValidator = b;
        },
        2975: (e, t, s) => {
          s(2545);
          const n = s(6780),
            { APIProperties: r } = s(7882),
            { AuthenticationScheme: i } = s(3278),
            { Check: o } = s(2201),
            { LOG_WARN: a } = s(390),
            { SslDowngrade: c } = s(5153),
            u = class extends r {
              get transportProtocol() {
                return o.nothing(this._tpProtocol) ? null : this._tpProtocol;
              }
              set transportProtocol(e) {
                this._tpProtocol = e;
              }
              get transportDowngradeTimeoutInMsecs() {
                return o.nothing(this._tpDowngradeTimeout)
                  ? 3e3
                  : this._tpDowngradeTimeout;
              }
              set transportDowngradeTimeoutInMsecs(e) {
                this._tpDowngradeTimeout = e;
              }
              get webTransportProtocolList() {
                return o.nothing(this._transportProtocolList)
                  ? null
                  : this._transportProtocolList;
              }
              set webTransportProtocolList(e) {
                this._transportProtocolList = e;
              }
              get bufferedAmountQueryIntervalInMsecs() {
                return o.nothing(this._bufferedAmountQueryInterval)
                  ? 100
                  : this._bufferedAmountQueryInterval;
              }
              set bufferedAmountQueryIntervalInMsecs(e) {
                this._bufferedAmountQueryInterval = e;
              }
              get transportProtocolInUse() {
                return this._tpProtocolInUse || null;
              }
              _setTransportProtocolInUse(e) {
                this._tpProtocolInUse = e;
              }
              get webTransportProtocolInUse() {
                return this._tpProtocolInUse || null;
              }
              _setWebTransportProtocolInUse(e) {
                this._tpProtocolInUse = e;
              }
              get transportContentType() {
                return this._tpContentType || "text/plain";
              }
              set transportContentType(e) {
                this._tpContentType = e;
              }
              _lendsInspect() {
                return {
                  bufferedAmountQueryIntervalInMsecs:
                    this.bufferedAmountQueryIntervalInMsecs,
                  transportContentType: this.transportContentType,
                  transportDowngradeTimeoutInMsecs:
                    this.transportDowngradeTimeoutInMsecs,
                  transportProtocol: this.transportProtocol,
                  transportProtocolInUse: this.transportProtocolInUse,
                  webTransportProtocolList: this.webTransportProtocolList,
                };
              }
            };
          e.exports.SessionProperties = class extends u {
            constructor(e) {
              super(
                (function () {
                  const { MessagePublisherProperties: e } = n;
                  return {
                    _vpnNameInUse: "",
                    _virtualRouterName: "",
                    _p2pInboxInUse: "",
                    _p2pInboxBase: "",
                    _userIdentification: "",
                    _tpProtocolInUse: null,
                    _tpContentType: "text/plain",
                    _publisherProperties: new e(),
                  };
                })(),
                e,
              );
            }
            get authenticationScheme() {
              return o.nothing(this._authScheme) ? i.BASIC : this._authScheme;
            }
            set authenticationScheme(e) {
              this._authScheme = e;
            }
            get accessToken() {
              return o.empty(this._accessToken) ? "" : this._accessToken;
            }
            set accessToken(e) {
              this._accessToken = e;
            }
            get idToken() {
              return o.empty(this._idToken) ? "" : this._idToken;
            }
            set idToken(e) {
              this._idToken = e;
            }
            get issuerIdentifier() {
              return o.empty(this._issuerIdentifier)
                ? ""
                : this._issuerIdentifier;
            }
            set issuerIdentifier(e) {
              o.type(e, "string")
                ? o.empty(e)
                  ? a(
                      "Failed to set the issuer identifier because the passed string was empty or null. The passed issuer identifier must not be empty or null. Setting issuer identifier to default value empty string.",
                    )
                  : (this._issuerIdentifier = e)
                : (a(
                    "Failed to set issuer identifier because the pased value was not of type String. The passed issuer identifier must be of type String. Setting issuer identifier to default value empty string.",
                  ),
                  (this._issuerIdentifier = ""));
            }
            get url() {
              return o.nothing(this._url) ? "" : this._url;
            }
            set url(e) {
              this._url = e;
            }
            get password() {
              return o.nothing(this._password) ? "" : this._password;
            }
            set password(e) {
              this._password = e;
            }
            get userName() {
              return o.nothing(this._userName) ? "" : this._userName;
            }
            set userName(e) {
              this._userName = e;
            }
            get clientName() {
              return o.nothing(this._clientName) ? "" : this._clientName;
            }
            set clientName(e) {
              this._clientName = e;
            }
            get applicationDescription() {
              return o.nothing(this._appDesc) ? "" : this._appDesc;
            }
            set applicationDescription(e) {
              this._appDesc = e;
            }
            get vpnName() {
              return o.nothing(this._vpnName) ? "" : this._vpnName;
            }
            set vpnName(e) {
              this._vpnName = e;
            }
            get vpnNameInUse() {
              return o.nothing(this._vpnNameInUse) ? "" : this._vpnNameInUse;
            }
            _setVpnNameInUse(e) {
              this._vpnNameInUse = e;
            }
            get virtualRouterName() {
              return o.nothing(this._virtualRouterName)
                ? ""
                : this._virtualRouterName;
            }
            _setVirtualRouterName(e) {
              this._virtualRouterName = e;
            }
            get connectTimeoutInMsecs() {
              return o.nothing(this._connectTimeout)
                ? this.defaultConnectTimeoutInMsecs
                : this._connectTimeout;
            }
            set connectTimeoutInMsecs(e) {
              this._connectTimeout = e;
            }
            get defaultConnectTimeoutInMsecs() {
              const {
                  webTransportProtocolList: e,
                  transportDowngradeTimeoutInMsecs: t,
                } = this,
                s = e ? e.length : 1,
                n = s * t + (s > 1 ? 1e3 : 0);
              return Math.max(8e3, n);
            }
            get connectRetries() {
              return o.nothing(this._connectRetries)
                ? 20
                : this._connectRetries;
            }
            set connectRetries(e) {
              this._connectRetries = e;
            }
            get connectRetriesPerHost() {
              return o.nothing(this._connectRetriesPerHost)
                ? 0
                : this._connectRetriesPerHost;
            }
            set connectRetriesPerHost(e) {
              this._connectRetriesPerHost = e;
            }
            get reconnectRetryWaitInMsecs() {
              return o.nothing(this._reconnectRetryWaitInMsecs)
                ? 3e3
                : this._reconnectRetryWaitInMsecs;
            }
            set reconnectRetryWaitInMsecs(e) {
              this._reconnectRetryWaitInMsecs = e;
            }
            get reconnectRetries() {
              return o.nothing(this._reconnectRetries)
                ? 20
                : this._reconnectRetries;
            }
            set reconnectRetries(e) {
              this._reconnectRetries = e;
            }
            get generateSendTimestamps() {
              return (
                !o.nothing(this._genSendTimestamps) && this._genSendTimestamps
              );
            }
            set generateSendTimestamps(e) {
              this._genSendTimestamps = e;
            }
            get generateReceiveTimestamps() {
              return (
                !o.nothing(this._genReceiveTimestamps) &&
                this._genReceiveTimestamps
              );
            }
            set generateReceiveTimestamps(e) {
              this._genReceiveTimestamps = e;
            }
            get includeSenderId() {
              return !o.nothing(this._includeSenderId) && this._includeSenderId;
            }
            set includeSenderId(e) {
              this._includeSenderId = e;
            }
            get generateSequenceNumber() {
              return (
                !o.nothing(this._genSequenceNumber) && this._genSequenceNumber
              );
            }
            set generateSequenceNumber(e) {
              this._genSequenceNumber = e;
            }
            get keepAliveIntervalInMsecs() {
              return o.nothing(this._kaInterval) ? 3e3 : this._kaInterval;
            }
            set keepAliveIntervalInMsecs(e) {
              this._kaInterval = e;
            }
            get keepAliveIntervalsLimit() {
              return o.nothing(this._kaIntervalsLimit)
                ? 3
                : this._kaIntervalsLimit;
            }
            set keepAliveIntervalsLimit(e) {
              this._kaIntervalsLimit = e;
            }
            get p2pInboxInUse() {
              return o.nothing(this._p2pInboxInUse) ? "" : this._p2pInboxInUse;
            }
            _setP2pInboxInUse(e) {
              this._p2pInboxInUse = e;
            }
            get p2pInboxBase() {
              return o.nothing(this._p2pInboxBase) ? "" : this._p2pInboxBase;
            }
            _setP2pInboxBase(e) {
              this._p2pInboxBase = e;
            }
            get userIdentification() {
              return o.nothing(this._userIdentification)
                ? ""
                : this._userIdentification;
            }
            _setUserIdentification(e) {
              this._userIdentification = e;
            }
            get subscriberLocalPriority() {
              return o.nothing(this._subLocalPriority)
                ? 1
                : this._subLocalPriority;
            }
            set subscriberLocalPriority(e) {
              this._subLocalPriority = e;
            }
            get subscriberNetworkPriority() {
              return o.nothing(this._subNetworkPriority)
                ? 1
                : this._subNetworkPriority;
            }
            set subscriberNetworkPriority(e) {
              this._subNetworkPriority = e;
            }
            get ignoreDuplicateSubscriptionError() {
              return (
                !!o.nothing(this._ignoreDupSubError) || this._ignoreDupSubError
              );
            }
            set ignoreDuplicateSubscriptionError(e) {
              this._ignoreDupSubError = e;
            }
            get ignoreSubscriptionNotFoundError() {
              return (
                !!o.nothing(this._ignoreSubNotFoundError) ||
                this._ignoreSubNotFoundError
              );
            }
            set ignoreSubscriptionNotFoundError(e) {
              this._ignoreSubNotFoundError = e;
            }
            get reapplySubscriptions() {
              return (
                !o.nothing(this._reapplySubcriptions) &&
                this._reapplySubcriptions
              );
            }
            set reapplySubscriptions(e) {
              this._reapplySubcriptions = e;
            }
            get publisherProperties() {
              return this._publisherProperties;
            }
            set publisherProperties(e) {
              const { MessagePublisherProperties: t } = n;
              this._publisherProperties = e instanceof t ? e : new t(e);
            }
            get noLocal() {
              return !o.nothing(this._noLocal) && this._noLocal;
            }
            set noLocal(e) {
              this._noLocal = e;
            }
            get readTimeoutInMsecs() {
              return o.nothing(this._readTimeout) ? 1e4 : this._readTimeout;
            }
            set readTimeoutInMsecs(e) {
              this._readTimeout = e;
            }
            get sendBufferMaxSize() {
              return o.nothing(this._sendBufferMaxSize)
                ? 65536
                : this._sendBufferMaxSize;
            }
            set sendBufferMaxSize(e) {
              this._sendBufferMaxSize = e;
            }
            get assumedMaxAdSize() {
              return o.nothing(this._assumedMaxAdSize)
                ? 3e7
                : this._assumedMaxAdSize;
            }
            set assumedMaxAdSize(e) {
              this._assumedMaxAdSize = e;
            }
            get maxWebPayload() {
              return o.nothing(this._maxWebPayload)
                ? 1048576
                : this._maxWebPayload;
            }
            set maxWebPayload(e) {
              this._maxWebPayload = e;
            }
            get nonHTTPTransportPropsSet() {
              return [].filter((e) => o.something(this[e]));
            }
            inspect() {
              return Object.assign(this._lendsInspect(), {
                authenticationScheme: i.describe(this.authenticationScheme),
                accessToken: this.accessToken ? "*****" : "Not Set",
                idToken: this.idToken ? "*****" : "Not Set",
                issuerIdentifier: this.issuerIdentifier ? "*****" : "Not Set",
                url: this.url,
                password: this.password ? "*****" : this.password,
                userName: this.userName,
                clientName: this.clientName,
                applicationDescription: this.applicationDescription,
                vpnName: this.vpnName,
                vpnNameInUse: this.vpnNameInUse,
                virtualRouterName: this.virtualRouterName,
                connectTimeoutInMsecs: this.connectTimeoutInMsecs,
                connectRetries: this.connectRetries,
                connectRetriesPerHost: this.connectRetriesPerHost,
                reconnectRetryWaitInMsecs: this.reconnectRetryWaitInMsecs,
                reconnectRetries: this.reconnectRetries,
                generateSendTimestamps: this.generateSendTimestamps,
                generateReceiveTimestamps: this.generateReceiveTimestamps,
                includeSenderId: this.includeSenderId,
                generateSequenceNumber: this.generateSequenceNumber,
                keepAliveIntervalInMsecs: this.keepAliveIntervalInMsecs,
                keepAliveIntervalsLimit: this.keepAliveIntervalsLimit,
                p2pInboxInUse: this.p2pInboxInUse,
                p2pInboxBase: this.p2pInboxBase,
                userIdentification: this.userIdentification,
                subscriberLocalPriority: this.subscriberLocalPriority,
                subscriberNetworkPriority: this.subscriberNetworkPriority,
                ignoreDuplicateSubscriptionError:
                  this.ignoreDuplicateSubscriptionError,
                reapplySubscriptions: this.reapplySubscriptions,
                publisherProperties: this.publisherProperties,
                noLocal: this.noLocal,
                readTimeoutInMsecs: this.readTimeoutInMsecs,
                sendBufferMaxSize: this.sendBufferMaxSize,
                maxWebPayload: this.maxWebPayload,
              });
            }
            toString() {
              return super.toString();
            }
          };
        },
        9988: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionRequestType = n.new({
            ADD_SUBSCRIPTION: 0,
            REMOVE_SUBSCRIPTION: 1,
            ADD_P2PINBOX: 2,
            REMOVE_P2PINBOX: 3,
            REMOVE_DTE_SUBSCRIPTION: 100,
          });
        },
        156: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionStateName = n.new({
            DISCONNECTED: "SessionDisconnected",
            CONNECTING: "SessionConnecting",
            WAITING_FOR_TRANSPORT: "WaitingForTransport",
            WAITING_FOR_TRANSPORT_UP: "WaitingForTransportUp",
            WAITING_FOR_LOGIN: "WaitingForLogin",
            TRANSPORT_UP: "SessionTransportUp",
            FULLY_CONNECTED: "SessionFullyConnected",
            SESSION_ERROR: "SessionError",
            DISCONNECTING: "SessionDisconnecting",
            REAPPLYING_SUBSCRIPTIONS: "ReapplyingSubscriptions",
            WAITING_FOR_PUBFLOW: "WaitingForMessagePublisher",
            DISPOSED: "SessionDisposed",
            WAITING_FOR_SUBCONFIRM: "WaitForSubConfirm",
            WAITING_FOR_CAN_ACCEPT_DATA: "WaitForCanAcceptData",
            DISCONNECTING_FLOWS: "DisconnectingFlows",
            FLUSHING_TRANSPORT: "FlushingTransport",
            DESTROYING_TRANSPORT: "DestroyingTransport",
            RECONNECTING: "Reconnecting",
            TRANSPORT_FAIL: "TransportFail",
            WAITING_FOR_INTERCONNECT_TIMEOUT: "WaitingForInterconnectTimeout",
            WAITING_FOR_DNS: "WaitingForDNS",
            WAITING_FOR_TRANSPORT_CHANGE: "WaitingForTransportChange",
          });
        },
        109: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SessionState = n.new({
            CONNECTING: 1,
            CONNECTED: 2,
            SESSION_ERROR: 3,
            DISCONNECTING: 4,
            DISCONNECTED: 5,
          });
        },
        3401: (e, t, s) => {
          var n = s(9489);
          const r = s(3170),
            i = s(4789),
            o = s(828),
            { assert: a } = s(9359),
            { CacheSession: c, CACHE_REQUEST_PREFIX: u } = s(1843),
            { CapabilityType: l } = s(2753),
            { Check: h, Parameter: d } = s(2201),
            { DefaultCapabilities: p } = s(1188),
            {
              ErrorResponseSubcodeMapper: _,
              ErrorSubcode: E,
              OperationError: T,
              RequestEventCode: g,
            } = s(3870),
            { EventEmitter: S } = s(7758),
            { GlobalContext: m } = s(8484),
            { HostList: f } = s(1113),
            { LogFormatter: I } = s(390),
            { MessageRxCBInfo: R } = s(806),
            { MutableSessionProperty: C } = s(8075),
            { OutstandingDataRequest: A } = s(2779),
            { P2PUtil: O } = s(4876),
            { QueueDescriptor: N, QueueType: P } = s(5754),
            { SDTField: D, SDTFieldType: y } = s(7252),
            { SessionEvent: b } = s(5874),
            { SessionEventCBInfo: M } = s(3397),
            { SessionEventCode: w } = s(5332),
            { SessionEventName: v } = s(2495),
            { SessionFSM: L } = s(8837),
            { SessionFSMEvent: U } = s(9191),
            { SessionOperation: F } = s(413),
            { SessionProperties: x } = s(2975),
            { SessionPropertiesValidator: B } = s(928),
            { SessionRequestType: G } = s(9988),
            { SessionState: k } = s(109),
            { SessionStateName: W } = s(156),
            { Stats: $, StatType: q } = s(6818),
            { StringUtils: V } = s(7882),
            {
              TransportCapabilities: H,
              TransportProtocol: Y,
              TransportReturnCode: Q,
            } = s(3147);
          function X(e) {
            return (
              e &&
              e !== Y.HTTP_BINARY_STREAMING &&
              e !== Y.HTTP_BINARY &&
              e !== Y.HTTP_BASE64
            );
          }
          function j(e) {
            return `SessionEventCode.${w.describe(e)}`;
          }
          const K = "#REQ";
          e.exports.Session = class extends S {
            constructor(e, t, s) {
              super({ emits: w.values, direct: w.MESSAGE, formatEventName: j });
              const n = this;
              (this.logger = new I()),
                (this.logger.formatter = function (...e) {
                  return [
                    `[session=${n._sessionFSM ? n._sessionFSM.sessionIdHex : "(N/A)"}]`,
                    ...e,
                  ];
                });
              const { LOG_TRACE: r } = this.logger;
              if (null != e) {
                const { LOG_DEBUG: e } = this.logger;
              }
              this.on("error", (e) => {
                const { LOG_ERROR: t } = n.logger;
                t(e.info.error);
              });
              const i = new x(e);
              {
                const { LOG_DEBUG: e } = this.logger;
              }
              if (
                ((this._messageCallbackInfo = this.wrapMessageCallback(t)),
                (this._eventCallbackInfo = this.wrapEventCallback(s)),
                h.empty(i.clientName) &&
                  (i.clientName = m.GenerateClientName()),
                i._setUserIdentification(m.GenerateUserIdentification()),
                h.empty(i.applicationDescription) &&
                  (i.applicationDescription = m.GenerateClientDescription()),
                B.validate(i),
                h.nothing(i.webTransportProtocolList))
              ) {
                const e = i.transportProtocol,
                  t = (function () {
                    const { ProfileBinding: e } = o,
                      t = [];
                    return (
                      H.web.webSocket() && t.push(Y.WS_BINARY),
                      e.value.cometEnabled &&
                        (H.web.xhrBinary() &&
                          (H.web.streaming() && t.push(Y.HTTP_BINARY_STREAMING),
                          t.push(Y.HTTP_BINARY)),
                        t.push(Y.HTTP_BASE64)),
                      t
                    );
                  })(),
                  s = e ? t.indexOf(e) : 0;
                if (s < 0)
                  throw new T(
                    `Selected transport protocol ${Y.describe(e)} is disabled or invalid for this platform`,
                    E.PARAMETER_CONFLICT,
                  );
                if (
                  ((i.webTransportProtocolList = t.slice(s)),
                  0 === i.webTransportProtocolList.length)
                )
                  throw new T(
                    `No usable transport protocol or fallback from ${Y.describe(e)}`,
                    E.PARAMETER_CONFLICT,
                  );
                const n = i.webTransportProtocolList.filter((e) => X(e));
                if (
                  (0 === n.length &&
                    (this._adDisabledReason = `Guaranteed messaging not compatible with any available transport protocol: ${i.webTransportProtocolList.map((e) => Y.describe(e)).join(", ")}`),
                  i.publisherProperties.enabled)
                ) {
                  if (this._adDisabledReason)
                    throw new T(
                      "Invalid transport protocol(s) for session with Guaranteed Messaging Publisher",
                      E.PARAMETER_CONFLICT,
                      this._adDisabledReason,
                    );
                  i.webTransportProtocolList = n;
                }
              } else {
                const e = i.webTransportProtocolList;
                if (!e.every(X)) {
                  const t = e.filter((e) => !X(e));
                  if (
                    ((this._adDisabledReason = `Guaranteed messaging incompatible with selected transport protocols: ${t.map((e) => Y.describe(e)).join(", ")}`),
                    i.publisherProperties.enabled)
                  )
                    throw new T(
                      "Invalid transport protocol(s) for session with Guaranteed Messaging Publisher",
                      E.PARAMETER_CONFLICT,
                      this._adDisabledReason,
                    );
                }
              }
              (this._sessionProperties = i),
                (this._sessionStats = new $()),
                (this._hosts = new f(i)),
                (this._sessionFSM = new L(
                  this._sessionProperties,
                  this,
                  this._sessionStats,
                  this._hosts,
                )),
                this._sessionFSM.start(),
                this._sessionFSM.createMessagePublisher(),
                (this._outstandingDataReqs = {}),
                (this._capabilities = p.createDefaultCapabilities(i)),
                (this._seqNum = 1);
            }
            connect() {
              const { LOG_TRACE: e } = this.logger,
                t = this.allowOperation(F.CONNECT);
              if (t) throw new T(t, E.INVALID_OPERATION, null);
              const s = new U({ name: v.CONNECT });
              this._sessionFSM.processEvent(s);
            }
            get canAck() {
              return [W.CONNECTING, W.TRANSPORT_UP, W.DISCONNECTING].some(
                (e) => !!this._sessionFSM.getActiveState(e),
              );
            }
            disconnect() {
              const { LOG_TRACE: e } = this.logger,
                t = this.allowOperation(F.DISCONNECT);
              if (t) throw new T(t, E.INVALID_OPERATION, null);
              const s = new U({ name: v.DISCONNECT });
              this._sessionFSM.processEvent(s);
            }
            dispose() {
              const { LOG_TRACE: e } = this.logger;
              this._disposed ||
                setTimeout(() => {
                  this._sessionFSM.processEvent(new U({ name: v.DISPOSE })),
                    this._sessionFSM.terminateFsm(),
                    this.disableEmitter(),
                    (this._disposed = !0);
                }, 0);
            }
            subscribe(e, t, s, n) {
              const { LOG_TRACE: i } = this.logger;
              e && e.toString && e.toString();
              const o = this.allowOperation(F.CTRL);
              if (o) throw new T(o, E.INVALID_OPERATION, null);
              if (
                (d.isInstanceOf("topic", e, r.Destination),
                e.validate(),
                e.getType() !== r.DestinationType.TOPIC)
              )
                throw new T(
                  `Topic is required for subscribe; ${r.DestinationType.describe(e.getType())}`,
                  E.INVALID_TOPIC_SYNTAX,
                );
              d.isBooleanOrNothing("requestConfirmation", t),
                d.isNumberOrNothing("requestTimeout", n),
                d.isRangeCompareOrNothing("requestTimeout", n, ">", 0),
                this._sessionFSM.subscriptionUpdate(
                  e,
                  !!t,
                  s,
                  n,
                  G.ADD_SUBSCRIPTION,
                  (e, s) => this.handleSubscriptionUpdateResponse(e, s, t),
                );
            }
            updateQueueSubscription(e, t, s, n, i, o) {
              const { LOG_TRACE: a } = this.logger;
              e && e.toString && e.toString(), t && t.toString && t.toString();
              const c = this.allowOperation(F.CTRL);
              if (c) throw new T(c, E.INVALID_OPERATION, null);
              if (
                (d.isInstanceOf("topic", e, r.Destination),
                e.validate(),
                e.getType() !== r.DestinationType.TOPIC)
              )
                throw new T(
                  `Topic is required for queue subscribe; ${r.DestinationType.describe(e.getType())}`,
                  E.INVALID_TOPIC_SYNTAX,
                );
              if (
                (d.isInstanceOf("queue", t, r.Destination),
                t.validate(),
                t.getType() !== r.DestinationType.QUEUE &&
                  t.getType() !== r.DestinationType.TEMPORARY_QUEUE)
              )
                throw new T(
                  `Queue is required for queue subscribe; ${r.DestinationType.describe(t.getType())}`,
                  E.PARAMETER_INVALID_TYPE,
                );
              d.isNumberOrNothing("requestTimeout", o),
                d.isRangeCompareOrNothing("requestTimeout", o, ">", 0),
                this._sessionFSM.queueSubscriptionUpdate(e, t, o, s, (e, t) =>
                  this.handleQueueSubscriptionUpdateResponse(e, t, i),
                );
            }
            unsubscribe(e, t, s, n) {
              const { LOG_TRACE: i } = this.logger;
              e && e.toString && e.toString();
              const o = this.allowOperation(F.CTRL);
              if (o) throw new T(o, E.INVALID_OPERATION, null);
              if (
                (d.isInstanceOf("topic", e, r.Destination),
                e.validate(),
                e.getType() !== r.DestinationType.TOPIC)
              )
                throw new T(
                  `Topic is required for unsubscribe; ${r.DestinationType.describe(e.getType())}`,
                  E.INVALID_TOPIC_SYNTAX,
                );
              d.isBooleanOrNothing("requestConfirmation", t),
                d.isNumberOrNothing("requestTimeout", n),
                d.isRangeCompareOrNothing("requestTimeout", n, ">", 0),
                this._sessionFSM.subscriptionUpdate(
                  e,
                  !!t,
                  s,
                  n,
                  G.REMOVE_SUBSCRIPTION,
                  (e, s) => this.handleSubscriptionUpdateResponse(e, s, t),
                );
            }
            unsubscribeDurableTopicEndpoint(e) {
              const { LOG_TRACE: t } = this.logger;
              e && e.toString && e.toString();
              const s = this.allowOperation(F.CTRL);
              if (s) throw new T(s, E.INVALID_OPERATION, null);
              const n = this.createDestinationFromDescriptor(
                N.createFromSpec(e),
              );
              this._sessionFSM.subscriptionUpdate(
                n,
                !0,
                void 0,
                void 0,
                G.REMOVE_DTE_SUBSCRIPTION,
                (e, t) => this.handleDTEUnsubscribeResponse(e, t),
              );
            }
            updateProperty(e, t, s, n) {
              const { LOG_TRACE: i } = this.logger,
                o = this.allowOperation(F.CTRL);
              if (o) throw new T(o, E.INVALID_OPERATION, null);
              const { Topic: a } = r;
              let c;
              d.isEnumMember("mutableSessionProperty", e, C),
                d.isNumberOrNothing("requestTimeout", s),
                d.isRangeCompareOrNothing("requestTimeout", s, ">", 0);
              const u = this._sessionFSM.sendUpdateProperty(e, t, n, s, (s) => {
                const r = s.getResponse();
                if (200 === r.responseCode) {
                  if (e === C.CLIENT_DESCRIPTION)
                    (this._sessionProperties.applicationDescription = t),
                      (c = b.build(
                        w.PROPERTY_UPDATE_OK,
                        r.responseString,
                        r.responseCode,
                        0,
                        n,
                        null,
                      )),
                      this.sendEvent(c);
                  else if (e === C.CLIENT_NAME) {
                    const e = O.getP2PTopicSubscription(
                        this._sessionProperties.p2pInboxBase,
                      ),
                      r = a.createFromName(e),
                      i = O.getP2PTopicSubscription(s.getP2PTopicValue()),
                      o = a.createFromName(i),
                      u = (e) => {
                        const r = e.getResponse();
                        if (200 === r.responseCode)
                          this._sessionProperties._setP2pInboxBase(
                            s.getP2PTopicValue() || "",
                          ),
                            this._sessionProperties._setP2pInboxInUse(
                              O.getP2PInboxTopic(
                                this._sessionProperties.p2pInboxBase,
                              ),
                            ),
                            (this._sessionProperties.clientName = t),
                            (c = b.build(
                              w.PROPERTY_UPDATE_OK,
                              r.responseString,
                              r.responseCode,
                              0,
                              n,
                              null,
                            )),
                            this.sendEvent(c);
                        else {
                          const e = _.getErrorSubcode(
                            r.responseCode,
                            r.responseString,
                          );
                          e === E.SUBSCRIPTION_ALREADY_PRESENT &&
                          this._sessionProperties
                            .ignoreDuplicateSubscriptionError
                            ? ((c = b.build(
                                w.PROPERTY_UPDATE_OK,
                                r.responseString,
                                r.responseCode,
                                0,
                                n,
                                null,
                              )),
                              this.sendEvent(c))
                            : e === E.SUBSCRIPTION_ALREADY_PRESENT ||
                                e === E.SUBSCRIPTION_ATTRIBUTES_CONFLICT ||
                                e === E.SUBSCRIPTION_INVALID ||
                                e === E.SUBSCRIPTION_ACL_DENIED ||
                                e === E.SUBSCRIPTION_TOO_MANY
                              ? ((c = b.build(
                                  w.PROPERTY_UPDATE_ERROR,
                                  r.responseString,
                                  r.responseCode,
                                  e,
                                  n,
                                  null,
                                )),
                                this.sendEvent(c))
                              : ((c = b.build(
                                  w.PROPERTY_UPDATE_ERROR,
                                  r.responseString,
                                  r.responseCode,
                                  E.SUBSCRIPTION_ERROR_OTHER,
                                  n,
                                  null,
                                )),
                                this.sendEvent(c));
                        }
                      },
                      l = (e) => {
                        const t = e.getResponse();
                        if (200 === t.responseCode)
                          this._sessionFSM.subscriptionUpdate(
                            o,
                            !0,
                            n,
                            this._sessionProperties.readTimeoutInMsecs,
                            G.ADD_P2PINBOX,
                            u,
                          );
                        else {
                          const e = _.getErrorSubcode(
                            t.responseCode,
                            t.responseString,
                          );
                          e === E.SUBSCRIPTION_NOT_FOUND &&
                          this._sessionProperties
                            .ignoreSubscriptionNotFoundError
                            ? this._sessionFSM.subscriptionUpdate(
                                o,
                                !0,
                                n,
                                this._sessionProperties.readTimeoutInMsecs,
                                G.ADD_P2PINBOX,
                                u,
                              )
                            : e === E.SUBSCRIPTION_ATTRIBUTES_CONFLICT ||
                                e === E.SUBSCRIPTION_INVALID ||
                                e === E.SUBSCRIPTION_NOT_FOUND ||
                                e === E.SUBSCRIPTION_ACL_DENIED
                              ? ((c = b.build(
                                  w.PROPERTY_UPDATE_ERROR,
                                  t.responseString,
                                  t.responseCode,
                                  e,
                                  null,
                                  null,
                                )),
                                this.sendEvent(c))
                              : ((c = b.build(
                                  w.PROPERTY_UPDATE_ERROR,
                                  t.responseString,
                                  t.responseCode,
                                  E.SUBSCRIPTION_ERROR_OTHER,
                                  null,
                                  null,
                                )),
                                this.sendEvent(c));
                        }
                      };
                    this._sessionFSM.subscriptionUpdate(
                      r,
                      !0,
                      n,
                      this._sessionProperties.readTimeoutInMsecs,
                      G.REMOVE_P2PINBOX,
                      l,
                    );
                  }
                } else {
                  const e = _.getErrorSubcode(r.responseCode, r.responseString);
                  (c = b.build(
                    w.PROPERTY_UPDATE_ERROR,
                    r.responseString,
                    r.responseCode,
                    e,
                    n,
                    null,
                  )),
                    this.sendEvent(c);
                }
              });
              u !== Q.OK &&
                ((c =
                  u === Q.NO_SPACE
                    ? b.build(
                        w.PROPERTY_UPDATE_ERROR,
                        "Property update failed - no space in transport",
                        null,
                        E.INSUFFICIENT_SPACE,
                        null,
                        null,
                      )
                    : b.build(
                        w.PROPERTY_UPDATE_ERROR,
                        "Property update failed",
                        null,
                        E.INVALID_OPERATION,
                        null,
                        null,
                      )),
                this.sendEvent(c));
            }
            updateAuthenticationOnReconnect(e) {
              const { LOG_TRACE: t } = this.logger,
                s = ["accessToken", "idToken"],
                n = this.allowOperation(F.QUERY_OPERATION);
              if (n) throw new T(n, E.INVALID_OPERATION, null);
              if (!e || "object" != typeof e)
                throw new T(
                  "updateAuthenticationOnReconnect parameter must be a non-empty object.",
                  E.PARAMETER_INVALID_TYPE,
                  null,
                );
              var r;
              for (r in e)
                if (!s.includes(r))
                  throw new T(
                    "Invalid property in updateAuthenticationOnReconnect parameter.",
                    E.PARAMETER_CONFLICT,
                    null,
                  );
              const i = this.getSessionProperties();
              Object.assign(i, e),
                B.validate(i),
                (this._sessionProperties = i),
                Object.assign(this._sessionFSM._sessionProperties, e);
            }
            send(e) {
              const { LOG_TRACE: t } = this.logger,
                s = this.allowOperation(F.SEND, e);
              if (s) throw new T(s, E.INVALID_OPERATION, null);
              if (
                (d.isInstanceOf("message", e, i.Message),
                !this.isCapable(l.VAR_LEN_EXT_PARAM) &&
                  (e.clearExtendedVarLenParams(),
                  this._failOnExtendedVariableLengthProperties(e)))
              )
                throw new T(
                  "Broker does not support variable length SMF extended parameters",
                  E.INVALID_OPERATION,
                );
              this.validateAndSendMessage(e);
            }
            _failOnExtendedVariableLengthProperties(e) {
              return !1;
            }
            sendRequest(e, t = void 0, s = void 0, n = void 0, o = void 0) {
              const { LOG_TRACE: a } = this.logger,
                c = this.allowOperation(F.SEND, e);
              if (c) throw new T(c, E.INVALID_OPERATION, null);
              d.isInstanceOf("message", e, i.Message),
                d.isNumberOrNothing("timeout", t),
                d.isRangeCompareOrNothing("timeout", t, ">=", 100),
                d.isFunctionOrNothing("replyReceivedCBFunction", s),
                d.isFunctionOrNothing("requestFailedCBFunction", n);
              null == e.getCorrelationId() &&
                e.setCorrelationId(K + m.NextId());
              if (null == e.getReplyTo()) {
                const t = r.Topic.createFromName(
                  this._sessionProperties.p2pInboxInUse,
                );
                e.setReplyTo(t);
              }
              this.validateAndSendMessage(e),
                this.enqueueOutstandingDataReq(
                  e.getCorrelationId(),
                  n,
                  t,
                  s,
                  o,
                );
            }
            sendReply(e, t) {
              const { LOG_TRACE: s } = this.logger,
                n = this.allowOperation(F.SEND, t);
              if (n) throw new T(n, E.INVALID_OPERATION, null);
              if (
                (d.isInstanceOfOrNothing("messageToReplyTo", e, i.Message),
                d.isInstanceOf("replyMessage", t, i.Message),
                t.setAsReplyMessage(!0),
                e)
              ) {
                t.setCorrelationId(e.getCorrelationId());
                if (null == e.getReplyTo())
                  throw new T(
                    "ReplyTo destination may not be null.",
                    E.PARAMETER_OUT_OF_RANGE,
                  );
                t.setDestination(e.getReplyTo());
              }
              this.validateAndSendMessage(t);
            }
            getStat(e) {
              const { LOG_TRACE: t } = this.logger,
                s = this.allowOperation(F.QUERY_OPERATION);
              if (s) throw new T(s, E.INVALID_OPERATION, null);
              return (
                d.isEnumMember("statType", e, q), this._sessionFSM.getStat(e)
              );
            }
            resetStats() {
              const { LOG_TRACE: e } = this.logger,
                t = this.allowOperation(F.QUERY_OPERATION);
              if (t) throw new T(t, E.INVALID_OPERATION, null);
              this._sessionFSM.resetStats();
            }
            getSessionProperties() {
              const { LOG_TRACE: e } = this.logger,
                t = this.allowOperation(F.QUERY_OPERATION);
              if (t) throw new T(t, E.INVALID_OPERATION, null);
              const s = this._sessionProperties.clone();
              return (
                this.getSessionState() !== W.DISCONNECTED &&
                  this._sessionFSM._transport &&
                  s._setWebTransportProtocolInUse(
                    this._sessionFSM._transport.getTransportProtocol(),
                  ),
                s
              );
            }
            isCapable(e) {
              const { LOG_TRACE: t } = this.logger,
                s = this.allowOperation(F.QUERY_OPERATION);
              if (s) throw new T(s, E.INVALID_OPERATION, null);
              d.isNumber("capabilityType", e);
              const n = this._capabilities;
              return !!n && "boolean" == typeof n[e] && n[e];
            }
            getCapability(e) {
              const { LOG_TRACE: t } = this.logger,
                s = this.allowOperation(F.QUERY_OPERATION);
              if (s) throw new T(s, E.INVALID_OPERATION, null);
              d.isNumber("capabilityType", e);
              const n = this._getCapability(e);
              return "boolean" == typeof n
                ? D.create(y.BOOL, n)
                : "number" == typeof n
                  ? D.create(y.INT64, n)
                  : "string" == typeof n
                    ? D.create(y.STRING, n)
                    : null;
            }
            _getCapability(e) {
              const t = this._capabilities;
              if (!t) return null;
              const s = t[e];
              return void 0 === s ? null : s;
            }
            getSessionState() {
              const { LOG_TRACE: e } = this.logger,
                t = this.allowOperation(F.QUERY_OPERATION);
              if (t) throw new T(t, E.INVALID_OPERATION, null);
              const s = this.getFSMState();
              switch (s) {
                case W.FULLY_CONNECTED:
                  return k.CONNECTED;
                case W.DISCONNECTING:
                  return k.DISCONNECTING;
                case W.DISCONNECTED:
                  return k.DISCONNECTED;
                case W.SESSION_ERROR:
                  return k.SESSION_ERROR;
                case W.CONNECTING:
                case W.WAITING_FOR_INTERCONNECT_TIMEOUT:
                case W.WAITING_FOR_DNS:
                case W.WAITING_FOR_TRANSPORT_UP:
                case W.WAITING_FOR_SESSION_UP:
                case W.WAITING_FOR_LOGIN:
                case W.WAITING_FOR_P2PINBOX_REG:
                case W.WAITING_FOR_PUBFLOW:
                case W.REAPPLYING_SUBSCRIPTIONS:
                  return k.CONNECTING;
                default: {
                  const { LOG_INFO: e } = this.logger;
                  return e(`Unmapped session state ${W.describe(s)}`), null;
                }
              }
            }
            getFSMState() {
              return this._sessionFSM.getCurrentStateName();
            }
            createCacheSession(e) {
              const { LOG_TRACE: t } = this.logger;
              return new c(e, this, {
                incStat: this._sessionFSM.incStat.bind(this._sessionFSM),
              });
            }
            createMessageConsumer(e) {
              const { LOG_TRACE: t } = this.logger;
              if (this._adDisabledReason)
                throw new T(
                  "Session does not provide MessageConsumer capability",
                  E.GM_UNAVAILABLE,
                  this._adDisabledReason,
                );
              if (null != e) {
                const { LOG_DEBUG: e } = this.logger;
              }
              return this._sessionFSM.createMessageConsumer(e);
            }
            createQueueBrowser(e) {
              const { LOG_TRACE: t } = this.logger;
              if (this._adDisabledReason)
                throw new T(
                  "Session does not provide QueueBrowser capability",
                  E.GM_UNAVAILABLE,
                  this._adDisabledReason,
                );
              if (null != e) {
                const { LOG_DEBUG: e } = this.logger;
              }
              return this._sessionFSM.createQueueBrowser(e);
            }
            createDestinationFromDescriptor(e) {
              const { DestinationType: t, Queue: s, Topic: n } = r;
              let i = t.TOPIC;
              e.type === P.QUEUE &&
                (i = e.durable ? t.QUEUE : t.TEMPORARY_QUEUE);
              const o = e.name || null;
              return e.durable
                ? (a(
                    o,
                    "Durable endpoint with generated name is not a valid configuration",
                  ),
                  (e.getType() === P.QUEUE
                    ? s.createFromLocalName
                    : n.createFromName)(o))
                : this.createTemporaryDestination(i, o);
            }
            createTemporaryDestination(e, t) {
              const { LOG_TRACE: s } = this.logger,
                { DestinationFromNetwork: n, DestinationUtil: i } = r,
                o = this.getSessionProperties().virtualRouterName;
              if (
                !this.isCapable(l.TEMPORARY_ENDPOINT) ||
                null == o ||
                0 === o.length
              )
                throw new T(
                  "Attempt to generate temporary destination or endpoint without suitable session",
                  E.INVALID_OPERATION,
                );
              const a =
                t && t.startsWith("#P2P") ? t : i.createTemporaryName(e, o, t);
              return n.createDestinationFromName(a);
            }
            sendEvent(e) {
              if (!e) return;
              if (this._disposed) return;
              const { LOG_TRACE: t } = this.logger;
              this._eventCallbackInfo.sessionEventCBFunction(
                this,
                e,
                this._eventCallbackInfo.userObject,
              );
            }
            getTransportInfo() {
              const { LOG_TRACE: e } = this.logger;
              return this._sessionFSM.getTransportInfo();
            }
            injectTransportInterceptor(e) {
              this._sessionFSM.injectTransportInterceptor(e);
            }
            allowOperation(e, t) {
              if (!this._sessionFSM) return !1;
              let s = !0;
              const n = this._sessionFSM.getCurrentStateName();
              if (n === W.DISPOSED) s = !1;
              else if (h.anything(e))
                switch (e) {
                  case F.CONNECT:
                    n !== W.NEW && n !== W.DISCONNECTED && (s = !1);
                    break;
                  case F.DISCONNECT:
                    n === W.NEW && (s = !1);
                    break;
                  case F.SEND:
                  case F.CTRL:
                    s =
                      n === W.FULLY_CONNECTED ||
                      (t &&
                        t.getDeliveryMode() !==
                          i.MessageDeliveryModeType.DIRECT);
                    break;
                  case F.QUERY_OPERATION:
                    s = !0;
                    break;
                  default:
                    s = !1;
                }
              else s = !1;
              return s
                ? null
                : `Cannot perform operation ${e} while in state ${n}`;
            }
            updateCapabilities(e) {
              this._capabilities = e;
            }
            validateAndSendMessage(e) {
              const t = e.getDestination();
              if (h.nothing(t) || h.empty(t.getName()))
                throw new T(
                  "Message must have a valid Destination",
                  E.TOPIC_MISSING,
                );
              const s = null == e.getSenderTimestamp();
              if (
                this._sessionProperties.generateSendTimestamps &&
                (s || e.hasAutoSenderTimestamp)
              ) {
                const t = new Date();
                e.setSenderTimestamp(t.getTime()),
                  (e.hasAutoSenderTimestamp = !0);
              }
              const n = null == e.getSequenceNumber();
              this._sessionProperties.generateSequenceNumber &&
                (n || e.hasAutoSequenceNumber) &&
                (e.setSequenceNumber(this._seqNum++),
                (e.hasAutoSequenceNumber = !0));
              const r = null == e.getSenderId();
              this._sessionProperties.includeSenderId &&
                r &&
                e.setSenderId(this._sessionProperties.clientName),
                this._sessionFSM.prepareAndSendMessage(e);
            }
            enqueueOutstandingDataReq(e, t, s, n, r) {
              if (h.none(e)) return;
              const { LOG_TRACE: i, LOG_ERROR: o } = this.logger,
                a = setTimeout(() => {
                  this._sessionFSM.incStat(q.TX_REQUEST_TIMEOUT);
                  try {
                    delete this._outstandingDataReqs[e] ||
                      o(`Cannot delete data request ${e}`);
                  } catch (t) {
                    o(`Cannot delete data request ${e}`, t);
                  }
                  if (h.anything(t)) {
                    const s = b.build(g.REQUEST_TIMEOUT, "Request timeout", e);
                    t(this, s, r);
                  }
                }, s || this._sessionProperties.readTimeoutInMsecs),
                c = new A(e, a, n, t, r);
              this._outstandingDataReqs[e] = c;
            }
            cancelOutstandingDataReq(e) {
              const { LOG_TRACE: t, LOG_ERROR: s } = this.logger;
              if (h.none(e) || !this._outstandingDataReqs) return null;
              const n = this._outstandingDataReqs[e];
              if (null == n) return null;
              n.timer && (clearTimeout(n.timer), (n.timer = null));
              try {
                delete this._outstandingDataReqs[e] ||
                  s(`Cannot delete data request ${e}`);
              } catch (t) {
                s(`Cannot delete data request ${e}`, t);
              }
              return n;
            }
            cleanupSession() {
              const { LOG_TRACE: e } = this.logger;
              this._outstandingDataReqs &&
                Object.keys(this._outstandingDataReqs).forEach((e) => {
                  const t = this.cancelOutstandingDataReq(e);
                  if (t && t.reqFailedCBFunction) {
                    const s = b.build(g.REQUEST_ABORTED, "Request aborted", e);
                    t.reqFailedCBFunction(this, s, t.userObject);
                  }
                });
            }
            handleDataMessage(e) {
              const { LOG_TRACE: t, LOG_INFO: s } = this.logger,
                n = e;
              if (this._sessionProperties.generateReceiveTimestamps) {
                const e = new Date();
                n._receiverTimestamp = e.getTime();
              }
              if (n.isReplyMessage()) {
                const e = n.getCorrelationId();
                if (h.anything(e)) {
                  const t = this.cancelOutstandingDataReq(e);
                  if (null !== t)
                    return (
                      this._sessionFSM.incStat(q.RX_REPLY_MSG_RECVED),
                      void t.replyReceivedCBFunction(this, n, t.userObject)
                    );
                  if (e.startsWith(K))
                    return (
                      s(
                        "DROP: Discard reply message due to missing outstanding request",
                      ),
                      void this._sessionFSM.incStat(q.RX_REPLY_MSG_DISCARD)
                    );
                  if (
                    e.startsWith(u) &&
                    !(c && this._messageCallbackInfo.userObject instanceof c)
                  )
                    return (
                      s(
                        "DROP: Discard cache reply due to no cache session active",
                      ),
                      void this._sessionFSM.incStat(q.RX_REPLY_MSG_DISCARD)
                    );
                }
              }
              this._messageCallbackInfo.messageRxCBFunction(
                this,
                n,
                this._messageCallbackInfo.userObject,
              );
            }
            handleSubscriptionUpdateResponse(e, t, s) {
              const n = e.getResponse(),
                { responseCode: r, responseString: i } = n,
                { correlationKey: o } = t;
              if (200 === r) {
                const e = b.build(w.SUBSCRIPTION_OK, i, r, 0, o, null);
                this.sendEvent(e);
              } else {
                const t = V.stripNullTerminate(e.encodedUtf8Subscription);
                this._sessionFSM.handleSubscriptionUpdateError(r, i, t, o, s);
              }
            }
            handleQueueSubscriptionUpdateResponse(e, t, s) {
              const { LOG_TRACE: n } = this.logger;
              if (!e) return void s(!1, E.TIMEOUT, 0, "Timeout");
              const r = e.getResponse(),
                { responseCode: i, responseString: o } = r,
                a = _.getADErrorSubcode(i, o);
              200 === i ||
              a === E.SUBSCRIPTION_ALREADY_PRESENT ||
              a === E.SUBSCRIPTION_NOT_FOUND
                ? s(!0, 0, i, o)
                : s(!1, a, i, o);
            }
            handleDTEUnsubscribeResponse(e, t) {
              const s = e.getResponse(),
                { responseCode: n, responseString: r } = s,
                { correlationKey: i } = t,
                o =
                  200 === n
                    ? w.UNSUBSCRIBE_TE_TOPIC_OK
                    : w.UNSUBSCRIBE_TE_TOPIC_ERROR,
                a = 200 === n ? 0 : _.getADErrorSubcode(n, r);
              this.sendEvent(b.build(o, r, n, a, i));
            }
            handleSubscriptionUpdateError(e, t, s, n, r) {
              const i = _.getErrorSubcode(e, t);
              if (
                (i === E.SUBSCRIPTION_ALREADY_PRESENT &&
                  this._sessionProperties.ignoreDuplicateSubscriptionError) ||
                (i === E.SUBSCRIPTION_NOT_FOUND &&
                  this._sessionProperties.ignoreSubscriptionNotFoundError)
              ) {
                if (r) {
                  const s = b.build(w.SUBSCRIPTION_OK, t, e, 0, n, null);
                  this.sendEvent(s);
                }
              } else {
                const r = b.build(
                  w.SUBSCRIPTION_ERROR,
                  t,
                  e,
                  i,
                  n,
                  `Topic: ${s}`,
                );
                this.sendEvent(r);
              }
            }
            getEventCBInfo() {
              return this._eventCallbackInfo;
            }
            setEventCBInfo(e) {
              this._eventCallbackInfo = e;
            }
            getMessageCBInfo() {
              return this._messageCallbackInfo;
            }
            setMessageCBInfo(e) {
              this._messageCallbackInfo = e;
            }
            getCorrelationTag() {
              return this._sessionFSM.getCorrelationTag();
            }
            wrapEventCallback(e) {
              const { LOG_WARN: t } = this.logger,
                s = e ? (e.sessionEventCBFunction ? e : new M(e)) : null;
              return new M((e, n, r, i) => {
                const { sessionEventCode: o } = n;
                if (s)
                  try {
                    s.sessionEventCBFunction(e, n, r, i);
                  } catch (e) {
                    const s = Object.assign(
                      new T(
                        `Unhandled error in SessionEventRxCBInfo callback on sessionEventCode ${w.describe(o)}`,
                        E.CALLBACK_ERROR,
                        `On event: ${[o, n, r, i]} ${e}`,
                      ),
                      {
                        stack: e.stack,
                        info: {
                          event: {
                            name: o,
                            formattedName: `SessionEventCode.${w.describe(o)}`,
                            args: [n, r, i],
                          },
                          error: e,
                        },
                      },
                    );
                    t(s.toString(), s.info);
                  }
                this.emit(o, n);
              });
            }
            wrapMessageCallback(e) {
              const { LOG_WARN: t } = this.logger,
                s = e ? (e.messageRxCBFunction ? e : new R(e)) : null,
                n = `SessionEventCode.${w.describe(w.MESSAGE)}`,
                r = (e, t, s) =>
                  Object.assign(
                    new T(
                      `Unhandled error in MessageRxCBInfo callback/handler for ${n}`,
                      E.CALLBACK_ERROR,
                    ),
                    {
                      stack: e.stack,
                      info: {
                        event: {
                          name: w.MESSAGE,
                          formattedName: n,
                          args: [t, s],
                        },
                        error: e,
                      },
                    },
                  );
              return new R((e, n, i) => {
                if (s)
                  try {
                    s.messageRxCBFunction(e, n, i);
                  } catch (e) {
                    const s = r(e, n, i).toString();
                    t(s, s.info, e);
                  }
                try {
                  this.emitDirect(n);
                } catch (e) {
                  this.emit("error", r(e, n, i));
                }
              });
            }
            get adLocallyDisabled() {
              return !!this._adDisabledReason;
            }
            get canConnectConsumer() {
              return (
                !this.adLocallyDisabled &&
                (this._capabilities
                  ? this.isCapable(l.GUARANTEED_MESSAGE_CONSUME)
                  : void 0)
              );
            }
            get canConnectPublisher() {
              return (
                !this.adLocallyDisabled &&
                (this._capabilities
                  ? this.isCapable(l.GUARANTEED_MESSAGE_PUBLISH)
                  : void 0)
              );
            }
            get disposed() {
              return this._disposed;
            }
            inspect() {
              return {
                sessionId:
                  (this._sessionFSM && this._sessionFSM.sessionIdHex) ||
                  "(N/A)",
                transport: this.getTransportInfo(),
                state: k.describe(this.getSessionState()),
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        5153: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SslDowngrade = n.new({
            NONE: "NONE",
            PLAINTEXT: "PLAIN_TEXT",
          });
        },
        1726: (e, t, s) => {
          const { SessionRequestType: n } = s(9988);
          e.exports = {
            SubscriptionUpdateTimeoutMessages: {
              [n.ADD_SUBSCRIPTION]: "Add subscription request timeout",
              [n.REMOVE_SUBSCRIPTION]: "Remove subscription request timeout",
              [n.ADD_P2PINBOX]: "Add P2P inbox subscription timeout",
              [n.REMOVE_P2PINBOX]: "Remove P2P inbox subscription timeout",
              [n.REMOVE_DTE_SUBSCRIPTION]: "Remove endpoint topic subscription",
              default: "Request timeout",
            },
          };
        },
        7291: (e, t, s) => {
          const n = s(7283),
            {
              AdProtocolMessage: r,
              BinaryMetaBlock: i,
              ClientCtrlMessage: o,
              KeepAliveMessage: a,
              SMPMessage: c,
            } = s(2981),
            { SMFAdProtocolMessageType: u } = s(948),
            { SMFAdProtocolParam: l } = s(4786),
            { SMFClientCtrlMessageType: h } = s(9947),
            { SMFClientCtrlParam: d } = s(1200),
            { SMFParameterType: p, SMFExtendedParameterType: _ } = s(2095),
            { SMFProtocol: E } = s(8958),
            { SMFSMPMessageType: T } = s(6874),
            { SMFSMPMessageTypeFlags: g } = s(8488),
            { SMFTransportSessionMessageType: S } = s(5752);
          (e.exports.AdProtocolMessage = r),
            (e.exports.BinaryMetaBlock = i),
            (e.exports.ClientCtrlMessage = o),
            (e.exports.Codec = n),
            (e.exports.KeepAliveMessage = a),
            (e.exports.SMFAdProtocolMessageType = u),
            (e.exports.SMFAdProtocolParam = l),
            (e.exports.SMFClientCtrlMessageType = h),
            (e.exports.SMFClientCtrlParam = d),
            (e.exports.SMFParameterType = p),
            (e.exports.SMFProtocol = E),
            (e.exports.SMFSMPMessageTypeFlags = g),
            (e.exports.SMFSMPMessageType = T),
            (e.exports.SMFTransportSessionMessageType = S),
            (e.exports.SMPMessage = c),
            (e.exports.SMFExtendedParameterType = _);
        },
        2228: (e, t, s) => {
          const n = s(7291),
            { AdProtocolMessage: r, SMFParameter: i } = s(2981),
            { Bits: o, Convert: a } = s(840),
            { LOG_DEBUG: c, LOG_INFO: u, LOG_ERROR: l } = s(390),
            { ReplayStartType: h } = s(2604),
            { get: d, set: p } = o,
            { int8ToStr: _, int16ToStr: E, int24ToStr: T, int32ToStr: g } = a;
          function S(e, t) {
            const s = [];
            let n = 0;
            return (
              (n = o.set(n, e, 6, 2)),
              (n = o.set(n, t, 0, 6)),
              s.push(a.int8ToStr(n)),
              s.push(a.int8ToStr(2)),
              s.join("")
            );
          }
          function m(e, t, s) {
            const n = [];
            let r = 0;
            return (
              (r = o.set(r, e, 6, 2)),
              (r = o.set(r, t, 0, 6)),
              n.push(a.int8ToStr(r)),
              n.push(a.int8ToStr(3)),
              n.push(a.int8ToStr(s)),
              n.join("")
            );
          }
          function f(e, t, s) {
            const n = [];
            let r = 0;
            return (
              (r = o.set(r, e, 6, 2)),
              (r = o.set(r, t, 0, 6)),
              n.push(a.int8ToStr(r)),
              n.push(a.int8ToStr(4)),
              n.push(a.int16ToStr(s)),
              n.join("")
            );
          }
          function I(e, t, s) {
            const n = [];
            let r = 0;
            return (
              (r = o.set(r, e, 6, 2)),
              (r = o.set(r, t, 0, 6)),
              n.push(a.int8ToStr(r)),
              n.push(a.int8ToStr(6)),
              n.push(a.int32ToStr(s)),
              n.join("")
            );
          }
          function R(e, t, s) {
            const n = [];
            let r = 0;
            return (
              (r = o.set(r, e, 6, 2)),
              (r = o.set(r, t, 0, 6)),
              n.push(a.int8ToStr(r)),
              n.push(a.int8ToStr(10)),
              n.push(a.int64ToStr(s)),
              n.join("")
            );
          }
          const C = {};
          function A(e, t, s) {
            const n = [],
              r = s.type,
              i = s.value;
            let c = 0;
            switch (
              ((c = o.set(c, e, 6, 2)),
              (c = o.set(c, t, 0, 6)),
              n.push(a.int8ToStr(c)),
              n.push(a.int8ToStr(C[r])),
              n.push(a.int8ToStr(r)),
              r)
            ) {
              case h.DATE:
                n.push(a.int64ToStr(i));
                break;
              case h.RGMID:
                n.push(a.int64ToStr(i.suid)), n.push(a.int64ToStr(i.messageId));
              case h.BEGINNING:
            }
            return n.join("");
          }
          function O(e, t, s, n, r = void 0) {
            const i = [];
            let c = 0;
            (c = o.set(c, e, 6, 2)), (c = o.set(c, t, 0, 6));
            const u = null == r || 0 === r ? 18 : 19;
            return (
              i.push(a.int8ToStr(c)),
              i.push(a.int8ToStr(u)),
              i.push(a.int64ToStr(s)),
              i.push(a.int64ToStr(n)),
              null != r && r > 0 && i.push(a.int8ToStr(r)),
              i.join("")
            );
          }
          function N(e, t, s) {
            const n = [];
            let r = 0;
            (r = o.set(r, e, 6, 2)),
              (r = o.set(r, t, 0, 6)),
              n.push(a.int8ToStr(r));
            let i = 0;
            return (
              s.length <= 253
                ? ((i = s.length + 2), n.push(a.int8ToStr(i)))
                : ((i = 0),
                  n.push(a.int8ToStr(i)),
                  n.push(a.int32ToStr(s.length + 5))),
              n.push(s),
              n.join("")
            );
          }
          (C[h.BEGINNING] = 3),
            (C[h.DATE] = 11),
            (C[h.RGMID] = 19),
            (e.exports.parseAdpAt = function (e, t) {
              if (t + 3 > e.length) return !1;
              let s = t,
                n = e.readUInt8(s);
              s++;
              const o = d(n, 0, 6);
              let a, c;
              if (o < 3) {
                const t = e.readUInt16BE(s);
                (s += 2), (c = d(t, 12, 4)), (a = d(t, 0, 12)), (a <<= 2);
              } else {
                if (3 !== o) return l("Found unsupported ADP Version", o), !1;
                (n = e.readUInt8(s)),
                  s++,
                  (c = d(n, 0, 8)),
                  (a = e.readUInt32BE(s)),
                  (s += 4);
              }
              if (t + a > e.length)
                return (
                  l(
                    `Invalid Asssured Control Protocol length=${a} exceeds remaining message buffer = ${e.length - t}`,
                  ),
                  !1
                );
              const u = new r(c, o);
              for (; s < t + a; ) {
                (n = e.readUInt8(s)), s++;
                const r = d(n, 6, 2),
                  o = d(n, 0, 6);
                if (0 === o) continue;
                if (s >= t + a)
                  return (
                    l(
                      `Invalid Asssured Control Protocol parameter=${o} at position =${s}`,
                    ),
                    !1
                  );
                let c,
                  h = e.readUInt8(s);
                if ((s++, 0 === h)) {
                  if (s + 5 > t + a)
                    return (
                      l(
                        `Invalid Asssured Control Protocol parameter=${o} at position =${s}`,
                      ),
                      !1
                    );
                  (h = e.readUInt32BE(s)), (s += 4), (c = h - 5);
                } else c = h - 2;
                if (h <= 0) return !1;
                if (s + c > t + a)
                  return (
                    l(
                      `Invalid Asssured Control Protocol parameter=${o} length =${c} invalid at position =${s}`,
                    ),
                    !1
                  );
                const p = new i(r, o, null, e, s, s + c);
                u.addParameter(p), (s += c);
              }
              return u;
            }),
            (e.exports.encAdp = function (e) {
              const t = [],
                s = e.getParameterArray();
              let r;
              for (r = 0; r < s.length; r++) {
                const e = s[r];
                if (void 0 !== e)
                  switch (e.getType()) {
                    case n.SMFAdProtocolParam.WINDOW:
                    case n.SMFAdProtocolParam.EP_DURABLE:
                    case n.SMFAdProtocolParam.ACCESSTYPE:
                    case n.SMFAdProtocolParam.FLOWTYPE:
                    case n.SMFAdProtocolParam.EP_RESPECTS_TTL:
                    case n.SMFAdProtocolParam.TRANSACTION_CTRL_MESSAGE_TYPE:
                    case n.SMFAdProtocolParam.TRANSACTED_SESSION_STATE:
                    case n.SMFAdProtocolParam.ACTIVE_FLOW_INDICATION:
                    case n.SMFAdProtocolParam.WANT_FLOW_CHANGE_NOTIFY:
                    case n.SMFAdProtocolParam.MAX_REDELIVERY:
                      t.push(m(e.getUh(), e.getType(), e.getValue()));
                      break;
                    case n.SMFAdProtocolParam.EP_BEHAVIOUR:
                    case n.SMFAdProtocolParam.PARTITION_GROUP_ID:
                      t.push(f(e.getUh(), e.getType(), e.getValue()));
                      break;
                    case n.SMFAdProtocolParam.FLOWID:
                    case n.SMFAdProtocolParam.TRANSPORT_WINDOW:
                    case n.SMFAdProtocolParam.EP_ALLOTHER_PERMISSION:
                    case n.SMFAdProtocolParam.EP_QUOTA:
                    case n.SMFAdProtocolParam.EP_MAX_MSGSIZE:
                    case n.SMFAdProtocolParam.GRANTED_PERMISSION:
                    case n.SMFAdProtocolParam.TRANSACTED_SESSION_ID:
                    case n.SMFAdProtocolParam.PUBLISHER_ID:
                      t.push(I(e.getUh(), e.getType(), e.getValue()));
                      break;
                    case n.SMFAdProtocolParam.LASTMSGIDSENT:
                    case n.SMFAdProtocolParam.LASTMSGIDACKED:
                    case n.SMFAdProtocolParam.LASTMSGIDRECEIVED:
                    case n.SMFAdProtocolParam.TRANSACTION_ID:
                    case n.SMFAdProtocolParam.ENDPOINT_ERROR_ID:
                      t.push(R(e.getUh(), e.getType(), e.getValue()));
                      break;
                    case n.SMFAdProtocolParam.REPLAY_START_LOCATION: {
                      const s = e.getValue();
                      void 0 === s.value
                        ? t.push(m(e.getUh(), e.getType(), s.type))
                        : t.push(A(e.getUh(), e.getType(), s));
                      break;
                    }
                    case n.SMFAdProtocolParam.APPLICATION_ACK: {
                      const s = e.getValue(),
                        n = e.getUh(),
                        r = e.getType();
                      s.forEach((e, s) => {
                        for (let i = 0; i < e.length; ++i) {
                          const o = e[i];
                          t.push(O(n, r, o[0], o[1], s));
                        }
                      });
                      break;
                    }
                    case n.SMFAdProtocolParam.QUEUENAME:
                    case n.SMFAdProtocolParam.DTENAME:
                    case n.SMFAdProtocolParam.TOPICNAME:
                    case n.SMFAdProtocolParam.FLOWNAME:
                    case n.SMFAdProtocolParam.SELECTOR:
                    case n.SMFAdProtocolParam.TRANSACTED_SESSION_NAME:
                      t.push(N(e.getUh(), e.getType(), e.getValue()));
                      break;
                    case n.SMFAdProtocolParam
                      .TRANSACTION_FLOW_DESCRIPTOR_PUB_NOTIFY:
                    case n.SMFAdProtocolParam
                      .TRANSACTION_FLOW_DESCRIPTOR_PUB_ACK:
                    case n.SMFAdProtocolParam
                      .TRANSACTION_FLOW_DESCRIPTOR_SUB_ACK:
                      break;
                    case n.SMFAdProtocolParam.NOLOCAL:
                    case n.SMFAdProtocolParam.CUT_THROUGH:
                      t.push(S(e.getUh(), e.getType()));
                      break;
                    case n.SMFAdProtocolParam.APPLICATION_PUB_ACK:
                      break;
                    default:
                      u("Unrecognized ADProtocol Parameter in Message");
                  }
              }
              const i = t.join(""),
                o = [];
              if (2 === e.version) {
                let t = 0;
                (t = p(t, 0, 22, 2)),
                  (t = p(t, e.version, 16, 6)),
                  (t = p(t, e.msgType, 12, 4));
                let s = 4 - ((3 + i.length) & 3);
                const n = (3 + i.length + s) >> 2;
                for (
                  t = p(t, n, 0, 12),
                    o.push(T(t)),
                    o.push(i),
                    4 === s && (s = 0);
                  s > 0;

                )
                  o.push(_(0)), s--;
              } else if (3 === e.version) {
                let t = 0;
                (t = p(t, 0, 14, 2)),
                  (t = p(t, e.version, 8, 6)),
                  (t = p(t, e.msgType, 0, 8)),
                  o.push(E(t)),
                  o.push(g(6 + i.length)),
                  o.push(i);
              } else l(`Invalid Version ${e.version} found while encoding`);
              return o.join("");
            });
        },
        7283: (e, t, s) => {
          const { ContentSummaryType: n } = s(507),
            { Decode: r } = s(3486),
            { Encode: i } = s(5479),
            { ParamParse: o } = s(633),
            { ParseSMF: a } = s(1125),
            { Transport: c } = s(6624);
          (e.exports.ContentSummaryType = n),
            (e.exports.Encode = i),
            (e.exports.Decode = r),
            (e.exports.ParamParse = o),
            (e.exports.ParseSMF = a),
            (e.exports.Transport = c);
        },
        9179: (e, t, s) => {
          const { Bits: n, Convert: r } = s(840),
            { ClientCtrlMessage: i, SMFParameter: o } = s(2981),
            { LOG_ERROR: a } = s(390),
            { get: c, set: u } = n,
            { int8ToStr: l, int16ToStr: h, int32ToStr: d } = r;
          (e.exports.parseCCAt = function (e, t, s) {
            const n = new i();
            if (s < 6 || t + 6 > e.length) return n;
            let r = t;
            const u = e.readUInt16BE(r);
            r += 2;
            const l = c(u, 8, 3),
              h = c(u, 0, 8),
              d = e.readUInt32BE(r);
            if (((r += 4), 1 !== l))
              return a(`Unsupported ClientCtrl version ${l}`), !1;
            if (d <= 0 || t + d > e.length) return !1;
            for (n.msgType = h, n.version = l; r < t + d; ) {
              const t = e.readUInt8(r);
              r++;
              const s = c(t, 7, 1),
                i = c(t, 0, 7),
                a = e.readUInt32BE(r);
              if (a <= 0) return !1;
              r += 4;
              const u = a - 5,
                l = new o(s, i, null, e, r, r + u);
              n.addParameter(l), (r += u);
            }
            return n;
          }),
            (e.exports.encCC = function (e) {
              const t = [],
                s = e.getParameterArray();
              for (let e = 0, n = s.length; e < n; ++e) {
                const n = s[e];
                if (void 0 === n) continue;
                let r = 0;
                (r = u(r, n.getUh(), 7, 1)),
                  (r = u(r, n.getType(), 0, 7)),
                  t.push(l(r)),
                  t.push(d(n.getValue().length + 5)),
                  t.push(n.getValue());
              }
              const n = t.join("");
              let r = 0;
              (r = u(r, 0, 15, 1)),
                (r = u(r, 0, 11, 4)),
                (r = u(r, 1, 8, 3)),
                (r = u(r, e.msgType, 0, 8));
              const i = [];
              return (
                i.push(h(r)), i.push(d(6 + n.length)), i.push(n), i.join("")
              );
            });
        },
        7347: (e) => {
          e.exports.ContentSummaryElement = class {
            constructor(e = null, t = 0, s = 0) {
              (this.type = e), (this.position = t), (this.length = s);
            }
          };
        },
        507: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.ContentSummaryType = n.new({
            XML_META: 0,
            XML_PAYLOAD: 1,
            BINARY_ATTACHMENT: 2,
            CID_LIST: 3,
            BINARY_METADATA: 4,
          });
        },
        3486: (e, t, s) => {
          const n = s(1880),
            r = s(3170),
            i = s(4789),
            { Baggage: o, TraceContextSetter: a } = s(4573),
            c = s(7252),
            { BinaryMetaBlock: u, KeepAliveMessage: l } = s(2981),
            { ContentSummaryType: h } = s(507),
            {
              Hex: d,
              Long: p,
              Convert: { stringToUint8Array: _ },
            } = s(840),
            { Lazy: E } = s(9359),
            { LogFormatter: T } = s(390),
            { parseAdpAt: g } = s(2228),
            { parseCCAt: S } = s(9179),
            { ParseSMF: m } = s(1125),
            { PriorityUserCosMap: f } = s(2224),
            { SMFProtocol: I } = s(8958),
            { SMP: R } = s(7025),
            { Transport: C } = s(6624),
            { formatHexString: A } = d,
            { lazyValue: O } = E,
            { parseSMFAt: N } = m,
            { parseSMPAt: P } = R,
            { parseTsSmfMsgAt: D } = C,
            y = new T("[smf-decode]"),
            { LOG_DEBUG: b, LOG_ERROR: M } = y,
            w = O(() => new f().reverse),
            v = {
              10: i.MessageType.MAP,
              11: i.MessageType.STREAM,
              7: i.MessageType.TEXT,
            };
          function L(e, t) {
            const s = t,
              n = c.Codec.parseSingleElement(e.payload, 0);
            if (!n || n.getType() !== c.SDTFieldType.STREAM) return;
            const r = n.getValue();
            let u = r.getNext();
            if (
              u &&
              u.getType() === c.SDTFieldType.BYTEARRAY &&
              u._value &&
              u._value.length > 0
            ) {
              const e = u._value.readUInt8(0);
              if (
                (0 == (128 & e) &&
                  (s._messageType = v[15 & e] || i.MessageType.BINARY),
                u._value.length > 1)
              ) {
                const e = u._value.readUInt8(1);
                s.setAsReplyMessage(0 != (128 & e));
              }
            }
            if (((u = r.getNext()), u && u.getType() === c.SDTFieldType.MAP)) {
              const e = u.getValue(),
                t = e.getField("p"),
                n = e.getField("h");
              if ((t && s.setUserPropertyMap(t.getValue()), n)) {
                const e = n.getValue(),
                  t = e.getField("ci"),
                  r = e.getField("mi"),
                  i = e.getField("mt"),
                  c = e.getField("rt"),
                  u = e.getField("si"),
                  l = e.getField("sn"),
                  h = e.getField("ts"),
                  d = e.getField("ex"),
                  p = e.getField("bag"),
                  _ = e.getField("ctx");
                if (
                  (t && s.setCorrelationId(t.getValue()),
                  r && s.setApplicationMessageId(r.getValue()),
                  i && s.setApplicationMessageType(i.getValue()),
                  c && s.setReplyTo(c.getValue()),
                  u && s.setSenderId(u.getValue()),
                  l && s.setSequenceNumber(l.getValueNoThrow()),
                  h && s.setSenderTimestamp(h.getValue()),
                  d && s.setGMExpiration(d.getValue()),
                  p)
                ) {
                  const e = new o();
                  e.setBaggage(p.getValue()), s._setBaggage(e);
                }
                if (_) {
                  const e = a.fromTraceContext(_.getValue());
                  s._setCreationContext(e);
                }
              }
            }
          }
          const U = {
            decodeCompoundMessage: function (e, t) {
              const s = N(e, t);
              if (!s) return null;
              const o = t + s.headerLength,
                c = s.payloadLength;
              let d;
              switch (s.smf_protocol) {
                case I.TSESSION:
                  if (((d = D(e, o, s)), !d)) break;
                  return (d.smfHeader = s), d;
                case I.TRMSG:
                  return (
                    (d = new i.Message()),
                    (d._smfHeader = s),
                    (function (e, t, s, n) {
                      const o = t;
                      if (
                        (o._setDeliverToOne(!!e.smf_dto),
                        o._setDeliveryMode(
                          e.pm_deliverymode || i.MessageDeliveryModeType.DIRECT,
                        ),
                        null !== e.pm_tr_topicname_bytes &&
                          o._setDestination(
                            r.DestinationFromNetwork.createDestinationFromBytes(
                              e.pm_tr_topicname_bytes,
                            ),
                          ),
                        o._setDiscardIndication(!!e.smf_di),
                        o._setElidingEligible(!!e.smf_elidingEligible),
                        o._setDMQEligible(!!e.smf_deadMessageQueueEligible),
                        o._setUserCos(w.value.get(e.smf_priority)),
                        o._setPriority(e.pm_msg_priority),
                        e.pm_userdata && o._setUserData(e.pm_userdata),
                        o.setRedelivered(
                          !!e.pm_ad_redelflag || !!e.pm_ad_flowredelflag,
                        ),
                        o.setFlowId(e.pm_ad_flowid),
                        o.setGuaranteedMessageId(e.pm_ad_msgid),
                        o.setGuaranteedPreviousMessageId(e.pm_ad_prevmsgid),
                        o.setPublisherId(e.pm_ad_publisherid),
                        o.setPublisherMessageId(e.pm_ad_publishermsgid),
                        o.setTopicSequenceNumber(e.pm_ad_topicSequenceNumber),
                        o.getDeliveryMode() === i.MessageDeliveryModeType.DIRECT
                          ? o.setDeliveryCount(-1)
                          : e.pm_ad_redeliveryCount
                            ? o.setDeliveryCount(e.pm_ad_redeliveryCount + 1)
                            : o.setDeliveryCount(1),
                        e.pm_ad_spooler_unique_id &&
                          o._setSpoolerUniqueId(e.pm_ad_spooler_unique_id),
                        e.pm_ad_replication_mate_ack_message_id
                          ? o._setSpoolerMessageId(
                              e.pm_ad_replication_mate_ack_message_id,
                            )
                          : e.pm_ad_local_spooler_message_id &&
                            o._setSpoolerMessageId(
                              e.pm_ad_local_spooler_message_id,
                            ),
                        p.isLong(e.pm_ad_ttl)
                          ? o.setTimeToLive(e.pm_ad_ttl.toNumber())
                          : o.setTimeToLive(e.pm_ad_ttl),
                        e.pm_ts_transport_context)
                      ) {
                        const t = a.fromTraceContext(e.pm_ts_transport_context);
                        o._setTransportContext(t);
                      }
                      const c = n + e.headerLength,
                        l = e.pm_content_summary;
                      if (l && l.length)
                        for (let e = 0, t = l.length; e < t; ++e) {
                          const t = l[e],
                            n = c + t.position,
                            r = c + t.position + t.length;
                          switch (t.type) {
                            case h.BINARY_ATTACHMENT:
                              o._setBinaryAttachment(s.slice(n, r));
                              break;
                            case h.BINARY_METADATA: {
                              const e = u.fromEncodedSmf(s, n);
                              (o.binaryMetadataChunk = e),
                                0 === e.type && L(e, o);
                              break;
                            }
                            case h.XML_META:
                              o._setXmlMetadata(s.toString("latin1", n, r));
                              break;
                            case h.XML_PAYLOAD:
                              o._setXmlContentInternal(
                                s.toString("latin1", n, r),
                              );
                              break;
                            default:
                              M(
                                `Unhandled ContentSummaryType: ${h.describe(t.type)}`,
                              );
                          }
                        }
                      else
                        o._setBinaryAttachment(
                          e.payloadLength > 0
                            ? s.slice(c, c + e.payloadLength)
                            : void 0,
                        );
                    })(s, d, e, t),
                    d
                  );
                case I.ADCTRL:
                  return (d = g(e, o, c)), (d.smfHeader = s), d;
                case I.CLIENTCTRL:
                  if (((d = S(e, o, c)), !d)) break;
                  return (d.smfHeader = s), d;
                case I.SMP:
                  if (((d = P(e, o)), !d)) break;
                  return (d.smfHeader = s), d;
                case I.KEEPALIVE:
                case I.KEEPALIVEV2:
                  return (d = new l()), (d.smfHeader = s), d;
                default:
                  M(
                    `Unknown protocol: 0x${A(s.smf_protocol)}, dump message content: \n${n.Debug.formatDumpBytes(e.slice(t, t + s.messageLength).toString("latin1"), !0, 0)}`,
                  );
              }
              return null;
            },
          };
          e.exports.Decode = U;
        },
        5479: (e, t, s) => {
          const n = s(4789),
            { Base64: r, Bits: i, Convert: o } = s(840),
            { BinaryMetaBlock: a, SMFHeader: c, SMPMessage: u } = s(2981),
            { Check: l } = s(2201),
            {
              ClientCtrlMessage: h,
              KeepAliveMessage: d,
              AdProtocolMessage: p,
            } = s(2981),
            { Codec: _ } = s(7252),
            { ContentSummaryElement: E } = s(7347),
            { ContentSummaryType: T } = s(507),
            { DestinationType: g } = s(3170),
            { encAdp: S } = s(2228),
            { encCC: m } = s(9179),
            { ErrorSubcode: f, OperationError: I } = s(3870),
            { Lazy: R } = s(9359),
            { LOG_TRACE: C, LOG_INFO: A } = s(390),
            { ParamParse: O } = s(633),
            { PriorityUserCosMap: N } = s(2224),
            {
              SDTField: P,
              SDTFieldType: D,
              SDTMapContainer: y,
              SDTStreamContainer: b,
            } = s(7252),
            { SMFParameterType: M, SMFExtendedParameterType: w } = s(2095),
            { SMFProtocol: v } = s(8958),
            { SMP: L } = s(7025),
            { encode: U } = r,
            { set: F } = i,
            {
              int8ToStr: x,
              int16ToStr: B,
              int24ToStr: G,
              int32ToStr: k,
              int64ToStr: W,
              uint8ArrayToString: $,
            } = o,
            { lazyValue: q } = R,
            {
              encContentSummary: V,
              encDeliveryMode: H,
              encLightSMFParam: Y,
              encodeSMFParam: Q,
              encodeSMFExtendedParam: X,
              FORCED_LENGTH_MODE: j,
            } = O,
            { encodeSingleElement: K } = _,
            { encSmp: z } = L,
            J = q(() => new N().forward);
          function Z(e, t, s, n) {
            if (l.anything(s) && s.length > 0) {
              const r = new E(n, NaN, s.length);
              e.push(r), t.push(s);
            }
          }
          function ee(e, t, s, n) {
            l.anything(n) && e.addField(t, P.create(s, n));
          }
          function te(e) {
            let t;
            (e.getCorrelationId() ||
              e.getApplicationMessageId() ||
              e.getApplicationMessageType() ||
              e.getReplyTo() ||
              e.getSenderId() ||
              e.getSequenceNumber() ||
              e.getSenderTimestamp() ||
              e.getUserPropertyMap() ||
              e.isReplyMessage() ||
              e.getCreationContext() ||
              (e.getBaggage() && e.getBaggage().getBaggage()) ||
              e.getType() !== n.MessageType.BINARY) &&
              (t = (function (e) {
                let t;
                const s = new y();
                ee(s, "ci", D.STRING, e.getCorrelationId()),
                  ee(s, "mi", D.STRING, e.getApplicationMessageId()),
                  ee(s, "mt", D.STRING, e.getApplicationMessageType()),
                  ee(s, "rt", D.DESTINATION, e.getReplyTo()),
                  ee(s, "si", D.STRING, e.getSenderId()),
                  ee(s, "sn", D.INT64, e.getSequenceNumber()),
                  ee(s, "ts", D.INT64, e.getSenderTimestamp()),
                  ee(s, "ex", D.INT64, e.getGMExpiration());
                const r = e.getBaggage();
                ee(s, "bag", D.STRING, r ? r.getBaggage() : null);
                const i = e.getCreationContext();
                ee(
                  s,
                  "ctx",
                  D.BYTEARRAY,
                  i ? i.getEncodedTraceContext() : null,
                );
                const o = new y();
                e.getUserPropertyMap() &&
                  o.addField("p", P.create(D.MAP, e.getUserPropertyMap())),
                  s.getKeys().length > 0 && o.addField("h", P.create(D.MAP, s));
                let c = 0;
                switch (e.getType()) {
                  case n.MessageType.BINARY:
                    c |= 128;
                    break;
                  case n.MessageType.MAP:
                    (c |= 10), (t = K(e._structuredContainer));
                    break;
                  case n.MessageType.STREAM:
                    (c |= 11), (t = K(e._structuredContainer));
                    break;
                  case n.MessageType.TEXT:
                    (c |= 7), (t = K(e._structuredContainer));
                    break;
                  default:
                    A(`Unhandled messageType: ${e.getType()}`);
                }
                const u = e.isReplyMessage() ? 128 : 0,
                  l = P.create(D.BYTEARRAY, String.fromCharCode(c, u)),
                  h = new b();
                h.addField(l), h.addField(P.create(D.MAP, o));
                const d = new a();
                return (
                  (d.type = 0),
                  (d.payload = K(P.create(D.STREAM, h))),
                  (e.binaryMetadataChunk = d),
                  t
                );
              })(e));
            const s = [],
              r = [];
            Z(s, r, e.getXmlMetadata(), T.XML_META),
              Z(s, r, e.getXmlContent(), T.XML_PAYLOAD),
              Z(
                s,
                r,
                t ||
                  (e._binaryAttachment
                    ? e._binaryAttachment.toString("latin1")
                    : ""),
                T.BINARY_ATTACHMENT,
              );
            const i = e.binaryMetadataChunk;
            if (null !== i) {
              const e = i.asEncodedSmf(),
                t = 16777215;
              if (e.length > t)
                throw (
                  (e.length,
                  new I(
                    `binary-meta data (${e.length}) over the ${t} limit`,
                    f.PARAMETER_OUT_OF_RANGE,
                  ))
                );
              Z(s, r, e, T.BINARY_METADATA);
            }
            return (
              (e._memoized_csumm = s),
              (e._memoized_payload = r.join("")),
              (e._payload_is_memoized = !0),
              e._memoized_payload ? e._memoized_payload.length : 0
            );
          }
          const se = (e, t) =>
              ((e) => Array.from(Array(Math.pow(2, e))).map((e, t) => t))(
                t,
              ).map((s) => F(0, s, e, t)),
            ne = se(31, 1),
            re = se(30, 1),
            ie = se(29, 1),
            oe = se(28, 1),
            ae = se(27, 1),
            ce = se(24, 3),
            ue = se(22, 2),
            le = se(16, 6),
            he = se(12, 4),
            de = se(0, 8),
            pe = se(8, 8),
            _e = se(0, 8);
          function Ee(e) {
            let t = 0;
            (t |= ne[e.smf_di ? 1 : 0]),
              (t |= re[e.smf_elidingEligible ? 1 : 0]),
              (t |= ie[e.smf_dto ? 1 : 0]),
              (t |= oe[e.smf_adf ? 1 : 0]),
              (t |= ae[e.smf_deadMessageQueueEligible ? 1 : 0]),
              (t |= ce[e.smf_version || 0]),
              (t |= ue[e.smf_uh || 0]),
              (t |= le[e.smf_protocol || 0]),
              (t |= he[e.smf_priority || 0]),
              (t |= de[e.smf_ttl || 0]);
            const s = [];
            e.pm_tr_topicname_bytes &&
              s.push(Q(2, M.TR_TOPICNAME, `${e.pm_tr_topicname_bytes}`)),
              e.pm_queue_len &&
                s.push(
                  Y(
                    0,
                    M.LIGHT_QUEUE_NAME_OFFSET,
                    B(pe[e.pm_queue_offset] | _e[e.pm_queue_len]),
                  ),
                ),
              e.pm_topic_len &&
                s.push(
                  Y(
                    0,
                    M.LIGHT_TOPIC_NAME_OFFSET,
                    B(pe[e.pm_topic_offset] | pe[e.pm_topic_len]),
                  ),
                ),
              null !== e.pm_corrtag &&
                void 0 !== e.pm_corrtag &&
                s.push(Y(0, M.LIGHT_CORRELATION, G(e.pm_corrtag))),
              e.pm_ad_ackimm && s.push(Y(0, M.LIGHT_ACK_IMMEDIATELY, "")),
              null !== e.pm_msg_priority &&
                s.push(Q(0, M.MESSAGEPRIORITY, x(e.pm_msg_priority))),
              null !== e.pm_userdata &&
                "" !== e.pm_userdata &&
                s.push(Q(0, M.USERDATA, e.pm_userdata)),
              e.pm_username && s.push(Q(0, M.USERNAME, U(e.pm_username))),
              e.pm_password && s.push(Q(0, M.PASSWORD, U(e.pm_password))),
              e.pm_respcode &&
                s.push(Q(0, M.RESPONSE, k(e.pm_respcode) + e.pm_respstr)),
              null !== e.pm_deliverymode &&
                s.push(Q(0, M.DELIVERY_MODE, H(e.pm_deliverymode))),
              void 0 !== e.pm_ad_msgid &&
                (s.push(Q(2, M.ASSURED_MESSAGE_ID, W(e.pm_ad_msgid))),
                s.push(Q(2, M.ASSURED_PREVMESSAGE_ID, W(e.pm_ad_prevmsgid)))),
              e.pm_ad_flowid &&
                s.push(Q(0, M.ASSURED_FLOWID, k(e.pm_ad_flowid))),
              e.pm_ad_redelflag &&
                s.push(Q(0, M.ASSURED_REDELIVERED_FLAG, void 0)),
              void 0 !== e.pm_ad_ttl &&
                s.push(Q(0, M.AD_TIMETOLIVE, W(e.pm_ad_ttl))),
              e.pm_ad_publisherid &&
                s.push(Q(0, M.PUBLISHER_ID, k(e.pm_ad_publisherid))),
              e.pm_ad_publisherMsgId &&
                s.push(Q(0, M.PUBLISHER_MSGID, W(e.pm_ad_publisherMsgId))),
              e.pm_content_summary &&
                s.push(
                  Q(2, M.MESSAGE_CONTENT_SUMMARY, V(e.pm_content_summary)),
                );
            let n = "",
              r = 0;
            e.pm_oauth2_access_token &&
              ((n += X(0, w.OAUTH2_ACCESS_TOKEN, e.pm_oauth2_access_token)),
              (r = r || 0)),
              e.pm_oidc_id_token &&
                ((n += X(0, w.OIDC_ID_TOKEN, e.pm_oidc_id_token)),
                (r = r || 0)),
              e.pm_oauth2_issuer_identifier &&
                ((n += X(
                  0,
                  w.OAUTH2_ISSUER_IDENTIFIER,
                  e.pm_oauth2_issuer_identifier,
                )),
                (r = r || 0)),
              e.pm_ts_transport_context &&
                ((n += X(
                  0,
                  w.TS_TRANSPORT_CONTEXT,
                  $(e.pm_ts_transport_context),
                  j.SIX,
                )),
                (r = r || 0)),
              n.length > 0 && s.push(Q(r, M.EXTENDED_TYPE_STREAM, n));
            const i = s.join(""),
              o = 12 + i.length,
              a = o + e.payloadLength;
            return (
              e.setMessageSizes(o, e.payloadLength), k(t) + k(o) + k(a) + i
            );
          }
          const Te = {
            encodeCompoundMessage: function (e) {
              let t = "";
              var s, r;
              e instanceof n.Message
                ? (e.smfHeader || (e.smfHeader = new c(v.TRMSG, 255)),
                  (s = e),
                  (r = e._smfHeader),
                  (function (e, t) {
                    const s = t;
                    e._payload_is_memoized || te(e);
                    const n = e._memoized_csumm,
                      r = e._memoized_payload;
                    0 === n.length ||
                      (1 === n.length && n[0].type === T.BINARY_ATTACHMENT) ||
                      (s.pm_content_summary = n),
                      (s.payload = r);
                  })(s, r),
                  (function (e, t) {
                    const s = t,
                      r = e.getDeliveryMode();
                    (s.smf_dto = e.isDeliverToOne()),
                      (s.pm_deliverymode = r),
                      (s.smf_adf =
                        r === n.MessageDeliveryModeType.DIRECT ? 0 : 1),
                      (s.smf_di = e.isDiscardIndication()),
                      (s.smf_elidingEligible = e.isElidingEligible()),
                      (s.smf_deadMessageQueueEligible = e.isDMQEligible()),
                      (s.pm_ad_flowid = e.getFlowId()),
                      (s.pm_ad_publisherid = e.getPublisherId()),
                      (s.pm_ad_publishermsgId = e.getPublisherMessageId()),
                      (s.pm_ad_msgid = e.getGuaranteedMessageId()),
                      (s.pm_ad_prevmsgid = e.getGuaranteedPreviousMessageId()),
                      (s.pm_ad_ttl = e.getTimeToLive()),
                      (s.pm_ad_ackimm = e.isAcknowledgeImmediately()),
                      (s.pm_ad_redelflag = e.isRedelivered());
                    const i = e.getTransportContext();
                    null != i &&
                      (s.pm_ts_transport_context = i.getEncodedTraceContext());
                    const o = e.getDestination();
                    if (
                      o &&
                      ((s.pm_tr_topicname_bytes = o.getBytes()),
                      o.type === g.QUEUE || o.type === g.TEMPORARY_QUEUE)
                    ) {
                      const { offset: e } = o;
                      (s.pm_queue_len = s.pm_tr_topicname_bytes.length - e),
                        (s.pm_queue_offset = e);
                    }
                    (s.smf_priority = J.value.get(e.getUserCos())),
                      void 0 !== e.getPriority() &&
                      "number" == typeof e.getPriority() &&
                      e.getPriority() <= 255 &&
                      e.getPriority() >= 0
                        ? (s.pm_msg_priority = e.getPriority())
                        : (s.pm_msg_priority = null);
                    const a = e.getUserData();
                    s.pm_userdata = null == a ? null : e.getUserData();
                  })(s, r),
                  (t = e._smfHeader.payload))
                : e instanceof h
                  ? (t = m(e))
                  : e instanceof u
                    ? (t = z(e))
                    : e instanceof d || (e instanceof p && (t = S(e)));
              const i = e.smfHeader;
              return i.setPayloadSize(t.length), Ee(i) + t;
            },
            encodeSMF: Ee,
            adaptMessageToSmf_payloadMemoize: te,
          };
          e.exports.Encode = Te;
        },
        633: (e, t, s) => {
          const n = s(4789),
            { BidiMap: r, Lazy: i } = s(9359),
            { Bits: o, Convert: a } = s(840),
            { ContentSummaryElement: c } = s(7347),
            { ContentSummaryType: u } = s(507),
            { ErrorSubcode: l, OperationError: h } = s(3870),
            { LOG_ERROR: d } = s(390),
            { SMFUH: p } = s(2981),
            { lazyValue: _ } = i,
            { int8ToStr: E, int16ToStr: T, int24ToStr: g, int32ToStr: S } = a,
            m = _(() => {
              const e = [
                [0, n.MessageDeliveryModeType.NON_PERSISTENT],
                [1, n.MessageDeliveryModeType.PERSISTENT],
                [2, n.MessageDeliveryModeType.DIRECT],
              ].map((e) => [e[0], e[1]]);
              return new r(...e);
            }),
            f = _(() => m.value.forward),
            I = _(() => m.value.reverse),
            R = (() => {
              const e = [],
                t = Math.pow(2, 5);
              return (
                p.values.forEach((s) => {
                  e[s] = [];
                  for (let n = 0; n < t; ++n) {
                    let t = 0;
                    (t = o.set(t, s, 6, 2)),
                      (t = o.set(t, n, 0, 5)),
                      (e[s][n] = E(t));
                  }
                }),
                e
              );
            })(),
            C = new Array(256).fill(null).map((e, t) => E(t)),
            A = (() => {
              const e = [],
                t = Math.pow(2, 3),
                s = Math.pow(2, 2);
              return (
                p.values.forEach((n) => {
                  e[n] = [];
                  for (let r = 0; r < t; ++r) {
                    e[n][r] = [];
                    for (let t = 0; t < s; ++t) {
                      let s = 0;
                      (s = o.set(s, n, 6, 2)),
                        (s = o.set(s, 1, 5, 1)),
                        (s = o.set(s, r, 2, 3)),
                        (s = o.set(s, t, 0, 2)),
                        (e[n][r][t] = E(s));
                    }
                  }
                }),
                e
              );
            })(),
            O = [
              u.XML_META,
              u.XML_PAYLOAD,
              u.BINARY_ATTACHMENT,
              u.CID_LIST,
              u.BINARY_METADATA,
            ],
            N = {
              FORCED_LENGTH_MODE: { FIVE: 5, SIX: 6 },
              parseTopicQueueOffsets: function (e, t) {
                const s = [];
                return (s[0] = e.readUInt8(t)), (s[1] = e.readUInt8(t + 1)), s;
              },
              parseResponseParam: function (e, t, s) {
                const n = [];
                return (
                  (n[0] = e.readInt32BE(t)),
                  (n[1] = s > 4 ? e.toString("latin1", t + 4, t + s) : ""),
                  n
                );
              },
              parseDeliveryMode: function (e, t) {
                const s = e.readUInt8(t),
                  r = f.value.get(s);
                return void 0 !== r ? r : n.MessageDeliveryModeType.DIRECT;
              },
              encDeliveryMode: function (e) {
                const t = I.value.get(e);
                return E(void 0 !== t ? t : n.MessageDeliveryModeType.DIRECT);
              },
              parseContentSummary: function (e, t, s) {
                const n = [];
                let r = 0,
                  i = t;
                for (; i < t + s; ) {
                  const t = e.readUInt8(i),
                    s = o.get(t, 4, 4),
                    a = o.get(t, 0, 4);
                  let u = 0;
                  switch (a) {
                    case 2:
                      u = e.readUInt8(i + 1);
                      break;
                    case 3:
                      u = e.readUInt16BE(i + 1);
                      break;
                    case 4:
                      u = e.readUIntBE(i + 1, 3);
                      break;
                    case 5:
                      u = e.readInt32BE(i + 1);
                  }
                  if (0 === a)
                    return (
                      d(
                        "Invalid content summary parameter - pos not advancing",
                      ),
                      null
                    );
                  i += a;
                  const l = O[s];
                  void 0 === l && d(`Unhandled element type ${s}`);
                  const h = new c(l, r, u);
                  n.push(h), (r += u);
                }
                return n;
              },
              encContentSummary: function (e) {
                const t = [];
                for (let s = 0, n = e.length; s < n; ++s) {
                  const n = e[s];
                  let r = "",
                    i = o.set(0, n.type, 4, 4);
                  n.length <= 255
                    ? ((i = o.set(i, 2, 0, 4)), (r = E(n.length)))
                    : n.length <= 65535
                      ? ((i = o.set(i, 3, 0, 4)), (r = T(n.length)))
                      : n.length <= 16777215
                        ? ((i = o.set(i, 4, 0, 4)), (r = g(n.length)))
                        : ((i = o.set(i, 5, 0, 4)), (r = S(n.length))),
                    t.push(E(i)),
                    t.push(r);
                }
                return t.join("");
              },
              encodeSMFParam: function (e, t, s) {
                if (void 0 === s) return R[e][t] + C[2];
                const n = s.length;
                return n <= 253
                  ? R[e][t] + C[n + 2] + s
                  : R[e][t] + C[0] + S(n + 6) + s;
              },
              encodeSMFExtendedParam: function (e, t, s, n = -1) {
                let r = 0;
                r = o.set(r, e ? 1 : 0, 7, 1);
                const i = null == s ? 0 : s.length,
                  a = { 0: 0, 1: 1, 2: 2, 4: 3, 8: 4 };
                let c = 0,
                  u = "";
                if (
                  (n !== N.FORCED_LENGTH_MODE.FIVE &&
                    n !== N.FORCED_LENGTH_MODE.SIX &&
                    (n = -1),
                  Object.prototype.hasOwnProperty.call(a, i))
                )
                  c = a[i];
                else if (
                  (i < 253 && n !== N.FORCED_LENGTH_MODE.SIX) ||
                  n === N.FORCED_LENGTH_MODE.FIVE
                )
                  (c = 5), (u = E(i + 3));
                else {
                  if (
                    !(
                      (i < 65532 && n !== N.FORCED_LENGTH_MODE.FIVE) ||
                      n === N.FORCED_LENGTH_MODE.SIX
                    )
                  )
                    throw (
                      (d(
                        `Extended parameter type ${t} is too long (${i} bytes) `,
                      ),
                      new h(
                        `Extended parameter (${t}) over the 2^16 byte limit`,
                        l.PARAMETER_OUT_OF_RANGE,
                      ))
                    );
                  (c = 6), (u = T(i + 4));
                }
                (r = o.set(r, c, 4, 3)), (r = o.set(r, t >> 8, 0, 4));
                const p = 255 & t;
                return E(r) + E(p) + u + s;
              },
              encLightSMFParam: function (e, t, s) {
                return A[e][t][s.length] + s;
              },
            };
          e.exports.ParamParse = N;
        },
        1125: (e, t, s) => {
          const n = s(1583),
            { LOG_DEBUG: r, LOG_ERROR: i, LOG_INFO: o, LOG_TRACE: a } = s(390),
            { Base64: c, Bits: u } = s(840),
            { ParamParse: l } = s(633),
            { SMFHeader: h } = s(2981),
            { SMFParameterType: d, SMFExtendedParameterType: p } = s(2095),
            { decode: _ } = c,
            { get: E } = u;
          function T(e, t) {
            return !(e.length - t < 12);
          }
          function g(e, t) {
            if (!T(e, t)) return !1;
            const s = 7 & e.readUInt8(t);
            return (
              3 === s ||
              (i(`Invalid smf version in smf header, version=${s}`), !1)
            );
          }
          function S(e, t, s, r) {
            let o = s;
            for (; o < s + r; ) {
              if (o + 2 > s + r) {
                i("Extended parameter stream had padding inside.");
                break;
              }
              const a = t.readUInt8(o),
                c = t.readUInt8(o + 1),
                u = E(a, 7, 1),
                l = E(a, 4, 3),
                h = (E(a, 0, 4) << 8) + c;
              o += 2;
              const _ = { 0: 0, 1: 1, 2: 2, 3: 4, 4: 8 };
              let T = 0;
              if (Object.prototype.hasOwnProperty.call(_, l)) T = _[l];
              else if (5 === l) (T = t.readUInt8(o) - 3), o++;
              else {
                if (6 !== l)
                  return (
                    i(
                      `Invalid length mode ${l} in Extended Parameter type ${h}`,
                    ),
                    !1
                  );
                (T = t.readUInt16BE(o) - 4), (o += 2);
              }
              switch (h) {
                case d.AD_REDELIVERY_COUNT:
                  e.pm_ad_redeliveryCount = t.readUInt32BE(o);
                  break;
                case d.AD_SPOOLER_UNIQUE_ID:
                  e.pm_ad_spooler_unique_id = n.fromBits(
                    t.readUInt32BE(o + 4),
                    t.readUInt32BE(o),
                    !0,
                  );
                  break;
                case d.AD_ACK_MESSAGE_ID:
                  e.pm_ad_local_spooler_message_id = n.fromBits(
                    t.readUInt32BE(o + 4),
                    t.readUInt32BE(o),
                    !0,
                  );
                  break;
                case d.AD_REPL_MATE_ACK_MSGID:
                  e.pm_ad_replication_mate_ack_message_id = n.fromBits(
                    t.readUInt32BE(o + 4),
                    t.readUInt32BE(o),
                    !0,
                  );
                  break;
                case p.TS_TRANSPORT_CONTEXT:
                  T >= 32 &&
                    (e.pm_ts_transport_context = t.toString(
                      "latin1",
                      o,
                      o + T,
                    ));
                  break;
                default:
                  0 === u || (e.discardMessage = !0);
              }
              o += T;
            }
            return (
              o > s + r &&
                i(
                  `Last extended parameter ran beyond extended stream length by ${o - (s + r)}.`,
                ),
              !0
            );
          }
          const m = {
            isSMFHeaderAvailable: T,
            isSMFHeaderValid: g,
            isSMFAvailable: function (e, t) {
              if (!g(e, t)) return !1;
              const s = e.length - t;
              return e.readUInt32BE(t + 8) <= s;
            },
            parseSMFAt: function (e, t, s = !1) {
              if (!g(e, t)) return null;
              let r = t;
              const a = e.readUInt32BE(r),
                c = e.readUInt32BE(r + 4),
                u = e.readUInt32BE(r + 8),
                p = new h();
              (p.smf_di = E(a, 31, 1)),
                (p.smf_elidingEligible = E(a, 30, 1)),
                (p.smf_dto = E(a, 29, 1)),
                (p.smf_adf = E(a, 28, 1)),
                (p.smf_deadMessageQueueEligible = E(a, 27, 1)),
                (p.smf_version = E(a, 24, 3)),
                (p.smf_uh = E(a, 22, 2)),
                (p.smf_protocol = E(a, 16, 6)),
                (p.smf_priority = E(a, 12, 4)),
                (p.smf_ttl = E(a, 0, 8));
              const T = u - c;
              if (T < 0) return i("SMF parse error: lost framing"), null;
              if ((p.setMessageSizes(c, T), s)) return p;
              r += 12;
              const m = t + c;
              for (; r < m; ) {
                const t = e.readUInt8(r);
                ++r;
                const s = E(t, 6, 2);
                if (0 !== E(t, 5, 1)) {
                  const n = E(t, 2, 3),
                    o = E(t, 0, 2) + 1,
                    a = o - 1;
                  if (o <= 0)
                    return i("Invalid lightweight parameter length"), null;
                  switch (n) {
                    case d.LIGHT_CORRELATION:
                      p.pm_corrtag = e.readUIntBE(r, 3);
                      break;
                    case d.LIGHT_TOPIC_NAME_OFFSET: {
                      const t = l.parseTopicQueueOffsets(e, r);
                      (p.pm_queue_offset = t[0]), (p.pm_queue_len = t[1]);
                      break;
                    }
                    case d.LIGHT_QUEUE_NAME_OFFSET: {
                      const t = l.parseTopicQueueOffsets(e, r);
                      (p.pm_topic_offset = t[0]), (p.pm_topic_len = t[1]);
                      break;
                    }
                    case d.LIGHT_ACK_IMMEDIATELY:
                      p.pm_ad_ackimm = !!e.readUInt8(r);
                      break;
                    default:
                      0 === s || (p.discardMessage = !0);
                  }
                  r += a;
                } else {
                  const a = r,
                    c = E(t, 0, 5);
                  if (0 === c) break;
                  let u,
                    h = e.readUInt8(r);
                  if (
                    (r++,
                    0 === h
                      ? ((h = e.readUInt32BE(r)), (r += 4), (u = h - 6))
                      : (u = h - 2),
                    h <= 0)
                  )
                    return (
                      i(
                        `Invalid regular parameter length ${h}/${u} with suspect type ${d.describe(c)} at parameter at position ${a}`,
                      ),
                      null
                    );
                  switch (c) {
                    case d.PUBLISHER_ID:
                      p.pm_ad_publisher_id = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.PUBLISHER_MSGID:
                      p.pm_ad_publishermsgid = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.MESSAGEPRIORITY:
                      p.pm_msg_priority = e.readUInt8(r);
                      break;
                    case d.USERDATA:
                      p.pm_userdata = e.toString("latin1", r, r + u);
                      break;
                    case d.USERNAME:
                      p.pm_username = _(e.toString("latin1", r, r + u));
                      break;
                    case d.PASSWORD:
                      p.pm_password = _(e.toString("latin1", r, r + u));
                      break;
                    case d.RESPONSE: {
                      const t = l.parseResponseParam(e, r, u);
                      (p.pm_respcode = t[0]), (p.pm_respstr = t[1]);
                      break;
                    }
                    case d.SUB_ID_LIST:
                    case d.GENERIC_ATTACHMENT:
                    case d.BINARY_ATTACHMENT:
                      o("Skipping deprecated parameter type");
                      break;
                    case d.DELIVERY_MODE:
                      p.smf_adf &&
                        (p.pm_deliverymode = l.parseDeliveryMode(e, r));
                      break;
                    case d.ASSURED_MESSAGE_ID:
                      p.pm_ad_msgid = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.ASSURED_PREVMESSAGE_ID:
                      p.pm_ad_prevmsgid = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.ASSURED_REDELIVERED_FLAG:
                      p.pm_ad_redelflag = !0;
                      break;
                    case d.AD_TIMETOLIVE:
                      p.pm_ad_ttl = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.AD_TOPICSEQUENCE_NUMBER:
                      p.pm_ad_topicSequenceNumber = n.fromBits(
                        e.readUInt32BE(r + 4),
                        e.readUInt32BE(r),
                        !0,
                      );
                      break;
                    case d.MESSAGE_CONTENT_SUMMARY: {
                      const t = l.parseContentSummary(e, r, u);
                      if (!t)
                        return (
                          i(
                            `Invalid message content summary at ${r}, len ${u}`,
                          ),
                          !1
                        );
                      p.pm_content_summary = t;
                      break;
                    }
                    case d.ASSURED_FLOWID:
                      p.pm_ad_flowid = e.readUInt32BE(r);
                      break;
                    case d.TR_TOPICNAME:
                      p.pm_tr_topicname_bytes = e.toString("latin1", r, r + u);
                      break;
                    case d.AD_FLOWREDELIVERED_FLAG:
                      p.pm_ad_flowredelflag = !0;
                      break;
                    case d.EXTENDED_TYPE_STREAM:
                      if (!S(p, e, r, u)) return null;
                      break;
                    default:
                      0 === s || (p.discardMessage = !0);
                  }
                  r += u;
                }
              }
              return p;
            },
          };
          e.exports.ParseSMF = m;
        },
        2224: (e, t, s) => {
          const n = s(4789),
            { BidiMap: r } = s(9359);
          e.exports.PriorityUserCosMap = class extends r {
            constructor() {
              super(
                [n.MessageUserCosType.COS1, 0],
                [n.MessageUserCosType.COS2, 1],
                [n.MessageUserCosType.COS3, 2],
              );
            }
          };
        },
        7025: (e, t, s) => {
          const { Bits: n, Convert: r } = s(840),
            { LOG_DEBUG: i, LOG_TRACE: o } = s(390),
            { SMFSMPMessageType: a } = s(6874),
            { SMPMessage: c } = s(2981),
            { get: u, set: l } = n,
            { int8ToStr: h, int32ToStr: d } = r,
            p = {
              parseSMPAt: function (e, t) {
                if (t + 6 > e.length) return !1;
                let s = t;
                const n = e.readUInt8(s);
                s++;
                const r = u(n, 0, 7),
                  i = new c();
                if (
                  r !== a.ADDSUBSCRIPTION &&
                  r !== a.REMSUBSCRIPTION &&
                  r !== a.ADDQUEUESUBSCRIPTION &&
                  r !== a.REMQUEUESUBSCRIPTION
                )
                  return !1;
                e.toString("latin1");
                const o = e.readUInt32BE(s);
                if (((s += 4), t + o > e.length)) return !1;
                const l = e.readUInt8(s);
                if (
                  (s++,
                  (i.msgType = r),
                  (i.smpFlags = l),
                  r === a.ADDSUBSCRIPTION || r === a.REMSUBSCRIPTION)
                )
                  i.encodedUtf8Subscription = e.toString(
                    "latin1",
                    s,
                    s + o - 6,
                  );
                else {
                  const t = e.readUInt8(s);
                  s++,
                    (i.encodedUtf8QueueName = e.toString("latin1", s, s + t)),
                    (s += t);
                  const n = e.readUInt8(s);
                  s++,
                    (i.encodedUtf8Subscription = e.toString(
                      "latin1",
                      s,
                      s + n,
                    )),
                    (s += n);
                }
                return i;
              },
              encSmp: function (e) {
                if (
                  e.msgType !== a.ADDSUBSCRIPTION &&
                  e.msgType !== a.REMSUBSCRIPTION &&
                  e.msgType !== a.ADDQUEUESUBSCRIPTION &&
                  e.msgType !== a.REMQUEUESUBSCRIPTION
                )
                  return !1;
                const t = [];
                let s = 0;
                (s = l(s, 1, 7, 1)), (s = l(s, e.msgType, 0, 7)), t.push(h(s));
                let n = 6 + e.encodedUtf8Subscription.length;
                return (
                  (e.msgType !== a.ADDQUEUESUBSCRIPTION &&
                    e.msgType !== a.REMQUEUESUBSCRIPTION) ||
                    (n += 2 + e.encodedUtf8QueueName.length),
                  t.push(d(n)),
                  t.push(h(e.smpFlags)),
                  e.msgType === a.ADDQUEUESUBSCRIPTION ||
                  e.msgType === a.REMQUEUESUBSCRIPTION
                    ? (t.push(h(e.encodedUtf8QueueName.length)),
                      t.push(e.encodedUtf8QueueName),
                      t.push(h(e.encodedUtf8Subscription.length)),
                      t.push(e.encodedUtf8Subscription))
                    : t.push(e.encodedUtf8Subscription),
                  t.join("")
                );
              },
            };
          e.exports.SMP = p;
        },
        6624: (e, t, s) => {
          const { Bits: n, Convert: r } = s(840),
            { Lazy: i } = s(9359),
            { LOG_ERROR: o } = s(390),
            { SMFTransportSessionMessageType: a } = s(5752),
            { TransportSMFMessage: c } = s(2981),
            { get: u } = n,
            { int16ToStr: l, int32ToStr: h } = r,
            { lazyValue: d } = i;
          function p(e, t) {
            return e.length - t;
          }
          function _(e, t, s) {
            let n = t;
            if (p(e, n) < 10)
              return (
                o("TsSmf parse failed: not enough data, expected at least 10B"),
                !1
              );
            const r = new c();
            r.smfHeader = s;
            const i = e.readUInt16BE(n);
            (n += 2), (r.uh = u(i, 15, 1)), (r.messageType = u(i, 8, 7));
            const l = u(i, 0, 8);
            if (
              ((r.tsHeaderLength = l),
              (r.sessionId = e.toString("latin1", n, n + 8)),
              (n += 8),
              r.messageType === a.CREATE_RESP)
            ) {
              const t = e.readUInt8(n);
              if ((n++, p(e, n) < t))
                return (
                  o(
                    `TsSmf parse failed: not enough data for RouterTag, expected ${t}B`,
                  ),
                  !1
                );
              (r.routerTag = e.toString("latin1", n, n + t)), (n += t);
            }
            return (
              (n = t + l),
              4294967295 === s.payloadLength
                ? (r.payloadLength = s.payloadLength)
                : (r.payloadLength = s.payloadLength - l),
              r
            );
          }
          const E = d(() => h(51642369) + h(12)),
            T = d(() => E.value + h(22) + l(33290)),
            g = d(() => E.value + h(22) + l(32778) + h(0) + h(0)),
            S = d(() => h(60030977) + h(12) + h(22) + l(34058)),
            m = d(() => h(60030977) + h(12) + h(24) + l(34316)),
            f = {
              genTsCreateHeader: function () {
                return g.value;
              },
              genTsDestroyHeader: function (e) {
                return T.value + e;
              },
              genTsDataTokenMsg: function (e) {
                return S.value + e;
              },
              genTsDataStreamTokenMsg: function (e, t) {
                return m.value + e + l(t && t > 0 ? t : 0);
              },
              genTsDataMsgHeaderParts: function (e) {
                return [h(60030977) + h(12), l(33802) + e];
              },
              parseTsSmfHdrAt: _,
              parseTsSmfMsgAt: function (e, t, s) {
                const n = _(e, t, s);
                if (!n) return null;
                const r = t + n.tsHeaderLength;
                return p(e, r) < n.payloadLength
                  ? (o(
                      `Couldn't read full encapsulated TsSmf payload, expected ${n.payloadLength}B`,
                    ),
                    null)
                  : ((n.payload = e.slice(r, r + n.payloadLength)), n);
              },
            };
          e.exports.Transport = f;
        },
        7780: (e, t, s) => {
          const { BaseMessage: n } = s(3493),
            { Convert: r, Long: i } = s(840),
            { DestinationType: o } = s(3170),
            { LOG_TRACE: a } = s(390),
            { OperationError: c } = s(3870),
            { QueueAccessType: u, QueueDiscardBehavior: l } = s(5754),
            { QueuePermissions: h, QueueType: d } = s(5754),
            { ReplayStartType: p } = s(2604),
            { MessageOutcome: _ } = s(4789),
            { SMFAdProtocolMessageType: E } = s(948),
            { SMFAdProtocolParam: T } = s(4786),
            { SMFHeader: g } = s(6631),
            { SMFParameter: S } = s(2984),
            { SMFProtocol: m } = s(8958),
            { SMFUH: f } = s(3767),
            { StringUtils: I } = s(7882),
            R = s(8764).lW,
            { strToInt8: C, strToInt16: A, strToUInt32: O, strToUInt64: N } = r,
            P = R.prototype.readUInt8,
            D = R.prototype.readUInt16BE,
            y = R.prototype.readUInt32BE,
            b = function (e) {
              return i.fromBits(
                this.readUInt32BE(e + 4),
                this.readUInt32BE(e),
                !0,
              );
            },
            { nullTerminate: M, stripNullTerminate: w } = I,
            v = { [o.TOPIC]: T.DTENAME, [o.QUEUE]: T.QUEUENAME },
            L = { [d.TOPIC_ENDPOINT]: T.DTENAME, [d.QUEUE]: T.QUEUENAME },
            U = {
              [h.NONE]: 0,
              [h.READ_ONLY]: 1,
              [h.CONSUME]: 3,
              [h.MODIFY_TOPIC]: 7,
              [h.DELETE]: 15,
            },
            F = { 1: u.EXCLUSIVE, 2: u.NONEXCLUSIVE },
            x = { [u.EXCLUSIVE]: 1, [u.NONEXCLUSIVE]: 2 },
            B = { [l.NOTIFY_SENDER_OFF]: 1, [l.NOTIFY_SENDER_ON]: 2 };
          function G(e, t, s = !1) {
            if (!t) return;
            const {
              accessType: n,
              discardBehavior: r,
              maxMessageRedelivery: i,
              maxMessageSize: o,
              permissions: a,
              quotaMB: c,
              respectsTTL: u,
            } = t;
            a &&
              void 0 !== U[a] &&
              e.addParameter(new S(f.IGNORE, T.EP_ALLOTHER_PERMISSION, U[a])),
              s ||
                void 0 === n ||
                void 0 === x[n] ||
                e.addParameter(new S(f.IGNORE, T.ACCESSTYPE, x[n])),
              null != c && e.addParameter(new S(f.IGNORE, T.EP_QUOTA, c)),
              null != o && e.addParameter(new S(f.IGNORE, T.EP_MAX_MSGSIZE, o));
            let l = 0;
            null != r && (l |= B[r] << 12),
              l && e.addParameter(new S(f.IGNORE, T.EP_BEHAVIOUR, l)),
              null != i && e.addParameter(new S(f.IGNORE, T.MAX_REDELIVERY, i)),
              null != u &&
                e.addParameter(new S(f.IGNORE, T.EP_RESPECTS_TTL, u ? 1 : 0));
          }
          class k extends n {
            constructor(e = 0, t = 3) {
              super(new g(m.ADCTRL, 1)), (this.msgType = e), (this.version = t);
            }
            _readParameter(e, t = null, s = null) {
              const n = this.getParameter(e);
              if (void 0 === n) return;
              if (s && n.getBuffer())
                return s.call(n.getBuffer(), n.getBegin());
              const r = n.getValue();
              return t ? t(r) : r;
            }
            getAccessType() {
              const e = this._readParameter(T.ACCESSTYPE, C, P);
              return F[e];
            }
            getActiveFlow() {
              return this._readParameter(T.ACTIVE_FLOW_INDICATION, C, P);
            }
            getQueueDiscardBehavior() {
              const e = this._readParameter(T.EP_BEHAVIOUR, A, D);
              if (void 0 === e) return;
              const t = (12288 & e) >> 12;
              return t === B[l.NOTIFY_SENDER_OFF]
                ? l.NOTIFY_SENDER_OFF
                : t === B[l.NOTIFY_SENDER_ON]
                  ? l.NOTIFY_SENDER_ON
                  : void 0;
            }
            getEndpointDeliveryCountSent() {
              switch (
                (3072 & this._readParameter(T.EP_BEHAVIOUR, A, D)) >>
                10
              ) {
                case 0:
                default:
                  return;
                case 1:
                  return !1;
                case 2:
                  return !0;
              }
            }
            getEndpointId() {
              return this._readParameter(T.ENDPOINT_ID, O, y);
            }
            getRespectsTTL() {
              const e = this._readParameter(T.EP_RESPECTS_TTL, C, P);
              if (void 0 !== e) return !!e;
            }
            getFlowName() {
              return this._readParameter(T.FLOWNAME, w);
            }
            getFlowId() {
              return this._readParameter(T.FLOWID, O, y);
            }
            getQuota() {
              return this._readParameter(T.EP_QUOTA, O, y);
            }
            getMaxMsgSize() {
              return this._readParameter(T.EP_MAX_MSGSIZE, O, y);
            }
            getTopicEndpointBytes() {
              return this._readParameter(T.DTENAME);
            }
            getGrantedPermissions() {
              const e = this._readParameter(T.GRANTED_PERMISSIONS, O, y);
              let t;
              return (
                Object.keys(U).forEach((s) => {
                  U[s] === e && (t = s);
                }),
                t
              );
            }
            getAllOthersPermissions() {
              const e = this._readParameter(T.EP_ALLOTHER_PERMISSION, O, y);
              let t;
              return (
                Object.keys(U).forEach((s) => {
                  U[s] === e && (t = s);
                }),
                t
              );
            }
            getLastMsgIdAcked() {
              return this._readParameter(T.LASTMSGIDACKED, N, b);
            }
            getLastMsgIdReceived() {
              return this._readParameter(T.LASTMSGIDRECEIVED, N, b);
            }
            getPublisherId() {
              return this._readParameter(T.PUBLISHER_ID, O, y);
            }
            getWantFlowChangeNotify() {
              return !!this._readParameter(T.WANT_FLOW_CHANGE_NOTIFY, C, P);
            }
            getWindow() {
              return this._readParameter(T.WINDOW, C, P);
            }
            getMaxRedelivery() {
              return this._readParameter(T.MAX_REDELIVERY, C, P);
            }
            getMaxUnackedMessages() {
              return this._readParameter(
                T.MAX_DELIVERED_UNACKED_MESSAGES_PER_FLOW,
                O,
                y,
              );
            }
            getEndpointErrorId() {
              return this._readParameter(T.ENDPOINT_ERROR_ID, N, b);
            }
            getPartitionGroupId() {
              return this._readParameter(T.PARTITION_GROUP_ID, A, D);
            }
            getSpoolerUniqueId() {
              return this._readParameter(T.SPOOLER_UNIQUE_ID, N, b);
            }
            static getCloseMessagePublisher(e, t) {
              const s = new k(E.CLOSEPUBFLOW);
              return (
                (s.smfHeader.pm_corrtag = t),
                s.addParameter(new S(f.REJECT, T.FLOWID, e)),
                s
              );
            }
            static getCreate(e, t, s) {
              const n = new k(E.CREATE);
              n.smfHeader.pm_corrtag = s;
              const r = L[e.type];
              if (void 0 === r) throw new c("Unknown destination type");
              return (
                n.addParameter(new S(f.REJECT, r, M(e.name))),
                n.addParameter(new S(f.IGNORE, T.EP_DURABLE, e.durable)),
                G(n, t),
                n
              );
            }
            static getOpenMessagePublisher(e, t, s, n, r) {
              const i = new k(E.OPENPUBFLOW);
              return (
                (i.smfHeader.pm_corrtag = r),
                void 0 !== e &&
                  i.addParameter(new S(f.REJECT, T.LASTMSGIDACKED, e)),
                void 0 !== t &&
                  i.addParameter(new S(f.REJECT, T.LASTMSGIDSENT, t)),
                i.addParameter(new S(f.REJECT, T.WINDOW, s)),
                i.addParameter(new S(f.IGNORE, T.FLOWNAME, n || "")),
                i
              );
            }
            static getOpenMessageConsumer(
              e,
              t,
              s,
              n,
              r,
              a,
              u,
              l,
              h = i.UZERO,
              d = i.UZERO,
              _ = !1,
              g = void 0,
              m = void 0,
              I = void 0,
              R = !1,
            ) {
              const C = e.durable,
                A = s.bytes,
                O = s.type,
                N = new k(E.BIND);
              N.smfHeader.pm_corrtag = r;
              const P = v[O];
              if (void 0 === P) throw new c("Unknown destination type");
              if (
                (N.addParameter(new S(f.REJECT, P, A)),
                n && N.addParameter(new S(f.REJECT, T.TOPICNAME, n.bytes)),
                O === o.QUEUE &&
                  (N.addParameter(new S(f.REJECT, T.LASTMSGIDACKED, h)),
                  N.addParameter(new S(f.IGNORE, T.LASTMSGIDRECEIVED, d))),
                N.addParameter(new S(f.REJECT, T.WINDOW, a)),
                N.addParameter(new S(f.IGNORE, T.EP_DURABLE, C)),
                G(N, t, !0),
                u && N.addParameter(new S(f.REJECT, T.NOLOCAL, 1)),
                l &&
                  N.addParameter(new S(f.IGNORE, T.WANT_FLOW_CHANGE_NOTIFY, 1)),
                R
                  ? N.addParameter(new S(f.REJECT, T.FLOWTYPE, 3))
                  : _ && N.addParameter(new S(f.REJECT, T.FLOWTYPE, 2)),
                void 0 !== g)
              ) {
                let e = g._replayStartValue;
                g._type === p.DATE &&
                  (e = i.fromNumber(g._replayStartValue, !0).multiply(1e6)),
                  N.addParameter(
                    new S(f.REJECT, T.REPLAY_START_LOCATION, {
                      type: g._type,
                      value: e,
                    }),
                  );
              }
              return (
                void 0 !== m &&
                  N.addParameter(new S(f.IGNORE, T.ENDPOINT_ERROR_ID, m)),
                null != I &&
                  N.addParameter(new S(f.IGNORE, T.PARTITION_GROUP_ID, I)),
                N
              );
            }
            static getCloseMessageConsumer(e, t) {
              const s = new k(E.UNBIND);
              return (
                (s.smfHeader.pm_corrtag = t),
                s.addParameter(new S(f.REJECT, T.FLOWID, e)),
                s
              );
            }
            static getDTEUnsubscribeMessage(e, t) {
              const s = new k(E.UNSUBSCRIBE);
              return (
                (s.smfHeader.pm_corrtag = e),
                s.addParameter(new S(f.REJECT, T.DTENAME, t.getBytes())),
                s
              );
            }
            static getAck(e, t = void 0, s = void 0, n = void 0) {
              const r = new k(E.CLIENTACK);
              if (
                (r.addParameter(new S(f.REJECT, T.FLOWID, e)),
                t && r.addParameter(new S(f.REJECT, T.LASTMSGIDACKED, t)),
                null != s &&
                  r.addParameter(
                    new S(
                      f.REJECT,
                      s <= 255 ? T.WINDOW : T.TRANSPORT_WINDOW,
                      s,
                    ),
                  ),
                n && n.size > 0)
              ) {
                let e = 0;
                const t = _.values;
                for (let s = 0; s < t.length; s++)
                  e += n.has(t[s]) ? n.get(t[s]).length : 0;
                if (e > k.MAX_CLIENT_ACK_RANGES)
                  throw new c(
                    "Application ack range count exceeds limit of 64",
                  );
                r.addParameter(new S(f.REJECT, T.APPLICATION_ACK, n));
              }
              return r;
            }
            static getUnbindAck(e, t = void 0, s = void 0) {
              const n = new k(E.UNBIND);
              return (
                n.addParameter(new S(f.REJECT, T.FLOWID, e)),
                t && n.addParameter(new S(f.IGNORE, T.ENDPOINT_ERROR_ID, t)),
                n
              );
            }
          }
          (k.MAX_CLIENT_ACK_RANGES = 64), (e.exports.AdProtocolMessage = k);
        },
        2981: (e, t, s) => {
          const { AdProtocolMessage: n } = s(7780),
            { BinaryMetaBlock: r } = s(2578),
            { ClientCtrlMessage: i } = s(7385),
            { KeepAliveMessage: o } = s(2347),
            { SMFHeader: a } = s(6631),
            { SMFParameter: c } = s(2984),
            { SMFUH: u } = s(3767),
            { SMPMessage: l } = s(807),
            { TransportSMFMessage: h } = s(3902);
          (e.exports.AdProtocolMessage = n),
            (e.exports.BinaryMetaBlock = r),
            (e.exports.ClientCtrlMessage = i),
            (e.exports.KeepAliveMessage = o),
            (e.exports.SMFHeader = a),
            (e.exports.SMFParameter = c),
            (e.exports.SMFUH = u),
            (e.exports.SMPMessage = l),
            (e.exports.TransportSMFMessage = h);
        },
        3493: (e) => {
          e.exports.BaseMessage = class {
            constructor(e = null, t = []) {
              (this._smfHeader = e), (this._parameters = t);
            }
            addParameter(e) {
              this._parameters[e.getType()] = e;
            }
            getParameter(e) {
              return this._parameters[e];
            }
            getParameterArray() {
              return this._parameters;
            }
            get smfHeader() {
              return this._smfHeader;
            }
            set smfHeader(e) {
              this._smfHeader = e;
            }
            getResponse() {
              const e = this.smfHeader;
              return e && e.pm_respcode && e.pm_respstr
                ? { responseCode: e.pm_respcode, responseString: e.pm_respstr }
                : null;
            }
          };
        },
        2578: (e, t, s) => {
          const { Bits: n, Convert: r } = s(840),
            { get: i } = n,
            { int8ToStr: o, int24ToStr: a } = r;
          class c {
            constructor(e, t) {
              (this.type = e), (this.payload = t);
            }
            asEncodedSmf() {
              const e = [];
              return (
                e.push(o(1)),
                e.push(o(this.type)),
                e.push(a(this.payload.length)),
                e.push(this.payload.toString("latin1")),
                e.join("")
              );
            }
            static fromEncodedSmf(e, t = 0) {
              if (e.length - t < 6) return null;
              const s = e.readUInt8(t),
                n = e.readInt32BE(t + 1),
                r = i(n, 24, 8),
                o = i(n, 0, 24),
                a = 4 * s + 1,
                u = e.slice(t + a, t + a + o);
              return new c(r, u);
            }
          }
          e.exports.BinaryMetaBlock = c;
        },
        7385: (e, t, s) => {
          const {
              AuthenticationScheme: n,
              CapabilityType: r,
              ClientCapabilityType: i,
              MutableSessionProperty: o,
              SessionProperties: a,
            } = s(5594),
            { BaseMessage: c } = s(3493),
            { Bits: u, Convert: l } = s(840),
            { DestinationType: h, DestinationUtil: d } = s(3170),
            { ErrorSubcode: p, OperationError: _ } = s(3870),
            { Process: E, StringUtils: T, Version: g } = s(7882),
            { SMFClientCtrlMessageType: S } = s(9947),
            { SMFClientCtrlParam: m, SMFClientCtrlAuthType: f } = s(1200),
            { SMFHeader: I } = s(6631),
            { SMFParameter: R } = s(2984),
            { SMFProtocol: C } = s(8958),
            { LOG_TRACE: A } = s(390),
            { get: O, set: N } = u,
            {
              int8ToStr: P,
              strToInt8: D,
              int16ToStr: y,
              int32ToStr: b,
              strToInt16: M,
              strToInt32: w,
            } = l,
            { nullTerminate: v, stripNullTerminate: L } = T,
            { validateAndEncode: U } = d,
            F = [
              r.JNDI,
              r.COMPRESSION,
              r.GUARANTEED_MESSAGE_CONSUME,
              r.TEMPORARY_ENDPOINT,
              r.GUARANTEED_MESSAGE_PUBLISH,
              r.GUARANTEED_MESSAGE_BROWSE,
              r.ENDPOINT_MGMT,
              r.SELECTOR,
              r.ENDPOINT_MESSAGE_TTL,
              r.QUEUE_SUBSCRIPTIONS,
              null,
              r.SUBSCRIPTION_MANAGER,
              r.MESSAGE_ELIDING,
              r.TRANSACTED_SESSION,
              r.NO_LOCAL,
              r.ACTIVE_CONSUMER_INDICATION,
              r.PER_TOPIC_SEQUENCE_NUMBERING,
              r.ENDPOINT_DISCARD_BEHAVIOR,
              r.CUT_THROUGH,
              null,
              r.MESSAGE_REPLAY,
              r.COMPRESSED_SSL,
              null,
              r.SHARED_SUBSCRIPTIONS,
              r.BR_REPLAY_ERRORID,
              r.AD_APP_ACK_FAILED,
              r.VAR_LEN_EXT_PARAM,
            ],
            x = new Map([
              [i.UNBIND_ACK, 128],
              [i.BR_ERRORID, 64],
              [i.PQ, 32],
            ]);
          class B extends c {
            constructor(e = 0) {
              super(new I(C.CLIENTCTRL, 1)),
                (this.msgType = e),
                (this.version = 1);
            }
            getP2PTopicValue() {
              const e = this.getParameter(m.P2PTOPIC);
              return e ? L(e.getValue()) : null;
            }
            getVpnNameInUseValue() {
              const e = this.getParameter(m.MSGVPNNAME);
              return e ? L(e.getValue()) : null;
            }
            getVridInUseValue() {
              const e = this.getParameter(m.VRIDNAME);
              return e ? L(e.getValue()) : null;
            }
            getUserIdValue() {
              const e = this.getParameter(m.USERID);
              return e ? L(e.getValue()) : null;
            }
            getRouterCapabilities() {
              let e = [],
                t = this.getParameter(m.ROUTER_CAPABILITIES);
              return (
                t && (e = B.prmParseCapabilitiesValue(t.getValue(), e)),
                (t = this.getParameter(m.SOFTWAREVERSION)),
                t && (e[r.PEER_SOFTWARE_VERSION] = L(t.getValue())),
                (t = this.getParameter(m.SOFTWAREDATE)),
                t && (e[r.PEER_SOFTWARE_DATE] = L(t.getValue())),
                (t = this.getParameter(m.PLATFORM)),
                t && (e[r.PEER_PLATFORM] = L(t.getValue())),
                (t = this.getParameter(m.PHYSICALROUTERNAME)),
                t && (e[r.PEER_ROUTER_NAME] = L(t.getValue())),
                e
              );
            }
            static prmGetDtoPriorityValue(e) {
              if (void 0 === e.local || void 0 === e.network) return !1;
              let t = 0;
              return (
                (t = N(t, e.local, 8, 8)), (t = N(t, e.network, 0, 8)), y(t)
              );
            }
            static prmParseDtoPriorityValue(e) {
              const t = {},
                s = M(e.substr(0, 2));
              return (t.local = O(s, 8, 8)), (t.network = O(s, 0, 8)), t;
            }
            static prmParseCapabilitiesValue(e, t) {
              const s = t;
              if (!e || !s) return !1;
              const n = r;
              let i = 0;
              const o = D(e[i]);
              let a;
              ++i;
              for (let t = 0; t < o; ++t) {
                const n = 7 & t;
                0 === n && ((a = D(e[i])), ++i);
                const r = F[t];
                r && (s[r] = !!O(a, 7 - n, 1));
              }
              for (let t = 0; i < e.length && t < 500; ++t) {
                const t = D(e[i]);
                i++;
                const r = w(e.substr(i, 4)) - 5;
                i += 4;
                const o = e.substr(i, r);
                switch (((i += r), t)) {
                  case 0:
                    s[n.PEER_PORT_SPEED] = 4 === o.length ? w(o) : 0;
                    break;
                  case 1:
                    s[n.PEER_PORT_TYPE] = 1 === o.length ? D(o) : 0;
                    break;
                  case 2:
                    s[n.MAX_GUARANTEED_MSG_SIZE] = 4 === o.length ? w(o) : 0;
                    break;
                  case 3:
                    s[n.MAX_DIRECT_MSG_SIZE] = 4 === o.length ? w(o) : 0;
                }
              }
              return s;
            }
            static getLogin(e, t, s, r) {
              if (!(e instanceof a)) return !1;
              const o = new B(S.LOGIN),
                c = o._smfHeader,
                u = e.authenticationScheme === n.CLIENT_CERTIFICATE;
              (c.pm_corrtag = r),
                e.password && !u && (c.pm_password = e.password),
                e.userName && (c.pm_username = e.userName),
                e.subscriberLocalPriority &&
                  e.subscriberNetworkPriority &&
                  o.addParameter(
                    new R(
                      0,
                      m.DELIVERTOONEPRIORITY,
                      B.prmGetDtoPriorityValue({
                        local: e.subscriberLocalPriority,
                        network: e.subscriberNetworkPriority,
                      }),
                    ),
                  ),
                e.vpnName &&
                  e.vpnName.length > 0 &&
                  o.addParameter(new R(1, m.MSGVPNNAME, v(e.vpnName))),
                e.applicationDescription &&
                  e.applicationDescription.length > 0 &&
                  o.addParameter(
                    new R(0, m.CLIENTDESC, v(e.applicationDescription)),
                  ),
                e.userIdentification &&
                  e.userIdentification.length > 0 &&
                  o.addParameter(new R(0, m.USERID, v(e.userIdentification))),
                e.authenticationScheme === n.OAUTH2 &&
                  (o.addParameter(new R(1, m.AUTHENTICATION_SCHEME, f.OAUTH2)),
                  e.idToken && (c.pm_oidc_id_token = v(e.idToken)),
                  e.accessToken &&
                    (c.pm_oauth2_access_token = v(e.accessToken)),
                  e.issuerIdentifier &&
                    (c.pm_oauth2_issuer_identifier = v(e.issuerIdentifier))),
                o.addParameter(new R(0, m.CLIENTNAME, v(e.clientName))),
                o.addParameter(
                  new R(0, m.PLATFORM, v(`${E.platform} - JS API (${g.mode})`)),
                ),
                e.noLocal && o.addParameter(new R(0, m.NO_LOCAL, "")),
                u &&
                  o.addParameter(
                    new R(1, m.AUTHENTICATION_SCHEME, f.CLIENT_CERTIFICATE),
                  ),
                o.addParameter(new R(0, m.SOFTWAREDATE, v(g.formattedDate))),
                o.addParameter(new R(0, m.SOFTWAREVERSION, v(g.version))),
                t && s
                  ? o.addParameter(new R(1, m.SSL_DOWNGRADE, ""))
                  : t
                    ? o.addParameter(new R(1, m.SSL_DOWNGRADE, ""))
                    : s && o.addParameter(new R(1, m.SSL_DOWNGRADE, "\0"));
              const l = (function (e) {
                const t = Math.max.apply(null, e) + 1;
                let s = 0;
                return (
                  e.forEach((e) => {
                    s += x.get(e);
                  }),
                  P(t) + P(s)
                );
              })([i.UNBIND_ACK, i.BR_ERRORID, i.PQ]);
              o.addParameter(new R(0, m.CLIENT_CAPABILITIES, l));
              const h = b(e.keepAliveIntervalInMsecs / 1e3);
              return o.addParameter(new R(0, m.KEEP_ALIVE_INTERVAL, h)), o;
            }
            static getUpdate(e, t, s) {
              const n = new B(S.UPDATE);
              if (((n.smfHeader.pm_corrtag = s), e === o.CLIENT_DESCRIPTION)) {
                const e = (t || "").toString().substr(0, 250);
                n.addParameter(new R(0, m.CLIENTDESC, v(e)));
              } else if (e === o.CLIENT_NAME) {
                const e = B.validateClientName(
                  t,
                  (e) =>
                    new _(`Invalid clientName: ${e}`, p.PARAMETER_OUT_OF_RANGE),
                );
                if (e) throw e;
                n.addParameter(new R(0, m.CLIENTNAME, v(t)));
              }
              return n;
            }
            static validateClientName(e, t) {
              const s = U(h.TOPIC, e, t);
              return s.error
                ? s.error
                : s.bytes.length > 161
                  ? t("Client Name too long (max length: 160).")
                  : null;
            }
          }
          e.exports.ClientCtrlMessage = B;
        },
        2347: (e, t, s) => {
          const { BaseMessage: n } = s(3493),
            { SMFHeader: r } = s(6631),
            { SMFProtocol: i } = s(8958);
          e.exports.KeepAliveMessage = class extends n {
            constructor() {
              super(new r(i.KEEPALIVEV2, 2)), (this._smfHeader.smf_uh = 2);
            }
          };
        },
        6631: (e) => {
          e.exports.SMFHeader = class {
            constructor(e = 0, t = 0) {
              (this._parameters = []),
                (this.smf_version = 3),
                (this.smf_uh = 0),
                (this.smf_protocol = e),
                (this.smf_priority = 0),
                (this.smf_ttl = t),
                (this.smf_msgLen = 0),
                (this.smf_di = 0),
                (this.smf_tqd = 0),
                (this.smf_elidingEligible = 0),
                (this.smf_dto = 0),
                (this.smf_adf = 0),
                (this.smf_deadMessageQueueEligible = 0),
                (this.pm_userdata = null),
                (this.pm_respcode = 0),
                (this.pm_respstr = null),
                (this.pm_username = null),
                (this.pm_password = null),
                (this.pm_tr_topicname_bytes = null),
                (this.pm_deliverymode = null),
                (this.pm_ad_msgid = void 0),
                (this.pm_ad_prevmsgid = void 0),
                (this.pm_ad_redelflag = 0),
                (this.pm_ad_flowredelflag = 0),
                (this.pm_ad_ttl = void 0),
                (this.pm_ad_ackimm = void 0),
                (this.pm_ad_flowid = 0),
                (this.pm_ad_publisherid = 0),
                (this.pm_ad_publishermsgid = 0),
                (this.pm_content_summary = null),
                (this.pm_corrtag = null),
                (this.pm_topic_offset = 0),
                (this.pm_topic_len = 0),
                (this.pm_queue_offset = 0),
                (this.pm_queue_len = 0),
                (this.pm_msg_priority = null),
                (this.pm_oauth2_access_token = null),
                (this.pm_oidc_id_token = null),
                (this.pm_oauth2_issuer_identifier = null),
                (this.pm_ts_transport_context = null),
                (this.unknownProtoFlag = !1),
                (this.messageLength = 0),
                (this.payloadLength = 0),
                (this.headerLength = 0),
                (this.payload = null),
                (this.discardMessage = !1);
            }
            setMessageSizes(e, t) {
              (this.headerLength = e),
                (this.payloadLength = t),
                (this.messageLength = e + t);
            }
            setPayloadSize(e) {
              this.payloadLength = e;
            }
          };
        },
        2984: (e) => {
          e.exports.SMFParameter = class {
            constructor(e, t, s, n, r, i) {
              (this._type = t),
                (this._value = s),
                (this._uh = e),
                (this._buffer = n),
                (this._begin = r),
                (this._end = i);
            }
            getType() {
              return this._type;
            }
            getValue() {
              return this._buffer && !this._value
                ? this._buffer.toString("latin1", this._begin, this._end)
                : this._value;
            }
            getUh() {
              return this._uh;
            }
            getBuffer() {
              return this._buffer;
            }
            getBegin() {
              return this._begin;
            }
            getEnd() {
              return this._end;
            }
            toString() {
              return `${this._uh}:0x${this._type.toString(16)} = ${this.getValue()}`;
            }
          };
        },
        3767: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFUH = n.new({ IGNORE: 0, REJECT: 2 });
        },
        807: (e, t, s) => {
          const { assert: n } = s(9359),
            { BaseMessage: r } = s(3493),
            { Destination: i, DestinationUtil: o } = s(3170),
            { SMFHeader: a } = s(6631),
            { SMFProtocol: c } = s(8958),
            { SMFSMPMessageType: u } = s(6874),
            { SMFSMPMessageTypeFlags: l } = s(8488);
          class h extends r {
            constructor() {
              super(new a(c.SMP, 1)),
                (this.msgType = 0),
                (this.encodedUtf8Subscription = null),
                (this.encodedUtf8QueueName = null),
                (this.smpFlags = 0 | l.SMF_SMP_FLAG_TOPIC),
                (this._encodedQueueName = null),
                (this._encodedClientName = null);
            }
            isFlag(e) {
              return this.smpFlags & e;
            }
            setFlag(e, t) {
              t ? (this.smpFlags |= e) : (this.smpFlags &= ~e);
            }
            static getSubscriptionMessage(e, t, s, r) {
              n(
                t instanceof i,
                "Topics are not UCS-2 strings. Pass a Topic object.",
              );
              const o = new h();
              return (
                (o.msgType = s ? u.ADDSUBSCRIPTION : u.REMSUBSCRIPTION),
                (o.encodedUtf8Subscription = t.getBytes()),
                n(o.encodedUtf8Subscription, "Topic had no encoding"),
                o.setFlag(l.SMF_SMP_FLAG_TOPIC, !0),
                r && o.setFlag(l.SMF_SMP_FLAG_RESPREQUIRED, !0),
                (o._smfHeader.pm_corrtag = e),
                o
              );
            }
            static getQueueSubscriptionMessage(e, t, s, r) {
              n(
                t instanceof i,
                "Topics are not UCS-2 strings. Pass a Topic object.",
              );
              const a = new h();
              return (
                (a.msgType = r
                  ? u.ADDQUEUESUBSCRIPTION
                  : u.REMQUEUESUBSCRIPTION),
                (a.encodedUtf8QueueName = o.encodeBytes(s.getName())),
                (a.encodedUtf8Subscription = t.getBytes()),
                n(a.encodedUtf8Subscription, "Topic had no encoding"),
                n(a.encodedUtf8QueueName, "Queue had no encoding"),
                a.setFlag(l.SMF_SMP_FLAG_TOPIC, !0),
                a.setFlag(l.SMF_SMP_FLAG_RESPREQUIRED, !0),
                a.setFlag(l.SMF_SMP_FLAG_PERSIST, !0),
                (a._smfHeader.pm_corrtag = e),
                a
              );
            }
          }
          e.exports.SMPMessage = h;
        },
        3902: (e, t, s) => {
          const { BaseMessage: n } = s(3493);
          e.exports.TransportSMFMessage = class extends n {
            constructor() {
              super(null, null),
                (this.uh = 0),
                (this.messageType = null),
                (this.sessionId = null),
                (this.routerTag = null),
                (this.payload = null),
                (this.payloadLength = 0),
                (this.tsHeaderLength = 0);
            }
          };
        },
        948: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFAdProtocolMessageType = n.new({
            OPENPUBFLOW: 0,
            CLIENTACK: 3,
            BIND: 4,
            UNBIND: 5,
            UNSUBSCRIBE: 6,
            CLOSEPUBFLOW: 7,
            CREATE: 8,
            DELETE: 9,
            TRANSACTIONCTRL: 11,
            FLOWCHANGEUPDATE: 12,
            XACTRL: 14,
            CLIENTNACK: 15,
          });
        },
        4786: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFAdProtocolParam = n.new({
            LASTMSGIDSENT: 1,
            LASTMSGIDACKED: 2,
            WINDOW: 3,
            TRANSPORT_PRIORITY: 4,
            APPLICATION_ACK: 5,
            FLOWID: 6,
            QUEUENAME: 7,
            DTENAME: 8,
            TOPICNAME: 9,
            FLOWNAME: 10,
            EP_DURABLE: 11,
            ACCESSTYPE: 12,
            SELECTOR: 13,
            TRANSPORT_WINDOW: 14,
            LINGER_OPTION: 15,
            LASTMSGIDRECEIVED: 16,
            EP_ALLOTHER_PERMISSION: 17,
            FLOWTYPE: 18,
            EP_QUOTA: 19,
            EP_MAX_MSGSIZE: 20,
            GRANTED_PERMISSIONS: 21,
            EP_RESPECTS_TTL: 22,
            TRANSACTION_CTRL_MESSAGE_TYPE: 23,
            TRANSACTED_SESSION_ID: 24,
            TRANSACTED_SESSION_NAME: 25,
            TRANSACTION_ID: 26,
            TRANSACTED_SESSION_STATE: 27,
            TRANSACTION_FLOW_DESCRIPTOR_PUB_NOTIFY: 28,
            TRANSACTION_FLOW_DESCRIPTOR_PUB_ACK: 29,
            TRANSACTION_FLOW_DESCRIPTOR_SUB_ACK: 30,
            NOLOCAL: 31,
            ACTIVE_FLOW_INDICATION: 32,
            WANT_FLOW_CHANGE_NOTIFY: 33,
            EP_BEHAVIOUR: 34,
            PUBLISHER_ID: 35,
            APPLICATION_PUB_ACK: 36,
            NUM_MESSAGES_SPOOLED: 37,
            CUT_THROUGH: 38,
            PUBLISHER_FLAGS: 39,
            APP_MSG_ID_TYPE: 40,
            QUEUE_ENDPOINT_HASH: 41,
            MAX_REDELIVERY: 42,
            PAYLOAD: 43,
            ENDPOINT_ID: 44,
            ACK_SEQUENCE_NUMBER: 45,
            ACK_RECONCILE_REQUEST: 46,
            START_OF_ACK_RECONCILE: 47,
            TIMESTAMP: 48,
            MAX_DELIVERED_UNACKED_MESSAGES_PER_FLOW: 49,
            REPLAY_START_LOCATION: 51,
            ENDPOINT_ERROR_ID: 52,
            SPOOLER_UNIQUE_ID: 54,
            PARTITION_GROUP_ID: 56,
          });
        },
        9947: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFClientCtrlMessageType = n.new({ LOGIN: 0, UPDATE: 1 });
        },
        1200: (e, t, s) => {
          const { Enum: n } = s(9359);
          (e.exports.SMFClientCtrlAuthType = n.new({
            CLIENT_CERTIFICATE: "",
            OAUTH2: "\n",
          })),
            (e.exports.SMFClientCtrlParam = n.new({
              SOFTWAREVERSION: 0,
              SOFTWAREDATE: 1,
              PLATFORM: 2,
              USERID: 3,
              CLIENTDESC: 4,
              CLIENTNAME: 5,
              MSGVPNNAME: 6,
              DELIVERTOONEPRIORITY: 7,
              P2PTOPIC: 8,
              ROUTER_CAPABILITIES: 9,
              VRIDNAME: 10,
              PHYSICALROUTERNAME: 12,
              BRIDGE_MSG_VPN_NAME: 13,
              BRIDGE_ROUTER_NAME: 14,
              NO_LOCAL: 15,
              BRIDGE_VERSION: 16,
              AUTHENTICATION_SCHEME: 17,
              CONNECTION_TYPE: 18,
              ROUTER_CAPABILITIES_EXTENDED: 19,
              REQUIRES_RELEASE_7: 20,
              SSL_DOWNGRADE: 21,
              CLIENT_CAPABILITIES: 23,
              KEEP_ALIVE_INTERVAL: 24,
            }));
        },
        2095: (e, t, s) => {
          const { Enum: n } = s(9359);
          (e.exports.SMFParameterType = n.new({
            PADDING: 0,
            PUBLISHER_ID: 1,
            PUBLISHER_MSGID: 2,
            MESSAGEPRIORITY: 3,
            USERDATA: 4,
            USERNAME: 6,
            PASSWORD: 7,
            RESPONSE: 8,
            SUB_ID_LIST: 10,
            GENERIC_ATTACHMENT: 11,
            BINARY_ATTACHMENT: 12,
            DELIVERY_MODE: 16,
            ASSURED_MESSAGE_ID: 17,
            ASSURED_PREVMESSAGE_ID: 18,
            ASSURED_REDELIVERED_FLAG: 19,
            MESSAGE_CONTENT_SUMMARY: 22,
            ASSURED_FLOWID: 23,
            TR_TOPICNAME: 24,
            AD_FLOWREDELIVERED_FLAG: 25,
            AD_TIMETOLIVE: 28,
            AD_TOPICSEQUENCE_NUMBER: 30,
            EXTENDED_TYPE_STREAM: 31,
            AD_ACK_MESSAGE_ID: 41,
            AD_SPOOLER_UNIQUE_ID: 44,
            AD_REPL_MATE_ACK_MSGID: 45,
            AD_REDELIVERY_COUNT: 46,
            LIGHT_CORRELATION: 0,
            LIGHT_TOPIC_NAME_OFFSET: 1,
            LIGHT_QUEUE_NAME_OFFSET: 2,
            LIGHT_ACK_IMMEDIATELY: 3,
          })),
            (e.exports.SMFExtendedParameterType = n.new({
              OAUTH2_ISSUER_IDENTIFIER: 47,
              OIDC_ID_TOKEN: 48,
              OAUTH2_ACCESS_TOKEN: 49,
              PARTITION_KEY_HASH: 53,
              TS_TRANSPORT_CONTEXT: 54,
            }));
        },
        8958: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFProtocol = n.new({
            CSPF: 1,
            CSMP: 2,
            PUBMSG: 3,
            XMLLINK: 4,
            WSE: 5,
            SEMP: 6,
            SUBCTRL: 7,
            PUBCTRL: 8,
            ADCTRL: 9,
            KEEPALIVE: 10,
            KEEPALIVEV2: 11,
            CLIENTCTRL: 12,
            TRMSG: 13,
            JNDI: 14,
            SMP: 15,
            SMRP: 16,
            SMF_IN_SMF: 17,
            SMF_IN_RV: 18,
            ADCTRL_PASSTHROUGH: 19,
            TSESSION: 20,
          });
        },
        8488: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFSMPMessageTypeFlags = n.new({
            FLAG_FILTER: 1,
            FLAG_PERSIST: 2,
            SMF_SMP_FLAG_TOPIC: 4,
            SMF_SMP_FLAG_RESPREQUIRED: 8,
            SMF_SMP_FLAG_DELIVERALWAYS: 16,
          });
        },
        6874: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFSMPMessageType = n.new({
            ADDSUBSCRIPTION: 0,
            REMSUBSCRIPTION: 1,
            ADDQUEUESUBSCRIPTION: 2,
            REMQUEUESUBSCRIPTION: 3,
            ADDSUBSCRIPTIONFORCLIENTNAME: 4,
            REMSUBSCRIPTIONFORCLIENTNAME: 5,
          });
        },
        5752: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.SMFTransportSessionMessageType = n.new({
            CREATE: 0,
            CREATE_RESP: 1,
            DESTROY: 2,
            DESTROY_RESP: 3,
            DATA: 4,
            DATA_TOKEN: 5,
            DATA_STREAM_TOKEN: 6,
          });
        },
        1843: (e, t, s) => {
          const { CacheCBInfo: n } = s(5417),
            { CacheContext: r } = s(748),
            { CacheLiveDataAction: i } = s(5563),
            { CacheRequest: o } = s(4802),
            { CacheRequestResult: a } = s(4449),
            { CacheReturnCode: c } = s(372),
            { CacheReturnSubcode: u } = s(2698),
            { CacheSession: l } = s(1460),
            { CacheSessionProperties: h } = s(1166);
          (e.exports.CacheCBInfo = n),
            (e.exports.CACHE_REQUEST_PREFIX = r.CACHE_REQUEST_PREFIX),
            (e.exports.CacheLiveDataAction = i),
            (e.exports.CacheRequestResult = a),
            (e.exports.CacheReturnCode = c),
            (e.exports.CacheReturnSubcode = u),
            (e.exports.CacheRequest = o),
            (e.exports.CacheSession = l),
            (e.exports.CacheSessionProperties = h);
        },
        5417: (e) => {
          e.exports.CacheCBInfo = class {
            constructor(e, t) {
              (this.cacheCBFunction = e), (this.userObject = t);
            }
            getCallback() {
              return this.cacheCBFunction;
            }
            getUserObject() {
              return this.userObject;
            }
          };
        },
        748: (e) => {
          e.exports.CacheContext = {
            CACHE_REQUEST_PREFIX: "#CRQ",
            cacheRequestCorrelationId: 0,
          };
        },
        7263: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.CacheGetResultCode = n.new({ INVALID: 0, OK: 1 });
        },
        1981: (e, t, s) => {
          const { CacheGetResultCode: n } = s(7263),
            r = {
              messageID: null,
              version: 0,
              responseCode: n.INVALID,
              responseString: "",
              matchTopic: "",
              sessionID: null,
              isSuspect: null,
              hasMore: null,
              hasTimestamps: null,
              replyTo: null,
              messageStream: null,
              clusterNameStream: null,
            };
          e.exports.CacheGetResult = class {
            constructor(e = r) {
              Object.assign(this, e);
            }
            readFromStream(e) {
              (this.messageID = e.getNext().getValue()),
                (this.version = e.getNext().getValue()),
                (this.responseCode = e.getNext().getValue()),
                (this.responseString = e.getNext().getValue()),
                (this.matchTopic = e.getNext().getValue()),
                (this.sessionID = e.getNext().getValue()),
                (this.isSuspect = e.getNext().getValue()),
                (this.hasMore = e.getNext().getValue()),
                (this.hasTimestamps = e.getNext().getValue()),
                e.hasNext() && (this.messageStream = e.getNext().getValue()),
                e.hasNext() &&
                  ((this.clusterNameStream = this.messageStream),
                  (this.messageStream = e.getNext().getValue()));
            }
          };
        },
        5563: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.CacheLiveDataAction = n.new({
            FULFILL: 1,
            QUEUE: 2,
            FLOW_THRU: 3,
          });
        },
        4449: (e) => {
          e.exports.CacheRequestResult = class {
            constructor(e, t, s, n) {
              (this._returnCode = e),
                (this._subcode = t),
                (this._topic = s),
                (this._error = n);
            }
            getReturnCode() {
              return this._returnCode;
            }
            getReturnSubcode() {
              return this._subcode;
            }
            getTopic() {
              return this._topic;
            }
            getError() {
              return this._error;
            }
          };
        },
        5507: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.CacheRequestType = n.new({
            INVALID: 0,
            BULK_MSG: 1,
            REGISTER_REQUEST: 2,
            REGISTER_RESPONSE: 3,
            HEARTBEAT_REQUEST: 4,
            HEARTBEAT_RESPONSE: 5,
            EVENT_NOTIFY: 6,
            EVENT_ACK: 7,
            ACTION_REQUEST: 8,
            ACTION_RESPONSE: 9,
            GET_REQUEST: 10,
            GET_RESPONSE: 11,
            GET_NEXT_REQUEST: 12,
            GET_NEXT_RESPONSE: 13,
            SET_REQUEST: 14,
            SET_RESPONSE: 15,
            GET_MSG_REQUEST: 16,
            GET_MSG_RESPONSE: 17,
            GET_NEXT_MSG_REQUEST: 18,
            GET_NEXT_MSG_RESPONSE: 19,
            UNREGISTER_IND: 20,
            BULK_SET_REQUEST: 21,
            BULK_SET_RESPONSE: 22,
            PURGE_MSG_SEQUENCE_REQUEST: 23,
            PURGE_MSG_SEQUENCE_RESPONSE: 24,
            GET_MSG_SEQUENCE_REQUEST: 25,
            GET_NEXT_MSG_SEQUENCE_REQUEST: 26,
            GET_TOPIC_INFO_REQUEST: 27,
            GET_TOPIC_INFO_RESPONSE: 28,
            READY_MARKER: 29,
            GET_TOPIC_INFO_REQUEST_RANGE: 30,
            SYNC_READY_MARKER: 31,
            VACUUM_REQUEST: 32,
            VACUUM_RESPONSE: 33,
          });
        },
        4802: (e, t, s) => {
          const { CacheContext: n } = s(748),
            { LOG_DEBUG: r } = s(390),
            { CACHE_REQUEST_PREFIX: i } = n;
          class o {
            constructor(e, t, s, r, o, a, c) {
              (this.cacheSession = e),
                (this.cacheMessageType = t),
                (this.requestID = s),
                (this.cbInfo = r),
                (this.liveDataAction = o),
                (this.topic = a),
                (this.cacheName = c),
                (this.subscriptionWaiting = null),
                (this.replyReceived = !1),
                (this.dataReceived = !1),
                (this.isSuspect = !1),
                (this.correlationID = `${i}${n.cacheRequestCorrelationId++}`),
                (this.childRequests = []),
                (this.parentRequest = null),
                (this.queuedLiveData = []),
                (this.liveDataFulfilled = !1),
                (this.timeoutHandle = null);
            }
            getRootRequest() {
              return this.parentRequest
                ? this.parentRequest.getRootRequest()
                : this;
            }
            addChild(e) {
              if (!(e instanceof o)) throw new Error(`Invalid child ${e}`);
              if (e === this)
                throw new Error("Constructing circular child reference");
              const t = e;
              (t.parentRequest = this), this.childRequests.push(t);
            }
            removeChild(e) {
              if (e === this)
                throw new Error(
                  "Attempting to deconstruct invalid circular child reference",
                );
              const t = e,
                s = this.childRequests.indexOf(t);
              this.childRequests.splice(s, 1), (t.parentRequest = null);
            }
            collapse() {
              const e = this.parentRequest;
              (e.isSuspect = e.isSuspect || this.isSuspect),
                (e.dataReceived = e.dataReceived || this.dataReceived),
                e.removeChild(this);
            }
            cancel() {
              for (
                this.parentRequest && this.collapse();
                this.childRequests.length;

              ) {
                const e = this.childRequests.shift();
                e.childRequests && e.cancel(), this.removeChild(e);
              }
              this.clearRequestTimeout();
            }
            getRequestID() {
              return this.requestID;
            }
            getCBInfo() {
              return this.cbInfo;
            }
            getTopic() {
              return this.topic;
            }
            getLiveDataAction() {
              return this.liveDataAction;
            }
            startRequestTimeout(e, t) {
              this.timeoutHandle = setTimeout(() => {
                e(this);
              }, t);
            }
            clearRequestTimeout() {
              null !== this.timeoutHandle &&
                void 0 !== this.timeoutHandle &&
                (clearTimeout(this.timeoutHandle), (this.timeoutHandle = null));
            }
            toString() {
              return `CacheRequest[correlationID=${this.correlationID},requestID=${this.requestID},cacheName=${this.cacheName},topic=${this.topic.getName()}]`;
            }
          }
          (o.VERSION = 1),
            (o.DEFAULT_REPLY_SIZE_LIMIT = 1e6),
            (o.REPLY_SIZE_LIMIT = o.DEFAULT_REPLY_SIZE_LIMIT),
            (e.exports.CacheRequest = o);
        },
        372: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.CacheReturnCode = n.new({ OK: 1, FAIL: 2, INCOMPLETE: 3 });
        },
        2698: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.CacheReturnSubcode = n.new({
            REQUEST_COMPLETE: 0,
            LIVE_DATA_FULFILL: 1,
            ERROR_RESPONSE: 2,
            INVALID_SESSION: 3,
            REQUEST_TIMEOUT: 4,
            REQUEST_ALREADY_IN_PROGRESS: 5,
            NO_DATA: 6,
            SUSPECT_DATA: 7,
            CACHE_SESSION_DISPOSED: 8,
            SUBSCRIPTION_ERROR: 9,
          });
        },
        1166: (e) => {
          e.exports.CacheSessionProperties = class {
            constructor(e, t, s, n) {
              (this.cacheName = e),
                (this.maxAgeSec = t || 0),
                (this.maxMessages = null == s ? 1 : s),
                (this.timeoutMsec = n || 1e4),
                (this.includeOtherClusters = !0),
                (this.cachePrefix = "#P2P/CACHEINST/");
            }
            getCacheName() {
              return this.cacheName;
            }
            setCacheName(e) {
              this.cacheName = e;
            }
            getMaxMessageAgeSec() {
              return this.maxAgeSec;
            }
            setMaxMessageAgeSec(e) {
              this.maxAgeSec = e;
            }
            getMaxMessages() {
              return this.maxMessages;
            }
            setMaxMessages(e) {
              this.maxMessages = e;
            }
            getTimeoutMsec() {
              return this.timeoutMsec;
            }
            setTimeoutMsec(e) {
              this.timeoutMsec = e;
            }
          };
        },
        6303: (e) => {
          e.exports.CacheSessionSubscribeInfo = class {
            constructor(e, t, s) {
              Object.assign(this, {
                correlationID: e,
                topic: t,
                cacheSession: s,
              });
            }
          };
        },
        1460: (e, t, s) => {
          const n = s(4789),
            r = s(5594),
            i = s(7291),
            o = s(6818),
            { ErrorSubcode: a, OperationError: c } = s(3870),
            { LOG_TRACE: u, LOG_DEBUG: l, LOG_INFO: h, LOG_WARN: d } = s(390),
            { SDTField: p, SDTFieldType: _, SDTStreamContainer: E } = s(7252),
            { CacheCBInfo: T } = s(5417),
            { CacheContext: g } = s(748),
            { CacheGetResult: S } = s(1981),
            { CacheLiveDataAction: m } = s(5563),
            { CacheRequest: f } = s(4802),
            { CacheRequestResult: I } = s(4449),
            { CacheRequestType: R } = s(5507),
            { CacheReturnCode: C } = s(372),
            { CacheReturnSubcode: A } = s(2698),
            { CacheSessionProperties: O } = s(1166),
            { CacheSessionSubscribeInfo: N } = s(6303),
            { Destination: P, Topic: D } = s(3170),
            { CACHE_REQUEST_PREFIX: y } = g,
            b = () => {};
          class M {
            constructor(e, t, s) {
              M._validateProps(e);
              const n = new O(
                e.cacheName,
                e.maxAgeSec,
                e.maxMessages,
                e.timeoutMsec,
              );
              Object.assign(this, {
                _outstandingRequests: {},
                _outstandingIDs: {},
                _disposed: !1,
                _nextMessageCallbackInfo: null,
                _nextSessionEventCallbackInfo: null,
                _properties: n,
                _session: t,
                _sessionIF: s,
              }),
                this._connectToSession(t);
            }
            _connectToSession(e) {
              (this._nextSessionEventCallbackInfo = e.getEventCBInfo()),
                (this._nextMessageCallbackInfo = e.getMessageCBInfo()),
                e.setMessageCBInfo(
                  new r.MessageRxCBInfo((e, t) => {
                    this._handleMessage(t);
                  }, this),
                ),
                e.setEventCBInfo(
                  this._createCompoundEventCB(
                    this._nextSessionEventCallbackInfo,
                  ),
                );
            }
            _createCompoundEventCB(e) {
              return new r.SessionEventCBInfo((t, s, n, r) => {
                this._handleSessionEvent(e, t, s, n, r);
              }, null);
            }
            _handleSessionEvent(e, t, s) {
              if (!this._processSessionEvent(t, s)) return;
              const n = e.userObject;
              n
                ? e.sessionEventCBFunction(t, s, n)
                : e.sessionEventCBFunction(t, s);
            }
            _sendToNextDelegate(e) {
              const t = this._nextMessageCallbackInfo.userObject;
              t
                ? this._nextMessageCallbackInfo.messageRxCBFunction(
                    this._session,
                    e,
                    t,
                  )
                : this._nextMessageCallbackInfo.messageRxCBFunction(
                    this._session,
                    e,
                  );
            }
            _processSessionEvent(e, t) {
              switch (t.sessionEventCode) {
                case r.SessionEventCode.SUBSCRIPTION_ERROR:
                case r.SessionEventCode.SUBSCRIPTION_OK:
                  return this._checkSubscriptionStatus(t);
                case r.SessionEventCode.DOWN_ERROR:
                  return this.dispose(), !0;
                default:
                  return t.sessionEventCode, !0;
              }
            }
            _checkSubscriptionStatus(e) {
              if (
                null === e.correlationKey ||
                void 0 === e.correlationKey ||
                !(e.correlationKey instanceof N) ||
                e.correlationKey.cacheSession !== this
              )
                return !0;
              const t = this._getOutstandingRequest(
                e.correlationKey.correlationID,
              );
              return t
                ? e.sessionEventCode === r.SessionEventCode.SUBSCRIPTION_OK
                  ? (this._handleSubscriptionSuccess(t, e.correlationKey.topic),
                    !1)
                  : (this._handleSubscriptionError(t, e), !1)
                : (d(
                    `No request found for subscription success on ${e.correlationKey.topic}`,
                  ),
                  !0);
            }
            _handleSubscriptionSuccess(e) {
              const t = e;
              (t.subscriptionWaiting = null), this._startCacheRequest(t);
            }
            _handleSubscriptionError(e) {
              this._terminateRequest(e, C.FAIL, A.SUBSCRIPTION_ERROR);
            }
            _checkRequestCompletion(e) {
              if (e.childRequests.length) return void e.childRequests.length;
              if (e.subscriptionWaiting) return;
              if (null !== e.timeoutHandle && !e.replyReceived) return;
              if (e.parentRequest) {
                const t = e.parentRequest;
                return (
                  e.cancel(),
                  this._unregisterRequest(e),
                  void this._checkRequestCompletion(t)
                );
              }
              let t, s;
              if (e.isSuspect) (t = C.INCOMPLETE), (s = A.SUSPECT_DATA);
              else if (e.dataReceived)
                (t = C.OK),
                  (s = e.liveDataFulfilled
                    ? A.LIVE_DATA_FULFILL
                    : A.REQUEST_COMPLETE);
              else {
                if (!e.replyReceived)
                  throw new Error("Sanity: should never happen");
                (t = C.INCOMPLETE), (s = A.NO_DATA);
              }
              this._terminateRequest(e, t, s);
            }
            _sendSeeOther(e, t) {
              const s = t.clusterNameStream.getNext().getValue(),
                n = new f(
                  this,
                  R.GET_MSG_REQUEST,
                  e.requestID,
                  new T(b, null),
                  e.liveDataAction,
                  e.topic,
                  s,
                );
              e.addChild(n),
                this._registerRequest(n),
                n.startRequestTimeout(
                  M._handleCacheRequestTimeout,
                  this._properties.timeoutMsec,
                ),
                this._startCacheRequest(n, null, null, !0);
            }
            _sendGetNext(e, t) {
              const s = new f(
                this,
                R.GET_NEXT_MSG_REQUEST,
                e.requestID,
                new T(b, null),
                e.liveDataAction,
                e.topic,
                e.cacheName,
              );
              e.addChild(s),
                this._registerRequest(s),
                s.startRequestTimeout(
                  M._handleCacheRequestTimeout,
                  this._properties.timeoutMsec,
                ),
                this._startCacheRequest(s, t.sessionID, t.replyTo);
            }
            _handleMessage(e) {
              const t = e.getCorrelationId(),
                s = null == t ? null : this._outstandingRequests[t];
              if (!s)
                return void (
                  this._relevantLiveData(e) && this._sendToNextDelegate(e)
                );
              s.clearRequestTimeout();
              const n = e.getSdtContainer(),
                r = n && n.getValue();
              if (
                (r ||
                  (h(
                    `Invalid message format for cache response: no SDT container (${n}) or stream (${r})`,
                  ),
                  this._terminateRequest(s, C.FAIL, A.ERROR_RESPONSE)),
                this._incStat(o.RX_REPLY_MSG_RECVED),
                (s.replyReceived = !0),
                s.getRootRequest().liveDataFulfilled)
              )
                return (
                  this._incStat(o.CACHE_REQUEST_FULFILL_DISCARD_RESPONSE),
                  void this._checkRequestCompletion(s)
                );
              if (r)
                try {
                  const t = new S();
                  t.readFromStream(r),
                    (t.replyTo = e.getReplyTo()),
                    t.responseString && t.responseString,
                    (7 !== t.responseCode &&
                      "Invalid Session" != t.responseString) ||
                      (h(
                        `Cluster response indicates invalid session: ${t.responseString} code: ${t.responseCode}`,
                      ),
                      this._terminateRequest(s, C.FAIL, A.INVALID_SESSION)),
                    (s.isSuspect = s.isSuspect || t.isSuspect);
                  const n = M._decodeMessageStream(s, t);
                  if (
                    (this._incStat(o.RX_CACHE_MSG, n.length),
                    t.hasMore && this._sendGetNext(s, t),
                    t.clusterNameStream)
                  )
                    for (; t.clusterNameStream.hasNext(); )
                      this._sendSeeOther(s, t);
                  n &&
                    n.forEach((e) => {
                      this._sendToNextDelegate(e);
                    }),
                    this._checkRequestCompletion(s);
                } catch (e) {
                  h(`Invalid message format for cache response: ${e.stack}`),
                    this._terminateRequest(s, C.FAIL, A.ERROR_RESPONSE);
                }
              else
                h(
                  "Invalid cache response did not fulfill request. Skipping response processing",
                );
            }
            _relevantLiveData(e) {
              return !e.getCorrelationId() ||
                !e.getCorrelationId().startsWith(y) ||
                this._nextMessageCallbackInfo.userObject instanceof M
                ? Object.keys(this._outstandingRequests).every((t) =>
                    this._performLiveDataAction(
                      this._outstandingRequests[t],
                      e,
                    ),
                  )
                : (d(
                    "DROP: Dropping CRQ reply due to no remaining Cache Session processors on message callback chain",
                  ),
                  this._incStat(o.RX_REPLY_MSG_DISCARD),
                  !1);
            }
            _performLiveDataAction(e, t) {
              const s = e;
              switch (((s.dataReceived = !0), s.liveDataAction)) {
                case m.QUEUE:
                  return s.queuedLiveData.push(t), !1;
                case m.FULFILL:
                  return s.liveDataFulfilled || this._fulfillRequest(s), !0;
                default:
                  return !0;
              }
            }
            _fulfillRequest(e) {
              const t = e;
              (t.liveDataFulfilled = !0),
                this._trackCompletionStats(C.OK, A.LIVE_DATA_FULFILL),
                setTimeout(() => {
                  M._notifyCallback(
                    t,
                    C.OK,
                    A.LIVE_DATA_FULFILL,
                    t.getTopic(),
                    null,
                  );
                }, 0);
            }
            dispose() {
              Object.keys(this._outstandingRequests)
                .map((e) => this._outstandingRequests[e])
                .filter((e) => e instanceof f)
                .forEach((e) => {
                  this._terminateRequest(
                    e,
                    C.INCOMPLETE,
                    A.CACHE_SESSION_DISPOSED,
                  );
                }),
                (this._outstandingRequests = []),
                this._session.setEventCBInfo(
                  this._nextSessionEventCallbackInfo,
                ),
                this._session.setMessageCBInfo(this._nextMessageCallbackInfo),
                (this._disposed = !0);
            }
            getProperties() {
              return this._properties;
            }
            sendCacheRequest(e, t, s, n, r) {
              if (5 !== arguments.length)
                throw new c(
                  `sendCacheRequest() invoked with an illegal argument count of ${arguments.length}`,
                );
              if ("boolean" != typeof s)
                throw new c(
                  "Invalid subscribe flag argument, should be a boolean but was " +
                    typeof s,
                );
              if ("number" != typeof e || Number.isNaN(e))
                throw new c(
                  "Invalid requestID",
                  a.PARAMETER_INVALID_TYPE,
                  null,
                );
              if (this._outstandingIDs[e])
                throw new c("Request already in progress with this requestID");
              if (!(t instanceof P))
                throw new c(
                  "Invalid topic",
                  a.PARAMETER_INVALID_TYPE,
                  typeof t,
                );
              if (
                (t.validate(),
                n !== m.FLOW_THRU && n !== m.FULFILL && n !== m.QUEUE)
              )
                throw new c(
                  "Invalid live data action",
                  a.PARAMETER_OUT_OF_RANGE,
                );
              if (t.isWildcarded() && n !== m.FLOW_THRU)
                throw new c(
                  "Wildcarded topic not supported for this live data action",
                  a.PARAMETER_CONFLICT,
                );
              if (!(r instanceof T))
                throw new c("Callback info was not an instance of CacheCBInfo");
              if (this._disposed)
                return void M._notifyCallbackError(
                  r,
                  e,
                  C.FAIL,
                  A.CACHE_SESSION_DISPOSED,
                  t,
                  "Cache request failed: the cache session is disposed.",
                );
              if (this._session._disposed)
                return void M._notifyCallbackError(
                  r,
                  e,
                  C.FAIL,
                  A.INVALID_SESSION,
                  t,
                  "Cache request failed: the session is disposed.",
                );
              const i = new f(
                  this,
                  R.GET_MSG_REQUEST,
                  e,
                  r,
                  n,
                  t,
                  this._properties.cacheName,
                ),
                o = Object.keys(this._outstandingRequests).filter(
                  (e) =>
                    this._outstandingRequests[e].topic.getName() ===
                    t.getName(),
                );
              if (o.length) {
                const e =
                  n !== m.FLOW_THRU
                    ? o
                    : o.filter(
                        (e) =>
                          this._outstandingRequests[e].liveDataAction !==
                          m.FLOW_THRU,
                      );
                if (e.length) {
                  const t = this._outstandingRequests[e[0]];
                  return (
                    d(
                      `Existing request ${t} conflicts. Rejecting request ${i}`,
                    ),
                    this._registerRequest(i),
                    void this._terminateRequest(
                      i,
                      C.FAIL,
                      A.REQUEST_ALREADY_IN_PROGRESS,
                    )
                  );
                }
              }
              if (
                (this._registerRequest(i),
                i.startRequestTimeout(
                  M._handleCacheRequestTimeout,
                  this._properties.timeoutMsec,
                ),
                s)
              ) {
                const e = new N(i.correlationID, t, this);
                return (
                  (i._subscriptionWaiting = e),
                  void this._session.subscribe(t, !0, e)
                );
              }
              this._startCacheRequest(i);
            }
            _handleCacheRequestFailed(e, t, s) {
              this._terminateRequest(
                s.getRequestID(),
                C.FAIL,
                A.ERROR_RESPONSE,
              );
            }
            _registerRequest(e) {
              (this._outstandingRequests[e.correlationID] = e),
                e.parentRequest || (this._outstandingIDs[e.requestID] = e);
            }
            _getOutstandingRequest(e) {
              return this._outstandingRequests[e];
            }
            _startCacheRequest(e, t, s, r) {
              const i = new n.Message();
              i.setCorrelationId(e.correlationID),
                s
                  ? i.setDestination(s)
                  : i.setDestination(
                      D.createFromName(
                        this._properties.cachePrefix + e.cacheName,
                      ),
                    ),
                i.setReplyTo(
                  D.createFromName(
                    this._session.getSessionProperties().p2pInboxInUse,
                  ),
                ),
                i.setDeliverToOne(e.cacheMessageType === R.GET_MSG_REQUEST);
              const a = new E();
              a.addField(_.UINT32, e.cacheMessageType),
                a.addField(_.UINT32, f.VERSION),
                a.addField(_.STRING, e.topic.getName()),
                a.addField(_.UINT32, f.REPLY_SIZE_LIMIT),
                "number" == typeof t && a.addField(_.UINT32, t),
                a.addField(_.UINT32, this._properties.maxMessages),
                a.addField(_.UINT32, this._properties.maxAgeSec),
                e.cacheMessageType === R.GET_MSG_REQUEST &&
                  a.addField(
                    _.BOOL,
                    this._properties.includeOtherClusters && !r,
                  ),
                a.addField(_.BOOL, !1),
                e.cacheMessageType === R.GET_MSG_REQUEST &&
                  a.addField(
                    _.UINT32,
                    Math.round(this._properties.timeoutMsec / 1e3),
                  ),
                i.setSdtContainer(p.create(_.STREAM, a));
              try {
                this._session.send(i),
                  e.parentRequest || this._incStat(o.CACHE_REQUEST_SENT);
              } catch (t) {
                h(`Failed to send request: ${t.message}`),
                  this._terminateRequest(e, C.FAIL, A.ERROR_RESPONSE, t);
              }
            }
            _incStat(e, t) {
              this._session &&
                (this._sessionIF
                  ? this._sessionIF.incStat(e, t)
                  : h("Can't log stat: session statistics not available"));
            }
            _unregisterRequest(e) {
              delete this._outstandingRequests[e.correlationID],
                delete this._outstandingIDs[e.requestID];
            }
            _trackCompletionStats(e, t) {
              switch (e) {
                case C.OK:
                  this._incStat(o.CACHE_REQUEST_OK_RESPONSE),
                    t === A.LIVE_DATA_FULFILL &&
                      this._incStat(o.CACHE_REQUEST_LIVE_DATA_FULFILL);
                  break;
                case C.INCOMPLETE:
                  this._incStat(o.CACHE_REQUEST_INCOMPLETE_RESPONSE);
                  break;
                case C.FAIL:
                  this._incStat(o.CACHE_REQUEST_FAIL_RESPONSE);
                  break;
                default:
                  throw new Error("Sanity: no return code supplied");
              }
            }
            _terminateRequest(e, t, s, n) {
              const r = e.getRootRequest();
              if (!this._outstandingRequests[r.correlationID]) return;
              const i = r.cbInfo;
              if (!i)
                return void d(
                  `No callback info provided for ${r}. Cannot notify`,
                );
              if (!i.getCallback())
                return void d(`No callback provided for ${r}. Cannot notify`);
              const o = r.getTopic();
              o || d(`No topic provided for ${r}`),
                r.queuedLiveData.forEach((e) => this._sendToNextDelegate(e)),
                r.cancel(),
                this._unregisterRequest(r),
                r.liveDataFulfilled ||
                  (this._trackCompletionStats(t, s),
                  M._notifyCallback(r, t, s, o, n));
            }
            static _decodeMessageStream(e, t) {
              if (!t.messageStream) return [];
              const s = [],
                r = e;
              for (; t.messageStream.hasNext(); ) {
                r.dataReceived = !0;
                const e = t.messageStream.getNext().getValue(),
                  o = i.Codec.Decode.decodeCompoundMessage(e, 0);
                if (!o) continue;
                const a = t.isSuspect
                  ? n.MessageCacheStatus.SUSPECT
                  : n.MessageCacheStatus.CACHED;
                o._setCacheStatus(a),
                  o._setCacheRequestID(r.requestID),
                  s.push(o);
              }
              return s.length, s;
            }
            static _handleCacheRequestTimeout(e) {
              const t = e.cacheSession;
              t._getOutstandingRequest(e.correlationID)
                ? (h(`Request ${e} timed out`),
                  t._terminateRequest(
                    e.getRootRequest(),
                    C.INCOMPLETE,
                    A.REQUEST_TIMEOUT,
                  ))
                : h(`Timeout for ${e} was not unregistered. Ignoring`);
            }
            static _notifyCallback(e, t, s, n, r) {
              const i = e.cbInfo;
              i.getCallback()(
                e.requestID,
                new I(t, s, n, r),
                i.getUserObject(),
              );
            }
            static _notifyCallbackError(e, t, s, n, r, i) {
              e.getCallback()(t, new I(s, n, r, i), e.getUserObject());
            }
            static _validateProps(e) {
              if ("string" != typeof e.cacheName)
                throw new c(
                  "Invalid parameter type for cacheName",
                  a.PARAMETER_INVALID_TYPE,
                );
              if (D.createFromName(e.cacheName).isWildcarded())
                throw new c(
                  `Invalid cacheName '${e.cacheName}'. The cacheName cannot be wildcarded`,
                  a.PARAMETER_OUT_OF_RANGE,
                );
              if ("number" != typeof e.maxAgeSec)
                throw new c(
                  "Invalid parameter type for maxAgeSec",
                  a.PARAMETER_INVALID_TYPE,
                );
              if (e.maxAgeSec < 0)
                throw new c(
                  "Invalid value for maxAgeSec; must be >= 0",
                  a.PARAMETER_OUT_OF_RANGE,
                );
              if ("number" != typeof e.maxMessages)
                throw new c(
                  "Invalid parameter type for maxMessages",
                  a.PARAMETER_INVALID_TYPE,
                );
              if (e.maxMessages < 0)
                throw new c(
                  "Invalid value for maxMessages; must be >= 0",
                  a.PARAMETER_OUT_OF_RANGE,
                );
              if ("number" != typeof e.timeoutMsec)
                throw new c(
                  "Invalid parameter type for timeoutMsec",
                  a.PARAMETER_INVALID_TYPE,
                );
              if (e.timeoutMsec < 3e3)
                throw new c(
                  "Invalid value for timeoutMsec; must be >= 3000",
                  a.PARAMETER_OUT_OF_RANGE,
                );
            }
          }
          e.exports.CacheSession = M;
        },
        6818: (e, t, s) => {
          const { Stats: n } = s(7533),
            { StatsByMode: r } = s(7466),
            { StatType: i } = s(4266);
          e.exports = { Stats: n, StatType: i, StatsByMode: r };
        },
        7466: (e, t, s) => {
          const { StatType: n } = s(4266);
          e.exports = {
            StatsByMode: {
              STAT_TX_BYMODE_MSGS: [
                n.TX_DIRECT_MSGS,
                n.TX_PERSISTENT_MSGS,
                n.TX_NONPERSISTENT_MSGS,
              ],
              STAT_TX_BYMODE_BYTES: [
                n.TX_DIRECT_BYTES,
                n.TX_PERSISTENT_BYTES,
                n.TX_NONPERSISTENT_BYTES,
              ],
              STAT_TX_BYMODE_REDELIVERED: [
                n.TX_DIRECT_MSGS,
                n.TX_PERSISTENT_REDELIVERED,
                n.TX_NONPERSISTENT_REDELIVERED,
              ],
              STAT_TX_BYMODE_BYTES_REDELIVERED: [
                n.TX_DIRECT_BYTES,
                n.TX_PERSISTENT_BYTES_REDELIVERED,
                n.TX_NONPERSISTENT_BYTES_REDELIVERED,
              ],
              STAT_RX_BYMODE_MSGS: [
                n.RX_DIRECT_MSGS,
                n.RX_PERSISTENT_MSGS,
                n.RX_NONPERSISTENT_MSGS,
              ],
              STAT_RX_BYMODE_BYTES: [
                n.RX_DIRECT_BYTES,
                n.RX_PERSISTENT_BYTES,
                n.RX_NONPERSISTENT_BYTES,
              ],
            },
          };
        },
        4266: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.StatType = n.new({
            TX_TOTAL_DATA_BYTES: 0,
            TX_TOTAL_DATA_MSGS: 1,
            TX_DIRECT_BYTES: 2,
            TX_DIRECT_MSGS: 3,
            TX_CONTROL_BYTES: 4,
            TX_CONTROL_MSGS: 5,
            TX_REQUEST_SENT: 6,
            TX_REQUEST_TIMEOUT: 7,
            RX_TOTAL_DATA_BYTES: 8,
            RX_TOTAL_DATA_MSGS: 9,
            RX_DIRECT_BYTES: 10,
            RX_DIRECT_MSGS: 11,
            RX_CONTROL_BYTES: 12,
            RX_CONTROL_MSGS: 13,
            RX_DISCARD_MSG_INDICATION: 14,
            RX_REPLY_MSG_RECVED: 15,
            RX_REPLY_MSG_DISCARD: 16,
            RX_DISCARD_SMF_UNKNOWN_ELEMENT: 17,
            CACHE_REQUEST_SENT: 18,
            CACHE_REQUEST_OK_RESPONSE: 19,
            CACHE_REQUEST_FAIL_RESPONSE: 20,
            CACHE_REQUEST_FULFILL_DISCARD_RESPONSE: 21,
            RX_CACHE_MSG: 22,
            CACHE_REQUEST_INCOMPLETE_RESPONSE: 23,
            CACHE_REQUEST_LIVE_DATA_FULFILL: 24,
            TX_PERSISTENT_BYTES: 25,
            TX_PERSISTENT_MSGS: 26,
            TX_NONPERSISTENT_BYTES: 27,
            TX_NONPERSISTENT_MSGS: 28,
            TX_PERSISTENT_BYTES_REDELIVERED: 29,
            TX_PERSISTENT_REDELIVERED: 30,
            TX_NONPERSISTENT_BYTES_REDELIVERED: 31,
            TX_NONPERSISTENT_REDELIVERED: 32,
            TX_ACKS_RXED: 33,
            TX_WINDOW_CLOSE: 34,
            TX_ACK_TIMEOUT: 35,
            RX_PERSISTENT_BYTES: 36,
            RX_PERSISTENT_MSGS: 37,
            RX_NONPERSISTENT_BYTES: 38,
            RX_NONPERSISTENT_MSGS: 39,
            RX_ACKED: 40,
            RX_DISCARD_DUPLICATE: 41,
            RX_DISCARD_NO_MATCHING_CONSUMER: 42,
            RX_DISCARD_OUT_OF_ORDER: 43,
            RX_SETTLE_REJECTED: 44,
            RX_SETTLE_FAILED: 45,
            RX_SETTLE_ACCEPTED: 46,
          });
        },
        7533: (e, t, s) => {
          const { EventEmitter: n } = s(7758),
            { StatType: r } = s(4266);
          e.exports.Stats = class extends n {
            constructor(e) {
              super(),
                (this._parent = e),
                (this._statsMap = []),
                r.values.forEach((e) => {
                  this._statsMap[e] = 0;
                });
            }
            resetStats() {
              this.emit("reset"),
                (this._statsMap = this._statsMap.map(() => 0));
            }
            incStat(e, t = 1) {
              (this._statsMap[e] += t),
                this._parent && this._parent.incStat(e, t);
            }
            getStat(e) {
              return this._statsMap[e];
            }
          };
        },
        3147: (e, t, s) => {
          const { SMFClient: n } = s(1124),
            { TransportCapabilities: r } = s(3670),
            { TransportError: i } = s(1663),
            { TransportFactory: o } = s(6436),
            { TransportProtocol: a } = s(4080),
            { TransportReturnCode: c } = s(4882),
            { TransportSessionEventCode: u } = s(9045),
            { TransportSessionStates: l } = s(9385);
          (e.exports.SMFClient = n),
            (e.exports.TransportCapabilities = r),
            (e.exports.TransportError = i),
            (e.exports.TransportFactory = o),
            (e.exports.TransportProtocol = a),
            (e.exports.TransportReturnCode = c),
            (e.exports.TransportSessionEventCode = u),
            (e.exports.TransportSessionStates = l);
        },
        864: (e) => {
          class t {
            constructor(e, t, s) {
              this.reset(),
                (this._rxSmfCB = e),
                (this._rxMessageErrorCB = t),
                (this._session = s);
            }
            reset() {
              this._correlationCounter = 0;
            }
            nextCorrelationTag() {
              return (
                ++this._correlationCounter >= t.SMF_MAX_CORRELATION &&
                  (this._correlationCounter = 1),
                this._correlationCounter ? this._correlationCounter : 0
              );
            }
          }
          (t.SMF_MAX_CORRELATION = 16777215), (e.exports.BaseSMFClient = t);
        },
        6700: (e, t, s) => {
          const n = s(8764).lW;
          function r(e, t, s) {
            const r = n.allocUnsafe(s);
            let i,
              o = 0;
            const a = e[0];
            for (
              o += a.copy(r, 0, t, a.length), i = 1;
              i < e.length && o < s;
              i++
            ) {
              const t = e[i];
              o += t.copy(r, o, 0, t.length);
            }
            return r;
          }
          function i(e, t, s) {
            let n = t,
              r = s;
            const i = [];
            let o = 0;
            for (o = 0; o < 4; o++) {
              for (; e[n].length <= r; )
                if (((r -= e[n].length), n++, n >= e.length)) return null;
              (i[o] = e[n].readUInt8(r)), r++;
            }
            return (i[0] << 24) + (i[1] << 16) + (i[2] << 8) + i[3];
          }
          class o {
            constructor(e) {
              let t = [];
              const s = e;
              let n = 0,
                a = 0;
              (this.peekView = function (e) {
                const s = [];
                return t.length < 1 || e > n
                  ? null
                  : (t[0].length >= e + a
                      ? ((s[0] = t[0]), (s[1] = a))
                      : ((s[0] = r(t, a, e)), (s[1] = 0)),
                    s);
              }),
                (this.readUInt8 = function (e) {
                  if (e >= n) return null;
                  const s = e + a;
                  if (s < t[0].length) return t[0].readUInt8(s);
                  let r = t[0].length,
                    i = 1;
                  for (; r + t[i].length <= s; ) (r += t[i].length), i++;
                  return t[i].readUInt8(s - r);
                }),
                (this.readUInt32BE = function (e) {
                  if (e + 3 >= n) return null;
                  const s = e + a;
                  if (s + 3 < t[0].length) return t[0].readUInt32BE(s);
                  if (s < t[0].length) return i(t, 0, s);
                  let r = t[0].length,
                    o = 1;
                  for (; r + t[o].length <= s; ) (r += t[o].length), o++;
                  return s - r + 3 < t[o].length
                    ? t[o].readUInt32BE(s - r)
                    : i(t, o, s - r);
                }),
                (this.put = function (e) {
                  const r = o.adaptData(e),
                    i = r.length;
                  return (
                    0 === i || (!(n + i >= s) && (t.push(r), (n += i), !0))
                  );
                }),
                (this.advance = function (e) {
                  if (e < 1) return;
                  if (e >= n) return void this.reset();
                  let s = 0;
                  for (; s < e; ) {
                    if (!(t[0].length - a <= e - s)) {
                      (a += e - s), (n -= e - s);
                      break;
                    }
                    {
                      const e = t[0].length - a;
                      t.shift(), (s += e), (n -= e), (a = 0);
                    }
                  }
                }),
                (this.reset = function () {
                  (t = []), (n = 0), (a = 0);
                }),
                (this.remaining = function () {
                  return n;
                }),
                (this.isEmpty = function () {
                  return 0 === n;
                });
            }
            static adaptData(e) {
              return e instanceof n ? e : n.from(e);
            }
          }
          (e.exports.BufferQueue = o), (e.exports.concatFrom = r);
        },
        8281: (e, t, s) => {
          const n = s(1880),
            r = s(7291),
            { BaseSMFClient: i } = s(864),
            { BufferQueue: o } = s(6700),
            { Convert: a, Hex: c } = s(840),
            { LogFormatter: u } = s(390),
            l = s(8764).lW,
            { stringToUint8Array: h } = a,
            { formatHexString: d } = c,
            { LOG_ERROR: p } = new u("[buffer-smf-client]");
          function _(e) {
            const t = e.peekView(Math.min(e.remaining(), 64));
            p(
              `First 64 bytes (or fewer) of incoming buffer: \n${n.Debug.formatDumpBytes(t[0].toString("latin1", t[1]), !0, 0)}`,
            );
          }
          e.exports.M = class extends i {
            constructor(e, t, s) {
              super(e, t, s), (this._incomingBuffer = new o(8e7));
            }
            reset() {
              super.reset(),
                this._incomingBuffer && this._incomingBuffer.reset();
            }
            rxDataString(e) {
              this._rxDataCB(l.from(h(e)));
            }
            rxDataArrayBuffer(e) {
              this._rxDataCB(l.from(e));
            }
            rxDataBuffer(e) {
              this._rxDataCB(e);
            }
            _rxDataCB(e) {
              this._session && this._session.resetKeepAliveCounter();
              const t = this._incomingBuffer,
                s = t.put(e);
              let n = t.remaining();
              for (
                s ||
                (_(t),
                this._rxMessageErrorCB(`Buffer overflow (length: ${n})`),
                this._incomingBuffer.reset());
                n > 12;

              ) {
                const e = 7 & t.readUInt8(0);
                if (3 !== e)
                  return (
                    p(`Invalid smf version in smf header, version=${e}`),
                    p(
                      "BufferSMFClient._rxDataCB(): couldn't decode message due to invalid smf header",
                    ),
                    _(t),
                    this._incomingBuffer.reset(),
                    void this._rxMessageErrorCB(
                      "Error parsing incoming SMF - invalid SMF header detected",
                    )
                  );
                const s = t.readUInt32BE(8);
                if (s > t.remaining()) break;
                const i = t.peekView(s),
                  o = r.Codec.Decode.decodeCompoundMessage(i[0], i[1]);
                if (!o || !o.smfHeader) {
                  const e = this._session ? this._session._sessionId : null,
                    s = e ? d(e) : "N/A";
                  return (
                    p(
                      `BufferSMFClient._rxDataCB(): couldn't decode message (sessionId=${s})`,
                    ),
                    _(t),
                    this._incomingBuffer.reset(),
                    void this._rxMessageErrorCB("Error parsing incoming SMF")
                  );
                }
                t.advance(o.smfHeader.messageLength),
                  this._rxSmfCB(o),
                  (n = t.remaining());
              }
              n || this._incomingBuffer.reset();
            }
          };
        },
        1124: (e, t, s) => {
          const { BaseSMFClient: n } = s(864),
            r =
              ("undefined" == typeof navigator ||
                (-1 === navigator.appVersion.indexOf("MSIE 9.") &&
                  navigator.appVersion.indexOf("Trident/")),
              s(8281).M);
          (r.SMF_CLIENTCTRL_LOGIN_FAKE_CORRELATIONTAG = n.SMF_MAX_CORRELATION),
            (e.exports.SMFClient = r);
        },
        2422: (e, t, s) => {
          const { ErrorSubcode: n, OperationError: r } = s(3870),
            { TransportReturnCode: i } = s(4882);
          class o {
            constructor(e, t, s, n, r = null) {
              (this._url = e),
                (this._ssl = o.useSsl(e)),
                (this._client = s),
                (this._eventCB = t),
                (this._props = n),
                this.setInterceptor(r);
            }
            connect() {
              return i.OK;
            }
            destroy(e, t, s) {
              return i.OK;
            }
            forceFailure(e) {
              return i.OK;
            }
            flush(e) {
              return e(), i.OK;
            }
            send(e, t = !1) {
              return i.OK;
            }
            getTransportProtocol() {
              return this._props.transportProtocol;
            }
            getInfoStr() {
              return null;
            }
            getClientStats() {
              return null;
            }
            beginDowngrade(e, t) {
              return !1;
            }
            setInterceptor(e) {
              this._interceptor &&
                this._interceptor.removed &&
                this._interceptor.removed(this),
                (this._interceptor = e),
                e && e.installed && e.installed(this);
            }
            toString() {
              return `${this.getTransportProtocol()}${this._ssl ? " (SSL)" : ""}`;
            }
            static useSsl(e) {
              const t = (e || "").split("://");
              if (0 === t.length || o.validSchemes.indexOf(t[0]) < 0)
                throw new r(
                  `Invalid url "${e}": Only [${o.validSchemes.join(", ")}] URL schemes are supported`,
                  n.PARAMETER_OUT_OF_RANGE,
                );
              return "https" === t[0] || "wss" === t[0] || "tcps" === t[0];
            }
          }
          (o.validSchemes = ["http", "https", "ws", "wss", "tcp", "tcps"]),
            (e.exports.TransportBase = o);
        },
        3670: (e, t, s) => {
          const { WebTransportCapabilities: n } = s(2395),
            r = { web: n };
          e.exports.TransportCapabilities = r;
        },
        4581: (e) => {
          e.exports.TransportClientStats = class {
            constructor() {
              (this.bytesWritten = 0), (this.msgWritten = 0);
            }
          };
        },
        1663: (e, t, s) => {
          const { SolaceError: n } = s(3870);
          e.exports.TransportError = class extends n {
            constructor(e, t) {
              super("TransportError", e), (this.subcode = t);
            }
            toString() {
              return `${super.toString()}, subcode=${this.subcode}`;
            }
          };
        },
        6436: (e, t, s) => {
          const { LOG_TRACE: n } = s(390),
            {
              TcpRawTransport: r,
              CompressedTransport: i,
              TlsOnlyTransport: o,
              TcpTlsTransport: a,
            } = {},
            { WebTransport: c } = s(2395),
            u = {
              createTransport(e, t, s, n, u) {
                const l = e;
                if (
                  (Object.assign(n, { connectTimeoutInMsecs: 1e5 }),
                  r && l.trim().startsWith("tcp"))
                ) {
                  if (!l.trim().startsWith("tcps")) {
                    if (0 === n.compressionLevel) return new r(l, t, s, n);
                    const e = new i(t, s, n),
                      o = new r(l, e.eventCB.bind(e), e, n);
                    return (
                      e.setClientStats(o.getClientStats()),
                      o.setClientStats(null),
                      e.setUnderlyingTransport(o),
                      e
                    );
                  }
                  if ("PLAIN_TEXT" !== n.sslConnectionDowngradeTo)
                    return new a(l, t, s, n);
                  const e = new o(l, t, s, n),
                    c = new r(l, e.eventCB.bind(e), e, n);
                  return (
                    e.setClientStats(c.getClientStats()),
                    c.setClientStats(null),
                    e.setUnderlyingTransport(c),
                    e
                  );
                }
                return new c(l, t, s, n, u);
              },
              startCompression(e) {
                const t = e._eventCB,
                  s = e._client,
                  n = e._props,
                  r = new i(t, s, n);
                return (
                  e.rehome(r.eventCB.bind(r), r),
                  r.setClientStats(e.getClientStats()),
                  e.setClientStats(null),
                  r.setUnderlyingTransport(e),
                  r.connect(),
                  r
                );
              },
              severTls(e, t, s) {
                if (t) {
                  const t = (e) => s(this.startCompression(e));
                  e.tlsShutdown(t);
                } else e.tlsShutdown(s);
              },
            };
          e.exports.TransportFactory = u;
        },
        1175: (e, t, s) => {
          const n = s(2395),
            { Lazy: r } = s(9359),
            { LOG_TRACE: i } = s(390),
            { TransportBase: o } = s(2422),
            { TransportProtocol: a } = s(4080),
            { lazyValue: c } = r,
            u = c(() => ({
              [a.HTTP_BASE64]: n.StateBase64,
              [a.HTTP_BINARY]: n.StateBinary,
              [a.HTTP_BINARY_STREAMING]: n.StateStreamingAndBinary,
              [a.WS_BINARY]: n.StateWebSocketBinary,
            }));
          e.exports.TransportProtocolHandler = class {
            constructor(e, t) {
              const s = o.useSsl(e);
              let n = null,
                r = null;
              t
                .slice()
                .reverse()
                .forEach((e) => {
                  const t = u.value[e];
                  (n = new t(s, this.switchState.bind(this), r)), (r = n);
                }),
                (this._transport = n),
                this._transport.onEnter();
            }
            getTransportProtocol() {
              return this._transport.getTransportProtocol();
            }
            completeDowngrade(e) {
              return this._transport.completeDowngrade(e);
            }
            canCompleteDowngrade() {
              return null !== this._transport.getNextState();
            }
            toString() {
              return this._transport.toString();
            }
            switchState(e, t) {
              this._transport, (this._transport = e), e.onEnter();
            }
          };
        },
        4080: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.TransportProtocol = n.new({
            HTTP_BASE64: "HTTP_BASE64",
            HTTP_BINARY: "HTTP_BINARY",
            HTTP_BINARY_STREAMING: "HTTP_BINARY_STREAMING",
            WS_BINARY: "WS_BINARY",
          });
        },
        4882: (e, t, s) => {
          const { Enum: n } = s(9359),
            r = {
              OK: 0,
              FAIL: 1,
              NO_SPACE: 2,
              DATA_DECODE_ERROR: 3,
              INVALID_STATE_FOR_OPERATION: 4,
              CONNECTION_ERROR: 5,
            };
          (e.exports.TransportReturnCode = n.new(r)),
            e.exports.TransportReturnCode._setCanonical({
              OK: r.OK,
              FAIL: r.FAIL,
              NO_SPACE: r.NO_SPACE,
              DATA_DECODE_ERROR: r.DATA_DECODE_ERROR,
              INVALID_STATE_FOR_OPERATION: r.INVALID_STATE_FOR_OPERATION,
              CONNECTION_ERROR: r.CONNECTION_ERROR,
            });
        },
        9045: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.TransportSessionEventCode = n.new({
            UP_NOTICE: 1,
            DESTROYED_NOTICE: 2,
            CAN_ACCEPT_DATA: 4,
            DATA_DECODE_ERROR: 5,
            PARSE_FAILURE: 6,
            CONNECT_TIMEOUT: 7,
            SEND_ERROR: 8,
            DOWNGRADE_FAILED: 10,
            DOWNGRADE_SUCCEEDED: 11,
          });
        },
        414: (e, t, s) => {
          var n = s(9489);
          const { ErrorSubcode: r } = s(3870),
            { Hex: i } = s(840),
            { TransportSessionEventCode: o } = s(9045),
            { formatHexString: a } = i;
          e.exports.TransportSessionEvent = class {
            constructor(e, t, s, n, r) {
              (this._transportEventCode = e),
                (this._infoStr = t),
                (this._responseCode = s),
                (this._errorSubcode = n),
                (this._sid = r);
            }
            getTransportEventCode() {
              return this._transportEventCode;
            }
            get transportEventCode() {
              return this._transportEventCode;
            }
            getInfoStr() {
              return this.infoStr;
            }
            get infoStr() {
              return this._infoStr;
            }
            getResponseCode() {
              return this.responseCode;
            }
            get responseCode() {
              return this._responseCode;
            }
            getSubcode() {
              return this.errorSubcode;
            }
            get errorSubcode() {
              return this._errorSubcode;
            }
            getSessionId() {
              return this.sessionId;
            }
            get sessionId() {
              return this._sid;
            }
            inspect() {
              return {
                transportEventCode: o.describe(this.transportEventCode),
                infoStr: this.infoStr,
                responseCode: this.responseCode,
                errorSubcode: r.describe(this.errorSubcode),
                sid: (this.sid && a(this.sid)) || "N/A",
              };
            }
            toString() {
              return n(this);
            }
          };
        },
        9385: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.TransportSessionState = n.new({
            DOWN: 0,
            WAITING_FOR_CREATE: 1,
            SESSION_UP: 2,
            WAITING_FOR_DESTROY: 4,
            CONNECTION_FAILED: 5,
          });
        },
        4295: (e, t, s) => {
          const { LOG_INFO: n, LOG_WARN: r } = s(390),
            { Process: i } = s(7882);
          e.exports.TSHState = class {
            constructor(e, t, s, n) {
              (this._ssl = !!e),
                (this._transportProtocol = t),
                (this._exitCallback = s),
                (this._nextState = n),
                (this._unsupportedRuntimeMessage = `${this._transportProtocol} not supported by this runtime: ${i.userAgent}`);
            }
            getNextState() {
              return this._nextState;
            }
            setNextState(e) {
              this._nextState = e;
            }
            getTransportProtocol() {
              return this._transportProtocol;
            }
            getUseSsl() {
              return this._ssl;
            }
            validateLegal() {
              return !0;
            }
            onEnter() {
              this.validateLegal() ||
                (this._nextState && this._exitCallback
                  ? this._exitCallback(
                      this._nextState,
                      this._unsupportedRuntimeMessage,
                    )
                  : r(`${this._unsupportedRuntimeMessage}, no next state.`));
            }
            completeDowngrade(e) {
              return this._nextState && this._exitCallback
                ? (n(`Connect failed (${e}), try next state.`),
                  this._exitCallback(this._nextState, "Connect failed"),
                  !0)
                : (r(`Connect failed (${e}), no next state.`), !1);
            }
            toString() {
              return this._transportProtocol + (this._ssl ? " (SSL)" : "");
            }
          };
        },
        2395: (e, t, s) => {
          const n = s(3124),
            { StateBase64: r } = s(7538),
            { StateBinary: i } = s(6959),
            { StateStreamingAndBinary: o } = s(9929),
            { StateWebSocketBinary: a } = s(1022),
            { WebTransport: c } = s(5372),
            { WebTransportCapabilities: u } = s(7483),
            { HTTPConnection: l, HTTPTransportSession: h } = n;
          (e.exports.HTTPConnection = l),
            (e.exports.HTTPTransportSession = h),
            (e.exports.StateBase64 = r),
            (e.exports.StateBinary = i),
            (e.exports.StateStreamingAndBinary = o),
            (e.exports.StateWebSocketBinary = a),
            (e.exports.WebTransport = c),
            (e.exports.WebTransportCapabilities = u);
        },
        3124: (e, t, s) => {
          const { HTTPConnection: n } = s(2949),
            { HTTPTransportSession: r } = s(3240);
          (e.exports.HTTPConnection = n), (e.exports.HTTPTransportSession = r);
        },
        2949: (e, t, s) => {
          const n = s(1880),
            { Convert: r, Base64: i } = s(840),
            { LOG_DEBUG: o, LOG_INFO: a, LOG_WARN: c, LOG_ERROR: u } = s(390),
            { sendXhrBinary: l, sendXhrText: h } = s(8186),
            { StringBuffer: d, TimingBucket: p } = s(7882),
            { TransportReturnCode: _ } = s(4882),
            { XHRFactory: E } = s(6145),
            { arrayBufferToString: T } = r;
          function g(e) {
            return !e.match(/^(http|ws)(s?):/i) &&
              window.location &&
              window.location.origin
              ? window.location.origin + ("/" !== e.charAt(0) ? "/" : "") + e
              : e;
          }
          class S {
            constructor() {
              (this.WaitedToken = new p("WaitedToken", 100)),
                (this.HadToken = new p("HadToken", 100)),
                (this.ReturnedToken = new p("ReturnedToken", 100));
            }
            toString() {
              let e = "";
              return (
                [this.WaitedToken, this.HadToken, this.ReturnedToken].forEach(
                  (t) => {
                    t && t.bucketCount() > 0 && (e += `${t.name} >> ${t}\n`);
                  },
                ),
                e
              );
            }
          }
          class m {
            constructor(e, t, s, n, r, i, o) {
              (this.Options = {
                url: g(e),
                contentType: i,
                base64Enc: t,
                streamProgressEvents: s,
                connectionClose: o,
              }),
                (this._streamProgressBytes = 0),
                (this._xhr = null),
                (this._rxDataCb = n),
                (this._connErrorCb = r),
                (this._reqActive = !1),
                (this._REQCOUNTER = 0),
                (this._REQBASE = Math.floor(1e3 * Math.random())),
                (this._xhr = E.create()),
                (this._handleAbortedReq = !m.browserSupportsXhrBinary()),
                (this.stats = new S());
            }
            recStat(e) {}
            send(e, t = 0, s = 1) {
              t > 0 && (this._xhr.abort(), (this._xhr = E.create())),
                this._xhr.open("POST", this.Options.url, !0),
                (this._streamProgressBytes = 0),
                (this._xhr.onreadystatechange = () =>
                  this.xhrStateChange(e, t, s)),
                (this._reqActive = !0),
                this.Options.base64Enc
                  ? h(
                      this._xhr,
                      e,
                      this.Options.contentType,
                      this.Options.connectionClose,
                    )
                  : l(
                      this._xhr,
                      e,
                      this.Options.contentType,
                      this.Options.connectionClose,
                    ),
                this.recStat("SendMsg");
            }
            xhrStateChange(e, t, s) {
              const r = this._xhr.readyState,
                o = this._xhr.LOADING,
                c = this._xhr.DONE;
              if (!((this.Options.streamProgressEvents && r === o) || r === c))
                return;
              if (!this._reqActive) return;
              let l = null;
              if (this._handleAbortedReq)
                try {
                  l = this._xhr.status;
                } catch (e) {
                  return void a(
                    `Error trying to access status in XHR due to request aborted: ${e.message}`,
                  );
                }
              else l = this._xhr.status;
              if (200 === l || 304 === l) {
                let e = null;
                if (
                  ((e =
                    this._xhr.responseType &&
                    "arraybuffer" === this._xhr.responseType
                      ? T(this._xhr.response)
                      : this._xhr.responseText),
                  (e = e.substring(this._streamProgressBytes, e.length)),
                  (this._streamProgressBytes += e.length),
                  0 === e.length && r === o)
                )
                  return;
                if (this.Options.base64Enc)
                  try {
                    e = i.decode(e);
                  } catch (t) {
                    return (
                      u(`Data decode error on: ${e}`),
                      u(`Data decode error is: ${t.message}`),
                      void this._rxDataCb(_.DATA_DECODE_ERROR, e)
                    );
                  }
                else {
                  const t = [],
                    s = e.length;
                  for (let n = 0; n < s; n++)
                    t.push(String.fromCharCode(255 & e.charCodeAt(n)));
                  e = t.join("");
                }
                return (
                  r === c && (this._reqActive = !1),
                  this._rxDataCb(_.OK, e),
                  void (r === c && e.length > 0 && this._rxDataCb(_.OK, ""))
                );
              }
              const h = this._xhr.statusText;
              let p = "";
              p =
                this._xhr.responseType &&
                "arraybuffer" === this._xhr.responseType
                  ? T(this._xhr.response)
                  : this._xhr.responseText || "";
              const E = p.length,
                g = (this.Options.url, e ? e.length : 0),
                { formatDumpBytes: S } = n.Debug,
                m = S(p.substr(0, Math.min(E, 64)), !0, 0);
              S((e || "").substr(0, Math.min(g, 256)), !0, 0);
              const f = s;
              this._reqActive &&
              400 !== l &&
              0 === p.length &&
              (0 === t || t < f)
                ? (a(
                    `XHR failed while request active, will retry send, retry=${t + 1}`,
                  ),
                  this.send(e, t + 1, f))
                : ((this._reqActive = !1),
                  this._connErrorCb(
                    l,
                    new d(
                      `HTTP request failed(status=${l} statusText=${h}, `,
                      `responseText length=${E}, responseText[0..64]=\n`,
                      m,
                      `XHR errorCode=${this._xhr._error ? this._xhr._error.code : ""})`,
                    ).toString(),
                  ));
            }
            isUsingBase64() {
              return this.Options.base64Enc;
            }
            abort() {
              (this._reqActive = !1),
                this._xhr && this._xhr.abort && this._xhr.abort();
            }
            static browserSupportsXhrBinary() {
              return l !== h;
            }
            static browserSupportsStreamingResponse() {
              const e = E.create(),
                t = e && null === e.onprogress;
              return (
                a(
                  `http browserStreamingCheck - if XMLHTTPRequest supported and XMLHTTPRequest support onprogress: ${t}`,
                ),
                t
              );
            }
          }
          e.exports.HTTPConnection = m;
        },
        3240: (e, t, s) => {
          const n = s(1880),
            r = s(7291),
            { Check: i } = s(2201),
            { Convert: o, Hex: a } = s(840),
            { ErrorSubcode: c, OperationError: u } = s(3870),
            { HTTPConnection: l } = s(2949),
            { LogFormatter: h } = s(390),
            { SMFClient: d } = s(1124),
            { TransportError: p } = s(1663),
            { TransportProtocol: _ } = s(4080),
            { TransportReturnCode: E } = s(4882),
            { TransportSessionEvent: T } = s(414),
            { TransportSessionEventCode: g } = s(9045),
            { TransportSessionState: S } = s(9385),
            { WebTransportSessionBase: m } = s(5677),
            { int32ToStr: f, strToByteArray: I, strToHexArray: R } = o,
            { formatHexString: C } = a,
            {
              LOG_TRACE: A,
              LOG_DEBUG: O,
              LOG_ERROR: N,
              LOG_INFO: P,
            } = new h("[http-transport-session]"),
            D = s(8764).lW;
          e.exports.HTTPTransportSession = class extends m {
            constructor(e, t, s, n) {
              if (
                (super(e, t, s, n),
                (this._haveToken = !0),
                (this._confMaxWebPayload = n.maxWebPayload),
                (this._maxPayloadBytes = 0),
                (this._destroyTimer = null),
                (this._destroyTimeout = n.connectTimeoutInMsecs),
                (this._createUrl = `http${e.match(/(ws|http)(s?:\/\/.+)/)[2]}`),
                (this._routerUrl = this._createUrl),
                (this._rxChannelClient = null),
                (this._httpSendConn = null),
                (this._httpReceiveConn = null),
                (this._smfDataTokenTSHeader = null),
                (this._routerTag = ""),
                (this._sid = null),
                null === n.transportProtocol || void 0 === n.transportProtocol)
              )
                throw new u(
                  "transportProtocol is not set",
                  c.PARAMETER_OUT_OF_RANGE,
                );
              (this._transportProtocol = n.transportProtocol),
                (this._useBinaryTransport = !1),
                (this._useStreamingTransport = !1),
                (this._streamingTransportPadding = 0),
                (this._useBinaryTransport =
                  n.transportProtocol !== _.HTTP_BASE64),
                (this._useStreamingTransport =
                  n.transportProtocol === _.HTTP_BINARY_STREAMING),
                (this._incomingBuffer = ""),
                (this._packetReadState = 0);
              const r = navigator.userAgent || "";
              if (
                ((r.match(/trident/i) || r.match(/msie/i)) &&
                  (this._streamingTransportPadding = 257),
                null === n.transportContentType ||
                  void 0 === n.transportContentType)
              )
                throw new u(
                  "transportContentType is not set",
                  c.PARAMETER_OUT_OF_RANGE,
                );
              this._contentType = n.transportContentType;
            }
            connectTimerExpiry() {
              P("HTTP transport connect timeout"),
                this.destroyCleanup(
                  "HTTP transport connect timeout",
                  c.TIMEOUT,
                );
            }
            get sessionIdHex() {
              return this._sid ? C(this._sid) : "";
            }
            updateMaxWebPayload() {
              const e = this._confMaxWebPayload - 22;
              this._maxPayloadBytes = this._useBinaryTransport
                ? e
                : Math.floor(0.75 * e);
            }
            connect() {
              return this._state !== S.DOWN
                ? E.INVALID_STATE_FOR_OPERATION
                : this.connectInternal();
            }
            connectInternal() {
              this._connError = null;
              try {
                this._createConn = new l(
                  this._createUrl,
                  !this._useBinaryTransport,
                  !1,
                  (e, t) => this.handleCreateResponse(e, t),
                  (e, t) => this.handleCreateConnFailure(e, t),
                  this._contentType,
                );
              } catch (e) {
                return (
                  P(`Failed to create connection to router: ${e.message}`),
                  (this._connError = e),
                  E.CONNECTION_ERROR
                );
              }
              if (i.nothing(this._createConn))
                return (
                  P("Failed to create connection to router"), E.CONNECTION_ERROR
                );
              const e = r.Codec.Transport.genTsCreateHeader();
              this._state === S.WAITING_FOR_CREATE ||
                (this.createConnectTimeout(),
                (this._state = S.WAITING_FOR_CREATE));
              try {
                this._createConn.send(e);
              } catch (e) {
                return (
                  P(`Error connecting: ${e.message}`),
                  e.stack,
                  (this._state = S.CONNECTION_FAILED),
                  this.cancelConnectTimeout(),
                  (this._connError =
                    e instanceof p
                      ? e
                      : new p(
                          `Could not create HTTP transport session: ${e.message}`,
                          e.subcode || c.CONNECTION_ERROR,
                        )),
                  E.CONNECTION_ERROR
                );
              }
              return E.OK;
            }
            destroy(e, t) {
              if (
                (this._state,
                this._state === S.WAITING_FOR_DESTROY || this._state === S.DOWN)
              )
                return E.OK;
              if (
                this._state === S.CONNECTION_FAILED ||
                this._state === S.WAITING_FOR_CREATE
              )
                return (
                  P("The connection is in unreliable state, close transport"),
                  this.destroyCleanup(e, t, !0),
                  E.OK
                );
              P("Destroy transport session immediately"),
                (this._state = S.WAITING_FOR_DESTROY),
                null !== this._httpSendConn &&
                  (P("Destroy transport session: abort sendConn"),
                  this._httpSendConn.abort()),
                null !== this._httpReceiveConn &&
                  (P("Destroy transport session: abort receiveConn"),
                  this._httpReceiveConn.abort()),
                (this._destroyTimer = setTimeout(() => {
                  this.destroyTimerExpiry();
                }, this._destroyTimeout)),
                (this._httpSendConn = new l(
                  this._routerUrl,
                  !this._useBinaryTransport,
                  !1,
                  (e, t) => this.handleRxDataToken(e, t),
                  (e, t) => this.handleSendFailure(e, t),
                  this._contentType,
                  !0,
                ));
              const s = r.Codec.Transport.genTsDestroyHeader(this._sid);
              return R(s), this._httpSendConn.send(s), E.OK;
            }
            send(e, t = !1) {
              let s = e;
              if (this._state !== S.SESSION_UP)
                return E.INVALID_STATE_FOR_OPERATION;
              if (this._queuedData.length > 0 || !this._haveToken)
                return this.enqueueData(s, t);
              let n = null;
              if (
                s.length > this._maxPayloadBytes &&
                ((n = s.substr(this._maxPayloadBytes)),
                (s = s.substr(0, this._maxPayloadBytes)),
                !this.allowEnqueue(n.length))
              )
                return this.enqueueFailNoSpace();
              this._haveToken = !1;
              const r =
                this._smfDataTSHeaderParts[0].length +
                4 +
                this._smfDataTSHeaderParts[1].length +
                s.length;
              return (
                this._httpSendConn.send(
                  this._smfDataTSHeaderParts[0] +
                    f(r) +
                    this._smfDataTSHeaderParts[1] +
                    s,
                ),
                (this._clientstats.bytesWritten += s.length),
                n
                  ? this.enqueueData(n, null)
                  : (this._clientstats.msgWritten++, E.OK)
              );
            }
            enqueueData(e, t = !1) {
              const s = e.length;
              return t || this.allowEnqueue(s)
                ? ((this._queuedDataSize += s), this._queuedData.push(e), E.OK)
                : this.enqueueFailNoSpace();
            }
            initPreformattedHeaders(e) {
              (this._smfDataTSHeaderParts =
                r.Codec.Transport.genTsDataMsgHeaderParts(e)),
                this._useStreamingTransport
                  ? (this._smfDataTokenTSHeader =
                      r.Codec.Transport.genTsDataStreamTokenMsg(
                        e,
                        this._streamingTransportPadding,
                      ))
                  : (this._smfDataTokenTSHeader =
                      r.Codec.Transport.genTsDataTokenMsg(e));
            }
            flush(e) {
              this._queuedDataSize ? (this._flushCallback = e) : e();
            }
            sendQueuedData() {
              if (0 === this._queuedDataSize) return;
              this._haveToken = !1;
              const e = this.getQueuedDataToSend(),
                t =
                  this._smfDataTSHeaderParts[0].length +
                  4 +
                  this._smfDataTSHeaderParts[1].length +
                  e.length;
              if (
                (this._httpSendConn.send(
                  this._smfDataTSHeaderParts[0] +
                    f(t) +
                    this._smfDataTSHeaderParts[1] +
                    e,
                ),
                (this._clientstats.bytesWritten += e.length),
                this._canSendNeeded &&
                  ((this._canSendNeeded = !1),
                  this._eventCB(
                    new T(g.CAN_ACCEPT_DATA, "", null, 0, this._sid),
                  )),
                this._flushCallback)
              ) {
                const e = this._flushCallback;
                (this._flushCallback = null), e();
              }
            }
            handleCreateResponse(e, t) {
              if (
                this._state === S.WAITING_FOR_DESTROY ||
                this._state === S.DOWN
              )
                return;
              if ((this.updateMaxWebPayload(), e !== E.OK))
                return (
                  P(
                    `Received create response with return code ${E.describe(e)}`,
                  ),
                  void (e === E.DATA_DECODE_ERROR
                    ? this.destroyCleanup(
                        "Received data decode error on create session response",
                        c.DATA_DECODE_ERROR,
                      )
                    : this.destroyCleanup(
                        "Failed to handle create session response",
                        c.CONNECTION_ERROR,
                      ))
                );
              if (0 === t.length) return;
              const s = r.Codec.Decode.decodeCompoundMessage(
                D.from(t, "latin1"),
                0,
              );
              if (!s)
                return (
                  N(
                    "Could not parse create response as SMF. Destroying transport",
                  ),
                  void this.destroyCleanup(
                    "Failed to parse create response message",
                    c.CONNECTION_ERROR,
                  )
                );
              const n = s.getResponse();
              if (200 !== n.responseCode)
                return void this.destroyCleanup(
                  `Transport create request failed (${n.responseCode}, ${n.responseString})`,
                  c.CONNECTION_ERROR,
                );
              this.cancelConnectTimeout(),
                this._createConn.abort(),
                (this._createConn = null),
                (this._state = S.SESSION_UP),
                (this._sid = s.sessionId),
                (this._routerTag = s.routerTag),
                (this._routerUrl = this._createUrl.replace(/\?.*/, "")),
                "" !== this._routerTag &&
                  (this._routerUrl = this._routerUrl + this._routerTag),
                this.initPreformattedHeaders(this._sid);
              const i = !this._useBinaryTransport,
                o = this._useStreamingTransport;
              (this._httpSendConn = new l(
                this._routerUrl,
                i,
                !1,
                (e, t) => this.handleRxDataToken(e, t),
                (e, t) => this.handleSendFailure(e, t),
                this._contentType,
              )),
                this._useStreamingTransport
                  ? (this._httpReceiveConn = new l(
                      this._routerUrl,
                      i,
                      o,
                      (e, t) => this.handleRxStreaming(e, t),
                      (e, t) => this.handleSendFailure(e, t),
                      this._contentType,
                      !0,
                    ))
                  : ((this._rxChannelClient = new d(
                      (e) => this.handleSmfMessage(e),
                      (e) => this.handleSmfParseError(e),
                      null,
                    )),
                    (this._httpReceiveConn = new l(
                      this._routerUrl,
                      i,
                      o,
                      (e, t) => this.handleRxData(e, t),
                      (e, t) => this.handleSendFailure(e, t),
                      this._contentType,
                    ))),
                this._httpReceiveConn.send(this._smfDataTokenTSHeader),
                this._eventCB(
                  new T(
                    g.UP_NOTICE,
                    n.responseString,
                    n.responseCode,
                    0,
                    s.sessionId,
                  ),
                );
            }
            handleDestroyResponse(e) {
              this.cancelDestroyTimeout();
              const t = e.getResponse(),
                s = t ? t.responseString : "";
              this.destroyCleanup(
                `${s} handled Destroy Response addressed to session ${C(e.sessionId)}, on session ${C(this._sid)}`,
                0,
              );
            }
            handleSmfMessage(e) {
              const t = e.smfHeader;
              if (t.smf_protocol !== r.SMFProtocol.TSESSION)
                return void this.handleSmfParseError(
                  `Unexpected Message Prototcol (${t.smf_protocol}) on ReceiveData connection`,
                );
              const s = e.payload,
                n = e.payloadLength;
              switch (e.messageType) {
                case r.SMFTransportSessionMessageType.DESTROY_RESP:
                  return void this.handleDestroyResponse(e);
                case r.SMFTransportSessionMessageType.DATA:
                  if (e.sessionId !== this._sid) {
                    const t = e.getResponse(),
                      s = t ? ` (${t.responseCode} ${t.responseString})` : "",
                      n = t ? t.responseCode : null;
                    return (
                      I(this._sid),
                      I(e.sessionId),
                      (this._state = S.CONNECTION_FAILED),
                      void this._eventCB(
                        new T(
                          g.PARSE_FAILURE,
                          `Session ID mismatch in data message, expected: ${C(this._sid)}, got: ${C(e.sessionId)}, ${s}`,
                          n,
                          c.PROTOCOL_ERROR,
                          this._sid,
                        ),
                      )
                    );
                  }
                  n > 0 && this._client.rxDataBuffer(s);
                  break;
                default:
                  this.handleSmfParseError(
                    `Unexpected message type (${e.messageType}) on ReceiveData connection`,
                  );
              }
            }
            handleSmfParseError() {
              this._eventCB(
                new T(
                  g.DATA_DECODE_ERROR,
                  "Received data decode error",
                  null,
                  c.DATA_DECODE_ERROR,
                  this._sid,
                ),
              );
            }
            handleRxData(e, t) {
              null !== this._httpReceiveConn && null !== this._rxChannelClient
                ? this._state !== S.WAITING_FOR_DESTROY
                  ? (this._httpReceiveConn.recStat("GotData"),
                    e === E.OK
                      ? 0 === t.length
                        ? this._httpReceiveConn.send(this._smfDataTokenTSHeader)
                        : this._rxChannelClient.rxDataString(t)
                      : this.handleRxError(e, t))
                  : n.Debug.formatDumpBytes(t.substring(0, 64), !0, 0)
                : this._state === S.DOWN
                  ? P(
                      "Transport session is down, ignore data from receive connection",
                    )
                  : N(
                      `Transport session is not in working state, state: ${this._state}`,
                    );
            }
            handleRxStreaming(e, t) {
              if (null === this._httpReceiveConn)
                return void (
                  this._state === S.DOWN ||
                  N(
                    `Transport session is not in working state, state: ${this._state}`,
                  )
                );
              if (this._state === S.WAITING_FOR_DESTROY)
                return void n.Debug.formatDumpBytes(t.substring(0, 64), !0, 0);
              if ((this._httpReceiveConn.recStat("GotData"), e !== E.OK))
                return void this.handleRxError(e, t);
              if (0 === t.length)
                return (
                  (this._packetReadState = 0),
                  void this._httpReceiveConn.send(this._smfDataTokenTSHeader)
                );
              if (1 === this._packetReadState)
                return void this._client.rxDataString(t);
              this._incomingBuffer += t;
              const s = r.Codec.ParseSMF.parseSMFAt(
                D.from(this._incomingBuffer, "latin1"),
                0,
                !0,
              );
              if (s) {
                const e = r.Codec.Transport.parseTsSmfHdrAt(
                  D.from(this._incomingBuffer, "latin1"),
                  s.headerLength,
                  s,
                );
                if (!e) return;
                switch (e.messageType) {
                  case r.SMFTransportSessionMessageType.DESTROY_RESP:
                    return void this.handleDestroyResponse(e);
                  case r.SMFTransportSessionMessageType.DATA:
                    if (e.sessionId !== this._sid) {
                      const s = e.getResponse(),
                        n = s ? ` (${s.responseCode} ${s.responseString})` : "",
                        r = s ? s.responseCode : null;
                      return (
                        I(this._sid),
                        I(e.sessionId),
                        I(t.substr(0, 64)),
                        (this._state = S.CONNECTION_FAILED),
                        void this._eventCB(
                          new T(
                            g.PARSE_FAILURE,
                            `Session ID mismatch in data message, expected: ${C(this._sid)}, got: ${C(e.sessionId)}, ${n}`,
                            r,
                            c.PROTOCOL_ERROR,
                            this._sid,
                          ),
                        )
                      );
                    }
                    return (
                      (this._packetReadState = 1),
                      this._incomingBuffer.length >
                        s.headerLength + e.tsHeaderLength &&
                        this._client.rxDataString(
                          this._incomingBuffer.substr(
                            s.headerLength + e.tsHeaderLength,
                          ),
                        ),
                      void (this._incomingBuffer = "")
                    );
                  default:
                    throw new p(
                      `Unexpected message type (${e.messageType}) on ReceiveData connection`,
                      0,
                    );
                }
              } else if (
                r.Codec.ParseSMF.isSMFHeaderAvailable(
                  D.from(this._incomingBuffer, "latin1"),
                  0,
                ) &&
                !r.Codec.ParseSMF.isSMFHeaderValid(
                  D.from(this._incomingBuffer, "latin1"),
                  0,
                )
              ) {
                N(
                  `Couldn't decode message due to invalid smf header, dump first 64 bytes (or fewer) of buffer content:\n${n.Debug.formatDumpBytes(this._incomingBuffer.substring(0, 64), !0, 0)}`,
                );
                const e =
                  "Error parsing incoming message - invalid SMF header detected";
                (this._state = S.CONNECTION_FAILED),
                  this._eventCB(
                    new T(g.PARSE_FAILURE, e, null, c.PROTOCOL_ERROR, null),
                  );
              }
            }
            handleRxDataToken(e, t) {
              if (e !== E.OK) return void this.handleRxError(e, t);
              if (0 === t.length) return;
              const s = r.Codec.Decode.decodeCompoundMessage(
                D.from(t, "latin1"),
                0,
              );
              if (s)
                if (
                  s.messageType !==
                  r.SMFTransportSessionMessageType.DESTROY_RESP
                ) {
                  if (s.sessionId !== this._sid) {
                    const e = s.getResponse(),
                      n = e ? ` (${e.responseCode} ${e.responseString})` : "",
                      r = e ? e.responseCode : null;
                    return (
                      I(this._sid),
                      I(s.sessionId),
                      I(t.substr(0, 64)),
                      void (this._state !== S.WAITING_FOR_DESTROY
                        ? ((this._state = S.CONNECTION_FAILED),
                          this._eventCB(
                            new T(
                              g.PARSE_FAILURE,
                              `Session ID mismatch in response message, expected: ${C(this._sid)}, got: ${C(s.sessionId)}, ${n}`,
                              r,
                              c.PROTOCOL_ERROR,
                              this._sid,
                            ),
                          ))
                        : this.destroyCleanup(
                            "Session ID mismatch in response message",
                            c.PROTOCOL_ERROR,
                          ))
                    );
                  }
                  if (
                    s.messageType !==
                      r.SMFTransportSessionMessageType.DATA_TOKEN &&
                    s.messageType !==
                      r.SMFTransportSessionMessageType.DATA_STREAM_TOKEN
                  )
                    throw new p(
                      `Unexpected message type (${s.messageType}) on SendData connection`,
                      0,
                    );
                  (this._haveToken = !0),
                    this._httpSendConn.recStat("GotToken"),
                    this.sendQueuedData();
                } else this.handleDestroyResponse(s);
              else
                this._state !== S.WAITING_FOR_DESTROY
                  ? ((this._state = S.CONNECTION_FAILED),
                    this._eventCB(
                      new T(
                        g.PARSE_FAILURE,
                        "Failed to parse received data message",
                        null,
                        c.PROTOCOL_ERROR,
                        this._sid,
                      ),
                    ))
                  : this.destroyCleanup(
                      "Failed to parse received data message",
                      c.PROTOCOL_ERROR,
                    );
            }
            handleRxError(e) {
              P(`handleRxError, transport return code ${E.name(e)}`),
                (this._state = S.CONNECTION_FAILED),
                e === E.DATA_DECODE_ERROR
                  ? this._eventCB(
                      new T(
                        g.DATA_DECODE_ERROR,
                        "Received data decode error",
                        null,
                        c.DATA_DECODE_ERROR,
                        this._sid,
                      ),
                    )
                  : this._eventCB(
                      new T(
                        g.SEND_ERROR,
                        "Connection error",
                        c.CONNECTION_ERROR,
                        this._sid,
                      ),
                    );
            }
            handleSendFailure(e, t) {
              this._state === S.WAITING_FOR_DESTROY
                ? (P(
                    `Connection destroy failure (${t}) while in state ${this._state}`,
                  ),
                  this.destroyCleanup(
                    `Connection destroy failure: ${t}`,
                    c.CONNECTION_ERROR,
                  ))
                : (P(`Connection failure (${t}) while in state ${this._state}`),
                  this._eventCB(
                    new T(
                      g.SEND_ERROR,
                      `Connection error: ${t}`,
                      e,
                      c.CONNECTION_ERROR,
                      this._sid,
                    ),
                  ));
            }
            handleCreateConnFailure(e, t) {
              this._state !== S.DOWN &&
                (P(
                  `Connection create failure (${t}) while in state ${this._state}`,
                ),
                this.destroyCleanup(
                  `Connection create failure: ${t}`,
                  c.CONNECTION_ERROR,
                ));
            }
            destroyTimerExpiry() {
              this.destroyCleanup(
                "Destroy request timeout",
                c.CONNECTION_ERROR,
              );
            }
            cancelDestroyTimeout() {
              this._destroyTimer &&
                (clearTimeout(this._destroyTimer), (this._destroyTimer = null));
            }
            destroyCleanup(e, t, s) {
              this._createConn && this._createConn.abort(),
                this._httpSendConn && this._httpSendConn.abort(),
                this._httpReceiveConn && this._httpReceiveConn.abort(),
                (this._createUrl = null),
                (this._routerUrl = null),
                (this._createConn = null),
                (this._httpSendConn = null),
                (this._httpReceiveConn = null),
                (this._smfDataTokenTSHeader = null),
                (this._rxChannelClient = null),
                (this._routerTag = ""),
                (this._queuedData = []),
                (this._queuedDataSize = 0),
                (this._canSendNeeded = !1),
                this.cancelDestroyTimeout(),
                this.cancelConnectTimeout(),
                (this._state = S.DOWN);
              const n = () => {
                this._eventCB &&
                  this._eventCB(
                    new T(
                      g.DESTROYED_NOTICE,
                      e || "Session is destroyed",
                      null,
                      t || 0,
                      this._sid,
                    ),
                  ),
                  (this._client = null),
                  (this._eventCB = null);
              };
              s ? setTimeout(n, 0) : n();
            }
            getInfoStr() {
              return `HTTPTransportSession; sid=${C(this._sid)}; routerTag=${this._routerTag}`;
            }
          };
        },
        8186: (e, t, s) => {
          const { Base64: n, Convert: r } = s(840),
            { XHRFactory: i } = s(6145),
            { encode: o } = n,
            { stringToUint8Array: a } = r;
          function c(e, t, s) {
            (e.responseType = "arraybuffer"),
              e.overrideMimeType(`${s}; charset=x-user-defined`),
              e.setRequestHeader(
                "Content-Type",
                `${s}; charset=x-user-defined`,
              ),
              e.send(a(t));
          }
          function u(e, t, s) {
            e.overrideMimeType(`${s}; charset=x-user-defined`),
              e.setRequestHeader(
                "Content-Type",
                `${s}; charset=x-user-defined`,
              ),
              e.send(a(t).buffer);
          }
          function l(e, t, s, n) {
            e.setRequestHeader("Content-Type", `${s}; charset=x-user-defined`),
              e.send(null == t ? t : o(t), n);
          }
          const h =
            "undefined" != typeof window && window.Uint8Array && window.Blob
              ? i.create(!0).responseType
                ? c
                : u
              : l;
          (e.exports.sendXhrBinary = h), (e.exports.sendXhrText = l);
        },
        6145: (e, t, s) => {
          const { ErrorSubcode: n } = s(3870),
            { TransportError: r } = s(1663),
            i = {
              create(e = !1) {
                const t =
                  "undefined" != typeof XMLHttpRequest
                    ? new XMLHttpRequest()
                    : null;
                if (!e && !t)
                  throw new r(
                    "Failed to create an XMLHTTPRequest",
                    n.CREATE_XHR_FAILED,
                  );
                return t;
              },
            };
          e.exports.XHRFactory = i;
        },
        7538: (e, t, s) => {
          const { TransportProtocol: n } = s(4080),
            { TSHState: r } = s(4295);
          e.exports.StateBase64 = class extends r {
            constructor(e, t, s) {
              super(e, n.HTTP_BASE64, t, s);
            }
          };
        },
        6959: (e, t, s) => {
          const { TransportProtocol: n } = s(4080),
            { TSHState: r } = s(4295),
            { WebTransportCapabilities: i } = s(7483);
          e.exports.StateBinary = class extends r {
            constructor(e, t, s) {
              super(e, n.HTTP_BINARY, t, s);
            }
            validateLegal() {
              return i.xhrBinary();
            }
          };
        },
        9929: (e, t, s) => {
          const { TransportProtocol: n } = s(4080),
            { TSHState: r } = s(4295),
            { WebTransportCapabilities: i } = s(7483);
          e.exports.StateStreamingAndBinary = class extends r {
            constructor(e, t, s) {
              super(e, n.HTTP_BINARY_STREAMING, t, s);
            }
            validateLegal() {
              return i.streaming() && i.xhrBinary();
            }
          };
        },
        1022: (e, t, s) => {
          const { TransportProtocol: n } = s(4080),
            { TSHState: r } = s(4295),
            { WebTransportCapabilities: i } = s(7483);
          e.exports.StateWebSocketBinary = class extends r {
            constructor(e, t, s) {
              super(e, n.WS_BINARY, t, s);
            }
            validateLegal() {
              return i.webSocket();
            }
          };
        },
        7483: (e, t, s) => {
          const n = s(3124),
            { WebSocketTransportSession: r } = s(2519),
            { HTTPConnection: i } = n,
            o = {
              webSocket: () => r.browserSupportsBinaryWebSockets(),
              xhrBinary: () => i.browserSupportsXhrBinary(),
              streaming: () => i.browserSupportsStreamingResponse(),
            };
          e.exports.WebTransportCapabilities = o;
        },
        6671: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.WebTransportEvent = n.new({
            CONNECT: "Connect",
            DESTROY: "Destroy",
            DOWNGRADE: "Downgrade",
            DESTROYED_NOTICE: "DestroyedNotice",
            CONNECT_TIMEOUT: "ConnectTimeout",
            UP_NOTICE: "UpNotice",
            SEND_ERROR: "SendError",
          });
        },
        4035: (e, t, s) => {
          const { ErrorSubcode: n } = s(3870),
            { FsmEvent: r, State: i, StateMachine: o } = s(8535),
            { LogFormatter: a } = s(390),
            { TransportReturnCode: c } = s(4882),
            { TransportSessionEvent: u } = s(414),
            { TransportSessionEventCode: l } = s(9045),
            { WebTransportEvent: h } = s(6671),
            { WebTransportState: d } = s(7317),
            { LOG_TRACE: p, LOG_INFO: _ } = new a();
          e.exports.WebTransportFSM = class extends o {
            constructor(e, t) {
              super({ name: "WebTransportFSM" });
              const s = e,
                o = this,
                l = new a();
              (l.formatter = function (...e) {
                return [`[web-transport-fsm=${t()}]`, ...e];
              }),
                (this.log = l.wrap(this.log, this)),
                (this.transport = s),
                this.initial(function () {
                  return this.transitionTo(this.WebTransportDown, (e) => {
                    e.getStateMachine().getName();
                  });
                }),
                this.unhandledEventReaction(function (e) {
                  return e.getName(), this.getCurrentState().getName(), this;
                }),
                (this.WebTransportDown = new i({
                  name: d.DOWN,
                  parentContext: this,
                })
                  .reaction(h.CONNECT, function () {
                    return this.transitionTo(o.WebTransportConnecting);
                  })
                  .reaction(h.DESTROY, function (e) {
                    return (
                      s.destroyInternal(e._destroyMsg, e._subcode),
                      this.transitionTo(o.WebTransportDestroying)
                    );
                  })),
                (this.WebTransportConnecting = new i({
                  name: d.CONNECTING,
                  parentContext: this,
                })
                  .entry(() => {
                    try {
                      if (s.connectInternal() !== c.OK) {
                        const e = s.getConnError(),
                          t = new r({ name: h.DESTROY });
                        return (
                          (t._destroyMsg = e
                            ? e.message
                            : "Error occurred while establishing transport"),
                          (t._subcode = e ? e.subcode : null),
                          (t._eventReason = e),
                          this.processEvent(t)
                        );
                      }
                    } catch (e) {
                      _(`transport.connectInternal threw: ${e.message}`);
                      const t = new r({ name: h.DESTROY });
                      return (
                        (t._destroyMsg = e.message),
                        (t._subcode = e.subcode
                          ? e.subcode
                          : n.CONNECTION_ERROR),
                        (t._eventReason = e),
                        this.processEvent(t)
                      );
                    }
                  })
                  .reaction(
                    h.SEND_ERROR,
                    (e) => (
                      s.notifyEvent(e._transportEvent),
                      o.attemptDowngrade(e._transportEvent)
                    ),
                  )
                  .reaction(h.CONNECT_TIMEOUT, (e) =>
                    o.attemptDowngrade(e._transportEvent),
                  )
                  .reaction(
                    h.DESTROYED_NOTICE,
                    (e) => (
                      s.notifyEvent(e._transportEvent),
                      this.transitionTo(o.WebTransportDown)
                    ),
                  )
                  .reaction(h.UP_NOTICE, function (e) {
                    return (
                      s.notifyEvent(e._transportEvent),
                      this.transitionTo(o.WebTransportUp)
                    );
                  })
                  .reaction(h.DESTROY, function (e) {
                    return (
                      s.destroyInternal(e._destroyMsg, e._subcode),
                      this.transitionTo(o.WebTransportDestroying)
                    );
                  })),
                (this.WebTransportDowngrading = new i({
                  name: d.DOWNGRADING,
                  parentContext: this,
                })
                  .reaction(h.DESTROYED_NOTICE, function (e) {
                    return (
                      _("Web transport: request downgrade"),
                      s.completeDowngrade()
                        ? this.transitionTo(o.WebTransportConnecting)
                        : (_("Web transport: connection error, no downgrade"),
                          s.notifyEvent(e._transportEvent),
                          o.notifyDowngradeFailed(),
                          this.transitionTo(o.WebTransportDown))
                    );
                  })
                  .reaction(h.DESTROY, function (e) {
                    return (
                      s.destroyInternal(e._destroyMsg, e._subcode),
                      this.transitionTo(o.WebTransportDestroying)
                    );
                  })),
                (this.WebTransportUp = new i({
                  name: d.UP,
                  parentContext: this,
                })
                  .reaction(h.DOWNGRADE, (e) =>
                    o.attemptDowngrade(new u(e._downgradeMsg, e._subcode)),
                  )
                  .reaction(h.DESTROYED_NOTICE, function (e) {
                    return (
                      s.notifyEvent(e._transportEvent),
                      this.transitionTo(o.WebTransportDown)
                    );
                  })
                  .reaction(h.DESTROY, function (e) {
                    return (
                      s.destroyInternal(e._destroyMsg, e._subcode),
                      this.transitionTo(o.WebTransportDestroying)
                    );
                  })
                  .reaction(h.SEND_ERROR, function (e) {
                    return (
                      s.notifyEvent(e._transportEvent),
                      s.destroyInternal(e._destroyMsg, e._subcode),
                      this.transitionTo(o.WebTransportDestroying)
                    );
                  })),
                (this.WebTransportDestroying = new i({
                  name: d.DESTROYING,
                  parentContext: this,
                }).reaction(h.DESTROYED_NOTICE, function (e) {
                  return (
                    s.notifyEvent(e._transportEvent),
                    this.transitionTo(o.WebTransportDown)
                  );
                }));
            }
            attemptDowngrade(e) {
              const { infoStr: t, errorSubcode: s } = e;
              return this.transport.beginDowngrade(t, s)
                ? this.transitionTo(this.WebTransportDowngrading)
                : (this.transport.destroyInternal(t, s),
                  this.transport.notifyEvent(e),
                  this.transitionTo(this.WebTransportDestroying));
            }
            notifyDowngradeFailed() {
              this.transport.notifyEvent(
                new u(l.DOWNGRADE_FAILED, "Downgrade failed"),
              );
            }
          };
        },
        5677: (e, t, s) => {
          const { LOG_DEBUG: n, LOG_TRACE: r } = s(390),
            { TransportBase: i } = s(2422),
            { TransportClientStats: o } = s(4581),
            { TransportReturnCode: a } = s(4882),
            { TransportSessionState: c } = s(9385);
          e.exports.WebTransportSessionBase = class extends i {
            constructor(e, t, s, n) {
              super(e, t, s, n),
                (this._connectTimeout = n.transportDowngradeTimeoutInMsecs),
                (this._connectTimer = null),
                (this._clientstats = new o()),
                (this._sendBufferMaxSize = n.sendBufferMaxSize),
                (this._maxPayloadBytes = n.maxWebPayload),
                (this._queuedData = []),
                (this._queuedDataSize = 0),
                (this._canSendNeeded = !1),
                (this._state = c.DOWN),
                (this._connError = null);
            }
            getClientStats() {
              return this._clientstats;
            }
            createConnectTimeout() {
              this._connectTimeout > 0 &&
                (this._connectTimer = setTimeout(() => {
                  this.connectTimerExpiry();
                }, this._connectTimeout));
            }
            cancelConnectTimeout() {
              this._connectTimer &&
                (clearTimeout(this._connectTimer), (this._connectTimer = null));
            }
            connectTimerExpiry() {}
            allowEnqueue(e) {
              return (
                0 === this._queuedDataSize ||
                e + this._queuedDataSize <= this._sendBufferMaxSize
              );
            }
            enqueueFailNoSpace() {
              return (this._canSendNeeded = !0), a.NO_SPACE;
            }
            flush(e) {
              e();
            }
            getQueuedDataToSend() {
              let e = "",
                t = this._maxPayloadBytes;
              if (
                (this.getBufferedAmount && this.getBufferedAmount(),
                this.getBufferedAmount)
              ) {
                if (
                  ((t = this._maxPayloadBytes - this.getBufferedAmount()),
                  t <= 0)
                )
                  return (
                    this._maxPayloadBytes,
                    this.getBufferedAmount(),
                    this._bufferedAmountQueryIntervalInMsecs *
                      this._bufferedAmountQueryIntervalDelayMultiplier <=
                      4e3 &&
                      (this._bufferedAmountQueryIntervalDelayMultiplier *= 2),
                    e
                  );
                this._bufferedAmountQueryIntervalDelayMultiplier = 1;
              }
              if (this._queuedDataSize > t) {
                let s = t;
                for (; s && this._queuedDataSize; ) {
                  const t = this._queuedData[0],
                    n = t.length;
                  n > s
                    ? ((e += t.substr(0, s)),
                      (this._queuedData[0] = t.substr(s)),
                      (this._queuedDataSize -= s),
                      (s = 0))
                    : ((e += this._queuedData.shift()),
                      (s -= n),
                      (this._queuedDataSize -= n),
                      this._clientstats.msgWritten++);
                }
              } else
                (e = this._queuedData.join("")),
                  (this._clientstats.msgWritten += this._queuedData.length),
                  (this._queuedData = []),
                  (this._queuedDataSize = 0);
              return e.length, e;
            }
          };
        },
        7317: (e, t, s) => {
          const { Enum: n } = s(9359);
          e.exports.WebTransportState = n.new({
            DOWN: "WebTransportDown",
            CONNECTING: "WebTransportConnecting",
            DOWNGRADING: "WebTransportDowngrading",
            DESTROYING: "WebTransportDestroying",
            UP: "WebTransportUp",
          });
        },
        5372: (e, t, s) => {
          const { ErrorSubcode: n, OperationError: r } = s(3870),
            { HTTPTransportSession: i } = s(3124),
            { LOG_TRACE: o, LOG_INFO: a, LOG_ERROR: c } = s(390),
            { FsmEvent: u } = s(8535),
            { TransportBase: l } = s(2422),
            { TransportProtocol: h } = s(4080),
            { TransportProtocolHandler: d } = s(1175),
            { TransportReturnCode: p } = s(4882),
            { TransportSessionEventCode: _ } = s(9045),
            { WebSocketTransportSession: E } = s(2519),
            { WebTransportEvent: T } = s(6671),
            { WebTransportFSM: g } = s(4035);
          e.exports.WebTransport = class extends l {
            constructor(e, t, s, n, r) {
              super(e, t, s, n),
                n.webTransportProtocolList,
                (this._transportHandler = new d(e, n.webTransportProtocolList)),
                (this._webTransportFsm = new g(this, r)),
                this._webTransportFsm.start();
            }
            notifyEvent(e) {
              this._eventCB(e);
            }
            handleDestroyed() {
              this._transportSession = null;
            }
            handleTransportEvent(e) {
              let t;
              switch (
                (a(`Web transport receive transport event: ${e}`),
                e.getTransportEventCode())
              ) {
                case _.UP_NOTICE:
                  (t = new u({ name: T.UP_NOTICE })),
                    (t._transportEvent = e),
                    this._webTransportFsm.processEvent(t);
                  break;
                case _.DESTROYED_NOTICE:
                  this.handleDestroyed(),
                    (t = new u({ name: T.DESTROYED_NOTICE })),
                    (t._transportEvent = e),
                    this._webTransportFsm.processEvent(t);
                  break;
                case _.SEND_ERROR:
                  (t = new u({ name: T.SEND_ERROR })),
                    (t._transportEvent = e),
                    this._webTransportFsm.processEvent(t);
                  break;
                case _.CONNECT_TIMEOUT:
                  (t = new u({ name: T.CONNECT_TIMEOUT })),
                    (t._transportEvent = e),
                    this._webTransportFsm.processEvent(t);
                  break;
                case _.DOWNGRADE_FAILED:
                  this._lastDowngradeSucceeded = !1;
                  break;
                case _.DOWNGRADE_SUCCEEDED:
                  this._lastDowngradeSucceeded = !0;
                  break;
                default:
                  this._eventCB(e);
              }
            }
            connect() {
              const e = new u({ name: T.CONNECT });
              return this._webTransportFsm.processEvent(e), p.OK;
            }
            connectInternal() {
              this._transportSession = null;
              const e = this._transportHandler.getTransportProtocol();
              switch (((this._props.transportProtocol = e), e)) {
                case h.HTTP_BASE64:
                case h.HTTP_BINARY:
                case h.HTTP_BINARY_STREAMING:
                  this._transportSession = new i(
                    this._url,
                    (e) => this.handleTransportEvent(e),
                    this._client,
                    this._props,
                  );
                  break;
                case h.WS_BINARY:
                  this._transportSession = new E(
                    this._url,
                    (e) => this.handleTransportEvent(e),
                    this._client,
                    this._props,
                  );
                  break;
                default:
                  throw (
                    (c(`Web transport unrecognized TransportProtocol: ${e}`),
                    new r(
                      `No transport session provider for scheme: ${e}`,
                      n.CONNECTION_ERROR,
                      e,
                    ))
                  );
              }
              return (
                a(`Connect Transport ${e}`), this._transportSession.connect()
              );
            }
            destroy(e, t) {
              const s = new u({ name: T.DESTROY });
              return (
                (s._destroyMsg = e),
                (s._subcode = t),
                this._webTransportFsm.processEvent(s),
                p.OK
              );
            }
            forceFailure(e) {
              const t = null != e ? e : "";
              return (
                this._transportSession &&
                  this._transportSession._socket._sender._socket.destroy(
                    new Error(t),
                  ),
                p.OK
              );
            }
            beginDowngrade(e, t) {
              return (
                !!this._transportHandler.canCompleteDowngrade() &&
                (this.destroyInternal(e, t), !0)
              );
            }
            completeDowngrade() {
              return (
                !!this._transportHandler.canCompleteDowngrade() &&
                this._transportHandler.completeDowngrade()
              );
            }
            destroyInternal(e, t) {
              this._transportSession && this._transportSession.destroy(e, t);
            }
            flush(e) {
              return this._transportSession.flush(e);
            }
            getConnError() {
              return this._transportSession
                ? this._transportSession._connError
                : null;
            }
            getInfoStr() {
              return this._transportSession
                ? this._transportSession.getInfoStr()
                : "Not connected.";
            }
            getTransportProtocol() {
              return this._transportHandler.getTransportProtocol();
            }
            getClientStats() {
              return this._transportSession
                ? this._transportSession.getClientStats()
                : null;
            }
            requestDowngrade(e, t) {
              this._lastDowngradeSucceeded = void 0;
              const s = new u({ name: T.DOWNGRADE });
              return (
                (s._downgradeMsg = e),
                (s._subcode = t),
                this._webTransportFsm.processEvent(s),
                this._lastDowngradeSucceeded
              );
            }
            send(e, t) {
              return this._transportSession.send(e, t);
            }
          };
        },
        8645: (e) => {
          e.exports.WebSocketCloseCodes = {
            0: {
              name: "Unknown code",
              description: "No status code was returned by the operation",
            },
            1e3: {
              name: "Normal Closure",
              description: "The connection closed normally",
            },
            1001: {
              name: "Going Away",
              description:
                "The endpoint is going away due to a server failure or client navigation",
            },
            1002: {
              name: "Protocol Error",
              description: "A WebSocket protocol error occurred",
            },
            1003: {
              name: "Unsupported Data",
              description: "The endpoint cannot handle the specified data type",
            },
            1004: { name: "Reserved", description: "" },
            1005: {
              name: "No Status Recvd",
              description: "Expected a status code but none was provided",
            },
            1006: {
              name: "Abnormal Closure",
              description: "No close frame was received before remote hangup",
            },
            1007: {
              name: "Invalid Frame Payload Data",
              description:
                "A message contained data inconsistent with its encoding",
            },
            1008: {
              name: "Policy Violation",
              description: "A message violated endpoint policy",
            },
            1009: {
              name: "Message Too Big",
              description: "A data frame was too large",
            },
            1010: {
              name: "Missing Extension",
              description:
                "The endpoint did not negotiate an expected extension",
            },
            1011: {
              name: "Internal Error",
              description:
                "The server encountered an unexpected condition that prevented it from fulfilling the request",
            },
            1012: {
              name: "Service Restart",
              description: "The server is restarting",
            },
            1013: {
              name: "Try Again Later",
              description:
                "The server is terminating the connection due to a temporary condition",
            },
            1014: {
              name: "Bad Gateway",
              description:
                "A gateway or proxy received an invalid response from the upstream server",
            },
            1015: {
              name: "TLS Handshake",
              description:
                "The connection was closed due to a failure to perform a TLS handshake",
            },
          };
        },
        2519: (e, t, s) => {
          const {
              LOG_TRACE: n,
              LOG_DEBUG: r,
              LOG_INFO: i,
              LOG_WARN: o,
              LOG_ERROR: a,
            } = s(390),
            { ArrayUtils: c } = s(7882),
            { Convert: u, Hex: l } = s(840),
            { ErrorSubcode: h } = s(3870),
            { mixin: d } = s(9359),
            { TransportError: p } = s(1663),
            { TransportReturnCode: _ } = s(4882),
            { TransportSessionEvent: E } = s(414),
            { TransportSessionEventCode: T } = s(9045),
            { TransportSessionState: g } = s(9385),
            { WebSocketCloseCodes: S } = s(8645),
            { WebTransportSessionBase: m } = s(5677),
            { stringToArrayBuffer: f } = (s(8293), s(1209), u),
            { formatHexString: I } = l,
            { includes: R } = c;
          let C = ("undefined" == typeof window ? s.g : window).WebSocket;
          class A extends m {
            constructor(e, t, s, n) {
              super(e, t, s, n),
                (this._url = (function (e) {
                  return `ws${e.match(/(ws|http)(s?:\/\/.+)/)[2]}`;
                })(e)),
                (this._socket = null),
                (this._sessionId = new Date().getTime()),
                (this._bufferedAmountQueryIntervalInMsecs =
                  n.bufferedAmountQueryIntervalInMsecs),
                (this._bufferedAmountQueryTimer = null),
                (this._bufferedAmountQueryIntervalDelayMultiplier = 1);
            }
            onOpen() {
              this.cancelConnectTimeout(),
                (this._state = g.SESSION_UP),
                this._eventCB(
                  new E(T.UP_NOTICE, "Connected", 0, null, this._sessionId),
                );
            }
            onClose(e, t) {
              if (e !== this._socket) return;
              if (this._state === g.WAITING_FOR_DESTROY) return;
              const s = [],
                n = S[t.code] || S[0];
              s.push(`${t.code} ${n.name} (${n.description})`),
                void 0 !== t.wasClean && s.push(`clean closure: ${t.wasClean}`),
                t.reason && s.push(`reason: ${t.reason}`);
              const r = s.join(", ");
              t.type,
                t.wasClean,
                t.code,
                t.reason,
                (this._state = g.CONNECTION_FAILED),
                this.destroy(`Connection closed: ${r}`, h.COMMUNICATION_ERROR);
            }
            onDrain() {
              this.maybeEmitCanSend(), this.maybeEmitFlush();
            }
            onBufferedAmountPoll() {
              0 === this.getBufferedAmount()
                ? this.onDrain()
                : this.scheduleQuery && this.scheduleQuery();
            }
            onError(e, t) {
              if (
                (i(
                  `Websocket Transport Session onError for socket ${e} while socket is ${this._socket}`,
                ),
                e !== this._socket)
              )
                return void i(
                  "Websocket Transport Session stray onError for previous socket, ignoring.",
                );
              if (this._state === g.WAITING_FOR_DESTROY)
                return void i(
                  "WebSocket transport is being destroyed, ignore error",
                );
              const s = t.message ? `: ${t.message}` : "";
              i(
                `WebSocket transport connection error ${s} while in state ${this._state}`,
              ),
                this._state === g.WAITING_FOR_CONNECT
                  ? (this.cancelConnectTimeout(),
                    (this._state = g.CONNECTION_FAILED),
                    this.destroy(`Connection failed: ${s}`, h.CONNECTION_ERROR))
                  : this._eventCB(
                      new E(
                        T.SEND_ERROR,
                        `Connection error${s}`,
                        null,
                        h.CONNECTION_ERROR,
                        null,
                      ),
                    );
            }
            onMessage(e) {
              this._client && this._client.rxDataArrayBuffer(e.data);
            }
            connectTimerExpiry() {
              i("WebSocket transport connect timeout"),
                (this.state = g.CONNECTION_FAILED),
                this._eventCB(
                  new E(
                    T.CONNECT_TIMEOUT,
                    "Connection timed out",
                    null,
                    h.TIMEOUT,
                  ),
                );
            }
            connect() {
              if (this._state !== g.DOWN)
                return (
                  a(`Invalid state for operation: ${g.nameOf(this._state)}`),
                  _.INVALID_STATE_FOR_OPERATION
                );
              if (!this._url)
                return o("Cannot connect to null URL"), _.CONNECTION_ERROR;
              this._socket && this.onError("Socket already connected"),
                i("Establishing WebSocket transport session");
              try {
                this.createConnectTimeout(),
                  (this._state = g.WAITING_FOR_CREATE),
                  i("Constructing socket"),
                  (this._socket = new C(this._url, "smf.solacesystems.com")),
                  (this._socket.binaryType = "arraybuffer"),
                  (this._socket.onopen = this.onOpen.bind(this)),
                  (this._socket.onmessage = this.onMessage.bind(this)),
                  (this._socket.onclose = this.onClose.bind(
                    this,
                    this._socket,
                  )),
                  (this._socket.onerror = this.onError.bind(
                    this,
                    this._socket,
                  ));
              } catch (e) {
                if (
                  (i(`Error connecting: ${e.message}`),
                  e.stack,
                  (this._state = g.CONNECTION_FAILED),
                  this.cancelConnectTimeout(),
                  !(e instanceof p))
                )
                  throw new p(
                    `Could not create WebSocket: ${e.message}`,
                    e.subcode || h.CONNECTION_ERROR,
                  );
                return (this._connError = e), _.CONNECTION_ERROR;
              }
              return i("WebSocket is connecting"), _.OK;
            }
            send(e, t = !1) {
              if (this._state !== g.SESSION_UP)
                return _.INVALID_STATE_FOR_OPERATION;
              const s = e.length,
                n = this._sendBufferMaxSize - this.getBufferedAmount() >= 0;
              if (!t && !n)
                return (
                  (this._canSendNeeded = !0),
                  this.scheduleQuery && this.scheduleQuery(),
                  _.NO_SPACE
                );
              const r = this._maxPayloadBytes,
                i = f(e);
              if (s > r)
                for (let e = 0; e < s; e += r)
                  this._socket.send(i.slice(e, e + r));
              else this._socket.send(i);
              return (
                (this._clientstats.bytesWritten += s),
                ++this._clientstats.msgWritten,
                _.OK
              );
            }
            getBufferedAmount() {
              return this._socket ? this._socket.bufferedAmount : 0;
            }
            flush(e) {
              (this._flushCallback = e), this.maybeEmitFlush();
            }
            maybeEmitCanSend() {
              this._canSendNeeded &&
                this.getBufferedAmount() < this._sendBufferMaxSize &&
                ((this._canSendNeeded = !1),
                this._eventCB(
                  new E(T.CAN_ACCEPT_DATA, "", null, 0, this._sessionId),
                ));
            }
            maybeEmitFlush() {
              if (!this._flushCallback) return;
              if (this.getBufferedAmount() > 0)
                return void (
                  this._bufferedAmountQueryTimer || this.scheduleQuery()
                );
              const e = this._flushCallback;
              (this._flushCallback = null), e();
            }
            destroy(e, t) {
              return (
                this._state !== g.DOWN &&
                  (i(`Destroy WebSocket transport: ${e}`),
                  (this._state = g.WAITING_FOR_DESTROY),
                  this._socket &&
                    (this._socket.close(),
                    (this._socket.onopen = null),
                    (this._socket.onmessage = null),
                    (this._socket.onclose = null),
                    (this._socket.onerror = function () {}),
                    (this._socket = null)),
                  this._connectTimer &&
                    (clearTimeout(this._connectTimer),
                    (this._connectTimer = void 0)),
                  this.cancelQuery(),
                  (this._bufferedAmountQueryIntervalDelayMultiplier = 1),
                  (this._canSendNeeded = !1),
                  (this._state = g.DOWN),
                  (this._client = null)),
                this._eventCB &&
                  (this._eventCB(
                    new E(
                      T.DESTROYED_NOTICE,
                      e || "Session is destroyed",
                      null,
                      t || 0,
                      this._sessionId,
                    ),
                  ),
                  (this._eventCB = null)),
                _.OK
              );
            }
            getInfoStr() {
              return `WebSocketTransportSession; sid=${I(this._sessionId)}`;
            }
            static browserSupportsBinaryWebSockets() {
              const e = ["function", "object"];
              return R(e, typeof C) &&
                R(e, typeof ArrayBuffer) &&
                R(e, typeof Uint8Array)
                ? "binaryType" in C.prototype
                  ? (i(
                      "websocket browserSupportBinaryCheck: true - WebSocket supports binaryType",
                    ),
                    !0)
                  : (i(
                      "websocket browserSupportBinaryCheck: false - WebSocket does not support binaryType",
                    ),
                    !1)
                : (i(
                    "websocket browserSupportBinaryCheck: false - some required classes not supported",
                  ),
                  !1);
            }
          }
          d(
            A,
            class {
              scheduleQuery() {
                if (
                  this.getBufferedAmount() > 0 &&
                  this._bufferedAmountQueryIntervalInMsecs > 0
                ) {
                  this.cancelQuery(),
                    this._bufferedAmountQueryIntervalDelayMultiplier > 1 &&
                      (this._bufferedAmountQueryIntervalInMsecs,
                      this._bufferedAmountQueryIntervalDelayMultiplier);
                  const e =
                    this._bufferedAmountQueryIntervalInMsecs *
                    this._bufferedAmountQueryIntervalDelayMultiplier;
                  this._bufferedAmountQueryTimer = setTimeout(() => {
                    this.cancelQuery();
                    try {
                      this.onBufferedAmountPoll();
                    } catch (e) {
                      a(`Error occurred in onBufferedAmountPoll: ${e.message}`),
                        e.stack;
                    }
                  }, e);
                }
              }
              cancelQuery() {
                this._bufferedAmountQueryTimer &&
                  (clearTimeout(this._bufferedAmountQueryTimer),
                  (this._bufferedAmountQueryTimer = null));
              }
            },
          ),
            (e.exports.WebSocketTransportSession = A);
        },
        7882: (e, t, s) => {
          const { APIProperties: n } = s(3845),
            { APIPropertiesValidators: r } = s(9396),
            { ArrayUtils: i } = s(2273),
            { parseURL: o } = s(7567),
            { Process: a } = s(4672),
            { StringBuffer: c } = s(2901),
            { StringUtils: u } = s(3517),
            { TimingBucket: l } = s(9495),
            { UUID: h } = s(8632),
            { Version: d } = s(5686),
            p = s(1331);
          e.exports = {
            clone: p,
            parseURL: o,
            APIProperties: n,
            APIPropertiesValidators: r,
            ArrayUtils: i,
            Process: a,
            StringBuffer: c,
            StringUtils: u,
            TimingBucket: l,
            UUID: h,
            Version: d,
          };
        },
        9396: (e, t, s) => {
          const { Check: n } = s(2201),
            { ErrorSubcode: r, OperationError: i } = s(3870),
            o = {
              validateInstance(e, t, s, ...n) {
                n.forEach((n) => {
                  n.shift()(e, t, s, ...n);
                });
              },
              valInstance(e, t, s, r, o) {
                if (!n.instanceOf(t[s], r))
                  throw new i(
                    `${e} validation: Property '${s}' must be instance of ${o}`,
                  );
              },
              valNotEmpty(e, t, s) {
                if (n.none(t[s]) || "" === t[s])
                  throw new i(
                    `${e} validation: Property '${s}' cannot be empty.`,
                    r.PARAMETER_OUT_OF_RANGE,
                  );
              },
              valLength(e, t, s, o) {
                if (n.string(t[s]) && t[s].length > o)
                  throw new i(
                    `${e} validation: Property '${s}' exceeded max length ${o}`,
                    r.PARAMETER_OUT_OF_RANGE,
                  );
              },
              valRange(e, t, s, o, a) {
                if (n.number(t[s]) && (t[s] < o || t[s] > a))
                  throw new i(
                    `${e} validation: Property '${s}' out of range [${o}; ${a}].`,
                    r.PARAMETER_OUT_OF_RANGE,
                  );
              },
              valString(e, t, s) {
                if (!n.string(t[s]))
                  throw new i(
                    `${e} validation: Property '${s}' must be type string; was ${typeof t[s]}`,
                    r.PARAMETER_INVALID_TYPE,
                  );
              },
              valNumber(e, t, s) {
                if (!n.number(t[s]))
                  throw new i(
                    `${e} validation: Property '${s}' must be type number; was ${typeof t[s]}`,
                    r.PARAMETER_INVALID_TYPE,
                  );
              },
              valBoolean(e, t, s) {
                const o = t[s];
                if (!n.boolean(o))
                  throw new i(
                    `${e} validation: Property '${s}' must be type boolean; was ${typeof o}`,
                    r.PARAMETER_INVALID_TYPE,
                  );
              },
              valIsMember(e, t, s, n, o, a = !1) {
                const c = t[s];
                if (!((a && null == c) || n.values.indexOf(c) >= 0))
                  throw new i(
                    `${e} validation: Property '${s}'=${c} must be a member of ${o}`,
                    r.PARAMETER_INVALID_TYPE,
                  );
              },
              valStringOrArray(e, t, s) {
                const n = t[s];
                if ("string" != typeof n && !Array.isArray(n))
                  throw new i(
                    `${e} validation: Property '${s}' must be a string or array`,
                    r.PARAMETER_INVALID_TYPE,
                  );
              },
              valArrayIsMember(e, t, s, n, o, a, c, u) {
                if (null == t[s]) {
                  if (a) return;
                  throw new i(
                    `${e} validation: Property '${s}' must be type Array`,
                    r.PARAMETER_INVALID_TYPE,
                  );
                }
                if (!Array.isArray(t[s]))
                  throw new i(
                    `${e} validation: Property '${s}' must be type Array`,
                    r.PARAMETER_INVALID_TYPE,
                  );
                if (!c && 0 === t[s].length)
                  throw new i(
                    `${e} validation: Property '${s}' cannot be empty`,
                    r.PARAMETER_INVALID_TYPE,
                  );
                t[s].forEach((a, c) => {
                  if (!n.values.includes(a))
                    throw new i(
                      `${e} validation: Property '${s}' must be an array of ${o}`,
                      r.PARAMETER_INVALID_TYPE,
                    );
                  if (!u && t[s].indexOf(a, c + 1) >= 0)
                    throw new i(
                      `${e} validation: Property '${s}' cannot have duplicate element value`,
                      r.PARAMETER_OUT_OF_RANGE,
                    );
                });
              },
              valArrayOfString(e, t, s) {
                const o = t[s];
                if (n.something(o)) {
                  if (!Array.isArray(o))
                    throw new i(
                      `${e} validation: Property '${s}' must be type Array`,
                      r.PARAMETER_INVALID_TYPE,
                    );
                  o.forEach((t) => {
                    if ("string" != typeof t)
                      throw new i(
                        `${e} validation: Property '${s}' must be an array of string`,
                        r.PARAMETER_INVALID_TYPE,
                      );
                  });
                }
              },
              valTopicString(t, n, o) {
                const { DestinationUtil: a, DestinationType: c } = s(3170);
                e.exports.APIPropertiesValidators.valString(t, n, o);
                const u = n[o],
                  l = a.validateAndEncode(c.TOPIC, u);
                if (l.error)
                  throw new i(
                    `${t} validation: Property '${o}' must be a valid topic string: ${l.error}`,
                    r.PARAMETER_OUT_OF_RANGE,
                  );
              },
              valTopicStringOrEmpty(t, s, n) {
                const r = s[n];
                r &&
                  r.length &&
                  e.exports.APIPropertiesValidators.valTopicString(t, s, n);
              },
            };
          e.exports.APIPropertiesValidators = o;
        },
        3845: (e, t, s) => {
          var n = s(9489);
          const r = s(1331);
          e.exports.APIProperties = class {
            constructor(...e) {
              Object.assign(this, ...e);
            }
            toString() {
              return n(this);
            }
            clone() {
              return r(this, !1, 1);
            }
          };
        },
        2273: (e) => {
          e.exports.ArrayUtils = {
            flatten: function e(t) {
              return t.reduce(
                (t, s) => t.concat(Array.isArray(s) ? e(s) : s),
                [],
              );
            },
            includes: function (e, t) {
              return e.some((e) => e === t);
            },
          };
        },
        3196: (e) => {
          e.exports = function (e) {
            let t = !1;
            if (!e.forceJURL)
              try {
                const e = new URL("b", "http://a");
                (e.pathname = "c%20d"), (t = "http://a/c%20d" === e.href);
              } catch (e) {}
            if (t) return;
            const s = Object.create(null);
            (s.ftp = 21),
              (s.file = 0),
              (s.gopher = 70),
              (s.http = 80),
              (s.https = 443),
              (s.ws = 80),
              (s.wss = 443);
            const n = Object.create(null);
            function r() {
              (this._scheme = ""),
                (this._schemeData = ""),
                (this._username = ""),
                (this._password = null),
                (this._host = ""),
                (this._port = ""),
                (this._path = []),
                (this._query = ""),
                (this._fragment = ""),
                (this._isInvalid = !1),
                (this._isRelative = !1);
            }
            function i(e) {
              return void 0 !== s[e];
            }
            function o() {
              r.call(this), (this._isInvalid = !0);
            }
            function a(e) {
              return "" === e && o.call(this), e.toLowerCase();
            }
            function c(e) {
              const t = e.charCodeAt(0);
              return t > 32 &&
                t < 127 &&
                -1 === [34, 35, 60, 62, 63, 96].indexOf(t)
                ? e
                : encodeURIComponent(e);
            }
            function u(e) {
              const t = e.charCodeAt(0);
              return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 96].indexOf(t)
                ? e
                : encodeURIComponent(e);
            }
            let l;
            (n["%2e"] = "."),
              (n[".%2e"] = ".."),
              (n["%2e."] = ".."),
              (n["%2e%2e"] = "..");
            const h = /[a-zA-Z]/,
              d = /[a-zA-Z0-9+\-.]/;
            function p(e, t, r) {
              const p = [];
              function _(e) {
                p.push(e);
              }
              let E = t || "scheme start",
                T = 0,
                g = "",
                S = !1,
                m = !1;
              e: for (; (e[T - 1] !== l || 0 === T) && !this._isInvalid; ) {
                const p = e[T];
                switch (E) {
                  case "scheme start":
                    if (!p || !h.test(p)) {
                      if (t) {
                        _("Invalid scheme.");
                        break e;
                      }
                      (g = ""), (E = "no scheme");
                      continue;
                    }
                    (g += p.toLowerCase()), (E = "scheme");
                    break;
                  case "scheme":
                    if (p && d.test(p)) g += p.toLowerCase();
                    else {
                      if (":" !== p) {
                        if (t) {
                          if (l === p) break e;
                          _(`Code point not allowed in scheme: ${p}`);
                          break e;
                        }
                        (g = ""), (T = 0), (E = "no scheme");
                        continue;
                      }
                      if (((this._scheme = g), (g = ""), t)) break e;
                      i(this._scheme) && (this._isRelative = !0),
                        (E =
                          "file" === this._scheme
                            ? "relative"
                            : this._isRelative &&
                                r &&
                                r._scheme === this._scheme
                              ? "relative or authority"
                              : this._isRelative
                                ? "authority first slash"
                                : "scheme data");
                    }
                    break;
                  case "scheme data":
                    "?" === p
                      ? ((this._query = "?"), (E = "query"))
                      : "#" === p
                        ? ((this._fragment = "#"), (E = "fragment"))
                        : l !== p &&
                          "\t" !== p &&
                          "\n" !== p &&
                          "\r" !== p &&
                          (this._schemeData += c(p));
                    break;
                  case "no scheme":
                    if (r && i(r._scheme)) {
                      E = "relative";
                      continue;
                    }
                    _("Missing scheme."), o.call(this);
                    break;
                  case "relative or authority":
                    if ("/" !== p || "/" !== e[T + 1]) {
                      _(`Expected /, got: ${p}`), (E = "relative");
                      continue;
                    }
                    E = "authority ignore slashes";
                    break;
                  case "relative":
                    if (
                      ((this._isRelative = !0),
                      "file" !== this._scheme && (this._scheme = r._scheme),
                      l === p)
                    ) {
                      (this._host = r._host),
                        (this._port = r._port),
                        (this._path = r._path.slice()),
                        (this._query = r._query),
                        (this._username = r._username),
                        (this._password = r._password);
                      break e;
                    }
                    if ("/" === p || "\\" === p)
                      "\\" === p && _("\\ is an invalid code point."),
                        (E = "relative slash");
                    else if ("?" === p)
                      (this._host = r._host),
                        (this._port = r._port),
                        (this._path = r._path.slice()),
                        (this._query = "?"),
                        (this._username = r._username),
                        (this._password = r._password),
                        (E = "query");
                    else {
                      if ("#" !== p) {
                        const t = e[T + 1],
                          s = e[T + 2];
                        ("file" !== this._scheme ||
                          !h.test(p) ||
                          (":" !== t && "|" !== t) ||
                          (l !== s &&
                            "/" !== s &&
                            "\\" !== s &&
                            "?" !== s &&
                            "#" !== s)) &&
                          ((this._host = r._host),
                          (this._port = r._port),
                          (this._username = r._username),
                          (this._password = r._password),
                          (this._path = r._path.slice()),
                          this._path.pop()),
                          (E = "relative path");
                        continue;
                      }
                      (this._host = r._host),
                        (this._port = r._port),
                        (this._path = r._path.slice()),
                        (this._query = r._query),
                        (this._fragment = "#"),
                        (this._username = r._username),
                        (this._password = r._password),
                        (E = "fragment");
                    }
                    break;
                  case "relative slash":
                    if ("/" !== p && "\\" !== p) {
                      "file" !== this._scheme &&
                        ((this._host = r._host),
                        (this._port = r._port),
                        (this._username = r._username),
                        (this._password = r._password)),
                        (E = "relative path");
                      continue;
                    }
                    "\\" === p && _("\\ is an invalid code point."),
                      (E =
                        "file" === this._scheme
                          ? "file host"
                          : "authority ignore slashes");
                    break;
                  case "authority first slash":
                    if ("/" !== p) {
                      _(`Expected '/', got: ${p}`),
                        (E = "authority ignore slashes");
                      continue;
                    }
                    E = "authority second slash";
                    break;
                  case "authority second slash":
                    if (((E = "authority ignore slashes"), "/" !== p)) {
                      _(`Expected '/', got: ${p}`);
                      continue;
                    }
                    break;
                  case "authority ignore slashes":
                    if ("/" !== p && "\\" !== p) {
                      E = "authority";
                      continue;
                    }
                    _(`Expected authority, got: ${p}`);
                    break;
                  case "authority":
                    if ("@" === p) {
                      S && (_("@ already seen."), (g += "%40")), (S = !0);
                      for (let e = 0; e < g.length; e++) {
                        const t = g[e];
                        if ("\t" === t || "\n" === t || "\r" === t) {
                          _("Invalid whitespace in authority.");
                          continue;
                        }
                        if (":" === t && null === this._password) {
                          this._password = "";
                          continue;
                        }
                        const s = c(t);
                        null !== this._password
                          ? (this._password += s)
                          : (this._username += s);
                      }
                      g = "";
                    } else {
                      if (
                        l === p ||
                        "/" === p ||
                        "\\" === p ||
                        "?" === p ||
                        "#" === p
                      ) {
                        (T -= g.length), (g = ""), (E = "host");
                        continue;
                      }
                      g += p;
                    }
                    break;
                  case "file host":
                    if (
                      l === p ||
                      "/" === p ||
                      "\\" === p ||
                      "?" === p ||
                      "#" === p
                    ) {
                      2 !== g.length ||
                      !h.test(g[0]) ||
                      (":" !== g[1] && "|" !== g[1])
                        ? (0 === g.length ||
                            ((this._host = a.call(this, g)), (g = "")),
                          (E = "relative path start"))
                        : (E = "relative path");
                      continue;
                    }
                    "\t" === p || "\n" === p || "\r" === p
                      ? _("Invalid whitespace in file host.")
                      : (g += p);
                    break;
                  case "host":
                  case "hostname":
                    if (":" !== p || m) {
                      if (
                        l === p ||
                        "/" === p ||
                        "\\" === p ||
                        "?" === p ||
                        "#" === p
                      ) {
                        if (
                          ((this._host = a.call(this, g)),
                          (g = ""),
                          (E = "relative path start"),
                          t)
                        )
                          break e;
                        continue;
                      }
                      "\t" !== p && "\n" !== p && "\r" !== p
                        ? ("[" === p ? (m = !0) : "]" === p && (m = !1),
                          (g += p))
                        : _(`Invalid code point in host/hostname: ${p}`);
                    } else if (
                      ((this._host = a.call(this, g)),
                      (g = ""),
                      (E = "port"),
                      "hostname" === t)
                    )
                      break e;
                    break;
                  case "port":
                    if (/[0-9]/.test(p)) g += p;
                    else {
                      if (
                        l === p ||
                        "/" === p ||
                        "\\" === p ||
                        "?" === p ||
                        "#" === p ||
                        t
                      ) {
                        if ("" !== g) {
                          const e = parseInt(g, 10);
                          e !== s[this._scheme] && (this._port = `${e}`),
                            (g = "");
                        }
                        if (t) break e;
                        E = "relative path start";
                        continue;
                      }
                      "\t" === p || "\n" === p || "\r" === p
                        ? _(`Invalid code point in port: ${p}`)
                        : o.call(this);
                    }
                    break;
                  case "relative path start":
                    if (
                      ("\\" === p && _("'\\' not allowed in path."),
                      (E = "relative path"),
                      "/" !== p && "\\" !== p)
                    )
                      continue;
                    break;
                  case "relative path":
                    if (
                      l !== p &&
                      "/" !== p &&
                      "\\" !== p &&
                      (t || ("?" !== p && "#" !== p))
                    )
                      "\t" !== p && "\n" !== p && "\r" !== p && (g += c(p));
                    else {
                      "\\" === p && _("\\ not allowed in relative path.");
                      const e = n[g.toLowerCase()];
                      e && (g = e),
                        ".." === g
                          ? (this._path.pop(),
                            "/" !== p && "\\" !== p && this._path.push(""))
                          : "." === g && "/" !== p && "\\" !== p
                            ? this._path.push("")
                            : "." !== g &&
                              ("file" === this._scheme &&
                                0 === this._path.length &&
                                2 === g.length &&
                                h.test(g[0]) &&
                                "|" === g[1] &&
                                (g = `${g[0]}:`),
                              this._path.push(g)),
                        (g = ""),
                        "?" === p
                          ? ((this._query = "?"), (E = "query"))
                          : "#" === p &&
                            ((this._fragment = "#"), (E = "fragment"));
                    }
                    break;
                  case "query":
                    t || "#" !== p
                      ? l !== p &&
                        "\t" !== p &&
                        "\n" !== p &&
                        "\r" !== p &&
                        (this._query += u(p))
                      : ((this._fragment = "#"), (E = "fragment"));
                    break;
                  case "fragment":
                    l !== p &&
                      "\t" !== p &&
                      "\n" !== p &&
                      "\r" !== p &&
                      (this._fragment += p);
                }
                T++;
              }
            }
            function _(e, t) {
              void 0 === t || t instanceof _ || (t = new _(String(t))),
                (e = String(e)),
                (this._url = e),
                r.call(this);
              const s = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
              p.call(this, s, null, t);
            }
            _.prototype = {
              toString() {
                return this.href;
              },
              get href() {
                if (this._isInvalid) return this._url;
                let e = "";
                return (
                  ("" === this._username && null === this._password) ||
                    (e =
                      this._username +
                      (null !== this._password ? `:${this._password}` : "") +
                      "@"),
                  this.protocol +
                    (this._isRelative ? `//${e}${this.host}` : "") +
                    this.pathname +
                    this._query +
                    this._fragment
                );
              },
              set href(e) {
                r.call(this), p.call(this, e);
              },
              get protocol() {
                return `${this._scheme}:`;
              },
              set protocol(e) {
                this._isInvalid || p.call(this, `${e}:`, "scheme start");
              },
              get host() {
                return this._isInvalid
                  ? ""
                  : this._port
                    ? `${this._host}:${this._port}`
                    : this._host;
              },
              set host(e) {
                !this._isInvalid && this._isRelative && p.call(this, e, "host");
              },
              get hostname() {
                return this._host;
              },
              set hostname(e) {
                !this._isInvalid &&
                  this._isRelative &&
                  p.call(this, e, "hostname");
              },
              get port() {
                return this._port;
              },
              set port(e) {
                !this._isInvalid && this._isRelative && p.call(this, e, "port");
              },
              get pathname() {
                return this._isInvalid
                  ? ""
                  : this._isRelative
                    ? `/${this._path.join("/")}`
                    : this._schemeData;
              },
              set pathname(e) {
                !this._isInvalid &&
                  this._isRelative &&
                  ((this._path = []), p.call(this, e, "relative path start"));
              },
              get search() {
                return this._isInvalid || !this._query || "?" === this._query
                  ? ""
                  : this._query;
              },
              set search(e) {
                !this._isInvalid &&
                  this._isRelative &&
                  ((this._query = "?"),
                  "?" === e[0] && (e = e.slice(1)),
                  p.call(this, e, "query"));
              },
              get hash() {
                return this._isInvalid ||
                  !this._fragment ||
                  "#" === this._fragment
                  ? ""
                  : this._fragment;
              },
              set hash(e) {
                this._isInvalid ||
                  ((this._fragment = "#"),
                  "#" === e[0] && (e = e.slice(1)),
                  p.call(this, e, "fragment"));
              },
              get origin() {
                if (this._isInvalid || !this._scheme) return "";
                switch (this._scheme) {
                  case "data":
                  case "file":
                  case "javascript":
                  case "mailto":
                    return "null";
                }
                const e = this.host;
                return e ? `${this._scheme}://${e}` : "";
              },
            };
            const E = e.URL;
            E &&
              ((_.createObjectURL = function (...e) {
                return E.createObjectURL(...e);
              }),
              (_.revokeObjectURL = function (e) {
                E.revokeObjectURL(e);
              })),
              (e.URL = _);
          };
        },
        1331: (e, t, s) => {
          "use strict";
          var n = s(8764).lW;
          const r = (function () {
            function e(e, t) {
              return null != t && e instanceof t;
            }
            let t, s, r;
            try {
              t = Map;
            } catch (e) {
              t = function () {};
            }
            try {
              s = Set;
            } catch (e) {
              s = function () {};
            }
            try {
              r = Promise;
            } catch (e) {
              r = function () {};
            }
            function i(o, c, u, l, h) {
              "object" == typeof c &&
                ((u = c.depth),
                (l = c.prototype),
                (h = c.includeNonEnumerable),
                (c = c.circular));
              const d = [],
                p = [],
                _ = void 0 !== n;
              return (
                void 0 === c && (c = !0),
                void 0 === u && (u = 1 / 0),
                (function o(u, E) {
                  if (null === u) return null;
                  if (0 === E) return u;
                  let T, g;
                  if ("object" != typeof u) return u;
                  if (e(u, t)) T = new t();
                  else if (e(u, s)) T = new s();
                  else if (e(u, r))
                    T = new r(function (e, t) {
                      u.then(
                        function (t) {
                          e(o(t, E - 1));
                        },
                        function (e) {
                          t(o(e, E - 1));
                        },
                      );
                    });
                  else if (i.__isArray(u)) T = [];
                  else if (i.__isRegExp(u))
                    (T = new RegExp(u.source, a(u))),
                      u.lastIndex && (T.lastIndex = u.lastIndex);
                  else if (i.__isDate(u)) T = new Date(u.getTime());
                  else {
                    if (_ && n.isBuffer(u))
                      return (
                        (T = n.allocUnsafe
                          ? n.allocUnsafe(u.length)
                          : new n(u.length)),
                        u.copy(T),
                        T
                      );
                    e(u, Error)
                      ? (T = Object.create(u))
                      : void 0 === l
                        ? ((g = Object.getPrototypeOf(u)),
                          (T = Object.create(g)))
                        : ((T = Object.create(l)), (g = l));
                  }
                  if (c) {
                    const e = d.indexOf(u);
                    if (-1 != e) return p[e];
                    d.push(u), p.push(T);
                  }
                  if (e(u, t)) {
                    let e, t;
                    u.forEach(function (s, n) {
                      (e = o(n, E - 1)), (t = o(s, E - 1)), T.set(e, t);
                    });
                  }
                  if (e(u, s)) {
                    let e;
                    u.forEach(function (t) {
                      (e = o(t, E - 1)), T.add(e);
                    });
                  }
                  for (let e in u) {
                    let t;
                    g && (t = Object.getOwnPropertyDescriptor(g, e)),
                      (t && null == t.set) || (T[e] = o(u[e], E - 1));
                  }
                  if (Object.getOwnPropertySymbols) {
                    const e = Object.getOwnPropertySymbols(u);
                    for (let t = 0; t < e.length; t++) {
                      let s = e[t],
                        n = Object.getOwnPropertyDescriptor(u, s);
                      (!n || n.enumerable || h) &&
                        ((T[s] = o(u[s], E - 1)),
                        n.enumerable ||
                          Object.defineProperty(T, s, { enumerable: !1 }));
                    }
                  }
                  if (h) {
                    const e = Object.getOwnPropertyNames(u);
                    for (let t = 0; t < e.length; t++) {
                      let s = e[t],
                        n = Object.getOwnPropertyDescriptor(u, s);
                      (n && n.enumerable) ||
                        ((T[s] = o(u[s], E - 1)),
                        Object.defineProperty(T, s, { enumerable: !1 }));
                    }
                  }
                  return T;
                })(o, u)
              );
            }
            function o(e) {
              return Object.prototype.toString.call(e);
            }
            function a(e) {
              let t = "";
              return (
                e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                t
              );
            }
            return (
              (i.clonePrototype = function (e) {
                if (null === e) return null;
                let t = function () {};
                return (t.prototype = e), new t();
              }),
              (i.__objToStr = o),
              (i.__isDate = function (e) {
                return "object" == typeof e && "[object Date]" === o(e);
              }),
              (i.__isArray = function (e) {
                return "object" == typeof e && "[object Array]" === o(e);
              }),
              (i.__isRegExp = function (e) {
                return "object" == typeof e && "[object RegExp]" === o(e);
              }),
              (i.__getRegExpFlags = a),
              i
            );
          })();
          e.exports = r;
        },
        4672: (e, t, s) => {
          const n = {
              6.4: "10.0",
              6.3: "8.1",
              6.2: "8",
              6.1: "7",
              "6.0": "Vista",
              5.2: "Server 2003",
              5.1: "XP",
              5.01: "2000 SP1",
              "5.0": "2000",
              "4.0": "4.0",
            },
            r = "undefined" != typeof window ? window : s.g,
            i =
              (r.process,
              { product: "solclientjs", platform: "unknown", agent: "Gecko" });
          try {
            if (r.navigator) {
              const e = (e) => e.replace(/[^a-zA-Z0-9_/.]/g, "-");
              Object.assign(i, {
                platform: r.navigator.platform,
                agent: r.navigator.product,
                description: e(r.navigator.userAgent),
                navigator: r.navigator,
              });
              const t = (function () {
                if ("undefined" == typeof navigator || !navigator) return null;
                const e = navigator.userAgent,
                  t = {
                    browser: { name: "unknown", version: "0.0.0" },
                    platform: {
                      os: "unknown",
                      arch: "unknown",
                      version: "unknown",
                    },
                  },
                  s = (...t) => t.some((t) => e.indexOf(t) >= 0),
                  r = (...e) => e.filter(Boolean).shift();
                Object.assign(
                  t,
                  [
                    ["edge", /Edge\/([0-9._]+)/],
                    [
                      "chrome",
                      /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/,
                    ],
                    ["firefox", /Firefox\/([0-9.]+)(?:\s|$)/],
                    ["opera", /Opera\/([0-9.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9.]+)(:?\s|$)$/],
                    ["ie", /Trident\/7\.0.*rv:([0-9.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9.]+);.*Trident\/[4-8].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9.]+)/],
                    ["android", /Android\s([0-9.]+)/],
                    ["ios", /Version\/([0-9._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9._]+).*Safari/],
                  ]
                    .map(([t, s]) => {
                      if (!s.test(e)) return !1;
                      const n = s.exec(e),
                        r = (n && n[1].split(/[._]/).slice(0, 3)).map((e) =>
                          parseInt(e, 10),
                        );
                      for (; r.length < 3; ) r.push(0);
                      return { browser: { name: t, version: r.join(".") } };
                    })
                    .filter(Boolean)
                    .shift(),
                );
                const i = r(
                    s("Windows Phone") && "WindowsPhone",
                    s("Windows") && "Windows",
                    s("Linux") && "Linux",
                    s("like Mac OS X") && "iOS",
                    s("OS X") && "OSX",
                    s("Android", "Adr") && "Android",
                    s("BB10", "RIM Tablet OS", "BlackBerry") && "BlackBerry",
                  ),
                  o = {
                    Windows: () =>
                      r(
                        s("Win16") && "3.1.1",
                        s("Windows CE") && "CE",
                        s("Windows 95") && "4.00.950",
                        s("Windows 98; Win 9x 4.90") && "4.90",
                        s("Windows 98") && "4.10",
                        (() => {
                          const t = e.match(/\(.+?\)/)[0];
                          return (
                            !!t &&
                            r(
                              ...Object.keys(n).map((e) => {
                                return (s = e), t.indexOf(s) >= 0 && n[e];
                                var s;
                              }),
                            )
                          );
                        })(),
                      ),
                    OSX: () => e.match(/OS X ((\d+[._])+\d+)\b/)[1],
                    Linux: () => "",
                    iOS: () => e.match(/OS ((\d+[._])+\d+) like Mac OS X/)[1],
                    Android: () =>
                      e.match(/(?:Android|Adr) ((\d+[._])+\d_)/)[1],
                    BlackBerry: () =>
                      e.match(/(?:Version\/|RIM Tablet OS )((\d+\.)+\d+)/)[1],
                  }[i];
                return (
                  (t.platform.os = i || "Unknown"),
                  (t.platform.version = ((o && o()) || "0.0.0").replace(
                    /_/g,
                    ".",
                  )),
                  t
                );
              })();
              t &&
                ((i.agent = e(`${t.browser.name}-${t.browser.version}`)),
                (i.platform = `${i.agent}-${e(`${t.platform.os}-${t.platform.version}`)}`));
            }
          } catch (e) {}
          const o = Object.assign({}, {}, i, {});
          e.exports.Process = o;
        },
        2901: (e) => {
          e.exports.StringBuffer = class {
            constructor(...e) {
              this.clear(), this.append(...e);
            }
            append(...e) {
              return (
                [...e].forEach((e) => {
                  this.buffer[this.index++] = String(e);
                }),
                this
              );
            }
            clear() {
              (this.buffer = []), (this.index = 0);
            }
            toString() {
              return this.buffer.join("");
            }
          };
        },
        3517: (e, t, s) => {
          const { StringBuffer: n } = s(2901),
            r = (() => {
              const e = [];
              for (let t = 0; t < 256; ++t)
                e[t] = t < 33 || t > 126 ? "." : String.fromCharCode(t);
              return e;
            })();
          function i(e, t, s, r = " ") {
            if ("string" != typeof e) return e;
            if (e.length >= t) return e;
            const i = new n();
            for (let s = 0; s < t - e.length; s++) i.append(r.charAt(0));
            switch (s) {
              case 0:
                return `${i}${e}`;
              case 1:
                return `${e}${i}`;
              default:
                return e;
            }
          }
          function o(e, t) {
            if (!t.length) return e;
            const s = t.match(/^\s*/)[0].length;
            return s < e ? s : e;
          }
          function a(e) {
            return `${e.charAt(0).toUpperCase()}${e.substr(1)}`;
          }
          function c(e) {
            return null == e || 0 === e.length;
          }
          const u = {
            capitalize: function (e) {
              return e && e.length ? e.split(" ").map(a).join(" ") : e;
            },
          };
          (u.isEmpty = c),
            (u.notEmpty = function (e) {
              return !c(e);
            }),
            (u.toSafeChars = function (e) {
              return e.replace(/[^a-zA-Z0-9_/.]/g, "");
            }),
            (u.padLeft = function (e, t, s) {
              return i(e, t, 0, s);
            }),
            (u.padRight = function (e, t, s) {
              return i(e, t, 1, s);
            }),
            (u.nullTerminate = function (e) {
              if (null == e) throw new Error("non str in nullTerminate");
              return 0 === e.charCodeAt(e.length - 1)
                ? e
                : e + String.fromCharCode(0);
            }),
            (u.stripNullTerminate = function (e) {
              if (null == e) throw new Error("null str in stripNullTerminate");
              return 0 === e.charCodeAt(e.length - 1)
                ? e.substr(0, e.length - 1)
                : e;
            }),
            (u.hexdump = function (e) {
              const t = new n(),
                s = new n(),
                o = (e) => (8 === e || 16 === e ? "  " : " ");
              let a = 0;
              for (let n = 0, c = e.length; n < c; n++) {
                const c = e.charCodeAt(n);
                if (
                  (t.append(i(c.toString(16), 2, 0)),
                  s.append(r[c] || "."),
                  t.append(o(++a)),
                  n === e.length - 1)
                )
                  for (; a < 16; ) t.append(`  ${o(++a)}`);
                16 === a &&
                  (t.append(s.join("")), t.append("\n"), (a = 0), s.clear());
              }
              return t.toString();
            }),
            (u.heredoc = function (e, ...t) {
              const s = [...t, ""],
                n = e
                  .map((e) => e + s.shift())
                  .join("")
                  .split(/\r?\n/),
                r = 1 === n.length ? 0 : n.reduce(o, 1 / 0);
              for (; "" === n[0]; ) n.shift();
              return n.map((e) => e.substring(r)).join("\n");
            }),
            (e.exports.StringUtils = u);
        },
        9495: (e) => {
          e.exports.TimingBucket = class {
            constructor(e, t) {
              (this.name = e), (this.interval = t), (this.buckets = []);
            }
            get bucketCount() {
              let e = 0;
              for (let t = 0, s = this.buckets.length; t < s; ++t)
                e += this.buckets[t] || 0;
              return e;
            }
            log(e) {
              if (void 0 === e || isNaN(e)) return;
              const t = Math.floor(e / this.interval) * this.interval;
              (this.buckets[t] = this.buckets[t] || 0), this.buckets[t]++;
            }
            toString() {
              const e = [];
              return (
                this.buckets.forEach((t) => {
                  e.push(`${t}: ${this.buckets[t]}`);
                }),
                `{${e.join(", ")}}`
              );
            }
          };
        },
        7567: function (e, t, s) {
          let n;
          {
            const e = "undefined" != typeof window ? window : this;
            s(3196)(e),
              (n = function (...e) {
                return new URL(...e);
              });
          }
          e.exports.parseURL = n;
        },
        8632: (e) => {
          e.exports.UUID = {
            generateUUID: function () {
              let e = new Date().getTime();
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                (t) => {
                  const s = (e + 16 * Math.random()) % 16 | 0;
                  return (
                    (e = Math.floor(e / 16)),
                    ("x" === t ? s : (3 & s) | 8).toString(16)
                  );
                },
              );
            },
          };
        },
        5686: (e) => {
          const t = new Date(
              Date.parse(
                "Wed Sep 27 2023 13:25:05 GMT-0400 (Eastern Daylight Time)",
              ),
            ),
            s = "RELEASE",
            n = (() => {
              const e = (e) => (e < 10 ? `0${e}` : e),
                s = t;
              return `${s.getFullYear()}/${e(s.getMonth() + 1)}/${e(s.getDate())} ${e(s.getHours())}:${e(s.getMinutes())}`;
            })(),
            r = ["SolclientJS", "10.15.0", s, n].join(", "),
            i = {
              version: "10.15.0",
              date: t,
              formattedDate: n,
              target: { name: "browser", node: !1, browser: !0 },
              mode: s,
              debug: !1,
              release: !0,
              summary: r,
              toString: () => r,
            };
          e.exports.Version = i;
        },
        2201: (e, t, s) => {
          const { Check: n } = s(2595),
            { Parameter: r } = s(6362);
          (e.exports.Check = n), (e.exports.Parameter = r);
        },
        9070: (e) => {
          function t(e) {
            return e.reduce(
              (e, s) => e.concat(Array.isArray(s) ? t(s) : s),
              [],
            );
          }
          const s = (() => {
            const e = {
              nothing: (e) => null == e,
              anything: (e) => !s.nothing(e),
              undefined: (e) => void 0 === e,
              defined: (e) => !s.undefined(e),
              array: (e) => s.anything(e) && Array.isArray(e),
              object: (e) =>
                !s.array(e) &&
                null !== e &&
                ("object" == typeof e || e instanceof Object),
              instanceOf: (e, t) => s.object(e) && e instanceof t,
              type: (e, t) => typeof e === t,
              instanceOfAny: (e, ...n) =>
                s.array(n) && t(n).some((t) => s.instanceOf(e, t)),
              empty: (e) =>
                !!s.nothing(e) ||
                !(!s.object(e) || 0 !== Object.keys(e).length) ||
                0 === e.length,
              truthy: (e, t) => !!t(e),
              rangeGe: (e, t) => e >= t,
              rangeGt: (e, t) => e > t,
              rangeLe: (e, t) => e <= t,
              rangeLt: (e, t) => e < t,
              rangeCompare(e, t, s, ...n) {
                switch (t) {
                  case "=":
                  case "==":
                  case "===":
                    return e === s;
                  case "~=":
                  case "=~": {
                    const t = n[0] || 1e6;
                    return Math.abs(e - s) < t;
                  }
                  case "<":
                    return e < s;
                  case "<=":
                    return e <= s;
                  case ">":
                    return e > s;
                  case ">=":
                    return e >= s;
                  default:
                    throw new Error(`Illegal operator for rangeCompare: ${t}`);
                }
              },
              NaN: (e) => Number.isNaN(e),
              included(e, t) {
                if (s.nothing(t)) return !1;
                if (t.includes) return t.includes(e);
                if (Array.isArray(t)) return t.indexOf(e) >= 0;
                if (s.object(t)) {
                  const n = Object.keys(t);
                  return s.included(e, n);
                }
                return !1;
              },
              equal: (e, t) => e === t,
              member: (e, t) =>
                s.anything(t) &&
                (s.array(t)
                  ? s.included(e, t)
                  : Object.keys(t).some((s) => t[s] === e)),
              boolean: (e) => s.type(e, "boolean"),
              number: (e) => s.type(e, "number"),
              string: (e) => s.type(e, "string"),
              function: (e) => s.type(e, "function"),
            };
            return (
              (e.none = e.nothing),
              (e.something = e.anything),
              Object.keys(e).forEach((t) => {
                (e[t].orNull = function (s, ...n) {
                  return null === s || e[t](s, ...n);
                }),
                  (e[t].orUndefined = function (s, ...n) {
                    return void 0 === s || e[t](s, ...n);
                  }),
                  (e[t].orNothing = function (s, ...n) {
                    return e.nothing(s) || e[t](s, ...n);
                  });
              }),
              e
            );
          })();
          e.exports.BaseChecks = s;
        },
        2595: (e, t, s) => {
          const { BaseChecks: n } = s(9070);
          function r(e) {
            return { then: e ? (e) => e() : (e, t) => t() };
          }
          const i = (() => {
            const e = Object.assign({}, n);
            return (e.when = (e) => r(e)), (e.unless = (e) => r(!e)), e;
          })();
          e.exports.Check = i;
        },
        6362: (e, t, s) => {
          const { Check: n } = s(2595),
            { ErrorSubcode: r, OperationError: i } = s(3870),
            o = {};
          function a(e, t = null, s = o) {
            const n = t ? `; expected: ${t}` : "",
              i = s !== o ? `; got: ${s}` : "";
            return e === r.PARAMETER_INVALID_TYPE
              ? `Parameter type was invalid${n}${i}`
              : r.nameOf(e).toLowerCase().replace(/_/, " ") + n;
          }
          function c(e, t, s, n, r, ...o) {
            return n(r, ...o)
              ? r
              : (function (e, t, s) {
                  throw new i(`Parameter ${e} failed validation`, t, s);
                })(e, t, s);
          }
          const u = (e) =>
              (e && e.constructor && e.constructor.name) || typeof e,
            l = {
              isArray: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "array", t),
              ) {
                return c(e, s, i, n.isArray, t);
              },
              isBoolean: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "boolean", t),
              ) {
                return c(e, s, i, n.boolean, t);
              },
              isBooleanOrNothing: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "boolean or nothing", t),
              ) {
                return c(e, s, i, n.boolean.orNothing, t);
              },
              isEnumMember: function (
                e,
                t,
                s,
                i = r.PARAMETER_OUT_OF_RANGE,
                o = a(i, `one of [${s.names.join(", ")}]`, t),
              ) {
                return c(e, i, o, n.member, t, s);
              },
              isEnumMemberOrNothing: function (
                e,
                t,
                s,
                i = r.PARAMETER_OUT_OF_RANGE,
                o = a(i, `one of [${s.names.join(", ")}]`, t),
              ) {
                return c(e, i, o, n.member.orNothing, t, s);
              },
              isFunction: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "function", t),
              ) {
                return c(e, s, i, n.function, t);
              },
              isFunctionOrNothing: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "function or nothing", t),
              ) {
                return c(e, s, i, n.function.orNothing, t);
              },
              isInstanceOf: function (
                e,
                t,
                s,
                i = r.PARAMETER_INVALID_TYPE,
                o = a(i, s.name, u(t)),
              ) {
                return c(e, i, o, n.instanceOf, t, s);
              },
              isInstanceOfOrNothing: function (
                e,
                t,
                s,
                i = r.PARAMETER_INVALID_TYPE,
                o = a(i, `${s.name} or nothing`, u(t)),
              ) {
                return c(e, i, o, n.instanceOf.orNothing, t, s);
              },
              isInstanceOfOrNull: function (
                e,
                t,
                s,
                i = r.PARAMETER_INVALID_TYPE,
                o = a(i, `${s.name} or null`, u(t)),
              ) {
                return c(e, i, o, n.instanceOf.orNull, t, s);
              },
              isInstanceOfOrUndefined: function (
                e,
                t,
                s,
                i = r.PARAMETER_INVALID_TYPE,
                o = a(i, `${s.name} or undefined`, u(t)),
              ) {
                return c(e, i, o, n.instanceOf.orUndefined, t, s);
              },
              isMember: function (
                e,
                t,
                s,
                i = r.PARAMETER_OUT_OF_RANGE,
                o = a(
                  i,
                  `one of ${s.name}.[${(function (e) {
                    return Object.keys(e).map((t) => e[t]);
                  })(s).join(", ")}]`,
                  t,
                ),
              ) {
                return c(e, i, o, n.member, t, s);
              },
              isNumber: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "number", t),
              ) {
                return c(e, s, i, n.number, t);
              },
              isNumberOrNothing: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "number or nothing", t),
              ) {
                return c(e, s, i, n.number.orNothing, t);
              },
              isNumberOrNull: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "number or null", t),
              ) {
                return c(e, s, i, n.number.orNull, t);
              },
              isRangeCompare: function (
                e,
                t,
                s,
                i,
                o = r.PARAMETER_OUT_OF_RANGE,
                u = a(o, `${s} ${i}`, t),
              ) {
                return c(e, o, u, n.rangeCompare, t, s, i);
              },
              isRangeCompareOrNothing: function (
                e,
                t,
                s,
                i,
                o = r.PARAMETER_OUT_OF_RANGE,
                u = a(o, `${s} ${i} or nothing`, t),
              ) {
                return c(e, o, u, n.rangeCompare.orNothing, t, s, i);
              },
              isStringOrNull: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "string or null", t),
              ) {
                return c(e, s, i, n.string.orNull, t);
              },
              isString: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "string", t),
              ) {
                return c(e, s, i, n.string, t);
              },
              isStringOrNothing: function (
                e,
                t,
                s = r.PARAMETER_INVALID_TYPE,
                i = a(s, "string or nothing", t),
              ) {
                return c(e, s, i, n.string.orNothing, t);
              },
              isValue: function (
                e,
                t,
                s,
                i = r.PARAMETER_OUT_OF_RANGE,
                o = a(i, `must be ${t}`),
              ) {
                return c(e, i, o, n.equal, t, s);
              },
            };
          e.exports.Parameter = l;
        },
        9742: (e, t) => {
          "use strict";
          (t.byteLength = function (e) {
            var t = a(e),
              s = t[0],
              n = t[1];
            return (3 * (s + n)) / 4 - n;
          }),
            (t.toByteArray = function (e) {
              var t,
                s,
                i = a(e),
                o = i[0],
                c = i[1],
                u = new r(
                  (function (e, t, s) {
                    return (3 * (t + s)) / 4 - s;
                  })(0, o, c),
                ),
                l = 0,
                h = c > 0 ? o - 4 : o;
              for (s = 0; s < h; s += 4)
                (t =
                  (n[e.charCodeAt(s)] << 18) |
                  (n[e.charCodeAt(s + 1)] << 12) |
                  (n[e.charCodeAt(s + 2)] << 6) |
                  n[e.charCodeAt(s + 3)]),
                  (u[l++] = (t >> 16) & 255),
                  (u[l++] = (t >> 8) & 255),
                  (u[l++] = 255 & t);
              return (
                2 === c &&
                  ((t =
                    (n[e.charCodeAt(s)] << 2) | (n[e.charCodeAt(s + 1)] >> 4)),
                  (u[l++] = 255 & t)),
                1 === c &&
                  ((t =
                    (n[e.charCodeAt(s)] << 10) |
                    (n[e.charCodeAt(s + 1)] << 4) |
                    (n[e.charCodeAt(s + 2)] >> 2)),
                  (u[l++] = (t >> 8) & 255),
                  (u[l++] = 255 & t)),
                u
              );
            }),
            (t.fromByteArray = function (e) {
              for (
                var t,
                  n = e.length,
                  r = n % 3,
                  i = [],
                  o = 16383,
                  a = 0,
                  u = n - r;
                a < u;
                a += o
              )
                i.push(c(e, a, a + o > u ? u : a + o));
              return (
                1 === r
                  ? ((t = e[n - 1]),
                    i.push(s[t >> 2] + s[(t << 4) & 63] + "=="))
                  : 2 === r &&
                    ((t = (e[n - 2] << 8) + e[n - 1]),
                    i.push(
                      s[t >> 10] + s[(t >> 4) & 63] + s[(t << 2) & 63] + "=",
                    )),
                i.join("")
              );
            });
          for (
            var s = [],
              n = [],
              r = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              i =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              o = 0;
            o < 64;
            ++o
          )
            (s[o] = i[o]), (n[i.charCodeAt(o)] = o);
          function a(e) {
            var t = e.length;
            if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var s = e.indexOf("=");
            return -1 === s && (s = t), [s, s === t ? 0 : 4 - (s % 4)];
          }
          function c(e, t, n) {
            for (var r, i, o = [], a = t; a < n; a += 3)
              (r =
                ((e[a] << 16) & 16711680) +
                ((e[a + 1] << 8) & 65280) +
                (255 & e[a + 2])),
                o.push(
                  s[((i = r) >> 18) & 63] +
                    s[(i >> 12) & 63] +
                    s[(i >> 6) & 63] +
                    s[63 & i],
                );
            return o.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        9489: (e) => {
          function t(e, t) {
            var o = { seen: [], stylize: s };
            return (
              arguments.length >= 3 && (o.depth = arguments[2]),
              arguments.length >= 4 && (o.colors = arguments[3]),
              n(t)
                ? (o.showHidden = t)
                : t &&
                  (function (e, t) {
                    if (!t || !h(t)) return e;
                    for (var s = Object.keys(t), n = s.length; n--; )
                      e[s[n]] = t[s[n]];
                  })(o, t),
              r(o.showHidden) && (o.showHidden = !1),
              r(o.depth) && (o.depth = 2),
              r(o.colors) && (o.colors = !1),
              r(o.customInspect) && (o.customInspect = !0),
              o.colors && (o.stylize = i),
              T(o, e, o.depth)
            );
          }
          function s(e, t) {
            return e;
          }
          function n(e) {
            return "boolean" == typeof e;
          }
          function r(e) {
            return void 0 === e;
          }
          function i(e, s) {
            var n = t.styles[s];
            return n
              ? "[" + t.colors[n][0] + "m" + e + "[" + t.colors[n][1] + "m"
              : e;
          }
          function o(e) {
            return "function" == typeof e;
          }
          function a(e) {
            return "string" == typeof e;
          }
          function c(e) {
            return null === e;
          }
          function u(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function l(e) {
            return h(e) && "[object RegExp]" === _(e);
          }
          function h(e) {
            return "object" == typeof e && null !== e;
          }
          function d(e) {
            return h(e) && ("[object Error]" === _(e) || e instanceof Error);
          }
          function p(e) {
            return h(e) && "[object Date]" === _(e);
          }
          function _(e) {
            return Object.prototype.toString.call(e);
          }
          function E(e) {
            return "[" + Error.prototype.toString.call(e) + "]";
          }
          function T(e, s, i) {
            if (
              e.customInspect &&
              s &&
              o(s.inspect) &&
              s.inspect !== t &&
              (!s.constructor || s.constructor.prototype !== s)
            ) {
              var h = s.inspect(i, e);
              return a(h) || (h = T(e, h, i)), h;
            }
            var _ = (function (e, t) {
              if (r(t)) return e.stylize("undefined", "undefined");
              if (a(t)) {
                var s =
                  "'" +
                  JSON.stringify(t)
                    .replace(/^"|"$/g, "")
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return e.stylize(s, "string");
              }
              return "number" == typeof t
                ? e.stylize("" + t, "number")
                : n(t)
                  ? e.stylize("" + t, "boolean")
                  : c(t)
                    ? e.stylize("null", "null")
                    : void 0;
            })(e, s);
            if (_) return _;
            var S = Object.keys(s),
              m = (function (e) {
                var t = {};
                return (
                  e.forEach(function (e, s) {
                    t[e] = !0;
                  }),
                  t
                );
              })(S);
            try {
              e.showHidden &&
                Object.getOwnPropertyNames &&
                (S = Object.getOwnPropertyNames(s));
            } catch (e) {}
            if (
              d(s) &&
              (S.indexOf("message") >= 0 || S.indexOf("description") >= 0)
            )
              return E(s);
            if (0 === S.length) {
              if (o(s)) {
                var f = s.name ? ": " + s.name : "";
                return e.stylize("[Function" + f + "]", "special");
              }
              if (l(s))
                return e.stylize(RegExp.prototype.toString.call(s), "regexp");
              if (p(s))
                return e.stylize(Date.prototype.toString.call(s), "date");
              if (d(s)) return E(s);
            }
            var I,
              R = "",
              C = !1,
              A = ["{", "}"];
            return (
              Array.isArray(s) && ((C = !0), (A = ["[", "]"])),
              o(s) && (R = " [Function" + (s.name ? ": " + s.name : "") + "]"),
              l(s) && (R = " " + RegExp.prototype.toString.call(s)),
              p(s) && (R = " " + Date.prototype.toUTCString.call(s)),
              d(s) && (R = " " + E(s)),
              0 !== S.length || (C && 0 != s.length)
                ? i < 0
                  ? l(s)
                    ? e.stylize(RegExp.prototype.toString.call(s), "regexp")
                    : e.stylize("[Object]", "special")
                  : (e.seen.push(s),
                    (I = C
                      ? (function (e, t, s, n, r) {
                          for (var i = [], o = 0, a = t.length; o < a; ++o)
                            u(t, String(o))
                              ? i.push(g(e, t, s, n, String(o), !0))
                              : i.push("");
                          return (
                            r.forEach(function (r) {
                              r.match(/^\d+$/) || i.push(g(e, t, s, n, r, !0));
                            }),
                            i
                          );
                        })(e, s, i, m, S)
                      : S.map(function (t) {
                          return g(e, s, i, m, t, C);
                        })),
                    e.seen.pop(),
                    (function (e, t, s) {
                      return e.reduce(function (e, t) {
                        return (
                          t.indexOf("\n"),
                          e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                        ? s[0] +
                            ("" === t ? "" : t + "\n ") +
                            " " +
                            e.join(",\n  ") +
                            " " +
                            s[1]
                        : s[0] + t + " " + e.join(", ") + " " + s[1];
                    })(I, R, A))
                : A[0] + R + A[1]
            );
          }
          function g(e, t, s, n, i, o) {
            var a, l, h;
            h = { value: void 0 };
            try {
              h.value = t[i];
            } catch (e) {}
            try {
              Object.getOwnPropertyDescriptor &&
                (h = Object.getOwnPropertyDescriptor(t, i) || h);
            } catch (e) {}
            if (
              (h.get
                ? (l = h.set
                    ? e.stylize("[Getter/Setter]", "special")
                    : e.stylize("[Getter]", "special"))
                : h.set && (l = e.stylize("[Setter]", "special")),
              u(n, i) || (a = "[" + i + "]"),
              l ||
                (e.seen.indexOf(h.value) < 0
                  ? (l = c(s)
                      ? T(e, h.value, null)
                      : T(e, h.value, s - 1)).indexOf("\n") > -1 &&
                    (l = o
                      ? l
                          .split("\n")
                          .map(function (e) {
                            return "  " + e;
                          })
                          .join("\n")
                          .substr(2)
                      : "\n" +
                        l
                          .split("\n")
                          .map(function (e) {
                            return "   " + e;
                          })
                          .join("\n"))
                  : (l = e.stylize("[Circular]", "special"))),
              r(a))
            ) {
              if (o && i.match(/^\d+$/)) return l;
              (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
                : ((a = a
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (a = e.stylize(a, "string")));
            }
            return a + ": " + l;
          }
          (e.exports = t),
            (t.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (t.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red",
            });
        },
        8764: (e, t, s) => {
          "use strict";
          const n = s(9742),
            r = s(645),
            i =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (t.lW = c), (t.h2 = 50);
          const o = 2147483647;
          function a(e) {
            if (e > o)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"',
              );
            const t = new Uint8Array(e);
            return Object.setPrototypeOf(t, c.prototype), t;
          }
          function c(e, t, s) {
            if ("number" == typeof e) {
              if ("string" == typeof t)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number',
                );
              return h(e);
            }
            return u(e, t, s);
          }
          function u(e, t, s) {
            if ("string" == typeof e)
              return (function (e, t) {
                if (
                  (("string" == typeof t && "" !== t) || (t = "utf8"),
                  !c.isEncoding(t))
                )
                  throw new TypeError("Unknown encoding: " + t);
                const s = 0 | E(e, t);
                let n = a(s);
                const r = n.write(e, t);
                return r !== s && (n = n.slice(0, r)), n;
              })(e, t);
            if (ArrayBuffer.isView(e))
              return (function (e) {
                if (j(e, Uint8Array)) {
                  const t = new Uint8Array(e);
                  return p(t.buffer, t.byteOffset, t.byteLength);
                }
                return d(e);
              })(e);
            if (null == e)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof e,
              );
            if (j(e, ArrayBuffer) || (e && j(e.buffer, ArrayBuffer)))
              return p(e, t, s);
            if (
              "undefined" != typeof SharedArrayBuffer &&
              (j(e, SharedArrayBuffer) || (e && j(e.buffer, SharedArrayBuffer)))
            )
              return p(e, t, s);
            if ("number" == typeof e)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number',
              );
            const n = e.valueOf && e.valueOf();
            if (null != n && n !== e) return c.from(n, t, s);
            const r = (function (e) {
              if (c.isBuffer(e)) {
                const t = 0 | _(e.length),
                  s = a(t);
                return 0 === s.length || e.copy(s, 0, 0, t), s;
              }
              return void 0 !== e.length
                ? "number" != typeof e.length || K(e.length)
                  ? a(0)
                  : d(e)
                : "Buffer" === e.type && Array.isArray(e.data)
                  ? d(e.data)
                  : void 0;
            })(e);
            if (r) return r;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof e[Symbol.toPrimitive]
            )
              return c.from(e[Symbol.toPrimitive]("string"), t, s);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e,
            );
          }
          function l(e) {
            if ("number" != typeof e)
              throw new TypeError('"size" argument must be of type number');
            if (e < 0)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"',
              );
          }
          function h(e) {
            return l(e), a(e < 0 ? 0 : 0 | _(e));
          }
          function d(e) {
            const t = e.length < 0 ? 0 : 0 | _(e.length),
              s = a(t);
            for (let n = 0; n < t; n += 1) s[n] = 255 & e[n];
            return s;
          }
          function p(e, t, s) {
            if (t < 0 || e.byteLength < t)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (s || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return (
              (n =
                void 0 === t && void 0 === s
                  ? new Uint8Array(e)
                  : void 0 === s
                    ? new Uint8Array(e, t)
                    : new Uint8Array(e, t, s)),
              Object.setPrototypeOf(n, c.prototype),
              n
            );
          }
          function _(e) {
            if (e >= o)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  o.toString(16) +
                  " bytes",
              );
            return 0 | e;
          }
          function E(e, t) {
            if (c.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || j(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof e,
              );
            const s = e.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === s) return 0;
            let r = !1;
            for (;;)
              switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                  return s;
                case "utf8":
                case "utf-8":
                  return Y(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * s;
                case "hex":
                  return s >>> 1;
                case "base64":
                  return Q(e).length;
                default:
                  if (r) return n ? -1 : Y(e).length;
                  (t = ("" + t).toLowerCase()), (r = !0);
              }
          }
          function T(e, t, s) {
            let n = !1;
            if (((void 0 === t || t < 0) && (t = 0), t > this.length))
              return "";
            if (
              ((void 0 === s || s > this.length) && (s = this.length), s <= 0)
            )
              return "";
            if ((s >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ; )
              switch (e) {
                case "hex":
                  return b(this, t, s);
                case "utf8":
                case "utf-8":
                  return N(this, t, s);
                case "ascii":
                  return D(this, t, s);
                case "latin1":
                case "binary":
                  return y(this, t, s);
                case "base64":
                  return O(this, t, s);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return M(this, t, s);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + e);
                  (e = (e + "").toLowerCase()), (n = !0);
              }
          }
          function g(e, t, s) {
            const n = e[t];
            (e[t] = e[s]), (e[s] = n);
          }
          function S(e, t, s, n, r) {
            if (0 === e.length) return -1;
            if (
              ("string" == typeof s
                ? ((n = s), (s = 0))
                : s > 2147483647
                  ? (s = 2147483647)
                  : s < -2147483648 && (s = -2147483648),
              K((s = +s)) && (s = r ? 0 : e.length - 1),
              s < 0 && (s = e.length + s),
              s >= e.length)
            ) {
              if (r) return -1;
              s = e.length - 1;
            } else if (s < 0) {
              if (!r) return -1;
              s = 0;
            }
            if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)))
              return 0 === t.length ? -1 : m(e, t, s, n, r);
            if ("number" == typeof t)
              return (
                (t &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? r
                    ? Uint8Array.prototype.indexOf.call(e, t, s)
                    : Uint8Array.prototype.lastIndexOf.call(e, t, s)
                  : m(e, [t], s, n, r)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function m(e, t, s, n, r) {
            let i,
              o = 1,
              a = e.length,
              c = t.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              (o = 2), (a /= 2), (c /= 2), (s /= 2);
            }
            function u(e, t) {
              return 1 === o ? e[t] : e.readUInt16BE(t * o);
            }
            if (r) {
              let n = -1;
              for (i = s; i < a; i++)
                if (u(e, i) === u(t, -1 === n ? 0 : i - n)) {
                  if ((-1 === n && (n = i), i - n + 1 === c)) return n * o;
                } else -1 !== n && (i -= i - n), (n = -1);
            } else
              for (s + c > a && (s = a - c), i = s; i >= 0; i--) {
                let s = !0;
                for (let n = 0; n < c; n++)
                  if (u(e, i + n) !== u(t, n)) {
                    s = !1;
                    break;
                  }
                if (s) return i;
              }
            return -1;
          }
          function f(e, t, s, n) {
            s = Number(s) || 0;
            const r = e.length - s;
            n ? (n = Number(n)) > r && (n = r) : (n = r);
            const i = t.length;
            let o;
            for (n > i / 2 && (n = i / 2), o = 0; o < n; ++o) {
              const n = parseInt(t.substr(2 * o, 2), 16);
              if (K(n)) return o;
              e[s + o] = n;
            }
            return o;
          }
          function I(e, t, s, n) {
            return X(Y(t, e.length - s), e, s, n);
          }
          function R(e, t, s, n) {
            return X(
              (function (e) {
                const t = [];
                for (let s = 0; s < e.length; ++s)
                  t.push(255 & e.charCodeAt(s));
                return t;
              })(t),
              e,
              s,
              n,
            );
          }
          function C(e, t, s, n) {
            return X(Q(t), e, s, n);
          }
          function A(e, t, s, n) {
            return X(
              (function (e, t) {
                let s, n, r;
                const i = [];
                for (let o = 0; o < e.length && !((t -= 2) < 0); ++o)
                  (s = e.charCodeAt(o)),
                    (n = s >> 8),
                    (r = s % 256),
                    i.push(r),
                    i.push(n);
                return i;
              })(t, e.length - s),
              e,
              s,
              n,
            );
          }
          function O(e, t, s) {
            return 0 === t && s === e.length
              ? n.fromByteArray(e)
              : n.fromByteArray(e.slice(t, s));
          }
          function N(e, t, s) {
            s = Math.min(e.length, s);
            const n = [];
            let r = t;
            for (; r < s; ) {
              const t = e[r];
              let i = null,
                o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
              if (r + o <= s) {
                let s, n, a, c;
                switch (o) {
                  case 1:
                    t < 128 && (i = t);
                    break;
                  case 2:
                    (s = e[r + 1]),
                      128 == (192 & s) &&
                        ((c = ((31 & t) << 6) | (63 & s)), c > 127 && (i = c));
                    break;
                  case 3:
                    (s = e[r + 1]),
                      (n = e[r + 2]),
                      128 == (192 & s) &&
                        128 == (192 & n) &&
                        ((c = ((15 & t) << 12) | ((63 & s) << 6) | (63 & n)),
                        c > 2047 && (c < 55296 || c > 57343) && (i = c));
                    break;
                  case 4:
                    (s = e[r + 1]),
                      (n = e[r + 2]),
                      (a = e[r + 3]),
                      128 == (192 & s) &&
                        128 == (192 & n) &&
                        128 == (192 & a) &&
                        ((c =
                          ((15 & t) << 18) |
                          ((63 & s) << 12) |
                          ((63 & n) << 6) |
                          (63 & a)),
                        c > 65535 && c < 1114112 && (i = c));
                }
              }
              null === i
                ? ((i = 65533), (o = 1))
                : i > 65535 &&
                  ((i -= 65536),
                  n.push(((i >>> 10) & 1023) | 55296),
                  (i = 56320 | (1023 & i))),
                n.push(i),
                (r += o);
            }
            return (function (e) {
              const t = e.length;
              if (t <= P) return String.fromCharCode.apply(String, e);
              let s = "",
                n = 0;
              for (; n < t; )
                s += String.fromCharCode.apply(String, e.slice(n, (n += P)));
              return s;
            })(n);
          }
          (c.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const e = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                42 === e.foo()
              );
            } catch (e) {
              return !1;
            }
          })()),
            c.TYPED_ARRAY_SUPPORT ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
              ),
            Object.defineProperty(c.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(c.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.byteOffset;
              },
            }),
            (c.poolSize = 8192),
            (c.from = function (e, t, s) {
              return u(e, t, s);
            }),
            Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(c, Uint8Array),
            (c.alloc = function (e, t, s) {
              return (function (e, t, s) {
                return (
                  l(e),
                  e <= 0
                    ? a(e)
                    : void 0 !== t
                      ? "string" == typeof s
                        ? a(e).fill(t, s)
                        : a(e).fill(t)
                      : a(e)
                );
              })(e, t, s);
            }),
            (c.allocUnsafe = function (e) {
              return h(e);
            }),
            (c.allocUnsafeSlow = function (e) {
              return h(e);
            }),
            (c.isBuffer = function (e) {
              return null != e && !0 === e._isBuffer && e !== c.prototype;
            }),
            (c.compare = function (e, t) {
              if (
                (j(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                j(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                !c.isBuffer(e) || !c.isBuffer(t))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                );
              if (e === t) return 0;
              let s = e.length,
                n = t.length;
              for (let r = 0, i = Math.min(s, n); r < i; ++r)
                if (e[r] !== t[r]) {
                  (s = e[r]), (n = t[r]);
                  break;
                }
              return s < n ? -1 : n < s ? 1 : 0;
            }),
            (c.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (c.concat = function (e, t) {
              if (!Array.isArray(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              if (0 === e.length) return c.alloc(0);
              let s;
              if (void 0 === t)
                for (t = 0, s = 0; s < e.length; ++s) t += e[s].length;
              const n = c.allocUnsafe(t);
              let r = 0;
              for (s = 0; s < e.length; ++s) {
                let t = e[s];
                if (j(t, Uint8Array))
                  r + t.length > n.length
                    ? (c.isBuffer(t) || (t = c.from(t)), t.copy(n, r))
                    : Uint8Array.prototype.set.call(n, t, r);
                else {
                  if (!c.isBuffer(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers',
                    );
                  t.copy(n, r);
                }
                r += t.length;
              }
              return n;
            }),
            (c.byteLength = E),
            (c.prototype._isBuffer = !0),
            (c.prototype.swap16 = function () {
              const e = this.length;
              if (e % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits",
                );
              for (let t = 0; t < e; t += 2) g(this, t, t + 1);
              return this;
            }),
            (c.prototype.swap32 = function () {
              const e = this.length;
              if (e % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits",
                );
              for (let t = 0; t < e; t += 4)
                g(this, t, t + 3), g(this, t + 1, t + 2);
              return this;
            }),
            (c.prototype.swap64 = function () {
              const e = this.length;
              if (e % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits",
                );
              for (let t = 0; t < e; t += 8)
                g(this, t, t + 7),
                  g(this, t + 1, t + 6),
                  g(this, t + 2, t + 5),
                  g(this, t + 3, t + 4);
              return this;
            }),
            (c.prototype.toString = function () {
              const e = this.length;
              return 0 === e
                ? ""
                : 0 === arguments.length
                  ? N(this, 0, e)
                  : T.apply(this, arguments);
            }),
            (c.prototype.toLocaleString = c.prototype.toString),
            (c.prototype.equals = function (e) {
              if (!c.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
              return this === e || 0 === c.compare(this, e);
            }),
            (c.prototype.inspect = function () {
              let e = "";
              const s = t.h2;
              return (
                (e = this.toString("hex", 0, s)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > s && (e += " ... "),
                "<Buffer " + e + ">"
              );
            }),
            i && (c.prototype[i] = c.prototype.inspect),
            (c.prototype.compare = function (e, t, s, n, r) {
              if (
                (j(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                !c.isBuffer(e))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof e,
                );
              if (
                (void 0 === t && (t = 0),
                void 0 === s && (s = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === r && (r = this.length),
                t < 0 || s > e.length || n < 0 || r > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= r && t >= s) return 0;
              if (n >= r) return -1;
              if (t >= s) return 1;
              if (this === e) return 0;
              let i = (r >>>= 0) - (n >>>= 0),
                o = (s >>>= 0) - (t >>>= 0);
              const a = Math.min(i, o),
                u = this.slice(n, r),
                l = e.slice(t, s);
              for (let e = 0; e < a; ++e)
                if (u[e] !== l[e]) {
                  (i = u[e]), (o = l[e]);
                  break;
                }
              return i < o ? -1 : o < i ? 1 : 0;
            }),
            (c.prototype.includes = function (e, t, s) {
              return -1 !== this.indexOf(e, t, s);
            }),
            (c.prototype.indexOf = function (e, t, s) {
              return S(this, e, t, s, !0);
            }),
            (c.prototype.lastIndexOf = function (e, t, s) {
              return S(this, e, t, s, !1);
            }),
            (c.prototype.write = function (e, t, s, n) {
              if (void 0 === t) (n = "utf8"), (s = this.length), (t = 0);
              else if (void 0 === s && "string" == typeof t)
                (n = t), (s = this.length), (t = 0);
              else {
                if (!isFinite(t))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                  );
                (t >>>= 0),
                  isFinite(s)
                    ? ((s >>>= 0), void 0 === n && (n = "utf8"))
                    : ((n = s), (s = void 0));
              }
              const r = this.length - t;
              if (
                ((void 0 === s || s > r) && (s = r),
                (e.length > 0 && (s < 0 || t < 0)) || t > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              let i = !1;
              for (;;)
                switch (n) {
                  case "hex":
                    return f(this, e, t, s);
                  case "utf8":
                  case "utf-8":
                    return I(this, e, t, s);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return R(this, e, t, s);
                  case "base64":
                    return C(this, e, t, s);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return A(this, e, t, s);
                  default:
                    if (i) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (i = !0);
                }
            }),
            (c.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          const P = 4096;
          function D(e, t, s) {
            let n = "";
            s = Math.min(e.length, s);
            for (let r = t; r < s; ++r) n += String.fromCharCode(127 & e[r]);
            return n;
          }
          function y(e, t, s) {
            let n = "";
            s = Math.min(e.length, s);
            for (let r = t; r < s; ++r) n += String.fromCharCode(e[r]);
            return n;
          }
          function b(e, t, s) {
            const n = e.length;
            (!t || t < 0) && (t = 0), (!s || s < 0 || s > n) && (s = n);
            let r = "";
            for (let n = t; n < s; ++n) r += z[e[n]];
            return r;
          }
          function M(e, t, s) {
            const n = e.slice(t, s);
            let r = "";
            for (let e = 0; e < n.length - 1; e += 2)
              r += String.fromCharCode(n[e] + 256 * n[e + 1]);
            return r;
          }
          function w(e, t, s) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > s)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function v(e, t, s, n, r, i) {
            if (!c.isBuffer(e))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance',
              );
            if (t > r || t < i)
              throw new RangeError('"value" argument is out of bounds');
            if (s + n > e.length) throw new RangeError("Index out of range");
          }
          function L(e, t, s, n, r) {
            $(t, n, r, e, s, 7);
            let i = Number(t & BigInt(4294967295));
            (e[s++] = i),
              (i >>= 8),
              (e[s++] = i),
              (i >>= 8),
              (e[s++] = i),
              (i >>= 8),
              (e[s++] = i);
            let o = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[s++] = o),
              (o >>= 8),
              (e[s++] = o),
              (o >>= 8),
              (e[s++] = o),
              (o >>= 8),
              (e[s++] = o),
              s
            );
          }
          function U(e, t, s, n, r) {
            $(t, n, r, e, s, 7);
            let i = Number(t & BigInt(4294967295));
            (e[s + 7] = i),
              (i >>= 8),
              (e[s + 6] = i),
              (i >>= 8),
              (e[s + 5] = i),
              (i >>= 8),
              (e[s + 4] = i);
            let o = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[s + 3] = o),
              (o >>= 8),
              (e[s + 2] = o),
              (o >>= 8),
              (e[s + 1] = o),
              (o >>= 8),
              (e[s] = o),
              s + 8
            );
          }
          function F(e, t, s, n, r, i) {
            if (s + n > e.length) throw new RangeError("Index out of range");
            if (s < 0) throw new RangeError("Index out of range");
          }
          function x(e, t, s, n, i) {
            return (
              (t = +t),
              (s >>>= 0),
              i || F(e, 0, s, 4),
              r.write(e, t, s, n, 23, 4),
              s + 4
            );
          }
          function B(e, t, s, n, i) {
            return (
              (t = +t),
              (s >>>= 0),
              i || F(e, 0, s, 8),
              r.write(e, t, s, n, 52, 8),
              s + 8
            );
          }
          (c.prototype.slice = function (e, t) {
            const s = this.length;
            (e = ~~e) < 0 ? (e += s) < 0 && (e = 0) : e > s && (e = s),
              (t = void 0 === t ? s : ~~t) < 0
                ? (t += s) < 0 && (t = 0)
                : t > s && (t = s),
              t < e && (t = e);
            const n = this.subarray(e, t);
            return Object.setPrototypeOf(n, c.prototype), n;
          }),
            (c.prototype.readUintLE = c.prototype.readUIntLE =
              function (e, t, s) {
                (e >>>= 0), (t >>>= 0), s || w(e, t, this.length);
                let n = this[e],
                  r = 1,
                  i = 0;
                for (; ++i < t && (r *= 256); ) n += this[e + i] * r;
                return n;
              }),
            (c.prototype.readUintBE = c.prototype.readUIntBE =
              function (e, t, s) {
                (e >>>= 0), (t >>>= 0), s || w(e, t, this.length);
                let n = this[e + --t],
                  r = 1;
                for (; t > 0 && (r *= 256); ) n += this[e + --t] * r;
                return n;
              }),
            (c.prototype.readUint8 = c.prototype.readUInt8 =
              function (e, t) {
                return (e >>>= 0), t || w(e, 1, this.length), this[e];
              }),
            (c.prototype.readUint16LE = c.prototype.readUInt16LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || w(e, 2, this.length),
                  this[e] | (this[e + 1] << 8)
                );
              }),
            (c.prototype.readUint16BE = c.prototype.readUInt16BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || w(e, 2, this.length),
                  (this[e] << 8) | this[e + 1]
                );
              }),
            (c.prototype.readUint32LE = c.prototype.readUInt32LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || w(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                );
              }),
            (c.prototype.readUint32BE = c.prototype.readUInt32BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || w(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                );
              }),
            (c.prototype.readBigUInt64LE = J(function (e) {
              q((e >>>= 0), "offset");
              const t = this[e],
                s = this[e + 7];
              (void 0 !== t && void 0 !== s) || V(e, this.length - 8);
              const n =
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                r =
                  this[++e] + 256 * this[++e] + 65536 * this[++e] + s * 2 ** 24;
              return BigInt(n) + (BigInt(r) << BigInt(32));
            })),
            (c.prototype.readBigUInt64BE = J(function (e) {
              q((e >>>= 0), "offset");
              const t = this[e],
                s = this[e + 7];
              (void 0 !== t && void 0 !== s) || V(e, this.length - 8);
              const n =
                  t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                r =
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + s;
              return (BigInt(n) << BigInt(32)) + BigInt(r);
            })),
            (c.prototype.readIntLE = function (e, t, s) {
              (e >>>= 0), (t >>>= 0), s || w(e, t, this.length);
              let n = this[e],
                r = 1,
                i = 0;
              for (; ++i < t && (r *= 256); ) n += this[e + i] * r;
              return (r *= 128), n >= r && (n -= Math.pow(2, 8 * t)), n;
            }),
            (c.prototype.readIntBE = function (e, t, s) {
              (e >>>= 0), (t >>>= 0), s || w(e, t, this.length);
              let n = t,
                r = 1,
                i = this[e + --n];
              for (; n > 0 && (r *= 256); ) i += this[e + --n] * r;
              return (r *= 128), i >= r && (i -= Math.pow(2, 8 * t)), i;
            }),
            (c.prototype.readInt8 = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
              );
            }),
            (c.prototype.readInt16LE = function (e, t) {
              (e >>>= 0), t || w(e, 2, this.length);
              const s = this[e] | (this[e + 1] << 8);
              return 32768 & s ? 4294901760 | s : s;
            }),
            (c.prototype.readInt16BE = function (e, t) {
              (e >>>= 0), t || w(e, 2, this.length);
              const s = this[e + 1] | (this[e] << 8);
              return 32768 & s ? 4294901760 | s : s;
            }),
            (c.prototype.readInt32LE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 4, this.length),
                this[e] |
                  (this[e + 1] << 8) |
                  (this[e + 2] << 16) |
                  (this[e + 3] << 24)
              );
            }),
            (c.prototype.readInt32BE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 4, this.length),
                (this[e] << 24) |
                  (this[e + 1] << 16) |
                  (this[e + 2] << 8) |
                  this[e + 3]
              );
            }),
            (c.prototype.readBigInt64LE = J(function (e) {
              q((e >>>= 0), "offset");
              const t = this[e],
                s = this[e + 7];
              (void 0 !== t && void 0 !== s) || V(e, this.length - 8);
              const n =
                this[e + 4] +
                256 * this[e + 5] +
                65536 * this[e + 6] +
                (s << 24);
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                )
              );
            })),
            (c.prototype.readBigInt64BE = J(function (e) {
              q((e >>>= 0), "offset");
              const t = this[e],
                s = this[e + 7];
              (void 0 !== t && void 0 !== s) || V(e, this.length - 8);
              const n =
                (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + s,
                )
              );
            })),
            (c.prototype.readFloatLE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 4, this.length),
                r.read(this, e, !0, 23, 4)
              );
            }),
            (c.prototype.readFloatBE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 4, this.length),
                r.read(this, e, !1, 23, 4)
              );
            }),
            (c.prototype.readDoubleLE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 8, this.length),
                r.read(this, e, !0, 52, 8)
              );
            }),
            (c.prototype.readDoubleBE = function (e, t) {
              return (
                (e >>>= 0),
                t || w(e, 8, this.length),
                r.read(this, e, !1, 52, 8)
              );
            }),
            (c.prototype.writeUintLE = c.prototype.writeUIntLE =
              function (e, t, s, n) {
                (e = +e),
                  (t >>>= 0),
                  (s >>>= 0),
                  n || v(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
                let r = 1,
                  i = 0;
                for (this[t] = 255 & e; ++i < s && (r *= 256); )
                  this[t + i] = (e / r) & 255;
                return t + s;
              }),
            (c.prototype.writeUintBE = c.prototype.writeUIntBE =
              function (e, t, s, n) {
                (e = +e),
                  (t >>>= 0),
                  (s >>>= 0),
                  n || v(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
                let r = s - 1,
                  i = 1;
                for (this[t + r] = 255 & e; --r >= 0 && (i *= 256); )
                  this[t + r] = (e / i) & 255;
                return t + s;
              }),
            (c.prototype.writeUint8 = c.prototype.writeUInt8 =
              function (e, t, s) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  s || v(this, e, t, 1, 255, 0),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
            (c.prototype.writeUint16LE = c.prototype.writeUInt16LE =
              function (e, t, s) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  s || v(this, e, t, 2, 65535, 0),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  t + 2
                );
              }),
            (c.prototype.writeUint16BE = c.prototype.writeUInt16BE =
              function (e, t, s) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  s || v(this, e, t, 2, 65535, 0),
                  (this[t] = e >>> 8),
                  (this[t + 1] = 255 & e),
                  t + 2
                );
              }),
            (c.prototype.writeUint32LE = c.prototype.writeUInt32LE =
              function (e, t, s) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  s || v(this, e, t, 4, 4294967295, 0),
                  (this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e),
                  t + 4
                );
              }),
            (c.prototype.writeUint32BE = c.prototype.writeUInt32BE =
              function (e, t, s) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  s || v(this, e, t, 4, 4294967295, 0),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
            (c.prototype.writeBigUInt64LE = J(function (e, t = 0) {
              return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (c.prototype.writeBigUInt64BE = J(function (e, t = 0) {
              return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (c.prototype.writeIntLE = function (e, t, s, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * s - 1);
                v(this, e, t, s, n - 1, -n);
              }
              let r = 0,
                i = 1,
                o = 0;
              for (this[t] = 255 & e; ++r < s && (i *= 256); )
                e < 0 && 0 === o && 0 !== this[t + r - 1] && (o = 1),
                  (this[t + r] = (((e / i) >> 0) - o) & 255);
              return t + s;
            }),
            (c.prototype.writeIntBE = function (e, t, s, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * s - 1);
                v(this, e, t, s, n - 1, -n);
              }
              let r = s - 1,
                i = 1,
                o = 0;
              for (this[t + r] = 255 & e; --r >= 0 && (i *= 256); )
                e < 0 && 0 === o && 0 !== this[t + r + 1] && (o = 1),
                  (this[t + r] = (((e / i) >> 0) - o) & 255);
              return t + s;
            }),
            (c.prototype.writeInt8 = function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || v(this, e, t, 1, 127, -128),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (c.prototype.writeInt16LE = function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || v(this, e, t, 2, 32767, -32768),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
            (c.prototype.writeInt16BE = function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || v(this, e, t, 2, 32767, -32768),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
            (c.prototype.writeInt32LE = function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || v(this, e, t, 4, 2147483647, -2147483648),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24),
                t + 4
              );
            }),
            (c.prototype.writeInt32BE = function (e, t, s) {
              return (
                (e = +e),
                (t >>>= 0),
                s || v(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
            (c.prototype.writeBigInt64LE = J(function (e, t = 0) {
              return L(
                this,
                e,
                t,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff"),
              );
            })),
            (c.prototype.writeBigInt64BE = J(function (e, t = 0) {
              return U(
                this,
                e,
                t,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff"),
              );
            })),
            (c.prototype.writeFloatLE = function (e, t, s) {
              return x(this, e, t, !0, s);
            }),
            (c.prototype.writeFloatBE = function (e, t, s) {
              return x(this, e, t, !1, s);
            }),
            (c.prototype.writeDoubleLE = function (e, t, s) {
              return B(this, e, t, !0, s);
            }),
            (c.prototype.writeDoubleBE = function (e, t, s) {
              return B(this, e, t, !1, s);
            }),
            (c.prototype.copy = function (e, t, s, n) {
              if (!c.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
              if (
                (s || (s = 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                n > 0 && n < s && (n = s),
                n === s)
              )
                return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw new RangeError("targetStart out of bounds");
              if (s < 0 || s >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                e.length - t < n - s && (n = e.length - t + s);
              const r = n - s;
              return (
                this === e &&
                "function" == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(t, s, n)
                  : Uint8Array.prototype.set.call(e, this.subarray(s, n), t),
                r
              );
            }),
            (c.prototype.fill = function (e, t, s, n) {
              if ("string" == typeof e) {
                if (
                  ("string" == typeof t
                    ? ((n = t), (t = 0), (s = this.length))
                    : "string" == typeof s && ((n = s), (s = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !c.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                  const t = e.charCodeAt(0);
                  (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
                }
              } else
                "number" == typeof e
                  ? (e &= 255)
                  : "boolean" == typeof e && (e = Number(e));
              if (t < 0 || this.length < t || this.length < s)
                throw new RangeError("Out of range index");
              if (s <= t) return this;
              let r;
              if (
                ((t >>>= 0),
                (s = void 0 === s ? this.length : s >>> 0),
                e || (e = 0),
                "number" == typeof e)
              )
                for (r = t; r < s; ++r) this[r] = e;
              else {
                const i = c.isBuffer(e) ? e : c.from(e, n),
                  o = i.length;
                if (0 === o)
                  throw new TypeError(
                    'The value "' + e + '" is invalid for argument "value"',
                  );
                for (r = 0; r < s - t; ++r) this[r + t] = i[r % o];
              }
              return this;
            });
          const G = {};
          function k(e, t, s) {
            G[e] = class extends s {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${e}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return e;
              }
              set code(e) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`;
              }
            };
          }
          function W(e) {
            let t = "",
              s = e.length;
            const n = "-" === e[0] ? 1 : 0;
            for (; s >= n + 4; s -= 3) t = `_${e.slice(s - 3, s)}${t}`;
            return `${e.slice(0, s)}${t}`;
          }
          function $(e, t, s, n, r, i) {
            if (e > s || e < t) {
              const n = "bigint" == typeof t ? "n" : "";
              let r;
              throw (
                ((r =
                  i > 3
                    ? 0 === t || t === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${8 * (i + 1) - 1}${n}`
                    : `>= ${t}${n} and <= ${s}${n}`),
                new G.ERR_OUT_OF_RANGE("value", r, e))
              );
            }
            !(function (e, t, s) {
              q(t, "offset"),
                (void 0 !== e[t] && void 0 !== e[t + s]) ||
                  V(t, e.length - (s + 1));
            })(n, r, i);
          }
          function q(e, t) {
            if ("number" != typeof e)
              throw new G.ERR_INVALID_ARG_TYPE(t, "number", e);
          }
          function V(e, t, s) {
            if (Math.floor(e) !== e)
              throw (
                (q(e, s),
                new G.ERR_OUT_OF_RANGE(s || "offset", "an integer", e))
              );
            if (t < 0) throw new G.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new G.ERR_OUT_OF_RANGE(
              s || "offset",
              `>= ${s ? 1 : 0} and <= ${t}`,
              e,
            );
          }
          k(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (e) {
              return e
                ? `${e} is outside of buffer bounds`
                : "Attempt to access memory outside buffer bounds";
            },
            RangeError,
          ),
            k(
              "ERR_INVALID_ARG_TYPE",
              function (e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`;
              },
              TypeError,
            ),
            k(
              "ERR_OUT_OF_RANGE",
              function (e, t, s) {
                let n = `The value of "${e}" is out of range.`,
                  r = s;
                return (
                  Number.isInteger(s) && Math.abs(s) > 2 ** 32
                    ? (r = W(String(s)))
                    : "bigint" == typeof s &&
                      ((r = String(s)),
                      (s > BigInt(2) ** BigInt(32) ||
                        s < -(BigInt(2) ** BigInt(32))) &&
                        (r = W(r)),
                      (r += "n")),
                  (n += ` It must be ${t}. Received ${r}`),
                  n
                );
              },
              RangeError,
            );
          const H = /[^+/0-9A-Za-z-_]/g;
          function Y(e, t) {
            let s;
            t = t || 1 / 0;
            const n = e.length;
            let r = null;
            const i = [];
            for (let o = 0; o < n; ++o) {
              if (((s = e.charCodeAt(o)), s > 55295 && s < 57344)) {
                if (!r) {
                  if (s > 56319) {
                    (t -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  if (o + 1 === n) {
                    (t -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  r = s;
                  continue;
                }
                if (s < 56320) {
                  (t -= 3) > -1 && i.push(239, 191, 189), (r = s);
                  continue;
                }
                s = 65536 + (((r - 55296) << 10) | (s - 56320));
              } else r && (t -= 3) > -1 && i.push(239, 191, 189);
              if (((r = null), s < 128)) {
                if ((t -= 1) < 0) break;
                i.push(s);
              } else if (s < 2048) {
                if ((t -= 2) < 0) break;
                i.push((s >> 6) | 192, (63 & s) | 128);
              } else if (s < 65536) {
                if ((t -= 3) < 0) break;
                i.push((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128);
              } else {
                if (!(s < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                i.push(
                  (s >> 18) | 240,
                  ((s >> 12) & 63) | 128,
                  ((s >> 6) & 63) | 128,
                  (63 & s) | 128,
                );
              }
            }
            return i;
          }
          function Q(e) {
            return n.toByteArray(
              (function (e) {
                if (
                  (e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2
                )
                  return "";
                for (; e.length % 4 != 0; ) e += "=";
                return e;
              })(e),
            );
          }
          function X(e, t, s, n) {
            let r;
            for (r = 0; r < n && !(r + s >= t.length || r >= e.length); ++r)
              t[r + s] = e[r];
            return r;
          }
          function j(e, t) {
            return (
              e instanceof t ||
              (null != e &&
                null != e.constructor &&
                null != e.constructor.name &&
                e.constructor.name === t.name)
            );
          }
          function K(e) {
            return e != e;
          }
          const z = (function () {
            const e = "0123456789abcdef",
              t = new Array(256);
            for (let s = 0; s < 16; ++s) {
              const n = 16 * s;
              for (let r = 0; r < 16; ++r) t[n + r] = e[s] + e[r];
            }
            return t;
          })();
          function J(e) {
            return "undefined" == typeof BigInt ? Z : e;
          }
          function Z() {
            throw new Error("BigInt not supported");
          }
        },
        4370: (e) => {
          "use strict";
          var t,
            s = "object" == typeof Reflect ? Reflect : null,
            n =
              s && "function" == typeof s.apply
                ? s.apply
                : function (e, t, s) {
                    return Function.prototype.apply.call(e, t, s);
                  };
          t =
            s && "function" == typeof s.ownKeys
              ? s.ownKeys
              : Object.getOwnPropertySymbols
                ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(
                      Object.getOwnPropertySymbols(e),
                    );
                  }
                : function (e) {
                    return Object.getOwnPropertyNames(e);
                  };
          var r =
            Number.isNaN ||
            function (e) {
              return e != e;
            };
          function i() {
            i.init.call(this);
          }
          (e.exports = i),
            (e.exports.once = function (e, t) {
              return new Promise(function (s, n) {
                function r(s) {
                  e.removeListener(t, i), n(s);
                }
                function i() {
                  "function" == typeof e.removeListener &&
                    e.removeListener("error", r),
                    s([].slice.call(arguments));
                }
                E(e, t, i, { once: !0 }),
                  "error" !== t &&
                    (function (e, t, s) {
                      "function" == typeof e.on &&
                        E(e, "error", t, { once: !0 });
                    })(e, r);
              });
            }),
            (i.EventEmitter = i),
            (i.prototype._events = void 0),
            (i.prototype._eventsCount = 0),
            (i.prototype._maxListeners = void 0);
          var o = 10;
          function a(e) {
            if ("function" != typeof e)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof e,
              );
          }
          function c(e) {
            return void 0 === e._maxListeners
              ? i.defaultMaxListeners
              : e._maxListeners;
          }
          function u(e, t, s, n) {
            var r, i, o, u;
            if (
              (a(s),
              void 0 === (i = e._events)
                ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
                : (void 0 !== i.newListener &&
                    (e.emit("newListener", t, s.listener ? s.listener : s),
                    (i = e._events)),
                  (o = i[t])),
              void 0 === o)
            )
              (o = i[t] = s), ++e._eventsCount;
            else if (
              ("function" == typeof o
                ? (o = i[t] = n ? [s, o] : [o, s])
                : n
                  ? o.unshift(s)
                  : o.push(s),
              (r = c(e)) > 0 && o.length > r && !o.warned)
            ) {
              o.warned = !0;
              var l = new Error(
                "Possible EventEmitter memory leak detected. " +
                  o.length +
                  " " +
                  String(t) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit",
              );
              (l.name = "MaxListenersExceededWarning"),
                (l.emitter = e),
                (l.type = t),
                (l.count = o.length),
                (u = l),
                console && console.warn && console.warn(u);
            }
            return e;
          }
          function l() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function h(e, t, s) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: s,
              },
              r = l.bind(n);
            return (r.listener = s), (n.wrapFn = r), r;
          }
          function d(e, t, s) {
            var n = e._events;
            if (void 0 === n) return [];
            var r = n[t];
            return void 0 === r
              ? []
              : "function" == typeof r
                ? s
                  ? [r.listener || r]
                  : [r]
                : s
                  ? (function (e) {
                      for (
                        var t = new Array(e.length), s = 0;
                        s < t.length;
                        ++s
                      )
                        t[s] = e[s].listener || e[s];
                      return t;
                    })(r)
                  : _(r, r.length);
          }
          function p(e) {
            var t = this._events;
            if (void 0 !== t) {
              var s = t[e];
              if ("function" == typeof s) return 1;
              if (void 0 !== s) return s.length;
            }
            return 0;
          }
          function _(e, t) {
            for (var s = new Array(t), n = 0; n < t; ++n) s[n] = e[n];
            return s;
          }
          function E(e, t, s, n) {
            if ("function" == typeof e.on) n.once ? e.once(t, s) : e.on(t, s);
            else {
              if ("function" != typeof e.addEventListener)
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' +
                    typeof e,
                );
              e.addEventListener(t, function r(i) {
                n.once && e.removeEventListener(t, r), s(i);
              });
            }
          }
          Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return o;
            },
            set: function (e) {
              if ("number" != typeof e || e < 0 || r(e))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    ".",
                );
              o = e;
            },
          }),
            (i.init = function () {
              (void 0 !== this._events &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (i.prototype.setMaxListeners = function (e) {
              if ("number" != typeof e || e < 0 || r(e))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    e +
                    ".",
                );
              return (this._maxListeners = e), this;
            }),
            (i.prototype.getMaxListeners = function () {
              return c(this);
            }),
            (i.prototype.emit = function (e) {
              for (var t = [], s = 1; s < arguments.length; s++)
                t.push(arguments[s]);
              var r = "error" === e,
                i = this._events;
              if (void 0 !== i) r = r && void 0 === i.error;
              else if (!r) return !1;
              if (r) {
                var o;
                if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                var a = new Error(
                  "Unhandled error." + (o ? " (" + o.message + ")" : ""),
                );
                throw ((a.context = o), a);
              }
              var c = i[e];
              if (void 0 === c) return !1;
              if ("function" == typeof c) n(c, this, t);
              else {
                var u = c.length,
                  l = _(c, u);
                for (s = 0; s < u; ++s) n(l[s], this, t);
              }
              return !0;
            }),
            (i.prototype.addListener = function (e, t) {
              return u(this, e, t, !1);
            }),
            (i.prototype.on = i.prototype.addListener),
            (i.prototype.prependListener = function (e, t) {
              return u(this, e, t, !0);
            }),
            (i.prototype.once = function (e, t) {
              return a(t), this.on(e, h(this, e, t)), this;
            }),
            (i.prototype.prependOnceListener = function (e, t) {
              return a(t), this.prependListener(e, h(this, e, t)), this;
            }),
            (i.prototype.removeListener = function (e, t) {
              var s, n, r, i, o;
              if ((a(t), void 0 === (n = this._events))) return this;
              if (void 0 === (s = n[e])) return this;
              if (s === t || s.listener === t)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete n[e],
                    n.removeListener &&
                      this.emit("removeListener", e, s.listener || t));
              else if ("function" != typeof s) {
                for (r = -1, i = s.length - 1; i >= 0; i--)
                  if (s[i] === t || s[i].listener === t) {
                    (o = s[i].listener), (r = i);
                    break;
                  }
                if (r < 0) return this;
                0 === r
                  ? s.shift()
                  : (function (e, t) {
                      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                      e.pop();
                    })(s, r),
                  1 === s.length && (n[e] = s[0]),
                  void 0 !== n.removeListener &&
                    this.emit("removeListener", e, o || t);
              }
              return this;
            }),
            (i.prototype.off = i.prototype.removeListener),
            (i.prototype.removeAllListeners = function (e) {
              var t, s, n;
              if (void 0 === (s = this._events)) return this;
              if (void 0 === s.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = Object.create(null)),
                      (this._eventsCount = 0))
                    : void 0 !== s[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : delete s[e]),
                  this
                );
              if (0 === arguments.length) {
                var r,
                  i = Object.keys(s);
                for (n = 0; n < i.length; ++n)
                  "removeListener" !== (r = i[n]) && this.removeAllListeners(r);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = s[e])) this.removeListener(e, t);
              else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                  this.removeListener(e, t[n]);
              return this;
            }),
            (i.prototype.listeners = function (e) {
              return d(this, e, !0);
            }),
            (i.prototype.rawListeners = function (e) {
              return d(this, e, !1);
            }),
            (i.listenerCount = function (e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : p.call(e, t);
            }),
            (i.prototype.listenerCount = p),
            (i.prototype.eventNames = function () {
              return this._eventsCount > 0 ? t(this._events) : [];
            });
        },
        645: (e, t) => {
          (t.read = function (e, t, s, n, r) {
            var i,
              o,
              a = 8 * r - n - 1,
              c = (1 << a) - 1,
              u = c >> 1,
              l = -7,
              h = s ? r - 1 : 0,
              d = s ? -1 : 1,
              p = e[t + h];
            for (
              h += d, i = p & ((1 << -l) - 1), p >>= -l, l += a;
              l > 0;
              i = 256 * i + e[t + h], h += d, l -= 8
            );
            for (
              o = i & ((1 << -l) - 1), i >>= -l, l += n;
              l > 0;
              o = 256 * o + e[t + h], h += d, l -= 8
            );
            if (0 === i) i = 1 - u;
            else {
              if (i === c) return o ? NaN : (1 / 0) * (p ? -1 : 1);
              (o += Math.pow(2, n)), (i -= u);
            }
            return (p ? -1 : 1) * o * Math.pow(2, i - n);
          }),
            (t.write = function (e, t, s, n, r, i) {
              var o,
                a,
                c,
                u = 8 * i - r - 1,
                l = (1 << u) - 1,
                h = l >> 1,
                d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : i - 1,
                _ = n ? 1 : -1,
                E = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((a = isNaN(t) ? 1 : 0), (o = l))
                    : ((o = Math.floor(Math.log(t) / Math.LN2)),
                      t * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                      (t += o + h >= 1 ? d / c : d * Math.pow(2, 1 - h)) * c >=
                        2 && (o++, (c /= 2)),
                      o + h >= l
                        ? ((a = 0), (o = l))
                        : o + h >= 1
                          ? ((a = (t * c - 1) * Math.pow(2, r)), (o += h))
                          : ((a = t * Math.pow(2, h - 1) * Math.pow(2, r)),
                            (o = 0)));
                r >= 8;
                e[s + p] = 255 & a, p += _, a /= 256, r -= 8
              );
              for (
                o = (o << r) | a, u += r;
                u > 0;
                e[s + p] = 255 & o, p += _, o /= 256, u -= 8
              );
              e[s + p - _] |= 128 * E;
            });
        },
        2545: () => {},
        8293: () => {},
        1209: () => {},
        1583: (e, t) => {
          var s,
            n = (function (e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = void 0);
              var t = null;
              try {
                t = new WebAssembly.Instance(
                  new WebAssembly.Module(
                    new Uint8Array([
                      0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96,
                      4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1,
                      6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0,
                      1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95,
                      117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101,
                      109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103,
                      104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126,
                      32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
                      3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167,
                      36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1,
                      173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32,
                      134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
                      11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
                      132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4,
                      66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
                      32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
                      3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167,
                      36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1,
                      173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32,
                      134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
                      11,
                    ]),
                  ),
                  {},
                ).exports;
              } catch (e) {}
              function s(e, t, s) {
                (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!s);
              }
              function n(e) {
                return !0 === (e && e.__isLong__);
              }
              function r(e) {
                var t = Math.clz32(e & -e);
                return e ? 31 - t : t;
              }
              s.prototype.__isLong__,
                Object.defineProperty(s.prototype, "__isLong__", { value: !0 }),
                (s.isLong = n);
              var i = {},
                o = {};
              function a(e, t) {
                var s, n, r;
                return t
                  ? (r = 0 <= (e >>>= 0) && e < 256) && (n = o[e])
                    ? n
                    : ((s = u(e, 0, !0)), r && (o[e] = s), s)
                  : (r = -128 <= (e |= 0) && e < 128) && (n = i[e])
                    ? n
                    : ((s = u(e, e < 0 ? -1 : 0, !1)), r && (i[e] = s), s);
              }
              function c(e, t) {
                if (isNaN(e)) return t ? S : g;
                if (t) {
                  if (e < 0) return S;
                  if (e >= _) return C;
                } else {
                  if (e <= -E) return A;
                  if (e + 1 >= E) return R;
                }
                return e < 0 ? c(-e, t).neg() : u(e % p | 0, (e / p) | 0, t);
              }
              function u(e, t, n) {
                return new s(e, t, n);
              }
              (s.fromInt = a), (s.fromNumber = c), (s.fromBits = u);
              var l = Math.pow;
              function h(e, t, s) {
                if (0 === e.length) throw Error("empty string");
                if (
                  ("number" == typeof t ? ((s = t), (t = !1)) : (t = !!t),
                  "NaN" === e ||
                    "Infinity" === e ||
                    "+Infinity" === e ||
                    "-Infinity" === e)
                )
                  return t ? S : g;
                if ((s = s || 10) < 2 || 36 < s) throw RangeError("radix");
                var n;
                if ((n = e.indexOf("-")) > 0) throw Error("interior hyphen");
                if (0 === n) return h(e.substring(1), t, s).neg();
                for (var r = c(l(s, 8)), i = g, o = 0; o < e.length; o += 8) {
                  var a = Math.min(8, e.length - o),
                    u = parseInt(e.substring(o, o + a), s);
                  if (a < 8) {
                    var d = c(l(s, a));
                    i = i.mul(d).add(c(u));
                  } else i = (i = i.mul(r)).add(c(u));
                }
                return (i.unsigned = t), i;
              }
              function d(e, t) {
                return "number" == typeof e
                  ? c(e, t)
                  : "string" == typeof e
                    ? h(e, t)
                    : u(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
              }
              (s.fromString = h), (s.fromValue = d);
              var p = 4294967296,
                _ = p * p,
                E = _ / 2,
                T = a(1 << 24),
                g = a(0);
              s.ZERO = g;
              var S = a(0, !0);
              s.UZERO = S;
              var m = a(1);
              s.ONE = m;
              var f = a(1, !0);
              s.UONE = f;
              var I = a(-1);
              s.NEG_ONE = I;
              var R = u(-1, 2147483647, !1);
              s.MAX_VALUE = R;
              var C = u(-1, -1, !0);
              s.MAX_UNSIGNED_VALUE = C;
              var A = u(0, -2147483648, !1);
              s.MIN_VALUE = A;
              var O = s.prototype;
              (O.toInt = function () {
                return this.unsigned ? this.low >>> 0 : this.low;
              }),
                (O.toNumber = function () {
                  return this.unsigned
                    ? (this.high >>> 0) * p + (this.low >>> 0)
                    : this.high * p + (this.low >>> 0);
                }),
                (O.toString = function (e) {
                  if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                  if (this.isZero()) return "0";
                  if (this.isNegative()) {
                    if (this.eq(A)) {
                      var t = c(e),
                        s = this.div(t),
                        n = s.mul(t).sub(this);
                      return s.toString(e) + n.toInt().toString(e);
                    }
                    return "-" + this.neg().toString(e);
                  }
                  for (
                    var r = c(l(e, 6), this.unsigned), i = this, o = "";
                    ;

                  ) {
                    var a = i.div(r),
                      u = (i.sub(a.mul(r)).toInt() >>> 0).toString(e);
                    if ((i = a).isZero()) return u + o;
                    for (; u.length < 6; ) u = "0" + u;
                    o = "" + u + o;
                  }
                }),
                (O.getHighBits = function () {
                  return this.high;
                }),
                (O.getHighBitsUnsigned = function () {
                  return this.high >>> 0;
                }),
                (O.getLowBits = function () {
                  return this.low;
                }),
                (O.getLowBitsUnsigned = function () {
                  return this.low >>> 0;
                }),
                (O.getNumBitsAbs = function () {
                  if (this.isNegative())
                    return this.eq(A) ? 64 : this.neg().getNumBitsAbs();
                  for (
                    var e = 0 != this.high ? this.high : this.low, t = 31;
                    t > 0 && 0 == (e & (1 << t));
                    t--
                  );
                  return 0 != this.high ? t + 33 : t + 1;
                }),
                (O.isZero = function () {
                  return 0 === this.high && 0 === this.low;
                }),
                (O.eqz = O.isZero),
                (O.isNegative = function () {
                  return !this.unsigned && this.high < 0;
                }),
                (O.isPositive = function () {
                  return this.unsigned || this.high >= 0;
                }),
                (O.isOdd = function () {
                  return 1 == (1 & this.low);
                }),
                (O.isEven = function () {
                  return 0 == (1 & this.low);
                }),
                (O.equals = function (e) {
                  return (
                    n(e) || (e = d(e)),
                    (this.unsigned === e.unsigned ||
                      this.high >>> 31 != 1 ||
                      e.high >>> 31 != 1) &&
                      this.high === e.high &&
                      this.low === e.low
                  );
                }),
                (O.eq = O.equals),
                (O.notEquals = function (e) {
                  return !this.eq(e);
                }),
                (O.neq = O.notEquals),
                (O.ne = O.notEquals),
                (O.lessThan = function (e) {
                  return this.comp(e) < 0;
                }),
                (O.lt = O.lessThan),
                (O.lessThanOrEqual = function (e) {
                  return this.comp(e) <= 0;
                }),
                (O.lte = O.lessThanOrEqual),
                (O.le = O.lessThanOrEqual),
                (O.greaterThan = function (e) {
                  return this.comp(e) > 0;
                }),
                (O.gt = O.greaterThan),
                (O.greaterThanOrEqual = function (e) {
                  return this.comp(e) >= 0;
                }),
                (O.gte = O.greaterThanOrEqual),
                (O.ge = O.greaterThanOrEqual),
                (O.compare = function (e) {
                  if ((n(e) || (e = d(e)), this.eq(e))) return 0;
                  var t = this.isNegative(),
                    s = e.isNegative();
                  return t && !s
                    ? -1
                    : !t && s
                      ? 1
                      : this.unsigned
                        ? e.high >>> 0 > this.high >>> 0 ||
                          (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                          ? -1
                          : 1
                        : this.sub(e).isNegative()
                          ? -1
                          : 1;
                }),
                (O.comp = O.compare),
                (O.negate = function () {
                  return !this.unsigned && this.eq(A) ? A : this.not().add(m);
                }),
                (O.neg = O.negate),
                (O.add = function (e) {
                  n(e) || (e = d(e));
                  var t = this.high >>> 16,
                    s = 65535 & this.high,
                    r = this.low >>> 16,
                    i = 65535 & this.low,
                    o = e.high >>> 16,
                    a = 65535 & e.high,
                    c = e.low >>> 16,
                    l = 0,
                    h = 0,
                    p = 0,
                    _ = 0;
                  return (
                    (p += (_ += i + (65535 & e.low)) >>> 16),
                    (h += (p += r + c) >>> 16),
                    (l += (h += s + a) >>> 16),
                    (l += t + o),
                    u(
                      ((p &= 65535) << 16) | (_ &= 65535),
                      ((l &= 65535) << 16) | (h &= 65535),
                      this.unsigned,
                    )
                  );
                }),
                (O.subtract = function (e) {
                  return n(e) || (e = d(e)), this.add(e.neg());
                }),
                (O.sub = O.subtract),
                (O.multiply = function (e) {
                  if (this.isZero()) return this;
                  if ((n(e) || (e = d(e)), t))
                    return u(
                      t.mul(this.low, this.high, e.low, e.high),
                      t.get_high(),
                      this.unsigned,
                    );
                  if (e.isZero()) return this.unsigned ? S : g;
                  if (this.eq(A)) return e.isOdd() ? A : g;
                  if (e.eq(A)) return this.isOdd() ? A : g;
                  if (this.isNegative())
                    return e.isNegative()
                      ? this.neg().mul(e.neg())
                      : this.neg().mul(e).neg();
                  if (e.isNegative()) return this.mul(e.neg()).neg();
                  if (this.lt(T) && e.lt(T))
                    return c(this.toNumber() * e.toNumber(), this.unsigned);
                  var s = this.high >>> 16,
                    r = 65535 & this.high,
                    i = this.low >>> 16,
                    o = 65535 & this.low,
                    a = e.high >>> 16,
                    l = 65535 & e.high,
                    h = e.low >>> 16,
                    p = 65535 & e.low,
                    _ = 0,
                    E = 0,
                    m = 0,
                    f = 0;
                  return (
                    (m += (f += o * p) >>> 16),
                    (E += (m += i * p) >>> 16),
                    (m &= 65535),
                    (E += (m += o * h) >>> 16),
                    (_ += (E += r * p) >>> 16),
                    (E &= 65535),
                    (_ += (E += i * h) >>> 16),
                    (E &= 65535),
                    (_ += (E += o * l) >>> 16),
                    (_ += s * p + r * h + i * l + o * a),
                    u(
                      ((m &= 65535) << 16) | (f &= 65535),
                      ((_ &= 65535) << 16) | (E &= 65535),
                      this.unsigned,
                    )
                  );
                }),
                (O.mul = O.multiply),
                (O.divide = function (e) {
                  if ((n(e) || (e = d(e)), e.isZero()))
                    throw Error("division by zero");
                  var s, r, i;
                  if (t)
                    return this.unsigned ||
                      -2147483648 !== this.high ||
                      -1 !== e.low ||
                      -1 !== e.high
                      ? u(
                          (this.unsigned ? t.div_u : t.div_s)(
                            this.low,
                            this.high,
                            e.low,
                            e.high,
                          ),
                          t.get_high(),
                          this.unsigned,
                        )
                      : this;
                  if (this.isZero()) return this.unsigned ? S : g;
                  if (this.unsigned) {
                    if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                      return S;
                    if (e.gt(this.shru(1))) return f;
                    i = S;
                  } else {
                    if (this.eq(A))
                      return e.eq(m) || e.eq(I)
                        ? A
                        : e.eq(A)
                          ? m
                          : (s = this.shr(1).div(e).shl(1)).eq(g)
                            ? e.isNegative()
                              ? m
                              : I
                            : ((r = this.sub(e.mul(s))), (i = s.add(r.div(e))));
                    if (e.eq(A)) return this.unsigned ? S : g;
                    if (this.isNegative())
                      return e.isNegative()
                        ? this.neg().div(e.neg())
                        : this.neg().div(e).neg();
                    if (e.isNegative()) return this.div(e.neg()).neg();
                    i = g;
                  }
                  for (r = this; r.gte(e); ) {
                    s = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
                    for (
                      var o = Math.ceil(Math.log(s) / Math.LN2),
                        a = o <= 48 ? 1 : l(2, o - 48),
                        h = c(s),
                        p = h.mul(e);
                      p.isNegative() || p.gt(r);

                    )
                      p = (h = c((s -= a), this.unsigned)).mul(e);
                    h.isZero() && (h = m), (i = i.add(h)), (r = r.sub(p));
                  }
                  return i;
                }),
                (O.div = O.divide),
                (O.modulo = function (e) {
                  return (
                    n(e) || (e = d(e)),
                    t
                      ? u(
                          (this.unsigned ? t.rem_u : t.rem_s)(
                            this.low,
                            this.high,
                            e.low,
                            e.high,
                          ),
                          t.get_high(),
                          this.unsigned,
                        )
                      : this.sub(this.div(e).mul(e))
                  );
                }),
                (O.mod = O.modulo),
                (O.rem = O.modulo),
                (O.not = function () {
                  return u(~this.low, ~this.high, this.unsigned);
                }),
                (O.countLeadingZeros = function () {
                  return this.high
                    ? Math.clz32(this.high)
                    : Math.clz32(this.low) + 32;
                }),
                (O.clz = O.countLeadingZeros),
                (O.countTrailingZeros = function () {
                  return this.low ? r(this.low) : r(this.high) + 32;
                }),
                (O.ctz = O.countTrailingZeros),
                (O.and = function (e) {
                  return (
                    n(e) || (e = d(e)),
                    u(this.low & e.low, this.high & e.high, this.unsigned)
                  );
                }),
                (O.or = function (e) {
                  return (
                    n(e) || (e = d(e)),
                    u(this.low | e.low, this.high | e.high, this.unsigned)
                  );
                }),
                (O.xor = function (e) {
                  return (
                    n(e) || (e = d(e)),
                    u(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                  );
                }),
                (O.shiftLeft = function (e) {
                  return (
                    n(e) && (e = e.toInt()),
                    0 == (e &= 63)
                      ? this
                      : e < 32
                        ? u(
                            this.low << e,
                            (this.high << e) | (this.low >>> (32 - e)),
                            this.unsigned,
                          )
                        : u(0, this.low << (e - 32), this.unsigned)
                  );
                }),
                (O.shl = O.shiftLeft),
                (O.shiftRight = function (e) {
                  return (
                    n(e) && (e = e.toInt()),
                    0 == (e &= 63)
                      ? this
                      : e < 32
                        ? u(
                            (this.low >>> e) | (this.high << (32 - e)),
                            this.high >> e,
                            this.unsigned,
                          )
                        : u(
                            this.high >> (e - 32),
                            this.high >= 0 ? 0 : -1,
                            this.unsigned,
                          )
                  );
                }),
                (O.shr = O.shiftRight),
                (O.shiftRightUnsigned = function (e) {
                  return (
                    n(e) && (e = e.toInt()),
                    0 == (e &= 63)
                      ? this
                      : e < 32
                        ? u(
                            (this.low >>> e) | (this.high << (32 - e)),
                            this.high >>> e,
                            this.unsigned,
                          )
                        : u(
                            32 === e ? this.high : this.high >>> (e - 32),
                            0,
                            this.unsigned,
                          )
                  );
                }),
                (O.shru = O.shiftRightUnsigned),
                (O.shr_u = O.shiftRightUnsigned),
                (O.rotateLeft = function (e) {
                  var t;
                  return (
                    n(e) && (e = e.toInt()),
                    0 == (e &= 63)
                      ? this
                      : 32 === e
                        ? u(this.high, this.low, this.unsigned)
                        : e < 32
                          ? ((t = 32 - e),
                            u(
                              (this.low << e) | (this.high >>> t),
                              (this.high << e) | (this.low >>> t),
                              this.unsigned,
                            ))
                          : ((t = 32 - (e -= 32)),
                            u(
                              (this.high << e) | (this.low >>> t),
                              (this.low << e) | (this.high >>> t),
                              this.unsigned,
                            ))
                  );
                }),
                (O.rotl = O.rotateLeft),
                (O.rotateRight = function (e) {
                  var t;
                  return (
                    n(e) && (e = e.toInt()),
                    0 == (e &= 63)
                      ? this
                      : 32 === e
                        ? u(this.high, this.low, this.unsigned)
                        : e < 32
                          ? ((t = 32 - e),
                            u(
                              (this.high << t) | (this.low >>> e),
                              (this.low << t) | (this.high >>> e),
                              this.unsigned,
                            ))
                          : ((t = 32 - (e -= 32)),
                            u(
                              (this.low << t) | (this.high >>> e),
                              (this.high << t) | (this.low >>> e),
                              this.unsigned,
                            ))
                  );
                }),
                (O.rotr = O.rotateRight),
                (O.toSigned = function () {
                  return this.unsigned ? u(this.low, this.high, !1) : this;
                }),
                (O.toUnsigned = function () {
                  return this.unsigned ? this : u(this.low, this.high, !0);
                }),
                (O.toBytes = function (e) {
                  return e ? this.toBytesLE() : this.toBytesBE();
                }),
                (O.toBytesLE = function () {
                  var e = this.high,
                    t = this.low;
                  return [
                    255 & t,
                    (t >>> 8) & 255,
                    (t >>> 16) & 255,
                    t >>> 24,
                    255 & e,
                    (e >>> 8) & 255,
                    (e >>> 16) & 255,
                    e >>> 24,
                  ];
                }),
                (O.toBytesBE = function () {
                  var e = this.high,
                    t = this.low;
                  return [
                    e >>> 24,
                    (e >>> 16) & 255,
                    (e >>> 8) & 255,
                    255 & e,
                    t >>> 24,
                    (t >>> 16) & 255,
                    (t >>> 8) & 255,
                    255 & t,
                  ];
                }),
                (s.fromBytes = function (e, t, n) {
                  return n ? s.fromBytesLE(e, t) : s.fromBytesBE(e, t);
                }),
                (s.fromBytesLE = function (e, t) {
                  return new s(
                    e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
                    e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
                    t,
                  );
                }),
                (s.fromBytesBE = function (e, t) {
                  return new s(
                    (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
                    (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
                    t,
                  );
                });
              var N = s;
              return (e.default = N), "default" in e ? e.default : e;
            })({});
          void 0 ===
            (s = function () {
              return n;
            }.apply(t, [])) || (e.exports = s);
        },
      },
      t = {};
    function s(n) {
      var r = t[n];
      if (void 0 !== r) return r.exports;
      var i = (t[n] = { exports: {} });
      return e[n].call(i.exports, i, i.exports, s), i.exports;
    }
    return (
      (s.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      s(6010)
    );
  })(),
);
//# sourceMappingURL=solclient.js.map
