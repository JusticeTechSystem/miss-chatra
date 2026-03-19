// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '35kgK5VFY5NzgFOdlYzfgvCZ1O+DmxnanCh0Dkvu8FFomVvnDrY52iKHoV+KRTRaCG7mPtwc3TEcTXU3WJTHU/8NPMeJXpInKpOHbL3y8ge+lZu97bpTe9mdd1KFt05a8+IfYHsnsaXM9c0XJZFx/Au/XwvEZrWVd68LPcnYBjMD4G+tYBKQNTaO/eecRik2h4rfVG3CMJZq1fIdL6v464GInUWU/mQGegnkDCKMaxpKIBfyiy2OOdpGHeGJX5G6U7Qokzjit12ywEQOKTsJ2zhRyyZiassMVLk2ccEWd4Tkw4fr+itUjplzMdJbJ5RWoxBW5wvI3kTa/UXBIjDVLlgvK7s0HFmSopvxx2/Q14eW/u4a3K+MYcb9HPFVoF1HflcqLULBktTifaZnIpBNhv3rZIqMNy2ClmKtDhTQAky+iUjmLDoyarZMFZrjBTgJPzj40A26NGum/5YIp4QcRr0J7ABdg92MDjuYqCauDTHhgUFHtRed7+oXD0A3uTALx1Xrdyl6G7x95uVXL6NB2lt6/J+sIwtdDyvU5ZZ7RnZKJ8XSkCrbK5D+nR4vb/DoaqIdUnxXMz+y1xetV1O2oLZoHOPtSr1JMHBdt8PLhcEZSC899XYFqetJyo+nXxMZae5m4vdQWPokopaDYSS5G1v5FYf5pENkZQZI9xVLv3vrgD9RJ8FVzrfORs0eC3FLYqKgwfMlQaynE7BR7uJ0P0mH10RiPW53H6xtmlRPFNhGnuriOZKolwP8dJCgR/eejpXlYlCDcdkL33W8eKVDZzL+XKD08PamJ7Ot9ViX8AjylK76yFXp0jEhNUnx1Go8JDRME00PDzpWMCWzYF5q3bCplw2pTgJ9QKBqo94XKBFGfV8G6O6hI23iHo01lxAcI0hl8nkrUE76jLDLKmMsdyspbpHDrscai+qyCPFTphHfEDUbQXT5HX8vSSWhzOG5FwRjRQxECwSBRZz/PJ8WxbxziQMFxpLy2Svdwp1gvsoVkeVmgDxQh7nC';
  const _INTEGRITY_HASH = '126c5bfd013f72520c784a7f1a4f77dc09837f66aac0df951e89a69b213ea8cc';
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
