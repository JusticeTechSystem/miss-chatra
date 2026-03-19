// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SE0vwtgLIwnhZOT0DEO+LGbwMEaicZbXSPqEmcXL/341dtrvii3AKtQLyq+nE49naWxJOXvPdhFbZKsYxdFAacj+WpEwK+kMMaKwHUNwxsNVN35p165Y31B9ID1h55gLbMBCE14BzGrcBGd+p11C/lQ8NuGLkbVoM3ZTho7Zz1PWC543Lh6HJurkuqfEDVa0d8HgNdCdmWVsVCRtaRpHyP/kdVkS8wHgLHiFRaCS7ueG9CJJKMYoJEQBrY1NScgp6GFfjpoZWItJ9Jbs0Y0Sd6qlqpZcoMMMivmmvcJRYAXPrvMD0cPV8eiyocJmRpWpC26HrLKvisuQWsC9Wl7znPouhv/wxUEl67lB8tgUCpeT0bUmzQs5PtWsaXKmOYbOGNWYWrqguJG8Ph0AQAvM6fOtR0xiPgMWBaIGKv+71Sto8Ka1ChtdX8RRtKZIUkZZLAB1rc/ihgSuHCqd3LU2sdrhYGpkFvx8ICvVyrvPJdTh4GVbAlVclSbZwzc1ZmILkke9whfq4O9L05sOiGmJBIJOs6bzsSj9fYe6I02PCTmq0XH1uk4UleaOApvYm6HQtM01YqGrJGJFEOc1ilHsgi6otvySfIgEJalJEyeth/QSU1ZAZmbcIcfVXzMQo6yOzuMrD7P7l900d9mJt+0UXkqMHRy0wrPeMEEfjiu3qBMGH31QCOnzuGzcFFDlijyN/YMhUIOyX2KAk7xzmqTZwad6Nolk2K/5LtFWoRYJKWlGuCMVUQ0eiJNH+zGjjLETRKvphOCsYT1FIQeMbEY5ajNHy2F9i+meUhzfJmGLzkgP5cHTLHYDsCbH6T5KY1yUmc6wRddeaXHv9wGe1PD61kMaOzEegGbs8mhM1p2p9tHquhmMrSO+nYjeqO7KWkQke0TnC7Rbb13B1SDJFXjgtZ71gUErnf+DaSrwiXyjgv4yTtSSAS0K8gsfnl5Gf994QW41vhG0EjaJZOJTQ/u5dTr2bKwm4bp6XCUNTkeDA6PmzA0VsXAk7haBwfnRKaay82+XtQckRRpVK2bAH8vP/cHDZxLRoDYgSrnAnyR1BXOf+9lSlJaaIJqxiid7AUXiZhk6BwRXe04DyofbAJx4eDYGiTq+h0gEe/rFAqIBWpE4s7gW9WSLYV0fVrZ8ewWwU+ZMjv81dtEMWLJSxp33rYNrcKftrJmA1q7VLkBiwbmxtUEMraRDCgLZeO1B+s07UDkKtg==';
  const _INTEGRITY_HASH = '4abd50c4d744cc04806f66d64da30b97650037ab231f3fbecc10e0109d0c5272';
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
