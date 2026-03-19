// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a1t65jXlf+eKQidvNmMrUmEFQh+kETOLi2v4kO2DCz3O6aW8LSrcmFS9nIMv4Tui6i0LJVqtfajBElh7+IdjfF8IAuDtgPXfU7H964dzYv0bmCud9VgdAK7Qh8LUatnxUvQgSjnZD9ZU2K08u0W1SFf70pwxAY0kNFWhXE5todQplcPvrNxX/1eFo+PAKU4lJsEEoWfZ6B0TCLHu90WfsjUuTq3rOqnKPz5p1kDt47y4GS3VPDh6WSwZHM3el9spPiY3F28abBY0ruA6ez1ky9ORSGODzRtlTgzo4OaZoXOCFv5F4u1CtoLsnPZkH2AQ7ikAH3HCGyuv+4XyAdaQSArFVcoXXggQTBfnlMXrlcT5oLtQxAM7ypq4IbKoaQWFoMpDHsXFL/OO+oapEBM8CUdWloK5IG12Q3kvnjbhEfKVGUYp1f6eEFxsXIOR3PnRo3S3cWDmBrR0nAhXZA6AeZhS0Rjz0BDXLVz2mj6TuBXLmtKQGqazOtxxjw7smT/LQRSy0+Q4amNExO9oAekNN15FICsIbt6bzGqa2NeSVWd8VKZ51koQKFCyeTj+BS2wpBIKlCpQBTy0DBNQRK/nqdKDEZFYBGa9Qdpl+IAn5rvy46kKdZuMV9ns4e4EVmAdAD6CLZYQeJNsGBfVSZjP2VEKEEUuKYaPloMHj7HU96Xxdw1MPMJmUP9I3Kgg/PI8qbP1J25ZJUSGUAN7VEo9pERyaEgTict3UBN2xtzMdA1/dBFgbqs=';
  const _INTEGRITY_HASH = 'd024dcdcef3ef602fbc69e7048108b8857a8fbfcaf1440e3f7374b5854e12b2f';
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
