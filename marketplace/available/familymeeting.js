// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D/bJRewR5YY1wmlMe540GMeS2bwE0QbJKiTTkUty671oqXve8CUSlrK/Way/EiomJrc3q3JB5RWLbkc9JcREDRneYg4H1pCsYsLywUMZZwia9GVg9EZ+Ck0PVRHWr55UtPuOnTnzeXd8MBb6hdhD+0vIZoltmW0iSGbJF0b01/AFWgv9atcvHcSJQPs+0aF2yGFApNFqtWVrzIvknWnHIeEnnyhUTpIQVWgcKaZUOxa0Rq5r6JoQO1+aAmN5ue66Wyfu1F8UySgi+H/Ku7HaJGHBeGQLDoo2ylhjFeA7idRRR+29CoBVzLYWRnBKtgQR3PzevJ/+ZRAmgdRzw/JzBsyI3jnrgOYeE4AVuOuQPbalnb6d7gwmsjzBG+WunsH0PNchgt2YI9yWxY6td4fPCC+jR1K8V9pgfxW14tpewmDFUvm7Cc2BUg89gO4nXaZpw/CSXp93LaHYKApBBIYTrnLy2mhAiphgPh1cuz8K05uEZ92iTy4Vq9kmcgvQEsxjEqzAz8N7NCKaWxGwfVXxkCdkZuXLiPEYxFVI1/Jyfo8ykeus8ZRFVLAk6utWYhVgEZPcu+JP6+9zhM/tSg1Hl3mXdMYeLQlnx1DgZdU87xAPOsENe/8BdQ/JdrPvSBVezt6ryaom3ph3Y3lEdRLKUGPVczsq+o8vPknDFWd/Zwjz1czrF6MsiHqWVWlOGSOobfl8YurCL1SDdzls2hXmjffzxTWhux1xclJrWy2Jmp7eDzpljnXb+gP8gaJPCQtg1LbHKu4E3BSdWdUugfRTryRB63uE9R9ytHqbMvghZ50qZPGdgB9xv+tNn+Vx4xaTYH1yCEgnuZHqPw5rA9sw+qQcoA5Fuy7tfio+R+TKZdMJL7GIKXYT7yZxmmRVMR5K5LaAX9aNefJ2XQ8UUF29jWrillOhOCaRghlh+idFWU36/bEvyoRPRqoURnxk6Nxf9O+Cm4qya5i2h9QXcP5VmGBjALl6CKfl+c5FX8KmucuLovs/jO8toBm6F6S8ykSfwW73vidKukluZ7VocDLKwLamxkU25oFVa+8APXqK3ENDzhdhsHNLhgmF0MZgIQOseaZubTc2zb/IWtJO9LwTko5MgNlzrfJf/71KWkw1p76x6hqf7dQyk0kMJdSHxoOl9d7YHE7fv9zR2RPaeX2bTpQsWpJeCUnGSdAg8UtnPFcFmiKCPzC8PrOPoNPdURWEAhAHY/KLdcaY9Q==';
  const _INTEGRITY_HASH = '70ed7e8beb50c628e09df632bfbcda4aff40796a17a0c8acaee3650be52fc3cc';
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
