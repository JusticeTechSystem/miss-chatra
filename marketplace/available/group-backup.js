// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GpMRT9zrZE2atP0hsbBwwcgY3GZmh6TcJ5OYD4FU7ILj9zUVBp29rOPHESIkwb8/8AWvvOAa5k/X+2gcI7n5ppHgE0MB847M6f3O1vEMnzxH5qb0PK8MV6xedi/mq5s0hE8peIPpBHFbEoivwidJBLM7VTD8NNwd9LZFp23Y7MXNherR1+x9XUEkn5mGRSSt3QVe2k9EsXQR+tpywIqU4z+4OnankXkUA7lGWqRE7d/pFLoYlRDPzyYOTnAy2piFTVJ71KBOPZGojVExLQx5wXrtPoLiz32VxdHuAyo4WWFbeCVzSieRWzd+jlYPtWOXjX3Kw6YcYztJwP/0leo+sGp9NgAHdoyM/qONtgDtoy9Rf2mE8dWIbvLdHQuDsKXHaEJy+PeaafRIPTsJ5ABPqxFPnzq4GNckcqJAVTdm1LhcMF7coPhZF2oXIiLMjK2UdKhkAfYGtYy50emdHUt5DTjxmSU/lr2GzkfzvHX/A03uEtzRM+e9kidxwYpjkXnlWglAU1IZVGtX93iqQqyYEquWjuxTB6viwIwYVsRWBmLcdFdhUtO8ntOqXsAZm6Rhm35/gTgnDnbBt3kpffh1aCoGPRNRVqAmxmgq8LNED2WTZ0UUbrkInw1XKtIPGugZl8x+UKLYNFmRsATcpQNasJeCTVm5VK+8oF0WoHRAI9AJqwCDwii8ap34XZRp/u6h3i003v06iZb4R6m4lHTSCUroXURFfwsdeg7gPhWjrz16n53H8Q4Mn3WT6w+eMf3Kravj5eLioBzf67kSNBO8MYxpgWcBoIM6yxPzHoM3nkVP9qu1vQm672A6r7lUe6zPnZhzFZOuugObpK0AAlapqbGuw1Yy0jkX8zvKdMBiPV/SjJFdELD/T8dgbI0pyuBv3bCpoRWpGXRpp66ENm0/D/vnKWHoZw6iLHqqs+L3ts5frU5osczmKjKbhClQTc113mfxYiM5PLzTvMuuYulVEwWQlNmGHtCbcPAXtNSSnzBMxheBPktNa8F9Eu1RJvEw7ZzrCLtTGwVHCmnvkXxlL+oq3YTw1zl8bwhqdiTbRR6QxDZTop+A6L6e/fWDU/PVknKHrtJ87AhSkYROomtPEPyMd/6WS0Ix2NU87dcgQt76hW2su9HiLmb0GoTW8rs/DCuVYKCFQbe1fhnhL2bO8Bx8+kqs5jbyeDtSQPbZOUZeJQ+1LZPsopRJfK9jnWswoi64K4KzEw7LnzgIKKH0M6vcYRpGF7laALhrxQqgUG+OQeg1mdHMJSN71F6/60kiCjShlNup95yD8RnDTUKZaUrjVTl1YqWzxFTkqVbrHh9MJ0VgrA67PrKLSVaeJZT0tZKLmBGyOutlAaZRPHGdlTw6ZIH0y8WUwf6hazXKFGp4LY84zS870ZvHrxHx4xP9e08vXnc45tBxCpGV0Hwc4s4NO+4Odh0RGizAxvGHjpfPFj6oUxYt+MeHxqJqCjNOXRHMCjw9+tHgErIYSKqje1ceSevUfqnbTJghbua7TUXcYHh+LrtDTaxc1BkSkMFmgFHfvhJiS4kPTr5jl67xNQ2veFfxXyMX2x9OpS5LlwMEQn4taZos8R7gFH0tPy+Un92PRHYOXZ6Rlf2oGRZDXzNPHxSRXzzb8/CcHM8OUxU3FrCw4TV5LmCup72k4X8u4fEzuyjatcrsLZR7+slPNJ3hl7N3v37mPnjvPt8hGLpNnW7xeVH3zCU=';
  const _INTEGRITY_HASH = '3f8871f0fef00f0e44ceaf7204e97f1cf0cd248b2328b824f76b2b8bd3a99551';
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
