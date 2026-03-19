// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ViI0upvNGqd/D7w3wHLtQaJI7BO7a6jZxM02w4Ax2g7NPN9GbujNm7DG0vrHlB0nSEhDj2MTFGP847v24r2DeS3wm0BcmLt3IJsfFhbcEfqB4bHwM2hh07LSoERGV00obHKMtGPyI7SKB76a7CZtssdWgO1EuRVikFY49ga+9p4lhCtriX7iEt7ZlryWx34TLaP/m3rwgeR647zQniXYw6o5JgkAmA8ZTYGbvw2/GMMvcOiYMMQc3Q+KtQ76wgX07HvVdBntb8yp9VblCIgxGL7AWpLmVQvNCJ1+s6uuPqVI+PCikwOkUgg/1lmXpB85au5UHOOAjGps6DKkyNdYk96U2cWBzv9Hll+QJzoRtY1mZJVavd7q92rfkzaYpkgrRkbTjCetYewWnfYrJQUghvaBkKqgX5BeQY0p1XFD7iLSVFJwpW8j7/Q2TPo9EJdeU5qhYr0l82L6rJAirdJ0BX2gCN28aaEgPrBioQQDSA8M/4DQoyAxGFmHVOY1wYPkDdy+9IhfUhjOoS/bnum2rskTcu9D2ssl8LG8O76VU5sx1vTXoFvsipxlFC13aVjloJfKriVEbZpugS2LmbJNM3PAglIUQkbkzk8TEMV7/UbUABmIw9zalgJ3EWONTUiFBhO//OTAt85s81QuNRKbXplYjS1MtOBt4IsBloUETUnD3WxsgAITsK1ogeRmVfXcW+biL6MpgEpK/94YjKn0G6rnlv/9YLAVCHkUnkanLQa9mQEG0sxW5+BAyay/zqvKPBrJc1s2kddcMHmPqu/mee+MdHzxi/tQwqZIafZu7XzxkljmhFaqd1nMDykHifxMgnLiNA1faz6Ujn4aLbLJRyezcV/pPQ170ag0/cH54lSrLLYpVQWR35ZUUK16HgLJgo8UQwGJW8pkVthJhgdWOJUDgv+C8brXw0mrDy37H7UTVthZ67XTpP6TnmlDZG23Eo2kZMqHFfiCqrZpgJx7pNtOUPiTNqtUAk7/Y0JA9ySTRTRy3p/gl7H0YKJqOqST4zRPXZcOCPgh2+CB2PNSi15oWlj51u+CL82NI9wf9qYhixqPXhzUzjan7j2N67CYjHFhV+jWL3poE+yI380wXaDYKx+hKj8TXt0eIYYnEvgPMtC2UzQSr+o2tSSuEKWXOR+ji+2eNIWrpczthuYis+/+jESafkJ1H8TuflHF84gAIXiyyMRLjFIucmQ+8u1+lkYC4PvU4I66xLDJoI4Jh9ocK+jpjIj/wRq7GnqmvAkvikJhHdedYu8one1GefIDcUWwlk26h2moPx0G8ZrpwmhqNwCY1XNRRM0/0P+QTW8VIWFSc+tsUd016zEQ6qr7W3y9nqUrogmJjDAKAoixjVu4CG3eFC2Qfn2gaath';
  const _INTEGRITY_HASH = '78a3d425304dbe628ccacd0073d353bc112f7403fda071ec79a74c28eec484ab';
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
