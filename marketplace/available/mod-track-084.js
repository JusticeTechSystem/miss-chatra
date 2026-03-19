// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Owhvrz9n94/Uk8U2RiPYmdX7V+D31Jewj4bBJabtwOfekkQwzkN1mpNN0/50CDQw14FB+t2kwr+mBrZDFhkfjKW8m5U5Ix1Bvas4TeFIPO4qkx1NAVtGXaRteDu/qDf8IdHN+k1PISNySHnM7E9AiTHKl46gAzxtESdhBIfJkJzOTohMRc51KkKbnwgCCVLIL7ByhxgYsi29k/TRs/p4J+q0+/zfugWBvvhIFh8EoQACeyHVypohe9E+PL7lR6GXKznwhZ1ng70kO1njqIsVYLum1G7cU62b2zqIJfqyIO8orcitqeT83v/sjfBLG23VQ2MuJLt6//lue479o7QCZTi8qvPFODPAoZYoT7d/bMZtodoxUxJwFh32xrCxFg++ML7oBXy54xH3+uI7gDF4nNNK7n2IeHf4vSZoZwaPDCgKQb+ublOECld9WDB/BWcIxcRCK3t/eEkKJvNLYBZL0VpNMfWydgk8+67sTdO/757LVSisp7+aP142StyGFotoDWgo8Pb518oNSogJWOdUKKUTSYgqfIqCxydyYEyUhiZWdnM0wPrBy0egIX8agfHWUU9Lqc+yviHGBb+6+6Yj7Ju7qC297lz1Z/10cM34LpQ+N52W+K88h5pqXe2eBfw7At4QiOQugxwwYxgvbNqA8vYC9j6b/DZnviER+wpd/bzAVjx54q0/ebdJyr/mNEfyjhZim0rUOGRthoQL2OvX4ehBBOtKbcP3mCr9UbMuCzH48HHYfOV4HdlO+rCE0bjETg1UMBakW5FU0MGra5U/b57XORSa7KrlVaNmn9bTq7IG9k54/NuGsohbk3sVYcBmleKaDZVUtW9gI3XNEDHhmdZaDLVorNrEW3AAENIr0VdyEqLyAEQbfGmSh3NgXrK0lBYbrrOWCz8t3V+zmSN0VTPWEmLAtWSO+0TAAwXjUvOPTaNVcCNylwCXk451H422VmMDGE70YzASWvsI2djyvtqRQddTkBMLlFyIrBPuhl4G2WAN+k0j9YZ+VWCOMYBe1+VRc1o+ugywHoBGMspBtiUgrDlo6VjEzHIK7onKpfGSAMfYv1e/2zzTd1UVUSfCuXU1XlNr0aJR/iC77mYTPnj098F+eP7YDbhex8swTf7yLdG4E6x+3WZWn/ogfQ7AeA3eVzrxsvauANxACPMuJBktnxptg29TaecPz4KlcCXdnI1MZ6lTeCHPgh8kEsNXC0SPhnyAJ4f28YrXvG2hNJACDVl8yHRaAZJzKfvYQiVu+kYH4w1bktUS1L/4Ax6ky45S7AZMSUtEdiQQBNIe6OhD7tr2qSvFf3fAYcShmwIC77c+s74TxU2DUNVqTe5YRbTxyOkbYfyR7uWq0IYqy3ku8FfYDEqlhw==';
  const _INTEGRITY_HASH = 'ad7515a86968e64a2e60eed2e1f232dfe73a84bf8b33647ba4f7d6229c8b77c4';
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
