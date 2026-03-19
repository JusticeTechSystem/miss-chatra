// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/NV7zZ8eu3nFJRI2JJjYH3SFWPnWDGIuHEpD0usv9DgtqKVL6KMxKtQm/XZ4xjl17d9XJjqQ8SA/EKTtavSJvxnFZk0OMZ49gGvsmGKN8sqCpB9jLscLfwoBmboK9tteR+XkYmXYPhjubcyewJJwH0NhC8uxN94Kv9n0mndl1b//x+3htdYHMyjOYQyhamwf9emcPWGMES3M0OnQBgbyChsL18Etc/jlMgnoStzkolDQrZmkvgWk+fknDC9mHeuxJw9J4PNF1tnj2ZiyHj3aeI35sytI6g3gd8l74j5pqDTrjqqb6/0cU+uHQ1tytDkj9pTuTCC8kFIS1tHucNStdavEDhZXaR3+Dt5xa8MJJWK4KLke4OkfMMPxCuXCBZqyq3z8ViEMmlmNekjW3L538YoexbsxbzHyaBahGJFggfSuhBbG2VOx0rCx5aNXttm4AW3GXaw9e0CaXkxrE/IhaiPShghd1BZmQxo54sGN80GzDYEkjHPZQWPm5UIDKRpo2DjOrtI90/uZxG7NCYCYw4WevZtxgvNnINoECXcP/Am+HVOU/hrfTHglX+BKq/ri08shqHaac5n3HBseCF+03SUTy9qi4F7PSVs8j0h9pF6jZ6qntCTdNMtfkaRQb0OjSCi94n7jHRgy29u8OzoZVgPnDRJsjBwkBMFt++FSmhFKnSxZEmpOfN5RkBvQ7vKaaKWuY7CHmd80NVC83yQZUP8tD298tJ8iM+WcuTMLaxkgSyp4R3QpUTk81wEKFbmjcOKN0Lcoj28V6yLBEggluLFeyTJxIPyNiLawOvg+GKcAH614UMsc6KEjRSpHr+l1P4ZK5zdpxG8VOAUoJYs6NVEyjUt7sprlVYqcaU4xQp46vlMzV+U8geIorY0SHNN63+1nXiPk9Oh5V0LV7UQbZyITgivVORJWO56z6C1C+/sJwFes+AE7dNlW/urmLDGIrzgAyTeBfY/jrXG/z8/87TUgoLnfm5xWxh3mO00BHF6XV72wX7Apf2aPFG79gi233VIKKAB1KdBacCMIfs+QG1tSUARvqOBuu2LT5hyxvd0xilWpGPJDcJntUsxOOpkxRkB//5gZUbTs5ySQ7X7kukPLqpCxM9uk5EXIPvRE3PhvZ+UPxqYmzhMfXQ+hXYegJgtlS1pRtVdsB37YhRzIxM7DJKb0pViqUqIMfZNXM6Mp3fbGyj4HzGHEloE=';
  const _INTEGRITY_HASH = '6d4cc2ab467f6df3d18c80859e439dd8c9503ed746ede1fa0a51954e5770faa1';
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
