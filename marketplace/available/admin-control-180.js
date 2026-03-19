// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TpjQjL/jpg1lkM/rgqraerqo/F6+RIcsj8qGDAX8acdpjpG6ktsdRh33AsoFN792vMynebKqVTERqvjJbUVPkShdhDAnOe95Fu5egnQrphnXazfF/Z2eNtEikDcHMIVp16lmyI49vpEFFyn54NW+D3oqiEcdgLNoKAH7N4ZuatOga7LFKAbsolvXit7acGXaYopj0lLbVZFa1SOu36G3bkBZWcy44oc130j1CUAYl7Wu1CCNSNTzIQh1OHb0OzSCr07DvFUC+o9zl2+BsW9MfK1tEzWQ7VVbokAGuUw1vbSTo9rPBEKbferuv5zKwZ93zIZUqWXLi+U1don14yQDAGWhEMop2fi5ItJxZSXQjPLISi8xvPSaZW02G4d9XkN8YdkKig2mKqBz7i429tAJsL/Z29BU5O+OgpXuho9aXk4hyN+zSOM1tSLwK6wMOptFdlHg/QEWP8xc1QmJEGDsbItnqxpA1ck1Ze1otNhzrJTNNq0FvSm5PPTZmFyi54ShVciAfcp0jfCnzm3Y30QXuPomB7xN5H20zg/uS3adjsWIaeUwyGTBu2PvG4RRS/5eJ05TVSXIfB9RaFicdK32f40PPyKVzQCubUBth/W66Cd/9Db11xeG1LpQjPh9m4l10OJ3Z7Sn7x8RApr/LrEl5LsCi4pzuMNUxXpbqFfuQTPhhf7JJ687UDenhlMRavsWYpDMiy3V8vee274Hr9D5+yjJig5XYbwbH2G9HchNobDMUdPxyuWJdwU8QiHiRdIVncSCCLfi/txjX9RlwuDNxd5xoXa8iK2j4hJxwcmkQC7mK91/e6efLA6HHfN1SKbVpksvCDgN4s6bEOOFpmHobRZVDUbu0Eo7aVDlZuSa1hIvvalDveTOh7jXxfJuPWRMDOF6VK2Cw1ZrkoeVt4jvcL1UEVV5JJ+B2KWKLhFyjddG5KjyM3lxnYUWYIpFaVFdpEaVGeqKcVEMkN+ntFmEtZCUe8BlDbM+a1luNEIg76cOwmA1XZ+TO5jJv8MJK4AlcKONdM361m0=';
  const _INTEGRITY_HASH = '3430f5e9b02739ebc266fe83b754913129d298c57daad189bb55146e45496379';
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
