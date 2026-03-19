// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iLRiHtk5MSsfuSdv7NWf5eSc7fMYwud6Aj7wa/tKz70J8s0bNVTjY/9I4G1hPKfh0XBQr09x74oVBzZH+gkov6+GHuQDboYKEJI7GmPG4XmgkYPgTUxys38GLkxgMCDRWZmlCKkIyLGSiNYBtXqe83DlvqyizgUnY7ag2zqKVvdShk8+58xd2XzNyNbqh42z1nT6GFHTxu+yzHFLfvZETWQ3ukuA3GB3rGjvLo2uKTW8zQVSiUdshByQRR9WLlCsN7S4o+Hjw5p6I4/JLgSCuDpZqI+/fHaFEjL7T71ckeUp9VhNsYieTPhYLYtSdKTDK3FpSnY1mP3wvvoWGC3UK54Scff+XScvCosr2KokRml/ONp1cPg92svOVeih8VSVjLkGWQ51gdO803oDQ1L0m7qRKBrsIS0eIcMGsr+/3TyixKPWLtIY2iLy/yP0JaDHAwOdiN1pez9InZCzHwHhkt1eZ3nDbksUmoitog58oEvJ6jLbaanq8H5sYqlEhEo3JyVVvaWjB7PvOI4PQEvpJgB8zBZ+mRrygP1wEgImsNavQdOFp1ePfvOBF1U6Oe1uvhL4VWjjXjY4VYQty7yce4c0cmBY2TQyWAX3XoGHx+B2eBlAsT1hNIWVxK0KAolLFCpoyAoa3hENgFIUaCeC1saU+oAZupHjTlQy3v9cJl5iudWPykywJxhH9ALP2rSdsgukPtGgYQL7fzJtFDQ8wBQqNFV4gRYK7iNR2jAPWxV4Q9pK90HS/zTzACT4RLR7mv4HNGEhbhCEaALKt6MFonD8/ZaruuIZ4mUPF2QEyZiyyrZdRQ/9U4FQX7reEdLjFicCQV/eF84VZdgeKFUPXmyEHeuW3Kb2nstIpHfKQFUP260zx9Z+nvm7kfh8mKPdFC1XKdc9khBihF62Rk9Xu2uqm2FE3ZcrZCFpqnVZ2kWcYG+CF3mNHSy0P/AEspy4NVH2YSUGtPE7g19NZ4qK/djIaqRqxT9QWakdsKvGTosc/QdSQy3BrHttULJZWywNfAF4h6YDcoynou8iqjmbE1Lava4cKEtpz3dk+zBpHiL5priwh5PzW6Ywg+DwV0PoiUFLNOZKVLk27lKvtBYj2NoxrkMdONAgCaAAYm5YsknHE1/1T+bhvTBP9FVWplUAE0cv+kqy2BQaMkzJPfhQYKk4d6yE7uXOEnKcEu6wTKx15MJf7cu1lZCeQnCChASLsg0Pq6+eTt8lUEw8PHg7ynv0SC6fEKb8YYOOIWye0oA2yESBq7AXEV6cDM8kZPm34P+e+OMqSoAU5bh80CAUyYSqZ/CUxQ7fWAkDvI8kzlYY0D4zdZVOFWn00yx18tDfZwwj5jbyQNZp5GlNfb5w2MlWZbwjuYTZJ4ImbRsUFTFLx0o=';
  const _INTEGRITY_HASH = '1c11f3fc434dea2bc0180ff462705031d18d36dada340681efb562243cb99b66';
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
