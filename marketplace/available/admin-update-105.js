// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dUrAbxaPUMoRsvx0V9oP11CZJt/uoi4/Yeqd2C60X7CuiWDO09NTkyZeUOogyo8+Tnx4nW59Y6TlD2rtQHBxu78gwCDlhbURXZWlWT66PZLXuU1nqGn/vZ3rQ7rZUvC/XtHxt/RmkRS39GwxrgwkvhC5eyBYt/PswbzZ5jV1DBIJEkcGmWSo88O//y3HzlBjG7mFQxfPXY2H+rpPiu3up8mjkp2uBS3vk56o/r2+dFxxv/2JfkPMUCdTF36JjGPuefHAsoJugQdP9K5W7xY50u4l8JZB129olyHjWpnmreecnjIEgSxDrWUYRfuLIGnnxxdkD/hJhQmJ++60jZKyUN10vVQuT83dxdYdpF2lSjEGCjAnY7N6tOFxzbMWLgdb27PTCKsg8s+7mj5eQKz2qCX2UcWjysu3RIjfBW6xk1OqjZTVcykvbLX6NO7Yhnb8o9hCYIB9SGJQu0nYKltxlo9RFWhMMxaTmajP31Z+KhXDGvrJ4vzHzP/htdH3VQznmc1pxz/1dFCOFDF/K4U96l6CSiszmLRpuZTGWjfEevKzhQ5bibhyPXrqJY6WbUqmldsdfLlJD2EXKHLBr1LSjltYrtbQTRJCBgM7SOkQdlaGYqrp2xXViaKRjrZieyFcNqJ4YH15rXiaZd46G/8xP7f1Aru/ojGELbcN3AxfTCoIN2HR+8Xn213bCxGOgE6hAhUy1tsj2cGZNrafMVB6ekJ/1VyvbUXvBE4fZmkXbT7XArP2bKsNN8Xw9aldxRgcmPYXiEw/VGFM6SZ8x1SxJ5lp+hx42xIjgACeP/ThmcJhHY/d/xT1wAIHpYSSHGuoABiRb2ahpeBzNrQp+aSVWnyxmsmovmSBvSOtp/RNFYGE/TOBQat6hPlCmkCAuuNLFVuWtxVgKPk79iyFC+LETniPoJnRCXqiEFV+7kT3HRdcAbYABVqCgjHHBlo0ZjK7k6SKzUafpn14h6ANoOiXtNAg/gX6280LJf19cjnCdbkT3k4Uf6zxVqKr45F+AF/Jog==';
  const _INTEGRITY_HASH = '0f3f596f13e8883f37c395f933c19d8ff34f7971412290c5c2f4ae386622f17b';
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
