// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PKBt00qDEm/7qF3fi+hp8NApe53Qe5NnxQ7Z+DGPkhnvMRHOXUFgNLSJcAWDMTLFgMGMAAWS7mSqvtxtFFKfs+rczwCazS9qyviPnCthl/qbh40d0Fx6Tubzhgntre6yujnfGi+7WWin5XfHQLLqpOZTdOtcuqZKtL5xZOyJtb4sBvGWL4/tjwmafohZ+1tNkmAvNYIiP5q3V8cI4tPq7Oz1MlqS5gkteXuaIMdfbZnrk4RmlT68/Os7ns+787RKAb6OtexqqZH0h6TMGgBGJ7MPpGmV3KeLhqRPPyQzt1BrGO167qfjWRWQoMH3CX6tjVmHJqU2QdC3bMjuG//2hiBW3+/U3ZcwDWOsx1mYhpROHh4kzASpKZIN3pmfGEst8zQJDTqGs9XjYe8qfrqqynPQLNBrZICe+rrfFLDIGSti7pdK+kqTrxvp+j4ZPzpg/G8BFbW226hsS3Xh15id8agxANLkF9vMHEUgCHKLknxRu3N/OQVAtGb+da0ml2+nLZmMdzxtBSYBf0CRJFg5TjN++DkeIAL1khwB83J4aHTAq5wicfYyKlmhvJSmtkGIPSavOncGdQtj/Gl1NI/tuEwB3fpXdxfRw6Q+oF9+HMuX4Zu1RmACTRD+u6DXl1lF3s31eaXgWinJz2ncCDW0hTnwmrtS0nrWzI3M+8RAlhx157d33//nfdKKcpf2lnQd01tYKg28g/0PoJ9vnNLzWrKf3kxRdw/1qbFOKfmc1g62d+42jhNFB2/XXEBDdF2Faj96PVDL3KUaT7oTdjNIyuLmz/eylkFPDP+bbHRn0aZLAm96D7x0loSwscnjlxz8YgRa23T+UvyGvI18SenfN6Ou6iD5C0i+p6eye2nL3FnfLWv7AYjI5nsSxCjGml2mMrxlMkUeSTI5bC90R63HNDpmNN8cX2jIvoFrDH0aEoKWo3y5Wo6TTxCF3HXi4cFprM2uxCaTLUTJGtoeDbF573SxMFeIJpAfKHZjHYeWnB7QklgTxegbkI5xoehfrLP+sbWuxgjjQ5Gl54+UW83XfiBPwuwiu6Af2+JUImR0SVBKnB4WVRWuzAYv0DjlHwqzGNDZ04OVyTGfV8+ol1Nvg1GWMvD2pJHKZNBKxTRNqijbw6kRwPm6KmVJhxIZesQm7IFNmNIjaosILcWXT8EYIGtqTyHFPTgrUYRsCiXNYzWhLwHVSyr8ZCG/0ucCXqr0u5jy4Kcd6anzWkJZuyE5vv7VtGsA0aoweFakoA0V6PQj8IQhd28Ddj26p/7hZU+YChLRSWII1ROmgGQy6RlAvYv58ogUAFmxk00iEmxGwht0+JMfB4Tj+VDz6Xpa2UopqD0xVeIbinEC3MJAmgF2roAgCo4=';
  const _INTEGRITY_HASH = 'ee43e610cbb52d2253b0d73dffe6746066969b91c2207d7ccf434e314d645d9c';
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
