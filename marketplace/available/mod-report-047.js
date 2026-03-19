// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3Hmdf0yw9U3ioyoJFPh9Gke40+GxIgFJdKigfbqoGimjRrbj4Nlz3m5PA4HObSan4D2UIw3kZvnDHmyh4LNs1OPjlKyUmKWlKo5wvpqOtD3zxbVjX4AOCpDmwdqriLJ3CF5KnfwNOtlES+DN2M6z+bZnxUQtFSHGf3oov+ULdscORyp6vdHL5Qrf72aKBFg4YMmJ9mt2CNWQBYLlTNCu5q6sCFo5SlrtSkHaOx/IBUrAoFqa9kzI19myLgbPVKtlDNMcwoFVHZVd4rmVAdUyujI9R2qKNDr+Ti5ym3OCrDOLHvT24w4xSljcpM9Xz+lFQhgSIYs2aBMJnJ+QsRxTEah3ENzoNFumtGzRMJCxsn8WLyGlcMNMwDtCJXXoJk+YMfXkG/DxTYYraDIsJcKO0F8/+0tM1JbCr2cjNLo1gaD+0wNgk4ZrHJcrM4YMgGfcFZCANhfFQUGITg0nlHt1VEhK7R4+cOzGPPVub2XjRIf0ho5IHDi6pYZNpiXjKIcjoHsDOtMaxvClMFOYBWbYSWvg8e2s5fki7AiWNZgW38e4UdHsVhfw38GliNYFs/C3eIiRUjeatCpGQ2AIq1nU9EpzsRGWNd5PqonFF6NzXKSECCRXu7r53VWdHc1Y5ZFHjp5XtLSq4t/2IC8KU/jifzgJxfzyvpxJgLGTP8D+XwDfD/VvNH+4JNlGTF76fVFAL2otkKcGm56LVl1nCEvwZiVC9RIxk2gjFNQktBFZDaPUIGGjTLlhghFueC03BqLCqQxyXwMqiUplb+O1JgPnS2maBxnsyRhg4bMDYfeWHXkAm2hrnevApZppJwNSJWUFUydcevm3VY1VlGfS5AywBGHR4+riw3Zj7dmd9ICzAnHR/K6l2+cOF3TNjmcQUDZnK0I4O1hR7+fo6Q4SjMYQoqCRfbznKMGFeGyVBl6QNkn6zSGxvkPyo2+nDKqPB87fWxtiC92zJTTHjr5UCOvQufwkv7Z4yC4F1z+LbFLa34nqLEpDgMTBqk/EWnNS/j4jv3Bo6V/I0K/dp9tJx9xbhJsWScNxb64AHaj5hCzOFCeuIVGYBgPSeM7Zft9OyhOeUD4TR7HHYJfzhRXTNlq0n8DEojK9xN9WIIQU7+k4fCDdpe/4RyeZ24DUdDjnRL0YFgTqafLedWg9nqgSDWyPEFxAMMcxYbw36ccOhF49pLAgrLSTOyyk72znwRgwm4ofdXwlA8N4Q39LBMIxBdJ0/88OxwDBQlNUXyqhpYNvldaqQaIJUrdm5uACpwb4HvYNYEgReMrx3rJGcupqk6dWk3GXxM0vLcYy7uvOF3UDk/ld00FA8LwvUui8XCMVpTe+f18a+uTKoQk6NCJgqhwK7zjW9z2zYGjPUoV7H4DZR3Z09T4=';
  const _INTEGRITY_HASH = '23daef2b9f0c17cb3fb2df8a9f2bc42be8348d8263c70021bbaff3a981b8cfb0';
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
