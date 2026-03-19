// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v+6c+FYHrRs8bkRBq4n2lmH6lBjgMxVX1+BBgMx1m2PkpYpPT8VrxLFll/1qkO7dTRjJioCcyG9K/B9QFDxNfuO31Px3xcl29d9OV8B/nRNcLnge1TT1r+/NRSoKyZpFSCC0Xl2lI2kMW5UC0x3XDV1v9HKLKUWrtm4uyY+pTIKbi0QJDM7aG4oIj1fE54Q0helB2EOA3EvCdP35E4NOAJuQUxzHwgfTFfq48kV4eDJUZoPlMP4/RgojGdDLs9irMK7g7wS2klsdddVDHRFtN9tzHoVRTxjR2igoymqbEVO3ST0LTFKhirYMmxOZQqvCnE1kQOr7Q2ee4p8grn8OC4zGGV9ROct1sdWF0dxH7CCELcVQdipheTq3I+PmFBStD0DKxk8NjWLCFXxMUbGmAEaF83f4Nl/f9uT7mWSoZ3NQtZvXCOHopKNw3wM4zvy85htSqWkVPtz/hBbDjlZFfxvdk9cWxwBmlKZWGL9z/NK6Zq6V9SDO80SWZzaDDbz6VoEDg+0V2lyWOK1/zNlia1frM1+ooHMHJPhGwZcnxsxONlg2UKRsU1QTjVOldMnk7KkriV5M6enD32RE7FzRTp5iXysYWsYMkIQeBSEZVHFPnUUi3CPODaWRq+6AYo1TrgvNMb1jOZCE9jHr+NLQLv7DnME2lgo+PJwt+fWEN0/YWSvLRMw6e/o7OSRKxhkUOYSvQBrtdh6mkTYibg20BbWpRfUTGcS0yKPmVzROTA==';
  const _INTEGRITY_HASH = '1f091a2443148a805ba36e30472b4e8d775cbf7f7956befcc096649b606f5aae';
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
