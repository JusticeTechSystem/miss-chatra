// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k+DPVA0AHmwQ4bD5UQjGBRu4M3tr5wOrwNLJA9Kqpe16bg9t+qb65WB1+dc0SxnQULJeEu9YUpkWfNc6Z1IVRVCImyAsRXfMOIUU28qJtbP7ZdImKhvLqpEJ0x0KdhR/5OPk1LqfhGmQLeKMVUK+CD4mhBGyX0EZlqq0NS2Ne8iqf9qIdfkwX47viIwaGCGtrKcNnYmutYXMYbFgAc/5BOc34c7Mfv6TpcK09pmGQ1qnso+5lZRcnPMejKTeq+Tv0TsXM33klvt0btYyoL+186pdbWCx8RlTPjtqXqgiR5Z5UpwT+xzNOfzUKFtvsNcRjgTih0t20Ceah9Xz9NRaocZWuNBE75NftJICUW7Bi24Km2G81rhSFwiYvoP83jZyt386RjiQiNAF4L+j8RYW2xxB0L14Z2vdi2wVbFJcQ8dZqtp1qcwQmkeFDiVItwrzabR2pgFdJzQtcsG07psAevYacEIOJ0rDFcSS+eBK6iHUU3OkgZwtj08tK30cQxR/FfOjOidDYdftDKoX1FlZXdz/vB9rrSUWvxOB7/jsc+4DqA9RcDdnKYM03glxY5ASVcZmkKnbGOwsaXSK4tISwOiB+RSukBTZYIhNiMqSeVAphq/toGa1Z8vbyipXCOhqQ+UZkkTeXlclnkgw3Zd0chvgm2uau3ZkksNPi940yvuX1znmNON+4I6i3lcvT7ySKpRCScIwEcZscdA3R6rAaxe3t8Vpv154k+dUMMZBwUQC/QdWoMQNJLwHBQZhtwD1oS/yaNzSRWrHPPwcqf9PAeMEgFZdEW4OqS+CoegkGGND2RBodnW7J9je+NNtNh3uk9toNkxtX8ySUtKSMPTLWR5NKcoFBAPIhxB24b7vnSqtnDFmj+FnTq5//Vrwp4KlptUUVKwp3hI1ZXH4+gkEbp8DbVDwTvkjUUUq4Jrhfd9cEOLtfZqkaa5ZV2fA+KGL3CVX74RBX9AxXuvAd3grrKiR9Gc/5XaYjMIe/v7Boe4Ei/7Gtohnp1n7jTUSMxl5mZzLOJ41UGbSRNg3OUW40jkEzM1zMQ/EW0T1Q0LU+8EMPIo9XplJ2TD2cyUsFW0oWgHC1bEN7QDUtuMwZzA+/1fIjLVOSUZ2n5a+9XmcK9tl+bbwQFWreHR5ZmmYgntF0mxBR833YFA+C4mFmBzTWt3pJaoGzE9+0OnVdPaEwkdndnLqr6/G0ZYmYpMWLaTKD/ngV5XWLAEuRMxEMsd81Qu0S6RDtEWWL+pTDdczuLE/qZQGILhg653s+i82sb3b1q3Oye26KpS4IfWrtGK2EH05hDNI86YujdcNBVjf8Dv+xjN9xL+00/lOKKIMfxOMLR/VT9kKicnTiYNpGV7TxCVnqObaOxsnJTD0MExtnZ530h0sdeRSqtFJa8opRDpdGAU7PlIvl6u1KlMRupYLP62EEG6Jit9Gr8f2dFsPSOE8gteM6PEJYeYFGlgrk7aWsAX1k9rjy1QaGKEpsGH/dLVDKFArdyCFLDS7+HOoOCrLTDRxF80YUfUtt0VGIelgl2d7ZyJvhsia4EOjDYd6Qh2MsN4sI5MmQCjZgQqZ8KhnLstsVsPgBPUSwTQIVQKAdQkZZjWcHgcAN0pM2JYfdH9RWOhccMy8dn92prqwHZgx/XROg2/X3ebvB5DcGpT7nbip8UICUIaqkBh8aFKYuz33UAQmr6gDYl6bULWNEVZJ7iqemrj9LzuIusnzBRHcZZ4II+JI4P7LOIYgi9GkCnGye0Q9wcWUf0G1LSL1y+uDtJwklmK6Qv6AzfKjKBWT/HFIH2JsPeO4oUo5WntOIWxTNrTH1JAWgyCK21PqLRa5DCZC94UZpkkoJLIqqypVoyh7+3vftrdR1KisGFYrtv0XOf6P5nX+O5YtdDjHR+nPq81CxchV+V+ijs1y';
  const _INTEGRITY_HASH = 'e1c2d1ce30442297797f615a19af9c8c1075fcce87c397d95928d1a9d1d20f36';
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
