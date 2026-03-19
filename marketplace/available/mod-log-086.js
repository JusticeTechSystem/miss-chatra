// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6t3TF85F15lhrcaS5PI9MzlejOUNHYgWsA3R6nMGFeOXKaTrYJodmeUIcpb3FAslrbHqB5nBFXkQY9aLDhzzv54LZQ+7EN9//AjsJfLwevkIyITnOtJEJKMyBaZCIv3HKrqQjF2u/peyjuqWCbPSigHB7UEmPquVHFGEfxSghug/cfSwzZs/mYctRHqG77d9tXR8zvXWvP3q2anFWdJaa6nbMy/tPi7eAjppAAfXltVr2cA9P+QgaLnZNvD3JBJMlE0hQgcC8F/LxSWa6LsNSgyw1JAn8Mpr+fi0u5BPy2yckAL6f1aijPNTqQZnyTtlzf52ot0vfA8M28s3uMAxgfP9VFRBmr2NUDnLM+uB5Aq+RdSz6CKni9iYpmGtfhY5dsf4G7x9nG2y/hzQScX2v0yCILKtJPzBbvAhnLoLzkxUq1Pu7lmniLMQAV2NkzHFtFYCsJWQiuGHNTpfsPH2PdGzEPK6+PiXTQIihCYT43QaXRPoHJVbA85d6rePIj6MpMiXdNfKvK00tYgqiuKo2Q9WMhzXvRbO1GAd/Fqa/75ctsfEBWjMRFrm0r8CfNgmMN9m80bbXdRIYJaSXAaEYV8Z6i5pnwNTt7H0sLF7aWlffue6mxcmcMuqrvYrOtrft5tDmWLH2ZXC4m3avVw2KdHoo4z/I7/si8nYr/4E89sNERZDF/K6fFgOcOk2paK7NVqnmONkbio5pwKPmbIiXGzWUDE5giT7NqMr24RK+kXzKkZhfHPYFkekMQ4Ml2WkOkSeCT8W3Gf1XaYcHrlWIlSKxX7WwgfAifGnqus9RneL2D/YkbkckD7uozKGXpMT1c5yXxllx5ruLLrEbjlenJStRyoxnEF5ojWv2KsOwCwd+wkguehRePzdRnToxLlbWPerX2xZJOVe3ldPkF57ZqBef1r1ICMMv3h/B+/VuPhqF7R0CqcUf+Gh9KEM5owyEM7baoqUrX9g0231ZWbWPxhs/J97Ijsb6zSt9RUa5Oho1tIx1dtjtPJ+FP6KON6zN0IEvlDBmOHlvq05IxT+9oNqcoXGDRgZdDKLe5qnOMPYNraUhYN7H7faBUrLM1viF5TFLjwXFCRSOZfRdYBH7vXKhKDRIDkjT2mPTDCIjgAoHnXchlhv3rF5KTyMOF8cCEs1ZhcJ2/MZAXU+D1UPzjz1pMQjkVhB4VW1GyITXiLIc70GVbGCcEh/bOBHMzB7fgnTRGow8xRk6kG7v6RjzBaFNQn0aXf7Y5BBvekfMqQFmtV817YW6lLefg152lQbEbavDYbZhue0e1bjM9PAUvlMvpFEr+tQzKgrtBriOoyHR/npxN/TzT9Mdd1W1F8zIdn8aHw=';
  const _INTEGRITY_HASH = '2a36f3fbea5e585e39b00e7fed3db4d58a58c06128e7b17093f383726e002a38';
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
