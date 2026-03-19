// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/6CD2krS48CEN2Fzkl1abOXZ1dinw+sFAbHI54ja/D9HBYBq/Lk7ZgdgoCd4TxlqvIgtFZS1nhJt0Z5Hx+W/vDPNbFSJ+HytolbzudYNdgZUP9KBRA4Ax1isr2B4n8Z64m9HQYOCsbgsrYejJLbSCs2Tk6d24p+bFLCvig62MfPkAk5SEkDkJQSbw8O06sGH6M6AQngaG/ksSOJWnxWytxCnbB7tGtHrj7iTFArXZ1QbEk05uHn+pMTxXRne7m3lhQYuAzFMuiithE8xjar66qk9fD/wF4N4GaA8kGSSLVjxeD/ZyLKqYPK+TnntJstdI9NmAdk6s+R9ru31GdStNRh9RGUoPWZTCyxXeMGrHHIVoxId1Eomo2Z9yBcpiuk417xosJlFfohohN6wsGjJ7rb/NTrJfaLsrnsvP6TVtLr36CbC1RFNapyqFx3ytHs1TlWL4ER3LFynZD0L0mCmpDRDyPTnjp4zHNgwA5RrhgXTy/Wti0Wa+VkFHXRDjh1P7FxLJDQYZ2LWIXDYn7L8s8titeg4fNdwrHLKtjt4lJPBZLu4s/Swv8NXS+Fn8kx104sVd70gLv0vBIQHsoY/mYhtHt/dzic9KNgh2sfqpzYIHBZ19tqfofhiIqjOd6/Xq7aTJyRPis1nZkG/x9i9oJ7b3G4QoAZGPOKU1vDc21ftXxa3uRxAUOt1SwcH5TNfWUPKEtnlpT4ysbKhLfRAllC7Lac=';
  const _INTEGRITY_HASH = '8075f7a21f44689ca5e5a4814c4de596e31aae805fccb60847875505c9856d16';
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
