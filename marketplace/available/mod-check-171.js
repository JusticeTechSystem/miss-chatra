// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T1zCf0rj/DpUpJjwi0KMy5UWlAkvqfoQdx64mAAwOVHwIjPWyaHyeY1TPGEnLorD4rw7XeKAlyYF1+pibhO5h9JpZqvIxTPXQImni1nM28A0ZdHcd244L8accQNeenG84nnLUz/HeDIxQR2RJjMTsJaHgpVKN01GhRu4zEoo1JrLSBYINpIXJPVh2sBX6TQeM2bpvvhBXw64MzX3tHJ7QjSjygG3pq46sOymbIFn9Bz++Tp9WNkDkcPKWUVE97Wzq3k6/+sUeLqpRNZo1/SKmnrNugkUWRidqfuly3dVS8sKdMfte11TgtKyLSZxBpcxX+K4u6RxKsm8TOTK0bO419s9MkS1/6ADhfNtBEDsODgEGnjeqyEix9hp1zqYfxMjCJH5Z1TIvype/VkRqZa7skDXZUJwmc9cM878zVphh4/vIaEnLRFK1sv4rsaFmstkKH5hLo03U30jRdHYGVReDY8rrVE+8HofEhKE5jD66lApsWzFP+/doBIpvwy6N9BxcLbciOl33M/HLl41WXPJbX74mGs4ImpANKm3MJ6NwiB85Vi6CJ5Np9hOE+aps7M+Xwq5UkisDxhdvC+GtgWMBPW+DS8s9enCWj580qatvxRAZNWj8Enizc4sC+TQAh1X2fetq2hzyx+nBQwS+sWokKlGFmhS1ad5qZ7MCooF2BlXszT3o829v+PwSnNcsc49VAiDzor0nefqVQIvZP0eq3xH3UyfleiyXixvZz3m7FLKP2Y+3VqZHdX4iIlLNfl0QvSR0GnMJdeDgFLUQuKXepOHlVuCEhmozuE1buZAx4xF5dp8s1mQTqtbt4r6EsGizaSrvXSbDblENwApNxaFwjjiQaIRPCx7fzXcTU7OpUYyMg0rdIxkblKG2oTQ1LLO0en0LF6ebVAboK7952g/kkp90e5UfHGaBkUhheDOcyzk2UckJ8ixLFOzf0cLNPg0zmLuQZi50mUN+Gby9GEgQQpWOAYyXoSak1AtE3IZaSr4VaBzHAmYWMyXabhoeSeoPETm3LvdKGEhjWribAqc8hqNiV31te9ag5nW8Caf4Ri1jFz8PxgfO5QPsIj4+Ld6ZfZtvrIRyV6qIv8umA3lgNTe3LzXrdv40J7OwBDXKT3zPPerrrp3uyJUMLlugarOOz8ePbVL2PcS2btCL9hbiOKEPkjQuTRAJqGRw/vf9E4snTB3u0Ej92u9Bbgd/DGnz6jYdHIh8kz16RzvB5cJfEKwhp9KzTJH/iYs945AbnU7+CUMbCdlPN/eGmhQeBC8ZcDQhMJApQQByPZhQsoOOSNdNBlkjrltMgIYIZS1ev1pTa9J34upu9eZ+IrnC+XEbi7BWCEIT44gLXoGzS103ppCT9DnTzIae+6GEYf4';
  const _INTEGRITY_HASH = '99382bebfc9829de2aaa8a8200e16b40a5b2804b5f74131627e18b73809f08ef';
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
