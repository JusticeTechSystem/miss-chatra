// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NntgNnwtWkiYQppMoPs1oNKR2UoumsT3KmoyrUEWbzoPRkfwBZEo4cjSmop27DeuF0J9PhlvM8WGTMKgolLIsMoO2GYuEmP2uv2Dfcp+Lu/5KHQXnqIxqrvL2gXjLp5wiSy7Vs8rW/4FqvfrZKTdN4rveKduv1kjq4i4iJxY6312ZuckaImS50zXLT+2gyor2RVr7O4EAroyRW/6e3NiS6+aqHnyTRpNPvMeVi5FPXGosalDyYodzgdGSaMm3G6Bk4R5QDAe3sadFcpFcaWpfYlZgyy7rzqvSWFvPaZl7D2DpYjLybWqhmJWu3UoejIUBDjR8UzcZv5r5CSjgEeZkQg3z/WAvd9UV25yiD8UiA53BrW/wAHM0s2jKDMkMEbiiuH695tfodqC6nZwmK0LqUOt7kw+j4YOGXUv9FGSJWGi1D+OKks7z4sjnLSpVOa15YLJa8XehYQEEhYVtiVFHDyniWvp1XAr7GnGzLfVKd1CrxdeuoyGxDt3QVx53iBltZnRVwLu9G81dsdj3b3J3S9hYJksXTLfRxWfC70hphk8iyupkuB3epZYmqPxYroittQOFkIR7cDLO/oyuIf3+ONOAljy9jF1DkAKLYCi2+J8Ic+Gx/0qdTKDB2o53tJitxZN6qSTN5D5O1vIerG4I4HRiZ0z8BWx7Z2gjvrCjGfEp9vS/iEvla7QMQOlFOk3L3LNvrbSnC/CPJkwUVLvatiYoxrxk88onLc8qtAK18jnhllzfy66j/LaQFgE3UEtbp53Tm4b0e7Bwc2DvFeyqr2khOXtg6Opx9E2EBE0bgG0ucUm9sgIVJYoS2hXvrLesfkUtMhFSISWBA89fZM5CsKojsnCaAq0AOsPLTMq63d0e2UjdIArj5YH8riF2JVJYtEcpf4lOno+JJHlebp5rtwDHET6PQepKX/TpL+8o/GH1eiWmaol1jfm5LnAw0siirb41CdO5pXNDdAcJl5JZjVxheAGOWK97LSwJoYCgofsNU7Ys0gHCeuSb3s+KYn484ftWwuPwD8FH/ylvSTeC/g5XCOQHODm5JrfmGhg+NtQhxnkfwyeS4jjfOz/7yG3EezqXreu5HvP+5SltXZ7b3sQVgOKp1mT4XURlxDryTSwqzEEBoAYQM3NwhQoaz2k5QSU8FssskqfvWskSGOATX+Ck1UUU9g5zhOnipn7K14mGqMQ4r03faGnA/O66We+';
  const _INTEGRITY_HASH = '5f8d0582f39ef766caf88156825d3cc0d766ce291335d72d5d747f004de844c5';
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
