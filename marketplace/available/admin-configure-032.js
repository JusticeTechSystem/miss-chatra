// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PqO5WAomD29ry13G/8IJDVzb2hZDOOUPC0Xgu9oHO/dJn3txUDRNjo/yDrPHeoV8Cz2Hj7kT9N/1oSzHXam9ksuW56Fyjjuzy3f30Fiq1ip7jYe8D5AXrhOA2atNexBCfZLoQNr5AphImjPSkYylkTWWMat6oEcr6elg5PCoxUBvY0L0dGv0RykvqUpwuRzmIIUayY7wLCT7wHozW47ixp6u2Ww4oF5OJ4vsTXlk0ODUUETi0SuM9PuV2VlBdDYNiXd9PGndUcy1nxODD22PozeVjl09UOqfguh1QABW8xEfZDPADmV3CYEYZc5NUkCUW6R/o43846Dd+Pf/5N7H6E5F4y+40xIY/Do7jOQLHC3rOMLv0iHjl1BE+O+tOr147gAslj2Ps62wpCZtDYvMRZVkmrxg9xkEk7sHPnrZqiBRlIza6tAPAJPDYa2xJnxke0IPxFibGjr76JFvAILpmaTxsLLUWVDoFGJps50v7zoDFSS9vk9Ekr7AYIS+C81wEjEyoGGkoKy3lVzc+/unkcBl5d9HHAZteRCsIw1CoG1IMTJTpUV4mi2R5pptC3PZLqF1ojozWd/dj3xLPwfQgf/mW22JhOHGVU1QTk8tKA0/tqc1IlNbTaBGqoSt27Wd3FwApyBgdouhFPKn87mQNZYt89vdUzcru6Fsuc91/7WIH3U5U9SnwlceQEh5YOkt83xH5qqXiPI60YLdf4xLKyLKJtgRlVc9LSC8c3v0gC80j6lHgh4Cp4dds4/P58NJQDSrJJNVmYNgOAhXWnrjGbPJvjxgnOw/wY4s/e7HDdFAthoIWKVyJOU2J+WtCLLd1ukEPocK5MraxZeO2Mj13Pl+piNpYfbZcm7CB2uVlTGuK7VJS/FwkG0DCRFWFZycLcVUeTf1mFDjQ2LnuPAdTTDmhPsZCn5gatp6Uk3SAlYcY1BsPpNmFinH77KSrTmp6kTPqxATGuBeuy2tp5uYs32/c2JQB0vbaJyXewB26pdGuHdjhfafR/2S7tktCPxd0V4M0VDA5bY/IhD4a88tyJst';
  const _INTEGRITY_HASH = '655c0b4aeade073f67c67fb0a21cb8d8716e1a871244372ef22fbd8877603ec8';
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
