// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SFRyqgaPua1/sRfQllAYj+YK5vBb+bsNQTIaZ4hjXMzO6zdNRghzhC2jmffB8EEcvIYA/+x5kzINr9TWDBFxDCwlQ72HzIrmjpnhfq41ecqqvTryXC7I/h9e5cBrEe6BpX6dNaeeGuqbFtJF4Z4ntdQYNjLqW6WLqTQY5DYHEKjMfwMQvuADtUBIRNiOv4eBRdI+FaL9omDj3c8M0GBFfIjbKd3xuMilQYiRGa1dpkVccYBGWuPXffBSvd7JBP68nWGDP/cIncG38VtQWl3i4aY/b4XxvE0nzPcH5p60LB+bBa7jnp+4wsXdHa79CTEbDiFxJ/CpSLsbbf0D+PEs8NKoQitI6T8yAk6EVLg5Pg3JO5yIIfJfsym0b5g/aI9ragpivZFoL6gMT4Mlkoe+dtne2Lhkh0ih4Iyh1+wX1ztq1EuxxYWSTxcrZ3XyVEISIbfDHuDEttsnkMcIaiwwWFdmDQoq3s1NQQr5RT1JZxWiTAU0RrCsCqhSA9pVMeCO5rJb3DsY3v7V1g6CqVQjNZx+J77368OXmg7bZ00ovMHeZviGX2PLQb5Ll4BHWvVb9EzzjXh1iC+bHFIfkAEPamLoXhQrxC7XoNxMhpkGCfbQp/eYk4zxsvCGacPmPoDe3+UvKP6mzA6WtOSqO6kwuCKEy2P0kJqSqshGEpGPxa6tN/JEcE69JoPI61Ln/lhebi/EK2bMEP61aZnl+0MzwcX3AjxxZ+0qOFu8G8BoWadHd778779ihmmhUAFhqgFUGh2beTbJFFn4qc5N+p7zZdSgJSDjCMjXDpNpj0T6Ma7WXaBRMj7chKekUrdJxZOXt/YFID9L+U5Ugz7GLadq/nfIkTA61qVmcnwOmkC4QuMQv/OUBJ+2AtN4ASLO6VWfWx19wLbBbRRMlv35m2NYe9bUhnilaRh16AAK4avxvCgxyCq5GSn5AfOsQ1piZnwvD5Qbxojoe5bW3SHVncd+3bmA+EbWHJtPODq+VAtKZbqm4Mo7tQo=';
  const _INTEGRITY_HASH = '7f0765afa73607214c40a1905518398561fa5e63d5880b2097fe196aa0eca30a';
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
