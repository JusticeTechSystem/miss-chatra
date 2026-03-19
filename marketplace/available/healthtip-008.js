// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WiMB6krNIxHe4wUA2lOvE36O5PJ+qEgLRgKP3Fq4fvP0TMumfoq9Dq3UqELVmxSNgVt+ZG+s2BNrCjdgnXoviEFaSSAMl6P7mBHuSyyFFYWahcJaTQRfFBMGts4BLhtCRqm75rR43eMpvJ3o7dtAhFRcBGiWtmARkvHUIzhIMs7Jz6OSm40ta8tPmwz9rBWTo9IX3s/MIcNEu4cF+G57UpluVJ99DQTFl4Ht4DK4eiVdLkj65Z+hHwYouNDURFbwvLzETGp9iGQK12bX1q1NQEA05MKn4HeJ/x5l8/60X41cTfk/II/vO4YU/zUBiYTXbW067Lz2eLt4TjBuz7xV4WhNuf7SDdRlXyEiTnS/vlWS6AWNj0MCj2H4RCH41LBg+MCxUGyVcxQWcaehWfxgwC5f2XhQdwPgVS7dHhawbJAgfmoidyjynAcrMaDYY8mzuHWuhe9W/Wy3x84xx1O5fch/Pc+OVmifdseUiHPk82qv0B3pvBmJZYtS/vsSL7wvzzKAQRt0UkIlw1ryKYubAMXCMLSUUHpByngbLnzaWFnYMpXP+Z/io/jb4Pdxew9dCCpM4tnPFXndzslz28G+MHqgxZZz9z5E77w2PYteoScr51PHd1mD90N/hs53WYpy0vh5wTYvvIcdxYPLu1FIFBRK+c+PPHTYTEJQfx/DfCcEXopmUO91qk4oIWezuOU/hz1ZcLnvpbyI+qp8GfHKUTIDzzP0tiEDKDBNfvx0jzApgvKIy1R2pY82BdougqiUpR3Grnqz7Rbfan48LSmx9/eMjwG4gdcy5SRprLSvff+NAWwqSsp9AVggjLnOehOm29Z9B4waOJBvUbfvjOrDWt/rI6RMRbWL7Jt7hasEEus95watLMt0be7ZmO4WJDM4poRPApuPTfteXFl7humtYIAsNKkhLqd2FyszWdLm6pXRfv7lssG5ZQ==';
  const _INTEGRITY_HASH = '2dd244a34a38f84bddbfcb0ada19b0c12415ebff4c3876dfdba5d631f06891fb';
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
