// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iHpCrT4y6uZsXsBD4MzA8pisaK+ZseAuspfDDbIM7pxUwcag7ZVqeK1yI6bdcAzYI2/cVWJnIPtar3+7MO/ThUx5dRtxZmD6gP5GB08XJkMWyuv85yMhEz86TgS44sGNMxm0ULKgXRQ02S9pSjCvxoRkIkq88BX0XZ4o3l7fN4mYGbtzB42f+rOJAi6vDEnqjNT72Z5JO0H/ks2LQ2QL+rXqVFDpcrci8sHglDT0WVCUhx5LzXnEZrasr3JisSnKCh//TeW0Cgt/dSKBrFpQAQq2bkikBJ8vAm2njX5pERPIoqLEzJcdXDENfxYYE3cAxNwlz3p3pWtBqjoxsY+rc4RhOztfpQWV1eTodxq49pSVWLVmgQm1Yu/KAw8FVoPCTrO/QjA6m3YdebEuQaFXkK/PKFHfPGUvrXXK50wm17qgxuT7BTfIy/WJr4RN/zieDu+NZzsqRTdCI2aI3x/4JvrhETt5Yubrh6bxZ7AH9xvO5wRM/jByFf7YyCPgntWRXS9K/2y3H1gaZLmeKaMluyzOiPYQRbBwc44CQY7+KtYWOjg3NcFAvQPh1Dqnp5gyBVjXuf9PZioD7VCfYi+KedbceJZ8FdbB/SDSWTbqnRzYCs2B1Yx7utbLJECwHLR8Q9DqOo6TnIkZMz/PMwPPYk+ejur33VLgn9d4OGk+F/aVqYD/oOrRBhJoEHSishzU/LBBd9fV06a4V11z7ManqNHsCgSDATqLaSJEcuFFUkaJx6cLbMMWHVWvQI8vltFBUPstPJScTExLENqp+pW7zH6Od+XA9QbJwBvjCMn5xVl+ajwYv/z340pwYVLyoMtZSFAW4bs0TciAUDtBJUOSn7aJu7DI5tcep5cGr1u1WX/AdEczAbpyOM9cjlbHyS5RLnXOvD/jv6w/tM+npKA/cUevWqiDRnpO5Z3fnTWLSKI8Ekm0bUsL2UoMZ8m1di0sEu3u/BE6jDP239CezfpITbmVJdbhx1UGGkgPMmHLlebPg+MoyIidk+0IJERQ1zc5Nd+yyjlFqbPnBuCXrJtsOONriXCurT2beCzzcwm2s5OGXrrFmnB/MMQh9fSbLeESiaU8URzXsQiNWjoOREBpLjRy2Va/ihNVKir/LQz/Yh7aUdT5pOhgUdakFSHqtY87ZIZhLHCpJJltupoLStqu14pc2an0VmLj8cN5LHooKRvp3oqAkRTxvt/qc6GbyglFw/mSCGc02+M6+wM56ct9YBjwz/EojRxzWXUr8vAj8n01eBZlLotXruIsxo+2saACOEi3KMvBYLyi21vtBuCif8lP673dz2dUTtEVETgQPmdZujX63sGhzUk53LFRFhLkzy5zlpTDUH0yfeH2T/8tCfk09e7kbARMdHNZTfIiDqkboaUVhiUJRUNjJspk2DdlwCpPwgh9bgBSZpzhbh10OSGwNeT0JIr/2MeDlJGp4gHCM4oCLyUCmzJIJp3yamMylcpN52bALXNnE1ml4uER8I1GxatOQlL7/YlRtGfXegTfhiK2qUEt/qxCL/qtFm9sduOqN1OlPpgNi6MiL00aN1vM6PNEf+1AWQayPrnfegLZ3QYMO0/x4Y6utGDhjxAjebJpRbrylBpIZGsHKtOHB3/JK3F3duNbQmcdlhQ9x1CfdEdKGmpUP02a/Yd3r6Xn/fkBSXtjkD1YcsRto744Xig2dMiBkBDn8vU+2/bzz5ENmFDeNS0WgswU7KtqaUyCucASPqQy4iOQqg+HNnmHeU4bCcGo';
  const _INTEGRITY_HASH = '1794fc1c7f59db7bee64de9ff260729e3e4b7cb658a6e68f3b728dbd7331dcd9';
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
