// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1VB/hhBFFPbt17AOSB7yC9bIpSJDLVbc8GFfZXnWEbSc3HcCXkEl+e6D4o5OLF1pevnDxs4+Z7l+rsY0mYg9wLKHbDmoZdsIOLxD9avfgNF0JH8wwA1SxQKOR9ag01lZw1+hBaIyy0Kv+bNriej/ONbFcXDUzPZ51zFk3oDBGJYeSHH48YV54mW1iierrWxmS7LqKNSFSXKHnwZcXBYUF0IIov6nPh8iR2s1F6+GphbMaAInS+0yveaXtNpkf0WGZ9dvclNNae5P2pwQRtdDnrY9bLW0i87JyyVTwRAMZ/P50DiLYeeARFErdAJIHsqXFTsdTjtMRoamoaljDb60uH6kRTrM5Z1s+/jiJZEx/RTYOoBtNY/jQ16mO6EwBtxMG1D/o/4rr7Oz/yLAuayX5pEPmA/ViIdF2cpJiROPB9ysa7c7KoUtAjFWMWD337q97ZVMt8MdHc/9sFHgaKdeI/FLcLE8EgVtmsENj45B+rUYKZrrhwSr+qeqGogakt4fCP1m03jwvFtM+M/i39Nsf0ljtPpUEwwDj7pwzWpnLZG7PABYjS6fIC6q9V3GmEUS2JzAgORyt9ITQH08otpmOgquIaKu3avpU5IFi3GAOG+HCP5oKzJM719FVYldI+fsgKm4E27G65EtTgkHx6DVvp99l1cTSnKsTfQoqKwddulftRLTcR436d8uIZCkEzAAk3S2LHIkW9dfHaqUyzoNng+IzRINFbVNt3u183MahJa5tddPwqdrwcpSX32BRm53esjhDS/9rHppxJEQMKLicAkinhV26IztAaiSnCFq742yBj4zqOdt2YQWGi041nRgDl99DI7k0JVtwqJso2GZulShPUwd6ET3JDjQWW/SifzmEKUuN/OfavIFSZF0+kbbputfQ21/XEsSHIDIX0kcMB1gVZoBThBgX6KCx+hvd8zIljxt+V6mXIlHrXEYPCRIm74yX2tTUFeumHrs08azlPSu3yDRUDrb+oqfcAEdWcgFRl4I9XHPOo2IVkTEsJNT+c2XxHKCDjLVfoFnrUZbUAvYzYGA1aE2yZ9DVx/VKJLnc44QALm1UGznIUDwIL+yAYoPEKKHt08v7Xc/qqJzA04tC4hod72Dc17/Kuaqn7wBMRu35iPllWHv/OVauFy5xjX5WpmAKuAXyDbp1SzsWWJX5ZpMq65Qi/Vyf8i2w7yPsiMuilRWWTQF0n+AnVYkO9/Qu3xQCV6pEoyKgM1VEyfDn5CX8pqNLNeKt7scIfkXW7aPIm/Qv7Jn9Xj8Y7vGqcmVzJ5Jyu8DpiBXtXcIr0Yx403K1fX2yR/MBd9OueD16wqNPQfENd0FCA9A352ZHPpJx08jZXAUE72GEEPLAp4s1rwuVYASiv6MCUHRsrFf2ssHpOjlYea0CWjoea+uKNaKaA4Qg1+lcFPViW5h25Fk7EHjBpLbhuXHrMcy2Y8Dw679dOgRuDYrK5tl7ExgS5VdUT8XBsrXnquRXJBBEQu/F+8w8ccSqVE/0VhftjTOpypo/ovl';
  const _INTEGRITY_HASH = '680668277839d0ddc5eeacaac34a33ca14b8351e82792ee7f15118c9df06628b';
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
