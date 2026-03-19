// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '77slhC5eQN4bR3JtmINPmG0SiqBz5ne5A2GkMVLQJPvlh8KgCOx8cf1b29cLjbRK1/3H++F3VMxvWJuELOTqhzPjgkYULfaO+IBZwUY5vvjn/+albQnkosRrlEICUrhTpDs7c55084B8mp9rPl7Wlj0I8hdOUd9kWStcxwgzwA8P5uReYyptwI/TRD6Agv1DfBN9G2yGgY++w/x9KWb4GseyLc0HY3Tr4vCxUBdw7pwoCaPNh6ONL1BPLdO2I9OaAXdI2+4ZfzK3zeTo1dtFlMZkQYikiI9DUT891Yobr0jc3JfWZUygJrczhWwFp3r4DXvSz6soWzB1pw02KoCSHZ5zT8OZXKamMNd3rnNPjAou8PJ511QQEvDfwrc+ASYBuCtNGR9amZhQNgbVAXgKdEaCkG3iS4JpfGhk/0r+3SYhztJmxMAu/LAsdpNp7iZmipVLc+ANkeHWb9jIo36QWpuyuYV2gqxkYA8bJEmYuqicKCe/e4ZVobJotgnlGprkBjn9d4T0nzAhezd+PuRw2+xzwFHuaXVy5KZ9BC9jRTFainwRZhokEFZYsmsQFfPV7ZbirnN9sL81yPq9D77buWyoNZJ6otDowJT/OyVVSzfa5X7ofM5FNpoFK0NZ80slAuErPrLMR7Cc0ZJTcN52xnB6cOfjCHzNJQ6MvrWCFWBSvFqiAfDlaUfxTbD7krZGT2On/fPGcNwkrcaRrLB5byCzVRkJmt/nzZksWF5K3kCEjAAnfWniZUj1bkuyiWi8gi+Y8HjKxsfVcaGbTQxmKFVQAFp3sBSLAR6uHLgwARd1Q/Lq0hERoyPL9Lun+1Feaf0cfs1eG1UBhRI6/fxJEDeS5/4kkDy8bpHiFO2yHFEs1aqItMuZwmWalGIqEALT+HPrkZbBx0dBN/U+IJ48Tg00waNekiX8Y0WjJqROj7zd5P9pKiu1VvYgYIuUFU0YIUhp7hHOlaNiqlt4YVG+EQ6SB7hFjFpw8dtgZncy6B3PWUieA2WiEg7vOXhpwPjVjmIW1SbcyUgmM5hdYzNe6LMGdC8ov92xMl+a7nXMhcC8nbZBIrjX6uICLtl/3k9O/WsHwh0iQAKh7O5C8rLJfiFaMW4YRs3N9sT+mjsSzhlh3P2hjT0Iaqrcr7ng1NAF3M/yc+YWRBjs80PMP+vPNLKGcmwyQNt2/IUSGmprW6h4wQSZxOXtGmxnqMyfEMcWXQLpvwbTZJRog7Mg8XekS3mbCcVaNrgz0p7pqMp1eKQ5jHD6neh5YrL1gLFwUXFwHpgUIUTxmbvA5G7g7QMfK27TpJxuTq/CrcBLFgFn8q4hWV4uncoxmEZQWpPU6pDVO2t962nU6UJNDjTJ3dM8Q7xBhA4c01tljihsOe7NuKfKO38=';
  const _INTEGRITY_HASH = '3f4e0a93d736d94d53a0a73f35c24a7a5baf267db9a439c76d36f55767244b07';
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
