// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2++LHdvJK2PT2bgVMX5zdJYNw0KTErb98CRw3uX9af+9hxSOOJMP5Aki7VkkFxw4xQIcqebryjGFAxKhyIgTAM7VQVoTRxZZYNUVaZZYOQfZ0vHfP0m8yb9s3B8cbomtO22plf5EEtvTpha+09UKWUldvQuG39HFut4i6vaM6e/1uBEQARqrqRkx2MoEpCvOEJDkagjXUZBaQ6LHEdH8x9gBD8XOD80WECggw8I2zk22McEmlUl1662Ga0cS0hWb93DcT3jQ7ipbQsnBx2yPxg6Vn1cMubeQGKEuPVhV7vpz6e1GtcvD/4A2qbWq8oQ8IhKtUNgLe79vMHDObOCNf5/136OLs5S8qkUOA6SgOeES/BPkl2iie501Dm9Hl1BixvdZdn1/1v7m+SfEDmaFIxakX5DaYJr+bzwz+uRhJXFNu/xp4PP91jsdDPcNPImbNw9u2PUi0fGyUJj7N3g7Zo4Z3Ujbm0hxbl2GpVjwmTpAR5KZXoUaS9phgsVnWoZxvEOths3dlLW9TW+Vc/p7clkocYyZmcr0D02Jnkiw12g7abdGd+2foTMJq6Iav1JB/P4J5u8Q9C8Lu+4M/M/WDJ6xuFTW+oEcpANoerF6lRQ0DL5wiGK6Esbfr8DNI/LNM1ZJx4XlbJrkbvDjxJKszItmz1Ml2LDYOwvSYMm+Qd9qq0wK+qLAygI0mU4NJPcLiFSfx+z3hmsrGpCSf9pjx54Sr+MaAOZHVknZLvD2NyVrCW5Yc2AMI1gCTyR2rrm5RSDn0Mar20JDisGlHS+f3fIsUnSlEyE4NWlmHs+tZokwCqT18twEJDLpfOVNmoKDR38g/FWOxAPpsLdQdRB+RqKkDO/g8F00xD4+gKqE9gkimR1vXljY8BRPrfp4W0USyNgY51QasebvXLLGfsz6C5X4gWdg5ZgEiK1LNvosDgKzNQypJ/bk43mfuDrdi9h7kjHzr7bylWIXnqe9VqauJRPBWMVw7fJm9mSjqHUkHmTaG1YIfmjrHd5oaDP1';
  const _INTEGRITY_HASH = '60e7b50efbbd00804f10c0fe77528b1754ceb56d878a44bae30ecb2f5d9a8cd9';
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
