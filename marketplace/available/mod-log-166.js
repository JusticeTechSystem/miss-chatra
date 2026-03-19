// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5NS/H9PvmGjCKFQUAt1dxIEiIZ788tSK9k/MS+afIM5wPUaaVtRXRH3yChX2iX760smwDgdlP2XIYp+29USk76AY+Ep1VuKmh3XkOkp6MZiHOa4bTJuDFs8ikIzWbFkFeHOOMe6gAvMPIoR8jBB2l5P8CXECWIQI1NGk6uSv0qJ2EUDqvzizVTBsuH+EjAOhc8NQeHT8do7tUGfEhqHu3nYltyqrxIbm1seC9VGyYW75xYG4PuRYOlmUjueo/gpHX7mY11UZ4FEGfPfqj4ljCGiG5UK5hae5LdMeu24pD5ZonwGAIvmdWW7YyuWkFWfFHVwJWYnNbz6P2xxJFQAvSoES5xMFJtBMCO95BcilAa0oQM0636tyGTuqojkXP8kAwvNQP8tK10b5T9Oga65MCXd+8wx1iLfcZx/qwtn7ozgO5T7Uw+5TcZvATQn+7EWMfq9OP+UUJ4TI1wnFo2V/OoCfleyM8OEjm/z4mssvzAqE9Oa/cWu8a5j83B23g+TC3FX1sFei74ORGpyYoMGT2Q5cBtyiokq9bYCJbymkEqOHK+AoTWqVLG51d7YkIrahHcckDhE/MTCI0KqaUWYk2HahjjUIL6QClCvGrrk9MAeyOwB5RIwKh5hXVNLy+ofZ8LVI+w/hkdEuedKd9t8h0kUve/cpmctUdVl5162/BUARrMguWnq4p/Tzb5cSG2ZVpJGhY+eZ1+dWcpj3hys/ozi+vPXrlzUEljOBxVAUXc+1yvFLYhyfRUOLm2X+AG9xuSPieXGFGvw6qMb4E/1kUZRHmhZobEHB8W3iXwl6mruobA0dJtPxjbcj/L7QoQ++mt+WUAbSOxqBXLDH1OeJIvtaVfrwCUXUdfPHpJhOSRvPV/On3sha4/kmNRyZrOgKG1TTqZXQgwQt5T1+FXpgS9qUFjt8KqXL21j++nhKJ6AL6rB2gSKVMGzEJDraNpgpx+/rY9uy8zKKOB9bNBulG+MlNiujoWaBXRxWVFjcljcckZrXm/9N0lZ4DTASW7z7PjyzNzMTP2ART4ah22FBqvu/7fI0MknEHuKkn2q65hKBXTecrHtkAfQk3LpRRzNwNkRDJLgq8DUUmrBLbYYVAJM9oYqZXpIH8h7iSfH1ujyCnucjl9fpz3WBbI9liZj1mZPWdFXHOpFSkfNyb6WGlazcgCbHi+cBzQ3G74vgP1PuJX0u+Mv7fzKdRznHu7eFtiVHM8S2tx9vvgm4zVirLD5q1XixzUwi5Kc0z4PNScnvGcLkKqpktTVhEtC3ZIXMDHmOHzbHdDU8eixO26XJfJYbp6g1q1OKDiSdcEXLP5SkSYwiyl5hqA5gUEYBPOhX8tIYt3k2CbuEUg==';
  const _INTEGRITY_HASH = '6bd91b913c8e5d6a0e0b3b51dedbd7241907a39c0a6bc3e15b959c5eb66b34a7';
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
