// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OjkcidPNJfk18cFQOoKQyh29PD3tMTv+8gJWucpWVShFZKZslYEz6yvD/DmZmSsN/V33aRGcJRxblLttsLci8vCfo/+XC8BICU27bELswCSqEwf6X9ch8I/VNFyH+Es05qzcCDqr/bQTqTkyn9deSMIrG5xXm5lXwFfSt4GQWoyPzQQxKrIBF2TQqeTXW8m0cKsPSYKqbkib7b42bbB0nHtKeJmsUauzpJ/qiov+gnbjrlaueIWQNoJqMHsXDTLEM5Cg+2l0GZ8ucyLCYQuDWUilCwmZjHDJMpn6TgPtkUNxpojg5YLQ8l9lCb2qDaIaFViGoNsBqVSUqyqTL4X2ePuKgOiAhKfhvXkq/mtSchlCqBDmWWUFtQsfDg4CJrC8k0UszaJQY0Y+1n1CZDeiynt7IMiATbfdINbeCPDsiOUtC7+UIRzG1kGV6HHdwS9avFOS3aAcx6tqk5I6bdkbSa3cjkGSJwSzw1S+ZdWS1dRJUDGFWHrnXueWk8gVW6PsubZfk3xw61VW2AmSsyOpTA83vLT2/7nuc2BRsfZzY+u3dJ9Zb6kU6cQTv6LtG3+8HYxRSN5jBfZQBOUPgSmVKpnezXQZgWNf3A53ohCvpvRbwHRqyU2fVHrL+r4ZtKUqBXgRSgLEnXiLh4m3Q45M9mQPKMIyfIP5X+9SKsjSu/pjnQOrxWSEE0XybWMnA3azBgTI2JBJ7/2yz/xqlm+mOxkb+fV1ZegSfA==';
  const _INTEGRITY_HASH = '49938f3f452ff1d5552d8fa43f228cba37d3382c0dfe83003ad60921f17a241e';
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
