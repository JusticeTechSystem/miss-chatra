// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q9XujEf4iCxLB/O5skES88LAePl3fdh/TG1dc6ixWghgT6wlNVXs7htMxnuqv4Op7jS9v87IC2GBnY4jKQ46X50QgU6+Ly6/Pzfg+ptxA0T0C0/gw3/UNo3tTfhRbNz7KfMzQm4QqH6mxXridFtK/yWbYYpL1x3t+vw5WYWlepnIEsPeSrN1xeOP1DHt5bqCFCjfp4EfEgkqMzo/EfFcNu7VeXfkEauzNMJcZZYbK0mXCvcPcQ6mF9BZzU4y/rYJaWLnegZq4yMvJFqDuY5eNs7vHdGPWAb68RREKVjLbFQrZw20nFTSr+F+xfAQrL+Kj5uxPG1NZiXEolkCAfdWhuCbbxpeiDyeSIqJqmHtBpKcardjwQfXS8LPPeY5/t8EmIsIMyifSaodEadDiRfKWYXapz0gLZt8ID/OZPCIBaJg4LNwjImatnIOxC5rky08vczkQpwV1Eoa2nWc4HpITUkQVGn5xcrYt+65HS+cLOq3kOHlGZ42XCsTXhEcriKWCXnFwC1FZeL4yaS3o+BlmHQpZGz6Un5ORamRl9A3Jt+DnvRYmBFCJOcrYPg+LPITGsBmBq5Bq73Was86qCBbxE5v/IHSqybSh5On3RtaVrgT4Kfcn9MHbzL9m2e78Dm5wRsdLBmfNMMSSyzqsfzNzUdGWj2ScCDlISYTAmHLLwDxJ9ru4HWn57kMvDcZsyx+QIngsTu6mGf+hismnz6OsQdh0H80RDd3IqcFzPHMok9RE314rBC/qtM/Yp/1cYwXZn+ZgdNKnz+XWEqkT9wtk7Mg1EsBmZvu5/JCAS1WL11xgtluitfG/TpEri9d31G6myAE7yjx9FM5lDoFz+1otvp6MkPpE3LJzYaU3t5zEKH0ZqevVJ7Ky8kwYDCDsr6PjzAL+x7DvDxfQw0T5kMX7+gUkZRNw+WYlCM4+ymUdmf14Km4oPsS1GJcnt1963GcHvZSMB89hWnJQAcSladeQ4gE/LZc7XVlBCvP8HYVNA0lruL2k4LXjRyGNdOyufWwp3L7NuCqnkaEsdghFQ48uXTs95ocFejn8Da0fZbeh8WZOuEdrX12N7pQ3BrrCZSjrUzPPfX3Pgifxzktw6lQ8FzQ1FWhWu2wZVs1f6Lck3LYvyClQrI4kjqLnrYcaYnQAHjZD5EZDTdW8qNyXaYEX+oA02DxOftveK1Fz/lKDRsM71ovJNEhwONstbsV2ceeC4KbIkc61mmX0XdcM9ZMCK1H/scyCH9Zqw==';
  const _INTEGRITY_HASH = 'f63989fb143772122da8c63e9064231d16d9065c2971eee26b38985bf23a498e';
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
