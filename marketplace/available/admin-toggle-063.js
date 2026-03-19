// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DS+bTroatWpEUF27Uykqlh7CsUNEfACKOuFHCx/vYUtxmed/QK+5ARySeknqQUVuSLssrpxoRIqbyoF5sfxauYdjQnA5HIfJ5Key6bpSnhhHaRjibxk5hIkIYtlnDe9GQ6+HqLOOrydJ/+7ZxgAD5eensRpGcx5RMB4I4BZ04nQf5O1fhcm0hPhvIcaaLjX81w4gzVRmHRk3hZtSaGo6y0uvJimjmgCXnsB7x2+UrDWuO+d8PZxWL2Fi7pGgzZH84HFv7rdJdGcaQ2ktLf5UKECtBsvGezucY7/mwc51dk4WwnnMajjWMH+w5+SlClx8qe8LtOU/9iSghcTMYlPcbr0e+9xofH+GyH2ZFMc8krGTaA0ulxG7fxK0jpDzVPrYaafgoFU/K05hCKS/7LwDzzq0nnzcbzqoqrw0MDYzb2PnDiJM2fJm5sjab0aq+4ZMYcAfFlT5oAVzujf3fTLx1S3kcSKgXHMp9AQ8lfNK6Silm5jGMZPUX4AuP6vqofQ5OCMg5433yFh6XxPm2aSeRUkPP87CaPjWPoaMle/mR4Yw4eeuy7TFRbTFX8vYdNldIFk4olv3ld/WDh3kRd1EHLp/tLv7VZndXOaWYQupALF2bkldAItdJOaIX6NpS8OIIos3D894vbMcojVELmQ0Pb3Jy5XCNPnvK6ud1WIfgDVcTaHKWci2MMCKyn/zdZ0NPNS0rfrNSMSwzBkR1kvvLUq7Y4h6xHD+CPcvhlAArMAO1EoVRSCaj1JFNnqkyojCHedI0g8DlmV8dd6FoyAbdF7EblPXWufss/iVIoaNb5Ft8NbqeXREnCUJw3zJ/IRzxOtxxBYZXy99ARJEax1KnKJoGHCvMjmRL7FKCOqGy/IOo1+kDNXOpLAaHjZtdmKp2rv5By9R8ppOBM2Gg1XYeM827HgeTr7kttwCn2LaeC5sHTz0L2m+KGSz5RY+y9ClJsRxNyFmpMT4BvXXhytO/w08YWEsXmQhxCT7VzoXyiXasZ5aoVkA4h9NY+MY';
  const _INTEGRITY_HASH = '7e300943f6cd4a51e712107dcecbdd1d016806f0513fd4e2930f14d43eb0fdae';
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
