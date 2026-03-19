// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qY6lAI7yWzSUbhQEqRASTxPaHVHrEd9IWdL3Cqd7xqQ0vHBftaZkw5gghHtQYaixCDN7x3vKd0WA8OgTL3/0py/lGm152JGbPL3XH93WG8O0pVaWDtlFgongPE0Lm6hDcxfTzF9fylK/X2B6f9vF0Geq8qdla6uji5imoFwZxacbKy1rXuu9x1h4tzFSJqhJyx4PkIFyZD+1PT/ZPRdQGXQbVZu+U7F4D4uHJXXww+S5kAZXYGuYSyyc0Ppf+ZWPstAEmf3DPKt1YYiNqs/xFpH0SJH4W1ulIGTbuAotcvZsGsWwNGpowllKXehJ/M6SmmbHIVKhjwIq9v0Ba3eudwQMeMbPUKad4vY05Oxosma0+1vFp3zrpeOIvKiZ/aFH94ad+5v/tGxWrWribkUmxWYLqFpUTrdX7Y33fUKsRzrAODD7TxqW/3gKwet1bz5rQ+OG8OeiiEZVinJ/rx9Abpw5uBLzHuimnj5Lcl+kVvF6ToKHSjOxHQUU06sfDjcgrphnTU1XDFfc7fwGWnRZHxttfhn6Vm3EdNgYixHQvsl1lXEtHDrKFRImlBePwcRasGx223gywGHQ8t4HxL0q0gPGHhr67iLOwCeMMHwt9idl8vUjnkyo511fyzN7ZEYJ+kV5/ABB8RlIaVuy7sPAvuaEL7XgDo5dCrGFEuzPPafKyA0Bnnl0fs+Tf3I1LLKyIK0EWLXDtDZyCJuQUhJJHQeHSL7Z539scP69sh/VMWd67NHHhwfP3I1oPNLMpyP4qzglZ+l5tGrrzqX5Uo43DcbW5l22oizVNFWsu7Hu3BTaZdjqjmO+AESPcD0WlllbgdTuzdiQPQvt26FjXx6d4JW5i6lgYn245nfYny2m2hv7+X4Px+Oc0zO6MheGycbYIMc2BL+06dosTYlKdPELOaGZBhFZAm/7uYNsjTaAXEhgzBjrf34MW1Yajx2xZSiiwIx4NiKak8GQJ6K5LTZyKt4sitIafXrP4GusuzjQ0zVetFbanfwc2y1n';
  const _INTEGRITY_HASH = '52e64bea0c740bdf80e143cfd87dc727d350f7ffa650084ba1ba3b1c2de52202';
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
