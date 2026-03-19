// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+8dikf9Z4oXH6qgO3IkxC9XI0lVI9cF4VYywSeHjjquJX/arT+E8eSDY5UCOJT9dNzkOLJmCl8cIlidxtKj7xR2h4wIL2nWh9Z2xBieCTjBvm9HzM9FfRhwnp7hNGaRuGefobLurFxuzL918EQVvBW24HSI22kQ7YeV9TvWEQ1aKIjYV07DKeMSf86bGsL3cJ6xuv40M8Y1ITGJZwRc+T9dgZ2m38ENMxDL1EjQ1u7lZ4Di6GbyT/ONe4yfYj2tH7V7lKcvLZxnGy/F2bdfEqtmQ9Iu/FRmVV9WL3d5Yz2wLnBHTnEPFo0Pk5IKTvbgtgO+ZBB/kKTTXqoggFes17T7PGllIxWMHSz1yAS8M9bW+70WK6YQ+ClrbMdWRUiJ1SDK0SPc1SHDys+DAfrFcopvLVjtqOtKidlwo0jcZjr7/ptxwDdzT9v+9ZlX/QHlRBiBOn9mE5AHuYoDuqPOVfe8IdepFI8MJ7ZyGu4xOoJnBYOG3lu5/p9etYMIwczmGi0idlZQfzWmgPJ5Ce8Bmt8xgCRlHFX2cKvffEY1BTQIjABoi5CLIIiD3QKZUcBtYHVvCgCYkVd63BGZiRqSgOAQR2Mhq5tLLByj8HlGF4CZkn0D6FdoUcvmxFok8UyJG58epr/JUdsoOqzfzxN1c6ZjoMH8nhJqLWmkJ7mROrgS0NrPvELKaxRztGX6atD6y3TykAEOGF7bXyOL9yNHcB8CpeMe6i+fVtWpL0VIgMutvu8BCma+AbHC8EIdU0X/mJ7qZMpHmamCy1vQH/3sNg5qNjiTLWGUYq36qo/iN1EEZMzbqGtofGv51ufCCTE4frR0rfS8sju9tJhU6+7KHNSzUU0pqyRjFny5AUlF1dZ/e5DJATN5SmY0HReY9KdQf/T5YmMj+7MSW86LoTeZjb+AZxH2Gz9at7lXBglEVX46ge6nrp+e1seDWhKjwtPjLFBwEuRZzmrxrC817ZRxxNLr2ZZwNmQzGd9JQdXgVxpHR3NL35WkmHvY+dWN/xUyiYDwBiur6US14xS23jtuDYHRVIX0j4RgTGyUbMgQik0n7SYf3QLPMizQlFSO1lYQk0HLycsj1H6mOyk6WMq4HdN2iXPvhgq4T/Er0+A6YYbEOsqQYJYGUfaT084+++ZD70EutliD49kyAZVoxsrpKAxeTYTIfDIlEHQkLUXLZr5gxMTfSlmWXK6R38V+fGvqFdIpiifynmyPYCvRBHkJUQ6In7Iztk3RUKjSxyHw5azWKwKFxjyRHFJSqdZcotuFzNkH+zN0WHNQIMvdsLTomquPC+Ld+VFxvBnM7pLAozvbjbo12mU9W5LEIsC98Kx3zuZeZrs8BDPAFWjBmoxDoztJ6/jxBCsWew+6CsKlX';
  const _INTEGRITY_HASH = '98987dae9d3d9eaff8af31ca5a7a49212962aeb941d98ced30845f435d562299';
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
