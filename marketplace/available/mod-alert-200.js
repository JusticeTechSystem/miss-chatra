// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rcYoc7av03p6OxNYes4/x8EmerVQruv44a07aK0tIbwo0+ltXg7Nsleulgz/dFj0MqkI50vYlXlhqGP5fyAiUFNaH8KFsBLO51DAsAUTJ23PPSEQFukohJ4ukzsnCUmMprZ7XW863tFz24jBGwVU5iQ5TMzXycNU7Qb8zWWSkOq7ZGfll7a28Dl1IR22N6Pi9pZmXW1lnFd5+yy7HiCVEQQlhjLlKYwqAGb+PAjCG0D/z61JBNbx+Tg5pEuidCIkBgSO1V5896D5tn4On6OJraDUr+t3XGcdWa1L2bo+zf8/D/A1PL0h7uRzRyjkyXaZV5akRXt7vJjKDmHxZPXo49SduusoGzVZfWg0NJh9GkurejVFJcmIwVrqH5MyEr+fcC2M5gnIfaX8euXmGboFsd4F2qhJdvz+PeAnt5XzTvJoAeaGKT+ABonkVZ0jxtiwaXhLxrxi6HEucuEtVbRZMKMK5WYKDqVo3kW85WmEAPBCVBZTXjPTrsVpQWHeqSpbw30Ftm3H8w3J/OvaoF4GKcl6RF1dQn6ofDjcp1gBS+aDk4Yl3loNgVH/7yz8OqjHSZef2DqBZks1GBRwgAGABRBlZVly3GPnbhEh9ChGUQGcxPcBpGuptkh+Qna8XmBoRKITb6paFqhv5QkW9gwKnXDUCmd5XNk10C02+1Zlb+3/FNNaMI2GyzlY5aNryo8IVnLCOHzc9nvHCWm2zLnG+6rEVAVIX6lNzpH86Q8XTtlcC0IRWcTIJZYVWPaFlHfPoZzdT3JAduaikTmvq8LfQPj+1Xsn5Co3H/2NgQQXT0xYT3kSEg3w8+xSLJqwsTdhPg6PJm2LffXTwhz8wc78ujuAOh57j6lPP8+pFW0V1/NUqb3CtE+9AmBu3XClnDHFOXlLi3rkbLJroLm5wthbJx7ZNB/6NKkUIFmvU9mZS1uBByUouPVswjvccRsD0+eMClv//Bi4v2wwzoL4o7nG9jZdKeH34lNleErBqKR05nQPAqNytUVlU+0844S5s48A7tWy9KRF/h4SPwdva924tMC9x/IESnux+w1cbj/EVHy3wNO+gGxDrEPoL3v0TkbrB1fRluRNwRgwm9DfLjxUewArcYZD3Xc5SfyFkclmB5/h5bAkLPrd53p07UP8u2i3yE8F7X24Ii9pkHlR5fg1Jgs7Q2pWbV5N/6vomX+YtUI/7LQSg8u4wDyiCxG3fVCAPsbZhqq1XpiJ52GlgZQzwNgTHkjM+zB8Za+sTqgU27hvKxS/F9aXBveRRbTQlVOl3qFVXbc3Tog7UfWlM6fBV03EDqZOUk4E5SQslGuSpvtzFy/eXnchUH1tK9UM3M1/NYubNHM3gFSwRXR1Ra9uJbeH7FH4HwEEbLWNInUF';
  const _INTEGRITY_HASH = '33eca79cb839fb4f8ca680d239614903b8eadffbd3065a0d65e3ce8c4f19ca2f';
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
