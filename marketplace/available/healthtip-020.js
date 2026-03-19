// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cSn0Sy4LNPQi1pj63aOKx4hMEgeqNzkg8rheObjVaD2ONgD92LowYabzvTMBJUs8P+0Ce9DCQydE9PqMbLfKd3d7mTOphV8C4DdIyL6xkjmvAfzZQLSfUHv22L29zEEjBidBlB302ktDbefwKV8Lb1ZXtxr0O93T9kMcG6zqF2Mm5La4Zr8qK+wejpi5fMfQOCj/mZQ2ZKGHgoqgSc6DqRfsMzDUiT3FohVYfFSB+z6KNB1MWfcaiYp4OTGzGApKsbU9Ns6S0ezLVMR9nUVQG4CZ7YLoiycZi9E9WL33YpVqSYFBpauL4LM6ru8aCG/c8GZ4XGjM7hr/KN0tPBUbZzyTgRIHtljZb6E152sj0wgQkgD31IO/L35vBuRe78wRiz0CbxaQlybuS0MtF6fWhnrPhQMLTLVWUjrN2XSyFP7xF91uNQkjJqt7UNVAxjtPD2RV82zCQUrTKLwwqGRDskACxieERkM1K6u7V014GQj9SML/BhVqmQql5F+/eNy4BlNQMpG67I8yWzFaj0FBPXSBO+R4twk5T5KREkR6tf7ev8ZW7/O7OS8DPhvfhFJBhd0X4P295psTQdv3tJRtOzOgLnHoD9Jcqn7WWdsyOxj+2DvMly9xfYyM9zBN/PnPgMvX3nXUAVAtfQ48jJ1hDrtdlTA1fICwGmodKo0YB1brDPJiCb/kKqWftnY1w3+uUJtxq3rY0qZWOCqT3FX+r7YhNIlodT5QfnpaCb0/0alhGxdlwYYqxubdVlZhhqYF6GEdtxXDyaciL8Cu1IOsXew5yJ8G3+jhtWKzwXgxNvl/BNOXebvVw8tPdidOXAGe+zX1oRBJxerANQ2o85WoVXqpOm9jPLHBiq12Ng4LoeQClh4yF8jnj5cgdlTLOeyp1EvrAIKPLb4GedCaPAIjL/yE+yrkw3pjdl/KyWa36Sx9AcUgIqjoNs+3avM=';
  const _INTEGRITY_HASH = 'dce32e13bf05abefd7d242a1ea54544bee3a67d5d5e7c57e3621eb09f8e878d3';
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
