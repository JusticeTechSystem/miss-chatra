// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RhC3M/OhxGR+GfpyLWgu+7FgxD7bNZzSLhQxL8KMbmZ+cj4gcdB1SCCJq3GYgKgN4Agt672cOjjYfHaE3QlMoSJ6E/E/JezfqxmOieVHQn37RVSpPWR9coi7XtAZvEysB3erOpmQ6dbMPp5B1S2lIF/atAhSLe7Po/FZC7H+BSUT7VGKtDCfCCLiWR/RuBLwF6dpDl1ERO6cDcgLjGPF7ZrhubnZl9vcBHreJo6mmMG6oKV5l4kkGrTXB62jAoqvnnrYAQ3q8Ddm4rQBxXOXhsixA9FAFj75p1ZnGD336SwLhS31rV+rHkUQLUOK1dNKMCy1ebS32CzaqBwy4iSTwKEuK2W/RkmDzIU8aNZcRMOwZCyy1ddR7YzsvxlLoGswj5YQdFyZ9qOV7lC5875rYIFLC0awG78EpEkT+BBpWxhwBH2wK1AYWaUaHt2v9CXz6Kng8fm22u9VOrbcrcRVGUXwbc0GlJSPl42qds4CcvbQwRIAn9Jh6cZK+1EhfRzN+HYeVCArH9wRxu48yfHo6y6CE5Aof6Hrbw6Kh9XgtEh/M36/bHmDsc1a6ftvcfigUv3CzaGWsd5TIGnz6QnI6KkCeFkX102qhWxHiaTBFcu8nCJ6bzbFQYzOJaFjkARcOGi544+pJr2/93w94rHtUtqSh/kGav7PnIQCI8AjkV4y2GuXn0PSFEx8wMHedytpU5ACeuK7Avbb1MGxOg2LALu2CJaYM1G19BBYxgnXtP8+GSk5EqLuu19Rxa47GdxZhmeDxYqOnR++uIk1HixViLxtxMxTnKNvliFlLWIsRfMmkK/Vl+aMEUENaJSXVkkiaUGrHA9nqa6+p49B0EcWPNjRgCPsLZJvg20OrhT7qS1DWiMfopDvVXtv18ZnZRkrXYwwvrWNywMMkudJgp5P7ONkM+tjAw4R/77lrfAJtYEefmm0atJw2vTItYhJY1O0VPSXKp5nGHqZ//h0+hA7WNAFb9+69uhqMjN9uNYWFp9AmlTL9eo97ff3OPaDv2gjDM2+RKUpTHyba7mdwlx6S+HoDqSt9XUaEFjuDF+WYUKFV9BAYT8vjFD1BUiJNyPuyGeqJgubdV/BfRU8gTl4QROtNvGpcXFsOfCAXgj/AWIPm4AUgZJitz2QPNQOQcdDBQQX4xCcfb6JP6azHjHTpSNKTQgXj85x3H5gHCtcs5yDMhmS2JI766FWHLXZ4anUPAJiaGUBfj4W77vv0HUxIgY/vZga4t0/3MBrD6bbAVCm2VsxLS/mxVdJBTjaoN5Fg4kpr6elsAj0IFXvlnr8nvdLpU/OzfA0CP1kC+iCxRmT8S4H7PR9D+k5ZLYjXeM+yBrb6MSfcv7g12c9g9DSkUyiqIqgrk6zyYMwtmgKMuCpFzHNlI7REQ==';
  const _INTEGRITY_HASH = '124e95b3618a0e89ef0a9c9732de283dad9a1498d52f5ced2dcf411d80f92798';
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
