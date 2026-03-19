// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mxwyyb/7hq/79ayAGcCt6LRjOy64kvYSn4Ma07wurCRgf+/a8C4KzlkvGdp/TyL8OEUbI0+EShFuy0IgzK2UaZEexwwd0ZvPfdczpu6qCh4M+fzuiDojl7kOI5GNOn6M4j2uBpRsdkINrJs0o0J+6zGujnjuqbehEPZpFPe6s9TmSqtVUO2Rqb1bYXpq6HUuL21gozKczwemggoq+Yz12W/TXj89DAxqJ67CdSiFFBwuiSM7NnU859a5tijmenLUVSJDnwFimVifaUB5r48FeSYZjiq+ZsbyWpyYiGyc0zt3H/VwO1GqD5K9s4BM3O7EzHKJZfgNDJUM1m7WwTuIqw83JRC37oM7nrb+SuPXVJ6kYvfWTh+n9eT6kSVsaJOENpDuAGuljwRuZ9/Uuw7MEmH4GGJgLAj7igUWB8TFil3znhNBCPCJ/Opv4tAKnqQrVHuKZKFk6L0hOtGwENerbm+xSzwNuJEkZVUpskOOvjofmzCQPECJVd/1A7UKWUYoCC4ZrAd04CpdZfd9WWlnBMv4mRqJjeHvIEB5GgsEKqdkGjRGNdJ+J76hNaliy+eoQ36lnG2bjOe2I5Vp02RV4EqIGFWKJZ6VWOjw7G+J6+Kdhw5hSUTRhBMX6ERkDl8AEkqk5GwZl8f3y5n0AO48ibZzGcfO1f8EYWxXmTekCG/IrsiPOFDthxP6BVxTQG0hUEVz0n4V0L6cHyEuFyccPBp+K8eN';
  const _INTEGRITY_HASH = '6bb44414c069b73d2b83b7b83449b0e056f04e560bdd88e757a4ffeb0aa70bb3';
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
