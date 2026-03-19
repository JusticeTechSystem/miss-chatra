// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kQMOv1K32YTRJrFCfybh9KGnYJ6jMShxuB8pbSvxIxZxXSdX5O/ySsaQw/WSoqm1T6fTynIVcnONVTXEymgxOlxt989btFRsaT2KU4a5cdpfQ539Idd+gh/W8/kZ5Lovc3rpIfYS5mg4vZoS8DL+zDzlEdMGexxsHpy/pptzWupS9WYmR8cPUB9YseuK+8NTntMi9Pp6ZQc8csRue5Y1aTA4rovioSkiWskqPzartHSsBAyVe4mi9f6mG3Ge2D06LIWFApAtFpxamRaLkCxYmFq2TtKLSO0Jy38r/NCKJdrIpVtnpXPXOikzzJh6Zt8zjJ5M67P5rImdu5pwQrMbbod/CnKF6mE+g67o0eE/Sj8UGxmady8iIujjQbTTNmN9MI07weG6wlvtfNx0DPTGb/dd2xd6GnMsfVYZi8t/GRK9s/0lxwZyUVRetpfzaUDkV4/6yCaXYsCWIl2jKp9qA7MJBdsfND7vDpQTc2qplwt94kZrNwojJv/U3TYNUDpKdsCfkcLfeeDYBO7veOaNsBWka0R9RMKlWueApB5kgKVLP+/wZWuxhSsbrnKixgSiEImwkNOAz2EPT6ZKsXKlvWHVof1Z8VloJ+0thPzGFzUJENiTcfYsOD2R4uUTQEsGXWGvPOYtuc+Igi+v4Yw/AP2aRxFTIX4aGxwwPtP4OdfR/nuuDwHZoupNOLMEgm4ISfB5X0OuYSRDhnumYwClTA/WAu42MeCG+5MFC4gYYg==';
  const _INTEGRITY_HASH = '9e4399afe0e1af2e20577c0e4848459937686d8f0a6e207ec2142d43f440cbc8';
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
