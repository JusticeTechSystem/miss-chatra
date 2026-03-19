// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3CZq3YwlLNH6t9by9+bG7hzkz2q1UHdQe0fRPCmWj5ePRxObyHKjdA9Gr+71Z8N8NgkiqraxDeLqpRrhAETY2l6EThx1S7KGRdqFZUCtfRxMyRvc2WMIXqVekHQWNrlhPxXvPO4RvwwufRXw/P+f4mL6p/F+zqoLoda8TMC9SjGqOiZ2Gs3ja6yDpetDGxqGHxvWZXEjfYvmXSDeI8yq9DhbOJbvn/cUur2wD0riIeZoNwnOz/dnVrtiGs/8F1HpLLMXbYjeyxmTyB4ra5+lejsRakdNJ6myxGpLidiBTjTLWjcH36L44hWt1q0a6j6hX7DVl6Tx3dX00HlbJQ9urT6J3ZfFYyum8gKXSLjjCWV7+pqXZccxDK0KY3bfHWH3vD1IgE7bLKgUvtheXM6ksIgEuZCfSOUHaKuQP/X02mShaq/rZra2pPd5JwsJzBpMO4twTc90HfpbOUDSpu67GYC875592VrOvFwohWL8v9Bq9yZwIHBLBK45TWEr0Wjj754Onvded7rZPa6l8lNml/+/L1BSnWmV32MLQuhlB8I0AnpiLbowNYNN3DRDiD0ZOxM4tCsN0Y53r6ZBhEKOOuZskO7OWqqq2R5/xKruvGusWbA6ouj7QVSnwxcqj+hANWLyqafvMFbAWbMMc8L5/q7LHhiDcB3EsHxuAlJivRPkZ4UlycVgTzmdPrk/qTbQHVvEFeZwMU4L5rjw3XfM/2xkYZfPwKNHV9Y84Etp5M6f8YBe8P+G5NNgD/rqvLKgMkgBVdV6HWPjtO8OH3rbmlmzwQZitIUuNQxh1fssEs70mnLn60a3FpBriHVBjuv1Jhhvu+XZ+yRbyluitRl6WDsDNX+cGR/018EGoN8Swbhix9tMS9yG+TDkzdpP/eQyt/mPJaUY/gugz6y2dwd4gAWi/9vv6Y9E8ExdXZNSCjgvJZ3gtNxeZiu8VhhTIfjBjdeE/O8LTQWN7iAtYCx5zaOHFlApAS7Fc7rJZvEUmzDER5EYadcvQ6q0jU4hqbIIIr/usQya/Jo4Iuy+Jt6iehHoutezyBwV2/cto42GDSZB33Kn57uwO/FfUr8hsajTHGTANazhm6+gVci1t89SnLWruSEkEdmVpHR3U2wwneRQMsgIqbl04JRqHWKYHJRMnvE46ycwLLqMdlg4Yob6vqG8YYCkgfwGaIACxvddlPr/w8eriNetSztXjCp8pbwXsewgK4g3CDUTNzcQfr6DPGWdpc8maLOXop0gyLlyhY09Ww6eKZUbxpzntlii9+9nR63RQLjYw8DpgJReKE3AKh1LeMDm49qDNSUj7bxKcuaIltoXQVHhJUddtEFMjGwjfwrKIgb9K8eYvULF9Fk2SZ7LE54VbeaJeLgQufXPfwnmqyaaARayH9toYAAlrwUyyPBa3yfThpXA9Pm2AYbmTlFbrgg48vwyfG+gb6012seTCzm8hYnCJ8Qoz67XR+zP0UfDDdscH9/Acp8urmfVB2ueyQsx51K1A5yZyzvjJ0+XejtjmNO08rPXOOMWpoW70BM612bRj8sXl+svnPO591oH9Wf5Q/O9xmJjsLzw0oyovvT7Rx0okagpD8BuvoGj/xK+ZMF+JlGKHJBVD7xTz0wgvP+32ws1lzTOxzIPZtMioodf1QOGf0TfVxyoiLxgg8e3zAeNb1En/E9wp6vg4uG0HvTP83dUrNOu5cgJZYQXtTBgqhEIevQK+E/upDrMdsaIayXHMU0DIRTAK98yzEtuZNeeffU8R+/a2WnybZg73nfFYuEMFUW1dbqmMGXH0+9Nv8C9r14u4Y9mcum9klyO+AOt6mkYtIM/nHXTRlFoUaKwU66wU6Xr+xFhAD77e7Sr/ZKkEQ==';
  const _INTEGRITY_HASH = 'ae618487082244943def902c0f1e247916d3fb60ee6e8381783f05c5dd104e6f';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
