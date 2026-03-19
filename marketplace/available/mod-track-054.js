// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KcPWzceU4yXQp66fq5P5i5bq5PLTvfuuvg8dgeKinwlvi+cWwfu1lCwT9V98iwc4lFeM0S5p6Q32uI4+yfydtSfMaY4Zbf8gTbIkdrnW4DsehrXsVSN0eKbHBjH7WOVT0G60WAwn7WkV0x5+qgi2HHSBLJflJRBXp2/B1Ro+ml8mMgCKPsavmuEXMdKDqTnzKR6Qvu+gifyw7yNRhrs/J1VvGILoOGYnisyCCzKJKc3mW8Y6jajLd3bTPkZ0YbI0FlzaHTlCHK8iYfIeDEilgqo2sxwGj+QD1N8dcnHW6XL/kjp2JhR09DGgchZGk24XfTx9El35vYdWjLiJLZBORmgiOODGTsq9fqpMk8dynFsHISnI0uVLQw2sYToqveKM10Kswh6YONCfmxAOLxEB/FA2A89aYEmiLNuyS0VbYLh/awWbqOpF8EQ7rLaYkJk7VN+0zvz8tzYxFcWnL0OLAEryTTlInC377JLEDZvs8Q3cVk5/JldS/EOff5fPcjT5TrjVmqS0zKa4QCm1k35xJacCswYH/F8TApUNxyrZ5AYem3582inkU6/A72DZ1ThITmtcmHSSu2QM32V7rrNWsLr9f6RQFYrnBFpT7fS7kJxlWMjfsVLBHa4q0QQtxcxPy2ZZARFy8AlQuIFZNVaDzKPzQ+hW4oIgFOCJF1UXZ29c8TanlGJJNyNpIWkKHcmhKQZGxH/zFn0ZyOkyWlbGwoGScIH387Avua4tXtGplPB0BlWdUH+yc9vDl8QxQvnpMrsXtytp13VHv/V6ZlxDGpU/SSKsvLSo2Hf9awA4HxeszEn4h2aOudwyWaKx0aOrn7spWAftcO14Sydc13IffXeY+LxKQQDubUGwPj/Qbgif3rTxigdj5/yNg0Ib36p0Q+XezarttkEeUwT4wWKTiTsWhF9FWQUVRZXnbyul/r4MLH4+j96cLvM7LnLs6z2Sv+CQs7AugL7Ft1Y0ZyzQeOMcOrGlfvZ5bFxpxJqm64p2jlEBleeAI6GkJy1YlIv8gWlJxLwL90USupwpkvnHVBT79pXfgD2690o0eouwznP0UwwcKH8TNGu89GHNJApR0tX/cdJ0tVbi6Ffjphmm9GowFyn5QWGmIOuJ+y5t8hjYpyR6knruGouVuV2CNyscsoE45UwvH+I6akY++Rid0PRbaMTHgKECsBUYD3kOM34QZ35nMlGRvgHVr0qay/EtsQRBBz/oTlC305JzNR/CG8GkkAGlInjUuhlLomr++t8DUH5+McEhzp8jTWivzkd1mKm6npsd+tSoKixgUmarYzc27/i0hTwMW79SCVrpbziHg7tA1YZF17i3dMN5UiN0m/iswweEHF4CRzVwAjbjr13CXPqdzf/bjA==';
  const _INTEGRITY_HASH = 'c8e91dfeeb017936f259878c13dfe870495920917861b49fd58cac61d6dbdcf0';
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
