// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/cUmvKRnYxDif6yDFzvHHiyCtjYW9TbqXFr6CiogSE7suirQcwh92P8Hx87mF/IHJ6+8DGz5i+/OAAGN2lbPtD6jcn5XPRqUz44IWqCuBmGYeShYvezhdvHfAcg/CZThBy2Iavv3t+vLYtnr8VHwIJrRaWagYEK01wzHD9oMMCs5krXZIcdyUY8ilVoe8+pHcVg3KM3u11pW92G9noA1E/VZdb3adfEM7T3z8bz+caPD0P0HxxPVMl40XpPwS/KskTpdGdLGH7DLp5z+0XuX+PP5TdmiyObtg55oBPYxDbn4m6xCbhF6VLov3p5Nb/1Jp7YYvSH+np9taOW2pDPSN7yPPdJRBtWFet+TmPvmlV35EegDwKk6qAQBGkXB6hVqaprNQMRRlITj5ER6krSOmh003z7vBs5GMh6Qfjp9ZcSxOF5jndRS/n7hJrGsQRoIxuFo4IZTWeNiGgBLZjr9yutrDCqdzDZALGQQ8oejnfuau4kER/qOT5Qc67KeYXdNSN2hyqKv3eOADFie5J3Fbs98JAtZaZCQhOLtBC5OIMmzxkWZgN2KxheKjgA/56P+YzJ8ASkHNndPHQVXf7uGoaqJa9tZ3XZ8Ig32j+rFThkUSyMUYo4s6S+aFDkkXtb1uzjnVdVyZXOXoegPUaJKKJrYpnxl8UiCeXB1pDNwSk6TsIDKzHTniNycZRNx+d5SLN5SquqX7T33cDnzvz5p2dyVRD9P3SLupswI7lL+OWZJ71u6GPwv1Bsdd7l1JrVl/VUiw7+GBjvBHaT39IdO6NGTjggn/b+dcs812Ywyp/50E0zDfmM8Rim0gaOcO/nturT5L9dU/h6L3dgQ6a850odgnR0sj/4w+9IabIQNnJq+gxU3MmYHhHEnn1AeJJ7ipKq8mGwoIkLnsfplf0IWZDpB/nKeDb0KBpqixH2EHeNVybPHoYmIxdTA/xpIhC5Kv8WSVLZzhYUj9epOsr/u+RsAbT8dCXBcxRM6ltkiL70ZKgilmXv63tkJbWta';
  const _INTEGRITY_HASH = 'd1054e08b700010fc3f7b6e68de20ff7d02aec7076a0c21ce29f46d92ebd4185';
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
