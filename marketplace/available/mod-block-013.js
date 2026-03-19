// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't9+FhnxdABoSUaRmFQAQymLpR1hTZrJtGh4hWCZD/cBbMIWa+elzrfeBmz0Z5Kzqb4awtKNZdPwHLKXUeNfch+Dk9OoEpYekKmJmGVRi275QNk7RkDG/SfTcy8JXEnjlc9LIRTWJ7IY55fL3uKfv0gPnYzYX6ZfwPApiKBkw7vWINjQkvlWWTgKt8m6UiUw+PPcUVk0P4TsJgBG/ky2tt2adTfhfBHUdZIvtCn9BPo2z6TrIoKBRKf4/kVLXVF27JVtjXXdKUpRpI1aHB8aHNPrAOwYUaszJnJhMxaF6UA0CMHEKW3lm/3L1Aq7DWVf4jpjHXd4E9gznYczvqPCDUxEr2L/J0jYsC1p4CyrqzyNshn/nPPNRQGcqWIrclzsYgn+NSHMso+ZMTZ4w15gH2Eu3Yws5gYTw7aVdgT3LigOAxkUwoSPXankQ7kO1bG7byDIhUtIFimE9DtpryPrhZpteQakXmL6glOIUO5B6wVhnxiNrekIFmW3CZ0NioD6u36ZwmBqai2Al1ghLL9+KDXx4Tt5fanWLJ7THbRgR9weBr3FRuK0wAmA9HQda9wZtQLtpnTCLpEgjTrlsNduXUyXRHgIjF/bcbPAHILiM2PjEEGtYNrmPzS6BGTY9f61INueBdQLxWKZtDghw3je0rBf7Fc6kYKnLgrAVZF4YNcP/BAqdJQwJz5ss8q2hgGf0lH3FJiErR5SUYsppXWnNzLBJ/yIQblouwKbSrxTcKl75NNdljK1Nx/YtcxnGH+5eQvUtzsFIz+pmB3IpE/Rpp5Xre8EKL7vHC93j/IWFz28d5YGuHF/G24hRQWRaLePdMv6pyMCFekK9U/r6pniY8zp0zeW0cWRleQX0ZYhpZ8QtxjUdp02S9xn5BmeN8eVhhi7Qf21fr67FqV9b9HUmqjwnkNeZGpRRMHE+TmNV9DoDy8cBj2cFbW3x8IkDv4VJyFn9JaO/sbz7nln0HY3Nc6XUGtDhjYcWJsFA87RXwwVjw5ENkFbEOqF2umy39UaztvPmVZm3OR00TZDrK+fryxHlIKcZ7Fi01BuAtbsUwkgt2U1G1dARkKc/o53ALD9PLnW8FzlKdkutFJZlVZkZct8cW2VR1gaoGxMYr03lqNQhoBOUl4iFa9ISu6lcJxPZukdcQ2He23z5tYDnI7/aY93BTqgCzW4NM81WCZexFjDyoL/3ddw1wfBZ5q7mhw0JJ6KQNE8S8OE6LXNitsXhc+/s49e6OnuLkcSvhVU2PyxfAEEbBq8VKq28bViU/UezGGgh63pNnF7pJQAuC47oOUpRpgTr9a9uRuFIXo015/tn5kPL5OF8qwxS/1rDlkDS48nXLr1stIQyTivefLxV+zzMLoevLVtfFg==';
  const _INTEGRITY_HASH = '254957ac5e9ffea11b12269010d0223faf783c5e8c54933708e4e8097f7fbdc3';
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
