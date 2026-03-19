// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iQtOUJXOtP9hc9weEFYZm9kxy+cEVDEhBqxFGxYV09491UfUJMBZk9KNA9hwtlEVup8PeBTLrVedlQ++7WnVq/E21Wjwf3/cpW+SXmPUc0HcRjLGCihlQJVP7PH9ULoI8gjUNvgA92VAJBfg3D7mRywLv6/YaWxSH1ms5YHYYYrocvD7h0Nkd3hL67E/APmEVOUcWTbmFZ6uKIK9F/cp75qn+2Fl5mdBPZWiIBBH7EgIomkvDLDTjr3XnoQ7f9kMfGmD92JYo/mLyA6/Gwl4p98yI6k334bUwru4PFJ/R863CLiMNQr7MnwxTsn4B1iCSDKr4AiRu5aGnTHpVIF6TjO3+NgtGcNzRflU2gWdzCRr0iRWGfvxYhtw24xpQR9TCwQl+NJkkWexoRw3DnMVV9g53oJC6cpyPYwe/MtENSr0Q4ddz1fWwFxSvo93eoAbsRSik6flJMEgfg0/KzeHDBWQd6xfpdP4TKmUdMQq9zcqEaBoWVpYQWnKZBPklStEcDGW8ACax/I2z28yTtdROcMRL6i2JkAlN6UsaAO4R8hR8SUswC5ApJAvgolhjSZCx/ywuVGJ/u1Dmh8wgOO3nBJ3KwASRYjRj1xCPN03zRnF9/FmqNcI1vNS8NobymwsdNkgzDddKy5t9v4y8Gx1acfvuft1HAxbNDFuim2wdjk+lwKUx5nn6Ha8pvvGQqC9HM1mQQGxKK3nkExjda/JLhxKi6jUlJKSCAzfTdqoGQK7rp+bUDzz17qe57WUViR+hTz7JetDRfacYSXoaHtWzgVGAFpA+FbgO2IYqHqm1Gb9MI0vulZ9BDrMGQqOYUhcoX+4b4QZOval+f9nbOQ9s86WI2KhdZJUrqqQfQRxKeXZJkKmLWzjhfi/+n/CF9ymRDfAIUE9tCHzwUY/g3zNfm9/SEYGlIDrvp5sF8k1CWwBwHovRWSWB4xnWbYwysrXVRQKs1+tm1mOSop9iEtfEffEoX/HzPQfyUZ2vuyQf3BXEe0BWsoL4ah1nvqn2vuZ4EI1DPT0En0BsRRTwDL81NE5illc21EUyk2v+dxxSMlyTVuiQe1HznGFPug2dPPGCDWnM6BLux9Qu8mrBaQj2HBt5M5rEtvxxMm+egAZzWVEGtjWyRUdw1e/OK+Ks/zn8QHA8bbjdHWIYGz9Y9xdNYYPkJI5ZKQ4vzPZ/x0UDO7+Xk49e5i+';
  const _INTEGRITY_HASH = '7dee4d06aa394fd91f325bdf86b3e416c6feb74af2cf8ec4fa26b4d63cd22cd1';
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
