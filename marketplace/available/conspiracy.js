// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'R8ki0K1WgcWFbVWgBdnbnXXSRX0IHUNI9LCXbvUdnb+hgMY9IiN99D8iPnBmFOkO7EL61GJDhMrRftsA8TqoGJhvsmcnSpxOPCFmYjJ8WK4X3jZ1kRgmC/EohkGGryWHA9oZ8uHXqAxsH2OQ67Gfs/vtnG7cSQ8la1zLSTmPZzlsB5hJRHO3QHI0SYzeQVEWMeS9OLrO0nHY6lTq7EAHJ62yXfgmvT5sOVS0pXnyGzSxuO/F0oHtevLp7y28RmhYqC4L3U1YIRUx7Mc8KyxGvy++0Seae6wu3Jjsl9B6Qx4OOTew4VAGfcEE9vFr07EvHTIGOSC8ic709Ucuslew5q++mkUxse8BsxmckTxJ8UOlY1I1120CjS1EaEZKGneo4ksBl2Cs9uBM6OrnCuc+Xqv97ecmzl7LbJoDxEmI2eBkEVT6u+Ct++PLjhQKr04WOT7Kd3bO/swpnd1lekKeAc9ha+oQqAyqj86mGAw6KD4JI8FcUSYnI7FYq3PPdxIJzBwDJnJ4yV3WOpwBFws1d1oXwq4Vo846cn3tQ3QLUzE0ZGj/c3SsEs/Zkzz5ZVgSn9Is64/jgPWd6+IMjxklZMjxBZ3rHKYWEYHnh9KGErtWzLCl3370uA3iQdQMxa41wnKBzi6EY/H2crNsT4XBGs7f2k9rns9TGYI/amMZu0eGj/Fw5nFQBamsFw/vVS+reSE0XkIamGMb40YsKSW1hDBwu20MWvRELDRXTGGTb09LLPx2goVDT3wMpRVyyh4fDxXRpyaNB4sN9whuq8PtLC6Bk3XIP81XCGPRQwgKRHLxNAy5VQAqpo5DRjvfPW5Id5mwdhngtpMssZEFE7/uDkHnNX5+JHaoA6OjuQT23Jd0uPLdm5yoKFGa8AiU3Xip/enJIXxy8Ez2zNqIp0YcfX02PC/2lwmdDsRs9/Aci+DDKXA/RZkDNF+PwQFiEtmamP7rFBbBNdhj+mSWH7Beuh9KNNJnF4rflzcv+ZB4W4x2y+CzaAYaANKp4f4Hasju3T/ekBIxLOI4vd1WkmtbSRCEEh2A/i/6wfP491G981jXdchTJf75q4xdPPdowgpgJnhaLJG7md7O1HeXpfYBCAC3PHXEAbcUjsRsZzjHu9yc7gjhLThRWeLgnY1OGzN/qOCF294pL38NUtjyb9nqZF05IikzeiJpyQgMut5srHj1tSbIfm2dGUXzsbZOA25oWCSGWQ==';
  const _INTEGRITY_HASH = '9fcbec23c4684b7b6d76d2a15140edaeda86bb3b92d46524663406f659f92f9b';
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
