// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AP7iIj797b597+pd+dBpNDEjBxBHyfl6LvZDB/PBBoXY7SWjte+StYx208KkuimjRbEeeiMNcUYLZBtXO7xIpjaspfxMFEQrNRQxHrpgNxTGo58Iwn0k+i6t9zxdION6AVH0mPkJ38+/kxggp25fMNnO8/H5P1y+ALctgfVoqMrjAPSp+QEl3OZUAQyLh3SIhhoH41zM/gtsLMZNSaHS7JCLSry97rdW9+E2FON4tfcbPGyhSA98rhrbZeKPrhQvHoaGyALtZOeccthsOkhv8LvV8nUs4nbVpoXzcog3uKWa3vDRjJd8WfkR03Kz1SslgiJbpSeiWg0usqBd2D5FoBWeyYGYobSMLZy3BBi/6hIgreqNTpixgoODEQRS367H0xS+ljxgk88r5CHhZDoVM4Af2ieYqsbLxH5PuSlKD9rd7aWNPd3fzc879ckhhU85gzMIBoZNRNYZ8aejYN55ezgx6YBuqUXP19zjXlXxt4pxClMNLuyCqqwAzJQ6CIqtc1En4j08xnAOuWSzLculasrU524EpiMUxtFQxptN8kESAozYVwxtj6kOONl7lDjUym86NL3vIDh2MHRz4hU0AfmMVEgu3AY/TgjT4mw/UlN3jwktIy18hfcaQvhbDnnYMOrCOR8iXuFtBu7KmhW6S4wL5fqY9ZzN+l0broRP2rGfzSyPT7Q8j9zV+G3KxKDSv0Qx46cWX17RQwMecUGphIqS1+UFPXl/RB3jKwaZ7T6vPy9vV++wmju1alBMoib0xHb7SgbTSSTZtU6VCUyhmT3ozRqZGTQOpGeHYku7oxbCMBuRzfGJiwmUUWo+woeEVLnv/wZ5IjHVajvaWS2KYuLbWMG4Jtz7slzI9zVgDnHY1XTICRLB9/fjFryzp8T4HzNLotXpaUZhgN9QdqH06uFCmCZ9rprw7jIZpZ+Nr24PSwcuyiKpn4KgJFK4l0s6Eb0ZEBHdCoYFmjlKdNtT2BNZnsDWHlckpHNXMYJC9U5ZWkY=';
  const _INTEGRITY_HASH = '8888a3a03f33750ad6be90a035b2b6ff5fe86e7958101a32daf558e4b9eccf4f';
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
